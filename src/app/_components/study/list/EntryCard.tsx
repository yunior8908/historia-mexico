import Link from "next/link";

import type { HistoriaEntry } from "../../../_data/historia";
import type { PlanRef } from "../shared/types";

type EntryCardProps = {
  entry: HistoriaEntry;
  /** Resolved plan if `entry.relatedPlanSlug` matches a known plan. */
  plan: PlanRef | undefined;
  /** CSS variable expression for the parent group's accent color. */
  colorVar: string;
};

/**
 * Card that renders a single `HistoriaEntry`: prompt, answer and a
 * tag row that may include a deep link to `/planes?plan=...` when
 * the entry references a historical plan.
 *
 * Mirrors `PlanCard`'s top-stripe treatment so the list and the
 * planes view share a recognizable card shape.
 */
export function EntryCard({ entry, plan, colorVar }: EntryCardProps) {
  const hasTags = entry.tags !== undefined && entry.tags.length > 0;
  const showFooter = plan !== undefined || hasTags;

  return (
    <article className="relative overflow-hidden rounded-lg border border-border bg-surface p-4 md:p-5">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[3px]"
        style={{ backgroundColor: colorVar }}
      />

      <p className="font-display text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-text-muted">
        Pregunta
      </p>
      <p className="mt-1.5 font-display text-[1.05rem] font-semibold leading-snug text-text">
        {entry.question}
      </p>

      <div
        className="mt-4 border-l-2 pl-3"
        style={{ borderColor: colorVar }}
      >
        <p className="font-sans text-[1.02rem] leading-relaxed text-text">
          {entry.answer}
        </p>
      </div>

      {showFooter && (
        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          {plan !== undefined && (
            <Link
              href={`/planes?plan=${plan.slug}`}
              className="inline-flex items-center gap-1.5 rounded-md border border-accent-border bg-accent-soft px-2.5 py-1 font-display text-[0.7rem] uppercase tracking-[0.14em] text-accent transition-colors hover:bg-accent/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              <span aria-hidden>↗</span>
              <span>
                {plan.name}{" "}
                <span className="text-accent/70">· {plan.year}</span>
              </span>
            </Link>
          )}
          {entry.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-bg/40 px-2 py-0.5 font-sans text-[0.7rem] text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
