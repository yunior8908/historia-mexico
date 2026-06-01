import type { HistoriaEntry } from "./types";

/**
 * War of Independence (1810–1821) and the First Mexican Empire
 * (1821–1823). Hidalgo, Allende, Morelos, Iturbide, Guerrero, the
 * women of the insurgency, foundational plans and the first
 * president.
 *
 * When a question references a plan defined in
 * `src/app/_data/planes.ts`, it carries `relatedPlanSlug` so the UI
 * can link to the plan's full detail page.
 */
export const ENTRIES_INDEPENDENCIA: HistoriaEntry[] = [
  // ─── Background ────────────────────────────────────────────────
  {
    id: "conspiracion-valladolid",
    category: "independencia",
    question: "¿En qué consistió la Conspiración de Valladolid (1809)?",
    answer:
      "Pretendían establecer un congreso soberano que gobernaría a nombre de Fernando VII, ante la invasión napoleónica a España.",
    tags: ["valladolid", "antecedentes"],
  },
  {
    id: "pensador-mexicano",
    category: "independencia",
    question:
      "¿Quién fue el fundador de 'El Pensador Mexicano' (periódico importante en la época de la Independencia)?",
    answer: "José Joaquín Fernández de Lizardi.",
    tags: ["prensa", "lizardi"],
  },
  {
    id: "despertador-americano",
    category: "independencia",
    question:
      "¿Cuál fue el primer periódico de los insurgentes durante el movimiento independentista?",
    answer: "El Despertador Americano, en 1810.",
    tags: ["prensa insurgente"],
  },
  {
    id: "isidro-morales-prensa",
    category: "independencia",
    question:
      "Creador de un periódico en la época de la Constitución de Cádiz",
    answer: "José Isidro Morales.",
    tags: ["prensa", "cadiz"],
  },
  {
    id: "isidro-morales-imprenta",
    category: "independencia",
    question:
      "¿Quién hizo la Ley de Imprenta que sale en la Constitución de Cádiz?",
    answer: "José Isidro Morales.",
    tags: ["imprenta", "cadiz"],
  },

  // ─── Hidalgo and the Grito ─────────────────────────────────────────
  {
    id: "hidalgo-importancia",
    category: "independencia",
    question:
      "¿Cuál fue la importancia del sacerdote Miguel Hidalgo y Costilla en la historia de México?",
    answer: "Inició la Guerra de Independencia.",
    tags: ["hidalgo"],
  },
  {
    id: "grito-fecha",
    category: "independencia",
    question: "Día de la Independencia de México (Grito de Dolores)",
    answer: "16 de septiembre de 1810.",
    tags: ["grito de dolores"],
  },
  {
    id: "grito-lugar",
    category: "independencia",
    question: "¿En qué estado fue el Grito de Independencia?",
    answer: "En Dolores Hidalgo, Guanajuato.",
    tags: ["grito de dolores", "guanajuato"],
  },
  {
    id: "estandarte-hidalgo",
    category: "independencia",
    question: "Imagen presente en el estandarte de Hidalgo (Blasón de Hidalgo)",
    answer: "La Virgen de Guadalupe.",
    tags: ["hidalgo", "guadalupe"],
  },
  {
    id: "hidalgo-frase-indulto",
    category: "independencia",
    question:
      "¿Quién dijo: 'El indulto es para los criminales, no para los defensores de la patria'?",
    answer: "Miguel Hidalgo y Costilla.",
    tags: ["hidalgo", "frases"],
  },
  {
    id: "allende-frase",
    category: "independencia",
    question:
      "¿Quién dijo: 'Sin importar el tamaño de la ciudad o pueblo en donde nacen los hombres o mujeres, ellos son finalmente del tamaño de su obra...'?",
    answer: "Ignacio Allende.",
    tags: ["allende", "frases"],
  },

  // ─── Morelos ────────────────────────────────────────────────────
  {
    id: "morelos-frase",
    category: "independencia",
    question:
      "¿Quién dijo: '¡Morir es nada, cuando por la patria se muere!'?",
    answer: "José María Morelos y Pavón.",
    tags: ["morelos", "frases"],
  },
  {
    id: "sentimientos-autor",
    category: "independencia",
    question: "¿Quién escribió el documento 'Sentimientos de la Nación'?",
    answer: "José María Morelos y Pavón (1813, en Chilpancingo).",
    tags: ["sentimientos", "morelos"],
  },
  {
    id: "sentimientos-contenido",
    category: "independencia",
    question:
      "Texto en el que aparece la separación de poderes y los derechos de los indígenas",
    answer: "Sentimientos de la Nación (José María Morelos y Pavón, 1813).",
    tags: ["sentimientos", "morelos"],
  },
  {
    id: "sentimientos-frase",
    category: "independencia",
    question:
      "¿En qué documento se lee: 'Que la América es libre e independiente de España y de toda otra Nación, Gobierno o Monarquía... Que la Esclavitud se proscriba para siempre...'?",
    answer: "En Sentimientos de la Nación.",
    tags: ["sentimientos", "morelos"],
  },

  // ─── Women of the insurgency ─────────────────────────────────
  {
    id: "mujeres-independencia",
    category: "independencia",
    question: "Mujeres destacadas en la Independencia",
    answer: "Josefa Ortiz de Domínguez y Leona Vicario.",
    tags: ["mujeres"],
  },
  {
    id: "corregidora",
    category: "independencia",
    question: "¿Quién fue conocida como 'La Corregidora'?",
    answer: "Josefa Ortiz de Domínguez.",
    tags: ["corregidora", "josefa ortiz"],
  },

  // ─── Consummation and Iturbide ────────────────────────────────────
  {
    id: "plan-iguala-que-es",
    category: "independencia",
    relatedPlanSlug: "iguala",
    question: "¿Qué es el Plan de Iguala?",
    answer:
      "Documento político proclamado por Agustín de Iturbide en el que se declara a la Nueva España como país soberano e independiente, bajo las Tres Garantías (Religión, Independencia y Unión).",
    tags: ["iguala", "iturbide"],
  },
  {
    id: "plan-iguala-firma",
    category: "independencia",
    relatedPlanSlug: "iguala",
    question: "¿Cuándo se firmó el Plan (Tratado) de Iguala?",
    answer: "El 24 de febrero de 1821.",
    tags: ["iguala", "1821"],
  },
  {
    id: "plan-iguala-personajes",
    category: "independencia",
    relatedPlanSlug: "iguala",
    question: "¿Qué personajes proclamaron el Plan de Iguala?",
    answer: "Agustín de Iturbide y Vicente Guerrero.",
    tags: ["iguala", "iturbide", "guerrero"],
  },
  {
    id: "guerrero-frase",
    category: "independencia",
    question: "¿Quién dijo la frase: 'La patria es primero'?",
    answer: "Vicente Guerrero.",
    tags: ["guerrero", "frases"],
  },
  {
    id: "primer-emperador",
    category: "independencia",
    question: "Nombre del primer emperador de México",
    answer: "Agustín de Iturbide (Agustín I).",
    tags: ["iturbide", "primer imperio"],
  },
  {
    id: "plan-casa-mata-que-es",
    category: "independencia",
    relatedPlanSlug: "casa-mata",
    question: "¿De qué se trató el Plan de Casa Mata?",
    answer:
      "Proclamado por el general Antonio López de Santa Anna para desconocer a Iturbide como emperador, anular el imperio y reinstalar el Congreso.",
    tags: ["casa mata", "santa anna", "iturbide"],
  },

  // ─── First president and the 1824 Constitution ──────────────────
  {
    id: "primer-presidente",
    category: "independencia",
    question: "¿Quién fue el primer presidente de México?",
    answer: "Guadalupe Victoria (1824–1829).",
    tags: ["guadalupe victoria"],
  },
];
