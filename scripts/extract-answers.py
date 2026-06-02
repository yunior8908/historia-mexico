#!/usr/bin/env python3
"""Extract the bolded answer option for each numbered question in the
SRE exam PDF. PyMuPDF exposes font name per span; we treat any span
whose font name contains 'Bold' as bold.

Strategy:
- Concatenate every line on every page into a sequence of (text, bold)
  spans, then collapse multi-line wraps.
- Detect option starts via the leading "a)" / "b)" / "c)" / "d)" /
  "e)"  (the OCR sometimes writes "e)" instead of "c)" in places where
  a curved letter was misread; we will treat it as 'c').
- For each option, determine whether the option's letter or the text
  immediately following it is bold. The PDF appears to bold the entire
  correct option (the "a)" or "b)" prefix and/or the text after it).

Output: one line per question, e.g. `1: b` (lowercase letter).
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

import fitz

PDF = Path(sys.argv[1] if len(sys.argv) > 1 else "/Users/yunior/workspace/examejemdc.pdf")

OPTION_RE = re.compile(r"^\s*([a-eA-E])\)\s*$")
OPTION_INLINE_RE = re.compile(r"^\s*([a-eA-E])\)\s+")
# A real question line must have a letter or `¿` right after the
# period: Q23's option "a) 30." would otherwise match as the start of
# question 30.
QUESTION_START_RE = re.compile(r"^\s*(\d{1,3})\.\s+(?=[¿A-Za-zÁÉÍÓÚÑáéíóúñ])")

# OCR-mangled question numbers. The PDF prints "7 S." instead of "75."
# and "ll5" through "ll8" (lowercase L, lowercase L, digit) for the
# 115-118 block.
OCR_RENUMBER = [
    (re.compile(r"^(\s*)7\s+S\.(\s)"), r"\g<1>75.\g<2>"),
    (re.compile(r"^(\s*)ll(\d)\."), r"\g<1>11\g<2>."),
]


def normalize_line(line_text: str) -> str:
    for pattern, repl in OCR_RENUMBER:
        line_text = pattern.sub(repl, line_text)
    return line_text


def is_bold_font(name: str) -> bool:
    n = name.lower()
    return "bold" in n or "black" in n or "heavy" in n


def page_spans(page: fitz.Page):
    """Yield (line_no, text, bold) for the page, preserving line breaks."""
    pdict = page.get_text("dict")
    line_idx = 0
    for block in pdict.get("blocks", []):
        for line in block.get("lines", []):
            for span in line.get("spans", []):
                text = span.get("text", "")
                if not text:
                    continue
                yield line_idx, text, is_bold_font(span.get("font", ""))
            line_idx += 1


def main() -> None:
    doc = fitz.open(PDF)
    # Group spans by (page, line).
    grouped: list[list[tuple[str, bool]]] = []
    for page in doc:
        last_line = -1
        for line_no, text, bold in page_spans(page):
            if line_no != last_line:
                grouped.append([])
                last_line = line_no
            grouped[-1].append((text, bold))

    current_q: int | None = None
    # Per (question, option_letter) → (bold_chars, total_chars). We use
    # the ratio of bold characters to pick the correct option: a single
    # PDF glitch where one word in another option happens to be bold
    # is not enough to flip the answer.
    weights: dict[tuple[int, str], list[int]] = {}
    current_option_letter: str | None = None

    def add_weight(text: str, bold: bool) -> None:
        if current_q is None or current_option_letter is None:
            return
        key = (current_q, current_option_letter)
        w = weights.setdefault(key, [0, 0])
        # Skip the "x)" prefix itself when accumulating weight: bolding
        # only the letter (which the SRE template sometimes does for
        # decoration) should NOT mark an option as the answer.
        stripped = text.strip()
        if stripped in (f"{current_option_letter})", current_option_letter, ")"):
            return
        n = len(stripped)
        w[1] += n
        if bold:
            w[0] += n

    for line in grouped:
        line_text = normalize_line("".join(t for t, _ in line))

        m_q = QUESTION_START_RE.match(line_text)
        if m_q:
            current_q = int(m_q.group(1))
            current_option_letter = None
            continue

        # Detect option start.
        m_opt = OPTION_INLINE_RE.match(line_text)
        opt_letter: str | None = None
        if m_opt:
            opt_letter = m_opt.group(1).lower()
        else:
            first_text = line[0][0].strip() if line else ""
            if OPTION_RE.match(first_text):
                opt_letter = first_text.strip().rstrip(")").lower()
        if opt_letter:
            current_option_letter = opt_letter
            for text, bold in line:
                add_weight(text, bold)
            continue

        # Continuation of the current option's text (wrap line).
        if current_option_letter is not None:
            for text, bold in line:
                add_weight(text, bold)

    # Pick the most-bold option per question, with a 50% threshold to
    # avoid picking up spurious single-word bold artifacts.
    answers: dict[int, str] = {}
    by_q: dict[int, dict[str, tuple[int, int]]] = {}
    for (q, letter), (bold_n, total_n) in weights.items():
        by_q.setdefault(q, {})[letter] = (bold_n, total_n)

    for q, opts in by_q.items():
        scored = sorted(
            (
                (b / t if t else 0.0, letter, b, t)
                for letter, (b, t) in opts.items()
            ),
            reverse=True,
        )
        ratio, letter, b, t = scored[0]
        if ratio >= 0.5 and b > 0:
            answers[q] = "c" if letter == "e" else letter

    for q in sorted(answers):
        print(f"{q}: {answers[q]}")
    print(f"\n# total answered: {len(answers)}", file=sys.stderr)
    missing = [q for q in by_q if q not in answers]
    if missing:
        print(f"# missing: {sorted(missing)}", file=sys.stderr)


if __name__ == "__main__":
    main()
