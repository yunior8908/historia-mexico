"use client";

import { Fragment } from "react";

import { cn } from "@/lib/cn";
import {
  CATEGORY_GROUPS,
  type CategoryMeta,
  type HistoriaCategory,
} from "../../../_data/historia";
import { CategoryChip } from "./CategoryChip";

type CategoriesPanelProps = {
  categoryById: Map<HistoriaCategory, CategoryMeta>;
  excludedSet: Set<HistoriaCategory>;
  countByCategory: Record<HistoriaCategory, number>;
  allSelected: boolean;
  onToggleAll: (on: boolean) => void;
  onToggleCategory: (id: HistoriaCategory) => void;
  onScrollToCategory: (id: HistoriaCategory) => void;
};

/**
 * The filter row that sits under the search bar. Renders one
 * "Mostrar / Quitar todas" pill plus one `CategoryChip` per
 * category, in the order declared by `CATEGORY_GROUPS`.
 */
export function CategoriesPanel({
  categoryById,
  excludedSet,
  countByCategory,
  allSelected,
  onToggleAll,
  onToggleCategory,
  onScrollToCategory,
}: CategoriesPanelProps) {
  return (
    <div
      id="categories-panel"
      className="mt-3 flex flex-wrap items-center gap-1.5"
    >
      <button
        type="button"
        onClick={() => onToggleAll(!allSelected)}
        className={cn(
          "rounded-full border px-2.5 py-1 font-sans text-[0.78rem] transition-colors",
          allSelected
            ? "border-border-strong bg-surface-2 text-text"
            : "border-border bg-surface text-text-muted hover:text-text-soft",
        )}
      >
        {allSelected ? "Quitar todas" : "Mostrar todas"}
      </button>

      {CATEGORY_GROUPS.map((group) => {
        const groupCats = group.categoryIds
          .map((id) => categoryById.get(id))
          .filter((c): c is CategoryMeta => c !== undefined);
        if (groupCats.length === 0) return null;
        return (
          <Fragment key={group.id}>
            {groupCats.map((cat) => (
              <CategoryChip
                key={cat.id}
                id={cat.id}
                label={cat.label}
                count={countByCategory[cat.id] ?? 0}
                isOn={!excludedSet.has(cat.id)}
                colorVar={group.colorVar}
                onToggle={onToggleCategory}
                onScrollTo={onScrollToCategory}
              />
            ))}
          </Fragment>
        );
      })}
    </div>
  );
}
