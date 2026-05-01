import type { DeepEntity, RichBlock, RichInline } from '../types'

const link = (label: string, targetType: 'character' | 'region' | 'faction' | 'concept' | 'ending' | 'timeline', slug: string): RichInline =>
  ({ type: 'link', label, targetType, slug })
const p = (...children: RichInline[]): RichBlock =>
  ({ type: 'paragraph', children })
const h = (level: 2 | 3, text: string, id?: string): RichBlock =>
  ({ type: 'heading', level, text, id })
const em = (text: string): RichInline => ({ type: 'em', text })

export const glossaryLore: Record<string, Partial<DeepEntity>> = {

  'elden-ring': {
    summary:
      'El Anillo Elden no es un objeto físico simple — es la red conceptual de Grandes Runas que rigen el funcionamiento del cosmos de las Tierras Intermedias. Cada Gran Runa codifica una ley específica (sucesión, gracia, inmortalidad, linaje, decaimiento, regocijo). Marika fue su vasija humana; cuando ella lo rompió contra el suelo tras la muerte de Godwyn, las leyes del cosmos se desensamblaron simultáneamente. Cada final del juego es respuesta distinta a qué hacer con el Anillo fragmentado.',
    deepLore: [
      h(2, 'Naturaleza ontológica del Anillo'),
      p(
        'El Anillo Elden es estructura cosmológica, no objeto material. Existe simultáneamente como red conceptual (las leyes que rigen las Tierras Intermedias), como entidad vinculada (',
        link('la Bestia Elden', 'concept', 'bestia-elden'),
        ' es su forma autónoma divorciada de voluntad humana), y como contenido de una vasija humana (',
        link('Marika', 'character', 'marika'),
        ' es su portadora central). Las Grandes Runas que lo componen no son fragmentos discretos — son aspectos diferenciables de la misma estructura unificada. Cuando todas funcionan en sincronía, el cosmos de las Tierras Intermedias tienen leyes coherentes.'
      ),
      h(2, 'Las Grandes Runas como ley'),
      p(
        'Cada ',
        link('Gran Runa', 'concept', 'great-rune'),
        ' codifica una ley específica del cosmos. La de Godrick rige el linaje (capacidad de injerto y herencia). La de Rennala rige el ciclo vital (renacimiento). La de Radahn rige el flujo astronómico. La de Morgott rige la unión cosmológica del régimen. La de Mohg rige la sangre. La de Malenia rige el decaimiento. La gestión coordinada de todas estas leyes, mediada por la vasija humana de Marika, era el funcionamiento cosmológico del Orden Dorado pre-fractura.'
      ),
      h(2, 'La rotura y sus consecuencias'),
      p(
        'Tras la ',
        link('Noche de los Cuchillos Negros', 'timeline', 'ranni-noche-cuchillos'),
        ' y el asesinato del alma de ',
        link('Godwyn', 'character', 'godwyn'),
        ', Marika tomó un martillo y rompió el Anillo Elden contra el suelo de las Tierras Intermedias. La fragmentación fue inmediata: cada Gran Runa quedó dispersa entre los demidiós que la podía sostener. La ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' se retiró parcialmente al perder vasija coordinadora. La ',
        link('Ley de la Causalidad', 'concept', 'law-of-causality'),
        ' se quebró: ciertas causas dejaron de generar sus efectos. ',
        em('Aquellos que Viven en la Muerte'),
        ' aparecieron como manifestación física del quiebre.'
      ),
      h(2, 'Restauración y reforma: los seis finales'),
      p(
        'Cada uno de los ',
        link('finales', 'ending', 'fracture'),
        ' del juego es respuesta distinta a qué hacer con el Anillo: la ',
        link('Era de la Fractura', 'ending', 'fracture'),
        ' lo reensambla sin cambios; la ',
        link('Era del Orden', 'ending', 'order'),
        ' aplica la Ley de la Regresión para corregir su contradicción interna; la ',
        link('Era del Crepúsculo', 'ending', 'duskborn'),
        ' le devuelve la Muerte Predestinada como parte legítima; la ',
        link('Era de la Llama Frenética', 'ending', 'frenzied-flame'),
        ' lo reemplaza por la conflagración universal; la ',
        link('Era de las Estrellas', 'ending', 'age-of-stars'),
        ' retira la influencia divina cercana sustituyéndola por luna distante; el final ',
        link('Lord of Frenzied Flame', 'ending', 'despair'),
        ' lo reduce a cenizas. Seis modos de tratar la misma estructura rota.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'El Anillo Elden plantea la pregunta central del juego: ¿es posible reformar un cosmos cuyo principio fundacional contiene una contradicción? La respuesta del juego es: cada respuesta tiene precio. Reensamblarlo idéntico perpetúa la falla. Corregirlo perfectamente elimina la individualidad. Devolverle la Muerte la integra como pérdida estructural. Reemplazarlo por la Llama lo extingue. Sustituirlo por estrellas lo deja huérfano. Cada Tarnished que llega al trono debe elegir cuál precio pagar.'
      ),
    ],
    confirmed: [
      'El Anillo Elden es estructura cosmológica compuesta de Grandes Runas',
      'Cada Gran Runa codifica una ley específica del cosmos',
      'Marika es la vasija humana central que lo coordina',
      'Marika lo rompió por su mano tras la muerte de Godwyn',
      'Cada uno de los seis finales es respuesta distinta a la fractura',
    ],
    inferred: [
      'La rotura quebró simultáneamente la Ley de la Causalidad',
      'La Voluntad Mayor se retiró parcialmente al perder vasija coordinadora',
      'Aquellos que Viven en la Muerte son manifestación del quiebre causal',
      'La Bestia Elden es la forma del Anillo divorciada de toda voluntad humana',
    ],
    theories: [
      'El Anillo existió en formas anteriores bajo regímenes pre-Marika (era dragónica de Placidusax, era de la Reina de Ojos Crepusculares)',
      'Marika programó la rotura desde el momento de la fundación como instrumento diferido',
      'Cada Gran Runa puede albergar leyes alternativas si se reformulan ritualmente',
      'La fragmentación era reversible solo durante una ventana temporal específica que ya cerró',
    ],
    ambiguous: [
      'Si la Voluntad Mayor creó originalmente el Anillo o solo lo encontró como estructura preexistente',
      'Si todas las Grandes Runas son intercambiables o cada una tiene afinidad específica',
      'Si Marika podía haberlo reformado sin romperlo',
      'Cuántas Grandes Runas existen en total — los seis demidióses no agotan el conjunto necesariamente',
    ],
    relatedCharacters: ['marika', 'radagon', 'godwyn', 'goldmask'],
    relatedFactions: ['orden-dorado', 'fundamentalistas', 'dos-dedos'],
    relatedConcepts: ['great-rune', 'voluntad-mayor', 'golden-order', 'destined-death', 'bestia-elden', 'law-of-causality', 'law-of-regression'],
    relatedTimelineEvents: ['la-fractura', 'ranni-noche-cuchillos'],
    relatedEndings: ['fracture', 'order', 'duskborn', 'despair', 'frenzied-flame', 'age-of-stars'],
  },

  'bestia-elden': {
    summary:
      'La Bestia Elden es el aspecto cosmológico del Anillo Elden divorciado de toda voluntad humana. Es la forma final que combate al Tarnished inmediatamente después de Radagon. No es un dios ni una entidad consciente: es la cosmología misma defendiéndose. Su derrota deja al Tarnished libre de elegir el destino del cosmos sin oposición. Es el último guardián cosmológico del régimen.',
    deepLore: [
      h(2, 'Naturaleza ontológica: el cosmos sin máscara'),
      p(
        'La Bestia Elden no es dios externo, ni vasija, ni demidiós. Es algo más raro y más estructural: el ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        ' mismo en forma autónoma, divorciado de la voluntad humana de ',
        link('Marika', 'character', 'marika'),
        '. Cuando Marika rompió el Anillo, eso no significó que el Anillo dejara de existir — solo que dejó de operar coordinadamente con voluntad humana. La Bestia es lo que el Anillo ',
        em('es'),
        ' cuando ningún humano lo está coordinando: pura legalidad cosmológica defendiéndose de la modificación.'
      ),
      h(2, 'Aparición ritual'),
      p(
        'La Bestia Elden no aparece libremente — se manifiesta solo cuando Marika y ',
        link('Radagon', 'character', 'radagon'),
        ' han caído. El orden ritual del combate final es exacto: el Tarnished derrota a Radagon (el último guardián humano), Radagon se desploma, su cuerpo es absorbido por la Bestia, esta emerge como forma cosmológica final. Es la última defensa del régimen — primero los humanos, luego sus Bestias Sombra, luego los Empyreans, luego los demidioses, luego los aspectos divinos, y finalmente el cosmos mismo en forma autónoma.'
      ),
      h(2, 'Forma física y simbolismo'),
      p(
        'Físicamente la Bestia tiene forma de constelación viviente: cuerpo dorado-cósmico contenido pero ondulante, alas estelares, ojos que albergan galaxias. Sus ataques son cosmológicos — invoca cometas, fragmentos del Anillo, lluvias de runas estelares. La iconografía es deliberada: combate al Tarnished con los mismos elementos cosmológicos que el régimen usaba para legitimar su autoridad. No tiene voluntad consciente reconocible: opera por instinto cosmológico de auto-preservación, como un sistema inmune.'
      ),
      h(2, 'La derrota: el cosmos disponible'),
      p(
        'Cuando el Tarnished derrota a la Bestia Elden, el régimen entero ha caído: ningún guardián humano, divino, o cosmológico defiende ya el Anillo. El Tarnished puede entonces elegir libremente el destino del cosmos sin oposición ritual. Cada uno de los seis ',
        link('finales', 'ending', 'fracture'),
        ' del juego se ejecuta inmediatamente después de este momento. La Bestia no se regenera; la victoria es definitiva. Es el único combate del juego que abre directamente la sección de elección cosmológica.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La Bestia Elden es el monumento del juego a la naturaleza autónoma de las leyes cosmológicas. Plantea la pregunta más extraña: si ningún humano coordina el cosmos, ¿quién lo defiende? La respuesta del juego: el cosmos mismo, sin voluntad pero con capacidad operativa. Es la cosmología hecha sistema inmune. Su derrota es liberación absoluta — y también soledad absoluta. Tras vencerla, el Tarnished está genuinamente solo frente al cosmos. La elección que sigue no tiene supervisión divina, no tiene defensa cosmológica, no tiene oposición. Solo el peso del último humano frente a un universo abierto.'
      ),
    ],
    confirmed: [
      'La Bestia Elden es el aspecto autónomo del Anillo Elden',
      'Aparece inmediatamente después de derrotar a Radagon',
      'Tiene forma de constelación viviente con ataques cosmológicos',
      'Su derrota deja al Tarnished libre de elegir cualquiera de los seis finales',
      'No es un dios ni entidad consciente — es legalidad cosmológica autónoma',
    ],
    inferred: [
      'Opera por instinto cosmológico de auto-preservación, no voluntad consciente',
      'Es la última defensa del régimen tras agotar guardianes humanos y divinos',
      'Su existencia documenta que el cosmos puede defenderse sin voluntad humana coordinadora',
      'Cada elemento de su combate (cometas, runas) replica iconografía del régimen',
    ],
    theories: [
      'La Bestia es la Voluntad Mayor parcialmente manifestada — su última intervención antes de retirarse plenamente',
      'Es la Ley de la Causalidad personificada en forma defensiva',
      'Si fuera derrotada antes de Radagon, el régimen no caería plenamente',
      'Su forma cósmica visible es solo apariencia — su esencia real es geometría matemática del Anillo',
    ],
    ambiguous: [
      'Si tiene cualquier forma de consciencia residual',
      'Si es entidad única o si reaparece en otros ciclos cosmológicos',
      'Cuándo exactamente se forma (siempre estuvo ahí o se constituyó al romperse el Anillo)',
      'Si su derrota realmente libera al cosmos o solo deja la decisión al Tarnished',
    ],
    relatedCharacters: ['marika', 'radagon'],
    relatedConcepts: ['elden-ring', 'voluntad-mayor', 'great-rune', 'law-of-causality'],
    relatedFactions: ['orden-dorado'],
    relatedTimelineEvents: ['la-fractura'],
    relatedEndings: ['fracture', 'order', 'duskborn', 'frenzied-flame', 'age-of-stars'],
  },

  'voluntad-mayor': {
    summary:
      'La Voluntad Mayor es el dios externo dominante de las Tierras Intermedias actuales. Fuente cosmológica original del Orden Dorado. Eligió a Marika como vasija humana hace eras incontables. Opera mediante mensajeros físicos (los Dos Dedos) y traductoras humanas (las Lectoras). Tras la rotura del Anillo se ha retirado parcialmente — su silencio creciente es la condición cosmológica que define el presente del juego.',
    deepLore: [
      h(2, 'Naturaleza ontológica'),
      p(
        'La Voluntad Mayor es uno de los muchos ',
        link('dioses exteriores', 'concept', 'dioses-exteriores'),
        ' que pugnan por imponer leyes a las Tierras Intermedias. A diferencia de divinidades menores que operan mediante un solo huésped, la Voluntad Mayor opera mediante red institucional: vasija humana central (Marika), mensajeros físicos (Dos Dedos), traductoras rituales (Lectoras de Dedos), clero ejecutor (Orden Dorado), y guardianes cosmológicos (Bestias Sombra de cada Empyrean). La sofisticación operacional excede la de cualquier otro dios externo del que el juego documenta evidencia.'
      ),
      h(2, 'Selección de Marika'),
      p(
        'La Voluntad Mayor eligió a ',
        link('Marika', 'character', 'marika'),
        ' como vasija humana en una era cuya datación exacta se ha perdido. La selección no fue aleatoria: Marika era ',
        link('Numen', 'concept', 'numen'),
        ' — humana de cualidades superiores capaz de servir como recipiente divino. Antes de ella, la ',
        link('Reina de Ojos Crepusculares', 'character', 'gloam-eyed-queen'),
        ' había sido vasija de un dios externo distinto, y antes de ella, la era dragónica de ',
        link('Placidusax', 'character', 'placidusax'),
        ' tenía su propio dios externo no nombrado. La Voluntad Mayor llenó la vacante cosmológica que estos regímenes anteriores dejaron al colapsar.'
      ),
      h(2, 'Cadena de mediación'),
      p(
        'La Voluntad Mayor no se comunica directamente con mortales. Su voluntad fluye a través de cadena ritual: voluntad → ',
        link('Dos Dedos', 'faction', 'dos-dedos'),
        ' (traducen a gestos físicos) → ',
        link('Lectoras', 'faction', 'finger-readers'),
        ' como ',
        link('Enia', 'character', 'enia'),
        ' (traducen a palabras humanas) → mortales. La Mesa Redonda en Leyndell es estructura institucional construida en torno a este nodo de mediación. Cualquier ruptura en la cadena interrumpe la comunicación cosmológica.'
      ),
      h(2, 'El silencio creciente post-fractura'),
      p(
        'Tras la rotura del Anillo Elden, la Voluntad Mayor se ha retirado parcialmente. Sus pronunciamientos a través de los Dedos son cada vez más vagos. Los Dedos mismos están deteriorándose visiblemente. ',
        link('Goldmask', 'character', 'goldmask'),
        ' diagnostica el problema; ',
        link('Gideon', 'character', 'gideon'),
        ' lo sospecha; los Tarnished retornan precisamente porque la atención divina se ha distraído. La fe institucional sobrevive al objeto de la fe — la liturgia continúa, pero el dios responde con cada vez más demora.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La Voluntad Mayor es el monumento del juego al dios distante. No es ni benevolente ni malvada en términos morales humanos — es ',
        em('externa'),
        '. Sus prioridades son cosmológicas, no personales. Cuando un régimen falla, no lo defiende: lo abandona y busca otra vasija. Cuando una vasija desobedece (como Marika), no la mata: la encadena ceremonialmente y espera. Su modo de operar plantea la pregunta sobre si los dioses externos son benignos por afiliación o solo por la incapacidad de los mortales para verlos plenamente. Cada final del juego que la sustituye o la desafía es respuesta posible a esa pregunta.'
      ),
    ],
    confirmed: [
      'La Voluntad Mayor es uno de los muchos dioses externos de las Tierras Intermedias',
      'Eligió a Marika como vasija humana central',
      'Opera mediante red institucional sofisticada (Dos Dedos, Lectoras, Orden Dorado)',
      'Se ha retirado parcialmente tras la rotura del Anillo Elden',
      'Sus pronunciamientos a través de los Dos Dedos son cada vez más vagos',
    ],
    inferred: [
      'Su selección de Marika fue después del colapso de regímenes pre-Orden',
      'Su retirada actual es respuesta cosmológica a la transgresión de Marika',
      'Los Tarnished retornan precisamente porque su atención se ha distraído',
      'Es el dios externo más institucionalmente sofisticado documentado por el juego',
    ],
    theories: [
      'No murió ni se debilitó — solo busca nueva vasija fuera del cosmos de las Tierras Intermedias',
      'Conoce el destino futuro del cosmos y opera con horizonte temporal mayor',
      'Es hermana cosmológica de la Madre Informe o derivación de un mismo dios externo más antiguo',
      'Los seis finales del juego son alternativas que la Voluntad Mayor permite — no opciones contra ella',
    ],
    ambiguous: [
      'Identidad y forma física fuera de su manifestación institucional',
      'Si tiene voluntad coherente o solo procesos cosmológicos automáticos',
      'Cuántos otros regímenes ha mantenido en otras dimensiones',
      'Si retornaría plenamente bajo cosmología reformada o rechazaría el cosmos de las Tierras Intermedias definitivamente',
    ],
    relatedCharacters: ['marika', 'radagon', 'goldmask', 'enia', 'gloam-eyed-queen'],
    relatedFactions: ['orden-dorado', 'dos-dedos', 'finger-readers'],
    relatedConcepts: ['dioses-exteriores', 'golden-order', 'elden-ring', 'empyrean', 'numen'],
    relatedEndings: ['fracture', 'order', 'duskborn'],
    relatedTimelineEvents: ['marika-godfrey', 'la-fractura'],
  },

  'dioses-exteriores': {
    summary:
      'Los dioses exteriores son entidades cosmológicas que pugnan por imponer sus leyes a las Tierras Intermedias. Operan infectando huéspedes humanos: la Voluntad Mayor a través de Marika, la Madre Informe a través de Mohg, la Llama Frenética a través de los Tres Dedos, el dios del decaimiento a través de Malenia. Cada huésped es vehículo y, en cierta medida, prisionero. Miquella fue el único que intentó construir una cosmología sin dios externo — su Oro sin Aleación es proyecto antiteo.',
    deepLore: [
      h(2, 'Categoría ontológica'),
      p(
        'Los dioses exteriores son entidades cuyo dominio cosmológico procede de fuera de las Tierras Intermedias como mundo. No son dioses locales: son agentes externos que han alcanzado capacidad de imponer leyes al cosmos. Cada uno representa un dominio específico — orden, sangre, fuego, decaimiento, sufrimiento, vacío estelar. La pugna entre ellos es la dinámica cosmológica subyacente que el régimen actual del Orden Dorado intenta administrar.'
      ),
      h(2, 'Catálogo conocido'),
      p(
        'Los dioses exteriores documentados incluyen: la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' (régimen actualmente dominante, opera mediante Marika), la ',
        link('Madre Informe', 'concept', 'formless-mother'),
        ' (sangre y disolución carnal, opera mediante Mohg), la ',
        link('Llama Frenética', 'concept', 'frenzied-flame'),
        ' (sufrimiento universal, opera mediante los Tres Dedos), un dios del decaimiento ',
        em('sin nombre canónico'),
        ' que se manifiesta como ',
        link('Podredumbre Escarlata', 'concept', 'scarlet-rot'),
        ' a través de Malenia, el ',
        link('Fell God', 'concept', 'fell-god'),
        ' del fuego primigenio (operaba mediante los Gigantes del Fuego), y entidades del Vacío Estelar a las que pertenecen ',
        link('Astel', 'character', 'astel'),
        ' y posiblemente la luna oscura de Ranni.'
      ),
      h(2, 'Mecánica del huésped'),
      p(
        'Cada dios exterior opera infectando un huésped humano. La infección puede ser ritual (',
        link('Marika', 'character', 'marika'),
        ' fue elegida explícitamente por la Voluntad Mayor), accidental (algunas víctimas frenéticas son contagio pasivo), pactada (',
        link('Mohg', 'character', 'mohg'),
        ' eligió a la Madre Informe), o de nacimiento (',
        link('Malenia', 'character', 'malenia'),
        ' nació infectada de podredumbre). Una vez instalado, el dios exterior usa al huésped como vehículo y, simultáneamente, lo prisiona. La doble naturaleza es estructural: ningún huésped es simplemente vasija ni simplemente víctima.'
      ),
      h(2, 'El proyecto Miquella'),
      p(
        link('Miquella', 'character', 'miquella'),
        ' fue el único Empyrean que intentó construir cosmología completa sin pacto con dios exterior. Su ',
        link('Oro sin Aleación', 'concept', 'unalloyed-gold'),
        ' es metal purificado de toda influencia divina — el primer experimento documentado de teología sin dios. Sus agujas pueden expulsar a un dios exterior del cuerpo de su huésped (Millicent las usa contra la Podredumbre). El proyecto del ',
        link('Haligtree', 'concept', 'haligtree'),
        ' es la única utopía documentada de las Tierras Intermedias. Que Miquella fuera secuestrado por Mohg antes de completarlo es síntoma de cuán amenazador era el proyecto para todos los dioses externos simultáneamente.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Los dioses exteriores plantean la pregunta filosófica más radical del juego: ¿es posible el cosmos sin dios externo? La doctrina del Orden Dorado dice no — necesitas algún dios para tener leyes coherentes. La doctrina de la Llama Frenética dice no — los dioses son inevitables, mejor terminar con todo. La doctrina de los Pieles de Dios dice sí pero a costa de matar a los dioses uno a uno. El proyecto Miquella dice sí mediante metalurgia teológica. Cada cosmología de las Tierras Intermedias son respuesta distinta. La pregunta nunca cierra del todo.'
      ),
    ],
    confirmed: [
      'Los dioses exteriores son entidades cosmológicas externas a las Tierras Intermedias',
      'Operan infectando huéspedes humanos como vehículos',
      'Voluntad Mayor, Madre Informe, Llama Frenética y dios del decaimiento están confirmados',
      'Miquella desarrolló el Oro sin Aleación como proyecto antiteo',
      'Las agujas de Oro sin Aleación pueden expulsar a un dios del cuerpo de su huésped',
    ],
    inferred: [
      'La pugna entre ellos es la dinámica cosmológica subyacente de las Tierras Intermedias',
      'Cada huésped es simultáneamente vehículo y prisionero del dios',
      'El proyecto Miquella era amenaza estructural para todos los dioses exteriores simultáneamente',
      'Los regímenes cosmológicos de las Tierras Intermedias son seriales — uno reemplaza a otro al colapsar',
    ],
    theories: [
      'Existen dioses exteriores adicionales no documentados que esperan vacante cosmológica',
      'El Crisol primigenio fue manifestación de un dios exterior anterior a todos los actuales',
      'Algunos dioses exteriores cooperan secretamente contra los demás',
      'El proyecto Miquella podría ser completado por otro Empyrean si el conocimiento se transfiere',
    ],
    ambiguous: [
      'Cuántos dioses exteriores existen en total',
      'Si tienen origen común o son entidades genuinamente independientes',
      'Si pueden morir o solo desplazarse a otros cosmos',
      'Si el cosmos puede sostenerse genuinamente sin ningún dios externo',
    ],
    relatedCharacters: ['marika', 'mohg', 'malenia', 'miquella', 'shabriri', 'astel', 'fire-giant', 'gloam-eyed-queen'],
    relatedConcepts: ['voluntad-mayor', 'formless-mother', 'frenzied-flame', 'scarlet-rot', 'unalloyed-gold', 'fell-god', 'haligtree', 'crucible'],
    relatedFactions: ['tres-dedos', 'bloody-fingers', 'pieles-de-dios', 'haligtree'],
    relatedEndings: ['frenzied-flame', 'age-of-stars'],
  },

  crucible: {
    summary:
      'El Crisol es la fuerza vital primigenia anterior al Árbol Áureo donde todas las formas se mezclaban sin diferenciación canónica. Cuernos, escamas, alas, podredumbre, raíces — todo compartía sustrato común. El Orden Dorado lo declaró primitivo e impuro y purgó sus manifestaciones, pero el Crisol persiste estructuralmente: en los Omens, en los Misbegotten, en los Hombres-Bestia, en las tradiciones marginalizadas. Cada manifestación del Crisol actual es prueba de que el régimen nunca pudo purificar plenamente.',
    deepLore: [
      h(2, 'Naturaleza ontológica'),
      p(
        'El Crisol es fuerza vital primordial — energía cosmológica que precede al ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' actual como árbol estandarizador. Su característica definitoria: ',
        em('mezcla todas las formas sin diferenciar'),
        '. Cuernos, escamas, alas, podredumbre, raíces, fluido, hueso, pluma — todo compartía sustrato común. Cada ser vivo del Crisol original era hibridación múltiple. La diferenciación entre humano y animal, entre orgánico e inorgánico, entre vida y materia, era fluida en lugar de fija. El cosmos era promiscuo en sus configuraciones.'
      ),
      h(2, 'El árbol primordial'),
      p(
        'Antes del Árbol Áureo dorado existió un árbol del Crisol — formación cósmica que distribuía la energía primigenia por todas las Tierras Intermedias. Sus iconografías sobreviven como reliquias: las espinas del Crisol que algunos hechizos invocan, los ojos del Crisol embebidos en armaduras pre-Orden, los cuernos del Crisol que aparecen en armaduras de ',
        link('Crucible Knights', 'faction', 'crucible-knights'),
        '. La forma exacta del árbol original se ha perdido — el Árbol Áureo dorado se construyó sobre o en sustitución del árbol del Crisol, y ningún testigo del original sobrevive.'
      ),
      h(2, 'La purga del Orden Dorado'),
      p(
        'El régimen del Orden Dorado consideró al Crisol primitivo y purgó sus manifestaciones. La operación fue gradual: durante eras tempranas, el Crisol fue tolerado como tradición secundaria (los ',
        link('Crucible Knights', 'faction', 'crucible-knights'),
        ' fueron orden caballeresca del Orden primitivo). Cuando el régimen consolidó autoridad doctrinal, el Crisol fue declarado impuro. Sus manifestaciones humanas fueron clasificadas como ',
        link('maldición', 'concept', 'omen-curse'),
        '. Sus tradiciones rituales fueron progresivamente desacreditadas. Sus cuerpos fueron exterminados o esclavizados.'
      ),
      h(2, 'Persistencia estructural'),
      p(
        'Pero el Crisol no se purgó plenamente. La sangre antigua persiste. Los ',
        link('Omens', 'faction', 'omens'),
        ' nacen con cuernos del Crisol — incluyendo ',
        link('Morgott', 'character', 'morgott'),
        ' y ',
        link('Mohg', 'character', 'mohg'),
        ', hijos de Marika misma. Los ',
        link('Misbegotten', 'faction', 'misbegotten'),
        ' son humanos con manifestaciones extremas del Crisol. Los ',
        link('Hombres-Bestia', 'faction', 'hombres-bestia'),
        ' conservan integración Crisol completa en su biología — incluyendo a ',
        link('Maliketh', 'character', 'maliketh'),
        ' y ',
        link('Blaidd', 'character', 'blaidd'),
        '. Cada manifestación viva del Crisol en las Tierras Intermedias actuales es declaración silenciosa de que el régimen no pudo purificar a fondo.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'El Crisol es el monumento del juego a la cosmología que el régimen reprimió. La pregunta implícita: ¿es el Crisol más primitivo o solo distinto? El régimen del Orden Dorado lo trata como inferior; las tradiciones que lo conservan lo tratan como primordial. La diferencia es política, no ontológica. Cada cuerpo Crisol en las Tierras Intermedias actuales plantea la posibilidad de cosmología alternativa donde la diferenciación cosmológica fuera menos rígida. La quemadura del Árbol Áureo en cualquier final libera al menos parcialmente la posibilidad de que el Crisol regrese — no como retorno literal sino como apertura cosmológica para configuraciones que el régimen dorado prohibió.'
      ),
    ],
    confirmed: [
      'El Crisol es fuerza vital primordial anterior al Árbol Áureo',
      'Mezcla todas las formas sin diferenciación canónica',
      'El Orden Dorado lo declaró primitivo y purgó sus manifestaciones',
      'Persiste en Omens, Misbegotten, Hombres-Bestia y tradiciones marginalizadas',
      'Los Crucible Knights fueron orden caballeresca del Orden primitivo que aún integraba el Crisol',
    ],
    inferred: [
      'Existió un árbol del Crisol antes del Árbol Áureo dorado',
      'La purga fue gradual, no súbita — abarcó múltiples eras',
      'La sangre Crisol apareció en el linaje real a través de Radagon',
      'Cada manifestación viva es prueba de purga incompleta del régimen',
    ],
    theories: [
      'El Crisol podría regresar cosmológicamente bajo finales específicos (Era del Crepúsculo, Era de las Estrellas)',
      'El Árbol Áureo dorado se construyó sobre el árbol del Crisol original',
      'Los Hombres-Bestia conservan memoria racial del régimen Crisol pre-Orden',
      'Marika sabía que el Crisol persistía en su linaje y eligió ocultarlo',
    ],
    ambiguous: [
      'Forma exacta del árbol del Crisol original',
      'Si el Crisol tiene voluntad coherente o solo es energía',
      'Cuándo exactamente comenzó la purga sistemática',
      'Si puede ser plenamente reactivado bajo cosmología post-Voluntad Mayor',
    ],
    relatedCharacters: ['morgott', 'mohg', 'maliketh', 'blaidd', 'marika', 'radagon'],
    relatedFactions: ['omens', 'hombres-bestia', 'misbegotten', 'crucible-knights'],
    relatedConcepts: ['erdtree', 'golden-order', 'omen-curse', 'shadow-bound-beast'],
    relatedTimelineEvents: ['era-antigua', 'crucible-purge'],
  },

  erdtree: {
    summary:
      'El Árbol Áureo es el árbol dorado central que estructura las Tierras Intermedias bajo el Orden Dorado. Reemplazó al Crisol como cosmología vital dominante. Es simultáneamente templo, vasija ritual y dispositivo cosmológico: distribuye la Gracia, recicla almas, ancla la legitimidad del régimen. Marika está encadenada en su tronco; Godwyn descompuesto en sus raíces. Para abrir el trono debe ser quemado — Melina se inmola como portadora ritual de la Llama de Ruina.',
    deepLore: [
      h(2, 'Origen: el reemplazo del Crisol'),
      p(
        'El Árbol Áureo no es árbol natural — es construcción cosmológica diseñada por la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' a través de ',
        link('Marika', 'character', 'marika'),
        ' como sustituto del ',
        link('Crisol', 'concept', 'crucible'),
        ' primigenio. Donde el Crisol mezclaba todas las formas vitales sin diferenciación, el Árbol Áureo impone formas estandarizadas. Donde el Crisol era promiscuo, el Árbol Áureo es selectivo. La sustitución fue acto fundacional del Orden Dorado: instaurar un árbol cosmológico que filtrara las formas válidas del cosmos.'
      ),
      h(2, 'Funciones operativas'),
      p(
        'El Árbol Áureo opera tres funciones simultáneas. Primera: distribuye la ',
        link('Gracia', 'concept', 'grace'),
        ' — la luz dorada que marca a los elegidos del régimen. Segunda: recicla almas — los muertos de las Tierras Intermedias son absorbidos por el árbol y redistribuidos como nueva vida. Tercera: ancla legitimidad cosmológica — solo lo bendecido por el árbol es plenamente válido en el régimen. Sus raíces se extienden por todas las Tierras Intermedias; cada ',
        link('Árbol Áureo Menor', 'concept', 'minor-erdtrees'),
        ' es satélite distribuidor de su gracia.'
      ),
      h(2, 'La paradoja interior'),
      p(
        'Pero el Árbol Áureo no es solo dorado. Sus raíces albergan el cadáver de ',
        link('Godwyn', 'character', 'godwyn'),
        ', cuya descomposición genera la ',
        link('Deathroot', 'concept', 'deathroot'),
        '. Bajo Leyndell aguardan los ',
        link('Tres Dedos', 'faction', 'tres-dedos'),
        '. En su tronco está encadenada la propia ',
        link('Marika', 'character', 'marika'),
        ' como castigo de la Voluntad Mayor por romper el Anillo Elden. El árbol es contenedor de su propia contradicción: lo dorado y lo necrótico, el régimen y su preso, la gracia y el sello que la sostiene.'
      ),
      h(2, 'La pira: lo que debe quemarse'),
      p(
        'Para acceder al trono Elden, el Árbol Áureo debe quemarse. ',
        link('Melina', 'character', 'melina'),
        ' se inmola en los ',
        link('Mountaintops of the Giants', 'region', 'mountaintops'),
        ' como portadora ritual de la ',
        link('Llama de Ruina', 'concept', 'fell-god'),
        ' confinada en el último ',
        link('Gigante del Fuego', 'character', 'fire-giant'),
        '. La paradoja cosmológica es que la única llama capaz de quemar al Árbol Áureo es la del pueblo que el régimen exterminó eras atrás. La quemadura es necesaria — el Orden no puede reformarse mientras el árbol siga operando en su forma actual.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'El Árbol Áureo es el monumento del juego a la institución cosmológica como prisión. Cada función que ejerce es también restricción. La gracia que distribuye es también marca de exclusión (los Tarnished sin gracia son personas no-personas). El reciclaje de almas que ofrece es también imposibilidad de muerte verdadera. El árbol es bendición y cárcel simultáneamente, y solo quemándolo se abre la posibilidad de elegir otra cosmología. Su quema es liberación pero también pérdida — la luz dorada que se apaga es también luz que algunos genuinamente amaban.'
      ),
    ],
    confirmed: [
      'El Árbol Áureo reemplazó al Crisol como cosmología vital dominante',
      'Distribuye la Gracia y recicla almas en las Tierras Intermedias',
      'Sus raíces se extienden por todo el continente, conectadas a Árboles Áureos Menores',
      'Marika está encadenada en su tronco; Godwyn descompuesto en sus raíces',
      'Debe ser quemado para acceder al trono Elden',
      'Melina se inmola como portadora ritual de la Llama de Ruina',
    ],
    inferred: [
      'Su construcción fue acto fundacional consciente del Orden Dorado, no fenómeno natural',
      'La Llama de Ruina del último Gigante del Fuego es la única que puede quemarlo',
      'Su quema es estructuralmente necesaria para cualquier reforma cosmológica',
      'La gracia distribuida es simultáneamente bendición y mecanismo de control político',
    ],
    theories: [
      'El árbol mismo tiene voluntad parcial latente, distinta de Marika',
      'Bajo condiciones específicas podría ser reformulado sin quemarse — pero ningún personaje del juego conoce el procedimiento',
      'La conexión Godwyn-raíces puede revertirse en la Era del Crepúsculo',
      'El Crisol original aún late residualmente bajo el Árbol Áureo, listo para reactivarse si el árbol cae',
    ],
    ambiguous: [
      'Si Marika consciente está dentro de su prisión arbórea',
      'Si el árbol procesa todas las almas o solo las del régimen',
      'Cuándo exactamente se construyó (la Era Dorada inicial es ambigua)',
      'Si su gracia es la misma sustancia que la Voluntad Mayor o es derivación',
    ],
    relatedCharacters: ['marika', 'godwyn', 'melina', 'maliketh', 'fire-giant'],
    relatedFactions: ['orden-dorado', 'tres-dedos'],
    relatedRegions: ['leyndell', 'mountaintops'],
    relatedConcepts: ['golden-order', 'crucible', 'deathroot', 'grace', 'minor-erdtrees', 'fell-god', 'voluntad-mayor'],
    relatedTimelineEvents: ['estado-mundo-mancillado', 'erdtree-quemado', 'flame-of-ruin-confined'],
    relatedEndings: ['fracture', 'order', 'duskborn', 'frenzied-flame', 'age-of-stars'],
  },

  'golden-order': {
    summary:
      'El Orden Dorado es la filosofía cosmológica fundada por Marika bajo la Voluntad Mayor. Es simultáneamente régimen político, doctrina teológica, ética jerárquica y dispositivo cosmológico. Sus pilares: el Árbol Áureo, la inmortalidad sellada (Muerte Predestinada confinada), la jerarquía Empyreans → Demidioses → Caballeros → Tarnished, y la Gracia como marca de pertenencia. Su contradicción interna — sellar la Muerte para crear inmortalidad — es la causa última de su crisis estructural.',
    deepLore: [
      h(2, 'Pilares cosmológicos'),
      p(
        'El Orden Dorado se sostiene sobre cuatro pilares interconectados. Primero: el ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' como dispositivo central que distribuye gracia y recicla almas. Segundo: el sello de la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ' dentro de ',
        link('Maliketh', 'character', 'maliketh'),
        ', que produce la inmortalidad funcional. Tercero: la jerarquía cosmológica ',
        link('Empyreans', 'concept', 'empyrean'),
        ' → Demidioses → Caballeros Dorados → mortales bendecidos → ',
        link('Tarnished', 'concept', 'tarnished'),
        '. Cuarto: la ',
        link('Gracia', 'concept', 'grace'),
        ' como marca visible de pertenencia. Estos cuatro funcionando en sincronía constituyen el régimen.'
      ),
      h(2, 'Doctrina y ética'),
      p(
        'La doctrina del Orden Dorado se enseña a través de ',
        link('Brother Corhyn', 'character', 'corhyn'),
        ' y otros clérigos. Sus axiomas: la Gracia es manifestación de bendición divina, los bendecidos son ontológicamente superiores a los no bendecidos, el Árbol Áureo es centro cosmológico legítimo, la Voluntad Mayor es autoridad última, la Muerte verdadera es transgresión cosmológica. Cada axioma se traduce en práctica institucional: persecución de ',
        link('Omens', 'faction', 'omens'),
        ', esclavización de ',
        link('Misbegotten', 'faction', 'misbegotten'),
        ', exclusión de ',
        link('Albinaurics', 'faction', 'albinauricos'),
        '. La ética del régimen es lógicamente coherente con su cosmología — y eso la hace particularmente atroz.'
      ),
      h(2, 'La contradicción que Goldmask detectó'),
      p(
        link('Goldmask', 'character', 'goldmask'),
        ' descubrió que la Ley Mayor del Orden contiene una contradicción lógica interna específica: la fusión Marika-Radagon. Marika representa el cambio (rompió el Anillo); Radagon representa la conservación (intentó repararlo). Que sean el mismo ser produce paradoja estructural irreducible. La frase "',
        em('Radagon es Marika'),
        '" es revelación clave para los ',
        link('Fundamentalistas', 'faction', 'fundamentalistas'),
        ': identifica la falla. Aplicar la ',
        link('Ley de la Regresión', 'concept', 'law-of-regression'),
        ' produce la ',
        link('Era del Orden', 'ending', 'order'),
        ' — un cosmos perfectamente coherente, frío, geométrico, sin grietas.'
      ),
      h(2, 'Crisis post-fractura'),
      p(
        'Tras la rotura del Anillo Elden, los pilares operan en estado degradado. El Árbol Áureo sigue distribuyendo gracia pero a sujetos selectivos (los Tarnished retornan precisamente porque la gracia se debilitó). El sello de Maliketh está deteriorándose tras el robo de Ranni. La jerarquía está fragmentada: cada demidiós sostiene su Gran Runa autónomamente. La Voluntad Mayor se ha retirado parcialmente. ',
        link('Gideon', 'character', 'gideon'),
        ' acumula información sin poder ejecutar; ',
        link('Goldmask', 'character', 'goldmask'),
        ' diagnostica la falla pero no puede corregirla solo; ',
        link('Morgott', 'character', 'morgott'),
        ' defiende un régimen que ya no responde con coordinación.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'El Orden Dorado es la pregunta del juego sobre si una cosmología puede sostenerse en sus propios términos. La respuesta: cualquier sistema basado en exclusión genera, acumulada, las fuerzas que eventualmente lo fracturan. Los Omens encarcelados, los Misbegotten esclavizados, los Albinaurics perseguidos, los Tarnished exiliados, los Nox enterrados, los Gigantes exterminados — cada exclusión histórica del régimen reaparece como fuerza desestabilizadora. La fractura del Anillo no fue accidente: fue la consecuencia lógica acumulada del filtro cosmológico operando durante eras.'
      ),
    ],
    confirmed: [
      'El Orden Dorado fue fundado por Marika bajo la Voluntad Mayor',
      'Sus pilares son Árbol Áureo, Muerte sellada, jerarquía cosmológica y Gracia',
      'Su doctrina excluye sistemáticamente Omens, Misbegotten y Albinaurics',
      'Goldmask identificó la fusión Marika-Radagon como contradicción interna',
      'La Era del Orden aplica la Ley de la Regresión para corregir la falla',
    ],
    inferred: [
      'La Gracia funciona simultáneamente como bendición y mecanismo de control político',
      'La acumulación de excluidos generó las fuerzas que fracturaron el cosmos',
      'La crisis post-fractura paraliza estructuralmente el régimen aunque las instituciones perduren',
      'La doctrina es lógicamente coherente con su cosmología — eso la hace particularmente difícil de reformar parcialmente',
    ],
    theories: [
      'Marika diseñó la fractura desde la fundación como instrumento diferido contra la Voluntad Mayor',
      'Existieron versiones alternativas del Orden en eras pre-Marika que no se documentan',
      'La Era del Orden no elimina la individualidad — solo la regula con coherencia perfecta',
      'Los Fundamentalistas heredan corpus filosófico de tradiciones pre-Marika reformulado por Radagon',
    ],
    ambiguous: [
      'Cuándo exactamente el Orden pasó de inclusivo a excluyente respecto al Crisol',
      'Si Marika genuinamente creyó en el régimen o lo construyó sabiendo que fracasaría',
      'Si la Voluntad Mayor podría retornar plenamente bajo final correcto',
      'Cuántas eras y dinastías acumuladas componen el Orden actual',
    ],
    relatedCharacters: ['marika', 'radagon', 'goldmask', 'corhyn', 'gideon', 'morgott'],
    relatedFactions: ['orden-dorado', 'fundamentalistas', 'dos-dedos', 'finger-readers'],
    relatedConcepts: ['erdtree', 'voluntad-mayor', 'destined-death', 'great-rune', 'grace', 'crucible', 'law-of-regression'],
    relatedEndings: ['order', 'fracture'],
    relatedTimelineEvents: ['marika-godfrey', 'la-fractura'],
  },

  'destined-death': {
    summary:
      'La Muerte Predestinada es la forma cosmológica original de la muerte real en las Tierras Intermedias. Marika la selló dentro de Maliketh al fundar el Orden Dorado, instaurando inmortalidad funcional como ley cosmológica. Todo el problema estructural de las Tierras Intermedias pueden leerse como consecuencia acumulada de ese sello: Aquellos que Viven en la Muerte, la corrupción de Godwyn, la Deathroot, la imposibilidad de cierre. La Era del Crepúsculo es el único final que devuelve la Muerte al cosmos.',
    deepLore: [
      h(2, 'Naturaleza ontológica'),
      p(
        'La Muerte Predestinada — ',
        em('Destined Death'),
        ' — es la forma cosmológica original de la muerte real. No es ausencia de vida ni descomposición material: es la conclusión legítima del proceso vital. En su forma original, cada ser de las Tierras Intermedias tenía un destino mortal predeterminado y la Muerte garantizaba que ese destino se cumpliera. Su materialización como objeto cosmológico es la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        '.'
      ),
      h(2, 'El sello fundacional'),
      p(
        link('Marika', 'character', 'marika'),
        ' fundó el Orden Dorado mediante un acto de mutilación cósmica. Hizo que ',
        link('Maliketh', 'character', 'maliketh'),
        ' arrancase la Runa de la Muerte del Anillo Elden y la sellase en su propio cuerpo-bestia. La ',
        link('Reina de Ojos Crepusculares', 'character', 'gloam-eyed-queen'),
        ' — predecesora cosmológica de Marika — había tenido la Runa antes; Maliketh la recuperó al derrotarla. El sello transformó a las Tierras Intermedias: los seres dejaron de poder morir verdaderamente, sus almas regresaban al Árbol Áureo para reciclaje, la inmortalidad funcional se volvió ley cosmológica.'
      ),
      h(2, 'Las consecuencias estructurales'),
      p(
        'El sello hace posible el régimen actual ',
        em('y'),
        ' simultáneamente lo condena. Las consecuencias acumuladas: 1) ',
        link('Aquellos que Viven en la Muerte', 'concept', 'those-who-live-in-death'),
        ' existen porque la causa "muerte del alma" ya no produce el efecto "muerte del cuerpo". 2) ',
        link('Godwyn', 'character', 'godwyn'),
        ' permanece descompuesto bajo Deeproot Depths. 3) La ',
        link('Deathroot', 'concept', 'deathroot'),
        ' fluye porque su descomposición no encuentra ciclo cosmológico que la procese. 4) La ',
        link('Ley de la Causalidad', 'concept', 'law-of-causality'),
        ' está fragmentada — eventos no producen sus efectos esperables. Cada anomalía cosmológica de las Tierras Intermedias actuales rastrea hasta este sello.'
      ),
      h(2, 'El robo y la mecha'),
      p(
        'Tras eras de sello operativo, ',
        link('Ranni', 'character', 'ranni'),
        ' robó una mecha de la Runa de la Muerte del cuerpo de Maliketh. Esa mecha — limitada en cantidad — fue suficiente para forjar las dagas ',
        link('Cuchillos Negros', 'faction', 'cuchillos-negros'),
        ' que ejecutaron la Noche que rompió el cosmos. Cada cuchillo podía matar media muerte (alma o cuerpo, no ambos). La Noche aplicó esto: el alma de Godwyn murió, su cuerpo no; el cuerpo Empyrean de Ranni murió, su alma no. El sello fue parcialmente quebrado pero no liberado completamente.'
      ),
      h(2, 'La Era del Crepúsculo: la restauración piadosa'),
      p(
        link('Fia', 'character', 'fia'),
        ' busca restaurar la Muerte al cosmos mediante la ',
        link('Era del Crepúsculo', 'ending', 'duskborn'),
        '. La operación: derrotar a Maliketh para liberar la Runa de la Muerte completa, integrarla nuevamente al Anillo Elden como ley legítima, permitir que los Aquellos que Viven en la Muerte mueran piadosamente. Es el único final que ',
        em('repara'),
        ' la falla fundacional en lugar de extender sus consecuencias. ',
        link('D', 'character', 'd'),
        ' representa la postura opuesta: exterminar individualmente a cada Aquel que Vive en la Muerte sin restaurar la Runa.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La Muerte Predestinada es el monumento del juego a la inseparabilidad de la muerte y la vida en cualquier cosmología viable. Marika selló la Muerte para crear inmortalidad — y el resultado fue una existencia que no era ni vida ni muerte sino acumulación indefinida. La doctrina implícita del juego es que la muerte no es enemiga de la vida sino su condición de posibilidad. Cada cosmos viable la integra. El Tierras Intermedias enfermó precisamente porque eligió excluirla. La Era del Crepúsculo es la respuesta más madura al problema fundacional.'
      ),
    ],
    confirmed: [
      'La Muerte Predestinada es la forma cosmológica original de la muerte real',
      'Marika ordenó a Maliketh sellarla al fundar el Orden Dorado',
      'La Reina de Ojos Crepusculares la tenía antes que Maliketh la recuperara',
      'Ranni robó una mecha del cuerpo de Maliketh para forjar las dagas Cuchillo Negro',
      'La Era del Crepúsculo de Fia es el único final que la restaura al Anillo',
    ],
    inferred: [
      'Su sello es la causa estructural última de todos los problemas cosmológicos de las Tierras Intermedias',
      'Cada anomalía de las Tierras Intermedias actuales rastrea hasta este sello',
      'La inmortalidad funcional del Orden Dorado depende del sello permanente',
      'El robo de Ranni fue operación crítica que requirió conocimiento interno del régimen',
    ],
    theories: [
      'Marika sabía que el sello sería transitorio desde el momento de fundarlo',
      'La Reina de Ojos Crepusculares era guardiana legítima de la Muerte antes del Orden',
      'Existe más de una mecha disponible — algunas todavía no han sido robadas',
      'La Muerte misma tiene voluntad parcial y ha estado intentando liberarse durante eras',
    ],
    ambiguous: [
      'Cuándo exactamente fue sellada (la era fundacional es difusa)',
      'Si Maliketh es solo guardián o si parte de la Muerte se ha integrado a su ser',
      'Si la liberación parcial puede revertirse',
      'Cuántos otros han intentado robar fragmentos antes de Ranni',
    ],
    relatedCharacters: ['marika', 'maliketh', 'godwyn', 'fia', 'd', 'gloam-eyed-queen', 'ranni'],
    relatedFactions: ['cuchillos-negros', 'pieles-de-dios', 'those-who-live-in-death'],
    relatedConcepts: ['rune-of-death', 'deathroot', 'those-who-live-in-death', 'black-flame', 'law-of-causality'],
    relatedTimelineEvents: ['muerte-predestinada', 'ranni-noche-cuchillos'],
    relatedEndings: ['duskborn'],
  },

  'rune-of-death': {
    summary:
      'La Runa de la Muerte es la materialización física-conceptual de la Muerte Predestinada como una de las Grandes Runas del Anillo Elden. Marika la cosió dentro del cuerpo de Maliketh al fundar el Orden Dorado. Ranni le robó una mecha para forjar las dagas Cuchillo Negro — únicas armas capaces de matar parcialmente a un demidiós. Su liberación completa al derrotar a Maliketh es el evento que abre la Era del Crepúsculo.',
    deepLore: [
      h(2, 'Naturaleza como Gran Runa'),
      p(
        'La Runa de la Muerte es una de las ',
        link('Grandes Runas', 'concept', 'great-rune'),
        ' originales del ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        ' — la que codifica la ley cosmológica de la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        '. A diferencia de las Grandes Runas que cada demidiós sostiene tras la fractura, la Runa de la Muerte fue extraída del Anillo eras antes y sellada dentro de un cuerpo-vasija. Su existencia material la hace robable, modificable, fraccionable — propiedades que el régimen del Orden Dorado nunca anticipó como amenaza estructural.'
      ),
      h(2, 'El sello en Maliketh'),
      p(
        'Tras la derrota de la ',
        link('Reina de Ojos Crepusculares', 'character', 'gloam-eyed-queen'),
        ' a manos de ',
        link('Maliketh', 'character', 'maliketh'),
        ', la Runa de la Muerte fue extraída del régimen anterior y cosida dentro del cuerpo del propio Maliketh por orden de ',
        link('Marika', 'character', 'marika'),
        '. Maliketh quedó como guardián viviente: su cuerpo es contenedor cosmológico, su voluntad es candado, su lealtad absoluta a Marika es el cierre ritual. Durante eras el sello operó sin filtración. La inmortalidad funcional del Orden Dorado dependió estructuralmente de su integridad.'
      ),
      h(2, 'El robo de Ranni'),
      p(
        link('Ranni', 'character', 'ranni'),
        ' robó una mecha de la Runa de la Muerte del cuerpo de Maliketh. La operación requirió conocimiento interno del régimen — un guardián de ese rango no se viola sin asistencia. Las hipótesis comunitarias incluyen: cooperación de algún clérigo desafecto, tecnología cosmológica heredada de los Nox, o intervención de una fuerza pre-Orden cuya identidad sigue oculta. La mecha era limitada en cantidad: bastaba para forjar las dagas ',
        link('Cuchillos Negros', 'faction', 'cuchillos-negros'),
        ' pero no para destruir el sello completo.'
      ),
      h(2, 'Las dagas: tecnología deicida limitada'),
      p(
        'Las dagas forjadas con la mecha tienen una propiedad cosmológica única: pueden matar parcialmente a un demidiós. La limitación específica es que cada daga ejecuta media muerte — el alma O el cuerpo, no ambos. La ',
        link('Noche de los Cuchillos Negros', 'timeline', 'ranni-noche-cuchillos'),
        ' aplicó esto deliberadamente: el alma de ',
        link('Godwyn', 'character', 'godwyn'),
        ' murió, su cuerpo no; el cuerpo Empyrean de Ranni murió, su alma no. Ambas muertes incompletas eran necesarias para el plan: Ranni no podía escapar plenamente del rol Empyrean si su alma también moría, Godwyn debía dejar herida cosmológica que generara la corrupción del sistema.'
      ),
      h(2, 'La liberación completa'),
      p(
        'Cuando el Tarnished derrota a Maliketh en ',
        link('Farum Azula', 'region', 'farum-azula'),
        ', el resto de la Runa de la Muerte se libera. Es el evento cosmológicamente clave para múltiples finales: en la ',
        link('Era del Crepúsculo', 'ending', 'duskborn'),
        ', ',
        link('Fia', 'character', 'fia'),
        ' la integra al Anillo Elden como Ley Mayor restaurada. En otros finales queda libre sin destino específico. Su liberación cierra simultáneamente la herida de Godwyn y abre nuevas posibilidades cosmológicas.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La Runa de la Muerte es el símbolo del juego sobre la imposibilidad de exiliar lo esencial. Marika la selló — pero el sello fue siempre vulnerable. Cada uno de los ejes del juego rastrea hasta su robo o liberación: la corrupción de Godwyn, la rebelión de Ranni, la existencia de Aquellos que Viven en la Muerte, la doctrina deicida de los Pieles, las dagas mortales contra demidioses. La Muerte sellada no se queda quieta: se filtra, se manipula, se libera. Cada cosmología que pretende excluirla termina dependiendo cosmológicamente de su contención.'
      ),
    ],
    confirmed: [
      'La Runa de la Muerte es Gran Runa que codifica la Muerte Predestinada',
      'Marika la cosió dentro del cuerpo de Maliketh al fundar el Orden Dorado',
      'Ranni robó una mecha para forjar las dagas Cuchillo Negro',
      'Cada daga puede matar media muerte (alma o cuerpo, no ambos)',
      'Su liberación al derrotar Maliketh abre la Era del Crepúsculo',
    ],
    inferred: [
      'El robo requirió cooperación interna no documentada explícitamente',
      'La mecha era limitada — no permitía destruir el sello sino solo forjar dagas',
      'La doble muerte incompleta de Godwyn y Ranni fue diseño deliberado',
      'La inmortalidad funcional del Orden depende estructuralmente del sello permanente',
    ],
    theories: [
      'Existen otras mechas no robadas todavía dentro del cuerpo de Maliketh',
      'Los Pieles de Dios manejan tecnología derivada de la Runa que no requiere robo directo',
      'La Reina de Ojos Crepusculares pudo haber tenido conocimiento sobre cómo dividir la Runa que se transmitió a Ranni',
      'La Runa tiene voluntad parcial y ha estado intentando liberarse durante eras',
    ],
    ambiguous: [
      'Identidad exacta del cómplice interno que ayudó a Ranni',
      'Si la Runa puede ser transferida a otro guardián o solo a Maliketh',
      'Si Maliketh sufre conscientemente bajo el sello o solo lo soporta',
      'Si la liberación completa es reversible bajo cosmología distinta',
    ],
    relatedCharacters: ['ranni', 'maliketh', 'godwyn', 'fia', 'gloam-eyed-queen', 'marika'],
    relatedFactions: ['cuchillos-negros', 'pieles-de-dios'],
    relatedConcepts: ['destined-death', 'great-rune', 'elden-ring', 'black-flame'],
    relatedTimelineEvents: ['ranni-noche-cuchillos', 'muerte-predestinada'],
    relatedEndings: ['duskborn'],
  },

  deathroot: {
    summary:
      'La Deathroot es raíz necrótica negra que emana del cadáver descompuesto de Godwyn bajo Deeproot Depths. Es manifestación material directa del quiebre cosmológico que generó la Noche de los Cuchillos Negros: cuerpo sin alma activo por sello fallido. Se extiende por las raíces del Árbol Áureo hasta los rincones más distantes de las Tierras Intermedias; cada Aquel que Vive en la Muerte rastreable hasta esa fuente. Su existencia es la herida del cosmos hecha sustancia.',
    deepLore: [
      h(2, 'Origen ontológico'),
      p(
        'La Deathroot es la materia física resultante de la descomposición eterna de ',
        link('Godwyn', 'character', 'godwyn'),
        '. La condición ontológica es paradójica: su cuerpo no puede morir del todo porque la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ' está sellada en Maliketh, pero su alma ya murió por la daga Cuchillo Negro. El cuerpo intenta cumplir el ciclo natural de descomposición pero no puede completarlo. El resultado es una pesadilla biológica: tejido muerto que sigue creciendo, raíces necróticas que se extienden, materia orgánica que viola las leyes que el Orden Dorado establece para los cuerpos válidos.'
      ),
      h(2, 'Mecánica de propagación'),
      p(
        'La Deathroot se extiende físicamente por las raíces del ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' — el mismo sistema cosmológico que distribuye gracia. La ironía estructural es exacta: la red que el régimen construyó para distribuir bendición es ahora vector de su corrupción más profunda. Cada brote de Deathroot que emerge en una región distante (catacumbas de Limgrave, raíces bajo Caelid, cuevas de Liurnia) está conectado físicamente al cadáver original. El sistema vascular cosmológico del régimen ha sido reapropiado por la herida.'
      ),
      h(2, 'Aquellos que Viven en la Muerte'),
      p(
        'Cada brote de Deathroot que toca un cadáver lo reactiva como ',
        link('Aquel que Vive en la Muerte', 'faction', 'those-who-live-in-death'),
        '. La operación es sistemática: fluido necrótico contacta tejido humano muerto, lo anima, produce ser cuasi-vivo sin alma. Los ',
        link('Deathbirds', 'faction', 'deathbirds'),
        ' son los únicos seres que se alimentan exclusivamente de Deathroot — son carroñeros adaptados al ecosistema necrótico nuevo. Su presencia marca territorialmente cada brote activo.'
      ),
      h(2, 'Recolección y cierre ritual'),
      p(
        link('Fia', 'character', 'fia'),
        ', Doncella de Muerte, recolecta brotes de Deathroot durante el progreso del Tarnished. Cada brote es necesario para su ritual de cierre: usar la Runa de la Muerte recuperada para sanar la herida cosmológica de Godwyn y restaurar la Muerte al Anillo Elden. Su quest es una de las más bellas del juego precisamente por la lógica inversa: en lugar de exterminar la Deathroot (postura de ',
        link('D', 'character', 'd'),
        '), la usa como evidencia material de que la cosmología necesita reforma estructural, no purga.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La Deathroot es el monumento del juego a cómo lo reprimido retorna deformado. El régimen del Orden Dorado intentó eliminar la Muerte mediante sello; la Muerte retornó como cuerpo descompuesto que ',
        em('no puede'),
        ' morir. El régimen distribuyó gracia mediante red de raíces; las mismas raíces transmiten ahora la corrupción que el régimen desencadenó al sellar la Muerte. Cada brote es declaración silenciosa: lo que se excluye cosmológicamente no desaparece — solo se metamorfosea en formas que el sistema no puede reconocer ni procesar.'
      ),
    ],
    confirmed: [
      'La Deathroot emana del cadáver descompuesto de Godwyn',
      'Se extiende por las raíces del Árbol Áureo hasta las Tierras Intermedias enteras',
      'Cada brote que toca un cadáver lo reactiva como Aquel que Vive en la Muerte',
      'Los Deathbirds son carroñeros exclusivos de Deathroot',
      'Fia la recolecta para su ritual de cierre cosmológico',
    ],
    inferred: [
      'El sistema vascular del Árbol Áureo ha sido reapropiado como vector de corrupción',
      'La condición ontológica de Godwyn es paradoja estructural producida por el sello',
      'Cada Aquel que Vive en la Muerte es replicación de la herida original de Godwyn',
      'La cantidad de Deathroot crece progresivamente — no se ha estabilizado',
    ],
    theories: [
      'La Deathroot tiene voluntad propia residual heredada de Godwyn',
      'Algunos brotes contienen fragmentos de consciencia residual',
      'Si Godwyn fuera completamente destruido, toda la Deathroot cesaría simultáneamente',
      'La Deathroot puede ser cosechada por hechiceros con suficiente conocimiento ritual',
    ],
    ambiguous: [
      'Si Godwyn sufre conscientemente durante el proceso de descomposición eterna',
      'Cuántos brotes activos existen actualmente en las Tierras Intermedias',
      'Si la Deathroot puede ser purificada bajo cosmología distinta',
      'Si la propagación tiene límite cosmológico o seguirá indefinidamente',
    ],
    relatedCharacters: ['godwyn', 'fia', 'd', 'rogier'],
    relatedFactions: ['those-who-live-in-death', 'deathbirds'],
    relatedRegions: ['deeproot-depths', 'leyndell'],
    relatedConcepts: ['destined-death', 'rune-of-death', 'erdtree'],
    relatedTimelineEvents: ['ranni-noche-cuchillos', 'godwyn-corruption-spread'],
    relatedEndings: ['duskborn'],
  },

  'those-who-live-in-death': {
    summary:
      'Aquellos que Viven en la Muerte son estado ontológico de existencia parcial: cuerpos sin almas animados por la Deathroot. Existen porque la Muerte Predestinada está sellada en Maliketh — el alma puede morir pero el cuerpo no puede completar la muerte. Su forma original es Godwyn descompuesto bajo Deeproot Depths; las formas derivadas son miles de cadáveres animados dispersos por las Tierras Intermedias. La condición es manifestación material directa del quiebre cosmológico que generó la Noche de los Cuchillos Negros.',
    deepLore: [
      h(2, 'Naturaleza ontológica'),
      p(
        'Aquellos que Viven en la Muerte son seres cuyo proceso vital se ha detenido a mitad de camino: el alma murió, el cuerpo no. La condición es paradójica e irreducible — no son vivos (no tienen alma activa, no toman decisiones, no responden a estímulos como organismos vivos), no son muertos (no se descomponen plenamente, siguen funcionando físicamente, mantienen forma reconocible). La categoría no existía antes de la ',
        link('Noche de los Cuchillos Negros', 'timeline', 'ranni-noche-cuchillos'),
        ' — apareció cosmológicamente cuando ',
        link('Godwyn', 'character', 'godwyn'),
        ' fue asesinado parcialmente con la daga Cuchillo Negro.'
      ),
      h(2, 'El origen único: Godwyn'),
      p(
        link('Godwyn', 'character', 'godwyn'),
        ' es el primer y arquetipo de Aquellos que Viven en la Muerte. Su alma fue asesinada con la mecha de la Runa de la Muerte; su cuerpo no pudo morir porque la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ' estaba sellada en ',
        link('Maliketh', 'character', 'maliketh'),
        '. El cuerpo intentó cumplir el ciclo natural de descomposición pero no pudo completarlo. El resultado fue crecimiento monstruoso: el cadáver se extendió, generó raíces necróticas (la ',
        link('Deathroot', 'concept', 'deathroot'),
        '), y la condición se contagió por las raíces del Árbol Áureo a otros cuerpos en regiones distantes.'
      ),
      h(2, 'Mecánica de propagación'),
      p(
        'Cada brote de Deathroot que toca un cadáver lo reactiva como Aquel que Vive en la Muerte. La operación es sistemática: fluido necrótico contacta tejido muerto, lo anima, produce ser cuasi-vivo sin alma. Los cadáveres que el régimen del Orden Dorado había procesado (almas absorbidas por el Árbol Áureo, cuerpos enterrados ritualmente) son particularmente susceptibles porque su descomposición había sido interrumpida por el ciclo dorado. Cuando la Deathroot llega, los reactiva como vehículos del quiebre.'
      ),
      h(2, 'Categorías y manifestaciones'),
      p(
        'Las manifestaciones de Aquellos que Viven en la Muerte incluyen: 1) ',
        link('Godwyn', 'character', 'godwyn'),
        ' como forma central bajo Deeproot Depths. 2) Skeletons reactivables que se reincorporan tras ser destruidos hasta que su columna vertebral es completamente fragmentada. 3) Revenants en catacumbas — cuerpos articulados que combaten en bucle. 4) Ghostflame Spirits — almas parciales que el fuego pre-Orden no pudo procesar plenamente. 5) Caballeros dorados originalmente leales a Godwyn que ahora sirven a su forma corrompida sin saber por qué. 6) Death Knights — versiones más avanzadas que conservan capacidad táctica.'
      ),
      h(2, 'Posturas opuestas: Fia vs D'),
      p(
        'Dos NPCs proponen respuestas opuestas al mismo problema. ',
        link('Fia', 'character', 'fia'),
        ', Doncella de Muerte, busca darles muerte verdadera mediante la ',
        link('Era del Crepúsculo', 'ending', 'duskborn'),
        ': restaurar la Runa de la Muerte al Anillo Elden, permitir que Aquellos que Viven en la Muerte mueran piadosamente, integrar la Muerte como parte legítima del orden cosmológico. ',
        link('D', 'character', 'd'),
        ', Cazador de Aquellos que Viven en la Muerte, busca exterminarlos individualmente por considerarlos blasfemia. Cada uno es ofensa al Orden Dorado, debe ser erradicado uno a uno. Las dos posturas son políticamente opuestas pero comparten diagnóstico: la situación actual es insostenible.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Aquellos que Viven en la Muerte son la consecuencia ontológica directa de la decisión fundacional de ',
        link('Marika', 'character', 'marika'),
        ' de sellar la Muerte. Su existencia prueba que el sello no eliminó la muerte — solo la deformó. La Era del Crepúsculo argumenta que la solución es restaurar la Muerte; los exterminadores como D argumentan que la solución es purgar la corrupción. El juego nunca decide: cada postura tiene mérito. Lo único cierto es que la herida sigue abierta. Cada Esqueleto que se reactiva en Caelid es declaración silenciosa: lo reprimido cosmológicamente no desaparece — solo se metamorfosea en formas que el sistema no puede reconocer ni procesar.'
      ),
    ],
    confirmed: [
      'Aquellos que Viven en la Muerte son cuerpos sin almas animados por Deathroot',
      'Godwyn es la forma original tras la Noche de los Cuchillos Negros',
      'No pueden morir verdaderamente por el sello de Maliketh',
      'Se manifiestan en múltiples categorías (Skeletons, Revenants, Ghostflame Spirits, Caballeros, Death Knights)',
      'Fia busca restaurar la Muerte; D busca exterminarlos individualmente',
    ],
    inferred: [
      'La condición no existía antes de la Noche de los Cuchillos Negros',
      'Cada brote de Deathroot reactiva cadáveres locales',
      'Los Skeletons requieren fragmentación completa de columna para no reactivarse',
      'La cantidad crece progresivamente — no se ha estabilizado',
    ],
    theories: [
      'Si Godwyn fuera completamente destruido, todos cesarían simultáneamente',
      'Algunos conservan fragmentos de consciencia del individuo original',
      'La Llama Espectral pre-Orden puede afectarlos más eficazmente que el fuego ordinario',
      'Los Caballeros dorados de Deeproot conservan lealtad residual a Godwyn pre-corrupción',
    ],
    ambiguous: [
      'Si Godwyn conserva alguna forma de consciencia bajo Deeproot Depths',
      'Cuántos hay actualmente en las Tierras Intermedias',
      'Si la condición es reversible bajo cosmología distinta',
      'Si los Skeletons que se reactivan son la misma categoría o variante distinta',
    ],
    relatedCharacters: ['godwyn', 'fia', 'd', 'rogier', 'maliketh', 'fortissax'],
    relatedFactions: ['those-who-live-in-death', 'cuchillos-negros', 'deathbirds'],
    relatedRegions: ['deeproot-depths', 'leyndell'],
    relatedConcepts: ['destined-death', 'deathroot', 'rune-of-death', 'ghostflame'],
    relatedTimelineEvents: ['ranni-noche-cuchillos', 'godwyn-corruption-spread'],
    relatedEndings: ['duskborn'],
  },

  empyrean: {
    summary:
      'Empyrean es categoría cosmológica designada por la Voluntad Mayor: humanos elegidos como candidatos potenciales a vasijas divinas futuras. Cada Empyrean tiene una Bestia Sombra como guardián personal cosmológico. Solo un Empyrean puede suceder a Marika como vasija del Anillo Elden. Marika fue una; Ranni, Malenia y Miquella son los del ciclo actual. La Reina de Ojos Crepusculares fue Empyrean del régimen anterior.',
    deepLore: [
      h(2, 'Categoría cosmológica'),
      p(
        'La condición Empyrean es designación cosmológica de la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' sobre humanos específicos. Los criterios documentados: descendencia de la vasija central actual, sangre ',
        link('Numen', 'concept', 'numen'),
        ' o equivalente cosmológico, y selección ritual por los Dos Dedos. La designación no es título honorífico — es estatus ontológico que altera al designado: cada Empyrean adquiere capacidad cosmológica latente que puede activarse al ser tomado como nueva vasija del Anillo Elden.'
      ),
      h(2, 'La Bestia Sombra: guardián cosmológico'),
      p(
        'Cada Empyrean recibe una ',
        link('Bestia ligada en sombra', 'concept', 'shadow-bound-beast'),
        ' — guardián cosmológico personal cuya existencia está estructuralmente entrelazada con el Empyrean al que sirve. ',
        link('Maliketh', 'character', 'maliketh'),
        ' es la Bestia Sombra de ',
        link('Marika', 'character', 'marika'),
        '; ',
        link('Blaidd', 'character', 'blaidd'),
        ' fue construido para serlo de ',
        link('Ranni', 'character', 'ranni'),
        '. La función dual de la Bestia: protege al Empyrean y, simultáneamente, lo encadena al rol cosmológico. Cuando Ranni traicionó el rol Empyrean, el vínculo con Blaidd se rompió y él cayó en locura.'
      ),
      h(2, 'Sucesión: la elección final'),
      p(
        'Solo un Empyrean puede suceder a Marika como vasija central del Anillo Elden. Los Dos Dedos de cada región designan a su candidato: los Dos Dedos de Leyndell habrían elegido potencialmente a Marika misma; los Dos Dedos enloquecidos en otras regiones podrían designar candidatos alternativos. La designación produce una Llama de Inicio (',
        em('Flame of Inception'),
        ') ritual que el Empyrean debe consumir para activar la vasija. Los Empyreans del ciclo actual representan tres caminos posibles: aceptar el rol y suceder, rechazarlo (Ranni), o ser corrompido por dioses externos (Malenia, Miquella).'
      ),
      h(2, 'Los Empyreans del ciclo actual'),
      p(
        link('Ranni', 'character', 'ranni'),
        ' fue Empyrean — y se mató como una para escapar del contrato. La operación: usar las dagas Cuchillo Negro para asesinar su cuerpo Empyrean específicamente, transferir su alma a una muñeca de porcelana, mantener identidad fuera del rol designado. ',
        link('Malenia', 'character', 'malenia'),
        ' es Empyrean infectada de podredumbre escarlata desde el nacimiento — el dios externo del decaimiento la convirtió en vasija incumplible. ',
        link('Miquella', 'character', 'miquella'),
        ' es Empyrean atrapado en juventud eterna — sus poderes despertarán cuando alcance edad adulta, pero su capullo dorado en el Haligtree lo mantiene en suspensión.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Los Empyreans son el monumento del juego a la designación cosmológica como prisión. Ser Empyrean no es solo privilegio — es destino impuesto. Cada uno de los del ciclo actual responde distinto: Ranni rechaza con violencia ontológica (suicidio cosmológico), Malenia integra la maldición sin culminar el rol, Miquella suspende el destino mediante juventud forzada. Ningún Empyrean del ciclo actual culmina el rol como Marika lo hizo. La pregunta del juego: ¿es deseable cumplir el destino cosmológico? La Era de las Estrellas de Ranni argumenta que no — la libertad fría supera al rol asignado.'
      ),
    ],
    confirmed: [
      'Empyrean es designación cosmológica de la Voluntad Mayor',
      'Cada Empyrean tiene una Bestia Sombra como guardián personal',
      'Solo un Empyrean puede suceder a Marika como vasija del Anillo Elden',
      'Marika, Ranni, Malenia y Miquella son los Empyreans del ciclo actual',
      'La Reina de Ojos Crepusculares fue Empyrean del régimen anterior',
    ],
    inferred: [
      'La designación no es honorífica sino ontológica',
      'Los criterios incluyen descendencia, sangre Numen y selección ritual de los Dedos',
      'La Bestia Sombra protege y simultáneamente encadena al Empyrean',
      'Cada Empyrean del ciclo actual representa respuesta distinta al rol impuesto',
    ],
    theories: [
      'Existen Empyreans no documentados en regiones marginales',
      'La Voluntad Mayor selecciona múltiples candidatos para asegurar al menos una sucesión',
      'Los Tarnished con suficiente Gracia podrían adquirir condición cuasi-Empyrean bajo cosmología distinta',
      'Melina es Empyrean no nacida o aspecto incompleto de Marika',
    ],
    ambiguous: [
      'Cómo se realiza exactamente el ritual de designación',
      'Si la condición Empyrean es transferible o solo intrínseca',
      'Cuántos Empyreans existieron en eras anteriores',
      'Si todos los Empyreans tienen Bestia Sombra o solo los confirmados',
    ],
    relatedCharacters: ['marika', 'ranni', 'malenia', 'miquella', 'gloam-eyed-queen', 'maliketh', 'blaidd', 'melina'],
    relatedConcepts: ['voluntad-mayor', 'shadow-bound-beast', 'rune-of-death', 'numen', 'great-rune'],
    relatedFactions: ['dos-dedos', 'finger-readers'],
    relatedEndings: ['age-of-stars'],
  },

  'shadow-bound-beast': {
    summary:
      'La Bestia ligada en sombra es guardián cosmológico personal asignado a cada Empyrean. Su existencia está estructuralmente entrelazada con el Empyrean al que sirve — protegerlo es función, encadenarlo al rol es consecuencia. Maliketh es la Bestia Sombra de Marika; Blaidd fue construido por Maliketh para serlo de Ranni. El vínculo se rompe cuando el Empyrean traiciona el rol, lo que produce la locura del guardián.',
    deepLore: [
      h(2, 'Naturaleza del vínculo'),
      p(
        'Cada ',
        link('Empyrean', 'concept', 'empyrean'),
        ' designado por la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' recibe una Bestia ligada en sombra como guardián personal cosmológico. La Bestia no es servidor ordinario — su existencia está entrelazada cosmológicamente con la del Empyrean. Cuando el Empyrean prospera, la Bestia opera con coherencia. Cuando el Empyrean sufre, la Bestia siente. Cuando el Empyrean traiciona el rol designado, la Bestia se desestructura.'
      ),
      h(2, 'Maliketh: la Bestia original'),
      p(
        link('Maliketh', 'character', 'maliketh'),
        ', la Hoja Negra, es la Bestia Sombra de ',
        link('Marika', 'character', 'marika'),
        '. Su origen: extracción ritual del linaje ',
        link('Hombre-Bestia', 'faction', 'hombres-bestia'),
        ' al fundar el Orden Dorado. La operación lo transformó: recibió forma definitiva (la Hoja Negra como espada cosmológica), función definitiva (custodia de la Runa de la Muerte), lealtad absoluta a Marika. Su naturaleza no-humana lo cualificaba precisamente para guardar la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ' — un humano dorado no podría ser custodio de aquello que el Orden había excluido. Maliketh es la fórmula original: Hombre-Bestia + designación cosmológica + función específica.'
      ),
      h(2, 'Blaidd: construcción derivada'),
      p(
        link('Blaidd', 'character', 'blaidd'),
        ' fue construido siglos después siguiendo el patrón Maliketh. La fabricación involucró biología de Hombres-Bestia, sangre Caria, magia ritual de Raya Lucaria, y conocimiento del régimen sobre cómo replicar la fórmula original. ',
        link('Maliketh', 'character', 'maliketh'),
        ' supervisó la operación a petición ritual del régimen. El resultado fue Bestia Sombra para ',
        link('Ranni', 'character', 'ranni'),
        ' — el Empyrean designado en el ciclo siguiente al de Marika. Blaidd es prueba de que la fórmula es transferible — y prueba paralela de que el régimen no descartó la tecnología, solo la mantuvo en reserva para el siguiente ciclo.'
      ),
      h(2, 'La traición de Ranni y la locura de Blaidd'),
      p(
        'Cuando Ranni transfirió su alma a la muñeca y se mató como Empyrean para escapar del rol, el vínculo cosmológico con Blaidd no se transfirió íntegro. Una parte de Blaidd siguió ligada a la Ranni-Empyrean original — pero esa Ranni ya no existe coherentemente. La consecuencia fue locura progresiva. ',
        link('Iji', 'character', 'iji'),
        ' eventualmente debe encerrarlo en una jaula ritual. La trayectoria de Blaidd es uno de los casos más trágicos del juego: lealtad cosmológica a un Empyrean que ya no es el Empyrean al que está ligado.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Las Bestias Sombra son el monumento del juego a la lealtad cosmológica como condición ontológica. No es lealtad elegida (Maliketh nunca eligió servir a Marika; Blaidd nunca eligió servir a Ranni) — es lealtad ',
        em('estructural'),
        ', tan profunda que romperla rompe al guardián. Plantea la pregunta sobre si la designación cosmológica produce vínculos genuinos o solo cadenas. Maliketh muere defendiendo a Marika incluso cuando ella ha traicionado al régimen. Blaidd enloquece protegiendo a una Ranni que ya no existe. La fidelidad cosmológica es, en el juego, una de las formas más puras y más crueles de amor.'
      ),
    ],
    confirmed: [
      'Cada Empyrean tiene una Bestia ligada en sombra como guardián personal',
      'Maliketh es la Bestia Sombra de Marika',
      'Blaidd fue construido por Maliketh para serlo de Ranni',
      'El vínculo se rompe si el Empyrean traiciona el rol',
      'La fórmula requiere biología Hombre-Bestia y magia ritual avanzada',
    ],
    inferred: [
      'La existencia de la Bestia y el Empyrean está estructuralmente entrelazada',
      'La fórmula Maliketh-Blaidd es transferible — el régimen la mantiene en reserva',
      'La traición de Ranni produjo la locura progresiva de Blaidd',
      'La lealtad cosmológica de las Bestias no es elegida sino estructural',
    ],
    theories: [
      'Malenia y Miquella tienen Bestias Sombra no documentadas explícitamente',
      'La fórmula puede aplicarse a otras razas además de Hombres-Bestia bajo condiciones específicas',
      'Las Bestias pueden conservar autonomía residual si el Empyrean original muere completamente',
      'Existieron Bestias Sombra de Empyreans pre-Orden cuyas formas se han perdido',
    ],
    ambiguous: [
      'Si todos los Empyreans tienen Bestia o solo los plenamente designados',
      'Si la fabricación requiere consentimiento de la Bestia o solo materia prima',
      'Si el vínculo puede transferirse entre Empyreans bajo cosmología distinta',
      'Si Blaidd puede recuperar coherencia bajo final específico',
    ],
    relatedCharacters: ['maliketh', 'marika', 'blaidd', 'ranni', 'iji'],
    relatedFactions: ['hombres-bestia'],
    relatedConcepts: ['empyrean', 'destined-death', 'rune-of-death', 'crucible'],
    relatedTimelineEvents: ['blaidd-construction', 'maliketh-extraction'],
  },

  'great-rune': {
    summary:
      'Las Grandes Runas son los componentes individuales del Anillo Elden — cada una codifica una ley cosmológica específica. Tras la rotura del Anillo, las Grandes Runas se dispersaron entre los demidióses descendientes de Marika. Cada uno sostiene la suya y la usa para mantener poder personal. El Tarnished debe recolectar al menos dos para coronarse, y todas las disponibles para reformar el cosmos plenamente. Cada Gran Runa es ley operable, no solo símbolo.',
    deepLore: [
      h(2, 'Naturaleza ontológica'),
      p(
        'Las Grandes Runas son los componentes diferenciables del ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        '. Cada una codifica una ley cosmológica específica: la Gran Runa de Godrick rige el linaje y la herencia (capacidad de injerto y sucesión); la de Rennala rige el ciclo vital (renacimiento de almas); la de Radahn rige el flujo astronómico; la de Morgott rige la unidad cosmológica del régimen; la de Mohg rige la sangre; la de Malenia rige el decaimiento. La Runa de la Muerte (sellada en Maliketh) es Gran Runa adicional que el régimen extrajo del conjunto al fundarse.'
      ),
      h(2, 'Las dispersas'),
      p(
        'Cuando ',
        link('Marika', 'character', 'marika'),
        ' rompió el Anillo Elden, las Grandes Runas se dispersaron entre sus hijos demidióses. La distribución no fue arbitraria — cada uno reclamó la Runa que mejor encajaba con su naturaleza. ',
        link('Godrick', 'character', 'godrick'),
        ' tomó la del linaje (su obsesión con el injerto la materializa). ',
        link('Rennala', 'character', 'rennala'),
        ' la del ciclo vital. ',
        link('Radahn', 'character', 'radahn'),
        ' la astronómica (que usa para bloquear las estrellas). ',
        link('Rykard', 'character', 'rykard'),
        ' tomó la suya antes de ser devorado por la entidad serpentina. ',
        link('Morgott', 'character', 'morgott'),
        ' la del régimen. ',
        link('Malenia', 'character', 'malenia'),
        ' la del decaimiento. ',
        link('Mohg', 'character', 'mohg'),
        ' la de la sangre.'
      ),
      h(2, 'Activación ritual'),
      p(
        'Las Grandes Runas no operan automáticamente al ser obtenidas. Requieren activación ritual mediante la Llama Errante (',
        em('Árbol Áureo Sacred Flame'),
        ') — fuego ritual que cada Empyrean designado puede invocar. El Tarnished debe llevar cada Gran Runa derrotada a un punto específico (los Árboles Áureos Menores activos como Tower of Return) para activarla. Una Gran Runa inactiva es solo símbolo; una activada es bonus cosmológico operativo durante el viaje.'
      ),
      h(2, 'Recolección y coronación'),
      p(
        'Para que el Tarnished sea coronado como Señor Elden, debe recolectar dos Grandes Runas como mínimo (criterio que los Dos Dedos de la Mesa Redonda exigen). Para reformar el cosmos plenamente, debería recolectar todas las disponibles. La realidad operativa: la quest principal del juego requiere derrotar al menos a Godrick, Rennala, Radahn (o Mohg en NG+ paths), Morgott, y enfrentar a Marika misma. Cada demidiós que cae libera su Gran Runa para reclamación.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Las Grandes Runas son el monumento del juego a la fragmentación del cosmos como problema operativo. Cada demidiós no eligió simplemente un poder — eligió ',
        em('una ley cosmológica'),
        ' que ahora opera autónomamente sin coordinación central. Por eso las Tierras Intermedias post-fractura es incoherente: cada región opera bajo ley distinta. El sistema de recolección del juego es metáfora exacta del problema cosmológico: para reformar el cosmos, el Tarnished debe convencer (mediante combate ritual) a cada demidiós de que entregue su pedazo. La coronación final es restauración estructural, no solo política.'
      ),
    ],
    confirmed: [
      'Las Grandes Runas son componentes diferenciables del Anillo Elden',
      'Cada una codifica una ley cosmológica específica',
      'Se dispersaron entre los demidióses tras la fractura',
      'Requieren activación ritual mediante la Llama Errante',
      'El Tarnished debe recolectar al menos dos para ser coronado',
    ],
    inferred: [
      'La distribución entre demidióses correspondió a afinidad cosmológica natural',
      'La Runa de la Muerte es Gran Runa adicional separada del Anillo al fundarlo',
      'Cada Gran Runa opera autónomamente cuando no está coordinada con las demás',
      'La incoherencia regional de las Tierras Intermedias post-fractura es síntoma de la dispersión',
    ],
    theories: [
      'Existen Grandes Runas no asignadas a demidióses que esperan reclamación',
      'La Voluntad Mayor diseñó la distribución como prueba ritual del próximo Señor Elden',
      'Las Grandes Runas pueden combinarse de modos no previstos por el régimen',
      'Cada Gran Runa contiene memoria parcial de Marika antes de dispersarse',
    ],
    ambiguous: [
      'Cuántas Grandes Runas existen en total — los demidióses no agotan el conjunto necesariamente',
      'Si pueden ser transferidas entre demidióses bajo ritual específico',
      'Si su orden de recolección altera el resultado cosmológico final',
      'Si la coronación con solo dos Grandes Runas produce un Anillo Elden incompleto pero funcional',
    ],
    relatedCharacters: ['marika', 'godrick', 'rennala', 'radahn', 'rykard', 'morgott', 'malenia', 'mohg', 'maliketh'],
    relatedFactions: ['dos-dedos', 'finger-readers'],
    relatedConcepts: ['elden-ring', 'rune-of-death', 'voluntad-mayor', 'tarnished'],
    relatedTimelineEvents: ['la-fractura'],
    relatedEndings: ['fracture', 'order', 'duskborn', 'frenzied-flame', 'age-of-stars'],
  },

  grace: {
    summary:
      'La Gracia es manifestación física de la atención del Árbol Áureo sobre un individuo. Marca a los elegidos del Orden Dorado mediante puntos dorados visibles en los ojos. Funciona como bendición y mecanismo de control político simultáneamente: solo los agraciados son plenamente humanos a ojos del régimen. Tras la fractura, el árbol restituyó parcialmente su gracia a los Tarnished exiliados — único motivo por el que pudieron regresar a las Tierras Intermedias.',
    deepLore: [
      h(2, 'Naturaleza física y cosmológica'),
      p(
        'La Gracia es manifestación física de la atención del ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' sobre un individuo. Visualmente se manifiesta como puntos dorados luminosos en los ojos del agraciado. Cosmológicamente, la Gracia es canal de comunicación entre el árbol central y la persona marcada: el Árbol Áureo puede guiar al agraciado mediante visiones, intuiciones y la Gracia Errante (',
        em('Stray Grace'),
        ') que aparece como guías doradas físicas indicando dirección hacia objetivos cosmológicamente relevantes.'
      ),
      h(2, 'Función política'),
      p(
        'En el régimen del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ', la Gracia opera simultáneamente como bendición y mecanismo de control. Los agraciados son plenamente humanos a ojos del régimen — pueden recibir herencia, comerciar, vivir bajo protección institucional, ser candidatos a roles cosmológicos. Los no agraciados son ontológicamente menores: ',
        link('Omens', 'faction', 'omens'),
        ' encarcelados, ',
        link('Misbegotten', 'faction', 'misbegotten'),
        ' esclavizados, ',
        link('Albinaurics', 'faction', 'albinauricos'),
        ' perseguidos, ',
        link('Tarnished', 'concept', 'tarnished'),
        ' exiliados. La Gracia funciona como filtro cosmológico de pertenencia.'
      ),
      h(2, 'El exilio: pérdida de la Gracia'),
      p(
        'La Gracia puede ser retirada. ',
        link('Marika', 'character', 'marika'),
        ' retiró la Gracia a ',
        link('Godfrey', 'character', 'godfrey'),
        ' y a sus seguidores cuando ya no quedaron enemigos por los que pelear — ese acto los convirtió en los primeros ',
        link('Tarnished', 'concept', 'tarnished'),
        '. La marca dorada en sus ojos se apagó (literalmente), su autoridad institucional se desvaneció, su pertenencia cosmológica fue revocada. Los Tarnished vivieron generaciones lejos de las Tierras Intermedias como personas-no-personas. Es una de las pocas operaciones del régimen donde el filtro cosmológico se aplica con propósito político transparente.'
      ),
      h(2, 'La restitución parcial post-fractura'),
      p(
        'Tras la rotura del Anillo Elden y la retirada parcial de la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ', el árbol restituyó parcialmente su gracia a los Tarnished exiliados. La operación: los puntos dorados en los ojos volvieron a brillar, las visiones de la Gracia Errante reaparecieron, y los Tarnished pudieron regresar a las Tierras Intermedias como candidatos al trono. La razón es estructural: el régimen necesita Señor Elden urgentemente, los demidióses están enfrentados entre sí, los Tarnished son los únicos candidatos exteriores al sistema que ',
        em('podrían'),
        ' coronarse sin reproducir las grietas existentes. La Gracia restituida es admisión cosmológica de que el régimen necesita ayuda externa.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La Gracia es el monumento del juego a la pertenencia cosmológica como condición política. Los puntos dorados en los ojos no son solo bendición — son marca de aceptación institucional. Quien la pierde pierde humanidad legible. Quien la recupera puede actuar nuevamente. El régimen del Orden Dorado plantea la pregunta más fría: ¿qué tan distinto es ser amado por un dios externo de ser ',
        em('marcado'),
        ' por él? Cada agraciado camina con luz dorada en los ojos y, simultáneamente, con cadena cosmológica. Los Tarnished que retornan reciben la Gracia condicionalmente: si fallan, podrían perderla nuevamente. La bendición es siempre revocable.'
      ),
    ],
    confirmed: [
      'La Gracia se manifiesta como puntos dorados luminosos en los ojos',
      'Es manifestación de la atención del Árbol Áureo sobre un individuo',
      'Funciona como bendición y filtro político de pertenencia',
      'Marika retiró la Gracia a Godfrey y sus seguidores creando los Tarnished',
      'El árbol restituyó parcialmente la gracia a los Tarnished tras la fractura',
    ],
    inferred: [
      'Solo los agraciados son plenamente humanos a ojos del régimen',
      'La restitución es admisión cosmológica de que el régimen necesita ayuda externa',
      'La Gracia Errante guía visualmente hacia objetivos cosmológicamente relevantes',
      'La marca puede apagarse y reactivarse — no es estado permanente',
    ],
    theories: [
      'La Gracia tiene voluntad parcial residual — selecciona o rechaza candidatos por criterios no documentados',
      'Existe Gracia distinta para cada Empyrean — la del Tarnished es específica al ciclo actual',
      'Bajo cosmología post-Voluntad Mayor, la Gracia podría operar autónomamente sin árbol coordinador',
      'Los puntos dorados son fragmentos físicos de oro cosmológico, no solo símbolo',
    ],
    ambiguous: [
      'Si la Gracia puede ser transferida entre individuos',
      'Si la Voluntad Mayor o el Árbol Áureo mismo decide la designación',
      'Cuándo exactamente se restituyó a los Tarnished',
      'Si la Era de las Estrellas mantiene la Gracia o la elimina',
    ],
    relatedCharacters: ['godfrey', 'marika', 'melina'],
    relatedFactions: ['orden-dorado', 'dos-dedos'],
    relatedConcepts: ['erdtree', 'tarnished', 'golden-order', 'voluntad-mayor'],
    relatedTimelineEvents: ['exilio-godfrey', 'viaje-mancillado'],
  },

  tarnished: {
    summary:
      'Los Tarnished (Empañados) son herederos de los seguidores de Godfrey, exiliados de las Tierras Intermedias cuando Marika les retiró la Gracia. Sus descendientes vivieron generaciones lejos de las Tierras Intermedias como personas-no-personas. Tras la rotura del Anillo, su Gracia se restauró parcialmente — única razón por la que pudieron regresar. Son los únicos candidatos posibles a Señor Elden, precisamente porque su origen exterior los hace exentos de las grietas que dividen a los demidióses.',
    deepLore: [
      h(2, 'Origen: el exilio de Godfrey'),
      p(
        'Cuando ',
        link('Godfrey', 'character', 'godfrey'),
        ' completó la conquista de las Tierras Intermedias bajo el régimen del Orden Dorado, ',
        link('Marika', 'character', 'marika'),
        ' lo despojó de la ',
        link('Gracia', 'concept', 'grace'),
        ' y lo exilió junto con sus seguidores. La razón pública: ya no quedaban enemigos por los que pelear, su función estaba cumplida. La razón cosmológica: Marika necesitaba descartar al Primer Señor Elden antes de tomar como segundo consorte a ',
        link('Radagon', 'character', 'radagon'),
        ' (que es ella misma). Los seguidores de Godfrey siguieron a su rey al exilio. Sus descendientes vivieron generaciones lejos de las Tierras Intermedias como personas sin Gracia.'
      ),
      h(2, 'La condición Tarnished'),
      p(
        'Vivir como Tarnished es vivir sin Gracia. La marca dorada en los ojos se apagó. La autoridad institucional desapareció. La protección cosmológica del régimen se revocó. Pero no todo se perdió: los Tarnished conservaron memoria racial de las Tierras Intermedias, conocimiento marcial heredado de Godfrey, y un linaje que el régimen sabía existir aunque ya no reconocía oficialmente. Vivían en regiones exteriores cuya geografía exacta el juego no documenta. Algunos se establecieron como mercenarios; otros como ermitaños; otros como linajes nobiliarios menores en cosmologías ajenas.'
      ),
      h(2, 'El llamado: la Gracia restituida'),
      p(
        'Tras la rotura del Anillo Elden y la retirada parcial de la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ', el régimen necesitó urgentemente Señor Elden nuevo. Los demidióses estaban enfrentados entre sí; ninguno podía coronarse sin reproducir las grietas existentes. La solución fue restaurar la Gracia a los Tarnished exiliados como candidatos exteriores. La operación: el ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' restituyó la luz dorada a los ojos de descendientes específicos de los seguidores de Godfrey, dispersos por las regiones exteriores. Cada uno comenzó a recibir visiones de la Gracia Errante guiándolos a las Tierras Intermedias.'
      ),
      h(2, 'La elegibilidad inesperada'),
      p(
        'El Tarnished es candidato improbable al trono Elden. No es demidiós ni Empyrean. No tiene Gran Runa propia. No nació en el régimen actual. Pero precisamente por su origen exterior puede ser instrumento de cambio cosmológico que un demidiós no podría ser. Los demidióses son partes del régimen quebrado; cada uno representa una grieta. El Tarnished es exterior al sistema fragmentado — puede recolectar Grandes Runas sin estar adherido a ninguna en particular, puede coronarse sin estar comprometido con cosmología específica, puede elegir entre los seis finales con neutralidad estructural que ningún demidiós tiene.'
      ),
      h(2, 'Los Tarnished documentados'),
      p(
        'El Tarnished que el jugador controla es uno de muchos. Otros Tarnished documentados incluyen a ',
        link('Gideon Ofnir', 'character', 'gideon'),
        ' (el Sabio Todo Sabedor), ',
        link('Roderika', 'character', 'roderika'),
        ' (sobreviviente de la masacre), ',
        link('Vyke', 'character', 'vyke'),
        ' (Tarnished anterior que recibió el sello frenético), ',
        link('Bernahl', 'character', 'bernahl'),
        ' (Banished Knight caído al Volcano Manor), y los Tarnished anónimos que el jugador puede invadir o que invaden al jugador. Cada uno representa trayectoria distinta tras el llamado de la Gracia restituida.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Los Tarnished son el monumento del juego a quien fue excluido y regresa cambiado. Su exilio fue traición política; su retorno es respuesta cosmológica. ',
        link('Marika', 'character', 'marika'),
        ' los descartó cuando ya no les necesitaba; los necesita ahora porque su régimen falló. La pregunta filosófica: ¿es el Tarnished instrumento del régimen que lo exilió o agente exterior con voluntad propia? El juego responde: ambas cosas a la vez. Cada final es respuesta distinta a esa ambivalencia. La Era de la Fractura reproduce el régimen; la Era del Orden lo perfecciona; la Era del Crepúsculo lo repara; la Era de la Llama Frenética lo extingue; la Era de las Estrellas lo sustituye. Cada cosmología requiere un Tarnished que elija — y la elección define qué tipo de exiliado fue.'
      ),
    ],
    confirmed: [
      'Los Tarnished son herederos de los seguidores de Godfrey',
      'Marika les retiró la Gracia y los exilió tras completar la conquista',
      'Vivieron generaciones lejos de las Tierras Intermedias sin Gracia',
      'Tras la fractura, el Árbol Áureo restituyó parcialmente su Gracia',
      'Son los únicos candidatos posibles a Señor Elden tras el conflicto entre demidióses',
    ],
    inferred: [
      'Su exilio fue cálculo político de Marika antes de tomar a Radagon como segundo consorte',
      'Su origen exterior los hace exentos de las grietas que dividen a los demidióses',
      'La restitución de la Gracia es admisión cosmológica de que el régimen necesita ayuda externa',
      'Cada Tarnished documentado representa trayectoria distinta tras el llamado',
    ],
    theories: [
      'Marika diseñó el exilio sabiendo que serían instrumentos diferidos para reformar el cosmos',
      'Algunos Tarnished tienen sangre Numen latente heredada de los seguidores de Godfrey',
      'Existen Tarnished que rechazaron el llamado y siguen en el exilio',
      'El número total de Tarnished retornados es limitado — una cohorte específica de candidatos',
    ],
    ambiguous: [
      'Geografía exacta de las regiones exteriores donde vivieron exiliados',
      'Cuántos Tarnished hay actualmente operando en las Tierras Intermedias',
      'Si la Gracia restituida es revocable nuevamente o permanente',
      'Si los Tarnished pueden engendrar nueva descendencia con Gracia o solo poseen ellos mismos la marca',
    ],
    relatedCharacters: ['godfrey', 'marika', 'melina', 'gideon', 'roderika', 'vyke', 'bernahl'],
    relatedFactions: ['orden-dorado'],
    relatedConcepts: ['grace', 'erdtree', 'great-rune', 'golden-order'],
    relatedTimelineEvents: ['exilio-godfrey', 'viaje-mancillado'],
    relatedEndings: ['fracture', 'order', 'duskborn', 'frenzied-flame', 'age-of-stars', 'despair'],
  },

  'scarlet-rot': {
    summary:
      'La Podredumbre Escarlata es manifestación material de un dios exterior del decaimiento — entidad cuya ley cosmológica es la disolución progresiva de todas las formas. Malenia nació infectada como vasija humana del dios. Su Floración convierte regiones enteras en yermos podridos. El Oro sin Aleación de Miquella es la única tecnología documentada capaz de contenerla parcialmente. Millicent es la única hija escarlata que escapó al control del dios.',
    deepLore: [
      h(2, 'Naturaleza ontológica del dios del decaimiento'),
      p(
        'La Podredumbre Escarlata es presencia material de un ',
        link('dios exterior', 'concept', 'dioses-exteriores'),
        ' del decaimiento. Su nombre canónico nunca se enuncia — el juego lo trata como entidad innombrable, similar a la Madre Informe. Su ley cosmológica: la disolución progresiva de todas las formas, el regreso de toda materia organizada a fluido podrido. No es muerte (que es discreta y resolutiva); es ',
        em('decaimiento eterno'),
        ', proceso sin fin que nunca completa la transición de vida a no-vida.'
      ),
      h(2, 'Malenia como vasija humana'),
      p(
        link('Malenia', 'character', 'malenia'),
        ' nació infectada con la Podredumbre Escarlata como condición ontológica. No es enfermedad adquirida — es manifestación humana del dios desde el momento del nacimiento. Su cuerpo es el medio del dios en las Tierras Intermedias. Cada acto de Malenia es simultáneamente expresión de su voluntad humana y operación cosmológica del dios. La condición es paradójica: combatir la Podredumbre es combatir su propio cuerpo; aceptarla plenamente es entregarse a la disolución universal.'
      ),
      h(2, 'La Floración: liberación catastrófica'),
      p(
        'Una "Floración Escarlata" es liberación catastrófica de la podredumbre concentrada en Malenia. La premisa: durante batallas suficientemente intensas, Malenia "florece" — su cuerpo libera toda la podredumbre acumulada como tormenta cosmológica. La Floración de ',
        link('Caelid', 'region', 'caelid'),
        ' durante su duelo con ',
        link('Radahn', 'character', 'radahn'),
        ' convirtió toda la región en yermo putrefacto. La presencia material residual quedó como ',
        link('Lago de Podredumbre', 'region', 'lake-of-rot'),
        ' bajo Liurnia. Cada Floración es nacimiento del dios en territorio nuevo.'
      ),
      h(2, 'Las hijas escarlatas: Kindred y Millicent'),
      p(
        'Cuando Malenia florece, sus brotes escarlatas se dispersan como semillas. La mayoría se convierten en ',
        link('Kindred of Rot', 'faction', 'kindred-of-rot'),
        ' — criaturas-mosca-podredumbre del enjambre. La excepción es ',
        link('Millicent', 'character', 'millicent'),
        ': brote que desarrolló identidad humana plena. Su quest es lucha por mantener voluntad propia frente a la presión cosmológica de regresar al enjambre. Cada hija escarlata mantiene vínculo emocional con Malenia — cuando ella sufre, ellas se agitan; cuando ella combate, se concentran. La relación es inversa también.'
      ),
      h(2, 'Contención: el proyecto Miquella'),
      p(
        link('Miquella', 'character', 'miquella'),
        ' desarrolló el ',
        link('Oro sin Aleación', 'concept', 'unalloyed-gold'),
        ' específicamente para contener la condición de su hermana. Las agujas de Oro sin Aleación pueden expulsar parcialmente al dios externo del cuerpo de su huésped. ',
        link('Millicent', 'character', 'millicent'),
        ' las usa como tratamiento. Los ',
        link('Cleanrot Knights', 'faction', 'cleanrot-knights'),
        ' aceptaron infección voluntaria como solidaridad ontológica con su Empyrean. El proyecto del Haligtree era construir cosmología completa donde la Podredumbre fuera contenida no por purga sino por integración.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La Podredumbre Escarlata plantea la pregunta del juego sobre la enfermedad cosmológica. El régimen del Orden Dorado responde con purga (',
        link('Malenia', 'character', 'malenia'),
        ' fue marginalizada pese a ser hija de Marika). Miquella responde con integración (el Haligtree la acoge). El Volcano Manor responde con explotación (la usa como arma). Cada respuesta es modelo cosmológico distinto. La enfermedad de Malenia es metonimia de toda condición cosmológica que el régimen no puede resolver: si la disolución es ley estructural, ¿se purifica el cosmos o se acepta como condición compartida? El juego no decide. Cada cosmología responde distinto.'
      ),
    ],
    confirmed: [
      'La Podredumbre Escarlata es manifestación de un dios exterior del decaimiento',
      'Malenia nació infectada como vasija humana del dios',
      'La Floración de Caelid convirtió la región en yermo podrido',
      'El Lago de Podredumbre es residuo material de la presencia del dios',
      'Las agujas de Oro sin Aleación pueden expulsar parcialmente al dios',
      'Las Kindred of Rot son hijas escarlatas dispersas de Malenia',
    ],
    inferred: [
      'El dios externo es innombrable estructuralmente, similar a la Madre Informe',
      'Cada Floración es nacimiento territorial del dios',
      'La condición de Malenia es paradoja ontológica irreducible',
      'El proyecto Miquella era contener mediante integración, no purga',
    ],
    theories: [
      'El dios del decaimiento es hermano cosmológico del dios de la Llama Frenética',
      'Si Malenia floreciera plenamente, todas las Kindred convergerían como dios materializado',
      'Existen otras vasijas del dios en regiones no documentadas',
      'La Podredumbre puede curarse plenamente solo bajo cosmología post-Voluntad Mayor',
    ],
    ambiguous: [
      'Nombre canónico del dios externo',
      'Si tiene voluntad coherente o solo procesos cosmológicos automáticos',
      'Si la Floración es voluntaria de Malenia o reflejo automático del dios',
      'Si Miquella puede curar plenamente la condición o solo contenerla',
    ],
    relatedCharacters: ['malenia', 'miquella', 'radahn', 'millicent', 'gowry'],
    relatedFactions: ['cleanrot-knights', 'kindred-of-rot', 'haligtree'],
    relatedRegions: ['caelid', 'lake-of-rot', 'haligtree', 'aeonia'],
    relatedConcepts: ['dioses-exteriores', 'unalloyed-gold'],
    relatedTimelineEvents: ['aeonia-bloom'],
  },

  'unalloyed-gold': {
    summary:
      'El Oro sin Aleación es metalurgia teológica desarrollada por Miquella: oro purificado de toda influencia divina externa. Es el único proyecto cosmológico positivo de las Tierras Intermedias — no destruir el régimen, no reformarlo, sino curar la contaminación divina mediante alquimia ritual. Sus agujas pueden expulsar a un dios externo del cuerpo de su huésped. Es el único arma puramente curativa documentada en el juego.',
    deepLore: [
      h(2, 'Concepto filosófico'),
      p(
        link('Miquella', 'character', 'miquella'),
        ' desarrolló el Oro sin Aleación como respuesta filosófica al cosmos contaminado por ',
        link('dioses exteriores', 'concept', 'dioses-exteriores'),
        '. La premisa: el oro sagrado del Árbol Áureo y de los hechizos del Orden Dorado está estructuralmente aleado — combina materia áurea con influencia divina externa (la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' principalmente, pero también otras entidades). El proyecto: extraer la influencia divina del oro, dejando solo el oro puro. Es metalurgia teológica: alquimia que separa el metal de su contaminación cosmológica.'
      ),
      h(2, 'Aplicación curativa'),
      p(
        'Las agujas de Oro sin Aleación tienen propiedad cosmológica única: pueden expulsar a un dios externo del cuerpo de su huésped. La operación es médico-cosmológica — la aguja se inserta ritualmente, el oro puro repele la influencia divina contaminante, el huésped queda parcialmente liberado. ',
        link('Millicent', 'character', 'millicent'),
        ' las usa como tratamiento contra su propia condición de hija escarlata: cada aguja insertada repele parcialmente al dios del decaimiento. El tratamiento no cura plenamente — pero permite mantener identidad humana frente a la presión cosmológica.'
      ),
      h(2, 'El Haligtree como aplicación cosmológica'),
      p(
        'El proyecto del ',
        link('Haligtree', 'concept', 'haligtree'),
        ' es aplicación a escala cosmológica del principio del Oro sin Aleación: construir árbol completo cuyo dorado sea no contaminado, cuya luz sea propia y no derivada de la Voluntad Mayor. ',
        link('Elphael', 'region', 'elphael'),
        ' fue capital de esta utopía — comunidad de excluidos que vivían como iguales bajo luz dorada propia. Fue el primer experimento documentado de teología sin dios externo. Su contaminación posterior por la Podredumbre de Malenia tras Aeonia es el fracaso parcial del proyecto.'
      ),
      h(2, 'Conexión con la fórmula Albinauric'),
      p(
        'La fabricación de los ',
        link('Albinaurics', 'faction', 'albinauricos'),
        ' requiere específicamente Oro sin Aleación junto con agua viva ritualizada y magia ceremonial. La fórmula original predata a Miquella — pero él la reactivó como tecnología accesible. Que los Albinaurics sean humanos artificiales fabricados sin influencia divina externa es expresión consistente del proyecto: humanidad construida sin pacto teológico. Cuando Mohg masacró Albinaurics tras secuestrar a Miquella, atacó simultáneamente a los seres y al proyecto cosmológico que los sustentaba.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'El Oro sin Aleación es el monumento del juego al único proyecto cosmológico genuinamente positivo. La mayoría de proyectos de las Tierras Intermedias son destructivos (la Llama Frenética extingue el cosmos), reformistas (la Era del Orden lo perfecciona) o sustitutivos (la Era de las Estrellas lo reemplaza). El Oro sin Aleación de Miquella es el único que ',
        em('cura'),
        '. La pregunta filosófica del proyecto: ¿es viable cosmología sin pacto con dios externo? La respuesta del juego: viable pero vulnerable. El Haligtree fue posible — pero también fácilmente destruible. La utopía existió; su existencia es lo único que la hace concebible nuevamente bajo condiciones distintas.'
      ),
    ],
    confirmed: [
      'El Oro sin Aleación es metalurgia desarrollada por Miquella',
      'Es oro purificado de toda influencia divina externa',
      'Las agujas pueden expulsar parcialmente a un dios externo del cuerpo de su huésped',
      'Millicent las usa como tratamiento contra la podredumbre',
      'La fabricación de Albinaurics requiere Oro sin Aleación',
      'El Haligtree es aplicación a escala cosmológica del principio',
    ],
    inferred: [
      'Es el único proyecto cosmológico positivo documentado de las Tierras Intermedias',
      'La fórmula original predata a Miquella pero él la reactivó',
      'El proyecto era amenaza estructural para todos los dioses externos simultáneamente',
      'El secuestro por Mohg fue ataque coordinado al proyecto cosmológico, no solo al individuo',
    ],
    theories: [
      'La fórmula podría ser completada por otro Empyrean si el conocimiento se transfiere',
      'Existen variantes más avanzadas que Miquella estaba desarrollando antes del secuestro',
      'El Oro sin Aleación puede protegerse de cualquier dios externo si se aplica en cantidad suficiente',
      'Los textos completos del proyecto siguen ocultos en el Haligtree',
    ],
    ambiguous: [
      'Procedimiento exacto de purificación alquímica',
      'Si el oro puede ser sintetizado o solo extraído de fuentes específicas',
      'Si Miquella podría completar el proyecto si despierta',
      'Si la utopía del Haligtree podría restaurarse bajo otra cosmología',
    ],
    relatedCharacters: ['miquella', 'malenia', 'millicent'],
    relatedFactions: ['haligtree', 'albinauricos', 'cleanrot-knights'],
    relatedConcepts: ['dioses-exteriores', 'scarlet-rot', 'haligtree', 'erdtree'],
    relatedRegions: ['haligtree', 'elphael'],
    relatedTimelineEvents: ['unalloyed-gold-haligtree', 'mohg-toma-miquella'],
  },

  'frenzied-flame': {
    summary:
      'La Llama Frenética es dios exterior nihilista cuya doctrina única es que existir es sufrir y la única piedad cosmológica posible es terminar con todo. Sus Tres Dedos están sellados bajo Leyndell tras tres puertas ceremoniales. Su contagio es cosmológico, no físico: una víctima escucha la doctrina, la siente como verdad, y comienza la transformación. Quien recibe el sello completo se convierte en Señor de la Llama Frenética — autoridad cosmológica para quemar el cosmos entero.',
    deepLore: [
      h(2, 'Naturaleza ontológica del dios externo'),
      p(
        'La Llama Frenética es uno de los ',
        link('dioses exteriores', 'concept', 'dioses-exteriores'),
        ' que pugnan por imponer leyes a las Tierras Intermedias. Su domino: el sufrimiento universalizado. Su mecanismo cosmológico: convertir consciencia en fuego, fundir a todos los seres en una llama yermo donde ya nadie pueda sufrir porque ya nadie es. La doctrina es internamente coherente — y eso la hace particularmente difícil de refutar. Sus ',
        link('Tres Dedos', 'faction', 'tres-dedos'),
        ' son su manifestación física en las Tierras Intermedias.'
      ),
      h(2, 'Doctrina del fin universal'),
      p(
        'La doctrina frenética se sostiene sobre dos premisas. Primera: ',
        em('existir es sufrir'),
        ' — no hay vida sin dolor, no hay placer sin pérdida futura, no hay relación sin separación final. Segunda: ',
        em('la única piedad cosmológica es terminar con todo'),
        ' — no reformar el sufrimiento, no aliviarlo localmente, sino extinguir su condición de posibilidad. La conclusión: quemar el cosmos entero es acto último de amor universal. La doctrina es nihilismo presentado como compasión radical, y precisamente por su coherencia interna se contagia cosmológicamente.'
      ),
      h(2, 'El sello bajo Leyndell'),
      p(
        'Los Tres Dedos están sellados en el Subterranean Shunning-Grounds bajo ',
        link('Leyndell', 'region', 'leyndell'),
        ', tras tres puertas ceremoniales. El sello es ritualmente complejo: las Tres Llaves son los ojos vendados de víctimas frenéticas previas, y el camino requiere cooperación de personas tocadas por la Llama. El régimen del Orden Dorado eligió sellar a los Tres Dedos en lugar de exterminarlos — quizá porque no podía exterminarlos, quizá porque sospechaba que el sello mismo era ritual cosmológico operativo. Cualquier ruptura del sello requiere consentimiento humano específico.'
      ),
      h(2, 'Reclutamiento y contagio'),
      p(
        'El contagio frenético es cosmológico, no físico. Una víctima escucha la doctrina (mediante exposición al lore frenético, contacto con un misionero, o acercamiento al sello), la siente como verdad cosmológica, y comienza la transformación. Síntomas: ojos amarillos ardientes, voz que predica el fin, espirales de fuego que no consumen materialmente pero queman cosmológicamente. ',
        link('Shabriri', 'character', 'shabriri'),
        ' es el misionero más antiguo documentado — opera por posesión de huéspedes a través de eras. ',
        link('Hyetta', 'character', 'hyetta'),
        ' es doncella ritualizada designada para acompañar al próximo Señor. ',
        link('Vyke', 'character', 'vyke'),
        ' fue Tarnished anterior que recibió el sello pero falló en culminar la quema.'
      ),
      h(2, 'El Tarnished como vehículo potencial'),
      p(
        'Si el Tarnished recibe el sello completo (mediante el ritual con Hyetta y los Tres Dedos), se convierte en ',
        em('Señor de la Llama Frenética'),
        '. Su sello no es metafórico: es marca cosmológica que lo convierte en vehículo activo de la doctrina. ',
        link('Melina', 'character', 'melina'),
        ' aborrece la Llama con intensidad personal — si el Tarnished se entrega, abandona el viaje y promete ',
        em('terminar al Tarnished con sus propias manos'),
        ' en una era futura. Su rechazo es uno de los pocos actos de voluntad clara que ella expresa.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La Llama Frenética plantea la pregunta más oscura del juego: ¿qué pasa si la única respuesta coherente al sufrimiento del cosmos es terminar el cosmos? La doctrina no es tentación trivial — es lectura filosófica seria que el juego presenta como opción genuina. La ',
        link('Era de la Llama Frenética', 'ending', 'frenzied-flame'),
        ' es el final más radical: no reforma, no sustituye — extingue. Que el régimen oficial eligiera sellar la doctrina en lugar de refutarla sugiere que sus propios teólogos no encontraron contraargumento totalmente convincente. La pregunta queda abierta: si el sufrimiento es universal, ¿es la quema del cosmos crueldad o piedad final?'
      ),
    ],
    confirmed: [
      'La Llama Frenética es dios externo cuya doctrina es que existir es sufrir',
      'Sus Tres Dedos están sellados bajo Leyndell tras tres puertas ceremoniales',
      'El contagio es cosmológico, no físico — opera por exposición a la doctrina',
      'Hyetta es la doncella ritualizada del próximo Señor',
      'Shabriri es el misionero histórico que opera por posesión',
      'Melina aborrece la Llama y abandona al Tarnished que se entrega',
    ],
    inferred: [
      'El régimen sellló la doctrina en lugar de exterminarla porque no pudo refutarla',
      'Cada víctima frenética es vehículo del próximo ciclo de propagación',
      'La radiación cosmológica crece con la proximidad al sello',
      'La doctrina sobrevive porque nunca fue refutada, solo silenciada',
    ],
    theories: [
      'El dios externo es el sufrimiento personificado del cosmos entero',
      'Si el sello cae sin Señor designado, todas las Tierras Intermedias se transformaría espontáneamente',
      'Los Tarnished con suficiente sufrimiento acumulado son particularmente susceptibles',
      'Vyke falló en culminar la quema porque retuvo voluntad propia residual',
    ],
    ambiguous: [
      'Identidad exacta del dios externo más allá de su doctrina',
      'Si la transformación es reversible bajo cosmología distinta',
      'Si los Tres Dedos son tres entidades o tres aspectos de una',
      'Cuántas víctimas frenéticas operan actualmente fuera del sello',
    ],
    relatedCharacters: ['shabriri', 'hyetta', 'melina', 'gideon', 'vyke'],
    relatedFactions: ['tres-dedos', 'frenzied-victims'],
    relatedRegions: ['leyndell', 'subterranean-shunning-grounds'],
    relatedConcepts: ['dioses-exteriores', 'voluntad-mayor'],
    relatedEndings: ['frenzied-flame'],
    relatedTimelineEvents: ['frenzied-flame-spread'],
  },

  'formless-mother': {
    summary:
      'La Madre Informe es dios exterior de la sangre y la corrupción carnal. Patrona cosmológica de Mohg y los Dedos Sangrientos. Su nombre la describe: no tiene forma fija, opera a través de fluido sanguíneo, transmutación carnal, ofrendas hemáticas. Su pacto con Mohg le concedió la sangre flameante — fuego cosmológico capaz de quemar incluso lo divino. Cada Tarnished asesinado por un Bloody Finger es ofrenda ritual a su sistema digestivo cósmico.',
    deepLore: [
      h(2, 'Naturaleza ontológica'),
      p(
        'La Madre Informe es uno de los ',
        link('dioses exteriores', 'concept', 'dioses-exteriores'),
        ' que pugnan por imponer leyes a las Tierras Intermedias. Su nombre describe su naturaleza: no tiene forma fija, opera mediante fluido, no se manifiesta como entidad localizable. Donde la Voluntad Mayor opera mediante red institucional sofisticada, la Madre Informe opera mediante contagio sanguíneo directo. Su dominio cosmológico: la disolución carnal, la transmutación de la individualidad mediante fluido, la sangre como vehículo divino.'
      ),
      h(2, 'El pacto con Mohg'),
      p(
        link('Mohg', 'character', 'mohg'),
        ', expulsado del Orden Dorado por su naturaleza Omen, encontró en la Madre Informe la única deidad dispuesta a aceptarlo no a pesar de su sangre Omen sino ',
        em('por'),
        ' ella. El pacto fue claro: Mohg ofrecería sangre humana como combustible ritual; la Madre Informe le concedería poder cosmológico real. La concesión específica fue la ',
        link('sangre flameante', 'concept', 'bloodflame'),
        ' — fuego ritual capaz de quemar carne divina. La maldición del Lord of Blood, la inmunidad parcial de Mohg al canon dorado, la inviolabilidad de su palacio en Mohgwyn — todo procede del pacto.'
      ),
      h(2, 'Sistema operacional'),
      p(
        'La Madre Informe opera mediante ofrendas distribuidas. Los ',
        link('Bloody Fingers', 'faction', 'bloody-fingers'),
        ' bajo ',
        link('Varré', 'character', 'varre'),
        ' invaden a otros Tarnished a través de las Tierras Intermedias; cada Tarnished asesinado es ofrenda. La sangre se acumula en ',
        link('Mohgwyn Palace', 'region', 'mohgwyn'),
        ', los ',
        link('Albinaurics', 'faction', 'albinauricos'),
        ' capturados son sangrados rituales en sus catacumbas. La Madre Informe consume todo el sistema digestivo. A diferencia de la Voluntad Mayor (que opera por mediación institucional), la Madre Informe consume directamente — el ritual produce poder operativo real, no solo simbólico.'
      ),
      h(2, 'Conexión con el secuestro de Miquella'),
      p(
        'El secuestro de ',
        link('Miquella', 'character', 'miquella'),
        ' por Mohg es el momento de mayor ambición del culto. Mohg planeaba usar a Miquella como vasija superior — un Empyrean cuya divinidad residual permitiera amplificar el poder de la Madre Informe a niveles capaces de rivalizar con la Voluntad Mayor misma. El plan no se completó porque Miquella permaneció en su capullo dorado sin despertar; la Madre Informe quedó en estado intermedio, esperando que el Tarnished derrote a Mohg para potencialmente liberar a Miquella o consumarse de otro modo.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La Madre Informe es el monumento del juego al dios que rechaza la representación. Donde la Voluntad Mayor exige liturgia institucional sofisticada, la Madre Informe exige solo sangre. Su anonimato no es debilidad — es estrategia: un dios sin forma fija es difícil de combatir, sus rituales se transmiten por contagio en lugar de doctrina codificada. Su nombre canónico es deliberadamente inestable. Su existencia plantea la pregunta más cruda: ¿qué pasa si lo divino opera sin necesidad de doctrina, sin templo, sin clero? La Madre Informe responde: opera mejor. Esa eficacia es lo que la hace particularmente atroz como modelo cosmológico.'
      ),
    ],
    confirmed: [
      'La Madre Informe es dios exterior de la sangre y corrupción carnal',
      'Pacta con Mohg como vasija humana central',
      'Le concedió la sangre flameante como instrumento ritual',
      'Cada Tarnished asesinado por Bloody Fingers es ofrenda ritual',
      'Su nombre y forma son deliberadamente innombrables',
    ],
    inferred: [
      'Opera por contagio sanguíneo directo, no por mediación institucional',
      'El pacto con Mohg le concedió poder operativo real, no solo simbólico',
      'El secuestro de Miquella era plan para amplificar su poder cosmológico',
      'Su anonimato es estrategia cosmológica, no debilidad',
    ],
    theories: [
      'Es hermana cosmológica de la Voluntad Mayor, derivación de un mismo dios externo más antiguo',
      'Su forma original puede haber sido concreta antes de elegir innombrabilidad estratégica',
      'Existen otras vasijas humanas operando sin documentación visible',
      'Si Mohg cayera definitivamente, transferiría su pacto a otro huésped Omen',
    ],
    ambiguous: [
      'Identidad y origen específicos',
      'Si tiene voluntad coherente o solo procesos cosmológicos automáticos',
      'Si su pacto con Mohg incluía cláusula sobre Miquella desde el inicio',
      'Cuánta sangre acumula en estado de saturación máxima',
    ],
    relatedCharacters: ['mohg', 'varre', 'miquella'],
    relatedFactions: ['bloody-fingers', 'omens'],
    relatedRegions: ['mohgwyn'],
    relatedConcepts: ['dioses-exteriores', 'bloodflame', 'voluntad-mayor'],
    relatedTimelineEvents: ['mohg-toma-miquella'],
  },

  'dark-moon': {
    summary:
      'La Luna Oscura es magia lunar tradicional de la familia Caria con polaridad invertida respecto a la Luna Llena de Rennala. En manos de Ranni se transforma en cosmología completa: si el sol del Árbol Áureo es el régimen actual cercano, la luna oscura distante es la ley alternativa que retira la influencia divina del cosmos. La Espada de la Luna Oscura es su arma ritual; la Era de las Estrellas su consumación cosmológica.',
    deepLore: [
      h(2, 'Tradición Caria pre-Ranni'),
      p(
        'La magia lunar es tradición ancestral de la familia ',
        link('Caria', 'faction', 'caria'),
        ' en Liurnia, anterior al matrimonio mestizo con Radagon. La ',
        link('Luna Llena', 'concept', 'full-moon'),
        ' de ',
        link('Rennala', 'character', 'rennala'),
        ' es el polo positivo de la tradición — luz lunar luminosa, integradora, redonda. La Luna Oscura es el polo negativo: la misma sustancia con polaridad invertida. Donde la Llena ilumina, la Oscura absorbe. Donde la Llena integra, la Oscura distancia. Ambas son ',
        em('la misma magia'),
        ' aplicada con orientación inversa.'
      ),
      h(2, 'Apropiación por Ranni'),
      p(
        link('Ranni', 'character', 'ranni'),
        ' aprendió la tradición Caria desde su infancia. Tras transferir su alma a la muñeca y comenzar su rebelión cosmológica, transformó la Luna Oscura de magia familiar a cosmología completa. La operación es filosófica: si el sol del ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' representa el régimen cercano de la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ', entonces la luna oscura distante representa la alternativa cosmológica de retirar al dios cercano sustituyéndolo por luz lejana, fría, no-intervencionista.'
      ),
      h(2, 'La Espada de la Luna Oscura'),
      p(
        'La Espada de la Luna Oscura es arma ritual específica de la tradición Caria. Su forja requiere fragmento ritual de la luna misma — la Caria Manor conserva moldes específicos. Cuando Ranni completa su quest, recompensa al Tarnished con la Espada como símbolo de pacto. El arma es simultáneamente herramienta marcial y declaración cosmológica: portarla es alinearse con la Era de las Estrellas. ',
        link('Blaidd', 'character', 'blaidd'),
        ' la usa también — su lealtad a Ranni se materializa en este arma compartida.'
      ),
      h(2, 'Conexión con los Nox'),
      p(
        'La Luna Oscura tiene resonancia cosmológica con la civilización ',
        link('Nox', 'faction', 'nox'),
        '. Los Nox querían forjar su propio dios — una "Luna Eterna" o "Noche Eterna" — como alternativa cosmológica al dominio diurno del Árbol Áureo. El proyecto de Ranni recoge parcialmente este legado pero adapta los medios: en lugar de fabricar nuevo dios, retira al actual. Las ciudades subterráneas de ',
        link('Nokstella', 'region', 'nokstella'),
        ' y ',
        link('Nokron', 'region', 'nokron'),
        ' tienen estrellas falsas y luz lunar que prefigura la Era de las Estrellas. Ranni completa el proyecto que los Nox no pudieron culminar.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La Luna Oscura es el monumento del juego a la alternativa cosmológica más radical: el cosmos sin dios cercano. La Luna Llena ilumina y consuela; la Luna Oscura distancia y libera. Cada uno tiene su precio — la luz cercana del Árbol Áureo dio refugio pero también prisión; la luz distante de Ranni da libertad pero también frío. La pregunta del juego no es cuál es mejor sino cuál se prefiere: ¿control compasivo o libertad fría? Ranni elige libertad. La Era de las Estrellas es su respuesta filosófica al problema cosmológico de las Tierras Intermedias.'
      ),
    ],
    confirmed: [
      'La Luna Oscura es polaridad invertida de la Luna Llena de Rennala',
      'Ambas son magia tradicional Caria, anterior al matrimonio con Radagon',
      'Ranni la transformó de magia familiar a cosmología completa',
      'La Espada de la Luna Oscura es arma ritual específica de la tradición',
      'La Era de las Estrellas es la consumación cosmológica del proyecto',
    ],
    inferred: [
      'La tradición Caria era originalmente neutral cosmológicamente, no opositora al Orden',
      'La transformación de Ranni es decisión filosófica, no estilística',
      'Los Nox prefiguraron parcialmente esta cosmología con sus cielos artificiales',
      'Blaidd como Bestia Sombra de Ranni canaliza la magia ritualmente',
    ],
    theories: [
      'Existió un dios externo de la luna al que la familia Caria estaba originalmente ligada',
      'La Luna Oscura puede convocarse físicamente bajo condiciones cosmológicas específicas',
      'El régimen del Orden Dorado tolera la tradición porque desconoce su potencial completo',
      'Ranni recogió específicamente conocimiento Nox tras descubrir las Ciudades Eternas',
    ],
    ambiguous: [
      'Origen exacto de la magia Caria pre-Rennala',
      'Si la luna a la que se invoca es física o cosmológica',
      'Si la tradición puede ser revivida sin Ranni si ella desaparece',
      'Cuántas variantes lunares (cuartos, eclipses) existieron originalmente',
    ],
    relatedCharacters: ['ranni', 'rennala', 'blaidd', 'radagon'],
    relatedFactions: ['caria', 'raya-lucaria', 'nox'],
    relatedRegions: ['nokstella', 'nokron', 'liurnia', 'caria-manor'],
    relatedConcepts: ['age-of-stars', 'full-moon', 'voluntad-mayor', 'glintstone', 'primeval-current'],
    relatedEndings: ['age-of-stars'],
  },

  'black-flame': {
    summary:
      'La Llama Negra es fuego cosmológico hostil al Árbol Áureo, derivado de la Runa de la Muerte. Único fuego de las Tierras Intermedias capaz de quemar carne divina. Don ritual de la Reina de Ojos Crepusculares a los Pieles de Dios. Cada apóstol que la maneja porta literalmente las pieles de las divinidades que ha ejecutado. Su existencia operativa es prueba persistente de que los dioses son combustibles cosmológicos.',
    deepLore: [
      h(2, 'Naturaleza cosmológica'),
      p(
        'La Llama Negra es fuego ritual distinto del fuego ordinario y del fuego dorado del ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        '. Su origen ontológico es la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ' — específicamente, la materialización ritual de la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ' como llama operable. No quema materia común con eficacia particular: quema ',
        em('lo sagrado'),
        '. Su efecto sobre tejido divino es exacto. Su efecto sobre tejido mortal es secundario.'
      ),
      h(2, 'Origen y herencia'),
      p(
        'La Llama Negra fue otorgada por la ',
        link('Reina de Ojos Crepusculares', 'character', 'gloam-eyed-queen'),
        ' — predecesora cosmológica de Marika que tuvo la Runa de la Muerte antes que Maliketh la recuperara — a los ',
        link('Pieles de Dios', 'faction', 'pieles-de-dios'),
        ' como instrumento ritual de su régimen. La doctrina del culto era explícita: los dioses son matables, la Llama Negra es la herramienta. Cuando la Reina cayó a manos de ',
        link('Maliketh', 'character', 'maliketh'),
        ', el régimen del Orden Dorado se consolidó pero la Llama no pudo erradicarse — su fórmula ya estaba transmitida a apóstoles dispersos.'
      ),
      h(2, 'Aplicación deicida'),
      p(
        'Cada apóstol Pieles de Dios lleva drapeado sobre su cuerpo la piel real de una divinidad previamente asesinada con la Llama. La armadura es archivo material de matanzas divinas. Cuando un apóstol invoca la Llama en combate, está aplicando literalmente la operación que ya ejecutó eras atrás: separar carne divina de su esencia cosmológica mediante combustión ritualizada. La Llama opera por contacto cosmológico, no por exposición física — un dios puede arder sin que el ambiente físico se afecte.'
      ),
      h(2, 'Filogenia y derivaciones'),
      p(
        'La Llama Negra ha producido derivaciones rituales menores. La ',
        link('Llama Espectral', 'concept', 'ghostflame'),
        ' (',
        em('Ghostflame'),
        ') de las catacumbas pre-Orden es relacionada filogenéticamente — fuego de procesamiento mortuorio derivado de la misma tradición. Los hechizos de incantación negra accesibles al Tarnished (Llamas Negras de Apóstol, Espinas de Llama Negra, Bola de Llama Negra) son aplicaciones limitadas que cualquier hechicero suficientemente entrenado puede aprender. Pero solo los apóstoles originales conservan la fórmula deicida completa.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La Llama Negra es el monumento del juego a la mortalidad estructural de los dioses. Su mera existencia operativa convierte a Marika, Radagon, la Voluntad Mayor misma en blancos teóricamente alcanzables. Cada apóstol activo es memorando ambulante: ',
        em('el cosmos puede ser asesinado'),
        '. El régimen oficial nunca pudo erradicar la doctrina precisamente porque su ',
        em('refutación'),
        ' requería negar la posibilidad — pero la posibilidad es operativa: la Llama existe, los apóstoles operan, la Reina fue derrotada pero su fórmula sobrevive. Es la herejía que el régimen no pudo cerrar.'
      ),
    ],
    confirmed: [
      'La Llama Negra es derivada de la Runa de la Muerte',
      'Único fuego de las Tierras Intermedias capaz de quemar carne divina',
      'Otorgada por la Reina de Ojos Crepusculares a los Pieles de Dios',
      'Cada apóstol porta pieles de divinidades previamente asesinadas',
      'Sus derivaciones menores son accesibles como hechizos mortales',
    ],
    inferred: [
      'La Ghostflame es relacionada filogenéticamente con la Llama Negra',
      'Su efecto opera por contacto cosmológico, no exposición física',
      'La fórmula deicida completa solo la conservan los apóstoles originales',
      'El régimen del Orden Dorado nunca pudo refutar su lógica cosmológica',
    ],
    theories: [
      'La Reina de Ojos Crepusculares no inventó la Llama — la heredó de tradición pre-Orden aún más antigua',
      'Existen apóstoles dormidos que esperan condiciones cosmológicas específicas para reactivarse',
      'La Llama puede destilarse de fuentes alternativas si se conoce el ritual completo',
      'Si Marika fuera expuesta directamente, la Llama podría matarla genuinamente',
    ],
    ambiguous: [
      'Si la fórmula es genética, ritual o cosmológica',
      'Cuántos apóstoles activos existen actualmente',
      'Si los Cuchillos Negros manejan tecnología relacionada o paralela',
      'Si la Llama tiene voluntad propia o solo materialidad ritualizada',
    ],
    relatedCharacters: ['gloam-eyed-queen', 'maliketh', 'marika'],
    relatedFactions: ['pieles-de-dios', 'cuchillos-negros'],
    relatedConcepts: ['destined-death', 'rune-of-death', 'erdtree', 'ghostflame'],
    relatedTimelineEvents: ['era-antigua', 'gloam-eyed-queen-fall'],
  },

  ghostflame: {
    summary:
      'La Llama Espectral (Ghostflame) es fuego cosmológico azul-blanco asociado a los muertos y a los antiguos enterramientos. Procede de tradiciones rituales pre-Orden — el único fuego que era capaz de procesar cuerpos antes del sello de la Muerte Predestinada. Los Crematorios y catacumbas primigenias siguen usándolo. Su persistencia post-Orden es supervivencia ritual: las catacumbas operan con tradiciones que el régimen oficial nunca pudo erradicar plenamente.',
    deepLore: [
      h(2, 'Origen pre-Orden'),
      p(
        'La Llama Espectral es fuego ritual derivado de las tradiciones funerarias anteriores al ',
        link('Orden Dorado', 'concept', 'golden-order'),
        '. Antes del sello de la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ', cuando los seres de las Tierras Intermedias aún podían morir verdaderamente, los procesos rituales requerían fuego cosmológicamente válido — fuego capaz de separar alma de cuerpo de manera ordenada. La Llama Espectral fue ese fuego. Su composición exacta nunca se documenta plenamente, pero es filogenéticamente relacionada con la ',
        link('Llama Negra', 'concept', 'black-flame'),
        ' — ambos fuegos pre-Orden vinculados a la cosmología de la Muerte.'
      ),
      h(2, 'Función ritual original'),
      p(
        'En la era pre-Orden, los Crematorios eran instalaciones ceremoniales con sacerdotes específicos. Cada cuerpo recibía cremación con Llama Espectral; el alma era liberada en el proceso para continuar al ciclo cosmológico siguiente. La operación era exacta — no destruía la individualidad, solo desvinculaba alma y cuerpo permitiendo que cada uno siguiera su trayectoria. Era el procesamiento ritual de la muerte como tránsito legítimo, no como anomalía.'
      ),
      h(2, 'Persistencia post-Orden'),
      p(
        'Cuando el Orden Dorado se consolidó, intentó reemplazar las tradiciones funerarias con el ciclo del ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' — las almas iban al árbol para reciclaje, no al fuego para liberación. Pero los Crematorios pre-Orden siguieron operando en regiones marginales y catacumbas. Hoy el Tarnished encuentra Crematorios activos manejados por sirvientes-cuasi-vivos que continúan rituales eras después de que su propósito original se haya vuelto incoherente: con la Muerte sellada, la cremación ya no libera nada — solo procesa carne sin destino claro.'
      ),
      h(2, 'Conexión con Aquellos que Viven en la Muerte'),
      p(
        'La presencia de Llama Espectral en catacumbas no es coincidencia. Las regiones donde el fuego sigue ardiendo son precisamente las que albergan más ',
        link('Aquellos que Viven en la Muerte', 'concept', 'those-who-live-in-death'),
        '. La hipótesis: la Llama Espectral es uno de los pocos instrumentos cosmológicos capaces de afectar a los Aquellos que Viven en la Muerte. Cuando los Skeletons se reactivan en las Tierras Intermedias actuales, destruirlos definitivamente puede requerir aplicación de Llama Espectral sobre sus huesos. Los Crematorios actuales, sin saberlo claramente, operan como sistema inmune cosmológico residual contra la corrupción que el sello de la Muerte produjo.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La Llama Espectral es el monumento del juego a las tradiciones que el régimen no pudo erradicar. Cada Crematorio activo es declaración silenciosa: ',
        em('antes del Orden Dorado había procesamiento legítimo de la muerte'),
        '. Su persistencia es síntoma de la incompletitud del régimen: incluso después de eras de hegemonía dorada, las catacumbas siguen ardiendo con fuego que el Orden no controla. La pregunta implícita: ¿es la cosmología pre-Orden recuperable, o es solo residuo? La Era del Crepúsculo de Fia da una respuesta parcial — la Muerte puede restaurarse, y con ella las tradiciones que la procesaban legítimamente podrían recuperar coherencia.'
      ),
    ],
    confirmed: [
      'La Llama Espectral es fuego ritual pre-Orden Dorado',
      'Era el único fuego capaz de procesar cuerpos antes del sello de la Muerte',
      'Los Crematorios y catacumbas primigenias siguen usándola',
      'Es filogenéticamente relacionada con la Llama Negra',
      'Su uso continúa en regiones marginales pese a la hegemonía del Orden',
    ],
    inferred: [
      'Su función ritual original era liberar almas del cuerpo de manera ordenada',
      'Tras el sello de la Muerte, su uso ya no produce el efecto cosmológico original',
      'Puede ser instrumento contra Aquellos que Viven en la Muerte',
      'Los Crematorios actuales operan sin comprender plenamente su función residual',
    ],
    theories: [
      'La Llama Espectral fue otorgada originalmente por la Reina de Ojos Crepusculares',
      'Existen variantes cosmológicas más antiguas (Ghostflame primigenio) cuya fórmula se ha perdido',
      'Aplicada correctamente, podría revertir parcialmente la condición de Aquellos que Viven en la Muerte',
      'Los sirvientes de los Crematorios son ellos mismos cuasi-Aquellos que Viven en la Muerte mantenidos en estado funcional por el fuego que oficiaron en vida',
    ],
    ambiguous: [
      'Composición cosmológica exacta del fuego',
      'Si tiene voluntad parcial o solo materialidad ritual',
      'Si puede destilarse o producirse sin tradición específica',
      'Si la Era del Crepúsculo restauraría su función plena',
    ],
    relatedConcepts: ['destined-death', 'deathroot', 'black-flame', 'rune-of-death', 'erdtree'],
    relatedCharacters: ['gloam-eyed-queen', 'fia', 'godwyn'],
    relatedFactions: ['those-who-live-in-death', 'pieles-de-dios'],
    relatedEndings: ['duskborn'],
  },

  bloodflame: {
    summary:
      'La Bloodflame es magia ritual que combina fuego cosmológico con sangre del propio caster. Otorgada por la Madre Informe a Mohg como instrumento del pacto de sangre. Cada hechizo requiere auto-sangrado: el conjuro es simultáneamente arma marcial y ofrenda ritual a la diosa innombrable. Es uno de los pocos fuegos de las Tierras Intermedias capaces de quemar carne divina, junto con la Llama Negra y la Llama de Ruina.',
    deepLore: [
      h(2, 'Naturaleza ritual'),
      p(
        'La Bloodflame es magia ritual específica del culto de la ',
        link('Madre Informe', 'concept', 'formless-mother'),
        '. Su composición cosmológica: fuego ritual canalizado mediante sangre del propio caster como combustible. Cada conjuro requiere auto-sangrado — el mago se hiere ritualmente, su sangre se incendia con efecto cosmológico, el resultado es proyectil o arma con propiedades duales (combustión + sangrado). La operación es simultáneamente arma marcial y ofrenda a la diosa innombrable.'
      ),
      h(2, 'Mohg como practicante supremo'),
      p(
        link('Mohg', 'character', 'mohg'),
        ' es el mayor practicante de Bloodflame documentado. Su pacto con la Madre Informe le concedió maestría absoluta — cada gesto suyo en combate produce sangre flameante con eficacia cosmológica que ningún apóstol secundario puede igualar. Su lanza tridente (Mohgwyn\'s Sacred Spear) está diseñada específicamente para canalizar Bloodflame: cada golpe produce explosión de sangre ardiente. Su forma final como Lord of Blood es el cuerpo humano fusionado con la magia hasta el punto de no poder separarse de ella.'
      ),
      h(2, 'Aplicaciones y derivaciones'),
      p(
        'Los ',
        link('Bloody Fingers', 'faction', 'bloody-fingers'),
        ' bajo ',
        link('Varré', 'character', 'varre'),
        ' aprenden versiones diluidas. Sus armas características — Reduvia, Cinquedea, Bloody Helice, Bloody Slash — están imbuidas con efecto Bloodflame menor. Hechicerías accesibles como Bloodflame Talons (garras de sangre flameante), Bloodflame Blade (encantamiento de armas), Bloodboon (proyectil mayor) son aplicaciones limitadas que cualquier hechicero suficientemente entrenado puede aprender. Pero solo Mohg y los apóstoles directos tienen el pacto cosmológico completo.'
      ),
      h(2, 'Capacidad deicida'),
      p(
        'La Bloodflame es uno de los pocos fuegos de las Tierras Intermedias capaces de quemar carne divina. Junto con la ',
        link('Llama Negra', 'concept', 'black-flame'),
        ' (de los Pieles de Dios, derivada de la Runa de la Muerte) y la ',
        link('Llama de Ruina', 'concept', 'fell-god'),
        ' (de los Gigantes del Fuego, fuego primigenio del Fell God), la Bloodflame integra el corpus de fuegos cosmológicamente operativos contra divinidades. La Madre Informe diseñó esta capacidad deliberadamente: si Mohg tiene que enfrentar a otro dios externo, su instrumento debe ser capaz de quemarlo. La capacidad deicida es lo que hace al Lord of Blood amenaza estructural al régimen del Orden Dorado.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La Bloodflame es el monumento del juego al pacto que se paga con el propio cuerpo. Cada hechizo de Bloodflame requiere auto-sangrado — el mago no produce magia sin herirse a sí mismo. Esa exigencia ritual es metáfora exacta del pacto con la Madre Informe: cada poder concedido se paga con sangre, y el flujo nunca cesa. Mohg es la encarnación cumbre de esta lógica — su poder es prodigioso y su existencia es sufrimiento permanente. La pregunta implícita: ¿es el pacto con el dios externo bendición o servidumbre? La Bloodflame responde: ambas cosas a la vez, y el practicante no puede separarlas porque su sangre alimenta ambas.'
      ),
    ],
    confirmed: [
      'La Bloodflame combina fuego ritual con sangre del propio caster',
      'Otorgada por la Madre Informe a Mohg como instrumento del pacto',
      'Cada hechizo requiere auto-sangrado como condición ritual',
      'Capaz de quemar carne divina, junto con Llama Negra y Llama de Ruina',
      'Versiones diluidas son accesibles a Bloody Fingers iniciados',
    ],
    inferred: [
      'La capacidad deicida fue diseñada deliberadamente por la Madre Informe',
      'El auto-sangrado no es metáfora sino condición operativa real',
      'La forma final de Mohg como Lord of Blood es fusión humana con la magia',
      'Solo Mohg y apóstoles directos tienen el pacto cosmológico completo',
    ],
    theories: [
      'La Bloodflame es derivación filogenética de la Llama Negra pre-Orden',
      'Existen aplicaciones más avanzadas que Mohg desarrollaba antes del secuestro de Miquella',
      'Si Mohg cayera, el conocimiento del pacto podría transferirse a otro huésped Omen',
      'La sangre flameante puede destilarse de cuerpos no-Mohg con técnica suficiente',
    ],
    ambiguous: [
      'Si el sangrado puede ser ritualizado para minimizar daño al caster',
      'Si la Bloodflame opera con sangre de terceros o solo del propio practicante',
      'Cuántos apóstoles directos manejan la versión completa',
      'Si la magia puede practicarse fuera del pacto con la Madre Informe',
    ],
    relatedCharacters: ['mohg', 'varre', 'miquella'],
    relatedFactions: ['bloody-fingers', 'omens'],
    relatedConcepts: ['formless-mother', 'black-flame', 'fell-god', 'dioses-exteriores'],
    relatedRegions: ['mohgwyn'],
    relatedTimelineEvents: ['mohg-toma-miquella'],
  },

  haligtree: {
    summary:
      'El Haligtree es árbol cosmológico alternativo creado por Miquella como manifestación física de su proyecto antiteo. Rivaliza con el Árbol Áureo sin depender de la Voluntad Mayor — su luz es el Oro sin Aleación que el propio Miquella desarrolló. Bajo sus raíces se construyó Elphael como capital de la única utopía documentada de las Tierras Intermedias: refugio para Albinaurics, Misbegotten y excluidos del Orden Dorado. Tras el secuestro de Miquella y la Floración de Malenia, el árbol fue infectado por la Podredumbre.',
    deepLore: [
      h(2, 'Premisa cosmológica'),
      p(
        'El Haligtree es manifestación física del proyecto cosmológico de ',
        link('Miquella', 'character', 'miquella'),
        ': construir árbol completo que rivalice con el ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' sin depender de la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' o de cualquier otro dios externo. La premisa: si el Árbol Áureo dorado distribuye gracia contaminada por la influencia divina externa, un árbol nuevo cuya luz fuera ',
        link('Oro sin Aleación', 'concept', 'unalloyed-gold'),
        ' sería cosmología pura. La operación requirió eras de preparación alquímica y filosófica.'
      ),
      h(2, 'Construcción y crecimiento'),
      p(
        'El Haligtree fue plantado en lo más profundo del ',
        link('Snowfield Consagrado', 'region', 'consecrated-snowfield'),
        ', protegido geográficamente por nieve cosmológicamente activa que consume vida no autorizada. Su crecimiento fue ritual: Miquella canalizó Oro sin Aleación durante eras como savia primaria, convirtiéndolo gradualmente en árbol cosmológico funcional. Bajo sus raíces se construyó la ciudad de ',
        link('Elphael', 'region', 'elphael'),
        ' como capital del proyecto. ',
        link('Malenia', 'character', 'malenia'),
        ' protegía militarmente el santuario; los ',
        link('Cleanrot Knights', 'faction', 'cleanrot-knights'),
        ' eran su guardia.'
      ),
      h(2, 'La utopía de los excluidos'),
      p(
        'Los Seguidores del Haligtree fueron la única utopía documentada de las Tierras Intermedias. Refugiados ',
        link('Albinaurics', 'faction', 'albinauricos'),
        ', ',
        link('Misbegotten', 'faction', 'misbegotten'),
        ', y excluidos diversos del Orden Dorado peregrinaron a través del Snowfield para llegar al árbol. La travesía costó vidas — la nieve consume vida no autorizada — pero los que llegaron vivieron como ciudadanos plenos del proyecto. Su clero era mixto, su gobierno distribuido, su seguridad militar de los Cleanrot Knights bajo Malenia. Por primera vez en la historia de las Tierras Intermedias, un sistema cosmológico reconocía como personas a los que el régimen oficial clasificaba como aberración.'
      ),
      h(2, 'Caída: Aeonia y secuestro'),
      p(
        'El proyecto colapsó en dos golpes. Primero, la Batalla de Aeonia: cuando Malenia floreció parcialmente para no perder contra ',
        link('Radahn', 'character', 'radahn'),
        ', la Podredumbre escapó del control individual. Su Empyrean regresó al Haligtree infectada de modo más profundo. La Podredumbre residual contaminó el árbol mismo. Segundo, el secuestro de Miquella por ',
        link('Mohg', 'character', 'mohg'),
        ': sin Miquella despierto canalizando Oro sin Aleación, la corrupción Aeonia avanzó sin contención. Los Albinaurics enloquecieron y se transformaron. Los Cleanrot Knights perdieron control progresivo. Cuando el Tarnished llega, Elphael es ciudad arruinada que conserva la forma utópica vacía de su contenido.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'El Haligtree es el monumento del juego a la utopía como existencia frágil. Era posible — el proyecto operó genuinamente durante eras, refugió a miles, demostró que la integración era viable. Pero su existencia dependía estructuralmente de tres condiciones simultáneas: Miquella despierto, Malenia conteniendo la podredumbre, distancia geográfica del régimen oficial. Cuando dos de las tres fallaron casi simultáneamente, el proyecto colapsó. La pregunta filosófica: ¿es la utopía cosmológicamente viable o solo posibilidad transitoria? El juego responde: viable pero estructuralmente vulnerable. La esperanza no se desvanece — solo requiere condiciones específicas que el régimen anfitrión activamente sabotea.'
      ),
    ],
    confirmed: [
      'El Haligtree fue creado por Miquella como cosmología alternativa al Árbol Áureo',
      'Su luz es el Oro sin Aleación que él mismo desarrolló',
      'Bajo sus raíces se construyó Elphael como capital de la utopía',
      'Refugió Albinaurics, Misbegotten y excluidos del Orden Dorado',
      'Malenia y los Cleanrot Knights eran su guardia militar',
      'La Podredumbre lo infectó tras Aeonia y el secuestro de Miquella',
    ],
    inferred: [
      'Era la única utopía documentada de las Tierras Intermedias',
      'Su éxito dependía de tres condiciones simultáneas (Miquella, Malenia, aislamiento)',
      'El régimen oficial lo toleraba mientras estaba aislado pero lo sabía amenaza estructural',
      'El Snowfield Consagrado era protección geográfica diseñada cosmológicamente',
    ],
    theories: [
      'Si Miquella despertara, podría revertir parte de la corrupción del árbol',
      'Algunos Seguidores conservan consciencia residual durante su transformación',
      'El árbol mismo conserva voluntad propia parcial heredada de Miquella',
      'El proyecto era amenaza estructural a la Voluntad Mayor — su caída no fue accidente',
    ],
    ambiguous: [
      'Cuántos Seguidores había antes de la corrupción',
      'Si el árbol podría restaurarse plenamente bajo otra cosmología',
      'Si Miquella diseñó protocolos de emergencia para mantener el proyecto durante su capullo',
      'Cuándo exactamente comenzó el crecimiento del árbol',
    ],
    relatedCharacters: ['miquella', 'malenia', 'royal-knight-loretta', 'millicent'],
    relatedFactions: ['haligtree', 'albinauricos', 'misbegotten', 'cleanrot-knights'],
    relatedRegions: ['haligtree', 'elphael', 'consecrated-snowfield', 'ordina'],
    relatedConcepts: ['unalloyed-gold', 'erdtree', 'scarlet-rot', 'voluntad-mayor'],
    relatedTimelineEvents: ['unalloyed-gold-haligtree', 'mohg-toma-miquella', 'aeonia-bloom'],
  },

  'age-of-stars': {
    summary:
      'La Era de las Estrellas es la cosmología propuesta por Ranni si el Tarnished completa su quest. Cosmos sin influencia activa de la Voluntad Mayor: la luz del Árbol Áureo se apaga, los dioses externos se retiran a distancia estelar, la luna oscura distante reemplaza al árbol cercano. Es la respuesta cosmológica más radicalmente racional al problema de las Tierras Intermedias: si los dioses cercanos producen control y prisión, la libertad requiere distanciar al cosmos.',
    deepLore: [
      h(2, 'Premisa filosófica'),
      p(
        'La Era de las Estrellas se sostiene sobre una premisa filosófica radical: ',
        em('los dioses cercanos producen control'),
        '. La ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' opera a través de instituciones rituales sofisticadas (Dos Dedos, Lectoras, clero); cada institución es simultáneamente vehículo de bendición y mecanismo de control. La Madre Informe opera por contagio sanguíneo; la Llama Frenética por contagio cosmológico; el dios del decaimiento por infección de nacimiento. Ningún dios externo de las Tierras Intermedias son benigno — incluso los aparentemente compasivos producen prisiones específicas. La conclusión de ',
        link('Ranni', 'character', 'ranni'),
        ': la única cosmología viable es alejar a los dioses lo suficiente como para que su influencia sea estructural pero no íntima.'
      ),
      h(2, 'Mecanismo cosmológico'),
      p(
        'La operación específica: cuando el Tarnished completa la quest de Ranni y le entrega la ',
        link('Hoja Mata-Dedos', 'concept', 'fingerslayer-blade'),
        ', ella consolida poder cosmológico mediante derrota ritual de los Dos Dedos. Tras la coronación del Tarnished bajo su patronazgo, ella se proclama Reina. La luz del ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' se apaga. Los Dos Dedos se desactivan permanentemente. La ',
        link('Luna Oscura', 'concept', 'dark-moon'),
        ' asciende como autoridad cosmológica nueva — pero distante. Ranni misma se exilia de la realidad ordinaria para no producir nuevo régimen de control: parte hacia el cosmos eterno, llevando consigo al Tarnished como compañero cosmológico.'
      ),
      h(2, 'Herencia Nox'),
      p(
        'La Era de las Estrellas recoge parcialmente el proyecto inacabado de los ',
        link('Nox', 'faction', 'nox'),
        '. La civilización subterránea quería forjar su propio dios — la Luna Eterna o Noche Eterna — como alternativa cosmológica al dominio diurno del Árbol Áureo. Su proyecto fue castigado por la Voluntad Mayor mediante Astel. Ranni adapta los medios pero no el fin: en lugar de fabricar nuevo dios, retira al actual. Las ciudades subterráneas de ',
        link('Nokstella', 'region', 'nokstella'),
        ' y ',
        link('Nokron', 'region', 'nokron'),
        ' tienen estrellas falsas y luz lunar que prefigura el cosmos completo de la Era de las Estrellas. Ranni completa lo que los Nox no pudieron culminar — pero por sustracción en lugar de adición.'
      ),
      h(2, 'Consecuencias estructurales'),
      p(
        'Las consecuencias específicas de la Era de las Estrellas: 1) La Voluntad Mayor pierde acceso a las Tierras Intermedias como cosmos disponible — debe buscar otro mundo si quiere mantener actividad. 2) Los demás dioses externos pierden la mayor parte de su capacidad de operar — sin la red institucional dorada que servía como infraestructura, la Madre Informe, la Llama Frenética y el dios del decaimiento quedan parcialmente desconectados. 3) Los humanos de las Tierras Intermedias quedan solos cosmológicamente — sin guía divina, sin atención, sin control. 4) ',
        link('Aquellos que Viven en la Muerte', 'concept', 'those-who-live-in-death'),
        ' continúan existiendo (la Era de las Estrellas no restaura la Muerte como Fia haría) pero su corrupción se estabiliza al detener la influencia activa del régimen anterior. 5) El cosmos se vuelve frío, lejano, libre.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La Era de las Estrellas es el monumento del juego a la libertad como condición fría. Ranni cree explícitamente que esto es preferible: la libertad fría supera al control compasivo. Su declaración final al Tarnished — sobre ser su consorte cósmico, llevarlo en su viaje eterno hacia el cosmos lejano — es una de las propuestas más extrañas del juego: amor que requiere distancia cosmológica absoluta. La pregunta filosófica del final: ¿es preferible un cosmos huérfano de dios cercano? Para algunos jugadores, indudablemente sí — Ranni es respuesta racional al problema acumulado de las Tierras Intermedias. Para otros, la frialdad es precio demasiado alto. El juego no decide. Cada Tarnished elige.'
      ),
    ],
    confirmed: [
      'La Era de las Estrellas es la cosmología que Ranni instaura si el Tarnished completa su quest',
      'La luz del Árbol Áureo se apaga; los Dos Dedos se desactivan permanentemente',
      'La luna oscura distante reemplaza al árbol cercano como autoridad cosmológica',
      'Ranni se exilia hacia el cosmos eterno con el Tarnished como consorte',
      'Recoge parcialmente el proyecto inacabado de los Nox',
    ],
    inferred: [
      'La Voluntad Mayor pierde acceso a las Tierras Intermedias como cosmos disponible',
      'Los demás dioses externos pierden la mayor parte de su capacidad de operar',
      'Los humanos de las Tierras Intermedias quedan cosmológicamente solos',
      'Aquellos que Viven en la Muerte continúan existiendo pero estabilizados',
    ],
    theories: [
      'La Voluntad Mayor podría retornar bajo condiciones cosmológicas posteriores',
      'Los humanos liberados podrían eventualmente desarrollar nuevos pactos con dioses externos menores',
      'Ranni y el Tarnished construyen efectivamente nuevo cosmos en su exilio estelar',
      'Los Nox supervivientes asisten secretamente a la transición',
    ],
    ambiguous: [
      'Si el régimen económico, social y político de las Tierras Intermedias colapsa o solo se reconfigura',
      'Si la Era de las Estrellas es reversible bajo cosmología posterior',
      'Cuándo el cosmos de Ranni se establece plenamente (la transición es gradual)',
      'Si Marika sobrevive en alguna forma o se disuelve plenamente',
    ],
    relatedCharacters: ['ranni', 'blaidd', 'iji', 'seluvis'],
    relatedFactions: ['caria', 'nox', 'silver-mimic-tears'],
    relatedRegions: ['nokron', 'nokstella', 'liurnia'],
    relatedConcepts: ['dark-moon', 'voluntad-mayor', 'empyrean', 'fingerslayer-blade', 'primeval-current'],
    relatedEndings: ['age-of-stars'],
    relatedTimelineEvents: ['ranni-noche-cuchillos', 'nox-ciudades-eternas'],
  },

  /* ════════════════ Mass promotion batch — conceptos partial ════════════════ */

  'minor-erdtrees': {
    summary:
      'Los Árboles Áureos Menores son árboles dorados secundarios diseminados por las Tierras Intermedias. Cada región tiene al menos uno como capilla satélite del Árbol Áureo principal. Funcionan como infraestructura de gracia: distribuyen la luz dorada a peregrinos lejos del centro.',
    deepLore: [
      h(2, 'Estructura jerárquica'),
      p(
        'El ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' principal en ',
        link('Leyndell', 'region', 'leyndell'),
        ' es catedral cosmológica; los Árboles Áureos Menores son parroquias regionales. Cada uno recibe gracia derivada y la redistribuye localmente. Sus avatares — los Árbol Áureo Avatars que los custodian — son guardianes pétreos animados con luz dorada.'
      ),
      h(2, 'Función ritual'),
      p(
        'Cada Árbol Áureo Menor es santuario activo. Los peregrinos pueden recibir bendiciones rúnicas dejando ofrendas en su base. Su luz dorada es indistinguible visualmente de la del árbol principal — solo la magnitud difiere. Funcionalmente, son extensiones cosmológicas distribuidas.'
      )
    ],
    confirmed: [
      'Cada región tiene al menos un Árbol Áureo Menor',
      'Sus avatares custodian las bendiciones',
      'Reciben gracia derivada del Árbol Áureo principal',
      'Funcionan como capillas satélites'
    ],
    inferred: [
      'Su existencia documenta la distribución institucional de la gracia',
      'La gracia que reciben se debilitó tras la fractura',
      'Los avatares son creación específica del Orden Dorado, no reliquias previas'
    ],
    theories: [
      'Si el Árbol Áureo principal cae, los Menores se apagan en cadena',
      'Algunos Avatares conservan consciencia parcial',
      'Los Menores podrían ser reactivados independientemente bajo otra cosmología'
    ],
    ambiguous: [
      'Cuántos Árboles Áureos Menores existen exactamente',
      'Si fueron plantados o crecieron espontáneamente',
      'Si su gracia es la misma o diferente cualitativamente'
    ],
    relatedConcepts: ['erdtree', 'grace', 'golden-order'],
    relatedFactions: ['orden-dorado'],
  },

  'full-moon': {
    summary:
      'La Luna Llena es magia lunar tradicional de la familia Caria, especialmente dominada por Rennala. Es magia "diurna" del linaje — luz lunar luminosa, redonda, integradora — opuesta cosmológicamente a la Luna Oscura de Ranni que invierte el polo sin cambiar la sustancia.',
    deepLore: [
      h(2, 'Tradición Caria'),
      p(
        'La Luna Llena es magia ancestral del clan ',
        link('Caria', 'faction', 'caria'),
        ', cultivada en Liurnia desde antes del matrimonio mestizo con Radagon. ',
        link('Rennala', 'character', 'rennala'),
        ' es su practicante suprema — su título oficial era "Reina de la Luna Llena" precisamente por dominar esta tradición.'
      ),
      h(2, 'Polo cosmológico'),
      p(
        'La Luna Llena convoca cuerpos lunares luminosos que congelan o iluminan a los enemigos. Es magia integradora: agrupa fuerzas celestes en lugar de dispersarlas. Su contraparte cosmológica, la ',
        link('Luna Oscura', 'concept', 'dark-moon'),
        ' de Ranni, es la misma sustancia con polaridad invertida — donde Llena ilumina, Oscura absorbe.'
      ),
      h(2, 'Hechizos visibles'),
      p(
        'Hechizos como Full Moon de Rennala invocan una luna gigante que castiga a los enemigos con luz lunar concentrada. Su magia se enseñaba en Raya Lucaria como tradición Caria oficial. Tras el colapso de Rennala, los discípulos vivos son escasos.'
      )
    ],
    confirmed: [
      'La Luna Llena es magia tradicional Caria',
      'Rennala es su practicante suprema',
      'Es contraparte cosmológica de la Luna Oscura',
      'Se enseñaba en Raya Lucaria'
    ],
    inferred: [
      'La tradición Caria predata el matrimonio con Radagon',
      'Después de Rennala los practicantes vivos son escasos',
      'La Luna Llena y Luna Oscura son la misma sustancia con polaridad invertida'
    ],
    theories: [
      'Existió un dios externo de la luna al que la familia Caria estaba ligada',
      'Ranni invertió la polaridad por razones cosmológicas específicas, no estilísticas',
      'La tradición original incluía cuartos lunares — fases intermedias que se han perdido'
    ],
    ambiguous: [
      'Origen exacto de la magia Caria',
      'Si la luna a la que se invoca es física o cosmológica',
      'Si la tradición puede ser revivida sin Rennala'
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
        'Los Glintstones son cristales naturales que crecen en cuevas profundas y montañas específicas. Su característica única: reflejan la luz de cuerpos celestes con perfección absoluta. Cada Glintstone contiene una porción de la luz primigenia atrapada cosmológicamente.'
      ),
      h(2, 'Aplicación mágica'),
      p(
        'La hechicería académica de ',
        link('Raya Lucaria', 'region', 'raya-lucaria'),
        ' usa Glintstones como vehículo: el mago canaliza su voluntad a través del cristal, y el cristal invoca a la estrella reflejada. Cada hechizo es comunicación astronómica directa.'
      ),
      h(2, 'Origen y custodios'),
      p(
        'Los ',
        link('Crystalians', 'faction', 'crystalians'),
        ' son seres minerales que custodian las cuevas de Glintstone. Su existencia precede a Raya Lucaria — la Academia descubrió la magia estudiando a los Crystalians, no creó la magia desde cero. La tradición Carian de la Luna Llena depende también de Glintstones específicos.'
      )
    ],
    confirmed: [
      'Los Glintstones son cristales que reflejan estrellas',
      'Son material de toda hechicería académica',
      'Crecen naturalmente en cuevas y montañas',
      'Los Crystalians los custodian'
    ],
    inferred: [
      'Cada Glintstone contiene una porción específica de luz primigenia',
      'La Academia descubrió, no inventó, su uso mágico',
      'Hechizar es invocar directamente a la estrella reflejada'
    ],
    theories: [
      'Existieron civilizaciones pre-Raya Lucaria que ya usaban Glintstones',
      'Algunos Glintstones contienen almas de antiguos magos absorbidos',
      'Los Glintstones podrían ser fragmentos físicos de cuerpos celestes caídos'
    ],
    ambiguous: [
      'Cómo exactamente reflejan estrellas específicas',
      'Si todos los Glintstones son del mismo tipo',
      'Si su producción puede ser controlada o solo descubierta'
    ],
    relatedFactions: ['raya-lucaria', 'crystalians', 'caria'],
    relatedRegions: ['raya-lucaria', 'liurnia', 'sellia'],
    relatedConcepts: ['primeval-current', 'stars-and-fate-concept', 'dark-moon', 'full-moon'],
  },

  'primeval-current': {
    summary:
      'La Corriente Primigenia es magia gravitacional avanzada que canaliza el flujo astronómico de los cuerpos cósmicos. Sellen, Azur y Lusat fueron sus principales investigadores. Su práctica produjo conocimiento que excede los límites permitidos por la Academia — y eventualmente convirtió a sus practicantes en cuerpos cósmicos parciales.',
    deepLore: [
      h(2, 'Naturaleza de la corriente'),
      p(
        'La Corriente Primigenia es flujo cosmológico real, no metáfora. Los cuerpos celestes ejercen gravedad sobre las Tierras Intermedias; esa gravedad sigue trayectorias específicas a través del cosmos; la Corriente es esa trayectoria misma. Manipularla requiere intervención magnífica avanzada.'
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
        '. Los tres fueron excomulgados por aplicación de la Corriente más allá de lo doctrinalmente seguro.'
      ),
      h(2, 'Costo cósmico'),
      p(
        'La aplicación prolongada de la Corriente convierte al practicante en cuerpo cósmico parcial. Azur y Lusat ya están suspendidos como reliquias parcialmente celestiales. Sellen está en proceso. La excomunión académica es prevención: la Academia teme producir más cuerpos cósmicos no controlables.'
      )
    ],
    confirmed: [
      'La Corriente Primigenia es flujo gravitacional cosmológico real',
      'Sellen, Azur y Lusat fueron sus investigadores principales',
      'Los tres fueron excomulgados de Raya Lucaria',
      'La aplicación prolongada convierte al practicante en cuerpo cósmico parcial'
    ],
    inferred: [
      'La Academia conoce los riesgos pero no la cura',
      'La Corriente es prerequisito de la magia gravitacional avanzada de Radahn',
      'Otros investigadores pre-Sellen sufrieron destinos similares'
    ],
    theories: [
      'Si los tres se reunieran cosmológicamente, podrían formar un Lord Elden alternativo',
      'La Corriente puede ser usada para detener estrellas (como hizo Radahn)',
      'Los cuerpos parcialmente cósmicos pueden comunicarse entre sí a distancias estelares'
    ],
    ambiguous: [
      'Si la Corriente tiene voluntad propia',
      'Si la transformación es reversible',
      'Si la Academia podría producir un curso seguro de aplicación'
    ],
    relatedCharacters: ['sellen', 'azur', 'lusat', 'radahn'],
    relatedFactions: ['raya-lucaria' ],
    relatedRegions: ['sellia', 'raya-lucaria'],
    relatedConcepts: ['glintstone', 'stars-and-fate-concept' ],
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
        ' y reducirlas a su forma más simple. Es herramienta intelectual, no hechizo.'
      ),
      h(2, 'Uso por Goldmask'),
      p(
        link('Goldmask', 'character', 'goldmask'),
        ' es el único monje vivo capaz de operar la Ley de la Regresión hasta sus consecuencias finales. Su silencio absoluto es disciplina ritual: la formulación de la Ley requiere meditación pura. ',
        link('Corhyn', 'character', 'corhyn'),
        ' lo acompaña como traductor parcial de sus pensamientos no pronunciados.'
      ),
      h(2, 'Resultado cosmológico'),
      p(
        'La aplicación final identifica la falla del Orden Dorado: la fusión Marika-Radagon es contradicción interna. Corregirla produce la ',
        link('Era del Orden', 'ending', 'order'),
        ' — un cosmos perfectamente coherente, frío, geométrico, sin grietas. Pero también sin humanidad, sin excepciones, sin espacio para lo no encajable.'
      )
    ],
    confirmed: [
      'La Ley de la Regresión es codificación intelectual, no hechizo',
      'Procede de la tradición fundamentalista de Radagon',
      'Goldmask la opera hasta sus consecuencias finales',
      'Su aplicación produce la Era del Orden'
    ],
    inferred: [
      'Reduce contradicciones a sus formas más simples',
      'Identifica la fusión Marika-Radagon como falla central',
      'La Era resultante es geométricamente perfecta pero estructuralmente fría'
    ],
    theories: [
      'Marika misma alentó secretamente esta línea filosófica',
      'La Ley no fue inventada por Radagon — la heredó de tradiciones pre-Orden',
      'Su aplicación tiene límites — algunas contradicciones cosmológicas resisten'
    ],
    ambiguous: [
      'Si Corhyn comprende plenamente la Ley o solo la transmite',
      'Si la Era del Orden elimina la individualidad o solo la regula',
      'Si existen versiones alternativas de la Ley para otras cosmologías'
    ],
    relatedCharacters: ['goldmask', 'corhyn', 'radagon', 'marika'],
    relatedFactions: ['fundamentalistas', 'orden-dorado'],
    relatedConcepts: ['golden-order', 'voluntad-mayor', 'law-of-causality'],
    relatedEndings: ['order'],
  },

  'law-of-causality': {
    summary:
      'La Ley de la Causalidad regula causas y efectos en las Tierras Intermedias. La rotura del Anillo Elden la fragmentó: ciertas causas dejaron de generar sus efectos. Por eso eventos imposibles (Godwyn vivo sin alma, Marika encadenada en su propio árbol) coexisten sin contradicción aparente.',
    deepLore: [
      h(2, 'Función pre-fractura'),
      p(
        'Antes de la fractura, la Ley de la Causalidad mantenía el flujo natural de eventos. Cada causa producía sus efectos correspondientes. La inmortalidad funcional del régimen del Orden Dorado dependía estructuralmente de esta Ley operando coherentemente.'
      ),
      h(2, 'Quiebre cosmológico'),
      p(
        'Cuando ',
        link('Marika', 'character', 'marika'),
        ' rompió el ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        ', la Ley de la Causalidad se fragmentó parcialmente. Eventos que deberían haber producido efectos no los produjeron. ',
        link('Godwyn', 'character', 'godwyn'),
        ' fue asesinado pero no murió. Marika rompió el cosmos pero queda encadenada en su propio árbol. Estos son síntomas: la causalidad de las Tierras Intermedias post-fractura ya no funciona como antes.'
      ),
      h(2, 'Manifestaciones del quiebre'),
      p(
        'Cada anomalía cosmológica de las Tierras Intermedias actuales es manifestación del quiebre causal. ',
        link('Aquellos que Viven en la Muerte', 'concept', 'those-who-live-in-death'),
        ' existen porque la causa "muerte del alma" ya no produce el efecto "muerte del cuerpo". La ',
        link('Deathroot', 'concept', 'deathroot'),
        ' fluye porque la descomposición de Godwyn no encuentra el ciclo cosmológico que debería procesarla.'
      )
    ],
    confirmed: [
      'La Ley de la Causalidad regulaba el flujo de eventos pre-fractura',
      'La rotura del Anillo Elden la fragmentó',
      'Eventos imposibles coexisten sin contradicción visible',
      'Cada anomalía cosmológica de las Tierras Intermedias son síntoma del quiebre causal'
    ],
    inferred: [
      'La Ley es estructural al Anillo Elden, no externa',
      'Su restauración requeriría reensamblar el Anillo completamente',
      'Los seis finales del juego son distintos modos de restaurar parcialmente la causalidad'
    ],
    theories: [
      'La Bestia Elden es la Ley de la Causalidad personificada',
      'Marika rompió la Ley deliberadamente — sabía que era el único modo de detener al régimen',
      'Los Tarnished pueden actuar precisamente porque la Ley no aplica plenamente sobre ellos'
    ],
    ambiguous: [
      'Si la Ley se restaura completamente en algún final o solo parcialmente',
      'Si afecta a la Voluntad Mayor o solo a las Tierras Intermedias',
      'Si fue creada por Marika o existía antes de ella'
    ],
    relatedCharacters: ['marika', 'godwyn', 'radagon'],
    relatedConcepts: ['elden-ring', 'bestia-elden', 'law-of-regression', 'destined-death'],
    relatedTimelineEvents: ['la-fractura', 'godwyn-prince-of-death'],
  },

  /* ──────── Astral / cosmic partials ──────── */

  'gravity-magic': {
    summary:
      'La Magia Gravitacional es disciplina académica que manipula el campo gravitacional de las Tierras Intermedias. Procede de la Corriente Primigenia. Sellen la enseñó a Radahn; Radahn la usó para bloquear las estrellas. Es la magia más cosmológicamente potente del juego.',
    deepLore: [
      h(2, 'Origen y disciplina'),
      p(
        'La Magia Gravitacional procede del estudio de la ',
        link('Corriente Primigenia', 'concept', 'primeval-current'),
        ' — el flujo gravitacional cosmológico que conecta cuerpos celestes. Su aplicación local manipula el campo gravitacional inmediato: levantar objetos, detener proyectiles, atraer enemigos. Su aplicación cosmológica puede detener estrellas.'
      ),
      h(2, 'Practicantes históricos'),
      p(
        link('Sellen', 'character', 'sellen'),
        ' enseñó la disciplina a ',
        link('Radahn', 'character', 'radahn'),
        ' en su juventud. Radahn la dominó hasta el punto de bloquear las estrellas en el cielo de Caelid — gesto cosmológico sin precedentes que detuvo el destino Empyrean de Ranni durante eras.'
      ),
      h(2, 'Limitaciones'),
      p(
        'La aplicación prolongada convierte al practicante en cuerpo parcialmente cósmico (caso Sellen, Azur, Lusat). Radahn pudo escapar de esa transformación porque su masa marcial colosal absorbió el costo. Otros practicantes menores se transforman gradualmente.'
      )
    ],
    confirmed: [
      'La Magia Gravitacional procede de la Corriente Primigenia',
      'Sellen enseñó a Radahn',
      'Radahn la usó para bloquear las estrellas',
      'Su aplicación prolongada transforma al practicante'
    ],
    inferred: [
      'Es la magia más cosmológicamente potente documentada',
      'Los Lords Alabastro y Onyx son practicantes residuales pre-Sellen',
      'Radahn evitó la transformación por su masa marcial específica'
    ],
    theories: [
      'Existen aplicaciones aún más avanzadas que ningún practicante actual conoce',
      'La Magia Gravitacional puede ser arma anti-divinidad si se aplica correctamente',
      'Es heredera técnica de los Antiguos Astrólogos'
    ],
    ambiguous: [
      'Si tiene límites máximos teóricos',
      'Si afecta a la Voluntad Mayor o solo al espacio físico',
      'Si la Academia conoce más sobre ella de lo que enseña'
    ],
    relatedCharacters: ['sellen', 'azur', 'lusat', 'radahn' ],
    relatedFactions: ['raya-lucaria' ],
    relatedConcepts: ['primeval-current', 'glintstone', 'stars-and-fate-concept'],
  },

  'radahn-holds-stars': {
    summary:
      'El bloqueo cosmológico de Radahn detuvo las estrellas en el cielo de Caelid durante eras. Su gesto era amor fraterno hacia Ranni — proteger a su hermana del destino Empyrean. Pero el efecto colateral fue cancelar la posibilidad de la Era de las Estrellas. Su muerte en el Festival libera el flujo astronómico.',
    deepLore: [
      h(2, 'Naturaleza del bloqueo'),
      p(
        'Las estrellas de las Tierras Intermedias no son puramente decorativas — son inscripción material del destino. Bloquearlas detiene un destino específico. ',
        link('Radahn', 'character', 'radahn'),
        ' usó su Magia Gravitacional para sostener cosmológicamente el cielo en posición fija sobre Caelid, anclando el destino Empyrean de su hermana ',
        link('Ranni', 'character', 'ranni'),
        ' en suspensión.'
      ),
      h(2, 'Motivación fraternal'),
      p(
        'El bloqueo era acto de amor. Radahn comprendía que el destino Empyrean encadenaría a Ranni a la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' por toda la eternidad. Detener las estrellas era ofrecerle tiempo para encontrar otra salida — tiempo que ella usó para orquestar la Noche de los Cuchillos Negros y matar su propio cuerpo Empyrean.'
      ),
      h(2, 'Liberación posthuma'),
      p(
        'Cuando ',
        link('Malenia', 'character', 'malenia'),
        ' arruinó marcialmente a Radahn en la Batalla de Aeonia, el bloqueo persistió porque su cuerpo seguía técnicamente vivo. El ',
        link('Festival de Radahn', 'timeline', 'festival-radahn'),
        ' diseñado por Jerren completó la liberación: matar a Radahn libera el flujo estelar. Ranni puede ahora consolidar la Era de las Estrellas.'
      )
    ],
    confirmed: [
      'Radahn bloqueó las estrellas con su Magia Gravitacional',
      'El bloqueo detenía el destino Empyrean de Ranni',
      'Su motivación era proteger a su hermana, no rivalidad',
      'Su muerte en el Festival libera el flujo astronómico'
    ],
    inferred: [
      'Era el único demidiós con capacidad técnica para bloquear las estrellas',
      'Sabía que la liberación eventual permitiría la Era de las Estrellas',
      'Su bloqueo retrasó la rebelión cosmológica de Ranni durante eras'
    ],
    theories: [
      'Radahn aceptó el riesgo de la Floración Escarlata como precio del bloqueo',
      'Sabía desde Aeonia que su muerte ritual era inevitable',
      'Su gravedad bloqueaba específicamente las estrellas Carian'
    ],
    ambiguous: [
      'Cuándo exactamente comenzó el bloqueo',
      'Si Ranni le pidió específicamente que bloqueara o si Radahn decidió solo',
      'Si otros demidioses conocían la operación cosmológica'
    ],
    relatedCharacters: ['radahn', 'ranni', 'malenia', 'sellen', 'jerren'],
    relatedFactions: ['redmanes', 'caria'],
    relatedRegions: ['caelid', 'sellia', 'redmane-castle'],
    relatedConcepts: ['primeval-current', 'stars-and-fate-concept'],
    relatedTimelineEvents: ['batalla-aeonia', 'festival-radahn'],
    relatedEndings: ['age-of-stars'],
  },

  /* ════════════════ Phase 10 — Las 7 Grandes Runas ════════════════ */

  'godricks-great-rune': {
    summary:
      'La Gran Runa de Godrick es el fragmento más diluido del Anillo Elden — pertenece al demidiós con la sangre menos pura de la dinastía dorada. Su efecto técnico (+5 a todos los atributos) es metáfora cosmológica de su portador: sin especialidad, solo amplificación general. La runa funciona; el método personal de Godrick para "alcanzar a sus ancestros" mediante el injerto es lo que falla.',
    deepLore: [
      h(2, 'Naturaleza del fragmento'),
      p(
        'La Gran Runa de Godrick es uno de los siete pedazos del ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        ' tras la Fractura. Codifica linaje en su forma más diluida: el portador es bisnieto del Primer Señor Elden ',
        link('Godfrey', 'character', 'godfrey'),
        ', con sangre tan disminuida que apenas pudo reclamar su Gran Runa. El efecto restaurado —incremento de cinco puntos en todos los atributos sin distinción— refleja precisamente esa carencia: no hay aspecto que la sangre Godfrey aún privilegie, así que la runa amplifica todo igualmente. Es la runa de quien nunca debió haberla recibido.'
      ),
      h(2, 'Origen y mecánica'),
      p(
        'Tras la Fractura, los siete fragmentos del Anillo Elden se distribuyeron entre los herederos demidios. ',
        link('Godrick', 'character', 'godrick'),
        ' obtuvo la suya por herencia residual sobre Stormveil, antiguo Storm-Hawk King ahora vacío. La runa permanece dormida hasta su restauración en la ',
        link('Torre Divina de Limgrave', 'region', 'stormveil'),
        ': el Tarnished derrota a Godrick, recoge la runa, y la asciende ritualmente. Su efecto en combate es modesto comparado con runas especializadas, pero su valor simbólico es enorme: es la primera Gran Runa que muchos Tarnished restauran.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La runa expresa la doctrina aristocrática del Orden: el linaje es destino. Que Godrick, con sangre tan diluida, conserve el privilegio runico documenta cuán rígida es la lógica dinástica. Pero la runa también expone la insuficiencia de esa lógica: Godrick sabe que su sangre no alcanza para parecerse a sus ancestros, y por eso recurre al injerto. Donde la runa amplifica lo que ya tiene (poco), el injerto añade cuerpos ajenos. Ambos son intentos de compensar la dilución; la runa es la versión consentida por el régimen, el injerto es la versión grotesca pero análoga. Godrick, sin saberlo, hace literal lo que el sistema dinástico hace metafóricamente: pegar pedazos para conservar el aura.'
      ),
    ],
    confirmed: [
      'Godrick es el bisnieto de Godfrey, el demidiós con la sangre más diluida',
      'La Gran Runa de Godrick incrementa todos los atributos en 5 puntos',
      'Se restaura en la Torre Divina de Limgrave (la torre divina de Stormveil)',
      'Su recuperación tras la derrota de Godrick es la primera de muchos Tarnished',
    ],
    inferred: [
      'El efecto de "+5 a todo" refleja la falta de especialidad de la sangre Godfrey diluida',
      'La runa funciona aunque su portador sea defectuoso — el sistema valida la sangre, no la persona',
      'El injerto es la versión carnal del mismo principio que la runa codifica',
    ],
    theories: [
      'Godrick conoce la diferencia cualitativa entre su runa y las de Morgott o Radahn',
      'La runa no fue ofrecida formalmente sino simplemente cayó sobre el heredero sobreviviente',
      'Si Godfrey volviera, la runa correspondería a él y no a Godrick',
    ],
    ambiguous: [
      'Por qué Godrick reclama Stormveil específicamente y no otra fortaleza',
      'Si los Caballeros Desterrados aceptan a Godrick por la runa o por desesperación',
      'Si el injerto le habría servido a un demidiós con runa más poderosa',
    ],
    relatedCharacters: ['godrick', 'godfrey', 'morgott'],
    relatedFactions: ['banished-knights', 'golden-lineage'],
    relatedRegions: ['stormveil', 'limgrave'],
    relatedConcepts: ['elden-ring', 'great-rune', 'grafting'],
    relatedTimelineEvents: ['la-fractura', 'demidioses-fractura'],
  },

  'radahns-great-rune': {
    summary:
      'La Gran Runa de Radahn codifica vitalidad marcial: salud, vigor y resistencia incrementados conjuntamente. Es la runa del cuerpo soldado, del demidiós que pudo cabalgar a Torrent con armadura completa y bloquear estrellas con su masa cosmológica. Sobrevive al portador podrido durante eras antes de exigir derrota ritual.',
    deepLore: [
      h(2, 'Naturaleza del fragmento'),
      p(
        'La Gran Runa de Radahn es la runa del cuerpo. Su efecto restaurado —+15% de salud, vigor y resistencia máximos simultáneamente— es la firma cosmológica del portador: ',
        link('Radahn', 'character', 'radahn'),
        ' fue el demidiós más físicamente imponente de las Tierras Intermedias. Donde otras runas amplifican aspectos parciales (linaje, vínculos sangrientos, regeneración), esta consagra la masa marcial pura. La runa no le añade habilidad; le hace al cuerpo lo que la disciplina marcial le había hecho desde joven: ampliarlo más allá del límite humano.'
      ),
      h(2, 'Mecánica cosmológica'),
      p(
        'La runa interactúa con la práctica gravitacional de Radahn de forma específica. Para mantener gravedad cosmológica suficiente para bloquear las estrellas, el practicante necesitaba masa que sostuviera el campo (',
        link('Azur', 'character', 'azur'),
        ' y ',
        link('Lusat', 'character', 'lusat'),
        ' se transformaron en cuerpos cósmicos parciales por la práctica prolongada). Radahn evitó esa transformación porque su masa marcial específica, amplificada por la runa, le permitía sostener el campo gravitacional sin desmaterializarse. Cuando la ',
        link('Podredumbre Escarlata', 'concept', 'scarlet-rot'),
        ' lo infectó tras la Batalla de Aeonia, su cuerpo runificado resistió eras enteras la corrupción que habría disuelto a cualquier demidiós menor.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La runa hace patente la doctrina marcial de las Tierras Intermedias: el cuerpo del soldado es lo que sostiene el cosmos. Mientras sus hermanos demidioses fueron lores institucionales (Morgott el Rey, Mohg el patriarca de sangre, Rykard el blasfemo doctrinal), Radahn fue siempre el ejecutor físico — primero como General de los Redmanes, luego como bloqueador de las estrellas. La runa codifica esa función. Cuando llega el Festival de Radahn, su muerte no es derrota sino liberación: él y los Redmanes saben que la runa solo puede pasar a otro mediante combate honorable. Que el Tarnished la reciba documenta una sucesión cosmológica: el héroe llamado del exilio recibe la runa del soldado más grande del régimen.'
      ),
    ],
    confirmed: [
      'La Gran Runa de Radahn incrementa salud, vigor y resistencia máximos en 15%',
      'Se restaura en la Torre Divina de Caelid',
      'Radahn la usó para mantener cuerpo robusto contra la Podredumbre Escarlata',
      'El Festival fue diseñado para liberar la runa mediante combate',
    ],
    inferred: [
      'La masa marcial de Radahn evitó la disolución cósmica que sufrieron Azur/Lusat',
      'La runa permitió sostener gravedad cosmológica suficiente para bloquear estrellas',
      'La sangre Empyrean de Rennala contribuyó a la fortaleza física residual',
    ],
    theories: [
      'Sin la runa, la podredumbre lo habría matado en la Batalla de Aeonia',
      'La runa misma resistió la corrupción cosmológica del dios externo de la podredumbre',
      'Radahn aceptó el ritual del Festival para liberar la runa en condiciones honorables',
    ],
    ambiguous: [
      'Si la runa contribuye específicamente a la resistencia mental o solo física',
      'Por qué Jerren conocía con tanta precisión el momento del Festival',
      'Si Sellen anticipó que la runa pasaría finalmente al Tarnished',
    ],
    relatedCharacters: ['radahn', 'sellen', 'azur', 'lusat', 'jerren'],
    relatedFactions: ['redmanes'],
    relatedRegions: ['caelid', 'redmane-castle'],
    relatedConcepts: ['elden-ring', 'great-rune', 'gravity-magic', 'scarlet-rot'],
    relatedTimelineEvents: ['batalla-aeonia', 'festival-radahn'],
  },

  'morgotts-great-rune': {
    summary:
      'La Gran Runa de Morgott incrementa la salud máxima en 25% — el porcentaje más alto del juego base. Codifica obstinación obstinada: la capacidad de sostener una contradicción imposible. Su portador es un Omen rechazado por el Orden que él mismo defiende como rey-muralla.',
    deepLore: [
      h(2, 'Naturaleza del fragmento'),
      p(
        'La Gran Runa de Morgott es la runa de la resistencia obstinada. Su efecto —+25% salud máxima— es el incremento más generoso de las siete runas del juego base, y refleja la naturaleza ontológica de su portador. ',
        link('Morgott', 'character', 'morgott'),
        ' nació Omen, marcado por el ',
        link('Crisol', 'concept', 'crucible'),
        ' que el ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' considera maldición. Vivió encarcelado bajo Leyndell. Aun así, defiende el Orden hasta el último aliento como Rey legítimo. La runa no purifica el cuerpo Omen — lo blinda.'
      ),
      h(2, 'Origen y juramento'),
      p(
        'Morgott obtuvo su Gran Runa tras la Fractura. Los textos del juego sugieren que, a diferencia de sus hermanos que reclamaron sus runas con orgullo dinástico, Morgott la asume como deber: el ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' lo rechazó (los Árbol Áureo-burial Watchdogs los persiguen) pero él mismo se autoproclama "Rey del Árbol Áureo, fiel". Su Gran Runa lo permite literalmente — sin la salud cosmológicamente amplificada, no podría sostener el rol que su cuerpo, su raza y su régimen niegan simultáneamente. La runa hace posible la contradicción.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Morgott es la pregunta cosmológica que el juego nunca responde: ¿se puede ser leal a un sistema que te define como impureza? La runa lo capacita para intentar la respuesta. Cada hora que sostiene Leyndell desde la Fractura es prueba de que el cuerpo cosmológicamente reforzado puede mantener una posición incoherente. Su batalla final ante el Tarnished no es defensa de una doctrina viable — es testimonio de la lealtad como acto puro, sostenida por la runa que él, por todos los criterios oficiales, no merece.'
      ),
    ],
    confirmed: [
      'La Gran Runa de Morgott incrementa la salud máxima en 25%',
      'Es el incremento porcentual más alto entre las runas del juego base',
      'Se restaura en la Torre Divina de Altus Este',
      'Morgott la porta como rey defensor de Leyndell',
      'Mohg, su gemelo, recibió otra runa con dinámica completamente distinta',
    ],
    inferred: [
      'La runa amplifica la resistencia física Omen, no la purifica',
      'Sin la runa, Morgott no podría sostener el rol contradictorio que ocupa',
      'Su elección de "Margit" como alias antes de revelarse muestra conciencia de la doble identidad',
    ],
    theories: [
      'El juramento de fidelidad al Árbol Áureo fue impuesto por la Voluntad Mayor mediante los Dos Dedos',
      'Morgott desea ser rechazado como una forma de redención teológica',
      'Si hubiera nacido sin marca Omen, habría sido un demidiós ortodoxo poco interesante',
    ],
    ambiguous: [
      'Si Marika sabía que sus dos hijos Omen también recibirían runas',
      'Cómo logra Morgott escapar de las catacumbas de Leyndell originalmente',
      'Si la runa lo protege específicamente del rechazo del Árbol Áureo',
    ],
    relatedCharacters: ['morgott', 'mohg', 'marika', 'godfrey'],
    relatedFactions: ['omens', 'omenkillers', 'leyndell-knights'],
    relatedRegions: ['leyndell'],
    relatedConcepts: ['elden-ring', 'great-rune', 'crucible', 'omen-curse', 'golden-order'],
    relatedTimelineEvents: ['hijos-marika-godfrey', 'la-fractura'],
  },

  'mohgs-great-rune': {
    summary:
      'La Gran Runa de Mohg literaliza la cosmología bautismal del culto sangriento: cuando el portador usa un Frasco Carmesí, también restaura salud a fantasmas/aliados cercanos. Es la runa del banquete compartido — la teología del Lord of Blood hecha mecánica.',
    deepLore: [
      h(2, 'Naturaleza del fragmento'),
      p(
        'La Gran Runa de Mohg es la runa del rito sangriento compartido. Su efecto restaurado —al usar un Frasco Carmesí, los aliados/fantasmas cercanos también recuperan salud— es expresión literal de la teología del culto Mohgwyn. ',
        link('Mohg', 'character', 'mohg'),
        ', gemelo Omen de ',
        link('Morgott', 'character', 'morgott'),
        ', construyó un régimen alternativo basado en el banquete: la sangre derramada por uno alimenta a todos los miembros del culto. La runa hace cosmológica esa lógica.'
      ),
      h(2, 'Pacto con la Madre Informe'),
      p(
        'A diferencia de Morgott (que asumió su naturaleza Omen como deber bajo el Orden Dorado), Mohg pactó con la ',
        link('Madre Informe', 'concept', 'formless-mother'),
        ', diosa externa del culto sangriento. La Gran Runa de Mohg se entrelaza con ese pacto: aunque permanece técnicamente fragmento del ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        ', su efecto refleja teología cosmológicamente externa al régimen dorado. Es la runa más explícitamente híbrida del juego — instrumento del régimen oficial reconfigurado por contrato con un dios rival. Su consagración pasa por el ritual del ',
        link('Bloodflame', 'concept', 'bloodflame'),
        ', la magia ritual que Mohg desarrolló específicamente para la consagración del cuerpo bajo la Madre.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La runa expresa la doctrina central de Mohg: la familia ritual reemplaza la familia oficial. Donde el Orden Dorado funda su legitimidad en la línea de sangre Marika-Godfrey, Mohg construye familia mediante rito —los ',
        link('Bloody Fingers', 'faction', 'bloody-fingers'),
        ' como hermanos, ',
        link('Varré', 'character', 'varre'),
        ' como sumo sacerdote, ',
        link('Miquella', 'character', 'miquella'),
        ' como heredero forzado. La runa permite que cualquiera del culto comparta la sanación del Lord; es contrasangre cósmica. Que el Tarnished, tras matar a Mohg en su palacio, herede esta runa expone que la mecánica funciona aunque el portador no comparta la teología subyacente. La runa no exige ortodoxia; exige el rito.'
      ),
    ],
    confirmed: [
      'La Gran Runa de Mohg restaura salud a aliados cuando el portador usa un Frasco Carmesí',
      'Se restaura en la Torre Divina de Altus Oeste',
      'Mohg pactó con la Madre Informe para fundar el culto sangriento',
      'Mohg secuestró a Miquella para incubarlo como consorte ritual',
    ],
    inferred: [
      'La runa fue reconfigurada por el pacto con la Madre Informe',
      'Su efecto multiplayer refleja el principio del culto: comunión mediante sangre compartida',
      'La consagración de la runa pasa por el ritual Bloodflame',
    ],
    theories: [
      'Mohg no recibió su runa por derecho dinástico sino que la reclamó tras tener la Madre Informe como aval',
      'La Madre Informe le ofreció el pacto cuando reconoció su capacidad ritual',
      'Sin Miquella, la runa habría carecido de heredero legítimo eventual',
    ],
    ambiguous: [
      'Si Morgott conocía el pacto de Mohg con la Madre Informe',
      'Si Marika tuvo alguna participación en el destino divergente de los gemelos',
      'Si Miquella habría aceptado la runa de haber despertado tras la incubación',
    ],
    relatedCharacters: ['mohg', 'morgott', 'miquella', 'varre', 'marika'],
    relatedFactions: ['bloody-fingers', 'omens', 'kindred-of-rot'],
    relatedRegions: ['mohgwyn'],
    relatedConcepts: ['elden-ring', 'great-rune', 'formless-mother', 'bloodflame', 'omen-curse'],
    relatedTimelineEvents: ['hijos-marika-godfrey', 'la-fractura'],
  },

  'rykards-great-rune': {
    summary:
      'La Gran Runa de Rykard codifica el principio devorador del Volcano Manor: cada golpe contra el enemigo restaura una pequeña porción de salud al portador. Es la runa del antiOrden hecha mecánica — la blasfemia organizada como sistema cósmico.',
    deepLore: [
      h(2, 'Naturaleza del fragmento'),
      p(
        'La Gran Runa de Rykard es la runa devoradora. Su efecto —recuperación de salud al impactar al enemigo— es la doctrina del ',
        link('Volcano Manor', 'faction', 'volcano-manor'),
        ' destilada en mecánica: matar es alimentarse, alimentarse es legitimarse. Donde el ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' exige que la violencia se sublime bajo ley dorada, la runa de ',
        link('Rykard', 'character', 'rykard'),
        ' la convierte en nutrición directa. Es la runa más explícitamente herética del juego base.'
      ),
      h(2, 'Origen y la fusión con Eiglay'),
      p(
        'Rykard, demidiós hijo de Rennala y Radagon, comenzó como noble institucional del Orden Dorado — pero la Fractura del Anillo lo desilusionó completamente. Descendió bajo el Volcano Manor, encontró a la ',
        link('serpiente-dios Eiglay', 'concept', 'serpent-god-eiglay'),
        ' (entidad pre-Crisol enterrada bajo la montaña) y se ofreció a ser devorado por ella. La fusión resultante —cuerpo humano descompuesto, cabeza de serpiente cosmológica— es Rykard como nuevo profeta del antiOrden. La Gran Runa, que conservaba intacta, asume ahora el principio del nuevo cuerpo: lo que mata, alimenta. La doctrina se publica mediante los ',
        link('Recusantes', 'concept', 'recusant-hunters'),
        ' y los ',
        link('Pieles de Dios', 'faction', 'pieles-de-dios'),
        ' que Rykard adopta.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La runa es la negación cósmica del sacrificio. En el Orden Dorado, sacrificarse es ofrenda al Árbol Áureo; en Rykard, lo opuesto: el otro es la ofrenda al portador. Cada Tarnished cazado por los Recusantes alimenta literalmente la doctrina del Volcano Manor mediante esta dinámica runica. Que el Tarnished pueda heredar la runa tras matar a Rykard expone una ironía cosmológica: el principio devorador no necesita un creyente, solo necesita un usuario. La doctrina blasfema funciona como mecánica universal — y eso, no la magia ni la fuerza, es la verdadera lección del Volcano Manor.'
      ),
    ],
    confirmed: [
      'La Gran Runa de Rykard restaura salud al impactar enemigos',
      'Se restaura en la Torre Divina de Caelid Oeste',
      'Rykard se fusionó voluntariamente con la serpiente-dios Eiglay',
      'Tanith preserva el culto del Volcano Manor tras la fusión de su esposo',
    ],
    inferred: [
      'La fusión con Eiglay reconfiguró la runa según la doctrina serpentina pre-Crisol',
      'El principio devorador es coherente con la teología original de los Pieles de Dios',
      'La runa funciona aunque el portador no comparta la fe blasfema',
    ],
    theories: [
      'Eiglay aceptó devorar a Rykard porque reconoció su runa como instrumento de su propia liberación',
      'Rykard buscaba específicamente el modo de revertir el Orden tras la decepción de la Fractura',
      'Su matrimonio con Tanith fue parte del plan a largo plazo, no anomalía',
    ],
    ambiguous: [
      'Si Eiglay conserva voluntad propia tras la fusión o si solo opera como cuerpo',
      'Por qué Bernahl rompe con el Volcano Manor antes del enfrentamiento final',
      'Si Rennala conocía el destino blasfemo de su hijo',
    ],
    relatedCharacters: ['rykard', 'tanith', 'bernahl', 'rennala', 'radagon'],
    relatedFactions: ['volcano-manor', 'pieles-de-dios', 'fundamentalistas'],
    relatedRegions: ['mt-gelmir'],
    relatedConcepts: ['elden-ring', 'great-rune', 'serpent-god-eiglay', 'recusant-hunters'],
    relatedTimelineEvents: ['rykard-blasphemy', 'la-fractura'],
  },

  'malenias-great-rune': {
    summary:
      'La Gran Runa de Malenia regenera salud constantemente. Codifica resistencia continua — no la barrera súbita de Morgott ni la vitalidad cruda de Radahn, sino regeneración pasiva sostenida. Refleja la condición específica de su portadora: infectada por la Podredumbre Escarlata desde el nacimiento, regenerando contra la corrupción toda su vida.',
    deepLore: [
      h(2, 'Naturaleza del fragmento'),
      p(
        'La Gran Runa de Malenia es la runa de la regeneración continua. Su efecto —regeneración pasiva de salud mientras se porta— hace pública la facultad que su portadora ejerce internamente desde el nacimiento. ',
        link('Malenia', 'character', 'malenia'),
        ', Empyrean infectada por la ',
        link('Podredumbre Escarlata', 'concept', 'scarlet-rot'),
        ' por mandato del dios externo de la putrefacción, ha vivido toda su existencia regenerándose contra la corrupción interna. La runa generaliza ese mecanismo: lo que en su cuerpo es batalla teológica continua, en cualquier portador es simplemente curación pasiva.'
      ),
      h(2, 'Mecánica e interacción con la podredumbre'),
      p(
        'La runa no cura la infección — la sostiene. Malenia nunca ha estado libre de la podredumbre; lo que la runa permite es que su cuerpo regenere lo que la putrefacción consume sin estabilizarse jamás en la muerte. La Floración Escarlata sobre Caelid (Aeonia) ocurrió cuando Malenia, agotada por su batalla contra Radahn, dejó que la podredumbre operara plenamente — y el cuerpo runificado simplemente reverdeció en lugar de morir. La runa hizo posible que su cuerpo destrozado fuera vehículo de la primera floración cosmológica del dios externo. Tras Aeonia, Malenia regresa al ',
        link('Haligtree', 'region', 'haligtree'),
        ' donde, junto al capullo de ',
        link('Miquella', 'character', 'miquella'),
        ', sostiene una existencia indefinida que ni vive plenamente ni muere.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La runa documenta una doctrina: la resistencia no requiere victoria, solo continuidad. Malenia no derrota la podredumbre; convive con ella indefinidamente. La runa codifica esa modalidad existencial. Que sea regeneración pasiva (no combate ni esfuerzo) es coherente con el ethos del Haligtree: aceptar lo que el régimen oficial considera maldición y construir cosmología alternativa con ello. Cuando el Tarnished la derrota tras combate épico y hereda la runa, el efecto persiste: ahora cualquier cuerpo, sea cual sea su pacto cosmológico, regenera bajo la lógica de Malenia. La doctrina del aguante cosmológico se vuelve tecnología universal.'
      ),
    ],
    confirmed: [
      'La Gran Runa de Malenia regenera salud constantemente al portador',
      'Se restaura en la Torre Divina del Haligtree',
      'Malenia nació infectada por la Podredumbre Escarlata',
      'La Floración Escarlata sobre Caelid (Aeonia) fue la primera bloom completa',
    ],
    inferred: [
      'La regeneración runica permite que Malenia conviva con la podredumbre sin morir',
      'La runa hizo posible que Malenia fuera vehículo de Aeonia sin disolverse',
      'Tras Aeonia, Malenia mantiene existencia indefinida en Elphael',
    ],
    theories: [
      'La regeneración runica es exactamente el mecanismo que el dios externo necesita en su Empyrean',
      'Malenia podría haber muerto en cualquier momento si hubiera abandonado la runa',
      'La runa misma resiste el dios externo — sin ella, la podredumbre la habría consumido',
    ],
    ambiguous: [
      'Si Malenia "se rinde" a la podredumbre o si solo deja de luchar momentáneamente en Aeonia',
      'Si la runa se transmitirá al Tarnished con la marca de podredumbre activa',
      'Si Miquella, al despertar, podría haber curado a Malenia mediante el Oro sin Aleación',
    ],
    relatedCharacters: ['malenia', 'miquella', 'radahn', 'gowry', 'millicent'],
    relatedFactions: ['cleanrot-knights', 'haligtree', 'kindred-of-rot'],
    relatedRegions: ['haligtree', 'caelid', 'aeonia'],
    relatedConcepts: ['elden-ring', 'great-rune', 'scarlet-rot', 'outer-god-of-rot', 'unalloyed-gold'],
    relatedTimelineEvents: ['miquella-malenia', 'aeonia-bloom', 'la-fractura'],
  },

  'great-rune-of-the-unborn': {
    summary:
      'La única Gran Runa que no se equipa: se ofrece a Rennala en su altar y permite redistribuir todos los atributos del Tarnished. Codifica el principio del Renacimiento dominado por la reina de la Luna Llena. Su efecto técnico —respec del personaje— literaliza la facultad de "no haber nacido aún", de mantener abierto el espacio de quien se será.',
    deepLore: [
      h(2, 'Naturaleza del fragmento'),
      p(
        'La Gran Runa del No Nacido es estructuralmente distinta a las otras seis. Las demás runas se equipan tras la restauración en una Torre Divina; esta no. Se obtiene en la Academia de Raya Lucaria tras derrotar a ',
        link('Rennala', 'character', 'rennala'),
        ' en el Salón del Renacimiento, y se devuelve ritualmente a la propia Rennala en el mismo altar — donde su efecto se activa: la reina del ',
        link('Renacimiento', 'concept', 'rebirth'),
        ' redistribuye los atributos del Tarnished a voluntad del jugador. Es la runa que permite "deshacer" formación previa para reformular desde cero.'
      ),
      h(2, 'Origen y la doctrina del renacimiento'),
      p(
        'Rennala, Reina-Maestra de Raya Lucaria, dominó el Renacimiento como disciplina cosmológica antes de su matrimonio con ',
        link('Radagon', 'character', 'radagon'),
        '. Tras el abandono y el ',
        link('Huevo Ámbar', 'concept', 'one-great'),
        ', se retiró a un bucle ritual aislado donde practicó el Renacimiento sobre sí misma incontables veces. Su Gran Runa codifica la facultad refinada en esa práctica: no añade poder al portador, le devuelve la posibilidad de reescribirse. Es la única runa cuya función no está orientada al combate sino a la reconfiguración del ser.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La runa subvierte la economía de las otras seis. Donde Godrick amplifica, Radahn vitaliza, Morgott blinda, Mohg vincula, Rykard devora, Malenia regenera —todas modalidades de "más"—, Rennala "reabre". Es la runa de la posibilidad, no de la potencia. Filosóficamente esto la conecta con el final de la ',
        link('Era de las Estrellas', 'concept', 'age-of-stars'),
        ': la cosmología de ',
        link('Ranni', 'character', 'ranni'),
        ' —que su madre Rennala apoya tácitamente— es exactamente esta posibilidad de reescribir reglas. Donde el Anillo Elden codifica leyes fijas, la runa del No Nacido codifica la facultad de "todavía no estar fijado". Por esto puede integrarse a una cosmología post-Voluntad-Mayor: no añade un nuevo régimen, abre el espacio para que aparezca uno.'
      ),
    ],
    confirmed: [
      'La Gran Runa del No Nacido permite redistribuir atributos en el altar de Rennala',
      'Se obtiene tras derrotar a Rennala en el Salón del Renacimiento',
      'Es la única runa que no se equipa para efecto pasivo en combate',
      'Rennala es la Empyrean del Renacimiento por dominio de la disciplina',
    ],
    inferred: [
      'La runa codifica la facultad refinada por Rennala durante eras de auto-renacimiento',
      'Su función no es potencia sino reconfiguración',
      'Apoya filosóficamente la cosmología post-Voluntad-Mayor de Ranni',
    ],
    theories: [
      'Rennala diseñó la runa específicamente para permitir reescritura en el final Era de las Estrellas',
      'El Huevo Ámbar es el instrumento físico paralelo de la misma facultad',
      'Marika obtuvo conocimiento del Renacimiento de Rennala antes del exilio de Radagon',
    ],
    ambiguous: [
      'Si Rennala mantiene consciencia plena durante el ritual del altar',
      'Si la runa puede usarse fuera del altar de Raya Lucaria',
      'Si Ranni hereda la facultad cosmológica completa del Renacimiento',
    ],
    relatedCharacters: ['rennala', 'ranni', 'radagon', 'sellen'],
    relatedFactions: ['raya-lucaria', 'caria'],
    relatedRegions: ['raya-lucaria', 'liurnia'],
    relatedConcepts: ['elden-ring', 'great-rune', 'rebirth', 'full-moon', 'age-of-stars'],
    relatedTimelineEvents: ['radagon-rennala', 'radagon-abandono', 'rennala-quiebre'],
    relatedEndings: ['age-of-stars'],
  },

  /* ════════════════ Phase 11 — Armas legendarias ════════════════ */

  'bolt-of-gransax': {
    summary:
      'Lanza colosal del Antiguo Señor Dragón Gransax, clavada en la avenida principal de Leyndell como monumento permanente. La preserva el Orden Dorado como trofeo del intento dragón más célebre de invasión de la capital, expuesta deliberadamente.',
    deepLore: [
      h(2, 'El asalto de Gransax'),
      p(
        'Gransax fue uno de los Antiguos Señores Dragón del régimen anterior al Orden Dorado, junto a ',
        link('Placidusax', 'character', 'placidusax'),
        ' y otros del culto que precedía a Marika. Su asalto contra ',
        link('Leyndell', 'region', 'leyndell'),
        ' es el evento canónico que confirma que el Orden Dorado tuvo enemigos cosmológicamente serios capaces de amenazar la capital. La fecha exacta no está documentada, pero las descripciones lo sitúan post-fundación del Orden, sugiriendo que la guerra Dragones-vs-Árbol Áureo continuó incluso después del establecimiento del régimen dorado.'
      ),
      h(2, 'La política de la preservación'),
      p(
        'Que la lanza permanezca clavada —no destruida, no escondida, sino expuesta— es decisión política deliberada del régimen. El Orden Dorado cataloga a sus enemigos vencidos en lugar de borrarlos. La estrategia es triple: prueba de la conquista (la lanza visible documenta el evento), advertencia continua (recordatorio de la magnitud del enemigo derrotado), y cooptación cosmológica (el régimen retiene el poder dragontino del instrumento). Su funcionamiento residual —canaliza relámpago dragontino genuino— demuestra que la teología derrotada no se anuló sino que fue absorbida por el régimen vencedor.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La Lanza de Gransax es por tanto reliquia de doble lectura. Para el Orden Dorado: trofeo. Para los lectores del cosmos: evidencia de que el régimen Dragón fue real, poderoso y específicamente capaz de amenazar la capital. Su preservación literal-pública en la avenida central es declaración: este régimen vence sin temer a sus enemigos vencidos.'
      ),
    ],
    confirmed: [
      'Gransax fue Antiguo Señor Dragón del régimen anterior al Orden',
      'Su lanza está clavada permanentemente en Leyndell como monumento',
      'Conduce relámpago dragontino real, no es decoración inerte',
      'El Orden Dorado preserva en lugar de destruir trofeos cosmológicos',
    ],
    inferred: [
      'El asalto ocurrió post-fundación del Orden, no antes',
      'El régimen Dragón continuó operando contra Leyndell durante eras',
      'La Lanza preservada es propaganda continua del régimen victorioso',
    ],
    theories: [
      'Gransax fue líder de una facción dragón distinta a la de Placidusax',
      'Lansseax —dragón rojo Caelid— es relativa o sobreviviente del culto de Gransax',
      'La lanza fue dejada por orden personal de Marika para silenciar el conflicto',
    ],
    ambiguous: [
      'Si Gransax fue derrotado por Marika personalmente o por sus campeones',
      'Si el cuerpo de Gransax existe en algún sitio del mapa',
      'Por qué los dragones no recuperaron la lanza en cinco eras',
    ],
    relatedCharacters: ['gransax', 'placidusax', 'lansseax', 'marika', 'godfrey'],
    relatedFactions: ['dragones-antiguos', 'orden-dorado', 'leyndell-knights'],
    relatedRegions: ['leyndell', 'farum-azula'],
    relatedConcepts: ['vanished-dragon-god', 'golden-order'],
    relatedTimelineEvents: ['marika-godfrey', 'antes-orden-dorado'],
  },

  'sword-of-night-and-flame': {
    summary:
      'Reliquia Carian que fusiona hechicería glintstone lunar y llama primigenia en un solo instrumento. Hallada en la Mansión Caria, documenta la teología original de la dinastía antes de su integración con el Orden Dorado: fuego y luna como cosmología complementaria.',
    deepLore: [
      h(2, 'La síntesis Carian original'),
      p(
        'Antes de su integración matrimonial con el ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' mediante ',
        link('Radagon', 'character', 'radagon'),
        ', la dinastía ',
        link('Caria', 'faction', 'caria'),
        ' sostenía dos disciplinas simultáneas: la magia lunar de la ',
        link('Luna Llena', 'concept', 'full-moon'),
        ' (heredada del Vagabundo Astrólogo) y la llama ritual de las purificaciones tradicionales (no la Llama Negra deicida, sino llama Carian "limpiadora"). La Espada de Noche y Llama es la cristalización física de esa síntesis: un solo instrumento que invoca ambas disciplinas alternativamente. En la doctrina Carian original, fuego y luna no eran rivales sino complementarios.'
      ),
      h(2, 'Mecánica e implicación cosmológica'),
      p(
        'La espada permite invocar a voluntad dos hechizos cosmológicos cardinales: el rayo glintstone tipo Comet Azur (proyectil de luz lunar refinada) y la barrida Flame, Cleanse Me (llama purificadora). Que ambos coexistan en una sola hoja desmiente la doctrina ortodoxa del Orden Dorado de que magia y fe son disciplinas exclusivas. Para los Carians, eran herencia paralela. La espada documenta que el régimen Carian, cosmológicamente, era más sofisticado que el Orden lo reconoce: capaz de operar simultáneamente sobre dos principios que el régimen vencedor luego separó por motivos doctrinales.'
      ),
    ],
    confirmed: [
      'La espada se obtiene en la Mansión Caria',
      'Combina hechicería lunar y llama Carian en un solo instrumento',
      'Su Skill alterna entre proyectil glintstone y barrida de fuego',
      'Pertenece a la teología Carian pre-integración con el Orden',
    ],
    inferred: [
      'La síntesis fuego-luna era doctrina Carian original',
      'El Orden Dorado separó magia y fe por motivos doctrinales, no naturales',
      'Rennala podría usar ambas disciplinas si quisiera',
    ],
    theories: [
      'Pertenecía a Radagon antes de su salida hacia Leyndell',
      'Fue forjada por uno de los Caballeros Carian de la guardia personal de Rennala',
      'Su existencia fue motivo de censura específica por el Orden cuando integró Liurnia',
    ],
    ambiguous: [
      'Si la llama Carian es ontológicamente distinta a la Sagrada del Árbol Áureo',
      'Por qué Rennala no la portaba durante la guerra contra Radagon',
      'Si Ranni la conoce y la considera cosmológicamente significativa',
    ],
    relatedCharacters: ['rennala', 'ranni', 'radagon', 'blaidd'],
    relatedFactions: ['caria', 'carian-knights', 'raya-lucaria'],
    relatedRegions: ['liurnia', 'caria-manor', 'three-sisters'],
    relatedConcepts: ['full-moon', 'glintstone', 'dark-moon', 'golden-order'],
    relatedTimelineEvents: ['radagon-rennala'],
  },

  'helphens-steeple': {
    summary:
      'Espadón coronado por Llama Fantasma, reliquia activa de los ritos funerarios pre-Orden. Custodiado en el cementerio de los Gigantes en las Cumbres. Es uno de los pocos instrumentos vivos del régimen anterior a la Muerte Predestinada sellada.',
    deepLore: [
      h(2, 'La teología deatica anterior'),
      p(
        'Antes del sellado de la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ' por Marika, las civilizaciones del norte —en particular los ',
        link('Gigantes del Fuego', 'faction', 'fire-giants'),
        ' y los pueblos vinculados a la ',
        link('Reina de Ojos Crepusculares', 'character', 'gloam-eyed-queen'),
        '— administraban la muerte mediante ',
        link('Llama Fantasma', 'concept', 'ghostflame'),
        ': fuego azul-frío de duelo cosmológico. La liturgia Helphen era refinamiento monástico de esta tradición — Helphen como dwelling-place ritual, cementerio sagrado donde los duelos se procesaban en ceremonia colectiva de varios días.'
      ),
      h(2, 'La Aguja como instrumento sobreviviente'),
      p(
        'Que la Aguja conserve la Llama Fantasma activa —no como decoración sino como mecánica funcional— documenta una verdad incómoda para el Orden Dorado: la teología deatica pre-sello no se extinguió, fue forzada a permanecer dormida. El sellado de la Muerte Predestinada por Marika no eliminó la Llama Fantasma, simplemente la marginalizó. Su retorno al inventario del Tarnished durante los eventos del juego base coincide con el ascenso de ',
        link('Aquellos que Viven en la Muerte', 'concept', 'those-who-live-in-death'),
        ' y el debilitamiento del sello: la Muerte está filtrándose de regreso, y los instrumentos de su antigua administración recuperan función.'
      ),
    ],
    confirmed: [
      'La espada conserva Llama Fantasma activa, no decorativa',
      'Está custodiada en el cementerio de los Gigantes en las Cumbres',
      'Helphen es término de la teología deatica pre-Orden',
      'La Llama Fantasma fue sellada junto a la Muerte Predestinada',
    ],
    inferred: [
      'La Aguja es instrumento monástico, no marcial Gigante',
      'Su existencia documenta liturgias funerarias avanzadas pre-Orden',
      'Su retorno funcional refleja el debilitamiento del sello deatico',
    ],
    theories: [
      'Pertenecía a un sacerdote-monje del culto Helphen muerto durante el genocidio Gigante',
      'Maliketh la conoce y la considera reliquia que debió haber sido destruida',
      'El cementerio Gigante fue dejado intacto para preservar específicamente esta espada',
    ],
    ambiguous: [
      'Si la Llama Fantasma de la Aguja es la misma teología que la de los Deathbirds',
      'Por qué los Gigantes preservaron Helphen después del genocidio',
      'Si Fia conoce su existencia y la considera relevante para su quest',
    ],
    relatedCharacters: ['fia', 'godwyn', 'maliketh', 'gloam-eyed-queen', 'fire-giant'],
    relatedFactions: ['fire-giants', 'cuchillos-negros', 'deathbirds'],
    relatedRegions: ['mountaintops', 'consecrated-snowfield'],
    relatedConcepts: ['ghostflame', 'destined-death', 'rune-of-death', 'those-who-live-in-death'],
    relatedTimelineEvents: ['muerte-predestinada', 'antes-orden-dorado'],
  },

  'eclipse-shotel': {
    summary:
      'Sable curvo Carian portador del símbolo del Eclipse de Sangre. Hallada en lo alto de la capilla de Castle Sol. Reliquia del culto perdido del eclipse — ritual cosmológico que alineaba la Luna Oscura con la luz del Árbol Áureo para producir paridad teológica momentánea.',
    deepLore: [
      h(2, 'El ritual del Eclipse'),
      p(
        'El Eclipse Carian fue rito cosmológico que alineaba la ',
        link('Luna Oscura', 'concept', 'dark-moon'),
        ' con la luz del Árbol Áureo mediante ofrenda sanguinaria. Durante el momento de alineación, ambas cosmologías —la del régimen oficial dorado y la cosmología lunar Carian— coexistían sin contradicción durante un breve lapso. La doctrina del Eclipse implícitamente equiparaba la Luna Oscura con el Árbol Áureo, herejía que el ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' no podía tolerar. El culto fue prohibido, sus practicantes —los Caballeros del Eclipse— erradicados o exiliados.'
      ),
      h(2, 'Castle Sol como fortaleza'),
      p(
        'Castle Sol custodiaba el Eclipse como ritual sagrado y bloqueaba el paso al ',
        link('Haligtree', 'region', 'haligtree'),
        ' por encargo del régimen Carian original. Tras la represión del culto, Castle Sol cayó en un estado de muerte ritual permanente —los Caballeros del Eclipse murieron donde se encontraban, el castillo congelado en la nieve consagrada. El Shotel del Eclipse, único instrumento ritual sobreviviente, fue dejado en lo alto de la capilla central como ofrenda final. Su filo provoca hemorragia con cada golpe (la doctrina del Eclipse era explícitamente sanguinaria — alineaba sangre con luna). Es el único instrumento Carian conocido donde la teología expresa su lado deicida en lugar de su lado lunar puro.'
      ),
    ],
    confirmed: [
      'El Shotel del Eclipse fue hallado en lo alto de la capilla de Castle Sol',
      'Provoca hemorragia con cada golpe',
      'Castle Sol guardaba el Haligtree y custodiaba el ritual del Eclipse',
      'El culto fue erradicado por el Orden Dorado',
    ],
    inferred: [
      'El Eclipse alineaba Luna Oscura con luz del Árbol Áureo mediante sangre',
      'La doctrina equiparaba Luna Oscura con Árbol Áureo — herejía cosmológica',
      'Castle Sol está congelado en muerte ritual permanente',
    ],
    theories: [
      'El Eclipse permitiría a un Empyrean Carian transitar entre cosmologías',
      'Miquella conocía el Eclipse y planeaba usarlo en alguna ruta no realizada',
      'Ranni hereda implícitamente la doctrina del Eclipse en el final Era de las Estrellas',
    ],
    ambiguous: [
      'Si el Eclipse era ritual periódico o evento único',
      'Si Castle Sol fue erradicado o se autoselló',
      'Si los Caballeros del Eclipse podían operar el ritual sin Empyrean',
    ],
    relatedCharacters: ['ranni', 'rennala', 'miquella'],
    relatedFactions: ['caria', 'carian-knights', 'mausoleum-knights'],
    relatedRegions: ['consecrated-snowfield', 'haligtree'],
    relatedConcepts: ['dark-moon', 'full-moon', 'golden-order', 'age-of-stars'],
    relatedTimelineEvents: ['ranni-noche-cuchillos'],
    relatedEndings: ['age-of-stars'],
  },

  'devourers-scepter': {
    summary:
      'Cetro ritual del culto devorador, instrumento de la doctrina del Volcano Manor llevado por Bernahl. Canaliza fuego negro como devolución del aliento del enemigo al portador. Reliquia personal de los Recusantes superiores.',
    deepLore: [
      h(2, 'Doctrina y mecánica'),
      p(
        'El Cetro del Devorador es instrumento ritual de la teología del ',
        link('Volcano Manor', 'faction', 'volcano-manor'),
        ': matar es comulgar, devorar es legitimarse. Su mecánica de combate —canaliza fuego negro extractor de almas que regresa como nutrición al portador— literaliza el mismo principio que la ',
        link('Gran Runa de Rykard', 'concept', 'rykards-great-rune'),
        ' codifica abstractamente. Que sea cetro y no espada es deliberado: cetro es instrumento sacerdotal, no marcial. Su portador no caza por venganza ni gloria sino como acto litúrgico.'
      ),
      h(2, 'Bernahl y la transición'),
      p(
        link('Bernahl', 'character', 'bernahl'),
        ', primer Caballero de la Caza Negra y figura de la Mesa Redonda, lo carga como insignia de su nueva alianza con el Volcano Manor tras desertar del Orden Dorado. Que un caballero originalmente cazador de blasfemos termine portando precisamente la reliquia de los blasfemos documenta la conversión completa: la doctrina devoradora aceptó al cazador convirtiéndolo en cazador de un orden rival. El cetro sirve ambos lados según el portador: instrumento de caza de blasfemos en manos del Orden, instrumento de caza de Tarnished en manos blasfemas. Tras la fragmentación final de Bernahl en Crumbling Farum Azula, el cetro queda disponible para el Tarnished como herencia de la doctrina blasfema completa.'
      ),
    ],
    confirmed: [
      'Drop de Bernahl en Crumbling Farum Azula',
      'Canaliza fuego negro extractor de almas',
      'Restaura salud al portador al impactar',
      'Bernahl fue Caballero de la Caza Negra antes de unirse al Volcano Manor',
    ],
    inferred: [
      'El cetro pertenece originalmente al sacerdocio del Volcano Manor, no a Bernahl',
      'Su mecánica replica la doctrina runica de Rykard',
      'Tanith probablemente lo entregó a Bernahl como sello de iniciación',
    ],
    theories: [
      'El cetro fue forjado de un fragmento de la serpiente-dios Eiglay',
      'Existió un sacerdote del Volcano Manor anterior a Bernahl que lo portaba',
      'Su uso continuado convierte gradualmente al portador en parte del culto',
    ],
    ambiguous: [
      'Si el cetro fue creado antes o después de la fusión de Rykard con Eiglay',
      'Por qué Bernahl lo lleva consigo a Crumbling Farum Azula en lugar de devolverlo',
      'Si el Tarnished puede usarlo sin convertirse cosmológicamente al culto',
    ],
    relatedCharacters: ['bernahl', 'rykard', 'tanith', 'patches'],
    relatedFactions: ['volcano-manor', 'pieles-de-dios', 'fundamentalistas'],
    relatedRegions: ['mt-gelmir', 'farum-azula'],
    relatedConcepts: ['rykards-great-rune', 'serpent-god-eiglay', 'recusant-hunters', 'black-flame'],
    relatedTimelineEvents: ['rykard-blasphemy'],
  },

  'ruins-greatsword': {
    summary:
      'Espadón colosal forjado del fragmento de un meteorito antiguo caído sobre las Tierras Intermedias. Su Skill, Wave of Destruction, libera la energía cosmológica del meteoro original. Drop del Cruzado Misbegotten en Castle Redmane.',
    deepLore: [
      h(2, 'Origen meteórico'),
      p(
        'El Espadón de las Ruinas documenta uno de los varios eventos cosmológicos meteóricos del juego base. La descripción del ítem se refiere a "el meteorito que cayó hace mucho tiempo" sin especificar cuál. Las posibilidades canónicas son dos: el meteorito de ',
        link('Caelid', 'region', 'caelid'),
        ' que trajo a ',
        link('Astel', 'character', 'astel'),
        ' y la ',
        link('Estrella Putrefacta', 'concept', 'outer-god-of-rot'),
        ', o uno anterior asociado a la formación misma del cosmos de las Tierras Intermedias. La hipótesis comunitaria mayoritaria es el primero: la masa pétrea del Espadón está anímicamente vinculada a la cosmología malformada que Astel encarna. Su Skill —una onda destructora— invoca la fuerza cinética original del impacto.'
      ),
      h(2, 'El portador Misbegotten'),
      p(
        'Que el portador habitual sea un ',
        link('Cruzado Misbegotten', 'faction', 'misbegotten'),
        ' refuerza esta interpretación. Los Misbegotten son cuerpos forjados del Crisol, marginalizados por el Orden Dorado por su forma híbrida. El espadón les conviene cosmológicamente porque ambos pertenecen a versiones del cosmos que el régimen oficial no asimila: el Crisol pre-Orden y el meteorito malformado externo. Es alianza entre marginalizados —el rechazado de adentro porta el rechazado de afuera. Su uso en Castle Redmane documenta que los Redmanes utilizaban a los Misbegotten como brazo armado pesado, herencia de una era donde el Crisol y los cuerpos meteóricos se integraban en operaciones militares.'
      ),
    ],
    confirmed: [
      'Drop del Cruzado Misbegotten en Castle Redmane',
      'Su descripción menciona origen meteórico antiguo',
      'Su Skill libera onda destructora cosmológica',
      'Es uno de los espadones más pesados del juego base',
    ],
    inferred: [
      'Está vinculado al meteorito de Caelid asociado a Astel',
      'Los Misbegotten lo portan por afinidad cosmológica con lo marginal',
      'Los Redmanes usaron Misbegotten armados con él en operaciones pesadas',
    ],
    theories: [
      'Existe un segundo Espadón de las Ruinas perdido en otro sitio del mapa',
      'El meteorito original era cuerpo de un dios externo cuyo nombre no se documenta',
      'Astel no es el único nacido del meteorito — el espadón es otra "extracción" del mismo cuerpo',
    ],
    ambiguous: [
      'Cuál meteorito específico es la fuente — Astel o uno anterior',
      'Si el Espadón fue forjado por humanos o si emergió tallado del meteorito',
      'Por qué el Cruzado Misbegotten lo porta y no un Misbegotten ordinario',
    ],
    relatedCharacters: ['astel', 'radahn'],
    relatedFactions: ['misbegotten', 'redmanes', 'malformed-stars'],
    relatedRegions: ['caelid', 'redmane-castle'],
    relatedConcepts: ['outer-god-of-rot', 'crucible'],
    relatedTimelineEvents: ['astel-castigo'],
  },

  'marais-executioners-sword': {
    summary:
      'Espada-corte de la familia Marais, ejecutores silenciosos del Orden Dorado. Su hoja extrae el alma del enemigo en un solo golpe. Drop de Elemer del Zarzal en Castillo Umbrío.',
    deepLore: [
      h(2, 'La familia Marais'),
      p(
        'Los Marais fueron linaje noble de ejecutores oficiales del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ', encargados de aplicar pena cosmológica sin revelar identidades. Operaban como sacerdocio ejecutor: cuando alguien era condenado por blasfemia o por crímenes contra el régimen, un Marais aplicaba la sentencia mediante este corte único definitivo. La doctrina exigía que la espada extrajera el alma sin combate prolongado —cualquier resistencia exitosa habría sugerido legitimidad cosmológica del condenado, posibilidad que el Orden no podía permitir.'
      ),
      h(2, 'Elemer del Zarzal'),
      p(
        'Tras la decadencia post-Fractura, la espada cayó en posesión de Elemer del Zarzal, un Briar Knight (caballero del zarzal) que usurpó el ',
        link('Castillo Umbrío', 'region', 'altus-plateau'),
        ' y por extensión la espada-reliquia. Elemer la porta sin la legitimidad sacerdotal Marais; su uso es marcial puro, no litúrgico. Esto documenta el colapso del orden ritual de los ejecutores oficiales tras la Fractura: los instrumentos sagrados pasan a manos arbitrarias y conservan su función letal pero pierden su legitimidad teológica. Tanith del Volcano Manor envía al Tarnished a recuperarla como acto simbólico: el Volcano Manor reclama instrumentos del régimen oficial caídos en manos arbitrarias y los reincorpora a su propio sacerdocio devorador.'
      ),
    ],
    confirmed: [
      'Drop de Elemer del Zarzal en Castillo Umbrío',
      'Su Skill extrae el alma del enemigo de un solo golpe',
      'Los Marais fueron linaje de ejecutores oficiales del Orden',
      'Tanith del Volcano Manor encarga su recuperación al Tarnished',
    ],
    inferred: [
      'Elemer la usurpó tras la Fractura, no la heredó legítimamente',
      'La espada conserva función pero pierde legitimidad litúrgica',
      'Su recuperación por el Volcano Manor es reapropiación ritual',
    ],
    theories: [
      'Los Marais fueron exterminados o cayeron en desgracia tras la Fractura',
      'La espada tiene una contraparte gemela perdida en otra región',
      'El alma extraída se almacena residualmente en la hoja, acumulando poder',
    ],
    ambiguous: [
      'Cómo Elemer obtuvo la espada inicialmente',
      'Si los Marais sobreviven en alguna forma residual',
      'Por qué Tanith específicamente la quiere y no otras reliquias',
    ],
    relatedCharacters: ['elemer-of-briar', 'tanith', 'rya'],
    relatedFactions: ['volcano-manor', 'fundamentalistas', 'leyndell-knights'],
    relatedRegions: ['altus-plateau'],
    relatedConcepts: ['golden-order', 'rykards-great-rune'],
    relatedTimelineEvents: ['la-fractura', 'rykard-blasphemy'],
  },

  'marikas-hammer': {
    summary:
      'El martillo sagrado de la Reina Marika — el instrumento físico exacto con el que rompió el Anillo Elden tras la Noche de los Cuchillos Negros. Drop de un Avatar del Árbol Áureo en Crumbling Farum Azula. Su Skill libera onda dorada de destrucción ritual.',
    deepLore: [
      h(2, 'El instrumento de la Fractura'),
      p(
        'El Martillo de Marika es la reliquia más cosmológicamente cargada del juego base: es el instrumento físico exacto del acto fundacional de la Era de la Fractura. ',
        link('Marika', 'character', 'marika'),
        ', según testifican fragmentos cinemáticos y descripciones de ítems, golpeó el ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        ' con este martillo, fragmentando simultáneamente las leyes del cosmos. Que sobreviva como objeto material es ya inquietante —¿cómo se preserva el instrumento de un acto que destruyó el orden cósmico?'
      ),
      h(2, 'Custodia del martillo'),
      p(
        'La hipótesis comunitaria mayoritaria es que los ',
        link('Avatares del Árbol Áureo', 'faction', 'erdtree-burial-watchdog'),
        ' —guardianes minor del régimen, vinculados directamente al árbol— recuperaron el martillo tras la Fractura y lo conservan ritualmente. Que el portador final sea uno de estos Avatares en ',
        link('Crumbling Farum Azula', 'region', 'farum-azula'),
        ' (la fortaleza fuera del tiempo) sugiere que el martillo opera ahora en estado litúrgico permanente: no se usa, se vigila. Crumbling Farum Azula es escenario apropiado por estar fuera del flujo temporal de las Tierras Intermedias —el martillo allí está temporalmente protegido, no accesible mediante el viaje ordinario.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Que el Tarnished lo recupere documenta una sucesión cosmológica: la herramienta de la Fractura pasa al individuo capaz de cerrar el ciclo —para reparar, romper de nuevo, o redirigir según el final que persiga. La presencia del martillo en el inventario del Tarnished es tipo afirmación ritual: el portador ya tiene la capacidad operativa de repetir el gesto de Marika. Si elige el final del Orden, esto no se ejerce. Si elige Era de las Estrellas o Llama Frenética, el martillo es ya prefigura del nuevo gesto fracturador. Pocos ítems del juego base cargan tanta densidad teológica como este, y muchos jugadores nunca lo encuentran porque su localización en Crumbling Farum Azula es opcional.'
      ),
    ],
    confirmed: [
      'Drop de un Avatar del Árbol Áureo en Crumbling Farum Azula',
      'Es el instrumento físico exacto con el que Marika rompió el Anillo Elden',
      'Su Skill libera onda dorada de destrucción ritual',
      'Los Avatares del Árbol Áureo son guardianes vinculados al árbol',
    ],
    inferred: [
      'Los Avatares lo recuperaron tras la Fractura como custodios póstumos',
      'Crumbling Farum Azula lo protege fuera del flujo temporal ordinario',
      'Su recuperación por el Tarnished prefigura los finales fracturadores',
    ],
    theories: [
      'Marika lo dejó deliberadamente accesible para un Tarnished futuro',
      'El martillo conserva fragmento residual de la voluntad de Marika',
      'Su uso por alguien sin runificación no fragmentaría nada — solo Marika podía',
    ],
    ambiguous: [
      'Cómo llegó el martillo a Crumbling Farum Azula desde Leyndell',
      'Si los Avatares saben qué es lo que custodian o solo siguen instrucciones',
      'Por qué Maliketh, también en Farum Azula, no lo custodia personalmente',
    ],
    relatedCharacters: ['marika', 'maliketh', 'godwyn', 'placidusax'],
    relatedFactions: ['erdtree-burial-watchdog', 'fundamentalistas'],
    relatedRegions: ['farum-azula', 'leyndell'],
    relatedConcepts: ['elden-ring', 'erdtree', 'destined-death', 'rune-of-death'],
    relatedTimelineEvents: ['la-fractura', 'ranni-noche-cuchillos'],
  },

  /* ════════════════ Phase 12 — Cenizas espirituales ════════════════ */

  'black-knife-tiche': {
    summary:
      'Tiche es la ceniza espiritual más poderosa del juego base. Hija de Alecto la Cabecilla del Cuchillo Negro y una de las asesinas Numen-sangre originales de la Noche de los Cuchillos Negros. Su ceniza conserva la técnica del corte que extrae el alma sin destruir el cuerpo —exactamente la usada sobre Godwyn.',
    deepLore: [
      h(2, 'Linaje del culto'),
      p(
        'El culto del Cuchillo Negro fue conformado por mujeres ',
        link('Numen', 'concept', 'numen'),
        ' fieles a ',
        link('Ranni', 'character', 'ranni'),
        ' durante la conjura de la ',
        link('Noche de los Cuchillos Negros', 'timeline', 'ranni-noche-cuchillos'),
        '. Su líder original, ',
        link('Alecto', 'character', 'alecto-black-knife'),
        ' (ahora encerrada en evergaol cosmológico bajo el Altar Lunar tras el colapso del culto), fue madre o mentora de Tiche —la cuál mantiene tanto el linaje genético como la técnica ritual del culto. Que Tiche persista como ceniza espiritual en lugar de captura o muerte ordinaria sugiere muerte sagrada en combate ritual, condición que preserva la facultad técnica para invocaciones futuras.'
      ),
      h(2, 'La técnica preservada'),
      p(
        'La técnica del Cuchillo Negro es corte ritual que separa el aspecto Empyrean del alma del cuerpo objetivo, mientras el cuerpo permanece técnicamente vivo (o más exactamente: condenado a una pseudo-muerte que no encaja en el ciclo Árbol Áureo-renacimiento). Es la técnica que ',
        link('Maliketh', 'character', 'maliketh'),
        ' debió haber custodiado y que ',
        link('Ranni', 'character', 'ranni'),
        ' robó —forjando los cuchillos. Tiche conserva la técnica activa en su ceniza: cada vez que se invoca y mata enemigos endgame, el principio del Cuchillo Negro se reactiva en las Tierras Intermedias presente. Es la única ceniza del juego cuya técnica conserva resonancia política, no solo combatiente.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Que Tiche sea la ceniza más poderosa del juego —comprobadamente capaz de derrotar enemigos endgame por sí sola— refleja la sofisticación letal del culto Numen-Cuchillo Negro. Su existencia documenta una verdad cosmológica incómoda: la conspiración que mató a ',
        link('Godwyn', 'character', 'godwyn'),
        ' no se extinguió cuando se castigó al culto. Persiste en sus reliquias activas. El Tarnished que la invoca participa, sin necesariamente saberlo, en la perpetuación de la teología deicida del Cuchillo Negro.'
      ),
    ],
    confirmed: [
      'Tiche es ceniza espiritual encontrada en el Ringleader\'s Evergaol del Altar Lunar',
      'Es hija o aprendiz de Alecto, la Cabecilla del Cuchillo Negro',
      'Su ataque conserva la firma técnica del Cuchillo Negro',
      'Es una de las cenizas más poderosas del juego base',
    ],
    inferred: [
      'Tiche participó en la Noche de los Cuchillos Negros junto a Alecto',
      'Su ceniza preserva la técnica deicida activa, no solo el combate',
      'El Tarnished invocándola perpetúa el culto sin saberlo',
    ],
    theories: [
      'Tiche fue ejecutada ritualmente por Maliketh o un agente del Orden tras la captura',
      'Su sangre Numen es necesaria para que la técnica funcione contra demidioses',
      'Existe un culto reducido contemporáneo que aún reverencia su ceniza',
    ],
    ambiguous: [
      'Si Alecto, encerrada en evergaol, sabe que Tiche persiste como ceniza',
      'Si Ranni puede invocarla cosmológicamente o si solo el Tarnished tiene acceso',
      'Cuántas otras del culto persisten en cenizas no descubiertas',
    ],
    relatedCharacters: ['alecto-black-knife', 'ranni', 'godwyn', 'maliketh', 'fia'],
    relatedFactions: ['cuchillos-negros'],
    relatedRegions: ['liurnia', 'three-sisters'],
    relatedConcepts: ['numen', 'destined-death', 'rune-of-death', 'shadow-bound-beast'],
    relatedTimelineEvents: ['ranni-noche-cuchillos', 'godwyn-corruption-spread'],
    relatedEndings: ['age-of-stars'],
  },

  'lhutel-the-headless': {
    summary:
      'Caballera juramentada al linaje monárquico depuesto de la Ciudad Eterna Nokstella. Decapitada en combate, su voto persiste en la ceniza incluso sin línea real viva que defender. Encarna el luto cosmológico Nox: lealtad más allá de la muerte, fidelidad a un futuro imposible.',
    deepLore: [
      h(2, 'La caída de Nokstella'),
      p(
        'Tras el ',
        link('castigo de Astel', 'timeline', 'astel-castigo'),
        ' que destruyó la Ciudad Eterna Nokron, los sobrevivientes ',
        link('Nox', 'faction', 'nox'),
        ' fundaron Nokstella como ciudad-refugio. La línea monárquica Numen continuó allí en condiciones cada vez más precarias. Lhutel pertenecía a la guardia personal de los últimos monarcas, jurada a defenderlos hasta la muerte. Su decapitación en combate —estado en el que aparece como ceniza— sugiere derrota humillante por una ofensiva del Orden Dorado o por uno de los movimientos tardíos contra los restos Nox.'
      ),
      h(2, 'La doctrina del voto persistente'),
      p(
        'Que el voto de Lhutel persista incluso decapitada y aún sin línea real viva es testimonio puro de la doctrina Nox: la lealtad cosmológica opera más allá de la muerte y más allá de la viabilidad política. Para los Eternos, jurar es contrato con el cosmos, no con la persona viva del monarca. Lhutel, al ser invocada como ceniza, defiende a quien la invoque con la misma fidelidad ritual que tendría hacia su monarca legítimo. La ironía cosmológica es que el Tarnished que la invoca recibe el beneficio de un voto que no le corresponde —pero que opera porque el sistema Nox no distingue persona, solo función.'
      ),
      h(2, 'Mecánica e implicación'),
      p(
        'Su técnica —teleporte breve, golpes de espadón, resistencia notable— refleja entrenamiento de élite del régimen Eterno antes de la caída. Es ceniza intermedia en poder, accesible temprano en el juego (Tombsward Catacombs, Weeping Peninsula), lo que permite al Tarnished comprender la doctrina Nox antes de explorar Nokstella misma. Es introducción narrativa a la civilización subterránea: incluso sus caballeros menores conservan la disciplina ritual.'
      ),
    ],
    confirmed: [
      'Lhutel es ceniza espiritual encontrada en Tombsward Catacombs (Weeping Peninsula)',
      'Era caballera de la Ciudad Eterna Nokstella',
      'Estaba jurada a un linaje monárquico depuesto',
      'Su técnica incluye teleporte breve y golpes de espadón',
    ],
    inferred: [
      'Murió decapitada en combate por una ofensiva externa',
      'Su voto persiste por doctrina Nox, no por presencia del monarca',
      'Es introducción narrativa a la teología de la Ciudad Eterna',
    ],
    theories: [
      'El monarca al que Lhutel servía era ancestro lejano de Ranni',
      'Su decapitación fue parte de la represión del culto Eterno por el Orden Dorado',
      'Existe una segunda Lhutel —su gemela— en alguna catacumba no descubierta',
    ],
    ambiguous: [
      'Si Lhutel sabía que defendía a un linaje sin futuro',
      'Por qué Tombsward específicamente custodia su ceniza',
      'Si Ranni podría reclamarla como herencia política Nox',
    ],
    relatedCharacters: ['ranni', 'astel'],
    relatedFactions: ['nox'],
    relatedRegions: ['nokstella', 'nokron', 'peninsula-llorosa'],
    relatedConcepts: ['numen', 'uhl-civilization', 'age-of-stars'],
    relatedTimelineEvents: ['astel-castigo'],
  },

  'banished-knight-oleg': {
    summary:
      'Caballero Desterrado original jurado al Storm-Hawk King antes de la conquista de las tierras de la tormenta por Godfrey. Su ceniza conserva la disciplina marcial del régimen pre-Orden, anterior a la asimilación que produjo a los Banished Knights tardíos.',
    deepLore: [
      h(2, 'La generación original'),
      p(
        'Oleg pertenece a la generación inicial de los ',
        link('Caballeros Desterrados', 'faction', 'banished-knights'),
        ' —los jurados al Storm-Hawk King de las tierras de la tormenta antes de su conquista por ',
        link('Godfrey', 'character', 'godfrey'),
        '. Tras la caída del régimen Storm-Hawk, los caballeros sobrevivientes fueron literalmente desterrados de la corte (de ahí el epíteto), y su orden marcial pasó por sucesivas reabsorciones: primero los caballeros Stormveil bajo Godfrey, luego eventualmente bajo ',
        link('Godrick', 'character', 'godrick'),
        ' el Injertado tras la Fractura.'
      ),
      h(2, 'La disciplina conservada'),
      p(
        'Que Oleg sea ceniza —no caballero vivo— sugiere que pertenece al primer destierro, anterior al colapso completo del orden Storm-Hawk. Su técnica de combate documenta la marcial pre-Orden: golpes pesados de espadón, resistencia obstinada, sin floritura. Es la disciplina que precedió a la elegancia decadente Godrick. Su poder mecánico —daño físico alto, vida considerable, escudo eficaz— refleja el entrenamiento del régimen anterior, mantenido intacto en la ceniza incluso después de generaciones de cambio dinástico arriba.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Encontrar su ceniza temprano (cofre en Stormhill, frecuentemente la primera ceniza poderosa que el Tarnished obtiene) es coherente narrativamente: el régimen pre-Orden entrena al Tarnished antes de que el régimen actual (Godrick) lo enfrente. Es ironía cosmológica de las Tierras Intermedias: los regímenes vencidos preservan competencia residual que los regímenes vencedores degradaron. Si Nepheli Loux (descendiente del Storm-Hawk King) reclama eventualmente Stormveil, la disciplina de Oleg le pertenece por linaje.'
      ),
    ],
    confirmed: [
      'Oleg es ceniza espiritual encontrada en Stormhill',
      'Pertenece a la generación original de Caballeros Desterrados',
      'Su técnica refleja el régimen Storm-Hawk pre-Orden',
      'Es comúnmente la primera ceniza fuerte del Tarnished',
    ],
    inferred: [
      'Su muerte ocurrió en el primer destierro post-conquista de Godfrey',
      'Conserva técnica marcial intacta del régimen vencido',
      'Si Nepheli reclama Stormveil, Oleg le pertenece por linaje legítimo',
    ],
    theories: [
      'Oleg fue compañero personal del último Storm-Hawk King vivo',
      'Su decisión de aceptar el destierro fue voluntaria, no impuesta',
      'Existe documentación residual sobre su nombre en Stormveil (no descubierta)',
    ],
    ambiguous: [
      'Cuántas generaciones de Banished Knights existieron entre Oleg y los actuales',
      'Si Godrick reconoce el origen Storm-Hawk de la disciplina que sus caballeros usan',
      'Si la ceniza permite invocaciones múltiples de "el mismo" Oleg',
    ],
    relatedCharacters: ['nepheli-loux', 'godrick', 'godfrey', 'kenneth-haight'],
    relatedFactions: ['banished-knights'],
    relatedRegions: ['stormveil', 'limgrave'],
    relatedConcepts: ['storm-lord'],
    relatedTimelineEvents: ['marika-godfrey'],
  },

  /* ════════════════ Phase 13 — Sacramentos físicos ════════════════ */

  'stake-of-marika': {
    summary:
      'Cruces de madera consagrada repartidas por todas las Tierras Intermedias, ofrecidas personalmente por Marika como sacramento de retorno inmediato. Cuando el Tarnished muere cerca de una, renace allí en lugar del último Sitio de Gracia. Son las marcas físicas más íntimas de la presencia continua de Marika sobre el mundo.',
    deepLore: [
      h(2, 'Naturaleza del sacramento'),
      p(
        'Las Estacas de Marika son sacramentos territoriales —pequeños actos rituales de la propia ',
        link('Marika', 'character', 'marika'),
        ' dispersos por el mapa donde la dificultad cosmológica era anticipable: afueras de fortalezas mayores, antes de jefes opcionales, bordes de regiones peligrosas. El acto ritual consiste en grabar su sigilo personal en madera y plantarla; el efecto sobre el cosmos es que cualquier portador de ',
        link('gracia', 'concept', 'grace'),
        ' que muera dentro del radio de la estaca regresa allí en lugar del Sitio de Gracia más reciente.'
      ),
      h(2, 'La doctrina del cuidado'),
      p(
        'Las estacas no operan por magia distante o automatismo doctrinal — son contrato directo con Marika misma. Que el sistema siga funcionando aunque Marika ya no actúa políticamente revela que el sacramento opera por consagración pasada, no por presencia activa. Una vez plantada, la estaca trabaja por sí sola hasta su descomposición física eventual. Esto documenta una dimensión ',
        em('íntima'),
        ' de Marika que las cinemáticas mayores no muestran: fue protectora micro-territorial del Tarnished, no solo arquitecta cosmológica abstracta. Su existencia desmiente la interpretación cínica de Marika como dictadora distante; el sacramento exige que ella misma anticipara el peregrinaje de los Tarnished y plantara, mano a mano, los puntos de regreso.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Filosóficamente, las estacas son la contraparte cariñosa de la Fractura. El mismo cuerpo que rompió el Anillo Elden plantó manualmente estos sacramentos para los que volverían tras el quiebre. Documenta una continuidad ética en Marika que los textos mayores oscurecen: ella sabía que la Fractura traería violencia masiva, y dispuso —antes o durante— el mecanismo de recuperación inmediata para sus peregrinos. La estaca dice lo que Marika no dice en cinemática: ',
        em('todavía me importan'),
        '. Aunque cosmológicamente esté capturada en el ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ', su sacramento residual sigue cuidando.'
      ),
    ],
    confirmed: [
      'Las Estacas de Marika son cruces de madera distribuidas por el mapa',
      'El Tarnished que muere cerca renace en la estaca, no en el Sitio de Gracia',
      'Operan por consagración pasada de la propia Marika',
      'Su efecto persiste aunque Marika ya no actúa políticamente',
    ],
    inferred: [
      'Marika anticipó el peregrinaje del Tarnished y dispuso los puntos de regreso',
      'La estaca documenta una dimensión íntima/protectora de Marika',
      'El sacramento se descompondrá físicamente con tiempo suficiente',
    ],
    theories: [
      'Marika plantó las estacas mano a mano antes de la Fractura',
      'Existen estacas no-funcionales cuya consagración ya se diluyó',
      'Otros Empyreans podrían plantar estacas equivalentes (Ranni con su propio sigilo)',
    ],
    ambiguous: [
      'Si Marika plantó las estacas antes, durante o después del sello de la Muerte Predestinada',
      'Por qué algunas regiones peligrosas no tienen estaca cercana',
      'Si las estacas se autoreparan o si solo operan hasta descomposición física',
    ],
    relatedCharacters: ['marika', 'melina'],
    relatedFactions: ['fundamentalistas', 'orden-dorado'],
    relatedRegions: ['leyndell', 'limgrave'],
    relatedConcepts: ['grace', 'erdtree', 'tarnished', 'golden-order'],
    relatedTimelineEvents: ['exilio-godfrey', 'la-fractura', 'viaje-mancillado'],
  },

  /* ════════════════ Phase 14 — Reliquias remembrance + conceptos ════════════════ */

  'blasphemous-blade': {
    summary:
      'La Hoja Blasfema es el instrumento más explícitamente blasfemo del juego base. Empuñadura serpentina (Eiglay estilizado), hoja con Llama Negra, mecánica que restaura salud al impactar — la Gran Runa de Rykard hecha objeto. Conserva fragmento residual de la voluntad de Rykard tras la fusión con Eiglay.',
    deepLore: [
      h(2, 'Forja de la Recuerdo'),
      p(
        'La Hoja Blasfema no existe hasta que el Tarnished derrota a ',
        link('Rykard', 'character', 'rykard'),
        ' y entrega su Recuerdo a Enia en la ',
        link('Mesa Redonda', 'concept', 'roundtable-hold'),
        '. La Recuerdo no es alma genérica — es destilación cosmológica del estado fusionado de Rykard con la ',
        link('serpiente-dios Eiglay', 'concept', 'serpent-god-eiglay'),
        '. Que el arma resultante porte simultáneamente cabeza serpentina (Eiglay) y filo de Llama Negra (la doctrina deicida pre-Crisol) confirma que la fusión preservó ambas presencias en lugar de subsumir una a la otra.'
      ),
      h(2, 'Doctrina hecha mecánica'),
      p(
        'El Skill Taker\'s Flames libera fuego negro que restaura salud al portador con cada impacto — exacto reflejo de la ',
        link('Gran Runa de Rykard', 'concept', 'rykards-great-rune'),
        ': matar es comulgar, devorar es legitimarse. Es la única arma del juego base donde el efecto runico de un demidiós se replica en mecánica de arma específica. Que los textos del juego sugieran susurros provenientes de la hoja documenta voluntad residual: Rykard, fusionado a Eiglay y luego forjado en arma, opera todavía a través del filo. El portador no la blande pasivamente; la hoja "predica" su doctrina mediante cada herida que inflige.'
      ),
    ],
    confirmed: [
      'Recompensa por la Recuerdo de Rykard tras forja de Enia',
      'Empuñadura es cabeza estilizada de la serpiente-dios Eiglay',
      'Skill Taker\'s Flames restaura salud al portador con cada impacto',
      'Conserva fragmento de la voluntad fusionada de Rykard/Eiglay',
    ],
    inferred: [
      'Replica la mecánica runica de Rykard como instrumento portátil',
      'La hoja "habla" o susurra como vestigio de Rykard residual',
      'Cualquier portador, sin saberlo, predica la doctrina blasfema',
    ],
    theories: [
      'La hoja conserva consciencia parcial de Rykard que podría reconstituirse',
      'Tanith podría reanimar a Rykard mediante la hoja si la recuperase',
      'Bernahl portó una versión proto de la hoja antes de Crumbling Farum Azula',
    ],
    ambiguous: [
      'Si Eiglay opera independientemente de Rykard dentro del arma',
      'Si la hoja gana poder con uso continuado (más almas devoradas)',
      'Por qué el Tarnished puede usarla sin convertirse al culto',
    ],
    relatedCharacters: ['rykard', 'tanith', 'bernahl', 'enia'],
    relatedFactions: ['volcano-manor', 'pieles-de-dios'],
    relatedRegions: ['mt-gelmir'],
    relatedConcepts: ['serpent-god-eiglay', 'black-flame', 'rykards-great-rune', 'devourers-scepter'],
    relatedTimelineEvents: ['rykard-blasphemy'],
  },

  'rivers-of-blood': {
    summary:
      'Katana Okina jurada a la Madre de la Verdad (la Madre Informe en dialecto extranjero). Drop de Bloody Finger Okina en la Iglesia del Reposo. Confirma que el culto sangriento opera como religión geopolítica más allá de Mohg, con sacerdocio Okina paralelo en tierras lejanas.',
    deepLore: [
      h(2, 'Origen extranjero'),
      p(
        'Los Ríos de Sangre provienen de "tierra lejana" según las descripciones del ítem — el equivalente diegético a una región cultural distinta dentro del cosmos Elden Ring (la comunidad lo asocia con un Japón mítico cosmológicamente análogo). En esa tierra, el culto a la ',
        link('Madre de la Verdad', 'concept', 'formless-mother'),
        ' (mismo dios externo conocido como Madre Informe en las Tierras Intermedias) opera como religión establecida, no como secta marginal. Okina es uno de sus apóstoles itinerantes, quien viajó a las Tierras Intermedias tras enterarse de la presencia de ',
        link('Mohg', 'character', 'mohg'),
        ' como Lord coreligionario.'
      ),
      h(2, 'Mecánica y rito'),
      p(
        'Su Skill, Corpse Piler, encadena cortes hemorrágicos como rito ofrendatario explícito —cada corte adicional es ofrenda incremental—. La hemorragia rápida que provoca contra cualquier enemigo que sangre confirma que la Madre acepta sangre de cualquier portador, sin discriminación cultural. Que Okina porte la katana en la ',
        link('Iglesia del Reposo', 'region', 'mountaintops'),
        ' (cumbre nevada que custodia el paso al Haligtree) documenta coordinación geopolítica sutil: el culto sangriento global tiene representantes en puntos estratégicos de las Tierras Intermedias, no solo en el palacio Mohgwyn. Mohg no es el único Lord de Sangre — solo es el que el régimen oficial ha localizado.'
      ),
    ],
    confirmed: [
      'Drop de Bloody Finger Okina en la Iglesia del Reposo',
      'Provoca hemorragia rápida con cada corte',
      'Skill Corpse Piler encadena cortes ofrendatarios',
      'La katana proviene de tierra lejana a las Tierras Intermedias',
    ],
    inferred: [
      'Okina es apóstol del culto sangriento extranjero, no aliado de Mohg',
      'El culto opera como religión establecida en tierras lejanas',
      'Existen otros sacerdotes Okina-jurados que el Tarnished no encuentra',
    ],
    theories: [
      'Okina viajó a las Tierras Intermedias específicamente para encontrar a Mohg',
      'La katana fue forjada en culto Okina ya consagrada a la Madre',
      'El Tarnished que mata a Okina hereda voto inadvertido a la Madre',
    ],
    ambiguous: [
      'Si Mohg conocía la existencia de Okina y otros co-religionarios extranjeros',
      'Por qué Okina elige la Iglesia del Reposo y no Mohgwyn',
      'Si la Madre Informe opera con consciencia o como fuerza',
    ],
    relatedCharacters: ['okina', 'mohg', 'varre'],
    relatedFactions: ['bloody-fingers', 'kindred-of-rot'],
    relatedRegions: ['mountaintops'],
    relatedConcepts: ['formless-mother', 'bloodflame', 'mohgs-great-rune'],
    relatedTimelineEvents: ['hijos-marika-godfrey'],
  },

  'inseparable-sword': {
    summary:
      'Espadón forjado cuando Godfrey aceptó al Espíritu Tormenta Serosh sobre los hombros tras conquistar las tierras del Rey Halcón. Encarna físicamente el pacto Godfrey-Serosh: la fuerza bruta templada por la civilización ritual del régimen vencido.',
    deepLore: [
      h(2, 'Forja del pacto'),
      p(
        'La Espada Inseparable se forjó como signo del pacto fundacional entre ',
        link('Godfrey', 'character', 'godfrey'),
        ' y ',
        link('Serosh', 'character', 'serosh'),
        '. Cuando Godfrey conquistó las tierras del ',
        link('Rey Halcón de la Tormenta', 'concept', 'storm-hawk-king'),
        ', sometió al Espíritu Tormenta más antiguo del régimen vencido y lo aceptó sobre sus hombros como demostración pública del nuevo orden. Serosh templó físicamente la fuerza brutal de Godfrey durante todo su reinado dorado, convirtiéndolo en lord civilizado en lugar de bestia conquistadora. La espada se llama "Inseparable" en doble sentido: literalmente nunca se separa de Godfrey, y simbólicamente es la fusión Godfrey-Serosh hecha herramienta única.'
      ),
      h(2, 'Reversión final'),
      p(
        'Cuando Godfrey fue exiliado y perdió la gracia, Serosh permaneció con él en las tierras exteriores; la espada también. En la batalla final tras el regreso, Godfrey arroja a Serosh al suelo —rompe el pacto— y revierte a ',
        em('Hoarah Loux Sin Refinamiento'),
        ', el guerrero pre-civilizado. La espada permanece a su lado en esta segunda fase, ahora cargando solo la fuerza desnuda. Su Skill, Regal Roar, invoca el bramido del lord-bestia: confirmación de que el aspecto "civilizador" de Serosh siempre fue préstamo, no esencia. La espada por tanto contiene cosmológicamente ambos modos de Godfrey simultáneamente: lord refinado y bestia primigenia, dependiendo de qué aspecto se invoca.'
      ),
    ],
    confirmed: [
      'Recompensa por la Recuerdo de Godfrey/Hoarah Loux',
      'Forjada cuando Godfrey aceptó a Serosh sobre los hombros',
      'Skill Regal Roar invoca el bramido del lord-bestia',
      'Acompaña a Godfrey desde la conquista hasta la batalla final',
    ],
    inferred: [
      'La espada contiene cosmológicamente ambos aspectos Godfrey/Hoarah Loux',
      'El pacto Serosh templaba específicamente la fuerza primigenia',
      'Sin Serosh, Godfrey nunca habría sido aceptable como Primer Señor Elden',
    ],
    theories: [
      'La espada fue forjada por Hewg en su juventud (cuando aún forjaba para el Orden)',
      'Conserva consciencia residual de Serosh aunque el espíritu fue arrojado',
      'Su uso prolongado podría revertir al portador a estado pre-civilizado',
    ],
    ambiguous: [
      'Si Godfrey eligió a Serosh o si Serosh aceptó voluntariamente el sometimiento',
      'Por qué Marika no objetó al pacto con un espíritu del régimen vencido',
      'Si la espada podría usarse sin Serosh por el portador original',
    ],
    relatedCharacters: ['godfrey', 'serosh', 'marika', 'nepheli-loux'],
    relatedFactions: ['banished-knights', 'golden-lineage'],
    relatedRegions: ['stormveil', 'leyndell'],
    relatedConcepts: ['storm-hawk-king', 'crucible'],
    relatedTimelineEvents: ['marika-godfrey', 'exilio-godfrey'],
  },

  'maliketh-black-blade': {
    summary:
      'Espadón forjado por Maliketh para contener fragmento activo de la Runa de la Muerte. Es el instrumento operativo del sello cosmológico: cada corte canaliza Muerte Predestinada genuina, reduciendo la salud máxima del enemigo. El único arma del juego base que opera Muerte sellada.',
    deepLore: [
      h(2, 'Forja como instrumento ritual'),
      p(
        'Cuando ',
        link('Marika', 'character', 'marika'),
        ' encargó a ',
        link('Maliketh', 'character', 'maliketh'),
        ' sellar la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ' robada a la ',
        link('Reina de Ojos Crepusculares', 'character', 'gloam-eyed-queen'),
        ', el lobo divino la integró en su propio cuerpo y forjó esta hoja como instrumento de extracción ritual. La doctrina del sello no permitía que la Muerte Predestinada operara libremente sobre el cosmos, pero requería un instrumento que pudiera ',
        em('aplicarla'),
        ' bajo control si la situación lo exigía. La Hoja Negra cumple esa función específica: canaliza una fracción operativa de la Muerte sellada, ejerciéndola con precisión litúrgica.'
      ),
      h(2, 'Mecánica cosmológica'),
      p(
        'Es la única arma del juego que reduce la salud máxima del enemigo —no su salud actual, sino el techo de cuánta puede tener—. Esta mecánica simula exactamente lo que la Muerte Predestinada haría si estuviera plenamente liberada: extinción gradual definitiva, no daño temporal. Tras el robo de la mecha por ',
        link('Ranni', 'character', 'ranni'),
        ' durante la Noche de los Cuchillos Negros, Maliketh quedó como custodio de un sello incompleto; su Hoja conserva la fracción residual operativa. En la batalla final con el Tarnished, Maliketh pierde el sello completo (la Bestia Negra emerge de la primera fase a la segunda) y la espada queda como herencia. Quien la porta tras la derrota empuña efectivamente lo que el régimen dorado pasó eras protegiendo del cosmos.'
      ),
    ],
    confirmed: [
      'Recompensa por la Recuerdo de Maliketh tras la batalla en Crumbling Farum Azula',
      'Reduce la salud máxima del enemigo con cada corte',
      'Contiene fragmento operativo de la Runa de la Muerte',
      'Skill Black Blade libera onda dorada de Muerte Predestinada',
    ],
    inferred: [
      'Es el único arma del juego que opera Muerte Predestinada genuina',
      'Maliketh la forjó específicamente para ejercicio controlado del sello',
      'Su uso por el Tarnished prefigura la posibilidad de liberar el sello',
    ],
    theories: [
      'Marika misma encargó la hoja como contingencia anti-Empyrean',
      'La hoja fue probada sobre Godwyn antes del robo de Ranni',
      'El portador prolongado podría volverse instrumento del sello como Maliketh',
    ],
    ambiguous: [
      'Si la hoja podría destruir a un Empyrean por extracción suficiente',
      'Por qué Maliketh la usa todavía si pierde el sello principal',
      'Si Marika sabía que la hoja sobreviviría a Maliketh',
    ],
    relatedCharacters: ['maliketh', 'marika', 'godwyn', 'ranni', 'gloam-eyed-queen'],
    relatedFactions: ['fundamentalistas', 'cuchillos-negros'],
    relatedRegions: ['farum-azula'],
    relatedConcepts: ['destined-death', 'rune-of-death', 'shadow-bound-beast', 'helphens-steeple'],
    relatedTimelineEvents: ['muerte-predestinada', 'ranni-noche-cuchillos', 'maliketh-extraction'],
  },

  'dark-moon-greatsword': {
    summary:
      'Espadón forjado por Ranni a partir de su esencia Empyrean fría tras la transferencia a la muñeca articulada. Reliquia cosmológica fundacional de la Era de las Estrellas: la Luna Oscura hecha hierro, instrumento físico del régimen post-Voluntad Mayor.',
    deepLore: [
      h(2, 'Linaje Carian de la luz fría'),
      p(
        'Tradicionalmente, los espadones-luna eran reliquia ',
        link('Caria', 'faction', 'caria'),
        ': existen el Carian Knight\'s Sword, el Moonlight Greatsword genérico Carian (también disponible en el juego), todos derivados de la doctrina lunar Carian original. ',
        link('Ranni', 'character', 'ranni'),
        ', tras transferirse a la muñeca articulada y descender a las Three Sisters, forjó esta versión específica imbuida de ',
        link('Luna Oscura', 'concept', 'dark-moon'),
        ' —la cosmología fría que reemplazará al sol dorado—. La forja no es metalúrgica ordinaria: la hoja es proyección directa de la esencia Empyrean fría de Ranni, congelada en forma sólida.'
      ),
      h(2, 'Consagración política'),
      p(
        'Que Ranni lo entregue al Tarnished al final de su quest no es regalo sino consagración política. El portador del Espadón es ahora aliado cosmológico de Ranni, instrumento físico del nuevo régimen. La hoja está fría al tacto incluso en regiones cálidas; su luz no calienta, ilumina sin abrazar. Su Skill, Moonlight Greatsword, invoca rayo de Luna Oscura genuina —no metáfora estética sino cosmología activa, capaz de afectar a entidades ancladas al Árbol Áureo (los Árbol Áureo Avatars sufren daño extra)—. Es el primer instrumento ritual de la ',
        link('Era de las Estrellas', 'concept', 'age-of-stars'),
        ' existente antes del final mismo: aunque el régimen no se haya proclamado todavía, su instrumento ya opera.'
      ),
    ],
    confirmed: [
      'Recompensa por completar la quest de Ranni en Renna\'s Rise',
      'Forjada por Ranni a partir de su esencia Empyrean fría',
      'Skill Moonlight Greatsword libera rayo de Luna Oscura genuina',
      'La hoja está fría al tacto independientemente de la región',
    ],
    inferred: [
      'Su entrega es consagración política, no regalo neutro',
      'Es prefigura del régimen Era de las Estrellas',
      'Su luz fría afecta específicamente a entidades del Árbol Áureo',
    ],
    theories: [
      'Renna (la forma Snow Witch de Ranni) la forjó durante el ocultamiento',
      'Blaidd colaboró en la forja como Bestia Sombra ritual',
      'Existe versión gemela en Nokstella esperando despertar',
    ],
    ambiguous: [
      'Si Iji conocía la existencia de la hoja antes de su forja',
      'Si Rennala podría usar la hoja sin pacto Empyrean',
      'Por qué Ranni la entrega antes del final, no durante',
    ],
    relatedCharacters: ['ranni', 'blaidd', 'iji', 'rennala'],
    relatedFactions: ['caria', 'carian-knights'],
    relatedRegions: ['three-sisters', 'liurnia', 'nokstella'],
    relatedConcepts: ['dark-moon', 'full-moon', 'age-of-stars', 'eclipse-shotel', 'snow-witch-renna'],
    relatedTimelineEvents: ['ranni-noche-cuchillos'],
    relatedEndings: ['age-of-stars'],
  },

  'mohgwyn-sacred-spear': {
    summary:
      'Tridente ritual de Mohg el Señor de Sangre. Su forma triádica significa la trinidad del culto Mohgwyn: Madre Informe / Lord / heredero (Miquella). Canaliza Bloodflame genuino como instrumento sacerdotal antes que arma marcial.',
    deepLore: [
      h(2, 'Instrumento sacerdotal'),
      p(
        'La Lanza Sagrada de Mohgwyn es instrumento sacerdotal antes que arma. Su forma de tridente —tres puntas convergiendo en una asta única— es signo ritual del culto Mohgwyn: trinidad de la ',
        link('Madre Informe', 'concept', 'formless-mother'),
        ' (cosmología externa), el Lord (Mohg como sacerdote), y el heredero futuro (',
        link('Miquella', 'character', 'miquella'),
        ' incubado para consorte ritual). Que el tridente sea sagrado y no marcial expresa la doctrina central de Mohg: la conquista no es objetivo, la consagración sí. ',
        link('Mohg', 'character', 'mohg'),
        ' no buscaba el trono de las Tierras Intermedias — buscaba inaugurar un nuevo régimen dinástico bajo su diosa.'
      ),
      h(2, 'Bloodflame ritual'),
      p(
        'La lanza canaliza ',
        link('Bloodflame', 'concept', 'bloodflame'),
        ' genuino, no fuego derivado: cada corte deja huella ardiente que continúa quemando con sangre del enemigo. Es el equivalente sangriento de la Hoja Negra de Maliketh —donde la Negra extrae Muerte, esta extrae sangre como ofrenda—. Su Skill, Bloodboon Ritual, libera olas hemorrágicas que invocan estallidos de sangre del suelo: la doctrina del banquete compartido hecha mecánica directa. Mohg portó esta lanza a la Iglesia de Inhibición (donde fue prohibido por el régimen oficial), al palacio dinástico (donde inauguró su régimen alternativo), y al sueño de Miquella (donde intentó la consagración del heredero). Es la presencia material de su sacerdocio en cada locación clave.'
      ),
    ],
    confirmed: [
      'Recompensa por la Recuerdo de Mohg tras forja de Enia',
      'Forma tridente con simbología trinitaria del culto',
      'Canaliza Bloodflame genuino, no fuego ordinario',
      'Skill Bloodboon Ritual invoca estallidos hemorrágicos del suelo',
    ],
    inferred: [
      'El tridente significa Madre / Lord / heredero',
      'Es instrumento sacerdotal, no marcial',
      'Cada uso es ofrenda implícita a la Madre Informe',
    ],
    theories: [
      'La lanza fue forjada antes del secuestro de Miquella, anticipándolo',
      'Conserva fragmento de voluntad ritual de Mohg residual',
      'Varré la habría heredado si la línea sacerdotal hubiera continuado',
    ],
    ambiguous: [
      'Si la lanza fue forjada por Mohg o regalada por la Madre Informe',
      'Por qué Mohg no la usa contra Miquella durante la consagración fallida',
      'Si el Tarnished puede usarla sin pacto con la Madre',
    ],
    relatedCharacters: ['mohg', 'miquella', 'varre', 'okina'],
    relatedFactions: ['bloody-fingers', 'kindred-of-rot'],
    relatedRegions: ['mohgwyn'],
    relatedConcepts: ['formless-mother', 'bloodflame', 'mohgs-great-rune', 'rivers-of-blood'],
    relatedTimelineEvents: ['hijos-marika-godfrey'],
  },

  'dragon-king-cragblade': {
    summary:
      'Espadón colosal del régimen Dragón pre-Orden, portado por Placidusax cuando aún reinaba como Señor Elden anterior. Reliquia del culto al Dios Dragón Desaparecido: el equivalente cosmológico de la Espada Inseparable de Godfrey, pero para los reyes pre-dorados.',
    deepLore: [
      h(2, 'El régimen pre-Orden'),
      p(
        'Antes del Orden Dorado de Marika existió otro régimen cosmológico, encabezado por ',
        link('Placidusax', 'character', 'placidusax'),
        ' como Señor Elden bajo un dios externo distinto a la Voluntad Mayor —el ',
        link('Dios Dragón Desaparecido', 'concept', 'vanished-dragon-god'),
        '—. La Hoja-Risco es la reliquia más antigua del juego base portable como arma: pertenece a esa era anterior, cuando la legitimidad cosmológica fluía por línea dragontina, no por línea Marika-Godfrey.'
      ),
      h(2, 'Metamorfosis del arma'),
      p(
        'Las descripciones del ítem son notables: durante el reinado de Placidusax, el arma "tomó la forma de un colmillo gigante" —sugiriendo metamorfosis cosmológica donde el dios dragón mismo se proyectaba en el arma del Lord como gesto de presencia. El arma no era inerte; era extensión cósmica del dios externo en sí. Tras el abandono del dios externo (la Desaparición que da nombre al ',
        link('Dios Dragón Desaparecido', 'concept', 'vanished-dragon-god'),
        '), la metamorfosis cesó —la hoja conserva ahora la forma residual sin la presencia divina. Su Skill, Place of Origin, invoca relámpago dragontino convergente como recordatorio de la era anterior.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Cuando Placidusax fue abandonado por su dios externo y se retiró a estasis ritual en ',
        link('Crumbling Farum Azula', 'region', 'farum-azula'),
        ', la hoja permaneció con él como artefacto residual. Es de las pocas reliquias documentadas del régimen pre-Marika que conservan poder activo —la mayoría se extinguió o fue cooptada por el Orden—. Que el Tarnished pueda obtenerla es ironía cosmológica: el héroe del Orden actual blande la corona armamentística del régimen vencido, igual que blande la Lanza de Gransax (otro símbolo dragontino preservado). La cooptación que el Orden Dorado practicó sobre el régimen Dragón continúa simbólicamente cuando el Tarnished hereda ambos.'
      ),
    ],
    confirmed: [
      'Recompensa por la Recuerdo de Placidusax tras la batalla en Crumbling Farum Azula',
      'Pertenece al régimen Dragón pre-Orden',
      'Skill Place of Origin invoca relámpago dragontino convergente',
      'Durante el reinado de Placidusax tomaba forma de colmillo gigante',
    ],
    inferred: [
      'El Dios Dragón Desaparecido se proyectaba en el arma como gesto de presencia',
      'Tras el abandono divino, conserva forma residual sin presencia activa',
      'Es la reliquia portable más antigua del juego base',
    ],
    theories: [
      'Otros Antiguos Señores Dragón portaron versiones equivalentes ahora perdidas',
      'La hoja podría reactivarse cosmológicamente si el dios dragón regresara',
      'Lansseax conoce el arma y la considera reliquia legítima del régimen',
    ],
    ambiguous: [
      'Por qué el dios dragón desapareció exactamente',
      'Si Placidusax pudo retener el arma por elección o por inercia ritual',
      'Si existió un equivalente dragón a la espada Inseparable de Godfrey',
    ],
    relatedCharacters: ['placidusax', 'lansseax', 'gransax', 'fortissax'],
    relatedFactions: ['dragones-antiguos', 'dragon-communion'],
    relatedRegions: ['farum-azula'],
    relatedConcepts: ['vanished-dragon-god', 'bolt-of-gransax', 'inseparable-sword'],
    relatedTimelineEvents: ['antes-orden-dorado'],
  },

  'bastards-stars': {
    summary:
      'Mangual cosmológico portado por Astel, Naturalborn of the Void. Cada nodo del mangual es fragmento meteórico del cuerpo del propio Astel —el arma no fue forjada, fue extraída ritualmente de la criatura misma. Anomalía cosmológica: arma sin tradición humana ni régimen que la consagre.',
    deepLore: [
      h(2, 'Anomalía dentro del esquema de armas'),
      p(
        'Las Estrellas del Bastardo son anomalía dentro del esquema de armas del juego base: no fueron forjadas, son fragmentos del cuerpo cosmológicamente malformado de ',
        link('Astel', 'character', 'astel'),
        ' separados ritualmente. Cada nodo del mangual es meteorito menor con la misma firma del cuerpo principal —material exterior a las Tierras Intermedias, traído por la caída original que destruyó la Ciudad Eterna ',
        link('Nokron', 'region', 'nokron'),
        '—. El arma es por tanto literal extracción del enemigo: la "forja" consistió en separar partes del cuerpo de Astel y mantener su cohesión cosmológica mediante encadenamiento ritual.'
      ),
      h(2, 'Marginalidad cosmológica'),
      p(
        'Que el adjetivo sea "Bastardo" (Naturalborn implica nacido sin padre cosmológico legítimo) refleja la condición misma de Astel: rechazado tanto por la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' (que no lo reconoce como criatura del régimen dorado) como por los ',
        link('Nox', 'faction', 'nox'),
        ' (que lo invocaron como castigo, no como aliado). El arma hereda esa marginalidad: poderosa, pero ningún régimen la reclama como propia. Su Skill, Wish Upon a Star, invoca lluvia meteórica menor: el arma reproduce el evento original de la caída a escala manejable. Es ritual cosmológico portátil — cada uso reactiva en miniatura el castigo de los Nox. El Tarnished que la porta blande residuo de un evento cósmico que pre-existe al Orden mismo, sin tradición humana que la consagre.'
      ),
    ],
    confirmed: [
      'Recompensa por la Recuerdo de Astel Naturalborn',
      'Cada nodo del mangual es fragmento meteórico del cuerpo de Astel',
      'Skill Wish Upon a Star invoca lluvia meteórica menor',
      'Reproduce a escala el evento original de la caída de Astel',
    ],
    inferred: [
      'El arma fue extraída ritualmente, no forjada metalúrgicamente',
      'Conserva la firma cosmológica externa del cuerpo malformado',
      'Ningún régimen humano la consagra como propia',
    ],
    theories: [
      'Existe una segunda Astel (Stars of Darkness) cuya extracción produciría arma similar',
      'El meteorito original de Caelid es fragmentación del mismo cuerpo cosmológico',
      'El Espadón de las Ruinas es extracción anterior del mismo material',
    ],
    ambiguous: [
      'Si los Nox extrajeron el arma o si Astel la generó pasivamente',
      'Por qué Astel la conserva tras la destrucción de Nokron',
      'Si la Estrella Putrefacta vino del mismo evento meteórico',
    ],
    relatedCharacters: ['astel', 'astel-naturalborn', 'astel-stars-of-darkness'],
    relatedFactions: ['nox', 'malformed-stars'],
    relatedRegions: ['nokron', 'nokstella'],
    relatedConcepts: ['outer-god-of-rot', 'ruins-greatsword'],
    relatedTimelineEvents: ['astel-castigo'],
  },

  /* ────── Conceptos cosmológicos ────── */

  'wondrous-physick': {
    summary:
      'Tercer frasco sagrado del Tarnished, separado de los Frascos Carmesí y Cerúleo. Se carga con Lágrimas de Cristal de los Árboles Áureos Menores y produce efectos rituales temporales personalizados. Sacramento marcial paralelo a las Estacas: micro-bendiciones cosmológicas portátiles.',
    deepLore: [
      h(2, 'Naturaleza del frasco'),
      p(
        'El Frasco del Físico Maravilloso es el sacramento marcial más íntimo del Tarnished. A diferencia de los Frascos estándar (Carmesí para salud, Cerúleo para FP — sustancias derivadas del ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' central), este frasco contiene mezcla personalizada de hasta dos Lágrimas de Cristal por carga. Se obtiene en la Tercera Iglesia de ',
        link('Marika', 'character', 'marika'),
        ' en Limgrave —sin guardián, sin ritual de iniciación—, lo que sugiere que es ofrenda libre del régimen al peregrino: Marika no exige condiciones para acceder al sacramento.'
      ),
      h(2, 'Las Lágrimas de Cristal'),
      p(
        'Las Lágrimas de Cristal son fragmentos cristalinos extraídos de los ',
        link('Árboles Áureos Menores', 'concept', 'minor-erdtrees'),
        ' —los árboles satélite que el Árbol Áureo central plantó por las Tierras Intermedias como puntos de cosecha cosmológica—. Cada Lágrima codifica un efecto cosmológico específico: cura masiva, restauración de FP, fuerza física, defensa elemental, neutralización de podredumbre, hemorragia, sangre fría, etc. Hay aproximadamente 25 Lágrimas distintas en el juego base. El Tarnished combina dos por sesión, creando "rezo" temporal personalizado adaptado a cada encuentro. Es el sistema de buffs más flexible del juego, y simultáneamente el más teológicamente cargado: cada Lágrima es cristalización de una decisión cosmológica de Marika, almacenada en árbol satélite, accesible a quien recoja.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Como las Estacas, el Físico documenta la dimensión cariñosa de Marika: ella anticipó la dificultad y dispuso instrumentos de auxilio repartidos por el mapa. Filosóficamente, el frasco difiere del bookkeeping doctrinal del Orden Dorado: no exige fe, no exige juramento, no rastrea uso. Funciona como herramienta neutra disponible. Quien encuentra una Iglesia, encuentra el frasco. Quien encuentra un Árbol Áureo Menor, encuentra una Lágrima. La doctrina implícita del régimen es: "el peregrino merece auxilio si lo busca". Es una concepción más generosa de Marika que las cinemáticas mayores muestran.'
      ),
    ],
    confirmed: [
      'Se obtiene en la Tercera Iglesia de Marika en Limgrave',
      'Acepta hasta dos Lágrimas de Cristal por carga',
      'Las Lágrimas se obtienen rompiendo Árboles Áureos Menores',
      'Existen aproximadamente 25 Lágrimas distintas en el juego base',
    ],
    inferred: [
      'Es ofrenda libre de Marika al peregrino, sin requisitos',
      'Cada Lágrima cristaliza una decisión cosmológica específica',
      'El frasco documenta la dimensión cariñosa del régimen',
    ],
    theories: [
      'Marika plantó los Árboles Áureos Menores específicamente para el peregrinaje Tarnished',
      'Existen Lágrimas no-canónicas perdidas en regiones inaccesibles',
      'La sustancia cristalina es residuo material del Anillo Elden mismo',
    ],
    ambiguous: [
      'Por qué solo permite dos Lágrimas y no más',
      'Si el Árbol Áureo Menor "regenera" Lágrimas o son únicas',
      'Si Marika prevé las combinaciones específicas que el Tarnished encontrará útiles',
    ],
    relatedCharacters: ['marika', 'melina'],
    relatedFactions: ['fundamentalistas', 'orden-dorado'],
    relatedRegions: ['limgrave', 'leyndell'],
    relatedConcepts: ['minor-erdtrees', 'erdtree', 'stake-of-marika', 'sites-of-grace', 'grace'],
    relatedTimelineEvents: ['exilio-godfrey', 'viaje-mancillado'],
  },

  'sites-of-grace': {
    summary:
      'Las marcas doradas de gracia visible que aparecen por todas las Tierras Intermedias tras la Fractura. Solo el Tarnished poseedor de gracia las ve. Funcionan como puntos de descanso, ascenso de nivel, resurrección y orientación. Son la infraestructura literal del peregrinaje cosmológico.',
    deepLore: [
      h(2, 'Manifestación física de la gracia residual'),
      p(
        'Los Sitios de Gracia son la manifestación física de la ',
        link('gracia', 'concept', 'grace'),
        ' dorada residual del ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ', visibles solo a quienes portan la facultad. Tras la Fractura, la gracia se dispersó en marcas dispersas en lugar de fluir unificada desde el árbol; cada Sitio es punto donde la gracia se acumula con suficiente densidad para ser percibida como llama dorada visible. Su distribución no es aleatoria —siguen rutas que cosmológicamente reconducen al portador hacia objetivos específicos del peregrinaje.'
      ),
      h(2, 'Triple función doctrinal'),
      p(
        'La doctrina cosmológica que organizan es triple. (1) Descanso ritual: el Tarnished recupera frascos, repobla enemigos, normaliza estado. (2) Ascenso: las Runas acumuladas pueden gastarse para fortalecer atributos, gestionado mediante la presencia de la Doncella —',
        link('Melina', 'character', 'melina'),
        ' o las Doncellas Gemelas en la Mesa Redonda—. (3) Resurrección: al morir, el Tarnished renace en el último Sitio activado, a menos que una ',
        link('Estaca de Marika', 'concept', 'stake-of-marika'),
        ' lo reciba antes. Cada función documenta un aspecto del régimen: descanso (cuidado), ascenso (mérito), resurrección (continuidad).'
      ),
      h(2, 'Exclusividad y orientación'),
      p(
        'Que solo los portadores de gracia los vean es central: los demás habitantes de las Tierras Intermedias (',
        link('Misbegotten', 'faction', 'misbegotten'),
        ', fundamentalistas, peregrinos no-Tarnished) caminan por encima de los Sitios sin percibirlos. Es por tanto sistema operativo exclusivo del peregrinaje Tarnished, no infraestructura general del mundo. La orientación —cada Sitio sugiere visualmente la dirección hacia el siguiente objetivo cosmológico mediante el ',
        em('Guidance of Grace'),
        '— documenta inteligencia residual: la gracia no solo descansa, también guía. La hipótesis cosmológica mayoritaria es que esta orientación es manifestación de la voluntad continua de la Voluntad Mayor, operando todavía a través de la gracia residual aunque el régimen central esté fracturado.'
      ),
    ],
    confirmed: [
      'Los Sitios son llamas doradas visibles solo a portadores de gracia',
      'Permiten descanso, ascenso de nivel y resurrección',
      'La orientación visual sugiere objetivos cosmológicos',
      'Tras la Fractura, la gracia se dispersó en lugar de fluir unificada',
    ],
    inferred: [
      'Su distribución sigue rutas que reconducen al portador hacia objetivos',
      'La orientación expresa voluntad continua de la Voluntad Mayor',
      'Solo los Tarnished pueden percibirlos por la gracia específica que portan',
    ],
    theories: [
      'Los Sitios son acumulaciones de gracia que filtran del Árbol Áureo fragmentado',
      'La Voluntad Mayor opera específicamente a través de los Sitios pese a la fractura',
      'El Sitio en una nueva región se "activa" cuando el portador llega — no preexiste literalmente',
    ],
    ambiguous: [
      'Si Marika diseñó el sistema antes o durante la Fractura',
      'Si los Sitios podrían dejar de funcionar tras un final específico',
      'Por qué algunos Sitios están en lugares que no orientan a ningún objetivo',
    ],
    relatedCharacters: ['marika', 'melina', 'twin-maiden-husks'],
    relatedFactions: ['fundamentalistas', 'orden-dorado', 'dos-dedos'],
    relatedRegions: ['leyndell', 'limgrave'],
    relatedConcepts: ['grace', 'erdtree', 'tarnished', 'stake-of-marika', 'wondrous-physick'],
    relatedTimelineEvents: ['la-fractura', 'viaje-mancillado'],
  },

  'roundtable-hold': {
    summary:
      'Locación-encrucijada cosmológica accesible solo por gracia, fuera del flujo temporal ordinario de las Tierras Intermedias. Funciona como hub de los Tarnished candidatos al trono y como tribunal informal de los Dos Dedos. Hospedó a Gideon, Goldmask, Roderika, Hewg, las Doncellas Gemelas y D.',
    deepLore: [
      h(2, 'Locación cosmológicamente ambigua'),
      p(
        'La Mesa Redonda es la locación más cosmológicamente ambigua del juego base. No tiene ubicación geográfica explícita en el mapa: se accede mediante teleportación-gracia por las ',
        link('Doncellas Gemelas', 'character', 'twin-maiden-husks'),
        ' tras el primer Sitio en Stormhill. Su arquitectura sugiere fortaleza monástica en piedra dorada, con sala central de mesa redonda donde los ',
        link('Dos Dedos', 'faction', 'dos-dedos'),
        ' residen detrás de cortinas. Cosmológicamente opera como antesala del trono: aquí los Tarnished candidatos son clasificados, asistidos, observados.'
      ),
      h(2, 'Tribunal y antesala'),
      p(
        'Los Dos Dedos pueden recibir audiencias pero solo a través de las ',
        link('Finger Readers', 'faction', 'finger-readers'),
        ' (',
        link('Enia', 'character', 'enia'),
        '). La Mesa atrae específicamente a quienes operan sobre cuestiones cosmológicas, no marciales: ',
        link('Gideon', 'character', 'gideon'),
        ' (el Que Todo Lo Sabe, archivero del régimen), ',
        link('Goldmask', 'character', 'goldmask'),
        ' (heredero filosófico de Radagon, reformador silencioso), ',
        link('Brother Corhyn', 'character', 'corhyn'),
        ' (clérigo doctrinario), ',
        link('Roderika', 'character', 'roderika'),
        ' (apóstol de las cenizas espirituales), y ',
        link('Hewg', 'character', 'hewg'),
        ' (herrero gigante condenado). La presencia simultánea de figuras intelectuales documenta que la Mesa es centro de pensamiento, no de armas.'
      ),
      h(2, 'Existencia post-Fractura como paradoja'),
      p(
        'Su existencia post-Fractura es paradoja: es vestigio del Orden Dorado funcional, mantenido por los Dos Dedos contra la decadencia general. Algunos teóricos sugieren que la Mesa existe en bolsillo temporal estabilizado por presencia continua de los Dedos —no es plenamente parte de las Tierras Intermedias fracturadas, sino burbuja preservada por intervención cosmológica directa—. Su pérdida final cuando ',
        link('Gideon', 'character', 'gideon'),
        ' enloquece tras leer demasiado del cosmos, todos los habitantes mueren o parten, y los Dedos son corrompidos, documenta el colapso terminal del régimen institucional dorado: cuando ni siquiera la Mesa funciona, no queda burocracia cosmológica. La línea final del juego base sobre la Mesa es deliberadamente desolada — la antesala del trono ya no opera como antesala.'
      ),
    ],
    confirmed: [
      'Accesible solo mediante teleportación-gracia por las Doncellas Gemelas',
      'Hospeda a los Dos Dedos como tribunal informal',
      'Reúne figuras cosmológicas: Gideon, Goldmask, Corhyn, Roderika, Hewg',
      'Su arquitectura es fortaleza monástica en piedra dorada',
    ],
    inferred: [
      'Existe en bolsillo temporal estabilizado por los Dos Dedos',
      'No es parte plenamente de las Tierras Intermedias fracturadas',
      'Atrae específicamente a operadores cosmológicos, no marciales',
    ],
    theories: [
      'La Mesa preexiste al Orden Dorado como locación neutra cooptada',
      'Existen otras "Mesas" perdidas en otras eras cosmológicas',
      'La pérdida final marca el colapso terminal del régimen institucional',
    ],
    ambiguous: [
      'Su ubicación geográfica exacta en el mapa, si la tiene',
      'Si los Dos Dedos pueden moverse de la Mesa o están vinculados',
      'Por qué Hewg está condenado allí específicamente',
    ],
    relatedCharacters: ['gideon', 'goldmask', 'corhyn', 'roderika', 'hewg', 'twin-maiden-husks', 'enia', 'd'],
    relatedFactions: ['dos-dedos', 'finger-readers', 'fundamentalistas'],
    relatedRegions: ['leyndell'],
    relatedConcepts: ['grace', 'sites-of-grace', 'tarnished', 'golden-order'],
    relatedTimelineEvents: ['exilio-godfrey', 'viaje-mancillado'],
  },

  'storm-hawk-king': {
    summary:
      'Soberano original de las tierras de la tormenta —la región hoy llamada Stormveil— antes de la conquista de Godfrey. Su Espíritu Tormenta, Serosh, fue sometido por Godfrey como signo del nuevo régimen. Figura nunca vista, referenciada solo en ítems y por la disciplina marcial sobreviviente.',
    deepLore: [
      h(2, 'Régimen pre-Orden de la tormenta'),
      p(
        'El Rey Halcón de la Tormenta es la figura histórica más significativa del juego base que nunca aparece en escena. Las descripciones de ítems —en particular las de los ',
        link('Banished Knights', 'faction', 'banished-knights'),
        ', de ',
        link('Nepheli Loux', 'character', 'nepheli-loux'),
        ', y del propio ',
        link('Serosh', 'character', 'serosh'),
        '— lo confirman como soberano legítimo de las tierras de la tormenta antes de la conquista de ',
        link('Godfrey', 'character', 'godfrey'),
        ' en la era fundacional del Orden Dorado. Su régimen sostenía culto a los espíritus tormenta, encarnados en Halcones Tormenta como símbolos cósmicos del poder. La doctrina del régimen Storm-Hawk era explícitamente vincular: el rey-portador llevaba un Espíritu Tormenta sobre los hombros como vasija, no como mascota.'
      ),
      h(2, 'La conquista cooptativa'),
      p(
        'Cuando Godfrey conquistó la región (su primer acto militar mayor tras la unión con ',
        link('Marika', 'character', 'marika'),
        '), no extinguió el régimen sino que lo asimiló: el Storm Hawk Spirit principal —Serosh— fue sometido a hombros de Godfrey como demostración de poder, transformándose simultáneamente en mascota imperial y testigo del nuevo orden. La ',
        link('Espada Inseparable', 'concept', 'inseparable-sword'),
        ' es reliquia material de ese pacto. Los caballeros sobrevivientes fueron desterrados de la corte (de ahí el epíteto Banished Knights) y absorbidos como élite marcial perpetuamente subordinada: nunca recuperarían un rey propio, pero su disciplina marcial se conservaría intacta a través de generaciones.'
      ),
      h(2, 'Patrón fundacional de cooptación'),
      p(
        'Filosóficamente, el Rey Halcón es el primer "régimen vencido pero no destruido" que el Orden Dorado coopta — patrón que se repite con los Dragones (',
        link('Gransax', 'character', 'gransax'),
        ' preservado como monumento), con los Nox (Nokstella mantenida en exilio), con los Gigantes (cementerio sagrado preservado). El método de conquista cooptativa, no exterminadora, queda definido por su caso fundacional. Que ',
        link('Nepheli Loux', 'character', 'nepheli-loux'),
        ' tenga conexión sugerida con el linaje Storm-Hawk (su tutor ',
        link('Kenneth Haight', 'character', 'kenneth-haight'),
        ' la entrenó como heredera marcial de la región) abre la posibilidad de restauración parcial del régimen original al final del juego base si el jugador completa su quest. Sería ironía cosmológica completa: el régimen fundacional vencido recupera Stormveil cuando el régimen vencedor está en pleno colapso.'
      ),
    ],
    confirmed: [
      'Soberano original de las tierras de la tormenta antes de Godfrey',
      'Su Espíritu Tormenta Serosh fue sometido por Godfrey',
      'Sus caballeros se convirtieron en los Banished Knights',
      'Nunca aparece en escena, solo referenciado en ítems y por descendencia',
    ],
    inferred: [
      'Su régimen sostenía culto a espíritus tormenta como cosmología propia',
      'El portador-rey llevaba un Espíritu Tormenta como vasija, no mascota',
      'Establece el patrón de cooptación que el Orden repite con dragones, Nox, gigantes',
    ],
    theories: [
      'Nepheli Loux desciende del linaje Storm-Hawk por sangre',
      'El Rey murió en combate honorable contra Godfrey, no fue ejecutado',
      'Existen otros Espíritus Tormenta sometidos cuya presencia se ha olvidado',
    ],
    ambiguous: [
      'Si el régimen Storm-Hawk era humano o pre-humano',
      'Cómo se llamaba el Rey personalmente — ningún ítem lo nombra',
      'Si existió línea sucesoria post-conquista o si el linaje se interrumpió',
    ],
    relatedCharacters: ['godfrey', 'serosh', 'nepheli-loux', 'kenneth-haight', 'godrick'],
    relatedFactions: ['banished-knights'],
    relatedRegions: ['stormveil', 'limgrave'],
    relatedConcepts: ['inseparable-sword', 'banished-knight-oleg', 'crucible'],
    relatedTimelineEvents: ['marika-godfrey', 'exilio-godfrey'],
  },

}
