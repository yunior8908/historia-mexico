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
    choices: {
      correct:
        "Buscando riquezas (oro, plata) y nuevas rutas comerciales hacia Asia.",
      distractors: [
        "Para escapar de la persecución religiosa que sufrían en su país.",
        "Por órdenes directas del Papa para evangelizar el Lejano Oriente.",
        "Para colonizar territorios ya descubiertos por los portugueses en África.",
      ],
    },
  },
  {
    id: "conquistador-mexica",
    category: "colonia",
    subcategory: "conquista",
    question: "Nombre del conquistador que derrotó al Imperio Mexica",
    answer: "Hernán Cortés.",
    tags: ["conquista", "cortes"],
    choices: {
      correct: "Hernán Cortés.",
      distractors: [
        "Francisco Pizarro.",
        "Pedro de Alvarado.",
        "Pánfilo de Narváez.",
      ],
    },
  },
  {
    id: "ano-conquista",
    category: "colonia",
    subcategory: "conquista",
    question: "Año en que los españoles conquistaron México-Tenochtitlán",
    answer: "1521 (13 de agosto).",
    tags: ["conquista", "1521"],
    choices: {
      correct: "1521 (13 de agosto).",
      distractors: [
        "1519 (8 de noviembre).",
        "1520 (30 de junio).",
        "1522 (24 de agosto).",
      ],
    },
  },
  {
    id: "villa-rica",
    category: "colonia",
    subcategory: "conquista",
    question: "¿Quién creó Villa Rica de la Vera Cruz?",
    answer: "Hernán Cortés.",
    tags: ["conquista", "veracruz"],
    choices: {
      correct: "Hernán Cortés.",
      distractors: [
        "Pedro de Alvarado.",
        "Diego Velázquez de Cuéllar.",
        "Cristóbal de Olid.",
      ],
    },
  },
  {
    id: "villa-rica-fundacion",
    category: "colonia",
    subcategory: "conquista",
    question: "¿Cuándo se fundó Villa Rica de la Vera Cruz?",
    answer: "El 10 de julio de 1519.",
    tags: ["veracruz", "1519"],
    choices: {
      correct: "El 10 de julio de 1519.",
      distractors: [
        "El 22 de abril de 1519.",
        "El 8 de noviembre de 1519.",
        "El 13 de agosto de 1521.",
      ],
    },
  },
  {
    id: "villa-rica-que-es",
    category: "colonia",
    subcategory: "conquista",
    question: "¿Qué es la Villa Rica de la Vera Cruz?",
    answer:
      "El nombre que Hernán Cortés dio al primer ayuntamiento de la América Continental; hoy es la ciudad de Veracruz.",
    tags: ["veracruz", "ayuntamiento"],
    choices: {
      correct:
        "El nombre que Hernán Cortés dio al primer ayuntamiento de la América Continental; hoy es la ciudad de Veracruz.",
      distractors: [
        "El nombre del primer puerto fortificado que los españoles levantaron en Cuba; hoy es La Habana.",
        "El nombre que Cortés dio a la primera catedral del continente; hoy es la Catedral de Puebla.",
        "El nombre del primer fuerte militar construido en Yucatán; hoy es la ciudad de Campeche.",
      ],
    },
  },
  {
    id: "malinche",
    category: "colonia",
    subcategory: "conquista",
    question: "¿Quién era la intérprete de Hernán Cortés?",
    answer: "La Malinche (Malintzin, doña Marina).",
    tags: ["conquista", "malinche"],
    choices: {
      correct: "La Malinche (Malintzin, doña Marina).",
      distractors: [
        "Tecuichpo (doña Isabel de Moctezuma).",
        "Tecuelhuetzin (doña Luisa de Tlaxcala).",
        "Xochitl, princesa tlaxcalteca.",
      ],
    },
  },
  {
    id: "noche-triste",
    category: "colonia",
    subcategory: "conquista",
    question:
      "¿Cómo se llamó la batalla en la que los aztecas derrotaron a los españoles, donde Cortés perdió hombres, caballos y cañones en 1520?",
    answer: "La Noche Triste.",
    tags: ["conquista", "noche triste"],
    choices: {
      correct: "La Noche Triste.",
      distractors: [
        "La Batalla de Otumba.",
        "La Batalla de Centla.",
        "El Sitio de Tenochtitlan.",
      ],
    },
  },
  {
    id: "cuitlahuac-noche-triste",
    category: "colonia",
    subcategory: "conquista",
    question:
      "Líder prehispánico que lideró la victoria mexica durante la Noche Triste",
    answer: "Cuitláhuac.",
    tags: ["conquista", "cuitlahuac"],
    choices: {
      correct: "Cuitláhuac.",
      distractors: ["Moctezuma II.", "Cuauhtémoc.", "Axayácatl."],
    },
  },
  {
    id: "ahuehuete-noche-triste",
    category: "colonia",
    subcategory: "conquista",
    question:
      "¿Cómo se llama el árbol donde lloró Hernán Cortés el día de la Noche Triste? (también es el árbol nacional)",
    answer: "El Ahuehuete.",
    tags: ["arbol nacional", "ahuehuete"],
    choices: {
      correct: "El Ahuehuete.",
      distractors: ["El Amate.", "El Fresno.", "El Ahuejote."],
    },
  },

  // ─── Viceroyalty: name, authority and organization ───────────────
  {
    id: "nueva-espana-nombre",
    category: "colonia",
    question: "Nombre de México durante el periodo colonial",
    answer: "Nueva España (Virreinato de la Nueva España).",
    tags: ["virreinato"],
    choices: {
      correct: "Nueva España (Virreinato de la Nueva España).",
      distractors: [
        "Nueva Galicia (Virreinato de la Nueva Galicia).",
        "Nueva Castilla (Virreinato de la Nueva Castilla).",
        "Nueva Granada (Virreinato de la Nueva Granada).",
      ],
    },
  },
  {
    id: "max-autoridad-civil",
    category: "colonia",
    subcategory: "instituciones",
    question: "La máxima autoridad civil en la Nueva España era el:",
    answer: "El Virrey.",
    tags: ["virreinato", "virrey"],
    choices: {
      correct: "El Virrey.",
      distractors: ["El Gobernador.", "El Capitán General.", "El Oidor."],
    },
  },
  {
    id: "max-autoridad-quien",
    category: "colonia",
    subcategory: "instituciones",
    question: "¿Quién era la máxima autoridad en la Nueva España?",
    answer: "El Virrey.",
    tags: ["virreinato", "virrey"],
    choices: {
      correct: "El Virrey.",
      distractors: ["El Corregidor.", "El Intendente.", "El Alcalde Mayor."],
    },
  },
  {
    id: "segundo-virrey",
    category: "colonia",
    subcategory: "virreyes",
    question: "Segundo virrey de la Nueva España",
    answer: "Luis de Velasco y Ruiz de Alarcón.",
    tags: ["virreyes"],
    choices: {
      correct: "Luis de Velasco y Ruiz de Alarcón.",
      distractors: [
        "Gastón de Peralta, marqués de Falces.",
        "Martín Enríquez de Almansa.",
        "Lorenzo Suárez de Mendoza.",
      ],
    },
  },
  {
    id: "ultimo-virrey",
    category: "colonia",
    subcategory: "virreyes",
    question: "¿Quién fue el último virrey de la Nueva España?",
    answer: "Juan Ruiz de Apodaca.",
    tags: ["virreyes"],
    choices: {
      correct: "Juan Ruiz de Apodaca.",
      distractors: [
        "Félix María Calleja del Rey.",
        "Francisco Javier Venegas.",
        "Pedro de Garibay.",
      ],
    },
  },
  {
    id: "encomienda-visitador",
    category: "colonia",
    subcategory: "instituciones",
    question:
      "La 'Encomienda' y el 'Visitador' fueron instituciones...",
    answer: "Coloniales.",
    tags: ["instituciones coloniales"],
    choices: {
      correct: "Coloniales.",
      distractors: ["Prehispánicas.", "Republicanas.", "Eclesiásticas."],
    },
  },
  {
    id: "leyes-nuevas",
    category: "colonia",
    subcategory: "instituciones",
    question:
      "¿Cuáles fueron las leyes para el buen tratamiento y conservación de los indios?",
    answer: "Las Leyes Nuevas (1542).",
    tags: ["leyes nuevas", "indios"],
    choices: {
      correct: "Las Leyes Nuevas (1542).",
      distractors: [
        "Las Ordenanzas de Intendentes (1786).",
        "Las Ordenanzas de Descubrimiento y Población (1573).",
        "Las Siete Partidas (1265).",
      ],
    },
  },
  {
    id: "peones-hacienda",
    category: "colonia",
    subcategory: "sociedad",
    question:
      "En la época colonial, ¿a quiénes se les llamaba peones?",
    answer: "A los trabajadores asalariados de las haciendas.",
    tags: ["sociedad colonial", "haciendas"],
    choices: {
      correct: "A los trabajadores asalariados de las haciendas.",
      distractors: [
        "A los esclavos africanos llevados a trabajar en las minas.",
        "A los soldados de infantería del ejército virreinal.",
        "A los comerciantes ambulantes de las grandes ciudades.",
      ],
    },
  },
  {
    id: "mestizo",
    category: "colonia",
    subcategory: "sociedad",
    question: "¿Qué es un mestizo?",
    answer: "Hijo de español(a) e indio(a).",
    tags: ["castas", "mestizaje"],
    choices: {
      correct: "Hijo de español(a) e indio(a).",
      distractors: [
        "Hijo de español(a) y africano(a).",
        "Hijo de indio(a) y africano(a).",
        "Hijo de español(a) y mestizo(a).",
      ],
    },
  },
  {
    id: "plata-mineral",
    category: "colonia",
    subcategory: "economia",
    question: "El mineral que más se extraía en la Nueva España era:",
    answer: "La plata.",
    tags: ["mineria"],
    choices: {
      correct: "La plata.",
      distractors: ["El oro.", "El cobre.", "El mercurio."],
    },
  },
  {
    id: "union-de-armas",
    category: "colonia",
    subcategory: "economia",
    question:
      "Esquema imperial por el cual se exigía el pago de los más ricos para contribuir al gobierno",
    answer: "La Unión de Armas.",
    tags: ["economia colonial", "fiscal"],
    choices: {
      correct: "La Unión de Armas.",
      distractors: [
        "El Real Situado.",
        "La Bula de la Santa Cruzada.",
        "El Donativo Gracioso.",
      ],
    },
  },
  {
    id: "real-hacienda",
    category: "colonia",
    subcategory: "economia",
    question:
      "Nombre del sistema financiero donde se exigía a grandes consorcios contribuir al mantenimiento de la Corona",
    answer: "La Real Hacienda (Cajas de la Real Hacienda).",
    tags: ["economia colonial", "fiscal"],
    choices: {
      correct: "La Real Hacienda (Cajas de la Real Hacienda).",
      distractors: [
        "El Consulado de Comerciantes (Cajas del Consulado).",
        "La Casa de Contratación (Cajas de Sevilla).",
        "El Tribunal de Cuentas (Cajas del Tribunal).",
      ],
    },
  },
  {
    id: "tribunal-acordada",
    category: "colonia",
    subcategory: "instituciones",
    question:
      "Institución creada para compensar las falencias del sistema judicial en la Nueva España",
    answer: "El Tribunal de la Acordada.",
    tags: ["instituciones coloniales"],
    choices: {
      correct: "El Tribunal de la Acordada.",
      distractors: [
        "El Tribunal del Santo Oficio.",
        "El Tribunal de la Mesta.",
        "El Tribunal del Protomedicato.",
      ],
    },
  },
  {
    id: "nueva-vizcaya",
    category: "colonia",
    subcategory: "territorio",
    question:
      "Estados actuales que conformaban la Nueva Vizcaya en la época colonial",
    answer: "Durango, Chihuahua y Sinaloa.",
    tags: ["nueva vizcaya", "territorio"],
    choices: {
      correct: "Durango, Chihuahua y Sinaloa.",
      distractors: [
        "Coahuila, Nuevo León y Tamaulipas.",
        "Sonora, Baja California y Nayarit.",
        "Zacatecas, Aguascalientes y San Luis Potosí.",
      ],
    },
  },
  {
    id: "nueva-vizcaya-primera",
    category: "colonia",
    subcategory: "territorio",
    question:
      "Fue la primera provincia en ser explorada y fundada en el norte de México durante el virreinato",
    answer: "La Nueva Vizcaya.",
    tags: ["nueva vizcaya"],
    choices: {
      correct: "La Nueva Vizcaya.",
      distractors: [
        "La Nueva Galicia.",
        "El Nuevo Reino de León.",
        "La Nueva Extremadura.",
      ],
    },
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
    choices: {
      correct:
        "La Intendencia de Arizpe (correspondía a los actuales estados de Sonora y Sinaloa).",
      distractors: [
        "La Intendencia de Durango (correspondía a los actuales estados de Durango y Chihuahua).",
        "La Intendencia de San Luis Potosí (correspondía a los actuales estados de San Luis Potosí y Tamaulipas).",
        "La Intendencia de Guadalajara (correspondía a los actuales estados de Jalisco y Nayarit).",
      ],
    },
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
    choices: {
      correct:
        "Océano Pacífico (era la terminal mexicana del Galeón de Manila / Nao de China).",
      distractors: [
        "Océano Atlántico (era la terminal del comercio con Sevilla y Cádiz).",
        "Mar Caribe (era la terminal del comercio con las Antillas y Cuba).",
        "Golfo de México (era la terminal de la Flota de Indias hacia La Habana).",
      ],
    },
  },

  // ─── Culture of New Spain ────────────────────────────────────────
  {
    id: "sor-juana",
    category: "colonia",
    subcategory: "cultura",
    question: "Nombre de la poetisa más importante de la época novohispana",
    answer: "Sor Juana Inés de la Cruz.",
    tags: ["sor juana", "literatura novohispana"],
    choices: {
      correct: "Sor Juana Inés de la Cruz.",
      distractors: [
        "Sor Mariana de la Encarnación.",
        "Catalina de Eslava.",
        "María de Estrada Medinilla.",
      ],
    },
  },
  {
    id: "sor-juana-frase",
    category: "colonia",
    subcategory: "cultura",
    question:
      "¿Quién dijo: 'Hombres necios que acusáis a la mujer sin razón, sin ver que vos sois la ocasión de lo mismo que culpáis'?",
    answer: "Sor Juana Inés de la Cruz.",
    tags: ["sor juana", "literatura"],
    choices: {
      correct: "Sor Juana Inés de la Cruz.",
      distractors: [
        "Leonor de Ovando.",
        "Catalina de Eslava.",
        "María de Estrada Medinilla.",
      ],
    },
  },
  {
    id: "imprenta-1539",
    category: "colonia",
    subcategory: "cultura",
    question: "Año en que se creó la primera imprenta de México",
    answer: "1539.",
    tags: ["imprenta", "1539"],
    choices: {
      correct: "1539.",
      distractors: ["1521.", "1572.", "1605."],
    },
  },
  {
    id: "gaceta-de-mexico",
    category: "colonia",
    subcategory: "cultura",
    question: "Nombre del periódico creado en el siglo XVIII en la Nueva España",
    answer: "La Gaceta de México.",
    tags: ["prensa colonial"],
    choices: {
      correct: "La Gaceta de México.",
      distractors: [
        "El Diario de México.",
        "El Mercurio Volante.",
        "El Pensador Mexicano.",
      ],
    },
  },
  {
    id: "grandeza-mexicana",
    category: "colonia",
    subcategory: "cultura",
    question:
      "Poema que escribió Bernardo de Balbuena sobre la Nueva España en 1604",
    answer: "La Grandeza Mexicana.",
    tags: ["balbuena", "literatura"],
    choices: {
      correct: "La Grandeza Mexicana.",
      distractors: [
        "El Divino Narciso.",
        "Los Infortunios de Alonso Ramírez.",
        "Primero Sueño.",
      ],
    },
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
    choices: {
      correct:
        "El Colegio de la Santa Cruz de Santiago Tlatelolco (escuela de los nobles indígenas en el Virreinato).",
      distractors: [
        "El Colegio de San Juan de Letrán (escuela para niños mestizos en el Virreinato).",
        "La Real y Pontificia Universidad de México (la primera universidad de la Nueva España).",
        "El Colegio de San Ildefonso (escuela jesuita para criollos en el Virreinato).",
      ],
    },
  },
  {
    id: "palacio-axayacatl",
    category: "colonia",
    subcategory: "cultura",
    question: "El Palacio de Axayácatl es también conocido como...",
    answer: "Las Casas Viejas (donde se hospedó Hernán Cortés con Moctezuma).",
    tags: ["axayacatl", "casas viejas"],
    choices: {
      correct:
        "Las Casas Viejas (donde se hospedó Hernán Cortés con Moctezuma).",
      distractors: [
        "Las Casas Nuevas (donde Cortés fijó su residencia tras la conquista).",
        "El Palacio de Moctezuma (sede del gobierno mexica antes de la conquista).",
        "El Templo Mayor (centro ceremonial de México-Tenochtitlan).",
      ],
    },
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
    choices: {
      correct:
        "Como segunda casa de Hernán Cortés, también llamadas 'Casas Nuevas'.",
      distractors: [
        "Como primera casa de Hernán Cortés, también llamadas 'Casas Viejas'.",
        "Como sede de la Real y Pontificia Universidad de México.",
        "Como residencia oficial del primer virrey Antonio de Mendoza.",
      ],
    },
  },
  {
    id: "consolidacion-colonial",
    category: "colonia",
    subcategory: "periodos",
    question: "¿Cuándo se consolida la etapa colonial?",
    answer: "Entre 1530 y 1560.",
    tags: ["periodos coloniales"],
    choices: {
      correct: "Entre 1530 y 1560.",
      distractors: [
        "Entre 1521 y 1535.",
        "Entre 1560 y 1590.",
        "Entre 1580 y 1610.",
      ],
    },
  },
  {
    id: "periodo-conquista",
    category: "colonia",
    subcategory: "periodos",
    question: "El periodo fundacional de la conquista fue:",
    answer: "De 1519 a 1610.",
    tags: ["periodos coloniales"],
    choices: {
      correct: "De 1519 a 1610.",
      distractors: ["De 1521 a 1600.", "De 1492 a 1521.", "De 1517 a 1550."],
    },
  },
];
