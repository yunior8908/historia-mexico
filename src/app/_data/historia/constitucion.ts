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
  },
  {
    id: "cpeum-rige-mex-extranjeros",
    category: "constitucion",
    question:
      "¿Qué documento rige a los extranjeros y a los mexicanos en el territorio nacional, y otorga derechos a los mexicanos?",
    answer: "La Constitución Política de los Estados Unidos Mexicanos.",
    tags: ["cpeum", "derechos"],
  },
  {
    id: "cpeum-firma",
    category: "constitucion",
    question: "¿En qué año y dónde se firmó la Constitución que nos rige actualmente?",
    answer: "El 5 de febrero de 1917, en Querétaro.",
    tags: ["1917", "queretaro"],
  },
  {
    id: "5-febrero",
    category: "constitucion",
    question: "¿Qué se celebra el 5 de febrero?",
    answer: "La promulgación de la Constitución Política de 1917.",
    tags: ["fechas civicas"],
  },
  {
    id: "primera-constitucion",
    category: "constitucion",
    question: "¿Cuál fue la primera constitución del México independiente?",
    answer: "La Constitución Federal de los Estados Unidos Mexicanos de 1824.",
    tags: ["1824", "republica federal"],
  },
  {
    id: "zocalo-nombre",
    category: "constitucion",
    question:
      "La Plaza de la Constitución (Zócalo) recibe su nombre en honor a ¿cuál constitución?",
    answer: "La Constitución de Cádiz de 1812.",
    tags: ["zocalo", "cadiz"],
  },
  {
    id: "art-1",
    category: "constitucion",
    subcategory: "articulos",
    question:
      "¿Cuál es el artículo de la Constitución que prohíbe la esclavitud y habla sobre los derechos humanos y la no discriminación?",
    answer: "El Artículo 1.",
    tags: ["articulos", "derechos humanos"],
  },
  {
    id: "art-2",
    category: "constitucion",
    subcategory: "articulos",
    question:
      "¿Cuál es el artículo de la Constitución que reconoce a la Nación como pluricultural y los derechos de los pueblos indígenas?",
    answer: "El Artículo 2.",
    tags: ["articulos", "pueblos indigenas", "pluricultural"],
  },
  {
    id: "art-3",
    category: "constitucion",
    subcategory: "articulos",
    question: "¿Cuál es el artículo de la Constitución que rige la educación?",
    answer:
      "El Artículo 3. Establece que la educación impartida por el Estado será laica, gratuita, obligatoria y de calidad.",
    tags: ["articulos", "educacion"],
  },
  {
    id: "art-3-caracteristicas",
    category: "constitucion",
    subcategory: "articulos",
    question: "Según la Constitución, ¿cómo debe ser la educación en México?",
    answer: "Laica, gratuita, obligatoria y de calidad.",
    tags: ["articulos", "educacion"],
  },
  {
    id: "art-5",
    category: "constitucion",
    subcategory: "articulos",
    question:
      "¿Cuál artículo de la Constitución habla sobre la libertad de trabajo?",
    answer: "El Artículo 5.",
    tags: ["articulos", "trabajo"],
  },
  {
    id: "art-6",
    category: "constitucion",
    subcategory: "articulos",
    question:
      "¿Cuál artículo de la Constitución habla sobre la libertad de expresión?",
    answer: "El Artículo 6.",
    tags: ["articulos", "libertad expresion"],
  },
  {
    id: "art-8",
    category: "constitucion",
    subcategory: "articulos",
    question:
      "¿Cuál artículo de la Constitución habla sobre el derecho de petición?",
    answer: "El Artículo 8.",
    tags: ["articulos", "peticion"],
  },
  {
    id: "art-31",
    category: "constitucion",
    subcategory: "articulos",
    question:
      "¿Cuál artículo de la Constitución habla sobre las obligaciones de los mexicanos?",
    answer: "El Artículo 31.",
    tags: ["articulos", "obligaciones"],
  },
  {
    id: "art-33",
    category: "constitucion",
    subcategory: "articulos",
    question: "¿Cuál artículo de la Constitución habla sobre los extranjeros?",
    answer: "El Artículo 33.",
    tags: ["articulos", "extranjeros"],
  },
  {
    id: "art-35",
    category: "constitucion",
    subcategory: "articulos",
    question:
      "¿Cuál artículo de la Constitución trata sobre los derechos de los ciudadanos?",
    answer: "El Artículo 35.",
    tags: ["articulos", "ciudadania"],
  },
  {
    id: "art-37-naturalizacion",
    category: "constitucion",
    subcategory: "articulos",
    question:
      "¿Cuál es el artículo de la Constitución que explica cómo se puede perder la naturalización?",
    answer: "El Artículo 37.",
    tags: ["articulos", "nacionalidad", "naturalizacion"],
  },
  {
    id: "congreso-organo-legislativo",
    category: "constitucion",
    subcategory: "poderes",
    question: "¿Cuál es el órgano depositario del Poder Legislativo en México?",
    answer:
      "El Congreso de la Unión, integrado por la Cámara de Diputados y la Cámara de Senadores.",
    tags: ["poder legislativo", "congreso"],
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
  },
  {
    id: "senadores-cuantos",
    category: "constitucion",
    subcategory: "poderes",
    question: "¿Cuántos senadores tiene el Congreso de la Unión?",
    answer: "128 senadores.",
    tags: ["senado"],
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
  },
  {
    id: "diputados-cuantos",
    category: "constitucion",
    subcategory: "poderes",
    question: "¿Cuántos diputados integran el Congreso de la Unión?",
    answer: "500 diputados federales.",
    tags: ["diputados"],
  },
  {
    id: "distritos-electorales",
    category: "constitucion",
    subcategory: "poderes",
    question: "¿Cuántos distritos electorales hay en México?",
    answer: "300 distritos electorales federales uninominales.",
    tags: ["distritos", "elecciones"],
  },
  {
    id: "diputado-federal-representa",
    category: "constitucion",
    subcategory: "poderes",
    question: "¿A quién representa un diputado federal?",
    answer:
      "A la ciudadanía de su distrito electoral; en conjunto, representan a la población mexicana.",
    tags: ["diputados"],
  },
  {
    id: "magistrados-suprema",
    category: "constitucion",
    subcategory: "poderes",
    question:
      "¿Cuántos magistrados (ministros) integran la Suprema Corte de Justicia de la Nación?",
    answer: "11 ministros.",
    tags: ["poder judicial", "scjn"],
  },
  {
    id: "poder-judicial",
    category: "constitucion",
    subcategory: "poderes",
    question: "¿Quién imparte la justicia en México?",
    answer:
      "El Poder Judicial, con división federal (encabezado por la SCJN) y estatal.",
    tags: ["poder judicial"],
  },
  {
    id: "presidente-comandante",
    category: "constitucion",
    subcategory: "poderes",
    question:
      "¿Quién es el máximo comandante de las Fuerzas Armadas en México?",
    answer: "El Presidente de la República.",
    tags: ["poder ejecutivo", "fuerzas armadas"],
  },
  {
    id: "elecciones-presidente",
    category: "constitucion",
    subcategory: "elecciones",
    question: "¿Cuándo se celebran las elecciones presidenciales en México?",
    answer: "El primer domingo de junio, cada 6 años.",
    tags: ["elecciones"],
  },
  {
    id: "voto-mujer-decreto",
    category: "constitucion",
    subcategory: "elecciones",
    question: "¿Cuándo se decretó el derecho al voto de la mujer en México?",
    answer:
      "El 17 de octubre de 1953, durante la presidencia de Adolfo Ruiz Cortines (reforma a los artículos 34 y 115).",
    tags: ["mujeres", "sufragio"],
  },
  {
    id: "voto-mujer-primera-vez",
    category: "constitucion",
    subcategory: "elecciones",
    question: "¿Cuándo votaron las mujeres por primera vez en una elección federal?",
    answer: "El 3 de julio de 1955.",
    tags: ["mujeres", "sufragio"],
  },
  {
    id: "voto-exterior",
    category: "constitucion",
    subcategory: "elecciones",
    question: "¿En qué año iniciaron los mexicanos a votar desde el extranjero?",
    answer: "En 2005 (primera elección con voto desde el exterior: 2006).",
    tags: ["voto exterior"],
  },
  {
    id: "embajadas-cuantas",
    category: "constitucion",
    subcategory: "relaciones-exteriores",
    question: "¿Cuántas embajadas tiene México en el extranjero?",
    answer: "Aproximadamente 80 embajadas.",
    tags: ["embajadas"],
  },
  {
    id: "consulados-cuantos",
    category: "constitucion",
    subcategory: "relaciones-exteriores",
    question: "¿Cuántos consulados tiene México?",
    answer: "Aproximadamente 67 consulados.",
    tags: ["consulados"],
  },
  {
    id: "fronteras",
    category: "constitucion",
    subcategory: "relaciones-exteriores",
    question: "¿Con qué países tiene frontera México?",
    answer: "Estados Unidos al norte; Guatemala y Belice al sur.",
    tags: ["fronteras", "geopolitica"],
  },
];
