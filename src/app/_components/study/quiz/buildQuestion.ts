import { shuffleArray } from "../shared/shuffle";
import type { HistoriaEntry } from "../../../_data/historia";
import { NUM_OPTIONS, type QuizQuestion } from "./types";

/**
 * Compose a single `QuizQuestion` around `entry`. Distractors come
 * preferentially from the same category (more confusable) and fall
 * back to other categories; duplicates by `answer` text are
 * filtered out so the user never sees the same string twice.
 */
export function buildQuestion(
  entry: HistoriaEntry,
  pool: HistoriaEntry[],
): QuizQuestion {
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
