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
    choices: {
      correct:
        "Alfonso García Robles (Paz, 1982), Octavio Paz (Literatura, 1990) y Mario Molina (Química, 1995).",
      distractors: [
        "Carlos Fuentes (Literatura, 1987), Diego Rivera (Paz, 1950) y Guillermo González Camarena (Física, 1963).",
        "Juan Rulfo (Literatura, 1975), Lázaro Cárdenas (Paz, 1955) y Luis Miramontes (Química, 1980).",
        "Octavio Paz (Paz, 1990), Frida Kahlo (Arte, 1954) y Mario Molina (Medicina, 1995).",
      ],
    },
  },
  {
    id: "nobel-quimica-molina",
    category: "personajes",
    subcategory: "nobel",
    question:
      "Mexicano que ganó el Premio Nobel de Química por sus investigaciones sobre la capa de ozono",
    answer: "José Mario Molina-Pasquel y Henríquez, en 1995.",
    tags: ["nobel", "molina"],
    choices: {
      correct: "José Mario Molina-Pasquel y Henríquez, en 1995.",
      distractors: [
        "Alfonso García Robles, en 1982.",
        "Luis Ernesto Miramontes Cárdenas, en 1951.",
        "Guillermo González Camarena, en 1963.",
      ],
    },
  },

  // ─── Science ───────────────────────────────────────────────────
  {
    id: "tv-color",
    category: "personajes",
    subcategory: "ciencia",
    question: "¿Quién inventó la TV a color?",
    answer: "Guillermo González Camarena.",
    tags: ["ciencia", "tv"],
    choices: {
      correct: "Guillermo González Camarena.",
      distractors: [
        "Luis Ernesto Miramontes Cárdenas.",
        "Manuel Cerda Peña.",
        "John Logie Baird.",
      ],
    },
  },
  {
    id: "pastilla-anticonceptiva",
    category: "personajes",
    subcategory: "ciencia",
    question: "¿Quién inventó la pastilla anticonceptiva?",
    answer:
      "Luis Ernesto Miramontes Cárdenas (síntesis lograda el 15 de octubre de 1951).",
    tags: ["ciencia", "anticonceptivo"],
    choices: {
      correct:
        "Luis Ernesto Miramontes Cárdenas (síntesis lograda el 15 de octubre de 1951).",
      distractors: [
        "Guillermo González Camarena (en 1940).",
        "Mario Molina (en 1971).",
        "Carl Djerassi (en solitario, en 1949).",
      ],
    },
  },
  {
    id: "primer-astronauta",
    category: "personajes",
    subcategory: "ciencia",
    question: "Nombre del primer astronauta mexicano",
    answer: "Rodolfo Neri Vela (1985, misión STS-61-B).",
    tags: ["astronauta"],
    choices: {
      correct: "Rodolfo Neri Vela (1985, misión STS-61-B).",
      distractors: [
        "Katya Echazarreta (2022).",
        "José Hernández Moreno (2009).",
        "Guillermo González Camarena (1963).",
      ],
    },
  },
  {
    id: "primera-mujer-espacio",
    category: "personajes",
    subcategory: "ciencia",
    question: "¿Quién es la primera mujer mexicana en viajar al espacio?",
    answer: "Katya Echazarreta (2022).",
    tags: ["astronauta", "mujeres"],
    choices: {
      correct: "Katya Echazarreta (2022).",
      distractors: [
        "Ellen Ochoa (1993).",
        "Yalitza Aparicio (2019).",
        "Carmen Félix (2016).",
      ],
    },
  },

  // ─── Other recurring figures ──────────────────────────────
  {
    id: "petroleo-nombre",
    category: "personajes",
    subcategory: "ciencia",
    question: "Nombre científico (común) del petróleo",
    answer: "Crudo (petróleo crudo).",
    tags: ["petroleo"],
    choices: {
      correct: "Crudo (petróleo crudo).",
      distractors: [
        "Hidrocarburo refinado.",
        "Gas natural.",
        "Bitumen mineral.",
      ],
    },
  },
];
