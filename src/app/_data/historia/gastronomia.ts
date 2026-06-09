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
    choices: {
      correct:
        "Tortillas de maíz ovaladas, típicas de Puebla y otros estados del centro-sur.",
      distractors: [
        "Tortillas de harina enrolladas y rellenas de carne, típicas del norte.",
        "Panes dulces espolvoreados con azúcar, típicos del Bajío.",
        "Tamales pequeños envueltos en hoja de plátano, típicos del sureste.",
      ],
    },
  },
  {
    id: "platillos-tortilla",
    category: "gastronomia",
    question: "Platillos mexicanos a base de tortilla",
    answer: "Sopes, tlacoyos y memelas.",
    tags: ["maiz"],
    choices: {
      correct: "Sopes, tlacoyos y memelas.",
      distractors: [
        "Pozole, menudo y birria.",
        "Cochinita, barbacoa y carnitas.",
        "Tamales, atole y champurrado.",
      ],
    },
  },
  {
    id: "pozole-base",
    category: "gastronomia",
    question: "Platillo mexicano elaborado con granos de maíz",
    answer: "El pozole.",
    tags: ["maiz", "pozole"],
    choices: {
      correct: "El pozole.",
      distractors: ["El menudo.", "La birria.", "El mole."],
    },
  },
  {
    id: "tamal",
    category: "gastronomia",
    question:
      "Comida típica de México hecha a base de masa de maíz y envuelta en hoja de plátano (o de maíz)",
    answer: "El tamal.",
    tags: ["tamal", "maiz"],
    choices: {
      correct: "El tamal.",
      distractors: ["El sope.", "La gordita.", "El huarache."],
    },
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
    choices: {
      correct: "Buñuelos.",
      distractors: ["Churros.", "Hojarascas.", "Polvorones."],
    },
  },

  // ─── By state / region ───────────────────────────────────────
  {
    id: "siete-moles",
    category: "gastronomia",
    question: "¿De dónde es el platillo de los 7 moles?",
    answer: "De Oaxaca.",
    tags: ["oaxaca", "mole"],
    choices: {
      correct: "De Oaxaca.",
      distractors: ["De Puebla.", "De Veracruz.", "De Chiapas."],
    },
  },
  {
    id: "mole-ingrediente",
    category: "gastronomia",
    question: "¿Cuál es el ingrediente principal del mole?",
    answer: "Chocolate amargo.",
    tags: ["mole"],
    choices: {
      correct: "Chocolate amargo.",
      distractors: [
        "Crema de cacahuate.",
        "Pasta de almendra.",
        "Salsa de jitomate.",
      ],
    },
  },
  {
    id: "platillos-poblanos",
    category: "gastronomia",
    question: "Tres platillos típicos poblanos",
    answer: "Mole poblano, chiles en nogada y chalupas.",
    tags: ["puebla"],
    choices: {
      correct: "Mole poblano, chiles en nogada y chalupas.",
      distractors: [
        "Cochinita pibil, panuchos y salbutes.",
        "Birria, tortas ahogadas y jericalla.",
        "Cabrito, machaca y discada.",
      ],
    },
  },
  {
    id: "chiles-en-nogada",
    category: "gastronomia",
    question: "¿De dónde es originario el chile en nogada?",
    answer: "De Puebla.",
    tags: ["puebla"],
    choices: {
      correct: "De Puebla.",
      distractors: ["De Oaxaca.", "De Morelos.", "De Tlaxcala."],
    },
  },
  {
    id: "zacahuil",
    category: "gastronomia",
    question: "Plato típico de Veracruz",
    answer: "El zacahuil (tamal gigante).",
    tags: ["veracruz"],
    choices: {
      correct: "El zacahuil (tamal gigante).",
      distractors: [
        "El pozole (caldo de maíz).",
        "La cochinita (cerdo en achiote).",
        "El cabrito (cabra asada).",
      ],
    },
  },
  {
    id: "cabrito-machaca",
    category: "gastronomia",
    question: "El cabrito y la machaca son platos originarios de:",
    answer: "Nuevo León.",
    tags: ["nuevo leon"],
    choices: {
      correct: "Nuevo León.",
      distractors: ["Coahuila.", "Sonora.", "Tamaulipas."],
    },
  },
  {
    id: "caldo-tlalpeno",
    category: "gastronomia",
    question: "¿De dónde es originario el caldo tlalpeño?",
    answer: "De la Ciudad de México (de la zona de Tlalpan).",
    tags: ["cdmx"],
    choices: {
      correct: "De la Ciudad de México (de la zona de Tlalpan).",
      distractors: [
        "Del Estado de México (de la zona de Toluca).",
        "De Puebla (de la zona de Cholula).",
        "De Hidalgo (de la zona de Pachuca).",
      ],
    },
  },
  {
    id: "queso-menonita",
    category: "gastronomia",
    question: "¿De dónde es el queso menonita?",
    answer: "De Chihuahua.",
    tags: ["chihuahua", "queso"],
    choices: {
      correct: "De Chihuahua.",
      distractors: ["De Durango.", "De Coahuila.", "De Zacatecas."],
    },
  },
  {
    id: "queso-tuna",
    category: "gastronomia",
    question: "¿De dónde es típico el queso de tuna?",
    answer: "De San Luis Potosí.",
    tags: ["slp", "queso"],
    choices: {
      correct: "De San Luis Potosí.",
      distractors: ["De Zacatecas.", "De Aguascalientes.", "De Guanajuato."],
    },
  },
  {
    id: "tamales-queso-dia-muertos",
    category: "gastronomia",
    question:
      "Lugar donde son tradicionales los tamales de queso para el Día de Muertos",
    answer: "San Luis Potosí.",
    tags: ["slp", "dia muertos"],
    choices: {
      correct: "San Luis Potosí.",
      distractors: ["Querétaro.", "Zacatecas.", "Guanajuato."],
    },
  },
  {
    id: "ensalada-nochebuena",
    category: "gastronomia",
    question: "¿De dónde es originaria la ensalada de Nochebuena?",
    answer: "De Michoacán.",
    tags: ["michoacan", "navidad"],
    choices: {
      correct: "De Michoacán.",
      distractors: ["De Jalisco.", "De Guanajuato.", "De Colima."],
    },
  },
  {
    id: "tlapaleria",
    category: "gastronomia",
    question: "En México, una tlapalería es:",
    answer:
      "Una tienda de pinturas, solventes y artículos de ferretería.",
    tags: ["comercios"],
    choices: {
      correct:
        "Una tienda de pinturas, solventes y artículos de ferretería.",
      distractors: [
        "Un puesto de tacos y antojitos callejeros.",
        "Una tienda de telas, hilos y artículos de costura.",
        "Un local de frutas, verduras y abarrotes.",
      ],
    },
  },
  {
    id: "fonda",
    category: "gastronomia",
    question: "¿Qué es una fonda?",
    answer:
      "Un establecimiento popular donde se sirven bebidas y comidas económicas.",
    tags: ["comercios"],
    choices: {
      correct:
        "Un establecimiento popular donde se sirven bebidas y comidas económicas.",
      distractors: [
        "Un local elegante donde se sirve alta cocina de autor.",
        "Una tienda donde se venden ingredientes y especias a granel.",
        "Un puesto ambulante donde solo se venden dulces típicos.",
      ],
    },
  },
  {
    id: "fonda-lugar",
    category: "gastronomia",
    question: "Lugar donde se come a precios bajos",
    answer: "La fonda.",
    tags: ["comercios"],
    choices: {
      correct: "La fonda.",
      distractors: ["La cantina.", "La cafetería.", "La pulquería."],
    },
  },
  {
    id: "marchante",
    category: "gastronomia",
    question:
      "En el habla popular de México, el término 'marchante(a)':",
    answer: "Se aplica por igual al vendedor y al comprador.",
    tags: ["habla popular"],
    choices: {
      correct: "Se aplica por igual al vendedor y al comprador.",
      distractors: [
        "Se aplica solo al vendedor del mercado.",
        "Se aplica solo al comprador habitual.",
        "Se aplica únicamente a los repartidores a domicilio.",
      ],
    },
  },

  // ─── Sweets and desserts ──────────────────────────────────────────
  {
    id: "palanquetas-pachuca",
    category: "gastronomia",
    subcategory: "dulces",
    question: "Dulce típico de Pachuca, Hidalgo",
    answer: "Palanquetas (barras o turrones de cacahuate).",
    tags: ["pachuca", "dulces"],
    choices: {
      correct: "Palanquetas (barras o turrones de cacahuate).",
      distractors: [
        "Jamoncillos (dulces de leche).",
        "Cocadas (dulces de coco).",
        "Macarrones (dulces de leche quemada).",
      ],
    },
  },
  {
    id: "alegrias",
    category: "gastronomia",
    subcategory: "dulces",
    question: "Dulce típico de Xochimilco hecho a base de amaranto",
    answer: "Alegrías de amaranto.",
    tags: ["xochimilco", "amaranto"],
    choices: {
      correct: "Alegrías de amaranto.",
      distractors: [
        "Palanquetas de cacahuate.",
        "Cocadas de coco.",
        "Pepitorias de pepita.",
      ],
    },
  },
  {
    id: "charamuscas",
    category: "gastronomia",
    subcategory: "dulces",
    question: "Dulce típico de Guanajuato",
    answer: "Las charamuscas.",
    tags: ["guanajuato", "dulces"],
    choices: {
      correct: "Las charamuscas.",
      distractors: ["Los borrachitos.", "Las cocadas.", "Los jamoncillos."],
    },
  },
  {
    id: "jericalla",
    category: "gastronomia",
    subcategory: "dulces",
    question: "Postre típico de Guadalajara",
    answer: "La jericalla (similar al flan o crème brûlée).",
    tags: ["jalisco", "guadalajara"],
    choices: {
      correct: "La jericalla (similar al flan o crème brûlée).",
      distractors: [
        "El jamoncillo (dulce de leche en barra).",
        "La capirotada (postre de pan y piloncillo).",
        "El arroz con leche (postre de arroz).",
      ],
    },
  },
  {
    id: "rosca-reyes",
    category: "gastronomia",
    subcategory: "dulces",
    question:
      "Pan en forma de rosca, adornado con frutas, que contiene figuritas y se come en la celebración de:",
    answer: "El Día de Reyes (6 de enero).",
    tags: ["pan", "reyes"],
    choices: {
      correct: "El Día de Reyes (6 de enero).",
      distractors: [
        "El Día de Muertos (2 de noviembre).",
        "La Candelaria (2 de febrero).",
        "La Nochebuena (24 de diciembre).",
      ],
    },
  },

  // ─── Drinks ───────────────────────────────────────────────────
  {
    id: "pulque-maguey",
    category: "gastronomia",
    subcategory: "bebidas",
    question: "Bebida sacada del maguey",
    answer: "El pulque.",
    tags: ["pulque", "maguey"],
    choices: {
      correct: "El pulque.",
      distractors: ["El tepache.", "El tejuino.", "El atole."],
    },
  },
  {
    id: "pulque-curado",
    category: "gastronomia",
    subcategory: "bebidas",
    question: "Bebida prehispánica conocida como 'curado'",
    answer: "El pulque.",
    tags: ["pulque"],
    choices: {
      correct: "El pulque.",
      distractors: ["El tepache.", "El tejuino.", "El tesgüino."],
    },
  },
  {
    id: "tequila-mezcal",
    category: "gastronomia",
    subcategory: "bebidas",
    question: "Bebidas obtenidas del agave",
    answer: "Tequila y mezcal.",
    tags: ["agave", "tequila", "mezcal"],
    choices: {
      correct: "Tequila y mezcal.",
      distractors: [
        "Tepache y tejuino.",
        "Atole y champurrado.",
        "Horchata y jamaica.",
      ],
    },
  },

  // ─── Edible insects and native products ──────────────────────────
  {
    id: "insectos-comestibles",
    category: "gastronomia",
    question: "¿Cuáles insectos son comestibles en México?",
    answer:
      "Chapulines, escamoles, jumiles, gusanos de maguey y hormigas (chicatanas).",
    tags: ["insectos"],
    choices: {
      correct:
        "Chapulines, escamoles, jumiles, gusanos de maguey y hormigas (chicatanas).",
      distractors: [
        "Mariposas, abejas, cucarachas, mosquitos y arañas.",
        "Escarabajos, mariquitas, libélulas, polillas y avispas.",
        "Moscas, pulgas, garrapatas, piojos y termitas.",
      ],
    },
  },
  {
    id: "escamoles",
    category: "gastronomia",
    question: "¿De qué son los escamoles?",
    answer: "Son huevos de hormiga.",
    tags: ["escamoles", "insectos"],
    choices: {
      correct: "Son huevos de hormiga.",
      distractors: [
        "Son huevos de abeja.",
        "Son larvas de mosca.",
        "Son huevos de saltamontes.",
      ],
    },
  },
  {
    id: "escamoles-base",
    category: "gastronomia",
    question: "¿Qué son los escamoles?",
    answer: "Huevos de hormiga.",
    tags: ["escamoles"],
    choices: {
      correct: "Huevos de hormiga.",
      distractors: [
        "Huevos de abeja.",
        "Larvas de avispa.",
        "Huevos de grillo.",
      ],
    },
  },
  {
    id: "guanabana",
    category: "gastronomia",
    question: "¿Qué es la guanábana?",
    answer: "Fruta de cáscara verde y pulpa blanca.",
    tags: ["fruta"],
    choices: {
      correct: "Fruta de cáscara verde y pulpa blanca.",
      distractors: [
        "Fruta de cáscara roja y pulpa amarilla.",
        "Fruta de cáscara amarilla y pulpa anaranjada.",
        "Fruta de cáscara café y pulpa rosada.",
      ],
    },
  },
  {
    id: "productos-originarios",
    category: "gastronomia",
    question: "Productos originarios de México",
    answer: "Chocolate, aguacate, tomate y pavo (guajolote).",
    tags: ["origenes"],
    choices: {
      correct: "Chocolate, aguacate, tomate y pavo (guajolote).",
      distractors: [
        "Trigo, arroz, manzana y res.",
        "Café, caña de azúcar, plátano y cerdo.",
        "Aceituna, uva, naranja y pollo.",
      ],
    },
  },

  // ─── Sayings ──────────────────────────────────────────────────
  {
    id: "refran-mole-olla",
    category: "gastronomia",
    question: "¿Qué significa el refrán 'A darle, que es mole de olla'?",
    answer:
      "Es una invitación a hacer alguna cosa con buen ánimo y sin demora.",
    tags: ["refranes"],
    choices: {
      correct:
        "Es una invitación a hacer alguna cosa con buen ánimo y sin demora.",
      distractors: [
        "Es una advertencia para no confiar en los desconocidos.",
        "Es una queja por un trabajo mal pagado.",
        "Es una burla hacia quien presume sin razón.",
      ],
    },
  },
];
