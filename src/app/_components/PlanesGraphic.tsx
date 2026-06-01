"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ERAS, PLANES, type Era, type EraInfo, type Plan } from "../_data/planes";
import { EraFilter } from "./EraFilter";
import { PlanModal } from "./PlanModal";
import { Timeline } from "./Timeline";

export function PlanesGraphic() {
  const [active, setActive] = useState<Era | "todos">("todos");
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  // Deep-link: if the URL carries `?plan=<slug>`, open that plan on
  // mount. We read `window.location.search` from `useEffect` (rather
  // than `useSearchParams`) so the `/` page stays statically
  // rendered instead of being forced into dynamic mode.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("plan");
    if (!slug) return;
    const exists = PLANES.some((p) => p.slug === slug);
    if (!exists) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reading window.location is a browser API and only runs on mount
    setOpenSlug(slug);
    // Strip the query string so a reload or share doesn't trigger
    // the automatic modal a second time.
    params.delete("plan");
    const qs = params.toString();
    const newUrl = `${window.location.pathname}${qs ? `?${qs}` : ""}${
      window.location.hash
    }`;
    window.history.replaceState(null, "", newUrl);
  }, []);

  const erasById = useMemo<Record<string, EraInfo>>(
    () => Object.fromEntries(ERAS.map((e) => [e.id, e])),
    [],
  );

  const planBySlug = useMemo<Record<string, Plan>>(
    () => Object.fromEntries(PLANES.map((p) => [p.slug, p])),
    [],
  );

  const plansByEra = useMemo(() => {
    const map = {} as Record<Era, Plan[]>;
    for (const e of ERAS) map[e.id] = [];
    for (const p of PLANES) map[p.era].push(p);
    return map;
  }, []);

  const visiblePlans = useMemo(
    () => (active === "todos" ? PLANES : PLANES.filter((p) => p.era === active)),
    [active],
  );

  const visibleSlugs = useMemo(
    () => new Set(visiblePlans.map((p) => p.slug)),
    [visiblePlans],
  );

  const focusSlug = hoveredSlug ?? openSlug;

  const highlightedSlugs = useMemo<Set<string>>(() => {
    if (!focusSlug) return new Set();
    const plan = planBySlug[focusSlug];
    if (!plan) return new Set();
    const set = new Set<string>();
    for (const t of plan.connectsTo) set.add(t);
    for (const p of PLANES) {
      if (p.connectsTo.includes(plan.slug)) set.add(p.slug);
    }
    return set;
  }, [focusSlug, planBySlug]);

  const onOpen = useCallback((slug: string) => setOpenSlug(slug), []);
  const onClose = useCallback(() => setOpenSlug(null), []);
  const onHover = useCallback((slug: string | null) => setHoveredSlug(slug), []);

  const openPlan = openSlug ? planBySlug[openSlug] : null;
  const openEra = openPlan ? erasById[openPlan.era] : null;
  const related: Plan[] = openPlan
    ? [
        ...openPlan.connectsTo
          .map((s) => planBySlug[s])
          .filter((p): p is Plan => Boolean(p)),
        ...PLANES.filter((p) => p.connectsTo.includes(openPlan.slug)),
      ].filter(
        (p, i, arr) => arr.findIndex((q) => q.slug === p.slug) === i,
      )
    : [];

  const isOpen = openPlan !== null;

  return (
    <>
      <div className="sticky top-0 z-20 -mx-4 mt-10 bg-bg/85 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-bg/70 md:-mx-8 md:px-8">
        <EraFilter eras={ERAS} active={active} onSelect={setActive} />
      </div>

      <div
        className={
          isOpen
            ? "grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_24rem] xl:grid-cols-[minmax(0,1fr)_26rem]"
            : "block"
        }
      >
        <Timeline
          eras={ERAS}
          plansByEra={plansByEra}
          visiblePlans={visiblePlans}
          visibleSlugs={visibleSlugs}
          filterActive={active !== "todos"}
          activeSlug={openSlug}
          hoveredSlug={hoveredSlug}
          highlightedSlugs={highlightedSlugs}
          erasById={erasById}
          onOpen={onOpen}
          onHover={onHover}
        />

        {isOpen && (
          <PlanModal
            plan={openPlan}
            era={openEra}
            related={related}
            onClose={onClose}
            onSelect={(s) => setOpenSlug(s)}
          />
        )}
      </div>
    </>
  );
}
