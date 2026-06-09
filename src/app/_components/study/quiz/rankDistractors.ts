import { shuffleArray } from "../shared/shuffle";
import type { HistoriaEntry } from "../../../_data/historia";

/**
 * Rank candidate entries by how confusable their `answer` is with
 * `entry`'s answer, hardest distractors first.
 *
 * The goal is to surface options that live in the same conceptual
 * "answer space" as the correct one — other historical periods for a
 * period question, other states for a geography question — instead of
 * unrelated same-category facts that the player can rule out at a
 * glance. Closeness is inferred from the structured signals the data
 * already carries:
 *
 *  - `subcategory`: the strongest signal. Two entries sharing a
 *    subcategory (e.g. "etapas", "estados") almost always have
 *    interchangeable-looking answers.
 *  - `tags`: each shared tag nudges a candidate up.
 *  - answer "shape": answers of a similar length / format (both short
 *    nouns, both dates) read as plausible siblings; wildly different
 *    shapes are an easy tell, so matching shapes get a small bump.
 *
 * Ties are broken randomly (the input is shuffled before a stable
 * sort) so repeated rounds don't always show the same distractors.
 */
export function rankDistractors(
  entry: HistoriaEntry,
  candidates: HistoriaEntry[],
): HistoriaEntry[] {
  return shuffleArray(candidates)
    .map((candidate) => ({
      candidate,
      score: similarityScore(entry, candidate),
    }))
    .sort((a, b) => b.score - a.score)
    .map(({ candidate }) => candidate);
}

function similarityScore(a: HistoriaEntry, b: HistoriaEntry): number {
  let score = 0;

  if (a.subcategory && b.subcategory && a.subcategory === b.subcategory) {
    score += 100;
  }

  score += sharedTagCount(a.tags, b.tags) * 12;

  if (similarShape(a.answer, b.answer)) {
    score += 4;
  }

  return score;
}

function sharedTagCount(a?: string[], b?: string[]): number {
  if (!a?.length || !b?.length) return 0;
  const set = new Set(a);
  let count = 0;
  for (const tag of b) {
    if (set.has(tag)) count += 1;
  }
  return count;
}

/**
 * Cheap heuristic for "these two answers look like the same kind of
 * thing": short answers (a name, a date, a single noun phrase) match
 * other short answers, long ones match long ones.
 */
function similarShape(a: string, b: string): boolean {
  const wordsA = a.trim().split(/\s+/).length;
  const wordsB = b.trim().split(/\s+/).length;
  return Math.abs(wordsA - wordsB) <= 2;
}
