import type { DeepEntity, RichBlock, RichInline } from '../types'

const link = (label: string, targetType: 'character' | 'region' | 'faction' | 'concept' | 'ending' | 'timeline', slug: string): RichInline =>
  ({ type: 'link', label, targetType, slug })
const p = (...children: RichInline[]): RichBlock =>
  ({ type: 'paragraph', children })
const h = (level: 2 | 3, text: string, id?: string): RichBlock =>
  ({ type: 'heading', level, text, id })

export const glossaryLore: Record<string, Partial<DeepEntity>> = {

  'elden-ring': {
    summary: 'Estructura cosmológica que define las leyes del Interregno. Es el contenido del Anillo: las grandes runas que regulan vida, muerte, identidad y orden. Marika fue su vasija; su rotura inició la era de la fractura.',
    deepLore: [
      h(2, 'El conjunto de runas'),
      p(
        'El Anillo Elden no es un objeto físico simple — es la red conceptual de Grandes Runas que rigen el funcionamiento del cosmos del Interregno. Cada Gran Runa codifica una ley: la sucesión, la gracia, la inmortalidad, el linaje. ',
        link('Marika', 'character', 'marika'),
        ' fue su vasija humana; cuando ella lo rompió, las leyes del cosmos se desensamblaron.',
      ),
      h(2, 'Restauración y reforma'),
      p(
        'Cada uno de los ',
        link('finales', 'ending', 'fracture'),
        ' es una respuesta distinta a qué hacer con el Anillo: simplemente reensamblarlo, perfeccionarlo, añadirle la Muerte, corromperlo, o reemplazarlo por otra ley cosmológica.',
      ),
    ],
    relatedCharacters: ['marika', 'radagon', 'godwyn'],
    relatedConcepts: ['great-rune', 'voluntad-mayor', 'golden-order', 'destined-death'],
    relatedTimelineEvents: ['la-fractura'],
    relatedEndings: ['fracture', 'order', 'duskborn', 'despair', 'frenzied-flame', 'age-of-stars'],
  },

  'bestia-elden': {
    summary: 'Aspecto puro del Anillo Elden divorciado de toda voluntad humana. Forma final que combate al Mancillado tras Radagon. Cosmos hecho hostilidad.',
    deepLore: [
      h(2, 'El cosmos sin máscara'),
      p(
        'Cuando ',
        link('Radagon', 'character', 'radagon'),
        ' es derrotado, el Anillo Elden manifiesta su forma autónoma: la Bestia Elden. No es un dios — es la cosmología misma, divorciada de la voluntad humana de ',
        link('Marika', 'character', 'marika'),
        '. Pelea para protegerse a sí mismo. Su derrota deja al Mancillado libre de elegir el destino del cosmos.',
      ),
    ],
    relatedCharacters: ['marika', 'radagon'],
    relatedConcepts: ['elden-ring', 'voluntad-mayor'],
  },

  'voluntad-mayor': {
    summary: 'Dios externo dominante del Interregno actual. Fuente original del Orden Dorado. Tras la fractura, su presencia se ha vuelto distante y silenciosa.',
    deepLore: [
      h(2, 'El dios distante'),
      p(
        'La Voluntad Mayor es uno de los muchos ',
        link('dioses exteriores', 'concept', 'dioses-exteriores'),
        '. Eligió a ',
        link('Marika', 'character', 'marika'),
        ' como su vasija humana, instaurando el Orden Dorado. Sus mensajeros físicos son los ',
        link('Dos Dedos', 'faction', 'dos-dedos'),
        ', que traducen su voluntad para los mortales.',
      ),
      h(2, 'El silencio'),
      p(
        'Tras la rotura del Anillo, la Voluntad Mayor se ha retirado parcialmente. Los pronunciamientos de los Dedos son cada vez más vagos. La fe institucional sobrevive al objeto de la fe.',
      ),
    ],
    relatedCharacters: ['marika'],
    relatedFactions: ['orden-dorado', 'dos-dedos'],
    relatedConcepts: ['dioses-exteriores', 'golden-order', 'elden-ring'],
  },

  'dioses-exteriores': {
    summary: 'Entidades cosmológicas más allá del Interregno que pugnan por imponer sus leyes. La Voluntad Mayor, la Madre Informe, la Llama Frenética y otros son ejemplos. Influyen en mortales infectándolos cosmológicamente.',
    deepLore: [
      h(2, 'El campo de batalla cosmológico'),
      p(
        'Los dioses exteriores son entidades que pugnan por imponer sus leyes al Interregno. La ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' es la actualmente dominante. La ',
        link('Madre Informe', 'concept', 'formless-mother'),
        ' opera a través de ',
        link('Mohg', 'character', 'mohg'),
        '. La ',
        link('Llama Frenética', 'concept', 'frenzied-flame'),
        ' habla a través de los Tres Dedos. La ',
        link('Podredumbre Escarlata', 'concept', 'scarlet-rot'),
        ' es manifestación de un dios del decaimiento.',
      ),
      h(2, 'Los mancipios'),
      p(
        'Cada dios opera infectando humanos. ',
        link('Marika', 'character', 'marika'),
        ', ',
        link('Mohg', 'character', 'mohg'),
        ', ',
        link('Malenia', 'character', 'malenia'),
        ' — todos cargan dios. ',
        link('Miquella', 'character', 'miquella'),
        ' fue el único que ',
        { type: 'em', text: 'intentó' },
        ' construir una cosmología sin dios externo: el ',
        link('Oro sin Aleación', 'concept', 'unalloyed-gold'),
        '.',
      ),
    ],
    relatedCharacters: ['marika', 'mohg', 'malenia', 'miquella', 'shabriri'],
    relatedConcepts: ['voluntad-mayor', 'formless-mother', 'frenzied-flame', 'scarlet-rot', 'unalloyed-gold'],
    relatedFactions: ['tres-dedos', 'bloody-fingers'],
  },

  crucible: {
    summary: 'Fuerza primigenia anterior al Erdtree donde todas las formas vitales eran indiferenciadas. El Orden Dorado lo declaró impuro y purgó sus manifestaciones — pero el Crisol persiste en los Omens y los Hombres-Bestia.',
    deepLore: [
      h(2, 'El árbol primordial'),
      p(
        'Antes del ',
        link('Erdtree', 'concept', 'erdtree'),
        ' actual existió el Crisol: una fuerza vital primordial donde todas las formas se mezclaban. Cuernos, escamas, alas, podredumbre, raíces — todo compartía un sustrato común. El cosmos era promiscuo en sus formas.',
      ),
      h(2, 'La purga del Orden'),
      p(
        'El Orden Dorado consideró al Crisol primitivo y purgó sus manifestaciones. Pero la sangre antigua persiste: los ',
        link('Omens', 'faction', 'omens'),
        ' nacen con cuernos del Crisol, los ',
        link('Hombres-Bestia', 'faction', 'hombres-bestia'),
        ' lo conservan integrado en su biología. Cada manifestación del Crisol en un cuerpo del Interregno actual es prueba de que el sistema dominante nunca purificó a fondo.',
      ),
    ],
    relatedCharacters: ['morgott', 'mohg', 'maliketh', 'blaidd'],
    relatedFactions: ['omens', 'hombres-bestia'],
    relatedConcepts: ['erdtree', 'golden-order'],
  },

  erdtree: {
    summary: 'El árbol dorado central que estructura el Interregno actual. Reemplazó al Crisol como cosmología dominante. Marika está encadenada en su tronco; Godwyn descompuesto en sus raíces.',
    deepLore: [
      h(2, 'El árbol simbólico y físico'),
      p(
        'El Erdtree es a la vez símbolo y motor del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        '. Sus raíces se extienden por todo el Interregno; cada lugar santo del régimen está conectado a él. La gracia que reciben los Mancillados emana de él. ',
        link('Marika', 'character', 'marika'),
        ' está encadenada en su núcleo.',
      ),
      h(2, 'La paradoja interior'),
      p(
        'Pero el Erdtree no es solo dorado. Sus raíces albergan el cadáver de ',
        link('Godwyn', 'character', 'godwyn'),
        ', cuya descomposición genera la ',
        link('Deathroot', 'concept', 'deathroot'),
        '. Bajo Leyndell aguardan los ',
        link('Tres Dedos', 'faction', 'tres-dedos'),
        '. El árbol es contenedor de su propia contradicción.',
      ),
      h(2, 'Lo que se quema'),
      p(
        'Para acceder al trono Elden, el árbol debe ser quemado. ',
        link('Melina', 'character', 'melina'),
        ' se inmola para encender la pira en los ',
        link('Mountaintops', 'region', 'mountaintops'),
        '. La quemadura del árbol es necesaria — el Orden no puede ser cambiado mientras el árbol esté vivo en su forma actual.',
      ),
    ],
    relatedCharacters: ['marika', 'godwyn', 'melina'],
    relatedRegions: ['leyndell', 'mountaintops'],
    relatedConcepts: ['golden-order', 'crucible', 'deathroot', 'grace'],
    relatedTimelineEvents: ['estado-mundo-mancillado'],
  },

  'golden-order': {
    summary: 'Filosofía cosmológica fundada por Marika que estructura el Interregno bajo la Voluntad Mayor. Su contradicción interna — sellar la Muerte — es la causa última de su crisis.',
    deepLore: [
      h(2, 'El sistema'),
      p(
        'El Orden Dorado es el régimen cosmológico instaurado por ',
        link('Marika', 'character', 'marika'),
        ' bajo la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        '. Sus pilares: el ',
        link('Erdtree', 'concept', 'erdtree'),
        ', la inmortalidad sellando la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ', y la jerarquía de Empyreans → Demidioses → Caballeros → Mancillados.',
      ),
      h(2, 'La contradicción que Goldmask detectó'),
      p(
        link('Goldmask', 'character', 'goldmask'),
        ' descubrió que la Ley Mayor del Orden contiene una contradicción lógica interna. Si se corrigiera la ley a su forma perfecta, habría coherencia absoluta — pero también ausencia total de espacio para lo que no encaja. Esa corrección lleva a la ',
        link('Era del Orden', 'ending', 'order'),
        '.',
      ),
    ],
    relatedCharacters: ['marika', 'goldmask', 'corhyn'],
    relatedFactions: ['orden-dorado'],
    relatedConcepts: ['erdtree', 'voluntad-mayor', 'destined-death', 'great-rune'],
    relatedEndings: ['order'],
  },

  'destined-death': {
    summary: 'Forma original de la muerte verdadera en el cosmos. Marika la selló dentro de Maliketh para iniciar la era dorada. Todo el problema cosmológico del Interregno puede leerse como consecuencia de ese sello.',
    deepLore: [
      h(2, 'La fuerza sellada'),
      p(
        'La Muerte Predestinada era la forma cosmológica de la muerte real. Cuando ',
        link('Marika', 'character', 'marika'),
        ' la selló dentro del cuerpo de ',
        link('Maliketh', 'character', 'maliketh'),
        ', los seres del Interregno dejaron de poder morir verdaderamente. La inmortalidad se volvió obligatoria.',
      ),
      h(2, 'Las consecuencias'),
      p(
        'El sello hace posible el régimen actual y, simultáneamente, lo condena. ',
        link('Aquellos que Viven en la Muerte', 'concept', 'those-who-live-in-death'),
        ' existen porque la muerte ya no funciona. ',
        link('Godwyn', 'character', 'godwyn'),
        ' permanece descompuesto bajo Limgrave por la misma razón. La ',
        link('Era del Crepúsculo', 'ending', 'duskborn'),
        ' es el final que devuelve la Muerte al cosmos.',
      ),
    ],
    relatedCharacters: ['marika', 'maliketh', 'godwyn', 'fia', 'gloam-eyed-queen'],
    relatedConcepts: ['rune-of-death', 'deathroot', 'those-who-live-in-death', 'black-flame'],
    relatedTimelineEvents: ['muerte-predestinada'],
    relatedEndings: ['duskborn'],
  },

  'rune-of-death': {
    summary: 'Fragmento físico-conceptual de la Muerte Predestinada. Marika la cosió en Maliketh; Ranni le robó una mecha. La mecha forjó los Cuchillos Negros que asesinaron a Godwyn.',
    deepLore: [
      h(2, 'El robo'),
      p(
        link('Ranni', 'character', 'ranni'),
        ' robó una mecha de la Runa de la Muerte del cuerpo de ',
        link('Maliketh', 'character', 'maliketh'),
        '. Es la operación que hace posible toda la conjura siguiente: las hojas de los ',
        link('Cuchillos Negros', 'faction', 'cuchillos-negros'),
        ' se forjan con esta mecha, y son las únicas armas capaces de matar a un demidiós.',
      ),
      h(2, 'La cicatriz'),
      p(
        'El robo dejó a Maliketh con una herida cosmológica permanente. Cuando el Mancillado lo derrota en ',
        link('Farum Azula', 'region', 'farum-azula'),
        ', el resto de la Runa se libera. Es el mismo evento que cierra la herida de Godwyn en la Era del Crepúsculo.',
      ),
    ],
    relatedCharacters: ['ranni', 'maliketh', 'godwyn'],
    relatedFactions: ['cuchillos-negros'],
    relatedConcepts: ['destined-death'],
    relatedTimelineEvents: ['ranni-noche-cuchillos'],
  },

  deathroot: {
    summary: 'Raíz necrótica negra que emana del cadáver de Godwyn y se extiende por las raíces del Erdtree. Su presencia anima cadáveres y crea Aquellos que Viven en la Muerte.',
    deepLore: [
      h(2, 'La emanación'),
      p(
        'La Deathroot es la materia física resultante de la descomposición eterna de ',
        link('Godwyn', 'character', 'godwyn'),
        '. Como su cuerpo no puede morir del todo (la Muerte está sellada) pero su alma sí ha muerto, el cadáver crece como pesadilla biológica.',
      ),
      h(2, 'La contagiosidad'),
      p(
        'La Deathroot se extiende por las raíces del Erdtree hasta los rincones más distantes del Interregno. Cuando un cadáver se anima, cuando aparece un ',
        link('Que Vive en la Muerte', 'faction', 'those-who-live-in-death'),
        ', la fuente rastreable es siempre Deeproot Depths.',
      ),
    ],
    relatedCharacters: ['godwyn'],
    relatedFactions: ['those-who-live-in-death', 'deathbirds'],
    relatedRegions: ['deeproot-depths'],
    relatedConcepts: ['destined-death', 'rune-of-death'],
  },

  'those-who-live-in-death': {
    summary: 'Estado de existencia parcial: cuerpos sin almas animados por la Deathroot. Existen porque la Muerte verdadera está sellada.',
    deepLore: [
      h(2, 'La existencia ontológicamente truncada'),
      p(
        'Aquellos que Viven en la Muerte son seres cuyo proceso vital se ha detenido a mitad de camino: el alma murió, el cuerpo no. Su forma original es ',
        link('Godwyn', 'character', 'godwyn'),
        '. Su existencia es prueba de que sellar la Muerte no la elimina — solo la atrasa, generando criaturas que ',
        { type: 'em', text: 'no son' },
        ' ni vivas ni muertas.',
      ),
    ],
    relatedCharacters: ['godwyn', 'fia', 'd', 'rogier'],
    relatedFactions: ['those-who-live-in-death'],
    relatedConcepts: ['destined-death', 'deathroot', 'rune-of-death'],
    relatedEndings: ['duskborn'],
  },

  empyrean: {
    summary: 'Categoría sagrada designada por la Voluntad Mayor: humanos elegidos para potencialmente convertirse en dioses. Marika fue uno; Ranni, Malenia y Miquella son los conocidos en el ciclo actual.',
    deepLore: [
      h(2, 'Los candidatos'),
      p(
        'La Voluntad Mayor designa Empyreans entre los descendientes de su vasija actual. Cada Empyrean tiene una "',
        link('Bestia ligada en sombra', 'concept', 'shadow-bound-beast'),
        '" — guardián cosmológico personal. Solo un Empyrean puede suceder a Marika como vasija del Anillo Elden.',
      ),
      h(2, 'Los empyreans del ciclo actual'),
      p(
        link('Ranni', 'character', 'ranni'),
        ' fue Empyrean — y se mató como uno para escapar del contrato. ',
        link('Malenia', 'character', 'malenia'),
        ' y ',
        link('Miquella', 'character', 'miquella'),
        ' son los otros del ciclo, ambos malditos por sus propios destinos.',
      ),
    ],
    relatedCharacters: ['marika', 'ranni', 'malenia', 'miquella', 'gloam-eyed-queen'],
    relatedConcepts: ['voluntad-mayor', 'shadow-bound-beast', 'rune-of-death'],
  },

  'shadow-bound-beast': {
    summary: 'Guardián cosmológico ligado a un Empyrean. Maliketh es la Bestia Sombra de Marika; Blaidd fue creado para ser la de Ranni.',
    deepLore: [
      h(2, 'El vínculo'),
      p(
        'Cada Empyrean tiene una Bestia Sombra: un guardián cuya existencia está cosmológicamente entrelazada. ',
        link('Maliketh', 'character', 'maliketh'),
        ' es la de ',
        link('Marika', 'character', 'marika'),
        '. ',
        link('Blaidd', 'character', 'blaidd'),
        ' fue creado por Maliketh para ',
        link('Ranni', 'character', 'ranni'),
        ' — pero el vínculo se rompe cuando Ranni traiciona el rol Empyrean, y Blaidd cae en locura.',
      ),
    ],
    relatedCharacters: ['maliketh', 'marika', 'blaidd', 'ranni'],
    relatedFactions: ['hombres-bestia'],
    relatedConcepts: ['empyrean'],
  },

  'great-rune': {
    summary: 'Una de las runas que componen el Anillo Elden. Cada demidiós sostiene una. El Mancillado debe recolectarlas para rehacer el Anillo y ascender al trono.',
    deepLore: [
      h(2, 'Las runas dispersas'),
      p(
        'Cuando ',
        link('Marika', 'character', 'marika'),
        ' rompió el ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        ', sus Grandes Runas se dispersaron entre sus hijos demidiós. Cada uno reclamó una y la usó para sostener su poder personal — pero el cosmos no puede funcionar mientras estén separadas.',
      ),
      h(2, 'La recolección'),
      p(
        'El Mancillado debe derrotar a los demidioses y reclamar sus Grandes Runas. Solo con el conjunto podrá rehacer el Anillo y elegir el final del cosmos.',
      ),
    ],
    relatedCharacters: ['marika', 'godrick', 'rennala', 'radahn', 'rykard', 'morgott', 'malenia', 'mohg'],
    relatedConcepts: ['elden-ring'],
    relatedTimelineEvents: ['la-fractura'],
  },

  grace: {
    summary: 'Luz dorada del Erdtree que guía a los elegidos del Orden. Su retorno a los Mancillados tras la fractura es lo que permite al protagonista regresar al Interregno.',
    deepLore: [
      h(2, 'La luz que guía'),
      p(
        'La Gracia es manifestación física de la atención del ',
        link('Erdtree', 'concept', 'erdtree'),
        ' sobre un individuo. Solo los que reciben gracia pueden ser elegibles al trono. Tras la fractura, el árbol restituyó parcialmente su gracia a los ',
        link('Mancillados', 'concept', 'tarnished'),
        ' exiliados — único motivo por el que pudieron regresar al Interregno.',
      ),
    ],
    relatedCharacters: ['godfrey', 'marika', 'melina'],
    relatedConcepts: ['erdtree', 'tarnished', 'golden-order'],
  },

  tarnished: {
    summary: 'Los herederos de los seguidores de Godfrey, exiliados del Interregno cuando perdieron la gracia. Tras la fractura, su gracia regresó — y son ellos los únicos candidatos posibles a Señor Elden.',
    deepLore: [
      h(2, 'El exilio'),
      p(
        'Cuando ',
        link('Godfrey', 'character', 'godfrey'),
        ' fue exiliado por ',
        link('Marika', 'character', 'marika'),
        ', sus seguidores fueron expulsados con él. Sus descendientes vivieron generaciones lejos del Interregno, sin gracia, sin destino divino. La fractura del Anillo restauró su gracia — única razón por la que pudieron regresar.',
      ),
      h(2, 'La elegibilidad inesperada'),
      p(
        'El Mancillado es candidato improbable al trono Elden: es descendiente de exiliados, no de demidioses. Pero precisamente por su origen exterior puede ser instrumento de cambio cosmológico que un demidiós no podría ser.',
      ),
    ],
    relatedCharacters: ['godfrey', 'melina', 'gideon', 'roderika'],
    relatedConcepts: ['grace', 'erdtree', 'great-rune'],
    relatedTimelineEvents: ['exilio-godfrey', 'viaje-mancillado'],
  },

  'scarlet-rot': {
    summary: 'Manifestación de un dios exterior del decaimiento. Maldición de nacimiento de Malenia. Su Floración convierte regiones enteras en yermos eternos.',
    deepLore: [
      h(2, 'El dios del decaimiento'),
      p(
        'La Podredumbre Escarlata es presencia material de un ',
        link('dios exterior', 'concept', 'dioses-exteriores'),
        ' del decaimiento — una entidad cuya ley es la disolución de las formas. ',
        link('Malenia', 'character', 'malenia'),
        ' nació infectada como manifestación humana del dios. Su cuerpo es el medio del dios en el Interregno.',
      ),
      h(2, 'La Floración'),
      p(
        'Una "Floración Escarlata" es la liberación catastrófica de la podredumbre concentrada. La de Caelid (durante el duelo Malenia-Radahn) convirtió la región entera en yermo. La presencia material del dios queda como ',
        link('Lago de Podredumbre', 'region', 'lake-of-rot'),
        ' bajo Liurnia.',
      ),
      h(2, 'La cura'),
      p(
        link('Miquella', 'character', 'miquella'),
        ' desarrolló el ',
        link('Oro sin Aleación', 'concept', 'unalloyed-gold'),
        ' como contrahechizo a los dioses exteriores — incluyendo la Podredumbre. ',
        link('Millicent', 'character', 'millicent'),
        ' es la única hija escarlata que escapó parcialmente al control del dios.',
      ),
    ],
    relatedCharacters: ['malenia', 'miquella', 'radahn', 'millicent', 'gowry'],
    relatedFactions: ['cleanrot-knights', 'kindred-of-rot'],
    relatedRegions: ['caelid', 'lake-of-rot', 'haligtree'],
    relatedConcepts: ['dioses-exteriores', 'unalloyed-gold'],
  },

  'unalloyed-gold': {
    summary: 'Oro purificado de toda influencia divina externa. Desarrollado por Miquella como herramienta filosófica para construir un cosmos sin dioses parásitos.',
    deepLore: [
      h(2, 'El proyecto contra los dioses'),
      p(
        link('Miquella', 'character', 'miquella'),
        ' desarrolló el Oro sin Aleación como respuesta filosófica al cosmos contaminado por dioses externos. La idea: que existe oro sagrado posible sin necesidad de pacto con la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' o cualquier otra entidad. Es el único proyecto positivo del Interregno: no destruir, no reformar, sino curar.',
      ),
      h(2, 'Las aplicaciones'),
      p(
        'Las agujas de Oro sin Aleación pueden expulsar a un dios externo del cuerpo de su huésped. Las usa ',
        link('Millicent', 'character', 'millicent'),
        ' como tratamiento parcial contra la podredumbre. Son el único arma puramente curativa del juego.',
      ),
    ],
    relatedCharacters: ['miquella', 'malenia', 'millicent'],
    relatedFactions: ['haligtree'],
    relatedConcepts: ['dioses-exteriores', 'scarlet-rot', 'haligtree'],
  },

  'frenzied-flame': {
    summary: 'Dios exterior nihilista cuya doctrina única es que existir es sufrir. Sus Tres Dedos están sellados bajo Leyndell. Quien los recibe se convierte en Señor de la conflagración universal.',
    deepLore: [
      h(2, 'El nihilismo cósmico'),
      p(
        'La Llama Frenética es la respuesta cosmológica al sufrimiento: borrar toda separación, fusionar a todos los seres en un único ser ardiente, terminar con la existencia separada. Sus ',
        link('Tres Dedos', 'faction', 'tres-dedos'),
        ' están sellados bajo Leyndell.',
      ),
      h(2, 'Los misioneros'),
      p(
        link('Shabriri', 'character', 'shabriri'),
        ' es su principal proselitista a través de los siglos. ',
        link('Hyetta', 'character', 'hyetta'),
        ' es seducida hacia ellos como doncella accidental. ',
        link('Melina', 'character', 'melina'),
        ' es su antagonista absoluta y abandona al Mancillado si éste se entrega.',
      ),
    ],
    relatedCharacters: ['shabriri', 'hyetta', 'melina', 'gideon'],
    relatedFactions: ['tres-dedos'],
    relatedRegions: ['leyndell'],
    relatedConcepts: ['dioses-exteriores'],
    relatedEndings: ['frenzied-flame'],
  },

  'formless-mother': {
    summary: 'Dios exterior de la sangre y la corrupción carnal. Patrona de Mohg y los Dedos Sangrientos. Su naturaleza es deliberadamente innombrable.',
    deepLore: [
      h(2, 'La diosa de la sangre'),
      p(
        'La Madre Informe es el ',
        link('dios exterior', 'concept', 'dioses-exteriores'),
        ' que pacta con ',
        link('Mohg', 'character', 'mohg'),
        '. Su nombre la describe: no tiene forma fija, opera a través de fluido, sangre, transmutación carnal. Cada ofrenda sangrienta de Mohg en ',
        link('Mohgwyn', 'region', 'mohgwyn'),
        ' es alimento ritual para ella.',
      ),
    ],
    relatedCharacters: ['mohg', 'varre'],
    relatedFactions: ['bloody-fingers', 'omens'],
    relatedRegions: ['mohgwyn'],
    relatedConcepts: ['dioses-exteriores', 'bloodflame'],
  },

  'dark-moon': {
    summary: 'Magia lunar asociada a la familia Caria y al proyecto cosmológico de Ranni. La Espada de la Luna Oscura es el arma con que Ranni invoca su Era de las Estrellas.',
    deepLore: [
      h(2, 'La luna como ley alternativa'),
      p(
        'La Luna Oscura es la magia lunar tradicional de la familia ',
        link('Caria', 'faction', 'caria'),
        ' enseñada en ',
        link('Raya Lucaria', 'region', 'raya-lucaria'),
        '. Pero ',
        link('Ranni', 'character', 'ranni'),
        ' la usa como cosmología completa: si el sol del Erdtree es el régimen actual, la luna oscura es la ley alternativa que ella propone.',
      ),
    ],
    relatedCharacters: ['ranni', 'rennala'],
    relatedFactions: ['caria', 'raya-lucaria'],
    relatedRegions: ['nokstella', 'liurnia'],
    relatedConcepts: ['age-of-stars'],
    relatedEndings: ['age-of-stars'],
  },

  'black-flame': {
    summary: 'Llama hostil al Erdtree, capaz de quemar incluso a dioses. Don de la Reina de Ojos Crepusculares a los Pieles de Dios. Su existencia es prueba de que las divinidades son combustibles.',
    deepLore: [
      h(2, 'La llama herética'),
      p(
        'La Llama Negra fue otorgada por la ',
        link('Reina de Ojos Crepusculares', 'character', 'gloam-eyed-queen'),
        ' a los ',
        link('Pieles de Dios', 'faction', 'pieles-de-dios'),
        '. Su característica única: puede quemar dioses. Es el contraparte filosófico del fuego dorado del Erdtree: un fuego que no santifica sino que consume lo sagrado.',
      ),
    ],
    relatedCharacters: ['gloam-eyed-queen', 'maliketh'],
    relatedFactions: ['pieles-de-dios'],
    relatedConcepts: ['destined-death', 'erdtree'],
  },

  ghostflame: {
    summary: 'Llama azul-blanca asociada a los muertos y a los antiguos enterramientos. Las catacumbas y crematorios primigenios usaban este fuego para sus rituales.',
    deepLore: [
      h(2, 'El fuego de los muertos'),
      p(
        'La Llama Espectral es el fuego ritual de las eras anteriores al Orden Dorado, usado para cremación y rituales funerarios. Los Crematorios usan este fuego — porque era el único antiguamente capaz de procesar cuerpos. Su persistencia hoy es supervivencia ritual: rituales antiguos que el Orden no logró erradicar.',
      ),
    ],
    relatedConcepts: ['destined-death', 'deathroot'],
  },

  bloodflame: {
    summary: 'Hechicería de fuego sangriento dominada por Mohg y los Dedos Sangrientos. La sangre del cuerpo del propio mago alimenta cada hechizo.',
    deepLore: [
      h(2, 'El fuego de la sangre'),
      p(
        'La Bloodflame es magia que combina fuego con sangre del propio caster. ',
        link('Mohg', 'character', 'mohg'),
        ' es su mayor practicante. Los hechizos requieren auto-sangrado: cada conjuro es una ofrenda a la ',
        link('Madre Informe', 'concept', 'formless-mother'),
        '.',
      ),
    ],
    relatedCharacters: ['mohg'],
    relatedFactions: ['bloody-fingers'],
    relatedConcepts: ['formless-mother'],
  },

  haligtree: {
    summary: 'Árbol alternativo creado por Miquella como cosmología minoritaria fuera del régimen del Erdtree. No tiene gracia oficial — solo el Oro sin Aleación que el propio Miquella desarrolló.',
    deepLore: [
      h(2, 'El árbol de la disidencia'),
      p(
        'El Haligtree es manifestación física del proyecto de ',
        link('Miquella', 'character', 'miquella'),
        ': un árbol que rivaliza con el ',
        link('Erdtree', 'concept', 'erdtree'),
        ' sin depender de la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        '. Su luz es el ',
        link('Oro sin Aleación', 'concept', 'unalloyed-gold'),
        '.',
      ),
    ],
    relatedCharacters: ['miquella', 'malenia'],
    relatedRegions: ['haligtree'],
    relatedFactions: ['haligtree'],
    relatedConcepts: ['unalloyed-gold', 'erdtree'],
  },

  'age-of-stars': {
    summary: 'Era cosmológica propuesta por Ranni: cosmos sin influencia activa de la Voluntad Mayor, gobernado por luna oscura distante en lugar de árbol cercano.',
    deepLore: [
      h(2, 'La era sin dioses cercanos'),
      p(
        'La Era de las Estrellas es la cosmología que ',
        link('Ranni', 'character', 'ranni'),
        ' instaura si el Mancillado completa su quest. La ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' pierde influencia. La luna oscura distante reemplaza al árbol cercano. El cosmos queda libre — y solo.',
      ),
      h(2, 'La pregunta abierta'),
      p(
        '¿Es preferible un cosmos huérfano de dios cercano? Ranni cree que sí: la libertad fría supera al control compasivo. La Era de las Estrellas es la respuesta más radicalmente racional al problema cosmológico del Interregno.',
      ),
    ],
    relatedCharacters: ['ranni'],
    relatedRegions: ['nokron', 'nokstella'],
    relatedFactions: ['nox'],
    relatedConcepts: ['dark-moon', 'voluntad-mayor', 'empyrean'],
    relatedEndings: ['age-of-stars'],
  },

  /* ════════════════ Mass promotion batch — conceptos partial ════════════════ */

  'minor-erdtrees': {
    summary:
      'Los Erdtrees Menores son árboles dorados secundarios diseminados por el Interregno. Cada región tiene al menos uno como capilla satélite del Erdtree principal. Funcionan como infraestructura de gracia: distribuyen la luz dorada a peregrinos lejos del centro.',
    deepLore: [
      h(2, 'Estructura jerárquica'),
      p(
        'El ',
        link('Erdtree', 'concept', 'erdtree'),
        ' principal en ',
        link('Leyndell', 'region', 'leyndell'),
        ' es catedral cosmológica; los Erdtrees Menores son parroquias regionales. Cada uno recibe gracia derivada y la redistribuye localmente. Sus avatares — los Erdtree Avatars que los custodian — son guardianes pétreos animados con luz dorada.',
      ),
      h(2, 'Función ritual'),
      p(
        'Cada Erdtree Menor es santuario activo. Los peregrinos pueden recibir bendiciones rúnicas dejando ofrendas en su base. Su luz dorada es indistinguible visualmente de la del árbol principal — solo la magnitud difiere. Funcionalmente, son extensiones cosmológicas distribuidas.',
      ),
    ],
    confirmed: [
      'Cada región tiene al menos un Erdtree Menor',
      'Sus avatares custodian las bendiciones',
      'Reciben gracia derivada del Erdtree principal',
      'Funcionan como capillas satélites',
    ],
    inferred: [
      'Su existencia documenta la distribución institucional de la gracia',
      'La gracia que reciben se debilitó tras la fractura',
      'Los avatares son creación específica del Orden Dorado, no reliquias previas',
    ],
    theories: [
      'Si el Erdtree principal cae, los Menores se apagan en cadena',
      'Algunos Avatares conservan consciencia parcial',
      'Los Menores podrían ser reactivados independientemente bajo otra cosmología',
    ],
    ambiguous: [
      'Cuántos Erdtrees Menores existen exactamente',
      'Si fueron plantados o crecieron espontáneamente',
      'Si su gracia es la misma o diferente cualitativamente',
    ],
    relatedConcepts: ['erdtree', 'grace', 'golden-order'],
    relatedFactions: ['orden-dorado'],
  },

  'full-moon-concept': {
    summary:
      'La Luna Llena es magia lunar tradicional de la familia Caria, especialmente dominada por Rennala. Es magia "diurna" del linaje — luz lunar luminosa, redonda, integradora — opuesta cosmológicamente a la Luna Oscura de Ranni que invierte el polo sin cambiar la sustancia.',
    deepLore: [
      h(2, 'Tradición Caria'),
      p(
        'La Luna Llena es magia ancestral del clan ',
        link('Caria', 'faction', 'caria'),
        ', cultivada en Liurnia desde antes del matrimonio mestizo con Radagon. ',
        link('Rennala', 'character', 'rennala'),
        ' es su practicante suprema — su título oficial era "Reina de la Luna Llena" precisamente por dominar esta tradición.',
      ),
      h(2, 'Polo cosmológico'),
      p(
        'La Luna Llena convoca cuerpos lunares luminosos que congelan o iluminan a los enemigos. Es magia integradora: agrupa fuerzas celestes en lugar de dispersarlas. Su contraparte cosmológica, la ',
        link('Luna Oscura', 'concept', 'dark-moon'),
        ' de Ranni, es la misma sustancia con polaridad invertida — donde Llena ilumina, Oscura absorbe.',
      ),
      h(2, 'Hechizos visibles'),
      p(
        'Hechizos como Full Moon de Rennala invocan una luna gigante que castiga a los enemigos con luz lunar concentrada. Su magia se enseñaba en Raya Lucaria como tradición Caria oficial. Tras el colapso de Rennala, los discípulos vivos son escasos.',
      ),
    ],
    confirmed: [
      'La Luna Llena es magia tradicional Caria',
      'Rennala es su practicante suprema',
      'Es contraparte cosmológica de la Luna Oscura',
      'Se enseñaba en Raya Lucaria',
    ],
    inferred: [
      'La tradición Caria predata el matrimonio con Radagon',
      'Después de Rennala los practicantes vivos son escasos',
      'La Luna Llena y Luna Oscura son la misma sustancia con polaridad invertida',
    ],
    theories: [
      'Existió un dios externo de la luna al que la familia Caria estaba ligada',
      'Ranni invertió la polaridad por razones cosmológicas específicas, no estilísticas',
      'La tradición original incluía cuartos lunares — fases intermedias que se han perdido',
    ],
    ambiguous: [
      'Origen exacto de la magia Caria',
      'Si la luna a la que se invoca es física o cosmológica',
      'Si la tradición puede ser revivida sin Rennala',
    ],
    relatedCharacters: ['rennala', 'ranni', 'radagon'],
    relatedFactions: ['caria', 'raya-lucaria'],
    relatedRegions: ['liurnia', 'caria-manor', 'raya-lucaria'],
    relatedConcepts: ['dark-moon', 'glintstone', 'great-rune'],
  },

  glintstone: {
    summary:
      'Los Glintstones son cristales primigenios que reflejan estrellas y constituyen el material de toda hechicería académica. Cada glintstone contiene una porción de la luz primordial. Hechizar a través de ellos es invocar a la propia estrella reflejada.',
    deepLore: [
      h(2, 'Naturaleza física'),
      p(
        'Los Glintstones son cristales naturales que crecen en cuevas profundas y montañas específicas. Su característica única: reflejan la luz de cuerpos celestes con perfección absoluta. Cada Glintstone contiene una porción de la luz primigenia atrapada cosmológicamente.',
      ),
      h(2, 'Aplicación mágica'),
      p(
        'La hechicería académica de ',
        link('Raya Lucaria', 'region', 'raya-lucaria'),
        ' usa Glintstones como vehículo: el mago canaliza su voluntad a través del cristal, y el cristal invoca a la estrella reflejada. Cada hechizo es comunicación astronómica directa.',
      ),
      h(2, 'Origen y custodios'),
      p(
        'Los ',
        link('Crystalians', 'faction', 'crystalians'),
        ' son seres minerales que custodian las cuevas de Glintstone. Su existencia precede a Raya Lucaria — la Academia descubrió la magia estudiando a los Crystalians, no creó la magia desde cero. La tradición Carian de la Luna Llena depende también de Glintstones específicos.',
      ),
    ],
    confirmed: [
      'Los Glintstones son cristales que reflejan estrellas',
      'Son material de toda hechicería académica',
      'Crecen naturalmente en cuevas y montañas',
      'Los Crystalians los custodian',
    ],
    inferred: [
      'Cada Glintstone contiene una porción específica de luz primigenia',
      'La Academia descubrió, no inventó, su uso mágico',
      'Hechizar es invocar directamente a la estrella reflejada',
    ],
    theories: [
      'Existieron civilizaciones pre-Raya Lucaria que ya usaban Glintstones',
      'Algunos Glintstones contienen almas de antiguos magos absorbidos',
      'Los Glintstones podrían ser fragmentos físicos de cuerpos celestes caídos',
    ],
    ambiguous: [
      'Cómo exactamente reflejan estrellas específicas',
      'Si todos los Glintstones son del mismo tipo',
      'Si su producción puede ser controlada o solo descubierta',
    ],
    relatedFactions: ['raya-lucaria', 'crystalians', 'caria'],
    relatedRegions: ['raya-lucaria', 'liurnia', 'sellia'],
    relatedConcepts: ['primeval-current', 'stars-and-fate-concept', 'dark-moon', 'full-moon-concept'],
  },

  'primeval-current-concept': {
    summary:
      'La Corriente Primigenia es magia gravitacional avanzada que canaliza el flujo astronómico de los cuerpos cósmicos. Sellen, Azur y Lusat fueron sus principales investigadores. Su práctica produjo conocimiento que excede los límites permitidos por la Academia — y eventualmente convirtió a sus practicantes en cuerpos cósmicos parciales.',
    deepLore: [
      h(2, 'Naturaleza de la corriente'),
      p(
        'La Corriente Primigenia es flujo cosmológico real, no metáfora. Los cuerpos celestes ejercen gravedad sobre el Interregno; esa gravedad sigue trayectorias específicas a través del cosmos; la Corriente es esa trayectoria misma. Manipularla requiere intervención magnífica avanzada.',
      ),
      h(2, 'Investigadores'),
      p(
        link('Sellen', 'character', 'sellen'),
        ', ',
        link('Azur', 'character', 'azur'),
        ' y ',
        link('Lusat', 'character', 'lusat'),
        ' fueron los principales investigadores documentados. Su trabajo excedió los límites permitidos por ',
        link('Raya Lucaria', 'region', 'raya-lucaria'),
        '. Los tres fueron excomulgados por aplicación de la Corriente más allá de lo doctrinalmente seguro.',
      ),
      h(2, 'Costo cósmico'),
      p(
        'La aplicación prolongada de la Corriente convierte al practicante en cuerpo cósmico parcial. Azur y Lusat ya están suspendidos como reliquias parcialmente celestiales. Sellen está en proceso. La excomunión académica es prevención: la Academia teme producir más cuerpos cósmicos no controlables.',
      ),
    ],
    confirmed: [
      'La Corriente Primigenia es flujo gravitacional cosmológico real',
      'Sellen, Azur y Lusat fueron sus investigadores principales',
      'Los tres fueron excomulgados de Raya Lucaria',
      'La aplicación prolongada convierte al practicante en cuerpo cósmico parcial',
    ],
    inferred: [
      'La Academia conoce los riesgos pero no la cura',
      'La Corriente es prerequisito de la magia gravitacional avanzada de Radahn',
      'Otros investigadores pre-Sellen sufrieron destinos similares',
    ],
    theories: [
      'Si los tres se reunieran cosmológicamente, podrían formar un Lord Elden alternativo',
      'La Corriente puede ser usada para detener estrellas (como hizo Radahn)',
      'Los cuerpos parcialmente cósmicos pueden comunicarse entre sí a distancias estelares',
    ],
    ambiguous: [
      'Si la Corriente tiene voluntad propia',
      'Si la transformación es reversible',
      'Si la Academia podría producir un curso seguro de aplicación',
    ],
    relatedCharacters: ['sellen', 'azur', 'lusat', 'radahn'],
    relatedFactions: ['raya-lucaria', 'ancient-astrologers'],
    relatedRegions: ['sellia', 'raya-lucaria'],
    relatedConcepts: ['glintstone', 'stars-and-fate-concept', 'gravity-magic'],
  },

  'law-of-regression': {
    summary:
      'La Ley de la Regresión es principio metafísico fundamentalista que considera que toda forma debe regresar a su versión más simple y coherente. Goldmask la usa para descifrar la falla del Orden Dorado. Su aplicación produce la Era del Orden — perfección lógica al precio de la individualidad.',
    deepLore: [
      h(2, 'Origen filosófico'),
      p(
        'La Ley de la Regresión fue codificada por ',
        link('Radagon', 'character', 'radagon'),
        ' durante sus eras de reparación del Anillo Elden. Su aplicación específica: identificar contradicciones internas en el ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' y reducirlas a su forma más simple. Es herramienta intelectual, no hechizo.',
      ),
      h(2, 'Uso por Goldmask'),
      p(
        link('Goldmask', 'character', 'goldmask'),
        ' es el único monje vivo capaz de operar la Ley de la Regresión hasta sus consecuencias finales. Su silencio absoluto es disciplina ritual: la formulación de la Ley requiere meditación pura. ',
        link('Corhyn', 'character', 'corhyn'),
        ' lo acompaña como traductor parcial de sus pensamientos no pronunciados.',
      ),
      h(2, 'Resultado cosmológico'),
      p(
        'La aplicación final identifica la falla del Orden Dorado: la fusión Marika-Radagon es contradicción interna. Corregirla produce la ',
        link('Era del Orden', 'ending', 'order'),
        ' — un cosmos perfectamente coherente, frío, geométrico, sin grietas. Pero también sin humanidad, sin excepciones, sin espacio para lo no encajable.',
      ),
    ],
    confirmed: [
      'La Ley de la Regresión es codificación intelectual, no hechizo',
      'Procede de la tradición fundamentalista de Radagon',
      'Goldmask la opera hasta sus consecuencias finales',
      'Su aplicación produce la Era del Orden',
    ],
    inferred: [
      'Reduce contradicciones a sus formas más simples',
      'Identifica la fusión Marika-Radagon como falla central',
      'La Era resultante es geométricamente perfecta pero estructuralmente fría',
    ],
    theories: [
      'Marika misma alentó secretamente esta línea filosófica',
      'La Ley no fue inventada por Radagon — la heredó de tradiciones pre-Orden',
      'Su aplicación tiene límites — algunas contradicciones cosmológicas resisten',
    ],
    ambiguous: [
      'Si Corhyn comprende plenamente la Ley o solo la transmite',
      'Si la Era del Orden elimina la individualidad o solo la regula',
      'Si existen versiones alternativas de la Ley para otras cosmologías',
    ],
    relatedCharacters: ['goldmask', 'corhyn', 'radagon', 'marika'],
    relatedFactions: ['fundamentalistas', 'orden-dorado'],
    relatedConcepts: ['golden-order', 'voluntad-mayor', 'law-of-causality'],
    relatedEndings: ['order'],
  },

  'law-of-causality': {
    summary:
      'La Ley de la Causalidad regula causas y efectos en el Interregno. La rotura del Anillo Elden la fragmentó: ciertas causas dejaron de generar sus efectos. Por eso eventos imposibles (Godwyn vivo sin alma, Marika encadenada en su propio árbol) coexisten sin contradicción aparente.',
    deepLore: [
      h(2, 'Función pre-fractura'),
      p(
        'Antes de la fractura, la Ley de la Causalidad mantenía el flujo natural de eventos. Cada causa producía sus efectos correspondientes. La inmortalidad funcional del régimen del Orden Dorado dependía estructuralmente de esta Ley operando coherentemente.',
      ),
      h(2, 'Quiebre cosmológico'),
      p(
        'Cuando ',
        link('Marika', 'character', 'marika'),
        ' rompió el ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        ', la Ley de la Causalidad se fragmentó parcialmente. Eventos que deberían haber producido efectos no los produjeron. ',
        link('Godwyn', 'character', 'godwyn'),
        ' fue asesinado pero no murió. Marika rompió el cosmos pero queda encadenada en su propio árbol. Estos son síntomas: la causalidad del Interregno post-fractura ya no funciona como antes.',
      ),
      h(2, 'Manifestaciones del quiebre'),
      p(
        'Cada anomalía cosmológica del Interregno actual es manifestación del quiebre causal. ',
        link('Aquellos que Viven en la Muerte', 'concept', 'those-who-live-in-death'),
        ' existen porque la causa "muerte del alma" ya no produce el efecto "muerte del cuerpo". La ',
        link('Deathroot', 'concept', 'deathroot'),
        ' fluye porque la descomposición de Godwyn no encuentra el ciclo cosmológico que debería procesarla.',
      ),
    ],
    confirmed: [
      'La Ley de la Causalidad regulaba el flujo de eventos pre-fractura',
      'La rotura del Anillo Elden la fragmentó',
      'Eventos imposibles coexisten sin contradicción visible',
      'Cada anomalía cosmológica del Interregno es síntoma del quiebre causal',
    ],
    inferred: [
      'La Ley es estructural al Anillo Elden, no externa',
      'Su restauración requeriría reensamblar el Anillo completamente',
      'Los seis finales del juego son distintos modos de restaurar parcialmente la causalidad',
    ],
    theories: [
      'La Bestia Elden es la Ley de la Causalidad personificada',
      'Marika rompió la Ley deliberadamente — sabía que era el único modo de detener al régimen',
      'Los Mancillados pueden actuar precisamente porque la Ley no aplica plenamente sobre ellos',
    ],
    ambiguous: [
      'Si la Ley se restaura completamente en algún final o solo parcialmente',
      'Si afecta a la Voluntad Mayor o solo al Interregno',
      'Si fue creada por Marika o existía antes de ella',
    ],
    relatedCharacters: ['marika', 'godwyn', 'radagon'],
    relatedConcepts: ['elden-ring', 'bestia-elden', 'law-of-regression', 'destined-death'],
    relatedTimelineEvents: ['la-fractura', 'godwyn-prince-of-death'],
  },

  /* ──────── Astral / cosmic partials ──────── */

  'gravity-magic': {
    summary:
      'La Magia Gravitacional es disciplina académica que manipula el campo gravitacional del Interregno. Procede de la Corriente Primigenia. Sellen la enseñó a Radahn; Radahn la usó para bloquear las estrellas. Es la magia más cosmológicamente potente del juego.',
    deepLore: [
      h(2, 'Origen y disciplina'),
      p(
        'La Magia Gravitacional procede del estudio de la ',
        link('Corriente Primigenia', 'concept', 'primeval-current-concept'),
        ' — el flujo gravitacional cosmológico que conecta cuerpos celestes. Su aplicación local manipula el campo gravitacional inmediato: levantar objetos, detener proyectiles, atraer enemigos. Su aplicación cosmológica puede detener estrellas.',
      ),
      h(2, 'Practicantes históricos'),
      p(
        link('Sellen', 'character', 'sellen'),
        ' enseñó la disciplina a ',
        link('Radahn', 'character', 'radahn'),
        ' en su juventud. Radahn la dominó hasta el punto de bloquear las estrellas en el cielo de Caelid — gesto cosmológico sin precedentes que detuvo el destino Empyrean de Ranni durante eras.',
      ),
      h(2, 'Limitaciones'),
      p(
        'La aplicación prolongada convierte al practicante en cuerpo parcialmente cósmico (caso Sellen, Azur, Lusat). Radahn pudo escapar de esa transformación porque su masa marcial colosal absorbió el costo. Otros practicantes menores se transforman gradualmente.',
      ),
    ],
    confirmed: [
      'La Magia Gravitacional procede de la Corriente Primigenia',
      'Sellen enseñó a Radahn',
      'Radahn la usó para bloquear las estrellas',
      'Su aplicación prolongada transforma al practicante',
    ],
    inferred: [
      'Es la magia más cosmológicamente potente documentada',
      'Los Lords Alabastro y Onyx son practicantes residuales pre-Sellen',
      'Radahn evitó la transformación por su masa marcial específica',
    ],
    theories: [
      'Existen aplicaciones aún más avanzadas que ningún practicante actual conoce',
      'La Magia Gravitacional puede ser arma anti-divinidad si se aplica correctamente',
      'Es heredera técnica de los Antiguos Astrólogos',
    ],
    ambiguous: [
      'Si tiene límites máximos teóricos',
      'Si afecta a la Voluntad Mayor o solo al espacio físico',
      'Si la Academia conoce más sobre ella de lo que enseña',
    ],
    relatedCharacters: ['sellen', 'azur', 'lusat', 'radahn', 'alabaster-lords', 'onyx-lords'],
    relatedFactions: ['raya-lucaria', 'ancient-astrologers'],
    relatedConcepts: ['primeval-current-concept', 'glintstone', 'stars-and-fate-concept'],
  },

  'primeval-current': {
    summary:
      'Variante referencial de la Corriente Primigenia (ver primeval-current-concept). Mantenida como entrada por compatibilidad histórica del plan de cobertura.',
    deepLore: [
      h(2, 'Referencia cruzada'),
      p(
        'La entrada principal está en ',
        link('Corriente Primigenia', 'concept', 'primeval-current-concept'),
        '. Esta variante existe en el plan original como entrada distinta pero conceptualmente coincide con la otra.',
      ),
    ],
    confirmed: ['Conceptualmente idéntica a primeval-current-concept'],
    inferred: ['Mantenida como entrada referencial'],
    theories: ['No requiere desarrollo adicional'],
    ambiguous: [],
    relatedConcepts: ['primeval-current-concept', 'glintstone', 'stars-and-fate-concept'],
  },

  'radahn-holds-stars': {
    summary:
      'El bloqueo cosmológico de Radahn detuvo las estrellas en el cielo de Caelid durante eras. Su gesto era amor fraterno hacia Ranni — proteger a su hermana del destino Empyrean. Pero el efecto colateral fue cancelar la posibilidad de la Era de las Estrellas. Su muerte en el Festival libera el flujo astronómico.',
    deepLore: [
      h(2, 'Naturaleza del bloqueo'),
      p(
        'Las estrellas del Interregno no son puramente decorativas — son inscripción material del destino. Bloquearlas detiene un destino específico. ',
        link('Radahn', 'character', 'radahn'),
        ' usó su Magia Gravitacional para sostener cosmológicamente el cielo en posición fija sobre Caelid, anclando el destino Empyrean de su hermana ',
        link('Ranni', 'character', 'ranni'),
        ' en suspensión.',
      ),
      h(2, 'Motivación fraternal'),
      p(
        'El bloqueo era acto de amor. Radahn comprendía que el destino Empyrean encadenaría a Ranni a la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' por toda la eternidad. Detener las estrellas era ofrecerle tiempo para encontrar otra salida — tiempo que ella usó para orquestar la Noche de los Cuchillos Negros y matar su propio cuerpo Empyrean.',
      ),
      h(2, 'Liberación posthuma'),
      p(
        'Cuando ',
        link('Malenia', 'character', 'malenia'),
        ' arruinó marcialmente a Radahn en la Batalla de Aeonia, el bloqueo persistió porque su cuerpo seguía técnicamente vivo. El ',
        link('Festival de Radahn', 'timeline', 'festival-radahn'),
        ' diseñado por Jerren completó la liberación: matar a Radahn libera el flujo estelar. Ranni puede ahora consolidar la Era de las Estrellas.',
      ),
    ],
    confirmed: [
      'Radahn bloqueó las estrellas con su Magia Gravitacional',
      'El bloqueo detenía el destino Empyrean de Ranni',
      'Su motivación era proteger a su hermana, no rivalidad',
      'Su muerte en el Festival libera el flujo astronómico',
    ],
    inferred: [
      'Era el único demidiós con capacidad técnica para bloquear las estrellas',
      'Sabía que la liberación eventual permitiría la Era de las Estrellas',
      'Su bloqueo retrasó la rebelión cosmológica de Ranni durante eras',
    ],
    theories: [
      'Radahn aceptó el riesgo de la Floración Escarlata como precio del bloqueo',
      'Sabía desde Aeonia que su muerte ritual era inevitable',
      'Su gravedad bloqueaba específicamente las estrellas Carian',
    ],
    ambiguous: [
      'Cuándo exactamente comenzó el bloqueo',
      'Si Ranni le pidió específicamente que bloqueara o si Radahn decidió solo',
      'Si otros demidioses conocían la operación cosmológica',
    ],
    relatedCharacters: ['radahn', 'ranni', 'malenia', 'sellen', 'jerren'],
    relatedFactions: ['redmanes', 'caria'],
    relatedRegions: ['caelid', 'sellia', 'redmane-castle'],
    relatedConcepts: ['gravity-magic', 'primeval-current-concept', 'stars-and-fate-concept'],
    relatedTimelineEvents: ['batalla-aeonia', 'festival-radahn'],
    relatedEndings: ['age-of-stars'],
  },
}
