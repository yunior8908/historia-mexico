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
  },
  {
    id: "canelo",
    category: "deportes",
    subcategory: "box",
    question: "Nombre de un famoso boxeador mexicano",
    answer: "Saúl 'Canelo' Álvarez (también Julio César Chávez).",
    tags: ["box"],
  },
  {
    id: "ruben-olivares",
    category: "deportes",
    subcategory: "box",
    question: "Otro famoso boxeador mexicano",
    answer: "Rubén 'El Púas' Olivares.",
    tags: ["box"],
  },
  {
    id: "guerrera-torres",
    category: "deportes",
    subcategory: "box",
    question:
      "Apodo de la boxeadora mexicana, campeona mundial de peso súper mosca del CMB",
    answer: "'La Guerrera', Ana María Torres Ramírez.",
    tags: ["box", "mujeres"],
  },

  // ─── Football ────────────────────────────────────────────────────
  {
    id: "futbolistas-espana",
    category: "deportes",
    subcategory: "futbol",
    question: "Nombres de futbolistas mexicanos famosos en España",
    answer: "Hugo Sánchez y Rafa Márquez.",
    tags: ["futbol"],
  },
  {
    id: "hugo-sanchez",
    category: "deportes",
    subcategory: "futbol",
    question:
      "¿Cómo se llama uno de los futbolistas mexicanos famosos en España?",
    answer: "Hugo Sánchez.",
    tags: ["futbol"],
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
  },
  {
    id: "medallistas-olimpicos",
    category: "deportes",
    subcategory: "olimpiadas",
    question: "Nombrar algunos medallistas olímpicos mexicanos",
    answer:
      "Humberto Mariles Cortés, Ana Guevara, Joaquín Capilla, Felipe 'El Tibio' Muñoz, Ricardo Delgado, Antonio Roldán.",
    tags: ["olimpiadas"],
  },
  {
    id: "olimpiadas-2012",
    category: "deportes",
    subcategory: "olimpiadas",
    question:
      "¿En qué se destacaron los deportistas mexicanos en las Olimpiadas de 2012?",
    answer: "Futbol, tiro con arco, clavados y taekwondo.",
    tags: ["olimpiadas", "2012"],
  },

  // ─── Charrería (Mexican rodeo) ─────────────────────────────────────────────────
  {
    id: "charreria-deporte-nacional",
    category: "deportes",
    subcategory: "charreria",
    question: "¿Cuál de estos fue decretado deporte nacional en 1933?",
    answer: "La charrería.",
    tags: ["charreria"],
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
  },
];
