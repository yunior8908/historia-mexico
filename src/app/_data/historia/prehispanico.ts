import type { HistoriaEntry } from "./types";

/**
 * Prehispanic Mexico. Covers the major cultures (Olmec, Maya,
 * Teotihuacan, Toltec, Mexica/Aztec, Zapotec, Purépecha),
 * cosmovision, deities, Nahuatl and Mayan etymologies, periods and
 * social structures.
 */
export const ENTRIES_PREHISPANICO: HistoriaEntry[] = [
  // ─── Periods and general overview ────────────────────────────────────
  {
    id: "etapas-senorios",
    category: "prehispanico",
    subcategory: "etapas",
    question:
      "¿En qué etapa de la cultura prehispánica se desarrollaron los señoríos?",
    answer: "En el periodo Preclásico.",
    tags: ["etapas", "senorios"],
  },
  {
    id: "etapa-reinos",
    category: "prehispanico",
    subcategory: "etapas",
    question:
      "¿En qué etapa prehispánica se empezaron a construir los reinos?",
    answer: "En el periodo Preclásico.",
    tags: ["etapas"],
  },
  {
    id: "etapa-mayor-desarrollo",
    category: "prehispanico",
    subcategory: "etapas",
    question:
      "¿En qué periodo se dio el mayor desarrollo de la cultura mesoamericana?",
    answer: "En el periodo Clásico.",
    tags: ["etapas", "clasico"],
  },
  {
    id: "etapa-mas-desarrollo",
    category: "prehispanico",
    subcategory: "etapas",
    question: "Época prehispánica con más desarrollo cultural",
    answer: "Posclásico.",
    tags: ["etapas"],
  },
  {
    id: "preclasico-cultura-dominante",
    category: "prehispanico",
    subcategory: "etapas",
    question: "En el periodo Preclásico, ¿cuál fue la cultura más dominante?",
    answer: "La cultura Olmeca.",
    tags: ["preclasico", "olmeca"],
  },
  {
    id: "posclasico-cultura",
    category: "prehispanico",
    subcategory: "etapas",
    question:
      "Cultura con mayor desarrollo en el Posclásico (950 d.C. – 1521 d.C.)",
    answer: "La cultura Azteca / Mexica.",
    tags: ["posclasico", "mexica"],
  },
  {
    id: "base-alimenticia",
    category: "prehispanico",
    question: "¿Cuál fue la base alimenticia de los pueblos mesoamericanos?",
    answer: "El maíz.",
    tags: ["maiz", "alimentacion"],
  },
  {
    id: "moneda-prehispanica",
    category: "prehispanico",
    question:
      "¿Con qué comercializaban en la época prehispánica? (moneda de intercambio principal)",
    answer: "Con cacao.",
    tags: ["cacao", "comercio"],
  },
  {
    id: "codices",
    category: "prehispanico",
    question:
      "Manuscrito en papel amate o sobre cuero con representaciones pictóricas que relataba asuntos históricos y religiosos del México antiguo",
    answer: "Códice.",
    tags: ["codices", "escritura"],
  },
  {
    id: "tepexpan",
    category: "prehispanico",
    question: "¿A qué se le conoce como el 'Hombre de Tepexpan'?",
    answer:
      "A un esqueleto precolombino encontrado en Tepexpan, Estado de México; uno de los restos humanos más antiguos hallados en la cuenca de México.",
    tags: ["tepexpan", "arqueologia"],
  },

  // ─── Olmec culture ──────────────────────────────────────────────
  {
    id: "olmeca-cabezas-colosales",
    category: "prehispanico",
    subcategory: "olmeca",
    question: "Las cabezas colosales son creaciones de la cultura...",
    answer: "Olmeca.",
    tags: ["olmeca", "cabezas colosales"],
  },
  {
    id: "olmeca-cultura-preclasica",
    category: "prehispanico",
    subcategory: "olmeca",
    question: "Cultura de las cabezas colosales o cultura del Preclásico medio",
    answer: "Olmeca.",
    tags: ["olmeca", "preclasico"],
  },
  {
    id: "olmeca-jaguar",
    category: "prehispanico",
    subcategory: "olmeca",
    question:
      "¿Cuál es la cultura prehispánica que adoraba a los jaguares?",
    answer: "La cultura Olmeca.",
    tags: ["olmeca", "jaguar"],
  },
  {
    id: "olmeca-mesas-piedra",
    category: "prehispanico",
    subcategory: "olmeca",
    question:
      "Las mesas de piedra para actos ceremoniales (altares) son de la cultura...",
    answer: "Olmeca.",
    tags: ["olmeca", "altares"],
  },
  {
    id: "olmeca-centros",
    category: "prehispanico",
    subcategory: "olmeca",
    question:
      "Los centros ceremoniales olmecas más importantes fueron:",
    answer: "La Venta (Tabasco), Tres Zapotes (Veracruz) y San Lorenzo (Veracruz).",
    tags: ["olmeca", "centros ceremoniales"],
  },
  {
    id: "olmeca-mas-antiguo",
    category: "prehispanico",
    subcategory: "olmeca",
    question:
      "¿Cuál es el centro ceremonial más antiguo de la cultura Olmeca?",
    answer: "San Lorenzo, Veracruz.",
    tags: ["olmeca", "san lorenzo"],
  },
  {
    id: "olmeca-mas-importante",
    category: "prehispanico",
    subcategory: "olmeca",
    question: "¿Cuál es el centro ceremonial más importante de la cultura Olmeca?",
    answer: "La Venta, Tabasco.",
    tags: ["olmeca", "la venta"],
  },
  {
    id: "piramide-mas-antigua",
    category: "prehispanico",
    subcategory: "olmeca",
    question:
      "¿Dónde se encuentra la pirámide mesoamericana más antigua, hecha de lodo y tierra?",
    answer: "En La Venta, Tabasco (cultura Olmeca).",
    tags: ["olmeca", "la venta", "piramide"],
  },

  // ─── Maya culture ───────────────────────────────────────────────
  {
    id: "maya-zona",
    category: "prehispanico",
    subcategory: "maya",
    question:
      "¿Qué civilización se asentó en Chiapas, Yucatán, Veracruz, Guatemala, Belice y Quintana Roo?",
    answer: "Los Mayas.",
    tags: ["maya"],
  },
  {
    id: "maya-caracteristicas",
    category: "prehispanico",
    subcategory: "maya",
    question: "Los mayas se caracterizaban por ser...",
    answer: "Grandes astrónomos y matemáticos.",
    tags: ["maya"],
  },
  {
    id: "maya-cero",
    category: "prehispanico",
    subcategory: "maya",
    question: "¿A quién se le atribuye la creación del cero?",
    answer: "A los Mayas.",
    tags: ["maya", "cero", "matematicas"],
  },
  {
    id: "maya-cuenta-larga",
    category: "prehispanico",
    subcategory: "maya",
    question: "¿Qué era la 'cuenta larga'?",
    answer: "Un calendario de origen Maya.",
    tags: ["maya", "calendario"],
  },
  {
    id: "maya-ixchel",
    category: "prehispanico",
    subcategory: "maya",
    question: "Diosa Maya de la luna",
    answer: "Ixchel.",
    tags: ["maya", "deidades"],
  },
  {
    id: "maya-ciudades",
    category: "prehispanico",
    subcategory: "maya",
    question:
      "Nombres de centros ceremoniales o ciudades de la cultura Maya",
    answer:
      "Palenque, Yaxchilán, Calakmul, Tikal, Toniná, Chichén Itzá, Copán y Uxmal.",
    tags: ["maya", "ciudades"],
  },
  {
    id: "kukulkan-castillo",
    category: "prehispanico",
    subcategory: "maya",
    question: "Otro nombre del templo de Kukulkán en Chichén Itzá",
    answer: "El Castillo.",
    tags: ["maya", "chichen itza"],
  },
  {
    id: "piramide-mas-alta",
    category: "prehispanico",
    subcategory: "maya",
    question: "¿Dónde se encuentra la pirámide más alta de México?",
    answer: "En Toniná, Chiapas (su acrópolis alcanza ~75 m de altura).",
    tags: ["maya", "tonina"],
  },

  // ─── Teotihuacán ────────────────────────────────────────────────
  {
    id: "teotihuacan-significado",
    category: "prehispanico",
    subcategory: "teotihuacan",
    question: "¿Qué significa Teotihuacán?",
    answer: "Ciudad de los Dioses (donde los hombres se convirtieron en dioses).",
    tags: ["teotihuacan", "etimologia"],
  },
  {
    id: "teotihuacan-que-fue",
    category: "prehispanico",
    subcategory: "teotihuacan",
    question: "¿Qué fue Teotihuacán?",
    answer: "Un centro ceremonial y una ciudad prehispánica.",
    tags: ["teotihuacan"],
  },
  {
    id: "piramides-sol-luna",
    category: "prehispanico",
    subcategory: "teotihuacan",
    question: "¿Dónde se encuentran las pirámides del Sol y de la Luna?",
    answer: "En Teotihuacán, Estado de México.",
    tags: ["teotihuacan", "piramides"],
  },
  {
    id: "piramides-sol-luna-fecha",
    category: "prehispanico",
    subcategory: "teotihuacan",
    question: "¿Cuándo se construyeron las pirámides del Sol y de la Luna?",
    answer: "Entre el año 0 y el 200 d.C.",
    tags: ["teotihuacan", "piramides"],
  },
  {
    id: "calzada-muertos",
    category: "prehispanico",
    subcategory: "teotihuacan",
    question: "¿Dónde se ubicaba la Calzada de los Muertos?",
    answer: "En Teotihuacán.",
    tags: ["teotihuacan"],
  },
  {
    id: "deidad-suprema-teotihuacanos",
    category: "prehispanico",
    subcategory: "teotihuacan",
    question: "¿Cuál es la deidad suprema de los Teotihuacanos?",
    answer: "Quetzalcóatl (la Serpiente Emplumada).",
    tags: ["teotihuacan", "deidades", "quetzalcoatl"],
  },
  {
    id: "teotihuacan-grupos",
    category: "prehispanico",
    subcategory: "teotihuacan",
    question:
      "¿Cuáles eran los dos grandes grupos étnicos que habitaban en Teotihuacán?",
    answer: "Nahuas y otomíes.",
    tags: ["teotihuacan"],
  },
  {
    id: "teotihuacan-tikal",
    category: "prehispanico",
    subcategory: "teotihuacan",
    question:
      "¿Dónde se encontraron vestigios de la cultura teotihuacana fuera de México?",
    answer:
      "En Tikal (Guatemala), donde se documenta influencia teotihuacana sobre los mayas del Clásico.",
    tags: ["teotihuacan", "tikal"],
  },

  // ─── Toltecs ───────────────────────────────────────────────────
  {
    id: "toltecas-asentamiento",
    category: "prehispanico",
    subcategory: "tolteca",
    question: "¿Dónde se asentaron los Toltecas?",
    answer: "En Tula de Allende, estado de Hidalgo.",
    tags: ["tolteca", "tula"],
  },
  {
    id: "tula-significado",
    category: "prehispanico",
    subcategory: "tolteca",
    question: "¿Qué significa Tula en náhuatl?",
    answer: "Juncal, o 'junto al tular'.",
    tags: ["tolteca", "etimologia"],
  },
  {
    id: "tolteca-significado",
    category: "prehispanico",
    subcategory: "tolteca",
    question: "¿Qué significa 'tolteca'?",
    answer: "Habitante de Tula.",
    tags: ["tolteca", "etimologia"],
  },
  {
    id: "tzompantli-ciudad",
    category: "prehispanico",
    subcategory: "tolteca",
    question:
      "¿Ciudad donde se usaba el macabro Tzompantli?",
    answer: "Tula.",
    tags: ["tolteca", "tzompantli"],
  },
  {
    id: "tzompantli-que-es",
    category: "prehispanico",
    subcategory: "tolteca",
    question:
      "Nombre del altar prehispánico decorado con cráneos tallados en piedra y estacas para ensartar cabezas de los sacrificados",
    answer: "Tzompantli.",
    tags: ["tzompantli", "sacrificios"],
  },

  // ─── Mexica / Aztec ──────────────────────────────────────────
  {
    id: "aztlan-significado",
    category: "prehispanico",
    subcategory: "mexica",
    question: "¿Qué significa Aztlán?",
    answer: "Garza; 'lugar de las garzas' o 'lugar de la blancura'.",
    tags: ["mexica", "aztlan", "etimologia"],
  },
  {
    id: "aztlan-origen",
    category: "prehispanico",
    subcategory: "mexica",
    question: "Lugar mítico de donde salieron los mexicas (aztecas)",
    answer: "Aztlán.",
    tags: ["mexica", "aztlan"],
  },
  {
    id: "aztlan-migracion",
    category: "prehispanico",
    subcategory: "mexica",
    question:
      "Al lugar mítico de donde partieron los mexicas e iniciaron su migración se le conoce como:",
    answer: "Aztlán.",
    tags: ["mexica", "aztlan"],
  },
  {
    id: "tenochtitlan-fundacion",
    category: "prehispanico",
    subcategory: "mexica",
    question:
      "¿En qué año se fundó Tenochtitlán y cuál fue la cultura que se desarrolló en ella?",
    answer:
      "El 20 de junio de 1325 por los Mexicas.",
    tags: ["mexica", "tenochtitlan"],
  },
  {
    id: "tenochtitlan-que-fue",
    category: "prehispanico",
    subcategory: "mexica",
    question: "¿Qué fue Tenochtitlán?",
    answer: "La capital de los Mexicas.",
    tags: ["mexica", "tenochtitlan"],
  },
  {
    id: "templo-mayor",
    category: "prehispanico",
    subcategory: "mexica",
    question:
      "Edificio o museo que alberga el centro ceremonial de Tenochtitlán",
    answer: "Templo Mayor.",
    tags: ["mexica", "templo mayor"],
  },
  {
    id: "triple-alianza",
    category: "prehispanico",
    subcategory: "mexica",
    question: "¿Quiénes integraron la Triple Alianza?",
    answer: "Tenochtitlán, Texcoco y Tlacopan.",
    tags: ["mexica", "triple alianza"],
  },
  {
    id: "tlatoani",
    category: "prehispanico",
    subcategory: "mexica",
    question: "¿Cuál es otro término para referirse a los emperadores mexicas?",
    answer: "Tlatoani (plural: tlatoque).",
    tags: ["mexica", "tlatoani"],
  },
  {
    id: "altepetl-significado",
    category: "prehispanico",
    subcategory: "mexica",
    question:
      "Significado de la palabra 'altépetl' con la que los tlatoanis denominaban a sus ciudades",
    answer: "Cerro de agua.",
    tags: ["mexica", "etimologia"],
  },
  {
    id: "ultimos-emperadores-mexicas",
    category: "prehispanico",
    subcategory: "mexica",
    question: "¿Cuáles fueron los 3 últimos emperadores mexicas?",
    answer: "Moctezuma II (Xocoyotzin), Cuitláhuac y Cuauhtémoc.",
    tags: ["mexica", "emperadores"],
  },
  {
    id: "cuauhtemoc-significado",
    category: "prehispanico",
    subcategory: "mexica",
    question: "¿Qué significa 'Cuauhtémoc'?",
    answer: "Águila que desciende, o águila que se posa.",
    tags: ["mexica", "etimologia", "cuauhtemoc"],
  },
  {
    id: "cuauhtemoc-ultimo-emperador",
    category: "prehispanico",
    subcategory: "mexica",
    question:
      "Nombre del último emperador mexica, a quien los conquistadores torturaron quemándole los pies",
    answer: "Cuauhtémoc.",
    tags: ["mexica", "cuauhtemoc"],
  },
  {
    id: "cuauhtemoc-quema",
    category: "prehispanico",
    subcategory: "mexica",
    question: "¿Por qué le quemaron los pies a Cuauhtémoc?",
    answer:
      "Para que confesara qué había hecho con el tesoro de Moctezuma.",
    tags: ["mexica", "cuauhtemoc", "conquista"],
  },
  {
    id: "mexicas-actividades",
    category: "prehispanico",
    subcategory: "mexica",
    question: "¿Por qué actividad fueron conocidos los aztecas?",
    answer:
      "Por ser guerreros y por destacarse en agricultura, comercio, culto religioso y sacrificios humanos.",
    tags: ["mexica"],
  },
  {
    id: "mictlan",
    category: "prehispanico",
    subcategory: "mexica",
    question:
      "De acuerdo con la cosmovisión de los mexicas, ¿cómo se llama el lugar de los muertos?",
    answer: "Mictlán.",
    tags: ["mexica", "cosmovision"],
  },
  {
    id: "quetzalcoatl-serpiente",
    category: "prehispanico",
    subcategory: "mexica",
    question: "Deidad del México antiguo conocida como la Serpiente Emplumada",
    answer: "Quetzalcóatl.",
    tags: ["mexica", "deidades", "quetzalcoatl"],
  },
  {
    id: "huitzilopochtli",
    category: "prehispanico",
    subcategory: "mexica",
    question: "¿Quién era el dios de la guerra Mexica?",
    answer: "Huitzilopochtli.",
    tags: ["mexica", "deidades"],
  },
  {
    id: "tonatiuh",
    category: "prehispanico",
    subcategory: "mexica",
    question: "Deidad azteca relacionada con el sol",
    answer: "Tonatiuh.",
    tags: ["mexica", "deidades"],
  },
  {
    id: "tlaloc",
    category: "prehispanico",
    subcategory: "mexica",
    question: "Deidad azteca de la lluvia y del relámpago",
    answer: "Tláloc.",
    tags: ["mexica", "deidades"],
  },
  {
    id: "coatlicue",
    category: "prehispanico",
    subcategory: "mexica",
    question: "Diosa de la fertilidad y de la tierra en la cosmovisión mexica",
    answer: "Coatlicue (madre de Huitzilopochtli, asociada a la tierra y la fertilidad).",
    tags: ["mexica", "deidades"],
  },
  {
    id: "chalchiuhtlicue",
    category: "prehispanico",
    subcategory: "mexica",
    question: "¿Quién fue Chalchiuhtlicue?",
    answer: "La diosa de los lagos y de las corrientes de agua de los Mexicas.",
    tags: ["mexica", "deidades"],
  },
  {
    id: "papalotl",
    category: "prehispanico",
    subcategory: "mexica",
    question: "¿Qué significa 'Papalotl' en náhuatl?",
    answer: "Mariposa.",
    tags: ["mexica", "etimologia"],
  },
  {
    id: "calmecac-telpochcalli",
    category: "prehispanico",
    subcategory: "mexica",
    question:
      "¿Cuáles eran las escuelas a las que asistían los hijos de los nobles mexicas y los jóvenes del pueblo?",
    answer:
      "El Calmécac (para los nobles) y el Telpochcalli (para plebeyos y jóvenes del pueblo).",
    tags: ["mexica", "educacion"],
  },
  {
    id: "ajolote-xolotl",
    category: "prehispanico",
    subcategory: "mexica",
    question: "Anfibio representado junto al dios Xólotl",
    answer: "El ajolote.",
    tags: ["mexica", "deidades", "ajolote"],
  },
  {
    id: "chinampa",
    category: "prehispanico",
    subcategory: "mexica",
    question:
      "Terreno construido sobre las lagunas del Valle de México que sirvió de base al sistema productivo del altiplano central, y que aún puede verse en Xochimilco",
    answer: "Chinampa.",
    tags: ["mexica", "chinampa", "xochimilco"],
  },
  {
    id: "ceramica-anaranjada",
    category: "prehispanico",
    subcategory: "mexica",
    question:
      "¿Cuál fue uno de los productos artesanales más finos del México antiguo?",
    answer: "La cerámica anaranjada delgada.",
    tags: ["arte prehispanico"],
  },

  // ─── Tarascans / Purépecha ─────────────────────────────────────
  {
    id: "purepechas-michoacan",
    category: "prehispanico",
    subcategory: "purepecha",
    question: "Tribu originaria de Michoacán",
    answer: "Los Purépechas (también llamados Tarascos).",
    tags: ["purepecha", "michoacan"],
  },
  {
    id: "tarascos-destacaron",
    category: "prehispanico",
    subcategory: "purepecha",
    question: "Los tarascos se destacaron por ser:",
    answer:
      "Artesanos: destacaron como carpinteros y, sobre todo, en la metalurgia, trabajando fundamentalmente el oro y la plata.",
    tags: ["purepecha", "metalurgia"],
  },

  // ─── Zapotecs ─────────────────────────────────────────────────
  {
    id: "zapoteca-region",
    category: "prehispanico",
    subcategory: "zapoteca",
    question: "¿Dónde se desarrolló la civilización zapoteca?",
    answer:
      "En los valles de Etla, Tlacolula y Zimatlán, en el actual estado de Oaxaca.",
    tags: ["zapoteca", "oaxaca"],
  },
  {
    id: "monte-alban-capital",
    category: "prehispanico",
    subcategory: "zapoteca",
    question: "¿Qué es Monte Albán?",
    answer: "Fue la antigua capital de los Zapotecos.",
    tags: ["zapoteca", "monte alban"],
  },
  {
    id: "monte-alban-ubicacion",
    category: "prehispanico",
    subcategory: "zapoteca",
    question: "Las ruinas de Monte Albán se localizan en...",
    answer: "Oaxaca.",
    tags: ["zapoteca", "monte alban"],
  },
  {
    id: "danzantes-monte-alban",
    category: "prehispanico",
    subcategory: "zapoteca",
    question:
      "¿A qué se debe el nombre del 'Edificio de los Danzantes' en Monte Albán?",
    answer:
      "A que las figuras esculpidas en sus lápidas parecen moverse o contorsionarse.",
    tags: ["zapoteca", "monte alban"],
  },

  // ─── Other cultures / mixed topics ─────────────────────────────
  {
    id: "tarahumaras",
    category: "prehispanico",
    subcategory: "norte",
    question: "Cultura indígena que persiste en el norte del país",
    answer: "Los Tarahumaras (rarámuri).",
    tags: ["tarahumara", "chihuahua"],
  },
  {
    id: "tarahumaras-estado",
    category: "prehispanico",
    subcategory: "norte",
    question: "¿De qué parte del país son los Tarahumaras?",
    answer: "Del estado de Chihuahua.",
    tags: ["tarahumara", "chihuahua"],
  },
  {
    id: "xoloitzcuintle",
    category: "prehispanico",
    question:
      "Perro originario de México o nombre de raza de perro prehispánico de poco pelo",
    answer: "Xoloitzcuintle.",
    tags: ["xoloitzcuintle"],
  },
];
