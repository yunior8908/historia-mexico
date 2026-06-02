/**
 * Question/answer bank for Historia de México.
 *
 * Entries are split into per-file modules by broad topic
 * (constitution, prehispanic, colony, independence, 19th century,
 * revolution, modern Mexico, geography, gastronomy, culture, UNESCO
 * sites + magic towns, sports, institutions, public figures).
 *
 * Each entry is a `HistoriaEntry`. When an error or outdated value
 * was detected in the source notes, the object carries a
 * `correction` field with `originalAnswer` and a short note so the
 * UI can render the original answer with line-through next to the
 * corrected one.
 *
 * Entries that reference a plan defined in `src/app/_data/planes.ts`
 * link to it via `relatedPlanSlug`.
 */

import type { HistoriaCategory, HistoriaEntry } from "./types";

import { ENTRIES_COLONIA } from "./colonia";
import { ENTRIES_CONSTITUCION } from "./constitucion";
import { ENTRIES_CULTURA } from "./cultura";
import { ENTRIES_DEPORTES } from "./deportes";
import { ENTRIES_GASTRONOMIA } from "./gastronomia";
import { ENTRIES_GEOGRAFIA } from "./geografia";
import { ENTRIES_INDEPENDENCIA } from "./independencia";
import { ENTRIES_INSTITUCIONES } from "./instituciones";
import { ENTRIES_MODERNO } from "./moderno";
import { ENTRIES_PERSONAJES } from "./personajes";
import { ENTRIES_PREHISPANICO } from "./prehispanico";
import { ENTRIES_REVOLUCION } from "./revolucion";
import { ENTRIES_SIGLO19 } from "./siglo-19";
import { sreExamenModelo } from "./sre-examen-modelo";
import { ENTRIES_UNESCO_Y_PUEBLOS } from "./unesco-y-pueblos";

export { CATEGORIES, CATEGORY_GROUPS } from "./types";
export type {
  CategoryGroup,
  CategoryMeta,
  Correction,
  EntryChoices,
  HistoriaCategory,
  HistoriaEntry,
} from "./types";

export {
  ENTRIES_COLONIA,
  ENTRIES_CONSTITUCION,
  ENTRIES_CULTURA,
  ENTRIES_DEPORTES,
  ENTRIES_GASTRONOMIA,
  ENTRIES_GEOGRAFIA,
  ENTRIES_INDEPENDENCIA,
  ENTRIES_INSTITUCIONES,
  ENTRIES_MODERNO,
  ENTRIES_PERSONAJES,
  ENTRIES_PREHISPANICO,
  ENTRIES_REVOLUCION,
  ENTRIES_SIGLO19,
  ENTRIES_UNESCO_Y_PUEBLOS,
  sreExamenModelo,
};

/**
 * Flat collection of every question, ordered to match the blocks
 * exposed by `CATEGORY_GROUPS`: first the historical timeline
 * (prehispanic → modern), then State and society, Geography and
 * heritage, and finally Culture and daily life.
 */
export const HISTORIA_ENTRIES: HistoriaEntry[] = [
  ...ENTRIES_PREHISPANICO,
  ...ENTRIES_COLONIA,
  ...ENTRIES_INDEPENDENCIA,
  ...ENTRIES_SIGLO19,
  ...ENTRIES_REVOLUCION,
  ...ENTRIES_MODERNO,
  ...ENTRIES_CONSTITUCION,
  ...ENTRIES_INSTITUCIONES,
  ...ENTRIES_GEOGRAFIA,
  ...ENTRIES_UNESCO_Y_PUEBLOS,
  ...ENTRIES_GASTRONOMIA,
  ...ENTRIES_CULTURA,
  ...ENTRIES_DEPORTES,
  ...ENTRIES_PERSONAJES,
  // SRE Examen Modelo questions are merged last so the existing
  // historical timeline stays at the top of the list. Each entry
  // carries its own `category`, so the list view still places the
  // questions in the right thematic block.
  ...sreExamenModelo,
];

/** Returns every entry that belongs to the given category. */
export function getEntriesByCategory(
  category: HistoriaCategory,
): HistoriaEntry[] {
  return HISTORIA_ENTRIES.filter((entry) => entry.category === category);
}

/** Returns only the entries that carry a `correction`. */
export function getEntriesWithCorrections(): HistoriaEntry[] {
  return HISTORIA_ENTRIES.filter((entry) => entry.correction !== undefined);
}

/** Returns the entry whose `id` matches, or `undefined`. */
export function getEntryById(id: string): HistoriaEntry | undefined {
  return HISTORIA_ENTRIES.find((entry) => entry.id === id);
}

/**
 * Returns every entry that points at a specific plan (via
 * `relatedPlanSlug`). Useful for rendering, inside a plan's detail
 * view, every related study question, or for building bidirectional
 * links without coupling `planes.ts` with `historia/`.
 */
export function getEntriesForPlan(planSlug: string): HistoriaEntry[] {
  return HISTORIA_ENTRIES.filter(
    (entry) => entry.relatedPlanSlug === planSlug,
  );
}

/**
 * Pre-computed map of `planSlug -> related entries`. Useful when you
 * need to iterate over every plan at once (avoids N×M scans).
 */
export function getEntriesByPlanSlug(): Map<string, HistoriaEntry[]> {
  const map = new Map<string, HistoriaEntry[]>();
  for (const entry of HISTORIA_ENTRIES) {
    if (!entry.relatedPlanSlug) continue;
    const bucket = map.get(entry.relatedPlanSlug) ?? [];
    bucket.push(entry);
    map.set(entry.relatedPlanSlug, bucket);
  }
  return map;
}
