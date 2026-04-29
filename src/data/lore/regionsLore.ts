import type { DeepEntity, RichBlock, RichInline } from '../types'

const link = (label: string, targetType: 'character' | 'region' | 'faction' | 'concept' | 'ending' | 'timeline', slug: string): RichInline =>
  ({ type: 'link', label, targetType, slug })
const p = (...children: RichInline[]): RichBlock =>
  ({ type: 'paragraph', children })
const h = (level: 2 | 3, text: string, id?: string): RichBlock =>
  ({ type: 'heading', level, text, id })

export const regionsLore: Record<string, Partial<DeepEntity>> = {

  limgrave: {
    summary: 'Tierra de entrada del Mancillado al Interregno: praderas verdes y costas templadas que esconden bajo su tranquilidad las ruinas de civilizaciones más antiguas que el Orden Dorado.',
    deepLore: [
      h(2, 'La fachada apacible'),
      p(
        'Limgrave es la primera tierra que el ',
        link('Mancillado', 'concept', 'tarnished'),
        ' pisa al regresar del exilio. Sus colinas onduladas y bosques antiguos sugieren un Interregno todavía habitable. La fachada es real, pero parcial: cada ruina y cada cripta delata civilizaciones más antiguas.',
      ),
      h(2, 'Lo que el Orden enterró'),
      p(
        'Bajo los Lagos de Agheel y en cuevas costeras yacen rituales del ',
        link('Crisol', 'concept', 'crucible'),
        ' — la fuerza primigenia que precedió al ',
        link('Erdtree', 'concept', 'erdtree'),
        ' actual. Estatuas con cuernos, raíces espinosas, criaturas con rasgos de otras especies. Todo lo que el Orden Dorado purgó por considerarlo "impuro" se conserva fosilizado bajo Limgrave.',
      ),
      h(2, 'Stormhill y Stormveil'),
      p(
        'La frontera norte está dominada por el castillo ',
        link('Stormveil', 'region', 'stormveil'),
        ', sede de ',
        link('Godrick', 'character', 'godrick'),
        '. Antes de él, el castillo fue de ',
        link('Godfrey', 'character', 'godfrey'),
        '. ',
        link('Margit', 'character', 'morgott'),
        ' aguarda en el portal como primer obstáculo del demidiós que llega.',
      ),
      h(2, 'Tragedias menores'),
      p(
        'Castle Morne, en la península llorosa al sur, fue tomado por los ',
        link('Misbegotten', 'faction', 'misbegotten'),
        ' que se rebelaron contra sus amos: prueba de que la opresión genera revuelta incluso lejos del centro de poder.',
      ),
    ],
    confirmed: ['Limgrave es la tierra de entrada al Interregno', 'Stormveil es ahora sede de Godrick', 'Castle Morne fue conquistado por los Misbegotten'],
    inferred: ['Las ruinas pre-Orden de Limgrave son indicios de civilizaciones del Crisol', 'La presencia de Margit aquí señala vigilancia de Morgott desde el principio'],
    relatedCharacters: ['godrick', 'morgott', 'godfrey', 'kenneth-haight', 'nepheli-loux', 'patches'],
    relatedFactions: ['orden-dorado', 'misbegotten'],
    relatedRegions: ['stormveil', 'peninsula-llorosa'],
    relatedConcepts: ['crucible', 'grace', 'tarnished'],
  },

  stormveil: {
    summary: 'Fortaleza de Godrick el Injertado, construida sobre el antiguo castillo de Godfrey. Sus muros están decorados con los cuerpos injertados de las víctimas de su señor — estética del despojo convertida en símbolo de poder.',
    deepLore: [
      h(2, 'El castillo del Primer Señor'),
      p(
        'Stormveil fue, originalmente, el palacio fronterizo de ',
        link('Godfrey', 'character', 'godfrey'),
        ' antes de ascender a Leyndell. Los rituales de la Tormenta — el Espíritu Tormenta atado en su frente — partían desde estas torres. Tras el exilio del Primer Señor, el castillo pasó por manos cada vez más débiles hasta caer en las de ',
        link('Godrick', 'character', 'godrick'),
        '.',
      ),
      h(2, 'La estética del injerto'),
      p(
        'Las paredes de Stormveil están adornadas con cuerpos injertados de soldados caídos: brazos múltiples saliendo de muros, manos desplegadas como decoración. Es la firma de Godrick. Su práctica de fortalecerse mediante injertos se convirtió en su lenguaje arquitectónico.',
      ),
      h(2, 'Lo que aguarda'),
      p(
        'Margit el Maleante (',
        link('Morgott', 'character', 'morgott'),
        ' disfrazado) es el centinela del portal. Vencerlo abre Stormveil; cruzar Stormveil entrega la primera Gran Runa al Mancillado.',
      ),
    ],
    relatedCharacters: ['godrick', 'godfrey', 'morgott', 'nepheli-loux', 'roderika'],
    relatedRegions: ['limgrave', 'leyndell'],
    relatedFactions: ['orden-dorado'],
    relatedConcepts: ['great-rune'],
  },

  liurnia: {
    summary: 'Las Tierras Inundadas: lago perpetuo, ruinas Caria, academia hechicera de Raya Lucaria. La región del agua, el conocimiento y la melancolía aristocrática.',
    deepLore: [
      h(2, 'Las tierras del lago'),
      p(
        'Liurnia es una vasta extensión inundada: ruinas hundidas, torres parcialmente sumergidas, brumas perpetuas. La tradición local cuenta que el agua llegó como castigo divino tras una guerra. Otros dicen que Liurnia siempre fue así y que los humanos solo aprendieron a vivir sobre el agua.',
      ),
      h(2, 'La conquista de Radagon'),
      p(
        link('Radagon', 'character', 'radagon'),
        ' lideró la guerra del Orden Dorado contra Liurnia. Tras la victoria, se casó con la reina vencida ',
        link('Rennala', 'character', 'rennala'),
        ' — fundando ',
        link('Caria', 'faction', 'caria'),
        ' como dinastía mestiza entre conquistadores y conquistados.',
      ),
      h(2, 'La Academia'),
      p(
        link('Raya Lucaria', 'region', 'raya-lucaria'),
        ' es el centro de magia del Interregno. Su director nominal es Rennala, pero el control efectivo lo lleva ',
        link('Radagon Reborn', 'character', 'radagon'),
        ' a través de fenómenos arcanos. La Academia mira a las estrellas: la magia de Liurnia es estelar, gravitacional, melancólica.',
      ),
      h(2, 'La memoria del agua'),
      p(
        'Liurnia es la tierra que no olvida. Cada ruina sumergida es testimonio de algo silenciado por el Orden. Los rituales de Caria conservan rezos pre-Orden disfrazados de cortesía aristocrática.',
      ),
    ],
    relatedCharacters: ['rennala', 'radagon', 'ranni', 'iji', 'seluvis'],
    relatedRegions: ['raya-lucaria'],
    relatedFactions: ['caria', 'raya-lucaria'],
    relatedConcepts: ['dark-moon', 'great-rune'],
    relatedTimelineEvents: ['radagon-rennala'],
  },

  caelid: {
    summary: 'El yermo escarlata. Antes hogar floreciente de los Redmanes; tras el duelo Malenia-Radahn, una tierra de podredumbre eterna donde no crece nada y no muere del todo nadie.',
    deepLore: [
      h(2, 'La tierra antes del horror'),
      p(
        'Caelid fue, antes de la fractura, una región próspera bajo el liderazgo de los ',
        link('Redmanes', 'faction', 'redmanes'),
        ' — los caballeros rojos al servicio de ',
        link('Radahn', 'character', 'radahn'),
        '. Una academia menor de magia gravitacional, ',
        link('Sellia', 'region', 'caelid'),
        ', servía a la aristocracia local.',
      ),
      h(2, 'El duelo'),
      p(
        'Cuando ',
        link('Malenia', 'character', 'malenia'),
        ' enfrentó a ',
        link('Radahn', 'character', 'radahn'),
        ' aquí, su Floración Escarlata cubrió la región entera. La ',
        link('Podredumbre Escarlata', 'concept', 'scarlet-rot'),
        ' es manifestación de un dios exterior — su presencia en Caelid no es contaminación física, es ocupación divina del paisaje.',
      ),
      h(2, 'Lo que queda'),
      p(
        'Hoy Caelid es un yermo color sangre seca. Hierba muerta, cielos pútridos, criaturas que ya no son lo que eran. Los Redmanes siguen allí, peleando inútilmente; ',
        link('Jerren', 'character', 'jerren'),
        ' organiza el ritual del Festival para liberar a Radahn mediante una muerte digna.',
      ),
    ],
    relatedCharacters: ['radahn', 'malenia', 'jerren', 'gowry', 'millicent', 'sellen'],
    relatedRegions: ['lake-of-rot'],
    relatedFactions: ['redmanes', 'kindred-of-rot'],
    relatedConcepts: ['scarlet-rot', 'dioses-exteriores'],
    relatedTimelineEvents: ['demidioses-fractura'],
  },

  leyndell: {
    summary: 'Capital del Orden Dorado, ciudad-templo construida alrededor del Erdtree. Bajo sus calles doradas yacen alcantarillas de Omens, raíces de Deathroot, y el secreto de la fusión Marika/Radagon.',
    deepLore: [
      h(2, 'La ciudad del árbol'),
      p(
        'Leyndell se construyó alrededor de la base del ',
        link('Erdtree', 'concept', 'erdtree'),
        ' como capital del Orden. Sus calles ascienden en espirales, sus templos brillan en oro pálido, sus guardianes son los Caballeros Doradas. Es la ciudad más bella del Interregno y la más insultantemente costosa.',
      ),
      h(2, 'Lo que hay debajo'),
      p(
        'Bajo el suelo dorado hay tres capas distintas:',
      ),
      h(3, 'Las alcantarillas de los Omens'),
      p(
        'Donde fueron encarcelados ',
        link('Morgott', 'character', 'morgott'),
        ' y ',
        link('Mohg', 'character', 'mohg'),
        ' durante su juventud. Otros ',
        link('Omens', 'faction', 'omens'),
        ' siguen viviendo allí — la prueba viva de que el Orden Dorado clasifica como impuro a sus propios hijos.',
      ),
      h(3, 'Las raíces de Deathroot'),
      p(
        'La ',
        link('Deathroot', 'concept', 'deathroot'),
        ' que emana del cadáver de ',
        link('Godwyn', 'character', 'godwyn'),
        ' bajo Limgrave llega hasta Leyndell por las raíces del Erdtree. Cada vez que un cadáver de la capital se anima, es porque la herida de Godwyn lo alcanzó.',
      ),
      h(3, 'La cripta de los Tres Dedos'),
      p(
        'En el nivel más bajo, sellada tras puertas con tres llaves, aguarda la prisión de los ',
        link('Tres Dedos', 'faction', 'tres-dedos'),
        ': la presencia activa de la ',
        link('Llama Frenética', 'concept', 'frenzied-flame'),
        ' bajo la propia capital del Orden. La ironía no necesita comentario.',
      ),
      h(2, 'El asedio final'),
      p(
        'Cuando el Mancillado llega, la ciudad ya está parcialmente arruinada. ',
        link('Godfrey', 'character', 'godfrey'),
        ' regresa como espectro guardando el trono. Tras Godfrey, la batalla final es contra ',
        link('Marika', 'character', 'marika'),
        ' encadenada y ',
        link('Radagon', 'character', 'radagon'),
        '.',
      ),
    ],
    relatedCharacters: ['marika', 'radagon', 'godfrey', 'godwyn', 'morgott', 'mohg', 'melina', 'enia', 'gideon'],
    relatedRegions: ['altus-plateau', 'mohgwyn'],
    relatedFactions: ['orden-dorado', 'omens', 'tres-dedos'],
    relatedConcepts: ['erdtree', 'great-rune', 'frenzied-flame', 'deathroot'],
    relatedTimelineEvents: ['la-fractura', 'finales'],
  },

  haligtree: {
    summary: 'Árbol alternativo erigido por Miquella como refugio de los excluidos del Orden Dorado. Se desploma sobre Elphael, donde Malenia incompleta espera el regreso de su gemelo.',
    deepLore: [
      h(2, 'El árbol que no es el Erdtree'),
      p(
        'El Haligtree fue plantado por ',
        link('Miquella', 'character', 'miquella'),
        ' en las tierras nevadas más allá de las Mountaintops. A diferencia del ',
        link('Erdtree', 'concept', 'erdtree'),
        ', no recibe gracia de la Voluntad Mayor: su luz es propia, alimentada por el ',
        link('Oro sin Aleación', 'concept', 'unalloyed-gold'),
        ' que repele la influencia de los dioses externos.',
      ),
      h(2, 'Refugio de los excluidos'),
      p(
        'Los ',
        link('Albinaurics', 'faction', 'albinauricos'),
        ' y los ',
        link('Misbegotten', 'faction', 'misbegotten'),
        ' refugiados peregrinaron a través de la nieve consagrada para llegar aquí. Muchos murieron en el camino. Los que llegaron construyeron Elphael, ciudad bajo las raíces del árbol, donde los excluidos del Orden Dorado pudieron por primera vez vivir bajo una luz que no los rechazaba.',
      ),
      h(2, 'La traición y la ruina'),
      p(
        'Después del rapto de Miquella por ',
        link('Mohg', 'character', 'mohg'),
        ', el Haligtree fue lentamente abandonado. ',
        link('Malenia', 'character', 'malenia'),
        ', incompleta tras Caelid, espera en Elphael el regreso del gemelo que nunca despertó. Cuando ella florece de nuevo, la podredumbre alcanza el árbol mismo.',
      ),
    ],
    relatedCharacters: ['miquella', 'malenia', 'mohg'],
    relatedFactions: ['haligtree', 'cleanrot-knights', 'albinauricos', 'misbegotten'],
    relatedRegions: ['consecrated-snowfield', 'mohgwyn'],
    relatedConcepts: ['unalloyed-gold', 'haligtree', 'scarlet-rot'],
    relatedTimelineEvents: ['miquella-malenia'],
  },

  mohgwyn: {
    summary: 'Dinastía subterránea construida por Mohg en torno al lago de sangre. Aquí planeaba criar a Miquella como su consorte divino para instaurar una nueva era cosmológica.',
    deepLore: [
      h(2, 'La dinastía oculta'),
      p(
        link('Mohg', 'character', 'mohg'),
        ' construyó Mohgwyn lejos del Erdtree, oculto bajo la superficie del Interregno. Es un valle de roca roja, tierra fértil de sangre, lagos carmesíes — todo alimentado por la presencia de la ',
        link('Madre Informe', 'concept', 'formless-mother'),
        '.',
      ),
      h(2, 'El proyecto sangriento'),
      p(
        'Aquí Mohg trajo el cuerpo dormido de ',
        link('Miquella', 'character', 'miquella'),
        ' para criar — incubar — al nuevo dios consorte. La población de Mohgwyn está formada por Albinaurics traídos para sangrar: cada cuerpo es alimento del ritual eterno. La cuna del nuevo dios es un lago hecho de sus víctimas.',
      ),
      h(2, 'La arqueología del fracaso'),
      p(
        'Cuando el Mancillado llega, Mohg ya ha sido derrotado o lo será. El proyecto está congelado en el momento de su falla. Miquella sigue dormido. Las ofrendas siguen sangrando. Es un altar a un dios que nunca despertó.',
      ),
    ],
    relatedCharacters: ['mohg', 'miquella', 'varre'],
    relatedFactions: ['bloody-fingers', 'omens'],
    relatedConcepts: ['formless-mother', 'bloodflame', 'dioses-exteriores'],
  },

  'farum-azula': {
    summary: 'Ciudadela suspendida fuera del tiempo, último vestigio del reino de los Antiguos Dragones. Habitada por Maliketh, Placidusax dormido, y un huracán eterno de fragmentos arquitectónicos.',
    deepLore: [
      h(2, 'La ciudad atemporal'),
      p(
        'Farum Azula no está en ningún lugar fijo del Interregno. Flota fuera del tiempo, perpetuamente desmoronándose sin terminar de caer. Era la capital de los ',
        link('Antiguos Dragones', 'faction', 'dragones-antiguos'),
        ' antes del Orden Dorado.',
      ),
      h(2, 'Lord Placidusax'),
      p(
        link('Placidusax', 'character', 'placidusax'),
        ', antiguo Señor Elden de la era pre-Orden, sigue durmiendo en una cámara escondida. Su dios externo desapareció hace eones, pero él permanece, esperando un retorno cosmológico que nunca llega.',
      ),
      h(2, 'El refugio de Maliketh'),
      p(
        link('Maliketh', 'character', 'maliketh'),
        ' eligió este lugar para esconderse tras el robo de la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        '. La ciudadela atemporal protegía la herida abierta de su cuerpo. Cuando el Mancillado lo enfrenta aquí, libera la Muerte de vuelta al cosmos — un acto que tiene consecuencias visibles desde Farum hasta Limgrave.',
      ),
    ],
    relatedCharacters: ['maliketh', 'placidusax', 'fortissax'],
    relatedFactions: ['dragones-antiguos', 'hombres-bestia'],
    relatedConcepts: ['destined-death', 'rune-of-death', 'shadow-bound-beast'],
    relatedTimelineEvents: ['era-antigua', 'muerte-predestinada'],
  },

  'mt-gelmir': {
    summary: 'Volcán activo coronado por el Volcano Manor, sede de Rykard. Las nobles desafectas del Orden conspiran aquí mientras la serpiente-dios devora desde adentro a su anfitrión.',
    deepLore: [
      h(2, 'El volcán y sus nobles'),
      p(
        'Mt. Gelmir es un volcán activo cuya cumbre alberga el Volcano Manor — corte alternativa al Orden Dorado dirigida por ',
        link('Tanith', 'character', 'tanith'),
        ' en nombre de su esposo ',
        link('Rykard', 'character', 'rykard'),
        '. Aquí, ',
        link('Rya', 'character', 'rya'),
        ' recluta nobles desafectos para asesinatos blasfemos.',
      ),
      h(2, 'La serpiente bajo el manor'),
      p(
        'Pero Volcano Manor es la fachada. Bajo el palacio espera una ',
        link('serpiente-dios primordial', 'faction', 'dragones-antiguos'),
        ' anterior al Crisol. Rykard se entregó a ella; ahora es ambos. La serpiente tiene a la nobleza por menú. ',
        link('Patches', 'character', 'patches'),
        ' está aquí, naturalmente, vendiendo lo que sea.',
      ),
    ],
    relatedCharacters: ['rykard', 'tanith', 'rya', 'patches', 'diallos'],
    relatedFactions: ['volcano-manor', 'dragones-antiguos'],
    relatedConcepts: ['great-rune', 'crucible'],
  },

  mountaintops: {
    summary: 'Las cumbres heladas donde habitan los gigantes del fuego. Aquí Marika encadenó a la última raza primitiva del Interregno; aquí también está la pira final donde se quema el Erdtree.',
    deepLore: [
      h(2, 'La guerra contra los gigantes'),
      p(
        'Las Mountaintops son el escenario de la guerra que ',
        link('Marika', 'character', 'marika'),
        ' libró contra los Gigantes del Fuego. Los gigantes adoraban una llama hostil al Orden Dorado; la guerra terminó con casi todos exterminados, salvo unos pocos encadenados. ',
        link('Iji', 'character', 'iji'),
        ' es uno de los últimos supervivientes que se reformó.',
      ),
      h(2, 'La pira'),
      p(
        'En las Mountaintops yace la Llama Quemadora — la pira destinada a incendiar el ',
        link('Erdtree', 'concept', 'erdtree'),
        ' tras la fractura para abrir el camino al trono. ',
        link('Melina', 'character', 'melina'),
        ' se sacrifica aquí para encenderla.',
      ),
    ],
    relatedCharacters: ['marika', 'melina', 'iji'],
    relatedRegions: ['consecrated-snowfield', 'farum-azula'],
    relatedFactions: ['orden-dorado'],
    relatedConcepts: ['erdtree', 'flame'],
    relatedTimelineEvents: ['estado-mundo-mancillado'],
  },

  'consecrated-snowfield': {
    summary: 'Yermo nevado entre las Mountaintops y el Haligtree. La nieve consagrada borra a quien camina sobre ella sin guía. Tumba blanca de los albinaurics que peregrinaron al árbol de Miquella.',
    deepLore: [
      h(2, 'La tierra de la borradura'),
      p(
        'La nieve consagrada no es nieve común. Cada paso desorienta, cada minuto borra recuerdos. Solo quien lleva un Mapa Secreto puede atravesarla con seguridad. La región es trampa cosmológica deliberada.',
      ),
      h(2, 'El éxodo de los albinaurics'),
      p(
        'Los ',
        link('Albinaurics', 'faction', 'albinauricos'),
        ' refugiados peregrinaron a través de este yermo hacia el ',
        link('Haligtree', 'region', 'haligtree'),
        '. Pocos llegaron; la mayoría yace bajo la nieve, congelados. Cuando ',
        link('Miquella', 'character', 'miquella'),
        ' fue secuestrado, su pueblo quedó atrapado a mitad del camino.',
      ),
    ],
    relatedCharacters: ['miquella', 'malenia'],
    relatedRegions: ['haligtree', 'mountaintops'],
    relatedFactions: ['albinauricos', 'misbegotten'],
    relatedConcepts: ['unalloyed-gold'],
  },

  'deeproot-depths': {
    summary: 'Sótano del Interregno donde yace el cadáver de Godwyn entrelazado con dragones y raíces. Origen de toda Deathroot. La tumba que no termina de morir.',
    deepLore: [
      h(2, 'El cadáver primordial'),
      p(
        'Bajo Limgrave, accesible solo a través de las raíces del Erdtree, yace el cuerpo de ',
        link('Godwyn', 'character', 'godwyn'),
        '. Su forma actual es monstruosa: un demidiós descomponiéndose enredado con serpentinas dragonicídas — incluyendo a ',
        link('Fortissax', 'character', 'fortissax'),
        ' atrapado en su sueño moribundo.',
      ),
      h(2, 'El origen de la deathroot'),
      p(
        'Toda la ',
        link('Deathroot', 'concept', 'deathroot'),
        ' del Interregno emana de aquí. Cuando un cadáver se reanima, cuando un Que-Vive-en-la-Muerte aparece, su origen rastreable es siempre Deeproot Depths.',
      ),
    ],
    relatedCharacters: ['godwyn', 'fortissax', 'fia', 'd'],
    relatedFactions: ['those-who-live-in-death'],
    relatedConcepts: ['deathroot', 'destined-death', 'rune-of-death', 'those-who-live-in-death'],
    relatedTimelineEvents: ['ranni-noche-cuchillos'],
    relatedEndings: ['duskborn'],
  },

  nokron: {
    summary: 'Ciudad eterna de los Nox, sumergida bajo Limgrave por el meteorito que cayó como castigo. Sus habitantes esperan en silencio la era de las estrellas que se les fue prometida.',
    deepLore: [
      h(2, 'Los Nox y su pecado'),
      p(
        'Los ',
        link('Nox', 'faction', 'nox'),
        ' fueron una raza nocturna que intentó crear su propio dios. Su transgresión fue cosmológica; el castigo, una estrella que cayó del cielo y los enterró bajo la tierra. Ahora viven en silencio en sus ciudades sumergidas.',
      ),
      h(2, 'La promesa estelar'),
      p(
        'Su esperanza es la ',
        link('Era de las Estrellas', 'ending', 'age-of-stars'),
        ' de ',
        link('Ranni', 'character', 'ranni'),
        ' — un cosmos sin Voluntad Mayor donde podrán emerger de nuevo. La Bruja parece haber heredado o adoptado parte de su legado celestial.',
      ),
    ],
    relatedCharacters: ['ranni'],
    relatedRegions: ['nokstella'],
    relatedFactions: ['nox'],
    relatedConcepts: ['dark-moon', 'age-of-stars'],
    relatedEndings: ['age-of-stars'],
  },

  nokstella: {
    summary: 'Ciudad gemela de Nokron, sumergida en la noche eterna. Templo de la Luna Oscura que Ranni eventualmente blandirá como su arma cosmológica.',
    deepLore: [
      h(2, 'La ciudad de la luna oscura'),
      p(
        'Nokstella es la versión astronómica de ',
        link('Nokron', 'region', 'nokron'),
        ': donde Nokron contiene rituales nocturnos, Nokstella contiene magia de la ',
        link('Luna Oscura', 'concept', 'dark-moon'),
        '. Es aquí donde ',
        link('Ranni', 'character', 'ranni'),
        ' obtiene la Espada de la Luna Oscura, el arma que invocará la Era de las Estrellas.',
      ),
    ],
    relatedCharacters: ['ranni'],
    relatedRegions: ['nokron'],
    relatedFactions: ['nox'],
    relatedConcepts: ['dark-moon', 'age-of-stars'],
    relatedEndings: ['age-of-stars'],
  },

  'lake-of-rot': {
    summary: 'Lago de podredumbre escarlata pura bajo Liurnia. La forma corporal del dios exterior de la decadencia. Aquí mueren — y a veces nacen — los hijos de la Floración.',
    deepLore: [
      h(2, 'La presencia del dios'),
      p(
        'El Lago de Podredumbre no es un cuerpo de agua infectado: es la presencia material directa del dios exterior asociado a la ',
        link('Podredumbre Escarlata', 'concept', 'scarlet-rot'),
        '. Cualquier ser vivo que toque su superficie comienza a descomponerse en cuestión de segundos.',
      ),
      h(2, 'El destino de Millicent'),
      p(
        link('Millicent', 'character', 'millicent'),
        ' enfrenta su destino final aquí: sus hermanas escarlatas la convocan para fusionarse. Si rechaza, debe pelear contra ellas en una batalla por la independencia.',
      ),
    ],
    relatedCharacters: ['millicent', 'gowry', 'malenia'],
    relatedFactions: ['kindred-of-rot'],
    relatedRegions: ['liurnia', 'caelid'],
    relatedConcepts: ['scarlet-rot', 'dioses-exteriores'],
  },

  'altus-plateau': {
    summary: 'La meseta dorada que conduce a Leyndell. Tierra agrícola del Orden Dorado en su esplendor — o al menos en su apariencia.',
    deepLore: [
      h(2, 'La meseta del esplendor'),
      p(
        'Altus es la tierra que los devotos del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' imaginan cuando piensan en su utopía: campos dorados, viñedos, caminos pavimentados, caballeros patrullando. La belleza está intacta pero su época ya pasó. Cada villa abandonada es testimonio de la fractura silenciosa.',
      ),
      h(2, 'Los Mausoleos'),
      p(
        'Los Mausoleos Errantes — torres móviles caminando sobre piernas — recorren Altus llevando los cuerpos eternos de los demidioses. Son una solución arquitectónica al problema de almacenar a los reyes que no terminan de morir.',
      ),
    ],
    relatedRegions: ['leyndell', 'mt-gelmir'],
    relatedFactions: ['orden-dorado'],
    relatedConcepts: ['great-rune', 'erdtree'],
  },

  'raya-lucaria': {
    summary: 'La Academia de magia más prestigiosa del Interregno. Centro intelectual donde el conocimiento se cultivó hasta el punto de excomulgar a quien comprendiera demasiado.',
    deepLore: [
      h(2, 'La Academia'),
      p(
        'Raya Lucaria fue fundada como academia donde se cultivaba la magia estelar. Su gran maestra ',
        link('Rennala', 'character', 'rennala'),
        ' la dirigió durante siglos; sus discípulos incluyeron a ',
        link('Sellen', 'character', 'sellen'),
        ' antes de su excomunión.',
      ),
      h(2, 'La excomunión de Sellen'),
      p(
        'Sellen excedió los límites permitidos investigando las estrellas primordiales junto a Azur y Lusat. Los tres fueron excomulgados; los dos primeros han sido transformados por el contacto con cuerpos cósmicos. La Academia castiga la curiosidad excesiva — pero las preguntas siguen preguntándose en cuerpos transmutados.',
      ),
    ],
    relatedCharacters: ['rennala', 'radagon', 'sellen', 'ranni'],
    relatedRegions: ['liurnia'],
    relatedFactions: ['raya-lucaria', 'caria'],
    relatedConcepts: ['dark-moon', 'great-rune'],
  },

  'peninsula-llorosa': {
    summary: 'La Península Llorosa al sur de Limgrave: pantanos perpetuos, Castle Morne tomado por los misbegotten, y la única región donde llueve sin parar.',
    deepLore: [
      h(2, 'La rebelión de los Misbegotten'),
      p(
        'Castle Morne fue ocupado por los ',
        link('Misbegotten', 'faction', 'misbegotten'),
        ' que se rebelaron contra sus amos humanos. Es la primera revuelta visible al Mancillado: la prueba inicial de que la opresión del Orden Dorado genera respuestas a todas las escalas.',
      ),
      h(2, 'La lluvia eterna'),
      p(
        'La península llora literalmente: la lluvia perpetua hace de la región una alegoría meteorológica del duelo del Interregno. Las criaturas locales beben de su melancolía.',
      ),
    ],
    relatedRegions: ['limgrave'],
    relatedFactions: ['misbegotten'],
    relatedCharacters: ['godfrey'],
  },
}
