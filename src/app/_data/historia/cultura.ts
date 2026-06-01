import type { HistoriaEntry } from "./types";

/**
 * Mexican culture: film, literature, music, painting, dance,
 * festivals, traditions, languages and sayings.
 */
export const ENTRIES_CULTURA: HistoriaEntry[] = [
  // ─── Film ──────────────────────────────────────────────────────
  {
    id: "cine-oro-inicio",
    category: "cultura",
    subcategory: "cine",
    question: "¿Cuándo empezó la Época de Oro del cine mexicano?",
    answer: "En 1935.",
    tags: ["cine"],
  },
  {
    id: "santa-pelicula",
    category: "cultura",
    subcategory: "cine",
    question: "¿Cuál fue la primera película sonora en México?",
    answer: "Santa (1932).",
    tags: ["cine"],
  },
  {
    id: "primera-pelicula-color",
    category: "cultura",
    subcategory: "cine",
    question: "¿Cuál fue la primera película a color filmada en México?",
    answer: "Así se quiere en Jalisco (1942).",
    tags: ["cine"],
  },
  {
    id: "actrices-oro",
    category: "cultura",
    subcategory: "cine",
    question:
      "Actrices mexicanas de la Época de Oro del cine mexicano",
    answer: "María Félix, Sara García y Dolores del Río.",
    tags: ["cine"],
  },
  {
    id: "actores-oro",
    category: "cultura",
    subcategory: "cine",
    question: "¿Cuáles son actores de la Época de Oro del cine mexicano?",
    answer: "Pedro Infante, Jorge Negrete y Sara García.",
    tags: ["cine"],
  },
  {
    id: "sara-garcia-abuelita",
    category: "cultura",
    subcategory: "cine",
    question:
      "¿Cuál es la actriz mexicana que actuaba siempre de abuelita?",
    answer: "Sara (Sarita) García.",
    tags: ["cine", "sara garcia"],
  },
  {
    id: "libertad-lamarque",
    category: "cultura",
    subcategory: "cine",
    question:
      "¿Cómo se llamaba la actriz extranjera de la Época Dorada del cine mexicano?",
    answer: "Libertad Lamarque (argentina).",
    correction: {
      originalAnswer: "Libertad Amarque",
      note: "El apellido correcto es 'Lamarque', no 'Amarque'.",
    },
    tags: ["cine"],
  },
  {
    id: "pedro-infante-pepe-toro",
    category: "cultura",
    subcategory: "cine",
    question: "Personaje icónico de Pedro Infante",
    answer: "Pepe el Toro.",
    tags: ["cine", "pedro infante"],
  },
  {
    id: "negrete-charro",
    category: "cultura",
    subcategory: "cine",
    question:
      "Figura del cine nacional que encarnó al charro mexicano",
    answer: "Jorge Negrete.",
    tags: ["cine", "negrete"],
  },
  {
    id: "negrete-nombre",
    category: "cultura",
    subcategory: "cine",
    question: "Nombre completo de Jorge Negrete",
    answer: "Jorge Alberto Negrete Moreno.",
    tags: ["cine", "negrete"],
  },
  {
    id: "negrete-quien",
    category: "cultura",
    subcategory: "cine",
    question: "¿Quién fue Jorge Negrete?",
    answer: "Un actor y cantante mexicano de la Época de Oro del cine.",
    tags: ["cine", "negrete"],
  },
  {
    id: "mario-moreno",
    category: "cultura",
    subcategory: "cine",
    question: "¿Quién fue Mario Moreno?",
    answer: "El más reconocido comediante mexicano, conocido como 'Cantinflas'.",
    tags: ["cine", "cantinflas"],
  },
  {
    id: "chavo-del-8",
    category: "cultura",
    subcategory: "cine",
    question: "¿Qué actor interpretó al Chavo del 8?",
    answer: "Roberto Gómez Bolaños ('Chespirito').",
    tags: ["tv", "chespirito"],
  },
  {
    id: "chapulin-frase",
    category: "cultura",
    subcategory: "cine",
    question: "'No contaban con mi astucia' es una frase de:",
    answer: "El Chapulín Colorado (Chespirito).",
    tags: ["tv", "chespirito"],
  },
  {
    id: "macario-pelicula",
    category: "cultura",
    subcategory: "cine",
    question:
      "Película mexicana basada en una novela escrita por un extranjero",
    answer:
      "Macario (1960), basada en la novela del autor germano-mexicano B. Traven.",
    tags: ["cine", "macario"],
  },
  {
    id: "nueva-epoca-cine",
    category: "cultura",
    subcategory: "cine",
    question: "Año en que inicia la nueva época del cine mexicano",
    answer: "1990.",
    tags: ["cine"],
  },
  {
    id: "premio-ariel",
    category: "cultura",
    subcategory: "cine",
    question: "Máximo galardón de la Academia Mexicana de Cinematografía",
    answer: "El Premio Ariel.",
    tags: ["cine", "ariel"],
  },
  {
    id: "oscar-directores",
    category: "cultura",
    subcategory: "cine",
    question: "Mexicanos ganadores del Premio Óscar como Mejor Director",
    answer:
      "Alejandro González Iñárritu (Birdman, 2014; The Revenant, 2015), Alfonso Cuarón (Gravity, 2013; Roma, 2018) y Guillermo del Toro (The Shape of Water, 2017).",
    correction: {
      originalAnswer: "Alejandro González Iñárritu y Alfonso Cuarón",
      note:
        "Se añade a Guillermo del Toro, que también ganó el Óscar como Mejor Director por 'The Shape of Water' (2017).",
    },
    tags: ["cine", "oscars"],
  },
  {
    id: "oscar-actor-anthony-quinn",
    category: "cultura",
    subcategory: "cine",
    question:
      "Mexicano que ha ganado dos Premios Óscar como mejor actor de reparto",
    answer:
      "Anthony Quinn, ganador en 1953 (Viva Zapata!) y 1957 (Lust for Life), ambos en la categoría de Mejor Actor de Reparto.",
    correction: {
      originalAnswer: "Anthony Quinn, dos Óscar como mejor actor",
      note:
        "Anthony Quinn nunca ganó como Mejor Actor; sus dos estatuillas fueron en la categoría de Mejor Actor de Reparto.",
    },
    tags: ["cine", "oscars"],
  },

  // ─── Literature ────────────────────────────────────────────────
  {
    id: "noche-tlatelolco",
    category: "cultura",
    subcategory: "literatura",
    question: "¿Quién escribió 'La Noche de Tlatelolco'?",
    answer: "Elena Poniatowska.",
    tags: ["literatura", "tlatelolco"],
  },
  {
    id: "voces-tlatelolco",
    category: "cultura",
    subcategory: "literatura",
    question: "¿Quién escribió 'Las Voces de Tlatelolco'?",
    answer: "José Emilio Pacheco (atribución vinculada a sus poemas sobre 1968).",
    tags: ["literatura", "tlatelolco"],
  },
  {
    id: "carlos-fuentes-obras",
    category: "cultura",
    subcategory: "literatura",
    question:
      "'La muerte de Artemio Cruz', 'Aura' y 'Los cinco soles' fueron escritas por:",
    answer: "Carlos Fuentes.",
    tags: ["literatura", "carlos fuentes"],
  },
  {
    id: "carlos-fuentes-region",
    category: "cultura",
    subcategory: "literatura",
    question: "¿Qué obra escribió Carlos Fuentes sobre la vida mexicana en 1958?",
    answer: "La región más transparente.",
    tags: ["literatura", "carlos fuentes"],
  },
  {
    id: "juan-rulfo",
    category: "cultura",
    subcategory: "literatura",
    question: "¿Qué fue Juan Rulfo?",
    answer:
      "Escritor mexicano, autor de 'Pedro Páramo' y 'El llano en llamas'.",
    tags: ["literatura", "rulfo"],
  },
  {
    id: "llano-en-llamas",
    category: "cultura",
    subcategory: "literatura",
    question: "'El llano en llamas' fue escrito por:",
    answer: "Juan Rulfo.",
    tags: ["literatura", "rulfo"],
  },
  {
    id: "relampagos-de-agosto",
    category: "cultura",
    subcategory: "literatura",
    question: "¿Quién escribió 'Relámpagos de Agosto'?",
    answer: "Jorge Ibargüengoitia.",
    tags: ["literatura"],
  },
  {
    id: "narrativa-novela",
    category: "cultura",
    subcategory: "literatura",
    question:
      "¿Qué géneros escribían Juan Rulfo, Mario Bellatin y Jorge Volpi?",
    answer: "Narrativa y novela.",
    tags: ["literatura"],
  },
  {
    id: "nobel-literatura",
    category: "cultura",
    subcategory: "literatura",
    question:
      "Nombre del mexicano que recibió el Premio Nobel de Literatura",
    answer: "Octavio Paz (1990).",
    tags: ["literatura", "nobel", "paz"],
  },
  {
    id: "ratón-vaquero",
    category: "cultura",
    subcategory: "literatura",
    question: "¿Quién escribió 'El ratón vaquero'?",
    answer: "Francisco Gabilondo Soler ('Cri-Cri').",
    correction: {
      originalAnswer: "",
      note:
        "Los apuntes dejaron la respuesta en blanco. El autor es Francisco Gabilondo Soler, alias 'Cri-Cri'.",
    },
    tags: ["literatura", "cri cri"],
  },
  {
    id: "cri-cri",
    category: "cultura",
    subcategory: "literatura",
    question: "Famoso escritor mexicano de música para niños",
    answer: "Francisco Gabilondo Soler, alias 'Cri-Cri'.",
    tags: ["cri cri"],
  },

  // ─── Music and dance ────────────────────────────────────────────
  {
    id: "mariachi-origen",
    category: "cultura",
    subcategory: "musica",
    question: "¿De dónde proviene el mariachi?",
    answer: "De Jalisco.",
    tags: ["mariachi", "jalisco"],
  },
  {
    id: "jarabe-tapatio",
    category: "cultura",
    subcategory: "musica",
    question: "Baile de Jalisco, considerado baile nacional de México",
    answer: "El Jarabe Tapatío.",
    tags: ["jarabe tapatio"],
  },
  {
    id: "bamba",
    category: "cultura",
    subcategory: "musica",
    question:
      "Himno popular de Veracruz / canción popular del estado",
    answer: "La Bamba.",
    tags: ["veracruz", "musica"],
  },
  {
    id: "arpa-veracruz",
    category: "cultura",
    subcategory: "musica",
    question: "El arpa es un instrumento musical de:",
    answer: "Veracruz (típico del son jarocho).",
    tags: ["veracruz", "arpa"],
  },
  {
    id: "son-jarocho",
    category: "cultura",
    subcategory: "musica",
    question: "Género musical que pertenece al estado de Veracruz",
    answer: "El Son Jarocho.",
    tags: ["son jarocho", "veracruz"],
  },
  {
    id: "jarana-yucatan",
    category: "cultura",
    subcategory: "musica",
    question: "La jarana es una manifestación / baile de:",
    answer: "Yucatán.",
    tags: ["jarana", "yucatan"],
  },
  {
    id: "manianitas",
    category: "cultura",
    subcategory: "musica",
    question: "En los cumpleaños se suele cantar en homenaje al festejado:",
    answer: "Las Mañanitas.",
    tags: ["musica"],
  },
  {
    id: "golondrinas",
    category: "cultura",
    subcategory: "musica",
    question: "Es costumbre cantar 'Las Golondrinas' para:",
    answer: "Despedir a alguien.",
    tags: ["musica"],
  },
  {
    id: "voladores-papantla",
    category: "cultura",
    subcategory: "danza",
    question: "¿Qué son los voladores de Papantla?",
    answer: "Una danza indígena originaria de Veracruz.",
    tags: ["danza", "veracruz"],
  },
  {
    id: "voladores-papantla-ritual",
    category: "cultura",
    subcategory: "danza",
    question:
      "Ritual asociado a la fertilidad, ejecutado por cuatro danzantes que representan los puntos cardinales y un caporal",
    answer: "Los Voladores de Papantla.",
    tags: ["danza", "veracruz"],
  },
  {
    id: "danza-venado",
    category: "cultura",
    subcategory: "danza",
    question: "¿De dónde es la Danza del Venado?",
    answer: "De Sonora (cultura yaqui).",
    tags: ["danza", "sonora"],
  },
  {
    id: "baile-viejitos",
    category: "cultura",
    subcategory: "danza",
    question: "¿De dónde es el Baile de los Viejitos?",
    answer: "De Michoacán (cultura purépecha).",
    tags: ["danza", "michoacan"],
  },
  {
    id: "danza-pina",
    category: "cultura",
    subcategory: "danza",
    question: "¿De dónde es el Baile de la Piña (Flor de Piña)?",
    answer: "De Oaxaca.",
    tags: ["danza", "oaxaca"],
  },
  {
    id: "guelaguetza",
    category: "cultura",
    subcategory: "fiestas",
    question: "¿De dónde es la Guelaguetza?",
    answer: "De Oaxaca.",
    tags: ["fiestas", "oaxaca"],
  },
  {
    id: "parachicos",
    category: "cultura",
    subcategory: "fiestas",
    question: "¿Qué son los Parachicos?",
    answer:
      "Tradición de Chiapa de Corzo (Chiapas). Forman parte de las festividades en honor del Señor de Esquipulas, San Antonio Abad y San Sebastián. Patrimonio Cultural Inmaterial de la UNESCO.",
    tags: ["fiestas", "chiapas", "unesco-inmaterial"],
  },

  // ─── Painting, muralism and sculpture ────────────────────────────
  {
    id: "muralismo-diego",
    category: "cultura",
    subcategory: "arte",
    question: "Representante del muralismo mexicano",
    answer: "Diego Rivera.",
    tags: ["muralismo"],
  },
  {
    id: "mural-palacio-nacional",
    category: "cultura",
    subcategory: "arte",
    question: "Autor del mural del Palacio Nacional",
    answer: "Diego Rivera.",
    tags: ["muralismo"],
  },
  {
    id: "mural-antropologia",
    category: "cultura",
    subcategory: "arte",
    question:
      "Autor del mural del Museo Nacional de Antropología sobre la Serpiente Emplumada",
    answer: "Rufino Tamayo.",
    tags: ["muralismo", "rufino tamayo"],
  },
  {
    id: "frida-kahlo-quien",
    category: "cultura",
    subcategory: "arte",
    question: "¿Quién fue y por qué es conocida Frida Kahlo?",
    answer:
      "Pintora mexicana, una de las más importantes de América Latina, conocida por sus autorretratos.",
    tags: ["frida"],
  },
  {
    id: "frida-nombre-completo",
    category: "cultura",
    subcategory: "arte",
    question: "Nombre completo de Frida Kahlo",
    answer: "Magdalena Carmen Frida Kahlo Calderón.",
    tags: ["frida"],
  },
  {
    id: "frida-amorios",
    category: "cultura",
    subcategory: "arte",
    question: "Extranjero con quien tuvo amoríos Frida Kahlo",
    answer: "León Trotsky.",
    tags: ["frida", "trotsky"],
  },
  {
    id: "jose-maria-velasco",
    category: "cultura",
    subcategory: "arte",
    question: "¿Qué pintaba José María Velasco?",
    answer: "Paisajes.",
    tags: ["pintura"],
  },
  {
    id: "calaveras-posada",
    category: "cultura",
    subcategory: "arte",
    question: "Son famosos los grabados de 'calaveras' (esqueletos) de:",
    answer: "José Guadalupe Posada.",
    tags: ["posada", "grabado"],
  },
  {
    id: "german-cueto",
    category: "cultura",
    subcategory: "arte",
    question:
      "Titiritero y artista plástico mexicano del movimiento estridentista, autor de la escultura 'Hombre Corriendo'",
    answer: "Germán Cueto.",
    tags: ["arte", "estridentismo"],
  },
  {
    id: "sebastian-escultor",
    category: "cultura",
    subcategory: "arte",
    question:
      "Famoso escultor mexicano especializado en figuras geométricas monumentales",
    answer:
      "Enrique Carbajal González Santiván, conocido como 'Sebastián' (autor del Caballito de Reforma).",
    tags: ["escultura"],
  },
  {
    id: "luis-barragan",
    category: "cultura",
    subcategory: "arte",
    question: "¿Quién fue Luis Barragán?",
    answer:
      "Ingeniero y arquitecto mexicano, autor de obras como las Torres de Satélite.",
    tags: ["arquitectura"],
  },
  {
    id: "luis-barragan-pritzker",
    category: "cultura",
    subcategory: "arte",
    question:
      "Mexicano que ganó el Premio Pritzker (comúnmente llamado 'Nobel de la Arquitectura') en 1980",
    answer: "Luis Barragán.",
    tags: ["arquitectura", "pritzker"],
  },
  {
    id: "premio-bellas-artes",
    category: "cultura",
    subcategory: "arte",
    question:
      "¿Cómo se llama el premio que entrega el Instituto Nacional de Bellas Artes?",
    answer: "Premio Bellas Artes.",
    tags: ["arte", "bellas artes"],
  },
  {
    id: "premio-amparo-davila",
    category: "cultura",
    subcategory: "arte",
    question:
      "¿Cómo se llama el premio que entrega Bellas Artes en la categoría de cuento o literario?",
    answer: "Premio Amparo Dávila.",
    tags: ["literatura"],
  },
  {
    id: "ganadores-amparo-davila",
    category: "cultura",
    subcategory: "arte",
    question: "Ganadores del premio Amparo Dávila",
    answer:
      "Entre otros: Damián Alcázar, Ana Ofelia Gurría y Mario Rojo (según los apuntes).",
    tags: ["literatura"],
  },

  // ─── Festivals and traditions ─────────────────────────────────────
  {
    id: "calaveras-poemas",
    category: "cultura",
    subcategory: "fiestas",
    question:
      "Versos festivos que se escriben en noviembre con motivo del Día de Muertos",
    answer: "Calaveras o calaveritas (literarias).",
    tags: ["dia muertos"],
  },
  {
    id: "dia-muertos-unesco",
    category: "cultura",
    subcategory: "fiestas",
    question:
      "Una festividad mexicana que es Patrimonio Cultural Inmaterial de la Humanidad",
    answer: "El Día de Muertos.",
    correction: {
      originalAnswer: "Díq de Muertos",
      note: "Corrección ortográfica: 'Día de Muertos'.",
    },
    tags: ["dia muertos", "unesco-inmaterial"],
  },
  {
    id: "cempasuchil",
    category: "cultura",
    subcategory: "fiestas",
    question: "Nombre de la flor que se usa el Día de Muertos",
    answer: "Cempasúchil.",
    tags: ["dia muertos", "cempasuchil"],
  },
  {
    id: "nochebuena-flor",
    category: "cultura",
    subcategory: "fiestas",
    question: "Flor de color rojo típica de Navidad",
    answer: "La Nochebuena.",
    tags: ["navidad"],
  },
  {
    id: "posadas",
    category: "cultura",
    subcategory: "fiestas",
    question:
      "Las 'posadas' son fiestas privadas o vecinales que se realizan:",
    answer: "Los días previos a la Navidad (del 16 al 24 de diciembre).",
    tags: ["navidad", "posadas"],
  },
  {
    id: "virgen-guadalupe-dia",
    category: "cultura",
    subcategory: "fiestas",
    question: "Día de la Virgen de Guadalupe",
    answer: "12 de diciembre.",
    tags: ["guadalupe"],
  },
  {
    id: "pasion-iztapalapa",
    category: "cultura",
    subcategory: "fiestas",
    question: "¿Dónde se celebra la Pasión de Cristo en CDMX?",
    answer: "En Iztapalapa.",
    tags: ["religion", "cdmx"],
  },
  {
    id: "pasion-cristo-representacion",
    category: "cultura",
    subcategory: "fiestas",
    question:
      "Representación religiosa que se realiza en Iztapalapa",
    answer: "La Pasión de Cristo.",
    tags: ["religion", "cdmx"],
  },

  // ─── Sayings / language ─────────────────────────────────────────
  {
    id: "himno-mas-osare",
    category: "cultura",
    subcategory: "literatura",
    question:
      "En el Himno Nacional, ¿qué significa la expresión 'Mas si osare un extraño enemigo'?",
    answer: "Si un enemigo desconocido se atreviera.",
    tags: ["himno"],
  },
  {
    id: "lenguas-indigenas-actuales",
    category: "cultura",
    subcategory: "lenguas",
    question:
      "En el México actual, las lenguas indígenas habladas suman:",
    answer: "Más de 60 lenguas.",
    tags: ["lenguas"],
  },
  {
    id: "lenguas-indigenas-cuantas",
    category: "cultura",
    subcategory: "lenguas",
    question: "¿Cuántas lenguas indígenas existen en México?",
    answer:
      "68 agrupaciones lingüísticas reconocidas (con más de 360 variantes).",
    tags: ["lenguas"],
  },
];
