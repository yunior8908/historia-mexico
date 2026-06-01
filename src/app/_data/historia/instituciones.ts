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
  },
  {
    id: "profeco-donde",
    category: "instituciones",
    question:
      "¿Dónde se hacen las denuncias del consumidor? / ¿Cuál es la institución de protección al consumidor?",
    answer: "En la PROFECO (Procuraduría Federal del Consumidor).",
    tags: ["profeco"],
  },
  {
    id: "shcp",
    category: "instituciones",
    question: "Secretaría que se encarga de cobrar impuestos",
    answer: "SHCP – Secretaría de Hacienda y Crédito Público.",
    tags: ["shcp", "impuestos"],
  },
  {
    id: "ine-rol",
    category: "instituciones",
    question:
      "Organismo encargado de regular la participación de los partidos políticos en las elecciones",
    answer: "El Instituto Nacional Electoral (INE).",
    tags: ["ine"],
  },
  {
    id: "conalep",
    category: "instituciones",
    question: "¿Qué significa CONALEP?",
    answer: "Colegio Nacional de Educación Profesional Técnica.",
    tags: ["conalep"],
  },
  {
    id: "conalep-fundacion",
    category: "instituciones",
    question: "¿Cuándo y quién fundó el CONALEP?",
    answer:
      "En abril de 1978, por el Ing. José Antonio Padilla Segura, durante la presidencia de José López Portillo.",
    tags: ["conalep"],
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
  },
  {
    id: "unam-fundacion-moderna",
    category: "instituciones",
    subcategory: "educacion",
    question: "¿En qué año se fundó la UNAM (universidad moderna)?",
    answer:
      "El 22 de septiembre de 1910 (como Universidad Nacional de México).",
    tags: ["unam"],
  },
  {
    id: "ipn-tecnico",
    category: "instituciones",
    subcategory: "educacion",
    question:
      "Institución educativa creada para carreras técnicas",
    answer: "El Instituto Politécnico Nacional (IPN).",
    tags: ["ipn"],
  },
  {
    id: "ipn-lema",
    category: "instituciones",
    subcategory: "educacion",
    question: "¿Cuál es el lema del Instituto Politécnico Nacional (IPN)?",
    answer: "'La Técnica al Servicio de la Patria'.",
    tags: ["ipn"],
  },
  {
    id: "uam-lema",
    category: "instituciones",
    subcategory: "educacion",
    question:
      "¿Cuál es el lema de la Universidad Autónoma Metropolitana (UAM)?",
    answer: "'In Calli Ixcahuicopa' ('Casa abierta al tiempo').",
    tags: ["uam"],
  },
  {
    id: "matilde-montoya",
    category: "instituciones",
    subcategory: "educacion",
    question: "¿Quién fue la primera mujer médico en México?",
    answer: "Matilde Montoya, en 1887.",
    tags: ["matilde montoya", "medicina"],
  },

  // ─── Education: levels and statutes ────────────────────────────────
  {
    id: "educacion-duracion",
    category: "educacion",
    question: "¿Cuánto dura la educación en México por nivel?",
    answer:
      "Preescolar: 3 años; Primaria: 6 años; Secundaria: 3 años; Preparatoria/Bachillerato: 3 años.",
    tags: ["niveles educativos"],
  },
  {
    id: "primaria-ciclos",
    category: "educacion",
    question: "¿Cuánto dura la educación primaria en México?",
    answer: "6 años (6 grados).",
    tags: ["primaria"],
  },
  {
    id: "primaria-ciclo-escolar",
    category: "educacion",
    question: "En México, ¿cuánto dura el ciclo escolar primario?",
    answer: "1 año (ciclo escolar anual).",
    tags: ["ciclo escolar"],
  },
  {
    id: "educacion-obligatoria-niveles",
    category: "educacion",
    question:
      "Según la Constitución, la educación es obligatoria ¿en qué niveles académicos?",
    answer:
      "Preescolar, primaria, secundaria y preparatoria/bachillerato.",
    tags: ["obligatoria"],
  },
  {
    id: "vasconcelos-primer-sep",
    category: "educacion",
    question:
      "¿Quién fue el primer secretario de Educación Pública de México (1921)?",
    answer: "José Vasconcelos.",
    tags: ["sep", "vasconcelos"],
  },
  {
    id: "vasconcelos-lema-raza",
    category: "educacion",
    question: "¿Quién dijo la frase 'Por mi raza hablará el espíritu'?",
    answer: "José Vasconcelos (lema de la UNAM).",
    tags: ["unam", "vasconcelos", "frases"],
  },
  {
    id: "vasconcelos-frase-universidad",
    category: "educacion",
    question:
      "¿Quién dijo: 'Yo no vengo a trabajar por la universidad, sino a pedir a la universidad que trabaje por el pueblo'?",
    answer: "José Vasconcelos.",
    tags: ["unam", "vasconcelos", "frases"],
  },

  // ─── National symbols ──────────────────────────────────────────
  {
    id: "simbolos-patrios",
    category: "simbolos",
    question: "¿Cuáles son los símbolos patrios de México?",
    answer: "La Bandera, el Himno Nacional y el Escudo Nacional.",
    tags: ["simbolos"],
  },
  {
    id: "simbolos-himno-1943",
    category: "simbolos",
    question:
      "¿Cuál de los símbolos patrios fue reconocido oficialmente en 1943 durante la presidencia de Manuel Ávila Camacho?",
    answer: "El Himno Nacional.",
    tags: ["himno"],
  },
  {
    id: "himno-creacion",
    category: "simbolos",
    question: "¿Cuándo fue creado el Himno Nacional?",
    answer:
      "El 13 de septiembre de 1854 (estrenado en el Gran Teatro de Santa Anna).",
    tags: ["himno"],
  },
  {
    id: "himno-letra",
    category: "simbolos",
    question: "¿Quién escribió la letra del Himno Nacional?",
    answer: "El poeta potosino Francisco González Bocanegra.",
    tags: ["himno"],
  },
  {
    id: "himno-musica",
    category: "simbolos",
    question: "¿Quién compuso la música del Himno Nacional?",
    answer: "Jaime Nunó.",
    tags: ["himno"],
  },
  {
    id: "himno-tema",
    category: "simbolos",
    question: "El tema dominante del Himno Nacional Mexicano",
    answer: "Una exhortación a la guerra defensiva.",
    tags: ["himno"],
  },
  {
    id: "bandera-colores",
    category: "simbolos",
    question: "Colores de la bandera de México, de izquierda a derecha",
    answer: "Verde, blanco y rojo.",
    tags: ["bandera"],
  },
  {
    id: "escudo-significado",
    category: "simbolos",
    question:
      "El águila y la serpiente que aparecen en el escudo nacional mexicano (incluido en la franja blanca de la bandera):",
    answer: "Evocan una leyenda prehispánica (la fundación de Tenochtitlán).",
    tags: ["escudo"],
  },
  {
    id: "animal-nacional",
    category: "simbolos",
    question: "Animal nacional de México",
    answer: "El águila real (Aquila chrysaetos).",
    tags: ["animal nacional"],
  },
  {
    id: "flor-nacional",
    category: "simbolos",
    question: "Flor nacional de México",
    answer: "La Dalia (declarada flor nacional en 1963).",
    tags: ["flor nacional"],
  },
  {
    id: "arbol-nacional",
    category: "simbolos",
    question: "Árbol nacional de México",
    answer: "El Ahuehuete.",
    tags: ["arbol nacional"],
  },
];
