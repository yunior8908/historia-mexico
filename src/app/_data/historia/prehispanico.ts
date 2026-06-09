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
    choices: {
      correct: "En el periodo Preclásico.",
      distractors: [
        "En el periodo Clásico.",
        "En el periodo Posclásico.",
        "En el periodo Epiclásico.",
      ],
    },
  },
  {
    id: "etapa-reinos",
    category: "prehispanico",
    subcategory: "etapas",
    question:
      "¿En qué etapa prehispánica se empezaron a construir los reinos?",
    answer: "En el periodo Preclásico.",
    tags: ["etapas"],
    choices: {
      correct: "En el periodo Preclásico.",
      distractors: [
        "En el periodo Clásico.",
        "En el periodo Posclásico.",
        "En el periodo Epiclásico.",
      ],
    },
  },
  {
    id: "etapa-mayor-desarrollo",
    category: "prehispanico",
    subcategory: "etapas",
    question:
      "¿En qué periodo se dio el mayor desarrollo de la cultura mesoamericana?",
    answer: "En el periodo Clásico.",
    tags: ["etapas", "clasico"],
    choices: {
      correct: "En el periodo Clásico.",
      distractors: [
        "En el periodo Preclásico.",
        "En el periodo Posclásico.",
        "En el periodo Epiclásico.",
      ],
    },
  },
  {
    id: "etapa-mas-desarrollo",
    category: "prehispanico",
    subcategory: "etapas",
    question: "Época prehispánica con más desarrollo cultural",
    answer: "Posclásico.",
    tags: ["etapas"],
    choices: {
      correct: "Posclásico.",
      distractors: ["Preclásico.", "Clásico.", "Epiclásico."],
    },
  },
  {
    id: "preclasico-cultura-dominante",
    category: "prehispanico",
    subcategory: "etapas",
    question: "En el periodo Preclásico, ¿cuál fue la cultura más dominante?",
    answer: "La cultura Olmeca.",
    tags: ["preclasico", "olmeca"],
    choices: {
      correct: "La cultura Olmeca.",
      distractors: [
        "La cultura Maya.",
        "La cultura Mexica.",
        "La cultura Tolteca.",
      ],
    },
  },
  {
    id: "posclasico-cultura",
    category: "prehispanico",
    subcategory: "etapas",
    question:
      "Cultura con mayor desarrollo en el Posclásico (950 d.C. – 1521 d.C.)",
    answer: "La cultura Azteca / Mexica.",
    tags: ["posclasico", "mexica"],
    choices: {
      correct: "La cultura Azteca / Mexica.",
      distractors: [
        "La cultura Olmeca.",
        "La cultura Teotihuacana.",
        "La cultura Zapoteca.",
      ],
    },
  },
  {
    id: "base-alimenticia",
    category: "prehispanico",
    question: "¿Cuál fue la base alimenticia de los pueblos mesoamericanos?",
    answer: "El maíz.",
    tags: ["maiz", "alimentacion"],
    choices: {
      correct: "El maíz.",
      distractors: ["El trigo.", "La papa.", "El arroz."],
    },
  },
  {
    id: "moneda-prehispanica",
    category: "prehispanico",
    question:
      "¿Con qué comercializaban en la época prehispánica? (moneda de intercambio principal)",
    answer: "Con cacao.",
    tags: ["cacao", "comercio"],
    choices: {
      correct: "Con cacao.",
      distractors: ["Con oro.", "Con sal.", "Con jade."],
    },
  },
  {
    id: "codices",
    category: "prehispanico",
    question:
      "Manuscrito en papel amate o sobre cuero con representaciones pictóricas que relataba asuntos históricos y religiosos del México antiguo",
    answer: "Códice.",
    tags: ["codices", "escritura"],
    choices: {
      correct: "Códice.",
      distractors: ["Estela.", "Glifo.", "Petroglifo."],
    },
  },
  {
    id: "tepexpan",
    category: "prehispanico",
    question: "¿A qué se le conoce como el 'Hombre de Tepexpan'?",
    answer:
      "A un esqueleto precolombino encontrado en Tepexpan, Estado de México; uno de los restos humanos más antiguos hallados en la cuenca de México.",
    tags: ["tepexpan", "arqueologia"],
    choices: {
      correct:
        "A un esqueleto precolombino encontrado en Tepexpan, Estado de México; uno de los restos humanos más antiguos hallados en la cuenca de México.",
      distractors: [
        "A una pirámide ceremonial descubierta en Tepexpan, Estado de México; uno de los monumentos más antiguos de la cuenca de México.",
        "A un códice prehispánico hallado en Tepexpan, Estado de México; uno de los manuscritos más antiguos de la cuenca de México.",
        "A un mural teotihuacano encontrado en Tepexpan, Estado de México; una de las pinturas más antiguas de la cuenca de México.",
      ],
    },
  },

  // ─── Olmec culture ──────────────────────────────────────────────
  {
    id: "olmeca-cabezas-colosales",
    category: "prehispanico",
    subcategory: "olmeca",
    question: "Las cabezas colosales son creaciones de la cultura...",
    answer: "Olmeca.",
    tags: ["olmeca", "cabezas colosales"],
    choices: {
      correct: "Olmeca.",
      distractors: ["Maya.", "Zapoteca.", "Tolteca."],
    },
  },
  {
    id: "olmeca-cultura-preclasica",
    category: "prehispanico",
    subcategory: "olmeca",
    question: "Cultura de las cabezas colosales o cultura del Preclásico medio",
    answer: "Olmeca.",
    tags: ["olmeca", "preclasico"],
    choices: {
      correct: "Olmeca.",
      distractors: ["Teotihuacana.", "Mexica.", "Zapoteca."],
    },
  },
  {
    id: "olmeca-jaguar",
    category: "prehispanico",
    subcategory: "olmeca",
    question:
      "¿Cuál es la cultura prehispánica que adoraba a los jaguares?",
    answer: "La cultura Olmeca.",
    tags: ["olmeca", "jaguar"],
    choices: {
      correct: "La cultura Olmeca.",
      distractors: [
        "La cultura Maya.",
        "La cultura Tolteca.",
        "La cultura Mexica.",
      ],
    },
  },
  {
    id: "olmeca-mesas-piedra",
    category: "prehispanico",
    subcategory: "olmeca",
    question:
      "Las mesas de piedra para actos ceremoniales (altares) son de la cultura...",
    answer: "Olmeca.",
    tags: ["olmeca", "altares"],
    choices: {
      correct: "Olmeca.",
      distractors: ["Maya.", "Mexica.", "Purépecha."],
    },
  },
  {
    id: "olmeca-centros",
    category: "prehispanico",
    subcategory: "olmeca",
    question:
      "Los centros ceremoniales olmecas más importantes fueron:",
    answer: "La Venta (Tabasco), Tres Zapotes (Veracruz) y San Lorenzo (Veracruz).",
    tags: ["olmeca", "centros ceremoniales"],
    choices: {
      correct:
        "La Venta (Tabasco), Tres Zapotes (Veracruz) y San Lorenzo (Veracruz).",
      distractors: [
        "Palenque (Chiapas), Bonampak (Chiapas) y Yaxchilán (Chiapas).",
        "Monte Albán (Oaxaca), Mitla (Oaxaca) y Yagul (Oaxaca).",
        "Tula (Hidalgo), Teotihuacán (México) y Cholula (Puebla).",
      ],
    },
  },
  {
    id: "olmeca-mas-antiguo",
    category: "prehispanico",
    subcategory: "olmeca",
    question:
      "¿Cuál es el centro ceremonial más antiguo de la cultura Olmeca?",
    answer: "San Lorenzo, Veracruz.",
    tags: ["olmeca", "san lorenzo"],
    choices: {
      correct: "San Lorenzo, Veracruz.",
      distractors: [
        "La Venta, Tabasco.",
        "Tres Zapotes, Veracruz.",
        "Laguna de los Cerros, Veracruz.",
      ],
    },
  },
  {
    id: "olmeca-mas-importante",
    category: "prehispanico",
    subcategory: "olmeca",
    question: "¿Cuál es el centro ceremonial más importante de la cultura Olmeca?",
    answer: "La Venta, Tabasco.",
    tags: ["olmeca", "la venta"],
    choices: {
      correct: "La Venta, Tabasco.",
      distractors: [
        "San Lorenzo, Veracruz.",
        "Tres Zapotes, Veracruz.",
        "Laguna de los Cerros, Veracruz.",
      ],
    },
  },
  {
    id: "piramide-mas-antigua",
    category: "prehispanico",
    subcategory: "olmeca",
    question:
      "¿Dónde se encuentra la pirámide mesoamericana más antigua, hecha de lodo y tierra?",
    answer: "En La Venta, Tabasco (cultura Olmeca).",
    tags: ["olmeca", "la venta", "piramide"],
    choices: {
      correct: "En La Venta, Tabasco (cultura Olmeca).",
      distractors: [
        "En Cuicuilco, Ciudad de México (cultura del Preclásico tardío).",
        "En Cholula, Puebla (cultura del Posclásico).",
        "En Teotihuacán, Estado de México (cultura teotihuacana).",
      ],
    },
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
    choices: {
      correct: "Los Mayas.",
      distractors: ["Los Olmecas.", "Los Zapotecas.", "Los Toltecas."],
    },
  },
  {
    id: "maya-caracteristicas",
    category: "prehispanico",
    subcategory: "maya",
    question: "Los mayas se caracterizaban por ser...",
    answer: "Grandes astrónomos y matemáticos.",
    tags: ["maya"],
    choices: {
      correct: "Grandes astrónomos y matemáticos.",
      distractors: [
        "Grandes navegantes y comerciantes marítimos.",
        "Grandes metalúrgicos y orfebres.",
        "Grandes guerreros y conquistadores.",
      ],
    },
  },
  {
    id: "maya-cero",
    category: "prehispanico",
    subcategory: "maya",
    question: "¿A quién se le atribuye la creación del cero?",
    answer: "A los Mayas.",
    tags: ["maya", "cero", "matematicas"],
    choices: {
      correct: "A los Mayas.",
      distractors: ["A los Olmecas.", "A los Zapotecas.", "A los Mexicas."],
    },
  },
  {
    id: "maya-cuenta-larga",
    category: "prehispanico",
    subcategory: "maya",
    question: "¿Qué era la 'cuenta larga'?",
    answer: "Un calendario de origen Maya.",
    tags: ["maya", "calendario"],
    choices: {
      correct: "Un calendario de origen Maya.",
      distractors: [
        "Un calendario de origen Azteca.",
        "Un calendario de origen Zapoteca.",
        "Un calendario de origen Tolteca.",
      ],
    },
  },
  {
    id: "maya-ixchel",
    category: "prehispanico",
    subcategory: "maya",
    question: "Diosa Maya de la luna",
    answer: "Ixchel.",
    tags: ["maya", "deidades"],
    choices: {
      correct: "Ixchel.",
      distractors: ["Coyolxauhqui.", "Coatlicue.", "Xochiquetzal."],
    },
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
    choices: {
      correct:
        "Palenque, Yaxchilán, Calakmul, Tikal, Toniná, Chichén Itzá, Copán y Uxmal.",
      distractors: [
        "Tula, Teotihuacán, Tenochtitlán, Cholula, Cacaxtla, Xochicalco, El Tajín y Tzintzuntzan.",
        "Monte Albán, Mitla, Yagul, Dainzú, Lambityeco, Zaachila, Atzompa y Huitzo.",
        "La Venta, Tres Zapotes, San Lorenzo, Laguna de los Cerros, Tlatilco, Cuicuilco, Chalcatzingo y Teopantecuanitlan.",
      ],
    },
  },
  {
    id: "kukulkan-castillo",
    category: "prehispanico",
    subcategory: "maya",
    question: "Otro nombre del templo de Kukulkán en Chichén Itzá",
    answer: "El Castillo.",
    tags: ["maya", "chichen itza"],
    choices: {
      correct: "El Castillo.",
      distractors: ["El Caracol.", "El Osario.", "El Adivino."],
    },
  },
  {
    id: "piramide-mas-alta",
    category: "prehispanico",
    subcategory: "maya",
    question: "¿Dónde se encuentra la pirámide más alta de México?",
    answer: "En Toniná, Chiapas (su acrópolis alcanza ~75 m de altura).",
    tags: ["maya", "tonina"],
    choices: {
      correct: "En Toniná, Chiapas (su acrópolis alcanza ~75 m de altura).",
      distractors: [
        "En Cholula, Puebla (su Gran Pirámide alcanza ~66 m de altura).",
        "En El Tajín, Veracruz (su Pirámide de los Nichos alcanza ~20 m de altura).",
        "En Teotihuacán, Estado de México (su Pirámide del Sol alcanza ~65 m de altura).",
      ],
    },
  },

  // ─── Teotihuacán ────────────────────────────────────────────────
  {
    id: "teotihuacan-significado",
    category: "prehispanico",
    subcategory: "teotihuacan",
    question: "¿Qué significa Teotihuacán?",
    answer: "Ciudad de los Dioses (donde los hombres se convirtieron en dioses).",
    tags: ["teotihuacan", "etimologia"],
    choices: {
      correct:
        "Ciudad de los Dioses (donde los hombres se convirtieron en dioses).",
      distractors: [
        "Lugar de las garzas (donde habitan las aves sagradas).",
        "Cerro de la estrella (donde se enciende el fuego nuevo).",
        "Lugar de los muertos (donde descansan los antepasados).",
      ],
    },
  },
  {
    id: "teotihuacan-que-fue",
    category: "prehispanico",
    subcategory: "teotihuacan",
    question: "¿Qué fue Teotihuacán?",
    answer: "Un centro ceremonial y una ciudad prehispánica.",
    tags: ["teotihuacan"],
    choices: {
      correct: "Un centro ceremonial y una ciudad prehispánica.",
      distractors: [
        "Un calendario ritual de origen prehispánico.",
        "Un códice sagrado de origen prehispánico.",
        "Una deidad suprema del panteón prehispánico.",
      ],
    },
  },
  {
    id: "piramides-sol-luna",
    category: "prehispanico",
    subcategory: "teotihuacan",
    question: "¿Dónde se encuentran las pirámides del Sol y de la Luna?",
    answer: "En Teotihuacán, Estado de México.",
    tags: ["teotihuacan", "piramides"],
    choices: {
      correct: "En Teotihuacán, Estado de México.",
      distractors: [
        "En Tula, Hidalgo.",
        "En Cholula, Puebla.",
        "En Tenochtitlán, Ciudad de México.",
      ],
    },
  },
  {
    id: "piramides-sol-luna-fecha",
    category: "prehispanico",
    subcategory: "teotihuacan",
    question: "¿Cuándo se construyeron las pirámides del Sol y de la Luna?",
    answer: "Entre el año 0 y el 200 d.C.",
    tags: ["teotihuacan", "piramides"],
    choices: {
      correct: "Entre el año 0 y el 200 d.C.",
      distractors: [
        "Entre el año 500 y el 700 d.C.",
        "Entre el año 200 y el 100 a.C.",
        "Entre el año 900 y el 1100 d.C.",
      ],
    },
  },
  {
    id: "calzada-muertos",
    category: "prehispanico",
    subcategory: "teotihuacan",
    question: "¿Dónde se ubicaba la Calzada de los Muertos?",
    answer: "En Teotihuacán.",
    tags: ["teotihuacan"],
    choices: {
      correct: "En Teotihuacán.",
      distractors: ["En Tula.", "En Monte Albán.", "En Tenochtitlán."],
    },
  },
  {
    id: "deidad-suprema-teotihuacanos",
    category: "prehispanico",
    subcategory: "teotihuacan",
    question: "¿Cuál es la deidad suprema de los Teotihuacanos?",
    answer: "Quetzalcóatl (la Serpiente Emplumada).",
    tags: ["teotihuacan", "deidades", "quetzalcoatl"],
    choices: {
      correct: "Quetzalcóatl (la Serpiente Emplumada).",
      distractors: [
        "Tláloc (el dios de la lluvia).",
        "Huitzilopochtli (el dios de la guerra).",
        "Tezcatlipoca (el espejo humeante).",
      ],
    },
  },
  {
    id: "teotihuacan-grupos",
    category: "prehispanico",
    subcategory: "teotihuacan",
    question:
      "¿Cuáles eran los dos grandes grupos étnicos que habitaban en Teotihuacán?",
    answer: "Nahuas y otomíes.",
    tags: ["teotihuacan"],
    choices: {
      correct: "Nahuas y otomíes.",
      distractors: [
        "Mayas y zapotecas.",
        "Mixtecos y totonacas.",
        "Purépechas y huastecos.",
      ],
    },
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
    choices: {
      correct:
        "En Tikal (Guatemala), donde se documenta influencia teotihuacana sobre los mayas del Clásico.",
      distractors: [
        "En Quiriguá (Guatemala), donde se documenta influencia teotihuacana sobre los mayas del Clásico.",
        "En Lamanai (Belice), donde se documenta influencia teotihuacana sobre los mayas del Clásico.",
        "En Joya de Cerén (El Salvador), donde se documenta influencia teotihuacana sobre los mayas del Clásico.",
      ],
    },
  },

  // ─── Toltecs ───────────────────────────────────────────────────
  {
    id: "toltecas-asentamiento",
    category: "prehispanico",
    subcategory: "tolteca",
    question: "¿Dónde se asentaron los Toltecas?",
    answer: "En Tula de Allende, estado de Hidalgo.",
    tags: ["tolteca", "tula"],
    choices: {
      correct: "En Tula de Allende, estado de Hidalgo.",
      distractors: [
        "En Teotihuacán, estado de México.",
        "En Tzintzuntzan, estado de Michoacán.",
        "En Cholula, estado de Puebla.",
      ],
    },
  },
  {
    id: "tula-significado",
    category: "prehispanico",
    subcategory: "tolteca",
    question: "¿Qué significa Tula en náhuatl?",
    answer: "Juncal, o 'junto al tular'.",
    tags: ["tolteca", "etimologia"],
    choices: {
      correct: "Juncal, o 'junto al tular'.",
      distractors: [
        "Garzal, o 'junto al agua'.",
        "Cerro sagrado, o 'junto al monte'.",
        "Tunal, o 'junto al nopal'.",
      ],
    },
  },
  {
    id: "tolteca-significado",
    category: "prehispanico",
    subcategory: "tolteca",
    question: "¿Qué significa 'tolteca'?",
    answer: "Habitante de Tula.",
    tags: ["tolteca", "etimologia"],
    choices: {
      correct: "Habitante de Tula.",
      distractors: [
        "Habitante de Teotihuacán.",
        "Habitante de Tenochtitlán.",
        "Habitante de Aztlán.",
      ],
    },
  },
  {
    id: "tzompantli-ciudad",
    category: "prehispanico",
    subcategory: "tolteca",
    question:
      "¿Ciudad donde se usaba el macabro Tzompantli?",
    answer: "Tula.",
    tags: ["tolteca", "tzompantli"],
    choices: {
      correct: "Tula.",
      distractors: ["Teotihuacán.", "Monte Albán.", "Palenque."],
    },
  },
  {
    id: "tzompantli-que-es",
    category: "prehispanico",
    subcategory: "tolteca",
    question:
      "Nombre del altar prehispánico decorado con cráneos tallados en piedra y estacas para ensartar cabezas de los sacrificados",
    answer: "Tzompantli.",
    tags: ["tzompantli", "sacrificios"],
    choices: {
      correct: "Tzompantli.",
      distractors: ["Cuauhxicalli.", "Techcatl.", "Temalácatl."],
    },
  },

  // ─── Mexica / Aztec ──────────────────────────────────────────
  {
    id: "aztlan-significado",
    category: "prehispanico",
    subcategory: "mexica",
    question: "¿Qué significa Aztlán?",
    answer: "Garza; 'lugar de las garzas' o 'lugar de la blancura'.",
    tags: ["mexica", "aztlan", "etimologia"],
    choices: {
      correct: "Garza; 'lugar de las garzas' o 'lugar de la blancura'.",
      distractors: [
        "Colibrí; 'lugar de los colibríes' o 'lugar del sur'.",
        "Águila; 'lugar de las águilas' o 'lugar del nopal'.",
        "Serpiente; 'lugar de las serpientes' o 'lugar del agua'.",
      ],
    },
  },
  {
    id: "aztlan-origen",
    category: "prehispanico",
    subcategory: "mexica",
    question: "Lugar mítico de donde salieron los mexicas (aztecas)",
    answer: "Aztlán.",
    tags: ["mexica", "aztlan"],
    choices: {
      correct: "Aztlán.",
      distractors: ["Tollan.", "Tamoanchan.", "Cíbola."],
    },
  },
  {
    id: "aztlan-migracion",
    category: "prehispanico",
    subcategory: "mexica",
    question:
      "Al lugar mítico de donde partieron los mexicas e iniciaron su migración se le conoce como:",
    answer: "Aztlán.",
    tags: ["mexica", "aztlan"],
    choices: {
      correct: "Aztlán.",
      distractors: ["Tollan.", "Teotihuacán.", "Tenochtitlán."],
    },
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
    choices: {
      correct: "El 20 de junio de 1325 por los Mexicas.",
      distractors: [
        "El 13 de marzo de 1325 por los Mexicas.",
        "El 18 de julio de 1345 por los Mexicas.",
        "El 8 de noviembre de 1376 por los Mexicas.",
      ],
    },
  },
  {
    id: "tenochtitlan-que-fue",
    category: "prehispanico",
    subcategory: "mexica",
    question: "¿Qué fue Tenochtitlán?",
    answer: "La capital de los Mexicas.",
    tags: ["mexica", "tenochtitlan"],
    choices: {
      correct: "La capital de los Mexicas.",
      distractors: [
        "La capital de los Toltecas.",
        "La capital de los Mayas.",
        "La capital de los Zapotecas.",
      ],
    },
  },
  {
    id: "templo-mayor",
    category: "prehispanico",
    subcategory: "mexica",
    question:
      "Edificio o museo que alberga el centro ceremonial de Tenochtitlán",
    answer: "Templo Mayor.",
    tags: ["mexica", "templo mayor"],
    choices: {
      correct: "Templo Mayor.",
      distractors: [
        "Templo de Quetzalcóatl.",
        "Templo del Sol.",
        "Templo de las Inscripciones.",
      ],
    },
  },
  {
    id: "triple-alianza",
    category: "prehispanico",
    subcategory: "mexica",
    question: "¿Quiénes integraron la Triple Alianza?",
    answer: "Tenochtitlán, Texcoco y Tlacopan.",
    tags: ["mexica", "triple alianza"],
    choices: {
      correct: "Tenochtitlán, Texcoco y Tlacopan.",
      distractors: [
        "Tenochtitlán, Tlatelolco y Azcapotzalco.",
        "Texcoco, Xochimilco y Chalco.",
        "Tlacopan, Coyoacán y Culhuacán.",
      ],
    },
  },
  {
    id: "tlatoani",
    category: "prehispanico",
    subcategory: "mexica",
    question: "¿Cuál es otro término para referirse a los emperadores mexicas?",
    answer: "Tlatoani (plural: tlatoque).",
    tags: ["mexica", "tlatoani"],
    choices: {
      correct: "Tlatoani (plural: tlatoque).",
      distractors: [
        "Cihuacóatl (plural: cihuacoque).",
        "Tecuhtli (plural: tetecuhtin).",
        "Calpixqui (plural: calpixque).",
      ],
    },
  },
  {
    id: "altepetl-significado",
    category: "prehispanico",
    subcategory: "mexica",
    question:
      "Significado de la palabra 'altépetl' con la que los tlatoanis denominaban a sus ciudades",
    answer: "Cerro de agua.",
    tags: ["mexica", "etimologia"],
    choices: {
      correct: "Cerro de agua.",
      distractors: ["Casa de piedra.", "Lugar sagrado.", "Pueblo de gente."],
    },
  },
  {
    id: "ultimos-emperadores-mexicas",
    category: "prehispanico",
    subcategory: "mexica",
    question: "¿Cuáles fueron los 3 últimos emperadores mexicas?",
    answer: "Moctezuma II (Xocoyotzin), Cuitláhuac y Cuauhtémoc.",
    tags: ["mexica", "emperadores"],
    choices: {
      correct: "Moctezuma II (Xocoyotzin), Cuitláhuac y Cuauhtémoc.",
      distractors: [
        "Axayácatl, Tízoc y Ahuízotl.",
        "Acamapichtli, Huitzilíhuitl y Chimalpopoca.",
        "Moctezuma I (Ilhuicamina), Itzcóatl y Tlacaélel.",
      ],
    },
  },
  {
    id: "cuauhtemoc-significado",
    category: "prehispanico",
    subcategory: "mexica",
    question: "¿Qué significa 'Cuauhtémoc'?",
    answer: "Águila que desciende, o águila que se posa.",
    tags: ["mexica", "etimologia", "cuauhtemoc"],
    choices: {
      correct: "Águila que desciende, o águila que se posa.",
      distractors: [
        "Serpiente que vuela, o serpiente emplumada.",
        "Sol que cae, o sol del atardecer.",
        "Colibrí del sur, o colibrí zurdo.",
      ],
    },
  },
  {
    id: "cuauhtemoc-ultimo-emperador",
    category: "prehispanico",
    subcategory: "mexica",
    question:
      "Nombre del último emperador mexica, a quien los conquistadores torturaron quemándole los pies",
    answer: "Cuauhtémoc.",
    tags: ["mexica", "cuauhtemoc"],
    choices: {
      correct: "Cuauhtémoc.",
      distractors: ["Cuitláhuac.", "Moctezuma II.", "Cacama."],
    },
  },
  {
    id: "cuauhtemoc-quema",
    category: "prehispanico",
    subcategory: "mexica",
    question: "¿Por qué le quemaron los pies a Cuauhtémoc?",
    answer:
      "Para que confesara qué había hecho con el tesoro de Moctezuma.",
    tags: ["mexica", "cuauhtemoc", "conquista"],
    choices: {
      correct: "Para que confesara qué había hecho con el tesoro de Moctezuma.",
      distractors: [
        "Para que revelara la ubicación de la mítica ciudad de Aztlán.",
        "Para que entregara los códices sagrados de Tenochtitlán.",
        "Para que renunciara públicamente al trono de los mexicas.",
      ],
    },
  },
  {
    id: "mexicas-actividades",
    category: "prehispanico",
    subcategory: "mexica",
    question: "¿Por qué actividad fueron conocidos los aztecas?",
    answer:
      "Por ser guerreros y por destacarse en agricultura, comercio, culto religioso y sacrificios humanos.",
    tags: ["mexica"],
    choices: {
      correct:
        "Por ser guerreros y por destacarse en agricultura, comercio, culto religioso y sacrificios humanos.",
      distractors: [
        "Por ser navegantes y por destacarse en la pesca, la astronomía, la escritura y el comercio marítimo.",
        "Por ser pastores y por destacarse en la ganadería, el tejido, la cerámica y la minería.",
        "Por ser metalúrgicos y por destacarse en la orfebrería, la carpintería, la alfarería y la herrería.",
      ],
    },
  },
  {
    id: "mictlan",
    category: "prehispanico",
    subcategory: "mexica",
    question:
      "De acuerdo con la cosmovisión de los mexicas, ¿cómo se llama el lugar de los muertos?",
    answer: "Mictlán.",
    tags: ["mexica", "cosmovision"],
    choices: {
      correct: "Mictlán.",
      distractors: ["Tlalocan.", "Tonatiuhichan.", "Chichihualcuauhco."],
    },
  },
  {
    id: "quetzalcoatl-serpiente",
    category: "prehispanico",
    subcategory: "mexica",
    question: "Deidad del México antiguo conocida como la Serpiente Emplumada",
    answer: "Quetzalcóatl.",
    tags: ["mexica", "deidades", "quetzalcoatl"],
    choices: {
      correct: "Quetzalcóatl.",
      distractors: ["Huitzilopochtli.", "Tezcatlipoca.", "Xiuhcóatl."],
    },
  },
  {
    id: "huitzilopochtli",
    category: "prehispanico",
    subcategory: "mexica",
    question: "¿Quién era el dios de la guerra Mexica?",
    answer: "Huitzilopochtli.",
    tags: ["mexica", "deidades"],
    choices: {
      correct: "Huitzilopochtli.",
      distractors: ["Quetzalcóatl.", "Tláloc.", "Xochipilli."],
    },
  },
  {
    id: "tonatiuh",
    category: "prehispanico",
    subcategory: "mexica",
    question: "Deidad azteca relacionada con el sol",
    answer: "Tonatiuh.",
    tags: ["mexica", "deidades"],
    choices: {
      correct: "Tonatiuh.",
      distractors: ["Metztli.", "Ehécatl.", "Mixcóatl."],
    },
  },
  {
    id: "tlaloc",
    category: "prehispanico",
    subcategory: "mexica",
    question: "Deidad azteca de la lluvia y del relámpago",
    answer: "Tláloc.",
    tags: ["mexica", "deidades"],
    choices: {
      correct: "Tláloc.",
      distractors: ["Ehécatl.", "Tonatiuh.", "Xiuhtecuhtli."],
    },
  },
  {
    id: "coatlicue",
    category: "prehispanico",
    subcategory: "mexica",
    question: "Diosa de la fertilidad y de la tierra en la cosmovisión mexica",
    answer: "Coatlicue (madre de Huitzilopochtli, asociada a la tierra y la fertilidad).",
    tags: ["mexica", "deidades"],
    choices: {
      correct:
        "Coatlicue (madre de Huitzilopochtli, asociada a la tierra y la fertilidad).",
      distractors: [
        "Xochiquetzal (diosa del amor, asociada a las flores y la belleza).",
        "Mayáhuel (diosa del maguey, asociada al pulque y la embriaguez).",
        "Itzpapálotl (diosa guerrera, asociada a las estrellas y el sacrificio).",
      ],
    },
  },
  {
    id: "chalchiuhtlicue",
    category: "prehispanico",
    subcategory: "mexica",
    question: "¿Quién fue Chalchiuhtlicue?",
    answer: "La diosa de los lagos y de las corrientes de agua de los Mexicas.",
    tags: ["mexica", "deidades"],
    choices: {
      correct: "La diosa de los lagos y de las corrientes de agua de los Mexicas.",
      distractors: [
        "La diosa del maíz y de las cosechas de los Mexicas.",
        "La diosa del amor y de las flores de los Mexicas.",
        "La diosa del fuego y del hogar de los Mexicas.",
      ],
    },
  },
  {
    id: "papalotl",
    category: "prehispanico",
    subcategory: "mexica",
    question: "¿Qué significa 'Papalotl' en náhuatl?",
    answer: "Mariposa.",
    tags: ["mexica", "etimologia"],
    choices: {
      correct: "Mariposa.",
      distractors: ["Libélula.", "Colibrí.", "Luciérnaga."],
    },
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
    choices: {
      correct:
        "El Calmécac (para los nobles) y el Telpochcalli (para plebeyos y jóvenes del pueblo).",
      distractors: [
        "El Tlatocan (para los nobles) y el Tianquiztli (para plebeyos y jóvenes del pueblo).",
        "El Cuicacalli (para los nobles) y el Tecpan (para plebeyos y jóvenes del pueblo).",
        "El Tlacochcalco (para los nobles) y el Pochtecan (para plebeyos y jóvenes del pueblo).",
      ],
    },
  },
  {
    id: "ajolote-xolotl",
    category: "prehispanico",
    subcategory: "mexica",
    question: "Anfibio representado junto al dios Xólotl",
    answer: "El ajolote.",
    tags: ["mexica", "deidades", "ajolote"],
    choices: {
      correct: "El ajolote.",
      distractors: ["La rana.", "El sapo.", "La tortuga."],
    },
  },
  {
    id: "chinampa",
    category: "prehispanico",
    subcategory: "mexica",
    question:
      "Terreno construido sobre las lagunas del Valle de México que sirvió de base al sistema productivo del altiplano central, y que aún puede verse en Xochimilco",
    answer: "Chinampa.",
    tags: ["mexica", "chinampa", "xochimilco"],
    choices: {
      correct: "Chinampa.",
      distractors: ["Calpulli.", "Acalli.", "Metlatl."],
    },
  },
  {
    id: "ceramica-anaranjada",
    category: "prehispanico",
    subcategory: "mexica",
    question:
      "¿Cuál fue uno de los productos artesanales más finos del México antiguo?",
    answer: "La cerámica anaranjada delgada.",
    tags: ["arte prehispanico"],
    choices: {
      correct: "La cerámica anaranjada delgada.",
      distractors: [
        "La obsidiana tallada de Teotihuacán.",
        "El jade labrado de los olmecas.",
        "La greca de mosaico de Mitla.",
      ],
    },
  },

  // ─── Tarascans / Purépecha ─────────────────────────────────────
  {
    id: "purepechas-michoacan",
    category: "prehispanico",
    subcategory: "purepecha",
    question: "Tribu originaria de Michoacán",
    answer: "Los Purépechas (también llamados Tarascos).",
    tags: ["purepecha", "michoacan"],
    choices: {
      correct: "Los Purépechas (también llamados Tarascos).",
      distractors: [
        "Los Otomíes (también llamados Hñähñü).",
        "Los Totonacas (también llamados Tutunakú).",
        "Los Huastecos (también llamados Téenek).",
      ],
    },
  },
  {
    id: "tarascos-destacaron",
    category: "prehispanico",
    subcategory: "purepecha",
    question: "Los tarascos se destacaron por ser:",
    answer:
      "Artesanos: destacaron como carpinteros y, sobre todo, en la metalurgia, trabajando fundamentalmente el oro y la plata.",
    tags: ["purepecha", "metalurgia"],
    choices: {
      correct:
        "Artesanos: destacaron como carpinteros y, sobre todo, en la metalurgia, trabajando fundamentalmente el oro y la plata.",
      distractors: [
        "Astrónomos: destacaron como matemáticos y, sobre todo, en el calendario, calculando con precisión los eclipses y los solsticios.",
        "Comerciantes: destacaron como navegantes y, sobre todo, en el comercio marítimo, intercambiando sal, cacao y algodón.",
        "Guerreros: destacaron como conquistadores y, sobre todo, en la milicia, sometiendo a los pueblos vecinos y exigiendo tributo.",
      ],
    },
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
    choices: {
      correct:
        "En los valles de Etla, Tlacolula y Zimatlán, en el actual estado de Oaxaca.",
      distractors: [
        "En los valles de Toluca, Lerma e Ixtlahuaca, en el actual estado de México.",
        "En los valles de Tehuacán, Atlixco y Tepeaca, en el actual estado de Puebla.",
        "En los valles de Comitán, Ocosingo y Cintalapa, en el actual estado de Chiapas.",
      ],
    },
  },
  {
    id: "monte-alban-capital",
    category: "prehispanico",
    subcategory: "zapoteca",
    question: "¿Qué es Monte Albán?",
    answer: "Fue la antigua capital de los Zapotecos.",
    tags: ["zapoteca", "monte alban"],
    choices: {
      correct: "Fue la antigua capital de los Zapotecos.",
      distractors: [
        "Fue la antigua capital de los Mixtecos.",
        "Fue la antigua capital de los Toltecas.",
        "Fue la antigua capital de los Mexicas.",
      ],
    },
  },
  {
    id: "monte-alban-ubicacion",
    category: "prehispanico",
    subcategory: "zapoteca",
    question: "Las ruinas de Monte Albán se localizan en...",
    answer: "Oaxaca.",
    tags: ["zapoteca", "monte alban"],
    choices: {
      correct: "Oaxaca.",
      distractors: ["Chiapas.", "Puebla.", "Guerrero."],
    },
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
    choices: {
      correct:
        "A que las figuras esculpidas en sus lápidas parecen moverse o contorsionarse.",
      distractors: [
        "A que representan a los sacerdotes ejecutando danzas rituales en las fiestas.",
        "A que muestran a los guerreros celebrando sus victorias con bailes.",
        "A que ilustran a los danzantes profesionales que actuaban en la corte.",
      ],
    },
  },

  // ─── Other cultures / mixed topics ─────────────────────────────
  {
    id: "tarahumaras",
    category: "prehispanico",
    subcategory: "norte",
    question: "Cultura indígena que persiste en el norte del país",
    answer: "Los Tarahumaras (rarámuri).",
    tags: ["tarahumara", "chihuahua"],
    choices: {
      correct: "Los Tarahumaras (rarámuri).",
      distractors: [
        "Los Lacandones (hach winik).",
        "Los Mayas (maaya'ob).",
        "Los Zapotecos (binnizá).",
      ],
    },
  },
  {
    id: "tarahumaras-estado",
    category: "prehispanico",
    subcategory: "norte",
    question: "¿De qué parte del país son los Tarahumaras?",
    answer: "Del estado de Chihuahua.",
    tags: ["tarahumara", "chihuahua"],
    choices: {
      correct: "Del estado de Chihuahua.",
      distractors: [
        "Del estado de Sonora.",
        "Del estado de Sinaloa.",
        "Del estado de Coahuila.",
      ],
    },
  },
  {
    id: "xoloitzcuintle",
    category: "prehispanico",
    question:
      "Perro originario de México o nombre de raza de perro prehispánico de poco pelo",
    answer: "Xoloitzcuintle.",
    tags: ["xoloitzcuintle"],
    choices: {
      correct: "Xoloitzcuintle.",
      distractors: ["Techichi.", "Tlalchichi.", "Chihuahueño."],
    },
  },
];
