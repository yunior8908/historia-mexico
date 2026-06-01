"use client";

import { useHotkey } from "@tanstack/react-hotkeys";
import { useSearchParams } from "next/navigation";
import { parseAsStringLiteral, useQueryState } from "nuqs";
import { useCallback, useMemo } from "react";

import type {
  CategoryMeta,
  HistoriaCategory,
  HistoriaEntry,
} from "../../../_data/historia";
import type { PlanRef } from "../shared/types";
import { useExcludedCategories } from "../useExcludedCategories";
import { ControlButton } from "./ControlButton";
import { EmptyState } from "./EmptyState";
import { FlipCard } from "./FlipCard";
import { ProgressBar } from "./ProgressBar";
import { Toolbar } from "./Toolbar";
import { FILTER_VALUES, type CardStatus } from "./types";
import { useFlashcardDeck } from "./useFlashcardDeck";
import { useFlashcardProgress } from "./useFlashcardProgress";

type FlashcardsProps = {
  /**
   * Full question pool. The component filters internally based on
   * the excluded categories read from the URL.
   */
  allEntries: HistoriaEntry[];
  categories: CategoryMeta[];
  planIndex: PlanRef[];
};

/**
 * Orchestrator for `/flashcards`. Wires the URL-backed filter, the
 * persistent progress map, and the in-memory deck cursor; defers
 * every rendered piece to a dedicated child component.
 */
export function Flashcards({
  allEntries,
  categories,
  planIndex,
}: FlashcardsProps) {
  const allCategoryIds = useMemo(
    () => categories.map((c) => c.id) as HistoriaCategory[],
    [categories],
  );

  const excludedSet = useExcludedCategories(allCategoryIds);

  const [filter, setFilter] = useQueryState(
    "filter",
    parseAsStringLiteral(FILTER_VALUES).withDefault("all"),
  );

  const entries = useMemo(
    () => allEntries.filter((e) => !excludedSet.has(e.category)),
    [allEntries, excludedSet],
  );

  // Strip the local-only `filter` param when navigating back to the
  // list, so the list isn't constrained by flashcards-specific UI.
  const sp = useSearchParams();
  const backHref = useMemo(() => {
    const params = new URLSearchParams(sp);
    params.delete("filter");
    const s = params.toString();
    return `/${s ? `?${s}` : ""}`;
  }, [sp]);

  const categoryLabel = useMemo(() => {
    const map = new Map(categories.map((c) => [c.id, c.label]));
    return (id: string) => map.get(id as never) ?? id;
  }, [categories]);

  const planBySlug = useMemo(
    () => new Map(planIndex.map((p) => [p.slug, p])),
    [planIndex],
  );

  const { progress, knownCount, reviewCount, mark, reset } =
    useFlashcardProgress();

  const {
    currentEntry,
    totalCount,
    index,
    flipped,
    setFlipped,
    goNext,
    goPrev,
    shuffle,
    advance,
  } = useFlashcardDeck({ entries, filter, progress });

  const markCurrent = useCallback(
    (status: CardStatus) => {
      if (!currentEntry) return;
      mark(currentEntry.id, status);
      advance();
    },
    [currentEntry, mark, advance],
  );

  // Keyboard shortcuts via @tanstack/react-hotkeys. The singleton
  // manager resolves `ignoreInputs` by default (true for single
  // keys and Shift/Alt combos), so pressing K/R/← while typing in
  // an input does not trigger the action. `useHotkey` syncs the
  // callback on every render — no refs needed to avoid stale closures.
  const toggleFlip = useCallback(() => setFlipped((f) => !f), [setFlipped]);
  useHotkey("ArrowRight", goNext);
  useHotkey("ArrowLeft", goPrev);
  useHotkey("Space", toggleFlip);
  useHotkey("Enter", toggleFlip);
  useHotkey("K", () => markCurrent("known"));
  useHotkey("R", () => markCurrent("review"));

  if (totalCount === 0) {
    return (
      <EmptyState
        filter={filter}
        backHref={backHref}
        onSwitchFilter={(f) => {
          void setFilter(f === "all" ? null : f);
        }}
      />
    );
  }

  if (!currentEntry) return null;

  const status = progress[currentEntry.id];
  const relatedPlan = currentEntry.relatedPlanSlug
    ? planBySlug.get(currentEntry.relatedPlanSlug)
    : undefined;

  return (
    <section className="space-y-6">
      <Toolbar
        backHref={backHref}
        index={index}
        total={totalCount}
        filter={filter}
        onFilterChange={(f) => void setFilter(f === "all" ? null : f)}
        onShuffle={shuffle}
      />

      <ProgressBar
        total={entries.length}
        known={knownCount}
        review={reviewCount}
      />

      <FlipCard
        question={currentEntry.question}
        flipped={flipped}
        onFlip={toggleFlip}
        category={categoryLabel(currentEntry.category)}
        status={status}
      >
        <p className="font-sans text-[1.02rem] leading-relaxed text-text">
          {currentEntry.answer}
        </p>

        {relatedPlan && (
          <p className="mt-4 border-t border-border pt-3 font-sans text-[0.82rem] text-text-soft">
            Plan relacionado:{" "}
            <a
              href={`/planes?plan=${relatedPlan.slug}`}
              className="font-display text-[0.84rem] uppercase tracking-[0.16em] text-text underline-offset-4 hover:underline"
            >
              {relatedPlan.name} ({relatedPlan.year})
            </a>
          </p>
        )}
      </FlipCard>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <ControlButton onClick={goPrev} kbd="←">
          Anterior
        </ControlButton>
        <ControlButton
          onClick={() => markCurrent("review")}
          kbd="R"
          tone="review"
        >
          Repasar
        </ControlButton>
        <ControlButton
          onClick={() => markCurrent("known")}
          kbd="K"
          tone="known"
        >
          La sabía
        </ControlButton>
        <ControlButton onClick={goNext} kbd="→">
          Siguiente
        </ControlButton>
      </div>

      <div className="flex items-center justify-between text-[0.78rem] text-text-muted">
        <p>
          Atajos: <kbd className="kbd">←</kbd> <kbd className="kbd">→</kbd>{" "}
          navegar · <kbd className="kbd">espacio</kbd> voltear ·{" "}
          <kbd className="kbd">K</kbd> sabía · <kbd className="kbd">R</kbd>{" "}
          repasar
        </p>
        <button
          type="button"
          onClick={reset}
          className="font-display text-[0.7rem] uppercase tracking-[0.14em] text-text-muted hover:text-text"
        >
          Reiniciar progreso
        </button>
      </div>
    </section>
  );
}
