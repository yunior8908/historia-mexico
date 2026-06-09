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
    choices: {
      correct: "35 sitios: 27 culturales, 6 naturales y 2 mixtos.",
      distractors: [
        "33 sitios: 25 culturales, 6 naturales y 2 mixtos.",
        "29 sitios: 23 culturales, 4 naturales y 2 mixtos.",
        "31 sitios: 26 culturales, 4 naturales y 1 mixto.",
      ],
    },
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
    choices: {
      correct:
        "Ciudad prehispánica de Teotihuacán, Estado de México (inscrita en 1987).",
      distractors: [
        "Ciudad prehispánica de Tula, Hidalgo (inscrita en 1987).",
        "Ciudad prehispánica de Cholula, Puebla (inscrita en 1987).",
        "Ciudad prehispánica de Tenayuca, Estado de México (inscrita en 1990).",
      ],
    },
  },
  {
    id: "unesco-el-tajin",
    category: "unesco",
    question: "Sitio UNESCO en Veracruz",
    answer: "Ciudad prehispánica de El Tajín, Veracruz (1992).",
    tags: ["unesco", "el tajin"],
    choices: {
      correct: "Ciudad prehispánica de El Tajín, Veracruz (1992).",
      distractors: [
        "Ciudad prehispánica de Cempoala, Veracruz (1992).",
        "Ciudad prehispánica de Quiahuiztlán, Veracruz (1994).",
        "Ciudad prehispánica de Las Higueras, Veracruz (1990).",
      ],
    },
  },
  {
    id: "unesco-palenque",
    category: "unesco",
    question: "Sitio UNESCO en Chiapas",
    answer:
      "Ciudad prehispánica y Parque Nacional Palenque, Chiapas (1987).",
    tags: ["unesco", "palenque"],
    choices: {
      correct:
        "Ciudad prehispánica y Parque Nacional Palenque, Chiapas (1987).",
      distractors: [
        "Ciudad prehispánica y Parque Nacional Bonampak, Chiapas (1987).",
        "Ciudad prehispánica y Parque Nacional Yaxchilán, Chiapas (1990).",
        "Ciudad prehispánica y Parque Nacional Toniná, Chiapas (1985).",
      ],
    },
  },
  {
    id: "unesco-monarca",
    category: "unesco",
    question: "Sitio UNESCO compartido entre Michoacán y Estado de México",
    answer:
      "Reserva de la Biósfera de la Mariposa Monarca (2008).",
    tags: ["unesco", "mariposa monarca"],
    choices: {
      correct: "Reserva de la Biósfera de la Mariposa Monarca (2008).",
      distractors: [
        "Reserva de la Biósfera de Montes Azules (2008).",
        "Reserva de la Biósfera de Los Tuxtlas (2009).",
        "Reserva de la Biósfera de Cuatro Ciénegas (2010).",
      ],
    },
  },
  {
    id: "unesco-monumentos-tlacotalpan",
    category: "unesco",
    question: "Sitio UNESCO en Veracruz",
    answer: "Zona de monumentos históricos de Tlacotalpan, Veracruz (1998).",
    tags: ["unesco", "tlacotalpan"],
    choices: {
      correct: "Zona de monumentos históricos de Tlacotalpan, Veracruz (1998).",
      distractors: [
        "Zona de monumentos históricos de Córdoba, Veracruz (1998).",
        "Zona de monumentos históricos de Orizaba, Veracruz (1996).",
        "Zona de monumentos históricos de Coatepec, Veracruz (2000).",
      ],
    },
  },
  {
    id: "unesco-pinacate",
    category: "unesco",
    question: "Sitio UNESCO en Sonora",
    answer:
      "Reserva de la Biósfera El Pinacate y Gran Desierto de Altar, Sonora (2013).",
    tags: ["unesco", "pinacate"],
    choices: {
      correct:
        "Reserva de la Biósfera El Pinacate y Gran Desierto de Altar, Sonora (2013).",
      distractors: [
        "Reserva de la Biósfera del Alto Golfo de California, Sonora (2013).",
        "Reserva de la Biósfera Sierra de Álamos, Sonora (2011).",
        "Reserva de la Biósfera de Bavispe, Sonora (2014).",
      ],
    },
  },
  {
    id: "unesco-revillagigedo",
    category: "unesco",
    question: "Sitio UNESCO en el Pacífico mexicano",
    answer: "Archipiélago de Revillagigedo (2016).",
    tags: ["unesco"],
    choices: {
      correct: "Archipiélago de Revillagigedo (2016).",
      distractors: [
        "Archipiélago de las Islas Marías (2016).",
        "Archipiélago de Espíritu Santo (2014).",
        "Archipiélago de las Islas Marietas (2018).",
      ],
    },
  },
  {
    id: "unesco-yagul-mitla",
    category: "unesco",
    question: "Sitio UNESCO en Oaxaca",
    answer:
      "Cuevas prehistóricas de Yagul y Mitla, en los Valles Centrales de Oaxaca (2010).",
    tags: ["unesco"],
    choices: {
      correct:
        "Cuevas prehistóricas de Yagul y Mitla, en los Valles Centrales de Oaxaca (2010).",
      distractors: [
        "Cuevas prehistóricas de Yagul y Zaachila, en los Valles Centrales de Oaxaca (2008).",
        "Cuevas prehistóricas de Mitla y Etla, en los Valles Centrales de Oaxaca (2012).",
        "Cuevas prehistóricas de Yagul y Dainzú, en los Valles Centrales de Oaxaca (2009).",
      ],
    },
  },
  {
    id: "unesco-morelia",
    category: "unesco",
    question: "Sitio UNESCO en Michoacán",
    answer: "Centro histórico de Morelia, Michoacán (1991).",
    tags: ["unesco"],
    choices: {
      correct: "Centro histórico de Morelia, Michoacán (1991).",
      distractors: [
        "Centro histórico de Pátzcuaro, Michoacán (1991).",
        "Centro histórico de Uruapan, Michoacán (1993).",
        "Centro histórico de Tzintzuntzan, Michoacán (1989).",
      ],
    },
  },
  {
    id: "unesco-tequila",
    category: "unesco",
    question: "Sitio UNESCO en Jalisco",
    answer:
      "Paisaje de agaves y antiguas instalaciones industriales de Tequila, Jalisco (2006).",
    tags: ["unesco", "tequila"],
    choices: {
      correct:
        "Paisaje de agaves y antiguas instalaciones industriales de Tequila, Jalisco (2006).",
      distractors: [
        "Paisaje de agaves y antiguas instalaciones industriales de Amatitán, Jalisco (2006).",
        "Paisaje de agaves y antiguas instalaciones industriales de Arandas, Jalisco (2008).",
        "Paisaje de agaves y antiguas instalaciones industriales de Tepatitlán, Jalisco (2004).",
      ],
    },
  },
  {
    id: "unesco-puebla",
    category: "unesco",
    question: "Sitio UNESCO en Puebla",
    answer: "Centro histórico de Puebla, Puebla (1987).",
    tags: ["unesco"],
    choices: {
      correct: "Centro histórico de Puebla, Puebla (1987).",
      distractors: [
        "Centro histórico de Cholula, Puebla (1987).",
        "Centro histórico de Atlixco, Puebla (1989).",
        "Centro histórico de Tehuacán, Puebla (1991).",
      ],
    },
  },
  {
    id: "unesco-queretaro",
    category: "unesco",
    question: "Sitio UNESCO en Querétaro (1996)",
    answer: "Zona de monumentos históricos de Querétaro.",
    tags: ["unesco"],
    choices: {
      correct: "Zona de monumentos históricos de Querétaro.",
      distractors: [
        "Zona de monumentos históricos de San Juan del Río.",
        "Zona de monumentos históricos de Tequisquiapan.",
        "Zona de monumentos históricos de Cadereyta.",
      ],
    },
  },
  {
    id: "unesco-sierra-gorda",
    category: "unesco",
    question: "Sitio UNESCO en Querétaro (misiones)",
    answer: "Misiones franciscanas de la Sierra Gorda de Querétaro (2003).",
    tags: ["unesco"],
    choices: {
      correct: "Misiones franciscanas de la Sierra Gorda de Querétaro (2003).",
      distractors: [
        "Misiones franciscanas de la Sierra Gorda de Guanajuato (2003).",
        "Misiones jesuitas de la Sierra Gorda de Querétaro (2001).",
        "Misiones dominicas de la Sierra Gorda de Hidalgo (2005).",
      ],
    },
  },
  {
    id: "unesco-camino-real",
    category: "unesco",
    question: "Sitio UNESCO transversal (varios estados)",
    answer: "Camino Real de Tierra Adentro (2010).",
    tags: ["unesco"],
    choices: {
      correct: "Camino Real de Tierra Adentro (2010).",
      distractors: [
        "Camino Real de las Californias (2010).",
        "Camino Real de los Altos (2008).",
        "Camino Real del Bajío (2012).",
      ],
    },
  },
  {
    id: "unesco-paquime",
    category: "unesco",
    question: "Sitio UNESCO en Chihuahua",
    answer:
      "Zona arqueológica de Paquimé (Casas Grandes), Chihuahua (1998).",
    tags: ["unesco", "paquime"],
    choices: {
      correct:
        "Zona arqueológica de Paquimé (Casas Grandes), Chihuahua (1998).",
      distractors: [
        "Zona arqueológica de Cuarenta Casas, Chihuahua (1998).",
        "Zona arqueológica de Las Ranas, Chihuahua (1996).",
        "Zona arqueológica de La Quemada, Chihuahua (2000).",
      ],
    },
  },
  {
    id: "unesco-cabanas",
    category: "unesco",
    question: "Sitio UNESCO en Jalisco (arquitectura)",
    answer: "Hospicio Cabañas de Guadalajara, Jalisco (1997).",
    tags: ["unesco"],
    choices: {
      correct: "Hospicio Cabañas de Guadalajara, Jalisco (1997).",
      distractors: [
        "Teatro Degollado de Guadalajara, Jalisco (1997).",
        "Catedral de Guadalajara, Jalisco (1995).",
        "Templo Expiatorio de Guadalajara, Jalisco (1999).",
      ],
    },
  },
  {
    id: "unesco-cu-unam",
    category: "unesco",
    question: "Sitio UNESCO en la CDMX (universidad)",
    answer:
      "Campus Central de la Ciudad Universitaria (CU) de la UNAM, CDMX (2007).",
    tags: ["unesco", "unam"],
    choices: {
      correct:
        "Campus Central de la Ciudad Universitaria (CU) de la UNAM, CDMX (2007).",
      distractors: [
        "Campus Central del Instituto Politécnico Nacional (IPN), CDMX (2007).",
        "Campus Central de la Universidad Iberoamericana, CDMX (2009).",
        "Campus Central de la UAM Iztapalapa, CDMX (2005).",
      ],
    },
  },
  {
    id: "unesco-barragan",
    category: "unesco",
    question: "Sitio UNESCO en la CDMX (arquitectura)",
    answer: "Casa-taller de Luis Barragán, CDMX (2004).",
    tags: ["unesco", "barragan"],
    choices: {
      correct: "Casa-taller de Luis Barragán, CDMX (2004).",
      distractors: [
        "Casa-taller de Diego Rivera, CDMX (2004).",
        "Casa-taller de Juan O'Gorman, CDMX (2006).",
        "Casa-taller de Mario Pani, CDMX (2002).",
      ],
    },
  },
  {
    id: "unesco-tembleque",
    category: "unesco",
    question:
      "Sitio UNESCO compartido entre Estado de México e Hidalgo (acueducto)",
    answer:
      "Sistema hidráulico del Acueducto del Padre Tembleque (2015).",
    tags: ["unesco"],
    choices: {
      correct: "Sistema hidráulico del Acueducto del Padre Tembleque (2015).",
      distractors: [
        "Sistema hidráulico del Acueducto de Querétaro (2015).",
        "Sistema hidráulico del Acueducto de Morelia (2013).",
        "Sistema hidráulico del Acueducto de Zacatecas (2017).",
      ],
    },
  },
  {
    id: "unesco-xochicalco",
    category: "unesco",
    question: "Sitio UNESCO en Morelos",
    answer:
      "Zona de monumentos arqueológicos de Xochicalco, Morelos (1999).",
    tags: ["unesco", "xochicalco"],
    choices: {
      correct:
        "Zona de monumentos arqueológicos de Xochicalco, Morelos (1999).",
      distractors: [
        "Zona de monumentos arqueológicos de Teopanzolco, Morelos (1999).",
        "Zona de monumentos arqueológicos de Chalcatzingo, Morelos (1997).",
        "Zona de monumentos arqueológicos de Tepoztlán, Morelos (2001).",
      ],
    },
  },
  {
    id: "unesco-vizcaino",
    category: "unesco",
    question: "Sitio UNESCO en Baja California Sur",
    answer: "Santuario de Ballenas de El Vizcaíno (1993).",
    tags: ["unesco"],
    choices: {
      correct: "Santuario de Ballenas de El Vizcaíno (1993).",
      distractors: [
        "Santuario de Ballenas de Bahía de Banderas (1993).",
        "Santuario de Ballenas de Bahía Magdalena (1995).",
        "Santuario de Ballenas de Laguna de Términos (1991).",
      ],
    },
  },
  {
    id: "unesco-san-francisco-bcs",
    category: "unesco",
    question:
      "Sitio UNESCO en Baja California Sur (pintura rupestre)",
    answer: "Pinturas rupestres de la Sierra de San Francisco, BCS (1993).",
    tags: ["unesco"],
    choices: {
      correct: "Pinturas rupestres de la Sierra de San Francisco, BCS (1993).",
      distractors: [
        "Pinturas rupestres de la Sierra de Guadalupe, BCS (1993).",
        "Pinturas rupestres de la Sierra de la Giganta, BCS (1995).",
        "Pinturas rupestres de la Sierra de San Borja, BCS (1991).",
      ],
    },
  },
  {
    id: "unesco-zacatecas",
    category: "unesco",
    question: "Sitio UNESCO en Zacatecas",
    answer: "Centro histórico de Zacatecas, Zacatecas (1993).",
    tags: ["unesco"],
    choices: {
      correct: "Centro histórico de Zacatecas, Zacatecas (1993).",
      distractors: [
        "Centro histórico de Guadalupe, Zacatecas (1993).",
        "Centro histórico de Fresnillo, Zacatecas (1995).",
        "Centro histórico de Sombrerete, Zacatecas (1991).",
      ],
    },
  },
  {
    id: "unesco-guanajuato",
    category: "unesco",
    question: "Sitio UNESCO en Guanajuato (ciudad)",
    answer:
      "Ciudad histórica de Guanajuato y minas adyacentes, Guanajuato (1988).",
    tags: ["unesco"],
    choices: {
      correct:
        "Ciudad histórica de Guanajuato y minas adyacentes, Guanajuato (1988).",
      distractors: [
        "Ciudad histórica de Dolores Hidalgo y minas adyacentes, Guanajuato (1988).",
        "Ciudad histórica de Mineral de Pozos y minas adyacentes, Guanajuato (1990).",
        "Ciudad histórica de Salamanca y minas adyacentes, Guanajuato (1986).",
      ],
    },
  },
  {
    id: "unesco-san-miguel",
    category: "unesco",
    question: "Sitio UNESCO en Guanajuato (San Miguel)",
    answer:
      "Villa Protectora de San Miguel El Grande y Santuario de Jesús Nazareno de Atotonilco, Guanajuato (2008).",
    tags: ["unesco"],
    choices: {
      correct:
        "Villa Protectora de San Miguel El Grande y Santuario de Jesús Nazareno de Atotonilco, Guanajuato (2008).",
      distractors: [
        "Villa Protectora de San Miguel El Grande y Santuario de Nuestra Señora de Guanajuato, Guanajuato (2008).",
        "Villa Protectora de Dolores Hidalgo y Santuario de Jesús Nazareno de Atotonilco, Guanajuato (2006).",
        "Villa Protectora de San Miguel El Grande y Templo de San Francisco, Guanajuato (2010).",
      ],
    },
  },
  {
    id: "unesco-oaxaca-monte-alban",
    category: "unesco",
    question: "Sitio UNESCO en Oaxaca (1987)",
    answer:
      "Centro histórico de Oaxaca y zona arqueológica de Monte Albán, Oaxaca.",
    tags: ["unesco", "monte alban"],
    choices: {
      correct:
        "Centro histórico de Oaxaca y zona arqueológica de Monte Albán, Oaxaca.",
      distractors: [
        "Centro histórico de Oaxaca y zona arqueológica de Mitla, Oaxaca.",
        "Centro histórico de Oaxaca y zona arqueológica de Yagul, Oaxaca.",
        "Centro histórico de Oaxaca y zona arqueológica de Dainzú, Oaxaca.",
      ],
    },
  },
  {
    id: "unesco-cdmx-xochimilco",
    category: "unesco",
    question: "Sitio UNESCO en la CDMX (1987)",
    answer: "Centro histórico de México y Xochimilco, CDMX.",
    tags: ["unesco", "cdmx"],
    choices: {
      correct: "Centro histórico de México y Xochimilco, CDMX.",
      distractors: [
        "Centro histórico de México y Tlalpan, CDMX.",
        "Centro histórico de México y Coyoacán, CDMX.",
        "Centro histórico de México y Tláhuac, CDMX.",
      ],
    },
  },
  {
    id: "unesco-calakmul",
    category: "unesco",
    question: "Sitio UNESCO en Campeche",
    answer:
      "Antigua ciudad maya y bosques tropicales protegidos de Calakmul, Campeche (2002, ampliado en 2014).",
    tags: ["unesco", "calakmul"],
    choices: {
      correct:
        "Antigua ciudad maya y bosques tropicales protegidos de Calakmul, Campeche (2002, ampliado en 2014).",
      distractors: [
        "Antigua ciudad maya y bosques tropicales protegidos de Edzná, Campeche (2002, ampliado en 2014).",
        "Antigua ciudad maya y bosques tropicales protegidos de Becán, Campeche (2004, ampliado en 2014).",
        "Antigua ciudad maya y bosques tropicales protegidos de Calakmul, Quintana Roo (2002, ampliado en 2012).",
      ],
    },
  },
  {
    id: "unesco-islas-golfo",
    category: "unesco",
    question: "Sitio UNESCO en el Golfo de California",
    answer:
      "Islas y áreas protegidas del Golfo de California (2005).",
    tags: ["unesco"],
    choices: {
      correct: "Islas y áreas protegidas del Golfo de California (2005).",
      distractors: [
        "Islas y áreas protegidas del Mar Caribe (2005).",
        "Islas y áreas protegidas del Golfo de México (2007).",
        "Islas y áreas protegidas del Pacífico Sur (2003).",
      ],
    },
  },

  // ─── Pueblos Mágicos (Magical Towns) ───────────────────────────────────────────
  {
    id: "pueblos-magicos-que-son",
    category: "pueblosMagicos",
    question: "¿Qué son los Pueblos Mágicos?",
    answer:
      "Pueblos reconocidos por su riqueza histórica y cultural, dentro de un programa de la Secretaría de Turismo (SECTUR).",
    tags: ["pueblos magicos"],
    choices: {
      correct:
        "Pueblos reconocidos por su riqueza histórica y cultural, dentro de un programa de la Secretaría de Turismo (SECTUR).",
      distractors: [
        "Pueblos reconocidos por su riqueza histórica y cultural, dentro de un programa de la Secretaría de Cultura.",
        "Pueblos reconocidos por su riqueza histórica y cultural, dentro de un programa del INAH.",
        "Pueblos reconocidos por su riqueza histórica y cultural, dentro de un programa de la Secretaría de Economía.",
      ],
    },
  },
  {
    id: "pueblos-magicos-total",
    category: "pueblosMagicos",
    question: "¿Cuántos Pueblos Mágicos hay?",
    answer: "132 pueblos mágicos (cifra reciente; la cifra oficial varía).",
    tags: ["pueblos magicos"],
    choices: {
      correct: "132 pueblos mágicos (cifra reciente; la cifra oficial varía).",
      distractors: [
        "111 pueblos mágicos (cifra reciente; la cifra oficial varía).",
        "121 pueblos mágicos (cifra reciente; la cifra oficial varía).",
        "177 pueblos mágicos (cifra reciente; la cifra oficial varía).",
      ],
    },
  },
  {
    id: "pueblos-chiapas",
    category: "pueblosMagicos",
    question: "Pueblos Mágicos de Chiapas",
    answer:
      "Chiapa de Corzo, Comitán de Domínguez, San Cristóbal de las Casas y Palenque.",
    tags: ["pueblos magicos", "chiapas"],
    choices: {
      correct:
        "Chiapa de Corzo, Comitán de Domínguez, San Cristóbal de las Casas y Palenque.",
      distractors: [
        "Tapachula, Tonalá, Ocosingo y Tuxtla Gutiérrez.",
        "Chiapa de Corzo, Tapachula, San Cristóbal de las Casas y Tonalá.",
        "Comitán de Domínguez, Ocosingo, Palenque y Tuxtla Gutiérrez.",
      ],
    },
  },
  {
    id: "pueblos-bc",
    category: "pueblosMagicos",
    question: "Pueblo Mágico de Baja California",
    answer: "Tecate.",
    tags: ["pueblos magicos", "bc"],
    choices: {
      correct: "Tecate.",
      distractors: ["Ensenada.", "Rosarito.", "Mexicali."],
    },
  },
  {
    id: "pueblos-bcs",
    category: "pueblosMagicos",
    question: "Pueblos Mágicos de Baja California Sur",
    answer: "Loreto, Santa Rosalía y Todos Santos.",
    tags: ["pueblos magicos", "bcs"],
    choices: {
      correct: "Loreto, Santa Rosalía y Todos Santos.",
      distractors: [
        "La Paz, Mulegé y Comondú.",
        "Cabo San Lucas, Loreto y Todos Santos.",
        "Santa Rosalía, Ciudad Constitución y La Paz.",
      ],
    },
  },
  {
    id: "pueblo-zacatecas",
    category: "pueblosMagicos",
    question: "Pueblo Mágico de Zacatecas",
    answer: "Jerez de García Salinas.",
    tags: ["pueblos magicos", "zacatecas"],
    choices: {
      correct: "Jerez de García Salinas.",
      distractors: ["Guadalupe.", "Fresnillo.", "Río Grande."],
    },
  },
  {
    id: "pueblos-chihuahua",
    category: "pueblosMagicos",
    question: "Pueblos Mágicos de Chihuahua",
    answer: "Batopilas, Casas Grandes y Creel.",
    tags: ["pueblos magicos", "chihuahua"],
    choices: {
      correct: "Batopilas, Casas Grandes y Creel.",
      distractors: [
        "Delicias, Cuauhtémoc y Camargo.",
        "Hidalgo del Parral, Jiménez y Meoqui.",
        "Ciudad Juárez, Ojinaga y Aldama.",
      ],
    },
  },
  {
    id: "pueblos-puebla",
    category: "pueblosMagicos",
    question: "Pueblos Mágicos en Puebla",
    answer: "Chignahuapan y Xicotepec (entre otros).",
    tags: ["pueblos magicos", "puebla"],
    choices: {
      correct: "Chignahuapan y Xicotepec (entre otros).",
      distractors: [
        "Tehuacán y San Martín Texmelucan (entre otros).",
        "Izúcar de Matamoros y Acatlán (entre otros).",
        "Tecamachalco y Amozoc (entre otros).",
      ],
    },
  },
  {
    id: "pueblo-edomex",
    category: "pueblosMagicos",
    question: "Pueblo Mágico del Estado de México",
    answer: "Villa del Carbón.",
    tags: ["pueblos magicos", "edomex"],
    choices: {
      correct: "Villa del Carbón.",
      distractors: ["Toluca.", "Naucalpan.", "Atlacomulco."],
    },
  },
  {
    id: "pueblo-michoacan",
    category: "pueblosMagicos",
    question: "Pueblo Mágico de Michoacán",
    answer: "Jiquilpan.",
    tags: ["pueblos magicos", "michoacan"],
    choices: {
      correct: "Jiquilpan.",
      distractors: ["Zamora.", "Apatzingán.", "Zitácuaro."],
    },
  },
  {
    id: "pueblo-cholula",
    category: "pueblosMagicos",
    question: "¿Dónde se ubica el Pueblo Mágico de Cholula?",
    answer: "En Puebla.",
    tags: ["pueblos magicos", "puebla"],
    choices: {
      correct: "En Puebla.",
      distractors: ["En Tlaxcala.", "En Hidalgo.", "En Morelos."],
    },
  },
  {
    id: "izamal",
    category: "pueblosMagicos",
    question: "¿Dónde queda Izamal, pueblo mágico?",
    answer: "En Yucatán.",
    tags: ["pueblos magicos", "yucatan"],
    choices: {
      correct: "En Yucatán.",
      distractors: ["En Campeche.", "En Quintana Roo.", "En Tabasco."],
    },
  },
  {
    id: "pueblo-campeche",
    category: "pueblosMagicos",
    question: "Pueblo Mágico en Campeche",
    answer: "Palizada.",
    tags: ["pueblos magicos", "campeche"],
    choices: {
      correct: "Palizada.",
      distractors: ["Champotón.", "Escárcega.", "Ciudad del Carmen."],
    },
  },

  // ─── Archaeological zones ──────────────────────────────────────
  {
    id: "zonas-arqueologicas-cuantas",
    category: "arqueologia",
    question: "¿Cuántas zonas arqueológicas existen en México?",
    answer:
      "193 zonas arqueológicas abiertas al público (existen más de 2 000 registradas).",
    tags: ["arqueologia"],
    choices: {
      correct:
        "193 zonas arqueológicas abiertas al público (existen más de 2 000 registradas).",
      distractors: [
        "187 zonas arqueológicas abiertas al público (existen más de 2 000 registradas).",
        "210 zonas arqueológicas abiertas al público (existen más de 1 500 registradas).",
        "165 zonas arqueológicas abiertas al público (existen más de 3 000 registradas).",
      ],
    },
  },
  {
    id: "el-tajin-ubicacion",
    category: "arqueologia",
    question: "¿Dónde se ubica la zona arqueológica de El Tajín?",
    answer: "En Papantla, Veracruz.",
    tags: ["el tajin", "veracruz"],
    choices: {
      correct: "En Papantla, Veracruz.",
      distractors: [
        "En Poza Rica, Veracruz.",
        "En Tuxpan, Veracruz.",
        "En Misantla, Veracruz.",
      ],
    },
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
    choices: {
      correct: "El Tajín, Veracruz.",
      distractors: [
        "Cempoala, Veracruz.",
        "Quiahuiztlán, Veracruz.",
        "Las Higueras, Veracruz.",
      ],
    },
  },
  {
    id: "cacaxtla",
    category: "arqueologia",
    question: "¿Dónde se encuentra la zona arqueológica de Cacaxtla?",
    answer: "En Tlaxcala.",
    tags: ["cacaxtla", "tlaxcala"],
    choices: {
      correct: "En Tlaxcala.",
      distractors: ["En Puebla.", "En Hidalgo.", "En Morelos."],
    },
  },
  {
    id: "villa-de-reyes",
    category: "arqueologia",
    question: "¿Dónde se encuentra la zona arqueológica de Villa de Reyes?",
    answer: "En San Luis Potosí.",
    tags: ["arqueologia", "slp"],
    choices: {
      correct: "En San Luis Potosí.",
      distractors: ["En Guanajuato.", "En Zacatecas.", "En Querétaro."],
    },
  },
  {
    id: "huatabampo",
    category: "arqueologia",
    question: "¿Dónde se encuentra la zona arqueológica de Huatabampo?",
    answer: "En Sonora.",
    tags: ["arqueologia", "sonora"],
    choices: {
      correct: "En Sonora.",
      distractors: ["En Sinaloa.", "En Chihuahua.", "En Baja California."],
    },
  },
  {
    id: "chalchihuites",
    category: "arqueologia",
    question:
      "¿Dónde se encuentra la zona arqueológica de Chalchihuites (Altavista)?",
    answer: "En Zacatecas.",
    tags: ["arqueologia", "zacatecas"],
    choices: {
      correct: "En Zacatecas.",
      distractors: ["En Durango.", "En Aguascalientes.", "En San Luis Potosí."],
    },
  },
  {
    id: "palenque-estado",
    category: "arqueologia",
    question: "¿En qué estado de la República se encuentran las ruinas de Palenque?",
    answer: "En Chiapas.",
    tags: ["palenque", "chiapas"],
    choices: {
      correct: "En Chiapas.",
      distractors: ["En Tabasco.", "En Campeche.", "En Oaxaca."],
    },
  },
  {
    id: "calakmul-estado",
    category: "arqueologia",
    question: "¿En qué estado se encuentra Calakmul?",
    answer: "En Campeche.",
    tags: ["calakmul", "campeche"],
    choices: {
      correct: "En Campeche.",
      distractors: ["En Quintana Roo.", "En Yucatán.", "En Chiapas."],
    },
  },
  {
    id: "la-venta-estado",
    category: "arqueologia",
    question: "¿En qué estado se encuentra La Venta?",
    answer: "En Tabasco.",
    tags: ["olmeca", "tabasco"],
    choices: {
      correct: "En Tabasco.",
      distractors: ["En Veracruz.", "En Chiapas.", "En Campeche."],
    },
  },
  {
    id: "callejon-beso",
    category: "arqueologia",
    question: "Famoso callejón de Guanajuato",
    answer: "El Callejón del Beso.",
    tags: ["guanajuato"],
    choices: {
      correct: "El Callejón del Beso.",
      distractors: [
        "El Callejón del Abrazo.",
        "El Callejón de los Suspiros.",
        "El Callejón del Truco.",
      ],
    },
  },
  {
    id: "teatro-juarez",
    category: "arqueologia",
    question: "¿Dónde se ubica el Teatro Juárez?",
    answer: "En Guanajuato.",
    tags: ["teatro", "guanajuato"],
    choices: {
      correct: "En Guanajuato.",
      distractors: ["En San Luis Potosí.", "En Zacatecas.", "En Querétaro."],
    },
  },
  {
    id: "castillo-chapultepec",
    category: "arqueologia",
    question: "¿Dónde está ubicado el Castillo de Chapultepec?",
    answer: "En la Ciudad de México.",
    tags: ["chapultepec", "cdmx"],
    choices: {
      correct: "En la Ciudad de México.",
      distractors: [
        "En el Estado de México.",
        "En Puebla.",
        "En Morelos.",
      ],
    },
  },
];
