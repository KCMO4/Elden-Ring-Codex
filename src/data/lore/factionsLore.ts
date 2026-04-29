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

  /* ════════════════ Mass promotion batch — facciones/especies partial ════════════════ */

  haligtree: {
    summary:
      'Los Seguidores del Haligtree son la única utopía documentada del Interregno: refugiados Albinaurics, Misbegotten y excluidos del Orden Dorado convertidos en comunidad funcional bajo el árbol alternativo de Miquella. Su existencia es prueba de que el cosmos podía haber sido distinto. Su contaminación posterior por la Podredumbre demuestra por qué no lo fue.',
    deepLore: [
      h(2, 'Origen del proyecto'),
      p(
        link('Miquella', 'character', 'miquella'),
        ' diseñó el Haligtree como cosmología alternativa al ',
        link('Erdtree', 'concept', 'erdtree'),
        '. La premisa: ningún ser sería rechazado por su forma. Los excluidos del régimen oficial — ',
        link('Albinaurics', 'faction', 'albinauricos'),
        ', ',
        link('Misbegotten', 'faction', 'misbegotten'),
        ', malformados de todas las regiones — peregrinaron a través del Snowfield para llegar al árbol.',
      ),
      h(2, 'Vida bajo el árbol'),
      p(
        'Los Seguidores construyeron ',
        link('Elphael', 'region', 'elphael'),
        ' bajo las raíces del Haligtree. Convivían como iguales bajo la luz del ',
        link('Oro sin Aleación', 'concept', 'unalloyed-gold'),
        '. Su clero era mixto, su gobierno era distribuido, su seguridad estaba en manos de los ',
        link('Cleanrot Knights', 'faction', 'cleanrot-knights'),
        ' al servicio de ',
        link('Malenia', 'character', 'malenia'),
        '.',
      ),
      h(2, 'Caída'),
      p(
        'Tras la Batalla de Aeonia y el secuestro de Miquella por Mohg, el proyecto colapsó gradualmente. La Podredumbre residual de Malenia infectó al árbol mismo. Los Albinaurics enloquecieron y se transformaron. Los Cleanrot Knights perdieron control progresivo. Cuando el Mancillado llega, Elphael es ciudad arruinada que conserva la forma utópica vacía de su contenido.',
      ),
    ],
    confirmed: [
      'Los Seguidores del Haligtree refugiaron a Albinaurics y Misbegotten',
      'Convivían como iguales bajo la luz del Oro sin Aleación',
      'Los Cleanrot Knights eran su guardia militar',
      'La Podredumbre de Malenia infectó el árbol post-Aeonia',
    ],
    inferred: [
      'Era la única utopía documentada del Interregno',
      'Su éxito dependía estructuralmente de la protección de Malenia',
      'El secuestro de Miquella detuvo el proyecto definitivamente',
    ],
    theories: [
      'Si Miquella despertara, podría revertir la corrupción del Haligtree',
      'Algunos Seguidores conservan consciencia residual durante su transformación',
      'El proyecto era amenaza estructural a la Voluntad Mayor — su caída no fue accidente',
    ],
    ambiguous: [
      'Cuántos Seguidores había antes de la corrupción',
      'Si el árbol mismo conserva voluntad propia',
      'Si la utopía podría restaurarse bajo otra cosmología',
    ],
    relatedCharacters: ['miquella', 'malenia', 'royal-knight-loretta', 'millicent'],
    relatedFactions: ['albinauricos', 'misbegotten', 'cleanrot-knights'],
    relatedRegions: ['haligtree', 'elphael', 'consecrated-snowfield', 'ordina'],
    relatedConcepts: ['unalloyed-gold', 'erdtree', 'scarlet-rot'],
    relatedTimelineEvents: ['unalloyed-gold-haligtree', 'mohg-toma-miquella'],
  },

  fundamentalistas: {
    summary:
      'Los Fundamentalistas del Orden Dorado son la única tradición intelectual del régimen capaz de criticarlo desde dentro. Heredan el proyecto reformista de Radagon: corregir la falla lógica del Orden Dorado para alcanzar la Ley Mayor. Goldmask y Brother Corhyn son sus únicos miembros activos. Su filosofía culmina en la Era del Orden.',
    deepLore: [
      h(2, 'Origen filosófico'),
      p(
        link('Radagon', 'character', 'radagon'),
        ' codificó el Fundamentalismo del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' durante sus eras de reparación del Anillo Elden. La premisa: el Orden Dorado en su forma actual contiene una contradicción lógica interna — y si esa contradicción se corrige, el cosmos se vuelve perfectamente coherente.',
      ),
      h(2, 'Discípulos activos'),
      p(
        link('Goldmask', 'character', 'goldmask'),
        ' es el único monje vivo capaz de operar la corrección. Su silencio absoluto es disciplina ritual, no defecto. ',
        link('Corhyn', 'character', 'corhyn'),
        ' lo acompaña como traductor parcial — el único que oye los pensamientos no pronunciados del maestro y los comparte con el Mancillado.',
      ),
      h(2, 'La revelación final'),
      p(
        'Goldmask alcanza la conclusión cosmológica: la Ley Mayor está mal formulada. La frase "Radagon es Marika" es revelación clave — la fusión interna de los dos aspectos divinos es la falla estructural. La corrección produce la ',
        link('Era del Orden', 'ending', 'order'),
        ': un cosmos perfectamente coherente, frío, sin grietas, sin espacio para lo no encajable.',
      ),
    ],
    confirmed: [
      'Los Fundamentalistas heredan el proyecto reformista de Radagon',
      'Goldmask y Corhyn son sus únicos miembros activos',
      'La frase "Radagon es Marika" es revelación clave de su filosofía',
      'Su tradición culmina en la Era del Orden',
    ],
    inferred: [
      'Su rama intelectual era casi extinta antes de Goldmask',
      'Otras eras tuvieron Fundamentalistas que fueron silenciados',
      'La corrección de la Ley Mayor era anticipada por Radagon como meta diferida',
    ],
    theories: [
      'Marika misma podría haber alentado secretamente la línea Fundamentalista',
      'La Era del Orden elimina la individualidad además de las contradicciones',
      'Sus textos sobreviven en bibliotecas dispersas que ningún Mancillado ha encontrado',
    ],
    ambiguous: [
      'Cuántos Fundamentalistas existieron antes de Goldmask',
      'Si Corhyn comprende plenamente la filosofía de su maestro',
      'Si la corrección final es genuinamente perfeccionamiento o solo simplificación',
    ],
    relatedCharacters: ['goldmask', 'corhyn', 'radagon', 'marika'],
    relatedFactions: ['orden-dorado', 'finger-readers'],
    relatedRegions: ['leyndell'],
    relatedConcepts: ['golden-order', 'law-of-regression', 'voluntad-mayor'],
    relatedTimelineEvents: ['radagon-repair-attempt'],
    relatedEndings: ['order'],
  },

  'finger-readers': {
    summary:
      'Las Lectoras de Dedos son sacerdotisas-traductoras del régimen del Orden Dorado. Su función específica: convertir los gestos físicos de los Dos Dedos en palabras humanas. La cadena de mediación es larga (Voluntad Mayor → Dedos → Lectoras → mortales) y, post-fractura, cada vez más rota.',
    deepLore: [
      h(2, 'Función ritual'),
      p(
        'Los ',
        link('Dos Dedos', 'faction', 'dos-dedos'),
        ' no piensan — traducen. Reciben voluntad de la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' y la convierten en gestos físicos. Esos gestos requieren a su vez ser traducidos a palabras. Las Lectoras son el último eslabón humano de la cadena.',
      ),
      h(2, 'Estructura institucional'),
      p(
        link('Enia', 'character', 'enia'),
        ' es la Lectora principal en la Mesa Redonda. Otras Lectoras del Crucible operan en regiones marginales como satélites de la institución central. Sus visiones rituales requieren ceguera ritualizada — ven con los dedos, no con los ojos.',
      ),
      h(2, 'Crisis post-fractura'),
      p(
        'Tras la fractura del Anillo Elden, los Dedos están deteriorándose. Sus pronunciamientos son cada vez más vagos. Las Lectoras continúan oficiando — la liturgia sobrevive aunque el contenido se disuelva. Es la fe que se sostiene en silencio.',
      ),
    ],
    confirmed: [
      'Las Lectoras traducen los gestos de los Dos Dedos a palabras humanas',
      'Enia es la Lectora principal de la Mesa Redonda',
      'Su ceguera es ritual, no defecto',
      'Continúan oficiando aunque los Dedos se deterioran',
    ],
    inferred: [
      'Múltiples Lectoras coexisten en distintas regiones',
      'Su entrenamiento ritual es largo y específico',
      'Sospechan la retirada parcial de la Voluntad Mayor pero no pueden decirlo',
    ],
    theories: [
      'Conocen secretos del régimen que ningún otro mortal accede',
      'Su ceguera permite ver dimensiones cosmológicas vedadas a los videntes',
      'Algunas Lectoras desertaron al ver lo que sus dedos leían',
    ],
    ambiguous: [
      'Cómo se reclutan nuevas Lectoras tras la fractura',
      'Si pueden mentir o están ritualmente forzadas a la fidelidad',
      'Si los Dedos podridos siguen comunicando algo',
    ],
    relatedCharacters: ['enia', 'marika'],
    relatedFactions: ['dos-dedos', 'orden-dorado'],
    relatedRegions: ['leyndell'],
    relatedConcepts: ['voluntad-mayor', 'great-rune'],
    relatedTimelineEvents: ['two-fingers-roundtable'],
  },

  'fire-giants': {
    summary:
      'Los Gigantes del Fuego fueron pueblo cosmológicamente independiente cuya llama era hostil al Erdtree por designio. Marika ordenó su exterminio. Godfrey lideró el genocidio. El último gigante fue encadenado como custodio eterno de la llama que no pudo ser destruida — y que eras después prendería el árbol que ordenó su matanza.',
    deepLore: [
      h(2, 'Origen y cosmología'),
      p(
        'Los Gigantes del Fuego habitaban las ',
        link('Mountaintops', 'region', 'mountaintops'),
        ' como pueblo independiente del Orden Dorado. Adoraban al ',
        link('Fell God', 'concept', 'fell-god'),
        ', dios externo del fuego primigenio. Su llama era específicamente capaz de quemar al ',
        link('Erdtree', 'concept', 'erdtree'),
        ' — amenaza estructural absoluta al régimen dorado.',
      ),
      h(2, 'La guerra'),
      p(
        link('Godfrey', 'character', 'godfrey'),
        ' lideró el exterminio. La operación duró eras y consumió generaciones de soldados dorados. Casi todos los gigantes fueron asesinados. Los pocos supervivientes incluyen a ',
        link('Iji', 'character', 'iji'),
        ' (reformado al servicio Caria) y al ',
        link('último Gigante del Fuego', 'character', 'fire-giant'),
        ' (encadenado en la Forja).',
      ),
      h(2, 'La paradoja del confinamiento'),
      p(
        'La Llama Quemadora no pudo ser destruida — solo confinada. El último gigante quedó como custodio eterno. Eras después, cuando el Erdtree rechazó al Mancillado, esa misma llama fue lo que prendió el árbol. ',
        link('Melina', 'character', 'melina'),
        ' se inmoló como portadora ritual. El régimen exterminó al pueblo cuya llama eventualmente lo destruyó.',
      ),
    ],
    confirmed: [
      'Los Gigantes del Fuego adoraban al Fell God',
      'Su llama era específicamente hostil al Erdtree',
      'Marika ordenó su exterminio, Godfrey lo lideró',
      'La Llama Quemadora fue confinada con el último gigante como custodio',
      'Esa llama es la que prende el Erdtree al final del juego',
    ],
    inferred: [
      'El Fell God es dios externo distinto de la Voluntad Mayor',
      'La guerra duró eras y consumió generaciones',
      'Iji fue uno de los pocos gigantes reformados',
    ],
    theories: [
      'Marika sabía que la llama eventualmente sería necesaria — el confinamiento fue siembra estratégica',
      'Algunos gigantes sobrevivieron escondidos en otras regiones',
      'El Fell God sigue activo cosmológicamente aunque su pueblo sea casi extinto',
    ],
    ambiguous: [
      'Cuántos gigantes había antes de la guerra',
      'Si los Zamor fueron aliados o cazadores oportunistas',
      'Si la llama tiene voluntad propia o solo materialidad hostil',
    ],
    relatedCharacters: ['godfrey', 'marika', 'melina', 'fire-giant', 'iji', 'zamor-heroes'],
    relatedFactions: ['orden-dorado'],
    relatedRegions: ['mountaintops'],
    relatedConcepts: ['fell-god', 'erdtree', 'dioses-exteriores'],
    relatedTimelineEvents: ['guerra-gigantes-fuego', 'flame-of-ruin-confined', 'erdtree-quemado'],
  },

  'golden-lineage': {
    summary:
      'El Linaje Dorado es la línea sanguínea oficial del Orden Dorado: descendientes directos de Marika con derecho de sucesión al Anillo Elden. La línea visible mostraba pureza; la línea real escondía Omens encarcelados, gemelos malditos, hijos no nacidos. Cada generación fue acercándose a la fractura inevitable.',
    deepLore: [
      h(2, 'Estructura dinástica'),
      p(
        link('Marika', 'character', 'marika'),
        ' como vasija central engendró múltiples generaciones. La primera con ',
        link('Godfrey', 'character', 'godfrey'),
        ' produjo a ',
        link('Godwyn', 'character', 'godwyn'),
        ' como heredero visible. La segunda con ',
        link('Radagon', 'character', 'radagon'),
        ' (su otro yo) produjo Omens (',
        link('Morgott', 'character', 'morgott'),
        ', ',
        link('Mohg', 'character', 'mohg'),
        ') y Empyreans malditos (',
        link('Malenia', 'character', 'malenia'),
        ', ',
        link('Miquella', 'character', 'miquella'),
        ').',
      ),
      h(2, 'La línea oficial vs la línea real'),
      p(
        'La sucesión pública mostraba a Godwyn como ejemplo arquetípico de pureza. Los Omens fueron encarcelados secretamente bajo ',
        link('Leyndell', 'region', 'leyndell'),
        '. Los Empyreans malditos fueron tolerados pero marginalizados (Malenia infectada, Miquella eterno-niño). La hipocresía era estructural: cada generación traía nuevas grietas escondidas.',
      ),
      h(2, 'Decadencia post-fractura'),
      p(
        'Tras la fractura, los descendientes laterales heredaron el peso del linaje sin la fuerza original. ',
        link('Godrick', 'character', 'godrick'),
        ' es el ejemplo cumbre: bisnieto de Godfrey por línea diluida, mantiene su Gran Runa solo mediante injertos rituales. El linaje oficial murió cuando murió Godwyn; lo que queda es decadencia aristocrática llevada al absurdo.',
      ),
    ],
    confirmed: [
      'El Linaje Dorado es descendencia oficial de Marika',
      'Godwyn fue heredero visible y arquetípico',
      'Morgott y Mohg fueron encarcelados como Omens',
      'Godrick mantiene su sangre diluida mediante injertos',
    ],
    inferred: [
      'La línea pública era propaganda cosmológica',
      'Cada generación generó más contradicciones internas',
      'Nepheli Loux es heredera lateral pero más legítima que Godrick',
    ],
    theories: [
      'Marika engendró otros hijos no documentados que fueron eliminados',
      'Melina es hija no nacida de Marika',
      'Existen otros descendientes laterales en regiones marginales',
    ],
    ambiguous: [
      'Cuántos hijos engendró Marika en total',
      'Si Godfrey conocía la existencia de los Omens',
      'Si la sangre Empyrean puede revivir en descendientes laterales',
    ],
    relatedCharacters: ['marika', 'godfrey', 'godwyn', 'morgott', 'mohg', 'malenia', 'miquella', 'godrick', 'nepheli-loux', 'radagon'],
    relatedFactions: ['orden-dorado', 'omens'],
    relatedRegions: ['leyndell', 'stormveil'],
    relatedConcepts: ['great-rune', 'empyrean'],
    relatedTimelineEvents: ['nacimiento-linaje-dorado', 'godrick-grafting'],
  },

  /* ──────── Razas/especies partial ──────── */

  'silver-mimic-tears': {
    summary:
      'Las Lágrimas de Plata y Mimic Tears son tecnología cosmológica residual de los Nox: criaturas líquidas argénteas capaces de imitar formas con perfección absoluta. Su sofisticación documenta una alternativa al Orden Dorado que el régimen jamás igualó. Hoy son espíritus invocables que el Mancillado puede usar.',
    deepLore: [
      h(2, 'Origen tecnológico'),
      p(
        'Los ',
        link('Nox', 'faction', 'nox'),
        ' desarrollaron las Silver Tears como prototipo de un proyecto teológico ambicioso: forjar su propio dios. Las Lágrimas eran experimento preliminar — vida artificial maleable capaz de adoptar cualquier forma. Su sofisticación cosmológica excede lo que el Orden Dorado documenta haber alcanzado.',
      ),
      h(2, 'Mimic Tears'),
      p(
        'Los Mimic Tears son variantes superiores. Copian al observador con perfección absoluta — equipo, estadísticas, tácticas, todo. El Mancillado puede invocar uno como espíritu durante combates específicos. Cada uso es eco residual del proyecto blasfemo más sofisticado del Interregno.',
      ),
    ],
    confirmed: [
      'Silver Tears son creación Nox',
      'Mimic Tears son variantes superiores',
      'Imitan al observador con precisión total',
      'Sobreviven en las ruinas de Nokron y Nokstella',
    ],
    inferred: [
      'Eran prototipos del proyecto del cuerpo divino',
      'Su tecnología excede la del Orden Dorado',
      'Conservan algún tipo de consciencia residual',
    ],
    theories: [
      'Cada Mimic Tear contiene fragmentos de un alma Nox',
      'Bajo condiciones específicas podrían producir un dios completo',
      'Algunas Mimic Tears han escapado de Nokstella y operan en otras regiones',
    ],
    ambiguous: [
      'Si tienen voluntad propia o son puramente reactivas',
      'Cuándo exactamente fueron creadas',
      'Si podrían unirse formando una entidad mayor',
    ],
    relatedCharacters: ['ranni'],
    relatedFactions: ['nox'],
    relatedRegions: ['nokron', 'nokstella', 'ainsel-river'],
    relatedConcepts: ['mimic-tear', 'voluntad-mayor'],
    relatedTimelineEvents: ['silver-tears-creation', 'nox-ciudades-eternas'],
  },

  'living-jars': {
    summary:
      'Los Jarros Vivientes son pueblo nómada de Jarburg cuyos cuerpos están parcialmente disueltos dentro de cerámica ritual. Su existencia documenta una tradición de transformación corporal voluntaria: ser jarro es trascender la fragilidad humana sin perder el alma. Alexander, Boggart, Iris y Jar-Bairn son sus miembros visibles.',
    deepLore: [
      h(2, 'Origen del rito'),
      p(
        'El pueblo de Jarburg en Liurnia practicaba la conversión voluntaria a Living Jars como rito de paso espiritual. La transformación combina cuerpo humano parcialmente disuelto con cerámica ritualizada. El alma se preserva; el cuerpo se vuelve contenedor.',
      ),
      h(2, 'Miembros conocidos'),
      p(
        link('Alexander', 'character', 'alexander'),
        ' es el más prominente — Olla Guerrera con vocación marcial. ',
        link('Boggart', 'character', 'boggart'),
        ' es pescador con disfraz protector. ',
        link('Jar-Bairn', 'character', 'jar-bairn'),
        ' es el joven heredero criado en Jarburg. ',
        link('Diallos', 'character', 'diallos'),
        ' muere protegiéndolos.',
      ),
      h(2, 'Significado'),
      p(
        'Su tradición es uno de los pocos cultos no-violentos del Interregno. Su existencia documenta que el cuerpo humano es modificable más profundamente de lo que el Orden Dorado oficialmente permite. Su vulnerabilidad — son frágiles cerámicamente — los hace blanco fácil de cualquier atacante.',
      ),
    ],
    confirmed: [
      'Los Living Jars conservan almas humanas dentro de cerámica',
      'La conversión es ritual voluntario',
      'Habitan principalmente Jarburg en Liurnia',
      'Su tradición es no-violenta',
    ],
    inferred: [
      'El rito predata al Orden Dorado',
      'No todos los Living Jars contienen almas — algunos son cerámica vacía',
      'La conversión requiere conocimiento ritual específico',
    ],
    theories: [
      'Algunos contienen almas de guerreros legendarios',
      'Si Jar-Bairn culmina su entrenamiento, sería heredero del legado de Alexander',
      'La cerámica protectora es magia ritual, no solo material',
    ],
    ambiguous: [
      'Cómo exactamente se realiza el rito',
      'Cuántos Living Jars existieron antes de la persecución',
      'Si conservan memoria de su forma humana original',
    ],
    relatedCharacters: ['alexander', 'boggart', 'jar-bairn', 'diallos'],
    relatedFactions: ['nomadic-merchants'],
    relatedRegions: ['liurnia'],
  },

  omenkillers: {
    summary:
      'Los Verdugos Omen son cazadores y carniceros oficiales del Orden Dorado dedicados a ejecutar Omens recién nacidos o capturados. Su oficio fue creado por la propia ley del régimen. Oficiaban rituales de "neutralización" sobre los gemelos Morgott y Mohg durante su juventud bajo Leyndell.',
    deepLore: [
      h(2, 'Función institucional'),
      p(
        'Los Omenkillers fueron creados como mano ejecutora del régimen contra los ',
        link('Omens', 'faction', 'omens'),
        '. Su oficio es ritualmente sagrado dentro del Orden Dorado: cada Omen ejecutado o "neutralizado" es servicio cosmológico al régimen.',
      ),
      h(2, 'Práctica ritual'),
      p(
        'Su práctica incluye serrucharles cuernos a Omens jóvenes, aplicar rituales correctivos, y ejecutar a quienes excedan los límites. ',
        link('Morgott', 'character', 'morgott'),
        ' y ',
        link('Mohg', 'character', 'mohg'),
        ' fueron sometidos a estos rituales durante su juventud bajo el Subsuelo Shunning-Grounds.',
      ),
      h(2, 'Existencia paradójica'),
      p(
        'Algunos Verdugos Omen son ellos mismos Omens convertidos al servicio del régimen — el oprimido que se vuelve verdugo de su propia categoría. Esa contradicción interna es característica del régimen entero: la ley se aplica usando los cuerpos que la ley clasifica como aberración.',
      ),
    ],
    confirmed: [
      'Los Omenkillers cazan y ejecutan Omens',
      'Su oficio es sagrado dentro del Orden Dorado',
      'Oficiaron rituales sobre Morgott y Mohg en su juventud',
      'Algunos son ellos mismos Omens convertidos',
    ],
    inferred: [
      'Su existencia confirma persecución sistemática contra Omens',
      'Su entrenamiento es ritual e institucional',
      'Continúan operativos incluso post-fractura',
    ],
    theories: [
      'El Orden recluta Omenkillers de Omens jóvenes "reformados"',
      'Conocen secretos sobre la Maldición Omen que el régimen prefiere ocultar',
      'Algunos desertaron al Volcano Manor',
    ],
    ambiguous: [
      'Cuántos Omenkillers operan actualmente',
      'Si tienen jerarquía interna',
      'Si pueden cuestionar las órdenes que reciben',
    ],
    relatedCharacters: ['morgott', 'mohg', 'marika'],
    relatedFactions: ['omens', 'orden-dorado'],
    relatedRegions: ['leyndell', 'subterranean-shunning-grounds'],
    relatedConcepts: ['omen-curse', 'crucible'],
    relatedTimelineEvents: ['morgott-mohg-imprisonment'],
  },

  'banished-knights': {
    summary:
      'Los Caballeros Desterrados fueron orden caballeresca antiguamente leal al Orden Dorado, exiliada por desviación doctrinal. Bernahl es su líder superviviente. Su filosofía: el honor marcial es independiente del régimen. Pero el exilio sin estructura institucional protectora los hizo vulnerables a la blasfemia del Volcano Manor.',
    deepLore: [
      h(2, 'Origen del exilio'),
      p(
        'Los Banished Knights fueron orden caballeresca con tradición específica: defender lo justo aunque el régimen oficial no lo apruebe. Su devoción al honor marcial autónomo los llevó a desviarse de la doctrina central. El régimen los exilió como medida disciplinaria.',
      ),
      h(2, 'Vida post-exilio'),
      p(
        link('Bernahl', 'character', 'bernahl'),
        ' encabeza a los supervivientes desde el Warmaster\'s Shack en Stormhill. Vende invocaciones de Banished Knights muertos como espíritus combatientes. Su filosofía pública sigue siendo el honor marcial autónomo.',
      ),
      h(2, 'Caída en el Volcano Manor'),
      p(
        'Pero el exilio sin estructura institucional protectora hizo a los Banished Knights vulnerables a cualquier oferta de pertenencia. Bernahl eventualmente cayó al servicio de ',
        link('Rykard', 'character', 'rykard'),
        ' como Recusante. La trayectoria del líder representa la trayectoria del orden entero: del honor marcial autónomo a la blasfemia institucional.',
      ),
    ],
    confirmed: [
      'Los Banished Knights fueron orden exiliada del Orden Dorado',
      'Bernahl es su líder superviviente',
      'Vende invocaciones espirituales de sus camaradas muertos',
      'Bernahl cayó al servicio de Rykard como Recusante',
    ],
    inferred: [
      'Su exilio fue por desviación doctrinal, no por incompetencia marcial',
      'Su filosofía original era ideológicamente coherente',
      'La caída de Bernahl es trayectoria predecible para órdenes sin estructura protectora',
    ],
    theories: [
      'Otros Banished Knights desertaron al Volcano Manor con Bernahl',
      'Algunos sobreviven escondidos rechazando tanto el régimen oficial como la blasfemia',
      'Su exilio fue maniobra política específica de un facción del Orden contra otra',
    ],
    ambiguous: [
      'Cuándo exactamente fueron exiliados',
      'Cuántos Banished Knights vivos hay actualmente',
      'Si su tradición original puede ser recuperada',
    ],
    relatedCharacters: ['bernahl', 'rykard', 'tanith'],
    relatedFactions: ['orden-dorado', 'volcano-manor'],
    relatedRegions: ['stormveil', 'mt-gelmir'],
  },

  'frenzied-victims': {
    summary:
      'Las Víctimas de la Llama Frenética son mortales infectados por la radiación amarilla de los Tres Dedos. Sus ojos son devorados por la llama; su voz se vuelve canto del fin universal. La frenética verdad — que todo sufrimiento debe terminar quemándolo — es predicada por sus bocas. Hyetta es su ejemplo más visible.',
    deepLore: [
      h(2, 'Mecánica del contagio'),
      p(
        'La Llama Frenética se propaga por contacto cosmológico, no por contacto físico. Una víctima escucha la doctrina, la siente como verdad, y comienza la transformación. Sus ojos arden amarillos; su voz pronuncia profecías del fin; su cuerpo desarrolla espirales de fuego que no consumen.',
      ),
      h(2, 'Categorías de víctimas'),
      p(
        link('Hyetta', 'character', 'hyetta'),
        ' es víctima ritualizada: doncella designada del Señor de la Llama Frenética. ',
        link('Shabriri', 'character', 'shabriri'),
        ' es víctima activa: posee huéspedes para propagar la doctrina. Las víctimas anónimas — campesinos, peregrinos, prisioneros — son contagio pasivo: sus bocas predican sin que ellos elijan.',
      ),
    ],
    confirmed: [
      'Las víctimas frenéticas portan ojos amarillos ardientes',
      'Sus voces predican la frenética verdad',
      'Hyetta es la víctima ritualizada principal',
      'Shabriri propaga la doctrina por posesión',
    ],
    inferred: [
      'El contagio es cosmológico, no físico',
      'Cada víctima es vehículo del próximo ciclo de propagación',
      'La cripta sellada bajo Leyndell es origen de la radiación',
    ],
    theories: [
      'Algunas víctimas sobreviven con consciencia residual de su yo previo',
      'La radiación crece más fuerte cuanto más cerca del sello',
      'Si el sello cae, todo el Interregno se transformaría en víctimas',
    ],
    ambiguous: [
      'Cuántas víctimas hay actualmente',
      'Si la transformación es reversible',
      'Si las víctimas conservan algún tipo de comunidad o son fragmentos aislados',
    ],
    relatedCharacters: ['hyetta', 'shabriri', 'melina'],
    relatedFactions: ['tres-dedos'],
    relatedRegions: ['leyndell', 'subterranean-shunning-grounds'],
    relatedConcepts: ['frenzied-flame', 'dioses-exteriores'],
    relatedEndings: ['frenzied-flame'],
  },

  'crucible-knights': {
    summary:
      'Los Caballeros del Crisol fueron una de las primeras órdenes marciales del Orden Dorado primitivo, antes de que el régimen se volviese hostil al Crisol. Sus armaduras incorporan formas del Crisol — alas, escamas, cuernos — como marca de continuidad. Hoy son reliquia: nadie nuevo se inicia en su orden.',
    deepLore: [
      h(2, 'Tradición integradora'),
      p(
        'Los Crucible Knights pertenecen al período del Orden Dorado primitivo en que el régimen aún integraba formas del ',
        link('Crisol', 'concept', 'crucible'),
        ' como tradición sagrada. Sus armaduras llevan deliberadamente alas, escamas y cuernos como signo de continuidad cosmológica.',
      ),
      h(2, 'Marginalización progresiva'),
      p(
        'Cuando el régimen se volvió hostil al Crisol, la orden quedó marginalizada. Sus rituales fueron tolerados pero no propagados. Sus iniciaciones cesaron. Los miembros existentes siguieron operando hasta morir, sin sustitutos. Ordovis es el último ejemplo prominente — su Greatsword conserva técnicas que ningún discípulo nuevo ha aprendido.',
      ),
      h(2, 'Reliquia funcional'),
      p(
        'Hoy los Crucible Knights aparecen patrullando catacumbas y fortalezas en bucles eternos. Su lealtad sobrevive a su consciencia: defienden tradiciones que el régimen ya no respalda. Su conocimiento del injerto sirve como precedente filosófico al de ',
        link('Godrick', 'character', 'godrick'),
        ', aunque la tradición original era ritual integrador, no técnica corporal cruda.',
      ),
    ],
    confirmed: [
      'Los Crucible Knights pertenecen al Orden Dorado primitivo',
      'Sus armaduras incorporan iconografía del Crisol',
      'Ordovis es el último ejemplo prominente',
      'No se inician nuevos miembros',
    ],
    inferred: [
      'Su marginalización fue gradual, no súbita',
      'Su conocimiento ritual fue precedente filosófico del injerto de Godrick',
      'Algunas tradiciones suyas sobreviven en ramas marginales del régimen',
    ],
    theories: [
      'Algunos miembros activos conservan consciencia residual',
      'Su tradición podría ser revivida si el Crisol regresa cosmológicamente',
      'Compartían información secreta sobre Marika y los gemelos Omens',
    ],
    ambiguous: [
      'Cuántos Crucible Knights operan actualmente',
      'Si sus iniciaciones cesaron por decreto o por extinción natural',
      'Si Marika misma autorizó la marginalización',
    ],
    relatedCharacters: ['crucible-knight-ordovis', 'godrick'],
    relatedFactions: ['orden-dorado'],
    relatedRegions: ['leyndell'],
    relatedConcepts: ['crucible', 'grafting'],
  },
}
