"use client";

import { useEffect, useState } from "react";
import type { EraInfo, Plan } from "../_data/planes";

type Edge = {
  from: string;
  to: string;
  color: string;
};

type Pt = { x: number; y: number };

type Path = {
  key: string;
  d: string;
  color: string;
  active: boolean;
};

type ConnectionsProps = {
  containerRef: React.RefObject<HTMLDivElement | null>;
  cardRefs: React.MutableRefObject<Map<string, HTMLButtonElement | null>>;
  plans: Plan[];
  erasById: Record<string, EraInfo>;
  visibleSlugs: Set<string>;
  hoveredSlug: string | null;
  activeSlug: string | null;
  highlightedSlugs: Set<string>;
};

function getEdges(plans: Plan[], erasById: Record<string, EraInfo>): Edge[] {
  const edges: Edge[] = [];
  const planMap = new Map(plans.map((p) => [p.slug, p]));
  for (const p of plans) {
    for (const target of p.connectsTo) {
      if (!planMap.has(target)) continue;
      const era = erasById[p.era];
      edges.push({ from: p.slug, to: target, color: era.colorVar });
    }
  }
  return edges;
}

export function Connections({
  containerRef,
  cardRefs,
  plans,
  erasById,
  visibleSlugs,
  hoveredSlug,
  activeSlug,
  highlightedSlugs,
}: ConnectionsProps) {
  const [paths, setPaths] = useState<Path[]>([]);
  const [size, setSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const compute = () => {
      const cRect = container.getBoundingClientRect();
      const edges = getEdges(plans, erasById);
      const focus = hoveredSlug ?? activeSlug;

      const next: Path[] = [];
      for (const e of edges) {
        if (!visibleSlugs.has(e.from) || !visibleSlugs.has(e.to)) continue;
        const a = cardRefs.current.get(e.from);
        const b = cardRefs.current.get(e.to);
        if (!a || !b) continue;
        const ar = a.getBoundingClientRect();
        const br = b.getBoundingClientRect();

        // Anchor: bottom-center of source, top-center of target
        const from: Pt = {
          x: ar.left + ar.width / 2 - cRect.left,
          y: ar.bottom - cRect.top,
        };
        const to: Pt = {
          x: br.left + br.width / 2 - cRect.left,
          y: br.top - cRect.top,
        };

        const dy = Math.max(40, (to.y - from.y) * 0.5);
        const c1: Pt = { x: from.x, y: from.y + dy };
        const c2: Pt = { x: to.x, y: to.y - dy };
        const d = `M ${from.x} ${from.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${to.x} ${to.y}`;

        const isActive =
          focus === null ||
          focus === e.from ||
          focus === e.to ||
          highlightedSlugs.has(e.from) ||
          highlightedSlugs.has(e.to);

        next.push({
          key: `${e.from}->${e.to}`,
          d,
          color: e.color,
          active: isActive,
        });
      }

      setSize({ w: container.scrollWidth, h: container.scrollHeight });
      setPaths(next);
    };

    compute();

    const ro = new ResizeObserver(compute);
    ro.observe(container);
    cardRefs.current.forEach((el) => el && ro.observe(el));
    window.addEventListener("scroll", compute, true);
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", compute, true);
      window.removeEventListener("resize", compute);
    };
  }, [
    containerRef,
    cardRefs,
    plans,
    erasById,
    visibleSlugs,
    hoveredSlug,
    activeSlug,
    highlightedSlugs,
  ]);

  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 z-1"
      width={size.w}
      height={size.h}
      viewBox={`0 0 ${size.w || 1} ${size.h || 1}`}
      preserveAspectRatio="none"
    >
      {paths.map((p) => (
        <path
          key={p.key}
          d={p.d}
          fill="none"
          stroke={p.color}
          strokeWidth={p.active ? 1.6 : 1}
          strokeOpacity={p.active ? 0.85 : 0.18}
          strokeLinecap="round"
          style={{ transition: "stroke-opacity 200ms, stroke-width 200ms" }}
        />
      ))}
    </svg>
  );
}
