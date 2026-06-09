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
    choices: {
      correct: "En 1935.",
      distractors: ["En 1929.", "En 1942.", "En 1948."],
    },
  },
  {
    id: "santa-pelicula",
    category: "cultura",
    subcategory: "cine",
    question: "¿Cuál fue la primera película sonora en México?",
    answer: "Santa (1932).",
    tags: ["cine"],
    choices: {
      correct: "Santa (1932).",
      distractors: [
        "Allá en el Rancho Grande (1936).",
        "El automóvil gris (1919).",
        "Tepeyac (1917).",
      ],
    },
  },
  {
    id: "primera-pelicula-color",
    category: "cultura",
    subcategory: "cine",
    question: "¿Cuál fue la primera película a color filmada en México?",
    answer: "Así se quiere en Jalisco (1942).",
    tags: ["cine"],
    choices: {
      correct: "Así se quiere en Jalisco (1942).",
      distractors: [
        "Novillero (1936).",
        "Allá en el Rancho Grande (1936).",
        "María Candelaria (1944).",
      ],
    },
  },
  {
    id: "actrices-oro",
    category: "cultura",
    subcategory: "cine",
    question:
      "Actrices mexicanas de la Época de Oro del cine mexicano",
    answer: "María Félix, Sara García y Dolores del Río.",
    tags: ["cine"],
    choices: {
      correct: "María Félix, Sara García y Dolores del Río.",
      distractors: [
        "Frida Kahlo, Lupe Vélez y Angélica María.",
        "Salma Hayek, Kate del Castillo y Yalitza Aparicio.",
        "Thalía, Lucero y Verónica Castro.",
      ],
    },
  },
  {
    id: "actores-oro",
    category: "cultura",
    subcategory: "cine",
    question: "¿Cuáles son actores de la Época de Oro del cine mexicano?",
    answer: "Pedro Infante, Jorge Negrete y Sara García.",
    tags: ["cine"],
    choices: {
      correct: "Pedro Infante, Jorge Negrete y Sara García.",
      distractors: [
        "Diego Luna, Gael García Bernal y Damián Alcázar.",
        "Eugenio Derbez, Adal Ramones y Omar Chaparro.",
        "Mauricio Ochmann, Aislinn Derbez y Vadhir Derbez.",
      ],
    },
  },
  {
    id: "sara-garcia-abuelita",
    category: "cultura",
    subcategory: "cine",
    question:
      "¿Cuál es la actriz mexicana que actuaba siempre de abuelita?",
    answer: "Sara (Sarita) García.",
    tags: ["cine", "sara garcia"],
    choices: {
      correct: "Sara (Sarita) García.",
      distractors: [
        "Prudencia Grifell.",
        "Emma Roldán.",
        "Carmen Montejo.",
      ],
    },
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
    choices: {
      correct: "Libertad Lamarque (argentina).",
      distractors: [
        "Rita Hayworth (estadounidense).",
        "Sara Montiel (española).",
        "Greta Garbo (sueca).",
      ],
    },
  },
  {
    id: "pedro-infante-pepe-toro",
    category: "cultura",
    subcategory: "cine",
    question: "Personaje icónico de Pedro Infante",
    answer: "Pepe el Toro.",
    tags: ["cine", "pedro infante"],
    choices: {
      correct: "Pepe el Toro.",
      distractors: [
        "Cantinflas.",
        "Tin Tan.",
        "El Chavo del 8.",
      ],
    },
  },
  {
    id: "negrete-charro",
    category: "cultura",
    subcategory: "cine",
    question:
      "Figura del cine nacional que encarnó al charro mexicano",
    answer: "Jorge Negrete.",
    tags: ["cine", "negrete"],
    choices: {
      correct: "Jorge Negrete.",
      distractors: [
        "Mario Moreno 'Cantinflas'.",
        "Germán Valdés 'Tin Tan'.",
        "Joaquín Pardavé.",
      ],
    },
  },
  {
    id: "negrete-nombre",
    category: "cultura",
    subcategory: "cine",
    question: "Nombre completo de Jorge Negrete",
    answer: "Jorge Alberto Negrete Moreno.",
    tags: ["cine", "negrete"],
    choices: {
      correct: "Jorge Alberto Negrete Moreno.",
      distractors: [
        "Jorge Alberto Negrete Reyes.",
        "Jorge Antonio Negrete Moreno.",
        "Jorge Alberto Negrete Salazar.",
      ],
    },
  },
  {
    id: "negrete-quien",
    category: "cultura",
    subcategory: "cine",
    question: "¿Quién fue Jorge Negrete?",
    answer: "Un actor y cantante mexicano de la Época de Oro del cine.",
    tags: ["cine", "negrete"],
    choices: {
      correct: "Un actor y cantante mexicano de la Época de Oro del cine.",
      distractors: [
        "Un director de cine mexicano de la Época de Oro.",
        "Un compositor y pianista mexicano del siglo XX.",
        "Un torero y empresario taurino mexicano.",
      ],
    },
  },
  {
    id: "mario-moreno",
    category: "cultura",
    subcategory: "cine",
    question: "¿Quién fue Mario Moreno?",
    answer: "El más reconocido comediante mexicano, conocido como 'Cantinflas'.",
    tags: ["cine", "cantinflas"],
    choices: {
      correct: "El más reconocido comediante mexicano, conocido como 'Cantinflas'.",
      distractors: [
        "El más reconocido comediante mexicano, conocido como 'Tin Tan'.",
        "El más reconocido comediante mexicano, conocido como 'Capulina'.",
        "El más reconocido comediante mexicano, conocido como 'Resortes'.",
      ],
    },
  },
  {
    id: "chavo-del-8",
    category: "cultura",
    subcategory: "cine",
    question: "¿Qué actor interpretó al Chavo del 8?",
    answer: "Roberto Gómez Bolaños ('Chespirito').",
    tags: ["tv", "chespirito"],
    choices: {
      correct: "Roberto Gómez Bolaños ('Chespirito').",
      distractors: [
        "Carlos Villagrán ('Quico').",
        "Ramón Valdés ('Don Ramón').",
        "Rubén Aguirre ('Profesor Jirafales').",
      ],
    },
  },
  {
    id: "chapulin-frase",
    category: "cultura",
    subcategory: "cine",
    question: "'No contaban con mi astucia' es una frase de:",
    answer: "El Chapulín Colorado (Chespirito).",
    tags: ["tv", "chespirito"],
    choices: {
      correct: "El Chapulín Colorado (Chespirito).",
      distractors: [
        "El Chavo del 8 (Chespirito).",
        "El Santo (Rodolfo Guzmán Huerta).",
        "Kalimán (radio y cómic).",
      ],
    },
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
    choices: {
      correct:
        "Macario (1960), basada en la novela del autor germano-mexicano B. Traven.",
      distractors: [
        "Río Escondido (1948), basada en una historia de Mauricio Magdaleno.",
        "Pedro Páramo (1967), basada en la novela de Juan Rulfo.",
        "El compadre Mendoza (1934), basada en un relato de Mauricio Magdaleno.",
      ],
    },
  },
  {
    id: "nueva-epoca-cine",
    category: "cultura",
    subcategory: "cine",
    question: "Año en que inicia la nueva época del cine mexicano",
    answer: "1990.",
    tags: ["cine"],
    choices: {
      correct: "1990.",
      distractors: ["1985.", "1992.", "2000."],
    },
  },
  {
    id: "premio-ariel",
    category: "cultura",
    subcategory: "cine",
    question: "Máximo galardón de la Academia Mexicana de Cinematografía",
    answer: "El Premio Ariel.",
    tags: ["cine", "ariel"],
    choices: {
      correct: "El Premio Ariel.",
      distractors: [
        "El Premio Diosa de Plata.",
        "El Premio Pantalla de Cristal.",
        "El Premio Canacine.",
      ],
    },
  },
  {
    id: "oscar-directores",
    category: "cultura",
    subcategory: "cine",
    question: "Mexicanos ganadores del Premio Óscar como Mejor Director",
    answer:
      "Alejandro González Iñárritu (Birdman, 2014; The Revenant, 2015), Alfonso Cuarón (Gravity, 2013; Roma, 2018) y Guillermo del Toro (The Shape of Water, 2017).",
    choices: {
      correct:
        "Alejandro González Iñárritu (Birdman, 2014; The Revenant, 2015), Alfonso Cuarón (Gravity, 2013; Roma, 2018) y Guillermo del Toro (The Shape of Water, 2017).",
      distractors: [
        "Alejandro González Iñárritu (Babel, 2006), Alfonso Cuarón (Y tu mamá también, 2001) y Guillermo del Toro (El laberinto del fauno, 2006).",
        "Emmanuel Lubezki, Rodrigo Prieto y Guillermo Navarro (cinefotógrafos mexicanos).",
        "Luis Buñuel (Los olvidados, 1950), Arturo Ripstein y Carlos Reygadas.",
      ],
    },
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
    choices: {
      correct:
        "Anthony Quinn, ganador en 1953 (Viva Zapata!) y 1957 (Lust for Life), ambos en la categoría de Mejor Actor de Reparto.",
      distractors: [
        "Anthony Quinn, ganador en 1953 (Viva Zapata!) y 1957 (Lust for Life), ambos como Mejor Actor.",
        "Anthony Quinn, ganador en 1961 (El Cid) y 1964 (Zorba el griego), como Mejor Actor de Reparto.",
        "Anthony Quinn, ganador en 1952 (¡Viva Zapata!) y 1956 (La strada), como Mejor Actor de Reparto.",
      ],
    },
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
    choices: {
      correct: "Elena Poniatowska.",
      distractors: [
        "Rosario Castellanos.",
        "Ángeles Mastretta.",
        "Laura Esquivel.",
      ],
    },
  },
  {
    id: "voces-tlatelolco",
    category: "cultura",
    subcategory: "literatura",
    question: "¿Quién escribió 'Las Voces de Tlatelolco'?",
    answer: "José Emilio Pacheco (atribución vinculada a sus poemas sobre 1968).",
    tags: ["literatura", "tlatelolco"],
    choices: {
      correct: "José Emilio Pacheco (atribución vinculada a sus poemas sobre 1968).",
      distractors: [
        "Octavio Paz (por su renuncia como embajador en 1968).",
        "Carlos Monsiváis (cronista del movimiento estudiantil).",
        "Jaime Sabines (autor de poemas de la época).",
      ],
    },
  },
  {
    id: "carlos-fuentes-obras",
    category: "cultura",
    subcategory: "literatura",
    question:
      "'La muerte de Artemio Cruz', 'Aura' y 'Los cinco soles' fueron escritas por:",
    answer: "Carlos Fuentes.",
    tags: ["literatura", "carlos fuentes"],
    choices: {
      correct: "Carlos Fuentes.",
      distractors: [
        "Juan Rulfo.",
        "Octavio Paz.",
        "Agustín Yáñez.",
      ],
    },
  },
  {
    id: "carlos-fuentes-region",
    category: "cultura",
    subcategory: "literatura",
    question: "¿Qué obra escribió Carlos Fuentes sobre la vida mexicana en 1958?",
    answer: "La región más transparente.",
    tags: ["literatura", "carlos fuentes"],
    choices: {
      correct: "La región más transparente.",
      distractors: [
        "La muerte de Artemio Cruz.",
        "Aura.",
        "Terra Nostra.",
      ],
    },
  },
  {
    id: "juan-rulfo",
    category: "cultura",
    subcategory: "literatura",
    question: "¿Qué fue Juan Rulfo?",
    answer:
      "Escritor mexicano, autor de 'Pedro Páramo' y 'El llano en llamas'.",
    tags: ["literatura", "rulfo"],
    choices: {
      correct: "Escritor mexicano, autor de 'Pedro Páramo' y 'El llano en llamas'.",
      distractors: [
        "Escritor mexicano, autor de 'Al filo del agua' y 'Las tierras flacas'.",
        "Escritor mexicano, autor de 'Los de abajo' y 'Mala yerba'.",
        "Escritor mexicano, autor de 'La sombra del caudillo' y 'El águila y la serpiente'.",
      ],
    },
  },
  {
    id: "llano-en-llamas",
    category: "cultura",
    subcategory: "literatura",
    question: "'El llano en llamas' fue escrito por:",
    answer: "Juan Rulfo.",
    tags: ["literatura", "rulfo"],
    choices: {
      correct: "Juan Rulfo.",
      distractors: [
        "Agustín Yáñez.",
        "Mariano Azuela.",
        "Martín Luis Guzmán.",
      ],
    },
  },
  {
    id: "relampagos-de-agosto",
    category: "cultura",
    subcategory: "literatura",
    question: "¿Quién escribió 'Relámpagos de Agosto'?",
    answer: "Jorge Ibargüengoitia.",
    tags: ["literatura"],
    choices: {
      correct: "Jorge Ibargüengoitia.",
      distractors: [
        "Jorge Volpi.",
        "Sergio Pitol.",
        "José Agustín.",
      ],
    },
  },
  {
    id: "narrativa-novela",
    category: "cultura",
    subcategory: "literatura",
    question:
      "¿Qué géneros escribían Juan Rulfo, Mario Bellatin y Jorge Volpi?",
    answer: "Narrativa y novela.",
    tags: ["literatura"],
    choices: {
      correct: "Narrativa y novela.",
      distractors: [
        "Poesía y ensayo.",
        "Teatro y dramaturgia.",
        "Crónica y periodismo.",
      ],
    },
  },
  {
    id: "nobel-literatura",
    category: "cultura",
    subcategory: "literatura",
    question:
      "Nombre del mexicano que recibió el Premio Nobel de Literatura",
    answer: "Octavio Paz (1990).",
    tags: ["literatura", "nobel", "paz"],
    choices: {
      correct: "Octavio Paz (1990).",
      distractors: [
        "Carlos Fuentes (1987).",
        "Juan Rulfo (1975).",
        "Mariano Azuela (1949).",
      ],
    },
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
    choices: {
      correct: "Francisco Gabilondo Soler ('Cri-Cri').",
      distractors: [
        "Chava Flores ('El cronista de la ciudad').",
        "Agustín Lara ('El Flaco de Oro').",
        "Joaquín Pardavé ('actor y compositor').",
      ],
    },
  },
  {
    id: "cri-cri",
    category: "cultura",
    subcategory: "literatura",
    question: "Famoso escritor mexicano de música para niños",
    answer: "Francisco Gabilondo Soler, alias 'Cri-Cri'.",
    tags: ["cri cri"],
    choices: {
      correct: "Francisco Gabilondo Soler, alias 'Cri-Cri'.",
      distractors: [
        "Agustín Lara, alias 'El Flaco de Oro'.",
        "Álvaro Carrillo, alias 'El cantor del mar'.",
        "Guty Cárdenas, alias 'El Ruiseñor Yucateco'.",
      ],
    },
  },

  // ─── Music and dance ────────────────────────────────────────────
  {
    id: "mariachi-origen",
    category: "cultura",
    subcategory: "musica",
    question: "¿De dónde proviene el mariachi?",
    answer: "De Jalisco.",
    tags: ["mariachi", "jalisco"],
    choices: {
      correct: "De Jalisco.",
      distractors: ["De Michoacán.", "De Nayarit.", "De Colima."],
    },
  },
  {
    id: "jarabe-tapatio",
    category: "cultura",
    subcategory: "musica",
    question: "Baile de Jalisco, considerado baile nacional de México",
    answer: "El Jarabe Tapatío.",
    tags: ["jarabe tapatio"],
    choices: {
      correct: "El Jarabe Tapatío.",
      distractors: [
        "El Son de la Negra.",
        "La Danza de los Viejitos.",
        "El Jarabe Mixteco.",
      ],
    },
  },
  {
    id: "bamba",
    category: "cultura",
    subcategory: "musica",
    question:
      "Himno popular de Veracruz / canción popular del estado",
    answer: "La Bamba.",
    tags: ["veracruz", "musica"],
    choices: {
      correct: "La Bamba.",
      distractors: ["El Cascabel.", "La Bruja.", "El Colás."],
    },
  },
  {
    id: "arpa-veracruz",
    category: "cultura",
    subcategory: "musica",
    question: "El arpa es un instrumento musical de:",
    answer: "Veracruz (típico del son jarocho).",
    tags: ["veracruz", "arpa"],
    choices: {
      correct: "Veracruz (típico del son jarocho).",
      distractors: [
        "Jalisco (típico del mariachi).",
        "Michoacán (típico de la pirekua).",
        "Oaxaca (típico de la chilena).",
      ],
    },
  },
  {
    id: "son-jarocho",
    category: "cultura",
    subcategory: "musica",
    question: "Género musical que pertenece al estado de Veracruz",
    answer: "El Son Jarocho.",
    tags: ["son jarocho", "veracruz"],
    choices: {
      correct: "El Son Jarocho.",
      distractors: [
        "El Son Huasteco.",
        "La Chilena.",
        "El Son Calentano.",
      ],
    },
  },
  {
    id: "jarana-yucatan",
    category: "cultura",
    subcategory: "musica",
    question: "La jarana es una manifestación / baile de:",
    answer: "Yucatán.",
    tags: ["jarana", "yucatan"],
    choices: {
      correct: "Yucatán.",
      distractors: ["Veracruz.", "Tabasco.", "Campeche."],
    },
  },
  {
    id: "manianitas",
    category: "cultura",
    subcategory: "musica",
    question: "En los cumpleaños se suele cantar en homenaje al festejado:",
    answer: "Las Mañanitas.",
    tags: ["musica"],
    choices: {
      correct: "Las Mañanitas.",
      distractors: [
        "Cielito Lindo.",
        "Las Golondrinas.",
        "La Marcha de Zacatecas.",
      ],
    },
  },
  {
    id: "golondrinas",
    category: "cultura",
    subcategory: "musica",
    question: "Es costumbre cantar 'Las Golondrinas' para:",
    answer: "Despedir a alguien.",
    tags: ["musica"],
    choices: {
      correct: "Despedir a alguien.",
      distractors: [
        "Celebrar un cumpleaños.",
        "Festejar una boda.",
        "Recibir el Año Nuevo.",
      ],
    },
  },
  {
    id: "voladores-papantla",
    category: "cultura",
    subcategory: "danza",
    question: "¿Qué son los voladores de Papantla?",
    answer: "Una danza indígena originaria de Veracruz.",
    tags: ["danza", "veracruz"],
    choices: {
      correct: "Una danza indígena originaria de Veracruz.",
      distractors: [
        "Una danza indígena originaria de Oaxaca.",
        "Una danza indígena originaria de Puebla.",
        "Una danza indígena originaria de Hidalgo.",
      ],
    },
  },
  {
    id: "voladores-papantla-ritual",
    category: "cultura",
    subcategory: "danza",
    question:
      "Ritual asociado a la fertilidad, ejecutado por cuatro danzantes que representan los puntos cardinales y un caporal",
    answer: "Los Voladores de Papantla.",
    tags: ["danza", "veracruz"],
    choices: {
      correct: "Los Voladores de Papantla.",
      distractors: [
        "La Danza del Venado.",
        "La Danza de los Concheros.",
        "Los Parachicos.",
      ],
    },
  },
  {
    id: "danza-venado",
    category: "cultura",
    subcategory: "danza",
    question: "¿De dónde es la Danza del Venado?",
    answer: "De Sonora (cultura yaqui).",
    tags: ["danza", "sonora"],
    choices: {
      correct: "De Sonora (cultura yaqui).",
      distractors: [
        "De Michoacán (cultura purépecha).",
        "De Oaxaca (cultura zapoteca).",
        "De Chiapas (cultura tzotzil).",
      ],
    },
  },
  {
    id: "baile-viejitos",
    category: "cultura",
    subcategory: "danza",
    question: "¿De dónde es el Baile de los Viejitos?",
    answer: "De Michoacán (cultura purépecha).",
    tags: ["danza", "michoacan"],
    choices: {
      correct: "De Michoacán (cultura purépecha).",
      distractors: [
        "De Oaxaca (cultura zapoteca).",
        "De Jalisco (cultura huichola).",
        "De Guerrero (cultura nahua).",
      ],
    },
  },
  {
    id: "danza-pina",
    category: "cultura",
    subcategory: "danza",
    question: "¿De dónde es el Baile de la Piña (Flor de Piña)?",
    answer: "De Oaxaca.",
    tags: ["danza", "oaxaca"],
    choices: {
      correct: "De Oaxaca.",
      distractors: ["De Chiapas.", "De Veracruz.", "De Tabasco."],
    },
  },
  {
    id: "guelaguetza",
    category: "cultura",
    subcategory: "fiestas",
    question: "¿De dónde es la Guelaguetza?",
    answer: "De Oaxaca.",
    tags: ["fiestas", "oaxaca"],
    choices: {
      correct: "De Oaxaca.",
      distractors: ["De Chiapas.", "De Guerrero.", "De Puebla."],
    },
  },
  {
    id: "parachicos",
    category: "cultura",
    subcategory: "fiestas",
    question: "¿Qué son los Parachicos?",
    answer:
      "Tradición de Chiapa de Corzo (Chiapas). Forman parte de las festividades en honor del Señor de Esquipulas, San Antonio Abad y San Sebastián. Patrimonio Cultural Inmaterial de la UNESCO.",
    tags: ["fiestas", "chiapas", "unesco-inmaterial"],
    choices: {
      correct:
        "Tradición de Chiapa de Corzo (Chiapas). Forman parte de las festividades en honor del Señor de Esquipulas, San Antonio Abad y San Sebastián. Patrimonio Cultural Inmaterial de la UNESCO.",
      distractors: [
        "Tradición de Pátzcuaro (Michoacán). Forman parte de las festividades del Día de Muertos en el lago. Patrimonio Cultural Inmaterial de la UNESCO.",
        "Tradición de Tlaxcala. Forman parte del Carnaval con los danzantes 'huehues'. Patrimonio Cultural del estado.",
        "Tradición de Oaxaca. Forman parte de la Guelaguetza en el cerro del Fortín. Patrimonio Cultural del estado.",
      ],
    },
  },

  // ─── Painting, muralism and sculpture ────────────────────────────
  {
    id: "muralismo-diego",
    category: "cultura",
    subcategory: "arte",
    question: "Representante del muralismo mexicano",
    answer: "Diego Rivera.",
    tags: ["muralismo"],
    choices: {
      correct: "Diego Rivera.",
      distractors: [
        "Frida Kahlo.",
        "José María Velasco.",
        "Saturnino Herrán.",
      ],
    },
  },
  {
    id: "mural-palacio-nacional",
    category: "cultura",
    subcategory: "arte",
    question: "Autor del mural del Palacio Nacional",
    answer: "Diego Rivera.",
    tags: ["muralismo"],
    choices: {
      correct: "Diego Rivera.",
      distractors: [
        "José Clemente Orozco.",
        "David Alfaro Siqueiros.",
        "Juan O'Gorman.",
      ],
    },
  },
  {
    id: "mural-antropologia",
    category: "cultura",
    subcategory: "arte",
    question:
      "Autor del mural del Museo Nacional de Antropología sobre la Serpiente Emplumada",
    answer: "Rufino Tamayo.",
    tags: ["muralismo", "rufino tamayo"],
    choices: {
      correct: "Rufino Tamayo.",
      distractors: [
        "Diego Rivera.",
        "David Alfaro Siqueiros.",
        "José Clemente Orozco.",
      ],
    },
  },
  {
    id: "frida-kahlo-quien",
    category: "cultura",
    subcategory: "arte",
    question: "¿Quién fue y por qué es conocida Frida Kahlo?",
    answer:
      "Pintora mexicana, una de las más importantes de América Latina, conocida por sus autorretratos.",
    tags: ["frida"],
    choices: {
      correct:
        "Pintora mexicana, una de las más importantes de América Latina, conocida por sus autorretratos.",
      distractors: [
        "Escultora mexicana, conocida por sus obras monumentales de cantera.",
        "Fotógrafa mexicana, pionera del retrato documental del siglo XX.",
        "Muralista mexicana, conocida por sus frescos en edificios públicos.",
      ],
    },
  },
  {
    id: "frida-nombre-completo",
    category: "cultura",
    subcategory: "arte",
    question: "Nombre completo de Frida Kahlo",
    answer: "Magdalena Carmen Frida Kahlo Calderón.",
    tags: ["frida"],
    choices: {
      correct: "Magdalena Carmen Frida Kahlo Calderón.",
      distractors: [
        "Magdalena Carmen Frieda Kahlo González.",
        "María Magdalena Frida Kahlo Rivera.",
        "Carmen Magdalena Frida Calderón Kahlo.",
      ],
    },
  },
  {
    id: "frida-amorios",
    category: "cultura",
    subcategory: "arte",
    question: "Extranjero con quien tuvo amoríos Frida Kahlo",
    answer: "León Trotsky.",
    tags: ["frida", "trotsky"],
    choices: {
      correct: "León Trotsky.",
      distractors: [
        "André Breton.",
        "Nelson Rockefeller.",
        "Henry Ford.",
      ],
    },
  },
  {
    id: "jose-maria-velasco",
    category: "cultura",
    subcategory: "arte",
    question: "¿Qué pintaba José María Velasco?",
    answer: "Paisajes.",
    tags: ["pintura"],
    choices: {
      correct: "Paisajes.",
      distractors: ["Retratos.", "Bodegones.", "Murales."],
    },
  },
  {
    id: "calaveras-posada",
    category: "cultura",
    subcategory: "arte",
    question: "Son famosos los grabados de 'calaveras' (esqueletos) de:",
    answer: "José Guadalupe Posada.",
    tags: ["posada", "grabado"],
    choices: {
      correct: "José Guadalupe Posada.",
      distractors: [
        "Diego Rivera.",
        "Gerardo Murillo 'Dr. Atl'.",
        "José Clemente Orozco.",
      ],
    },
  },
  {
    id: "german-cueto",
    category: "cultura",
    subcategory: "arte",
    question:
      "Titiritero y artista plástico mexicano del movimiento estridentista, autor de la escultura 'Hombre Corriendo'",
    answer: "Germán Cueto.",
    tags: ["arte", "estridentismo"],
    choices: {
      correct: "Germán Cueto.",
      distractors: [
        "Manuel Maples Arce.",
        "Germán List Arzubide.",
        "Fermín Revueltas.",
      ],
    },
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
    choices: {
      correct:
        "Enrique Carbajal González Santiván, conocido como 'Sebastián' (autor del Caballito de Reforma).",
      distractors: [
        "Juan Soriano, conocido por la escultura 'La Paloma' de Monterrey.",
        "Manuel Felguérez, escultor abstracto del 'Mural de Hierro'.",
        "Mathias Goeritz, autor de las Torres de Satélite.",
      ],
    },
  },
  {
    id: "luis-barragan",
    category: "cultura",
    subcategory: "arte",
    question: "¿Quién fue Luis Barragán?",
    answer:
      "Ingeniero y arquitecto mexicano, autor de obras como las Torres de Satélite.",
    tags: ["arquitectura"],
    choices: {
      correct:
        "Ingeniero y arquitecto mexicano, autor de obras como las Torres de Satélite.",
      distractors: [
        "Arquitecto mexicano, autor del Museo Soumaya y obras contemporáneas.",
        "Arquitecto mexicano, autor del Museo Nacional de Antropología.",
        "Arquitecto mexicano, autor de la Torre Latinoamericana.",
      ],
    },
  },
  {
    id: "luis-barragan-pritzker",
    category: "cultura",
    subcategory: "arte",
    question:
      "Mexicano que ganó el Premio Pritzker (comúnmente llamado 'Nobel de la Arquitectura') en 1980",
    answer: "Luis Barragán.",
    tags: ["arquitectura", "pritzker"],
    choices: {
      correct: "Luis Barragán.",
      distractors: [
        "Pedro Ramírez Vázquez.",
        "Teodoro González de León.",
        "Ricardo Legorreta.",
      ],
    },
  },
  {
    id: "premio-bellas-artes",
    category: "cultura",
    subcategory: "arte",
    question:
      "¿Cómo se llama el premio que entrega el Instituto Nacional de Bellas Artes?",
    answer: "Premio Bellas Artes.",
    tags: ["arte", "bellas artes"],
    choices: {
      correct: "Premio Bellas Artes.",
      distractors: [
        "Premio Nacional de Ciencias y Artes.",
        "Premio Ariel.",
        "Premio Nezahualcóyotl.",
      ],
    },
  },
  {
    id: "premio-amparo-davila",
    category: "cultura",
    subcategory: "arte",
    question:
      "¿Cómo se llama el premio que entrega Bellas Artes en la categoría de cuento o literario?",
    answer: "Premio Amparo Dávila.",
    tags: ["literatura"],
    choices: {
      correct: "Premio Amparo Dávila.",
      distractors: [
        "Premio Xavier Villaurrutia.",
        "Premio Carlos Fuentes.",
        "Premio Alfonso Reyes.",
      ],
    },
  },
  {
    id: "ganadores-amparo-davila",
    category: "cultura",
    subcategory: "arte",
    question: "Ganadores del premio Amparo Dávila",
    answer:
      "Entre otros: Damián Alcázar, Ana Ofelia Gurría y Mario Rojo (según los apuntes).",
    tags: ["literatura"],
    choices: {
      correct:
        "Entre otros: Damián Alcázar, Ana Ofelia Gurría y Mario Rojo (según los apuntes).",
      distractors: [
        "Entre otros: Élmer Mendoza, Guadalupe Nettel y Antonio Ortuño.",
        "Entre otros: Juan Villoro, Valeria Luiselli y Emiliano Monge.",
        "Entre otros: Fernanda Melchor, Yuri Herrera y Daniel Sada.",
      ],
    },
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
    choices: {
      correct: "Calaveras o calaveritas (literarias).",
      distractors: [
        "Coplas o versos de despedida.",
        "Décimas o glosas populares.",
        "Corridos o romances.",
      ],
    },
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
    choices: {
      correct: "El Día de Muertos.",
      distractors: [
        "La Guelaguetza.",
        "Las Fiestas de la Independencia.",
        "La Semana Santa de Taxco.",
      ],
    },
  },
  {
    id: "cempasuchil",
    category: "cultura",
    subcategory: "fiestas",
    question: "Nombre de la flor que se usa el Día de Muertos",
    answer: "Cempasúchil.",
    tags: ["dia muertos", "cempasuchil"],
    choices: {
      correct: "Cempasúchil.",
      distractors: ["Nochebuena.", "Bugambilia.", "Dalia."],
    },
  },
  {
    id: "nochebuena-flor",
    category: "cultura",
    subcategory: "fiestas",
    question: "Flor de color rojo típica de Navidad",
    answer: "La Nochebuena.",
    tags: ["navidad"],
    choices: {
      correct: "La Nochebuena.",
      distractors: ["El Tulipán.", "La Amapola.", "El Clavel rojo."],
    },
  },
  {
    id: "posadas",
    category: "cultura",
    subcategory: "fiestas",
    question:
      "Las 'posadas' son fiestas privadas o vecinales que se realizan:",
    answer: "Los días previos a la Navidad (del 16 al 24 de diciembre).",
    tags: ["navidad", "posadas"],
    choices: {
      correct: "Los días previos a la Navidad (del 16 al 24 de diciembre).",
      distractors: [
        "Los días previos al Año Nuevo (del 24 al 31 de diciembre).",
        "Durante la Semana Santa (marzo o abril).",
        "Los doce días después de Navidad (del 25 de diciembre al 6 de enero).",
      ],
    },
  },
  {
    id: "virgen-guadalupe-dia",
    category: "cultura",
    subcategory: "fiestas",
    question: "Día de la Virgen de Guadalupe",
    answer: "12 de diciembre.",
    tags: ["guadalupe"],
    choices: {
      correct: "12 de diciembre.",
      distractors: ["12 de octubre.", "2 de noviembre.", "8 de diciembre."],
    },
  },
  {
    id: "pasion-iztapalapa",
    category: "cultura",
    subcategory: "fiestas",
    question: "¿Dónde se celebra la Pasión de Cristo en CDMX?",
    answer: "En Iztapalapa.",
    tags: ["religion", "cdmx"],
    choices: {
      correct: "En Iztapalapa.",
      distractors: ["En Xochimilco.", "En Coyoacán.", "En Tláhuac."],
    },
  },
  {
    id: "pasion-cristo-representacion",
    category: "cultura",
    subcategory: "fiestas",
    question:
      "Representación religiosa que se realiza en Iztapalapa",
    answer: "La Pasión de Cristo.",
    tags: ["religion", "cdmx"],
    choices: {
      correct: "La Pasión de Cristo.",
      distractors: [
        "La quema de Judas.",
        "La peregrinación a la Basílica de Guadalupe.",
        "La fiesta de la Candelaria.",
      ],
    },
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
    choices: {
      correct: "Si un enemigo desconocido se atreviera.",
      distractors: [
        "Si un soldado valiente nos defendiera.",
        "Aunque el enemigo ya esté derrotado.",
        "Si un extranjero amigo nos visitara.",
      ],
    },
  },
  {
    id: "lenguas-indigenas-actuales",
    category: "cultura",
    subcategory: "lenguas",
    question:
      "En el México actual, las lenguas indígenas habladas suman:",
    answer: "Más de 60 lenguas.",
    tags: ["lenguas"],
    choices: {
      correct: "Más de 60 lenguas.",
      distractors: [
        "Más de 20 lenguas.",
        "Más de 100 lenguas.",
        "Más de 150 lenguas.",
      ],
    },
  },
  {
    id: "lenguas-indigenas-cuantas",
    category: "cultura",
    subcategory: "lenguas",
    question: "¿Cuántas lenguas indígenas existen en México?",
    answer:
      "68 agrupaciones lingüísticas reconocidas (con más de 360 variantes).",
    tags: ["lenguas"],
    choices: {
      correct: "68 agrupaciones lingüísticas reconocidas (con más de 360 variantes).",
      distractors: [
        "52 agrupaciones lingüísticas reconocidas (con más de 200 variantes).",
        "89 agrupaciones lingüísticas reconocidas (con más de 400 variantes).",
        "72 agrupaciones lingüísticas reconocidas (con más de 300 variantes).",
      ],
    },
  },
];
