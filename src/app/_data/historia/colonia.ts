import type { HistoriaEntry } from "./types";

/**
 * Conquest and Viceroyalty (1519–1821). Hernán Cortés, New Spain,
 * colonial institutions (Encomienda, Visitador, Real Hacienda,
 * Tribunal de la Acordada), evangelization, mestizaje, Sor Juana.
 */
export const ENTRIES_COLONIA: HistoriaEntry[] = [
  // ─── Conquest ──────────────────────────────────────────────────
  {
    id: "salida-espana",
    category: "colonia",
    subcategory: "conquista",
    question: "¿Por qué los conquistadores españoles salieron de España?",
    answer:
      "Buscando riquezas (oro, plata) y nuevas rutas comerciales hacia Asia.",
    tags: ["conquista"],
  },
  {
    id: "conquistador-mexica",
    category: "colonia",
    subcategory: "conquista",
    question: "Nombre del conquistador que derrotó al Imperio Mexica",
    answer: "Hernán Cortés.",
    tags: ["conquista", "cortes"],
  },
  {
    id: "ano-conquista",
    category: "colonia",
    subcategory: "conquista",
    question: "Año en que los españoles conquistaron México-Tenochtitlán",
    answer: "1521 (13 de agosto).",
    tags: ["conquista", "1521"],
  },
  {
    id: "villa-rica",
    category: "colonia",
    subcategory: "conquista",
    question: "¿Quién creó Villa Rica de la Vera Cruz?",
    answer: "Hernán Cortés.",
    tags: ["conquista", "veracruz"],
  },
  {
    id: "villa-rica-fundacion",
    category: "colonia",
    subcategory: "conquista",
    question: "¿Cuándo se fundó Villa Rica de la Vera Cruz?",
    answer: "El 10 de julio de 1519.",
    tags: ["veracruz", "1519"],
  },
  {
    id: "villa-rica-que-es",
    category: "colonia",
    subcategory: "conquista",
    question: "¿Qué es la Villa Rica de la Vera Cruz?",
    answer:
      "El nombre que Hernán Cortés dio al primer ayuntamiento de la América Continental; hoy es la ciudad de Veracruz.",
    tags: ["veracruz", "ayuntamiento"],
  },
  {
    id: "malinche",
    category: "colonia",
    subcategory: "conquista",
    question: "¿Quién era la intérprete de Hernán Cortés?",
    answer: "La Malinche (Malintzin, doña Marina).",
    tags: ["conquista", "malinche"],
  },
  {
    id: "noche-triste",
    category: "colonia",
    subcategory: "conquista",
    question:
      "¿Cómo se llamó la batalla en la que los aztecas derrotaron a los españoles, donde Cortés perdió hombres, caballos y cañones en 1520?",
    answer: "La Noche Triste.",
    tags: ["conquista", "noche triste"],
  },
  {
    id: "cuitlahuac-noche-triste",
    category: "colonia",
    subcategory: "conquista",
    question:
      "Líder prehispánico que lideró la victoria mexica durante la Noche Triste",
    answer: "Cuitláhuac.",
    tags: ["conquista", "cuitlahuac"],
  },
  {
    id: "ahuehuete-noche-triste",
    category: "colonia",
    subcategory: "conquista",
    question:
      "¿Cómo se llama el árbol donde lloró Hernán Cortés el día de la Noche Triste? (también es el árbol nacional)",
    answer: "El Ahuehuete.",
    tags: ["arbol nacional", "ahuehuete"],
  },

  // ─── Viceroyalty: name, authority and organization ───────────────
  {
    id: "nueva-espana-nombre",
    category: "colonia",
    question: "Nombre de México durante el periodo colonial",
    answer: "Nueva España (Virreinato de la Nueva España).",
    tags: ["virreinato"],
  },
  {
    id: "max-autoridad-civil",
    category: "colonia",
    subcategory: "instituciones",
    question: "La máxima autoridad civil en la Nueva España era el:",
    answer: "El Virrey.",
    tags: ["virreinato", "virrey"],
  },
  {
    id: "max-autoridad-quien",
    category: "colonia",
    subcategory: "instituciones",
    question: "¿Quién era la máxima autoridad en la Nueva España?",
    answer: "El Virrey.",
    tags: ["virreinato", "virrey"],
  },
  {
    id: "segundo-virrey",
    category: "colonia",
    subcategory: "virreyes",
    question: "Segundo virrey de la Nueva España",
    answer: "Luis de Velasco y Ruiz de Alarcón.",
    tags: ["virreyes"],
  },
  {
    id: "ultimo-virrey",
    category: "colonia",
    subcategory: "virreyes",
    question: "¿Quién fue el último virrey de la Nueva España?",
    answer: "Juan Ruiz de Apodaca.",
    tags: ["virreyes"],
  },
  {
    id: "encomienda-visitador",
    category: "colonia",
    subcategory: "instituciones",
    question:
      "La 'Encomienda' y el 'Visitador' fueron instituciones...",
    answer: "Coloniales.",
    tags: ["instituciones coloniales"],
  },
  {
    id: "leyes-nuevas",
    category: "colonia",
    subcategory: "instituciones",
    question:
      "¿Cuáles fueron las leyes para el buen tratamiento y conservación de los indios?",
    answer: "Las Leyes Nuevas (1542).",
    tags: ["leyes nuevas", "indios"],
  },
  {
    id: "peones-hacienda",
    category: "colonia",
    subcategory: "sociedad",
    question:
      "En la época colonial, ¿a quiénes se les llamaba peones?",
    answer: "A los trabajadores asalariados de las haciendas.",
    tags: ["sociedad colonial", "haciendas"],
  },
  {
    id: "mestizo",
    category: "colonia",
    subcategory: "sociedad",
    question: "¿Qué es un mestizo?",
    answer: "Hijo de español(a) e indio(a).",
    tags: ["castas", "mestizaje"],
  },
  {
    id: "plata-mineral",
    category: "colonia",
    subcategory: "economia",
    question: "El mineral que más se extraía en la Nueva España era:",
    answer: "La plata.",
    tags: ["mineria"],
  },
  {
    id: "union-de-armas",
    category: "colonia",
    subcategory: "economia",
    question:
      "Esquema imperial por el cual se exigía el pago de los más ricos para contribuir al gobierno",
    answer: "La Unión de Armas.",
    tags: ["economia colonial", "fiscal"],
  },
  {
    id: "real-hacienda",
    category: "colonia",
    subcategory: "economia",
    question:
      "Nombre del sistema financiero donde se exigía a grandes consorcios contribuir al mantenimiento de la Corona",
    answer: "La Real Hacienda (Cajas de la Real Hacienda).",
    tags: ["economia colonial", "fiscal"],
  },
  {
    id: "tribunal-acordada",
    category: "colonia",
    subcategory: "instituciones",
    question:
      "Institución creada para compensar las falencias del sistema judicial en la Nueva España",
    answer: "El Tribunal de la Acordada.",
    tags: ["instituciones coloniales"],
  },
  {
    id: "nueva-vizcaya",
    category: "colonia",
    subcategory: "territorio",
    question:
      "Estados actuales que conformaban la Nueva Vizcaya en la época colonial",
    answer: "Durango, Chihuahua y Sinaloa.",
    tags: ["nueva vizcaya", "territorio"],
  },
  {
    id: "nueva-vizcaya-primera",
    category: "colonia",
    subcategory: "territorio",
    question:
      "Fue la primera provincia en ser explorada y fundada en el norte de México durante el virreinato",
    answer: "La Nueva Vizcaya.",
    tags: ["nueva vizcaya"],
  },
  {
    id: "intendencia-arizpe",
    category: "colonia",
    subcategory: "territorio",
    question:
      "Primera intendencia u oficialía de la Nueva España, fundada en 1770",
    answer:
      "La Intendencia de Arizpe (correspondía a los actuales estados de Sonora y Sinaloa).",
    tags: ["intendencias", "1770"],
  },
  {
    id: "acapulco-pacifico",
    category: "colonia",
    subcategory: "economia",
    question:
      "Acapulco fue durante los siglos XVII y XVIII un importante puerto porque controlaba la navegación en el:",
    answer:
      "Océano Pacífico (era la terminal mexicana del Galeón de Manila / Nao de China).",
    tags: ["acapulco", "galeon de manila"],
  },

  // ─── Culture of New Spain ────────────────────────────────────────
  {
    id: "sor-juana",
    category: "colonia",
    subcategory: "cultura",
    question: "Nombre de la poetisa más importante de la época novohispana",
    answer: "Sor Juana Inés de la Cruz.",
    tags: ["sor juana", "literatura novohispana"],
  },
  {
    id: "sor-juana-frase",
    category: "colonia",
    subcategory: "cultura",
    question:
      "¿Quién dijo: 'Hombres necios que acusáis a la mujer sin razón, sin ver que vos sois la ocasión de lo mismo que culpáis'?",
    answer: "Sor Juana Inés de la Cruz.",
    tags: ["sor juana", "literatura"],
  },
  {
    id: "imprenta-1539",
    category: "colonia",
    subcategory: "cultura",
    question: "Año en que se creó la primera imprenta de México",
    answer: "1539.",
    tags: ["imprenta", "1539"],
  },
  {
    id: "gaceta-de-mexico",
    category: "colonia",
    subcategory: "cultura",
    question: "Nombre del periódico creado en el siglo XVIII en la Nueva España",
    answer: "La Gaceta de México.",
    tags: ["prensa colonial"],
  },
  {
    id: "grandeza-mexicana",
    category: "colonia",
    subcategory: "cultura",
    question:
      "Poema que escribió Bernardo de Balbuena sobre la Nueva España en 1604",
    answer: "La Grandeza Mexicana.",
    tags: ["balbuena", "literatura"],
  },
  {
    id: "colegio-santa-cruz",
    category: "colonia",
    subcategory: "educacion",
    question:
      "Primera institución de educación superior para indígenas durante la colonia",
    answer:
      "El Colegio de la Santa Cruz de Santiago Tlatelolco (escuela de los nobles indígenas en el Virreinato).",
    tags: ["educacion", "tlatelolco"],
  },
  {
    id: "palacio-axayacatl",
    category: "colonia",
    subcategory: "cultura",
    question: "El Palacio de Axayácatl es también conocido como...",
    answer: "Las Casas Viejas (donde se hospedó Hernán Cortés con Moctezuma).",
    tags: ["axayacatl", "casas viejas"],
  },
  {
    id: "palacio-nacional-origen",
    category: "colonia",
    subcategory: "cultura",
    question:
      "El Palacio Nacional, actual sede del Poder Ejecutivo Federal, ¿como qué se construyó inicialmente?",
    answer:
      "Como segunda casa de Hernán Cortés, también llamadas 'Casas Nuevas'.",
    tags: ["palacio nacional"],
  },
  {
    id: "consolidacion-colonial",
    category: "colonia",
    subcategory: "periodos",
    question: "¿Cuándo se consolida la etapa colonial?",
    answer: "Entre 1530 y 1560.",
    tags: ["periodos coloniales"],
  },
  {
    id: "periodo-conquista",
    category: "colonia",
    subcategory: "periodos",
    question: "El periodo fundacional de la conquista fue:",
    answer: "De 1519 a 1610.",
    tags: ["periodos coloniales"],
  },
];
