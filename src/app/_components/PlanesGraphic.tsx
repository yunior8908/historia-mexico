"use client";

import { AnimatePresence } from "motion/react";
import { parseAsStringLiteral, useQueryState } from "nuqs";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ERAS,
  PLANES,
  type Era,
  type EraInfo,
  type Plan,
} from "../_data/planes";
import { EraFilter } from "./EraFilter";
import { PlanModal } from "./PlanModal";
import { Timeline } from "./Timeline";

// Whitelist of valid `?plan=` values. Anything else coming through
// the URL is normalised to `null` by `parseAsStringLiteral`.
const PLAN_SLUGS = PLANES.map((p) => p.slug);

export function PlanesGraphic() {
  const [active, setActive] = useState<Era | "todos">("todos");

  // URL-as-state for the open plan. Deep-links (`/planes?plan=<slug>`)
  // hydrate this on first render, sharing/reload preserve the modal,
  // and browser back/forward animates between plans for free.
  const [openSlug, setOpenSlug] = useQueryState(
    "plan",
    parseAsStringLiteral(PLAN_SLUGS),
  );
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  // Map of plan slug -> rendered card element, populated by
  // `EraBand`'s callback ref. Lifted up to this component so the
  // deep-link scroll effect below can look up the target by slug
  // (typed, React-owned reference) instead of reaching into the DOM
  // with `document.querySelector`. `Connections` reads from the same
  // map to anchor its SVG curves between cards.
  const cardRefs = useRef<Map<string, HTMLButtonElement | null>>(new Map());

  // When the URL provided a slug on mount, scroll its card into view
  // exactly once. Clicks on the timeline *after* mount must not yank
  // the page back to whatever the user just clicked, so we capture
  // the initial slug in a ref and run the scroll effect with no
  // dependencies.
  const initialSlugRef = useRef(openSlug);

  useEffect(() => {
    const slug = initialSlugRef.current;
    if (!slug) return;
    // No `requestAnimationFrame` chain needed: nuqs hydrates
    // `openSlug` synchronously on the very first render, so by the
    // time this effect fires the modal column is already mounted
    // and the page is laid out in its final two-column form. The
    // route fade-in driven by `RouteTransition` only animates
    // `opacity`/`transform` — layout coordinates are final from
    // frame zero, so `getBoundingClientRect` is correct immediately.
    const card = cardRefs.current.get(slug);

    if (!card) return;

    card.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
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
    () =>
      active === "todos" ? PLANES : PLANES.filter((p) => p.era === active),
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

  const onOpen = useCallback(
    (slug: string) => {
      void setOpenSlug(slug);
    },
    [setOpenSlug],
  );
  const onClose = useCallback(() => {
    void setOpenSlug(null);
  }, [setOpenSlug]);
  const onHover = useCallback(
    (slug: string | null) => setHoveredSlug(slug),
    [],
  );

  const openPlan = openSlug ? planBySlug[openSlug] : null;
  const openEra = openPlan ? erasById[openPlan.era] : null;
  const related: Plan[] = openPlan
    ? [
        ...openPlan.connectsTo
          .map((s) => planBySlug[s])
          .filter((p): p is Plan => Boolean(p)),
        ...PLANES.filter((p) => p.connectsTo.includes(openPlan.slug)),
      ].filter((p, i, arr) => arr.findIndex((q) => q.slug === p.slug) === i)
    : [];

  const isOpen = openPlan !== null;

  // The grid switches to two columns only while the modal is visible.
  // Because `AnimatePresence` keeps `<PlanModal>` mounted during its
  // exit animation, we keep `isLayoutOpen` true until the exit
  // finishes; otherwise the parent grid would collapse to `block`
  // mid-animation and the timeline would reflow under the
  // departing modal. The render-time setter ("snapshot during
  // render" pattern) syncs the flag on the next render whenever
  // `isOpen` flips on, without an extra `useEffect`.
  const [isLayoutOpen, setIsLayoutOpen] = useState(isOpen);
  if (isOpen && !isLayoutOpen) setIsLayoutOpen(true);

  return (
    <>
      <div className="sticky top-0 z-20 -mx-4 mt-10 bg-bg/85 px-4 py-3 backdrop-blur supports-backdrop-filter:bg-bg/70 md:-mx-8 md:px-8">
        <EraFilter eras={ERAS} active={active} onSelect={setActive} />
      </div>

      <div
        className={
          isLayoutOpen
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
          cardRefs={cardRefs}
          onOpen={onOpen}
          onHover={onHover}
        />

        <AnimatePresence onExitComplete={() => setIsLayoutOpen(false)}>
          {isOpen && (
            <PlanModal
              key="plan-modal"
              plan={openPlan}
              era={openEra}
              related={related}
              onClose={onClose}
              onSelect={(s) => void setOpenSlug(s)}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
