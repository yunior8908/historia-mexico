import type { HistoriaEntry } from "./types";

/**
 * Constitution of the United Mexican States (CPEUM), structure of
 * the State, branches of government, statutes and electoral system.
 */
export const ENTRIES_CONSTITUCION: HistoriaEntry[] = [
  {
    id: "cpeum-nombre",
    category: "constitucion",
    question: "¿Cómo se llama la ley fundamental de México?",
    answer: "Constitución Política de los Estados Unidos Mexicanos (CPEUM).",
    tags: ["cpeum", "ley fundamental"],
    choices: {
      correct: "Constitución Política de los Estados Unidos Mexicanos (CPEUM).",
      distractors: [
        "Carta Magna de la República Mexicana (CMRM).",
        "Constitución General de la Nación Mexicana (CGNM).",
        "Ley Suprema de los Estados Unidos Mexicanos (LSEUM).",
      ],
    },
  },
  {
    id: "cpeum-rige-mex-extranjeros",
    category: "constitucion",
    question:
      "¿Qué documento rige a los extranjeros y a los mexicanos en el territorio nacional, y otorga derechos a los mexicanos?",
    answer: "La Constitución Política de los Estados Unidos Mexicanos.",
    tags: ["cpeum", "derechos"],
    choices: {
      correct: "La Constitución Política de los Estados Unidos Mexicanos.",
      distractors: [
        "La Ley General de Población.",
        "La Ley de Migración.",
        "El Código Civil Federal.",
      ],
    },
  },
  {
    id: "cpeum-firma",
    category: "constitucion",
    question: "¿En qué año y dónde se firmó la Constitución que nos rige actualmente?",
    answer: "El 5 de febrero de 1917, en Querétaro.",
    tags: ["1917", "queretaro"],
    choices: {
      correct: "El 5 de febrero de 1917, en Querétaro.",
      distractors: [
        "El 5 de febrero de 1857, en la Ciudad de México.",
        "El 31 de enero de 1917, en Querétaro.",
        "El 1 de mayo de 1917, en Aguascalientes.",
      ],
    },
  },
  {
    id: "5-febrero",
    category: "constitucion",
    question: "¿Qué se celebra el 5 de febrero?",
    answer: "La promulgación de la Constitución Política de 1917.",
    tags: ["fechas civicas"],
    choices: {
      correct: "La promulgación de la Constitución Política de 1917.",
      distractors: [
        "La promulgación de las Leyes de Reforma de 1859.",
        "La promulgación de la Constitución de 1857.",
        "El inicio de la Revolución Mexicana de 1910.",
      ],
    },
  },
  {
    id: "primera-constitucion",
    category: "constitucion",
    question: "¿Cuál fue la primera constitución del México independiente?",
    answer: "La Constitución Federal de los Estados Unidos Mexicanos de 1824.",
    tags: ["1824", "republica federal"],
    choices: {
      correct: "La Constitución Federal de los Estados Unidos Mexicanos de 1824.",
      distractors: [
        "La Constitución de Apatzingán de 1814.",
        "La Constitución Centralista de las Siete Leyes de 1836.",
        "La Constitución Política de la Monarquía Española de 1812.",
      ],
    },
  },
  {
    id: "zocalo-nombre",
    category: "constitucion",
    question:
      "La Plaza de la Constitución (Zócalo) recibe su nombre en honor a ¿cuál constitución?",
    answer: "La Constitución de Cádiz de 1812.",
    tags: ["zocalo", "cadiz"],
    choices: {
      correct: "La Constitución de Cádiz de 1812.",
      distractors: [
        "La Constitución de Apatzingán de 1814.",
        "La Constitución Federal de 1824.",
        "La Constitución de 1857.",
      ],
    },
  },
  {
    id: "art-1",
    category: "constitucion",
    subcategory: "articulos",
    question:
      "¿Cuál es el artículo de la Constitución que prohíbe la esclavitud y habla sobre los derechos humanos y la no discriminación?",
    answer: "El Artículo 1.",
    tags: ["articulos", "derechos humanos"],
    choices: {
      correct: "El Artículo 1.",
      distractors: ["El Artículo 4.", "El Artículo 11.", "El Artículo 24."],
    },
  },
  {
    id: "art-2",
    category: "constitucion",
    subcategory: "articulos",
    question:
      "¿Cuál es el artículo de la Constitución que reconoce a la Nación como pluricultural y los derechos de los pueblos indígenas?",
    answer: "El Artículo 2.",
    tags: ["articulos", "pueblos indigenas", "pluricultural"],
    choices: {
      correct: "El Artículo 2.",
      distractors: ["El Artículo 4.", "El Artículo 27.", "El Artículo 115."],
    },
  },
  {
    id: "art-3",
    category: "constitucion",
    subcategory: "articulos",
    question: "¿Cuál es el artículo de la Constitución que rige la educación?",
    answer:
      "El Artículo 3. Establece que la educación impartida por el Estado será laica, gratuita, obligatoria y de calidad.",
    tags: ["articulos", "educacion"],
    choices: {
      correct:
        "El Artículo 3. Establece que la educación impartida por el Estado será laica, gratuita, obligatoria y de calidad.",
      distractors: [
        "El Artículo 4. Establece que toda persona tiene derecho a un medio ambiente sano y a la protección de la salud.",
        "El Artículo 31. Establece la obligación de los mexicanos de hacer que sus hijos concurran a las escuelas.",
        "El Artículo 73. Establece la facultad del Congreso para legislar en materia educativa nacional.",
      ],
    },
  },
  {
    id: "art-3-caracteristicas",
    category: "constitucion",
    subcategory: "articulos",
    question: "Según la Constitución, ¿cómo debe ser la educación en México?",
    answer: "Laica, gratuita, obligatoria y de calidad.",
    tags: ["articulos", "educacion"],
    choices: {
      correct: "Laica, gratuita, obligatoria y de calidad.",
      distractors: [
        "Pública, religiosa, opcional e integral.",
        "Privada, gratuita, voluntaria y bilingüe.",
        "Universal, mixta, técnica y militar.",
      ],
    },
  },
  {
    id: "art-5",
    category: "constitucion",
    subcategory: "articulos",
    question:
      "¿Cuál artículo de la Constitución habla sobre la libertad de trabajo?",
    answer: "El Artículo 5.",
    tags: ["articulos", "trabajo"],
    choices: {
      correct: "El Artículo 5.",
      distractors: ["El Artículo 9.", "El Artículo 11.", "El Artículo 28."],
    },
  },
  {
    id: "art-6",
    category: "constitucion",
    subcategory: "articulos",
    question:
      "¿Cuál artículo de la Constitución habla sobre la libertad de expresión?",
    answer: "El Artículo 6.",
    tags: ["articulos", "libertad expresion"],
    choices: {
      correct: "El Artículo 6.",
      distractors: ["El Artículo 9.", "El Artículo 19.", "El Artículo 24."],
    },
  },
  {
    id: "art-8",
    category: "constitucion",
    subcategory: "articulos",
    question:
      "¿Cuál artículo de la Constitución habla sobre el derecho de petición?",
    answer: "El Artículo 8.",
    tags: ["articulos", "peticion"],
    choices: {
      correct: "El Artículo 8.",
      distractors: ["El Artículo 11.", "El Artículo 14.", "El Artículo 21."],
    },
  },
  {
    id: "art-31",
    category: "constitucion",
    subcategory: "articulos",
    question:
      "¿Cuál artículo de la Constitución habla sobre las obligaciones de los mexicanos?",
    answer: "El Artículo 31.",
    tags: ["articulos", "obligaciones"],
    choices: {
      correct: "El Artículo 31.",
      distractors: ["El Artículo 30.", "El Artículo 34.", "El Artículo 38."],
    },
  },
  {
    id: "art-33",
    category: "constitucion",
    subcategory: "articulos",
    question: "¿Cuál artículo de la Constitución habla sobre los extranjeros?",
    answer: "El Artículo 33.",
    tags: ["articulos", "extranjeros"],
    choices: {
      correct: "El Artículo 33.",
      distractors: ["El Artículo 11.", "El Artículo 30.", "El Artículo 37."],
    },
  },
  {
    id: "art-35",
    category: "constitucion",
    subcategory: "articulos",
    question:
      "¿Cuál artículo de la Constitución trata sobre los derechos de los ciudadanos?",
    answer: "El Artículo 35.",
    tags: ["articulos", "ciudadania"],
    choices: {
      correct: "El Artículo 35.",
      distractors: ["El Artículo 30.", "El Artículo 38.", "El Artículo 39."],
    },
  },
  {
    id: "art-37-naturalizacion",
    category: "constitucion",
    subcategory: "articulos",
    question:
      "¿Cuál es el artículo de la Constitución que explica cómo se puede perder la naturalización?",
    answer: "El Artículo 37.",
    tags: ["articulos", "nacionalidad", "naturalizacion"],
    choices: {
      correct: "El Artículo 37.",
      distractors: ["El Artículo 30.", "El Artículo 32.", "El Artículo 34."],
    },
  },
  {
    id: "congreso-organo-legislativo",
    category: "constitucion",
    subcategory: "poderes",
    question: "¿Cuál es el órgano depositario del Poder Legislativo en México?",
    answer:
      "El Congreso de la Unión, integrado por la Cámara de Diputados y la Cámara de Senadores.",
    tags: ["poder legislativo", "congreso"],
    choices: {
      correct:
        "El Congreso de la Unión, integrado por la Cámara de Diputados y la Cámara de Senadores.",
      distractors: [
        "El Senado de la República, integrado por las legislaturas de los estados.",
        "La Asamblea Nacional, integrada por la Cámara Baja y la Cámara Alta.",
        "El Poder Legislativo Federal, integrado únicamente por la Cámara de Diputados.",
      ],
    },
  },
  {
    id: "quien-aprueba-leyes",
    category: "constitucion",
    subcategory: "poderes",
    question: "¿Quién se encarga de crear y aprobar las leyes en México?",
    answer:
      "Los diputados y senadores integrantes del Congreso de la Unión.",
    correction: {
      originalAnswer: "Disputados y senadores",
      note: "Corrección ortográfica: 'diputados', no 'disputados'.",
    },
    tags: ["poder legislativo"],
    choices: {
      correct:
        "Los diputados y senadores integrantes del Congreso de la Unión.",
      distractors: [
        "El Presidente de la República y su gabinete.",
        "Los ministros de la Suprema Corte de Justicia de la Nación.",
        "Los gobernadores y los congresos locales de los estados.",
      ],
    },
  },
  {
    id: "senadores-cuantos",
    category: "constitucion",
    subcategory: "poderes",
    question: "¿Cuántos senadores tiene el Congreso de la Unión?",
    answer: "128 senadores.",
    tags: ["senado"],
    choices: {
      correct: "128 senadores.",
      distractors: ["96 senadores.", "100 senadores.", "64 senadores."],
    },
  },
  {
    id: "senadores-representan",
    category: "constitucion",
    subcategory: "poderes",
    question: "¿A quién o qué representan los senadores?",
    answer:
      "A las entidades federativas (los estados y la Ciudad de México).",
    correction: {
      originalAnswer: "A las Entidades Federales",
      note:
        "El término correcto en la Constitución es 'entidades federativas', no 'entidades federales'.",
    },
    tags: ["senado"],
    choices: {
      correct:
        "A las entidades federativas (los estados y la Ciudad de México).",
      distractors: [
        "A los distritos electorales en que se divide el país.",
        "A los municipios de cada entidad federativa.",
        "A la población total de la República en proporción directa.",
      ],
    },
  },
  {
    id: "diputados-cuantos",
    category: "constitucion",
    subcategory: "poderes",
    question: "¿Cuántos diputados integran el Congreso de la Unión?",
    answer: "500 diputados federales.",
    tags: ["diputados"],
    choices: {
      correct: "500 diputados federales.",
      distractors: [
        "300 diputados federales.",
        "628 diputados federales.",
        "200 diputados federales.",
      ],
    },
  },
  {
    id: "distritos-electorales",
    category: "constitucion",
    subcategory: "poderes",
    question: "¿Cuántos distritos electorales hay en México?",
    answer: "300 distritos electorales federales uninominales.",
    tags: ["distritos", "elecciones"],
    choices: {
      correct: "300 distritos electorales federales uninominales.",
      distractors: [
        "200 distritos electorales federales uninominales.",
        "500 distritos electorales federales uninominales.",
        "32 distritos electorales federales uninominales.",
      ],
    },
  },
  {
    id: "diputado-federal-representa",
    category: "constitucion",
    subcategory: "poderes",
    question: "¿A quién representa un diputado federal?",
    answer:
      "A la ciudadanía de su distrito electoral; en conjunto, representan a la población mexicana.",
    tags: ["diputados"],
    choices: {
      correct:
        "A la ciudadanía de su distrito electoral; en conjunto, representan a la población mexicana.",
      distractors: [
        "A la entidad federativa que lo eligió; en conjunto, representan a los estados.",
        "Al partido político que lo postuló; en conjunto, representan a sus militantes.",
        "Al municipio donde fue electo; en conjunto, representan a los ayuntamientos.",
      ],
    },
  },
  {
    id: "magistrados-suprema",
    category: "constitucion",
    subcategory: "poderes",
    question:
      "¿Cuántos magistrados (ministros) integran la Suprema Corte de Justicia de la Nación?",
    answer: "11 ministros.",
    tags: ["poder judicial", "scjn"],
    choices: {
      correct: "11 ministros.",
      distractors: ["7 ministros.", "15 ministros.", "21 ministros."],
    },
  },
  {
    id: "poder-judicial",
    category: "constitucion",
    subcategory: "poderes",
    question: "¿Quién imparte la justicia en México?",
    answer:
      "El Poder Judicial, con división federal (encabezado por la SCJN) y estatal.",
    tags: ["poder judicial"],
    choices: {
      correct:
        "El Poder Judicial, con división federal (encabezado por la SCJN) y estatal.",
      distractors: [
        "El Poder Ejecutivo, a través de la Fiscalía General de la República.",
        "El Poder Legislativo, mediante las comisiones de justicia del Congreso.",
        "La Secretaría de Gobernación, a través de sus tribunales administrativos.",
      ],
    },
  },
  {
    id: "presidente-comandante",
    category: "constitucion",
    subcategory: "poderes",
    question:
      "¿Quién es el máximo comandante de las Fuerzas Armadas en México?",
    answer: "El Presidente de la República.",
    tags: ["poder ejecutivo", "fuerzas armadas"],
    choices: {
      correct: "El Presidente de la República.",
      distractors: [
        "El Secretario de la Defensa Nacional.",
        "El Secretario de Marina.",
        "El Jefe del Estado Mayor Presidencial.",
      ],
    },
  },
  {
    id: "elecciones-presidente",
    category: "constitucion",
    subcategory: "elecciones",
    question: "¿Cuándo se celebran las elecciones presidenciales en México?",
    answer: "El primer domingo de junio, cada 6 años.",
    tags: ["elecciones"],
    choices: {
      correct: "El primer domingo de junio, cada 6 años.",
      distractors: [
        "El primer domingo de julio, cada 6 años.",
        "El primer domingo de junio, cada 4 años.",
        "El primer domingo de septiembre, cada 6 años.",
      ],
    },
  },
  {
    id: "voto-mujer-decreto",
    category: "constitucion",
    subcategory: "elecciones",
    question: "¿Cuándo se decretó el derecho al voto de la mujer en México?",
    answer:
      "El 17 de octubre de 1953, durante la presidencia de Adolfo Ruiz Cortines (reforma a los artículos 34 y 115).",
    tags: ["mujeres", "sufragio"],
    choices: {
      correct:
        "El 17 de octubre de 1953, durante la presidencia de Adolfo Ruiz Cortines (reforma a los artículos 34 y 115).",
      distractors: [
        "El 6 de abril de 1952, durante la presidencia de Miguel Alemán Valdés (reforma a los artículos 34 y 35).",
        "El 12 de febrero de 1947, durante la presidencia de Manuel Ávila Camacho (reforma al artículo 115).",
        "El 17 de octubre de 1958, durante la presidencia de Adolfo López Mateos (reforma a los artículos 34 y 36).",
      ],
    },
  },
  {
    id: "voto-mujer-primera-vez",
    category: "constitucion",
    subcategory: "elecciones",
    question: "¿Cuándo votaron las mujeres por primera vez en una elección federal?",
    answer: "El 3 de julio de 1955.",
    tags: ["mujeres", "sufragio"],
    choices: {
      correct: "El 3 de julio de 1955.",
      distractors: [
        "El 6 de julio de 1958.",
        "El 1 de julio de 1953.",
        "El 5 de julio de 1964.",
      ],
    },
  },
  {
    id: "voto-exterior",
    category: "constitucion",
    subcategory: "elecciones",
    question: "¿En qué año iniciaron los mexicanos a votar desde el extranjero?",
    answer: "En 2005 (primera elección con voto desde el exterior: 2006).",
    tags: ["voto exterior"],
    choices: {
      correct: "En 2005 (primera elección con voto desde el exterior: 2006).",
      distractors: [
        "En 1996 (primera elección con voto desde el exterior: 2000).",
        "En 2008 (primera elección con voto desde el exterior: 2012).",
        "En 2000 (primera elección con voto desde el exterior: 2003).",
      ],
    },
  },
  {
    id: "embajadas-cuantas",
    category: "constitucion",
    subcategory: "relaciones-exteriores",
    question: "¿Cuántas embajadas tiene México en el extranjero?",
    answer: "Aproximadamente 80 embajadas.",
    tags: ["embajadas"],
    choices: {
      correct: "Aproximadamente 80 embajadas.",
      distractors: [
        "Aproximadamente 50 embajadas.",
        "Aproximadamente 120 embajadas.",
        "Aproximadamente 35 embajadas.",
      ],
    },
  },
  {
    id: "consulados-cuantos",
    category: "constitucion",
    subcategory: "relaciones-exteriores",
    question: "¿Cuántos consulados tiene México?",
    answer: "Aproximadamente 67 consulados.",
    tags: ["consulados"],
    choices: {
      correct: "Aproximadamente 67 consulados.",
      distractors: [
        "Aproximadamente 45 consulados.",
        "Aproximadamente 90 consulados.",
        "Aproximadamente 30 consulados.",
      ],
    },
  },
  {
    id: "fronteras",
    category: "constitucion",
    subcategory: "relaciones-exteriores",
    question: "¿Con qué países tiene frontera México?",
    answer: "Estados Unidos al norte; Guatemala y Belice al sur.",
    tags: ["fronteras", "geopolitica"],
    choices: {
      correct: "Estados Unidos al norte; Guatemala y Belice al sur.",
      distractors: [
        "Estados Unidos al norte; Guatemala y Honduras al sur.",
        "Estados Unidos y Canadá al norte; Belice al sur.",
        "Estados Unidos al norte; Guatemala, Belice y El Salvador al sur.",
      ],
    },
  },
];
