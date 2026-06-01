"use client";

import { useMemo } from "react";

import {
  CATEGORY_GROUPS,
  type CategoryMeta,
  type HistoriaCategory,
  type HistoriaEntry,
} from "../../../_data/historia";
import type { Row } from "./types";

type Params = {
  entries: HistoriaEntry[];
  categoryById: Map<HistoriaCategory, CategoryMeta>;
  excludedSet: Set<HistoriaCategory>;
  /**
   * Search string already trimmed-and-lowercased? No — pass the raw
   * (deferred) value; the hook normalizes once per render.
   */
  search: string;
};

type Result = {
  rows: Row[];
  totalVisible: number;
};

/**
 * Build the flat `Row[]` consumed by the virtualizer, grouped by
 * `CATEGORY_GROUPS` and then by category. Empty groups and empty
 * categories are skipped, so the virtualizer never renders orphan
 * headers.
 *
 * Entries are bucketed by category in a single pass to avoid
 * filtering the full array N times (entries × 18 categories).
 */
export function useStudyRows({
  entries,
  categoryById,
  excludedSet,
  search,
}: Params): Result {
  return useMemo(() => {
    const q = search.trim().toLowerCase();
    const matches = (e: HistoriaEntry) => {
      if (q === "") return true;
      if (e.question.toLowerCase().includes(q)) return true;
      if (e.answer.toLowerCase().includes(q)) return true;
      if (e.tags?.some((t) => t.toLowerCase().includes(q))) return true;
      return false;
    };

    const buckets = new Map<HistoriaCategory, HistoriaEntry[]>();
    for (const e of entries) {
      if (excludedSet.has(e.category)) continue;
      if (!matches(e)) continue;
      const arr = buckets.get(e.category);
      if (arr) arr.push(e);
      else buckets.set(e.category, [e]);
    }

    const rows: Row[] = [];
    let totalVisible = 0;

    for (const group of CATEGORY_GROUPS) {
      const visibleCats = group.categoryIds.filter(
        (cid) => (buckets.get(cid)?.length ?? 0) > 0,
      );
      if (visibleCats.length === 0) continue;

      const groupCount = visibleCats.reduce(
        (n, cid) => n + (buckets.get(cid)?.length ?? 0),
        0,
      );
      rows.push({
        kind: "group",
        groupId: group.id,
        label: group.label,
        description: group.description,
        count: groupCount,
        colorVar: group.colorVar,
      });

      for (const cid of visibleCats) {
        const bucket = buckets.get(cid) ?? [];
        const meta = categoryById.get(cid);
        if (!meta) continue;
        rows.push({
          kind: "header",
          groupId: group.id,
          categoryId: cid,
          label: meta.label,
          description: meta.description,
          count: bucket.length,
          colorVar: group.colorVar,
        });
        for (const e of bucket) {
          rows.push({
            kind: "entry",
            groupId: group.id,
            entry: e,
            colorVar: group.colorVar,
          });
          totalVisible += 1;
        }
      }
    }

    return { rows, totalVisible };
  }, [entries, categoryById, excludedSet, search]);
}
