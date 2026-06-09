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
    choices: {
      correct: "En el sur de América del Norte.",
      distractors: [
        "En el norte de América Central.",
        "En el centro de América del Sur.",
        "En la región insular del Caribe.",
      ],
    },
  },
  {
    id: "extension-territorial",
    category: "geografia",
    question: "¿Cuál es la extensión territorial de México?",
    answer: "Aproximadamente 1.964 millones de km².",
    tags: ["territorio"],
    choices: {
      correct: "Aproximadamente 1.964 millones de km².",
      distractors: [
        "Aproximadamente 1.234 millones de km².",
        "Aproximadamente 2.780 millones de km².",
        "Aproximadamente 758 mil km².",
      ],
    },
  },
  {
    id: "estado-mas-grande",
    category: "geografia",
    question: "El estado de la República de mayor extensión territorial es:",
    answer: "Chihuahua.",
    tags: ["estados"],
    choices: {
      correct: "Chihuahua.",
      distractors: ["Sonora.", "Coahuila.", "Durango."],
    },
  },
  {
    id: "ciudad-mas-poblada",
    category: "geografia",
    question: "Ciudad más poblada de México",
    answer: "Ciudad de México.",
    tags: ["ciudades"],
    choices: {
      correct: "Ciudad de México.",
      distractors: ["Guadalajara.", "Monterrey.", "Puebla."],
    },
  },
  {
    id: "tres-ciudades-mas-grandes",
    category: "geografia",
    question: "Las tres ciudades más grandes y pobladas del país son:",
    answer: "Ciudad de México, Guadalajara y Monterrey.",
    tags: ["ciudades"],
    choices: {
      correct: "Ciudad de México, Guadalajara y Monterrey.",
      distractors: [
        "Ciudad de México, Puebla y Tijuana.",
        "Guadalajara, Monterrey y Cancún.",
        "Ciudad de México, Mérida y Veracruz.",
      ],
    },
  },
  {
    id: "chilangos",
    category: "geografia",
    question:
      "¿Cómo se conoce popularmente a los habitantes de la Ciudad de México?",
    answer: "Chilangos.",
    tags: ["cdmx", "gentilicio"],
    choices: {
      correct: "Chilangos.",
      distractors: ["Tapatíos.", "Regiomontanos.", "Jarochos."],
    },
  },
  {
    id: "cdmx-ciudad-palacios",
    category: "geografia",
    question: "¿Cómo se conoce a la Ciudad de México?",
    answer: "La Ciudad de los Palacios.",
    tags: ["cdmx"],
    choices: {
      correct: "La Ciudad de los Palacios.",
      distractors: [
        "La Sultana del Norte.",
        "La Perla de Occidente.",
        "La Bella Airosa.",
      ],
    },
  },
  {
    id: "centro-historico-cdmx",
    category: "geografia",
    question:
      "¿Cómo se conoce el centro histórico de la Ciudad de México?",
    answer: "Como 'La Ciudad de los Palacios'.",
    tags: ["cdmx"],
    choices: {
      correct: "Como 'La Ciudad de los Palacios'.",
      distractors: [
        "Como 'La Perla Tapatía'.",
        "Como 'La Sultana del Norte'.",
        "Como 'El Corazón de Anáhuac'.",
      ],
    },
  },
  {
    id: "guadalajara-estado",
    category: "geografia",
    question:
      "¿En qué estado de la República se encuentra la ciudad de Guadalajara?",
    answer: "En Jalisco.",
    tags: ["guadalajara", "jalisco"],
    choices: {
      correct: "En Jalisco.",
      distractors: ["En Nayarit.", "En Michoacán.", "En Colima."],
    },
  },
  {
    id: "acapulco-estado",
    category: "geografia",
    question: "El puerto de Acapulco está en:",
    answer: "Guerrero.",
    tags: ["acapulco", "guerrero"],
    choices: {
      correct: "Guerrero.",
      distractors: ["Oaxaca.", "Michoacán.", "Colima."],
    },
  },
  {
    id: "jarocho",
    category: "geografia",
    question: "La palabra 'jarocho' alude a que es propio de:",
    answer: "Veracruz.",
    tags: ["gentilicios"],
    choices: {
      correct: "Veracruz.",
      distractors: ["Tabasco.", "Campeche.", "Yucatán."],
    },
  },
  // ─── State capitals ─────────────────────────────────────────────────
  {
    id: "capital-aguascalientes",
    category: "geografia",
    subcategory: "capitales",
    question: "Capital del estado de Aguascalientes",
    answer: "Aguascalientes.",
    tags: ["capitales"],
    choices: {
      correct: "Aguascalientes.",
      distractors: ["Zacatecas.", "San Luis Potosí.", "Calvillo."],
    },
  },
  {
    id: "capital-bc",
    category: "geografia",
    subcategory: "capitales",
    question: "Capital del estado de Baja California",
    answer: "Mexicali.",
    tags: ["capitales", "bc"],
    choices: {
      correct: "Mexicali.",
      distractors: ["Tijuana.", "Ensenada.", "La Paz."],
    },
  },
  {
    id: "capital-bcs",
    category: "geografia",
    subcategory: "capitales",
    question: "Capital del estado de Baja California Sur",
    answer: "La Paz.",
    tags: ["capitales", "bcs"],
    choices: {
      correct: "La Paz.",
      distractors: ["Cabo San Lucas.", "Loreto.", "Mexicali."],
    },
  },
  {
    id: "capital-chiapas",
    category: "geografia",
    subcategory: "capitales",
    question: "Capital del estado de Chiapas",
    answer: "Tuxtla Gutiérrez.",
    tags: ["capitales", "chiapas"],
    choices: {
      correct: "Tuxtla Gutiérrez.",
      distractors: [
        "San Cristóbal de las Casas.",
        "Tapachula.",
        "Comitán.",
      ],
    },
  },
  {
    id: "mexicali-apodo",
    category: "geografia",
    subcategory: "capitales",
    question: "¿Cómo se conoce a Mexicali?",
    answer: "Como 'la ciudad que capturó el sol'.",
    tags: ["mexicali"],
    choices: {
      correct: "Como 'la ciudad que capturó el sol'.",
      distractors: [
        "Como 'la perla del desierto'.",
        "Como 'la puerta del norte'.",
        "Como 'la ciudad de la eterna primavera'.",
      ],
    },
  },
  {
    id: "pachuca-apodo",
    category: "geografia",
    question: "¿A qué ciudad se conoce como 'La Bella Airosa'?",
    answer: "Pachuca, Hidalgo.",
    tags: ["pachuca"],
    choices: {
      correct: "Pachuca, Hidalgo.",
      distractors: [
        "Zacatecas, Zacatecas.",
        "Real del Monte, Hidalgo.",
        "Toluca, Estado de México.",
      ],
    },
  },
  {
    id: "celaya-apodo",
    category: "geografia",
    question: "¿Cuál es la ciudad conocida como la 'Puerta de Oro del Bajío'?",
    answer: "Celaya, Guanajuato.",
    tags: ["celaya", "bajio"],
    choices: {
      correct: "Celaya, Guanajuato.",
      distractors: [
        "Irapuato, Guanajuato.",
        "Querétaro, Querétaro.",
        "León, Guanajuato.",
      ],
    },
  },
  {
    id: "leon-apodo",
    category: "geografia",
    question: "¿Cuál es la ciudad conocida como la 'Perla del Bajío'?",
    answer: "León, Guanajuato.",
    tags: ["leon", "bajio"],
    choices: {
      correct: "León, Guanajuato.",
      distractors: [
        "Celaya, Guanajuato.",
        "Aguascalientes, Aguascalientes.",
        "Salamanca, Guanajuato.",
      ],
    },
  },

  // ─── Rivers and seas ──────────────────────────────────────────────
  {
    id: "rio-mas-largo",
    category: "geografia",
    subcategory: "rios",
    question: "¿Cuál es el río más largo de México?",
    answer: "El Río Bravo (frontera con Estados Unidos).",
    tags: ["rio bravo"],
    choices: {
      correct: "El Río Bravo (frontera con Estados Unidos).",
      distractors: [
        "El Río Balsas.",
        "El Río Grijalva.",
        "El Río Usumacinta.",
      ],
    },
  },
  {
    id: "rio-bravo-estados",
    category: "geografia",
    subcategory: "rios",
    question: "¿Cuáles son los estados que atraviesa el Río Bravo en México?",
    answer: "Chihuahua, Coahuila, Nuevo León y Tamaulipas.",
    tags: ["rio bravo"],
    choices: {
      correct: "Chihuahua, Coahuila, Nuevo León y Tamaulipas.",
      distractors: [
        "Sonora, Chihuahua, Coahuila y Nuevo León.",
        "Coahuila, Nuevo León, Tamaulipas y Veracruz.",
        "Chihuahua, Durango, Coahuila y Tamaulipas.",
      ],
    },
  },
  {
    id: "mar-de-cortes",
    category: "geografia",
    subcategory: "mares",
    question: "¿Dónde está el Mar de Cortés (o Mar Bermejo)?",
    answer:
      "Entre la península de Baja California y el resto del territorio mexicano.",
    tags: ["mar de cortes"],
    choices: {
      correct:
        "Entre la península de Baja California y el resto del territorio mexicano.",
      distractors: [
        "Entre la península de Yucatán y la isla de Cuba.",
        "Frente a las costas de Guerrero y Oaxaca.",
        "Entre Tamaulipas y el Golfo de México.",
      ],
    },
  },
  {
    id: "mar-de-cortes-estados",
    category: "geografia",
    subcategory: "mares",
    question: "¿Qué estados rodean el Mar de Cortés?",
    answer: "Baja California, Baja California Sur, Sonora y Sinaloa.",
    tags: ["mar de cortes"],
    choices: {
      correct: "Baja California, Baja California Sur, Sonora y Sinaloa.",
      distractors: [
        "Baja California, Sonora, Sinaloa y Nayarit.",
        "Baja California Sur, Sinaloa, Nayarit y Jalisco.",
        "Baja California, Baja California Sur, Sonora y Nayarit.",
      ],
    },
  },
  {
    id: "ballenas-jorobadas",
    category: "geografia",
    subcategory: "mares",
    question:
      "Lugar de México donde se observan en libertad ballenas jorobadas, ballenas y lobos marinos",
    answer: "En el Mar de Cortés.",
    tags: ["mar de cortes", "ballenas"],
    choices: {
      correct: "En el Mar de Cortés.",
      distractors: [
        "En la Riviera Maya.",
        "En la Laguna de Términos.",
        "En el Golfo de México.",
      ],
    },
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
    choices: {
      correct:
        "Dos principales: la Sierra Madre Oriental y la Sierra Madre Occidental (a las que se suma la Sierra Madre del Sur).",
      distractors: [
        "Una sola: la Sierra Madre Central.",
        "Cuatro: Oriental, Occidental, del Sur y del Norte.",
        "Tres: del Norte, del Centro y del Sur.",
      ],
    },
  },
  {
    id: "montana-mas-alta",
    category: "geografia",
    subcategory: "montanas",
    question: "¿Cuál es la montaña más alta de México?",
    answer: "El Citlaltépetl (Pico de Orizaba), 5 636 m.",
    tags: ["citlaltepetl", "orizaba"],
    choices: {
      correct: "El Citlaltépetl (Pico de Orizaba), 5 636 m.",
      distractors: [
        "El Popocatépetl, 5 426 m.",
        "El Iztaccíhuatl, 5 230 m.",
        "El Nevado de Toluca, 4 680 m.",
      ],
    },
  },
  {
    id: "popocatepetl",
    category: "geografia",
    subcategory: "volcanes",
    question:
      "Nombre del volcán ubicado entre Morelos, Puebla y Estado de México",
    answer: "Popocatépetl.",
    tags: ["popocatepetl"],
    choices: {
      correct: "Popocatépetl.",
      distractors: ["Iztaccíhuatl.", "Nevado de Toluca.", "La Malinche."],
    },
  },
  {
    id: "volcanes-edomex-puebla",
    category: "geografia",
    subcategory: "volcanes",
    question: "¿Cuáles son los volcanes del Estado de México y Puebla?",
    answer: "El Popocatépetl y el Iztaccíhuatl.",
    tags: ["popocatepetl", "iztaccihuatl"],
    choices: {
      correct: "El Popocatépetl y el Iztaccíhuatl.",
      distractors: [
        "El Pico de Orizaba y La Malinche.",
        "El Nevado de Toluca y el Paricutín.",
        "El Popocatépetl y el Nevado de Toluca.",
      ],
    },
  },
  {
    id: "don-goyo",
    category: "geografia",
    subcategory: "volcanes",
    question: "¿A qué se le conoce como 'Don Goyo' y 'La Mujer Dormida'?",
    answer:
      "A los volcanes Popocatépetl ('Don Goyo') e Iztaccíhuatl ('La Mujer Dormida').",
    tags: ["popocatepetl", "iztaccihuatl"],
    choices: {
      correct:
        "A los volcanes Popocatépetl ('Don Goyo') e Iztaccíhuatl ('La Mujer Dormida').",
      distractors: [
        "A los volcanes Pico de Orizaba ('Don Goyo') y La Malinche ('La Mujer Dormida').",
        "A los cerros del Ajusco y el Chiquihuite.",
        "A las sierras Madre Oriental y Madre Occidental.",
      ],
    },
  },

  // ─── Peninsulas and canyons ─────────────────────────────────────
  {
    id: "peninsulas",
    category: "geografia",
    question: "¿Cuántas penínsulas tiene México?",
    answer: "Dos: la Península de Baja California y la Península de Yucatán.",
    tags: ["peninsulas"],
    choices: {
      correct:
        "Dos: la Península de Baja California y la Península de Yucatán.",
      distractors: [
        "Tres: Baja California, Yucatán y Tehuantepec.",
        "Una: la Península de Yucatán.",
        "Dos: la Península de Yucatán y la de Florida.",
      ],
    },
  },
  {
    id: "canon-sumidero",
    category: "geografia",
    question:
      "¿En qué estado de la República se encuentra el Cañón del Sumidero?",
    answer: "En Chiapas.",
    tags: ["chiapas", "canon"],
    choices: {
      correct: "En Chiapas.",
      distractors: ["En Oaxaca.", "En Chihuahua.", "En Veracruz."],
    },
  },
  {
    id: "pena-bernal",
    category: "geografia",
    question: "¿Qué es la Peña de Bernal y dónde se encuentra?",
    answer:
      "Es el tercer monolito más grande del mundo; se encuentra en Querétaro.",
    tags: ["queretaro", "monolito"],
    choices: {
      correct:
        "Es el tercer monolito más grande del mundo; se encuentra en Querétaro.",
      distractors: [
        "Es el monolito más grande del mundo; se encuentra en Hidalgo.",
        "Es el segundo monolito más grande del mundo; se encuentra en Guanajuato.",
        "Es una zona arqueológica olmeca en Veracruz.",
      ],
    },
  },

  // ─── Natural heritage ─────────────────────────────────────────
  {
    id: "cabo-pulmo",
    category: "geografia",
    subcategory: "reservas",
    question: "Reserva natural del Golfo de Baja California",
    answer: "El Parque Nacional Cabo Pulmo.",
    tags: ["cabo pulmo", "bcs"],
    choices: {
      correct: "El Parque Nacional Cabo Pulmo.",
      distractors: [
        "El Parque Nacional Isla Espíritu Santo.",
        "La Reserva de la Biósfera de Sian Ka'an.",
        "El Parque Nacional Bahía de Loreto.",
      ],
    },
  },
  {
    id: "pinacate",
    category: "geografia",
    subcategory: "reservas",
    question: "Reserva natural en el estado de Sonora",
    answer: "Biósfera de El Pinacate y Gran Desierto de Altar.",
    tags: ["pinacate", "sonora"],
    choices: {
      correct: "Biósfera de El Pinacate y Gran Desierto de Altar.",
      distractors: [
        "Reserva de la Biósfera de Mapimí.",
        "Reserva de la Biósfera El Vizcaíno.",
        "Parque Nacional Cumbres de Monterrey.",
      ],
    },
  },
  {
    id: "azufres",
    category: "geografia",
    subcategory: "reservas",
    question: "¿Dónde se encuentra el Parque Nacional Los Azufres?",
    answer: "En Michoacán.",
    tags: ["azufres", "michoacan"],
    choices: {
      correct: "En Michoacán.",
      distractors: ["En Jalisco.", "En el Estado de México.", "En Guerrero."],
    },
  },
  {
    id: "estado-calzado",
    category: "geografia",
    question: "¿Cuál es el estado con mayor producción de calzado?",
    answer: "Guanajuato.",
    tags: ["industria", "guanajuato"],
    choices: {
      correct: "Guanajuato.",
      distractors: ["Jalisco.", "Estado de México.", "Nuevo León."],
    },
  },
  {
    id: "puertos-turisticos",
    category: "geografia",
    subcategory: "turismo",
    question: "Principales puertos turísticos de México",
    answer: "Cozumel, Acapulco y Mazatlán.",
    tags: ["turismo", "puertos"],
    choices: {
      correct: "Cozumel, Acapulco y Mazatlán.",
      distractors: [
        "Veracruz, Tampico y Progreso.",
        "Manzanillo, Salina Cruz y Lázaro Cárdenas.",
        "Altamira, Coatzacoalcos y Dos Bocas.",
      ],
    },
  },
  {
    id: "puertos-turistas-extranjero",
    category: "geografia",
    subcategory: "turismo",
    question:
      "Puertos más visitados por los turistas que vienen a México",
    answer: "Acapulco, Cancún y Cozumel.",
    tags: ["turismo"],
    choices: {
      correct: "Acapulco, Cancún y Cozumel.",
      distractors: [
        "Veracruz, Tampico y Manzanillo.",
        "Mazatlán, Puerto Vallarta y Ensenada.",
        "Progreso, Campeche y Ciudad del Carmen.",
      ],
    },
  },
  {
    id: "destinos-playa",
    category: "geografia",
    subcategory: "turismo",
    question: "Tres destinos de playa en México",
    answer: "Acapulco, Huatulco y Cancún.",
    tags: ["turismo", "playa"],
    choices: {
      correct: "Acapulco, Huatulco y Cancún.",
      distractors: [
        "Taxco, Pátzcuaro y San Miguel de Allende.",
        "Guanajuato, Zacatecas y Querétaro.",
        "Tijuana, Mexicali y Ciudad Juárez.",
      ],
    },
  },
  {
    id: "islas-mexico",
    category: "geografia",
    subcategory: "islas",
    question: "Nombres de algunas islas de México",
    answer:
      "Islas Marías, Isla Mujeres, Cozumel, Holbox, Isla Guadalupe (entre otras).",
    tags: ["islas"],
    choices: {
      correct:
        "Islas Marías, Isla Mujeres, Cozumel, Holbox, Isla Guadalupe (entre otras).",
      distractors: [
        "Isla de Pascua, Galápagos e Isla del Coco.",
        "Isla Margarita, Isla Tortuga y La Española.",
        "Islas Canarias, Baleares y Cíes.",
      ],
    },
  },
  {
    id: "cutzamala",
    category: "geografia",
    subcategory: "infraestructura",
    question:
      "Sistema de acueducto que abastece a la CDMX y al Estado de México",
    answer: "El Sistema Cutzamala.",
    tags: ["cutzamala", "agua"],
    choices: {
      correct: "El Sistema Cutzamala.",
      distractors: [
        "El Sistema Lerma.",
        "El Acueducto del Alto Lerma.",
        "El Sistema Pánuco-Tamesí.",
      ],
    },
  },
];
