#!/usr/bin/env python3
"""Build src/app/_data/historia/sre-examen-modelo.ts from the SRE
exam PDF and the curated category mapping.

For each numbered question (1..120) we collect:
  - the question text up to the first option (`a)`),
  - four option texts (`a)`, `b)`, `c)`, `d)`),
  - which option is bold (the answer key).

Then we apply OCR cleanups (the PDF was OCR'd and has a couple of
recurring artefacts: `eI` for `el`, `ll5` for `115`, etc.), look up
the category/subcategory/tags in `sre-mapping.json`, and emit a
TypeScript module that re-exports an array of `HistoriaEntry`.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path
from typing import Iterator

import fitz

ROOT = Path(__file__).resolve().parents[1]
PDF = Path(sys.argv[1] if len(sys.argv) > 1 else "/Users/yunior/workspace/examejemdc.pdf")
MAPPING = ROOT / "scripts" / "sre-mapping.json"
OUT = ROOT / "src" / "app" / "_data" / "historia" / "sre-examen-modelo.ts"


# ---------------------------------------------------------------------------
# Regex
# ---------------------------------------------------------------------------

OPTION_RE = re.compile(r"^\s*([a-eA-E])\)\s*$")
OPTION_INLINE_RE = re.compile(r"^\s*([a-eA-E])\)\s+")
# Require the next char after "<digit>." to be a letter or `¿`: this
# avoids matching things like the answer text "30." standing alone on
# its own line as the start of a new question.
QUESTION_START_RE = re.compile(r"^\s*(\d{1,3})\.\s+(?=[¿A-Za-zÁÉÍÓÚÑáéíóúñ])")


# OCR normalisations applied to the raw concatenated line text before
# any parsing. Order matters; we normalise question-number glitches
# first so the question regex can find them.
OCR_LINE_SUBS = [
    (re.compile(r"^(\s*)7\s+S\.(\s)"), r"\g<1>75.\g<2>"),
    (re.compile(r"^(\s*)ll(\d)\."), r"\g<1>11\g<2>."),
]


# OCR normalisations applied to the final text of questions and
# options. The PDF was OCR'd from a paper scan and has many recurring
# glyph confusions. Spelled-out word-level fixes are applied first,
# then targeted phrase fixes, then generic whitespace cleanups.
INLINE_OCR_SUBS = [
    # 1) Word-level OCR confusions. The OCR layer reads `c` as `e`
    # inside certain Spanish words. These are the ones that actually
    # appear in the exam.
    (re.compile(r"\bTeotihuaeán\b"), "Teotihuacán"),
    (re.compile(r"\bMaeehual\b"), "Macehual"),
    (re.compile(r"\bTuxtepee\b"), "Tuxtepec"),
    (re.compile(r"\bSeott\b"), "Scott"),
    (re.compile(r"\bTlateloleo\b"), "Tlatelolco"),
    (re.compile(r"\bMadraza\b"), "Madrazo"),
    (re.compile(r"\beomplementariedad\b"), "complementariedad"),
    (re.compile(r"\bloei\b"), "loci"),
    (re.compile(r"\bigualo\b"), "igual o"),
    (re.compile(r"\bVersal les\b"), "Versalles"),
    (re.compile(r"\bMIKT A\b"), "MIKTA"),
    (re.compile(r"\bE/llano\b"), "El llano"),
    # The PDF's "Cartero" is "Carter." with the trailing period read
    # as an 'o' glyph. Drop the spurious 'o' and re-attach the period
    # so the option ends as a proper sentence.
    (re.compile(r"\bCartero\b"), "Carter."),
    (re.compile(r"\bE~adonegociado~"), "Estado negociador"),
    (re.compile(r"\bGÓmez\b"), "Gómez"),
    (re.compile(r"\bcontenciosa:\sconsultiva"), "contenciosa; consultiva"),
    (re.compile(r"\bCNogales\b"), "(Nogales"),
    (re.compile(r"\bpreferencial es\b"), "preferenciales"),

    # 9) Insert a space after commas inside date lists where the OCR
    # consumed it ("1946,1980-1981,2002" -> "1946, 1980-1981, 2002").
    (re.compile(r"(\d{4}(?:-\d{4})?),(\d{4})"), r"\1, \2"),

    # 10) Normalise spaces around "/" used as separator inside option
    # text. The OCR is inconsistent ("Fox/Labastida/ Cárdenas"); we
    # collapse to a single style with no spaces on either side.
    (re.compile(r"\s*/\s*"), "/"),

    # 2) Roman-numeral / number glyph confusions.
    (re.compile(r"\bFrancisco 1\."), "Francisco I."),
    (re.compile(r"\bI ?969\b"), "1969"),
    (re.compile(r"\b29312011\b"), "293/2011"),
    (re.compile(r"\b2l\b"), "21"),
    (re.compile(r"\blNAI\b"), "INAI"),

    # 3) Capital-I / lowercase-l confusion at word boundaries.
    # "eI" -> "el " before a capital, "deI" -> "del " before a capital.
    (re.compile(r"\bdeI(?=[A-ZÁÉÍÓÚÑ])"), "del "),
    (re.compile(r"\beI(?=[A-ZÁÉÍÓÚÑ])"), "el "),
    (re.compile(r"\bAI(?=-[A-Z])"), "Al"),

    # 4) Split-word fixes: OCR inserts spaces inside compound words.
    (re.compile(r"\bpenal mente\b"), "penalmente"),

    # 5) Capitalisation fixes for proper nouns at start of answers.
    (re.compile(r"\bvicente Fox\b"), "Vicente Fox"),
    (re.compile(r"\bestado Islámico \(El\)"), "Estado Islámico (EI)"),
    (re.compile(r"\bEstado Islámico \(El\)"), "Estado Islámico (EI)"),
    (re.compile(r"\bel El\b"), "el EI"),  # "el EI" = ISIS abbreviation

    # 6) Comma where the OCR put a period inside a list ("X. Y. Z" or
    # "phrase. lo cual"). These targets are narrow enough to not
    # collide with sentence boundaries elsewhere.
    (re.compile(r"\bQuintana Roo\. Chiapas\. Campeche\b"),
     "Quintana Roo, Chiapas, Campeche"),
    (re.compile(r"\bfirma\. ratificación\b"), "firma, ratificación"),
    (re.compile(r"\bjefes de Estado\. jefes de Gobierno\b"),
     "jefes de Estado, jefes de Gobierno"),
    (re.compile(r"\bculpabilidad\. desarme\b"), "culpabilidad, desarme"),
    (re.compile(r"\binternacional\. el deterioro\b"),
     "internacional, el deterioro"),
    (re.compile(r"(externo|internacionales)\. lo cual"), r"\1, lo cual"),
    (re.compile(r" Y (\d{4})"), r" y \1"),  # "2002-2003 Y 2009-2010"

    # 7) Generic whitespace cleanup. Order: collapse first, then trim
    # spaces around punctuation, then unwrap parens.
    (re.compile(r"\s{2,}"), " "),
    (re.compile(r"\s+([.,;:])"), r"\1"),
    (re.compile(r"\(\s+"), "("),
    (re.compile(r"\s+\)"), ")"),

    # 8) Strip trailing page-number stamp ("... opción. 16") from the
    # very end of the option text. The PDF prints a page number at the
    # bottom of each page and PyMuPDF attaches it to the last span.
    (re.compile(r"\s+\d{1,2}\s*$"), ""),
]


def normalize_line(line_text: str) -> str:
    for pattern, repl in OCR_LINE_SUBS:
        line_text = pattern.sub(repl, line_text)
    return line_text


def clean_text(text: str) -> str:
    # Collapse runs of whitespace BEFORE applying word-level OCR
    # substitutions — the PDF often has double spaces between glyphs
    # and patterns like `Francisco\s+1\.` would otherwise miss matches
    # such as "Francisco  1.".
    text = re.sub(r"\s+", " ", text).strip()
    for pattern, repl in INLINE_OCR_SUBS:
        text = pattern.sub(repl, text)
    return text


def is_bold_font(name: str) -> bool:
    n = name.lower()
    return "bold" in n or "black" in n or "heavy" in n


# ---------------------------------------------------------------------------
# Line stream
# ---------------------------------------------------------------------------

Line = list[tuple[str, bool]]  # spans on this visual line


def iter_lines(pdf: Path) -> Iterator[Line]:
    """Yield each line of the PDF as a list of (text, bold) spans."""
    doc = fitz.open(pdf)
    for page in doc:
        pdict = page.get_text("dict")
        for block in pdict.get("blocks", []):
            for line in block.get("lines", []):
                spans = []
                for span in line.get("spans", []):
                    text = span.get("text", "")
                    if text:
                        spans.append((text, is_bold_font(span.get("font", ""))))
                if spans:
                    yield spans


# ---------------------------------------------------------------------------
# Parsing state machine
# ---------------------------------------------------------------------------


def parse(pdf: Path):
    """Return dict {question_no: {question, options, bold_letter}}."""
    questions: dict[int, dict] = {}
    current_q: int | None = None
    current_section: str | None = None  # "question" or option letter "a".."e"
    # For each option: list of (text_segment, bold) so we can compute
    # bold ratio later.
    buffer: dict[str, list[tuple[str, bool]]] = {}
    question_text: list[tuple[str, bool]] = []

    def finish_question():
        if current_q is None:
            return
        q_text = "".join(t for t, _ in question_text)
        opts: dict[str, str] = {}
        bold_ratio: dict[str, float] = {}
        for letter, segs in buffer.items():
            full = "".join(t for t, _ in segs)
            total = len(full.strip())
            bold = sum(len(t) for t, b in segs if b and t.strip())
            opts[letter] = full
            bold_ratio[letter] = (bold / total) if total else 0.0

        questions[current_q] = {
            "question": q_text,
            "options": opts,
            "bold_ratio": bold_ratio,
        }

    for line in iter_lines(PDF):
        raw = "".join(t for t, _ in line)
        text = normalize_line(raw)

        # Question start?
        m_q = QUESTION_START_RE.match(text)
        if m_q:
            finish_question()
            current_q = int(m_q.group(1))
            current_section = "question"
            buffer = {}
            question_text = []
            # Take whatever follows the "<n>. " prefix on this same
            # line as the start of the question text. We splice the
            # spans manually to preserve bold info.
            prefix_len = m_q.end()
            consumed = 0
            for t, b in line:
                if consumed + len(t) <= prefix_len:
                    consumed += len(t)
                    continue
                start = max(prefix_len - consumed, 0)
                question_text.append((t[start:], b))
                consumed += len(t)
            continue

        # Option start?
        m_opt = OPTION_INLINE_RE.match(text)
        opt_letter: str | None = None
        opt_prefix_len: int | None = None
        if m_opt:
            opt_letter = m_opt.group(1).lower()
            opt_prefix_len = m_opt.end()
        else:
            first_text = line[0][0].strip() if line else ""
            if OPTION_RE.match(first_text):
                opt_letter = first_text.strip().rstrip(")").lower()
                opt_prefix_len = len(line[0][0])

        if opt_letter:
            current_section = opt_letter
            buffer.setdefault(opt_letter, [])
            consumed = 0
            for t, b in line:
                if consumed + len(t) <= (opt_prefix_len or 0):
                    consumed += len(t)
                    continue
                start = max((opt_prefix_len or 0) - consumed, 0)
                buffer[opt_letter].append((t[start:], b))
                consumed += len(t)
            continue

        # Continuation of whatever we were collecting.
        if current_section == "question":
            for t, b in line:
                question_text.append((" " + t, b))
        elif current_section in {"a", "b", "c", "d", "e"}:
            for t, b in line:
                buffer[current_section].append((" " + t, b))
        # else: discard noise (page numbers, footers).

    finish_question()
    return questions


# ---------------------------------------------------------------------------
# Answer-key resolution and TS emission
# ---------------------------------------------------------------------------


def pick_answer(opts_ratio: dict[str, float]) -> str | None:
    if not opts_ratio:
        return None
    letter, ratio = max(opts_ratio.items(), key=lambda kv: kv[1])
    if ratio < 0.5:
        return None
    # OCR mis-read of "c)" as "e)" — only four real options exist.
    return "c" if letter == "e" else letter


def ts_string(s: str) -> str:
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def main() -> None:
    raw_mapping = json.loads(MAPPING.read_text())
    mapping = raw_mapping["questions"]
    # Optional per-question hand-overrides. When the PDF lost a
    # visual cue (e.g. fill-in-the-blank gaps printed as whitespace
    # between separate text runs), we re-inject the right text here.
    overrides = raw_mapping.get("question_overrides", {})
    parsed = parse(PDF)

    entries: list[str] = []
    missing: list[int] = []
    for qn in range(1, 121):
        if qn not in parsed:
            missing.append(qn)
            continue
        if str(qn) not in mapping:
            print(f"# WARN: no mapping for Q{qn}", file=sys.stderr)
            continue

        info = mapping[str(qn)]
        block = parsed[qn]
        answer_letter = pick_answer(block["bold_ratio"])
        if answer_letter is None:
            print(f"# WARN: Q{qn} answer not detected", file=sys.stderr)
            continue

        # Build cleaned strings.
        question = clean_text(block["question"])
        if str(qn) in overrides:
            question = overrides[str(qn)]
        cleaned: dict[str, str] = {
            letter: clean_text(text) for letter, text in block["options"].items()
        }
        # Normalise OCR'd "e)" key to "c".
        if "e" in cleaned and "c" not in cleaned:
            cleaned["c"] = cleaned.pop("e")
        # Ensure 4 options (a,b,c,d), drop anything extra.
        if not all(k in cleaned for k in ("a", "b", "c", "d")):
            print(
                f"# WARN: Q{qn} missing options ({sorted(cleaned)})",
                file=sys.stderr,
            )
            continue

        correct = cleaned[answer_letter]
        distractors = [cleaned[k] for k in ("a", "b", "c", "d") if k != answer_letter]

        # Emit the entry.
        slug = info["slug"]
        cat = info["category"]
        subcat = info.get("subcategory")
        tags = info.get("tags", [])

        eid = f"sre-{qn:03d}-{slug}"
        lines = ["  {"]
        lines.append(f"    id: {ts_string(eid)},")
        lines.append(f"    category: {ts_string(cat)},")
        if subcat:
            lines.append(f"    subcategory: {ts_string(subcat)},")
        lines.append(f"    question: {ts_string(question)},")
        lines.append(f"    answer: {ts_string(correct)},")
        # Choices: correct + 3 distractors in original PDF order.
        d0, d1, d2 = distractors[0], distractors[1], distractors[2]
        lines.append("    choices: {")
        lines.append(f"      correct: {ts_string(correct)},")
        lines.append(
            f"      distractors: [{ts_string(d0)}, {ts_string(d1)}, {ts_string(d2)}],"
        )
        lines.append("    },")
        if tags:
            tags_ts = ", ".join(ts_string(t) for t in tags)
            lines.append(f"    tags: [{tags_ts}],")
        lines.append("  },")
        entries.append("\n".join(lines))

    header = """/**
 * SRE Examen Modelo (diplomatic-consular).
 *
 * 120 multiple-choice questions imported from the official model
 * exam. The bold option in the PDF marks the correct answer; the
 * remaining three are kept verbatim as curated distractors so the
 * Quiz mode can present the exact same set of options the SRE wrote.
 *
 * This file is generated by `scripts/build-sre-data.py`. Light hand
 * editing is acceptable, but bulk regeneration will overwrite it.
 */

import type { HistoriaEntry } from "./types";

export const sreExamenModelo: HistoriaEntry[] = [
"""

    footer = "\n];\n"

    OUT.write_text(header + "\n".join(entries) + footer)
    print(f"# wrote {OUT.relative_to(ROOT)}: {len(entries)} entries", file=sys.stderr)
    if missing:
        print(f"# missing parser data for: {missing}", file=sys.stderr)


if __name__ == "__main__":
    main()
