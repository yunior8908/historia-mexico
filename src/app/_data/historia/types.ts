/**
 * Shared types for the Historia de México question bank.
 *
 * The dataset feeds the study/flashcards views. Every entry keeps
 * the original question as it appeared in the source notes; the
 * answer may have been corrected when the notes contained a
 * factual error. In that case, `correction` preserves the original
 * answer so the UI can display it with line-through alongside the
 * corrected one.
 */

export type HistoriaCategory =
  | "constitucion"
  | "prehispanico"
  | "colonia"
  | "independencia"
  | "siglo19"
  | "revolucion"
  | "moderno"
  | "geografia"
  | "gastronomia"
  | "cultura"
  | "unesco"
  | "pueblosMagicos"
  | "arqueologia"
  | "personajes"
  | "deportes"
  | "instituciones"
  | "simbolos"
  | "educacion";

export type Correction = {
  /** Answer exactly as it appeared in the source notes. */
  originalAnswer: string;
  /** Short note explaining why the answer was corrected. */
  note: string;
};

export type HistoriaEntry = {
  /** Unique identifier, kebab-case. */
  id: string;
  category: HistoriaCategory;
  /** Free-form sub-bucket for fine-grained filtering (e.g. "olmeca", "porfiriato"). */
  subcategory?: string;
  question: string;
  /** Canonical answer (corrected when applicable). */
  answer: string;
  /** Free-form tags for search. */
  tags?: string[];
  /** Matching slug from `src/app/_data/planes.ts` when applicable. */
  relatedPlanSlug?: string;
  /** Present only when an error or outdated value from the notes was corrected. */
  correction?: Correction;
};

export type CategoryMeta = {
  id: HistoriaCategory;
  label: string;
  description: string;
};

/**
 * Chronological/thematic order. Historical categories come first
 * (prehispanic → modern), then cross-cutting topics in logical
 * order. This array drives both the filter chips and the list render
 * order when it is not overridden by `CATEGORY_GROUPS`.
 */
export const CATEGORIES: CategoryMeta[] = [
  // Historical timeline (chronological).
  {
    id: "prehispanico",
    label: "México prehispánico",
    description:
      "Olmecas, mayas, mexicas, teotihuacanos, toltecas, zapotecos, purépechas.",
  },
  {
    id: "colonia",
    label: "Conquista y virreinato",
    description:
      "1519–1821. Nueva España, instituciones coloniales, evangelización.",
  },
  {
    id: "independencia",
    label: "Independencia y Primer Imperio",
    description: "1810–1823. Hidalgo, Morelos, Iturbide, planes fundacionales.",
  },
  {
    id: "siglo19",
    label: "México del siglo XIX",
    description:
      "Repúblicas, Reforma, intervenciones extranjeras, Porfiriato.",
  },
  {
    id: "revolucion",
    label: "Revolución Mexicana",
    description: "1910–1920. Madero, Zapata, Villa, Carranza, Obregón.",
  },
  {
    id: "moderno",
    label: "México moderno",
    description:
      "Postrevolución, instituciones, TLCAN, EZLN, sismos, siglo XXI.",
  },
  // State and society.
  {
    id: "constitucion",
    label: "Constitución y gobierno",
    description: "Artículos, poderes, leyes, organización del Estado.",
  },
  {
    id: "instituciones",
    label: "Instituciones",
    description: "UNAM, IPN, IMSS, ISSSTE, INE, PROFECO, etc.",
  },
  {
    id: "simbolos",
    label: "Símbolos patrios",
    description: "Bandera, himno, escudo, flor y árbol nacionales.",
  },
  {
    id: "educacion",
    label: "Educación",
    description: "Niveles, leyes, escuelas, premios.",
  },
  // Geography and heritage.
  {
    id: "geografia",
    label: "Geografía",
    description: "Estados, capitales, ríos, mares, montañas, fronteras.",
  },
  {
    id: "unesco",
    label: "Patrimonio UNESCO",
    description: "Sitios de México inscritos como Patrimonio de la Humanidad.",
  },
  {
    id: "pueblosMagicos",
    label: "Pueblos Mágicos",
    description: "Programa SECTUR.",
  },
  {
    id: "arqueologia",
    label: "Zonas arqueológicas",
    description: "Ubicación y cultura de los sitios prehispánicos.",
  },
  // Culture and daily life.
  {
    id: "gastronomia",
    label: "Gastronomía",
    description: "Platillos, dulces, bebidas, ingredientes originarios.",
  },
  {
    id: "cultura",
    label: "Cultura y artes",
    description: "Cine, literatura, música, pintura, danza, fiestas.",
  },
  {
    id: "deportes",
    label: "Deportes",
    description: "Box, fútbol, olimpiadas, charrería.",
  },
  {
    id: "personajes",
    label: "Personajes",
    description: "Figuras transversales: artistas, científicos, deportistas.",
  },
];

export type CategoryGroup = {
  id: "historia" | "estado" | "geografia" | "cultura";
  label: string;
  description: string;
  /**
   * CSS variable expression for the group's accent color. Reuses
   * the planes palette (`--era-*`) so the list and the planes view
   * share a coherent visual language. Used by `GroupHeader`,
   * `CategoryHeader`, `EntryCard` and active `CategoryChip`s.
   */
  colorVar: string;
  /** Categories belonging to this super-group, in display order. */
  categoryIds: HistoriaCategory[];
};

/**
 * Super-groups that bundle the 18 categories into four coherent
 * blocks. The "historia" block carries historical periods in strict
 * chronological order; the rest organize the cross-cutting topics.
 *
 * `categoryIds` arrays must be disjoint from each other and, taken
 * together, cover every value of `HistoriaCategory`.
 */
export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    id: "historia",
    label: "Línea histórica",
    description:
      "De los pueblos originarios al México moderno, en orden cronológico.",
    colorVar: "var(--era-independencia)",
    categoryIds: [
      "prehispanico",
      "colonia",
      "independencia",
      "siglo19",
      "revolucion",
      "moderno",
    ],
  },
  {
    id: "estado",
    label: "Estado y sociedad",
    description:
      "Constitución, instituciones, símbolos patrios y educación.",
    colorVar: "var(--era-postrevolucion)",
    categoryIds: ["constitucion", "instituciones", "simbolos", "educacion"],
  },
  {
    id: "geografia",
    label: "Geografía y patrimonio",
    description:
      "Estados, ríos, sitios UNESCO, pueblos mágicos y arqueología.",
    colorVar: "var(--era-reforma)",
    categoryIds: ["geografia", "unesco", "pueblosMagicos", "arqueologia"],
  },
  {
    id: "cultura",
    label: "Cultura y vida",
    description:
      "Gastronomía, artes, deportes y personajes ilustres.",
    colorVar: "var(--era-republica)",
    categoryIds: ["gastronomia", "cultura", "deportes", "personajes"],
  },
];
