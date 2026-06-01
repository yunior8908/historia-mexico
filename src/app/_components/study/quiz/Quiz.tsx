"use client";

import { useHotkey } from "@tanstack/react-hotkeys";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

import type {
  CategoryMeta,
  HistoriaCategory,
  HistoriaEntry,
} from "../../../_data/historia";
import { useExcludedCategories } from "../useExcludedCategories";
import { AdvanceControls } from "./AdvanceControls";
import { EmptyState } from "./EmptyState";
import { QuestionCard } from "./QuestionCard";
import { ResultScreen } from "./ResultScreen";
import { Toolbar } from "./Toolbar";
import { useQuizRound } from "./useQuizRound";

type QuizProps = {
  /**
   * Full pool. Category filtering is applied internally based on
   * the `exclude` query param. The same pool also feeds the global
   * pool of distractor candidates.
   */
  allEntries: HistoriaEntry[];
  categories: CategoryMeta[];
};

/**
 * Orchestrator for `/quiz`. Reads category filters from the URL,
 * builds the round via `useQuizRound`, and dispatches to one of
 * three screens: empty, results, or active question.
 */
export function Quiz({ allEntries, categories }: QuizProps) {
  const allCategoryIds = useMemo(
    () => categories.map((c) => c.id) as HistoriaCategory[],
    [categories],
  );

  const excludedSet = useExcludedCategories(allCategoryIds);

  const entries = useMemo(
    () => allEntries.filter((e) => !excludedSet.has(e.category)),
    [allEntries, excludedSet],
  );

  const sp = useSearchParams();
  const backHref = useMemo(() => {
    const params = new URLSearchParams(sp);
    const s = params.toString();
    return `/${s ? `?${s}` : ""}`;
  }, [sp]);

  const categoryLabel = useMemo(() => {
    const map = new Map(categories.map((c) => [c.id, c.label]));
    return (id: string) => map.get(id as never) ?? id;
  }, [categories]);

  const {
    round,
    index,
    selected,
    revealed,
    score,
    done,
    current,
    isLast,
    pick,
    goNext,
    newRound,
  } = useQuizRound({ entries, allEntries });

  // Shortcuts: 1..4 pick an option, Enter / → advance once revealed.
  // `useHotkey` ignores events from inputs by default and keeps the
  // callback synced on every render, so references to
  // `revealed`/`current` always read the latest value.
  useHotkey("1", () => pick(0));
  useHotkey("2", () => pick(1));
  useHotkey("3", () => pick(2));
  useHotkey("4", () => pick(3));
  useHotkey("Enter", goNext, { enabled: revealed });
  useHotkey("ArrowRight", goNext, { enabled: revealed });

  if (round.length === 0) {
    return <EmptyState backHref={backHref} />;
  }

  if (done) {
    return (
      <ResultScreen
        score={score}
        total={round.length}
        backHref={backHref}
        onNewRound={newRound}
      />
    );
  }

  if (!current) return null;

  const entry = allEntries.find((e) => e.id === current.entryId);

  return (
    <section className="space-y-6">
      <Toolbar
        backHref={backHref}
        index={index}
        total={round.length}
        score={score}
        revealed={revealed}
      />

      <QuestionCard
        question={current}
        entry={entry}
        selected={selected}
        revealed={revealed}
        categoryLabel={categoryLabel(current.category)}
        onPick={pick}
      />

      <AdvanceControls revealed={revealed} isLast={isLast} onNext={goNext} />
    </section>
  );
}
