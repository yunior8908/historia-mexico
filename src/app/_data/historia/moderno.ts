import type { HistoriaEntry } from "./types";

/**
 * Modern Mexico: post-revolution, Maximato, cardenismo, the Mexican
 * miracle, earthquakes, NAFTA, EZLN, democratic transitions of
 * power, 21st century.
 */
export const ENTRIES_MODERNO: HistoriaEntry[] = [
  // ─── Post-revolution / Maximato / Cárdenas ──────────────────────
  {
    id: "obregon-asesinato",
    category: "moderno",
    subcategory: "postrevolucion",
    question: "¿Qué presidente fue asesinado en 1928?",
    answer: "Álvaro Obregón (asesinado por José de León Toral en La Bombilla, CDMX).",
    correction: {
      originalAnswer: "Álvaro Oregón",
      note: "Corrección ortográfica: el apellido es 'Obregón', no 'Oregón'.",
    },
    tags: ["obregon"],
  },
  {
    id: "pnr-fundacion",
    category: "moderno",
    subcategory: "postrevolucion",
    question: "¿Quién fundó el Partido Nacional Revolucionario en 1929?",
    answer: "Plutarco Elías Calles.",
    tags: ["pnr", "pri", "calles"],
  },
  {
    id: "banxico-creacion",
    category: "moderno",
    subcategory: "postrevolucion",
    question: "¿Quién creó el Banco de México en 1925?",
    answer: "Plutarco Elías Calles.",
    tags: ["banxico", "calles"],
  },
  {
    id: "ley-calles",
    category: "moderno",
    subcategory: "postrevolucion",
    question: "¿Qué fue la Ley Calles?",
    answer:
      "Ley expedida para controlar y limitar el culto católico en México (oficialmente Ley de Tolerancia de Cultos), elaborada durante la presidencia de Plutarco Elías Calles.",
    tags: ["ley calles", "calles"],
  },
  {
    id: "guerra-cristera",
    category: "moderno",
    subcategory: "postrevolucion",
    question: "¿Qué fue la Guerra Cristera?",
    answer:
      "Conflicto armado de 1926 a 1929 entre el gobierno y creyentes laicos católicos que estaban en contra de la Ley Calles.",
    tags: ["cristera"],
  },
  {
    id: "maximato",
    category: "moderno",
    subcategory: "postrevolucion",
    question: "¿Cuándo fue el periodo conocido como el Maximato?",
    answer: "De 1928 a 1934.",
    tags: ["maximato", "calles"],
  },
  {
    id: "expropiacion-petrolera-fecha",
    category: "moderno",
    subcategory: "cardenismo",
    question: "El 18 de marzo de 1938, el presidente Lázaro Cárdenas:",
    answer: "Nacionalizó / expropió la industria petrolera.",
    tags: ["petroleo", "cardenas"],
  },
  {
    id: "expropiacion-petrolera-resumen",
    category: "moderno",
    subcategory: "cardenismo",
    question: "Resumen de la acción de Cárdenas el 18 de marzo de 1938",
    answer: "Expropió el petróleo.",
    tags: ["petroleo", "cardenas"],
  },
  {
    id: "ipn-creacion",
    category: "moderno",
    subcategory: "cardenismo",
    question:
      "¿Qué institución educativa creó el presidente Lázaro Cárdenas?",
    answer: "El Instituto Politécnico Nacional (IPN).",
    tags: ["ipn", "cardenas"],
  },
  {
    id: "ipn-fecha",
    category: "moderno",
    subcategory: "cardenismo",
    question: "¿Cuándo se creó el Instituto Politécnico Nacional (IPN)?",
    answer: "El 1 de enero de 1936.",
    tags: ["ipn"],
  },
  {
    id: "trotsky-asilo",
    category: "moderno",
    subcategory: "cardenismo",
    question:
      "¿Qué político comunista ruso recibió asilo político en México?",
    answer: "León Trotsky (durante el gobierno de Lázaro Cárdenas, 1937).",
    tags: ["trotsky"],
  },

  // ─── Ávila Camacho / World War II ─────────────────────────────
  {
    id: "avila-camacho-segunda-guerra",
    category: "moderno",
    subcategory: "milagro-mexicano",
    question:
      "¿Qué presidente declaró la guerra a los países del Eje (Alemania, Italia y Japón) durante la Segunda Guerra Mundial?",
    answer: "Manuel Ávila Camacho (1942).",
    tags: ["avila camacho", "wwii"],
  },
  {
    id: "himno-nacional-oficial",
    category: "moderno",
    subcategory: "milagro-mexicano",
    question:
      "¿En qué año y bajo qué presidencia se declaró oficial el Himno Nacional Mexicano?",
    answer:
      "En 1943, durante la presidencia de Manuel Ávila Camacho.",
    tags: ["himno", "avila camacho"],
  },
  {
    id: "imss-creacion",
    category: "moderno",
    subcategory: "milagro-mexicano",
    question: "¿Cuándo se creó el IMSS?",
    answer:
      "El 19 de enero de 1943 (Ley del Seguro Social, gobierno de Manuel Ávila Camacho).",
    tags: ["imss"],
  },

  // ─── Mexican miracle / symbols of progress ───────────────────
  {
    id: "diana-cazadora-inauguracion",
    category: "moderno",
    subcategory: "milagro-mexicano",
    question: "¿Qué presidente inauguró la Diana Cazadora?",
    answer: "Manuel Ávila Camacho (1942, en avenida Reforma).",
    tags: ["diana cazadora", "cdmx"],
  },
  {
    id: "diana-cazadora-otro-nombre",
    category: "moderno",
    subcategory: "milagro-mexicano",
    question: "¿Con qué otro nombre se conoce a la Diana Cazadora?",
    answer: "La Flechadora de las Estrellas del Norte.",
    tags: ["diana cazadora", "cdmx"],
  },
  {
    id: "torre-latino",
    category: "moderno",
    subcategory: "milagro-mexicano",
    question:
      "Rascacielos de 43 pisos que ha resistido al menos tres terremotos",
    answer: "La Torre Latinoamericana.",
    tags: ["torre latino", "cdmx"],
  },
  {
    id: "torre-latino-1950",
    category: "moderno",
    subcategory: "milagro-mexicano",
    question: "Símbolo de la modernización inaugurado en 1950 (en realidad 1956)",
    answer: "La Torre Latinoamericana.",
    correction: {
      originalAnswer:
        "Torre Latinoamericana, inaugurada en 1950 según los apuntes.",
      note:
        "La Torre Latinoamericana fue inaugurada el 30 de abril de 1956, no en 1950. El proyecto se concibió en los años 50 pero la obra se concluyó en 1956.",
    },
    tags: ["torre latino"],
  },
  {
    id: "portes-gil-unam",
    category: "moderno",
    subcategory: "postrevolucion",
    question: "¿Qué presidente le dio la autonomía a la UNAM?",
    answer: "Emilio Portes Gil (1929).",
    tags: ["unam", "portes gil"],
  },
  {
    id: "bellas-artes-inauguracion",
    category: "moderno",
    subcategory: "postrevolucion",
    question:
      "¿Qué se inauguró durante el periodo presidencial de Abelardo L. Rodríguez?",
    answer: "El Palacio de Bellas Artes (1934).",
    tags: ["bellas artes"],
  },

  // ─── 1960s: Tlatelolco, Olympics, World Cup ─────────────────────
  {
    id: "movilizacion-estudiantil",
    category: "moderno",
    subcategory: "1968",
    question: "Fecha de la mayor movilización estudiantil en México",
    answer: "26 de julio de 1968 (Movimiento Estudiantil del 68).",
    tags: ["1968", "movimiento estudiantil"],
  },
  {
    id: "matanza-tlatelolco-fecha",
    category: "moderno",
    subcategory: "1968",
    question: "¿Cuándo fue la matanza de Tlatelolco?",
    answer: "El 2 de octubre de 1968.",
    tags: ["tlatelolco", "1968"],
  },
  {
    id: "presidente-tlatelolco",
    category: "moderno",
    subcategory: "1968",
    question: "¿Quién era presidente durante la matanza de Tlatelolco?",
    answer: "Gustavo Díaz Ordaz.",
    tags: ["diaz ordaz", "1968"],
  },
  {
    id: "olimpiadas-sede",
    category: "moderno",
    subcategory: "1968",
    question:
      "Lugar y fecha en la que México fue sede de los Juegos Olímpicos",
    answer:
      "Ciudad de México; los Juegos se inauguraron el 12 de octubre de 1968 y se realizaron del 12 al 27 de octubre.",
    tags: ["olimpiadas", "1968"],
  },
  {
    id: "metro-cdmx-inauguracion",
    category: "moderno",
    subcategory: "1968",
    question:
      "¿En qué fecha se inauguró el Metro de la CDMX (Línea 1, 'la rosa')?",
    answer: "El 4 de septiembre de 1969.",
    tags: ["metro cdmx"],
  },
  {
    id: "metro-cdmx-presidente",
    category: "moderno",
    subcategory: "1968",
    question: "¿Bajo qué presidencia se inauguró el Metro de la CDMX?",
    answer: "Bajo la de Gustavo Díaz Ordaz.",
    tags: ["metro cdmx", "diaz ordaz"],
  },
  {
    id: "tratado-tlatelolco-tema",
    category: "moderno",
    subcategory: "diplomacia",
    question: "¿Qué es el Tratado de Tlatelolco?",
    answer:
      "Acuerdo de no proliferación de armas nucleares en América Latina y el Caribe.",
    tags: ["tlatelolco", "desarme"],
  },
  {
    id: "tratado-tlatelolco-firma",
    category: "moderno",
    subcategory: "diplomacia",
    question: "¿Cuándo se firmó el Tratado de Tlatelolco?",
    answer: "El 14 de febrero de 1967.",
    tags: ["tlatelolco"],
  },
  {
    id: "tratado-tlatelolco-artifices",
    category: "moderno",
    subcategory: "diplomacia",
    question:
      "El Tratado de Tlatelolco, logro de la diplomacia mexicana, se atribuye a:",
    answer:
      "Alfonso García Robles (Premio Nobel de la Paz 1982) y al presidente Gustavo Díaz Ordaz.",
    tags: ["tlatelolco", "garcia robles"],
  },
  {
    id: "issste-creacion",
    category: "moderno",
    subcategory: "1968",
    question:
      "Durante el periodo presidencial de cuál presidente se creó el ISSSTE",
    answer: "Adolfo López Mateos (1959–1960).",
    tags: ["issste", "lopez mateos"],
  },

  // ─── 1970s / 80s ───────────────────────────────────────────────
  {
    id: "lopez-portillo-papa",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question: "¿Qué presidente recibió al Papa Juan Pablo II en su primera visita?",
    answer: "José López Portillo (1979).",
    tags: ["lopez portillo", "juan pablo ii"],
  },
  {
    id: "nacionalizacion-banca",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question: "¿Quién nacionalizó la banca?",
    answer: "José López Portillo (1 de septiembre de 1982).",
    tags: ["lopez portillo", "banca"],
  },
  {
    id: "mundial-1970-1986",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question: "¿En qué años fue México sede de la Copa Mundial de Futbol?",
    answer: "En 1970 y 1986.",
    tags: ["mundial", "futbol"],
  },
  {
    id: "miguel-de-la-madrid",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question:
      "¿Qué presidente estuvo durante el terremoto de 1985 y el Mundial de 1986?",
    answer: "Miguel de la Madrid Hurtado.",
    tags: ["miguel de la madrid", "1985"],
  },
  {
    id: "terremotos-iglesias",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question: "Terremotos que derribaron iglesias",
    answer:
      "El de 1985 (afectó iglesias y construcciones en CDMX y Colima) y el del 19 de septiembre de 2017 (Puebla, Morelos, CDMX).",
    tags: ["sismos", "1985", "2017"],
  },
  {
    id: "angel-caida-1957",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question:
      "¿En qué año fue el temblor por el cual se cayó el Ángel de la Independencia?",
    answer: "En 1957.",
    tags: ["angel", "sismo"],
  },

  // ─── 1990s: NAFTA, EZLN, IFE ───────────────────────────────────
  {
    id: "tlcan-paises",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question:
      "¿Con qué países celebró México el tratado comercial conocido como TLCAN o NAFTA?",
    answer: "Con Estados Unidos y Canadá.",
    tags: ["tlcan", "nafta"],
  },
  {
    id: "tlcan-firma",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question: "¿Cuándo se firmó el Tratado de Libre Comercio (TLC, NAFTA)?",
    answer: "El 17 de diciembre de 1992.",
    tags: ["tlcan", "nafta"],
  },
  {
    id: "tlcan-vigor",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question: "¿Cuándo entró en vigor el Tratado de Libre Comercio (TLC, NAFTA)?",
    answer: "El 1 de enero de 1994.",
    tags: ["tlcan", "nafta"],
  },
  {
    id: "tlcan-presidente-firma",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question: "Nombre del presidente que firmó el Tratado de Libre Comercio NAFTA",
    answer: "Carlos Salinas de Gortari.",
    tags: ["tlcan", "salinas"],
  },
  {
    id: "ezln-1994",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question:
      "¿Cómo se llamó el movimiento civil en Chiapas en 1994 del Subcomandante Marcos?",
    answer:
      "Movimiento Zapatista / Conflicto Chiapaneco / Ejército Zapatista de Liberación Nacional (EZLN).",
    tags: ["ezln", "chiapas", "1994"],
  },
  {
    id: "movimiento-zapatista-inicio",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question: "¿Cuándo se inició el Movimiento Zapatista?",
    answer: "El 1 de enero de 1994.",
    tags: ["ezln"],
  },
  {
    id: "ife-fundacion",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question: "¿Cuándo se fundó el IFE?",
    answer: "El 11 de octubre de 1990.",
    tags: ["ife"],
  },
  {
    id: "ine-creacion",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question: "¿En qué año se creó el INE?",
    answer: "En 2014 (sustituyó al IFE).",
    tags: ["ine"],
  },
  {
    id: "ine-funcion",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question:
      "Organismo encargado de regular la participación de los partidos políticos en las elecciones",
    answer: "El Instituto Nacional Electoral (INE).",
    tags: ["ine"],
  },

  // ─── 21st century ─────────────────────────────────────────────────
  {
    id: "presidentes-recientes",
    category: "moderno",
    subcategory: "siglo-xxi",
    question: "Señale en orden, de más reciente a más antiguo, a los recientes presidentes de México",
    answer:
      "Andrés Manuel López Obrador (AMLO), Enrique Peña Nieto, Felipe Calderón, Vicente Fox.",
    tags: ["presidentes"],
  },
  {
    id: "pri-decadas",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question:
      "Nombre del partido político que gobernó durante siete décadas en el siglo XX",
    answer: "Partido Revolucionario Institucional (PRI).",
    tags: ["pri"],
  },
  {
    id: "seguro-popular",
    category: "moderno",
    subcategory: "siglo-xxi",
    question:
      "¿Cómo se llama el seguro de salud creado en 2004 que ayuda a las personas desempleadas o que trabajan de manera independiente?",
    answer: "Seguro Popular de Salud.",
    tags: ["salud", "seguro popular"],
  },
  {
    id: "apagon-analogico",
    category: "moderno",
    subcategory: "siglo-xxi",
    question: "¿Cuándo fue el apagón analógico en México?",
    answer: "El 31 de diciembre de 2015.",
    tags: ["tecnologia", "tv"],
  },
  {
    id: "estela-luz",
    category: "moderno",
    subcategory: "siglo-xxi",
    question:
      "¿Cuál fue el monumento construido para conmemorar el Bicentenario de la Independencia y el Centenario de la Revolución Mexicana?",
    answer: "La Estela de Luz (2011).",
    tags: ["estela de luz", "bicentenario"],
  },
  {
    id: "torito",
    category: "moderno",
    subcategory: "siglo-xxi",
    question:
      "¿Cómo se llama donde van a parar los fiesteros / conductores alcoholizados en CDMX?",
    answer: "El Torito.",
    tags: ["cdmx", "alcoholimetro"],
  },
  {
    id: "presidentes-totales",
    category: "moderno",
    subcategory: "siglo-xxi",
    question: "¿Cuántos presidentes ha tenido México?",
    answer:
      "Aproximadamente 56 antes de AMLO (la cifra depende de si se cuentan interinos y provisionales).",
    tags: ["presidentes"],
  },
  {
    id: "poblacion-mexico",
    category: "moderno",
    subcategory: "siglo-xxi",
    question: "Población de México (Censo INEGI 2020)",
    answer: "126 014 024 habitantes.",
    tags: ["poblacion"],
  },
  {
    id: "poblacion-votante",
    category: "moderno",
    subcategory: "siglo-xxi",
    question: "Población votante de México (lista nominal)",
    answer:
      "Alrededor de 88.7 millones de personas (cifra de la elección de 2018; las elecciones más recientes superan los 97 millones).",
    tags: ["elecciones", "padron"],
  },
  {
    id: "lugar-economia",
    category: "moderno",
    subcategory: "siglo-xxi",
    question: "¿Qué lugar ocupa México en la economía mundial?",
    answer:
      "Aproximadamente el lugar 16 por tamaño del PIB nominal (la posición varía año con año).",
    tags: ["economia"],
  },
  {
    id: "exportaciones",
    category: "moderno",
    subcategory: "siglo-xxi",
    question: "México es importante exportador de:",
    answer:
      "Aceite crudo de petróleo, autopartes y productos de cobre, entre otros.",
    tags: ["economia", "comercio"],
  },
];
