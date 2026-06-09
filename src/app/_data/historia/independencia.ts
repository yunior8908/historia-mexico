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
    choices: {
      correct:
        "Pretendían establecer un congreso soberano que gobernaría a nombre de Fernando VII, ante la invasión napoleónica a España.",
      distractors: [
        "Buscaban coronar de inmediato a Agustín de Iturbide como emperador de la Nueva España.",
        "Planeaban asesinar al virrey para entregar la Nueva España al Imperio británico.",
        "Pretendían abolir la monarquía y proclamar una república federal aliada de Estados Unidos.",
      ],
    },
  },
  {
    id: "pensador-mexicano",
    category: "independencia",
    question:
      "¿Quién fue el fundador de 'El Pensador Mexicano' (periódico importante en la época de la Independencia)?",
    answer: "José Joaquín Fernández de Lizardi.",
    tags: ["prensa", "lizardi"],
    choices: {
      correct: "José Joaquín Fernández de Lizardi.",
      distractors: [
        "Carlos María de Bustamante.",
        "Andrés Quintana Roo.",
        "Fray Servando Teresa de Mier.",
      ],
    },
  },
  {
    id: "despertador-americano",
    category: "independencia",
    question:
      "¿Cuál fue el primer periódico de los insurgentes durante el movimiento independentista?",
    answer: "El Despertador Americano, en 1810.",
    tags: ["prensa insurgente"],
    choices: {
      correct: "El Despertador Americano, en 1810.",
      distractors: [
        "El Ilustrador Nacional, en 1812.",
        "El Correo Americano del Sur, en 1813.",
        "El Semanario Patriótico Americano, en 1812.",
      ],
    },
  },
  {
    id: "isidro-morales-prensa",
    category: "independencia",
    question:
      "Creador de un periódico en la época de la Constitución de Cádiz",
    answer: "José Isidro Morales.",
    tags: ["prensa", "cadiz"],
    choices: {
      correct: "José Isidro Morales.",
      distractors: [
        "José María Cos.",
        "Carlos María de Bustamante.",
        "Andrés Quintana Roo.",
      ],
    },
  },
  {
    id: "isidro-morales-imprenta",
    category: "independencia",
    question:
      "¿Quién hizo la Ley de Imprenta que sale en la Constitución de Cádiz?",
    answer: "José Isidro Morales.",
    tags: ["imprenta", "cadiz"],
    choices: {
      correct: "José Isidro Morales.",
      distractors: [
        "Miguel Ramos Arizpe.",
        "José María Cos.",
        "Agustín de Argüelles.",
      ],
    },
  },

  // ─── Hidalgo and the Grito ─────────────────────────────────────────
  {
    id: "hidalgo-importancia",
    category: "independencia",
    question:
      "¿Cuál fue la importancia del sacerdote Miguel Hidalgo y Costilla en la historia de México?",
    answer: "Inició la Guerra de Independencia.",
    tags: ["hidalgo"],
    choices: {
      correct: "Inició la Guerra de Independencia.",
      distractors: [
        "Consumó la Independencia de México.",
        "Redactó la Constitución de 1824.",
        "Proclamó el Plan de Iguala.",
      ],
    },
  },
  {
    id: "grito-fecha",
    category: "independencia",
    question: "Día de la Independencia de México (Grito de Dolores)",
    answer: "16 de septiembre de 1810.",
    tags: ["grito de dolores"],
    choices: {
      correct: "16 de septiembre de 1810.",
      distractors: [
        "27 de septiembre de 1821.",
        "15 de septiembre de 1810.",
        "16 de septiembre de 1821.",
      ],
    },
  },
  {
    id: "grito-lugar",
    category: "independencia",
    question: "¿En qué estado fue el Grito de Independencia?",
    answer: "En Dolores Hidalgo, Guanajuato.",
    tags: ["grito de dolores", "guanajuato"],
    choices: {
      correct: "En Dolores Hidalgo, Guanajuato.",
      distractors: [
        "En San Miguel el Grande, Guanajuato.",
        "En Valladolid, Michoacán.",
        "En Querétaro, Querétaro.",
      ],
    },
  },
  {
    id: "estandarte-hidalgo",
    category: "independencia",
    question: "Imagen presente en el estandarte de Hidalgo (Blasón de Hidalgo)",
    answer: "La Virgen de Guadalupe.",
    tags: ["hidalgo", "guadalupe"],
    choices: {
      correct: "La Virgen de Guadalupe.",
      distractors: [
        "La Virgen de los Remedios.",
        "El águila devorando a la serpiente.",
        "La Cruz de Borgoña.",
      ],
    },
  },
  {
    id: "hidalgo-frase-indulto",
    category: "independencia",
    question:
      "¿Quién dijo: 'El indulto es para los criminales, no para los defensores de la patria'?",
    answer: "Miguel Hidalgo y Costilla.",
    tags: ["hidalgo", "frases"],
    choices: {
      correct: "Miguel Hidalgo y Costilla.",
      distractors: [
        "Ignacio Allende.",
        "José María Morelos y Pavón.",
        "Mariano Abasolo.",
      ],
    },
  },
  {
    id: "allende-frase",
    category: "independencia",
    question:
      "¿Quién dijo: 'Sin importar el tamaño de la ciudad o pueblo en donde nacen los hombres o mujeres, ellos son finalmente del tamaño de su obra...'?",
    answer: "Ignacio Allende.",
    tags: ["allende", "frases"],
    choices: {
      correct: "Ignacio Allende.",
      distractors: [
        "Miguel Hidalgo y Costilla.",
        "Juan Aldama.",
        "Mariano Jiménez.",
      ],
    },
  },

  // ─── Morelos ────────────────────────────────────────────────────
  {
    id: "morelos-frase",
    category: "independencia",
    question:
      "¿Quién dijo: '¡Morir es nada, cuando por la patria se muere!'?",
    answer: "José María Morelos y Pavón.",
    tags: ["morelos", "frases"],
    choices: {
      correct: "José María Morelos y Pavón.",
      distractors: [
        "Vicente Guerrero.",
        "Hermenegildo Galeana.",
        "Mariano Matamoros.",
      ],
    },
  },
  {
    id: "sentimientos-autor",
    category: "independencia",
    question: "¿Quién escribió el documento 'Sentimientos de la Nación'?",
    answer: "José María Morelos y Pavón (1813, en Chilpancingo).",
    tags: ["sentimientos", "morelos"],
    choices: {
      correct: "José María Morelos y Pavón (1813, en Chilpancingo).",
      distractors: [
        "Ignacio López Rayón (1812, en Zitácuaro).",
        "Miguel Hidalgo y Costilla (1810, en Guadalajara).",
        "Andrés Quintana Roo (1814, en Apatzingán).",
      ],
    },
  },
  {
    id: "sentimientos-contenido",
    category: "independencia",
    question:
      "Texto en el que aparece la separación de poderes y los derechos de los indígenas",
    answer: "Sentimientos de la Nación (José María Morelos y Pavón, 1813).",
    tags: ["sentimientos", "morelos"],
    choices: {
      correct: "Sentimientos de la Nación (José María Morelos y Pavón, 1813).",
      distractors: [
        "Elementos Constitucionales (Ignacio López Rayón, 1812).",
        "Constitución de Apatzingán (Congreso de Anáhuac, 1814).",
        "Plan de Iguala (Agustín de Iturbide, 1821).",
      ],
    },
  },
  {
    id: "sentimientos-frase",
    category: "independencia",
    question:
      "¿En qué documento se lee: 'Que la América es libre e independiente de España y de toda otra Nación, Gobierno o Monarquía... Que la Esclavitud se proscriba para siempre...'?",
    answer: "En Sentimientos de la Nación.",
    tags: ["sentimientos", "morelos"],
    choices: {
      correct: "En Sentimientos de la Nación.",
      distractors: [
        "En los Elementos Constitucionales.",
        "En la Constitución de Apatzingán.",
        "En el Acta de Independencia del Imperio Mexicano.",
      ],
    },
  },

  // ─── Women of the insurgency ─────────────────────────────────
  {
    id: "mujeres-independencia",
    category: "independencia",
    question: "Mujeres destacadas en la Independencia",
    answer: "Josefa Ortiz de Domínguez y Leona Vicario.",
    tags: ["mujeres"],
    choices: {
      correct: "Josefa Ortiz de Domínguez y Leona Vicario.",
      distractors: [
        "Gertrudis Bocanegra y Carmen Serdán.",
        "Leona Vicario y Sor Juana Inés de la Cruz.",
        "Josefa Ortiz de Domínguez y La Malinche.",
      ],
    },
  },
  {
    id: "corregidora",
    category: "independencia",
    question: "¿Quién fue conocida como 'La Corregidora'?",
    answer: "Josefa Ortiz de Domínguez.",
    tags: ["corregidora", "josefa ortiz"],
    choices: {
      correct: "Josefa Ortiz de Domínguez.",
      distractors: [
        "Leona Vicario.",
        "Gertrudis Bocanegra.",
        "Manuela Medina.",
      ],
    },
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
    choices: {
      correct:
        "Documento político proclamado por Agustín de Iturbide en el que se declara a la Nueva España como país soberano e independiente, bajo las Tres Garantías (Religión, Independencia y Unión).",
      distractors: [
        "Documento proclamado por José María Morelos en el que se establecía la separación de poderes y la abolición de la esclavitud.",
        "Acuerdo militar firmado por Antonio López de Santa Anna para desconocer a Iturbide y restablecer el Congreso.",
        "Tratado firmado entre Iturbide y Juan O'Donojú que reconocía la independencia de México ante España.",
      ],
    },
  },
  {
    id: "plan-iguala-firma",
    category: "independencia",
    relatedPlanSlug: "iguala",
    question: "¿Cuándo se firmó el Plan (Tratado) de Iguala?",
    answer: "El 24 de febrero de 1821.",
    tags: ["iguala", "1821"],
    choices: {
      correct: "El 24 de febrero de 1821.",
      distractors: [
        "El 27 de septiembre de 1821.",
        "El 24 de agosto de 1821.",
        "El 28 de septiembre de 1821.",
      ],
    },
  },
  {
    id: "plan-iguala-personajes",
    category: "independencia",
    relatedPlanSlug: "iguala",
    question: "¿Qué personajes proclamaron el Plan de Iguala?",
    answer: "Agustín de Iturbide y Vicente Guerrero.",
    tags: ["iguala", "iturbide", "guerrero"],
    choices: {
      correct: "Agustín de Iturbide y Vicente Guerrero.",
      distractors: [
        "Agustín de Iturbide y Juan O'Donojú.",
        "Vicente Guerrero y Guadalupe Victoria.",
        "Agustín de Iturbide y Antonio López de Santa Anna.",
      ],
    },
  },
  {
    id: "guerrero-frase",
    category: "independencia",
    question: "¿Quién dijo la frase: 'La patria es primero'?",
    answer: "Vicente Guerrero.",
    tags: ["guerrero", "frases"],
    choices: {
      correct: "Vicente Guerrero.",
      distractors: [
        "Agustín de Iturbide.",
        "José María Morelos y Pavón.",
        "Ignacio Allende.",
      ],
    },
  },
  {
    id: "primer-emperador",
    category: "independencia",
    question: "Nombre del primer emperador de México",
    answer: "Agustín de Iturbide (Agustín I).",
    tags: ["iturbide", "primer imperio"],
    choices: {
      correct: "Agustín de Iturbide (Agustín I).",
      distractors: [
        "Maximiliano de Habsburgo (Maximiliano I).",
        "Guadalupe Victoria (Guadalupe I).",
        "Antonio López de Santa Anna (Antonio I).",
      ],
    },
  },
  {
    id: "plan-casa-mata-que-es",
    category: "independencia",
    relatedPlanSlug: "casa-mata",
    question: "¿De qué se trató el Plan de Casa Mata?",
    answer:
      "Proclamado por el general Antonio López de Santa Anna para desconocer a Iturbide como emperador, anular el imperio y reinstalar el Congreso.",
    tags: ["casa mata", "santa anna", "iturbide"],
    choices: {
      correct:
        "Proclamado por el general Antonio López de Santa Anna para desconocer a Iturbide como emperador, anular el imperio y reinstalar el Congreso.",
      distractors: [
        "Proclamado por Agustín de Iturbide para declarar la independencia bajo las Tres Garantías.",
        "Proclamado por Vicente Guerrero para abolir la esclavitud en todo el territorio nacional.",
        "Proclamado por Guadalupe Victoria para establecer la primera república federal de México.",
      ],
    },
  },

  // ─── First president and the 1824 Constitution ──────────────────
  {
    id: "primer-presidente",
    category: "independencia",
    question: "¿Quién fue el primer presidente de México?",
    answer: "Guadalupe Victoria (1824–1829).",
    tags: ["guadalupe victoria"],
    choices: {
      correct: "Guadalupe Victoria (1824–1829).",
      distractors: [
        "Agustín de Iturbide (1822–1823).",
        "Vicente Guerrero (1829–1831).",
        "Nicolás Bravo (1824–1827).",
      ],
    },
  },
];
