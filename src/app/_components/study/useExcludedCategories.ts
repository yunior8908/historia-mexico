"use client";

import {
  parseAsArrayOf,
  parseAsStringLiteral,
  useQueryState,
} from "nuqs";
import { useMemo } from "react";

import type { HistoriaCategory } from "../../_data/historia";

/**
 * Reads the list of EXCLUDED categories from the `exclude` query param.
 *
 * Model: every category is selected by default. Only the categories
 * the user has toggled OFF are stored in the URL. This keeps URLs
 * short in the common case (everything visible) and only lets them
 * grow when the user actively filters.
 *
 * All three study routes (`/`, `/flashcards`, `/quiz`) share this
 * key (`exclude`), so navigating from the list view to Flashcards or
 * Quiz preserves the active filter.
 */
export function useExcludedCategories(
  allCategoryIds: HistoriaCategory[],
): Set<HistoriaCategory> {
  const [excluded] = useQueryState(
    "exclude",
    parseAsArrayOf(parseAsStringLiteral(allCategoryIds)).withDefault([]),
  );
  return useMemo(() => new Set(excluded), [excluded]);
}
