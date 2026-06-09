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
    choices: {
      correct: "20 de noviembre de 1910.",
      distractors: [
        "16 de septiembre de 1910.",
        "5 de febrero de 1913.",
        "25 de marzo de 1911.",
      ],
    },
  },
  {
    id: "celebracion-20-nov",
    category: "revolucion",
    question: "¿Qué se celebra el 20 de noviembre?",
    answer: "El Día de la Revolución Mexicana.",
    tags: ["fechas civicas"],
    choices: {
      correct: "El Día de la Revolución Mexicana.",
      distractors: [
        "El Día de la Independencia de México.",
        "El Día de la Constitución Mexicana.",
        "El Día de la Bandera Nacional.",
      ],
    },
  },
  {
    id: "madero-lema",
    category: "revolucion",
    question: "El lema 'Sufragio efectivo, no reelección' fue la bandera política de:",
    answer: "Francisco I. Madero.",
    tags: ["madero", "frases"],
    choices: {
      correct: "Francisco I. Madero.",
      distractors: [
        "Emiliano Zapata.",
        "Venustiano Carranza.",
        "Francisco Villa.",
      ],
    },
  },
  {
    id: "madero-libro",
    category: "revolucion",
    question: "Libro escrito por Francisco I. Madero",
    answer: "La Sucesión Presidencial en 1910.",
    tags: ["madero", "literatura"],
    choices: {
      correct: "La Sucesión Presidencial en 1910.",
      distractors: [
        "La Sucesión Presidencial en 1909.",
        "El Antirreeleccionismo en México.",
        "México y su Porvenir Político.",
      ],
    },
  },
  {
    id: "plan-san-luis",
    category: "revolucion",
    relatedPlanSlug: "san-luis",
    question: "¿De qué se trató el Plan de San Luis Potosí?",
    answer:
      "Fue promulgado por Francisco I. Madero para evitar la reelección de Porfirio Díaz y derrocar al Porfiriato. Convocó al levantamiento armado el 20 de noviembre de 1910.",
    tags: ["san luis", "madero"],
    choices: {
      correct:
        "Fue promulgado por Francisco I. Madero para evitar la reelección de Porfirio Díaz y derrocar al Porfiriato. Convocó al levantamiento armado el 20 de noviembre de 1910.",
      distractors: [
        "Fue proclamado por Emiliano Zapata para exigir la repartición de tierras a los campesinos y desconocer al gobierno de Francisco I. Madero en el estado de Morelos.",
        "Fue redactado por Venustiano Carranza para desconocer a Victoriano Huerta y restablecer el orden constitucional tras la Decena Trágica.",
        "Fue promulgado por Pascual Orozco para levantarse en armas contra Francisco I. Madero por incumplir las promesas agrarias de la Revolución.",
      ],
    },
  },

  // ─── Zapata and the Plan de Ayala ─────────────────────────────────────
  {
    id: "zapata-lema",
    category: "revolucion",
    question: "¿Quién dijo 'Tierra y Libertad'?",
    answer: "Emiliano Zapata.",
    tags: ["zapata", "frases"],
    choices: {
      correct: "Emiliano Zapata.",
      distractors: [
        "Francisco Villa.",
        "Francisco I. Madero.",
        "Venustiano Carranza.",
      ],
    },
  },
  {
    id: "zapata-lider-morelos",
    category: "revolucion",
    question:
      "Nombre del líder agrario que encabezó la Revolución Mexicana en el estado de Morelos",
    answer: "Emiliano Zapata.",
    tags: ["zapata", "morelos"],
    choices: {
      correct: "Emiliano Zapata.",
      distractors: [
        "Pascual Orozco.",
        "Francisco Villa.",
        "Venustiano Carranza.",
      ],
    },
  },
  {
    id: "plan-ayala",
    category: "revolucion",
    relatedPlanSlug: "ayala",
    question: "¿De qué se trató el Plan de Ayala?",
    answer:
      "Proclamado por Emiliano Zapata para desconocer al gobierno de Francisco I. Madero y devolver la propiedad de la tierra a los campesinos. Su lema fue 'Reforma, Libertad, Justicia y Ley'.",
    tags: ["ayala", "zapata"],
    choices: {
      correct:
        "Proclamado por Emiliano Zapata para desconocer al gobierno de Francisco I. Madero y devolver la propiedad de la tierra a los campesinos. Su lema fue 'Reforma, Libertad, Justicia y Ley'.",
      distractors: [
        "Promulgado por Francisco I. Madero para evitar la reelección de Porfirio Díaz y convocar al pueblo a levantarse en armas el 20 de noviembre de 1910.",
        "Redactado por Venustiano Carranza para desconocer a Victoriano Huerta y encabezar el Ejército Constitucionalista. Su lema fue 'Constitución y Reforma'.",
        "Proclamado por Pascual Orozco para desconocer a Francisco I. Madero por traicionar los ideales agrarios de la Revolución en el norte del país.",
      ],
    },
  },
  {
    id: "zapata-asesinato",
    category: "revolucion",
    question: "¿Cuándo y dónde fue asesinado Emiliano Zapata?",
    answer:
      "En la hacienda de Chinameca, Morelos, el 10 de abril de 1919.",
    tags: ["zapata", "chinameca"],
    choices: {
      correct: "En la hacienda de Chinameca, Morelos, el 10 de abril de 1919.",
      distractors: [
        "En la hacienda de Chinameca, Puebla, el 9 de abril de 1919.",
        "En la ciudad de Cuautla, Morelos, el 8 de mayo de 1920.",
        "En la hacienda de Canutillo, Morelos, el 15 de abril de 1919.",
      ],
    },
  },

  // ─── Pancho Villa ──────────────────────────────────────────────
  {
    id: "pancho-villa-quien",
    category: "revolucion",
    question: "¿Quién fue Pancho Villa?",
    answer: "Un líder de la Revolución Mexicana ('El Centauro del Norte').",
    tags: ["villa"],
    choices: {
      correct: "Un líder de la Revolución Mexicana ('El Centauro del Norte').",
      distractors: [
        "Un líder de la Revolución Mexicana ('El Caudillo del Sur').",
        "Un general del Ejército Federal ('El Chacal de la Decena Trágica').",
        "Un líder agrarista de Morelos ('El Atila del Sur').",
      ],
    },
  },
  {
    id: "pancho-villa-nombre",
    category: "revolucion",
    question: "Nombre real de Pancho Villa (El Centauro del Norte)",
    answer: "José Doroteo Arango Arámbula.",
    tags: ["villa"],
    choices: {
      correct: "José Doroteo Arango Arámbula.",
      distractors: [
        "Doroteo Arango Quezada.",
        "José Inés Arango Salazar.",
        "Doroteo Arámbula Arango.",
      ],
    },
  },
  {
    id: "lider-revolucion",
    category: "revolucion",
    question: "¿A quién se le conoce como líder de la Revolución Mexicana?",
    answer: "A José Doroteo Arango Arámbula (Pancho Villa).",
    tags: ["villa"],
    choices: {
      correct: "A José Doroteo Arango Arámbula (Pancho Villa).",
      distractors: [
        "A Emiliano Zapata Salazar (El Caudillo del Sur).",
        "A José Victoriano Huerta Márquez (El Chacal).",
        "A Francisco Ignacio Madero (El Apóstol de la Democracia).",
      ],
    },
  },
  {
    id: "pancho-villa-asesinato",
    category: "revolucion",
    question: "¿Cuándo y dónde fue asesinado Pancho Villa?",
    answer: "El 20 de julio de 1923, en Parral, Chihuahua.",
    tags: ["villa"],
    choices: {
      correct: "El 20 de julio de 1923, en Parral, Chihuahua.",
      distractors: [
        "El 10 de abril de 1919, en Chinameca, Morelos.",
        "El 21 de mayo de 1920, en Tlaxcalantongo, Puebla.",
        "El 8 de junio de 1923, en Canutillo, Durango.",
      ],
    },
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
    choices: {
      correct: "La Decena Trágica.",
      distractors: [
        "La Semana Trágica.",
        "La Decena Sangrienta.",
        "El Motín de Tacubaya.",
      ],
    },
  },
  {
    id: "huerta-traicion",
    category: "revolucion",
    question:
      "Autor de la traición a Madero (golpe militar de 1913)",
    answer: "Victoriano Huerta.",
    tags: ["huerta", "decena tragica"],
    choices: {
      correct: "Victoriano Huerta.",
      distractors: [
        "Pascual Orozco.",
        "Pablo González.",
        "Álvaro Obregón.",
      ],
    },
  },
  {
    id: "temporada-zopilotes-autor",
    category: "revolucion",
    question:
      "'Temporada de zopilotes: una historia narrativa de la Decena Trágica', ¿quién es su autor?",
    answer: "Paco Ignacio Taibo II.",
    tags: ["literatura", "decena tragica"],
    choices: {
      correct: "Paco Ignacio Taibo II.",
      distractors: [
        "Carlos Fuentes.",
        "Elena Poniatowska.",
        "Martín Luis Guzmán.",
      ],
    },
  },
  {
    id: "temporada-zopilotes-tema",
    category: "revolucion",
    question: "¿De qué trata 'Temporada de Zopilotes'?",
    answer: "De la Decena Trágica.",
    tags: ["literatura", "decena tragica"],
    choices: {
      correct: "De la Decena Trágica.",
      distractors: [
        "De la Batalla de Celaya.",
        "De la toma de Ciudad Juárez.",
        "De la Convención de Aguascalientes.",
      ],
    },
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
    choices: {
      correct: "Pascual Orozco, contra el gobierno de Francisco I. Madero (1912).",
      distractors: [
        "Bernardo Reyes, contra el gobierno de Francisco I. Madero (1911).",
        "Félix Díaz, contra el gobierno de Francisco I. Madero (1912).",
        "Emiliano Zapata, contra el gobierno de Victoriano Huerta (1913).",
      ],
    },
  },

  // ─── Carranza and the Plan de Guadalupe ───────────────────────────────
  {
    id: "plan-guadalupe",
    category: "revolucion",
    relatedPlanSlug: "guadalupe",
    question: "Plan de Venustiano Carranza para derrocar a Victoriano Huerta",
    answer: "El Plan de Guadalupe (26 de marzo de 1913).",
    tags: ["guadalupe", "carranza"],
    choices: {
      correct: "El Plan de Guadalupe (26 de marzo de 1913).",
      distractors: [
        "El Plan de Agua Prieta (23 de abril de 1920).",
        "El Plan de San Luis (5 de octubre de 1910).",
        "El Plan de la Empacadora (25 de marzo de 1912).",
      ],
    },
  },
  {
    id: "carranza-constitucionalista",
    category: "revolucion",
    question:
      "¿Quién encabezaba el Ejército Constitucionalista durante la Revolución?",
    answer: "Venustiano Carranza.",
    tags: ["carranza", "constitucionalistas"],
    choices: {
      correct: "Venustiano Carranza.",
      distractors: [
        "Victoriano Huerta.",
        "Pascual Orozco.",
        "Emiliano Zapata.",
      ],
    },
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
    choices: {
      correct: "El Plan de Agua Prieta.",
      distractors: [
        "El Plan de Guadalupe.",
        "El Plan de San Luis.",
        "El Plan de Ayala.",
      ],
    },
  },

  // ─── Culture and society of the Revolution ────────────────────────
  {
    id: "corrido",
    category: "revolucion",
    question:
      "Composición musical característica de la época revolucionaria",
    answer: "El corrido.",
    tags: ["corrido", "musica"],
    choices: {
      correct: "El corrido.",
      distractors: [
        "El son jarocho.",
        "El huapango.",
        "La canción ranchera.",
      ],
    },
  },
  {
    id: "adelita-corrido",
    category: "revolucion",
    question: "Nombre de un famoso corrido revolucionario",
    answer: "La Adelita.",
    tags: ["corrido", "adelita"],
    choices: {
      correct: "La Adelita.",
      distractors: [
        "El Jarabe Tapatío.",
        "Cielito Lindo.",
        "La Bamba.",
      ],
    },
  },
  {
    id: "adelitas",
    category: "revolucion",
    question:
      "Las 'Adelitas' acompañaron a sus hombres al combate en:",
    answer: "La Revolución de 1910.",
    tags: ["adelitas", "mujeres"],
    choices: {
      correct: "La Revolución de 1910.",
      distractors: [
        "La Guerra de Independencia de 1810.",
        "La Guerra de Reforma de 1858.",
        "La Revolución de Ayutla de 1854.",
      ],
    },
  },
  {
    id: "mariano-azuela",
    category: "revolucion",
    question: "Exponente de la literatura de la Revolución",
    answer: "Mariano Azuela (autor de 'Los de abajo').",
    tags: ["literatura", "azuela"],
    choices: {
      correct: "Mariano Azuela (autor de 'Los de abajo').",
      distractors: [
        "Carlos Fuentes (autor de 'Los de abajo').",
        "Juan Rulfo (autor de 'La sombra del caudillo').",
        "Octavio Paz (autor de 'El águila y la serpiente').",
      ],
    },
  },
  {
    id: "ley-fuga-revolucion",
    category: "revolucion",
    question: "Forma de asesinato común en la Revolución",
    answer: "La Ley de Fuga.",
    tags: ["ley fuga"],
    choices: {
      correct: "La Ley de Fuga.",
      distractors: [
        "La leva.",
        "El destierro.",
        "El cuartelazo.",
      ],
    },
  },
  {
    id: "monumento-revolucion-origen",
    category: "revolucion",
    question:
      "La estructura del Palacio Legislativo Federal de Émile Bénard, ¿en qué monumento terminó utilizándose?",
    answer: "En el Monumento a la Revolución.",
    tags: ["monumento revolucion"],
    choices: {
      correct: "En el Monumento a la Revolución.",
      distractors: [
        "En el Palacio de Bellas Artes.",
        "En el Monumento a la Independencia.",
        "En el Palacio Postal.",
      ],
    },
  },
  {
    id: "monumento-revolucion-resumen",
    category: "revolucion",
    question:
      "Fue construido para ser el Palacio Legislativo pero terminó siendo:",
    answer: "El Monumento a la Revolución.",
    tags: ["monumento revolucion"],
    choices: {
      correct: "El Monumento a la Revolución.",
      distractors: [
        "El Palacio de Bellas Artes.",
        "El Ángel de la Independencia.",
        "El Palacio Legislativo de San Lázaro.",
      ],
    },
  },
];
