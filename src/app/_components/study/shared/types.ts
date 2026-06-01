/**
 * Lightweight projection of a `Plan` carrying only what the study
 * views (list, flashcards) need to render their "related plan"
 * links. Lives here, separate from `_data/planes.ts`, so the study
 * components don't pull in the full data module.
 */
export type PlanRef = {
  slug: string;
  name: string;
  year: number;
  era: string;
};
