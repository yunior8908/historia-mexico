import type { HistoriaEntry } from "./types";

/**
 * Mexican gastronomy: signature dishes by state/region, drinks,
 * sweets, native ingredients, edible insects.
 */
export const ENTRIES_GASTRONOMIA: HistoriaEntry[] = [
  // ─── Corn-based ────────────────────────────────────────────
  {
    id: "memelas",
    category: "gastronomia",
    question: "¿Qué son las memelas?",
    answer:
      "Tortillas de maíz ovaladas, típicas de Puebla y otros estados del centro-sur.",
    tags: ["maiz", "puebla"],
  },
  {
    id: "platillos-tortilla",
    category: "gastronomia",
    question: "Platillos mexicanos a base de tortilla",
    answer: "Sopes, tlacoyos y memelas.",
    tags: ["maiz"],
  },
  {
    id: "pozole-base",
    category: "gastronomia",
    question: "Platillo mexicano elaborado con granos de maíz",
    answer: "El pozole.",
    tags: ["maiz", "pozole"],
  },
  {
    id: "tamal",
    category: "gastronomia",
    question:
      "Comida típica de México hecha a base de masa de maíz y envuelta en hoja de plátano (o de maíz)",
    answer: "El tamal.",
    tags: ["tamal", "maiz"],
  },
  {
    id: "bunuelos",
    category: "gastronomia",
    question: "Postre típico a base de tortillas de harina (o maíz) fritas",
    answer: "Buñuelos.",
    correction: {
      originalAnswer: "Bueñuelos",
      note: "Corrección ortográfica: se escribe 'buñuelos' (sin 'e').",
    },
    tags: ["postres"],
  },

  // ─── By state / region ───────────────────────────────────────
  {
    id: "siete-moles",
    category: "gastronomia",
    question: "¿De dónde es el platillo de los 7 moles?",
    answer: "De Oaxaca.",
    tags: ["oaxaca", "mole"],
  },
  {
    id: "mole-ingrediente",
    category: "gastronomia",
    question: "¿Cuál es el ingrediente principal del mole?",
    answer: "Chocolate amargo.",
    tags: ["mole"],
  },
  {
    id: "platillos-poblanos",
    category: "gastronomia",
    question: "Tres platillos típicos poblanos",
    answer: "Mole poblano, chiles en nogada y chalupas.",
    tags: ["puebla"],
  },
  {
    id: "chiles-en-nogada",
    category: "gastronomia",
    question: "¿De dónde es originario el chile en nogada?",
    answer: "De Puebla.",
    tags: ["puebla"],
  },
  {
    id: "zacahuil",
    category: "gastronomia",
    question: "Plato típico de Veracruz",
    answer: "El zacahuil (tamal gigante).",
    tags: ["veracruz"],
  },
  {
    id: "cabrito-machaca",
    category: "gastronomia",
    question: "El cabrito y la machaca son platos originarios de:",
    answer: "Nuevo León.",
    tags: ["nuevo leon"],
  },
  {
    id: "caldo-tlalpeno",
    category: "gastronomia",
    question: "¿De dónde es originario el caldo tlalpeño?",
    answer: "De la Ciudad de México (de la zona de Tlalpan).",
    tags: ["cdmx"],
  },
  {
    id: "queso-menonita",
    category: "gastronomia",
    question: "¿De dónde es el queso menonita?",
    answer: "De Chihuahua.",
    tags: ["chihuahua", "queso"],
  },
  {
    id: "queso-tuna",
    category: "gastronomia",
    question: "¿De dónde es típico el queso de tuna?",
    answer: "De San Luis Potosí.",
    tags: ["slp", "queso"],
  },
  {
    id: "tamales-queso-dia-muertos",
    category: "gastronomia",
    question:
      "Lugar donde son tradicionales los tamales de queso para el Día de Muertos",
    answer: "San Luis Potosí.",
    tags: ["slp", "dia muertos"],
  },
  {
    id: "ensalada-nochebuena",
    category: "gastronomia",
    question: "¿De dónde es originaria la ensalada de Nochebuena?",
    answer: "De Michoacán.",
    tags: ["michoacan", "navidad"],
  },
  {
    id: "tlapaleria",
    category: "gastronomia",
    question: "En México, una tlapalería es:",
    answer:
      "Una tienda de pinturas, solventes y artículos de ferretería.",
    tags: ["comercios"],
  },
  {
    id: "fonda",
    category: "gastronomia",
    question: "¿Qué es una fonda?",
    answer:
      "Un establecimiento popular donde se sirven bebidas y comidas económicas.",
    tags: ["comercios"],
  },
  {
    id: "fonda-lugar",
    category: "gastronomia",
    question: "Lugar donde se come a precios bajos",
    answer: "La fonda.",
    tags: ["comercios"],
  },
  {
    id: "marchante",
    category: "gastronomia",
    question:
      "En el habla popular de México, el término 'marchante(a)':",
    answer: "Se aplica por igual al vendedor y al comprador.",
    tags: ["habla popular"],
  },

  // ─── Sweets and desserts ──────────────────────────────────────────
  {
    id: "palanquetas-pachuca",
    category: "gastronomia",
    subcategory: "dulces",
    question: "Dulce típico de Pachuca, Hidalgo",
    answer: "Palanquetas (barras o turrones de cacahuate).",
    tags: ["pachuca", "dulces"],
  },
  {
    id: "alegrias",
    category: "gastronomia",
    subcategory: "dulces",
    question: "Dulce típico de Xochimilco hecho a base de amaranto",
    answer: "Alegrías de amaranto.",
    tags: ["xochimilco", "amaranto"],
  },
  {
    id: "charamuscas",
    category: "gastronomia",
    subcategory: "dulces",
    question: "Dulce típico de Guanajuato",
    answer: "Las charamuscas.",
    tags: ["guanajuato", "dulces"],
  },
  {
    id: "jericalla",
    category: "gastronomia",
    subcategory: "dulces",
    question: "Postre típico de Guadalajara",
    answer: "La jericalla (similar al flan o crème brûlée).",
    tags: ["jalisco", "guadalajara"],
  },
  {
    id: "rosca-reyes",
    category: "gastronomia",
    subcategory: "dulces",
    question:
      "Pan en forma de rosca, adornado con frutas, que contiene figuritas y se come en la celebración de:",
    answer: "El Día de Reyes (6 de enero).",
    tags: ["pan", "reyes"],
  },

  // ─── Drinks ───────────────────────────────────────────────────
  {
    id: "pulque-maguey",
    category: "gastronomia",
    subcategory: "bebidas",
    question: "Bebida sacada del maguey",
    answer: "El pulque.",
    tags: ["pulque", "maguey"],
  },
  {
    id: "pulque-curado",
    category: "gastronomia",
    subcategory: "bebidas",
    question: "Bebida prehispánica conocida como 'curado'",
    answer: "El pulque.",
    tags: ["pulque"],
  },
  {
    id: "tequila-mezcal",
    category: "gastronomia",
    subcategory: "bebidas",
    question: "Bebidas obtenidas del agave",
    answer: "Tequila y mezcal.",
    tags: ["agave", "tequila", "mezcal"],
  },

  // ─── Edible insects and native products ──────────────────────────
  {
    id: "insectos-comestibles",
    category: "gastronomia",
    question: "¿Cuáles insectos son comestibles en México?",
    answer:
      "Chapulines, escamoles, jumiles, gusanos de maguey y hormigas (chicatanas).",
    tags: ["insectos"],
  },
  {
    id: "escamoles",
    category: "gastronomia",
    question: "¿De qué son los escamoles?",
    answer: "Son huevos de hormiga.",
    tags: ["escamoles", "insectos"],
  },
  {
    id: "escamoles-base",
    category: "gastronomia",
    question: "¿Qué son los escamoles?",
    answer: "Huevos de hormiga.",
    tags: ["escamoles"],
  },
  {
    id: "guanabana",
    category: "gastronomia",
    question: "¿Qué es la guanábana?",
    answer: "Fruta de cáscara verde y pulpa blanca.",
    tags: ["fruta"],
  },
  {
    id: "productos-originarios",
    category: "gastronomia",
    question: "Productos originarios de México",
    answer: "Chocolate, aguacate, tomate y pavo (guajolote).",
    tags: ["origenes"],
  },

  // ─── Sayings ──────────────────────────────────────────────────
  {
    id: "refran-mole-olla",
    category: "gastronomia",
    question: "¿Qué significa el refrán 'A darle, que es mole de olla'?",
    answer:
      "Es una invitación a hacer alguna cosa con buen ánimo y sin demora.",
    tags: ["refranes"],
  },
];
