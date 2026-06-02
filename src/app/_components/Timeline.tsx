"use client";

import { useRef } from "react";
import type { Era, EraInfo, Plan } from "../_data/planes";
import { Connections } from "./Connections";
import { EraBand } from "./EraBand";

type TimelineProps = {
  eras: EraInfo[];
  plansByEra: Record<Era, Plan[]>;
  visiblePlans: Plan[];
  visibleSlugs: Set<string>;
  filterActive: boolean;
  activeSlug: string | null;
  hoveredSlug: string | null;
  highlightedSlugs: Set<string>;
  erasById: Record<string, EraInfo>;
  // Map of plan slug -> rendered card element. Owned by
  // `PlanesGraphic` so it can resolve the deep-link target without
  // reaching through the DOM. `EraBand` writes into it via a
  // callback ref, `Connections` reads from it for SVG anchors.
  cardRefs: React.MutableRefObject<Map<string, HTMLButtonElement | null>>;
  onOpen: (slug: string) => void;
  onHover: (slug: string | null) => void;
};

export function Timeline({
  eras,
  plansByEra,
  visiblePlans,
  visibleSlugs,
  filterActive,
  activeSlug,
  hoveredSlug,
  highlightedSlugs,
  erasById,
  cardRefs,
  onOpen,
  onHover,
}: TimelineProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={containerRef} className="relative mt-8">
      <Connections
        containerRef={containerRef}
        cardRefs={cardRefs}
        plans={visiblePlans}
        erasById={erasById}
        visibleSlugs={visibleSlugs}
        hoveredSlug={hoveredSlug}
        activeSlug={activeSlug}
        highlightedSlugs={highlightedSlugs}
      />

      <div className="relative z-[2] space-y-5">
        {eras.map((era) => {
          const plans = (plansByEra[era.id] ?? []).filter((p) =>
            visibleSlugs.has(p.slug),
          );
          if (plans.length === 0) return null;
          return (
            <EraBand
              key={era.id}
              era={era}
              plans={plans}
              activeSlug={activeSlug}
              hoveredSlug={hoveredSlug}
              highlightedSlugs={highlightedSlugs}
              filterActive={filterActive}
              cardRefs={cardRefs}
              onOpen={onOpen}
              onHover={onHover}
            />
          );
        })}
      </div>
    </div>
  );
}
