import type { HistoriaEntry } from "./types";

/**
 * Mexico's UNESCO heritage, the Pueblos Mágicos program (SECTUR)
 * and archaeological zones. Entries mix the three related
 * categories (`unesco`, `pueblosMagicos`, `arqueologia`) as
 * applicable.
 */
export const ENTRIES_UNESCO_Y_PUEBLOS: HistoriaEntry[] = [
  // ─── UNESCO: overview ──────────────────────────────────────────
  {
    id: "unesco-total",
    category: "unesco",
    question: "¿Cuántos Patrimonios de la Humanidad UNESCO tiene México?",
    answer: "35 sitios: 27 culturales, 6 naturales y 2 mixtos.",
    tags: ["unesco"],
  },

  // ─── UNESCO: individual sites (one per entry) ──────────────
  {
    id: "unesco-teotihuacan",
    category: "unesco",
    relatedPlanSlug: undefined,
    question: "Sitio UNESCO: ¿cuál de estos es Patrimonio de la Humanidad?",
    answer:
      "Ciudad prehispánica de Teotihuacán, Estado de México (inscrita en 1987).",
    tags: ["unesco", "teotihuacan"],
  },
  {
    id: "unesco-el-tajin",
    category: "unesco",
    question: "Sitio UNESCO en Veracruz",
    answer: "Ciudad prehispánica de El Tajín, Veracruz (1992).",
    tags: ["unesco", "el tajin"],
  },
  {
    id: "unesco-palenque",
    category: "unesco",
    question: "Sitio UNESCO en Chiapas",
    answer:
      "Ciudad prehispánica y Parque Nacional Palenque, Chiapas (1987).",
    tags: ["unesco", "palenque"],
  },
  {
    id: "unesco-monarca",
    category: "unesco",
    question: "Sitio UNESCO compartido entre Michoacán y Estado de México",
    answer:
      "Reserva de la Biósfera de la Mariposa Monarca (2008).",
    tags: ["unesco", "mariposa monarca"],
  },
  {
    id: "unesco-monumentos-tlacotalpan",
    category: "unesco",
    question: "Sitio UNESCO en Veracruz",
    answer: "Zona de monumentos históricos de Tlacotalpan, Veracruz (1998).",
    tags: ["unesco", "tlacotalpan"],
  },
  {
    id: "unesco-pinacate",
    category: "unesco",
    question: "Sitio UNESCO en Sonora",
    answer:
      "Reserva de la Biósfera El Pinacate y Gran Desierto de Altar, Sonora (2013).",
    tags: ["unesco", "pinacate"],
  },
  {
    id: "unesco-revillagigedo",
    category: "unesco",
    question: "Sitio UNESCO en el Pacífico mexicano",
    answer: "Archipiélago de Revillagigedo (2016).",
    tags: ["unesco"],
  },
  {
    id: "unesco-yagul-mitla",
    category: "unesco",
    question: "Sitio UNESCO en Oaxaca",
    answer:
      "Cuevas prehistóricas de Yagul y Mitla, en los Valles Centrales de Oaxaca (2010).",
    tags: ["unesco"],
  },
  {
    id: "unesco-morelia",
    category: "unesco",
    question: "Sitio UNESCO en Michoacán",
    answer: "Centro histórico de Morelia, Michoacán (1991).",
    tags: ["unesco"],
  },
  {
    id: "unesco-tequila",
    category: "unesco",
    question: "Sitio UNESCO en Jalisco",
    answer:
      "Paisaje de agaves y antiguas instalaciones industriales de Tequila, Jalisco (2006).",
    tags: ["unesco", "tequila"],
  },
  {
    id: "unesco-puebla",
    category: "unesco",
    question: "Sitio UNESCO en Puebla",
    answer: "Centro histórico de Puebla, Puebla (1987).",
    tags: ["unesco"],
  },
  {
    id: "unesco-queretaro",
    category: "unesco",
    question: "Sitio UNESCO en Querétaro (1996)",
    answer: "Zona de monumentos históricos de Querétaro.",
    tags: ["unesco"],
  },
  {
    id: "unesco-sierra-gorda",
    category: "unesco",
    question: "Sitio UNESCO en Querétaro (misiones)",
    answer: "Misiones franciscanas de la Sierra Gorda de Querétaro (2003).",
    tags: ["unesco"],
  },
  {
    id: "unesco-camino-real",
    category: "unesco",
    question: "Sitio UNESCO transversal (varios estados)",
    answer: "Camino Real de Tierra Adentro (2010).",
    tags: ["unesco"],
  },
  {
    id: "unesco-paquime",
    category: "unesco",
    question: "Sitio UNESCO en Chihuahua",
    answer:
      "Zona arqueológica de Paquimé (Casas Grandes), Chihuahua (1998).",
    tags: ["unesco", "paquime"],
  },
  {
    id: "unesco-cabanas",
    category: "unesco",
    question: "Sitio UNESCO en Jalisco (arquitectura)",
    answer: "Hospicio Cabañas de Guadalajara, Jalisco (1997).",
    tags: ["unesco"],
  },
  {
    id: "unesco-cu-unam",
    category: "unesco",
    question: "Sitio UNESCO en la CDMX (universidad)",
    answer:
      "Campus Central de la Ciudad Universitaria (CU) de la UNAM, CDMX (2007).",
    tags: ["unesco", "unam"],
  },
  {
    id: "unesco-barragan",
    category: "unesco",
    question: "Sitio UNESCO en la CDMX (arquitectura)",
    answer: "Casa-taller de Luis Barragán, CDMX (2004).",
    tags: ["unesco", "barragan"],
  },
  {
    id: "unesco-tembleque",
    category: "unesco",
    question:
      "Sitio UNESCO compartido entre Estado de México e Hidalgo (acueducto)",
    answer:
      "Sistema hidráulico del Acueducto del Padre Tembleque (2015).",
    tags: ["unesco"],
  },
  {
    id: "unesco-xochicalco",
    category: "unesco",
    question: "Sitio UNESCO en Morelos",
    answer:
      "Zona de monumentos arqueológicos de Xochicalco, Morelos (1999).",
    tags: ["unesco", "xochicalco"],
  },
  {
    id: "unesco-vizcaino",
    category: "unesco",
    question: "Sitio UNESCO en Baja California Sur",
    answer: "Santuario de Ballenas de El Vizcaíno (1993).",
    tags: ["unesco"],
  },
  {
    id: "unesco-san-francisco-bcs",
    category: "unesco",
    question:
      "Sitio UNESCO en Baja California Sur (pintura rupestre)",
    answer: "Pinturas rupestres de la Sierra de San Francisco, BCS (1993).",
    tags: ["unesco"],
  },
  {
    id: "unesco-zacatecas",
    category: "unesco",
    question: "Sitio UNESCO en Zacatecas",
    answer: "Centro histórico de Zacatecas, Zacatecas (1993).",
    tags: ["unesco"],
  },
  {
    id: "unesco-guanajuato",
    category: "unesco",
    question: "Sitio UNESCO en Guanajuato (ciudad)",
    answer:
      "Ciudad histórica de Guanajuato y minas adyacentes, Guanajuato (1988).",
    tags: ["unesco"],
  },
  {
    id: "unesco-san-miguel",
    category: "unesco",
    question: "Sitio UNESCO en Guanajuato (San Miguel)",
    answer:
      "Villa Protectora de San Miguel El Grande y Santuario de Jesús Nazareno de Atotonilco, Guanajuato (2008).",
    tags: ["unesco"],
  },
  {
    id: "unesco-oaxaca-monte-alban",
    category: "unesco",
    question: "Sitio UNESCO en Oaxaca (1987)",
    answer:
      "Centro histórico de Oaxaca y zona arqueológica de Monte Albán, Oaxaca.",
    tags: ["unesco", "monte alban"],
  },
  {
    id: "unesco-cdmx-xochimilco",
    category: "unesco",
    question: "Sitio UNESCO en la CDMX (1987)",
    answer: "Centro histórico de México y Xochimilco, CDMX.",
    tags: ["unesco", "cdmx"],
  },
  {
    id: "unesco-calakmul",
    category: "unesco",
    question: "Sitio UNESCO en Campeche",
    answer:
      "Antigua ciudad maya y bosques tropicales protegidos de Calakmul, Campeche (2002, ampliado en 2014).",
    tags: ["unesco", "calakmul"],
  },
  {
    id: "unesco-islas-golfo",
    category: "unesco",
    question: "Sitio UNESCO en el Golfo de California",
    answer:
      "Islas y áreas protegidas del Golfo de California (2005).",
    tags: ["unesco"],
  },

  // ─── Pueblos Mágicos (Magical Towns) ───────────────────────────────────────────
  {
    id: "pueblos-magicos-que-son",
    category: "pueblosMagicos",
    question: "¿Qué son los Pueblos Mágicos?",
    answer:
      "Pueblos reconocidos por su riqueza histórica y cultural, dentro de un programa de la Secretaría de Turismo (SECTUR).",
    tags: ["pueblos magicos"],
  },
  {
    id: "pueblos-magicos-total",
    category: "pueblosMagicos",
    question: "¿Cuántos Pueblos Mágicos hay?",
    answer: "132 pueblos mágicos (cifra reciente; la cifra oficial varía).",
    tags: ["pueblos magicos"],
  },
  {
    id: "pueblos-chiapas",
    category: "pueblosMagicos",
    question: "Pueblos Mágicos de Chiapas",
    answer:
      "Chiapa de Corzo, Comitán de Domínguez, San Cristóbal de las Casas y Palenque.",
    tags: ["pueblos magicos", "chiapas"],
  },
  {
    id: "pueblos-bc",
    category: "pueblosMagicos",
    question: "Pueblo Mágico de Baja California",
    answer: "Tecate.",
    tags: ["pueblos magicos", "bc"],
  },
  {
    id: "pueblos-bcs",
    category: "pueblosMagicos",
    question: "Pueblos Mágicos de Baja California Sur",
    answer: "Loreto, Santa Rosalía y Todos Santos.",
    tags: ["pueblos magicos", "bcs"],
  },
  {
    id: "pueblo-zacatecas",
    category: "pueblosMagicos",
    question: "Pueblo Mágico de Zacatecas",
    answer: "Jerez de García Salinas.",
    tags: ["pueblos magicos", "zacatecas"],
  },
  {
    id: "pueblos-chihuahua",
    category: "pueblosMagicos",
    question: "Pueblos Mágicos de Chihuahua",
    answer: "Batopilas, Casas Grandes y Creel.",
    tags: ["pueblos magicos", "chihuahua"],
  },
  {
    id: "pueblos-puebla",
    category: "pueblosMagicos",
    question: "Pueblos Mágicos en Puebla",
    answer: "Chignahuapan y Xicotepec (entre otros).",
    tags: ["pueblos magicos", "puebla"],
  },
  {
    id: "pueblo-edomex",
    category: "pueblosMagicos",
    question: "Pueblo Mágico del Estado de México",
    answer: "Villa del Carbón.",
    tags: ["pueblos magicos", "edomex"],
  },
  {
    id: "pueblo-michoacan",
    category: "pueblosMagicos",
    question: "Pueblo Mágico de Michoacán",
    answer: "Jiquilpan.",
    tags: ["pueblos magicos", "michoacan"],
  },
  {
    id: "pueblo-cholula",
    category: "pueblosMagicos",
    question: "¿Dónde se ubica el Pueblo Mágico de Cholula?",
    answer: "En Puebla.",
    tags: ["pueblos magicos", "puebla"],
  },
  {
    id: "izamal",
    category: "pueblosMagicos",
    question: "¿Dónde queda Izamal, pueblo mágico?",
    answer: "En Yucatán.",
    tags: ["pueblos magicos", "yucatan"],
  },
  {
    id: "pueblo-campeche",
    category: "pueblosMagicos",
    question: "Pueblo Mágico en Campeche",
    answer: "Palizada.",
    tags: ["pueblos magicos", "campeche"],
  },

  // ─── Archaeological zones ──────────────────────────────────────
  {
    id: "zonas-arqueologicas-cuantas",
    category: "arqueologia",
    question: "¿Cuántas zonas arqueológicas existen en México?",
    answer:
      "193 zonas arqueológicas abiertas al público (existen más de 2 000 registradas).",
    tags: ["arqueologia"],
  },
  {
    id: "el-tajin-ubicacion",
    category: "arqueologia",
    question: "¿Dónde se ubica la zona arqueológica de El Tajín?",
    answer: "En Papantla, Veracruz.",
    tags: ["el tajin", "veracruz"],
  },
  {
    id: "el-tajin-unesco-fecha",
    category: "arqueologia",
    question:
      "Lugar decretado Patrimonio de la Humanidad por la UNESCO en 1992",
    answer: "El Tajín, Veracruz.",
    correction: {
      originalAnswer: "Tají",
      note: "Corrección ortográfica: la zona arqueológica se llama 'El Tajín'.",
    },
    tags: ["el tajin", "unesco"],
  },
  {
    id: "cacaxtla",
    category: "arqueologia",
    question: "¿Dónde se encuentra la zona arqueológica de Cacaxtla?",
    answer: "En Tlaxcala.",
    tags: ["cacaxtla", "tlaxcala"],
  },
  {
    id: "villa-de-reyes",
    category: "arqueologia",
    question: "¿Dónde se encuentra la zona arqueológica de Villa de Reyes?",
    answer: "En San Luis Potosí.",
    tags: ["arqueologia", "slp"],
  },
  {
    id: "huatabampo",
    category: "arqueologia",
    question: "¿Dónde se encuentra la zona arqueológica de Huatabampo?",
    answer: "En Sonora.",
    tags: ["arqueologia", "sonora"],
  },
  {
    id: "chalchihuites",
    category: "arqueologia",
    question:
      "¿Dónde se encuentra la zona arqueológica de Chalchihuites (Altavista)?",
    answer: "En Zacatecas.",
    tags: ["arqueologia", "zacatecas"],
  },
  {
    id: "palenque-estado",
    category: "arqueologia",
    question: "¿En qué estado de la República se encuentran las ruinas de Palenque?",
    answer: "En Chiapas.",
    tags: ["palenque", "chiapas"],
  },
  {
    id: "calakmul-estado",
    category: "arqueologia",
    question: "¿En qué estado se encuentra Calakmul?",
    answer: "En Campeche.",
    tags: ["calakmul", "campeche"],
  },
  {
    id: "la-venta-estado",
    category: "arqueologia",
    question: "¿En qué estado se encuentra La Venta?",
    answer: "En Tabasco.",
    tags: ["olmeca", "tabasco"],
  },
  {
    id: "callejon-beso",
    category: "arqueologia",
    question: "Famoso callejón de Guanajuato",
    answer: "El Callejón del Beso.",
    tags: ["guanajuato"],
  },
  {
    id: "teatro-juarez",
    category: "arqueologia",
    question: "¿Dónde se ubica el Teatro Juárez?",
    answer: "En Guanajuato.",
    tags: ["teatro", "guanajuato"],
  },
  {
    id: "castillo-chapultepec",
    category: "arqueologia",
    question: "¿Dónde está ubicado el Castillo de Chapultepec?",
    answer: "En la Ciudad de México.",
    tags: ["chapultepec", "cdmx"],
  },
];
