export interface Term {
  id: string;
  term: string;
  definition: string;
  category: string;
  details?: string;
}

export const terms: Term[] = [
  {
    id: '1',
    term: 'Agente etiológico',
    definition: 'Organismo (virus, bacteria, hongo, parásito, prion) capaz de producir infección y enfermedad en el hospedero.',
    category: 'General'
  },
  {
    id: '2',
    term: 'Virus',
    definition: 'Agente infeccioso microscópico acelular que consiste básicamente en un núcleo de material genético (ADN o ARN) rodeado por una cubierta proteica (cápside).',
    category: 'General',
    details: 'Son parásitos intracelulares obligados, ya que carecen de metabolismo propio y necesitan la maquinaria de una célula viva para replicarse.'
  },
  {
    id: '3',
    term: 'Bacteria',
    definition: 'Microorganismo unicelular procariota (sin núcleo definido). Poseen una pared celular y pueden vivir en diversos ambientes.',
    category: 'General',
    details: 'Algunas son parte de la microbiota normal, mientras que las patógenas pueden causar daño mediante la invasión de tejidos o la liberación de toxinas.'
  },
  {
    id: '4',
    term: 'Hongo',
    definition: 'Organismo eucariota (con núcleo definido) que puede ser unicelular (levaduras) o multicelular (mohos).',
    category: 'General',
    details: 'Se alimentan de materia orgánica y sus infecciones en humanos (micosis) suelen ser oportunistas o afectar la piel y mucosas.'
  },
  {
    id: '5',
    term: 'Prion',
    definition: 'Agente infeccioso constituido exclusivamente por una proteína degradada o mal plegada.',
    category: 'General',
    details: 'No posee material genético (ADN o ARN) y es capaz de inducir el mal plegamiento de proteínas celulares normales, causando enfermedades neurodegenerativas fatales como la encefalopatía espongiforme.'
  },
  {
    id: '6',
    term: 'Clasificación taxonómica',
    definition: 'Sistema jerárquico utilizado para clasificar los agentes en niveles: Reino, Phylum (o división), Clase, Orden, Familia, Género y Especie.',
    category: 'General'
  },
  {
    id: '7',
    term: 'Clasificación biológica',
    definition: 'Basada en características morfológicas, bioquímicas y genéticas (ej. bacterias Gram positivas/negativas; virus ADN/ARN).',
    category: 'General'
  },
  {
    id: '8',
    term: 'Clasificación clínica',
    definition: 'Basada en la localización o la enfermedad (ej. enteropatógenos en el sistema digestivo; neuropatógenos en el sistema nervioso).',
    category: 'General'
  },
  {
    id: '9',
    term: 'Viabilidad',
    definition: 'Capacidad de un agente para sobrevivir fuera del hospedero bajo diversas condiciones ambientales.',
    category: 'General'
  },
  {
    id: '10',
    term: 'Patogenicidad',
    definition: 'Capacidad del agente para producir enfermedad en personas expuestas. Incorpora la entrada, establecimiento, reproducción y virulencia.',
    category: 'General'
  },
  {
    id: '11',
    term: 'Virulencia',
    definition: 'Grado de patogenicidad. Se mide por la capacidad de producir casos graves o fatales entre los infectados.',
    category: 'General'
  },
  {
    id: '12',
    term: 'Infectividad o infecciosidad',
    definition: 'Capacidad del agente para instalarse en los tejidos, crecer y multiplicarse.',
    category: 'General'
  },
  {
    id: '13',
    term: 'Transmisibilidad',
    definition: 'Capacidad del agente para pasar de un hospedero a otro.',
    category: 'General'
  },
  {
    id: '14',
    term: 'Invasividad',
    definition: 'Capacidad del agente para diseminarse y penetrar a través de los tejidos, alcanzando órganos distantes del sitio de entrada.',
    category: 'General'
  },
  {
    id: '15',
    term: 'Infestación',
    definition: 'Desarrollo y reproducción de artrópodos en la superficie del cuerpo o ropa sin invadir tejidos internos.',
    category: 'General'
  },
  {
    id: '16',
    term: 'Artrópodos',
    definition: 'Animales invertebrados con patas articuladas, cuerpo segmentado y un exoesqueleto de quitina que mudan para crecer.',
    category: 'General',
    details: 'Incluyen insectos, arácnidos, crustáceos y miriápodos.'
  },
  {
    id: '17',
    term: 'Colonización',
    definition: 'Presencia de microorganismos en el hospedero sin causar daño ni respuesta inmune.',
    category: 'General'
  },
  {
    id: '18',
    term: 'Contaminación',
    definition: 'Presencia del agente en objetos inanimados, ropa o superficies.',
    category: 'General'
  },
  {
    id: '19',
    term: 'Tropismo',
    definition: 'Afinidad de un agente por tejidos o células específicas.',
    category: 'General'
  },
  {
    id: '20',
    term: 'Persistencia',
    definition: 'Habilidad del agente para sobrevivir dentro del hospedero escapando a la inmunidad o fármacos.',
    category: 'General'
  },
  {
    id: '21',
    term: 'Farmacorresistencia',
    definition: 'Capacidad del agente para sobrevivir en presencia de niveles terapéuticos de un fármaco (puede ser intrínseca o adquirida).',
    category: 'General'
  },
  {
    id: '22',
    term: 'Parásito',
    definition: 'Agente que vive dentro o sobre otro ser vivo y se alimenta de él.',
    category: 'General',
    details: 'Puede ser obligado (dependiente total) o facultativo (capaz de vida libre).'
  },
  {
    id: '23',
    term: 'Endoparásito',
    definition: 'Parásito que vive dentro del hospedero.',
    category: 'General'
  },
  {
    id: '24',
    term: 'Ectoparásito',
    definition: 'Parásito que vive en la superficie (piel, pelo).',
    category: 'General'
  },
  {
    id: '25',
    term: 'Protozoo',
    definition: 'Parásito unicelular microscópico.',
    category: 'General'
  },
  {
    id: '26',
    term: 'Helminto',
    definition: 'Gusano parásito visible en su forma adulta. Se dividen en Nemátodos o gusanos redondos y en Platelmintos o gusanos planos.',
    category: 'General'
  },
  {
    id: '27',
    term: 'Céstodo',
    definition: 'Gusano plano (platelminto) con forma de cinta, dividido en segmentos llamados proglótides.',
    category: 'General',
    details: 'No tienen boca ni intestino. Se fijan mediante el escólex. Son hermafroditas.'
  },
  {
    id: '28',
    term: 'Tremátodo',
    definition: 'Gusano plano (platelminto) con forma de hoja, sin segmentos.',
    category: 'General',
    details: 'Tienen boca e intestino incompleto. Su ciclo siempre pasa por un hospedero intermediario.'
  },
  {
    id: '29',
    term: 'Hospedero (Huésped)',
    definition: 'Persona o animal vivo que proporciona alojamiento y multiplicación a un agente.',
    category: 'General'
  },
  {
    id: '30',
    term: 'Infección',
    definition: 'Presencia del agente dentro del hospedero.',
    category: 'General'
  },
  {
    id: '31',
    term: 'Infección oportunista',
    definition: 'Producida por agentes que aprovechan la inmunosupresión del hospedero para causar daño.',
    category: 'General'
  },
  {
    id: '32',
    term: 'Enfermo',
    definition: 'Estado con signos y síntomas clínicos.',
    category: 'General'
  },
  {
    id: '33',
    term: 'Infectivo o infeccioso',
    definition: 'Individuo capaz de transmitir el agente.',
    category: 'General'
  },
  {
    id: '34',
    term: 'Susceptible',
    definition: 'Individuo no inmune que puede infectarse al exponerse.',
    category: 'General'
  },
  {
    id: '35',
    term: 'Inmune',
    definition: 'Persona con protección (anticuerpos o células) por infección previa o vacuna.',
    category: 'General'
  },
  {
    id: '36',
    term: 'Resistencia',
    definition: 'Capacidad de defensa contra la invasión o toxinas.',
    category: 'General'
  },
  {
    id: '37',
    term: 'Resistencia natural',
    definition: 'Dada su constitución genética el individuo no puede ser infectado.',
    category: 'General'
  },
  {
    id: '38',
    term: 'Infestado',
    definition: 'Hospedero afectado por ectoparásitos.',
    category: 'General'
  },
  {
    id: '39',
    term: 'Incubando',
    definition: 'Fase en la que el agente se multiplica sin haber alcanzado el umbral de síntomas clínicos.',
    category: 'General'
  },
  {
    id: '40',
    term: 'Infección patente',
    definition: 'El agente es detectable por pruebas de laboratorio.',
    category: 'General'
  },
  {
    id: '41',
    term: 'Infección latente',
    definition: 'Persistencia del agente sin síntomas.',
    category: 'General'
  },
  {
    id: '42',
    term: 'Contagioso',
    definition: 'Individuo que transmite directamente (contacto/aerosoles). Todo contagioso es infectivo, pero no viceversa.',
    category: 'General'
  },
  {
    id: '43',
    term: 'Portador',
    definition: 'Estado infectivo prolongado con eliminación del agente (puede ser sano, convaleciente o enfermo).',
    category: 'General'
  },
  {
    id: '44',
    term: 'Contacto',
    definition: 'Persona expuesta a un individuo contagioso.',
    category: 'General'
  },
  {
    id: '45',
    term: 'Inmunidad Activa',
    definition: 'Debida a una exposición previa a antígenos del agente o similares a él.',
    category: 'General'
  },
  {
    id: '46',
    term: 'Inmunidad Pasiva',
    definition: 'Debida a la transferencia de anticuerpos o linfocitos, maternos o de otro origen.',
    category: 'General'
  },
  {
    id: '47',
    term: 'Caso',
    definition: 'Individuo definido como infectado o enfermo según criterios epidemiológicos.',
    category: 'General'
  },
  {
    id: '48',
    term: 'Hospedero definitivo',
    definition: 'Donde ocurre la reproducción sexual del agente.',
    category: 'General'
  },
  {
    id: '49',
    term: 'Hospedero intermediario',
    definition: 'Donde ocurre la fase asexual del agente.',
    category: 'General'
  },
  {
    id: '50',
    term: 'Hospedero vector',
    definition: 'Invertebrado que transporta el agente (Mecánico o Biológico).',
    category: 'General'
  },
  {
    id: '51',
    term: 'Hospedero final',
    definition: 'Individuo infectado que no transmite la infección a otros.',
    category: 'General'
  },
  {
    id: '52',
    term: 'Hospedero amplificador',
    definition: 'Especie de hospedero que desarrolla epidemias periódicas por un agente, aumentando la población de agentes lo suficiente para propagarse a otras especies.',
    category: 'General'
  },
  {
    id: '53',
    term: 'Inmunidad de Rebaño (Herd Immunity)',
    definition: 'Protección de los susceptibles cuando una proporción crítica de la población es inmune, interrumpiendo la cadena de transmisión.',
    category: 'General'
  },
  {
    id: '54',
    term: 'Tamaño crítico de la población',
    definition: 'Teóricamente se requiere una población mínima de hospederos para que la población de agentes sobreviva a lo largo del tiempo.',
    category: 'General'
  },
  {
    id: '55',
    term: 'Fuente de infección',
    definition: 'Persona u objeto desde el cual el agente pasa al hospedero.',
    category: 'General'
  },
  {
    id: '56',
    term: 'Reservorio',
    definition: 'Hábitat indispensable para la supervivencia del agente en la naturaleza.',
    category: 'General'
  },
  {
    id: '57',
    term: 'Biocenosis',
    definition: 'Conjunto de todas las especies que cohabitan e interactúan en un espacio geográfico determinado.',
    category: 'General'
  },
  {
    id: '58',
    term: 'Ecosistema',
    definition: 'Unidad ecológica formada por todos los seres vivos de un área (biocenosis) y los factores físicoquímicos de su entorno (biotopo).',
    category: 'General'
  },
  {
    id: '59',
    term: 'Foco natural',
    definition: 'Área geográfica donde un patógeno zoonótico circula de forma endémica entre animales salvajes y vectores.',
    category: 'General'
  },
  {
    id: '60',
    term: 'Foco',
    definition: 'Área geográfica o espacio poblacional delimitado donde se identifica la transmisión activa y sostenida de una enfermedad infecciosa.',
    category: 'General'
  },
  {
    id: '61',
    term: 'Microfoco',
    definition: 'Unidad mínima delimitada dentro de un microterritorio donde se identifica una transmisión activa y persistente.',
    category: 'General'
  },
  {
    id: '62',
    term: 'Nicho ecológico',
    definition: 'Conjunto de condiciones ambientales, recursos y roles funcionales que una especie ocupa y desempeña dentro de su ecosistema.',
    category: 'General'
  },
  {
    id: '63',
    term: 'Comunidad Biótica',
    definition: 'Conjunto de todas las poblaciones de distintas especies que conviven en un hábitat determinado e interactúan entre sí.',
    category: 'General'
  },
  {
    id: '64',
    term: 'Periodo de incubación',
    definition: 'Intervalo de tiempo que transcurre entre el momento en que un agente entra al hospedero susceptible y la aparición de los primeros signos o síntomas.',
    category: 'General'
  },
  {
    id: '65',
    term: 'Periodo de latencia',
    definition: 'Tiempo transcurrido desde que un agente entra al hospedero susceptible hasta que este individuo es infectivo y puede transmitir la infección.',
    category: 'General'
  },
  {
    id: '66',
    term: 'Duración de infectividad',
    definition: 'Período de tiempo durante el cual un hospedero infectado es capaz de transmitir el agente infeccioso a un hospedero susceptible.',
    category: 'General'
  },
  {
    id: '67',
    term: 'Recaída',
    definition: 'Reaparición de los signos y síntomas después de una mejoría aparente, como resultado de la persistencia del agente original.',
    category: 'General'
  },
  {
    id: '68',
    term: 'Recrudescencia',
    definition: 'Reaparición de manifestaciones clínicas como resultado del aumento en la multiplicación del agente patógeno que nunca fue eliminado totalmente.',
    category: 'General'
  },
  {
    id: '69',
    term: 'Reinfección',
    definition: 'Proceso por el cual un hospedero que ha superado una infección previa por un agente determinado vuelve a infectarse por ese mismo agente o uno relacionado.',
    category: 'General'
  },
  {
    id: '70',
    term: 'Caso índice',
    definition: 'El primer caso de una enfermedad identificado por el sistema de vigilancia epidemiológica en el contexto de una investigación de brote.',
    category: 'General'
  },
  {
    id: '71',
    term: 'Caso primario',
    definition: 'El individuo que introduce el agente infeccioso en un grupo o población susceptible, siendo el primero en infectarse cronológicamente.',
    category: 'General'
  },
  {
    id: '72',
    term: 'Caso secundario',
    definition: 'Persona que se infecta a partir del caso primario. Es la primera generación de contagiados.',
    category: 'General'
  },
  {
    id: '73',
    term: 'Tasa de ataque',
    definition: 'Proporción de individuos susceptibles expuestos a un agente infeccioso que desarrollan la enfermedad durante un período de tiempo limitado.',
    category: 'General'
  },
  {
    id: '74',
    term: 'Tiempo de generación',
    definition: 'Tiempo transcurrido entre el momento que un individuo adquiere una infección y alcanza su máxima infectividad.',
    category: 'General'
  },
  {
    id: '75',
    term: 'Intervalo serial',
    definition: 'Tiempo transcurrido entre el momento que un individuo infectado presenta los síntomas y la persona a la que infectó también presenta síntomas.',
    category: 'General'
  },
  {
    id: '76',
    term: 'Curva epidémica',
    definition: 'Representación gráfica de la incidencia de casos en función del tiempo, usualmente el inicio de los síntomas.',
    category: 'General'
  },
  {
    id: '77',
    term: 'Endemia',
    definition: 'La presencia constante de una enfermedad o agente infeccioso dentro de un área geográfica determinada o un grupo de población específico.',
    category: 'General'
  },
  {
    id: '78',
    term: 'Epidemia',
    definition: 'Incremento de casos en una comunidad por encima del número esperado para ese mismo lugar, tiempo y personas.',
    category: 'General'
  },
  {
    id: '79',
    term: 'Brote',
    definition: 'Es la misma definición de epidemia, pero se suele usar cuando ocurre en forma localizada.',
    category: 'General'
  },
  {
    id: '80',
    term: 'Pandemia',
    definition: 'Una epidemia que ocurre a escala mundial o en un área geográfica muy amplia, cruzando fronteras internacionales.',
    category: 'General'
  },
  {
    id: '81',
    term: 'Ciclos estacionales',
    definition: 'Fluctuaciones anuales en la incidencia de una enfermedad que están vinculadas a las estaciones del año o variaciones climáticas periódicas.',
    category: 'General'
  },
  {
    id: '82',
    term: 'Ciclos bienales o trienales',
    definition: 'Fluctuaciones en la incidencia de una enfermedad que ocurren en intervalos de cada dos o tres años.',
    category: 'General'
  },
  {
    id: '83',
    term: 'Ciclos irregulares',
    definition: 'Fluctuaciones en la incidencia de una enfermedad que no siguen un patrón temporal constante o predecible.',
    category: 'General'
  },
  {
    id: '84',
    term: 'Cambios seculares',
    definition: 'Variaciones graduales en la frecuencia de una enfermedad o evento de salud que ocurren a larga duración, usualmente años o décadas.',
    category: 'General'
  },
  {
    id: '85',
    term: 'Umbral epidémico',
    definition: 'El número o la densidad de individuos susceptibles que se requieren en una población para que pueda ocurrir una epidemia.',
    category: 'General'
  },
  {
    id: '86',
    term: 'Ciclo de Transmisión',
    definition: 'Mecanismos para que el patógeno persista. Puede ser transmisión vertical (progenitores a prole) u horizontal (entre individuos).',
    category: 'General'
  },
  {
    id: '87',
    term: 'Ciclo de vida',
    definition: 'Conjunto de etapas, transformaciones y mecanismos de reproducción que un agente infeccioso atraviesa para persistir.',
    category: 'General'
  },
  {
    id: '88',
    term: 'Transmisión Vertical',
    definition: 'Transmisión del agente del progenitor a su prole (e.g. transplacentaria/transovárica).',
    category: 'General'
  },
  {
    id: '89',
    term: 'Transmisión Horizontal',
    definition: 'Entre individuos diferentes a los progenitores. Puede ser directa (sin intermediarios) e indirecta (vehículos o vectores).',
    category: 'General'
  },
  {
    id: '90',
    term: 'Tasa o número básico de Reproducción (R0)',
    definition: 'Número promedio de casos nuevos esperados a partir de un caso infectivo en población susceptible.',
    category: 'General'
  },
  {
    id: '91',
    term: 'Tasa o número neto de Reproducción (R)',
    definition: 'Número promedio de casos nuevos esperados a partir de un caso infectivo en población donde hay inmunes.',
    category: 'General'
  },
  {
    id: '92',
    term: 'Zoonosis',
    definition: 'Infecciones transmitidas naturalmente de animales vertebrados al ser humano.',
    category: 'General'
  },
  {
    id: '93',
    term: 'Vector',
    definition: 'Hospedero invertebrado (gerenalmente insecto o artrópodo) que sirve como transportador de un agente infeccioso.',
    category: 'General'
  },
  {
    id: '94',
    term: 'Vector mecánico',
    definition: 'Realiza el simple traslado físico del agente, sin que exista multiplicación o desarrollo del microorganismo dentro de este.',
    category: 'General'
  },
  {
    id: '95',
    term: 'Vector biológico',
    definition: 'Agente que debe multiplicarse o desarrollarse dentro del vector antes de que este pueda transmitir la forma infectante.',
    category: 'General'
  },
  {
    id: '96',
    term: 'Periodo de incubación extrínseca',
    definition: 'Tiempo necesario para que el agente se vuelva infectivo dentro del vector.',
    category: 'General'
  },
  {
    id: '97',
    term: 'Control',
    definition: 'Reducir la incidencia de una enfermedad de manera intencionada hasta un nivel que la comunidad considere aceptable.',
    category: 'General'
  },
  {
    id: '98',
    term: 'Eliminación',
    definition: 'Reducir la incidencia de una infección a cero casos en una región geográfica específica y limitada.',
    category: 'General'
  },
  {
    id: '99',
    term: 'Erradicación',
    definition: 'Reducción permanente de la incidencia de una infección a cero en todo el mundo, lograda mediante esfuerzos deliberados.',
    category: 'General'
  },
  {
    id: '100',
    term: 'Mortalidad',
    definition: 'Número total de defunciones que ocurren en una población durante un periodo de tiempo determinado.',
    category: 'General'
  },
  {
    id: '101',
    term: 'Morbilidad',
    definition: 'El número o la proporción de personas que presentan una enfermedad en una población específica durante un periodo definido.',
    category: 'General'
  },
  {
    id: '102',
    term: 'Letalidad',
    definition: 'Proporción de casos de una enfermedad que resultan fatales dentro de un tiempo determinado.',
    category: 'General'
  },
  {
    id: '103',
    term: 'Vigilancia reactiva',
    definition: 'Mecanismo de salud pública para la detección pronta, investigación de campo y control inmediato de casos y brotes.',
    category: 'General'
  },
  {
    id: '104',
    term: 'Tamizaje o tamización',
    definition: 'Identificación presuntiva de enfermedades o condiciones no reconocidas mediante pruebas o exámenes de ejecución rápida.',
    category: 'General'
  }
];

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const questions: Question[] = [
  {
    id: 'q1',
    text: '¿Qué mide la letalidad en una enfermedad?',
    options: [
        'El total de defunciones en la población general.',
        'La proporción de casos fatales respecto al total de diagnosticados.',
        'El número de casos nuevos en un año.',
        'La velocidad de propagación del virus.'
    ],
    correctAnswer: 1,
    explanation: 'La letalidad se calcula dividiendo el número de muertes por la enfermedad entre el número total de casos diagnosticados en el mismo período.'
  },
  {
    id: 'q2',
    text: '¿Cuál es la diferencia entre un vector mecánico y uno biológico?',
    options: [
      'El biológico solo vive en humanos.',
      'El mecánico requiere que el agente se multiplique en él.',
      'En el biológico, el agente debe multiplicarse o desarrollarse para ser infectante.',
      'No hay ninguna diferencia técnica.'
    ],
    correctAnswer: 2,
    explanation: 'En el vector biológico el agente debe cumplir una fase de desarrollo o multiplicación antes de poder transmitir la forma infectante.'
  },
  {
    id: 'q3',
    text: '¿A qué se refiere la "Inmunidad de Rebaño"?',
    options: [
      'A la vacunación obligatoria de todo el ganado.',
      'Cuando una proporción crítica de individuos es inmune, interrumpiendo la cadena de transmisión.',
      'A la inmunidad natural adquirida al nacer.',
      'A la capacidad de un agente para invadir tejidos profundos.'
    ],
    correctAnswer: 1,
    explanation: 'La inmunidad de rebaño ocurre cuando suficientes personas son inmunes, protegiendo indirectamente a los susceptibles.'
  },
  {
    id: 'q4',
    text: '¿Qué es el periodo de latencia?',
    options: [
      'El tiempo desde la infección hasta que aparecen los síntomas.',
      'El tiempo desde la infección hasta que el individuo es capaz de infectar a otros.',
      'La duración total de la enfermedad.',
      'El tiempo que el agente sobrevive en el ambiente.'
    ],
    correctAnswer: 1,
    explanation: 'El periodo de latencia es el intervalo entre la entrada del agente y el momento en que el hospedero se vuelve infectivo.'
  }
];
