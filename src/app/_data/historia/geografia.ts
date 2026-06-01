import type { HistoriaEntry } from "./types";

/**
 * Geography of Mexico: location, states, capitals, rivers, seas,
 * mountain ranges, volcanoes, peninsulas, borders and cities.
 */
export const ENTRIES_GEOGRAFIA: HistoriaEntry[] = [
  {
    id: "ubicacion-mexico",
    category: "geografia",
    question: "Geográficamente, ¿dónde está ubicado México?",
    answer: "En el sur de América del Norte.",
    tags: ["ubicacion"],
  },
  {
    id: "extension-territorial",
    category: "geografia",
    question: "¿Cuál es la extensión territorial de México?",
    answer: "Aproximadamente 1.964 millones de km².",
    tags: ["territorio"],
  },
  {
    id: "estado-mas-grande",
    category: "geografia",
    question: "El estado de la República de mayor extensión territorial es:",
    answer: "Chihuahua.",
    tags: ["estados"],
  },
  {
    id: "ciudad-mas-poblada",
    category: "geografia",
    question: "Ciudad más poblada de México",
    answer: "Ciudad de México.",
    tags: ["ciudades"],
  },
  {
    id: "tres-ciudades-mas-grandes",
    category: "geografia",
    question: "Las tres ciudades más grandes y pobladas del país son:",
    answer: "Ciudad de México, Guadalajara y Monterrey.",
    tags: ["ciudades"],
  },
  {
    id: "chilangos",
    category: "geografia",
    question:
      "¿Cómo se conoce popularmente a los habitantes de la Ciudad de México?",
    answer: "Chilangos.",
    tags: ["cdmx", "gentilicio"],
  },
  {
    id: "cdmx-ciudad-palacios",
    category: "geografia",
    question: "¿Cómo se conoce a la Ciudad de México?",
    answer: "La Ciudad de los Palacios.",
    tags: ["cdmx"],
  },
  {
    id: "centro-historico-cdmx",
    category: "geografia",
    question:
      "¿Cómo se conoce el centro histórico de la Ciudad de México?",
    answer: "Como 'La Ciudad de los Palacios'.",
    tags: ["cdmx"],
  },
  {
    id: "guadalajara-estado",
    category: "geografia",
    question:
      "¿En qué estado de la República se encuentra la ciudad de Guadalajara?",
    answer: "En Jalisco.",
    tags: ["guadalajara", "jalisco"],
  },
  {
    id: "acapulco-estado",
    category: "geografia",
    question: "El puerto de Acapulco está en:",
    answer: "Guerrero.",
    tags: ["acapulco", "guerrero"],
  },
  {
    id: "jarocho",
    category: "geografia",
    question: "La palabra 'jarocho' alude a que es propio de:",
    answer: "Veracruz.",
    tags: ["gentilicios"],
  },
  // ─── State capitals ─────────────────────────────────────────────────
  {
    id: "capital-aguascalientes",
    category: "geografia",
    subcategory: "capitales",
    question: "Capital del estado de Aguascalientes",
    answer: "Aguascalientes.",
    tags: ["capitales"],
  },
  {
    id: "capital-bc",
    category: "geografia",
    subcategory: "capitales",
    question: "Capital del estado de Baja California",
    answer: "Mexicali.",
    tags: ["capitales", "bc"],
  },
  {
    id: "capital-bcs",
    category: "geografia",
    subcategory: "capitales",
    question: "Capital del estado de Baja California Sur",
    answer: "La Paz.",
    tags: ["capitales", "bcs"],
  },
  {
    id: "capital-chiapas",
    category: "geografia",
    subcategory: "capitales",
    question: "Capital del estado de Chiapas",
    answer: "Tuxtla Gutiérrez.",
    tags: ["capitales", "chiapas"],
  },
  {
    id: "mexicali-apodo",
    category: "geografia",
    subcategory: "capitales",
    question: "¿Cómo se conoce a Mexicali?",
    answer: "Como 'la ciudad que capturó el sol'.",
    tags: ["mexicali"],
  },
  {
    id: "pachuca-apodo",
    category: "geografia",
    question: "¿A qué ciudad se conoce como 'La Bella Airosa'?",
    answer: "Pachuca, Hidalgo.",
    tags: ["pachuca"],
  },
  {
    id: "celaya-apodo",
    category: "geografia",
    question: "¿Cuál es la ciudad conocida como la 'Puerta de Oro del Bajío'?",
    answer: "Celaya, Guanajuato.",
    tags: ["celaya", "bajio"],
  },
  {
    id: "leon-apodo",
    category: "geografia",
    question: "¿Cuál es la ciudad conocida como la 'Perla del Bajío'?",
    answer: "León, Guanajuato.",
    tags: ["leon", "bajio"],
  },

  // ─── Rivers and seas ──────────────────────────────────────────────
  {
    id: "rio-mas-largo",
    category: "geografia",
    subcategory: "rios",
    question: "¿Cuál es el río más largo de México?",
    answer: "El Río Bravo (frontera con Estados Unidos).",
    tags: ["rio bravo"],
  },
  {
    id: "rio-bravo-estados",
    category: "geografia",
    subcategory: "rios",
    question: "¿Cuáles son los estados que atraviesa el Río Bravo en México?",
    answer: "Chihuahua, Coahuila, Nuevo León y Tamaulipas.",
    tags: ["rio bravo"],
  },
  {
    id: "mar-de-cortes",
    category: "geografia",
    subcategory: "mares",
    question: "¿Dónde está el Mar de Cortés (o Mar Bermejo)?",
    answer:
      "Entre la península de Baja California y el resto del territorio mexicano.",
    tags: ["mar de cortes"],
  },
  {
    id: "mar-de-cortes-estados",
    category: "geografia",
    subcategory: "mares",
    question: "¿Qué estados rodean el Mar de Cortés?",
    answer: "Baja California, Baja California Sur, Sonora y Sinaloa.",
    tags: ["mar de cortes"],
  },
  {
    id: "ballenas-jorobadas",
    category: "geografia",
    subcategory: "mares",
    question:
      "Lugar de México donde se observan en libertad ballenas jorobadas, ballenas y lobos marinos",
    answer: "En el Mar de Cortés.",
    tags: ["mar de cortes", "ballenas"],
  },

  // ─── Mountains, volcanoes and ranges ───────────────────────────────
  {
    id: "sierras-madres",
    category: "geografia",
    subcategory: "montanas",
    question: "¿Cuántas Sierras Madres tiene México?",
    answer:
      "Dos principales: la Sierra Madre Oriental y la Sierra Madre Occidental (a las que se suma la Sierra Madre del Sur).",
    tags: ["sierras"],
  },
  {
    id: "montana-mas-alta",
    category: "geografia",
    subcategory: "montanas",
    question: "¿Cuál es la montaña más alta de México?",
    answer: "El Citlaltépetl (Pico de Orizaba), 5 636 m.",
    tags: ["citlaltepetl", "orizaba"],
  },
  {
    id: "popocatepetl",
    category: "geografia",
    subcategory: "volcanes",
    question:
      "Nombre del volcán ubicado entre Morelos, Puebla y Estado de México",
    answer: "Popocatépetl.",
    tags: ["popocatepetl"],
  },
  {
    id: "volcanes-edomex-puebla",
    category: "geografia",
    subcategory: "volcanes",
    question: "¿Cuáles son los volcanes del Estado de México y Puebla?",
    answer: "El Popocatépetl y el Iztaccíhuatl.",
    tags: ["popocatepetl", "iztaccihuatl"],
  },
  {
    id: "don-goyo",
    category: "geografia",
    subcategory: "volcanes",
    question: "¿A qué se le conoce como 'Don Goyo' y 'La Mujer Dormida'?",
    answer:
      "A los volcanes Popocatépetl ('Don Goyo') e Iztaccíhuatl ('La Mujer Dormida').",
    tags: ["popocatepetl", "iztaccihuatl"],
  },

  // ─── Peninsulas and canyons ─────────────────────────────────────
  {
    id: "peninsulas",
    category: "geografia",
    question: "¿Cuántas penínsulas tiene México?",
    answer: "Dos: la Península de Baja California y la Península de Yucatán.",
    tags: ["peninsulas"],
  },
  {
    id: "canon-sumidero",
    category: "geografia",
    question:
      "¿En qué estado de la República se encuentra el Cañón del Sumidero?",
    answer: "En Chiapas.",
    tags: ["chiapas", "canon"],
  },
  {
    id: "pena-bernal",
    category: "geografia",
    question: "¿Qué es la Peña de Bernal y dónde se encuentra?",
    answer:
      "Es el tercer monolito más grande del mundo; se encuentra en Querétaro.",
    tags: ["queretaro", "monolito"],
  },

  // ─── Natural heritage ─────────────────────────────────────────
  {
    id: "cabo-pulmo",
    category: "geografia",
    subcategory: "reservas",
    question: "Reserva natural del Golfo de Baja California",
    answer: "El Parque Nacional Cabo Pulmo.",
    tags: ["cabo pulmo", "bcs"],
  },
  {
    id: "pinacate",
    category: "geografia",
    subcategory: "reservas",
    question: "Reserva natural en el estado de Sonora",
    answer: "Biósfera de El Pinacate y Gran Desierto de Altar.",
    tags: ["pinacate", "sonora"],
  },
  {
    id: "azufres",
    category: "geografia",
    subcategory: "reservas",
    question: "¿Dónde se encuentra el Parque Nacional Los Azufres?",
    answer: "En Michoacán.",
    tags: ["azufres", "michoacan"],
  },
  {
    id: "estado-calzado",
    category: "geografia",
    question: "¿Cuál es el estado con mayor producción de calzado?",
    answer: "Guanajuato.",
    tags: ["industria", "guanajuato"],
  },
  {
    id: "puertos-turisticos",
    category: "geografia",
    subcategory: "turismo",
    question: "Principales puertos turísticos de México",
    answer: "Cozumel, Acapulco y Mazatlán.",
    tags: ["turismo", "puertos"],
  },
  {
    id: "puertos-turistas-extranjero",
    category: "geografia",
    subcategory: "turismo",
    question:
      "Puertos más visitados por los turistas que vienen a México",
    answer: "Acapulco, Cancún y Cozumel.",
    tags: ["turismo"],
  },
  {
    id: "destinos-playa",
    category: "geografia",
    subcategory: "turismo",
    question: "Tres destinos de playa en México",
    answer: "Acapulco, Huatulco y Cancún.",
    tags: ["turismo", "playa"],
  },
  {
    id: "islas-mexico",
    category: "geografia",
    subcategory: "islas",
    question: "Nombres de algunas islas de México",
    answer:
      "Islas Marías, Isla Mujeres, Cozumel, Holbox, Isla Guadalupe (entre otras).",
    tags: ["islas"],
  },
  {
    id: "cutzamala",
    category: "geografia",
    subcategory: "infraestructura",
    question:
      "Sistema de acueducto que abastece a la CDMX y al Estado de México",
    answer: "El Sistema Cutzamala.",
    tags: ["cutzamala", "agua"],
  },
];
