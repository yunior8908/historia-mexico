import { shuffleArray } from "../shared/shuffle";
import type { HistoriaEntry } from "../../../_data/historia";
import { NUM_OPTIONS, type QuizQuestion } from "./types";

/**
 * Compose a single `QuizQuestion` around `entry`.
 *
 * When the entry ships with curated `choices` (e.g. SRE Examen Modelo
 * questions, which had four hand-written options in the source PDF),
 * those exact distractors are used so the player sees the same four
 * options the exam writer chose. The order is reshuffled per round so
 * the position of the correct answer is not memorisable.
 *
 * Otherwise, distractors are sampled from the pool: same-category
 * entries first (more confusable) with category-foreign fallbacks.
 * Duplicates by `answer` text are filtered so the player never sees
 * the same string twice in one card.
 */
export function buildQuestion(
  entry: HistoriaEntry,
  pool: HistoriaEntry[],
): QuizQuestion {
  // Curated MCQ path.
  if (entry.choices) {
    const options = shuffleArray([
      entry.choices.correct,
      ...entry.choices.distractors,
    ]);
    return {
      entryId: entry.id,
      question: entry.question,
      category: entry.category,
      options,
      correctIndex: options.indexOf(entry.choices.correct),
    };
  }

  // Auto-generated distractors path.
  const sameCat = pool.filter(
    (e) => e.category === entry.category && e.id !== entry.id,
  );
  const others = pool.filter(
    (e) => e.category !== entry.category && e.id !== entry.id,
  );

  const distractorPool = shuffleArray(sameCat).concat(shuffleArray(others));
  const seen = new Set<string>([entry.answer]);
  const distractors: string[] = [];
  for (const candidate of distractorPool) {
    if (distractors.length >= NUM_OPTIONS - 1) break;
    if (!seen.has(candidate.answer)) {
      seen.add(candidate.answer);
      distractors.push(candidate.answer);
    }
  }

  // Tiny pool: pad with neutral placeholders so the UI still
  // renders 4 buttons.
  while (distractors.length < NUM_OPTIONS - 1) {
    distractors.push("— sin opción —");
  }

  const options = shuffleArray([entry.answer, ...distractors]);
  const correctIndex = options.indexOf(entry.answer);

  return {
    entryId: entry.id,
    question: entry.question,
    category: entry.category,
    options,
    correctIndex,
  };
}
