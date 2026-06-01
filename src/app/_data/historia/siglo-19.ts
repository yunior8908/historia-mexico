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
  },
  {
    id: "tratado-guadalupe-hidalgo",
    category: "siglo19",
    subcategory: "guerra-eua",
    question: "Tratado de Guadalupe Hidalgo: ¿de qué se trató?",
    answer:
      "Tratado de 1848 con Estados Unidos en el que México cedió los territorios de California, Nuevo México, Arizona y Nevada (entre otros).",
    tags: ["guadalupe hidalgo", "territorio"],
  },
  {
    id: "tratado-fin-guerra-eua",
    category: "siglo19",
    subcategory: "guerra-eua",
    question:
      "¿Cuál fue el tratado que puso fin a la guerra con Estados Unidos?",
    answer: "El Tratado de Guadalupe Hidalgo (2 de febrero de 1848).",
    tags: ["guadalupe hidalgo"],
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
  },
  {
    id: "ninos-heroes",
    category: "siglo19",
    subcategory: "guerra-eua",
    question:
      "Nombre de los cadetes que enfrentaron a Estados Unidos en la Ciudad de México",
    answer: "Los Niños Héroes.",
    tags: ["ninos heroes"],
  },
  {
    id: "nino-heroe-mas-pequeno",
    category: "siglo19",
    subcategory: "guerra-eua",
    question: "¿Cuál fue el Niño Héroe más pequeño?",
    answer: "Francisco Márquez.",
    tags: ["ninos heroes"],
  },
  {
    id: "juan-escutia",
    category: "siglo19",
    subcategory: "guerra-eua",
    question:
      "¿Cuál es el nombre del Niño Héroe que se lanzó envuelto en la bandera desde el castillo de Chapultepec?",
    answer: "Juan Escutia.",
    tags: ["ninos heroes", "chapultepec"],
  },
  {
    id: "yucatan-independencia",
    category: "siglo19",
    subcategory: "guerra-eua",
    question:
      "Estado que declaró su independencia de México en 1841 y se reincorporó en 1848",
    answer: "Yucatán.",
    tags: ["yucatan"],
  },

  // ─── Reforma era ────────────────────────────────────────────────────
  {
    id: "guerra-reforma",
    category: "siglo19",
    subcategory: "reforma",
    question: "La Guerra de Reforma (Guerra de los 3 años) fue entre:",
    answer: "Liberales y Conservadores; 1857–1860.",
    tags: ["reforma", "liberales", "conservadores"],
  },
  {
    id: "leyes-de-reforma",
    category: "siglo19",
    subcategory: "reforma",
    question:
      "¿Cómo se conocen las leyes impulsadas por Juan Álvarez, Ignacio Comonfort y Benito Juárez para separar a la Iglesia del Estado?",
    answer: "Las Leyes de Reforma.",
    tags: ["reforma", "iglesia-estado"],
  },
  {
    id: "juarez-presidente",
    category: "siglo19",
    subcategory: "reforma",
    question: "¿Quién fue Benito Pablo Juárez García?",
    answer:
      "Presidente de México de 1857 a 1872 (con interrupciones), que promovió las Leyes de Reforma.",
    tags: ["juarez"],
  },
  {
    id: "juarez-benemerito",
    category: "siglo19",
    subcategory: "reforma",
    question: "¿A quién le llaman 'El Benemérito de las Américas'?",
    answer: "A Benito Juárez.",
    tags: ["juarez"],
  },
  {
    id: "juarez-frase-respeto",
    category: "siglo19",
    subcategory: "reforma",
    question:
      "Presidente al que se le atribuye la frase: 'Entre los individuos como entre las naciones, el respeto al derecho ajeno es la paz'",
    answer: "Benito Juárez.",
    tags: ["juarez", "frases"],
  },
  {
    id: "primera-acta-nacimiento",
    category: "siglo19",
    subcategory: "reforma",
    question: "Fecha en que se expidió la primera acta de nacimiento",
    answer: "10 de noviembre de 1859.",
    tags: ["registro civil", "reforma"],
  },
  {
    id: "primer-registro-civil",
    category: "siglo19",
    subcategory: "reforma",
    question: "Fecha en que se estableció el primer registro civil",
    answer: "28 de julio de 1859.",
    tags: ["registro civil", "reforma"],
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
  },
  {
    id: "educacion-gratuita-1867",
    category: "siglo19",
    subcategory: "reforma",
    question:
      "¿En qué año se declaró gratuita y obligatoria la educación elemental, y se fundó la Escuela Nacional Preparatoria?",
    answer: "El 2 de diciembre de 1867, durante el gobierno de Benito Juárez.",
    tags: ["educacion", "1867", "juarez"],
  },

  // ─── Second French Intervention / Maximilian ───────────────
  {
    id: "batalla-puebla-fecha",
    category: "siglo19",
    subcategory: "intervencion-francesa",
    question: "¿Cuándo fue la Batalla de Puebla?",
    answer: "El 5 de mayo de 1862.",
    tags: ["puebla", "5 de mayo"],
  },
  {
    id: "batalla-puebla-que-fue",
    category: "siglo19",
    subcategory: "intervencion-francesa",
    question: "¿Qué fue la Batalla de Puebla?",
    answer:
      "Conflicto armado liderado por el general Ignacio Zaragoza contra la Segunda Intervención Francesa, en el que México resultó vencedor.",
    tags: ["puebla", "5 de mayo", "zaragoza"],
  },
  {
    id: "segundo-imperio",
    category: "siglo19",
    subcategory: "intervencion-francesa",
    question: "¿Quién fue el emperador del Segundo Imperio Mexicano?",
    answer: "Maximiliano de Habsburgo (1864–1867).",
    tags: ["maximiliano", "segundo imperio"],
  },
  {
    id: "fusilados-con-maximiliano",
    category: "siglo19",
    subcategory: "intervencion-francesa",
    question:
      "¿Cuáles fueron los generales apresados y fusilados con Maximiliano de Habsburgo?",
    answer: "Miguel Miramón y Tomás Mejía (Cerro de las Campanas, 1867).",
    tags: ["maximiliano", "miramon", "mejia"],
  },
  {
    id: "maximiliano-reforma",
    category: "siglo19",
    subcategory: "intervencion-francesa",
    question: "¿Quién hizo el trazo de Paseo de la Reforma y cómo se llamó?",
    answer:
      "Maximiliano de Habsburgo. Originalmente se llamó Paseo de la Emperatriz (en honor a Carlota).",
    tags: ["maximiliano", "reforma", "cdmx"],
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
  },
  {
    id: "ciudad-veces-heroica",
    category: "siglo19",
    subcategory: "intervencion-francesa",
    question: "¿Cuál es la ciudad cuatro veces heroica o tres veces triunfante?",
    answer:
      "Veracruz (4 veces heroica: invasiones de 1825, 1838, 1847 y 1914).",
    tags: ["veracruz", "heroica"],
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
  },
  {
    id: "porfiriato-vias-ferreas",
    category: "siglo19",
    subcategory: "porfiriato",
    question: "El Porfiriato se conoce como una época de extensión de:",
    answer: "Las vías férreas (ferrocarril).",
    tags: ["porfiriato", "ferrocarril"],
  },
  {
    id: "porfiriato-telefono",
    category: "siglo19",
    subcategory: "porfiriato",
    question:
      "Contribución tecnológica al país durante el gobierno de Porfirio Díaz",
    answer: "El teléfono.",
    tags: ["porfiriato", "tecnologia"],
  },
  {
    id: "porfiriato-frase-dios-eua",
    category: "siglo19",
    subcategory: "porfiriato",
    question:
      "¿Qué presidente dijo: 'Tan lejos de Dios y tan cerca de Estados Unidos'?",
    answer: "Porfirio Díaz (frase atribuida).",
    tags: ["porfiriato", "frases"],
  },
  {
    id: "ley-de-fuga-porfiriato",
    category: "siglo19",
    subcategory: "porfiriato",
    question:
      "Forma de asesinato común en el Porfiriato (método de fusilamiento usado en la época)",
    answer: "La Ley de Fuga.",
    tags: ["porfiriato", "ley fuga"],
  },
  {
    id: "primer-tramo-ferroviario",
    category: "siglo19",
    subcategory: "porfiriato",
    question:
      "¿En qué año se inauguró el primer tramo ferroviario en México (Veracruz – El Molino)?",
    answer: "1850 (primer tramo Veracruz–El Molino).",
    tags: ["ferrocarril"],
  },
  {
    id: "primera-pelicula-mexico",
    category: "siglo19",
    subcategory: "porfiriato",
    question: "¿Cuál fue la primera película filmada en México?",
    answer:
      "'El Presidente de la República (Porfirio Díaz) paseando a caballo en el Bosque de Chapultepec' (1896).",
    tags: ["cine", "porfiriato"],
  },
  {
    id: "palacio-postal",
    category: "siglo19",
    subcategory: "porfiriato",
    question: "¿Qué inauguró Porfirio Díaz el 17 de febrero de 1907?",
    answer: "El Palacio Postal (Quinta Casa de Correos).",
    tags: ["porfiriato", "palacio postal"],
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
  },
  {
    id: "etapa-prerrevolucionaria",
    category: "siglo19",
    subcategory: "porfiriato",
    question: "Etapa pre-revolucionaria (años del Porfiriato)",
    answer: "De 1876 a 1910 (el Porfiriato).",
    tags: ["porfiriato"],
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
  },
  {
    id: "angel-independencia-inauguracion",
    category: "siglo19",
    subcategory: "porfiriato",
    question: "¿Cuándo se inauguró el Ángel de la Independencia?",
    answer:
      "El 16 de septiembre de 1910, en el marco del Centenario de la Independencia (presidencia de Porfirio Díaz).",
    tags: ["angel independencia", "1910"],
  },
];
