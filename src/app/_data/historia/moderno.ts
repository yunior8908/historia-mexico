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
    choices: {
      correct:
        "Álvaro Obregón (asesinado por José de León Toral en La Bombilla, CDMX).",
      distractors: [
        "Venustiano Carranza (asesinado en Tlaxcalantongo, Puebla, en 1920).",
        "Francisco I. Madero (asesinado durante la Decena Trágica en 1913).",
        "Plutarco Elías Calles (asesinado por un cristero en Guanajuato).",
      ],
    },
  },
  {
    id: "pnr-fundacion",
    category: "moderno",
    subcategory: "postrevolucion",
    question: "¿Quién fundó el Partido Nacional Revolucionario en 1929?",
    answer: "Plutarco Elías Calles.",
    tags: ["pnr", "pri", "calles"],
    choices: {
      correct: "Plutarco Elías Calles.",
      distractors: [
        "Lázaro Cárdenas del Río.",
        "Emilio Portes Gil.",
        "Pascual Ortiz Rubio.",
      ],
    },
  },
  {
    id: "banxico-creacion",
    category: "moderno",
    subcategory: "postrevolucion",
    question: "¿Quién creó el Banco de México en 1925?",
    answer: "Plutarco Elías Calles.",
    tags: ["banxico", "calles"],
    choices: {
      correct: "Plutarco Elías Calles.",
      distractors: [
        "Álvaro Obregón.",
        "Adolfo de la Huerta.",
        "Manuel Ávila Camacho.",
      ],
    },
  },
  {
    id: "ley-calles",
    category: "moderno",
    subcategory: "postrevolucion",
    question: "¿Qué fue la Ley Calles?",
    answer:
      "Ley expedida para controlar y limitar el culto católico en México (oficialmente Ley de Tolerancia de Cultos), elaborada durante la presidencia de Plutarco Elías Calles.",
    tags: ["ley calles", "calles"],
    choices: {
      correct:
        "Ley expedida para controlar y limitar el culto católico en México (oficialmente Ley de Tolerancia de Cultos), elaborada durante la presidencia de Plutarco Elías Calles.",
      distractors: [
        "Reforma agraria que repartió tierras ejidales a los campesinos durante el gobierno de Plutarco Elías Calles.",
        "Ley que estableció la educación socialista obligatoria en las escuelas públicas de México.",
        "Ley que nacionalizó los bienes del clero y prohibió las órdenes monásticas en el país.",
      ],
    },
  },
  {
    id: "guerra-cristera",
    category: "moderno",
    subcategory: "postrevolucion",
    question: "¿Qué fue la Guerra Cristera?",
    answer:
      "Conflicto armado de 1926 a 1929 entre el gobierno y creyentes laicos católicos que estaban en contra de la Ley Calles.",
    tags: ["cristera"],
    choices: {
      correct:
        "Conflicto armado de 1926 a 1929 entre el gobierno y creyentes laicos católicos que estaban en contra de la Ley Calles.",
      distractors: [
        "Rebelión campesina de 1926 a 1929 encabezada por terratenientes contra el reparto agrario del gobierno.",
        "Conflicto armado de 1923 a 1924 entre facciones militares tras la sucesión presidencial de Álvaro Obregón.",
        "Levantamiento indígena en el sureste contra la expropiación de tierras comunales por la Iglesia.",
      ],
    },
  },
  {
    id: "maximato",
    category: "moderno",
    subcategory: "postrevolucion",
    question: "¿Cuándo fue el periodo conocido como el Maximato?",
    answer: "De 1928 a 1934.",
    tags: ["maximato", "calles"],
    choices: {
      correct: "De 1928 a 1934.",
      distractors: ["De 1924 a 1928.", "De 1934 a 1940.", "De 1920 a 1924."],
    },
  },
  {
    id: "expropiacion-petrolera-fecha",
    category: "moderno",
    subcategory: "cardenismo",
    question: "El 18 de marzo de 1938, el presidente Lázaro Cárdenas:",
    answer: "Nacionalizó / expropió la industria petrolera.",
    tags: ["petroleo", "cardenas"],
    choices: {
      correct: "Nacionalizó / expropió la industria petrolera.",
      distractors: [
        "Nacionalizó / expropió los ferrocarriles del país.",
        "Repartió las tierras ejidales de la región de La Laguna.",
        "Creó la Comisión Federal de Electricidad (CFE).",
      ],
    },
  },
  {
    id: "expropiacion-petrolera-resumen",
    category: "moderno",
    subcategory: "cardenismo",
    question: "Resumen de la acción de Cárdenas el 18 de marzo de 1938",
    answer: "Expropió el petróleo.",
    tags: ["petroleo", "cardenas"],
    choices: {
      correct: "Expropió el petróleo.",
      distractors: [
        "Nacionalizó la banca.",
        "Nacionalizó los ferrocarriles.",
        "Expropió las minas.",
      ],
    },
  },
  {
    id: "ipn-creacion",
    category: "moderno",
    subcategory: "cardenismo",
    question:
      "¿Qué institución educativa creó el presidente Lázaro Cárdenas?",
    answer: "El Instituto Politécnico Nacional (IPN).",
    tags: ["ipn", "cardenas"],
    choices: {
      correct: "El Instituto Politécnico Nacional (IPN).",
      distractors: [
        "La Universidad Nacional Autónoma de México (UNAM).",
        "El Colegio de México (Colmex).",
        "La Universidad Autónoma Metropolitana (UAM).",
      ],
    },
  },
  {
    id: "ipn-fecha",
    category: "moderno",
    subcategory: "cardenismo",
    question: "¿Cuándo se creó el Instituto Politécnico Nacional (IPN)?",
    answer: "El 1 de enero de 1936.",
    tags: ["ipn"],
    choices: {
      correct: "El 1 de enero de 1936.",
      distractors: [
        "El 1 de enero de 1934.",
        "El 20 de noviembre de 1937.",
        "El 15 de septiembre de 1935.",
      ],
    },
  },
  {
    id: "trotsky-asilo",
    category: "moderno",
    subcategory: "cardenismo",
    question:
      "¿Qué político comunista ruso recibió asilo político en México?",
    answer: "León Trotsky (durante el gobierno de Lázaro Cárdenas, 1937).",
    tags: ["trotsky"],
    choices: {
      correct: "León Trotsky (durante el gobierno de Lázaro Cárdenas, 1937).",
      distractors: [
        "Vladimir Lenin (durante el gobierno de Plutarco Elías Calles, 1925).",
        "Iósif Stalin (durante el gobierno de Lázaro Cárdenas, 1937).",
        "Nikita Jruschov (durante el gobierno de Adolfo López Mateos, 1959).",
      ],
    },
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
    choices: {
      correct: "Manuel Ávila Camacho (1942).",
      distractors: [
        "Lázaro Cárdenas (1939).",
        "Miguel Alemán Valdés (1946).",
        "Plutarco Elías Calles (1934).",
      ],
    },
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
    choices: {
      correct: "En 1943, durante la presidencia de Manuel Ávila Camacho.",
      distractors: [
        "En 1854, durante el gobierno de Antonio López de Santa Anna.",
        "En 1921, durante la presidencia de Álvaro Obregón.",
        "En 1968, durante la presidencia de Gustavo Díaz Ordaz.",
      ],
    },
  },
  {
    id: "imss-creacion",
    category: "moderno",
    subcategory: "milagro-mexicano",
    question: "¿Cuándo se creó el IMSS?",
    answer:
      "El 19 de enero de 1943 (Ley del Seguro Social, gobierno de Manuel Ávila Camacho).",
    tags: ["imss"],
    choices: {
      correct:
        "El 19 de enero de 1943 (Ley del Seguro Social, gobierno de Manuel Ávila Camacho).",
      distractors: [
        "El 31 de diciembre de 1959 (Ley del ISSSTE, gobierno de Adolfo López Mateos).",
        "El 1 de enero de 1943 (Ley del Seguro Social, gobierno de Lázaro Cárdenas).",
        "El 19 de enero de 1946 (Ley del Seguro Social, gobierno de Miguel Alemán Valdés).",
      ],
    },
  },

  // ─── Mexican miracle / symbols of progress ───────────────────
  {
    id: "diana-cazadora-inauguracion",
    category: "moderno",
    subcategory: "milagro-mexicano",
    question: "¿Qué presidente inauguró la Diana Cazadora?",
    answer: "Manuel Ávila Camacho (1942, en avenida Reforma).",
    tags: ["diana cazadora", "cdmx"],
    choices: {
      correct: "Manuel Ávila Camacho (1942, en avenida Reforma).",
      distractors: [
        "Miguel Alemán Valdés (1946, en avenida Reforma).",
        "Lázaro Cárdenas (1938, en avenida Reforma).",
        "Adolfo Ruiz Cortines (1952, en avenida Reforma).",
      ],
    },
  },
  {
    id: "diana-cazadora-otro-nombre",
    category: "moderno",
    subcategory: "milagro-mexicano",
    question: "¿Con qué otro nombre se conoce a la Diana Cazadora?",
    answer: "La Flechadora de las Estrellas del Norte.",
    tags: ["diana cazadora", "cdmx"],
    choices: {
      correct: "La Flechadora de las Estrellas del Norte.",
      distractors: [
        "La Cazadora de las Estrellas del Sur.",
        "La Arquera de la Aurora Boreal.",
        "La Flechadora del Cielo Nocturno.",
      ],
    },
  },
  {
    id: "torre-latino",
    category: "moderno",
    subcategory: "milagro-mexicano",
    question:
      "Rascacielos de 43 pisos que ha resistido al menos tres terremotos",
    answer: "La Torre Latinoamericana.",
    tags: ["torre latino", "cdmx"],
    choices: {
      correct: "La Torre Latinoamericana.",
      distractors: [
        "El Edificio del Banco de México.",
        "La Torre Insignia (Tlatelolco).",
        "El World Trade Center de la Ciudad de México.",
      ],
    },
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
    choices: {
      correct: "La Torre Latinoamericana.",
      distractors: [
        "El Monumento a la Revolución.",
        "La Torre Insignia.",
        "El Palacio de Bellas Artes.",
      ],
    },
  },
  {
    id: "portes-gil-unam",
    category: "moderno",
    subcategory: "postrevolucion",
    question: "¿Qué presidente le dio la autonomía a la UNAM?",
    answer: "Emilio Portes Gil (1929).",
    tags: ["unam", "portes gil"],
    choices: {
      correct: "Emilio Portes Gil (1929).",
      distractors: [
        "Pascual Ortiz Rubio (1930).",
        "Plutarco Elías Calles (1925).",
        "Lázaro Cárdenas (1935).",
      ],
    },
  },
  {
    id: "bellas-artes-inauguracion",
    category: "moderno",
    subcategory: "postrevolucion",
    question:
      "¿Qué se inauguró durante el periodo presidencial de Abelardo L. Rodríguez?",
    answer: "El Palacio de Bellas Artes (1934).",
    tags: ["bellas artes"],
    choices: {
      correct: "El Palacio de Bellas Artes (1934).",
      distractors: [
        "El Monumento a la Revolución (1938).",
        "El Palacio de Correos (1907).",
        "El Teatro de la Ciudad (1918).",
      ],
    },
  },

  // ─── 1960s: Tlatelolco, Olympics, World Cup ─────────────────────
  {
    id: "movilizacion-estudiantil",
    category: "moderno",
    subcategory: "1968",
    question: "Fecha de la mayor movilización estudiantil en México",
    answer: "26 de julio de 1968 (Movimiento Estudiantil del 68).",
    tags: ["1968", "movimiento estudiantil"],
    choices: {
      correct: "26 de julio de 1968 (Movimiento Estudiantil del 68).",
      distractors: [
        "2 de octubre de 1968 (Matanza de Tlatelolco).",
        "13 de septiembre de 1968 (Marcha del Silencio).",
        "10 de junio de 1971 (Halconazo del Jueves de Corpus).",
      ],
    },
  },
  {
    id: "matanza-tlatelolco-fecha",
    category: "moderno",
    subcategory: "1968",
    question: "¿Cuándo fue la matanza de Tlatelolco?",
    answer: "El 2 de octubre de 1968.",
    tags: ["tlatelolco", "1968"],
    choices: {
      correct: "El 2 de octubre de 1968.",
      distractors: [
        "El 26 de julio de 1968.",
        "El 10 de junio de 1971.",
        "El 18 de septiembre de 1968.",
      ],
    },
  },
  {
    id: "presidente-tlatelolco",
    category: "moderno",
    subcategory: "1968",
    question: "¿Quién era presidente durante la matanza de Tlatelolco?",
    answer: "Gustavo Díaz Ordaz.",
    tags: ["diaz ordaz", "1968"],
    choices: {
      correct: "Gustavo Díaz Ordaz.",
      distractors: [
        "Adolfo López Mateos.",
        "Luis Echeverría Álvarez.",
        "Gustavo Baz Prada.",
      ],
    },
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
    choices: {
      correct:
        "Ciudad de México; los Juegos se inauguraron el 12 de octubre de 1968 y se realizaron del 12 al 27 de octubre.",
      distractors: [
        "Guadalajara; los Juegos se inauguraron el 12 de octubre de 1968 y se realizaron del 12 al 27 de octubre.",
        "Ciudad de México; los Juegos se inauguraron el 2 de octubre de 1968 y se realizaron del 2 al 24 de octubre.",
        "Ciudad de México; los Juegos se inauguraron el 12 de octubre de 1970 y se realizaron del 12 al 27 de octubre.",
      ],
    },
  },
  {
    id: "metro-cdmx-inauguracion",
    category: "moderno",
    subcategory: "1968",
    question:
      "¿En qué fecha se inauguró el Metro de la CDMX (Línea 1, 'la rosa')?",
    answer: "El 4 de septiembre de 1969.",
    tags: ["metro cdmx"],
    choices: {
      correct: "El 4 de septiembre de 1969.",
      distractors: [
        "El 19 de septiembre de 1969.",
        "El 4 de septiembre de 1967.",
        "El 1 de enero de 1970.",
      ],
    },
  },
  {
    id: "metro-cdmx-presidente",
    category: "moderno",
    subcategory: "1968",
    question: "¿Bajo qué presidencia se inauguró el Metro de la CDMX?",
    answer: "Bajo la de Gustavo Díaz Ordaz.",
    tags: ["metro cdmx", "diaz ordaz"],
    choices: {
      correct: "Bajo la de Gustavo Díaz Ordaz.",
      distractors: [
        "Bajo la de Adolfo López Mateos.",
        "Bajo la de Luis Echeverría Álvarez.",
        "Bajo la de José López Portillo.",
      ],
    },
  },
  {
    id: "tratado-tlatelolco-tema",
    category: "moderno",
    subcategory: "diplomacia",
    question: "¿Qué es el Tratado de Tlatelolco?",
    answer:
      "Acuerdo de no proliferación de armas nucleares en América Latina y el Caribe.",
    tags: ["tlatelolco", "desarme"],
    choices: {
      correct:
        "Acuerdo de no proliferación de armas nucleares en América Latina y el Caribe.",
      distractors: [
        "Acuerdo de libre comercio entre los países de América Latina y el Caribe.",
        "Acuerdo de cooperación militar entre México y Estados Unidos durante la Guerra Fría.",
        "Acuerdo para la protección de los derechos humanos en América Latina y el Caribe.",
      ],
    },
  },
  {
    id: "tratado-tlatelolco-firma",
    category: "moderno",
    subcategory: "diplomacia",
    question: "¿Cuándo se firmó el Tratado de Tlatelolco?",
    answer: "El 14 de febrero de 1967.",
    tags: ["tlatelolco"],
    choices: {
      correct: "El 14 de febrero de 1967.",
      distractors: [
        "El 14 de febrero de 1968.",
        "El 2 de octubre de 1967.",
        "El 12 de octubre de 1968.",
      ],
    },
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
    choices: {
      correct:
        "Alfonso García Robles (Premio Nobel de la Paz 1982) y al presidente Gustavo Díaz Ordaz.",
      distractors: [
        "Alfonso García Robles (Premio Nobel de la Paz 1982) y al presidente Adolfo López Mateos.",
        "Octavio Paz (Premio Nobel de Literatura 1990) y al presidente Gustavo Díaz Ordaz.",
        "Genaro Estrada (autor de la Doctrina Estrada) y al presidente Luis Echeverría Álvarez.",
      ],
    },
  },
  {
    id: "issste-creacion",
    category: "moderno",
    subcategory: "1968",
    question:
      "Durante el periodo presidencial de cuál presidente se creó el ISSSTE",
    answer: "Adolfo López Mateos (1959–1960).",
    tags: ["issste", "lopez mateos"],
    choices: {
      correct: "Adolfo López Mateos (1959–1960).",
      distractors: [
        "Adolfo Ruiz Cortines (1952–1953).",
        "Manuel Ávila Camacho (1943).",
        "Gustavo Díaz Ordaz (1964–1965).",
      ],
    },
  },

  // ─── 1970s / 80s ───────────────────────────────────────────────
  {
    id: "lopez-portillo-papa",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question: "¿Qué presidente recibió al Papa Juan Pablo II en su primera visita?",
    answer: "José López Portillo (1979).",
    tags: ["lopez portillo", "juan pablo ii"],
    choices: {
      correct: "José López Portillo (1979).",
      distractors: [
        "Luis Echeverría Álvarez (1975).",
        "Miguel de la Madrid Hurtado (1983).",
        "Gustavo Díaz Ordaz (1968).",
      ],
    },
  },
  {
    id: "nacionalizacion-banca",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question: "¿Quién nacionalizó la banca?",
    answer: "José López Portillo (1 de septiembre de 1982).",
    tags: ["lopez portillo", "banca"],
    choices: {
      correct: "José López Portillo (1 de septiembre de 1982).",
      distractors: [
        "Luis Echeverría Álvarez (1 de septiembre de 1976).",
        "Miguel de la Madrid Hurtado (1 de septiembre de 1983).",
        "Lázaro Cárdenas (1 de septiembre de 1938).",
      ],
    },
  },
  {
    id: "mundial-1970-1986",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question: "¿En qué años fue México sede de la Copa Mundial de Futbol?",
    answer: "En 1970 y 1986.",
    tags: ["mundial", "futbol"],
    choices: {
      correct: "En 1970 y 1986.",
      distractors: ["En 1968 y 1986.", "En 1970 y 1982.", "En 1974 y 1986."],
    },
  },
  {
    id: "miguel-de-la-madrid",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question:
      "¿Qué presidente estuvo durante el terremoto de 1985 y el Mundial de 1986?",
    answer: "Miguel de la Madrid Hurtado.",
    tags: ["miguel de la madrid", "1985"],
    choices: {
      correct: "Miguel de la Madrid Hurtado.",
      distractors: [
        "José López Portillo.",
        "Carlos Salinas de Gortari.",
        "Luis Echeverría Álvarez.",
      ],
    },
  },
  {
    id: "terremotos-iglesias",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question: "Terremotos que derribaron iglesias",
    answer:
      "El de 1985 (afectó iglesias y construcciones en CDMX y Colima) y el del 19 de septiembre de 2017 (Puebla, Morelos, CDMX).",
    tags: ["sismos", "1985", "2017"],
    choices: {
      correct:
        "El de 1985 (afectó iglesias y construcciones en CDMX y Colima) y el del 19 de septiembre de 2017 (Puebla, Morelos, CDMX).",
      distractors: [
        "El de 1932 (afectó iglesias y construcciones en Jalisco y Colima) y el del 23 de junio de 2020 (Oaxaca, Chiapas).",
        "El de 1957 (afectó iglesias y construcciones en CDMX) y el del 19 de septiembre de 2022 (Michoacán, Colima).",
        "El de 1973 (afectó iglesias y construcciones en Puebla y Veracruz) y el del 16 de febrero de 2018 (Oaxaca, Guerrero).",
      ],
    },
  },
  {
    id: "angel-caida-1957",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question:
      "¿En qué año fue el temblor por el cual se cayó el Ángel de la Independencia?",
    answer: "En 1957.",
    tags: ["angel", "sismo"],
    choices: {
      correct: "En 1957.",
      distractors: ["En 1955.", "En 1968.", "En 1985."],
    },
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
    choices: {
      correct: "Con Estados Unidos y Canadá.",
      distractors: [
        "Con Estados Unidos y Guatemala.",
        "Con Estados Unidos y Brasil.",
        "Con Canadá y la Unión Europea.",
      ],
    },
  },
  {
    id: "tlcan-firma",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question: "¿Cuándo se firmó el Tratado de Libre Comercio (TLC, NAFTA)?",
    answer: "El 17 de diciembre de 1992.",
    tags: ["tlcan", "nafta"],
    choices: {
      correct: "El 17 de diciembre de 1992.",
      distractors: [
        "El 1 de enero de 1994.",
        "El 17 de diciembre de 1993.",
        "El 8 de octubre de 1992.",
      ],
    },
  },
  {
    id: "tlcan-vigor",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question: "¿Cuándo entró en vigor el Tratado de Libre Comercio (TLC, NAFTA)?",
    answer: "El 1 de enero de 1994.",
    tags: ["tlcan", "nafta"],
    choices: {
      correct: "El 1 de enero de 1994.",
      distractors: [
        "El 17 de diciembre de 1992.",
        "El 1 de enero de 1993.",
        "El 1 de julio de 1994.",
      ],
    },
  },
  {
    id: "tlcan-presidente-firma",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question: "Nombre del presidente que firmó el Tratado de Libre Comercio NAFTA",
    answer: "Carlos Salinas de Gortari.",
    tags: ["tlcan", "salinas"],
    choices: {
      correct: "Carlos Salinas de Gortari.",
      distractors: [
        "Ernesto Zedillo Ponce de León.",
        "Miguel de la Madrid Hurtado.",
        "José López Portillo.",
      ],
    },
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
    choices: {
      correct:
        "Movimiento Zapatista / Conflicto Chiapaneco / Ejército Zapatista de Liberación Nacional (EZLN).",
      distractors: [
        "Movimiento Magonista / Conflicto Oaxaqueño / Ejército Popular Revolucionario (EPR).",
        "Movimiento Guerrerense / Conflicto de la Montaña / Ejército Revolucionario del Pueblo Insurgente (ERPI).",
        "Movimiento Tzotzil / Conflicto Chiapaneco / Frente Indígena de Liberación Popular (FILP).",
      ],
    },
  },
  {
    id: "movimiento-zapatista-inicio",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question: "¿Cuándo se inició el Movimiento Zapatista?",
    answer: "El 1 de enero de 1994.",
    tags: ["ezln"],
    choices: {
      correct: "El 1 de enero de 1994.",
      distractors: [
        "El 1 de enero de 1992.",
        "El 17 de noviembre de 1993.",
        "El 2 de octubre de 1994.",
      ],
    },
  },
  {
    id: "ife-fundacion",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question: "¿Cuándo se fundó el IFE?",
    answer: "El 11 de octubre de 1990.",
    tags: ["ife"],
    choices: {
      correct: "El 11 de octubre de 1990.",
      distractors: [
        "El 11 de octubre de 1988.",
        "El 1 de enero de 1991.",
        "El 11 de octubre de 1994.",
      ],
    },
  },
  {
    id: "ine-creacion",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question: "¿En qué año se creó el INE?",
    answer: "En 2014 (sustituyó al IFE).",
    tags: ["ine"],
    choices: {
      correct: "En 2014 (sustituyó al IFE).",
      distractors: [
        "En 2012 (sustituyó al IFE).",
        "En 2018 (sustituyó al IFE).",
        "En 2008 (sustituyó al IFE).",
      ],
    },
  },
  {
    id: "ine-funcion",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question:
      "Organismo encargado de regular la participación de los partidos políticos en las elecciones",
    answer: "El Instituto Nacional Electoral (INE).",
    tags: ["ine"],
    choices: {
      correct: "El Instituto Nacional Electoral (INE).",
      distractors: [
        "El Tribunal Electoral del Poder Judicial de la Federación (TEPJF).",
        "La Fiscalía Especializada en Delitos Electorales (FEPADE).",
        "La Comisión Federal Electoral (CFE).",
      ],
    },
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
    choices: {
      correct:
        "Andrés Manuel López Obrador (AMLO), Enrique Peña Nieto, Felipe Calderón, Vicente Fox.",
      distractors: [
        "Enrique Peña Nieto, Andrés Manuel López Obrador (AMLO), Vicente Fox, Felipe Calderón.",
        "Andrés Manuel López Obrador (AMLO), Felipe Calderón, Enrique Peña Nieto, Vicente Fox.",
        "Vicente Fox, Felipe Calderón, Enrique Peña Nieto, Andrés Manuel López Obrador (AMLO).",
      ],
    },
  },
  {
    id: "pri-decadas",
    category: "moderno",
    subcategory: "siglo-xx-fin",
    question:
      "Nombre del partido político que gobernó durante siete décadas en el siglo XX",
    answer: "Partido Revolucionario Institucional (PRI).",
    tags: ["pri"],
    choices: {
      correct: "Partido Revolucionario Institucional (PRI).",
      distractors: [
        "Partido Acción Nacional (PAN).",
        "Partido de la Revolución Democrática (PRD).",
        "Movimiento Regeneración Nacional (Morena).",
      ],
    },
  },
  {
    id: "seguro-popular",
    category: "moderno",
    subcategory: "siglo-xxi",
    question:
      "¿Cómo se llama el seguro de salud creado en 2004 que ayuda a las personas desempleadas o que trabajan de manera independiente?",
    answer: "Seguro Popular de Salud.",
    tags: ["salud", "seguro popular"],
    choices: {
      correct: "Seguro Popular de Salud.",
      distractors: [
        "Instituto de Salud para el Bienestar (INSABI).",
        "Seguro de Vida para Jefas de Familia.",
        "Programa IMSS-Bienestar.",
      ],
    },
  },
  {
    id: "apagon-analogico",
    category: "moderno",
    subcategory: "siglo-xxi",
    question: "¿Cuándo fue el apagón analógico en México?",
    answer: "El 31 de diciembre de 2015.",
    tags: ["tecnologia", "tv"],
    choices: {
      correct: "El 31 de diciembre de 2015.",
      distractors: [
        "El 31 de diciembre de 2014.",
        "El 21 de diciembre de 2012.",
        "El 31 de diciembre de 2016.",
      ],
    },
  },
  {
    id: "estela-luz",
    category: "moderno",
    subcategory: "siglo-xxi",
    question:
      "¿Cuál fue el monumento construido para conmemorar el Bicentenario de la Independencia y el Centenario de la Revolución Mexicana?",
    answer: "La Estela de Luz (2011).",
    tags: ["estela de luz", "bicentenario"],
    choices: {
      correct: "La Estela de Luz (2011).",
      distractors: [
        "El Monumento a la Revolución (2010).",
        "La Estampa del Bicentenario (2010).",
        "El Arco del Bicentenario (2011).",
      ],
    },
  },
  {
    id: "torito",
    category: "moderno",
    subcategory: "siglo-xxi",
    question:
      "¿Cómo se llama donde van a parar los fiesteros / conductores alcoholizados en CDMX?",
    answer: "El Torito.",
    tags: ["cdmx", "alcoholimetro"],
    choices: {
      correct: "El Torito.",
      distractors: [
        "El Reclusorio Norte.",
        "La Peni de Santa Martha Acatitla.",
        "El Tanque.",
      ],
    },
  },
  {
    id: "presidentes-totales",
    category: "moderno",
    subcategory: "siglo-xxi",
    question: "¿Cuántos presidentes ha tenido México?",
    answer:
      "Aproximadamente 56 antes de AMLO (la cifra depende de si se cuentan interinos y provisionales).",
    tags: ["presidentes"],
    choices: {
      correct:
        "Aproximadamente 56 antes de AMLO (la cifra depende de si se cuentan interinos y provisionales).",
      distractors: [
        "Aproximadamente 65 antes de AMLO (la cifra depende de si se cuentan interinos y provisionales).",
        "Aproximadamente 48 antes de AMLO (la cifra depende de si se cuentan interinos y provisionales).",
        "Exactamente 60 antes de AMLO (contando solo a los presidentes electos).",
      ],
    },
  },
  {
    id: "poblacion-mexico",
    category: "moderno",
    subcategory: "siglo-xxi",
    question: "Población de México (Censo INEGI 2020)",
    answer: "126 014 024 habitantes.",
    tags: ["poblacion"],
    choices: {
      correct: "126 014 024 habitantes.",
      distractors: [
        "112 336 538 habitantes.",
        "119 530 753 habitantes.",
        "131 562 772 habitantes.",
      ],
    },
  },
  {
    id: "poblacion-votante",
    category: "moderno",
    subcategory: "siglo-xxi",
    question: "Población votante de México (lista nominal)",
    answer:
      "Alrededor de 88.7 millones de personas (cifra de la elección de 2018; las elecciones más recientes superan los 97 millones).",
    tags: ["elecciones", "padron"],
    choices: {
      correct:
        "Alrededor de 88.7 millones de personas (cifra de la elección de 2018; las elecciones más recientes superan los 97 millones).",
      distractors: [
        "Alrededor de 79.5 millones de personas (cifra de la elección de 2012; las elecciones más recientes superan los 97 millones).",
        "Alrededor de 93.2 millones de personas (cifra de la elección de 2018; las elecciones más recientes superan los 100 millones).",
        "Alrededor de 71.4 millones de personas (cifra de la elección de 2006; las elecciones más recientes superan los 97 millones).",
      ],
    },
  },
  {
    id: "lugar-economia",
    category: "moderno",
    subcategory: "siglo-xxi",
    question: "¿Qué lugar ocupa México en la economía mundial?",
    answer:
      "Aproximadamente el lugar 16 por tamaño del PIB nominal (la posición varía año con año).",
    tags: ["economia"],
    choices: {
      correct:
        "Aproximadamente el lugar 16 por tamaño del PIB nominal (la posición varía año con año).",
      distractors: [
        "Aproximadamente el lugar 11 por tamaño del PIB nominal (la posición varía año con año).",
        "Aproximadamente el lugar 24 por tamaño del PIB nominal (la posición varía año con año).",
        "Aproximadamente el lugar 9 por tamaño del PIB nominal (la posición varía año con año).",
      ],
    },
  },
  {
    id: "exportaciones",
    category: "moderno",
    subcategory: "siglo-xxi",
    question: "México es importante exportador de:",
    answer:
      "Aceite crudo de petróleo, autopartes y productos de cobre, entre otros.",
    tags: ["economia", "comercio"],
    choices: {
      correct:
        "Aceite crudo de petróleo, autopartes y productos de cobre, entre otros.",
      distractors: [
        "Café, plátano y caña de azúcar, entre otros.",
        "Oro, plata y textiles de algodón, entre otros.",
        "Trigo, maíz y ganado bovino, entre otros.",
      ],
    },
  },
];
