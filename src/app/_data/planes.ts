export type Era =
  | "independencia"
  | "republica"
  | "reforma"
  | "porfiriato"
  | "revolucion"
  | "postrevolucion";

export type Plan = {
  slug: string;
  year: number;
  date: string;
  name: string;
  era: Era;
  proclaimer: string;
  proclaimerShort: string;
  place: string;
  motto?: string;
  against: string;
  summary: string;
  principles: string[];
  outcome: string;
  connectsTo: string[];
};

export type EraInfo = {
  id: Era;
  label: string;
  range: string;
  colorVar: string;
};

export const ERAS: EraInfo[] = [
  {
    id: "independencia",
    label: "Independencia",
    range: "1821–1823",
    colorVar: "var(--era-independencia)",
  },
  {
    id: "republica",
    label: "Primera República",
    range: "1827–1852",
    colorVar: "var(--era-republica)",
  },
  {
    id: "reforma",
    label: "La Reforma",
    range: "1854–1857",
    colorVar: "var(--era-reforma)",
  },
  {
    id: "porfiriato",
    label: "Porfiriato",
    range: "1871–1876",
    colorVar: "var(--era-porfiriato)",
  },
  {
    id: "revolucion",
    label: "Revolución",
    range: "1910–1913",
    colorVar: "var(--era-revolucion)",
  },
  {
    id: "postrevolucion",
    label: "Postrevolución",
    range: "1920–1933",
    colorVar: "var(--era-postrevolucion)",
  },
];

export const PLANES: Plan[] = [
  {
    slug: "iguala",
    year: 1821,
    date: "24 de febrero",
    name: "Plan de Iguala",
    era: "independencia",
    proclaimer: "Agustín de Iturbide, con la adhesión de Vicente Guerrero",
    proclaimerShort: "Iturbide · Guerrero",
    place: "Iguala, Intendencia de México",
    motto: "Religión, Independencia, Unión",
    against: "Dominio colonial de la Corona española",
    summary:
      "Tras el Abrazo de Acatempan (10 de febrero de 1821) entre Iturbide y Vicente Guerrero, proclama la independencia de la Nueva España bajo la forma de una monarquía constitucional moderada y las Tres Garantías.",
    principles: [
      "Religión católica como única, sin tolerancia de otra",
      "Independencia absoluta de España",
      "Unión entre americanos y europeos residentes",
      "Monarquía constitucional, con Fernando VII u otro príncipe europeo",
      "Creación del Ejército Trigarante",
    ],
    outcome:
      "Selló el pacto entre insurgentes y realistas. Con la entrada del Ejército Trigarante a la Ciudad de México el 27 de septiembre de 1821, consumó la independencia.",
    connectsTo: ["casa-mata"],
  },
  {
    slug: "casa-mata",
    year: 1823,
    date: "1 de febrero",
    name: "Plan de Casa Mata",
    era: "independencia",
    proclaimer: "Antonio López de Santa Anna y José Antonio de Echávarri",
    proclaimerShort: "Santa Anna · Echávarri",
    place: "Casa Mata, Veracruz",
    against: "Imperio de Agustín I (Iturbide)",
    summary:
      "Convocó a un nuevo Congreso Constituyente y desconoció de hecho al Primer Imperio Mexicano.",
    principles: [
      "Instalación de un nuevo Congreso Constituyente",
      "Reconocimiento provisional del Ejecutivo de Iturbide hasta que el Congreso decidiera",
      "Adhesión inmediata de las diputaciones provinciales",
      "Rechazo a la disolución del Congreso por Iturbide",
    ],
    outcome:
      "Iturbide abdicó el 19 de marzo de 1823. Abrió paso a la Constitución federal de 1824 y a la Primera República Federal.",
    connectsTo: ["cuernavaca"],
  },
  {
    slug: "montano",
    year: 1827,
    date: "23 de diciembre",
    name: "Plan de Montaño",
    era: "republica",
    proclaimer: "Manuel Montaño y Nicolás Bravo",
    proclaimerShort: "Montaño · Bravo",
    place: "Otumba, Estado de México",
    against: "Logias yorkinas y el gabinete de Guadalupe Victoria",
    summary:
      "Pronunciamiento escocés que pidió el destierro del ministro Joel R. Poinsett y la prohibición de las sociedades secretas.",
    principles: [
      "Desaparición de toda sociedad secreta",
      "Renovación del gabinete del presidente Victoria",
      "Expulsión del ministro Poinsett",
      "Cumplimiento estricto de la Constitución de 1824",
    ],
    outcome:
      "Sofocado por Vicente Guerrero en Tulancingo en enero de 1828. Bravo fue desterrado; marcó la decadencia del rito escocés.",
    connectsTo: ["jalapa"],
  },
  {
    slug: "jalapa",
    year: 1829,
    date: "4 de diciembre",
    name: "Plan de Jalapa",
    era: "republica",
    proclaimer: "Anastasio Bustamante",
    proclaimerShort: "Anastasio Bustamante",
    place: "Jalapa, Veracruz",
    against: "Gobierno de Vicente Guerrero",
    summary:
      "Reserva militar contra el presidente Guerrero, acusándolo de violar la Constitución con facultades extraordinarias.",
    principles: [
      "Sostenimiento de la Constitución de 1824 y las leyes generales",
      "Cese de las facultades extraordinarias del Ejecutivo",
      "Desconocimiento del gobierno de Guerrero",
      "Conservación del orden federal bajo control centralista",
    ],
    outcome:
      "Bustamante depuso a Guerrero, fusilado en Cuilapan en 1831. Primer gobierno conservador-centralista de hecho.",
    connectsTo: ["cuernavaca"],
  },
  {
    slug: "cuernavaca",
    year: 1834,
    date: "25 de mayo",
    name: "Plan de Cuernavaca",
    era: "republica",
    proclaimer: "Ignacio Echeverría, respaldado por Santa Anna",
    proclaimerShort: "Echeverría · Santa Anna",
    place: "Cuernavaca, Estado de México",
    against: "Reformas liberales de Valentín Gómez Farías",
    summary:
      "Reaccionario y clerical, exigió derogar las leyes que desamortizaban bienes eclesiásticos y reformaban al ejército.",
    principles: [
      "Cese de toda autoridad que hubiese atacado a la religión",
      "Derogación de las leyes del vicepresidente Gómez Farías",
      "Reconocimiento de Santa Anna como protector de religión y leyes",
      "Convocatoria a un nuevo Congreso",
    ],
    outcome:
      "Preludio del cambio del federalismo al centralismo y de las Siete Leyes de 1836.",
    connectsTo: ["hospicio", "ayutla"],
  },
  {
    slug: "hospicio",
    year: 1852,
    date: "20 de octubre",
    name: "Plan del Hospicio",
    era: "republica",
    proclaimer: "José María Blancarte",
    proclaimerShort: "José María Blancarte",
    place: "Guadalajara, Jalisco",
    against: "Presidencia de Mariano Arista",
    summary:
      "Pronunciamiento contra Arista; abrió la puerta al regreso de Santa Anna desde el exilio.",
    principles: [
      "Desconocimiento del presidente Arista",
      "Llamado a Santa Anna como caudillo del orden",
      "Reorganización del ejército y de las rentas públicas",
      "Convocatoria a un Congreso Extraordinario",
    ],
    outcome:
      "Arista renunció en enero de 1853. Santa Anna regresó al poder por última vez como Su Alteza Serenísima.",
    connectsTo: ["ayutla"],
  },
  {
    slug: "ayutla",
    year: 1854,
    date: "1 de marzo",
    name: "Plan de Ayutla",
    era: "reforma",
    proclaimer: "Florencio Villarreal, Juan Álvarez e Ignacio Comonfort",
    proclaimerShort: "Álvarez · Comonfort",
    place: "Ayutla, Guerrero",
    motto: "Ni un paso atrás",
    against: "Dictadura vitalicia de Antonio López de Santa Anna",
    summary:
      "Llamado liberal que derrocó a Santa Anna y abrió la vía hacia el Congreso Constituyente de 1856–1857.",
    principles: [
      "Cese de Santa Anna y de cuantos merecieran la confianza pública",
      "Presidente interino nombrado por una junta de representantes",
      "Convocatoria a un Congreso Extraordinario Constituyente",
      "Reorganización del ejército",
      "Defensa de la integridad del territorio nacional",
    ],
    outcome:
      "Santa Anna abandonó el poder en agosto de 1855. Nació la generación de la Reforma.",
    connectsTo: ["tacubaya", "noria"],
  },
  {
    slug: "tacubaya",
    year: 1857,
    date: "17 de diciembre",
    name: "Plan de Tacubaya",
    era: "reforma",
    proclaimer: "Félix María Zuloaga",
    proclaimerShort: "Félix María Zuloaga",
    place: "Tacubaya, Distrito Federal",
    against: "Constitución liberal de 1857",
    summary:
      "Desconoció la Constitución de 1857 e inició la Guerra de Reforma entre liberales y conservadores.",
    principles: [
      "Cese de la Constitución de 1857",
      "Continuación de Comonfort con facultades omnímodas",
      "Convocatoria a un nuevo Congreso Constituyente",
      "Permanencia de las garantías individuales",
    ],
    outcome:
      "Comonfort se adhirió y traicionó a los liberales; Juárez asumió la presidencia legítima. Estalló la Guerra de los Tres Años.",
    connectsTo: ["noria"],
  },
  {
    slug: "noria",
    year: 1871,
    date: "8 de noviembre",
    name: "Plan de la Noria",
    era: "porfiriato",
    proclaimer: "Porfirio Díaz",
    proclaimerShort: "Porfirio Díaz",
    place: "Hacienda de la Noria, Oaxaca",
    motto: "Constitución de 1857 y libertad electoral",
    against: "Reelección de Benito Juárez",
    summary:
      "Primer pronunciamiento porfirista (también llamado 'Revolución de La Noria'); condenó la reelección indefinida y el centralismo juarista.",
    principles: [
      "No reelección del presidente",
      "Constitución de 1857 como única ley fundamental",
      "Sufragio libre y elecciones limpias",
      "Reducción de los gastos del Ejecutivo",
    ],
    outcome:
      "Fracasó tras la muerte de Juárez en julio de 1872. Lerdo amnistió a los rebeldes; Díaz se replegó.",
    connectsTo: ["tuxtepec"],
  },
  {
    slug: "tuxtepec",
    year: 1876,
    date: "10 de enero",
    name: "Plan de Tuxtepec",
    era: "porfiriato",
    proclaimer: "Porfirio Díaz",
    proclaimerShort: "Porfirio Díaz",
    place: "Tuxtepec, Oaxaca",
    motto: "Sufragio efectivo, no reelección",
    against: "Reelección de Sebastián Lerdo de Tejada",
    summary:
      "Pronunciamiento triunfante que llevó a Díaz al poder por primera vez e inauguró el Porfiriato.",
    principles: [
      "Constitución de 1857 y Leyes de Reforma como ley suprema",
      "No reelección del presidente ni de los gobernadores",
      "Desconocimiento de Lerdo de Tejada",
      "Reconocimiento de gobernadores que se adhirieran",
      "Elecciones tres meses después de tomada la capital",
    ],
    outcome:
      "Díaz entró triunfante a la Ciudad de México el 21 de noviembre de 1876. Inició un régimen de más de tres décadas.",
    connectsTo: ["san-luis"],
  },
  {
    slug: "san-luis",
    year: 1910,
    date: "5 de octubre",
    name: "Plan de San Luis Potosí",
    era: "revolucion",
    proclaimer: "Francisco I. Madero",
    proclaimerShort: "Francisco I. Madero",
    place: "Redactado en San Antonio, Texas",
    motto: "Sufragio efectivo, no reelección",
    against: "Dictadura de Porfirio Díaz",
    summary:
      "Convocó al levantamiento armado el 20 de noviembre de 1910 y dio origen formal a la Revolución Mexicana.",
    principles: [
      "Nulidad de las elecciones de 1910",
      "Desconocimiento de Porfirio Díaz como presidente",
      "Madero como presidente provisional",
      "Llamado a las armas el 20 de noviembre a las 6 de la tarde",
      "Restitución de tierras a quienes hubieran sido despojados (art. 3°)",
    ],
    outcome:
      "Tras la toma de Ciudad Juárez en mayo de 1911, Díaz renunció y partió al exilio.",
    connectsTo: ["ayala", "empacadora"],
  },
  {
    slug: "ayala",
    year: 1911,
    date: "28 de noviembre",
    name: "Plan de Ayala",
    era: "revolucion",
    proclaimer: "Emiliano Zapata y Otilio Montaño",
    proclaimerShort: "Emiliano Zapata",
    place: "Ayoxuxtla, Puebla",
    motto: "Tierra y Libertad",
    against: "Gobierno de Francisco I. Madero",
    summary:
      "Programa agrario radical: desconoció a Madero por traicionar al pueblo y exigió la restitución y reparto de tierras. La bandera popular del zapatismo se sintetizó en 'Tierra y Libertad'; en el documento original también aparece la divisa 'Reforma, Libertad, Justicia y Ley'.",
    principles: [
      "Desconocimiento de Madero como jefe de la Revolución",
      "Restitución inmediata de tierras, montes y aguas usurpadas",
      "Expropiación de un tercio de los latifundios, previa indemnización",
      "Nacionalización de los bienes de los enemigos del plan",
      "Pascual Orozco como jefe de la Revolución; en su defecto Zapata",
    ],
    outcome:
      "Bandera del zapatismo. Sus principios fueron incorporados al artículo 27 de la Constitución de 1917.",
    connectsTo: ["guadalupe"],
  },
  {
    slug: "empacadora",
    year: 1912,
    date: "25 de marzo",
    name: "Plan de la Empacadora",
    era: "revolucion",
    proclaimer: "Pascual Orozco",
    proclaimerShort: "Pascual Orozco",
    place: "Chihuahua, Chihuahua",
    against: "Gobierno de Francisco I. Madero",
    summary:
      "Plan Orozquista: sumó demandas obreras y agrarias en una crítica frontal a Madero por la oligarquía del norte.",
    principles: [
      "Desconocimiento del gobierno de Madero",
      "Jornada máxima de diez horas, supresión del trabajo infantil",
      "Aumento de salarios y supresión de tiendas de raya",
      "Nacionalización de los ferrocarriles",
      "Reparto agrario y restitución de ejidos",
    ],
    outcome:
      "Las fuerzas federales al mando de Huerta derrotaron al orozquismo. Sembró la agenda obrera de la Revolución.",
    connectsTo: ["guadalupe"],
  },
  {
    slug: "guadalupe",
    year: 1913,
    date: "26 de marzo",
    name: "Plan de Guadalupe",
    era: "revolucion",
    proclaimer: "Venustiano Carranza",
    proclaimerShort: "Venustiano Carranza",
    place: "Hacienda de Guadalupe, Coahuila",
    against: "Usurpación de Victoriano Huerta",
    summary:
      "Desconoció a Huerta y organizó al Ejército Constitucionalista bajo el mando de Carranza.",
    principles: [
      "Desconocimiento de Victoriano Huerta",
      "Desconocimiento de los poderes Legislativo y Judicial federales",
      "Desconocimiento de gobiernos estatales que reconocieran a Huerta",
      "Carranza como Primer Jefe del Ejército Constitucionalista",
      "Convocatoria a elecciones al restablecerse la paz",
    ],
    outcome:
      "Derrotó a Huerta en agosto de 1914. Sus adiciones de 1914 culminaron en la Constitución de 1917.",
    connectsTo: ["agua-prieta"],
  },
  {
    slug: "agua-prieta",
    year: 1920,
    date: "23 de abril",
    name: "Plan de Agua Prieta",
    era: "postrevolucion",
    proclaimer: "Plutarco Elías Calles, Adolfo de la Huerta y Álvaro Obregón",
    proclaimerShort: "Obregón · Calles · De la Huerta",
    place: "Agua Prieta, Sonora",
    against: "Imposición presidencial de Venustiano Carranza",
    summary:
      "Levantamiento sonorense que derrocó a Carranza y abrió el ciclo del grupo gobernante de Sonora.",
    principles: [
      "Desconocimiento de Carranza como presidente",
      "Reconocimiento de Adolfo de la Huerta como gobernador soberano de Sonora",
      "Convocatoria a un Congreso bajo la Constitución de 1917",
      "Reconocimiento de los gobiernos estatales adheridos",
    ],
    outcome:
      "Carranza fue asesinado en Tlaxcalantongo el 21 de mayo de 1920. Obregón llegó a la presidencia en diciembre.",
    connectsTo: ["sexenal"],
  },
  {
    slug: "sexenal",
    year: 1933,
    date: "6 de diciembre",
    name: "Plan Sexenal",
    era: "postrevolucion",
    proclaimer: "Partido Nacional Revolucionario · Lázaro Cárdenas",
    proclaimerShort: "PNR · Lázaro Cárdenas",
    place: "Querétaro, Querétaro",
    against: "Inercia del Maximato y del laissez-faire",
    summary:
      "Primer plan de gobierno de seis años: plataforma programática del cardenismo, no un pronunciamiento armado.",
    principles: [
      "Reforma agraria acelerada y dotación de ejidos",
      "Educación socialista y obligatoria del Estado",
      "Legislación obrera y derecho de huelga",
      "Nacionalización del subsuelo y de recursos estratégicos",
      "Planificación económica desde el Estado",
    ],
    outcome:
      "Marco doctrinario del gobierno de Cárdenas (1934–1940). Llevó a la expropiación petrolera de 1938 y al reparto agrario masivo.",
    connectsTo: [],
  },
];
