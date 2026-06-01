/**
 * Per-entry study status persisted to `localStorage`. `known` removes
 * the card from the "review" filter; `review` keeps it on the
 * review deck even if shown.
 */
export type CardStatus = "known" | "review";

/** Map of `entry.id -> CardStatus`. */
export type ProgressMap = Record<string, CardStatus>;

/**
 * URL-backed filter for the flashcards deck. `all` shows every
 * available card; `review` narrows to cards not already marked
 * `known`.
 */
export const FILTER_VALUES = ["all", "review"] as const;
export type Filter = (typeof FILTER_VALUES)[number];
