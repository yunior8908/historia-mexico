import type { HistoriaEntry } from "./types";

/**
 * Public and educational institutions, national symbols and the
 * Mexican education system.
 */
export const ENTRIES_INSTITUCIONES: HistoriaEntry[] = [
  // ─── Public institutions ────────────────────────────────────
  {
    id: "profeco",
    category: "instituciones",
    question: "¿Qué es la PROFECO?",
    answer:
      "Procuraduría Federal del Consumidor: dependencia encargada de las quejas y la protección del consumidor.",
    tags: ["profeco"],
    choices: {
      correct:
        "Procuraduría Federal del Consumidor: dependencia encargada de las quejas y la protección del consumidor.",
      distractors: [
        "Procuraduría General del Consumidor: organismo encargado de fijar los precios máximos de los productos básicos.",
        "Procuraduría Federal de Protección al Ambiente: dependencia encargada de atender las denuncias ecológicas.",
        "Comisión Nacional del Consumidor: dependencia encargada de regular la publicidad comercial.",
      ],
    },
  },
  {
    id: "profeco-donde",
    category: "instituciones",
    question:
      "¿Dónde se hacen las denuncias del consumidor? / ¿Cuál es la institución de protección al consumidor?",
    answer: "En la PROFECO (Procuraduría Federal del Consumidor).",
    tags: ["profeco"],
    choices: {
      correct: "En la PROFECO (Procuraduría Federal del Consumidor).",
      distractors: [
        "En la CONDUSEF (Comisión Nacional para la Protección de los Usuarios de Servicios Financieros).",
        "En la PROFEPA (Procuraduría Federal de Protección al Ambiente).",
        "En la COFEPRIS (Comisión Federal para la Protección contra Riesgos Sanitarios).",
      ],
    },
  },
  {
    id: "shcp",
    category: "instituciones",
    question: "Secretaría que se encarga de cobrar impuestos",
    answer: "SHCP – Secretaría de Hacienda y Crédito Público.",
    tags: ["shcp", "impuestos"],
    choices: {
      correct: "SHCP – Secretaría de Hacienda y Crédito Público.",
      distractors: [
        "SE – Secretaría de Economía.",
        "SFP – Secretaría de la Función Pública.",
        "STPS – Secretaría del Trabajo y Previsión Social.",
      ],
    },
  },
  {
    id: "ine-rol",
    category: "instituciones",
    question:
      "Organismo encargado de regular la participación de los partidos políticos en las elecciones",
    answer: "El Instituto Nacional Electoral (INE).",
    tags: ["ine"],
    choices: {
      correct: "El Instituto Nacional Electoral (INE).",
      distractors: [
        "El Tribunal Electoral del Poder Judicial de la Federación (TEPJF).",
        "El Instituto Federal Electoral (IFE).",
        "La Fiscalía Especializada en Delitos Electorales (FEPADE).",
      ],
    },
  },
  {
    id: "conalep",
    category: "instituciones",
    question: "¿Qué significa CONALEP?",
    answer: "Colegio Nacional de Educación Profesional Técnica.",
    tags: ["conalep"],
    choices: {
      correct: "Colegio Nacional de Educación Profesional Técnica.",
      distractors: [
        "Colegio Nacional de Enseñanza Profesional y Técnica.",
        "Comisión Nacional de Educación Profesional Técnica.",
        "Consejo Nacional de Educación Profesional y Tecnológica.",
      ],
    },
  },
  {
    id: "conalep-fundacion",
    category: "instituciones",
    question: "¿Cuándo y quién fundó el CONALEP?",
    answer:
      "En abril de 1978, por el Ing. José Antonio Padilla Segura, durante la presidencia de José López Portillo.",
    tags: ["conalep"],
    choices: {
      correct:
        "En abril de 1978, por el Ing. José Antonio Padilla Segura, durante la presidencia de José López Portillo.",
      distractors: [
        "En marzo de 1971, por el Ing. Víctor Bravo Ahuja, durante la presidencia de Luis Echeverría.",
        "En febrero de 1981, por el Lic. Fernando Solana Morales, durante la presidencia de José López Portillo.",
        "En enero de 1979, por el Ing. José Antonio Padilla Segura, durante la presidencia de Miguel de la Madrid.",
      ],
    },
  },

  // ─── Educational institutions ──────────────────────────────────
  {
    id: "universidad-mas-antigua",
    category: "instituciones",
    subcategory: "educacion",
    question: "¿Cuál es la universidad más antigua de México?",
    answer:
      "La UNAM (Universidad Nacional Autónoma de México), heredera de la Real y Pontificia Universidad de México (1551).",
    tags: ["unam"],
    choices: {
      correct:
        "La UNAM (Universidad Nacional Autónoma de México), heredera de la Real y Pontificia Universidad de México (1551).",
      distractors: [
        "La BUAP (Benemérita Universidad Autónoma de Puebla), heredera del Colegio del Espíritu Santo (1578).",
        "La UdeG (Universidad de Guadalajara), heredera de la Real Universidad de Guadalajara (1792).",
        "El IPN (Instituto Politécnico Nacional), heredero de la Escuela Nacional de Artes y Oficios (1867).",
      ],
    },
  },
  {
    id: "unam-fundacion-moderna",
    category: "instituciones",
    subcategory: "educacion",
    question: "¿En qué año se fundó la UNAM (universidad moderna)?",
    answer:
      "El 22 de septiembre de 1910 (como Universidad Nacional de México).",
    tags: ["unam"],
    choices: {
      correct:
        "El 22 de septiembre de 1910 (como Universidad Nacional de México).",
      distractors: [
        "El 26 de mayo de 1910 (como Universidad Nacional de México).",
        "El 22 de septiembre de 1929 (al obtener su autonomía).",
        "El 10 de julio de 1929 (como Universidad Autónoma de México).",
      ],
    },
  },
  {
    id: "ipn-tecnico",
    category: "instituciones",
    subcategory: "educacion",
    question:
      "Institución educativa creada para carreras técnicas",
    answer: "El Instituto Politécnico Nacional (IPN).",
    tags: ["ipn"],
    choices: {
      correct: "El Instituto Politécnico Nacional (IPN).",
      distractors: [
        "La Universidad Autónoma Metropolitana (UAM).",
        "El Consejo Nacional de Ciencia y Tecnología (CONACYT).",
        "La Universidad Pedagógica Nacional (UPN).",
      ],
    },
  },
  {
    id: "ipn-lema",
    category: "instituciones",
    subcategory: "educacion",
    question: "¿Cuál es el lema del Instituto Politécnico Nacional (IPN)?",
    answer: "'La Técnica al Servicio de la Patria'.",
    tags: ["ipn"],
    choices: {
      correct: "'La Técnica al Servicio de la Patria'.",
      distractors: [
        "'La Técnica al Servicio del Pueblo'.",
        "'Ciencia y Técnica con la Patria'.",
        "'Por la Patria y por la Técnica'.",
      ],
    },
  },
  {
    id: "uam-lema",
    category: "instituciones",
    subcategory: "educacion",
    question:
      "¿Cuál es el lema de la Universidad Autónoma Metropolitana (UAM)?",
    answer: "'In Calli Ixcahuicopa' ('Casa abierta al tiempo').",
    tags: ["uam"],
    choices: {
      correct: "'In Calli Ixcahuicopa' ('Casa abierta al tiempo').",
      distractors: [
        "'In Calli Ixcahuicopa' ('Casa del conocimiento eterno').",
        "'In Tlamatiliztli Ixtli' ('Casa abierta al saber').",
        "'Cemanahuac Tlamatiliztli' ('La sabiduría de todos los pueblos').",
      ],
    },
  },
  {
    id: "matilde-montoya",
    category: "instituciones",
    subcategory: "educacion",
    question: "¿Quién fue la primera mujer médico en México?",
    answer: "Matilde Montoya, en 1887.",
    tags: ["matilde montoya", "medicina"],
    choices: {
      correct: "Matilde Montoya, en 1887.",
      distractors: [
        "Matilde Montoya, en 1873.",
        "Columba Rivera, en 1894.",
        "Guadalupe Sánchez, en 1903.",
      ],
    },
  },

  // ─── Education: levels and statutes ────────────────────────────────
  {
    id: "educacion-duracion",
    category: "educacion",
    question: "¿Cuánto dura la educación en México por nivel?",
    answer:
      "Preescolar: 3 años; Primaria: 6 años; Secundaria: 3 años; Preparatoria/Bachillerato: 3 años.",
    tags: ["niveles educativos"],
    choices: {
      correct:
        "Preescolar: 3 años; Primaria: 6 años; Secundaria: 3 años; Preparatoria/Bachillerato: 3 años.",
      distractors: [
        "Preescolar: 2 años; Primaria: 6 años; Secundaria: 3 años; Preparatoria/Bachillerato: 2 años.",
        "Preescolar: 3 años; Primaria: 5 años; Secundaria: 3 años; Preparatoria/Bachillerato: 4 años.",
        "Preescolar: 3 años; Primaria: 6 años; Secundaria: 2 años; Preparatoria/Bachillerato: 3 años.",
      ],
    },
  },
  {
    id: "primaria-ciclos",
    category: "educacion",
    question: "¿Cuánto dura la educación primaria en México?",
    answer: "6 años (6 grados).",
    tags: ["primaria"],
    choices: {
      correct: "6 años (6 grados).",
      distractors: [
        "5 años (5 grados).",
        "4 años (4 grados).",
        "9 años (9 grados).",
      ],
    },
  },
  {
    id: "primaria-ciclo-escolar",
    category: "educacion",
    question: "En México, ¿cuánto dura el ciclo escolar primario?",
    answer: "1 año (ciclo escolar anual).",
    tags: ["ciclo escolar"],
    choices: {
      correct: "1 año (ciclo escolar anual).",
      distractors: [
        "2 años (ciclo escolar bianual).",
        "6 meses (ciclo escolar semestral).",
        "10 meses (ciclo escolar continuo).",
      ],
    },
  },
  {
    id: "educacion-obligatoria-niveles",
    category: "educacion",
    question:
      "Según la Constitución, la educación es obligatoria ¿en qué niveles académicos?",
    answer:
      "Preescolar, primaria, secundaria y preparatoria/bachillerato.",
    tags: ["obligatoria"],
    choices: {
      correct:
        "Preescolar, primaria, secundaria y preparatoria/bachillerato.",
      distractors: [
        "Solo primaria y secundaria.",
        "Primaria, secundaria, preparatoria y licenciatura.",
        "Preescolar, primaria y secundaria (sin preparatoria).",
      ],
    },
  },
  {
    id: "vasconcelos-primer-sep",
    category: "educacion",
    question:
      "¿Quién fue el primer secretario de Educación Pública de México (1921)?",
    answer: "José Vasconcelos.",
    tags: ["sep", "vasconcelos"],
    choices: {
      correct: "José Vasconcelos.",
      distractors: [
        "Justo Sierra.",
        "Jaime Torres Bodet.",
        "Narciso Bassols.",
      ],
    },
  },
  {
    id: "vasconcelos-lema-raza",
    category: "educacion",
    question: "¿Quién dijo la frase 'Por mi raza hablará el espíritu'?",
    answer: "José Vasconcelos (lema de la UNAM).",
    tags: ["unam", "vasconcelos", "frases"],
    choices: {
      correct: "José Vasconcelos (lema de la UNAM).",
      distractors: [
        "Justo Sierra (lema de la UNAM).",
        "Jaime Torres Bodet (lema de la UNAM).",
        "Antonio Caso (lema de la UNAM).",
      ],
    },
  },
  {
    id: "vasconcelos-frase-universidad",
    category: "educacion",
    question:
      "¿Quién dijo: 'Yo no vengo a trabajar por la universidad, sino a pedir a la universidad que trabaje por el pueblo'?",
    answer: "José Vasconcelos.",
    tags: ["unam", "vasconcelos", "frases"],
    choices: {
      correct: "José Vasconcelos.",
      distractors: [
        "Justo Sierra.",
        "Antonio Caso.",
        "Alfonso Reyes.",
      ],
    },
  },

  // ─── National symbols ──────────────────────────────────────────
  {
    id: "simbolos-patrios",
    category: "simbolos",
    question: "¿Cuáles son los símbolos patrios de México?",
    answer: "La Bandera, el Himno Nacional y el Escudo Nacional.",
    tags: ["simbolos"],
    choices: {
      correct: "La Bandera, el Himno Nacional y el Escudo Nacional.",
      distractors: [
        "La Bandera, el Escudo Nacional y el águila real.",
        "La Bandera, el Himno Nacional y la Constitución.",
        "El Escudo Nacional, el Himno Nacional y el Ángel de la Independencia.",
      ],
    },
  },
  {
    id: "simbolos-himno-1943",
    category: "simbolos",
    question:
      "¿Cuál de los símbolos patrios fue reconocido oficialmente en 1943 durante la presidencia de Manuel Ávila Camacho?",
    answer: "El Himno Nacional.",
    tags: ["himno"],
    choices: {
      correct: "El Himno Nacional.",
      distractors: [
        "La Bandera Nacional.",
        "El Escudo Nacional.",
        "El Calendario Cívico Nacional.",
      ],
    },
  },
  {
    id: "himno-creacion",
    category: "simbolos",
    question: "¿Cuándo fue creado el Himno Nacional?",
    answer:
      "El 13 de septiembre de 1854 (estrenado en el Gran Teatro de Santa Anna).",
    tags: ["himno"],
    choices: {
      correct:
        "El 13 de septiembre de 1854 (estrenado en el Gran Teatro de Santa Anna).",
      distractors: [
        "El 16 de septiembre de 1854 (estrenado en el Palacio Nacional).",
        "El 15 de septiembre de 1853 (estrenado en el Teatro Nacional).",
        "El 13 de septiembre de 1847 (estrenado en el Castillo de Chapultepec).",
      ],
    },
  },
  {
    id: "himno-letra",
    category: "simbolos",
    question: "¿Quién escribió la letra del Himno Nacional?",
    answer: "El poeta potosino Francisco González Bocanegra.",
    tags: ["himno"],
    choices: {
      correct: "El poeta potosino Francisco González Bocanegra.",
      distractors: [
        "El poeta jalisciense Jaime Nunó.",
        "El poeta veracruzano Salvador Díaz Mirón.",
        "El poeta tabasqueño Carlos Pellicer.",
      ],
    },
  },
  {
    id: "himno-musica",
    category: "simbolos",
    question: "¿Quién compuso la música del Himno Nacional?",
    answer: "Jaime Nunó.",
    tags: ["himno"],
    choices: {
      correct: "Jaime Nunó.",
      distractors: [
        "Francisco González Bocanegra.",
        "Juventino Rosas.",
        "Ricardo Castro.",
      ],
    },
  },
  {
    id: "himno-tema",
    category: "simbolos",
    question: "El tema dominante del Himno Nacional Mexicano",
    answer: "Una exhortación a la guerra defensiva.",
    tags: ["himno"],
    choices: {
      correct: "Una exhortación a la guerra defensiva.",
      distractors: [
        "Una celebración de la independencia de 1821.",
        "Un homenaje a los héroes de la Revolución.",
        "Una alabanza a la paz y la concordia nacional.",
      ],
    },
  },
  {
    id: "bandera-colores",
    category: "simbolos",
    question: "Colores de la bandera de México, de izquierda a derecha",
    answer: "Verde, blanco y rojo.",
    tags: ["bandera"],
    choices: {
      correct: "Verde, blanco y rojo.",
      distractors: [
        "Rojo, blanco y verde.",
        "Verde, rojo y blanco.",
        "Blanco, verde y rojo.",
      ],
    },
  },
  {
    id: "escudo-significado",
    category: "simbolos",
    question:
      "El águila y la serpiente que aparecen en el escudo nacional mexicano (incluido en la franja blanca de la bandera):",
    answer: "Evocan una leyenda prehispánica (la fundación de Tenochtitlán).",
    tags: ["escudo"],
    choices: {
      correct:
        "Evocan una leyenda prehispánica (la fundación de Tenochtitlán).",
      distractors: [
        "Representan la victoria de la Independencia sobre el dominio español.",
        "Simbolizan la lucha entre el bien y el mal según la tradición católica.",
        "Aluden a la unión de las culturas indígena y europea en el mestizaje.",
      ],
    },
  },
  {
    id: "animal-nacional",
    category: "simbolos",
    question: "Animal nacional de México",
    answer: "El águila real (Aquila chrysaetos).",
    tags: ["animal nacional"],
    choices: {
      correct: "El águila real (Aquila chrysaetos).",
      distractors: [
        "El jaguar (Panthera onca).",
        "El xoloitzcuintle (Canis lupus familiaris).",
        "El lobo mexicano (Canis lupus baileyi).",
      ],
    },
  },
  {
    id: "flor-nacional",
    category: "simbolos",
    question: "Flor nacional de México",
    answer: "La Dalia (declarada flor nacional en 1963).",
    tags: ["flor nacional"],
    choices: {
      correct: "La Dalia (declarada flor nacional en 1963).",
      distractors: [
        "La Nochebuena (declarada flor nacional en 1936).",
        "El Cempasúchil (declarado flor nacional en 1955).",
        "La Flor de Cacao (declarada flor nacional en 1971).",
      ],
    },
  },
  {
    id: "arbol-nacional",
    category: "simbolos",
    question: "Árbol nacional de México",
    answer: "El Ahuehuete.",
    tags: ["arbol nacional"],
    choices: {
      correct: "El Ahuehuete.",
      distractors: [
        "El Cedro rojo.",
        "La Ceiba.",
        "El Mezquite.",
      ],
    },
  },
];
