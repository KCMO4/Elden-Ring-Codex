import type { DeepEntity, RichBlock, RichInline } from '../types'

const link = (label: string, targetType: 'character' | 'region' | 'faction' | 'concept' | 'ending' | 'timeline', slug: string): RichInline =>
  ({ type: 'link', label, targetType, slug })
const p = (...children: RichInline[]): RichBlock =>
  ({ type: 'paragraph', children })
const h = (level: 2 | 3, text: string, id?: string): RichBlock =>
  ({ type: 'heading', level, text, id })

export const factionsLore: Record<string, Partial<DeepEntity>> = {

  'orden-dorado': {
    summary: 'El régimen cosmológico fundado por Marika tras sellar la Muerte Predestinada. Sus dogmas estructuran el Interregno entero — y sus exclusiones definen quién es persona y quién no lo es.',
    deepLore: [
      h(2, 'La fundación'),
      p(
        link('Marika', 'character', 'marika'),
        ' fundó el Orden Dorado tras sellar la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ' dentro de ',
        link('Maliketh', 'character', 'maliketh'),
        '. La era dorada se construyó sobre dos contradicciones que la harán caer: prometía inmortalidad pero solo a quienes el sistema reconocía como dignos, y prometía orden eterno pero su mismo sello cosmológico era inestable.',
      ),
      h(2, 'Los excluidos'),
      p(
        'El Orden no es para todos. Los ',
        link('Omens', 'faction', 'omens'),
        ', los ',
        link('Misbegotten', 'faction', 'misbegotten'),
        ', los ',
        link('Albinaurics', 'faction', 'albinauricos'),
        ' viven al margen — visible o invisible — de la era dorada. Los ',
        link('Mancillados', 'concept', 'tarnished'),
        ' fueron expulsados del todo. Cada exclusión genera una cicatriz política eventualmente contagiosa.',
      ),
      h(2, 'El final del régimen'),
      p(
        'La fractura del Anillo Elden por la propia Marika dejó al Orden técnicamente intacto pero estructuralmente paralizado. La ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' se retiró parcialmente. Los ',
        link('Dos Dedos', 'faction', 'dos-dedos'),
        ' siguen mediando rituales pero ya no escuchan respuestas claras.',
      ),
    ],
    relatedCharacters: ['marika', 'radagon', 'godfrey', 'godwyn', 'morgott', 'maliketh', 'godrick', 'gideon', 'goldmask', 'corhyn', 'enia'],
    relatedFactions: ['dos-dedos', 'cuchillos-negros', 'omens', 'misbegotten'],
    relatedRegions: ['leyndell', 'altus-plateau'],
    relatedConcepts: ['elden-ring', 'erdtree', 'golden-order', 'great-rune', 'voluntad-mayor', 'grace'],
    relatedTimelineEvents: ['marika-godfrey', 'la-fractura'],
  },

  'dos-dedos': {
    summary: 'Mensajeros físicos de la Voluntad Mayor. Su presencia en la Mesa Redonda permite al Mancillado canjear runas, recibir bendiciones y, eventualmente, ser ungido como Señor Elden.',
    deepLore: [
      h(2, 'Los mensajeros'),
      p(
        'Los Dos Dedos son extensiones físicas de la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        '. No piensan: traducen. Sus pronunciamientos llegan a través de doncellas como ',
        link('Enia', 'character', 'enia'),
        '. Cuando los Dedos se deterioran — y empiezan a hacerlo, visiblemente, durante el viaje del Mancillado — la influencia divina se debilita.',
      ),
      h(2, 'El silencio creciente'),
      p(
        'Tras la ',
        link('fractura', 'timeline', 'la-fractura'),
        ', la Voluntad Mayor se retira parcialmente del Interregno. Los Dedos siguen apuntando, pero apuntan a un cosmos que ya no responde con claridad. Es la liturgia sobreviviendo al objeto de la fe.',
      ),
    ],
    relatedCharacters: ['enia', 'marika', 'gideon'],
    relatedFactions: ['orden-dorado'],
    relatedConcepts: ['voluntad-mayor', 'great-rune', 'tarnished'],
  },

  'tres-dedos': {
    summary: 'Antítesis prisionera de los Dos Dedos. Encarnación física de la Llama Frenética bajo Leyndell. Susurra a quien los oye una sola verdad: existir es sufrir, y la única piedad es quemarlo todo.',
    deepLore: [
      h(2, 'La presencia bajo la capital'),
      p(
        'Bajo ',
        link('Leyndell', 'region', 'leyndell'),
        ', selladas tras tres puertas, viven los Tres Dedos: la presencia activa de la ',
        link('Llama Frenética', 'concept', 'frenzied-flame'),
        '. Su mera proximidad enloquece. Su contacto convierte. Su don es quemarlo todo de una vez para terminar con todo el sufrimiento.',
      ),
      h(2, 'El reclutamiento'),
      p(
        link('Hyetta', 'character', 'hyetta'),
        ' es guiada hacia ellos como doncella accidental. ',
        link('Shabriri', 'character', 'shabriri'),
        ' es su misionero histórico. ',
        link('Melina', 'character', 'melina'),
        ' los aborrece — y abandona al Mancillado si éste se entrega a ellos.',
      ),
    ],
    relatedCharacters: ['hyetta', 'shabriri', 'melina'],
    relatedFactions: ['orden-dorado'],
    relatedRegions: ['leyndell'],
    relatedConcepts: ['frenzied-flame', 'dioses-exteriores'],
    relatedEndings: ['frenzied-flame'],
  },

  'cuchillos-negros': {
    summary: 'Asesinas forjadas a partir de la mecha de la Runa de la Muerte robada por Ranni. Únicas armas capaces de matar a un demidiós. Ejecutaron la Noche que rompió el cosmos.',
    deepLore: [
      h(2, 'Las armas y las asesinas'),
      p(
        'Las hojas Cuchillo Negro fueron forjadas con un fragmento de la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ' robada del cuerpo de ',
        link('Maliketh', 'character', 'maliketh'),
        '. Solo estas armas pueden ',
        { type: 'em', text: 'matar' },
        ' a un demidiós; cualquier otra herida cierra. Sus portadoras forman la facción.',
      ),
      h(2, 'La Noche'),
      p(
        'Bajo dirección de ',
        link('Ranni', 'character', 'ranni'),
        ', los Cuchillos Negros ejecutaron la ',
        link('Noche de los Cuchillos Negros', 'timeline', 'ranni-noche-cuchillos'),
        ': asesinato simultáneo de ',
        link('Godwyn', 'character', 'godwyn'),
        ' y del cuerpo Empyrean de la propia Ranni. La operación fue parcialmente exitosa: ambos murieron incompletamente.',
      ),
    ],
    relatedCharacters: ['ranni', 'godwyn', 'maliketh', 'marika'],
    relatedFactions: ['caria'],
    relatedConcepts: ['rune-of-death', 'destined-death', 'empyrean'],
    relatedTimelineEvents: ['ranni-noche-cuchillos'],
  },

  'pieles-de-dios': {
    summary: 'Secta de la era anterior al Orden Dorado, devotos de la Llama Negra. Sus apóstoles siguen quemando dioses en rituales clandestinos siglos después de la derrota de su Reina.',
    deepLore: [
      h(2, 'La herejía persistente'),
      p(
        'Los Pieles de Dios servían a la ',
        link('Reina de Ojos Crepusculares', 'character', 'gloam-eyed-queen'),
        ' antes del Orden Dorado. Tras su derrota a manos de ',
        link('Maliketh', 'character', 'maliketh'),
        ', la secta sobrevivió en sombras. Sus rituales con la ',
        link('Llama Negra', 'concept', 'black-flame'),
        ' apuntan al asesinato de divinidades — la única arma capaz de quemar incluso a un dios.',
      ),
    ],
    relatedCharacters: ['gloam-eyed-queen', 'maliketh'],
    relatedConcepts: ['black-flame', 'destined-death'],
    relatedTimelineEvents: ['era-antigua'],
  },

  nox: {
    summary: 'Civilización subterránea condenada por intentar crear su propio dios. Habitantes de Nokron y Nokstella, esperan el regreso de las estrellas.',
    deepLore: [
      h(2, 'La transgresión cosmológica'),
      p(
        'Los Nox fueron una raza ennoblecida que, durante la era anterior al Orden, intentaron forjar su propio dios — la Luna Eterna. Su transgresión irritó a la cosmología; la respuesta fue un meteorito que enterró sus ciudades bajo la superficie.',
      ),
      h(2, 'La esperanza estelar'),
      p(
        'Hoy esperan en silencio. Su rey y reina, Astel, son entidades cósmicas mutiladas. La rebelión de ',
        link('Ranni', 'character', 'ranni'),
        ' parece heredar parte de su legado: la ',
        link('Era de las Estrellas', 'ending', 'age-of-stars'),
        ' es la promesa cumplida que ellos no pudieron cumplir.',
      ),
    ],
    relatedCharacters: ['ranni'],
    relatedRegions: ['nokron', 'nokstella'],
    relatedConcepts: ['dark-moon', 'age-of-stars'],
    relatedEndings: ['age-of-stars'],
  },

  'dragones-antiguos': {
    summary: 'Los reyes del cosmos antes del Orden Dorado. Lord Placidusax fue su Señor Elden hasta que su dios externo desapareció. Los pocos sobrevivientes habitan Farum Azula y otros refugios atemporales.',
    deepLore: [
      h(2, 'El imperio anterior'),
      p(
        'Antes de Marika hubo dragones. ',
        link('Placidusax', 'character', 'placidusax'),
        ' fue su Señor Elden, ',
        link('Farum Azula', 'region', 'farum-azula'),
        ' su capital. La era dragónica precede al Crisol y casi todo lo que el Orden Dorado considera primordial.',
      ),
      h(2, 'La caída'),
      p(
        'Cuando el dios externo de los dragones se retiró, su régimen se fragmentó. Algunos dragones — incluyendo ',
        link('Fortissax', 'character', 'fortissax'),
        ' — pactaron con los humanos del Orden naciente. Otros se retiraron a Farum Azula. Los más antiguos siguen durmiendo, esperando un retorno que el cosmos descartó.',
      ),
    ],
    relatedCharacters: ['placidusax', 'fortissax', 'godwyn'],
    relatedRegions: ['farum-azula', 'mt-gelmir'],
    relatedFactions: ['hombres-bestia'],
    relatedConcepts: ['dioses-exteriores'],
    relatedTimelineEvents: ['era-antigua'],
  },

  'hombres-bestia': {
    summary: 'Raza primigenia anterior al Orden, asociada al Crisol. Maliketh es uno de ellos; Blaidd fue diseñado a partir de su biología.',
    deepLore: [
      h(2, 'Los hijos del Crisol'),
      p(
        'Los Hombres-Bestia son criaturas anteriores al Orden Dorado, vinculados al ',
        link('Crisol', 'concept', 'crucible'),
        ' — la fuerza primigenia que mezclaba todas las formas de vida. ',
        link('Maliketh', 'character', 'maliketh'),
        ' fue extraído de esta raza para servir a Marika; ',
        link('Blaidd', 'character', 'blaidd'),
        ' fue construido más tarde a partir de ellos para servir a Ranni.',
      ),
    ],
    relatedCharacters: ['maliketh', 'blaidd'],
    relatedFactions: ['dragones-antiguos'],
    relatedConcepts: ['crucible', 'shadow-bound-beast'],
  },

  omens: {
    summary: 'Hijos del Crisol nacidos con cuernos. El Orden Dorado los considera maldición; los encarcela bajo Leyndell. Morgott y Mohg son los más prominentes — uno leal al sistema que lo encarceló, el otro su rebelde absoluto.',
    deepLore: [
      h(2, 'La sangre antigua'),
      p(
        'Los Omens son humanos nacidos con manifestaciones del ',
        link('Crisol', 'concept', 'crucible'),
        ': cuernos, escamas, cuerpos asimétricos. El Orden Dorado los clasifica como aberración. La realidad cosmológica es más incómoda: los Omens son la prueba de que la sangre primordial nunca se purificó del todo del linaje real.',
      ),
      h(2, 'Leyndell subterránea'),
      p(
        'Las alcantarillas de ',
        link('Leyndell', 'region', 'leyndell'),
        ' albergan a los Omens encarcelados. ',
        link('Morgott', 'character', 'morgott'),
        ' y ',
        link('Mohg', 'character', 'mohg'),
        ' fueron los más famosos prisioneros. La existencia de Omens-realeza es secreto incómodo del Orden.',
      ),
    ],
    relatedCharacters: ['morgott', 'mohg', 'marika', 'radagon'],
    relatedFactions: ['orden-dorado'],
    relatedRegions: ['leyndell'],
    relatedConcepts: ['crucible'],
  },

  misbegotten: {
    summary: 'Criaturas malformadas, esclavos del Orden Dorado. Su rebelión en Castle Morne fue la primera revuelta visible contra el sistema.',
    deepLore: [
      h(2, 'Los esclavos del régimen'),
      p(
        'Los Misbegotten son humanos nacidos con cuerpos asimétricos, fuerza brutal, dolor crónico. El Orden los usó como esclavos guerreros. Su rebelión en Castle Morne (Península Llorosa) fue la primera revuelta visible contra el sistema.',
      ),
      h(2, 'Los refugiados'),
      p(
        link('Miquella', 'character', 'miquella'),
        ' los acogió en el ',
        link('Haligtree', 'region', 'haligtree'),
        '. Por primera vez tuvieron un santuario que los reconocía como personas. ',
        link('Boc', 'character', 'boc'),
        ' es uno de ellos.',
      ),
    ],
    relatedCharacters: ['miquella', 'boc'],
    relatedFactions: ['orden-dorado', 'haligtree'],
    relatedRegions: ['peninsula-llorosa', 'haligtree'],
  },

  albinauricos: {
    summary: 'Humanos artificiales creados en eras antiguas. Frágiles, perseguidos, asociados al Haligtree. Su éxodo a través de la nieve consagrada es uno de los grandes silencios del Interregno.',
    deepLore: [
      h(2, 'Los seres construidos'),
      p(
        'Los Albinaurics fueron creados artificialmente — no nacidos. Sus cuerpos son frágiles, su esperanza de vida corta. El Orden Dorado los considera anomalía; muchos terminan como ofrendas sangrientas o cadáveres olvidados.',
      ),
      h(2, 'El refugio del Haligtree'),
      p(
        link('Miquella', 'character', 'miquella'),
        ' los acogió. Su éxodo a través del ',
        link('Snowfield Consagrado', 'region', 'consecrated-snowfield'),
        ' costó la vida a la mayoría. Los que llegaron a Elphael fueron eventualmente sangrados por ',
        link('Mohg', 'character', 'mohg'),
        ' tras el secuestro de Miquella.',
      ),
    ],
    relatedCharacters: ['miquella', 'mohg', 'malenia'],
    relatedFactions: ['haligtree'],
    relatedRegions: ['haligtree', 'consecrated-snowfield', 'mohgwyn'],
    relatedConcepts: ['unalloyed-gold'],
  },

  'cleanrot-knights': {
    summary: 'Caballeros que se infectaron voluntariamente con podredumbre escarlata para combatir junto a Malenia. Su devoción es médicamente suicida — y completamente coherente con la dialéctica del Haligtree.',
    deepLore: [
      h(2, 'La devoción enferma'),
      p(
        'Los Cleanrot Knights aceptaron la infección voluntaria de la ',
        link('Podredumbre Escarlata', 'concept', 'scarlet-rot'),
        ' como prueba de lealtad a ',
        link('Malenia', 'character', 'malenia'),
        '. Sus armaduras los protegen del entorno externo pero no del veneno interno. Cada batalla ganada los acerca a la propia podredumbre que ya viven.',
      ),
    ],
    relatedCharacters: ['malenia', 'miquella'],
    relatedFactions: ['haligtree', 'kindred-of-rot'],
    relatedConcepts: ['scarlet-rot'],
  },

  redmanes: {
    summary: 'Caballeros rojos al servicio de Radahn, originarios de Caelid. Tras la corrupción de su señor, organizan el Festival como acto piadoso final.',
    deepLore: [
      h(2, 'La caballería estelar'),
      p(
        'Los Redmanes fueron caballeros de elite leales a ',
        link('Radahn', 'character', 'radahn'),
        '. Combatían bajo magia gravitacional aprendida en ',
        link('Sellia', 'region', 'caelid'),
        '. Tras la corrupción de su general por ',
        link('Malenia', 'character', 'malenia'),
        ', perdieron toda razón de ser.',
      ),
      h(2, 'El Festival'),
      p(
        'Bajo la dirección de ',
        link('Jerren', 'character', 'jerren'),
        ', los Redmanes organizan un Festival ritual: invitar a guerreros legendarios a derrotar al Radahn corrompido. Es su último servicio: liberar a su señor mediante una muerte digna.',
      ),
    ],
    relatedCharacters: ['radahn', 'jerren', 'sellen'],
    relatedRegions: ['caelid'],
    relatedConcepts: ['great-rune', 'scarlet-rot'],
  },

  'volcano-manor': {
    summary: 'Corte alternativa al Orden Dorado dirigida por Tanith en nombre de su esposo Rykard. Bajo la fachada aristocrática, una serpiente-dios devora desde dentro.',
    deepLore: [
      h(2, 'La conspiración aristocrática'),
      p(
        link('Tanith', 'character', 'tanith'),
        ' recibe nobles desafectos del ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' en el manor del volcán y los pone al servicio de ',
        link('Rykard', 'character', 'rykard'),
        '. Las cartas de invitación son envíos a misiones de asesinato disfrazadas de rituales.',
      ),
      h(2, 'Lo que devora abajo'),
      p(
        'Pero Volcano Manor es solo la fachada. Bajo el palacio espera la entidad serpentina anterior al Orden, que devoró a Rykard y ahora opera a través de su nombre.',
      ),
    ],
    relatedCharacters: ['rykard', 'tanith', 'rya', 'patches', 'diallos'],
    relatedRegions: ['mt-gelmir'],
    relatedConcepts: ['great-rune', 'crucible'],
  },

  'bloody-fingers': {
    summary: 'Culto sangriento al servicio de la Madre Informe a través de Mohg. Sus miembros invaden a otros Mancillados como ofrendas rituales a la diosa de la sangre.',
    deepLore: [
      h(2, 'El culto'),
      p(
        link('Varré', 'character', 'varre'),
        ' es la cara amable del culto: el reclutador. Bajo él operan invasores que cazan Mancillados a través del Interregno, sus sangre alimentando los rituales de ',
        link('Mohgwyn', 'region', 'mohgwyn'),
        '. La ',
        link('Madre Informe', 'concept', 'formless-mother'),
        ' es el destinatario final de cada ofrenda.',
      ),
    ],
    relatedCharacters: ['mohg', 'varre'],
    relatedRegions: ['mohgwyn'],
    relatedConcepts: ['formless-mother', 'bloodflame'],
  },

  'those-who-live-in-death': {
    summary: 'Seres que viven sin almas en cuerpos animados por la Deathroot. No mueren porque la Muerte Predestinada está sellada. Son la herida de Godwyn manifestada en miles de cuerpos.',
    deepLore: [
      h(2, 'La existencia parcial'),
      p(
        'Aquellos que Viven en la Muerte tienen cuerpos sin almas. La forma original es ',
        link('Godwyn', 'character', 'godwyn'),
        ' bajo Deeproot Depths; las formas derivadas son los cadáveres reanimados que se encuentran en las raíces del Erdtree. Su existencia es puramente material — sin conciencia, sin descanso.',
      ),
      h(2, 'El cierre piadoso'),
      p(
        link('Fia', 'character', 'fia'),
        ' lucha por darles muerte verdadera a través de la ',
        link('Era del Crepúsculo', 'ending', 'duskborn'),
        '. ',
        link('D', 'character', 'd'),
        ' lucha por exterminarlos por considerarlos blasfemia. Los dos reflejan posturas opuestas frente al mismo problema.',
      ),
    ],
    relatedCharacters: ['godwyn', 'fia', 'd', 'rogier', 'maliketh'],
    relatedRegions: ['deeproot-depths'],
    relatedConcepts: ['destined-death', 'rune-of-death', 'deathroot'],
    relatedEndings: ['duskborn'],
  },

  deathbirds: {
    summary: 'Pájaros-cadáver fanáticos que rondan la Deathroot. Son criaturas de las eras pre-Orden, posibles aliados del culto de la Llama Negra.',
    deepLore: [
      h(2, 'Los necrófagos'),
      p(
        'Los Deathbirds son aves carroñeras gigantes que se alimentan exclusivamente de la ',
        link('Deathroot', 'concept', 'deathroot'),
        '. Su existencia es signo de un ecosistema antiguo, anterior al Orden Dorado, que se ha adaptado a alimentarse de la herida cosmológica.',
      ),
    ],
    relatedConcepts: ['deathroot', 'destined-death'],
  },

  'kindred-of-rot': {
    summary: 'Hijas escarlatas de Malenia, criaturas creadas por la Floración. Existen como enjambre que aspira a la fusión total con sus iguales.',
    deepLore: [
      h(2, 'El enjambre'),
      p(
        'Cuando ',
        link('Malenia', 'character', 'malenia'),
        ' floreció en ',
        link('Caelid', 'region', 'caelid'),
        ', sus brotes escarlatas se dispersaron. La mayoría se convirtieron en criaturas-mosca-podredumbre que vagan por los pantanos. La excepción fue ',
        link('Millicent', 'character', 'millicent'),
        ', que desarrolló identidad humana.',
      ),
    ],
    relatedCharacters: ['malenia', 'millicent', 'gowry'],
    relatedRegions: ['caelid', 'lake-of-rot'],
    relatedConcepts: ['scarlet-rot'],
  },

  perfumers: {
    summary: 'Sirvientes especializados del Orden Dorado en perfumes alquímicos para combate y embalsamamiento. Cada arte refinado del régimen es también una herramienta de guerra.',
    deepLore: [
      h(2, 'El refinamiento utilitario'),
      p(
        'Los Perfumers son alquimistas asociados al ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' que destilan aceites para fines simultáneamente cosméticos y bélicos. Curación, fuego ácido, vapor venenoso — todo desde la misma destilería.',
      ),
    ],
    relatedFactions: ['orden-dorado'],
  },

  'raya-lucaria': {
    summary: 'Academia de magia estelar fundada en Liurnia. Centro intelectual del Interregno donde Rennala enseñó hasta su quiebre y Sellen fue excomulgada por exceder los límites permitidos.',
    deepLore: [
      h(2, 'La institución del saber'),
      p(
        'Raya Lucaria es la academia de magia más prestigiosa del Interregno, fundada en torno a ',
        link('Rennala', 'character', 'rennala'),
        ' como Gran Maestra. Su corpus académico se especializa en magia estelar, gravitacional y de cristales primordiales.',
      ),
      h(2, 'La política del exceso'),
      p(
        link('Sellen', 'character', 'sellen'),
        ' descubrió que existe un nivel de saber que la Academia no permite. Su excomunión es ejemplo de cómo las instituciones del Orden — incluso las más laicas — sancionan el conocimiento que las amenaza.',
      ),
    ],
    relatedCharacters: ['rennala', 'radagon', 'sellen', 'ranni'],
    relatedRegions: ['liurnia', 'raya-lucaria'],
    relatedFactions: ['caria'],
    relatedConcepts: ['dark-moon'],
  },

  caria: {
    summary: 'Casa real-mestiza fundada por la unión Radagon-Rennala. Madre de Ranni, Radahn y Rykard. Su legado es la magia lunar, el conflicto identitario y la rebelión cósmica.',
    deepLore: [
      h(2, 'La dinastía mestiza'),
      p(
        'Caria nació del matrimonio entre la reina liurnia ',
        link('Rennala', 'character', 'rennala'),
        ' y el conquistador del Orden Dorado ',
        link('Radagon', 'character', 'radagon'),
        '. Sus tres hijos cargan en distintas direcciones: ',
        link('Ranni', 'character', 'ranni'),
        ' la rebelión cosmológica, ',
        link('Radahn', 'character', 'radahn'),
        ' la fidelidad guerrera, ',
        link('Rykard', 'character', 'rykard'),
        ' la blasfemia.',
      ),
      h(2, 'Lo que queda'),
      p(
        'Tras el abandono de Radagon, Caria se replegó. La familia ha producido los conspiradores más sofisticados del Interregno: cada hijo es respuesta opuesta a un mismo trauma de origen.',
      ),
    ],
    relatedCharacters: ['rennala', 'radagon', 'ranni', 'radahn', 'rykard', 'iji', 'seluvis', 'blaidd'],
    relatedRegions: ['liurnia', 'raya-lucaria'],
    relatedFactions: ['raya-lucaria'],
    relatedConcepts: ['dark-moon', 'age-of-stars'],
  },
}
