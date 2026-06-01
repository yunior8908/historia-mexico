"use client";

import { useHotkey } from "@tanstack/react-hotkeys";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { useSearchParams } from "next/navigation";
import {
  parseAsArrayOf,
  parseAsString,
  parseAsStringLiteral,
  useQueryState,
} from "nuqs";
import {
  useCallback,
  useDeferredValue,
  useMemo,
  useRef,
} from "react";

import {
  type CategoryMeta,
  type HistoriaCategory,
  type HistoriaEntry,
} from "../../../_data/historia";
import type { PlanRef } from "../shared/types";
import { CategoriesPanel } from "./CategoriesPanel";
import { CategoryHeader } from "./CategoryHeader";
import { EmptyResults } from "./EmptyResults";
import { EntryCard } from "./EntryCard";
import { GroupHeader } from "./GroupHeader";
import { ModeLink } from "./ModeLink";
import { SearchBar } from "./SearchBar";
import {
  ENTRY_ESTIMATE,
  GROUP_ESTIMATE,
  HEADER_ESTIMATE,
} from "./types";
import { useStudyRows } from "./useStudyRows";
import { useWindowScrollMargin } from "./useWindowScrollMargin";

type ListViewProps = {
  entries: HistoriaEntry[];
  categories: CategoryMeta[];
  planIndex: PlanRef[];
};

/**
 * Orchestrator for `/` — the virtualized study list. Owns the URL
 * state (search + excluded categories), wires the virtualizer to
 * window scroll, and dispatches each row to the right sub-component
 * (`GroupHeader`, `CategoryHeader`, `EntryCard`).
 */
export function ListView({ entries, categories, planIndex }: ListViewProps) {
  const parentRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const toolbarRef = useRef<HTMLDivElement>(null);

  const allCategoryIds = useMemo(
    () => categories.map((c) => c.id) as HistoriaCategory[],
    [categories],
  );

  // URL-backed state. The literal parser validates every entry of
  // `exclude` against a real category id, so hand-edited URLs can't
  // break the UI.
  const [search, setSearch] = useQueryState("q", parseAsString.withDefault(""));
  const [excluded, setExcluded] = useQueryState(
    "exclude",
    parseAsArrayOf(parseAsStringLiteral(allCategoryIds)).withDefault([]),
  );

  // Defer filtering so typing in the search box never blocks the
  // input render on large datasets.
  const deferredSearch = useDeferredValue(search);

  // "/" focuses the search input. @tanstack/react-hotkeys ignores
  // events originating in inputs/textareas, so pressing "/" while
  // typing inside the search bar inserts the character.
  const focusSearch = useCallback(() => {
    searchRef.current?.focus();
    searchRef.current?.select();
  }, []);
  useHotkey("/", focusSearch);

  const excludedSet = useMemo(() => new Set(excluded), [excluded]);
  const allSelected = excludedSet.size === 0;
  const noneSelected = allCategoryIds.length - excludedSet.size === 0;

  const planBySlug = useMemo(
    () => new Map(planIndex.map((p) => [p.slug, p])),
    [planIndex],
  );

  const countByCategory = useMemo(() => {
    const acc = {} as Record<HistoriaCategory, number>;
    for (const cat of categories) acc[cat.id] = 0;
    for (const e of entries) acc[e.category] = (acc[e.category] ?? 0) + 1;
    return acc;
  }, [entries, categories]);

  // Carry the current query string over to the sub-routes
  // (flashcards/quiz) so `exclude` and `q` survive navigation.
  const sp = useSearchParams();
  const linkSuffix = useMemo(() => {
    const s = sp.toString();
    return s ? `?${s}` : "";
  }, [sp]);

  const toggleCategory = useCallback(
    (cat: HistoriaCategory) => {
      if (excludedSet.has(cat)) {
        const next = excluded.filter((c) => c !== cat);
        void setExcluded(next.length === 0 ? null : next);
      } else {
        void setExcluded([...excluded, cat]);
      }
    },
    [excluded, excludedSet, setExcluded],
  );

  const toggleAll = useCallback(
    (on: boolean) => {
      void setExcluded(on ? null : [...allCategoryIds]);
    },
    [allCategoryIds, setExcluded],
  );

  const categoryById = useMemo(() => {
    const m = new Map<HistoriaCategory, CategoryMeta>();
    for (const c of categories) m.set(c.id, c);
    return m;
  }, [categories]);

  const { rows, totalVisible } = useStudyRows({
    entries,
    categoryById,
    excludedSet,
    search: deferredSearch,
  });

  const scrollMargin = useWindowScrollMargin(parentRef);

  const virtualizer = useWindowVirtualizer({
    count: rows.length,
    estimateSize: (i) => {
      const r = rows[i];
      if (!r) return ENTRY_ESTIMATE;
      if (r.kind === "group") return GROUP_ESTIMATE;
      if (r.kind === "header") return HEADER_ESTIMATE;
      return ENTRY_ESTIMATE;
    },
    overscan: 6,
    scrollMargin,
    getItemKey: (i) => {
      const r = rows[i];
      if (!r) return i;
      if (r.kind === "group") return `g:${r.groupId}`;
      if (r.kind === "header") return `h:${r.categoryId}`;
      return `e:${r.entry.id}`;
    },
  });

  const items = virtualizer.getVirtualItems();
  const totalSize = virtualizer.getTotalSize();

  const scrollToCategory = useCallback(
    (cat: HistoriaCategory) => {
      const idx = rows.findIndex(
        (r) => r.kind === "header" && r.categoryId === cat,
      );
      if (idx === -1) return;
      virtualizer.scrollToIndex(idx, { align: "start" });
      requestAnimationFrame(() => {
        const h = toolbarRef.current?.getBoundingClientRect().height ?? 0;
        if (h > 0) window.scrollBy({ top: -h - 8, behavior: "instant" });
      });
    },
    [rows, virtualizer],
  );

  const trimmedSearch = deferredSearch.trim();

  return (
    <section className="space-y-6">
      <div
        ref={toolbarRef}
        className="sticky top-0 z-20 -mx-4 border-b border-border bg-bg/85 px-4 pb-3 pt-3 backdrop-blur supports-backdrop-filter:bg-bg/70 md:-mx-8 md:px-8"
      >
        <div className="flex items-center gap-2">
          <SearchBar
            ref={searchRef}
            value={search}
            onChange={(v) => void setSearch(v === "" ? null : v)}
            onClear={() => {
              void setSearch(null);
              searchRef.current?.focus();
            }}
          />

          <ModeLink
            href={`/flashcards${linkSuffix}`}
            disabled={noneSelected}
            tone="neutral"
          >
            Flashcards
          </ModeLink>
          <ModeLink
            href={`/quiz${linkSuffix}`}
            disabled={noneSelected}
            tone="accent"
          >
            Quiz
          </ModeLink>
        </div>

        <CategoriesPanel
          categoryById={categoryById}
          excludedSet={excludedSet}
          countByCategory={countByCategory}
          allSelected={allSelected}
          onToggleAll={toggleAll}
          onToggleCategory={toggleCategory}
          onScrollToCategory={scrollToCategory}
        />

        <p className="mt-2 font-sans text-[0.76rem] text-text-muted">
          {totalVisible.toLocaleString("es-MX")}{" "}
          {totalVisible === 1 ? "pregunta visible" : "preguntas visibles"}
          {trimmedSearch !== "" && <span> · filtro: “{trimmedSearch}”</span>}
        </p>
      </div>

      {rows.length === 0 ? (
        <EmptyResults />
      ) : (
        <div ref={parentRef} className="relative">
          <div
            style={{
              height: `${totalSize}px`,
              width: "100%",
              position: "relative",
            }}
          >
            {items.map((vi) => {
              const row = rows[vi.index];
              if (!row) return null;
              return (
                <div
                  key={vi.key}
                  data-index={vi.index}
                  ref={virtualizer.measureElement}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${vi.start - scrollMargin}px)`,
                  }}
                  className="pb-3"
                >
                  {row.kind === "group" ? (
                    <GroupHeader
                      label={row.label}
                      description={row.description}
                      count={row.count}
                      colorVar={row.colorVar}
                    />
                  ) : row.kind === "header" ? (
                    <CategoryHeader
                      label={row.label}
                      description={row.description}
                      count={row.count}
                      colorVar={row.colorVar}
                    />
                  ) : (
                    <EntryCard
                      entry={row.entry}
                      colorVar={row.colorVar}
                      plan={
                        row.entry.relatedPlanSlug
                          ? planBySlug.get(row.entry.relatedPlanSlug)
                          : undefined
                      }
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
