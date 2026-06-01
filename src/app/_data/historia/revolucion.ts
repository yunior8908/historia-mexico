import type { HistoriaEntry } from "./types";

/**
 * Mexican Revolution (1910–1920). Madero, Zapata, Villa, Carranza,
 * Obregón, revolutionary plans and key events (Decena Trágica, the
 * 1917 Constitution).
 */
export const ENTRIES_REVOLUCION: HistoriaEntry[] = [
  // ─── Opening phase: Madero ─────────────────────────────────────────────
  {
    id: "revolucion-fecha",
    category: "revolucion",
    question: "Fecha de inicio de la Revolución Mexicana",
    answer: "20 de noviembre de 1910.",
    tags: ["fechas"],
  },
  {
    id: "celebracion-20-nov",
    category: "revolucion",
    question: "¿Qué se celebra el 20 de noviembre?",
    answer: "El Día de la Revolución Mexicana.",
    tags: ["fechas civicas"],
  },
  {
    id: "madero-lema",
    category: "revolucion",
    question: "El lema 'Sufragio efectivo, no reelección' fue la bandera política de:",
    answer: "Francisco I. Madero.",
    tags: ["madero", "frases"],
  },
  {
    id: "madero-libro",
    category: "revolucion",
    question: "Libro escrito por Francisco I. Madero",
    answer: "La Sucesión Presidencial en 1910.",
    tags: ["madero", "literatura"],
  },
  {
    id: "plan-san-luis",
    category: "revolucion",
    relatedPlanSlug: "san-luis",
    question: "¿De qué se trató el Plan de San Luis Potosí?",
    answer:
      "Fue promulgado por Francisco I. Madero para evitar la reelección de Porfirio Díaz y derrocar al Porfiriato. Convocó al levantamiento armado el 20 de noviembre de 1910.",
    tags: ["san luis", "madero"],
  },

  // ─── Zapata and the Plan de Ayala ─────────────────────────────────────
  {
    id: "zapata-lema",
    category: "revolucion",
    question: "¿Quién dijo 'Tierra y Libertad'?",
    answer: "Emiliano Zapata.",
    tags: ["zapata", "frases"],
  },
  {
    id: "zapata-lider-morelos",
    category: "revolucion",
    question:
      "Nombre del líder agrario que encabezó la Revolución Mexicana en el estado de Morelos",
    answer: "Emiliano Zapata.",
    tags: ["zapata", "morelos"],
  },
  {
    id: "plan-ayala",
    category: "revolucion",
    relatedPlanSlug: "ayala",
    question: "¿De qué se trató el Plan de Ayala?",
    answer:
      "Proclamado por Emiliano Zapata para desconocer al gobierno de Francisco I. Madero y devolver la propiedad de la tierra a los campesinos. Su lema fue 'Reforma, Libertad, Justicia y Ley'.",
    tags: ["ayala", "zapata"],
  },
  {
    id: "zapata-asesinato",
    category: "revolucion",
    question: "¿Cuándo y dónde fue asesinado Emiliano Zapata?",
    answer:
      "En la hacienda de Chinameca, Morelos, el 10 de abril de 1919.",
    tags: ["zapata", "chinameca"],
  },

  // ─── Pancho Villa ──────────────────────────────────────────────
  {
    id: "pancho-villa-quien",
    category: "revolucion",
    question: "¿Quién fue Pancho Villa?",
    answer: "Un líder de la Revolución Mexicana ('El Centauro del Norte').",
    tags: ["villa"],
  },
  {
    id: "pancho-villa-nombre",
    category: "revolucion",
    question: "Nombre real de Pancho Villa (El Centauro del Norte)",
    answer: "José Doroteo Arango Arámbula.",
    tags: ["villa"],
  },
  {
    id: "lider-revolucion",
    category: "revolucion",
    question: "¿A quién se le conoce como líder de la Revolución Mexicana?",
    answer: "A José Doroteo Arango Arámbula (Pancho Villa).",
    tags: ["villa"],
  },
  {
    id: "pancho-villa-asesinato",
    category: "revolucion",
    question: "¿Cuándo y dónde fue asesinado Pancho Villa?",
    answer: "El 20 de julio de 1923, en Parral, Chihuahua.",
    tags: ["villa"],
  },

  // ─── Decena Trágica / Huerta ───────────────────────────────────
  //     (Decena Trágica = "Ten Tragic Days", February 1913)
  {
    id: "decena-tragica",
    category: "revolucion",
    question:
      "Nombre del golpe militar (9 al 19 de febrero de 1913) para derrocar a Francisco I. Madero",
    answer: "La Decena Trágica.",
    tags: ["decena tragica", "madero"],
  },
  {
    id: "huerta-traicion",
    category: "revolucion",
    question:
      "Autor de la traición a Madero (golpe militar de 1913)",
    answer: "Victoriano Huerta.",
    tags: ["huerta", "decena tragica"],
  },
  {
    id: "temporada-zopilotes-autor",
    category: "revolucion",
    question:
      "'Temporada de zopilotes: una historia narrativa de la Decena Trágica', ¿quién es su autor?",
    answer: "Paco Ignacio Taibo II.",
    tags: ["literatura", "decena tragica"],
  },
  {
    id: "temporada-zopilotes-tema",
    category: "revolucion",
    question: "¿De qué trata 'Temporada de Zopilotes'?",
    answer: "De la Decena Trágica.",
    tags: ["literatura", "decena tragica"],
  },

  // ─── Orozco and the Plan de la Empacadora ─────────────────────────────
  {
    id: "plan-empacadora",
    category: "revolucion",
    relatedPlanSlug: "empacadora",
    question: "¿Quién proclamó el Plan de la Empacadora y contra quién?",
    answer:
      "Pascual Orozco, contra el gobierno de Francisco I. Madero (1912).",
    tags: ["empacadora", "orozco"],
  },

  // ─── Carranza and the Plan de Guadalupe ───────────────────────────────
  {
    id: "plan-guadalupe",
    category: "revolucion",
    relatedPlanSlug: "guadalupe",
    question: "Plan de Venustiano Carranza para derrocar a Victoriano Huerta",
    answer: "El Plan de Guadalupe (26 de marzo de 1913).",
    tags: ["guadalupe", "carranza"],
  },
  {
    id: "carranza-constitucionalista",
    category: "revolucion",
    question:
      "¿Quién encabezaba el Ejército Constitucionalista durante la Revolución?",
    answer: "Venustiano Carranza.",
    tags: ["carranza", "constitucionalistas"],
  },

  // ─── Obregón and the Plan de Agua Prieta ──────────────────────────────
  {
    id: "plan-agua-prieta",
    category: "revolucion",
    relatedPlanSlug: "agua-prieta",
    question:
      "Plan con el que Obregón, Calles y De la Huerta desconocieron a Carranza (1920)",
    answer: "El Plan de Agua Prieta.",
    tags: ["agua prieta", "obregon", "calles"],
  },

  // ─── Culture and society of the Revolution ────────────────────────
  {
    id: "corrido",
    category: "revolucion",
    question:
      "Composición musical característica de la época revolucionaria",
    answer: "El corrido.",
    tags: ["corrido", "musica"],
  },
  {
    id: "adelita-corrido",
    category: "revolucion",
    question: "Nombre de un famoso corrido revolucionario",
    answer: "La Adelita.",
    tags: ["corrido", "adelita"],
  },
  {
    id: "adelitas",
    category: "revolucion",
    question:
      "Las 'Adelitas' acompañaron a sus hombres al combate en:",
    answer: "La Revolución de 1910.",
    tags: ["adelitas", "mujeres"],
  },
  {
    id: "mariano-azuela",
    category: "revolucion",
    question: "Exponente de la literatura de la Revolución",
    answer: "Mariano Azuela (autor de 'Los de abajo').",
    tags: ["literatura", "azuela"],
  },
  {
    id: "ley-fuga-revolucion",
    category: "revolucion",
    question: "Forma de asesinato común en la Revolución",
    answer: "La Ley de Fuga.",
    tags: ["ley fuga"],
  },
  {
    id: "monumento-revolucion-origen",
    category: "revolucion",
    question:
      "La estructura del Palacio Legislativo Federal de Émile Bénard, ¿en qué monumento terminó utilizándose?",
    answer: "En el Monumento a la Revolución.",
    tags: ["monumento revolucion"],
  },
  {
    id: "monumento-revolucion-resumen",
    category: "revolucion",
    question:
      "Fue construido para ser el Palacio Legislativo pero terminó siendo:",
    answer: "El Monumento a la Revolución.",
    tags: ["monumento revolucion"],
  },
];
