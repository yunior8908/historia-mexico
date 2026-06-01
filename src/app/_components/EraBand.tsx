import { forwardRef } from "react";
import type { EraInfo, Plan } from "../_data/planes";
import { PlanCard } from "./PlanCard";

type EraBandProps = {
  era: EraInfo;
  plans: Plan[];
  activeSlug: string | null;
  hoveredSlug: string | null;
  highlightedSlugs: Set<string>;
  filterActive: boolean;
  cardRefs: React.MutableRefObject<Map<string, HTMLButtonElement | null>>;
  onOpen: (slug: string) => void;
  onHover: (slug: string | null) => void;
};

function yearRange(plans: Plan[]) {
  if (plans.length === 0) return "";
  const min = Math.min(...plans.map((p) => p.year));
  const max = Math.max(...plans.map((p) => p.year));
  return min === max ? `${min}` : `${min}–${max}`;
}

export const EraBand = forwardRef<HTMLDivElement, EraBandProps>(
  function EraBand(
    {
      era,
      plans,
      activeSlug,
      hoveredSlug,
      highlightedSlugs,
      filterActive,
      cardRefs,
      onOpen,
      onHover,
    },
    ref,
  ) {
    if (plans.length === 0) return null;

    return (
      <section
        ref={ref}
        className="era-band-bg relative rounded-xl border border-border py-5 pl-5 pr-4 md:pl-7 md:pr-6"
        style={{ ["--era-color" as string]: era.colorVar }}
        aria-labelledby={`era-${era.id}`}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-3 left-0 w-[3px] rounded-full"
          style={{ backgroundColor: era.colorVar }}
        />

        <header className="mb-4 flex items-baseline gap-3">
          <h2
            id={`era-${era.id}`}
            className="font-display text-[0.78rem] font-semibold uppercase tracking-[0.32em]"
            style={{ color: era.colorVar }}
          >
            {era.label}
          </h2>
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: era.colorVar }}
          />
          <span className="font-sans text-[0.78rem] text-text-muted">
            {yearRange(plans)}
          </span>
        </header>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => {
            const isActive = activeSlug === plan.slug;
            const isHighlighted =
              hoveredSlug === plan.slug || highlightedSlugs.has(plan.slug);
            const isDimmed =
              filterActive || activeSlug !== null || hoveredSlug !== null;
            return (
              <PlanCard
                key={plan.slug}
                ref={(node) => {
                  cardRefs.current.set(plan.slug, node);
                }}
                plan={plan}
                era={era}
                active={isActive}
                highlighted={isHighlighted}
                dimmed={isDimmed}
                onOpen={onOpen}
                onHover={onHover}
              />
            );
          })}
        </div>
      </section>
    );
  },
);
