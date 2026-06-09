import type { HistoriaEntry } from "./types";

/**
 * 19th-century Mexico (after the First Empire and before the
 * Revolution):
 *   - Federal and centralist republics
 *   - War with the United States (1846–1848) and the Treaty of
 *     Guadalupe Hidalgo
 *   - War of the Reform / Reform Laws (Juárez)
 *   - Second French Intervention and Second Empire (Maximilian)
 *   - Porfiriato (1876–1911)
 */
export const ENTRIES_SIGLO19: HistoriaEntry[] = [
  // ─── War with the United States and Texas ──────────────────────────
  {
    id: "perdida-territorio",
    category: "siglo19",
    subcategory: "guerra-eua",
    question:
      "México perdió la mitad de su territorio a mediados del siglo XIX como consecuencia del enfrentamiento con:",
    answer: "Estados Unidos (Guerra México–EUA, 1846–1848).",
    tags: ["guerra eua", "territorio"],
    choices: {
      correct: "Estados Unidos (Guerra México–EUA, 1846–1848).",
      distractors: [
        "Francia (Guerra de los Pasteles, 1838–1839).",
        "España (intento de reconquista, 1829).",
        "Texas (Guerra de Independencia de Texas, 1836).",
      ],
    },
  },
  {
    id: "perdida-territorio-confusion",
    category: "siglo19",
    subcategory: "guerra-eua",
    question:
      "México perdió la mitad de su territorio a mediados del siglo XIX, como consecuencia del enfrentamiento con (versión repetida en apuntes):",
    answer: "Estados Unidos (Guerra México–EUA, 1846–1848).",
    correction: {
      originalAnswer: "Jose de la Cruz Porfirio Diaz Mori",
      note:
        "La respuesta original era falsa: Porfirio Díaz no participó en la pérdida del territorio (gobernó décadas después). La pérdida ocurrió por la Guerra contra Estados Unidos, terminada con el Tratado de Guadalupe Hidalgo en 1848.",
    },
    tags: ["guerra eua", "territorio"],
    choices: {
      correct: "Estados Unidos (Guerra México–EUA, 1846–1848).",
      distractors: [
        "Francia (Segunda Intervención Francesa, 1862–1867).",
        "España (Guerra de Independencia, 1810–1821).",
        "El Reino Unido (Bloqueo de Veracruz, 1838).",
      ],
    },
  },
  {
    id: "tratado-guadalupe-hidalgo",
    category: "siglo19",
    subcategory: "guerra-eua",
    question: "Tratado de Guadalupe Hidalgo: ¿de qué se trató?",
    answer:
      "Tratado de 1848 con Estados Unidos en el que México cedió los territorios de California, Nuevo México, Arizona y Nevada (entre otros).",
    tags: ["guadalupe hidalgo", "territorio"],
    choices: {
      correct:
        "Tratado de 1848 con Estados Unidos en el que México cedió los territorios de California, Nuevo México, Arizona y Nevada (entre otros).",
      distractors: [
        "Tratado de 1853 con Estados Unidos en el que México vendió La Mesilla, en el actual sur de Arizona.",
        "Tratado de 1836 con Texas en el que Santa Anna reconoció la independencia texana (Tratados de Velasco).",
        "Tratado de 1867 con Francia que puso fin a la intervención y al Segundo Imperio.",
      ],
    },
  },
  {
    id: "tratado-fin-guerra-eua",
    category: "siglo19",
    subcategory: "guerra-eua",
    question:
      "¿Cuál fue el tratado que puso fin a la guerra con Estados Unidos?",
    answer: "El Tratado de Guadalupe Hidalgo (2 de febrero de 1848).",
    tags: ["guadalupe hidalgo"],
    choices: {
      correct: "El Tratado de Guadalupe Hidalgo (2 de febrero de 1848).",
      distractors: [
        "El Tratado de La Mesilla (30 de diciembre de 1853).",
        "Los Tratados de Velasco (14 de mayo de 1836).",
        "El Tratado de Córdoba (24 de agosto de 1821).",
      ],
    },
  },
  {
    id: "san-jacinto",
    category: "siglo19",
    subcategory: "guerra-eua",
    question:
      "¿Quién derrotó al Gral. Santa Anna en la Batalla de San Jacinto el 21 de abril de 1836?",
    answer:
      "El Gral. Samuel Houston (Guerra de Texas, antesala de la guerra contra Estados Unidos).",
    tags: ["texas", "santa anna"],
    choices: {
      correct:
        "El Gral. Samuel Houston (Guerra de Texas, antesala de la guerra contra Estados Unidos).",
      distractors: [
        "El Gral. Zachary Taylor (campaña del norte de México).",
        "El Gral. Winfield Scott (toma de la Ciudad de México).",
        "El Gral. Stephen Kearny (campaña de Nuevo México).",
      ],
    },
  },
  {
    id: "san-patricio",
    category: "siglo19",
    subcategory: "guerra-eua",
    question:
      "Batallón extranjero que participó y ayudó a México en la Guerra contra EUA",
    answer:
      "El Batallón de San Patricio (irlandeses y otros europeos al mando de John Riley).",
    tags: ["san patricio"],
    choices: {
      correct:
        "El Batallón de San Patricio (irlandeses y otros europeos al mando de John Riley).",
      distractors: [
        "El Batallón de San Blas (soldados mexicanos al mando de Felipe Santiago Xicoténcatl).",
        "La Legión Extranjera Francesa (voluntarios al mando de Jean Danjou).",
        "El Batallón Activo de Toluca (milicianos mexicanos al mando de Mariano Arista).",
      ],
    },
  },
  {
    id: "ninos-heroes",
    category: "siglo19",
    subcategory: "guerra-eua",
    question:
      "Nombre de los cadetes que enfrentaron a Estados Unidos en la Ciudad de México",
    answer: "Los Niños Héroes.",
    tags: ["ninos heroes"],
    choices: {
      correct: "Los Niños Héroes.",
      distractors: [
        "Los Insurgentes de Dolores.",
        "Los Dragones de México.",
        "Los Cadetes de Tacubaya.",
      ],
    },
  },
  {
    id: "nino-heroe-mas-pequeno",
    category: "siglo19",
    subcategory: "guerra-eua",
    question: "¿Cuál fue el Niño Héroe más pequeño?",
    answer: "Francisco Márquez.",
    tags: ["ninos heroes"],
    choices: {
      correct: "Francisco Márquez.",
      distractors: [
        "Vicente Suárez.",
        "Agustín Melgar.",
        "Fernando Montes de Oca.",
      ],
    },
  },
  {
    id: "juan-escutia",
    category: "siglo19",
    subcategory: "guerra-eua",
    question:
      "¿Cuál es el nombre del Niño Héroe que se lanzó envuelto en la bandera desde el castillo de Chapultepec?",
    answer: "Juan Escutia.",
    tags: ["ninos heroes", "chapultepec"],
    choices: {
      correct: "Juan Escutia.",
      distractors: [
        "Agustín Melgar.",
        "Vicente Suárez.",
        "Juan de la Barrera.",
      ],
    },
  },
  {
    id: "yucatan-independencia",
    category: "siglo19",
    subcategory: "guerra-eua",
    question:
      "Estado que declaró su independencia de México en 1841 y se reincorporó en 1848",
    answer: "Yucatán.",
    tags: ["yucatan"],
    choices: {
      correct: "Yucatán.",
      distractors: ["Tabasco.", "Chiapas.", "Campeche."],
    },
  },

  // ─── Reforma era ────────────────────────────────────────────────────
  {
    id: "guerra-reforma",
    category: "siglo19",
    subcategory: "reforma",
    question: "La Guerra de Reforma (Guerra de los 3 años) fue entre:",
    answer: "Liberales y Conservadores; 1857–1860.",
    tags: ["reforma", "liberales", "conservadores"],
    choices: {
      correct: "Liberales y Conservadores; 1857–1860.",
      distractors: [
        "Federalistas y Centralistas; 1835–1846.",
        "Insurgentes y Realistas; 1810–1821.",
        "Republicanos e Imperialistas; 1864–1867.",
      ],
    },
  },
  {
    id: "leyes-de-reforma",
    category: "siglo19",
    subcategory: "reforma",
    question:
      "¿Cómo se conocen las leyes impulsadas por Juan Álvarez, Ignacio Comonfort y Benito Juárez para separar a la Iglesia del Estado?",
    answer: "Las Leyes de Reforma.",
    tags: ["reforma", "iglesia-estado"],
    choices: {
      correct: "Las Leyes de Reforma.",
      distractors: [
        "Las Leyes de Indias.",
        "Las Siete Leyes Constitucionales.",
        "Las Bases Orgánicas.",
      ],
    },
  },
  {
    id: "juarez-presidente",
    category: "siglo19",
    subcategory: "reforma",
    question: "¿Quién fue Benito Pablo Juárez García?",
    answer:
      "Presidente de México de 1857 a 1872 (con interrupciones), que promovió las Leyes de Reforma.",
    tags: ["juarez"],
    choices: {
      correct:
        "Presidente de México de 1857 a 1872 (con interrupciones), que promovió las Leyes de Reforma.",
      distractors: [
        "Presidente de México de 1872 a 1876, que dio su nombre actual al Paseo de la Reforma.",
        "Presidente de México de 1833 a 1855 (con interrupciones), durante la pérdida de Texas.",
        "Presidente de México de 1876 a 1911 (con interrupciones), durante la etapa del Porfiriato.",
      ],
    },
  },
  {
    id: "juarez-benemerito",
    category: "siglo19",
    subcategory: "reforma",
    question: "¿A quién le llaman 'El Benemérito de las Américas'?",
    answer: "A Benito Juárez.",
    tags: ["juarez"],
    choices: {
      correct: "A Benito Juárez.",
      distractors: [
        "A Ignacio Zaragoza.",
        "A Sebastián Lerdo de Tejada.",
        "A Melchor Ocampo.",
      ],
    },
  },
  {
    id: "juarez-frase-respeto",
    category: "siglo19",
    subcategory: "reforma",
    question:
      "Presidente al que se le atribuye la frase: 'Entre los individuos como entre las naciones, el respeto al derecho ajeno es la paz'",
    answer: "Benito Juárez.",
    tags: ["juarez", "frases"],
    choices: {
      correct: "Benito Juárez.",
      distractors: [
        "Ignacio Comonfort.",
        "Sebastián Lerdo de Tejada.",
        "Melchor Ocampo.",
      ],
    },
  },
  {
    id: "primera-acta-nacimiento",
    category: "siglo19",
    subcategory: "reforma",
    question: "Fecha en que se expidió la primera acta de nacimiento",
    answer: "10 de noviembre de 1859.",
    tags: ["registro civil", "reforma"],
    choices: {
      correct: "10 de noviembre de 1859.",
      distractors: [
        "25 de enero de 1857.",
        "12 de julio de 1859.",
        "4 de diciembre de 1860.",
      ],
    },
  },
  {
    id: "primer-registro-civil",
    category: "siglo19",
    subcategory: "reforma",
    question: "Fecha en que se estableció el primer registro civil",
    answer: "28 de julio de 1859.",
    tags: ["registro civil", "reforma"],
    choices: {
      correct: "28 de julio de 1859.",
      distractors: [
        "23 de junio de 1859.",
        "1 de octubre de 1858.",
        "14 de febrero de 1861.",
      ],
    },
  },
  {
    id: "lerdo-de-tejada",
    category: "siglo19",
    subcategory: "reforma",
    question: "¿Quién asumió la presidencia después de la muerte de Benito Juárez?",
    answer: "Sebastián Lerdo de Tejada (1872–1876).",
    correction: {
      originalAnswer: "Sebastián Lerdo de Tejeda",
      note: "El apellido correcto es 'Tejada', no 'Tejeda'.",
    },
    tags: ["lerdo de tejada"],
    choices: {
      correct: "Sebastián Lerdo de Tejada (1872–1876).",
      distractors: [
        "Manuel González (1880–1884).",
        "José María Iglesias (1876–1877).",
        "Ignacio Comonfort (1855–1858).",
      ],
    },
  },
  {
    id: "educacion-gratuita-1867",
    category: "siglo19",
    subcategory: "reforma",
    question:
      "¿En qué año se declaró gratuita y obligatoria la educación elemental, y se fundó la Escuela Nacional Preparatoria?",
    answer: "El 2 de diciembre de 1867, durante el gobierno de Benito Juárez.",
    tags: ["educacion", "1867", "juarez"],
    choices: {
      correct: "El 2 de diciembre de 1867, durante el gobierno de Benito Juárez.",
      distractors: [
        "El 15 de abril de 1861, durante el gobierno de Benito Juárez.",
        "El 10 de junio de 1869, durante el gobierno de Sebastián Lerdo de Tejada.",
        "El 5 de febrero de 1857, durante el Congreso Constituyente.",
      ],
    },
  },

  // ─── Second French Intervention / Maximilian ───────────────
  {
    id: "batalla-puebla-fecha",
    category: "siglo19",
    subcategory: "intervencion-francesa",
    question: "¿Cuándo fue la Batalla de Puebla?",
    answer: "El 5 de mayo de 1862.",
    tags: ["puebla", "5 de mayo"],
    choices: {
      correct: "El 5 de mayo de 1862.",
      distractors: [
        "El 5 de mayo de 1863.",
        "El 2 de abril de 1867.",
        "El 18 de mayo de 1867.",
      ],
    },
  },
  {
    id: "batalla-puebla-que-fue",
    category: "siglo19",
    subcategory: "intervencion-francesa",
    question: "¿Qué fue la Batalla de Puebla?",
    answer:
      "Conflicto armado liderado por el general Ignacio Zaragoza contra la Segunda Intervención Francesa, en el que México resultó vencedor.",
    tags: ["puebla", "5 de mayo", "zaragoza"],
    choices: {
      correct:
        "Conflicto armado liderado por el general Ignacio Zaragoza contra la Segunda Intervención Francesa, en el que México resultó vencedor.",
      distractors: [
        "Conflicto armado liderado por el general Ignacio Zaragoza contra el ejército estadounidense, en el que México resultó derrotado.",
        "Conflicto armado liderado por el general Mariano Escobedo contra el Segundo Imperio, en el que México resultó vencedor.",
        "Conflicto armado liderado por el general Porfirio Díaz contra los conservadores, en el que México resultó vencedor.",
      ],
    },
  },
  {
    id: "segundo-imperio",
    category: "siglo19",
    subcategory: "intervencion-francesa",
    question: "¿Quién fue el emperador del Segundo Imperio Mexicano?",
    answer: "Maximiliano de Habsburgo (1864–1867).",
    tags: ["maximiliano", "segundo imperio"],
    choices: {
      correct: "Maximiliano de Habsburgo (1864–1867).",
      distractors: [
        "Agustín de Iturbide (1822–1823).",
        "Fernando VII de Borbón (1864–1867).",
        "Carlos de Habsburgo (1863–1867).",
      ],
    },
  },
  {
    id: "fusilados-con-maximiliano",
    category: "siglo19",
    subcategory: "intervencion-francesa",
    question:
      "¿Cuáles fueron los generales apresados y fusilados con Maximiliano de Habsburgo?",
    answer: "Miguel Miramón y Tomás Mejía (Cerro de las Campanas, 1867).",
    tags: ["maximiliano", "miramon", "mejia"],
    choices: {
      correct: "Miguel Miramón y Tomás Mejía (Cerro de las Campanas, 1867).",
      distractors: [
        "Leonardo Márquez y Tomás Mejía (Cerro de las Campanas, 1867).",
        "Miguel Miramón y Manuel Robles Pezuela (Cerro de las Campanas, 1867).",
        "Félix Zuloaga y Tomás Mejía (Cerro de las Campanas, 1867).",
      ],
    },
  },
  {
    id: "maximiliano-reforma",
    category: "siglo19",
    subcategory: "intervencion-francesa",
    question: "¿Quién hizo el trazo de Paseo de la Reforma y cómo se llamó?",
    answer:
      "Maximiliano de Habsburgo. Originalmente se llamó Paseo de la Emperatriz (en honor a Carlota).",
    tags: ["maximiliano", "reforma", "cdmx"],
    choices: {
      correct:
        "Maximiliano de Habsburgo. Originalmente se llamó Paseo de la Emperatriz (en honor a Carlota).",
      distractors: [
        "Sebastián Lerdo de Tejada. Originalmente se llamó Paseo de la República.",
        "Porfirio Díaz. Originalmente se llamó Paseo del Centenario.",
        "Benito Juárez. Originalmente se llamó Paseo de las Leyes de Reforma.",
      ],
    },
  },
  {
    id: "av-reforma-nombre",
    category: "siglo19",
    subcategory: "intervencion-francesa",
    question:
      "¿Cuál es la avenida más importante de la CDMX y qué presidente le dio su nombre?",
    answer:
      "Avenida Reforma; Sebastián Lerdo de Tejada le dio el nombre actual.",
    tags: ["reforma", "cdmx"],
    choices: {
      correct:
        "Avenida Reforma; Sebastián Lerdo de Tejada le dio el nombre actual.",
      distractors: [
        "Avenida Insurgentes; Porfirio Díaz le dio el nombre actual.",
        "Avenida Juárez; Benito Juárez le dio el nombre actual.",
        "Avenida Reforma; Maximiliano de Habsburgo le dio el nombre actual.",
      ],
    },
  },
  {
    id: "ciudad-veces-heroica",
    category: "siglo19",
    subcategory: "intervencion-francesa",
    question: "¿Cuál es la ciudad cuatro veces heroica o tres veces triunfante?",
    answer:
      "Veracruz (4 veces heroica: invasiones de 1825, 1838, 1847 y 1914).",
    tags: ["veracruz", "heroica"],
    choices: {
      correct:
        "Veracruz (4 veces heroica: invasiones de 1825, 1838, 1847 y 1914).",
      distractors: [
        "Puebla (4 veces heroica: batallas de 1847, 1862, 1863 y 1867).",
        "Querétaro (4 veces heroica: sitios de 1810, 1848, 1867 y 1916).",
        "Veracruz (3 veces heroica: invasiones de 1838, 1847 y 1862).",
      ],
    },
  },

  // ─── Porfiriato ─────────────────────────────────────────────────
  {
    id: "porfirio-diaz-quien",
    category: "siglo19",
    subcategory: "porfiriato",
    question: "¿Quién fue Porfirio Díaz?",
    answer:
      "Militar mexicano que se destacó en la Batalla del 5 de mayo de 1862 en Puebla contra los franceses, y posteriormente presidente de México por más de 30 años.",
    tags: ["porfiriato", "porfirio diaz"],
    choices: {
      correct:
        "Militar mexicano que se destacó en la Batalla del 5 de mayo de 1862 en Puebla contra los franceses, y posteriormente presidente de México por más de 30 años.",
      distractors: [
        "Militar mexicano que se destacó en la Batalla de San Jacinto de 1836 contra los texanos, y posteriormente presidente de México por más de 30 años.",
        "Militar mexicano que se destacó en el Sitio de Querétaro de 1867 contra el imperio, y posteriormente presidente de México por más de 30 años.",
        "Abogado oaxaqueño que promovió las Leyes de Reforma, y posteriormente presidente de México por más de 30 años.",
      ],
    },
  },
  {
    id: "porfiriato-vias-ferreas",
    category: "siglo19",
    subcategory: "porfiriato",
    question: "El Porfiriato se conoce como una época de extensión de:",
    answer: "Las vías férreas (ferrocarril).",
    tags: ["porfiriato", "ferrocarril"],
    choices: {
      correct: "Las vías férreas (ferrocarril).",
      distractors: [
        "Las carreteras pavimentadas.",
        "Los canales de navegación.",
        "Los tranvías de tracción animal.",
      ],
    },
  },
  {
    id: "porfiriato-telefono",
    category: "siglo19",
    subcategory: "porfiriato",
    question:
      "Contribución tecnológica al país durante el gobierno de Porfirio Díaz",
    answer: "El teléfono.",
    tags: ["porfiriato", "tecnologia"],
    choices: {
      correct: "El teléfono.",
      distractors: [
        "La radiodifusión.",
        "El alumbrado de gas.",
        "El telégrafo óptico.",
      ],
    },
  },
  {
    id: "porfiriato-frase-dios-eua",
    category: "siglo19",
    subcategory: "porfiriato",
    question:
      "¿Qué presidente dijo: 'Tan lejos de Dios y tan cerca de Estados Unidos'?",
    answer: "Porfirio Díaz (frase atribuida).",
    tags: ["porfiriato", "frases"],
    choices: {
      correct: "Porfirio Díaz (frase atribuida).",
      distractors: [
        "Benito Juárez (frase atribuida).",
        "Sebastián Lerdo de Tejada (frase atribuida).",
        "Antonio López de Santa Anna (frase atribuida).",
      ],
    },
  },
  {
    id: "ley-de-fuga-porfiriato",
    category: "siglo19",
    subcategory: "porfiriato",
    question:
      "Forma de asesinato común en el Porfiriato (método de fusilamiento usado en la época)",
    answer: "La Ley de Fuga.",
    tags: ["porfiriato", "ley fuga"],
    choices: {
      correct: "La Ley de Fuga.",
      distractors: [
        "La Ley del Talión.",
        "La Ley Lerdo.",
        "La Ley Juárez.",
      ],
    },
  },
  {
    id: "primer-tramo-ferroviario",
    category: "siglo19",
    subcategory: "porfiriato",
    question:
      "¿En qué año se inauguró el primer tramo ferroviario en México (Veracruz – El Molino)?",
    answer: "1850 (primer tramo Veracruz–El Molino).",
    tags: ["ferrocarril"],
    choices: {
      correct: "1850 (primer tramo Veracruz–El Molino).",
      distractors: [
        "1837 (primer tramo Veracruz–El Molino).",
        "1857 (primer tramo Veracruz–El Molino).",
        "1873 (primer tramo Veracruz–El Molino).",
      ],
    },
  },
  {
    id: "primera-pelicula-mexico",
    category: "siglo19",
    subcategory: "porfiriato",
    question: "¿Cuál fue la primera película filmada en México?",
    answer:
      "'El Presidente de la República (Porfirio Díaz) paseando a caballo en el Bosque de Chapultepec' (1896).",
    tags: ["cine", "porfiriato"],
    choices: {
      correct:
        "'El Presidente de la República (Porfirio Díaz) paseando a caballo en el Bosque de Chapultepec' (1896).",
      distractors: [
        "'Don Juan Tenorio' (1898).",
        "'El grito de Dolores' (1907).",
        "'Riña de hombres en el Zócalo' (1900).",
      ],
    },
  },
  {
    id: "palacio-postal",
    category: "siglo19",
    subcategory: "porfiriato",
    question: "¿Qué inauguró Porfirio Díaz el 17 de febrero de 1907?",
    answer: "El Palacio Postal (Quinta Casa de Correos).",
    tags: ["porfiriato", "palacio postal"],
    choices: {
      correct: "El Palacio Postal (Quinta Casa de Correos).",
      distractors: [
        "El Palacio de Bellas Artes.",
        "El Palacio de Hierro.",
        "El Palacio de Minería.",
      ],
    },
  },
  {
    id: "plan-la-noria",
    category: "siglo19",
    subcategory: "porfiriato",
    relatedPlanSlug: "noria",
    question:
      "¿Cómo se llamó el plan que promovió Porfirio Díaz para evitar la reelección de Benito Juárez?",
    answer: "Plan de La Noria (o Revolución de La Noria, 1871).",
    tags: ["la noria", "porfiriato"],
    choices: {
      correct: "Plan de La Noria (o Revolución de La Noria, 1871).",
      distractors: [
        "Plan de Tuxtepec (o Revolución de Tuxtepec, 1876).",
        "Plan de Ayutla (o Revolución de Ayutla, 1854).",
        "Plan de San Luis (o Revolución Maderista, 1910).",
      ],
    },
  },
  {
    id: "plan-tuxtepec",
    category: "siglo19",
    subcategory: "porfiriato",
    relatedPlanSlug: "tuxtepec",
    question: "¿De qué se trató el Plan de Tuxtepec?",
    answer:
      "Plan elaborado por Porfirio Díaz para destituir al gobierno de Sebastián Lerdo de Tejada y evitar su reelección (1876).",
    tags: ["tuxtepec", "porfiriato"],
    choices: {
      correct:
        "Plan elaborado por Porfirio Díaz para destituir al gobierno de Sebastián Lerdo de Tejada y evitar su reelección (1876).",
      distractors: [
        "Plan elaborado por Porfirio Díaz para destituir al gobierno de Benito Juárez y evitar su reelección (1871).",
        "Plan elaborado por Juan Álvarez para destituir el gobierno de Antonio López de Santa Anna (1854).",
        "Plan elaborado por Francisco I. Madero para destituir el gobierno de Porfirio Díaz (1910).",
      ],
    },
  },
  {
    id: "etapa-prerrevolucionaria",
    category: "siglo19",
    subcategory: "porfiriato",
    question: "Etapa pre-revolucionaria (años del Porfiriato)",
    answer: "De 1876 a 1910 (el Porfiriato).",
    tags: ["porfiriato"],
    choices: {
      correct: "De 1876 a 1910 (el Porfiriato).",
      distractors: [
        "De 1858 a 1872 (la era de Juárez).",
        "De 1864 a 1867 (el Segundo Imperio).",
        "De 1810 a 1821 (la guerra de Independencia).",
      ],
    },
  },
  {
    id: "huelga-cananea",
    category: "siglo19",
    subcategory: "porfiriato",
    question:
      "Acontecimiento relacionado con la industria minera y la Revolución",
    answer:
      "La Huelga de Cananea (1906, Sonora) — antecedente directo de la Revolución Mexicana.",
    tags: ["cananea", "porfiriato"],
    choices: {
      correct:
        "La Huelga de Cananea (1906, Sonora) — antecedente directo de la Revolución Mexicana.",
      distractors: [
        "La Huelga de Río Blanco (1907, Veracruz) — antecedente directo de la Revolución Mexicana.",
        "La Huelga de Pinos Altos (1883, Chihuahua) — antecedente directo de la Revolución Mexicana.",
        "La Huelga de Real del Monte (1872, Hidalgo) — antecedente directo de la Revolución Mexicana.",
      ],
    },
  },
  {
    id: "angel-independencia-inauguracion",
    category: "siglo19",
    subcategory: "porfiriato",
    question: "¿Cuándo se inauguró el Ángel de la Independencia?",
    answer:
      "El 16 de septiembre de 1910, en el marco del Centenario de la Independencia (presidencia de Porfirio Díaz).",
    tags: ["angel independencia", "1910"],
    choices: {
      correct:
        "El 16 de septiembre de 1910, en el marco del Centenario de la Independencia (presidencia de Porfirio Díaz).",
      distractors: [
        "El 16 de septiembre de 1921, en el marco del Centenario de la Consumación de la Independencia.",
        "El 5 de mayo de 1910, en el marco del aniversario de la Batalla de Puebla (presidencia de Porfirio Díaz).",
        "El 16 de septiembre de 1900, en el marco de las fiestas patrias (presidencia de Porfirio Díaz).",
      ],
    },
  },
];
