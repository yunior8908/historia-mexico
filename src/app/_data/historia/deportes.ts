import type { HistoriaEntry } from "./types";

/**
 * Sports: boxing, football, the Olympics, track and field,
 * charrería, astronauts (cross-cuts with `personajes`).
 */
export const ENTRIES_DEPORTES: HistoriaEntry[] = [
  // ─── Boxing ───────────────────────────────────────────────────────
  {
    id: "boxeadores-mexicanos",
    category: "deportes",
    subcategory: "box",
    question: "Nombres de famosos boxeadores mexicanos",
    answer:
      "Julio César Chávez, Saúl 'El Canelo' Álvarez y Rubén 'El Púas' Olivares.",
    tags: ["box"],
    choices: {
      correct:
        "Julio César Chávez, Saúl 'El Canelo' Álvarez y Rubén 'El Púas' Olivares.",
      distractors: [
        "Manny Pacquiao, Floyd Mayweather y Mike Tyson.",
        "Hugo Sánchez, Rafa Márquez y 'Chicharito' Hernández.",
        "Carlos Monzón, Roberto 'Mano de Piedra' Durán y Muhammad Ali.",
      ],
    },
  },
  {
    id: "canelo",
    category: "deportes",
    subcategory: "box",
    question: "Nombre de un famoso boxeador mexicano",
    answer: "Saúl 'Canelo' Álvarez (también Julio César Chávez).",
    tags: ["box"],
    choices: {
      correct: "Saúl 'Canelo' Álvarez (también Julio César Chávez).",
      distractors: [
        "Floyd 'Money' Mayweather Jr.",
        "Manny 'Pac-Man' Pacquiao.",
        "Gennady 'GGG' Golovkin.",
      ],
    },
  },
  {
    id: "ruben-olivares",
    category: "deportes",
    subcategory: "box",
    question: "Otro famoso boxeador mexicano",
    answer: "Rubén 'El Púas' Olivares.",
    tags: ["box"],
    choices: {
      correct: "Rubén 'El Púas' Olivares.",
      distractors: [
        "Roberto 'Mano de Piedra' Durán.",
        "Óscar 'De la Hoya' (estadounidense).",
        "Sugar Ray Leonard.",
      ],
    },
  },
  {
    id: "guerrera-torres",
    category: "deportes",
    subcategory: "box",
    question:
      "Apodo de la boxeadora mexicana, campeona mundial de peso súper mosca del CMB",
    answer: "'La Guerrera', Ana María Torres Ramírez.",
    tags: ["box", "mujeres"],
    choices: {
      correct: "'La Guerrera', Ana María Torres Ramírez.",
      distractors: [
        "'La Barby', Mariana Juárez.",
        "'La Maravilla', Jackie Nava.",
        "'La Pantera', Yesica Bopp.",
      ],
    },
  },

  // ─── Football ────────────────────────────────────────────────────
  {
    id: "futbolistas-espana",
    category: "deportes",
    subcategory: "futbol",
    question: "Nombres de futbolistas mexicanos famosos en España",
    answer: "Hugo Sánchez y Rafa Márquez.",
    tags: ["futbol"],
    choices: {
      correct: "Hugo Sánchez y Rafa Márquez.",
      distractors: [
        "Cuauhtémoc Blanco y Jorge Campos.",
        "Pelé y Diego Maradona.",
        "Lionel Messi y Cristiano Ronaldo.",
      ],
    },
  },
  {
    id: "hugo-sanchez",
    category: "deportes",
    subcategory: "futbol",
    question:
      "¿Cómo se llama uno de los futbolistas mexicanos famosos en España?",
    answer: "Hugo Sánchez.",
    tags: ["futbol"],
    choices: {
      correct: "Hugo Sánchez.",
      distractors: [
        "Cuauhtémoc Blanco.",
        "Jorge Campos.",
        "Carlos Hermosillo.",
      ],
    },
  },

  // ─── Olympics and athletics ────────────────────────────────────
  {
    id: "soraya-jimenez",
    category: "deportes",
    subcategory: "olimpiadas",
    question:
      "¿Quién ganó la medalla de oro en las olimpiadas de Sídney 2000 por halterofilia (levantamiento de pesas)?",
    answer: "Soraya Jiménez Mendivil.",
    tags: ["olimpiadas", "pesas"],
    choices: {
      correct: "Soraya Jiménez Mendivil.",
      distractors: [
        "Ana Gabriela Guevara.",
        "María del Rosario Espinoza.",
        "Paola Espinosa.",
      ],
    },
  },
  {
    id: "ana-guevara-2003",
    category: "deportes",
    subcategory: "olimpiadas",
    question:
      "¿Cuál es el récord de la carrera que ganó Ana Gabriela Guevara Espinoza en 2003?",
    answer:
      "300 metros planos en 35.30 segundos (récord mundial entonces vigente).",
    tags: ["atletismo", "ana guevara"],
    choices: {
      correct:
        "300 metros planos en 35.30 segundos (récord mundial entonces vigente).",
      distractors: [
        "400 metros planos en 48.89 segundos.",
        "200 metros planos en 22.30 segundos.",
        "800 metros planos en 1:56.40 minutos.",
      ],
    },
  },
  {
    id: "ana-guevara-atenas",
    category: "deportes",
    subcategory: "olimpiadas",
    question:
      "Récord de Ana Gabriela Guevara cuando fue medallista en las Olimpiadas de Atenas 2004",
    answer:
      "Medalla de plata en 400 m planos, con tiempo de 48.89 segundos.",
    tags: ["atletismo", "ana guevara"],
    choices: {
      correct:
        "Medalla de plata en 400 m planos, con tiempo de 48.89 segundos.",
      distractors: [
        "Medalla de oro en 400 m planos, con tiempo de 48.25 segundos.",
        "Medalla de bronce en 200 m planos, con tiempo de 22.50 segundos.",
        "Medalla de plata en 800 m planos, con tiempo de 1:57.00 minutos.",
      ],
    },
  },
  {
    id: "medallistas-olimpicos",
    category: "deportes",
    subcategory: "olimpiadas",
    question: "Nombrar algunos medallistas olímpicos mexicanos",
    answer:
      "Humberto Mariles Cortés, Ana Guevara, Joaquín Capilla, Felipe 'El Tibio' Muñoz, Ricardo Delgado, Antonio Roldán.",
    tags: ["olimpiadas"],
    choices: {
      correct:
        "Humberto Mariles Cortés, Ana Guevara, Joaquín Capilla, Felipe 'El Tibio' Muñoz, Ricardo Delgado, Antonio Roldán.",
      distractors: [
        "Fernando Valenzuela, Hugo Sánchez y Rafael Márquez.",
        "Usain Bolt, Michael Phelps y Carl Lewis.",
        "Lorena Ochoa, Julio César Chávez y 'Canelo' Álvarez.",
      ],
    },
  },
  {
    id: "olimpiadas-2012",
    category: "deportes",
    subcategory: "olimpiadas",
    question:
      "¿En qué se destacaron los deportistas mexicanos en las Olimpiadas de 2012?",
    answer: "Futbol, tiro con arco, clavados y taekwondo.",
    tags: ["olimpiadas", "2012"],
    choices: {
      correct: "Futbol, tiro con arco, clavados y taekwondo.",
      distractors: [
        "Atletismo, natación, gimnasia y ciclismo.",
        "Box, halterofilia, esgrima y vela.",
        "Baloncesto, voleibol, tenis y judo.",
      ],
    },
  },

  // ─── Charrería (Mexican rodeo) ─────────────────────────────────────────────────
  {
    id: "charreria-deporte-nacional",
    category: "deportes",
    subcategory: "charreria",
    question: "¿Cuál de estos fue decretado deporte nacional en 1933?",
    answer: "La charrería.",
    tags: ["charreria"],
    choices: {
      correct: "La charrería.",
      distractors: ["El futbol.", "El box.", "La lucha libre."],
    },
  },

  // ─── Beauty pageants (Miss Universe) ───────────────────────────────────
  {
    id: "miss-universo",
    category: "deportes",
    subcategory: "belleza",
    question: "¿Quiénes fueron las mexicanas ganadoras del Miss Universo?",
    answer:
      "María Guadalupe (Lupita) Jones (1991), Ximena Navarrete (2010) y Andrea Meza (2020).",
    tags: ["miss universo"],
    choices: {
      correct:
        "María Guadalupe (Lupita) Jones (1991), Ximena Navarrete (2010) y Andrea Meza (2020).",
      distractors: [
        "Lucía Méndez (1985), Thalía (1999) y Salma Hayek (2005).",
        "Lupita Jones (1991), Ximena Navarrete (2010) y Sofía Aragón (2019).",
        "Yolanda Andrade (1994), Bárbara Mori (2008) y Eiza González (2015).",
      ],
    },
  },
];
