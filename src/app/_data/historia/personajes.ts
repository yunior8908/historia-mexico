import type { HistoriaEntry } from "./types";

/**
 * Notable Mexican figures (cross-cutting). When a figure clearly
 * belongs to a specific era (e.g. Hidalgo to Independence), the
 * primary entry lives in that category; awards, records and
 * cross-cutting figures live here.
 */
export const ENTRIES_PERSONAJES: HistoriaEntry[] = [
  // ─── Nobel Prizes ─────────────────────────────────────────────
  {
    id: "nobel-mexicanos",
    category: "personajes",
    subcategory: "nobel",
    question: "Mexicanos ganadores del Premio Nobel",
    answer:
      "Alfonso García Robles (Paz, 1982), Octavio Paz (Literatura, 1990) y Mario Molina (Química, 1995).",
    tags: ["nobel"],
  },
  {
    id: "nobel-quimica-molina",
    category: "personajes",
    subcategory: "nobel",
    question:
      "Mexicano que ganó el Premio Nobel de Química por sus investigaciones sobre la capa de ozono",
    answer:
      "José Mario Molina-Pasquel y Henríquez, en 1995.",
    tags: ["nobel", "molina"],
  },

  // ─── Science ───────────────────────────────────────────────────
  {
    id: "tv-color",
    category: "personajes",
    subcategory: "ciencia",
    question: "¿Quién inventó la TV a color?",
    answer: "Guillermo González Camarena.",
    tags: ["ciencia", "tv"],
  },
  {
    id: "pastilla-anticonceptiva",
    category: "personajes",
    subcategory: "ciencia",
    question: "¿Quién inventó la pastilla anticonceptiva?",
    answer:
      "Luis Ernesto Miramontes Cárdenas (síntesis lograda el 15 de octubre de 1951).",
    tags: ["ciencia", "anticonceptivo"],
  },
  {
    id: "primer-astronauta",
    category: "personajes",
    subcategory: "ciencia",
    question: "Nombre del primer astronauta mexicano",
    answer: "Rodolfo Neri Vela (1985, misión STS-61-B).",
    tags: ["astronauta"],
  },
  {
    id: "primera-mujer-espacio",
    category: "personajes",
    subcategory: "ciencia",
    question: "¿Quién es la primera mujer mexicana en viajar al espacio?",
    answer: "Katya Echazarreta (2022).",
    tags: ["astronauta", "mujeres"],
  },

  // ─── Other recurring figures ──────────────────────────────
  {
    id: "petroleo-nombre",
    category: "personajes",
    subcategory: "ciencia",
    question: "Nombre científico (común) del petróleo",
    answer: "Crudo (petróleo crudo).",
    tags: ["petroleo"],
  },
];
