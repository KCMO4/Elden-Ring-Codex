import type { DeepEntity, RichBlock, RichInline } from '../types'

const link = (label: string, targetType: 'character' | 'region' | 'faction' | 'concept' | 'ending' | 'timeline', slug: string): RichInline =>
  ({ type: 'link', label, targetType, slug })
const p = (...children: RichInline[]): RichBlock =>
  ({ type: 'paragraph', children })
const h = (level: 2 | 3, text: string, id?: string): RichBlock =>
  ({ type: 'heading', level, text, id })
const em = (text: string): RichInline => ({ type: 'em', text })

/**
 * Phase 7 — Atomic timeline events with deep lore.
 * Each entry uses a 4-block structure: Resumen / Historia / Causas y consecuencias /
 * Significado simbólico, plus knowledge buckets and cross-links.
 */
export const timelineDeepLore: Record<string, Partial<DeepEntity>> = {

  'placidusax-elden-lord': {
    slug: 'placidusax-elden-lord',
    subtitle: 'Era previa al Árbol Áureo · Reinado de los Antiguos Dragones',
    summary:
      'Antes de Marika, antes del Orden Dorado, antes incluso del Árbol Áureo como árbol cosmológico, hubo otro régimen: Placidusax fue Lord Elden de una era dragónica cuyo dios externo desapareció sin dejar registro. Su mero recuerdo desautoriza la pretensión del Orden Dorado a ser cosmología única.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'En una era cuya datación exacta se ha perdido, ',
        link('Placidusax', 'character', 'placidusax'),
        ' fue ',
        link('Señor Elden', 'concept', 'elden-lord'),
        ' de un régimen anterior al ',
        link('Orden Dorado', 'concept', 'golden-order'),
        '. Su capital era ',
        link('Farum Azula', 'region', 'farum-azula'),
        ', ciudad-fortaleza dragónica que aún hoy flota fuera del tiempo. El cosmos estaba bajo la autoridad de los ',
        link('Antiguos Dragones', 'faction', 'dragones-antiguos'),
        ' y de un dios externo cuya identidad nunca se enuncia en los textos del juego base.'
      ),
      h(2, 'Historia detallada'),
      p(
        'El régimen dragónico precedía al ',
        link('Crisol primigenio', 'concept', 'crucible'),
        ' como cosmología dominante en algunos relatos, o lo coexistía como capa paralela. Placidusax operaba con la autoridad de su dios externo: legislaba, regulaba, sostenía la coherencia cósmica. Cuando ese dios desapareció — sin batalla, sin testigo, sin sucesor inmediato — el régimen dragónico perdió eje. ',
        link('Farum Azula', 'region', 'farum-azula'),
        ' quedó suspendida en su tormenta atemporal; los Antiguos Dragones se dispersaron por las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ' (',
        link('Fortissax', 'character', 'fortissax'),
        ', ',
        link('Lansseax', 'character', 'lansseax'),
        ', ',
        link('Greyoll', 'character', 'greyoll'),
        '), algunos pactaron con los humanos del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' naciente, otros se retiraron a tumbas dispersas.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'La desaparición del dios externo de Placidusax abrió la vacante cosmológica que la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' eventualmente ocuparía al elegir a ',
        link('Marika', 'character', 'marika'),
        ' como nueva vasija. Así, el ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' no es la primera cosmología — es la actual. Esta sucesión documenta una verdad estructural: ',
        em('los regímenes cosmológicos de las Tierras Intermedias son seriales, no eternos'),
        '. Cada uno se considera definitivo durante su tiempo y es eventualmente reemplazado.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Placidusax dormido en su cámara escondida es el monumento del juego al dios olvidado. Su existencia silenciosa — opcional incluso para el ',
        link('Tarnished', 'concept', 'tarnished'),
        ' — recuerda que toda era termina y nadie la registra. Su régimen no fue derrotado: fue ',
        em('abandonado'),
        ' por su propia divinidad. Ese precedente plantea la pregunta más oscura sobre el régimen actual: ¿qué pasaría si la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' también se retirase?'
      )
    ],
    confirmed: [
      ['Placidusax fue Señor Elden de una era anterior al ', link('Orden Dorado', 'concept', 'golden-order')],
      ['Su capital era ', link('Farum Azula', 'region', 'farum-azula')],
      'Su dios externo desapareció sin batalla registrada',
      'Antiguos Dragones como Fortissax sobrevivieron a la transición'
    ],
    inferred: [
      ['El régimen dragónico precede tanto al ', link('Árbol Áureo', 'concept', 'erdtree'), ' como al ', link('Crisol', 'concept', 'crucible'), ' como cosmología dominante'],
      'La caída fue por abandono divino, no por derrota militar',
      ['La ', link('Voluntad Mayor', 'concept', 'voluntad-mayor'), ' llenó la vacante cosmológica al elegir a ', link('Marika', 'character', 'marika')]
    ],
    theories: [
      'El dios externo de Placidusax no murió: se desplazó a otra dimensión y podría regresar',
      [link('Farum Azula', 'region', 'farum-azula'), ' está atemporal precisamente porque su régimen aún no ha terminado de caer'],
      ['Placidusax dormita esperando un retorno cosmológico que la ', link('Voluntad Mayor', 'concept', 'voluntad-mayor'), ' sabe que ocurrirá']
    ],
    ambiguous: [
      'Identidad del dios externo desaparecido',
      'Cuánto tiempo duró el régimen dragónico antes de caer',
      ['Si los Antiguos Dragones siguen leales a Placidusax o han aceptado el ', link('Orden Dorado', 'faction', 'orden-dorado')]
    ],
    relatedCharacters: ['placidusax', 'fortissax', 'maliketh', 'marika'],
    relatedRegions: ['farum-azula'],
    relatedFactions: ['dragones-antiguos'],
    relatedConcepts: ['crucible', 'voluntad-mayor', 'dioses-exteriores'],
    relatedTimelineEvents: ['era-antigua', 'antes-orden-dorado'],
  },

  'silver-tears-creation': {
    slug: 'silver-tears-creation',
    subtitle: 'Tecnología cosmológica de los Nox · Mímica como aspiración divina',
    summary:
      'Los Nox, civilización subterránea condenada por intentar forjar su propio dios, desarrollaron las Lágrimas de Plata: criaturas líquidas argénteas capaces de imitar cualquier forma. Su sofisticación cosmológica documenta una alternativa al Orden Dorado que el régimen jamás igualó.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'Antes de su caída, los ',
        link('Nox', 'faction', 'nox'),
        ' construyeron las ciudades eternas de ',
        link('Nokron', 'region', 'nokron'),
        ' y ',
        link('Nokstella', 'region', 'nokstella'),
        ' como sede de una civilización cosmológicamente avanzada. Entre sus logros más extraños: las Lágrimas de Plata, criaturas líquidas con capacidad de mímica perfecta.'
      ),
      h(2, 'Historia detallada'),
      p(
        'Las Silver Tears parecen haber sido producto de un proyecto deliberado: crear vida artificial capaz de adoptar cualquier forma, posiblemente como prototipo de un nuevo cuerpo divino. La hipótesis más sostenida en los textos: los ',
        link('Nox', 'faction', 'nox'),
        ' querían forjar a su propio Lord Elden — una vasija humana sustituta que les permitiera tener divinidad propia, independiente de la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        '. Las Lágrimas habrían sido los primeros experimentos de ese proyecto.'
      ),
      p(
        'Los Mimic Tears, variantes superiores, copian al observador con perfección absoluta — equipo, estadísticas, tácticas, todo. Que tal tecnología existiera siglos ',
        link('antes del Orden Dorado', 'timeline', 'antes-orden-dorado'),
        ' y que sobreviva en sus ciudades enterradas indica que los ',
        link('Nox', 'faction', 'nox'),
        ' manejaban niveles de manipulación cosmológica que el régimen dorado jamás documenta haber alcanzado.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'El proyecto Nox fue interpretado como blasfemia por la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        '. El castigo cayó en forma de Astel — una entidad estelar cósmica que destruyó las ciudades y enterró a los ',
        link('Nox', 'faction', 'nox'),
        ' bajo tierra. Pero las Lágrimas sobrevivieron en las ruinas. El ',
        link('Tarnished', 'concept', 'tarnished'),
        ' puede usarlas como espíritus invocables. Cada uso es eco residual del proyecto blasfemo más sofisticado de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        '.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Las Lágrimas de Plata son la prueba ontológica de que los ',
        link('Nox', 'faction', 'nox'),
        ' podían rivalizar con la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        '. Si pudieron crear vida que se ajustara a cualquier molde, podían potencialmente fabricar un ',
        link('Empyrean', 'concept', 'empyrean'),
        ' propio. El castigo cósmico no fue arbitrario: fue prevención de una sucesión paralela. ',
        link('Ranni', 'character', 'ranni'),
        ', heredera filosófica del sueño Nox, completa lo que ellos no pudieron: instaurar la ',
        link('Era de las Estrellas', 'ending', 'age-of-stars'),
        ' como cosmos sin ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' cercana.'
      )
    ],
    confirmed: [
      ['Los ', link('Nox', 'faction', 'nox'), ' crearon Silver Tears y Mimic Tears'],
      'Las Lágrimas perduran en las ruinas de Nokron y Nokstella',
      'Los Mimic Tears imitan al observador con precisión absoluta',
      'Astel destruyó la civilización Nox como castigo cósmico'
    ],
    inferred: [
      ['El proyecto era crear un cuerpo divino propio, independiente de la ', link('Voluntad Mayor', 'concept', 'voluntad-mayor')],
      ['La sofisticación cosmológica Nox excedía la del ', link('Orden Dorado', 'concept', 'golden-order')],
      'Los Mimic Tears son variantes superiores de un experimento más temprano'
    ],
    theories: [
      'Cada Mimic Tear contiene el alma fragmentaria de un noble Nox',
      'Eran prototipos para fabricar un Lord Elden Nox',
      'Su tecnología está latente: bajo condiciones específicas podrían producir un dios completo'
    ],
    ambiguous: [
      'Si las Lágrimas tienen consciencia o son puramente reactivas',
      'Si el proyecto del cuerpo divino llegó a producir un prototipo completo',
      ['Si ', link('Ranni', 'character', 'ranni'), ' hereda directamente esta tradición o solo paralelamente']
    ],
    relatedCharacters: ['ranni'],
    relatedRegions: ['nokron', 'nokstella', 'ainsel-river'],
    relatedFactions: ['nox', 'silver-mimic-tears'],
    relatedConcepts: ['mimic-tear', 'voluntad-mayor', 'age-of-stars'],
    relatedTimelineEvents: ['nox-ciudades-eternas'],
  },

  'gloam-eyed-godskins-reign': {
    slug: 'gloam-eyed-godskins-reign',
    subtitle: 'Reina Empyrean previa al Orden · Custodia de la Llama Negra · Profetas cazadores de dioses',
    summary:
      'La Reina del Ojo Velado fue Empyrean en una era donde la verdadera muerte aún corría libre. Distribuyó la Llama Negra a los Pieles de Dios como arma capaz de matar dioses. Su régimen fue la última cosmología funcional antes de que Marika sellara la Muerte Predestinada.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'En la era inmediatamente anterior al ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ', la ',
        link('Reina del Ojo Velado', 'character', 'gloam-eyed-queen'),
        ' regía como ',
        link('Empyrean', 'concept', 'empyrean'),
        '. Su régimen distribuyó la ',
        link('Llama Negra', 'concept', 'black-flame'),
        ' a un clero específico: los ',
        link('Pieles de Dios', 'faction', 'pieles-de-dios'),
        ', cazadores rituales de divinidades.'
      ),
      h(2, 'Historia detallada'),
      p(
        'La ',
        link('Llama Negra', 'concept', 'black-flame'),
        ' no era llama común: era arma teológica capaz de quemar incluso dioses. Su distribución a los ',
        link('Pieles de Dios', 'faction', 'pieles-de-dios'),
        ' fue acto político deliberado. Los apóstoles operaban como tribunal de la propia divinidad: si un dios excedía sus límites, la ',
        link('Llama Negra', 'concept', 'black-flame'),
        ' podía corregirlo. Es el único momento documentado de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ' donde una cosmología incluyó explícitamente mecanismos para asesinar a sus propios dioses.'
      ),
      p(
        'La ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ' funcionaba en este régimen sin sello. Los seres morían cuando les correspondía. Los rituales funerarios usaban ',
        link('Llama Espectral', 'concept', 'ghostflame'),
        ' como llama de cremación, y los ',
        link('Deathbirds', 'faction', 'deathbirds'),
        ' eran sacerdotes alados de los muertos. La cosmología funcionaba — porque la muerte funcionaba.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'El régimen de la Reina representaba todo lo que el ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' por venir consideraría inaceptable: muerte real, instrumentos contra dioses, límite a la divinidad. La elevación de ',
        link('Marika', 'character', 'marika'),
        ' por la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' implicó la necesidad de derrocarlo. ',
        link('Maliketh', 'character', 'maliketh'),
        ' fue enviado como verdugo. Tras la derrota de la Reina, los ',
        link('Pieles de Dios', 'faction', 'pieles-de-dios'),
        ' sobrevivieron como secta perseguida pero su cantidad se redujo drásticamente; la ',
        link('Llama Negra', 'concept', 'black-flame'),
        ' quedó relegada a artefacto raro.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Este régimen es la cosmología "no-dorada" más documentada. Su existencia previa demuestra que el cosmos puede funcionar sin sellar la muerte y sin proteger la divinidad. La pregunta abierta es por qué el cosmos eligió cambiar a esa cosmología — o por qué la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' decidió que necesitaba reemplazarla.'
      )
    ],
    confirmed: [
      ['La ', link('Reina del Ojo Velado', 'character', 'gloam-eyed-queen'), ' fue ', link('Empyrean', 'concept', 'empyrean'), ' del régimen previo'],
      ['Distribuyó la ', link('Llama Negra', 'concept', 'black-flame'), ' a los ', link('Pieles de Dios', 'faction', 'pieles-de-dios')],
      ['La ', link('Muerte Predestinada', 'concept', 'destined-death'), ' operaba sin sello durante su reinado'],
      'Los Deathbirds y Ghostflame son reliquias de su cosmología funeraria'
    ],
    inferred: [
      'Su régimen era cosmológicamente coherente — la muerte real lo sostenía estructuralmente',
      ['La ', link('Llama Negra', 'concept', 'black-flame'), ' fue arma política deliberada, no don accidental'],
      ['La transición al ', link('Orden Dorado', 'concept', 'golden-order'), ' fue intervención de la ', link('Voluntad Mayor', 'concept', 'voluntad-mayor'), ', no evolución natural']
    ],
    theories: [
      ['El régimen de la Reina podría haber sido auspiciado por un dios externo distinto, hostil a la ', link('Voluntad Mayor', 'concept', 'voluntad-mayor')],
      ['Los ', link('Pieles de Dios', 'faction', 'pieles-de-dios'), ' son guardianes de un secreto que el Orden quiso borrar'],
      ['La ', link('Llama Negra', 'concept', 'black-flame'), ' fue creada específicamente contra la ', link('Voluntad Mayor', 'concept', 'voluntad-mayor'), ' antes de su ascensión']
    ],
    ambiguous: [
      'Cuánto duró su reinado',
      ['Si su ', link('Empyrean', 'concept', 'empyrean'), ' era de la ', link('Voluntad Mayor', 'concept', 'voluntad-mayor'), ' o de otro dios externo'],
      'Si la cosmología funeraria era diseño suyo o tradición heredada'
    ],
    relatedCharacters: ['gloam-eyed-queen', 'maliketh', 'marika'],
    relatedFactions: ['pieles-de-dios', 'deathbirds'],
    relatedConcepts: ['black-flame', 'destined-death', 'ghostflame', 'empyrean', 'voluntad-mayor'],
    relatedTimelineEvents: ['era-antigua', 'maliketh-derrota-gloam'],
  },

  'maliketh-derrota-gloam': {
    slug: 'maliketh-derrota-gloam',
    subtitle: 'El verdugo de Marika destruye el régimen previo',
    summary:
      'La derrota de la Reina del Ojo Velado por Maliketh fue acto militar deliberado, condición técnica para iniciar el Orden Dorado. Maliketh absorbió fragmentos de la Llama Negra para forjar su Hoja Negra. La era previa terminó en un solo combate.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        link('Maliketh', 'character', 'maliketh'),
        ', recién ligado a ',
        link('Marika', 'character', 'marika'),
        ' como ',
        link('Bestia Sombra', 'concept', 'shadow-bound-beast'),
        ', fue enviado a derrotar a la ',
        link('Reina del Ojo Velado', 'character', 'gloam-eyed-queen'),
        '. La operación tuvo éxito. Su victoria abrió el camino al sello posterior de la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ' y al ',
        link('Orden Dorado', 'concept', 'golden-order'),
        '.'
      ),
      h(2, 'Historia detallada'),
      p(
        'La derrota es uno de los pocos eventos cosmológicos de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ' que se sostiene en evidencia material directa: la ',
        link('Hoja Negra de Maliketh', 'concept', 'maliketh-black-blade'),
        ' integra fragmentos de la propia ',
        link('Llama Negra', 'concept', 'black-flame'),
        ' que portaban los ',
        link('Pieles de Dios', 'faction', 'pieles-de-dios'),
        '. ',
        link('Maliketh', 'character', 'maliketh'),
        ' no solo derrotó a la Reina — absorbió parte de su arsenal teológico. Su espada actual es prueba simbólica del trofeo.'
      ),
      p(
        'Los ',
        link('Pieles de Dios', 'faction', 'pieles-de-dios'),
        ' sobrevivieron pero perdieron a su ',
        link('Empyrean', 'concept', 'empyrean'),
        '. La cantidad de Black Flame disponible se redujo drásticamente. El cosmos quedó técnicamente listo para un nuevo régimen.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'Sin esta derrota, no hay ',
        link('Orden Dorado', 'concept', 'golden-order'),
        '. La derrota es precondición técnica del régimen actual. Tras ella, ',
        link('Marika', 'character', 'marika'),
        ' selló la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ' dentro del propio cuerpo de ',
        link('Maliketh', 'character', 'maliketh'),
        ' — irónicamente, dentro del verdugo que había usado esa misma fuerza para derrotar a la Reina. La cárcel de la Muerte fue construida con las manos del que la había desplegado libremente.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'El acto fundacional del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' contiene su propia condena. ',
        link('Maliketh', 'character', 'maliketh'),
        ', vencedor de la era anterior, se convirtió en prisionero de la siguiente. Su servicio post-victoria es indistinguible de su tortura. Cada régimen cosmológico parece estructurarse así: el héroe que lo posibilita acaba pagando el costo de mantenerlo.'
      )
    ],
    confirmed: [
      [link('Maliketh', 'character', 'maliketh'), ' derrotó a la ', link('Reina del Ojo Velado', 'character', 'gloam-eyed-queen')],
      ['Su ', link('Hoja Negra', 'concept', 'maliketh-black-blade'), ' incorpora ', link('Llama Negra', 'concept', 'black-flame'), ' absorbida durante o tras la derrota'],
      ['La derrota fue precondición técnica del ', link('Orden Dorado', 'concept', 'golden-order')],
      ['Los ', link('Pieles de Dios', 'faction', 'pieles-de-dios'), ' sobrevivieron pero como secta perseguida menor']
    ],
    inferred: [
      ['La operación fue ordenada por ', link('Marika', 'character', 'marika'), ' como preparación para sellar la Muerte'],
      [link('Maliketh', 'character', 'maliketh'), ' absorbió la ', link('Llama Negra', 'concept', 'black-flame'), ' deliberadamente como trofeo y herramienta'],
      'La derrota fue militar pero también ritual: cosmología destronando cosmología'
    ],
    theories: [
      'La Reina aceptó la derrota — sabía que su régimen había agotado su tiempo',
      [link('Maliketh', 'character', 'maliketh'), ' sintió ambivalencia al destruir un orden que también valoraba la muerte real'],
      ['La fuga parcial de la Muerte que más tarde escapará por la herida de ', link('Maliketh', 'character', 'maliketh'), ' procede de este combate, no del robo de ', link('Ranni', 'character', 'ranni')]
    ],
    ambiguous: [
      'Cuánto tiempo medió entre esta derrota y el sello posterior de la Muerte',
      'Si la Reina realmente murió o solo fue depuesta',
      ['Si ', link('Maliketh', 'character', 'maliketh'), ' actuó por convicción propia o por mandato puro']
    ],
    relatedCharacters: ['maliketh', 'gloam-eyed-queen', 'marika'],
    relatedFactions: ['pieles-de-dios', 'hombres-bestia'],
    relatedConcepts: ['black-flame', 'destined-death', 'rune-of-death', 'shadow-bound-beast'],
    relatedTimelineEvents: ['era-antigua', 'gloam-eyed-godskins-reign', 'muerte-predestinada'],
  },

  'birth-golden-order': {
    slug: 'birth-golden-order',
    subtitle: 'Sello de la Muerte · Ascensión del Árbol Áureo · Inauguración cosmológica del régimen actual',
    summary:
      'El nacimiento del Orden Dorado fue un acto cosmológico simultáneo: Marika selló la Muerte Predestinada, el Árbol Áureo se erigió como árbol-ley, y la Voluntad Mayor instaló su régimen sobre las Tierras Intermedias. La era dorada empezó como inmortalidad, no como mortalidad.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'Tras la derrota de la Reina previa, ',
        link('Marika', 'character', 'marika'),
        ' inauguró formalmente el ',
        link('Orden Dorado', 'concept', 'golden-order'),
        '. El acto inaugural fue triple: selló la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ' dentro del cuerpo de ',
        link('Maliketh', 'character', 'maliketh'),
        '; alzó el ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' como árbol cosmológico central; e instituyó la inmortalidad ritual a través del reciclaje de almas.'
      ),
      h(2, 'Historia detallada'),
      p(
        'El sello de la Muerte fue el acto técnicamente más violento. La ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ' fue arrancada del ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        ' y cosida al alma de ',
        link('Maliketh', 'character', 'maliketh'),
        '. Desde ese momento, los seres de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ' dejaron de poder morir verdaderamente: sus cuerpos podían ser destruidos, pero sus almas regresaban al ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' para ser recicladas.'
      ),
      p(
        'El ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' creció hasta convertirse en estructura cosmológica central. Su ',
        link('gracia', 'concept', 'grace'),
        ' se distribuyó por las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ' como signo del régimen. La autoridad de ',
        link('Marika', 'character', 'marika'),
        ' quedó ungida por la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' a través de los ',
        link('Dos Dedos', 'faction', 'dos-dedos'),
        ' como mensajeros físicos.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'El régimen funcionó durante eras. Pero su inauguración contenía la falla estructural que eventualmente lo destruiría: sellar la muerte no la elimina, solo la guarda. Cada problema cosmológico posterior — ',
        link('Godwyn', 'character', 'godwyn'),
        ' incapaz de morir, ',
        link('Aquellos que Viven en la Muerte', 'concept', 'those-who-live-in-death'),
        ', la rotura del Anillo — se rastrea a este momento fundacional. La inmortalidad forzada es la condición de toda la lore que viene después.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'El nacimiento del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' es la imagen más clara del juego de la creación divina como acto de mutilación. Para que la era dorada existiese, la muerte verdadera tuvo que ser amputada del cosmos. La era se sostiene sobre una herida — y eventualmente esa herida se reabre por sí misma.'
      )
    ],
    confirmed: [
      [link('Marika', 'character', 'marika'), ' selló la ', link('Muerte Predestinada', 'concept', 'destined-death'), ' en ', link('Maliketh', 'character', 'maliketh')],
      ['El ', link('Árbol Áureo', 'concept', 'erdtree'), ' fue erigido como árbol cosmológico central'],
      ['Los ', link('Dos Dedos', 'faction', 'dos-dedos'), ' fueron designados como mensajeros físicos de la ', link('Voluntad Mayor', 'concept', 'voluntad-mayor')],
      ['La inmortalidad ritual a través del reciclaje del ', link('Árbol Áureo', 'concept', 'erdtree'), ' comenzó con este acto']
    ],
    inferred: [
      ['La ', link('Voluntad Mayor', 'concept', 'voluntad-mayor'), ' exigió el sello como condición para apoyar el régimen'],
      [link('Marika', 'character', 'marika'), ' comprendió desde el principio que el sello era estructuralmente inestable'],
      ['El ', link('Árbol Áureo', 'concept', 'erdtree'), ' no existía con su forma actual antes de este acto — fue alzado simbólicamente']
    ],
    theories: [
      [link('Marika', 'character', 'marika'), ' aceptó el sello sabiendo que eventualmente lo rompería'],
      ['El ', link('Árbol Áureo', 'concept', 'erdtree'), ' es una versión modificada del árbol del ', link('Crisol primigenio', 'concept', 'crucible')],
      [link('Maliketh', 'character', 'maliketh'), ' aceptó la carga voluntariamente, no por servicio puro']
    ],
    ambiguous: [
      'Cuánto duró el período entre la derrota de la Reina y el sello',
      ['Si ', link('Godfrey', 'character', 'godfrey'), ' ya era consorte cuando se produjo el sello'],
      ['Si la ', link('Voluntad Mayor', 'concept', 'voluntad-mayor'), ' fue agente activo o solo aprobador del proceso']
    ],
    relatedCharacters: ['marika', 'maliketh', 'godfrey'],
    relatedFactions: ['orden-dorado', 'dos-dedos'],
    relatedConcepts: ['golden-order', 'destined-death', 'rune-of-death', 'erdtree', 'voluntad-mayor'],
    relatedTimelineEvents: ['muerte-predestinada', 'maliketh-derrota-gloam', 'marika-godfrey'],
  },

  'flame-of-ruin-confined': {
    slug: 'flame-of-ruin-confined',
    subtitle: 'La llama hostil al Árbol Áureo custodiada por el último gigante',
    summary:
      'Tras la guerra contra los Gigantes del Fuego, la Voluntad Mayor no pudo destruir su llama — solo confinarla. La Llama Quemadora, hostil al Árbol Áureo, fue encerrada en una forja con el último gigante encadenado como custodio eterno. Esa llama es lo que Melina usará para quemar el árbol.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'Tras la guerra exterminadora contra los ',
        link('Gigantes del Fuego', 'faction', 'fire-giants'),
        ' liderada por ',
        link('Godfrey', 'character', 'godfrey'),
        ' bajo orden de ',
        link('Marika', 'character', 'marika'),
        ', su llama no pudo ser destruida. Era llama hostil al ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' por designio cosmológico — vinculada a su Fell God, dios externo distinto de la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        '. Lo único posible fue confinarla.'
      ),
      h(2, 'Historia detallada'),
      p(
        'La Forja de los Gigantes en las ',
        link('Mountaintops', 'region', 'mountaintops'),
        ' fue convertida en cárcel. El último gigante superviviente fue encadenado como custodio eterno. La llama latente quedó atrapada en su forja, esperando un momento en que el Orden necesitase usarla — o un momento en que pudiera escaparse.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'El confinamiento contiene la ironía estructural del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ': para sostener su cosmología, conserva intacta el arma capaz de destruirla. La llama esperó eras. Cuando llegó el momento — la ',
        link('fractura', 'timeline', 'la-fractura'),
        ' del ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        ' y la necesidad del ',
        link('Tarnished', 'concept', 'tarnished'),
        ' de acceder al trono — la propia ',
        link('Marika', 'character', 'marika'),
        ' (a través de ',
        link('Melina', 'character', 'melina'),
        ', su hija implícita) hizo arder al ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' con esa misma llama. La era dorada se quemó con la llama que ella misma había confinado.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La Llama Quemadora simboliza la imposibilidad cosmológica de la pureza absoluta. El ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' no puede destruir todo lo que se le opone — solo encerrarlo. Pero cada cosa encerrada espera. La cárcel se vuelve, eventualmente, herramienta del régimen siguiente.'
      )
    ],
    confirmed: [
      ['La Llama Quemadora era hostil al ', link('Árbol Áureo', 'concept', 'erdtree'), ' por designio cosmológico'],
      'No pudo ser destruida tras la guerra — solo confinada',
      ['El ', link('último Gigante del Fuego', 'character', 'fire-giant'), ' fue encadenado como custodio eterno'],
      [link('Melina', 'character', 'melina'), ' usa esta misma llama para incendiar el ', link('Árbol Áureo', 'concept', 'erdtree'), ' en el final del juego']
    ],
    inferred: [
      'La llama está vinculada al Fell God, dios externo del fuego primigenio',
      [link('Marika', 'character', 'marika'), ' comprendía que la llama eventualmente sería necesaria'],
      'El custodio gigante fue mantenido vivo deliberadamente por su función ritual'
    ],
    theories: [
      'El gigante custodio sigue consciente y aceptaría su muerte como parte del rito',
      [link('Marika', 'character', 'marika'), ' diseñó el confinamiento sabiendo que sería la herramienta del fin'],
      ['La Llama Quemadora es contraparte de la ', link('Llama Negra', 'concept', 'black-flame'), ': ambas pueden destruir lo divino']
    ],
    ambiguous: [
      ['Si ', link('Godfrey', 'character', 'godfrey'), ' participó del confinamiento o solo de la guerra previa'],
      'Si la llama tiene consciencia propia o es solo materia hostil',
      ['Si el ', link('Fell God', 'concept', 'fell-god'), ' sigue activo o se retiró tras el confinamiento']
    ],
    relatedCharacters: ['godfrey', 'marika', 'melina'],
    relatedFactions: ['fire-giants', 'orden-dorado'],
    relatedRegions: ['mountaintops'],
    relatedConcepts: ['erdtree', 'dioses-exteriores'],
    relatedTimelineEvents: ['guerra-gigantes-fuego', 'erdtree-quemado'],
  },

  'morgott-mohg-imprisonment': {
    slug: 'morgott-mohg-imprisonment',
    subtitle: 'Hijos Omen encerrados bajo Leyndell · Hipocresía pública del Orden Dorado',
    summary:
      'Cuando Marika y Radagon engendraron gemelos Omen — Morgott y Mohg — el régimen los encerró en las alcantarillas de Leyndell. La ley dorada clasificaba a los Omens como aberraciones, incluso siendo hijos del trono. La hipocresía es estructural: la familia real cumplió con la ley contra sus propios hijos.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'Tras la fusión de ',
        link('Marika', 'character', 'marika'),
        ' con ',
        link('Radagon', 'character', 'radagon'),
        ' y su segundo matrimonio, nacieron dos gemelos Omen: ',
        link('Morgott', 'character', 'morgott'),
        ' y ',
        link('Mohg', 'character', 'mohg'),
        '. La ley del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' clasificaba a los ',
        link('Omens', 'faction', 'omens'),
        ' como aberraciones malditas. Los gemelos fueron encarcelados en el ',
        link('Subsuelo Shunning-Grounds', 'region', 'subterranean-shunning-grounds'),
        '.'
      ),
      h(2, 'Historia detallada'),
      p(
        'La sangre Omen procedía de ',
        link('Radagon', 'character', 'radagon'),
        ' — la huella del ',
        link('Crisol primigenio', 'concept', 'crucible'),
        ' que él arrastraba sin proclamar. Los gemelos crecieron en mazmorras, vigilados por ',
        link('Verdugos Omen', 'faction', 'omenkillers'),
        ' que oficiaban rituales para "neutralizar" su naturaleza maldita. Su existencia era secreto público: todos sabían que existían, nadie hablaba de ellos.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'El encarcelamiento generó las dos respuestas opuestas que dividirán al régimen tras la ',
        link('fractura', 'timeline', 'la-fractura'),
        '. ',
        link('Morgott', 'character', 'morgott'),
        ' eligió la fidelidad servil al sistema que lo encarceló. ',
        link('Mohg', 'character', 'mohg'),
        ' eligió la rebelión absoluta a través del pacto con la ',
        link('Madre Informe', 'concept', 'formless-mother'),
        '. Ambas respuestas son productos directos del trauma juvenil.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'El encarcelamiento de los gemelos es la grieta moral del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' en su forma más íntima. La ley se aplica incluso a los hijos del trono — excepto que la propia diosa los engendró en violación de la categoría que la ley protege. La hipocresía no es excepción del régimen: es su estructura. Cada cosmología tiene su mazmorra escondida bajo la capital.'
      )
    ],
    confirmed: [
      [link('Morgott', 'character', 'morgott'), ' y ', link('Mohg', 'character', 'mohg'), ' son gemelos Omen hijos de ', link('Marika', 'character', 'marika'), ' y ', link('Radagon', 'character', 'radagon')],
      ['Fueron encarcelados en el ', link('Subsuelo Shunning-Grounds', 'region', 'subterranean-shunning-grounds'), ' bajo Leyndell'],
      'Los Omenkillers oficiaban rituales sobre ellos durante su juventud',
      'Su existencia fue secreto público del régimen'
    ],
    inferred: [
      ['La sangre Omen procede del lado ', link('Radagon', 'character', 'radagon'), ', no del lado ', link('Marika', 'character', 'marika')],
      [link('Marika', 'character', 'marika'), ' consintió o no pudo evitar el encarcelamiento'],
      'Las dos respuestas opuestas de los gemelos son producto directo del trauma'
    ],
    theories: [
      [link('Marika', 'character', 'marika'), ' lloraba en privado por sus hijos pero no podía contradecir la ley pública'],
      'Los gemelos pudieron haber sido visitados secretamente por algún miembro del régimen',
      ['El encarcelamiento fue prueba ritualizada para que la ', link('Voluntad Mayor', 'concept', 'voluntad-mayor'), ' confirmara la legitimidad del Orden']
    ],
    ambiguous: [
      'Cuánto tiempo permanecieron en las mazmorras',
      ['Cómo y cuándo escaparon (', link('Morgott', 'character', 'morgott'), ' primero, posiblemente ', link('Mohg', 'character', 'mohg'), ' poco después)'],
      'Si compartieron celda o estuvieron separados durante la juventud'
    ],
    relatedCharacters: ['morgott', 'mohg', 'marika', 'radagon'],
    relatedFactions: ['omens', 'omenkillers', 'orden-dorado'],
    relatedRegions: ['subterranean-shunning-grounds', 'leyndell'],
    relatedConcepts: ['crucible'],
    relatedTimelineEvents: ['hijos-marika-godfrey', 'la-fractura'],
  },

  'ranni-bodily-death': {
    slug: 'ranni-bodily-death',
    subtitle: 'La Empyrean asesina su propia carne · Liberación del contrato divino',
    summary:
      'La operación más sofisticada de la Noche de los Cuchillos Negros no fue el asesinato de Godwyn — fue el de Ranni misma. Al matar su propio cuerpo Empyrean con una hoja forjada con la Runa de la Muerte robada, Ranni se liberó del contrato con los Dos Dedos y abrió camino a su propia rebelión cosmológica.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'Durante la ',
        link('Noche de los Cuchillos Negros', 'timeline', 'ranni-noche-cuchillos'),
        ', uno de los ',
        link('Cuchillos Negros', 'faction', 'cuchillos-negros'),
        ' — armas forjadas con un fragmento de la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ' — apuñaló el cuerpo de ',
        link('Ranni', 'character', 'ranni'),
        '. La hoja era una de las pocas armas capaces de matar a un ',
        link('Empyrean', 'concept', 'empyrean'),
        '. La operación tuvo éxito parcial: el cuerpo ',
        link('Empyrean', 'concept', 'empyrean'),
        ' murió, pero como la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ' estaba sellada, la transferencia no fue limpia.'
      ),
      h(2, 'Historia detallada'),
      p(
        link('Ranni', 'character', 'ranni'),
        ' había preparado la operación durante siglos. Conocía la limitación cosmológica del sello: si su cuerpo ',
        link('Empyrean', 'concept', 'empyrean'),
        ' moría incompletamente, su mente podría transferirse a un cuerpo de respaldo. Eligió una muñeca articulada — diseñada o adaptada por sus aliados, probablemente con asistencia de ',
        link('Iji', 'character', 'iji'),
        ' como herrero — como nuevo recipiente.'
      ),
      p(
        'El acto la marcó con una "Marca de Maldición de Muerte" (Cursemark of Death), residuo cosmológico del corte que la separó de su contrato ',
        link('Empyrean', 'concept', 'empyrean'),
        '. Esa marca quedó como reliquia: el ',
        link('Tarnished', 'concept', 'tarnished'),
        ' puede recuperarla durante su quest. ',
        link('Ranni', 'character', 'ranni'),
        ' dejó atrás su cuerpo asesinado en una de las ',
        link('Tres Hermanas', 'region', 'three-sisters'),
        ' y descendió, ahora habitando porcelana, hacia los recovecos donde planeaba el resto de su revolución cosmológica.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'La transferencia funcionó. ',
        link('Ranni', 'character', 'ranni'),
        ' quedó libre del contrato ',
        link('Empyrean', 'concept', 'empyrean'),
        '. Los ',
        link('Dos Dedos', 'faction', 'dos-dedos'),
        ' perdieron control sobre ella. Pero el daño colateral fue masivo: ',
        link('Godwyn', 'character', 'godwyn'),
        ' también fue asesinado en la misma noche, y su muerte parcial detonó la pena de ',
        link('Marika', 'character', 'marika'),
        ' que rompió el ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        '. La ',
        link('fractura', 'timeline', 'la-fractura'),
        ' entera de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ' empieza aquí.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La auto-muerte de ',
        link('Ranni', 'character', 'ranni'),
        ' es la rebelión cosmológica más radical del juego: rechazar la divinidad ofrecida ',
        em('matándose a sí misma'),
        ' para evitar aceptarla. Ningún otro personaje de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ' se atreve a este nivel de operación. La porcelana fría de su muñeca actual es el símbolo perfecto: ya no es de carne, ya no es susceptible al ciclo del ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        '. Su libertad fue conquistada por amputación literal.'
      )
    ],
    confirmed: [
      ['El cuerpo ', link('Empyrean', 'concept', 'empyrean'), ' de ', link('Ranni', 'character', 'ranni'), ' fue asesinado durante la Noche de los ', link('Cuchillos Negros', 'faction', 'cuchillos-negros')],
      'Su mente fue transferida a una muñeca articulada como cuerpo de respaldo',
      ['La operación la liberó del contrato con los ', link('Dos Dedos', 'faction', 'dos-dedos')],
      'La Cursemark of Death es residuo cosmológico del corte'
    ],
    inferred: [
      'La operación estuvo en preparación durante siglos',
      'Iji o algún otro aliado herrero adaptó la muñeca como recipiente',
      ['La ', link('Voluntad Mayor', 'concept', 'voluntad-mayor'), ' no detectó la operación a tiempo para impedirla']
    ],
    theories: [
      'La muñeca fue creación deliberada, posiblemente vinculada a tradiciones Caria de magia de marionetas',
      [link('Ranni', 'character', 'ranni'), ' preparó múltiples cuerpos de respaldo por si el primero fallaba'],
      ['La Cursemark of Death es la huella física de su nueva naturaleza no-', link('Empyrean', 'concept', 'empyrean')]
    ],
    ambiguous: [
      ['Si ', link('Ranni', 'character', 'ranni'), ' planeó la coordinación con el asesinato de ', link('Godwyn', 'character', 'godwyn'), ' o aprovechó una operación independiente'],
      'Si la transferencia conservó toda su consciencia o solo parte',
      ['Si los ', link('Dos Dedos', 'faction', 'dos-dedos'), ' sospechaban su rebelión antes del corte']
    ],
    relatedCharacters: ['ranni', 'godwyn', 'maliketh', 'iji', 'blaidd', 'seluvis'],
    relatedFactions: ['cuchillos-negros', 'caria', 'dos-dedos'],
    relatedRegions: ['three-sisters'],
    relatedConcepts: ['rune-of-death', 'destined-death', 'empyrean'],
    relatedTimelineEvents: ['ranni-noche-cuchillos', 'la-fractura'],
    relatedEndings: ['age-of-stars'],
  },

  'godwyn-prince-of-death': {
    slug: 'godwyn-prince-of-death',
    subtitle: 'Cuerpo eterno bajo Deeproot · Origen de la Deathroot · Príncipe que no termina de morir',
    summary:
      'Tras la Noche de los Cuchillos Negros, el cuerpo sin alma de Godwyn se hundió en las raíces del Árbol Áureo y se transformó en el primer caso de Aquellos que Viven en la Muerte. Su descomposición eterna genera Deathroot, sustancia que infecta las Tierras Intermedias desde abajo. La cosmología del Orden no puede procesarlo.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        link('Godwyn', 'character', 'godwyn'),
        ' fue asesinado en su alma durante la Noche, pero su cuerpo no murió porque la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ' estaba sellada. El cadáver sin alma se hundió en las raíces del ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' y comenzó una transformación monstruosa: crecimiento eterno entrelazado con dragones, raíces y necrosis luminosa. Hoy yace bajo ',
        link('Deeproot Depths', 'region', 'deeproot-depths'),
        ' como Príncipe de la Muerte.'
      ),
      h(2, 'Historia detallada'),
      p(
        'El proceso fue inédito. Ningún ',
        link('demidiós', 'concept', 'demidios'),
        ' había muerto parcialmente antes — la inmortalidad ritual del ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' procesaba a los muertos completos, no a almas-cuerpo desincronizados. El cadáver de ',
        link('Godwyn', 'character', 'godwyn'),
        ' quedó cosmológicamente atascado: incapaz de morir por completo, incapaz de regresar al ciclo del ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        '. Su descomposición eterna generó ',
        link('Deathroot', 'concept', 'deathroot'),
        ', sustancia necrótica que se filtra por las raíces del árbol y emerge en cada cripta de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ' animando cadáveres.'
      ),
      p(
        'El cuerpo está fusionado con serpientes draconicídas, incluyendo el cuerpo onírico de ',
        link('Fortissax', 'character', 'fortissax'),
        ' que sigue luchando eternamente contra la corrupción del antiguo amigo. ',
        link('Fia', 'character', 'fia'),
        ' dedica su quest a sanar la herida cosmológica que el cadáver representa, recuperando la Runa Mendaz que devolverá la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ' al ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        '.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'La existencia del Príncipe de la Muerte es prueba de que el sello de ',
        link('Marika', 'character', 'marika'),
        ' fue estructuralmente fallido. La inmortalidad ritual no funciona cuando el alma muere antes del cuerpo. Cada cadáver reanimado de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ', cada criatura de los ',
        link('Aquellos que Viven en la Muerte', 'concept', 'those-who-live-in-death'),
        ', cada filtración de Deathroot — todo es eco de este caso original. La ',
        link('Era del Crepúsculo', 'ending', 'duskborn'),
        ' es el final que cierra esta herida.'
      ),
      h(2, 'Significado simbólico'),
      p(
        link('Godwyn', 'character', 'godwyn'),
        ' como Príncipe de la Muerte es el monumento subterráneo del juego. Lo que el régimen no puede mirar de frente: un dios que no muere ni vive, una herida que no se cicatriza, una verdad cosmológica que el sello de ',
        link('Marika', 'character', 'marika'),
        ' nunca supo procesar. Bajo el oro del ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' crece el cadáver del hijo amado. Es la imagen más exacta del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' completo.'
      )
    ],
    confirmed: [
      ['El cuerpo sin alma de ', link('Godwyn', 'character', 'godwyn'), ' se hundió en las raíces del ', link('Árbol Áureo', 'concept', 'erdtree'), ' tras la Noche'],
      'Su descomposición eterna genera Deathroot',
      ['Es el primer caso de ', link('Aquellos que Viven en la Muerte', 'concept', 'those-who-live-in-death')],
      ['Fortissax está atrapado en la pesadilla del ', link('demidiós', 'concept', 'demidios'), ' muerto']
    ],
    inferred: [
      ['El sello de la ', link('Muerte Predestinada', 'concept', 'destined-death'), ' hizo posible esta transformación monstruosa'],
      ['La Deathroot que infecta las ', link('Tierras Intermedias', 'region', 'tierras-intermedias'), ' enteras emana de su cadáver'],
      'Conserva alguna forma de presencia onírica que afecta a Fortissax'
    ],
    theories: [
      [link('Godwyn', 'character', 'godwyn'), ' no es solo cadáver: conserva voluntad residual que intenta alcanzar el cosmos'],
      'La Deathroot es expresión de su anhelo de muerte real',
      ['La ', link('Era del Crepúsculo', 'ending', 'duskborn'), ' le devuelve dignidad al permitirle finalmente morir']
    ],
    ambiguous: [
      'Si conserva consciencia bajo Deeproot Depths',
      'Si su pacto con Fortissax sobrevive en el cadáver eterno',
      'Si su transformación todavía progresa o se ha estabilizado'
    ],
    relatedCharacters: ['godwyn', 'fortissax', 'fia', 'd', 'rogier', 'maliketh'],
    relatedFactions: ['those-who-live-in-death'],
    relatedRegions: ['deeproot-depths'],
    relatedConcepts: ['deathroot', 'destined-death', 'rune-of-death', 'those-who-live-in-death'],
    relatedTimelineEvents: ['ranni-noche-cuchillos'],
    relatedEndings: ['duskborn'],
  },

  'radagon-repair-attempt': {
    slug: 'radagon-repair-attempt',
    subtitle: 'El esposo-aspecto golpea las grietas que su otra mitad abrió',
    summary:
      'Mientras Marika rompía el Anillo Elden, su otro aspecto Radagon dedicó su existencia a repararlo. La paradoja del cuerpo compartido: dos voluntades irreconciliables operando en una sola carne. Su martillo nunca fue suficiente. Sus cadenas doradas son cicatriz visible del conflicto interno.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'Tras la rotura del ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        ' por ',
        link('Marika', 'character', 'marika'),
        ', su otro aspecto ',
        link('Radagon', 'character', 'radagon'),
        ' inició una campaña silenciosa de reparación. Su martillo característico — luego conocido como Martillo de Reparación o Martillo ',
        link('Marika', 'character', 'marika'),
        ' — golpeaba las grietas del Anillo intentando hacer que se cerrasen. La operación nunca tuvo éxito: las grietas eran estructurales, no superficiales.'
      ),
      h(2, 'Historia detallada'),
      p(
        link('Radagon', 'character', 'radagon'),
        ', fundamentalista del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' por convicción, no podía aceptar que su otra mitad hubiese destruido el régimen. Sus martillazos son acto teológico antes que ingenieril: cada golpe es afirmación de que el Anillo aún puede sostenerse. Las cadenas doradas que recubren su cuerpo en su forma de jefe final son cicatrices auto-impuestas — el residuo material del conflicto interno con ',
        link('Marika', 'character', 'marika'),
        ' dentro del cuerpo común.'
      ),
      p(
        'Su filosofía codificó lo que más tarde se conocería como ',
        link('Fundamentalismo del Orden Dorado', 'faction', 'fundamentalistas'),
        ', tradición intelectual que ',
        link('Goldmask', 'character', 'goldmask'),
        ' eventualmente perfeccionaría. La ',
        link('Ley de la Regresión', 'concept', 'law-of-regression'),
        ' es heredera filosófica directa de los intentos de ',
        link('Radagon', 'character', 'radagon'),
        ' de regresar al Anillo a su estado pre-rotura.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'El esfuerzo de ',
        link('Radagon', 'character', 'radagon'),
        ' fue inútil técnicamente, pero retrasó el colapso. Sin sus reparaciones constantes, el régimen probablemente habría caído antes. Cuando el ',
        link('Tarnished', 'concept', 'tarnished'),
        ' lo enfrenta como segunda fase tras ',
        link('Marika', 'character', 'marika'),
        ' encadenada, lo hace bajo el peso acumulado de eras de martillazos fallidos. Su última batalla es la última manifestación de esa empresa imposible.'
      ),
      h(2, 'Significado simbólico'),
      p(
        link('Radagon', 'character', 'radagon'),
        ' es la imagen del reformista cuyo reformismo solo es posible porque hay revolución. En el mismo cuerpo conviven el revolucionario y el conservador y ninguno puede ganar sin matar al otro. Su martillo simboliza la imposibilidad de la auto-reconciliación divina.'
      )
    ],
    confirmed: [
      [link('Radagon', 'character', 'radagon'), ' golpeó eternamente las grietas del ', link('Anillo Elden', 'concept', 'elden-ring'), ' con su martillo'],
      ['Sus cadenas doradas son resultado del conflicto interno con ', link('Marika', 'character', 'marika')],
      ['Su filosofía generó el Fundamentalismo del ', link('Orden Dorado', 'concept', 'golden-order')],
      [link('Goldmask', 'character', 'goldmask'), ' y ', link('Corhyn', 'character', 'corhyn'), ' son herederos filosóficos directos']
    ],
    inferred: [
      'Las reparaciones nunca cerraron las grietas pero retrasaron el colapso',
      [link('Marika', 'character', 'marika'), ' sentía cada martillazo como tortura interna'],
      ['Las cadenas son auto-impuestas, no impuestas por la ', link('Voluntad Mayor', 'concept', 'voluntad-mayor')]
    ],
    theories: [
      [link('Radagon', 'character', 'radagon'), ' sabía que la reparación era imposible pero seguía por deber teológico puro'],
      ['La ', link('Voluntad Mayor', 'concept', 'voluntad-mayor'), ' toleró la reparación porque retrasaba la sucesión cosmológica'],
      ['El Anillo eventualmente se reparó parcialmente — solo no del modo que ', link('Radagon', 'character', 'radagon'), ' esperaba']
    ],
    ambiguous: [
      ['Cuánto tiempo dedicó ', link('Radagon', 'character', 'radagon'), ' a la reparación antes de la batalla final'],
      ['Si ', link('Marika', 'character', 'marika'), ' lo apoyaba en silencio o lo aborrecía interiormente'],
      ['Si conocía el plan de ', link('Goldmask', 'character', 'goldmask'), ' o lo desconocía']
    ],
    relatedCharacters: ['radagon', 'marika', 'goldmask', 'corhyn'],
    relatedFactions: ['orden-dorado', 'fundamentalistas'],
    relatedConcepts: ['elden-ring', 'golden-order', 'law-of-regression'],
    relatedTimelineEvents: ['la-fractura', 'radagon-es-marika'],
    relatedEndings: ['order'],
  },

  'shattering-war': {
    slug: 'shattering-war',
    subtitle: 'Guerra civil entre demidioses · Sin vencedor · Colapso político y metafísico simultáneo',
    summary:
      'Tras la fractura del Anillo Elden, los demidioses se dispersaron por las Tierras Intermedias reclamando Grandes Runas. La guerra civil que siguió no produjo vencedor: cada combatiente quedó parcialmente arruinado. La era dorada terminó políticamente sin que ningún régimen alternativo pudiese consolidarse.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'Cuando ',
        link('Marika', 'character', 'marika'),
        ' rompió el Anillo, sus Grandes Runas se dispersaron entre sus hijos ',
        link('demidiós', 'concept', 'demidios'),
        '. Cada uno reclamó la suya y se lanzó a la guerra contra los demás. La ',
        link('Guerra del Shattering', 'timeline', 'shattering-war'),
        ' duró un período de duración no exacta pero suficiente para arruinar las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ' enteras.'
      ),
      h(2, 'Historia detallada'),
      p(
        'Los principales combatientes fueron: ',
        link('Godrick', 'character', 'godrick'),
        ' (recluido en Stormveil con su ',
        link('Gran Runa', 'concept', 'great-rune'),
        ' débil); ',
        link('Rennala', 'character', 'rennala'),
        ' (ya colapsada, sin participación activa pero con su runa custodiada en Raya Lucaria); ',
        link('Radahn', 'character', 'radahn'),
        ' (general invicto en ',
        link('Caelid', 'region', 'caelid'),
        '); ',
        link('Rykard', 'character', 'rykard'),
        ' (entregándose a Eiglay en Volcano Manor); ',
        link('Morgott', 'character', 'morgott'),
        ' (defendiendo Leyndell); ',
        link('Mohg', 'character', 'mohg'),
        ' (construyendo Mohgwyn subterránea); ',
        link('Malenia', 'character', 'malenia'),
        ' (marchando a ',
        link('Caelid', 'region', 'caelid'),
        ' en nombre de ',
        link('Miquella', 'character', 'miquella'),
        ').'
      ),
      p(
        'Ninguno venció. La ',
        link('Batalla de Aeonia', 'timeline', 'batalla-aeonia'),
        ' arruinó simultáneamente a ',
        link('Radahn', 'character', 'radahn'),
        ' y a ',
        link('Malenia', 'character', 'malenia'),
        '. ',
        link('Mohg', 'character', 'mohg'),
        ' secuestró a ',
        link('Miquella', 'character', 'miquella'),
        ' pero su proyecto sangriento se estancó. ',
        link('Rykard', 'character', 'rykard'),
        ' se fundió con Eiglay y dejó de ser plenamente humano. ',
        link('Godrick', 'character', 'godrick'),
        ' se volvió caricatura. ',
        link('Morgott', 'character', 'morgott'),
        ' se atrincheró. La guerra terminó por agotamiento estructural, no por victoria.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'El estado de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ' cuando llega el ',
        link('Tarnished', 'concept', 'tarnished'),
        ' es producto directo de esta guerra. Cada región arrasada, cada ',
        link('demidiós', 'concept', 'demidios'),
        ' encerrado en su pequeño reino fallido, cada ',
        link('Tarnished', 'concept', 'tarnished'),
        ' candidato improbable al trono — todo es consecuencia de que ningún ',
        link('demidiós', 'concept', 'demidios'),
        ' pudo consolidar un régimen alternativo. La ausencia de vencedor es lo que abre el espacio para que un agente externo, como el ',
        link('Tarnished', 'concept', 'tarnished'),
        ', pueda decidir el destino del cosmos.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La Guerra del Shattering encarna la imposibilidad estructural del régimen post-fractura. Cada ',
        link('demidiós', 'concept', 'demidios'),
        ' cargó con un fragmento del Anillo y descubrió que el fragmento no le bastaba. Necesitaban a los demás — pero la enemistad mutua los hacía incompatibles. El régimen del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' se demostró indisoluble: solo unido funcionaba; dividido, no producía nada coherente.'
      )
    ],
    confirmed: [
      ['Los demidioses reclamaron Grandes Runas tras la ', link('fractura', 'timeline', 'la-fractura')],
      ['Ningún ', link('demidiós', 'concept', 'demidios'), ' venció a los demás'],
      ['La Batalla de Aeonia arruinó a ', link('Radahn', 'character', 'radahn'), ' y a ', link('Malenia', 'character', 'malenia'), ' simultáneamente'],
      ['El estado actual de las ', link('Tierras Intermedias', 'region', 'tierras-intermedias'), ' son producto directo de esta guerra']
    ],
    inferred: [
      ['La guerra duró siglos según el ritmo cosmológico de las ', link('Tierras Intermedias', 'region', 'tierras-intermedias')],
      ['La ', link('Voluntad Mayor', 'concept', 'voluntad-mayor'), ' permitió que se desarrollase para producir un candidato externo (el ', link('Tarnished', 'concept', 'tarnished'), ')'],
      ['Cada ', link('demidiós', 'concept', 'demidios'), ' comprendió individualmente que no podría vencer pero ninguno admitió la rendición']
    ],
    theories: [
      [link('Marika', 'character', 'marika'), ' orquestó la dispersión deliberadamente para producir el escenario actual'],
      ['Algunas alianzas existieron en secreto (', link('Mohg', 'character', 'mohg'), ' y los Bloody Fingers infiltrando otras facciones)'],
      'La guerra continúa cosmológicamente — solo que ya nadie pelea activamente'
    ],
    ambiguous: [
      'Cuánto tiempo duró exactamente',
      'Si hubo treguas formales entre demidioses',
      'Si todos los demidioses recibieron Grandes Runas o solo algunos'
    ],
    relatedCharacters: ['godrick', 'rennala', 'radahn', 'rykard', 'morgott', 'mohg', 'malenia', 'miquella'],
    relatedFactions: ['golden-lineage', 'redmanes', 'volcano-manor', 'cleanrot-knights'],
    relatedRegions: ['caelid', 'liurnia', 'stormveil', 'mt-gelmir', 'haligtree', 'mohgwyn'],
    relatedConcepts: ['great-rune', 'tarnished'],
    relatedTimelineEvents: ['la-fractura', 'demidioses-fractura', 'batalla-aeonia'],
  },

  'godrick-grafting': {
    slug: 'godrick-grafting',
    subtitle: 'Sangre debilitada compensada con carne ajena · El último heredero del linaje',
    summary:
      'Godrick, bisnieto descendiente lateral de Godfrey, conserva su Gran Runa cosiéndose partes de cuerpos ajenos. La técnica del injerto es síntoma estructural de la decadencia del Linaje Dorado: para parecer poderoso, el demidiós más débil necesita acumular carne que no es suya.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        link('Godrick', 'character', 'godrick'),
        ' es heredero generacionalmente diluido del ',
        link('Linaje Dorado', 'faction', 'golden-lineage'),
        '. Su ',
        link('Gran Runa', 'concept', 'great-rune'),
        ' es la más débil del juego; su sangre ',
        link('Empyrean', 'concept', 'empyrean'),
        ' ha pasado por demasiadas generaciones laterales como para conservar potencia. Para mantener autoridad, recurrió a una tecnología antigua: el ',
        link('injerto', 'concept', 'grafting'),
        ', cosido de partes de cuerpos ajenos al propio.'
      ),
      h(2, 'Historia detallada'),
      p(
        'La tecnología del injerto procede de tradiciones marginales del ',
        link('Crisol primigenio', 'concept', 'crucible'),
        ' que el ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' nunca purgó del todo. Los ',
        link('Crucible Knights', 'concept', 'crucible-knights'),
        ' conservan iconografía de mezcla corporal — alas, escamas, cuernos — como marca de continuidad con el ',
        link('Crisol', 'concept', 'crucible'),
        '. ',
        link('Godrick', 'character', 'godrick'),
        ' adaptó esta tradición a un uso más crudo: en lugar de portar simbólicamente la sangre primigenia, literalmente cose partes de soldados caídos a su propio cuerpo.'
      ),
      p(
        'Sus salas en ',
        link('Stormveil', 'region', 'stormveil'),
        ' están decoradas con cuerpos injertados como firma arquitectónica. Su lanza sostiene una cabeza de dragón fusionada — imitación patética del pacto de ',
        link('Godwyn', 'character', 'godwyn'),
        ' con ',
        link('Fortissax', 'character', 'fortissax'),
        '. Su muerte injertando el brazo del ',
        link('Tarnished', 'concept', 'tarnished'),
        ' es cierre perfecto: hasta su última agonía, ',
        link('Godrick', 'character', 'godrick'),
        ' injerta.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'El injerto de ',
        link('Godrick', 'character', 'godrick'),
        ' es síntoma de la decadencia estructural del ',
        link('Linaje Dorado', 'faction', 'golden-lineage'),
        '. Cada generación lateral diluyó la sangre. Cuando la ',
        link('fractura', 'timeline', 'la-fractura'),
        ' llegó, el linaje principal estaba muerto (',
        link('Godwyn', 'character', 'godwyn'),
        ') o disperso (los demidioses Caria). Solo quedaba la línea menor de ',
        link('Godrick', 'character', 'godrick'),
        '. La técnica del injerto es lo único que mantiene la apariencia. Sin ella, no habría ',
        link('demidiós', 'concept', 'demidios'),
        ' Golden Lineage activo.'
      ),
      h(2, 'Significado simbólico'),
      p(
        link('Godrick', 'character', 'godrick'),
        ' es el régimen entero llevado al absurdo cosmológico. Cada brazo extra cosido a su torso es metáfora perfecta del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' actual: un sistema que solo puede sostener apariencia de poder acumulando partes ajenas. La diferencia entre ',
        link('Godrick', 'character', 'godrick'),
        ' y los demás demidioses es de esencia, no de magnitud: su verbo característico es transitivo y patético — él no hace, él pega.'
      )
    ],
    confirmed: [
      [link('Godrick', 'character', 'godrick'), ' cose partes de cuerpos ajenos a su propio cuerpo y a sus salas'],
      ['La técnica del injerto procede del ', link('Crisol primigenio', 'concept', 'crucible')],
      ['Su muerte injertando al ', link('Tarnished', 'concept', 'tarnished'), ' cierra el ciclo'],
      'Los Grafted Scions son experimentos preliminares de la técnica'
    ],
    inferred: [
      ['Los injertos compensan la debilidad estructural de su sangre ', link('Empyrean', 'concept', 'empyrean'), ' diluida'],
      ['Su obsesión con dragones imita el pacto de ', link('Godwyn', 'character', 'godwyn'), ' con Fortissax'],
      ['Sin injertar, ', link('Godrick', 'character', 'godrick'), ' no podría sostener su ', link('Gran Runa', 'concept', 'great-rune')]
    ],
    theories: [
      'El conocimiento del injerto fue heredado secretamente de los Crucible Knights',
      'Sus súbditos en Stormveil le sirven por miedo, no por lealtad',
      ['Si ', link('Nepheli', 'character', 'nepheli-loux'), ' ascendiera al trono ancestral, la técnica del injerto se purgaría del régimen']
    ],
    ambiguous: [
      'Cuántos siglos lleva injertándose',
      'Si conocía la disolución progresiva de su sangre o vivía en autoengaño',
      'Si los Grafted Scions son experimentos suyos o reliquias anteriores'
    ],
    relatedCharacters: ['godrick', 'godfrey', 'godwyn', 'nepheli-loux', 'fortissax'],
    relatedFactions: ['golden-lineage', 'orden-dorado'],
    relatedRegions: ['stormveil', 'limgrave'],
    relatedConcepts: ['grafting', 'crucible', 'great-rune', 'crucible-knights'],
    relatedTimelineEvents: ['shattering-war', 'demidioses-fractura'],
  },

  'morgott-defends-leyndell': {
    slug: 'morgott-defends-leyndell',
    subtitle: 'El Rey Caído defiende el régimen que lo encarceló · "Último de todos los reyes"',
    summary:
      'Tras la fractura, Morgott — Omen encarcelado durante su juventud — eligió defender el Orden Dorado contra los Tarnished aspirantes. Bajo el alias de Margit, vigiló los accesos al trono. Como Rey Omen reinó sobre Leyndell. Su lealtad excede toda lógica de privilegio: defendió hasta la muerte el régimen que lo había despreciado.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        link('Morgott', 'character', 'morgott'),
        ' escapó del ',
        link('Subsuelo Shunning-Grounds', 'region', 'subterranean-shunning-grounds'),
        ' en algún momento posterior a la ',
        link('fractura', 'timeline', 'la-fractura'),
        ' del ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        '. Asumió el alias de ',
        link('Margit', 'character', 'margit'),
        ' el Presagio Caído como identidad de campo y, posteriormente, la corona de Rey Omen como autoridad pública en ',
        link('Leyndell', 'region', 'leyndell'),
        '.'
      ),
      h(2, 'Historia detallada'),
      p(
        'Como ',
        link('Margit', 'character', 'margit'),
        ' aparece tres veces ante el ',
        link('Tarnished', 'concept', 'tarnished'),
        ': en Stormhill (portero de Stormveil), en el camino a la ',
        link('Mesa Redonda', 'concept', 'roundtable-hold'),
        ' (guardián fantasmal), y antes de Leyndell. Cada aparición es advertencia ritual: "',
        link('Tarnished', 'concept', 'tarnished'),
        ', retírate". Su fraseología sugiere que conoce los nombres de los aspirantes y los considera blasfemos por la mera ambición de retomar el trono. La paradoja es total: el ',
        link('demidiós', 'concept', 'demidios'),
        ' que el régimen desprecia es el guardián más eficaz de ese mismo régimen.'
      ),
      p(
        'Como Rey Omen, ',
        link('Morgott', 'character', 'morgott'),
        ' reside en Leyndell defendiendo la capital. Su ',
        link('gracia', 'concept', 'grace'),
        ' es prestada y dolorosa — su sangre Omen genera la "',
        link('Maldición Omen', 'concept', 'omen-curse'),
        '" como dolor crónico. Cada paso que da en su corona dorada le recuerda que su forma natural es la ',
        link('maldición Omen', 'concept', 'omen-curse'),
        ' oculta debajo. Pero sigue. Su lealtad es elección teológica deliberada, no ignorancia.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'Sin ',
        link('Morgott', 'character', 'morgott'),
        ', Leyndell habría caído antes. Su defensa fue lo que mantuvo el último bastión del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' activo durante toda la ',
        link('fractura', 'timeline', 'la-fractura'),
        '. Su muerte ante el ',
        link('Tarnished', 'concept', 'tarnished'),
        ' abre el camino al trono. Sus últimas palabras — "vagabundo ',
        link('Tarnished', 'concept', 'tarnished'),
        ', sigue el camino justo" — son las de un mártir que muere por una causa que nunca le perteneció.'
      ),
      h(2, 'Significado simbólico'),
      p(
        link('Morgott', 'character', 'morgott'),
        ' es la pregunta más oscura del juego: ¿se puede ser leal a un sistema que te aborrece? Su existencia desafía toda teoría de "los oprimidos siempre se rebelan". Su tragedia es la del que entiende perfectamente la injusticia que sufre y decide, contra toda lógica emocional, sostener el sistema que la perpetúa. "Último de todos los reyes" — el título que el juego le otorga — describe exactamente su rol: el último guardián de un linaje que ya no lo reconoce como heredero legítimo.'
      )
    ],
    confirmed: [
      [link('Morgott', 'character', 'morgott'), ' escapó del ', link('Subsuelo Shunning-Grounds', 'region', 'subterranean-shunning-grounds'), ' tras la ', link('fractura', 'timeline', 'la-fractura')],
      ['Adoptó el alias de ', link('Margit', 'character', 'margit'), ' el Presagio Caído'],
      'Defendió Leyndell como Rey Omen hasta la muerte',
      ['Sus últimas palabras al ', link('Tarnished', 'concept', 'tarnished'), ' son palabras de mártir']
    ],
    inferred: [
      'Su devoción al Orden es elección teológica, no ignorancia',
      ['La ', link('Maldición Omen', 'concept', 'omen-curse'), ' le genera dolor crónico durante toda su defensa'],
      [link('Mohg', 'character', 'mohg'), ', su gemelo, podría haberlo apoyado pero eligió la rebelión opuesta']
    ],
    theories: [
      ['Sus apariciones como ', link('Margit', 'character', 'margit'), ' son advertencias deliberadas — da al ', link('Tarnished', 'concept', 'tarnished'), ' oportunidad de retirarse'],
      [link('Marika', 'character', 'marika'), ' sabe de su existencia y secretamente lo apoya como su último guardián'],
      ['Si el ', link('Tarnished', 'concept', 'tarnished'), ' siguiera el "camino justo" que ', link('Morgott', 'character', 'morgott'), ' pide, ningún régimen alternativo se establecería']
    ],
    ambiguous: [
      'Cómo y cuándo escapó exactamente del subsuelo',
      'Si su lealtad incluye conocimiento del crimen original (su propio encarcelamiento) o lo ignora deliberadamente',
      'Si su muerte es liberación o tragedia desde su propia perspectiva'
    ],
    relatedCharacters: ['morgott', 'mohg', 'marika', 'godfrey'],
    relatedFactions: ['orden-dorado', 'omens'],
    relatedRegions: ['leyndell', 'stormveil', 'subterranean-shunning-grounds'],
    relatedConcepts: ['great-rune', 'grace', 'omen-curse'],
    relatedTimelineEvents: ['morgott-mohg-imprisonment', 'shattering-war'],
  },

  'mohg-formless-mother': {
    slug: 'mohg-formless-mother',
    subtitle: 'Pacto sangriento bajo la capital · Profeta de un dios externo · Dinastía paralela',
    summary:
      'Tras escapar del subsuelo, Mohg encontró a la Madre Informe — dios externo de la sangre — y forjó pacto con ella. La Bloodflame que recibió, la Dinastía Mohgwyn que construyó y el secuestro de Miquella son consecuencias directas de esa revelación. El antiOrden de Mohg estructura la rebelión más visible de la fractura.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        link('Mohg', 'character', 'mohg'),
        ', tras escapar del ',
        link('Subsuelo Shunning-Grounds', 'region', 'subterranean-shunning-grounds'),
        ', estableció contacto con la ',
        link('Madre Informe', 'concept', 'formless-mother'),
        ', uno de los ',
        link('dioses exteriores', 'concept', 'dioses-exteriores'),
        ' de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        '. El pacto le otorgó la ',
        link('Bloodflame', 'concept', 'bloodflame'),
        ' como magia personal y la autoridad teológica para construir un régimen alternativo.'
      ),
      h(2, 'Historia detallada'),
      p(
        'La Madre Informe es entidad cuya naturaleza el juego deliberadamente no especifica: no tiene cuerpo fijo, opera a través de fluido y carne, su nombre la describe en negativo. ',
        link('Mohg', 'character', 'mohg'),
        ' se ofreció como huésped y profeta. Su transformación física fue completa: alas, cuernos coronados, cuerpo cubierto de marcas de sangre, dominio de fuego carmesí extraído de su propia sangre.'
      ),
      p(
        'Reclutó a los ',
        link('Bloody Fingers', 'faction', 'bloody-fingers'),
        ' como secta misionera. ',
        link('Varré', 'character', 'varre'),
        ' opera como reclutador en superficie. La sangre derramada por sus invasores alimenta el lago carmesí de ',
        link('Mohgwyn', 'region', 'mohgwyn'),
        ', sede de la dinastía sangrienta donde ',
        link('Mohg', 'character', 'mohg'),
        ' planeaba criar a un consorte divino.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'El pacto culminó con el secuestro de ',
        link('Miquella', 'character', 'miquella'),
        ' durante su sueño en el ',
        link('Haligtree', 'region', 'haligtree'),
        '. ',
        link('Mohg', 'character', 'mohg'),
        ' necesitaba un ',
        link('Empyrean', 'concept', 'empyrean'),
        ' para ungir su régimen alternativo. El plan fracasó porque el capullo de ',
        link('Oro sin Aleación', 'concept', 'unalloyed-gold'),
        ' protegía a ',
        link('Miquella', 'character', 'miquella'),
        ' incluso del rito sangriento. Pero la dinastía Mohgwyn quedó activa: una sociedad paralela operando bajo otra cosmología, prueba de que el ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' no es la única opción cosmológica disponible.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'El pacto de ',
        link('Mohg', 'character', 'mohg'),
        ' con la Madre Informe es la rebelión cosmológica más estructuralmente similar al crimen original del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ': secuestrar a una figura sagrada y forzarla en el rol de consorte para fundar una era. Donde ',
        link('Marika', 'character', 'marika'),
        ' usó a ',
        link('Godfrey', 'character', 'godfrey'),
        ', ',
        link('Mohg', 'character', 'mohg'),
        ' usaría a ',
        link('Miquella', 'character', 'miquella'),
        '. La revolución reproduce la opresión. El profeta sangriento es estructuralmente idéntico al fundador dorado.'
      )
    ],
    confirmed: [
      [link('Mohg', 'character', 'mohg'), ' pactó con la Madre Informe tras su escape del subsuelo'],
      'Recibió la Bloodflame como magia personal',
      'Construyó la Dinastía Mohgwyn como reino paralelo',
      ['Secuestró a ', link('Miquella', 'character', 'miquella'), ' para usarlo como consorte divino']
    ],
    inferred: [
      'La Madre Informe lo usó tanto como él la usó a ella',
      ['El proyecto reproduce estructuralmente el crimen original de ', link('Marika', 'character', 'marika')],
      'Varré opera como puente entre superficie y dinastía subterránea'
    ],
    theories: [
      ['La Madre Informe es entidad cosmológica autónoma, no creación de ', link('Mohg', 'character', 'mohg')],
      [link('Mohg', 'character', 'mohg'), ' sabía que su régimen reproducía el crimen original — lo aceptó como precio'],
      ['Si ', link('Miquella', 'character', 'miquella'), ' hubiera despertado dentro de Mohgwyn, el cosmos habría tenido dos Árboles Áureos rivales']
    ],
    ambiguous: [
      ['Cuándo exactamente ', link('Mohg', 'character', 'mohg'), ' estableció el pacto'],
      'Si la Madre Informe sigue activa tras su muerte',
      'Si el Bloodflame es regalo de ella o robo cosmológico'
    ],
    relatedCharacters: ['mohg', 'miquella', 'varre', 'morgott'],
    relatedFactions: ['bloody-fingers', 'omens'],
    relatedRegions: ['mohgwyn', 'subterranean-shunning-grounds', 'haligtree'],
    relatedConcepts: ['formless-mother', 'bloodflame', 'dioses-exteriores'],
    relatedTimelineEvents: ['morgott-mohg-imprisonment', 'mohg-toma-miquella'],
  },

  'rykard-volcano-manor': {
    slug: 'rykard-volcano-manor',
    subtitle: 'Devorado voluntariamente por la Serpiente-Dios · Blasfemia institucional con dientes',
    summary:
      'Tras la fractura, Rykard descendió al santuario subterráneo bajo Mt. Gelmir y permitió que la serpiente-dios Eiglay lo devorara. La fusión que resultó es la blasfemia más completa de las Tierras Intermedias: el demidiós conserva voluntad humana dentro del cuerpo de un dios pre-Orden devorador.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        link('Rykard', 'character', 'rykard'),
        ', noble respetado del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' e hijo de ',
        link('Rennala', 'character', 'rennala'),
        ' y ',
        link('Radagon', 'character', 'radagon'),
        ', se transformó tras la ',
        link('fractura', 'timeline', 'la-fractura'),
        '. Su decepción filosófica con el régimen lo llevó a investigar entidades pre-Orden bajo su propia sede en ',
        link('Mt. Gelmir', 'region', 'mt-gelmir'),
        '. Encontró a la serpiente-dios ',
        link('Eiglay', 'concept', 'serpent-god-eiglay'),
        ' y se entregó a ella.'
      ),
      h(2, 'Historia detallada'),
      p(
        'Eiglay es entidad cosmológica de origen opaco. Las inferencias razonables: manifestación física del ',
        link('Crisol primigenio', 'concept', 'crucible'),
        ' que sobrevivió a la purga del Orden, o ',
        link('Antiguo Dragón', 'faction', 'dragones-antiguos'),
        ' degenerado en serpiente-dragón, o entidad cosmológica autónoma de origen desconocido. Su característica funcional: hostil al ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' y capaz de digerir dioses.'
      ),
      p(
        link('Rykard', 'character', 'rykard'),
        ' descendió al santuario y consintió la devoración. La fusión que resultó es físicamente monstruosa: cabeza humana en cuello de hombre saliendo del cuerpo descomunal de la serpiente, todo bañado en ',
        link('magma', 'character', 'magma-wyrm-makar'),
        '. Conservó memoria, voluntad y autoridad — pero la frontera entre el ',
        link('demidiós', 'concept', 'demidios'),
        ' y el dios devorador se ha disuelto.'
      ),
      p(
        'Desde el ',
        link('Volcano Manor', 'region', 'volcano-manor'),
        ', opera la secta de los Recusantes. ',
        link('Tanith', 'character', 'tanith'),
        ' funge como anfitriona oficial. ',
        link('Rya', 'character', 'rya'),
        ' (en realidad serpiente bajo apariencia humana) recluta nobles desafectos. Las cartas de invitación que Tanith envía son misiones de asesinato disfrazadas de rituales aristocráticos.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'La existencia del régimen sangriento de ',
        link('Rykard', 'character', 'rykard'),
        ' documenta dos cosas estructurales. Primero: el ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' no es cosmología única — entidades pre-Orden sobreviven en sus márgenes y pueden ser invocadas. Segundo: la rebelión cosmológica no garantiza superación. ',
        link('Rykard', 'character', 'rykard'),
        ' quiso destruir el régimen y construyó otro idéntico bajo otra deidad. Tras su muerte, Tanith devora su cadáver en un acto de comunión que es simultáneamente devoción y preservación.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La fusión de ',
        link('Rykard', 'character', 'rykard'),
        ' con Eiglay es la imagen literal del rebelde que se ha vuelto la cosa contra la que se rebelaba. Su tridente "Devoraadios" promete liberación universal y entrega únicamente comida. Su matrimonio con Tanith — quien literalmente lo devora al final — completa el ciclo: el blasfemo se vuelve alimento de su propia anfitriona, y la anfitriona se vuelve sede de la nueva blasfemia.'
      )
    ],
    confirmed: [
      [link('Rykard', 'character', 'rykard'), ' permitió que Eiglay lo devorara'],
      'La fusión preserva su voluntad humana dentro del cuerpo de la serpiente',
      ['Tanith devora su cadáver tras la batalla con el ', link('Tarnished', 'concept', 'tarnished')],
      'Los Recusantes son su secta institucional alternativa'
    ],
    inferred: [
      ['Eiglay es entidad pre-Orden hostil al ', link('Árbol Áureo', 'concept', 'erdtree')],
      [link('Rykard', 'character', 'rykard'), ' sabía que reproducía estructuralmente el Orden que combatía'],
      'Su devoración fue ritual planificado, no acto impulsivo'
    ],
    theories: [
      ['Eiglay es manifestación residual del ', link('Crisol primigenio', 'concept', 'crucible')],
      [link('Rykard', 'character', 'rykard'), ' conserva voluntad propia plena: la serpiente solo le presta cuerpo'],
      'Tanith lo devoraba por compasión — preservar al amado en lugar de dejarlo desintegrarse',
      'Si Eiglay sobreviviese a Tanith, podría buscar un nuevo huésped'
    ],
    ambiguous: [
      'El origen exacto de Eiglay',
      ['Si ', link('Rykard', 'character', 'rykard'), ' conserva su voluntad humana o es marioneta de la serpiente'],
      ['Cuánto tiempo medió entre la ', link('fractura', 'timeline', 'la-fractura'), ' y la devoración']
    ],
    relatedCharacters: ['rykard', 'tanith', 'rya', 'patches', 'bernahl', 'rennala', 'radagon'],
    relatedFactions: ['volcano-manor', 'dragones-antiguos', 'banished-knights'],
    relatedRegions: ['mt-gelmir', 'volcano-manor'],
    relatedConcepts: ['crucible', 'serpent-god-eiglay', 'dioses-exteriores', 'great-rune'],
    relatedTimelineEvents: ['shattering-war', 'demidioses-fractura'],
  },

  'caelid-devastation': {
    slug: 'caelid-devastation',
    subtitle: 'Yermo escarlata permanente tras Aeonia · Catástrofe ecológica cósmica',
    summary:
      'Tras la Batalla de Aeonia y la Floración Escarlata de Malenia, Caelid quedó cubierto de Podredumbre permanente. Los Redmanes intentan quemar la podredumbre, los hechiceros de Sellia documentan su patología, los dragones de Dragonbarrow se mantienen al margen. La región es museo viviente de cómo un dios externo arruina geografía.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'La Floración Escarlata desplegada por ',
        link('Malenia', 'character', 'malenia'),
        ' durante la ',
        link('Batalla de Aeonia', 'timeline', 'batalla-aeonia'),
        ' no fue infección física común. Fue manifestación material directa del dios exterior asociado a la ',
        link('Podredumbre Escarlata', 'concept', 'scarlet-rot'),
        '. ',
        link('Caelid', 'region', 'caelid'),
        ' entero fue ocupado por esa presencia divina.'
      ),
      h(2, 'Historia detallada'),
      p(
        'La región nunca se ha recuperado. La Podredumbre permanece estable: no avanza más allá de ciertos límites, pero tampoco retrocede. Los ',
        link('Redmanes', 'faction', 'redmanes'),
        ' supervivientes intentan quemarla con fuego ritual — práctica conocida como "quemar podredumbre" — pero el efecto es local y temporal. Los hechiceros de ',
        link('Sellia', 'region', 'sellia'),
        ' documentan su patología sin lograr cura.'
      ),
      p(
        'Las criaturas de ',
        link('Caelid', 'region', 'caelid'),
        ' han sido transformadas: perros gigantes deformes, escolopendras carmesíes, dragones corrompidos como ',
        link('Decaying Ekzykes', 'character', 'dragon-ekzykes'),
        '. Solo ',
        link('Dragonbarrow', 'region', 'dragonbarrow'),
        ' — la meseta superior de ',
        link('Caelid', 'region', 'caelid'),
        ' — se mantiene relativamente al margen, refugio de los Antiguos Dragones residuales que rodean a ',
        link('Greyoll', 'character', 'greyoll'),
        '.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'La devastación de ',
        link('Caelid', 'region', 'caelid'),
        ' es la primera prueba pública de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ' post-fractura de que un dios externo puede ocupar geografía a escala regional. Antes de Aeonia, los dioses externos operaban a través de cuerpos humanos individuales (',
        link('Marika', 'character', 'marika'),
        ', ',
        link('Mohg', 'character', 'mohg'),
        ', etc.). Tras Aeonia, queda demostrado que la presencia divina puede saturar el paisaje mismo. La existencia del ',
        link('Lago de Podredumbre', 'region', 'lake-of-rot'),
        ' bajo Liurnia es eco posterior del mismo principio.'
      ),
      h(2, 'Significado simbólico'),
      p(
        link('Caelid', 'region', 'caelid'),
        ' arrasada es el monumento del juego al costo cosmológico de la guerra divina. La podredumbre no es maldición ambiental — es presencia. El paisaje no está enfermo, está ocupado. Cualquier visitante respira al dios exterior. La región demuestra que las consecuencias de la ',
        link('fractura', 'timeline', 'la-fractura'),
        ' son geográficas, no solo políticas.'
      )
    ],
    confirmed: [
      [link('Caelid', 'region', 'caelid'), ' quedó cubierto de ', link('Podredumbre Escarlata', 'concept', 'scarlet-rot'), ' permanente tras Aeonia'],
      ['Los ', link('Redmanes', 'faction', 'redmanes'), ' intentan quemar la podredumbre como práctica ritual'],
      'Sellia documenta la patología sin lograr cura',
      'Dragonbarrow se mantiene relativamente al margen'
    ],
    inferred: [
      'La Podredumbre es presencia material del dios exterior, no infección común',
      'La región nunca se recuperará bajo la cosmología actual',
      'El Lago de Podredumbre bajo Liurnia es eco menor del mismo principio'
    ],
    theories: [
      ['La Floración Escarlata fue inevitable cosmológicamente — ', link('Malenia', 'character', 'malenia'), ' no decidió, ejecutó'],
      [link('Caelid', 'region', 'caelid'), ' podría sanarse si ', link('Miquella', 'character', 'miquella'), ' despertara y aplicase ', link('Oro sin Aleación', 'concept', 'unalloyed-gold'), ' a escala regional'],
      'Las criaturas transformadas conservan rastros de su forma original que podrían ser restaurados'
    ],
    ambiguous: [
      'Si la Podredumbre seguirá expandiéndose lentamente o se ha estabilizado',
      ['Si ', link('Radahn', 'character', 'radahn'), ' corrupto sigue siendo factor activo en la devastación'],
      'Cuánto tiempo lleva exactamente desde la Batalla'
    ],
    relatedCharacters: ['malenia', 'radahn', 'millicent', 'gowry', 'jerren', 'sellen'],
    relatedFactions: ['redmanes', 'kindred-of-rot', 'cleanrot-knights'],
    relatedRegions: ['caelid', 'sellia', 'dragonbarrow', 'redmane-castle', 'lake-of-rot'],
    relatedConcepts: ['scarlet-rot', 'outer-god-of-rot', 'dioses-exteriores'],
    relatedTimelineEvents: ['batalla-aeonia', 'malenia-marcha-caelid'],
  },

  'tarnished-return': {
    slug: 'tarnished-return',
    subtitle: 'La gracia regresó a los exiliados · Aspirantes improbables al trono',
    summary:
      'Tras la fractura, la gracia que Marika había retirado a los seguidores de Godfrey volvió misteriosamente a sus descendientes. Los Tarnished — exiliados generaciones atrás, sin tierra, sin trono — fueron readmitidos como candidatos al Anillo Elden. Marika dejó incluso un discurso registrado convocándolos.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'La ',
        link('gracia', 'concept', 'grace'),
        ' retirada a ',
        link('Godfrey', 'character', 'godfrey'),
        ' y sus seguidores generaciones atrás — el acto fundacional del exilio ',
        link('Tarnished', 'concept', 'tarnished'),
        ' — comenzó a brillar de nuevo en sus descendientes. La activación fue post-fractura: los textos sugieren que ocurrió específicamente cuando ',
        link('Marika', 'character', 'marika'),
        ' rompió el Anillo. La causa-efecto es ambigua, pero la coincidencia temporal es exacta.'
      ),
      h(2, 'Historia detallada'),
      p(
        link('Marika', 'character', 'marika'),
        ' dejó un discurso registrado convocando a los ',
        link('Tarnished', 'concept', 'tarnished'),
        ' de regreso. Su contenido es ambiguo en tono: invita pero no perdona, llama pero no explica. La frase clave: "',
        link('Tarnished', 'concept', 'tarnished'),
        ' de hueso, vagad por las tierras de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        '". Es invocación, no rehabilitación.'
      ),
      p(
        'Los ',
        link('Tarnished', 'concept', 'tarnished'),
        ' llegaron de las "tierras exteriores" — regiones más allá de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ' donde habían reconstruido vidas durante el exilio. Sus ideologías eran heterogéneas: algunos buscaban restauración pura, otros venganza, otros conocimiento. ',
        link('Gideon Ofnir', 'character', 'gideon'),
        ', ',
        link('Goldmask', 'character', 'goldmask'),
        ', ',
        link('Brother Corhyn', 'character', 'corhyn'),
        ', ',
        link('Fia', 'character', 'fia'),
        ', ',
        link('D', 'character', 'd'),
        ', ',
        link('Rogier', 'character', 'rogier'),
        ' representan facciones ideológicas distintas dentro del cuerpo de retornados.'
      ),
      p(
        'La ',
        link('Mesa Redonda', 'region', 'leyndell'),
        ' — más precisamente Roundtable Hold, refugio extra-dimensional ofrecido por los ',
        link('Dos Dedos', 'faction', 'dos-dedos'),
        ' — es el centro de operaciones donde estas ideologías coexisten. Cada ',
        link('Tarnished', 'concept', 'tarnished'),
        ' opera con autonomía pero comparte recursos.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'Sin el regreso de los ',
        link('Tarnished', 'concept', 'tarnished'),
        ', no habría candidatos al trono. Los demidioses están agotados o muertos; los Empyreans rebeldes (',
        link('Ranni', 'character', 'ranni'),
        ') o secuestrados (',
        link('Miquella', 'character', 'miquella'),
        ') o irrecuperables (',
        link('Malenia', 'character', 'malenia'),
        ', ',
        link('Radahn', 'character', 'radahn'),
        '). Los ',
        link('Tarnished', 'concept', 'tarnished'),
        ' son los únicos posibles sucesores. Su existencia como agentes externos al régimen es lo que permite que cualquiera de los seis finales del juego ocurra.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'El regreso de los ',
        link('Tarnished', 'concept', 'tarnished'),
        ' es la prueba definitiva de que ',
        link('Marika', 'character', 'marika'),
        ' diseñó el escenario actual. Si la ',
        link('gracia', 'concept', 'grace'),
        ' regresó precisamente cuando el Anillo se rompió, alguien — quien tenía control sobre la ',
        link('gracia', 'concept', 'grace'),
        ' — la reactivó deliberadamente. La hipótesis más sostenible es que la propia ',
        link('Marika', 'character', 'marika'),
        ' lo hizo, sembrando candidatos exteriores generaciones antes para tener instrumento disponible cuando llegase el momento de la ',
        link('fractura', 'timeline', 'la-fractura'),
        '.'
      )
    ],
    confirmed: [
      ['La ', link('gracia', 'concept', 'grace'), ' regresó a los ', link('Tarnished', 'concept', 'tarnished'), ' tras la ', link('fractura', 'timeline', 'la-fractura')],
      [link('Marika', 'character', 'marika'), ' dejó un discurso registrado convocándolos'],
      ['Llegaron de las "tierras exteriores" más allá de las ', link('Tierras Intermedias', 'region', 'tierras-intermedias')],
      'Sus ideologías eran heterogéneas — Roundtable Hold permite coexistencia'
    ],
    inferred: [
      ['La activación de la ', link('gracia', 'concept', 'grace'), ' fue acto deliberado, probablemente de ', link('Marika', 'character', 'marika')],
      'El exilio original fue siembra a largo plazo de candidatos externos al régimen',
      ['Sin ', link('Tarnished', 'concept', 'tarnished'), ', ningún final del juego sería posible']
    ],
    theories: [
      [link('Marika', 'character', 'marika'), ' orquestó cuidadosamente la sucesión: exilio → fractura → regreso'],
      ['Los ', link('Tarnished', 'concept', 'tarnished'), ' no son hijos biológicos directos de ', link('Godfrey', 'character', 'godfrey'), ' sino de sus seguidores'],
      ['Algunos retornaron antes de la ', link('fractura', 'timeline', 'la-fractura'), ' y vivieron en secreto durante eras']
    ],
    ambiguous: [
      ['Cuántos ', link('Tarnished', 'concept', 'tarnished'), ' regresaron exactamente'],
      ['Si el discurso de ', link('Marika', 'character', 'marika'), ' es genuino o una falsificación de los ', link('Dos Dedos', 'faction', 'dos-dedos')],
      'Si la coincidencia temporal entre fractura y regreso es exacta o aproximada'
    ],
    relatedCharacters: ['marika', 'godfrey', 'melina', 'gideon', 'goldmask', 'corhyn', 'fia', 'd', 'rogier', 'roderika'],
    relatedFactions: ['orden-dorado', 'dos-dedos'],
    relatedRegions: ['leyndell'],
    relatedConcepts: ['tarnished', 'grace', 'erdtree'],
    relatedTimelineEvents: ['exilio-godfrey', 'la-fractura', 'two-fingers-roundtable'],
  },

  'two-fingers-roundtable': {
    slug: 'two-fingers-roundtable',
    subtitle: 'Mensajeros divinos como burocracia residual · Mesa Redonda como foro ideológico',
    summary:
      'Los Dos Dedos recibieron a los Tarnished retornados en Roundtable Hold y los ungieron como aspirantes potenciales al trono. La Mesa Redonda funcionó como foro donde Tarnished de ideologías distintas coexistían. Pero los Dedos ya estaban deteriorándose: sus pronunciamientos eran cada vez más vagos.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'Los ',
        link('Dos Dedos', 'faction', 'dos-dedos'),
        ', mensajeros físicos de la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ', mantenían su sede en Roundtable Hold — refugio extra-dimensional accesible a través de un anillo de ',
        link('gracia', 'concept', 'grace'),
        '. Tras la ',
        link('fractura', 'timeline', 'la-fractura'),
        ', recibieron a los ',
        link('Tarnished', 'concept', 'tarnished'),
        ' retornados y los ungieron formalmente como aspirantes al trono Elden.'
      ),
      h(2, 'Historia detallada'),
      p(
        'La doncella ',
        link('Enia', 'character', 'enia'),
        ' funge como Lectora de Dedos, traduciendo los pronunciamientos divinos para los mortales. Su rol es crucial: los Dedos no piensan, traducen — y necesitan a su vez ser traducidos. La cadena de mediación es larga: ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' → ',
        link('Dos Dedos', 'faction', 'dos-dedos'),
        ' → Lectora → ',
        link('Tarnished', 'concept', 'tarnished'),
        '.'
      ),
      p(
        'La ',
        link('Mesa Redonda', 'concept', 'roundtable-hold'),
        ' misma alberga a ',
        link('Tarnished', 'concept', 'tarnished'),
        ' de ideologías distintas: ',
        link('Gideon Ofnir', 'character', 'gideon'),
        ' como erudito-asesor, ',
        link('Goldmask', 'character', 'goldmask'),
        ' y ',
        link('Brother Corhyn', 'character', 'corhyn'),
        ' como reformistas filosóficos, ',
        link('Fia', 'character', 'fia'),
        ' como devota de ',
        link('Godwyn', 'character', 'godwyn'),
        ', ',
        link('D', 'character', 'd'),
        ' como cazador de ',
        link('Aquellos que Viven en la Muerte', 'concept', 'those-who-live-in-death'),
        ', ',
        link('Rogier', 'character', 'rogier'),
        ' como investigador, ',
        link('Diallos', 'character', 'diallos'),
        ' como noble pacifista, ',
        link('Roderika', 'character', 'roderika'),
        ' como aprendiz de cenizas. Cada uno representa una respuesta posible al problema cosmológico.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'Pero los Dedos están deteriorándose. Sus pronunciamientos son cada vez más vagos. Algunos están físicamente dañados — el "',
        link('Dos Dedos', 'faction', 'dos-dedos'),
        ' podridos" del Roundtable Hold posterior es prueba visible. La ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' parece haberse retirado parcialmente; los Dedos siguen apuntando, pero apuntan a un cosmos que ya no responde con claridad. La fragmentación ideológica de los ',
        link('Tarnished', 'concept', 'tarnished'),
        ' ocurre porque ya no hay autoridad central que dirima sus disputas.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La ',
        link('Mesa Redonda', 'concept', 'roundtable-hold'),
        ' es el foro de la era post-fractura: institución residual donde sobreviven los rituales del régimen anterior aunque ya nadie sepa con claridad qué dictan. Cada ',
        link('Tarnished', 'concept', 'tarnished'),
        ' opera con autonomía progresivamente mayor. La fragmentación final que produce los seis posibles finales del juego se incuba aquí: las distintas ideologías ',
        link('Tarnished', 'concept', 'tarnished'),
        ' que comen en la misma mesa son las que después instaurarán las distintas eras.'
      )
    ],
    confirmed: [
      ['Los ', link('Dos Dedos', 'faction', 'dos-dedos'), ' recibieron a los ', link('Tarnished', 'concept', 'tarnished'), ' retornados'],
      'Roundtable Hold es refugio extra-dimensional bajo control de los Dedos',
      [link('Enia', 'character', 'enia'), ' es Lectora oficial'],
      ['Cada ', link('Tarnished', 'concept', 'tarnished'), ' de la ', link('Mesa Redonda', 'concept', 'roundtable-hold'), ' representa una ideología distinta']
    ],
    inferred: [
      'Los Dedos están deteriorándose físicamente y cosmológicamente',
      ['La ', link('Voluntad Mayor', 'concept', 'voluntad-mayor'), ' se ha retirado parcialmente de las Tierras Intermedias'],
      ['La fragmentación ideológica produce las posibles eras post-', link('Tarnished', 'concept', 'tarnished')]
    ],
    theories: [
      ['El ', link('Dos Dedos', 'faction', 'dos-dedos'), ' podrido es resultado de actividad heretica activa, no degeneración natural'],
      [link('Goldmask', 'character', 'goldmask'), ' abandonó la ', link('Mesa Redonda', 'concept', 'roundtable-hold'), ' al descubrir el secreto ', link('Radagon', 'character', 'radagon'), '-es-', link('Marika', 'character', 'marika')],
      [link('Gideon', 'character', 'gideon'), ' traiciona al ', link('Tarnished', 'concept', 'tarnished'), ' precisamente porque comprende que ningún final es satisfactorio según los Dedos']
    ],
    ambiguous: [
      ['Cuánto tiempo lleva la ', link('Mesa Redonda', 'concept', 'roundtable-hold'), ' en su forma actual'],
      'Si los Dedos pueden ser reemplazados o son únicos',
      'Cuál es la naturaleza extra-dimensional exacta de Roundtable Hold'
    ],
    relatedCharacters: ['enia', 'gideon', 'goldmask', 'corhyn', 'fia', 'd', 'rogier', 'diallos', 'roderika', 'hewg'],
    relatedFactions: ['dos-dedos', 'finger-readers', 'orden-dorado'],
    relatedRegions: ['leyndell'],
    relatedConcepts: ['voluntad-mayor', 'tarnished', 'great-rune'],
    relatedTimelineEvents: ['tarnished-return', 'erdtree-rejection'],
  },

  'erdtree-rejection': {
    slug: 'erdtree-rejection',
    subtitle: 'El árbol cierra sus raíces · Las instrucciones oficiales fracasan · Necesidad de la pira',
    summary:
      'Cuando el Tarnished reúne las Grandes Runas y se aproxima al Árbol Áureo para ser ungido como Señor Elden, el árbol literalmente lo rechaza. Las raíces se cierran. Los Dos Dedos no tienen explicación. La instrucción oficial del régimen ha fracasado: el camino al trono ya no pasa por la coronación tradicional.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'Tras derrotar a ',
        link('Morgott', 'character', 'morgott'),
        ' y obtener acceso al ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ', el ',
        link('Tarnished', 'concept', 'tarnished'),
        ' descubre que el árbol cierra sus raíces ante él. Ningún ritual de ',
        link('gracia', 'concept', 'grace'),
        ', ninguna runa, ninguna instrucción de los ',
        link('Dos Dedos', 'faction', 'dos-dedos'),
        ' basta para abrir el camino. El régimen oficial ha quedado técnicamente bloqueado.'
      ),
      h(2, 'Historia detallada'),
      p(
        'Los ',
        link('Dos Dedos', 'faction', 'dos-dedos'),
        ' no anticipaban este rechazo. Sus instrucciones procedían del régimen estable pre-fractura: derrotar demidioses, reunir runas, ascender al trono. Pero el ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' post-fractura ha desarrollado una autonomía que los Dedos no comprenden. El árbol — o algo dentro del árbol, posiblemente ',
        link('Marika', 'character', 'marika'),
        ' encadenada — ha decidido que el aspirante no entra por las raíces.'
      ),
      p(
        'La única solución viable es quemar el árbol. ',
        link('Melina', 'character', 'melina'),
        ' aparece exactamente en este momento con la solución: subir a las ',
        link('Mountaintops', 'region', 'mountaintops'),
        ', encender la Llama Quemadora, sacrificarla a ella misma como portadora ritual, prender el ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        '. Su disponibilidad parece anticipada — ',
        link('Melina', 'character', 'melina'),
        ' sabía que este momento llegaría.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'El rechazo del árbol es el indicador más claro de que el régimen del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' ya no puede sostenerse en su forma actual. La cosmología pre-fractura está clínicamente muerta: sus mecanismos formales ya no funcionan. Lo que viene es necesariamente nuevo. Cualquier final del juego — incluso el más conservador, la ',
        link('Era de la Fractura', 'ending', 'fracture'),
        ' — implica intervención adicional: quemar el árbol, derrotar a ',
        link('Marika', 'character', 'marika'),
        ' encadenada, enfrentar a ',
        link('Radagon', 'character', 'radagon'),
        ', vencer a la ',
        link('Bestia Elden', 'concept', 'bestia-elden'),
        '.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'El ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' rechazando al ',
        link('Tarnished', 'concept', 'tarnished'),
        ' es la imagen del fracaso institucional del régimen. La cosmología oficial ya no produce sus propios sucesores. Cualquier era venidera se construirá rompiendo la liturgia anterior. La quema del árbol es el primer acto de ruptura cosmológica deliberada que el ',
        link('Tarnished', 'concept', 'tarnished'),
        ' realiza.'
      )
    ],
    confirmed: [
      ['El ', link('Árbol Áureo', 'concept', 'erdtree'), ' cierra sus raíces ante el ', link('Tarnished', 'concept', 'tarnished'), ' tras derrotar a ', link('Morgott', 'character', 'morgott')],
      ['Los ', link('Dos Dedos', 'faction', 'dos-dedos'), ' no tienen explicación oficial'],
      [link('Melina', 'character', 'melina'), ' aparece con la solución de quemar el árbol'],
      'Quemar el árbol es necesario para todos los finales del juego'
    ],
    inferred: [
      'El árbol post-fractura tiene autonomía cosmológica que los Dedos no controlan',
      [link('Marika', 'character', 'marika'), ' encadenada decide o influye en el rechazo'],
      [link('Melina', 'character', 'melina'), ' sabía que este momento llegaría — su disponibilidad era anticipada']
    ],
    theories: [
      ['El ', link('Árbol Áureo', 'concept', 'erdtree'), ' rechaza al ', link('Tarnished', 'concept', 'tarnished'), ' precisamente porque ', link('Marika', 'character', 'marika'), ' quiere que el régimen termine'],
      ['Sin el rechazo, ningún ', link('Tarnished', 'concept', 'tarnished'), ' habría logrado quemar el árbol — la decisión cosmológica es deliberada'],
      ['Los ', link('Dos Dedos', 'faction', 'dos-dedos'), ' podridos no son síntoma — son la causa: su deterioro impide al árbol procesar al aspirante']
    ],
    ambiguous: [
      ['Si el rechazo viene de ', link('Marika', 'character', 'marika'), ', de los Dedos, del ', link('Árbol Áureo', 'concept', 'erdtree'), ' mismo o de la ', link('Voluntad Mayor', 'concept', 'voluntad-mayor')],
      ['Si versiones anteriores del ', link('Anillo Elden', 'concept', 'elden-ring'), ' producían este mismo rechazo a aspirantes'],
      'Si la quema del árbol es solución única o una de varias posibilidades'
    ],
    relatedCharacters: ['marika', 'melina', 'morgott', 'godfrey', 'enia'],
    relatedFactions: ['dos-dedos', 'orden-dorado'],
    relatedRegions: ['leyndell', 'mountaintops'],
    relatedConcepts: ['erdtree', 'tarnished', 'voluntad-mayor'],
    relatedTimelineEvents: ['morgott-defends-leyndell', 'erdtree-quemado'],
  },

  /* ════════════════ Promoción mass — eventos previamente partial ════════════════ */

  'crisol-vida-primordial': {
    summary:
      'Antes del Árbol Áureo, antes incluso del régimen dragónico de Placidusax, el Crisol fue la fuerza vital primordial de las Tierras Intermedias: una sustancia donde todas las formas de vida nacían mezcladas. Cuernos, escamas, alas, raíces, podredumbre — todo de la misma cocina cosmológica. El Orden Dorado lo declaró impuro, pero su sangre persiste irreductible bajo cada generación.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'El ',
        link('Crisol', 'concept', 'crucible'),
        ' fue una era cosmológica en la que la vida no se distribuía en categorías estancas. Los seres existían en formas mixtas: humanos con cuernos, dragones con elementos vegetales, lobos con voces sapientes. Era un cosmos sin pureza específica, donde las taxonomías que el ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' posteriormente impuso no tenían sentido aún.'
      ),
      h(2, 'Historia detallada'),
      p(
        'No hay régimen central documentado durante la era del ',
        link('Crisol', 'concept', 'crucible'),
        '. Los textos sugieren más una atmósfera cosmológica que una política: existió mientras existió, sin gobierno ungido, sin liturgia centralizada. Su árbol asociado — el Crucible Tree, anterior al ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' — distribuía vida orgánica primigenia. Sus seres eran híbridos por defecto.'
      ),
      p(
        'Cuando la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' eventualmente eligió a ',
        link('Marika', 'character', 'marika'),
        ' como vasija e instituyó el ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ', una de sus operaciones cosmológicas centrales fue purgar las manifestaciones del ',
        link('Crisol', 'concept', 'crucible'),
        '. Los seres con marcas mixtas fueron reclasificados como ',
        link('Omens', 'faction', 'omens'),
        ', ',
        link('Misbegotten', 'faction', 'misbegotten'),
        ' y aberraciones — categorías nuevas que solo tenían sentido dentro del régimen taxonómico del Orden.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'La ',
        link('purga del Crisol', 'timeline', 'crucible-purge'),
        ' nunca fue completa. Los ',
        link('Hombres-Bestia', 'faction', 'hombres-bestia'),
        ' (raza de ',
        link('Maliketh', 'character', 'maliketh'),
        ') conservan la biología primigenia integrada. Los ',
        link('Crucible Knights', 'concept', 'crucible-knights'),
        ' portan iconografía del ',
        link('Crisol', 'concept', 'crucible'),
        ' como armadura ritual. Cada Omen nacido es manifestación residual de la sangre antigua. La técnica del ',
        link('injerto', 'concept', 'grafting'),
        ' que ',
        link('Godrick', 'character', 'godrick'),
        ' practica procede del mismo linaje.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'El ',
        link('Crisol', 'concept', 'crucible'),
        ' representa el cosmos sin categorías fijas. Su existencia previa al ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' documenta que las divisiones actuales — humano/bestia, sagrado/profano, puro/aberración — son construcciones políticas, no leyes naturales. La nostalgia del ',
        link('Crisol', 'concept', 'crucible'),
        ' es la nostalgia de un cosmos donde la vida no exigía clasificación.'
      )
    ],
    confirmed: [
      ['El ', link('Crisol', 'concept', 'crucible'), ' precede al ', link('Orden Dorado', 'concept', 'golden-order'), ' como sustancia vital primigenia'],
      ['Los Crucible Knights portan iconografía ritual del ', link('Crisol', 'concept', 'crucible')],
      ['Los ', link('Hombres-Bestia', 'faction', 'hombres-bestia'), ' y Misbegotten conservan biología del ', link('Crisol', 'concept', 'crucible')],
      ['La técnica del injerto procede de tradiciones del ', link('Crisol', 'concept', 'crucible')]
    ],
    inferred: [
      ['No hubo régimen político central durante la era del ', link('Crisol', 'concept', 'crucible')],
      ['La purga del ', link('Orden Dorado', 'concept', 'golden-order'), ' contra el ', link('Crisol', 'concept', 'crucible'), ' fue deliberada y nunca completa'],
      ['El Crucible Tree precede al ', link('Árbol Áureo', 'concept', 'erdtree'), ' como árbol cosmológico']
    ],
    theories: [
      ['El ', link('Crisol', 'concept', 'crucible'), ' podría reactivarse cosmológicamente si el ', link('Árbol Áureo', 'concept', 'erdtree'), ' cae completamente'],
      ['Algunos Omens conservan recuerdos genéticos de su forma del ', link('Crisol', 'concept', 'crucible')],
      ['Los ', link('dragones antiguos', 'faction', 'dragones-antiguos'), ' de Placidusax procederían en parte del ', link('Crisol', 'concept', 'crucible')]
    ],
    ambiguous: [
      ['Cuánto duró exactamente la era del ', link('Crisol', 'concept', 'crucible')],
      ['Si el ', link('Crisol', 'concept', 'crucible'), ' fue creación de algún dios externo o estado natural espontáneo'],
      ['Si el ', link('Árbol Áureo', 'concept', 'erdtree'), ' devoró al Crucible Tree o coexistieron por un tiempo']
    ],
    relatedCharacters: ['marika', 'maliketh', 'godrick', 'morgott', 'mohg'],
    relatedFactions: ['omens', 'misbegotten', 'hombres-bestia'],
    relatedConcepts: ['crucible', 'erdtree', 'grafting', 'crucible-knights'],
    relatedTimelineEvents: ['antes-orden-dorado', 'placidusax-elden-lord'],
  },

  'antiguos-ritos-muerte': {
    summary:
      'Antes del sello marikiano de la Muerte Predestinada, las Tierras Intermedias tenía una cosmología funeraria funcional. Los muertos se cremaban con Llama Espectral, los Deathbirds oficiaban como sacerdotes alados, y las almas regresaban al ciclo cosmológico sin necesidad del reciclaje del Árbol Áureo. Esa cosmología fue cancelada — pero sus rituales persisten en catacumbas dispersas.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'Durante la era de la ',
        link('Reina del Ojo Velado', 'character', 'gloam-eyed-queen'),
        ' y posiblemente antes, las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ' operaba con una cosmología funeraria autónoma: los muertos eran procesados a través de rituales específicos que devolvían sus almas al ciclo cosmológico sin pasar por el árbol oficial.'
      ),
      h(2, 'Historia detallada'),
      p(
        'El instrumento ritual principal era la ',
        link('Llama Espectral', 'concept', 'ghostflame'),
        ' (Ghostflame) — fuego azul-blanco capaz de cremar correctamente cuerpos liberando sus almas. Los ',
        link('Deathbirds', 'faction', 'deathbirds'),
        ' eran criaturas-cementerio gigantes que oficiaban como sacerdotes alados: sus cuerpos parcialmente formados de cenizas acumuladas indican siglos de práctica funeraria centralizada en sus territorios.'
      ),
      p(
        'Cuando ',
        link('Marika', 'character', 'marika'),
        ' selló la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ' dentro de ',
        link('Maliketh', 'character', 'maliketh'),
        ', estos rituales perdieron su sustento cosmológico. El ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' absorbió la función funeraria como reciclador centralizado de almas. Los Deathbirds quedaron como reliquias hostiles; las catacumbas con altares de Ghostflame se convirtieron en peregrinajes prohibidos por el régimen oficial.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'La cancelación de los antiguos ritos creó la grieta estructural del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        '. Sin proceso funerario funcional para almas que el árbol no acepta — particularmente las de los excluidos como ',
        link('Omens', 'faction', 'omens'),
        ' o ',
        link('Misbegotten', 'faction', 'misbegotten'),
        ' — esas almas quedan flotando. Cuando el sello de la Muerte falla parcialmente (caso ',
        link('Godwyn', 'character', 'godwyn'),
        '), no hay liturgia residual capaz de procesarlo: solo el rito antiguo podría haberlo cerrado, y el rito antiguo ha sido borrado.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Los antiguos ritos son la prueba arqueológica de que el cosmos funcionaba sin la inmortalidad ritual del ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        '. Cada catacumba con Ghostflame activa es testimonio silencioso: hubo una manera de morir bien, y el régimen actual la suprimió.'
      )
    ],
    confirmed: [
      'La Llama Espectral era llama ritual de cremación pre-Orden',
      'Los Deathbirds operaban como sacerdotes funerarios alados',
      'Las catacumbas dispersas conservan altares de la cosmología antigua',
      'El sello de la Muerte canceló la funcionalidad de estos rituales'
    ],
    inferred: [
      'La práctica funeraria estaba descentralizada — múltiples sitios con autonomía ritual',
      ['La ', link('Reina del Ojo Velado', 'character', 'gloam-eyed-queen'), ' oficiaba o protegía estos rituales'],
      ['El ', link('Árbol Áureo', 'concept', 'erdtree'), ' absorbió la función para centralizar el control cosmológico']
    ],
    theories: [
      'Algunos Deathbirds conservan consciencia ritual y aceptarían oficiar de nuevo si el sello cae',
      ['La ', link('Era del Crepúsculo', 'ending', 'duskborn'), ' restauraría parcialmente la funcionalidad de estos ritos'],
      ['Las almas Omen no procesadas alimentan la Deathroot bajo el ', link('Árbol Áureo', 'concept', 'erdtree')]
    ],
    ambiguous: [
      'Quién oficiaba los rituales antes de los Deathbirds',
      'Cuántas tradiciones funerarias paralelas coexistían',
      'Si el rito antiguo podía procesar a demidioses muertos parcialmente'
    ],
    relatedCharacters: ['gloam-eyed-queen', 'maliketh', 'marika', 'godwyn'],
    relatedFactions: ['deathbirds', 'pieles-de-dios'],
    relatedConcepts: ['ghostflame', 'destined-death', 'rune-of-death', 'deathroot'],
    relatedTimelineEvents: ['era-antigua', 'muerte-predestinada', 'gloam-eyed-godskins-reign'],
  },

  'nox-ciudades-eternas': {
    summary:
      'Los Nox construyeron las ciudades eternas de Nokron y Nokstella como cosmología subterránea avanzada, dedicada a forjar su propio dios independiente de la Voluntad Mayor. La transgresión les costó todo: una estrella cayó del cielo y los enterró. Hoy esperan en silencio una era cosmológica que solo Ranni podría cumplirles.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'Los ',
        link('Nox', 'faction', 'nox'),
        ' fueron una raza nocturna de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ' que desarrolló una sofisticación cosmológica que el ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' nunca igualó. Construyeron ',
        link('Nokron', 'region', 'nokron'),
        ' y ',
        link('Nokstella', 'region', 'nokstella'),
        ' como ciudades-templo dedicadas a un proyecto teológico ambicioso: forjar un dios propio.'
      ),
      h(2, 'Historia detallada'),
      p(
        'Su tecnología incluía las ',
        link('Lágrimas de Plata', 'concept', 'mimic-tear'),
        ' (vida artificial mimética), magia astronómica avanzada, y arquitectura subterránea con cielos estrellados pintados que reflejaban constelaciones reales. Su rebelión específica contra la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' implicaba intentar fabricar una vasija divina propia — un Lord Elden alternativo que les permitiera independencia cosmológica.'
      ),
      p(
        'El castigo cósmico llegó como ',
        link('Astel', 'character', 'astel-naturalborn'),
        ', entidad estelar enviada para destruir la civilización. Su impacto enterró Nokron y Nokstella bajo tierra. Los supervivientes Nox descendieron a las profundidades junto con los ',
        link('Claymen', 'faction', 'claymen'),
        ' como guardianes residuales. Sus ciudades quedaron como mausoleos activos: aún funcionando ritualmente, pero sin posibilidad de cumplir su proyecto original.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'El sueño Nox nunca murió del todo. La ',
        link('Hoja Mata-Dedos', 'concept', 'destined-death'),
        ' que forjaron antes de su caída sobrevive como reliquia. Su tecnología arcana persiste en las ruinas. Y, cosmológicamente, su rebelión es heredada por ',
        link('Ranni', 'character', 'ranni'),
        ' — cuya ',
        link('Era de las Estrellas', 'ending', 'age-of-stars'),
        ' es exactamente lo que los ',
        link('Nox', 'faction', 'nox'),
        ' intentaron lograr: un cosmos sin ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' cercana.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Los ',
        link('Nox', 'faction', 'nox'),
        ' son la primera rebelión cosmológica fallida documentada. Su existencia subterránea silenciosa es la imagen del rebelde castigado pero no derrotado: enterrado, no extinto. La continuidad entre Nox y ',
        link('Ranni', 'character', 'ranni'),
        ' convierte la ',
        link('Era de las Estrellas', 'concept', 'age-of-stars'),
        ' en cumplimiento histórico, no innovación reciente. La Bruja muñeca culmina lo que los ',
        link('Nox', 'faction', 'nox'),
        ' iniciaron eras atrás.'
      )
    ],
    confirmed: [
      ['Los ', link('Nox', 'faction', 'nox'), ' construyeron Nokron y Nokstella como cosmología subterránea'],
      'Su transgresión fue intentar forjar su propio dios',
      'Astel cayó como castigo cósmico contra ellos',
      'Sobrevivieron en silencio bajo tierra',
      ['La ', link('Hoja Mata-Dedos', 'concept', 'fingerslayer-blade'), ' es reliquia Nox usable contra los ', link('Dos Dedos', 'faction', 'dos-dedos')]
    ],
    inferred: [
      ['La sofisticación cosmológica Nox excedía la del ', link('Orden Dorado', 'concept', 'golden-order')],
      'Las Lágrimas de Plata fueron prototipos del proyecto del cuerpo divino',
      [link('Ranni', 'character', 'ranni'), ' hereda directamente el sueño Nox a través de la ', link('Era de las Estrellas', 'concept', 'age-of-stars')]
    ],
    theories: [
      'Los Claymen son Nox transformados después de la caída',
      'Existieron múltiples ciudades Nox; solo Nokron y Nokstella son visitables',
      ['La ', link('Era de las Estrellas', 'concept', 'age-of-stars'), ' reactivaría parcialmente la civilización Nox enterrada']
    ],
    ambiguous: [
      'Cuándo exactamente cayeron — la datación es completamente opaca',
      ['Si los ', link('Nox', 'faction', 'nox'), ' actuales conservan consciencia plena o solo función ritual'],
      ['Si ', link('Ranni', 'character', 'ranni'), ' es heredera deliberada de los ', link('Nox', 'faction', 'nox'), ' o paralela cosmológicamente']
    ],
    relatedCharacters: ['ranni', 'astel-naturalborn'],
    relatedFactions: ['nox', 'claymen', 'silver-mimic-tears'],
    relatedRegions: ['nokron', 'nokstella', 'ainsel-river'],
    relatedConcepts: ['voluntad-mayor', 'mimic-tear', 'dark-moon', 'age-of-stars'],
    relatedTimelineEvents: ['silver-tears-creation', 'hoja-mata-dedos'],
    relatedEndings: ['age-of-stars'],
  },

  'guerra-gigantes-fuego': {
    summary:
      'La guerra del Orden Dorado contra los Gigantes del Fuego fue genocidio cosmológico. Marika ordenó el exterminio porque su llama — ligada al Fell God, dios externo del fuego primigenio — era la única capaz de quemar el Árbol Áureo. Godfrey lideró la matanza. La llama no pudo destruirse: fue confinada con el último gigante encadenado como custodio.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'Los ',
        link('Gigantes del Fuego', 'faction', 'fire-giants'),
        ' habitaban las ',
        link('Mountaintops', 'region', 'mountaintops'),
        ' como pueblo cosmológicamente independiente. Adoraban al ',
        link('Fell God', 'concept', 'fell-god'),
        ', dios externo del fuego primigenio cuya llama era hostil al ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' por designio cosmológico. ',
        link('Marika', 'character', 'marika'),
        ' los identificó como amenaza estructural y ordenó su exterminio.'
      ),
      h(2, 'Historia detallada'),
      p(
        link('Godfrey', 'character', 'godfrey'),
        ', en su forma primal de Hoarah Loux, lideró la guerra. Era operación marcial colosal: los ',
        link('Gigantes del Fuego', 'faction', 'fire-giants'),
        ' eran combatientes cosmológicamente formidables, y su tradición ritual incluía hechicerías de fuego primigenio capaces de herir incluso a divinidades del régimen. La guerra duró eras y consumió generaciones de soldados doraods.'
      ),
      p(
        'El resultado fue casi total: prácticamente todos los gigantes fueron asesinados. Los pocos supervivientes — incluyendo a ',
        link('Iji', 'character', 'iji'),
        ' (el gigante reformado de Caria) y al ',
        link('Último Gigante del Fuego', 'character', 'fire-giant'),
        ' (encadenado en la Forja) — fueron sometidos a condiciones específicas. Los ',
        link('Héroes Zamor', 'character', 'zamor-heroes'),
        ' del pueblo cazador de gigantes recibieron honores oficiales del régimen.'
      ),
      p(
        'La Llama del Fell God, sin embargo, no pudo ser destruida — era manifestación material de un dios externo, no propiedad de los gigantes en sí. Fue confinada en la Forja de los Gigantes con el último superviviente encadenado como custodio eterno. La operación es paradójica: para sostener el ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ', el régimen tuvo que conservar intacta la única arma capaz de destruirlo.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'La llama confinada esperó eras hasta su uso eventual. Cuando el ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' rechazó al ',
        link('Tarnished', 'concept', 'tarnished'),
        ', la única solución posible fue subir a la Forja, derrotar al último gigante, y prender la llama hostil. ',
        link('Melina', 'character', 'melina'),
        ' se inmoló como portadora ritual. Así, el ',
        link('genocidio inicial', 'timeline', 'guerra-gigantes-fuego'),
        ' creó la herramienta exacta del fin posterior — los ',
        link('Gigantes del Fuego', 'faction', 'fire-giants'),
        ', exterminados eras atrás, fueron quienes hicieron posible el final del régimen que los exterminó.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La guerra es la imagen más nítida del genocidio cosmológico justificado por amenaza estructural. El ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' no toleraba la coexistencia con un dios externo rival cuyo arma podía destruirlo. La paradoja final — que el arma confinada se vuelve herramienta del fin del propio régimen — es justicia cosmológica retrasada eras: los muertos esperan, y eventualmente cobran.'
      )
    ],
    confirmed: [
      [link('Marika', 'character', 'marika'), ' ordenó el exterminio de los ', link('Gigantes del Fuego', 'faction', 'fire-giants')],
      [link('Godfrey', 'character', 'godfrey'), ' lideró la guerra como Hoarah Loux'],
      'Casi todos los gigantes fueron asesinados',
      'La Llama del Fell God no pudo ser destruida — solo confinada',
      ['El ', link('último Gigante del Fuego', 'character', 'fire-giant'), ' fue encadenado como custodio eterno']
    ],
    inferred: [
      'La guerra duró eras y consumió generaciones de soldados',
      ['El ', link('Fell God', 'concept', 'fell-god'), ' es dios externo distinto de la ', link('Voluntad Mayor', 'concept', 'voluntad-mayor')],
      'Iji fue uno de los pocos gigantes que se reformó al servicio del régimen'
    ],
    theories: [
      [link('Marika', 'character', 'marika'), ' sabía que la llama eventualmente sería necesaria — el confinamiento fue siembra estratégica, no precaución'],
      ['Algunos ', link('Gigantes del Fuego', 'faction', 'fire-giants'), ' sobrevivieron escondidos en otras regiones'],
      ['La ', link('Llama Frenética', 'concept', 'frenzied-flame'), ' y la Llama del Fell God son manifestaciones diferentes de la misma fuerza primigenia hostil']
    ],
    ambiguous: [
      'Cuántos gigantes había antes de la guerra',
      'Si los Zamor fueron aliados o solo cazadores oportunistas',
      ['Si el ', link('Fell God', 'concept', 'fell-god'), ' sigue activo o se retiró tras el exterminio de su pueblo']
    ],
    relatedCharacters: ['godfrey', 'marika', 'melina', 'fire-giant', 'iji' ],
    relatedFactions: ['fire-giants', 'orden-dorado'],
    relatedRegions: ['mountaintops'],
    relatedConcepts: ['fell-god', 'erdtree', 'dioses-exteriores'],
    relatedTimelineEvents: ['flame-of-ruin-confined', 'erdtree-quemado'],
  },

  'nacimiento-linaje-dorado': {
    summary:
      'El Linaje Dorado nació de Marika y Godfrey como dinastía oficial del Orden. Godwyn fue el primogénito amado y rostro público del régimen; sus medio-hermanos Omens (Morgott, Mohg) fueron silenciados y encarcelados. La línea oficial mostraba pureza, la línea real escondía contradicciones — y esa hipocresía estructural eventualmente se rompería con violencia.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'La primera generación del régimen del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' fue la de los hijos directos de ',
        link('Marika', 'character', 'marika'),
        '. ',
        link('Godfrey', 'character', 'godfrey'),
        ' fue su Primer ',
        link('Señor Elden', 'concept', 'elden-lord'),
        ' y consorte original; juntos engendraron a ',
        link('Godwyn', 'character', 'godwyn'),
        ' como primogénito amado.'
      ),
      h(2, 'Historia detallada'),
      p(
        link('Godwyn', 'character', 'godwyn'),
        ' fue diseñado iconográficamente como rostro del régimen: dorado, marcial, integrador, capaz de pactar con los ',
        link('Antiguos Dragones', 'faction', 'dragones-antiguos'),
        ' a través de su unión con ',
        link('Fortissax', 'character', 'fortissax'),
        '. Su existencia visible justificaba la legitimidad cosmológica del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ': si ',
        link('Marika', 'character', 'marika'),
        ' podía producir un heredero perfecto, el régimen era teológicamente válido.'
      ),
      p(
        'Pero la siguiente generación reveló contradicciones. Cuando ',
        link('Marika', 'character', 'marika'),
        ' tomó a ',
        link('Radagon', 'character', 'radagon'),
        ' como segundo consorte (en realidad, su otro yo), engendraron a ',
        link('Morgott', 'character', 'morgott'),
        ' y ',
        link('Mohg', 'character', 'mohg'),
        ' — gemelos ',
        link('Omens', 'faction', 'omens'),
        ' por la sangre antigua de ',
        link('Radagon', 'character', 'radagon'),
        '. La ley del régimen los clasificaba como aberraciones malditas. Fueron encarcelados secretamente bajo la capital, en el ',
        link('Subsuelo Shunning-Grounds', 'region', 'subterranean-shunning-grounds'),
        '. Su existencia fue silenciada públicamente.'
      ),
      p(
        'Posteriormente nacieron los Empyreans gemelos ',
        link('Malenia', 'character', 'malenia'),
        ' y ',
        link('Miquella', 'character', 'miquella'),
        ' — ambos malditos cosmológicamente desde el nacimiento (',
        link('Podredumbre Escarlata', 'concept', 'scarlet-rot'),
        ' y eterno-niño respectivamente). El régimen oficialmente celebraba el linaje; en privado, cada generación traía una nueva grieta.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'La hipocresía estructural del ',
        link('Linaje Dorado', 'faction', 'golden-lineage'),
        ' — celebrar la pureza pública mientras se encarcelaban Omens reales en privado — generó las dos respuestas opuestas que dividirán el régimen tras la ',
        link('fractura', 'timeline', 'la-fractura'),
        '. ',
        link('Morgott', 'character', 'morgott'),
        ', el Omen leal, defendió el régimen que lo encerró. ',
        link('Mohg', 'character', 'mohg'),
        ', el Omen rebelde, fundó un régimen alternativo. Ambas respuestas son consecuencia directa del trauma juvenil.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'El ',
        link('Linaje Dorado', 'faction', 'golden-lineage'),
        ' encarna la mentira fundacional del régimen. La línea oficial muestra a ',
        link('Godwyn', 'character', 'godwyn'),
        ' como ejemplo de pureza; la línea real incluye Omens, Empyreans malditos, gemelos encarcelados, hijos no nacidos como ',
        link('Melina', 'character', 'melina'),
        '. La sucesión cosmológica funciona porque oculta sus contradicciones, hasta que las contradicciones se vuelven imposibles de ocultar.'
      )
    ],
    confirmed: [
      [link('Godwyn', 'character', 'godwyn'), ' fue primogénito de ', link('Marika', 'character', 'marika'), ' y ', link('Godfrey', 'character', 'godfrey')],
      [link('Morgott', 'character', 'morgott'), ' y ', link('Mohg', 'character', 'mohg'), ' son gemelos Omens encarcelados bajo Leyndell'],
      [link('Malenia', 'character', 'malenia'), ' y ', link('Miquella', 'character', 'miquella'), ' son Empyreans gemelos malditos'],
      ['La línea pública oficial mostraba solo a ', link('Godwyn', 'character', 'godwyn'), ' como heredero visible']
    ],
    inferred: [
      ['La sangre Omen procede del lado ', link('Radagon', 'character', 'radagon'), ', no del lado ', link('Marika', 'character', 'marika')],
      'El régimen ocultó deliberadamente la existencia de los gemelos encarcelados',
      ['Las dos respuestas opuestas de ', link('Morgott', 'character', 'morgott'), ' y ', link('Mohg', 'character', 'mohg'), ' derivan directamente del trauma juvenil']
    ],
    theories: [
      [link('Marika', 'character', 'marika'), ' lloraba en privado por sus hijos Omens pero no podía contradecir la ley pública'],
      [link('Godwyn', 'character', 'godwyn'), ' fue diseñado iconográficamente — su rol era propaganda cosmológica'],
      'Otros hijos pudieron existir y ser eliminados antes de que su existencia se documentara'
    ],
    ambiguous: [
      ['Cuántos hijos engendró ', link('Marika', 'character', 'marika'), ' en total'],
      ['Si ', link('Godfrey', 'character', 'godfrey'), ' conocía la existencia de los gemelos Omens'],
      ['Si la decisión de encarcelar fue de ', link('Marika', 'character', 'marika'), ', de los ', link('Dos Dedos', 'faction', 'dos-dedos'), ', o de la propia ley impersonal']
    ],
    relatedCharacters: ['marika', 'godfrey', 'godwyn', 'morgott', 'mohg', 'malenia', 'miquella', 'melina', 'radagon'],
    relatedFactions: ['orden-dorado', 'omens', 'golden-lineage'],
    relatedRegions: ['leyndell', 'subterranean-shunning-grounds'],
    relatedConcepts: ['great-rune', 'crucible', 'empyrean'],
    relatedTimelineEvents: ['marika-godfrey', 'hijos-marika-godfrey', 'morgott-mohg-imprisonment'],
  },

  'godwyn-dragones': {
    summary:
      'El pacto de Godwyn con Fortissax — primer y único caso de unión cosmológica entre demidiós dorado y Antiguo Dragón — fue la única reforma religiosa positiva del Orden Dorado. Godwyn no exterminó al dragón; lo persuadió. Fundó el Culto del Antiguo Dragón como tradición sincrética. Su asesinato cortó esta posibilidad de raíz.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        link('Godwyn', 'character', 'godwyn'),
        ', el de Ojos Dorados, eligió un camino opuesto al de su padre ',
        link('Godfrey', 'character', 'godfrey'),
        ' frente a los ',
        link('Antiguos Dragones', 'faction', 'dragones-antiguos'),
        ' residuales. Donde su padre había exterminado pueblos enteros como los ',
        link('Gigantes del Fuego', 'faction', 'fire-giants'),
        ', ',
        link('Godwyn', 'character', 'godwyn'),
        ' buscó la integración. Persuadió a ',
        link('Fortissax', 'character', 'fortissax'),
        ' — uno de los dragones más poderosos sobrevivientes de la era de Placidusax — y forjó con él un pacto sagrado de fraternidad eterna.'
      ),
      h(2, 'Historia detallada'),
      p(
        'El pacto fue concreto: ',
        link('Godwyn', 'character', 'godwyn'),
        ' aprendería el rayo dragónico, Fortissax obtendría protección cosmológica como aliado del régimen dorado, y ambos cooperarían en la defensa de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        '. La unión ritual generó el ',
        link('Culto del Antiguo Dragón', 'faction', 'ancient-dragon-cult'),
        ' como secta sincrética. Sus rezos celebraban la unión — no la dominación — de ',
        link('demidiós', 'concept', 'demidios'),
        ' y dragón. Su iconografía mezclaba relámpagos cervidos con escamas doradas.'
      ),
      p(
        'Otras facciones del régimen consideraron este pacto debilidad. La purga oficial contra los dragones nunca se completó por la presencia de ',
        link('Godwyn', 'character', 'godwyn'),
        ' como protector implícito. ',
        link('Lansseax', 'character', 'lansseax'),
        ' (hermana de Fortissax) sobrevivió en Altus en parte gracias a este pacto. Otros dragones residuales encontraron tolerancia tácita.'
      ),
      p(
        'Cuando ',
        link('Ranni', 'character', 'ranni'),
        ' orquestó la ',
        link('Noche de los Cuchillos Negros', 'timeline', 'ranni-noche-cuchillos'),
        ', el asesinato parcial de ',
        link('Godwyn', 'character', 'godwyn'),
        ' cortó toda posibilidad de continuidad reformista. Fortissax quedó atrapado en pesadilla onírica luchando eternamente contra la ',
        link('Deathroot', 'concept', 'deathroot'),
        ' que invadió el cuerpo de su amigo. El pacto sigue activo en el sueño de un cadáver — testimonio horrorizante de la única reforma positiva del régimen.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'Sin el asesinato de ',
        link('Godwyn', 'character', 'godwyn'),
        ', la integración ',
        link('Orden Dorado', 'concept', 'golden-order'),
        '-Antiguos Dragones podría haber continuado. Era el único modelo cosmológico documentado del régimen para reconciliar al pre-Orden con el Orden — no purgándolo, no exterminándolo, sino acomodándolo. Su muerte demuestra estructuralmente que el régimen no toleraba modelos integradores: cualquier camino reformista era amenaza al orden establecido.'
      ),
      h(2, 'Significado simbólico'),
      p(
        link('Godwyn', 'character', 'godwyn'),
        ' y Fortissax representan la promesa cosmológica perdida de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        '. Toda la historia post-fractura — la ',
        link('Guerra del Shattering', 'timeline', 'shattering-war'),
        ', los demidioses irreconciliables, la imposibilidad de un régimen alternativo coherente — se incuba en el momento exacto en que esta única reforma positiva fue eliminada. La pesadilla compartida bajo Deeproot Depths es el monumento subterráneo a lo que pudo haber sido.'
      )
    ],
    confirmed: [
      [link('Godwyn', 'character', 'godwyn'), ' pactó con Fortissax como aliado eterno'],
      ['El pacto generó el ', link('Culto del Antiguo Dragón', 'faction', 'ancient-dragon-cult')],
      ['Fortissax quedó atrapado en la pesadilla onírica de ', link('Godwyn', 'character', 'godwyn'), ' tras su asesinato parcial'],
      [link('Lansseax', 'character', 'lansseax'), ' sobrevivió posiblemente gracias al paraguas protector del pacto']
    ],
    inferred: [
      ['El pacto fue la primera y única reforma religiosa positiva del ', link('Orden Dorado', 'concept', 'golden-order')],
      'Otras facciones del régimen consideraban el pacto debilidad teológica',
      ['La protección implícita de ', link('Godwyn', 'character', 'godwyn'), ' fue lo que detuvo la purga total contra dragones']
    ],
    theories: [
      [link('Godwyn', 'character', 'godwyn'), ' aprendió secretos cosmológicos de Fortissax que el régimen oficial no documentó'],
      'Si el pacto continúa activo en el sueño, Fortissax podría aún ser despertado por una intervención específica',
      ['La ', link('Era del Crepúsculo', 'ending', 'duskborn'), ' restauraría el pacto al permitir que ambos finalmente mueran como aliados']
    ],
    ambiguous: [
      'Cuándo exactamente ocurrió el pacto inicial',
      'Si otros dragones aceptaron unirse o solo Fortissax',
      ['Si el rayo dragónico de ', link('Godwyn', 'character', 'godwyn'), ' era poder propio o préstamo cosmológico']
    ],
    relatedCharacters: ['godwyn', 'fortissax', 'godfrey', 'lansseax', 'placidusax'],
    relatedFactions: ['ancient-dragon-cult', 'dragones-antiguos'],
    relatedRegions: ['deeproot-depths'],
    relatedConcepts: ['deathroot', 'destined-death'],
    relatedTimelineEvents: ['nacimiento-linaje-dorado', 'ranni-noche-cuchillos'],
    relatedEndings: ['duskborn'],
  },

  'rennala-colapso': {
    summary:
      'El colapso emocional de Rennala fue el primer evento documentado de las Tierras Intermedias donde una figura cosmológica de primer nivel fue destruida por dolor personal puro. La maldición del Renacimiento que le entregó Lazuli Conspector no fue impuesta — fue voluntariamente aceptada como escudo psicológico contra el abandono de Radagon. Hoy hechiza eternamente al Amber Egg.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'Tras la partida de ',
        link('Radagon', 'character', 'radagon'),
        ' a Leyndell — donde se reabsorbería con ',
        link('Marika', 'character', 'marika'),
        ' — ',
        link('Rennala', 'character', 'rennala'),
        ' colapsó funcionalmente. No por debilidad: era la mayor hechicera viva de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        '. Por dolor específico: el esposo amado se llevaba consigo el último vínculo cosmológico que la sostenía como persona.'
      ),
      h(2, 'Historia detallada'),
      p(
        link('Radagon', 'character', 'radagon'),
        ' dejó como prenda de despedida un Amber Egg — símbolo ritual de los nacimientos divinos. La intención del gesto sigue siendo opaca: ¿reconocimiento del vínculo? ¿substituto cosmológico? ¿simple cortesía protocolaria? Lo que es indudable es que ',
        link('Rennala', 'character', 'rennala'),
        ' lo aceptó como núcleo de su identidad post-abandono.'
      ),
      p(
        'Un académico llamado Lazuli Conspector regresó del más allá con la maldición del ',
        link('Renacimiento', 'concept', 'rebirth'),
        ' — magia ontológica capaz de "renacer" sujetos en versiones rediseñadas. Por compasión, por crueldad o por instrucción específica, se la entregó a ',
        link('Rennala', 'character', 'rennala'),
        '. Desde entonces ella usa ese poder en bucle infinito sobre el Amber Egg, hechizándolo como si fuera un bebé que está por nacer.'
      ),
      p(
        'La función accidental que esto generó fue valiosa: los ',
        link('Tarnished', 'concept', 'tarnished'),
        ' pueden usar a ',
        link('Rennala', 'character', 'rennala'),
        ' para reorganizar sus propios atributos. Ella canta sobre el cuerpo del aspirante y "lo renace" como una versión rediseñada de sí mismo. La mayor tragedia personal de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ' se convirtió en la herramienta más útil para los aspirantes al trono.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'El colapso de ',
        link('Rennala', 'character', 'rennala'),
        ' dejó a ',
        link('Liurnia', 'region', 'liurnia'),
        ' sin gobierno efectivo. La Academia de ',
        link('Raya Lucaria', 'region', 'raya-lucaria'),
        ' pasó a manos de fenómenos arcanos sin gobernanza humana. Sus tres hijos crecieron sin madre funcional: ',
        link('Ranni', 'character', 'ranni'),
        ' canalizó la pena en rebelión cosmológica, ',
        link('Radahn', 'character', 'radahn'),
        ' en idolatría obsesiva al modelo paterno (',
        link('Godfrey', 'character', 'godfrey'),
        ', no ',
        link('Radagon', 'character', 'radagon'),
        '), ',
        link('Rykard', 'character', 'rykard'),
        ' en blasfemia institucional. Cada respuesta es legible como reacción al colapso materno.'
      ),
      p(
        'Durante el combate con el ',
        link('Tarnished', 'concept', 'tarnished'),
        ', ',
        link('Ranni', 'character', 'ranni'),
        ' invoca una ilusión protectora alrededor de su madre — primer signo en todo el juego de que ',
        link('Rennala', 'character', 'rennala'),
        ' conserva afecto activo de al menos una hija. La ilusión no la cura, solo la cuida durante el rito.'
      ),
      h(2, 'Significado simbólico'),
      p(
        link('Rennala', 'character', 'rennala'),
        ' es la imagen más nítida del costo personal de la cosmología institucional. ',
        link('Marika', 'character', 'marika'),
        ' exigió a ',
        link('Radagon', 'character', 'radagon'),
        ', ',
        link('Radagon', 'character', 'radagon'),
        ' obedeció, ',
        link('Rennala', 'character', 'rennala'),
        ' quedó destruida. El ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' funciona porque otros pagan el precio. Su Amber Egg — nacimiento eterno sin parto — simboliza la imposibilidad del cierre: duelo sin etapa final, gestación que nunca culmina.'
      )
    ],
    confirmed: [
      [link('Rennala', 'character', 'rennala'), ' recibió el Amber Egg como prenda de despedida de ', link('Radagon', 'character', 'radagon')],
      ['Lazuli Conspector le entregó la maldición del ', link('Renacimiento', 'concept', 'rebirth')],
      [link('Rennala', 'character', 'rennala'), ' hechiza eternamente al Amber Egg en bucle'],
      ['Los ', link('Tarnished', 'concept', 'tarnished'), ' pueden usar el rito para reorganizar atributos'],
      [link('Ranni', 'character', 'ranni'), ' invoca una ilusión protectora durante el combate final']
    ],
    inferred: [
      'Su regresión es escudo psicológico activo, no demencia involuntaria',
      'Sus tres hijos arrastran cicatrices del colapso',
      ['Aún ama a ', link('Radagon', 'character', 'radagon'), ' a pesar de saber sobre la fusión con ', link('Marika', 'character', 'marika')]
    ],
    theories: [
      [link('Rennala', 'character', 'rennala'), ' conserva consciencia plena pero rechaza activamente salir del bucle'],
      'El Amber Egg contiene un poder cosmológico real que ella ha decidido no usar',
      'Lazuli Conspector le entregó la maldición por instrucción específica de algún tercero'
    ],
    ambiguous: [
      ['Si conoció el destino ', link('Empyrean', 'concept', 'empyrean'), ' de ', link('Ranni', 'character', 'ranni'), ' y lo aprobó'],
      'Si la ilusión protectora la consultó o se impuso sin consentimiento',
      'Cuál es exactamente el contenido del Amber Egg — embrión real, símbolo, vehículo cosmológico latente'
    ],
    relatedCharacters: ['rennala', 'radagon', 'ranni', 'radahn', 'rykard', 'marika'],
    relatedFactions: ['caria', 'raya-lucaria'],
    relatedRegions: ['raya-lucaria', 'liurnia'],
    relatedConcepts: ['rebirth', 'full-moon', 'great-rune'],
    relatedTimelineEvents: ['radagon-rennala', 'radagon-es-marika'],
  },

  'unalloyed-gold-haligtree': {
    summary:
      'El proyecto del Oro sin Aleación de Miquella fue la única tentativa positiva de curar el cosmos de las Tierras Intermedias. Plantó el Haligtree como árbol alternativo independiente de la Voluntad Mayor; acogió a los excluidos del régimen oficial; desarrolló las Agujas curativas. Su sueño esperaba un cosmos transformado. Mohg lo secuestró antes de que despertara.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        link('Miquella', 'character', 'miquella'),
        ' comprendió temprano que el cosmos de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ' estaba estructuralmente contaminado por dioses externos parásitos. Su gemela ',
        link('Malenia', 'character', 'malenia'),
        ' era prueba viviente: nacida con la ',
        link('Podredumbre Escarlata', 'concept', 'scarlet-rot'),
        ' como parásito divino desde el nacimiento. La pregunta filosófica de ',
        link('Miquella', 'character', 'miquella'),
        ' fue: ¿se puede curar al cosmos?'
      ),
      h(2, 'Historia detallada'),
      p(
        'Su respuesta material fue el ',
        link('Oro sin Aleación', 'concept', 'unalloyed-gold'),
        ' — forma purificada de oro divino capaz de repeler la influencia de los ',
        link('dioses exteriores', 'concept', 'dioses-exteriores'),
        '. Las ',
        link('Agujas de Oro sin Aleación', 'concept', 'unalloyed-gold'),
        ' pueden expulsar a un dios externo del cuerpo de su huésped. Son los únicos objetos puramente curativos del juego — no defensivos, no ofensivos, sino estructuralmente sanadores.'
      ),
      p(
        'Plantó el ',
        link('Haligtree', 'region', 'haligtree'),
        ' en las tierras nevadas más allá de las Mountaintops como cosmología alternativa. No era simplemente un refugio — era propuesta cosmológica completa: un árbol independiente de la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ', alimentado por luz propia, capaz de proveer reciclaje de almas sin contrato divino.'
      ),
      p(
        'Acogió a los excluidos del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ': ',
        link('Albinaurics', 'faction', 'albinauricos'),
        ', ',
        link('Misbegotten', 'faction', 'misbegotten'),
        ', y otros marginados. Su éxodo a través del ',
        link('Snowfield Consagrado', 'region', 'consecrated-snowfield'),
        ' costó la vida a la mayoría — cuerpos de peregrinos congelados aún yacen en las nieves. Los que llegaron a ',
        link('Elphael', 'region', 'elphael'),
        ' construyeron la primera ciudad utópica documentada de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ': una urbe donde nadie era rechazado por su forma.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'Pero el cosmos depredador no permitió que el proyecto sobreviviera. Cuando ',
        link('Malenia', 'character', 'malenia'),
        ' regresó mutilada de la Batalla de Aeonia, la ',
        link('Podredumbre Escarlata', 'concept', 'scarlet-rot'),
        ' residual comenzó a infectar al árbol mismo. Los Albinaurics enloquecieron y se transformaron en Albinaurics carmesíes. Los Cleanrot Knights perdieron control progresivo. Y ',
        link('Mohg', 'character', 'mohg'),
        ' aprovechó la debilidad de la guardiana para secuestrar a ',
        link('Miquella', 'character', 'miquella'),
        ' durante su sueño curativo.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'El proyecto del ',
        link('Haligtree', 'region', 'haligtree'),
        ' encarna la única filosofía positiva de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ': no destruir el sistema, no reformarlo, sino curarlo de los dioses parásitos. Su fracaso es la respuesta más oscura del juego a la pregunta de si el régimen actual es reformable. Ningún proyecto curativo sobrevive sin protección armada — y la protección armada eventualmente se contamina.'
      )
    ],
    confirmed: [
      [link('Miquella', 'character', 'miquella'), ' desarrolló el ', link('Oro sin Aleación', 'concept', 'unalloyed-gold'), ' contra los ', link('dioses exteriores', 'concept', 'dioses-exteriores')],
      ['Plantó el ', link('Haligtree', 'concept', 'haligtree'), ' como cosmología alternativa al ', link('Árbol Áureo', 'concept', 'erdtree')],
      'Acogió a Albinaurics y Misbegotten como refugiados',
      ['Las Agujas curativas pueden expulsar ', link('dioses exteriores', 'concept', 'dioses-exteriores')],
      ['La Podredumbre infectó el árbol tras la mutilación de ', link('Malenia', 'character', 'malenia')]
    ],
    inferred: [
      ['El proyecto era el más radical positivo de las ', link('Tierras Intermedias', 'region', 'tierras-intermedias')],
      'El éxodo a través del Snowfield costó muchas vidas',
      ['La utopía dependía estructuralmente de la protección de ', link('Malenia', 'character', 'malenia')]
    ],
    theories: [
      ['El ', link('Oro sin Aleación', 'concept', 'unalloyed-gold'), ' amenazaba a la ', link('Voluntad Mayor', 'concept', 'voluntad-mayor'), ' tanto como a los dioses externos'],
      ['Si ', link('Miquella', 'character', 'miquella'), ' despertara, podría revertir parcialmente la Podredumbre del ', link('Haligtree', 'region', 'haligtree')],
      [link('Marika', 'character', 'marika'), ' sabía del proyecto y lo aprobaba secretamente']
    ],
    ambiguous: [
      ['Cuándo exactamente plantó el ', link('Haligtree', 'concept', 'haligtree')],
      ['Si ', link('Miquella', 'character', 'miquella'), ' conserva alguna conciencia durante el secuestro en Mohgwyn'],
      'Si su despertar habría sido benigno o autoritario en su propio modo'
    ],
    relatedCharacters: ['miquella', 'malenia', 'mohg', 'millicent'],
    relatedFactions: ['cleanrot-knights', 'albinauricos', 'misbegotten'],
    relatedRegions: ['haligtree', 'consecrated-snowfield', 'elphael', 'ordina'],
    relatedConcepts: ['unalloyed-gold', 'erdtree', 'dioses-exteriores'],
    relatedTimelineEvents: ['miquella-malenia', 'mohg-toma-miquella', 'batalla-aeonia'],
  },

  'hoja-mata-dedos': {
    summary:
      'Antes de su caída, los Nox forjaron una espada capaz de cortar a los Dos Dedos. Esa Hoja Mata-Dedos quedó enterrada como reliquia activa: prueba arqueológica de que la rebelión cosmológica tiene precedentes técnicos. Ranni recuperarla durante su quest convierte el sueño Nox en operación práctica.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'La ',
        link('Hoja Mata-Dedos', 'concept', 'fingerslayer-blade'),
        ' (Fingerslayer Blade) fue forjada por los ',
        link('Nox', 'faction', 'nox'),
        ' en algún momento previo a la caída de su civilización. Su propósito específico: cortar a los ',
        link('Dos Dedos', 'faction', 'dos-dedos'),
        ', mensajeros físicos de la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        '. Era arma deliberadamente teológica.'
      ),
      h(2, 'Historia detallada'),
      p(
        'La existencia de la Hoja confirma que la rebelión Nox no era ingenua. Antes de intentar forjar su propio dios, los ',
        link('Nox', 'faction', 'nox'),
        ' habían anticipado la respuesta del régimen establecido y habían construido herramientas defensivas específicas. La Hoja era la última carta — el arma que les permitiría cortar la cadena de mando si los ',
        link('Dos Dedos', 'faction', 'dos-dedos'),
        ' llegaban a intervenir directamente.'
      ),
      p(
        'Tras la caída de los ',
        link('Nox', 'faction', 'nox'),
        ' por el impacto de ',
        link('Astel', 'character', 'astel-naturalborn'),
        ', la Hoja quedó enterrada en las ruinas de ',
        link('Nokron', 'region', 'nokron'),
        '. Conservó su filo cosmológico durante eras, esperando un sucesor de la rebelión.'
      ),
      p(
        link('Ranni', 'character', 'ranni'),
        ' recupera la Hoja como parte central de su quest. Su rebelión cosmológica hereda directamente la línea Nox: forjar un cosmos sin ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' cercana. La Hoja es el instrumento que asegura que los ',
        link('Dos Dedos', 'faction', 'dos-dedos'),
        ' no puedan retomar control durante la transición a la ',
        link('Era de las Estrellas', 'ending', 'age-of-stars'),
        '.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'La ',
        link('Hoja Mata-Dedos', 'concept', 'fingerslayer-blade'),
        ' es prueba ontológica de que los regímenes cosmológicos tienen vulnerabilidades específicas. Los ',
        link('Dos Dedos', 'faction', 'dos-dedos'),
        ' no son indestructibles — solo escasamente atacables. La existencia de la Hoja documenta que civilizaciones rivales han preparado defensas durante eras y que esas defensas siguen activas siglos después.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La Hoja simboliza la continuidad de la rebelión cosmológica como tradición. Lo que los ',
        link('Nox', 'faction', 'nox'),
        ' iniciaron, ',
        link('Ranni', 'character', 'ranni'),
        ' completa. La rebelión contra la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' no es invento reciente — es legado heredado. Cada generación rebelde añade un paso al plan que la generación anterior dejó incompleto.'
      )
    ],
    confirmed: [
      ['Los ', link('Nox', 'faction', 'nox'), ' forjaron la ', link('Hoja Mata-Dedos', 'concept', 'fingerslayer-blade'), ' antes de su caída'],
      ['Su propósito específico es cortar a los ', link('Dos Dedos', 'faction', 'dos-dedos')],
      'La Hoja sobrevive enterrada en Nokron',
      [link('Ranni', 'character', 'ranni'), ' la recupera durante su quest']
    ],
    inferred: [
      ['Los ', link('Nox', 'faction', 'nox'), ' anticipaban intervención directa de los ', link('Dos Dedos', 'faction', 'dos-dedos')],
      'La Hoja fue construcción defensiva, no ofensiva',
      [link('Ranni', 'character', 'ranni'), ' hereda directamente la línea técnica Nox']
    ],
    theories: [
      'Existen otras armas Nox similares aún no descubiertas',
      ['La Hoja conserva voluntad residual de los ', link('Nox', 'faction', 'nox'), ' que la forjaron'],
      ['Cortar a los ', link('Dos Dedos', 'faction', 'dos-dedos'), ' no los mata cosmológicamente — solo los desactiva temporalmente']
    ],
    ambiguous: [
      'Cuándo exactamente fue forjada',
      ['Si los ', link('Nox', 'faction', 'nox'), ' la usaron contra los ', link('Dos Dedos', 'faction', 'dos-dedos'), ' durante su rebelión inicial'],
      ['Si ', link('Marika', 'character', 'marika'), ' conocía su existencia']
    ],
    relatedCharacters: ['ranni', 'astel-naturalborn'],
    relatedFactions: ['nox', 'dos-dedos'],
    relatedRegions: ['nokron', 'ainsel-river'],
    relatedConcepts: ['voluntad-mayor', 'destined-death', 'age-of-stars'],
    relatedTimelineEvents: ['nox-ciudades-eternas', 'ranni-bodily-death'],
    relatedEndings: ['age-of-stars'],
  },

  'tormenta-lord-conquista': {
    summary:
      'Antes de servir a Marika, Hoarah Loux conquistó los reinos primigenios de las Tierras Intermedias como Storm Lord. Domesticó al Espíritu Tormenta Serosh y absorbió cada cultura conquistada — Hombres Tormenta, Antiguos Dragones residuales, gigantes de las cumbres. Su biografía pre-Orden es la guerra absoluta del cosmos pre-régimen.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'Antes de su elevación como ',
        link('Primer Señor Elden', 'character', 'godfrey'),
        ', el guerrero conocido como Hoarah Loux era jefe nómada del lejano norte. Su título primigenio — ',
        link('Storm Lord', 'concept', 'storm-lord'),
        ' — procede de los Hombres Tormenta cuyas tradiciones absorbió durante sus conquistas. La era pre-Orden conocía la fuerza marcial absoluta antes de conocer la liturgia dorada.'
      ),
      h(2, 'Historia detallada'),
      p(
        'Su primera operación documentada fue dominar al Espíritu Tormenta ',
        link('Serosh', 'character', 'serosh'),
        ', criatura leonina sapiente vinculada a una entidad cosmológica de la tormenta. Hoarah Loux no lo asesinó — lo encadenó en su propia frente como talismán regulador. La presencia de ',
        link('Serosh', 'character', 'serosh'),
        ' sirvió durante eras como freno civilizatorio: el sabio león susurraba contención al rey guerrero cuando éste estaba a punto de ceder al instinto.'
      ),
      p(
        'Bajo ',
        link('Marika', 'character', 'marika'),
        ', Hoarah Loux se convirtió en ',
        link('Godfrey', 'character', 'godfrey'),
        ' y conquistó las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ' enteras. Su campaña incluyó: la guerra contra los ',
        link('Gigantes del Fuego', 'faction', 'fire-giants'),
        ' en las Mountaintops; el sometimiento de los Hombres Tormenta del lejano norte; ataques contra los Antiguos Dragones residuales que sobrevivían a la era de Placidusax; el sometimiento de pueblos del ',
        link('Crisol', 'concept', 'crucible'),
        ' que rechazaban el régimen dorado naciente.'
      ),
      p(
        'De cada cultura conquistada absorbió un don marcial específico. El ',
        em('Stormhawk Deenh'),
        ' — el ave-rayo de ',
        link('Godfrey', 'character', 'godfrey'),
        ' — procede de los Hombres Tormenta. Las técnicas de pelea con espadas dobles vienen de tradiciones del ',
        link('Crisol', 'concept', 'crucible'),
        '. La ferocidad pura de Hoarah Loux es residuo del Storm Lord pre-régimen, conservado como reserva ritual durante todos sus años civilizados.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'La conquista de ',
        link('Godfrey', 'character', 'godfrey'),
        ' definió la geografía política de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ' actuales. Cada región del juego es escenario directo o indirecto de sus campañas. Su retorno final como espectro dorado ante el ',
        link('Tarnished', 'concept', 'tarnished'),
        ' completa el ciclo: el primer rey regresa a defender el trono que ya no le pertenece, y descarta a ',
        link('Serosh', 'character', 'serosh'),
        ' para volver a ser Hoarah Loux completo. La transformación final es ritual: el rey civilizado quita la máscara y deja al cazador desnudo terminar la pelea.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Hoarah Loux como Storm Lord encarna la marcialidad pre-régimen. El ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' no domesticó al guerrero primal — solo lo vistió. Bajo cada rey civilizado vive un cazador desnudo. Cuando llega el momento, el cazador regresa con todo su poder original. La civilización es ropa que se quita.'
      )
    ],
    confirmed: [
      ['Hoarah Loux fue Storm Lord ', link('antes del Orden Dorado', 'timeline', 'antes-orden-dorado')],
      ['Dominó a ', link('Serosh', 'character', 'serosh'), ' y lo encadenó en su frente como talismán'],
      ['Conquistó múltiples pueblos primigenios bajo ', link('Marika', 'character', 'marika')],
      [link('Stormhawk Deenh', 'character', 'stormhawk-deenh'), ' procede de los Hombres Tormenta'],
      ['Su forma final descarta a ', link('Serosh', 'character', 'serosh'), ' y vuelve a Hoarah Loux completo']
    ],
    inferred: [
      'Storm Lord era título cosmológicamente vinculado a una entidad del cielo',
      ['La conquista pre-', link('Marika', 'character', 'marika'), ' ya había establecido a Hoarah Loux como gobernante regional'],
      [link('Serosh', 'character', 'serosh'), ' ofrecía consejo activo durante los años civilizados, no solo regulación pasiva']
    ],
    theories: [
      'Existió un dios externo de la tormenta al que Hoarah Loux estaba ritualmente vinculado',
      'Otros guerreros Storm Lord coexistieron y fueron eliminados durante la conquista',
      'La transformación final del rey al cazador es ritual ensayado durante eras, no espontánea'
    ],
    ambiguous: [
      ['Cuántas tribus dominó antes de unirse al régimen de ', link('Marika', 'character', 'marika')],
      ['Si ', link('Serosh', 'character', 'serosh'), ' era voluntariamente subordinado o cautivo perpetuo'],
      'Si la entidad de la tormenta sigue activa o se retiró tras la elevación de Hoarah Loux'
    ],
    relatedCharacters: ['godfrey', 'serosh', 'marika'],
    relatedFactions: ['fire-giants', 'dragones-antiguos'],
    relatedRegions: ['stormveil', 'mountaintops'],
    relatedConcepts: ['storm-lord', 'crucible'],
    relatedTimelineEvents: ['marika-godfrey', 'guerra-gigantes-fuego'],
  },

  'malenia-marcha-caelid': {
    summary:
      'La marcha de Malenia y los Cleanrot Knights de Elphael a Caelid no fue venganza sino corrección cosmológica. Radahn había bloqueado las estrellas con su gravedad para detener el destino Empyrean de Ranni; las estrellas son destino inscrito; el bloqueo perpetuo era anomalía. Malenia partió a desbloquearlas combatiendo a su rival más respetado.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'Tras la ',
        link('fractura', 'timeline', 'la-fractura'),
        ' del ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        ', ',
        link('Radahn', 'character', 'radahn'),
        ' usó su ',
        link('magia gravitacional', 'concept', 'gravity-magic'),
        ' para bloquear el movimiento de las estrellas en el cielo de ',
        link('Caelid', 'region', 'caelid'),
        '. El bloqueo era específico: detenía el destino estelar de su hermana ',
        link('Ranni', 'character', 'ranni'),
        ' como ',
        link('Empyrean', 'concept', 'empyrean'),
        '. La protección era acto de amor fraterno — pero su efecto cosmológico era cancelar la posibilidad de la ',
        link('Era de las Estrellas', 'ending', 'age-of-stars'),
        ' por tiempo indefinido.'
      ),
      h(2, 'Historia detallada'),
      p(
        link('Malenia', 'character', 'malenia'),
        ', Espada de ',
        link('Miquella', 'character', 'miquella'),
        ', decidió enfrentarlo no por iniciativa de su hermano dormido sino por iniciativa propia. Lideró a los ',
        link('Cleanrot Knights', 'faction', 'cleanrot-knights'),
        ' desde ',
        link('Elphael', 'region', 'elphael'),
        ' a través del Snowfield, las Mountaintops, el Altus Plateau, hasta llegar a la frontera de ',
        link('Caelid', 'region', 'caelid'),
        '. La marcha es una de las operaciones militares más documentadas de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ' post-fractura.'
      ),
      p(
        'Sus motivaciones eran múltiples y honestas: 1) restaurar el flujo cosmológico bloqueado, 2) probar su honor marcial contra el rival más respetado, 3) servir indirectamente al proyecto de ',
        link('Miquella', 'character', 'miquella'),
        ' al permitir que la cosmología siguiera moviéndose. No era venganza personal — ',
        link('Malenia', 'character', 'malenia'),
        ' y ',
        link('Radahn', 'character', 'radahn'),
        ' se admiraban mutuamente como guerreros invictos.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'La marcha consumió a la mayoría de sus Cleanrot Knights antes de llegar al combate principal. La región de ',
        link('Caelid', 'region', 'caelid'),
        ', ya en proceso de degeneración por el conflicto previo de los demidioses, recibió su cuerpo vanguardia. Cuando ',
        link('Malenia', 'character', 'malenia'),
        ' y ',
        link('Radahn', 'character', 'radahn'),
        ' finalmente se enfrentaron, el escenario para la ',
        link('Batalla de Aeonia', 'timeline', 'batalla-aeonia'),
        ' estaba listo. La ',
        link('Floración Escarlata', 'concept', 'scarlet-rot'),
        ' que ocurrió allí no fue accidente — fue consecuencia directa de que ',
        link('Malenia', 'character', 'malenia'),
        ' se vio incapaz de vencer marcialmente al guerrero invicto.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La marcha encarna la disonancia trágica de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ' post-fractura: amor familiar que produce bloqueo cosmológico, honor marcial que requiere combate fratricida, fidelidad a un hermano dormido (',
        link('Miquella', 'character', 'miquella'),
        ') que demanda matar al admirado adversario (',
        link('Radahn', 'character', 'radahn'),
        '). Cada acción honorable produce consecuencias catastróficas. El régimen post-fractura no permite buenas decisiones.'
      )
    ],
    confirmed: [
      [link('Radahn', 'character', 'radahn'), ' bloqueó las estrellas con su gravedad para proteger a ', link('Ranni', 'character', 'ranni')],
      [link('Malenia', 'character', 'malenia'), ' marchó desde el ', link('Haligtree', 'concept', 'haligtree'), ' a ', link('Caelid', 'region', 'caelid'), ' con los Cleanrot Knights'],
      'La motivación primaria fue restaurar el flujo cosmológico bloqueado',
      [link('Malenia', 'character', 'malenia'), ' y ', link('Radahn', 'character', 'radahn'), ' se admiraban mutuamente como guerreros'],
      'La marcha consumió a la mayoría de sus Cleanrot Knights'
    ],
    inferred: [
      [link('Miquella', 'character', 'miquella'), ' estaba dormido durante la marcha — la decisión fue de ', link('Malenia', 'character', 'malenia'), ' sola'],
      [link('Caelid', 'region', 'caelid'), ' ya estaba en proceso de degeneración pre-Aeonia'],
      ['Ningún ', link('demidiós', 'concept', 'demidios'), ' central apoyaba o se oponía abiertamente a la marcha']
    ],
    theories: [
      ['Sellen, antigua maestra de ', link('Radahn', 'character', 'radahn'), ', anticipó la confrontación pero no intervino'],
      'Algunos Cleanrot Knights desertaron al ver la magnitud del costo',
      ['La Floración Escarlata era inevitable cosmológicamente desde que ', link('Malenia', 'character', 'malenia'), ' salió del ', link('Haligtree', 'region', 'haligtree')]
    ],
    ambiguous: [
      ['Si ', link('Malenia', 'character', 'malenia'), ' conocía el riesgo de su propia Floración antes de partir'],
      'Cuánto tiempo duró la marcha exactamente',
      'Si los Cleanrot Knights aceptaron voluntariamente la infección o fueron infectados durante la marcha'
    ],
    relatedCharacters: ['malenia', 'radahn', 'miquella', 'ranni'],
    relatedFactions: ['cleanrot-knights', 'redmanes'],
    relatedRegions: ['caelid', 'elphael', 'haligtree', 'consecrated-snowfield'],
    relatedConcepts: ['scarlet-rot', 'primeval-current', 'stars-and-fate-concept'],
    relatedTimelineEvents: ['batalla-aeonia', 'caelid-devastation'],
    relatedEndings: ['age-of-stars'],
  },

  'batalla-aeonia': {
    summary:
      'La Batalla de Aeonia fue el duelo más legendario de las Tierras Intermedias post-fractura: Malenia contra Radahn, dos guerreros invictos midiéndose en lo único que les importaba. Cuando Malenia comprendió que no podía vencer marcialmente, desplegó su Scarlet Aeonia — la primera Floración real. Caelid quedó arrasado para siempre. Ambos perdieron.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'El duelo entre ',
        link('Malenia', 'character', 'malenia'),
        ' y ',
        link('Radahn', 'character', 'radahn'),
        ' tuvo lugar en los pantanos centrales de ',
        link('Caelid', 'region', 'caelid'),
        ' tras la marcha de ',
        link('Malenia', 'character', 'malenia'),
        ' desde el ',
        link('Haligtree', 'concept', 'haligtree'),
        '. Era el duelo cosmológico más esperado de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ': dos demidioses invictos cuyas técnicas eran radicalmente distintas (combate cuerpo a cuerpo vs gravedad de campo abierto) midiéndose mutuamente sin reservas.'
      ),
      h(2, 'Historia detallada'),
      p(
        'La batalla fue prolongada. ',
        link('Radahn', 'character', 'radahn'),
        ' dominaba el campo abierto con su gravedad astronómica — atrayendo proyectiles, sosteniendo su armadura colosal, lanzando lluvia de meteoritos. ',
        link('Malenia', 'character', 'malenia'),
        ' respondía con la Danza Floreciente, los pasos del Lirio del Valle, ataques de profundidad imposible que parecían anticipar cada movimiento gravitacional.'
      ),
      p(
        'Cuando ',
        link('Malenia', 'character', 'malenia'),
        ' comprendió que la batalla se extendía sin que pudiera prevalecer marcialmente, desplegó su ',
        em('Scarlet Aeonia'),
        ' — la primera Floración real de la ',
        link('Podredumbre Escarlata', 'concept', 'scarlet-rot'),
        '. No fue decisión estratégica fría: fue desesperación divina. La Floración brotó de su cuerpo como flor carmesí monstruosa que se expandió por toda la región.'
      ),
      p(
        'El efecto fue total. ',
        link('Caelid', 'region', 'caelid'),
        ' entero quedó cubierto de podredumbre permanente. Los ',
        link('Redmanes', 'faction', 'redmanes'),
        ' presentes fueron infectados. ',
        link('Radahn', 'character', 'radahn'),
        ' quedó corrompido — su mente devorada por la podredumbre sin que su honor marcial le permitiera rendirse. La región se transformó en yermo carmesí en cuestión de horas. ',
        link('Malenia', 'character', 'malenia'),
        ' ganó técnicamente: ',
        link('Radahn', 'character', 'radahn'),
        ' no pudo continuar peleando con coherencia. Pero perdió ontológicamente: su propio cuerpo quedó tan deteriorado que perdió piernas, ojo, capacidad de caminar.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'La Batalla de Aeonia es uno de los eventos más consecuentes de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ' post-fractura. Arruinó ',
        link('Caelid', 'region', 'caelid'),
        ' permanentemente. Generó las hijas escarlatas (incluyendo a la única humana, ',
        link('Millicent', 'character', 'millicent'),
        '). Debilitó al ',
        link('Haligtree', 'region', 'haligtree'),
        ' durante años (',
        link('Malenia', 'character', 'malenia'),
        ' ya no podía proteger a ',
        link('Miquella', 'character', 'miquella'),
        '). Y creó la condición para el secuestro posterior: ',
        link('Mohg', 'character', 'mohg'),
        ' aprovechó la ausencia/incapacidad de ',
        link('Malenia', 'character', 'malenia'),
        ' para entrar al ',
        link('Haligtree', 'region', 'haligtree'),
        ' y robar a ',
        link('Miquella', 'character', 'miquella'),
        '.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La Batalla encarna la imposibilidad ética de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ' post-fractura. Dos guerreros honorables se enfrentaron sin animosidad personal y produjeron una catástrofe regional. La devoción de ',
        link('Malenia', 'character', 'malenia'),
        ' a ',
        link('Miquella', 'character', 'miquella'),
        ', la fidelidad de ',
        link('Radahn', 'character', 'radahn'),
        ' a la protección de ',
        link('Ranni', 'character', 'ranni'),
        ', ambas honorables, ambas conducentes a destrucción masiva. El régimen post-fractura no permite que el honor produzca buenos resultados: solo produce ruinas con dignidad.'
      )
    ],
    confirmed: [
      [link('Malenia', 'character', 'malenia'), ' y ', link('Radahn', 'character', 'radahn'), ' se enfrentaron en Aeonia como duelo de honor mutuo'],
      [link('Malenia', 'character', 'malenia'), ' desplegó la Scarlet Aeonia cuando vio que no podía vencer marcialmente'],
      [link('Caelid', 'region', 'caelid'), ' quedó cubierto de ', link('Podredumbre Escarlata', 'concept', 'scarlet-rot'), ' permanente'],
      [link('Radahn', 'character', 'radahn'), ' fue corrompido y reducido a bestia honorable demente'],
      [link('Malenia', 'character', 'malenia'), ' perdió piernas y ojo en la operación']
    ],
    inferred: [
      'La Floración no fue decisión estratégica fría sino desesperación divina',
      ['Los ', link('Redmanes', 'faction', 'redmanes'), ' presentes en Aeonia fueron infectados o murieron'],
      ['La Batalla creó la condición material para el posterior secuestro de ', link('Miquella', 'character', 'miquella')]
    ],
    theories: [
      [link('Radahn', 'character', 'radahn'), ' supo durante la batalla que ', link('Malenia', 'character', 'malenia'), ' liberaría la Floración y aceptó el riesgo'],
      ['La Floración era inevitable cosmológicamente — ', link('Malenia', 'character', 'malenia'), ' no decidió, ejecutó'],
      ['El honor marcial impidió a ', link('Radahn', 'character', 'radahn'), ' rendirse incluso cuando habría sido razonable']
    ],
    ambiguous: [
      'Cuánto duró exactamente el duelo',
      ['Si ', link('Malenia', 'character', 'malenia'), ' conocía el costo personal de la Floración antes de desplegarla'],
      ['Si ', link('Radahn', 'character', 'radahn'), ' habría podido prevalecer si ', link('Malenia', 'character', 'malenia'), ' no hubiera florecido']
    ],
    relatedCharacters: ['malenia', 'radahn', 'miquella', 'jerren', 'millicent', 'gowry'],
    relatedFactions: ['cleanrot-knights', 'redmanes', 'kindred-of-rot'],
    relatedRegions: ['caelid', 'redmane-castle', 'lake-of-rot'],
    relatedConcepts: ['scarlet-rot', 'outer-god-of-rot', 'great-rune', 'primeval-current'],
    relatedTimelineEvents: ['malenia-marcha-caelid', 'caelid-devastation', 'festival-radahn'],
  },

  'festival-radahn': {
    summary:
      'El Festival de Caelid no es competición — es eutanasia ritual diseñada por los Redmanes para devolver dignidad a su general arruinado. Jerren oficia. Guerreros legendarios son invitados a derrotar al Radahn corrompido. Su muerte libera las estrellas que él bloqueaba — cumpliendo paradójicamente lo que Malenia había iniciado.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'Tras la corrupción de ',
        link('Radahn', 'character', 'radahn'),
        ' por la ',
        link('Podredumbre Escarlata', 'concept', 'scarlet-rot'),
        ' en la Batalla de Aeonia, los ',
        link('Redmanes', 'faction', 'redmanes'),
        ' supervivientes diseñaron una solución ritual sin precedentes en las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ': invitar a guerreros legendarios a derrotar a su general arruinado, devolviéndole la dignidad de morir en combate y no por envenenamiento crónico.'
      ),
      h(2, 'Historia detallada'),
      p(
        link('Jerren', 'character', 'jerren'),
        ', maestro de armas y posiblemente amante histórico de ',
        link('Sellen', 'character', 'sellen'),
        ', oficia el Festival. Es la única figura de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ' con autoridad ritual para coordinar lo que es, técnicamente, una operación de eutanasia honorífica colectiva. La sede es ',
        link('Castillo Redmane', 'region', 'redmane-castle'),
        '.'
      ),
      p(
        'Los combatientes invitados llegaron de todas las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ': ',
        link('Alexander', 'character', 'alexander'),
        ' (la Olla Guerrera), ',
        link('Patches', 'character', 'patches'),
        ' (el oportunista eterno), ',
        link('Bernahl', 'character', 'bernahl'),
        ' (el Caballero Desterrado, antes de su caída), ',
        link('Blaidd', 'character', 'blaidd'),
        ' y otros ',
        link('héroes', 'character', 'zamor-heroes'),
        ' legendarios. Cada invitación es un honor — y un compromiso: aceptar combatir al ser que protegió las estrellas significa aceptar liberarlas también.'
      ),
      p(
        'La operación ritual tiene tres efectos simultáneos: 1) liberar a ',
        link('Radahn', 'character', 'radahn'),
        ' del cuerpo arruinado, 2) devolverle dignidad de morir como guerrero y no como bestia, 3) restaurar el flujo de las estrellas que él había bloqueado — cumpliendo paradójicamente lo que ',
        link('Malenia', 'character', 'malenia'),
        ' había iniciado al provocarlo a la Batalla de Aeonia. Cada movimiento del Festival es triple: piedad, honor, cosmología.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'Cuando el ',
        link('Tarnished', 'concept', 'tarnished'),
        ' finalmente derrota a ',
        link('Radahn', 'character', 'radahn'),
        ', las estrellas vuelven a moverse. La quest de ',
        link('Ranni', 'character', 'ranni'),
        ' se vuelve completable. La ',
        link('Era de las Estrellas', 'ending', 'age-of-stars'),
        ' se vuelve posible. El Festival no es solo despedida — es habilitación cosmológica del final más radical del juego. Los ',
        link('Redmanes', 'faction', 'redmanes'),
        ' lo saben: están organizando, sin poder decirlo abiertamente, el evento que termina con el régimen del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        '.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'El Festival es uno de los pocos rituales benéficos de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ' post-fractura. No es exterminio, no es purga, no es venganza — es reconocimiento. Los ',
        link('Redmanes', 'faction', 'redmanes'),
        ' son los únicos seguidores de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ' que comprenden que servir a un líder corrompido implica organizar su muerte. Es el opuesto exacto de la lealtad de ',
        link('Morgott', 'character', 'morgott'),
        ' a ',
        link('Marika', 'character', 'marika'),
        ': aquellos sirven hasta la muerte propia, los ',
        link('Redmanes', 'faction', 'redmanes'),
        ' sirven matando al servido.'
      )
    ],
    confirmed: [
      ['Los ', link('Redmanes', 'faction', 'redmanes'), ' diseñaron el Festival como eutanasia ritual'],
      [link('Jerren', 'character', 'jerren'), ' oficia'],
      [link('Alexander', 'character', 'alexander'), ', ', link('Patches', 'character', 'patches'), ', ', link('Bernahl', 'character', 'bernahl'), ' participan como combatientes invitados'],
      ['La derrota de ', link('Radahn', 'character', 'radahn'), ' libera las estrellas que él bloqueaba'],
      ['El Festival está activado cuando el ', link('Tarnished', 'concept', 'tarnished'), ' llega a ', link('Caelid', 'region', 'caelid')]
    ],
    inferred: [
      [link('Jerren', 'character', 'jerren'), ' tuvo relación previa con Sellen, posiblemente romántica'],
      ['Los ', link('Redmanes', 'faction', 'redmanes'), ' saben que el Festival es eutanasia'],
      ['La fidelidad marcial Redmane se opone éticamente a la lealtad de ', link('Morgott', 'character', 'morgott')]
    ],
    theories: [
      [link('Jerren', 'character', 'jerren'), ' conocía la conexión cosmológica entre la muerte de ', link('Radahn', 'character', 'radahn'), ' y la quest de ', link('Ranni', 'character', 'ranni')],
      'Algunos Redmanes esperan que la liberación les devuelva memoria de su líder no-corrupto',
      ['Sellen visitó secretamente Redmane antes del Festival para coordinar con ', link('Jerren', 'character', 'jerren')]
    ],
    ambiguous: [
      ['Cuánto tiempo lleva el Festival activo antes del ', link('Tarnished', 'concept', 'tarnished')],
      ['Si todos los ', link('Redmanes', 'faction', 'redmanes'), ' apoyan la operación o algunos disienten'],
      ['Cuántos guerreros invitados aceptaron y cuántos fallecieron antes del ', link('Tarnished', 'concept', 'tarnished')]
    ],
    relatedCharacters: ['radahn', 'jerren', 'sellen', 'alexander', 'patches', 'bernahl', 'ranni', 'malenia'],
    relatedFactions: ['redmanes', 'banished-knights'],
    relatedRegions: ['redmane-castle', 'caelid', 'sellia'],
    relatedConcepts: ['great-rune', 'scarlet-rot', 'primeval-current'],
    relatedTimelineEvents: ['batalla-aeonia', 'caelid-devastation'],
    relatedEndings: ['age-of-stars'],
  },

  'mohg-toma-miquella': {
    summary:
      'Mientras Malenia se recuperaba mutilada de Aeonia, Mohg se infiltró en el Haligtree y secuestró a Miquella durante su sueño curativo. Lo trasladó a Mohgwyn para incubarlo como consorte divino. El plan fracasó — el capullo de Oro sin Aleación protegía al Empyrean dormido — pero detuvo el proyecto curativo y dejó a Malenia esperando un retorno que nunca ocurrirá.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'Tras la Batalla de Aeonia, ',
        link('Malenia', 'character', 'malenia'),
        ' regresó al ',
        link('Haligtree', 'region', 'haligtree'),
        ' mutilada. ',
        link('Miquella', 'character', 'miquella'),
        ' dormía en su capullo dorado de ',
        link('Oro sin Aleación', 'concept', 'unalloyed-gold'),
        ', esperando despertar como dios completo cuando el cosmos cambiase. El proyecto curativo dependía estructuralmente de la protección de su gemela.'
      ),
      h(2, 'Historia detallada'),
      p(
        link('Mohg', 'character', 'mohg'),
        ', tras su pacto con la ',
        link('Madre Informe', 'concept', 'formless-mother'),
        ', había construido la ',
        link('Dinastía Mohgwyn', 'region', 'mohgwyn'),
        ' como reino subterráneo paralelo. Su proyecto requería un consorte ',
        link('Empyrean', 'concept', 'empyrean'),
        ' para ungir su régimen alternativo como auténtica era cosmológica. Eligió a ',
        link('Miquella', 'character', 'miquella'),
        ' precisamente porque dormía: el ',
        link('Empyrean', 'concept', 'empyrean'),
        ' indefenso era el blanco perfecto.'
      ),
      p(
        link('Mohg', 'character', 'mohg'),
        ' aprovechó la debilidad de ',
        link('Malenia', 'character', 'malenia'),
        ' post-Aeonia para infiltrarse en el ',
        link('Haligtree', 'concept', 'haligtree'),
        '. Robó el cuerpo dormido de ',
        link('Miquella', 'character', 'miquella'),
        ' — capullo dorado incluido — y lo trasladó a Mohgwyn. El acto fue silencioso: ningún Cleanrot Knight pudo detenerlo, ninguna Albinauric pudo dar la voz de alarma. Cuando ',
        link('Malenia', 'character', 'malenia'),
        ' despertó al rapto, ya era demasiado tarde.'
      ),
      p(
        'En Mohgwyn, ',
        link('Mohg', 'character', 'mohg'),
        ' inició el ritual de incubación sangrienta. El cuerpo dormido de ',
        link('Miquella', 'character', 'miquella'),
        ' sería bañado en sangre de los Albinaurics traficados durante eras hasta despertar como dios consorte de la Madre Informe. ',
        link('Varré', 'character', 'varre'),
        ' opera como reclutador en superficie atrayendo ',
        link('Tarnished', 'concept', 'tarnished'),
        ' como ofrendas adicionales.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'El plan fracasó por dos razones simultáneas. Primero, el capullo de ',
        link('Oro sin Aleación', 'concept', 'unalloyed-gold'),
        ' protegía a ',
        link('Miquella', 'character', 'miquella'),
        ' incluso del rito sangriento — la sangre carmesí no podía penetrar el oro purificado. ',
        link('Miquella', 'character', 'miquella'),
        ' nunca despertó dentro de Mohgwyn. Segundo, el ',
        link('Tarnished', 'concept', 'tarnished'),
        ' eventualmente derrotó a ',
        link('Mohg', 'character', 'mohg'),
        ' antes de la consumación. La dinastía sangrienta queda detenida en su acto de gestación: un altar a un dios que nunca despertó.'
      ),
      p(
        'Las consecuencias colaterales son enormes. El proyecto curativo de ',
        link('Miquella', 'character', 'miquella'),
        ' quedó paralizado. Su sueño ya no puede completarse. ',
        link('Malenia', 'character', 'malenia'),
        ' espera en Elphael un retorno que nunca llegará — capullo vacío como única compañía. La utopía del ',
        link('Haligtree', 'region', 'haligtree'),
        ' se infectó por la Podredumbre residual y los Albinaurics enloquecieron. La única filosofía positiva de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ' se cancela técnicamente.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'El secuestro encarna la lógica depredadora de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ': ningún proyecto curativo sobrevive sin protección armada, y la protección armada eventualmente se contamina. ',
        link('Mohg', 'character', 'mohg'),
        ' no destruyó el ',
        link('Haligtree', 'concept', 'haligtree'),
        ' — solo robó su núcleo. El árbol sigue en pie, pero sin propósito. Es la imagen más exacta del régimen post-fractura: estructuras cosmológicas activas pero sin núcleo vital.'
      )
    ],
    confirmed: [
      [link('Mohg', 'character', 'mohg'), ' se infiltró en el ', link('Haligtree', 'concept', 'haligtree'), ' mientras ', link('Malenia', 'character', 'malenia'), ' se recuperaba'],
      ['Robó el cuerpo dormido de ', link('Miquella', 'character', 'miquella'), ' en su capullo'],
      'Lo trasladó a Mohgwyn para el ritual de incubación sangrienta',
      ['El capullo de ', link('Oro sin Aleación', 'concept', 'unalloyed-gold'), ' protegió a ', link('Miquella', 'character', 'miquella'), ' del rito'],
      [link('Miquella', 'character', 'miquella'), ' nunca despertó durante el secuestro']
    ],
    inferred: [
      [link('Mohg', 'character', 'mohg'), ' planeaba ungir su régimen alternativo con ', link('Miquella', 'character', 'miquella'), ' como consorte divino'],
      'El secuestro fue silencioso — ningún defensor pudo detenerlo',
      ['Cuando ', link('Malenia', 'character', 'malenia'), ' despertó al rapto ya era demasiado tarde']
    ],
    theories: [
      'Varré opera como puente entre superficie y dinastía subterránea desde mucho antes del rapto',
      [link('Mohg', 'character', 'mohg'), ' aprendió la ubicación del ', link('Haligtree', 'region', 'haligtree'), ' de algún informante'],
      [link('Miquella', 'character', 'miquella'), ' conserva alguna conciencia residual durante el secuestro']
    ],
    ambiguous: [
      'Cuánto tiempo medió entre la Batalla de Aeonia y el rapto',
      ['Si ', link('Malenia', 'character', 'malenia'), ' detectó algo durante el secuestro o estaba completamente inconsciente'],
      ['Si ', link('Mohg', 'character', 'mohg'), ' sabía que el capullo protegería a ', link('Miquella', 'character', 'miquella'), ' del rito']
    ],
    relatedCharacters: ['mohg', 'miquella', 'malenia', 'varre'],
    relatedFactions: ['bloody-fingers', 'cleanrot-knights'],
    relatedRegions: ['mohgwyn', 'haligtree', 'elphael'],
    relatedConcepts: ['formless-mother', 'unalloyed-gold', 'bloodflame', 'empyrean'],
    relatedTimelineEvents: ['batalla-aeonia', 'mohg-formless-mother', 'unalloyed-gold-haligtree'],
  },

  'erdtree-quemado': {
    summary:
      'Cuando el Árbol Áureo rechazó al Tarnished tras la derrota de Morgott, Melina se ofreció como llama portadora ritual. Subió a las Mountaintops, encendió la Llama Quemadora confinada con el último Gigante del Fuego, y se inmoló para prender el árbol entero. La era dorada terminó técnicamente cuando Melina ardió.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'Tras la derrota de ',
        link('Morgott', 'character', 'morgott'),
        ', el ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' literalmente cerró sus raíces ante el ',
        link('Tarnished', 'concept', 'tarnished'),
        '. La instrucción oficial de los ',
        link('Dos Dedos', 'faction', 'dos-dedos'),
        ' falló: ningún ritual reunido era suficiente para abrir el árbol. La cosmología pre-fractura quedó técnicamente bloqueada.'
      ),
      h(2, 'Historia detallada'),
      p(
        link('Melina', 'character', 'melina'),
        ' apareció exactamente en este momento con la solución específica: subir a las ',
        link('Mountaintops', 'region', 'mountaintops'),
        ', derrotar al ',
        link('último Gigante del Fuego', 'character', 'fire-giant'),
        ' encadenado en la Forja, y usar la Llama Quemadora confinada eras atrás como herramienta para incendiar el ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        '. Su disponibilidad parecía anticipada — ',
        link('Melina', 'character', 'melina'),
        ' sabía que este momento llegaría.'
      ),
      p(
        'La Llama Quemadora, hostil al ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' por designio cosmológico, era la única llama capaz de consumirlo. Pero requería un portador ritual: un cuerpo divino dispuesto a inmolarse. ',
        link('Melina', 'character', 'melina'),
        ' ofreció el suyo. Su discurso final mencionó explícitamente "el destino de los dioses" como propio. La frase confirma que su sacrificio fue diseñado cosmológicamente — no decisión espontánea.'
      ),
      p(
        'La inmolación fue total. ',
        link('Melina', 'character', 'melina'),
        ' ardió como antorcha portadora; el ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' entero se incendió en respuesta. La era dorada ardió simultáneamente: cada raíz del árbol, cada altar dedicado, cada estructura ritual del régimen. La quema duró días según el ritmo cosmológico de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        '. Cuando terminó, el camino al trono Elden estaba abierto — pero todo el régimen había sido reducido a cenizas doradas.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'Si el ',
        link('Tarnished', 'concept', 'tarnished'),
        ' había abrazado la ',
        link('Llama Frenética', 'concept', 'frenzied-flame'),
        ' antes de este punto, ',
        link('Melina', 'character', 'melina'),
        ' lo abandonó — y el árbol se quemó solo, devorado por el fuego nihilista. En cualquier ruta que no sea la frenética, ',
        link('Melina', 'character', 'melina'),
        ' es la portadora ritual cuya inmolación posibilita el final.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La quema del ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' es el primer acto de ruptura cosmológica deliberada que el ',
        link('Tarnished', 'concept', 'tarnished'),
        ' realiza. ',
        link('Marika', 'character', 'marika'),
        ' rompió el Anillo eras atrás; el ',
        link('Tarnished', 'concept', 'tarnished'),
        ' completa la ruptura prendiendo el árbol que la sostenía. ',
        link('Melina', 'character', 'melina'),
        ' como antorcha es la imagen más nítida del juego de la generosidad cosmológica: una doncella sin tumba ardiendo para que un agente externo pueda elegir el destino del cosmos.'
      )
    ],
    confirmed: [
      ['El ', link('Árbol Áureo', 'concept', 'erdtree'), ' cerró sus raíces ante el ', link('Tarnished', 'concept', 'tarnished'), ' tras ', link('Morgott', 'character', 'morgott')],
      [link('Melina', 'character', 'melina'), ' apareció con la solución específica de quemarlo'],
      'La Llama Quemadora confinada en las Mountaintops era la única llama capaz de quemarlo',
      [link('Melina', 'character', 'melina'), ' se inmoló como portadora ritual'],
      ['En la ruta de la ', link('Llama Frenética', 'concept', 'frenzied-flame'), ', ', link('Melina', 'character', 'melina'), ' abandona y el árbol arde solo']
    ],
    inferred: [
      [link('Melina', 'character', 'melina'), ' anticipaba este momento — su disponibilidad fue diseñada'],
      'Su discurso final identifica su sacrificio con "el destino de los dioses"',
      'La quema técnicamente termina la era dorada antes de la coronación final'
    ],
    theories: [
      [link('Marika', 'character', 'marika'), ' diseñó cosmológicamente el momento de la quema'],
      [link('Melina', 'character', 'melina'), ' es hija no nacida de ', link('Marika', 'character', 'marika'), ' programada específicamente para este acto'],
      'La Llama Quemadora confinada eras atrás fue siembra estratégica'
    ],
    ambiguous: [
      ['Si ', link('Melina', 'character', 'melina'), ' conserva conciencia tras la inmolación'],
      'Si su "venganza" prometida en el final frenético es real o duelo simbólico',
      ['Si el ', link('Árbol Áureo', 'concept', 'erdtree'), ' podría haber sido evitado de quemarse mediante alguna ruta no documentada']
    ],
    relatedCharacters: ['melina', 'marika', 'morgott', 'fire-giant', 'godfrey'],
    relatedFactions: ['fire-giants', 'orden-dorado'],
    relatedRegions: ['leyndell', 'mountaintops'],
    relatedConcepts: ['erdtree', 'fell-god', 'frenzied-flame', 'tarnished'],
    relatedTimelineEvents: ['flame-of-ruin-confined', 'erdtree-rejection', 'maliketh-libera-muerte'],
    relatedEndings: ['fracture', 'order', 'duskborn', 'frenzied-flame', 'age-of-stars'],
  },

  'maliketh-libera-muerte': {
    summary:
      'En Crumbling Farum Azula, Maliketh acepta su derrota como Bestia de la Muerte Negra. Su muerte libera la Runa de la Muerte que había contenido durante eras. La era dorada termina técnicamente cuando Maliketh cae — lo que sigue es decisión del Tarnished sobre qué cosmos viene después.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'En ',
        link('Crumbling Farum Azula', 'region', 'farum-azula'),
        ', el ',
        link('Tarnished', 'concept', 'tarnished'),
        ' enfrenta a ',
        link('Maliketh', 'character', 'maliketh'),
        ' en su forma final como Bestia de la Muerte Negra. Es la última fase del verdugo cosmológico de ',
        link('Marika', 'character', 'marika'),
        ': un ',
        link('Hombre-Bestia', 'faction', 'hombres-bestia'),
        ' primigenio cuya carne carga la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ' desde el sello marikiano original.'
      ),
      h(2, 'Historia detallada'),
      p(
        'La transformación de ',
        link('Maliketh', 'character', 'maliketh'),
        ' en su forma final es desesperación, no orgullo. Sabe que perder libera la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ' que ha contenido durante eras. Sabe que su servicio post-mortem habrá sido inútil si el cosmos colapsa después. Sabe que su sacrificio cosmológico solo termina si encuentra a alguien capaz de derrotarlo.'
      ),
      p(
        'Cuando cae, la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ' vuelve a fluir parcialmente al cosmos. Los seres de las ',
        link('Tierras Intermedias', 'region', 'tierras-intermedias'),
        ' pueden volver a morir verdaderamente — al menos en algunos casos. La fuga es parcial, no total: el sello completo solo se cierra si ',
        link('Fia', 'character', 'fia'),
        ' entrega la Runa Mendaz al ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        ' restaurado durante la elección final, instaurando la ',
        link('Era del Crepúsculo', 'ending', 'duskborn'),
        '.'
      ),
      p(
        'Su muerte abre además el camino físico al trono Elden: la cámara de coronación se vuelve accesible solo después. ',
        link('Godfrey', 'character', 'godfrey'),
        ' regresa como espectro guardián. ',
        link('Marika', 'character', 'marika'),
        ' encadenada y ',
        link('Radagon', 'character', 'radagon'),
        ' como guardián residual aguardan en el centro del ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' quemado.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'El evento cierra parcialmente la herida cosmológica del sello original de ',
        link('Marika', 'character', 'marika'),
        '. La era dorada terminó técnicamente cuando ',
        link('Maliketh', 'character', 'maliketh'),
        ' cayó: lo que sigue es decisión del ',
        link('Tarnished', 'concept', 'tarnished'),
        ' sobre qué cosmos viene después. Sin esta liberación, ',
        link('Aquellos que Viven en la Muerte', 'concept', 'those-who-live-in-death'),
        ' no podrían descansar en ningún final. Sin esta liberación, ',
        link('Godwyn', 'character', 'godwyn'),
        ' continuaría descomponiéndose eternamente bajo Deeproot Depths.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La derrota voluntaria de ',
        link('Maliketh', 'character', 'maliketh'),
        ' es el acto más misericordioso del ',
        link('Tarnished', 'concept', 'tarnished'),
        ', aunque parezca violencia. El verdugo cosmológico que cargó la Muerte durante eras encuentra finalmente a alguien capaz de cerrar el ciclo. Su servicio post-mortem se convierte en su último acto consciente: aceptar perder para que el cosmos pueda finalmente respirar.'
      )
    ],
    confirmed: [
      [link('Maliketh', 'character', 'maliketh'), ' es derrotado en Crumbling ', link('Farum Azula', 'region', 'farum-azula')],
      ['Su muerte libera parcialmente la ', link('Runa de la Muerte', 'concept', 'rune-of-death')],
      'Los seres pueden volver a morir verdaderamente en algunos casos',
      'Su muerte abre el acceso a la cámara de coronación',
      'La fuga completa solo se cierra con la Runa Mendaz de Fia'
    ],
    inferred: [
      'La transformación final es desesperación, no orgullo',
      [link('Maliketh', 'character', 'maliketh'), ' aceptó perder para cerrar el ciclo cosmológico'],
      'La era dorada termina técnicamente con su muerte'
    ],
    theories: [
      [link('Maliketh', 'character', 'maliketh'), ' estuvo esperando durante eras a alguien capaz de derrotarlo'],
      'Su servicio post-mortem es voluntad propia, no mandato puro',
      ['La atemporalidad de ', link('Farum Azula', 'region', 'farum-azula'), ' retrasaba la fuga de muerte de su cuerpo']
    ],
    ambiguous: [
      ['Si ', link('Maliketh', 'character', 'maliketh'), ' conserva alguna forma de conciencia tras la derrota'],
      ['Cuánto exactamente se libera la ', link('Muerte Predestinada', 'concept', 'destined-death'), ' sin la Runa Mendaz'],
      'Si la liberación parcial afecta a los demidioses ya muertos retrospectivamente'
    ],
    relatedCharacters: ['maliketh', 'marika', 'godwyn', 'fia', 'd', 'gloam-eyed-queen'],
    relatedFactions: ['hombres-bestia', 'cuchillos-negros', 'those-who-live-in-death'],
    relatedRegions: ['farum-azula'],
    relatedConcepts: ['destined-death', 'rune-of-death', 'deathroot', 'shadow-bound-beast'],
    relatedTimelineEvents: ['muerte-predestinada', 'godwyn-prince-of-death'],
    relatedEndings: ['duskborn'],
  },

  'godfrey-regresa': {
    summary:
      'Tras la quema del Árbol Áureo y la liberación de la Muerte por Maliketh, Godfrey regresa como espectro dorado para defender el trono que ya no le pertenece. Su lealtad estructural al rol del Señor Elden — no a Marika personalmente — es lo que lo trae de regreso. Pelea en dos formas: rey blindado y, finalmente, Hoarah Loux desnudo.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'Tras quemar el ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' y derrotar a ',
        link('Maliketh', 'character', 'maliketh'),
        ', el ',
        link('Tarnished', 'concept', 'tarnished'),
        ' entra a la sala del trono Elden en ',
        link('Leyndell', 'region', 'leyndell'),
        '. ',
        link('Godfrey', 'character', 'godfrey'),
        ' aparece como espectro dorado, defendiendo el trono que ya no le pertenece. Su retorno es excepcional cosmológicamente: ningún ',
        link('demidiós', 'concept', 'demidios'),
        ' actual está dispuesto a defender el régimen — solo el ancestro original, exiliado hace eones, aceptaría volver.'
      ),
      h(2, 'Historia detallada'),
      p(
        'La activación de su retorno coincide exactamente con la quema del ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' y la liberación de la Muerte. La causa-efecto es ambigua, pero la coincidencia es deliberada: cuando el régimen está técnicamente terminando, ',
        link('Godfrey', 'character', 'godfrey'),
        ' regresa. Su lealtad no es a ',
        link('Marika', 'character', 'marika'),
        ' personalmente — ',
        link('Marika', 'character', 'marika'),
        ' ya está rota dentro del árbol quemado. Su lealtad es estructural: a la idea del ',
        link('Señor Elden', 'concept', 'elden-lord'),
        ', al rol cosmológico, al deber del primer rey.'
      ),
      p(
        'Pelea en dos formas. Primera: el rey blindado, con armadura completa de ',
        link('Señor Elden', 'concept', 'elden-lord'),
        ', hacha gigante, y técnica marcial refinada por eras. Su ',
        link('Stormhawk Deenh', 'character', 'stormhawk-deenh'),
        ' todavía obedece. Su Stomp todavía sacude el suelo. Es el rey civilizado peleando como rey.'
      ),
      p(
        'Cuando esa máscara cae, queda Hoarah Loux: el guerrero primigenio desnudo, peleando con sus manos como un cazador del lejano norte ',
        link('antes del Orden Dorado', 'timeline', 'antes-orden-dorado'),
        '. Descarta a ',
        link('Serosh', 'character', 'serosh'),
        ' — el espíritu leonino encadenado en su frente — para liberar su instinto sin restricciones. Es la transformación ritual perfecta: bajo cada rey civilizado vive un cazador desnudo, y al final el cazador regresa.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'La derrota de ',
        link('Godfrey', 'character', 'godfrey'),
        ' abre el camino directo a ',
        link('Marika', 'character', 'marika'),
        ' encadenada. Su muerte completa el ciclo: el primer rey regresó a defender el último altar y cae como guerrero ancestral. Sus reliquias — el martillo de ',
        link('Serosh', 'character', 'serosh'),
        ', las técnicas de ',
        link('Stormhawk', 'character', 'stormhawk-deenh'),
        ', las técnicas de Hoarah Loux — quedan disponibles como aprendizajes finales del juego.'
      ),
      h(2, 'Significado simbólico'),
      p(
        link('Godfrey', 'character', 'godfrey'),
        ' encarna la fidelidad estructural llevada al límite. Aceptó el exilio cuando ',
        link('Marika', 'character', 'marika'),
        ' lo despidió. Aceptó eras de gobierno como Hoarah Loux en las tierras exteriores. Y, cuando el régimen lo llamó de regreso, regresó. Su transformación final — quitarse la armadura y combatir como cazador primal — es la imagen central del juego: la civilización es ropa, lo primal es la carne. El ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' vistió al guerrero pero nunca lo cambió.'
      )
    ],
    confirmed: [
      [link('Godfrey', 'character', 'godfrey'), ' regresa como espectro dorado tras la quema del ', link('Árbol Áureo', 'concept', 'erdtree')],
      'Pelea en dos formas: rey blindado y Hoarah Loux primal',
      ['Descarta a ', link('Serosh', 'character', 'serosh'), ' para liberar su instinto cazador'],
      ['Su muerte abre el camino directo a ', link('Marika', 'character', 'marika')]
    ],
    inferred: [
      ['Su lealtad es estructural al rol, no personal a ', link('Marika', 'character', 'marika')],
      'Su retorno fue activado por la quema del árbol y la liberación de la Muerte',
      'Conserva todo su poder primal incluso siglos después del exilio'
    ],
    theories: [
      [link('Marika', 'character', 'marika'), ' misma reactivó su ', link('gracia', 'concept', 'grace'), ' para que pudiera regresar'],
      [link('Serosh', 'character', 'serosh'), ' le aconsejó hasta el último momento de la transformación'],
      'Su retorno es voluntario, no convocatoria forzosa'
    ],
    ambiguous: [
      'Si conserva conciencia plena durante el espectro o solo función ritual',
      'Si su pelea final es contienda real o ritual de transmisión cosmológica',
      ['Si Hoarah Loux post-', link('Serosh', 'character', 'serosh'), ' es completamente él mismo o una versión incompleta']
    ],
    relatedCharacters: ['godfrey', 'marika', 'serosh', 'maliketh', 'godwyn'],
    relatedFactions: ['orden-dorado'],
    relatedRegions: ['leyndell'],
    relatedConcepts: ['tarnished', 'grace', 'storm-lord'],
    relatedTimelineEvents: ['exilio-godfrey', 'erdtree-quemado', 'maliketh-libera-muerte'],
  },

  'bestia-elden-revelada': {
    summary:
      'Tras Godfrey, el Tarnished golpea a Marika encadenada y libera a Radagon como guardián residual. Cuando Radagon cae, el Anillo Elden manifiesta su forma autónoma: la Bestia Elden, cosmología hecha hostilidad. Su derrota deja al Tarnished libre para elegir el destino del cosmos.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'En la cámara central del ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' quemado, el ',
        link('Tarnished', 'concept', 'tarnished'),
        ' encuentra a ',
        link('Marika', 'character', 'marika'),
        ' encadenada en el tronco del árbol y a ',
        link('Radagon', 'character', 'radagon'),
        ' como guardián residual. La encadenada es ofrenda y prisión simultáneas; el guardián es su otra mitad cosmológica conservando el Anillo intacto.'
      ),
      h(2, 'Historia detallada'),
      p(
        'Al golpear a ',
        link('Marika', 'character', 'marika'),
        ', libera a ',
        link('Radagon', 'character', 'radagon'),
        '. La pelea contra ',
        link('Radagon', 'character', 'radagon'),
        ' es la última batalla "humana" del juego: dos voluntades irreconciliables operando en un cuerpo común, contra un ',
        link('Tarnished', 'concept', 'tarnished'),
        ' externo a ambas. ',
        link('Radagon', 'character', 'radagon'),
        ' golpea con su martillo de reparación — el mismo que usó eras para reparar el ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        ' — pero ahora intentando matar al aspirante en lugar de cerrar grietas.'
      ),
      p(
        'Cuando ',
        link('Radagon', 'character', 'radagon'),
        ' cae, el ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        ' manifiesta su forma autónoma: la ',
        link('Bestia Elden', 'concept', 'bestia-elden'),
        '. No es un dios — es la cosmología misma, divorciada de la voluntad humana de ',
        link('Marika', 'character', 'marika'),
        '. Es lo que el ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        ' ',
        em('es'),
        ' cuando ningún cuerpo humano lo contiene. Sus alas cubren constelaciones; su cuerpo emite la luz primordial que originalmente alimentaba al ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        '. Pelea para protegerse a sí misma, no para defender ninguna causa específica.'
      ),
      p(
        'La batalla con la ',
        link('Bestia Elden', 'concept', 'bestia-elden'),
        ' es la primera vez que el cosmos sin máscara humana se enfrenta al ',
        link('Tarnished', 'concept', 'tarnished'),
        '. Su derrota es el momento más cosmológicamente radical del juego. Cuando cae, las Grandes Runas pueden ser ensambladas según cualquiera de los seis finales posibles. El cosmos queda técnicamente disponible para reconfiguración.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'Sin la derrota de la ',
        link('Bestia Elden', 'concept', 'bestia-elden'),
        ', ningún final del juego sería posible. Es el último filtro cosmológico antes de la elección. ',
        link('Marika', 'character', 'marika'),
        ' muere durante el proceso (su cuerpo encadenado se rompe al primer golpe); ',
        link('Radagon', 'character', 'radagon'),
        ' muere como guardián humano final; la ',
        link('Bestia Elden', 'concept', 'bestia-elden'),
        ' muere como manifestación cosmológica del Anillo. Tres muertes superpuestas que dejan al cosmos vacante para una nueva era.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La revelación de la ',
        link('Bestia Elden', 'concept', 'bestia-elden'),
        ' es la respuesta más radical del juego a la pregunta de qué es el ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        '. No es objeto, no es ley, no es contrato — es entidad activa con voluntad propia que solo se manifiesta cuando ninguna voluntad humana la contiene. La era dorada existía precisamente porque ',
        link('Marika', 'character', 'marika'),
        ' domesticaba esta entidad. Sin ',
        link('Marika', 'character', 'marika'),
        ', la Bestia ataca cualquier visitante del trono. El régimen del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' fue, durante eras, jaula cosmológica para una bestia que ningún humano había visto en su forma plena.'
      )
    ],
    confirmed: [
      ['El ', link('Tarnished', 'concept', 'tarnished'), ' golpea a ', link('Marika', 'character', 'marika'), ' encadenada para liberar a ', link('Radagon', 'character', 'radagon')],
      [link('Radagon', 'character', 'radagon'), ' es la última batalla humana del juego'],
      ['La ', link('Bestia Elden', 'concept', 'bestia-elden'), ' manifiesta el ', link('Anillo Elden', 'concept', 'elden-ring'), ' en su forma autónoma'],
      'Su derrota habilita los seis finales posibles del juego'
    ],
    inferred: [
      ['La ', link('Bestia Elden', 'concept', 'bestia-elden'), ' no es un dios — es la cosmología misma sin máscara humana'],
      [link('Marika', 'character', 'marika'), ' domesticaba a la Bestia durante eras como vasija'],
      'Sin contención humana, la Bestia ataca al primer visitante del trono'
    ],
    theories: [
      ['La ', link('Bestia Elden', 'concept', 'bestia-elden'), ' es contraparte funcional de la ', link('Voluntad Mayor', 'concept', 'voluntad-mayor')],
      'Cada vasija humana anterior (Reina del Ojo Velado, Placidusax) domesticaba alguna versión similar',
      ['Si el ', link('Tarnished', 'concept', 'tarnished'), ' pierde contra ella, el cosmos entra en estado de bestia desatada']
    ],
    ambiguous: [
      'Cuál es la naturaleza exacta de la Bestia — orgánica, cosmológica, ambas',
      'Si la Bestia recuerda haber sido contenida por humanos previos',
      ['Si la era post-', link('Tarnished', 'concept', 'tarnished'), ' domestica de nuevo a la Bestia o la deja parcialmente libre']
    ],
    relatedCharacters: ['marika', 'radagon', 'godfrey', 'maliketh'],
    relatedConcepts: ['elden-ring', 'bestia-elden', 'voluntad-mayor', 'great-rune'],
    relatedRegions: ['leyndell'],
    relatedTimelineEvents: ['la-fractura', 'radagon-repair-attempt', 'godfrey-regresa'],
    relatedEndings: ['fracture', 'order', 'duskborn', 'despair', 'frenzied-flame', 'age-of-stars'],
  },

}
