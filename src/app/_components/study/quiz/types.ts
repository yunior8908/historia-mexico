/**
 * Pre-built quiz question handed to the UI. Generated once per
 * round so re-renders never reshuffle the options under the user.
 */
export type QuizQuestion = {
  entryId: string;
  question: string;
  category: string;
  /** Already-shuffled options. Length === `NUM_OPTIONS`. */
  options: string[];
  /** Index of the correct option after shuffling. */
  correctIndex: number;
};

/** Number of options per question (also drives `1`–`4` shortcuts). */
export const NUM_OPTIONS = 4;

/** Round size — clamped against the size of the filtered pool. */
export const ROUND_TARGET = 10;
