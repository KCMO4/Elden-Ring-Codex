import type { DeepEntity, RichBlock, RichInline } from '../types'

const link = (label: string, targetType: 'character' | 'region' | 'faction' | 'concept' | 'ending' | 'timeline', slug: string): RichInline =>
  ({ type: 'link', label, targetType, slug })
const p = (...children: RichInline[]): RichBlock =>
  ({ type: 'paragraph', children })
const h = (level: 2 | 3, text: string, id?: string): RichBlock =>
  ({ type: 'heading', level, text, id })
const em = (text: string): RichInline => ({ type: 'em', text })
const strong = (text: string): RichInline => ({ type: 'strong', text })
const ol = (...items: string[]): RichBlock =>
  ({ type: 'list', ordered: true, items: items.map((s) => [s]) })

/**
 * Ultra-detailed lore for major characters. Overrides the baseline charactersLore
 * supplement when an entry exists here. Built around a 12-section structure:
 * Resumen / Rol / Historia / Motivaciones / Relaciones / Eventos / Consecuencias /
 * Simbolismo / Confirmados / Inferidos / Teorías / Ambigüedades.
 */
export const charactersDeepLore: Record<string, Partial<DeepEntity>> = {

  /* ════════════════════════════════ MARIKA ════════════════════════════════ */
  marika: {
    summary:
      'Marika la Eterna, vasija humana del Anillo Elden, fue la diosa que fundó el Orden Dorado tras sellar la Muerte Predestinada. Su historia es la de una herramienta divina que rompió el sistema que estaba diseñada a sostener — y, al hacerlo, abrió la era en la que el Tarnished camina.',
    deepLore: [
      h(2, 'Resumen esencial', 'resumen'),
      p(
        'Marika es uno de los seres más complejos de las Tierras Intermedias. Era una numen — descendiente de un linaje humano singularmente puro, capaz de servir como vasija de un dios externo — antes de ser elegida por la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' como el cuerpo en el que residiría el ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        '. Su elección no fue inocente: implicaba la traición de los suyos. Fundó el ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' sellando la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ' dentro de su hermano-sombra ',
        link('Maliketh', 'character', 'maliketh'),
        ', y ese sello se convirtió en la falla estructural que, generaciones después, ella misma haría estallar al romper el Anillo con un martillo.'
      ),
      h(2, 'Rol en el mundo', 'rol'),
      p(
        'Marika ocupa simultáneamente cuatro posiciones cosmológicas. Es ',
        em('vasija'),
        ' (cuerpo del Anillo Elden), ',
        em('mediadora'),
        ' (la única instancia humana entre la Voluntad Mayor y los mortales), ',
        em('madre'),
        ' (engendra demidioses con dos consortes), y ',
        em('legisladora'),
        ' (su voluntad fija las normas de la era dorada). Esta acumulación es excepcional: ningún otro ser de las Tierras Intermedias ostenta tantas capas simultáneas. La consecuencia es que cuando ella vacila, vacila el cosmos.'
      ),
      h(2, 'Historia detallada', 'historia'),
      p(
        'Antes del Orden Dorado, Marika vivió como mujer numen entre las primeras tribus de las Tierras Intermedias. La memoria de aquella era — fragmentaria pero presente en sus acciones más oscuras — la perseguirá hasta el final. Cuando la ',
        link('Reina de Ojos Crepusculares', 'character', 'gloam-eyed-queen'),
        ' fue derrotada y su régimen colapsó, la Voluntad Mayor buscó nueva vasija. Eligió a Marika.'
      ),
      p(
        'Su primer acto como diosa fue uno de violencia cosmológica: hizo que ',
        link('Maliketh', 'character', 'maliketh'),
        ' arrancase la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ' del Anillo. Esta runa codificaba la verdadera muerte. Al sustraerla, los seres de las Tierras Intermedias dejaron de poder morir como antes morían: sus cuerpos podían ser destruidos pero sus almas regresaban al Árbol Áureo para ser recicladas. La inmortalidad de la era dorada nació, así, de un acto de mutilación cósmica.'
      ),
      p(
        'Tomó como Primer Señor Elden a ',
        link('Godfrey', 'character', 'godfrey'),
        ', un guerrero exterior que conquistó las tierras restantes de las Tierras Intermedias bajo su nombre. Tuvo con él al menos un hijo conocido: ',
        link('Godwyn', 'character', 'godwyn'),
        ', el de Ojos Dorados, primogénito amado y promesa del régimen. Cuando ya no quedaron enemigos por los que pelear, Marika despojó a Godfrey de la gracia y lo exilió junto con los suyos: nacieron así los ',
        link('Tarnished', 'concept', 'tarnished'),
        '.'
      ),
      p(
        'Tras Godfrey, su consorte fue ',
        link('Radagon', 'character', 'radagon'),
        ' — y aquí ocurre la revelación cosmológica más oscura de las Tierras Intermedias: Radagon ',
        em('es'),
        ' Marika. Comparten cuerpo. Cuándo ocurrió la fusión y por qué, son preguntas abiertas; lo que es indudable es que el segundo matrimonio de Marika fue, en términos físicos, consigo misma. De esa unión nacieron ',
        link('Morgott', 'character', 'morgott'),
        ' y ',
        link('Mohg', 'character', 'mohg'),
        ' como Omens (la sangre antigua de Radagon manifestándose), y posteriormente los Empyreans gemelos ',
        link('Malenia', 'character', 'malenia'),
        ' y ',
        link('Miquella', 'character', 'miquella'),
        '.'
      ),
      p(
        'La detonación llegó con la ',
        link('Noche de los Cuchillos Negros', 'timeline', 'ranni-noche-cuchillos'),
        '. Su hijo Godwyn fue asesinado parcialmente — su alma destruida, su cuerpo no. La conjura, dirigida por su nieta ',
        link('Ranni', 'character', 'ranni'),
        ', usó una mecha de la Runa de la Muerte robada de Maliketh. Marika, ya sea por dolor real o por cálculo cosmológico cuya lógica solo ella conoce, alzó un martillo y rompió el Anillo Elden contra el suelo. La Voluntad Mayor la castigó encadenándola al tronco del propio Árbol Áureo.'
      ),
      h(2, 'Motivaciones', 'motivaciones'),
      p(
        'Las motivaciones de Marika son objeto del debate cosmológico más sostenido de las Tierras Intermedias. Existen varias lecturas, todas con base textual:'
      ),
      p(
        strong('Dolor maternal'),
        ': la rotura del Anillo es una rabieta divina ante la herida abierta de Godwyn — el único de sus hijos que el régimen no había marginado, encerrado o maldecido.'
      ),
      p(
        strong('Crítica filosófica al Orden'),
        ': Marika habría comprendido durante la era que el Orden Dorado, con la Muerte sellada, era una jaula. La rotura sería una protesta deliberada contra el sistema que ella misma fundó.'
      ),
      p(
        strong('Conspiración contra la Voluntad Mayor'),
        ': el martillazo no rompió un acto de fidelidad al cosmos — rompió la liturgia de un dios externo que la estaba usando. Su exilio en el árbol sería, así, casi una forma de victoria.'
      ),
      p(
        strong('Plan a largo plazo del Tarnished'),
        ': Marika habría sembrado las condiciones (gracia restituida, exilio de los Tarnished, fractura programada) para que un ser exterior al régimen — un Tarnished, desligado de las jerarquías divinas — pudiera al fin elegir el destino del cosmos. Esta lectura le da centralidad al jugador como instrumento marikiano.'
      ),
      h(2, 'Relaciones importantes', 'relaciones'),
      p(
        link('Radagon', 'character', 'radagon'),
        ' es su otro yo. ',
        link('Godfrey', 'character', 'godfrey'),
        ' fue su consorte instrumento. ',
        link('Maliketh', 'character', 'maliketh'),
        ' es su hermano-sombra ligado por la Bestia ligada en sombra. Sus hijos: ',
        link('Godwyn', 'character', 'godwyn'),
        ', ',
        link('Morgott', 'character', 'morgott'),
        ', ',
        link('Mohg', 'character', 'mohg'),
        ', ',
        link('Malenia', 'character', 'malenia'),
        ', ',
        link('Miquella', 'character', 'miquella'),
        '. ',
        link('Melina', 'character', 'melina'),
        ' se presenta a sí misma como hija no nacida o aspecto incompleto.'
      ),
      h(2, 'Eventos clave', 'eventos'),
      ol(
        'Selección por la Voluntad Mayor.',
        'Sello de la Muerte Predestinada en Maliketh.',
        'Coronación de Godfrey como Primer Señor Elden.',
        'Exilio de Godfrey y nacimiento de los Tarnished.',
        'Fusión con/restauración de Radagon como segundo consorte.',
        'Nacimientos de los demidioses con sangre Omen y de los Empyreans gemelos.',
        'Asesinato de Godwyn en la Noche de los Cuchillos Negros.',
        'Rotura del Anillo Elden.',
        'Encadenamiento en el Árbol Áureo.',
        'Liberación final de Radagon y de la Bestia Elden cuando el Tarnished la golpea.'
      ),
      h(2, 'Consecuencias', 'consecuencias'),
      p(
        'El sello inicial de la Muerte hace posibles los problemas que después definirán a las Tierras Intermedias: la imposibilidad de matar verdaderamente a Godwyn, el surgimiento de ',
        link('Aquellos que Viven en la Muerte', 'concept', 'those-who-live-in-death'),
        ', la inestabilidad de los sucesivos regímenes, la corrupción rampante. La rotura final del Anillo descentra todo el cosmos: Voluntad Mayor parcialmente retirada, Grandes Runas dispersas, demidioses disputándose pedazos del régimen, Tarnished readmitidos como improbables candidatos al trono.'
      ),
      h(2, 'Simbolismo e interpretación temática', 'simbolismo'),
      p(
        'Marika encarna la pregunta del juego: ¿es posible rebelarse contra el cosmos cuando se ',
        em('es'),
        ' el cosmos? Su acción es la de una madre, una diosa, una vasija y una mujer numen al mismo tiempo, y esas cuatro voces no se reconcilian. Su encadenamiento al árbol es uno de los símbolos más potentes del juego: la diosa convertida en exhibición, la legisladora reducida a pieza arquitectónica de su propio templo. Se puede leer como castigo, como auto-encarcelamiento ritual, o como ofrenda voluntaria a un futuro que solo el Tarnished puede ejecutar.'
      ),
      h(2, 'Conexiones internas', 'conexiones'),
      p(
        'Su historia es ininteligible sin la de ',
        link('Radagon', 'character', 'radagon'),
        ', ',
        link('Maliketh', 'character', 'maliketh'),
        ' y ',
        link('Godwyn', 'character', 'godwyn'),
        '. Los efectos de su rotura definen la ',
        link('Era de la Fractura', 'timeline', 'la-fractura'),
        ' y todos los ',
        link('finales', 'ending', 'fracture'),
        ' posibles del juego. Su jaula está dentro del ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' bajo ',
        link('Leyndell', 'region', 'leyndell'),
        '.'
      )
    ],
    confirmed: [
      'Marika fue numen elegida por la Voluntad Mayor como vasija humana del Anillo Elden',
      'Selló la Muerte Predestinada dentro de Maliketh para iniciar la era dorada',
      'Tomó a Godfrey y luego a Radagon como consortes',
      'Engendró a Godwyn, Morgott, Mohg, Malenia y Miquella',
      'Comparte cuerpo con Radagon (la frase de Goldmask "Radagon es Marika" es revelación textual)',
      'Rompió el Anillo Elden por su propia mano tras el asesinato parcial de Godwyn',
      'Fue encadenada por la Voluntad Mayor dentro del propio Árbol Áureo como castigo'
    ],
    inferred: [
      'Su elevación divina implicó la traición de su pueblo numen original',
      'El sello de la Muerte fue el origen estructural de todos los problemas posteriores',
      'Su martillazo fue acto consciente, no impulso descontrolado: estuvo planeado durante mucho tiempo',
      'La exclusión de los Omens (sus hijos con Radagon) fue una decisión política conjunta del Orden, no solo accidente cosmológico',
      'Su pena por Godwyn era específica: él era el único hijo plenamente integrado al régimen sin maldición'
    ],
    theories: [
      'Marika programó al Tarnished como instrumento exterior para terminar lo que ella inició',
      'Su rebelión apuntaba contra la Voluntad Mayor más que contra el Orden Dorado en sí',
      'La fusión con Radagon fue impuesta por la Voluntad Mayor para neutralizar su voluntad disidente',
      'Las cadenas en el Árbol Áureo son auto-impuestas: castigo ritual que ella misma diseñó',
      'Su linaje numen estaba ligado al pueblo perseguido por los Pieles de Dios — la Reina de Ojos Crepusculares era contraparte cosmológica suya'
    ],
    ambiguous: [
      'Si Marika sigue consciente dentro de su prisión arbórea',
      'Cuándo exactamente ocurrió la fusión con Radagon — antes, durante o después del segundo matrimonio',
      'Si su pena por Godwyn fue maternal pura o también un ataque ritual contra la Voluntad Mayor',
      'Si ella misma orquestó el robo de la Runa de la Muerte por parte de Ranni',
      'Si las palabras finales que el Tarnished escucha al golpearla son ruegos, instrucciones o ecos'
    ],
    beneficiaries:
      'La Voluntad Mayor, durante toda la era dorada. El Orden Dorado, sostenido por su pacto. Sus hijos integrados (Godwyn, Godfrey en su tiempo). El Tarnished, indirectamente, que recibe gracia restaurada como consecuencia de su rotura.',
    victims:
      'Su pueblo numen original, traicionado por su elevación. Godfrey, exiliado tras servir. Sus hijos Omens, encerrados bajo Leyndell. Godwyn, asesinado en su nombre y dejado a descomponerse. Los Tarnished muertos en el exilio. Y Marika misma, encadenada eternamente.',
    relatedCharacters: ['radagon', 'maliketh', 'godfrey', 'godwyn', 'morgott', 'mohg', 'malenia', 'miquella', 'ranni', 'melina', 'gloam-eyed-queen'],
    relatedFactions: ['orden-dorado', 'dos-dedos', 'cuchillos-negros'],
    relatedRegions: ['leyndell'],
    relatedConcepts: ['elden-ring', 'erdtree', 'golden-order', 'destined-death', 'voluntad-mayor', 'rune-of-death', 'empyrean'],
    relatedTimelineEvents: ['era-antigua', 'muerte-predestinada', 'marika-godfrey', 'exilio-godfrey', 'radagon-es-marika', 'ranni-noche-cuchillos', 'la-fractura'],
    relatedEndings: ['fracture', 'order', 'duskborn', 'frenzied-flame', 'age-of-stars'],
  },

  /* ════════════════════════════════ RADAGON ════════════════════════════════ */
  radagon: {
    summary:
      'Radagon de la Melena Roja es el aspecto masculino de Marika, su otra mitad cosmológica y su contradicción interna. Conquistador de Liurnia, esposo de Rennala, segundo Señor Elden y reformador imposible: dedicó su existencia a reparar lo que su otra mitad rompió.',
    deepLore: [
      h(2, 'Resumen esencial', 'resumen'),
      p(
        'Radagon es la cara que el Orden Dorado prefirió mostrar al mundo: un héroe pelirrojo, marcialmente perfecto, doctrinalmente impecable, padre de demidioses ejemplares. Bajo esa fachada se oculta la verdad más perturbadora del juego: él no es persona separada de ',
        link('Marika', 'character', 'marika'),
        ' sino la otra mitad del mismo cuerpo. Su existencia es la prueba de que la unidad del régimen es ficción: dos voluntades irreconciliables operando en una sola carne.'
      ),
      h(2, 'Rol en el mundo', 'rol'),
      p(
        'Radagon ocupó tres funciones públicas durante la era dorada: ',
        em('campeón militar'),
        ' del Orden Dorado en sus guerras de expansión, ',
        em('rey consorte'),
        ' del trono Carian tras casarse con Rennala, y ',
        em('Segundo Señor Elden'),
        ' tras volver a Leyndell para casarse con Marika. Cada uno de esos roles dejó cicatrices documentadas: la guerra contra Liurnia produjo nobles humillados que aún recuerdan su humillación, el abandono de Rennala destruyó a la Reina, y su retorno a Marika fue, técnicamente, una unión consigo mismo.'
      ),
      h(2, 'Historia detallada', 'historia'),
      p(
        'Lideró la guerra contra ',
        link('Liurnia de los Lagos', 'region', 'liurnia'),
        ' como general del Orden Dorado. Tras la conquista, se casó con la reina vencida ',
        link('Rennala', 'character', 'rennala'),
        ' como pacto político. Ese matrimonio produjo a ',
        link('Ranni', 'character', 'ranni'),
        ', ',
        link('Radahn', 'character', 'radahn'),
        ' y ',
        link('Rykard', 'character', 'rykard'),
        '. Durante esos años Radagon estudió hechicería en ',
        link('Raya Lucaria', 'region', 'raya-lucaria'),
        ', se hizo experto en magia gravitacional, y en algún momento (los textos no precisan cuándo) descubrió que era — siempre había sido — Marika.'
      ),
      p(
        'Cuando Marika exilió a Godfrey, llamó a Radagon de regreso a Leyndell. Él aceptó. Le dejó a Rennala el ',
        em('Amber Egg'),
        ' como prenda de despedida y partió. En Leyndell se casó con Marika — es decir, con su otro yo — y engendró a ',
        link('Morgott', 'character', 'morgott'),
        ' y ',
        link('Mohg', 'character', 'mohg'),
        ', dos Omens nacidos por la sangre antigua que él arrastraba sin saber del todo.'
      ),
      p(
        'Tras la rotura del Anillo, Radagon dedicó toda su atención a un proyecto imposible: repararlo. Las descripciones del jugador hablan de su martillo golpeando incesantemente las grietas, sabiendo que cada reparación duraba horas, que la falla estructural era irrevocable. Su lucha como jefe final es la última manifestación de esa empresa: golpea con la misma arma con que repara, intentando matar al Tarnished para preservar el Anillo que ya no se puede preservar.'
      ),
      h(2, 'Motivaciones', 'motivaciones'),
      p(
        'Radagon es el conservador absoluto. Su filosofía privada — codificada en lo que sus seguidores llaman ',
        link('Fundamentalismo del Orden Dorado', 'faction', 'orden-dorado'),
        ' — es que el Orden, en su forma actual, es lo único que permite el cosmos coherente. Cualquier desviación es disolución. Su devoción al sistema es tan total que ni siquiera la rebelión de su otra mitad lo desplaza de él.'
      ),
      p(
        'Esto choca trágicamente con la posición de Marika. En el mismo cuerpo conviven el revolucionario y el reformista. Cuando Marika rompe el Anillo, Radagon comienza su tarea de Sísifo. Cuando Radagon golpea el Anillo, Marika probablemente lo siente como tortura. La fusión los condena a una guerra interna sin posibilidad de victoria.'
      ),
      h(2, 'Relaciones importantes', 'relaciones'),
      p(
        'Su otra mitad: ',
        link('Marika', 'character', 'marika'),
        '. Su primera esposa: ',
        link('Rennala', 'character', 'rennala'),
        ', a la que abandonó. Sus hijos con ella: ',
        link('Ranni', 'character', 'ranni'),
        ', ',
        link('Radahn', 'character', 'radahn'),
        ', ',
        link('Rykard', 'character', 'rykard'),
        '. Sus hijos con Marika: ',
        link('Morgott', 'character', 'morgott'),
        ', ',
        link('Mohg', 'character', 'mohg'),
        ', ',
        link('Malenia', 'character', 'malenia'),
        ', ',
        link('Miquella', 'character', 'miquella'),
        '. Su discípulo filosófico: ',
        link('Goldmask', 'character', 'goldmask'),
        ', el monje que descubre la falla lógica del Orden y la corrige.'
      ),
      h(2, 'Eventos clave', 'eventos'),
      ol(
        'Conquista de Liurnia.',
        'Matrimonio con Rennala.',
        'Estudios en Raya Lucaria.',
        'Descubrimiento de la fusión.',
        'Abandono de Rennala.',
        'Segundo matrimonio con Marika.',
        'Engendramiento de Morgott y Mohg.',
        'Reparaciones inútiles del Anillo Elden.',
        'Lucha final como guardián frente al Tarnished.',
        'Liberación de la Bestia Elden tras su derrota.'
      ),
      h(2, 'Consecuencias', 'consecuencias'),
      p(
        'El proyecto reformista de Radagon tiene un efecto secundario decisivo: produce el ',
        link('Fundamentalismo del Orden Dorado', 'concept', 'golden-order'),
        ' como teología codificada. Sus discípulos (Goldmask y Corhyn entre ellos) son los únicos teólogos del juego que tratan al Orden como problema lógico, no como dogma. Su martillo, llamado ',
        em('Martillo de Reparación'),
        ', es lo único que el Tarnished puede usar para destruir cierta clase de objetos divinos.'
      ),
      h(2, 'Simbolismo e interpretación temática', 'simbolismo'),
      p(
        'Radagon es el reformista cuyo reformismo solo es posible porque hay revolución. Las cadenas doradas que recubren su cuerpo son auto-impuestas — son el residuo material de su lucha contra Marika dentro del cuerpo común. Su pelo rojo lo conecta a un linaje pre-Orden y por tanto contradictorio con su devoción al régimen. Cada gesto suyo encarna una incoherencia: el conservador sostiene un sistema que su misma piel desafía.'
      ),
      h(2, 'Conexiones internas', 'conexiones'),
      p(
        'No puede entenderse sin ',
        link('Marika', 'character', 'marika'),
        '. Su matrimonio con ',
        link('Rennala', 'character', 'rennala'),
        ' produjo el linaje Caria. Su muerte detona la ',
        link('Bestia Elden', 'concept', 'bestia-elden'),
        '. Su filosofía sobrevive en ',
        link('Goldmask', 'character', 'goldmask'),
        ' y ',
        link('Corhyn', 'character', 'corhyn'),
        '.'
      )
    ],
    confirmed: [
      'Radagon es el aspecto masculino de Marika; comparten cuerpo único',
      'Lideró la guerra contra Liurnia y se casó con Rennala como gesto de paz',
      'Tuvo con Rennala a Ranni, Radahn y Rykard',
      'Abandonó a Rennala dejándole el Amber Egg como despedida',
      'Engendró con Marika a Morgott y Mohg (Omens) y a los Empyreans gemelos Malenia y Miquella',
      'Es el último guardián humano antes de la Bestia Elden en la batalla final'
    ],
    inferred: [
      'Su pelo rojo señala ascendencia mestiza pre-Orden, posiblemente vinculada a un linaje de sangre antigua',
      'Su devoción al Orden no es ingenuidad sino doctrina codificada (Fundamentalismo)',
      'Sus martillazos al Anillo se hacían incluso sabiendo que no podían repararlo',
      'Las cadenas doradas representan el conflicto interno con Marika, no decoración ritual'
    ],
    theories: [
      'La fusión con Marika fue impuesta por la Voluntad Mayor para neutralizar la voluntad rebelde de la diosa',
      'Radagon ignoraba la fusión hasta su segundo matrimonio: el descubrimiento fue posterior al hecho',
      'Su línea pelirroja lo vincula a un pueblo gigante o pre-orden hostil al Árbol Áureo',
      'Su silencio público sobre la rotura del Anillo era estrategia: salvarlo en silencio sin contradecir abiertamente a Marika'
    ],
    ambiguous: [
      'Cuándo se enteró de que era Marika — antes, durante o después del segundo matrimonio',
      'Si conocía y aceptaba la sangre Omen que pasó a Morgott y Mohg',
      'Si su rendición durante la pelea final es por agotamiento o por una última lealtad a Marika',
      'Si su filosofía Fundamentalista era convicción propia o una fachada para mantener el régimen'
    ],
    beneficiaries:
      'El Orden Dorado, sostenido por su trabajo incansable. La Voluntad Mayor, que conserva un guardián residual incluso tras la rotura. Goldmask y los Fundamentalistas, que heredan su filosofía codificada.',
    victims:
      'Rennala, abandonada en duelo permanente. Sus hijos con ella, criados bajo la sombra del padre ausente. Sus hijos Omens, encarcelados por el régimen que él defendió. El propio Radagon, prisionero de un cuerpo compartido con su propia rival.',
    relatedCharacters: ['marika', 'rennala', 'ranni', 'radahn', 'rykard', 'morgott', 'mohg', 'malenia', 'miquella', 'goldmask', 'corhyn'],
    relatedFactions: ['orden-dorado', 'caria', 'raya-lucaria'],
    relatedRegions: ['liurnia', 'raya-lucaria', 'leyndell'],
    relatedConcepts: ['elden-ring', 'golden-order', 'bestia-elden', 'voluntad-mayor'],
    relatedTimelineEvents: ['radagon-rennala', 'radagon-es-marika', 'la-fractura'],
    relatedEndings: ['order', 'fracture'],
  },

  /* ════════════════════════════════ GODFREY ════════════════════════════════ */
  godfrey: {
    summary:
      'Godfrey, también conocido en su forma primigenia como Hoarah Loux, fue el Primer Señor Elden y consorte original de Marika. Conquistó las Tierras Intermedias bajo el Orden Dorado, fue exiliado cuando ya no quedaron enemigos, y regresó como espectro para defender el trono que ya no era suyo.',
    deepLore: [
      h(2, 'Resumen esencial', 'resumen'),
      p(
        'Godfrey es el arquetipo del rey guerrero. Su biografía, antes de servir a Marika, es una guerra absoluta contra los pueblos primigenios de las Tierras Intermedias. Como Hoarah Loux, jefe nómada de las tierras exteriores, dominaba ya el caos primal — su frente lleva al ',
        em('Espíritu Tormenta'),
        ' Serosh, una bestia leonina que él encadenó como talismán cuando lo sometió. Bajo Marika se convirtió en Señor Elden y la espada del Orden Dorado. Cuando dejó de hacer falta, fue desechado.'
      ),
      h(2, 'Rol en el mundo', 'rol'),
      p(
        'Godfrey cumplió tres funciones en orden histórico: ',
        em('conquistador'),
        ' (sometió pueblos para Marika, incluyendo gigantes y dragones residuales), ',
        em('legitimador'),
        ' (su matrimonio con la diosa estableció el linaje real de las Tierras Intermedias), y ',
        em('ancestro'),
        ' (sus seguidores exiliados se convirtieron en Tarnished, los actuales protagonistas cosmológicos).'
      ),
      h(2, 'Historia detallada', 'historia'),
      p(
        'Su conquista incluyó la guerra contra los ',
        link('Gigantes del Fuego', 'faction', 'orden-dorado'),
        ' en las ',
        link('Mountaintops', 'region', 'mountaintops'),
        ', el sometimiento de los Hombres Tormenta del lejano norte (de cuya tradición proviene su don del rayo Stormhawk), y la unificación de las regiones humanas bajo un único trono dorado. Atacó incluso a los antiguos dragones residuales tras la guerra de ',
        link('Godwyn', 'character', 'godwyn'),
        ' contra Fortissax: ningún linaje pre-Orden quedó sin doblegar.'
      ),
      p(
        'Tuvo con Marika al menos a Godwyn como hijo conocido. Otros vínculos sanguíneos pueden inferirse: ',
        link('Nepheli Loux', 'character', 'nepheli-loux'),
        ' y posiblemente otros Tarnished llevan rastros de su sangre. Cuando Marika ya no necesitó conquistador — porque ya no quedaba qué conquistar — le retiró la gracia. La descripción del jugador habla de una sola lágrima rodando por su rostro al saberse desechado: no por humillación, sino por pérdida de propósito. Tomó a sus hombres y partió a las tierras exteriores, donde retomó su nombre primal Hoarah Loux y reinó como jefe nómada durante incontables años.'
      ),
      p(
        'Su retorno fue inesperado. Tras la fractura, los Tarnished — sus descendientes exiliados — recobraron la gracia. La Voluntad Mayor, o algo más sutil, lo invocó como espectro dorado. Apareció ante el Tarnished en el último tramo del camino al trono, en Leyndell. Su batalla tiene dos formas: primero como rey blindado (la armadura de Señor Elden), luego como Hoarah Loux desnudo, peleando con sus manos como un cazador primal. La transformación es ritual: el rey civilizado quita la máscara y deja al guerrero ancestral terminar la pelea.'
      ),
      h(2, 'Motivaciones', 'motivaciones'),
      p(
        'Godfrey es el caso paradigmático de fidelidad como prisión. Su ',
        em('lágrima'),
        ' al perder la gracia es elocuente: no protestó. Aceptó. Su retorno final no es por venganza ni por restauración personal: es porque ',
        em('un rey que es llamado regresa'),
        '. Esta lealtad estructural, no emocional, es lo que lo distingue de todos los demás demidioses post-fractura. Ninguno de ellos respondería al llamado del Orden con tanta limpieza.'
      ),
      h(2, 'Relaciones importantes', 'relaciones'),
      p(
        'Marika fue su esposa y diosa. Serosh es la bestia que él dominó y portó. Godwyn fue su hijo conocido. ',
        link('Morgott', 'character', 'morgott'),
        ' y ',
        link('Mohg', 'character', 'mohg'),
        ' son hijos de su esposa con su sucesor (técnicamente con Marika+Radagon). Su descendencia exiliada produjo al Tarnished y, posiblemente, a ',
        link('Nepheli Loux', 'character', 'nepheli-loux'),
        '.'
      ),
      h(2, 'Eventos clave', 'eventos'),
      ol(
        'Sometimiento del Espíritu Tormenta Serosh.',
        'Conquista de los Gigantes del Fuego.',
        'Coronación como Primer Señor Elden.',
        'Engendramiento de Godwyn.',
        'Guerra contra los pueblos primigenios.',
        'Pérdida de la gracia y exilio.',
        'Reinado como Hoarah Loux en las tierras exteriores.',
        'Llamado de regreso tras la fractura.',
        'Aparición como espectro guardián.',
        'Lucha final ante el Tarnished.'
      ),
      h(2, 'Consecuencias', 'consecuencias'),
      p(
        'La existencia de Godfrey fundamenta varias condiciones del juego. Los Tarnished existen porque él fue exiliado. La gracia que el Tarnished siente al regresar es continuación de la que Godfrey perdió. Su Stormhawk, su martillo, sus golpes-tierra, todo está diseminado por las Tierras Intermedias como herencia marcial. Y su retorno final es la prueba que ninguno de sus hijos demidiós tuvo que dar: que un Señor Elden, cuando es desplazado, sabe regresar como guardián.'
      ),
      h(2, 'Simbolismo e interpretación temática', 'simbolismo'),
      p(
        'Godfrey representa la fuerza primal puesta al servicio del orden, y luego desechada por su propio orden. Su transformación final — quitarse la armadura y combatir como Hoarah Loux — es la imagen central: bajo cada rey civilizado vive un cazador desnudo. El Orden Dorado no domesticó al guerrero; solo lo vistió. Cuando llega el momento, el cazador regresa con todo su poder original.'
      ),
      h(2, 'Conexiones internas', 'conexiones'),
      p(
        'Conecta con ',
        link('Marika', 'character', 'marika'),
        ' como esposo original, con ',
        link('Godwyn', 'character', 'godwyn'),
        ' como padre, con ',
        link('Nepheli Loux', 'character', 'nepheli-loux'),
        ' como posible heredera, con los ',
        link('Tarnished', 'concept', 'tarnished'),
        ' como ancestro común, con ',
        link('Stormveil', 'region', 'stormveil'),
        ' como castillo originalmente suyo y con las ',
        link('Mountaintops', 'region', 'mountaintops'),
        ' como escenario de su guerra contra los gigantes.'
      )
    ],
    confirmed: [
      'Godfrey fue el Primer Señor Elden y consorte original de Marika',
      'Sometió al Espíritu Tormenta Serosh y lo encadenó en su frente',
      'Conquistó a los Gigantes del Fuego en las Mountaintops',
      'Fue exiliado cuando perdió la gracia, junto a sus seguidores que serían los Tarnished',
      'Reinó como Hoarah Loux en las tierras exteriores',
      'Regresó como espectro dorado para guardar el trono Elden',
      'Tuvo dos formas en combate: rey blindado y Hoarah Loux primal'
    ],
    inferred: [
      'Su lágrima al perder la gracia fue por pérdida de propósito, no de privilegio',
      'Es ancestro biológico de muchos Tarnished, posiblemente incluyendo a Nepheli',
      'Su lealtad estructural lo hace el único demidiós dispuesto a regresar como guardián tras la fractura',
      'Conserva todo su poder primal incluso siglos después del exilio'
    ],
    theories: [
      'Su exilio fue parte de un plan a largo plazo de Marika para preparar candidatos exteriores al trono',
      'Serosh sigue ofreciendo consejo desde su frente: la bestia es interlocutor cuando el rey está dudoso',
      'Sus tierras exteriores eran continentes que el Orden no quiso anexar — espacios deliberadamente dejados vírgenes',
      'Su título "Hoarah Loux" lo conecta a una raza de gigantes nómadas pre-Orden'
    ],
    ambiguous: [
      'Si su retorno fue voluntad propia, llamado de la Voluntad Mayor o consecuencia automática del despertar de la gracia Tarnished',
      'Cuántos hijos engendró antes del exilio, y cuántos descendientes Tarnished en circulación llevan su sangre',
      'Si conocía la fusión Marika/Radagon o vivió como esposo ignorante',
      'Si su pelea final con el Tarnished es contienda real o ritual de transmisión'
    ],
    beneficiaries:
      'Marika obtuvo conquistador y luego guardián. El Orden Dorado se expandió hasta sus límites bajo su mano. Los Tarnished, paradójicamente, fueron creados por su exilio — sin Godfrey no existiría el Tarnished.',
    victims:
      'Los pueblos conquistados (gigantes, dragones residuales, Hombres Tormenta). Los Tarnished arrojados al exilio con él. Sus hijos criados a la sombra del padre ausente. El propio Godfrey, instrumento al que se le quitó la mano cuando dejó de cortar.',
    relatedCharacters: ['marika', 'godwyn', 'morgott', 'mohg', 'nepheli-loux'],
    relatedFactions: ['orden-dorado'],
    relatedRegions: ['leyndell', 'stormveil', 'mountaintops'],
    relatedConcepts: ['tarnished', 'grace', 'great-rune'],
    relatedTimelineEvents: ['marika-godfrey', 'exilio-godfrey'],
  },

  /* ════════════════════════════════ GODWYN ════════════════════════════════ */
  godwyn: {
    summary:
      'Godwyn el de Ojos Dorados fue el primogénito amado de Marika y Godfrey, primer demidiós muerto de las Tierras Intermedias. Su muerte parcial — alma destruida, cuerpo no — durante la Noche de los Cuchillos Negros engendró el fenómeno cosmológico que se conoce como Aquellos que Viven en la Muerte. Su cadáver crece eternamente bajo Limgrave como Príncipe de la Muerte.',
    deepLore: [
      h(2, 'Resumen esencial', 'resumen'),
      p(
        'Godwyn es la víctima cuya tragedia desencadenó el final del Orden Dorado. Era el hijo perfecto: dorado, amado, leal, integrador. Su pacto con el dragón ',
        link('Fortissax', 'character', 'fortissax'),
        ' fue el primer caso de coexistencia entre el Orden Dorado y los Antiguos Dragones — un puente cosmológico tendido por su voluntad de armonía. Esa misma voluntad lo convirtió en blanco prioritario cuando la conjura buscó víctimas que dolieran lo suficiente como para hacer estallar el régimen.'
      ),
      h(2, 'Rol en el mundo', 'rol'),
      p(
        'Como demidiós primogénito, Godwyn era el sucesor natural al Anillo Elden. Sus dones diplomáticos lo posicionaron como integrador: convirtió a un antiguo dragón en aliado, mediaba en conflictos entre facciones de la corte dorada, y representaba la promesa de que el Orden podía expandirse sin guerra. Su asesinato no fue solo eliminar a un demidiós — fue eliminar el único modelo viable de continuidad pacífica.'
      ),
      h(2, 'Historia detallada', 'historia'),
      p(
        'Su episodio más conocido es la guerra contra los Antiguos Dragones, en la cual derrotó (sin matar) a Fortissax y selló con él un pacto sagrado: Fortissax sería su aliado eterno, Godwyn aprendería el rayo dragónico. Este pacto se convirtió en la base del ',
        link('Culto del Antiguo Dragón', 'faction', 'dragones-antiguos'),
        ', secta sincrética que adoraba la unión de demidiós y dragón.'
      ),
      p(
        'La ',
        link('Noche de los Cuchillos Negros', 'timeline', 'ranni-noche-cuchillos'),
        ' fue orquestada por su sobrina ',
        link('Ranni', 'character', 'ranni'),
        '. La conjura usó hojas forjadas con un fragmento robado de la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ' del cuerpo de ',
        link('Maliketh', 'character', 'maliketh'),
        '. Estas hojas eran las únicas armas capaces de matar a un Empyrean o demidiós. La operación tenía dos objetivos: matar el cuerpo Empyrean de Ranni (para liberarla del contrato divino) y matar a Godwyn (para detonar la pena de Marika). Pero como la Muerte Predestinada estaba sellada, el asesinato fue parcial: solo mató el alma de Godwyn, no su cuerpo.'
      ),
      p(
        'Su cadáver sin alma se hundió en las raíces del Árbol Áureo y se convirtió en el primer caso de ',
        link('Aquellos que Viven en la Muerte', 'concept', 'those-who-live-in-death'),
        '. Sus tejidos fusionados con serpientes draconicídas (entre ellas el cuerpo onírico de Fortissax) crecen perpetuamente bajo ',
        link('Deeproot Depths', 'region', 'deeproot-depths'),
        '. La descomposición eterna genera ',
        link('Deathroot', 'concept', 'deathroot'),
        ', sustancia necrótica que recorre las raíces del árbol y reanima cadáveres en todos los rincones de las Tierras Intermedias.'
      ),
      h(2, 'Motivaciones', 'motivaciones'),
      p(
        'Godwyn no tiene motivaciones propias post-asesinato — su alma ya no existe. Pero antes del crimen, su filosofía era la de la integración pacífica: hacer que el Orden Dorado abrazara incluso a sus enemigos cosmológicos antiguos en lugar de exterminarlos. Su pacto con Fortissax es la prueba textual.'
      ),
      h(2, 'Relaciones importantes', 'relaciones'),
      p(
        'Marika es su madre, Godfrey es su padre. Fortissax es su aliado eterno. Sus hermanos directos incluyen a Morgott y Mohg. ',
        link('Fia', 'character', 'fia'),
        ' es la doncella post-mortem que dedica su quest entera a sanarle la herida cosmológica. ',
        link('D', 'character', 'd'),
        ' lucha por exterminar a quienes nacieron de su muerte. ',
        link('Rogier', 'character', 'rogier'),
        ' investiga académicamente su caso.'
      ),
      h(2, 'Eventos clave', 'eventos'),
      ol(
        'Pacto con Fortissax.',
        'Establecimiento del Culto del Antiguo Dragón.',
        'Asesinato durante la Noche de los Cuchillos Negros.',
        'Caída del cuerpo a las raíces del Árbol Áureo.',
        'Surgimiento de la Deathroot y de Aquellos que Viven en la Muerte.',
        'Aparición onírica de Fortissax atrapado en su pesadilla.',
        'Quest de Fia para conseguir la Runa Mendaz que cierre su herida.'
      ),
      h(2, 'Consecuencias', 'consecuencias'),
      p(
        'La muerte parcial de Godwyn es el evento central que rompe el Orden Dorado. Detona la pena de Marika que rompe el Anillo. Genera la sustancia (Deathroot) que infecta las Tierras Intermedias enteras. Crea el fenómeno (los Que Viven en la Muerte) que se vuelve cosmológicamente irresoluble bajo el régimen actual. Atrapa a Fortissax en pesadilla eterna. Ofrece a ',
        link('Fia', 'character', 'fia'),
        ' la posibilidad de reformar el Anillo Elden con la Runa Mendaz que devuelve la Muerte Predestinada — la ',
        link('Era del Crepúsculo', 'ending', 'duskborn'),
        ' es el final que cierra su herida.'
      ),
      h(2, 'Simbolismo e interpretación temática', 'simbolismo'),
      p(
        'Godwyn es la prueba ontológica de que el Orden Dorado es estructuralmente incompleto. Su existencia no debería ser posible: un ser cuya alma murió pero cuyo cuerpo crece eternamente. Es la grieta cosmológica hecha carne. Su forma actual — un cadáver descomunal entrelazado con dragones — es el monumento subterráneo del juego: lo que el régimen no puede mirar de frente.'
      ),
      h(2, 'Conexiones internas', 'conexiones'),
      p(
        'Su muerte habilita ',
        link('Aquellos que Viven en la Muerte', 'faction', 'those-who-live-in-death'),
        ', la ',
        link('Deathroot', 'concept', 'deathroot'),
        ' y la quest de ',
        link('Fia', 'character', 'fia'),
        '. Su pacto con ',
        link('Fortissax', 'character', 'fortissax'),
        ' subsiste en pesadilla bajo ',
        link('Deeproot Depths', 'region', 'deeproot-depths'),
        '. Es la víctima cuyo nombre detona la ',
        link('Era del Crepúsculo', 'ending', 'duskborn'),
        '.'
      )
    ],
    confirmed: [
      'Godwyn fue el primogénito de Marika y Godfrey',
      'Domesticó al antiguo dragón Fortissax mediante un pacto sagrado',
      'Fundó el Culto del Antiguo Dragón',
      'Fue asesinado durante la Noche de los Cuchillos Negros',
      'Su muerte fue parcial: alma destruida, cuerpo eterno',
      'Su cadáver bajo Deeproot Depths genera Deathroot',
      'Es el origen primero de Aquellos que Viven en la Muerte'
    ],
    inferred: [
      'Su asesinato fue el evento detonante de la pena de Marika que rompió el Anillo',
      'La sangre escarlata Negra que apunaló su alma fue forjada con un fragmento robado de la Runa de la Muerte',
      'Su pacto con Fortissax era anomalía teológica que el Orden tolerada por su prestigio',
      'Su cuerpo conserva alguna forma de presencia onírica que arrastra a Fortissax a pesadillas'
    ],
    theories: [
      'Godwyn habría sido el sucesor pacífico ideal al Anillo Elden si su régimen hubiera sobrevivido',
      'Su pacto con dragones era el primer paso hacia un Orden Dorado expandido que aceptara a los pueblos pre-Orden',
      'La Deathroot no es simplemente descomposición — es voluntad residual de Godwyn intentando alcanzar el cosmos a través de los cadáveres reanimados',
      'Su asesinato fue daño colateral, no objetivo principal: Ranni quería matar su propio cuerpo Empyrean y aprovechó la coordinación'
    ],
    ambiguous: [
      'Si Godwyn conserva alguna forma residual de conciencia bajo Deeproot Depths',
      'Si su pacto con Fortissax sobrevive en el cadáver eterno o se rompió con la muerte del alma',
      'Si la Era del Crepúsculo realmente le devuelve la muerte verdadera o solo cierra superficialmente la herida',
      'Si el Tarnished le devuelve dignidad al cerrar su herida o si solo lo deja por fin morir'
    ],
    beneficiaries:
      'Ranni, cuya conjura tuvo éxito en su objetivo principal (matar su propio cuerpo Empyrean) gracias al asesinato de Godwyn como cobertura. Aquellos que Viven en la Muerte, que existen por su precedente. Fia, cuya quest obtiene su sentido de su sufrimiento.',
    victims:
      'Marika, en cuya pena rompió el cosmos. Fortissax, atrapado eternamente luchando en su pesadilla. Todo las Tierras Intermedias, que arrastra desde entonces la herida abierta de su descomposición. El propio Godwyn, condenado a una existencia parcial sin descanso.',
    relatedCharacters: ['marika', 'godfrey', 'fortissax', 'ranni', 'maliketh', 'fia', 'd', 'rogier'],
    relatedFactions: ['orden-dorado', 'cuchillos-negros', 'those-who-live-in-death', 'dragones-antiguos'],
    relatedRegions: ['deeproot-depths', 'leyndell', 'stormveil'],
    relatedConcepts: ['destined-death', 'rune-of-death', 'deathroot', 'those-who-live-in-death'],
    relatedTimelineEvents: ['ranni-noche-cuchillos', 'la-fractura'],
    relatedEndings: ['duskborn'],
  },

  /* ════════════════════════════════ MORGOTT ════════════════════════════════ */
  morgott: {
    summary:
      'Morgott el Rey Caído fue hijo Omen de Marika y Radagon, encarcelado bajo Leyndell durante toda su juventud. Tras la fractura, eligió defender el régimen que lo había rechazado. Como Margit el Presagio Caído acechó al Tarnished desde el principio; como Rey Omen defendió Leyndell hasta la muerte. Su tragedia es haber amado más al Orden Dorado que el Orden Dorado lo amó a él.',
    deepLore: [
      h(2, 'Resumen esencial', 'resumen'),
      p(
        'Morgott es el caso extremo de fidelidad del oprimido. Nació Omen — categoría que el Orden Dorado considera maldita y encarcela bajo el subsuelo de su propia capital. Pasó su juventud en mazmorras. Cuando llegó la fractura y todos los demidioses se rebelaron contra el régimen que los había privilegiado, Morgott — el demidiós más maltratado por el sistema — fue el único que se dedicó a defenderlo. Esa devoción excede toda lógica de privilegio o resentimiento; es un acto teológico tan radical que redefine lo que significa ser leal.'
      ),
      h(2, 'Rol en el mundo', 'rol'),
      p(
        'Tras la fractura, Morgott asume tres funciones simultáneas. Es el ',
        em('Rey'),
        ' de facto de Leyndell (su hermano-gemelo Mohg renunció al trono para construir su propia dinastía sangrienta; los demás demidioses están demasiado lejos o muertos). Es el ',
        em('centinela'),
        ' del Anillo Elden bajo el alias de Margit, presentándose en momentos clave del viaje del Tarnished. Y es el ',
        em('último guardián teológico'),
        ' del Orden Dorado: cuando Morgott muera, el régimen perderá su última defensa antes del trono mismo.'
      ),
      h(2, 'Historia detallada', 'historia'),
      p(
        'Morgott y su gemelo Mohg nacieron Omens — con cuernos, escamas, deformidades del Crisol primigenio — como manifestación de la sangre antigua que ',
        link('Radagon', 'character', 'radagon'),
        ' arrastraba sin proclamar. La ley del Orden Dorado clasifica a los Omens como aberraciones; aún cuando son hijos del trono, deben ser encarcelados o sometidos a ',
        link('omenkillers', 'faction', 'omens'),
        '. Marika permitió — o consintió — que sus propios hijos Omens fueran encerrados en las alcantarillas de ',
        link('Leyndell', 'region', 'leyndell'),
        ' durante su juventud.'
      ),
      p(
        'En algún momento Morgott escapó del encierro. Su gemelo escogió rebelarse contra el régimen; Morgott escogió servirlo. Asumió el alias de Margit el Presagio Caído como identidad de campo, recorriendo las Tierras Intermedias para frenar a los aspirantes Tarnished. Como Margit aparece tres veces ante el Tarnished: en Stormhill (como portero del castillo Stormveil), en el camino al Roundtable Hold (como guardián fantasmal), y antes de Leyndell. Su fraseología ("¿Tarnished? Bienaventurado por el odio amargo...") revela que conoce los nombres de los aspirantes y los considera blasfemos por la mera ambición de retomar el trono que él, hijo legítimo, no puede ocupar limpiamente.'
      ),
      p(
        'Como Rey Omen en Leyndell, Morgott carga con la "',
        em('Maldición Omen'),
        '" — el dolor crónico de la sangre antigua manifestándose en su cuerpo. Su corona dorada es proyección de la corona Omen subyacente: el régimen lo permite usar las marcas reales sobre las marcas malditas. Su lanza fragmentaria, su espada bendita, su sello de defensa — todo está construido sobre la negación deliberada de su forma natural.'
      ),
      h(2, 'Motivaciones', 'motivaciones'),
      p(
        'Morgott no defiende al Orden Dorado por ignorancia. Sabe perfectamente que el régimen lo ha despreciado. Su devoción es elección teológica deliberada: el Orden, aunque imperfecto, es preferible al caos cosmológico que se desataría sin él. Su lealtad es la del oprimido que comprende que la opresión es estructural, no personal — y que decide defender la estructura porque la alternativa es peor. Es una posición filosófica genuinamente compleja: el conservadurismo del marginalizado.'
      ),
      h(2, 'Relaciones importantes', 'relaciones'),
      p(
        'Su gemelo ',
        link('Mohg', 'character', 'mohg'),
        ' es su contraparte y antítesis: misma sangre, decisión opuesta. Sus padres son ',
        link('Marika', 'character', 'marika'),
        ' y ',
        link('Radagon', 'character', 'radagon'),
        '. Su súbdita era ',
        link('Lansseax', 'character', 'fortissax'),
        ' (dragón). Sus súbditos siguen siendo los soldados leales del Orden Dorado.'
      ),
      h(2, 'Eventos clave', 'eventos'),
      ol(
        'Nacimiento como Omen.',
        'Encarcelamiento bajo Leyndell.',
        'Escape.',
        'Asunción del alias Margit.',
        'Defensa de Stormhill.',
        'Aparición en Roundtable Hold.',
        'Coronación tácita como Rey Omen tras la fractura.',
        'Defensa final de Leyndell ante el Tarnished.'
      ),
      h(2, 'Consecuencias', 'consecuencias'),
      p(
        'La existencia de Morgott prueba dos cosas estructuralmente importantes: 1) que el régimen del Orden Dorado depende de la lealtad de aquellos a quienes margina, y 2) que un Omen puede ser rey si el régimen lo necesita lo suficiente. Su muerte abre el camino al trono para el Tarnished. Su lanza, su espada, sus enseñanzas, todo queda como herencia material en las catacumbas reales. El Tarnished obtiene su Gran Runa — paradójicamente la única que el régimen jamás reconoció oficialmente.'
      ),
      h(2, 'Simbolismo e interpretación temática', 'simbolismo'),
      p(
        'Morgott es la encarnación de la pregunta: ¿se puede ser leal a un sistema que te aborrece? Su existencia desafía toda teoría de "los oprimidos siempre se rebelan". Su tragedia es la del que entiende perfectamente la injusticia que sufre y decide, contra toda lógica emocional, sostener el sistema que la perpetúa. Sus palabras finales — pide al Tarnished seguir el camino justo — son las de un mártir que muere por una causa que nunca le perteneció.'
      ),
      h(2, 'Conexiones internas', 'conexiones'),
      p(
        'Su contraparte es ',
        link('Mohg', 'character', 'mohg'),
        '. Su jaula original está en ',
        link('Leyndell', 'region', 'leyndell'),
        '. Su régimen es el ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        '. Su categoría son los ',
        link('Omens', 'faction', 'omens'),
        '. Su última batalla es la antesala de la lucha contra ',
        link('Godfrey', 'character', 'godfrey'),
        '.'
      )
    ],
    confirmed: [
      'Morgott es hijo Omen de Marika y Radagon, gemelo de Mohg',
      'Fue encarcelado bajo Leyndell durante su juventud',
      'Se disfraza como Margit el Presagio Caído',
      'Defiende el Anillo Elden contra los Tarnished aspirantes',
      'Reina como Rey Omen tras la fractura',
      'Sufre la maldición Omen como dolor crónico'
    ],
    inferred: [
      'Su devoción al Orden es deliberada, no producto de ignorancia',
      'La gracia que lo mantiene es prestada y dolorosa',
      'Es el único demidiós dispuesto a defender el régimen tras la fractura',
      'Su corona dorada se superpone a una corona Omen subyacente'
    ],
    theories: [
      'Marika consintió o exigió su encarcelamiento como parte del pacto del Orden con la Voluntad Mayor',
      'Su gemelo Mohg es la mitad rebelde y él la mitad leal del mismo sujeto cosmológico dividido',
      'Su lanza fragmentaria es ella misma símbolo: arma de defensa hecha pedazos, como su régimen',
      'Sus apariciones como Margit son advertencias deliberadas que dan al Tarnished oportunidad de retirarse'
    ],
    ambiguous: [
      'Cuándo y cómo escapó de las alcantarillas',
      'Si Marika alguna vez intentó liberarlo o lo abandonó conscientemente',
      'Si su devoción al régimen es fanatismo, deber o forma encubierta de venganza interna',
      'Si sus palabras finales al Tarnished son maldición o bendición'
    ],
    beneficiaries:
      'El Orden Dorado obtuvo su defensor más improbable y eficaz. La Voluntad Mayor obtuvo, gracias a él, una excusa para seguir delegando su gobierno tras la fractura.',
    victims:
      'Mohg, abandonado por la decisión opuesta. Los Tarnished que cayeron tratando de pasar Stormhill y Leyndell. El propio Morgott, que muere defendiendo lo que lo encarceló.',
    relatedCharacters: ['marika', 'radagon', 'mohg', 'godfrey', 'godwyn'],
    relatedFactions: ['orden-dorado', 'omens'],
    relatedRegions: ['leyndell', 'stormveil'],
    relatedConcepts: ['great-rune', 'grace', 'tarnished', 'crucible'],
    relatedTimelineEvents: ['la-fractura', 'estado-mundo-mancillado'],
  },

  /* ════════════════════════════════ MOHG ════════════════════════════════ */
  mohg: {
    summary:
      'Mohg, Señor de la Sangre, fue gemelo Omen de Morgott e hijo rechazado del Orden Dorado. Su respuesta al estigma fue forjar pacto con la Madre Informe, dios exterior de la sangre, y construir la Dinastía Mohgwyn como reino paralelo. Secuestró a Miquella durante su sueño para criarlo como consorte divino y fundar una nueva era cosmológica.',
    deepLore: [
      h(2, 'Resumen esencial', 'resumen'),
      p(
        'Mohg eligió el camino opuesto a su gemelo. Donde Morgott eligió servir al régimen que los había encarcelado, Mohg eligió fundar uno nuevo bajo otro dios. Su contrato con la ',
        link('Madre Informe', 'concept', 'formless-mother'),
        ' transformó su cuerpo (alas, cuernos coronados, dominio del fuego de sangre) y le otorgó propósito cosmológico. Su proyecto: criar a un dios consorte secuestrado y, como Señor Elden de una era sangrienta, refundar el cosmos bajo su propia liturgia.'
      ),
      h(2, 'Rol en el mundo', 'rol'),
      p(
        'Mohg cumple tres funciones cosmológicas. Es ',
        em('profeta'),
        ' (la voz de la Madre Informe en las Tierras Intermedias), ',
        em('dinasta'),
        ' (fundador de la Dinastía Mohgwyn como régimen alternativo), y ',
        em('secuestrador'),
        ' (raptó a Miquella para usarlo como cogobernante divino). Su existencia desafía la pretensión del Orden Dorado a ser único cosmos viable: si Mohg hubiera completado su proyecto, una era de sangre habría reemplazado a la era dorada.'
      ),
      h(2, 'Historia detallada', 'historia'),
      p(
        'Igual que su gemelo, Mohg pasó su juventud encerrado bajo Leyndell. Allí — quizás en las profundidades de las alcantarillas, donde la influencia del Orden Dorado se debilita — entró en contacto con la Madre Informe. Los textos no precisan cómo: posiblemente la encontró tras siglos de oraciones malignas, posiblemente ella lo encontró a él. El pacto fue claro: ella le entregaría poder transformador (el ',
        link('Bloodflame', 'concept', 'bloodflame'),
        ') a cambio de devoción y de cuerpos sacrificados.'
      ),
      p(
        'Tras escapar, Mohg construyó la ',
        link('Dinastía Mohgwyn', 'region', 'mohgwyn'),
        ' bajo tierra, lejos del Árbol Áureo. Allí trajo Albinaurics traficados por sus seguidores Bloody Fingers para convertirlos en alimento ritual. La sangre de los Albinaurics alimenta el lago carmesí del palacio; el lago alimenta a la Madre Informe; la Madre Informe alimenta a Mohg.'
      ),
      p(
        'Su proyecto culminante fue el secuestro de ',
        link('Miquella', 'character', 'miquella'),
        '. Mohg necesitaba un consorte ',
        link('Empyrean', 'concept', 'empyrean'),
        ' para que su régimen pudiera ungirse como auténtica era cosmológica. Eligió a Miquella, que dormía en su capullo dorado en el ',
        link('Haligtree', 'region', 'haligtree'),
        '. Lo raptó durante el sueño y lo trasladó a Mohgwyn. Allí inició el ritual de incubación sangrienta: el cuerpo dormido del Empyrean sería bañado, sangrado, transformado, hasta despertar como dios de Mohg.'
      ),
      p(
        'El plan fracasó por dos razones simultáneas. Primero, el capullo dorado del Oro sin Aleación protegía a Miquella incluso del rito sangriento — Miquella nunca despertó dentro de Mohgwyn. Segundo, el Tarnished eventualmente derrotó a Mohg antes de la consumación. La dinastía sangrienta queda detenida en su acto de gestación: un altar a un dios que nunca despertó.'
      ),
      h(2, 'Motivaciones', 'motivaciones'),
      p(
        'Mohg no es nihilista. Cree genuinamente en su régimen alternativo. Su rebelión es estructuralmente idéntica a la de Marika: secuestrar a una figura sagrada y forzarla en el rol de consorte para fundar una era. Donde Marika usó a Godfrey, Mohg usaría a Miquella. Su tragedia es no comprender que está reproduciendo el crimen original del Orden Dorado, no superándolo. Su revolución es solo otro régimen.'
      ),
      h(2, 'Relaciones importantes', 'relaciones'),
      p(
        'Su gemelo ',
        link('Morgott', 'character', 'morgott'),
        ' eligió la lealtad opuesta. Sus padres son ',
        link('Marika', 'character', 'marika'),
        ' y ',
        link('Radagon', 'character', 'radagon'),
        '. Su consorte secuestrado es ',
        link('Miquella', 'character', 'miquella'),
        '. Su diosa exterior es la ',
        link('Madre Informe', 'concept', 'formless-mother'),
        '. Su misionero principal es ',
        link('Varré', 'character', 'varre'),
        '. Sus seguidores son los ',
        link('Bloody Fingers', 'faction', 'bloody-fingers'),
        '.'
      ),
      h(2, 'Eventos clave', 'eventos'),
      ol(
        'Nacimiento Omen.',
        'Encarcelamiento bajo Leyndell.',
        'Pacto con la Madre Informe.',
        'Escape.',
        'Construcción de la Dinastía Mohgwyn.',
        'Reclutamiento de Bloody Fingers.',
        'Secuestro de Miquella.',
        'Inicio del ritual de incubación.',
        'Derrota ante el Tarnished.'
      ),
      h(2, 'Consecuencias', 'consecuencias'),
      p(
        'Su muerte deja a Miquella todavía dormido en el lago de sangre, capullo intacto pero corrompido por el contacto. Los Bloody Fingers pierden su líder. La Madre Informe pierde a su profeta principal pero no su presencia. La región de Mohgwyn queda como testimonio congelado del proyecto fallido: un altar de gestación interrumpida.'
      ),
      h(2, 'Simbolismo e interpretación temática', 'simbolismo'),
      p(
        'Mohg encarna la pregunta de si toda revolución cosmológica está condenada a reproducir la estructura que combate. Sus alas, sus cuernos coronados, su corte sangrienta, todo imita la iconografía del Orden Dorado pero invertida en color. Su régimen alternativo no es estructuralmente alternativo: es el mismo régimen con otra deidad y otro consorte. Su fracaso es paradigmático: el oprimido que se libera reproduciendo la opresión.'
      ),
      h(2, 'Conexiones internas', 'conexiones'),
      p(
        'Su contraparte es ',
        link('Morgott', 'character', 'morgott'),
        '. Su altar está en ',
        link('Mohgwyn', 'region', 'mohgwyn'),
        '. Su víctima es ',
        link('Miquella', 'character', 'miquella'),
        '. Su seguidor visible es ',
        link('Varré', 'character', 'varre'),
        '. Su orden cosmológico depende de la ',
        link('Madre Informe', 'concept', 'formless-mother'),
        '.'
      )
    ],
    confirmed: [
      'Mohg es gemelo Omen de Morgott, hijo de Marika y Radagon',
      'Hizo pacto con la Madre Informe, dios exterior de la sangre',
      'Construyó la Dinastía Mohgwyn como reino subterráneo',
      'Secuestró a Miquella durante su sueño en el Haligtree',
      'Domina el Bloodflame como su magia personal',
      'Sus seguidores son los Bloody Fingers, encabezados por Varré'
    ],
    inferred: [
      'Su rebelión es respuesta directa al trauma del encarcelamiento juvenil',
      'La Madre Informe lo ha usado tanto como él la ha usado a ella',
      'Miquella nunca colaboró voluntariamente; el rito fue puro secuestro',
      'Su régimen reproduce estructuralmente el crimen original del Orden Dorado'
    ],
    theories: [
      'La Madre Informe es parásita: Mohg cree mandarla pero ella lo dirige a él',
      'Su capullo de Mohgwyn es ataúd disfrazado de cuna: Miquella habría muerto antes de despertar',
      'Su proyecto era inviable cosmológicamente — la Voluntad Mayor nunca habría permitido un consorte sin contrato',
      'Su sangre podría haber sido alternativa real al Árbol Áureo solo si Miquella aceptaba el rol; al no hacerlo, Mohg quedó como falsa rebelión'
    ],
    ambiguous: [
      'Cuándo y cómo escapó de las alcantarillas',
      'Cuánta autoconciencia tenía Miquella durante el secuestro',
      'Si la Madre Informe hablaba directamente con él o solo a través de impulsos sangrientos',
      'Si Mohg sabía que Miquella nunca despertaría dentro del capullo'
    ],
    beneficiaries:
      'La Madre Informe ganó adoración masiva. Los Bloody Fingers obtuvieron culto y poder de invasión. Varré obtuvo identidad mística.',
    victims:
      'Miquella, secuestrado en su sueño. Los Albinaurics traficados a Mohgwyn como ofrenda. Morgott, abandonado por la decisión opuesta. Y el propio proyecto sangriento, que muere antes de nacer.',
    relatedCharacters: ['morgott', 'miquella', 'marika', 'radagon', 'malenia', 'varre'],
    relatedFactions: ['omens', 'bloody-fingers'],
    relatedRegions: ['mohgwyn', 'leyndell', 'haligtree'],
    relatedConcepts: ['formless-mother', 'bloodflame', 'dioses-exteriores', 'empyrean', 'crucible'],
    relatedTimelineEvents: ['la-fractura', 'estado-mundo-mancillado'],
  },

  /* ════════════════════════════════ RANNI ════════════════════════════════ */
  ranni: {
    summary:
      'Ranni la Bruja, Empyrean de la familia Caria, conspiró durante siglos para liberarse del contrato Empyrean impuesto por los Dos Dedos. Su Noche de los Cuchillos Negros mató su propio cuerpo Empyrean — y también, como daño colateral o cobertura, al primogénito Godwyn. Desde entonces habita una muñeca articulada y planea la Era de las Estrellas: un cosmos sin Voluntad Mayor.',
    deepLore: [
      h(2, 'Resumen esencial', 'resumen'),
      p(
        'Ranni es la única figura de las Tierras Intermedias que ha pensado el problema cosmológico hasta el final. Vio en su designación como Empyrean no un privilegio sino una jaula: heredar el cuerpo de la Voluntad Mayor implicaba servirla por la eternidad. Su respuesta fue construir, durante siglos, las herramientas necesarias para auto-asesinarse cosmológicamente. Lo logró. Ahora prepara la Era de las Estrellas: un cosmos donde ningún dios cercano dicte la ley.'
      ),
      h(2, 'Rol en el mundo', 'rol'),
      p(
        'Ranni tiene tres roles. Como ',
        em('hija de Rennala'),
        ' es heredera del trono Carian y portadora de la magia lunar de su madre. Como ',
        em('Empyrean'),
        ' designada por los Dos Dedos, fue candidata a suceder a Marika como vasija del Anillo Elden. Como ',
        em('rebelde cosmológica'),
        ', es la conspiradora más sofisticada de las Tierras Intermedias: la única que comprendió que la Voluntad Mayor es el problema, no la solución.'
      ),
      h(2, 'Historia detallada', 'historia'),
      p(
        'Nació hija de ',
        link('Rennala', 'character', 'rennala'),
        ' y ',
        link('Radagon', 'character', 'radagon'),
        ' en ',
        link('Raya Lucaria', 'region', 'raya-lucaria'),
        '. La crianza fue de aristocrática hechicera Carian: aprendió la magia de la Luna Llena de su madre y, eventualmente, la magia de la Luna Oscura como variante propia. Cuando los Dos Dedos la designaron Empyrean, le asignaron como Bestia Sombra a ',
        link('Blaidd', 'character', 'blaidd'),
        ', un medio-lobo creado específicamente para ella por ',
        link('Maliketh', 'character', 'maliketh'),
        '.'
      ),
      p(
        'Aceptar la designación habría implicado servir eternamente a la Voluntad Mayor. Ranni rechazó esta servidumbre. Reunió aliados — Blaidd como bestia sombra forzada, ',
        link('Iji', 'character', 'iji'),
        ' como gigante herrero leal, ',
        link('Seluvis', 'character', 'seluvis'),
        ' como manipulador útil — y planeó durante un tiempo no especificado pero presumiblemente muy largo. Robó una mecha de la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ' del cuerpo de ',
        link('Maliketh', 'character', 'maliketh'),
        '. Con esa mecha forjó las hojas de los ',
        link('Cuchillos Negros', 'faction', 'cuchillos-negros'),
        ', únicas armas capaces de matar a un Empyrean.'
      ),
      p(
        'La ',
        link('Noche de los Cuchillos Negros', 'timeline', 'ranni-noche-cuchillos'),
        ' ejecutó dos asesinatos simultáneos: el de su propio cuerpo Empyrean (objetivo principal) y el de ',
        link('Godwyn', 'character', 'godwyn'),
        ' (objetivo secundario o cobertura). Ambos fueron parciales por el sello de la Muerte: Godwyn quedó con cuerpo sin alma, Ranni transferió su mente a una muñeca articulada que ya tenía preparada como cuerpo de respuesta.'
      ),
      p(
        'Tras esto, Ranni descendió a las ',
        link('Three Sisters', 'region', 'liurnia'),
        ' como bruja muñeca. Los Dos Dedos enviaron asesinos contra sus aliados; Iji murió en una emboscada. Ranni continuó. Su quest, si el Tarnished la sigue, requiere recuperar la ',
        link('Hoja Mata-Dedos', 'concept', 'destined-death'),
        ' (objeto enterrado en Nokron capaz de cortar a los Dos Dedos), reunir el ',
        link('Espadón de la Luna Oscura', 'concept', 'dark-moon'),
        ' (que se convertirá en su cetro cosmológico), y enfrentar la consumación final del plan: la Era de las Estrellas.'
      ),
      h(2, 'Motivaciones', 'motivaciones'),
      p(
        'Ranni razona cosmológicamente. Su análisis de las Tierras Intermedias: la Voluntad Mayor y los demás dioses exteriores son parásitos cuya cercanía siempre produce sufrimiento. La única solución estructuralmente válida es ',
        em('alejar'),
        ' al cosmos de la influencia divina cercana. Su Era de las Estrellas no destruye a los dioses — los pone a distancia tan grande que dejan de poder dictar la ley humana. Es libertad por geografía cósmica.'
      ),
      p(
        'Su frialdad emocional aparente es estrategia, no patología. Comprende que los aliados deben ser herramientas porque cualquier vínculo emocional fuerte introduce vulnerabilidades explotables por la Voluntad Mayor. Cuando finalmente acepta al Tarnished como consorte (en la Era de las Estrellas), es la primera vez que se permite vínculo sin estrategia detrás.'
      ),
      h(2, 'Relaciones importantes', 'relaciones'),
      p(
        'Su madre ',
        link('Rennala', 'character', 'rennala'),
        ' y su padre ',
        link('Radagon', 'character', 'radagon'),
        '. Sus medio-hermanos: ',
        link('Radahn', 'character', 'radahn'),
        ', ',
        link('Rykard', 'character', 'rykard'),
        ', ',
        link('Godwyn', 'character', 'godwyn'),
        '. Sus aliados: ',
        link('Blaidd', 'character', 'blaidd'),
        ' (devoción genuina), ',
        link('Iji', 'character', 'iji'),
        ' (lealtad consciente del sacrificio), ',
        link('Seluvis', 'character', 'seluvis'),
        ' (instrumento que intentó traicionarla). Su consorte final: el Tarnished.'
      ),
      h(2, 'Eventos clave', 'eventos'),
      ol(
        'Nacimiento como Empyrean.',
        'Estudio de la Luna Llena bajo Rennala.',
        'Designación por los Dos Dedos.',
        'Asignación de Blaidd como Bestia Sombra.',
        'Robo de la mecha de la Runa de la Muerte.',
        'Forjado de los Cuchillos Negros.',
        'Noche de los Cuchillos Negros.',
        'Transferencia a la muñeca articulada.',
        'Descenso a las Three Sisters.',
        'Recuperación de la Hoja Mata-Dedos.',
        'Obtención del Espadón de la Luna Oscura.',
        'Era de las Estrellas.'
      ),
      h(2, 'Consecuencias', 'consecuencias'),
      p(
        'Su Noche detonó la rotura del Anillo Elden por parte de Marika (al matar parcialmente a Godwyn). Su existencia como muñeca creó precedente cosmológico (un Empyrean fuera de su cuerpo original). Su Era de las Estrellas, si el Tarnished la elige, instaura un cosmos sin Voluntad Mayor activa. Su rebelión es la única de las Tierras Intermedias que tuvo éxito estructural.'
      ),
      h(2, 'Simbolismo e interpretación temática', 'simbolismo'),
      p(
        'Ranni es la racionalidad fría como única respuesta posible al cosmos. Su muñeca de porcelana azul es símbolo perfecto: el ser pensante reducido a articulaciones precisas, sin calidez, sin error. Pero la fragilidad de la porcelana es también ternura: a pesar de toda su frialdad estratégica, conserva afecto suficiente para que su quest concluya con consorcio voluntario, no con dominación. Es la pregunta de si la libertad fría supera al control compasivo, y su respuesta es que sí.'
      ),
      h(2, 'Conexiones internas', 'conexiones'),
      p(
        'Su madre es ',
        link('Rennala', 'character', 'rennala'),
        '. Sus hermanos directos son ',
        link('Radahn', 'character', 'radahn'),
        ' y ',
        link('Rykard', 'character', 'rykard'),
        '. Sus aliados son ',
        link('Blaidd', 'character', 'blaidd'),
        ', ',
        link('Iji', 'character', 'iji'),
        ' y ',
        link('Seluvis', 'character', 'seluvis'),
        '. Su régimen propuesto es la ',
        link('Era de las Estrellas', 'ending', 'age-of-stars'),
        '.'
      )
    ],
    confirmed: [
      'Ranni es hija Empyrean de Rennala y Radagon',
      'Robó una mecha de la Runa de la Muerte para forjar los Cuchillos Negros',
      'Mató su propio cuerpo Empyrean en la Noche de los Cuchillos Negros',
      'Habita una muñeca articulada como cuerpo de reserva',
      'Sus aliados son Blaidd, Iji y Seluvis',
      'Su quest culmina en la Era de las Estrellas'
    ],
    inferred: [
      'Su plan estuvo en preparación durante siglos antes de ejecución',
      'La muerte de Godwyn fue daño colateral o cobertura, no objetivo principal',
      'Su frialdad es estrategia para evitar manipulación divina',
      'Su muñeca había sido preparada antes de la Noche como cuerpo de respaldo'
    ],
    theories: [
      'Ranni heredó algún rasgo cosmológico de los Nox: su Era de las Estrellas continúa el sueño de aquellas civilizaciones',
      'La Voluntad Mayor sospechó su rebelión pero no pudo intervenir antes del corte',
      'Marika la habría favorecido secretamente — la rotura del Anillo es coordinable con la Noche',
      'Su afecto por el Tarnished no es estrategia: es la única emoción no calculada de toda su vida'
    ],
    ambiguous: [
      'Si su Era de las Estrellas elimina a la Voluntad Mayor o solo la aleja',
      'Si los Dos Dedos sospechaban su rebelión antes de la Noche',
      'Cuánto sabe ella de la fusión Marika/Radagon',
      'Si conserva sentimientos por Blaidd o lo ve solo como herramienta'
    ],
    beneficiaries:
      'Ranni misma, libre del contrato Empyrean. El Tarnished, parte como consorte hacia las estrellas. Los pueblos del cosmos, liberados de la Voluntad Mayor activa. Posiblemente los Nox, cuya promesa estelar al fin se cumple.',
    victims:
      'Godwyn, asesinado parcialmente. Blaidd, dispuesto a la locura por su lealtad. Iji, sacrificado por sus enemigos. Seluvis, traicionado por la Bruja a la que servía. La Voluntad Mayor, expulsada de su gobierno cercano.',
    relatedCharacters: ['rennala', 'radagon', 'godwyn', 'maliketh', 'blaidd', 'iji', 'seluvis', 'marika'],
    relatedFactions: ['caria', 'cuchillos-negros', 'raya-lucaria', 'nox'],
    relatedRegions: ['raya-lucaria', 'liurnia', 'nokron', 'nokstella'],
    relatedConcepts: ['empyrean', 'rune-of-death', 'destined-death', 'dark-moon', 'age-of-stars', 'voluntad-mayor'],
    relatedTimelineEvents: ['ranni-noche-cuchillos', 'la-fractura', 'finales'],
    relatedEndings: ['age-of-stars'],
  },

  /* ════════════════════════════════ MALENIA ════════════════════════════════ */
  malenia: {
    summary:
      'Malenia, Espada de Miquella, fue Empyrean infectada de nacimiento con la Podredumbre Escarlata. Su honor marcial absoluto la hizo invicta en duelo, pero cada victoria la consumía. Su Floración en Caelid arrasó la región y arruinó a Radahn. Hoy yace incompleta en Elphael, esperando el regreso de su gemelo dormido — esperándolo para siempre.',
    deepLore: [
      h(2, 'Resumen esencial', 'resumen'),
      p(
        'Malenia encarna la cumbre marcial de las Tierras Intermedias y simultáneamente su mayor víctima. Su honor le impide rendirse, pero rendirse sería piadoso. Lleva en su sangre a un dios exterior — el dios de la podredumbre — que la usa como medio. Cada Floración Escarlata es ese dios manifestándose a través de su cuerpo. Su devoción a su gemelo ',
        link('Miquella', 'character', 'miquella'),
        ' es lo único que la sostiene; cuando él fue secuestrado, ella perdió incluso esa razón.'
      ),
      h(2, 'Rol en el mundo', 'rol'),
      p(
        'Malenia es ',
        em('Espada'),
        ' del proyecto curativo de Miquella, ',
        em('Empyrean'),
        ' designada (aunque su maldición la hizo candidata improbable) y ',
        em('manifestación humana'),
        ' del dios de la podredumbre. Estos tres roles son inseparables: su capacidad marcial es lo que protegía el Haligtree, su naturaleza Empyrean es lo que la convirtió en posible heredera del Anillo, y su infección es lo que constantemente amenazaba su propia existencia.'
      ),
      h(2, 'Historia detallada', 'historia'),
      p(
        'Nació junto a su gemelo Miquella en circunstancias que las Tierras Intermedias no entienden del todo: ambos son hijos de ',
        link('Marika', 'character', 'marika'),
        ' y ',
        link('Radagon', 'character', 'radagon'),
        ' en su forma fusionada, pero las maldiciones que cargan son simétricas y desproporcionadas para sus hermanos no-Empyreans. Miquella no puede crecer; Malenia no puede dejar de descomponerse. La hipótesis más sostenible es que sus maldiciones son la huella de ',
        link('dioses exteriores', 'concept', 'dioses-exteriores'),
        ' que se aferraron a sus almas en el momento del nacimiento.'
      ),
      p(
        'Como Espada de Miquella, Malenia entrenó al lado de los ',
        link('Cleanrot Knights', 'faction', 'cleanrot-knights'),
        ', caballeros que voluntariamente aceptaron la infección de la podredumbre como prueba de lealtad. Su técnica de combate — la Danza Floreciente, la Hoja de Aeonia, los pasos del Lirio del Valle — es la marcialidad más refinada del juego.'
      ),
      p(
        'Su rival favorito era ',
        link('Radahn', 'character', 'radahn'),
        '. El duelo entre ambos en ',
        link('Caelid', 'region', 'caelid'),
        ' (la ',
        link('Batalla de Aeonia', 'timeline', 'demidioses-fractura'),
        ') es legendario: dos guerreros perfectos midiéndose en lo único que les importaba. Cuando vio que no podía vencer marcialmente a Radahn, Malenia desplegó su ',
        em('Scarlet Aeonia'),
        ' — la primera Floración real de la podredumbre. Caelid entero quedó cubierto de podredumbre escarlata. Radahn quedó arruinado: aún vivo, pero corrompido en una bestia honorable y demente. Malenia ganó técnicamente la batalla y la perdió ontológicamente: su cuerpo quedó tan deteriorado por la Floración que perdió piernas, ojo, capacidad caminar.'
      ),
      p(
        'Volvió al ',
        link('Haligtree', 'region', 'haligtree'),
        ' a recuperarse junto al capullo dorado de su gemelo. Allí esperó. Mientras esperaba, ',
        link('Mohg', 'character', 'mohg'),
        ' se introdujo y secuestró a Miquella. Cuando despertó al rapto, ya era demasiado tarde. Quedó atrapada esperando un retorno que nunca llegaría — un capullo vacío como única compañía.'
      ),
      h(2, 'Motivaciones', 'motivaciones'),
      p(
        'Las motivaciones de Malenia son brutalmente simples y dolorosas. Ama a su hermano. Quiere protegerlo. Eso es todo. Su honor marcial, su devoción a la causa de Miquella, su disposición a usar la Floración a pesar del precio: todo se alinea bajo ese único motivo. Es la tragedia del cuidador absoluto: cuando lo cuidado se pierde, no queda razón para continuar — pero el cuerpo y el honor siguen funcionando por inercia.'
      ),
      h(2, 'Relaciones importantes', 'relaciones'),
      p(
        'Su gemelo ',
        link('Miquella', 'character', 'miquella'),
        '. Sus padres ',
        link('Marika', 'character', 'marika'),
        ' y ',
        link('Radagon', 'character', 'radagon'),
        '. Sus rivales ',
        link('Radahn', 'character', 'radahn'),
        ' y ',
        link('Mohg', 'character', 'mohg'),
        '. Su descendencia escarlata: ',
        link('Millicent', 'character', 'millicent'),
        ' y las hermanas de Aeonia. Sus seguidores los Cleanrot Knights.'
      ),
      h(2, 'Eventos clave', 'eventos'),
      ol(
        'Nacimiento Empyrean infectado.',
        'Entrenamiento como Espada.',
        'Liderazgo de los Cleanrot Knights.',
        'Construcción del Haligtree con Miquella.',
        'Marcha a Caelid.',
        'Batalla de Aeonia.',
        'Scarlet Aeonia y devastación.',
        'Pérdida física parcial.',
        'Retorno al Haligtree.',
        'Sueño junto al capullo de Miquella.',
        'Secuestro de Miquella por Mohg.',
        'Espera eterna en Elphael.'
      ),
      h(2, 'Consecuencias', 'consecuencias'),
      p(
        'Su duelo con Radahn arruinó a Caelid (yermo escarlata permanente), corrompió a Radahn (necesidad del Festival), generó las hijas escarlatas (incluyendo la única humana, Millicent), y debilitó al propio Haligtree para el secuestro posterior. Su existencia es prueba de que la maldición divina puede coexistir con honor marcial absoluto — pero el honor no detiene la maldición.'
      ),
      h(2, 'Simbolismo e interpretación temática', 'simbolismo'),
      p(
        'Malenia es la imagen del cuerpo como prisión cosmológica. Es la guerrera más honorable y simultáneamente la mártir involuntaria del dios de la podredumbre. Sus prótesis doradas, fabricadas por Miquella con Oro sin Aleación, son los únicos componentes de su cuerpo que ',
        em('no'),
        ' están infectados — un recordatorio constante de que su gemelo dedicó su vida a curarla y casi lo logró. Su grito durante la Floración no es agresivo: es el grito de un cuerpo desbordado por una voluntad ajena.'
      ),
      h(2, 'Conexiones internas', 'conexiones'),
      p(
        'Su gemelo es ',
        link('Miquella', 'character', 'miquella'),
        '. Su hogar es el ',
        link('Haligtree', 'region', 'haligtree'),
        '. Su rival caído es ',
        link('Radahn', 'character', 'radahn'),
        '. Su descendencia humana es ',
        link('Millicent', 'character', 'millicent'),
        '. Su maldición es la ',
        link('Podredumbre Escarlata', 'concept', 'scarlet-rot'),
        '.'
      )
    ],
    confirmed: [
      'Malenia es Empyrean, gemela de Miquella, hija de Marika y Radagon',
      'Nació infectada por la Podredumbre Escarlata',
      'Lidera a los Cleanrot Knights al servicio del Haligtree',
      'Sus prótesis fueron fabricadas por Miquella con Oro sin Aleación',
      'Su Scarlet Aeonia arrasó Caelid durante el duelo con Radahn',
      'Su título es Espada de Miquella · Hoja de Podredumbre'
    ],
    inferred: [
      'La podredumbre es manifestación de un dios exterior pegado a su alma desde el nacimiento',
      'Su honor marcial es genuino — la Floración fue acto de desesperación, no estrategia',
      'Su lealtad a Miquella es el único vínculo emocional que la sostiene',
      'Su nombre "Malenia" en el rito de invocación significa "la que florece"'
    ],
    theories: [
      'El dios de la podredumbre intenta usarla como vasija para suceder al Árbol Áureo',
      'Sus tres Floraciones Escarlatas (1ra: contra Radahn; 2da: durante el duelo Tarnished; 3ra: latente) son los tres estados de gestación de una Diosa de la Podredumbre',
      'Su "victoria" sobre Radahn fue intencionalmente liberadora: ambos preferían eso a morir como bestias',
      'Si despertara como Diosa de la Podredumbre, podría reemplazar al Árbol Áureo con un árbol carmesí'
    ],
    ambiguous: [
      'Si la podredumbre es maldición externa o coste estructural de su naturaleza Empyrean',
      'Si conserva esperanza de que Miquella regrese',
      'Si su tercera Floración (durante el duelo final) es voluntaria o reflejo del cuerpo',
      'Si Mohg planificó el secuestro aprovechando que ella estaba debilitada por Caelid'
    ],
    beneficiaries:
      'Miquella, defendido durante años por su espada. La Podredumbre como dios exterior, alimentada por sus victorias. Los Cleanrot Knights, que encontraron causa.',
    victims:
      'Caelid arrasada. Radahn arruinado. Los Cleanrot Knights condenados a la podredumbre. Miquella, desprotegido durante su sueño curativo. Y Malenia misma, prisionera del cuerpo que el cosmos le dio.',
    relatedCharacters: ['miquella', 'marika', 'radagon', 'radahn', 'mohg', 'millicent', 'gowry'],
    relatedFactions: ['cleanrot-knights', 'kindred-of-rot' ],
    relatedRegions: ['haligtree', 'consecrated-snowfield', 'caelid'],
    relatedConcepts: ['scarlet-rot', 'empyrean', 'unalloyed-gold', 'dioses-exteriores'],
    relatedTimelineEvents: ['miquella-malenia', 'demidioses-fractura'],
  },

  /* ════════════════════════════════ MIQUELLA ════════════════════════════════ */
  miquella: {
    summary:
      'Miquella el Más Compasivo, Empyrean gemelo de Malenia, fue maldecido a no poder crecer físicamente. Construyó el Haligtree como refugio para los excluidos del Orden Dorado y desarrolló el Oro sin Aleación para repeler a los dioses exteriores. Durmió en un capullo dorado esperando que el cosmos cambiase y, en ese sueño, fue secuestrado por Mohg.',
    deepLore: [
      h(2, 'Resumen esencial', 'resumen'),
      p(
        'Miquella es la única mente de las Tierras Intermedias que intentó pensar el problema cosmológico ',
        em('positivamente'),
        ': no destruir el régimen, no reformarlo, sino curarlo de los dioses parásitos. Su proyecto del ',
        link('Oro sin Aleación', 'concept', 'unalloyed-gold'),
        ' es el único acto teológico ',
        em('benéfico'),
        ' de toda la era. Su tragedia es que ningún proyecto pacífico sobrevive en este cosmos sin protección armada — y la protección armada (Malenia) eventualmente fallaba. Cuando se durmió esperando un cosmos mejor, Mohg lo secuestró.'
      ),
      h(2, 'Rol en el mundo', 'rol'),
      p(
        'Miquella es ',
        em('teólogo curativo'),
        ' (desarrolló el Oro sin Aleación contra los dioses exteriores), ',
        em('refugiador'),
        ' (acogió en el Haligtree a Albinaurics, Misbegotten y otros excluidos), ',
        em('alquimista'),
        ' (fabricó las prótesis de Malenia y las agujas curativas), y ',
        em('soñador'),
        ' (durmió en su capullo esperando despertar a un cosmos transformado).'
      ),
      h(2, 'Historia detallada', 'historia'),
      p(
        'Nació junto a Malenia con la maldición simétrica del eterno-niño: su cuerpo no podía madurar. Esta limitación lo obligó a desarrollar su mente en lugar de cuerpo. Convertido en uno de los seres más sabios de las Tierras Intermedias, comprendió pronto la verdad estructural del régimen: el Orden Dorado era estructuralmente injusto porque excluía a quienes no encajaban en su geometría dorada (Omens, Misbegotten, Albinaurics).'
      ),
      p(
        'Construyó el ',
        link('Haligtree', 'region', 'haligtree'),
        ' en las tierras nevadas más allá de las Mountaintops. No es solo árbol-refugio físico: es propuesta cosmológica alternativa al Árbol Áureo, alimentada por la luz del Oro sin Aleación que el propio Miquella desarrolló como respuesta a los ',
        link('dioses exteriores', 'concept', 'dioses-exteriores'),
        '. Las agujas de Oro sin Aleación pueden expulsar a un dios exterior del cuerpo de su huésped — son el único arma puramente curativa del juego.'
      ),
      p(
        'Trabajó incansablemente en curar a su gemela Malenia. Le fabricó las prótesis doradas tras la Batalla de Aeonia. Le entregó la primera Aguja de Oro sin Aleación. La curación parcial fue lo más que pudo lograr; la podredumbre era estructural, no podía erradicarla del todo. Comprendió eventualmente que necesitaba más poder — necesitaba ser ',
        em('Empyrean adulto'),
        ' — para terminar su trabajo.'
      ),
      p(
        'Como su cuerpo no podía crecer en el cosmos actual, decidió dormir. Tejió un capullo dorado de Oro sin Aleación y se introdujo en él, esperando despertar como dios completo cuando el cosmos cambiase. Durante este sueño, ',
        link('Mohg', 'character', 'mohg'),
        ' lo secuestró.'
      ),
      h(2, 'Motivaciones', 'motivaciones'),
      p(
        'Miquella es el único figura del juego cuya motivación primaria es la compasión verdadera. No quiere conquistar, no quiere reformar, no quiere destruir — quiere ',
        em('aliviar'),
        '. Esta motivación tan pura lo vuelve frágil: no entiende del todo la depredación cosmológica que opera en las Tierras Intermedias. Su sueño curativo es prueba de buena fe pura — y de ingenuidad estratégica que Malenia debería haber compensado.'
      ),
      h(2, 'Relaciones importantes', 'relaciones'),
      p(
        'Su gemela ',
        link('Malenia', 'character', 'malenia'),
        '. Sus padres ',
        link('Marika', 'character', 'marika'),
        ' y ',
        link('Radagon', 'character', 'radagon'),
        '. Su secuestrador ',
        link('Mohg', 'character', 'mohg'),
        '. Sus refugiados: los ',
        link('Albinaurics', 'faction', 'albinauricos'),
        ', los ',
        link('Misbegotten', 'faction', 'misbegotten'),
        ', y otros marginalizados.'
      ),
      h(2, 'Eventos clave', 'eventos'),
      ol(
        'Nacimiento Empyrean maldito.',
        'Desarrollo del Oro sin Aleación.',
        'Construcción del Haligtree.',
        'Recepción de los excluidos.',
        'Fabricación de las prótesis de Malenia.',
        'Curación parcial de la podredumbre escarlata.',
        'Decisión de dormir en el capullo.',
        'Secuestro durante el sueño.',
        'Translado a Mohgwyn.',
        'Sueño interrumpido pero capullo intacto.'
      ),
      h(2, 'Consecuencias', 'consecuencias'),
      p(
        'El proyecto de Miquella, aunque incompleto, dejó herencia material. El Haligtree existe. El Oro sin Aleación está disponible. Las Agujas curativas existen y pueden ser usadas por terceros. Sus refugiados — supervivientes de los Albinaurics, Misbegotten — sobrevivieron como pudieron tras el secuestro. La promesa cosmológica de un cosmos sin dioses parásitos quedó suspendida en el capullo dorado, esperando despertar.'
      ),
      h(2, 'Simbolismo e interpretación temática', 'simbolismo'),
      p(
        'Miquella es la posibilidad inverificada de que el cosmos pueda ser curado en lugar de reformulado. Su capullo dorado es el símbolo perfecto: un proyecto pendiente, dormido, frágil, vulnerable. La fragilidad es su esencia: ningún proyecto compasivo puede protegerse a sí mismo en un cosmos depredador. Necesita protectores. Cuando los protectores fallan (Malenia debilitada por Caelid), el proyecto colapsa.'
      ),
      h(2, 'Conexiones internas', 'conexiones'),
      p(
        'Su gemela es ',
        link('Malenia', 'character', 'malenia'),
        '. Su árbol es el ',
        link('Haligtree', 'region', 'haligtree'),
        '. Su tecnología es el ',
        link('Oro sin Aleación', 'concept', 'unalloyed-gold'),
        '. Su secuestrador es ',
        link('Mohg', 'character', 'mohg'),
        ', que lo trajo a ',
        link('Mohgwyn', 'region', 'mohgwyn'),
        '.'
      )
    ],
    confirmed: [
      'Miquella es Empyrean, gemelo de Malenia, hijo de Marika y Radagon',
      'Maldecido a no poder crecer físicamente',
      'Creó el Haligtree como refugio',
      'Desarrolló el Oro sin Aleación contra los dioses exteriores',
      'Fabricó las prótesis y agujas curativas de Malenia',
      'Durmió en un capullo dorado de Oro sin Aleación',
      'Fue secuestrado por Mohg durante el sueño'
    ],
    inferred: [
      'Su proyecto era el más radical de las Tierras Intermedias: cosmos sin dioses parásitos',
      'Iba a despertar como dios completo, fuera del control de la Voluntad Mayor',
      'Su sueño fue posible porque confiaba en Malenia como su escudo',
      'El capullo dorado lo protege incluso del rito sangriento de Mohgwyn'
    ],
    theories: [
      'El sueño en el capullo era preparación deliberada para abandonar el rol Empyrean impuesto',
      'Su Oro sin Aleación amenazaba a la Voluntad Mayor tanto como a los dioses exteriores',
      'Su despertar habría producido una era cosmológica enteramente sin dioses cercanos — una versión cálida de la Era de las Estrellas',
      'Marika sabía del proyecto y lo aprobaba secretamente'
    ],
    ambiguous: [
      'Si Miquella conserva alguna conciencia durante el secuestro',
      'Si su despertar habría sido benigno o autoritario en su propio modo',
      'Si su capullo realmente lo protege o solo desplaza el sufrimiento',
      'Si su proyecto era completable cosmológicamente o solo aspiracional'
    ],
    beneficiaries:
      'Albinaurics y Misbegotten, refugiados bajo el Haligtree. Cualquiera infectado por dios exterior, candidato a sus agujas curativas. Malenia, parcialmente curada gracias a su trabajo.',
    victims:
      'Su gemela Malenia, dejada incompleta y vigilando un capullo vacío. Los habitantes del Haligtree, eventualmente arrasados tras el secuestro. Y el propio Miquella, dormido sin saber que su proyecto pende de una posibilidad cada vez más improbable.',
    relatedCharacters: ['malenia', 'marika', 'radagon', 'mohg', 'millicent'],
    relatedFactions: ['cleanrot-knights', 'albinauricos', 'misbegotten'],
    relatedRegions: ['haligtree', 'consecrated-snowfield', 'mohgwyn'],
    relatedConcepts: ['unalloyed-gold', 'empyrean', 'dioses-exteriores'],
    relatedTimelineEvents: ['miquella-malenia', 'demidioses-fractura'],
  },

  /* ════════════════════════════════ MALIKETH ════════════════════════════════ */
  maliketh: {
    summary:
      'Maliketh la Hoja Negra, Hombre-Bestia de raza primigenia, fue ligado en sombra a Marika como su Bestia Sombra. Aceptó el rol más doloroso del cosmos: contener la Muerte Predestinada dentro de su propio cuerpo, para que la era dorada pudiera existir. Su servicio es indistinguible de su tortura.',
    deepLore: [
      h(2, 'Resumen esencial', 'resumen'),
      p(
        'Maliketh es la fidelidad llevada al extremo del autosacrificio. Antes de la era dorada existía como guerrero Hombre-Bestia primigenio, capaz de blandir la ',
        link('Llama Negra', 'concept', 'black-flame'),
        ' y derrotar a Empyreans. Tras servir a Marika como ',
        link('Bestia ligada en sombra', 'concept', 'shadow-bound-beast'),
        ', aceptó cargar dentro de su cuerpo la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ' — la cosa más insoportable del cosmos. Su existencia desde entonces es jaula: cualquier herida abierta filtra muerte real al mundo.'
      ),
      h(2, 'Rol en el mundo', 'rol'),
      p(
        'Maliketh tiene cuatro roles cosmológicos. Como ',
        em('Bestia Sombra'),
        ' es guardián personal de Marika. Como ',
        em('verdugo'),
        ' fue quien derrotó a la Reina de Ojos Crepusculares y selló su llama. Como ',
        em('contenedor'),
        ' alberga la Runa de la Muerte. Como ',
        em('Gurranq'),
        ' (su alias en una vertiente de su existencia post-fractura) atiende rituales sagrados de la deathroot en el Bestial Sanctum, intentando inútilmente comer la corrupción que él mismo dejó escapar al ser robado por Ranni.'
      ),
      h(2, 'Historia detallada', 'historia'),
      p(
        'Su prehistoria como Hombre-Bestia es relevante: era un guerrero capaz, conocedor de la ',
        link('Llama Negra', 'concept', 'black-flame'),
        ' que en su tiempo era usada para asesinar dioses. Cuando la Voluntad Mayor eligió a Marika como nueva vasija del Anillo, Maliketh fue ligado a ella como Bestia Sombra. Su primer gran acto bajo este rol: derrotar a la ',
        link('Reina de Ojos Crepusculares', 'character', 'gloam-eyed-queen'),
        ' que regía la era anterior. Su Black Blade — la espada que blande — está forjada en parte con la propia llama negra, una ironía simbólica de quien usa el arma de los herejes contra ellos mismos.'
      ),
      p(
        'Tras la victoria, Marika necesitó sellar la Muerte Predestinada para iniciar la era dorada. La solución fue brutal: cosérsela al alma de Maliketh. La Runa de la Muerte vive desde entonces dentro de su cuerpo. Esto lo convierte en prisión viva — y en blanco. Sus heridas, cada vez que es golpeado en combate, filtran muerte parcial al cosmos.'
      ),
      p(
        'El robo de Ranni — antes de la Noche de los Cuchillos Negros — abrió en su cuerpo una herida cosmológica permanente. La mecha robada se convirtió en las hojas Cuchillo Negro. Maliketh, traicionado por su contrapuerta Empyrean ligada en sombra, retiró su servicio activo del Orden Dorado y se exilió a ',
        link('Farum Azula', 'region', 'farum-azula'),
        ', la ciudadela atemporal donde podía esconder la herida.'
      ),
      p(
        'Bajo el alias de Gurranq, oficia rituales en el Bestial Sanctum: come deathroot ofrecida por peregrinos, intentando absorber de vuelta lo que se le escapó. La quest de Gurranq es el aspecto más vulnerable de Maliketh: un Hombre-Bestia descomunal pidiendo ofrendas, hambriento de su propio fracaso.'
      ),
      p(
        'Cuando el Tarnished lo enfrenta en Farum Azula, Maliketh se transforma en su forma final: la ',
        em('Bestia de la Muerte Negra'),
        '. Es desesperación, no orgullo. Sabe que perder libera la Muerte que ha contenido durante eras. Acepta perder. Su muerte es el evento que cierra la herida de Godwyn y permite la ',
        link('Era del Crepúsculo', 'ending', 'duskborn'),
        '.'
      ),
      h(2, 'Motivaciones', 'motivaciones'),
      p(
        'Maliketh nunca se cuestiona. Su existencia es servicio absoluto — primero a Marika, luego a la causa de contener la Muerte. Su tortura es estructural, no auto-impuesta: él no eligió cargar la Runa, le fue cosida. Pero cumple sin queja. Su lealtad excede toda elección emocional.'
      ),
      p(
        'Su único momento de respuesta personal aparece como Gurranq, hambriento de deathroot. Es lo más cercano a "deseo" que mostrará: comer la corrupción para deshacer su propio fracaso. Es servicio incluso en la angustia.'
      ),
      h(2, 'Relaciones importantes', 'relaciones'),
      p(
        'Su Empyrean ligada en sombra es ',
        link('Marika', 'character', 'marika'),
        '. Su víctima primaria fue ',
        link('Gloam-Eyed Queen', 'character', 'gloam-eyed-queen'),
        '. Su traicionera es ',
        link('Ranni', 'character', 'ranni'),
        '. Su criatura derivada (creada para servir a Ranni como Bestia Sombra) es ',
        link('Blaidd', 'character', 'blaidd'),
        '. Sus peregrinos suplicantes en Bestial Sanctum son seguidores de ',
        link('Aquellos que Viven en la Muerte', 'faction', 'those-who-live-in-death'),
        ' que buscan paz.'
      ),
      h(2, 'Eventos clave', 'eventos'),
      ol(
        'Vinculación a Marika como Bestia Sombra.',
        'Derrota de la Gloam-Eyed Queen.',
        'Sello de la Muerte Predestinada en su cuerpo.',
        'Robo de la mecha por Ranni.',
        'Exilio a Farum Azula.',
        'Asunción del alias Gurranq.',
        'Apertura del Bestial Sanctum.',
        'Devoración de deathroot ofrecida.',
        'Lucha final contra el Tarnished.',
        'Liberación de la Muerte al cosmos.'
      ),
      h(2, 'Consecuencias', 'consecuencias'),
      p(
        'Su servicio sostuvo el Orden Dorado durante eras. Su robo permitió la Noche de los Cuchillos Negros. Su muerte libera la Muerte Predestinada. La Era del Crepúsculo es el final que su sacrificio finalmente permite. Sin Maliketh, el régimen no habría existido; sin su muerte, no podría terminar limpiamente.'
      ),
      h(2, 'Simbolismo e interpretación temática', 'simbolismo'),
      p(
        'Maliketh es la prisión viva. Su existencia interroga la pregunta: ¿es ético construir un sistema cuya estructura requiere que un ser cargue eternamente con el sufrimiento por todos los demás? La respuesta del juego es ambigua: el sistema funcionó, pero a costa de Maliketh. Su liberación final es uno de los actos más misericordiosos del Tarnished, aunque parezca violencia.'
      ),
      h(2, 'Conexiones internas', 'conexiones'),
      p(
        'Su Empyrean es ',
        link('Marika', 'character', 'marika'),
        '. Su carga es la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        '. Su exilio es ',
        link('Farum Azula', 'region', 'farum-azula'),
        '. Su raza son los ',
        link('Hombres-Bestia', 'faction', 'hombres-bestia'),
        '. Su criatura sucesora es ',
        link('Blaidd', 'character', 'blaidd'),
        '. Su muerte habilita la ',
        link('Era del Crepúsculo', 'ending', 'duskborn'),
        '.'
      )
    ],
    confirmed: [
      'Maliketh es Hombre-Bestia, hermano-sombra de Marika',
      'Lleva la Runa de la Muerte cosida en su cuerpo',
      'Derrotó a la Gloam-Eyed Queen para iniciar la era dorada',
      'Su Black Blade está forjada en parte con Llama Negra',
      'Una mecha de la Runa fue robada por Ranni para fabricar los Cuchillos Negros',
      'Como Gurranq atiende el Bestial Sanctum y come deathroot ofrecida',
      'Su derrota libera la Muerte Predestinada al cosmos'
    ],
    inferred: [
      'Su servicio es indistinguible de su tortura cosmológica',
      'Su transformación en Bestia de la Muerte Negra es desesperación, no orgullo',
      'Su rol como Gurranq es intento parcial de deshacer su propio fracaso',
      'Conoció el robo de Ranni mucho después del hecho — su exilio a Farum Azula es respuesta'
    ],
    theories: [
      'Su raza Hombre-Bestia es residuo del Crisol primigenio: hermanos genéticos de Blaidd y los Beastmen de Farum Azula',
      'La Llama Negra que usa procede de su rivalidad con la Gloam-Eyed Queen — al matarla, absorbió parte de su poder',
      'Su exilio a Farum Azula no es solo escondite: la atemporalidad de la ciudadela retrasa la fuga de muerte de su cuerpo',
      'Su decisión de aceptar la derrota en su pelea final es voluntaria — sabe que el cosmos necesita la Muerte de regreso'
    ],
    ambiguous: [
      'Si Maliketh experimenta algo parecido a la libertad o solo al deber',
      'Si conoció el robo de Ranni en su momento o solo al final',
      'Cuál es la relación exacta entre su raza y los Hombres-Bestia primordiales del Crisol',
      'Si su lealtad a Marika sobrevive a la fractura del Anillo'
    ],
    beneficiaries:
      'Marika, durante toda la era dorada. El Orden Dorado, sostenido por su sacrificio. La Voluntad Mayor. Los Tarnished que pueden ahora elegir el destino del cosmos por su muerte voluntaria.',
    victims:
      'Maliketh mismo, prisión viva. Godwyn, asesinado con un fragmento de su carga. Aquellos que Viven en la Muerte, hijos de la fuga parcial. La Gloam-Eyed Queen, derrotada.',
    relatedCharacters: ['marika', 'godwyn', 'ranni', 'gloam-eyed-queen', 'blaidd'],
    relatedFactions: ['hombres-bestia', 'cuchillos-negros'],
    relatedRegions: ['farum-azula'],
    relatedConcepts: ['destined-death', 'rune-of-death', 'shadow-bound-beast', 'black-flame', 'deathroot'],
    relatedTimelineEvents: ['era-antigua', 'muerte-predestinada', 'ranni-noche-cuchillos'],
    relatedEndings: ['duskborn'],
  },

  /* ════════════════════════════════ MELINA ════════════════════════════════ */
  melina: {
    slug: 'melina',
    subtitle: 'La de Ojo Cerrado · Doncella sin tumba · Llama designada del Árbol Áureo',
    summary:
      'Melina es la guía espectral del Tarnished, doncella sustituta sin pasado registrado y portadora de una promesa que sólo cumple si el viaje llega hasta la pira. Su origen no se enuncia: se infiere. Su madre — implícitamente Marika — la concibió incompleta y le confió un propósito doloroso: convertirse en la antorcha que prende el Árbol Áureo para abrir el camino al trono.',
    deepLore: [
      h(2, 'Resumen esencial', 'resumen'),
      p(
        'Melina aparece en el viaje del ',
        link('Tarnished', 'concept', 'tarnished'),
        ' sin proclamar su nombre completo, sin tumba, sin patria visible. Se ofrece como doncella sustituta tras la pérdida de la doncella original del Tarnished, y a cambio convierte las runas obtenidas en niveles. Su pacto, sin embargo, oculta una segunda cláusula: cuando el árbol rechace al aspirante en su entrada, ella misma será la llama que lo prenda.'
      ),
      p(
        'Su misterio es deliberado. Cada texto que la menciona la describe en términos de incompletitud: ojo cerrado, "una madre que no existe", propósito "incompleto" o "encomendado" pero nunca explicado del todo. Es el personaje más explícitamente ambiguo del juego base.'
      ),
      h(2, 'Rol en el mundo', 'rol'),
      p(
        'Melina cumple cuatro funciones simultáneas durante el viaje del Tarnished. Como ',
        em('doncella sustituta'),
        ' suple el rol cosmológico de la doncella perdida en el preámbulo del juego, permitiendo el intercambio de runas por niveles. Como ',
        em('guía'),
        ' acompaña al Tarnished a la Mesa Redonda y comparte fragmentos de saber. Como ',
        em('intérprete del Árbol Áureo'),
        ' percibe cuando el árbol acepta o rechaza al aspirante. Y, finalmente, como ',
        em('llama'),
        ' arde para abrir el camino al trono cuando el árbol cierra sus raíces.'
      ),
      h(2, 'Historia detallada', 'historia'),
      p(
        'El juego base no relata su historia previa: la presenta in medias res. Lo que sí afirma es que despertó "junto al ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        '" y que cumple un encargo dado por su madre ausente. La identidad de esa madre nunca se enuncia, pero las pistas — el lugar de su despertar, su afinidad por la pira, su capacidad de prender el árbol — apuntan a ',
        link('Marika', 'character', 'marika'),
        ' como progenitora implícita. La frase clave de Melina cuando se aproxima a su sacrificio menciona explícitamente "el destino de los dioses" como si fuera el suyo propio.'
      ),
      p(
        'Durante el viaje colabora con varios momentos clave. Provee a Torrent — la cabra-corcel espectral — al Tarnished, regalo que parece extender el alcance de la gracia hasta más allá de las restricciones del Árbol Áureo. Encuentra al Tarnished en cada Sitio de Gracia importante, normalmente cuando el viaje toma un giro cosmológico. Tras la conquista de las primeras Grandes Runas le advierte que el árbol no permitirá la entrada hasta que sea consumido por una llama capaz de quemarlo.'
      ),
      p(
        'En las ',
        link('Mountaintops de los Gigantes', 'region', 'mountaintops'),
        ', Melina se inmola en la pira ritual de la Llama Quemadora — la llama hostil al Árbol Áureo custodiada por el último Gigante del Fuego, restos del culto al Fell God que el Orden casi exterminó. Su sacrificio prende el árbol entero, abriendo el camino al trono. Si el Tarnished llega a este punto sin haber abrazado la ',
        link('Llama Frenética', 'concept', 'frenzied-flame'),
        ', Melina es la portadora ritual de la llama. Si el Tarnished ya pactó con los Tres Dedos, Melina rompe el pacto y desaparece del viaje — y el árbol se quema solo, devorado por el fuego nihilista.'
      ),
      p(
        'En el final de la Llama Frenética, una voz femenina jura desde la oscuridad volver con un cuchillo a buscar al Señor del Fin. Esa voz se atribuye a Melina, sobreviviente, ahora antagonista vengativa. El juego base no muestra ese encuentro — sólo lo promete.'
      ),
      h(2, 'Motivaciones', 'motivaciones'),
      p(
        'Las motivaciones explícitas de Melina son dos. La primera, dada por su madre: cumplir el rol que se le encomendó. La segunda, propia: acompañar al Tarnished hasta el final y darle "el regalo de la sangre, las lágrimas y la muerte". Esta última frase — pronunciada antes de su inmolación — sugiere que ella entiende su función como un don, no como una imposición.'
      ),
      p(
        'Su afecto por el Tarnished parece genuino. No lo manipula con promesas; no lo guía hacia un final particular; no lo presiona. Le entrega Torrent sin condiciones. Comparte sus dudas sobre el Árbol Áureo con honestidad. Cuando el Tarnished acepta la Llama Frenética, su única reacción es marcharse: no maldice ni amenaza durante el juego, sólo lamenta el camino tomado.'
      ),
      p(
        'La hipótesis más sostenida: Melina existe explícitamente para acompañar a un agente externo (el Tarnished) hasta la posición desde la cual ese agente pueda elegir el destino del cosmos. Su madre — quienquiera que sea — la diseñó como instrumento generoso. Su único acto autónomo es elegir cómo arder.'
      ),
      h(2, 'Relaciones importantes', 'relaciones'),
      p(
        'Su madre implícita es ',
        link('Marika', 'character', 'marika'),
        '. Su compañero y heredero del rol de Señor Elden es el ',
        link('Tarnished', 'concept', 'tarnished'),
        '. Sus antagonistas teológicos son los Tres Dedos y, por extensión, ',
        link('Hyetta', 'character', 'hyetta'),
        ' (víctima frenética) y ',
        link('Shabriri', 'character', 'shabriri'),
        ' (proselitista). Sus aliados involuntarios son los Dos Dedos en la Mesa Redonda, ',
        link('Enia', 'character', 'enia'),
        ' como Doncella de Dedos y los Pastores como ',
        link('Brother Corhyn', 'character', 'corhyn'),
        '.'
      ),
      h(2, 'Eventos clave', 'eventos'),
      ol(
        'Encuentro inicial en el Sitio de Gracia inaugural.',
        'Donación de Torrent.',
        'Llegada conjunta a la Mesa Redonda.',
        'Advertencia sobre el rechazo del Árbol Áureo.',
        'Subida a las Mountaintops.',
        'Inmolación ritual en la pira de la Llama Quemadora.',
        'Quema del Árbol Áureo.',
        '(Ruta Llama Frenética) Abandono del Tarnished y juramento de venganza desde la oscuridad.'
      ),
      h(2, 'Consecuencias', 'consecuencias'),
      p(
        'Sin Melina, el Tarnished no podría llegar al trono Elden. Su sacrificio es la condición material de cinco de los seis finales: sólo la Llama Frenética prescinde de su rol como antorcha — y a un precio simétrico, su pérdida y su retorno como némesis. Su existencia documenta también la posibilidad de hijos cosmológicos no-listados oficialmente: si Marika engendró a Melina sin que el Orden Dorado la registrase, otras emanaciones similares pueden existir y haber sido borradas de la historia oficial.'
      ),
      h(2, 'Simbolismo e interpretación temática', 'simbolismo'),
      p(
        'Melina es la generosidad cosmológica encarnada en cuerpo de doncella. Su ojo cerrado simboliza incompletitud aceptada: hay una mitad de su ser que falta y ella ha dejado de buscarla. Su sacrificio voluntario no es un castigo divino — es la última coherencia disponible para un ser hecho con un solo propósito. Cuando el Tarnished abraza la Llama Frenética, Melina no falla en sí misma; lo que falla es la posibilidad de que su don tenga sentido. De ahí que su "venganza" prometida desde la oscuridad sea menos amenaza y más duelo: ya no puede aceptar el camino del Tarnished, pero tampoco puede dejar de existir hasta que el daño se sane.'
      ),
      h(2, 'Conexiones internas', 'conexiones'),
      p(
        'Inseparable de ',
        link('Marika', 'character', 'marika'),
        ' como madre implícita, del ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' como objeto de su sacrificio, y del Tarnished como su confidente final. Su antítesis es la ',
        link('Llama Frenética', 'concept', 'frenzied-flame'),
        '. Su escenario final son las ',
        link('Mountaintops', 'region', 'mountaintops'),
        '. Su pira es alimentada por la llama hostil que custodiaban los ',
        link('Fire Giants', 'faction', 'fire-giants'),
        '.'
      )
    ],
    confirmed: [
      'Melina aparece sin pasado registrado y se ofrece como doncella sustituta del Tarnished',
      'Permite la conversión de runas en niveles dentro de los Sitios de Gracia',
      'Dona Torrent al Tarnished',
      'Su sacrificio en las Mountaintops prende el Árbol Áureo con la Llama Quemadora',
      'Si el Tarnished abraza la Llama Frenética, Melina lo abandona',
      'Su discurso final menciona explícitamente "el destino de los dioses" como propio'
    ],
    inferred: [
      'Su madre es Marika — su despertar junto al Árbol Áureo y su capacidad de prenderlo lo sostienen',
      'Es una hija no nacida o emanación incompleta, no una hija oficial registrada',
      'Su ojo cerrado es expresión de su incompletitud cosmológica, no afección física',
      'Su afecto por el Tarnished es genuino y no estratégico',
      'Su rol fue diseñado específicamente para acompañar a un agente exterior al cosmos hasta el trono'
    ],
    theories: [
      'Melina es la "Doncella Quemada" original del lore antiguo del Árbol Áureo, reencarnada para esta era',
      'Es la voz femenina que jura volver con un cuchillo en el final de la Llama Frenética: superviviente, no muerta',
      'Su nombre no se enuncia porque es alias — su identidad real es secreto guardado por Marika misma',
      'Su relación con Marika es similar a la de Maliketh: ligada en sombra como acompañante cosmológica'
    ],
    ambiguous: [
      'Si Melina conserva conciencia tras inmolarse en la pira',
      'Si la "venganza" prometida en el final frenético es amenaza real o duelo cosmológico',
      'Si su sacrificio es destino impuesto o elección plenamente libre',
      'Si su ojo cerrado oculta algo específico (otra alma, otra visión) o sólo simboliza ausencia',
      'Si Marika la conoce y la ha "enviado" al Tarnished, o si Melina actúa por iniciativa propia bajo instrucciones antiguas'
    ],
    beneficiaries:
      'El Tarnished, sostenido por su acompañamiento. La Voluntad Mayor, gracias a su sacrificio en la quema del árbol. Cualquier final del juego que no sea la Llama Frenética: todos dependen materialmente de su pira.',
    victims:
      'Melina misma, autoinmolada por un encargo que ella no eligió completamente. El cosmos del final de la Llama Frenética, donde su venganza se prepara desde la oscuridad. La memoria oficial del Orden Dorado, que jamás la registró.',
    relatedCharacters: ['marika', 'godfrey', 'hyetta', 'shabriri', 'enia', 'corhyn'],
    relatedFactions: ['orden-dorado', 'fire-giants', 'tres-dedos'],
    relatedRegions: ['leyndell', 'mountaintops'],
    relatedConcepts: ['erdtree', 'tarnished', 'grace', 'frenzied-flame', 'voluntad-mayor'],
    relatedTimelineEvents: ['viaje-mancillado', 'erdtree-quemado', 'finales'],
    relatedEndings: ['fracture', 'order', 'duskborn', 'frenzied-flame', 'age-of-stars'],
  },

  /* ═══════════════════════════ GLOAM-EYED QUEEN ═══════════════════════════ */
  'gloam-eyed-queen': {
    slug: 'gloam-eyed-queen',
    subtitle: 'Reina Empyrean de la era previa · Custodia de la Llama Negra · Madre olvidada de los Pieles de Dios',
    summary:
      'La Reina de Ojos Crepusculares fue Empyrean en una era cosmológica anterior al Orden Dorado, cuando la verdadera muerte aún funcionaba en las Tierras Intermedias y la Llama Negra podía consumir incluso a los dioses. Maliketh la derrotó y selló la Muerte Predestinada. Su régimen fue tachado del registro oficial; sus apóstoles, los Pieles de Dios, sobrevivieron en sectas perseguidas que aún recuerdan su nombre.',
    deepLore: [
      h(2, 'Resumen esencial', 'resumen'),
      p(
        'La Reina es el rastro humano de la era inmediatamente anterior al Orden Dorado. Empyrean ungida por una voluntad cósmica anterior a la Voluntad Mayor — o por la propia Voluntad Mayor, en una iteración previa de su política — gobernó un cosmos donde la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ' aún corría libre y los dioses podían ser asesinados. Su arma teológica era la ',
        link('Llama Negra', 'concept', 'black-flame'),
        ', otorgada a sus apóstoles, los ',
        link('Pieles de Dios', 'faction', 'pieles-de-dios'),
        '.'
      ),
      h(2, 'Rol en el mundo', 'rol'),
      p(
        'Su rol fue triple. Como ',
        em('Empyrean'),
        ' constituía la vasija humana del régimen anterior, equivalente cosmológica a lo que Marika es hoy. Como ',
        em('legisladora'),
        ' instituyó leyes en torno a la muerte real — su orden incluía rituales funerarios elaborados, ',
        link('Ghostflame', 'concept', 'ghostflame'),
        ' como llama de cremación, jerarquías sacerdotales hoy fragmentarias. Como ',
        em('contraparte teológica'),
        ' de cualquier futuro régimen, instaló la Llama Negra como herramienta capaz de matar dioses, lo cual la convertiría eventualmente en amenaza absoluta para Marika.'
      ),
      h(2, 'Historia detallada', 'historia'),
      p(
        'No se sabe cuándo ascendió al trono Empyrean ni quién la designó. Las inferencias razonables: la Voluntad Mayor (o un dios externo equivalente) la eligió como vasija humana en algún momento posterior a la era de los Antiguos Dragones de ',
        link('Placidusax', 'character', 'placidusax'),
        '. Su régimen pudo ser una transición intermedia, no la primera era humana; las cosmologías de las Tierras Intermedias sugieren capas múltiples de civilización antes del Orden Dorado.'
      ),
      p(
        'Durante su tiempo, la Muerte Predestinada operaba como ley natural: los seres morían cuando les correspondía, sus almas eran procesadas mediante rituales de Ghostflame y Deathbird, y la cosmología no requería sello alguno. La existencia misma de los rituales antiguos de muerte que el juego presenta como anticuados (catacumbas, Ghostflame, Deathbirds gigantes) es la huella material de su orden.'
      ),
      p(
        'Cuando ',
        link('Marika', 'character', 'marika'),
        ' fue elevada como nueva vasija — sea por la misma Voluntad Mayor en una jugada de sucesión, sea por una entidad rival — la Reina se convirtió en obstáculo. Para iniciar la era dorada, Marika necesitaba sellar la Muerte Predestinada; pero la Reina y sus Pieles de Dios eran sus custodios visibles. La solución fue marcial: ',
        link('Maliketh', 'character', 'maliketh'),
        ', Bestia Sombra recién ligada a Marika, fue enviado a derrotarla.'
      ),
      p(
        'Maliketh la venció. La Reina cayó. La Llama Negra, su arma, paradójicamente sobrevivió en parte porque Maliketh mismo la incorporó a su propia Hoja Negra — el arma de Maliketh contiene fragmentos de la llama herética que él mismo había derrotado. Tras la victoria, Marika selló la Muerte Predestinada cosiéndola al alma de Maliketh, y el régimen del Orden Dorado quedó instalado.'
      ),
      p(
        'Los Pieles de Dios sobrevivieron como secta perseguida. Sus apóstoles continúan practicando la Llama Negra siglos después. Cada uno conserva — en sus oraciones, en sus rituales, en los textos de sus armas — el nombre de la Reina como recordatorio de un orden anterior. Ni Marika ni los Dos Dedos lograron jamás exterminarlos del todo.'
      ),
      h(2, 'Motivaciones', 'motivaciones'),
      p(
        'Las motivaciones de la Reina son objeto de pura inferencia. El juego base no reproduce ninguna de sus palabras directamente. Las hipótesis razonables son tres: ',
        strong('preservación del orden'),
        ' (defendía un cosmos funcional con muerte real); ',
        strong('rebeldía teológica'),
        ' (la Llama Negra era amenaza activa contra las ambiciones de la Voluntad Mayor); o ',
        strong('inercia divina'),
        ' (era simplemente la vasija de su tiempo, sin política propia más allá de su rol asignado).'
      ),
      p(
        'Lo que sí es claro es que la dotación de la Llama Negra a sus apóstoles fue acto deliberado, no accidente. Distribuir un arma capaz de matar dioses es una declaración política, no un don casual. La pregunta abierta es contra qué dios estaba prevista esa llama originalmente.'
      ),
      h(2, 'Relaciones importantes', 'relaciones'),
      p(
        'Su sucesora cosmológica es ',
        link('Marika', 'character', 'marika'),
        '. Su verdugo es ',
        link('Maliketh', 'character', 'maliketh'),
        '. Sus apóstoles supervivientes son los ',
        link('Pieles de Dios', 'faction', 'pieles-de-dios'),
        '. Su contraparte cosmológica latente — porque comparten el rol de Empyrean — es ',
        link('Ranni', 'character', 'ranni'),
        ', cuyo rechazo del régimen actual ecoa el destino que la Reina sufrió.'
      ),
      h(2, 'Eventos clave', 'eventos'),
      ol(
        'Ascensión como Empyrean del régimen previo.',
        'Distribución de la Llama Negra a los Pieles de Dios.',
        'Establecimiento de los rituales antiguos de muerte (Ghostflame, Deathbirds).',
        'Conflicto con Marika ascendente.',
        'Derrota a manos de Maliketh.',
        'Sello posterior de la Muerte Predestinada.',
        'Persecución de los Pieles de Dios por el nuevo régimen.'
      ),
      h(2, 'Consecuencias', 'consecuencias'),
      p(
        'Su derrota habilitó el Orden Dorado entero. La Llama Negra absorbida por Maliketh se convirtió en parte de la Hoja Negra: paradoja simbólica de que el arma de la herejía vencida es ahora arma del verdugo. Los Pieles de Dios persisten como recordatorio: ningún orden cosmológico exterminó nunca a sus predecesores del todo. Su mera supervivencia es prueba de que el actual régimen es contingente, no eterno.'
      ),
      h(2, 'Simbolismo e interpretación temática', 'simbolismo'),
      p(
        'La Reina representa la temporalidad de los regímenes cosmológicos. Cada era se considera definitiva mientras dura; cada caída demuestra que no lo era. Su nombre — "Ojos Crepusculares" — es contraparte deliberada de los "Ojos Dorados" de la era posterior (la frase asociada a Godwyn). Donde el oro es alba y consumación, el crepúsculo es transición e incertidumbre. La Reina encarna esa segunda categoría: gobernó en el filo entre épocas y fue devorada por la siguiente.'
      ),
      h(2, 'Conexiones internas', 'conexiones'),
      p(
        'Su escenario son las épocas anteriores documentadas en el ',
        link('Era Antigua', 'timeline', 'era-antigua'),
        '. Su llama legó la ',
        link('Llama Negra', 'concept', 'black-flame'),
        '. Sus apóstoles son los ',
        link('Pieles de Dios', 'faction', 'pieles-de-dios'),
        '. Su verdugo cosmológico es ',
        link('Maliketh', 'character', 'maliketh'),
        '. Su sucesora es ',
        link('Marika', 'character', 'marika'),
        '.'
      )
    ],
    confirmed: [
      'Fue Empyrean en una era previa al Orden Dorado',
      'Otorgó la Llama Negra a los Pieles de Dios',
      'Fue derrotada por Maliketh antes del sello de la Muerte Predestinada',
      'Los Pieles de Dios sobreviven como secta perseguida que conserva su nombre y sus rituales',
      'La Hoja Negra de Maliketh integra fragmentos de la Llama Negra que ella legó'
    ],
    inferred: [
      'Su régimen tenía leyes funerarias funcionales basadas en Ghostflame y Deathbirds',
      'La Muerte Predestinada operaba libremente bajo su orden',
      'Su derrota fue precondición técnica del Orden Dorado',
      'Su distribución de la Llama Negra fue acto político, no don accidental',
      'Los Pieles de Dios actuales conservan rituales clandestinos en su nombre'
    ],
    theories: [
      'La Reina fue Empyrean de la propia Voluntad Mayor — Marika la sustituyó como nueva vasija dentro del mismo contrato',
      'Su Llama Negra estaba dirigida originalmente contra los dioses externos rivales, no contra el Orden por venir',
      'Su nombre "crepuscular" indica que reinó entre dos eras: era ya de transición cuando cayó',
      'Su muerte no fue completa — fragmentos de su voluntad sobreviven en cada apóstol Piel de Dios activo',
      'Los Deathbirds que rondan las Tierras Intermedias actuales son reliquias rituales de su clero, no enemigos olvidados'
    ],
    ambiguous: [
      'Su nombre verdadero, su forma física exacta, su origen pre-Empyrean',
      'Si la Llama Negra precede a ella o fue creación específica de su régimen',
      'Si fue derrotada en una sola batalla o en una guerra prolongada',
      'Si Marika dirigió personalmente la operación o sólo aprobó el resultado',
      'Si la persecución continua de los Pieles de Dios indica que sigue siendo amenaza activa'
    ],
    beneficiaries:
      'Marika, que pudo instalarse como nueva vasija tras su caída. La Voluntad Mayor, sea como agente activo o pasivo del cambio. Maliketh, que absorbió parte de su llama para forjar la Hoja Negra.',
    victims:
      'Los Pieles de Dios, perseguidos pero supervivientes. La memoria oficial de la era previa, borrada de los registros del Árbol Áureo. La cosmología funcional de la muerte real, sustituida por la inmortalidad forzada del Orden Dorado.',
    relatedCharacters: ['maliketh', 'marika', 'placidusax'],
    relatedFactions: ['pieles-de-dios'],
    relatedRegions: ['farum-azula'],
    relatedConcepts: ['empyrean', 'black-flame', 'destined-death', 'ghostflame'],
    relatedTimelineEvents: ['era-antigua', 'muerte-predestinada'],
  },

  /* ════════════════════════════════ RENNALA ════════════════════════════════ */
  rennala: {
    slug: 'rennala',
    subtitle: 'Reina de la Luna Llena · Gran Maestra de Raya Lucaria · Madre abandonada de tres demidioses',
    summary:
      'Rennala fue Gran Maestra de la Academia de Raya Lucaria y reina del clan Caria, hechicera más refinada de las Tierras Intermedias antes de la fractura. Su matrimonio con Radagon como gesto de paz tras la guerra de Liurnia produjo a Ranni, Radahn y Rykard. Cuando Radagon la abandonó para volver a Marika, Rennala colapsó: hoy hechiza eternamente al Amber Egg que él le dejó, creyendo que cada nuevo demidiós es un hijo recién nacido.',
    deepLore: [
      h(2, 'Resumen esencial', 'resumen'),
      p(
        'Rennala es la tragedia de las Tierras Intermedias que el régimen no necesitó construir: simplemente le pasó. Era reina-hechicera plena, líder espiritual y académica de toda Liurnia, y su caída no fue cosmológica sino emocional — el abandono de un esposo. Que ese abandono haya destruido a una de las mentes más sofisticadas del cosmos es prueba de que ningún rango protege del duelo individual.'
      ),
      h(2, 'Rol en el mundo', 'rol'),
      p(
        'Antes de su caída cumplió simultáneamente tres roles enormes. Como ',
        em('Reina'),
        ' del clan ',
        link('Caria', 'faction', 'caria'),
        ' encabezaba la dinastía mestiza posterior a la guerra. Como ',
        em('Gran Maestra'),
        ' de ',
        link('Raya Lucaria', 'region', 'raya-lucaria'),
        ' dirigía la institución académica más prestigiosa de las Tierras Intermedias. Como ',
        em('madre'),
        ' de tres demidioses (',
        link('Ranni', 'character', 'ranni'),
        ', ',
        link('Radahn', 'character', 'radahn'),
        ', ',
        link('Rykard', 'character', 'rykard'),
        ') era el origen biológico de tres respuestas distintas al cosmos: rebelión filosófica, fidelidad militar, blasfemia institucional.'
      ),
      h(2, 'Historia detallada', 'historia'),
      p(
        'Su origen exacto en Liurnia no se documenta, pero su prestigio se anuncia desde el principio: era la mayor hechicera viva de las Tierras Intermedias, dominadora de la Magia de la Luna Llena, custodia del Gran Amber Egg cuya función ritual sigue siendo objeto de inferencia. Su título de "Reina de la Luna Llena" no es metáfora literaria: la luna llena de la familia Caria era su signo cosmológico personal, distinto de la luna oscura que su hija Ranni eventualmente forjaría como inversión.'
      ),
      p(
        'El matrimonio con ',
        link('Radagon', 'character', 'radagon'),
        ' tras la guerra contra Liurnia fue contrato político: paz a cambio de unión. Pero ambos parecen haberse amado de modo genuino. Sus tres hijos crecieron en la Academia y en el palacio Caria. Ranni — Empyrean designada — heredó la sofisticación intelectual; Radahn la fuerza marcial y la fidelidad al ideal del rey guerrero (sobre todo a Godfrey, su modelo simbólico); Rykard la autoridad institucional que después se convertiría en blasfemia.'
      ),
      p(
        'Cuando Marika llamó a Radagon de regreso a Leyndell — porque Godfrey había sido exiliado y la Voluntad Mayor exigía consorte — Radagon partió. Le dejó como prenda de despedida un Amber Egg, símbolo de los nacimientos divinos. La interpretación más oscura: Radagon ya sabía o sospechaba que volver a Marika implicaba reabsorberse en su otra mitad. El egg era todo lo que quedaba para Rennala.'
      ),
      p(
        'Tras la partida, un académico llamado Lazuli Conspector regresó del más allá con la maldición del Renacimiento. Por compasión o por crueldad, se la entregó a Rennala. Desde entonces Rennala usa esa maldición para "renacer" su propio Amber Egg en bucle infinito, abrazándolo como si fuera un bebé que nunca llega. La función accidental que esto le da — los Tarnished pueden usar a Rennala para reorganizar atributos, "renaciendo" como versiones rediseñadas de sí mismos — es la huella benévola residual de la diosa que fue.'
      ),
      p(
        'En la batalla con el Tarnished, Rennala despliega primero una ilusión protectora: invoca demidioses fantasmales para defender el ritual de renacimiento. Esa ilusión es proyección de su hija ',
        link('Ranni', 'character', 'ranni'),
        ', que vela a su madre desde la distancia. Cuando la ilusión cae, Rennala combate sin propósito real — su poder sigue siendo enorme, pero su voluntad ha dejado de ser suya. La derrota le permite al Tarnished reorganizar atributos. Rennala sobrevive físicamente, pero atrapada para siempre en el bucle de su huevo.'
      ),
      h(2, 'Motivaciones', 'motivaciones'),
      p(
        'Antes de la caída: dirigir Liurnia, gobernar la Academia, criar a sus hijos en una cosmología refinada. Después de la caída: nada coherente. Su voluntad se replegó al duelo. El bucle del huevo no es estrategia ni rito — es escudo psicológico. Si renace al egg eternamente, no acepta que el final ya ocurrió.'
      ),
      p(
        'La hipótesis más sostenible: Rennala no enloqueció exactamente. Eligió un trauma controlable. Hechizar el huevo es voluntad activa que rechaza el momento del abandono. Es duelo cristalizado, no demencia.'
      ),
      h(2, 'Relaciones importantes', 'relaciones'),
      p(
        'Su esposo perdido: ',
        link('Radagon', 'character', 'radagon'),
        '. Sus hijos: ',
        link('Ranni', 'character', 'ranni'),
        ' (la cuida desde la distancia), ',
        link('Radahn', 'character', 'radahn'),
        ' (idolatraba a Godfrey), ',
        link('Rykard', 'character', 'rykard'),
        ' (rebelde institucional). Su contraparte cosmológica: ',
        link('Marika', 'character', 'marika'),
        ', la diosa que se llevó a su esposo. Su discípula excomulgada: ',
        link('Sellen', 'character', 'sellen'),
        ', expulsada por exceder los límites permitidos del saber.'
      ),
      h(2, 'Eventos clave', 'eventos'),
      ol(
        'Ascenso como Reina-Maestra de Raya Lucaria.',
        'Guerra contra Radagon.',
        'Matrimonio post-guerra.',
        'Nacimiento de Ranni, Radahn, Rykard.',
        'Designación de Ranni como Empyrean.',
        'Llamada de Radagon a Leyndell.',
        'Despedida y entrega del Amber Egg.',
        'Aceptación de la maldición del Renacimiento de Lazuli Conspector.',
        'Caída en el bucle eterno.',
        'Combate con el Tarnished bajo la ilusión protectora de Ranni.'
      ),
      h(2, 'Consecuencias', 'consecuencias'),
      p(
        'La caída de Rennala dejó a Liurnia sin gobierno efectivo. La Academia pasó a manos de fenómenos arcanos sin gobernanza humana. Sus hijos crecieron sin madre funcional: Ranni canalizó la pena en rebelión cosmológica, Radahn en fidelidad obsesiva al ideal paterno (Godfrey, no Radagon), Rykard en blasfemia institucional. Cada respuesta es legible como reacción al colapso materno. Y, paradójicamente, la maldición del Renacimiento que la encerró en el bucle es lo que ahora permite a los Tarnished rediseñar sus propios atributos: la mayor tragedia personal de las Tierras Intermedias se convirtió en la herramienta más útil para los aspirantes al trono.'
      ),
      h(2, 'Simbolismo e interpretación temática', 'simbolismo'),
      p(
        'Rennala es la imagen más nítida del costo personal de la cosmología institucional. Marika exigió a Radagon, Radagon obedeció, Rennala quedó destruida. El Orden Dorado funciona porque otros pagan el precio. Su Amber Egg simboliza nacimiento eterno sin parto: la imposibilidad del cierre, el duelo sin etapa final. Su tragedia se opone simétricamente a la de Marika: una madre rompió el cosmos por la pena de un hijo perdido (Marika por Godwyn); otra madre fue rota por el cosmos al perder un esposo (Rennala por Radagon). Las dos historias son la misma estructura desde dos ángulos opuestos.'
      ),
      h(2, 'Conexiones internas', 'conexiones'),
      p(
        'Inseparable de ',
        link('Radagon', 'character', 'radagon'),
        ' como esposo perdido. De sus tres hijos como herederos del trauma. De ',
        link('Raya Lucaria', 'region', 'raya-lucaria'),
        ' y ',
        link('Caria Manor', 'region', 'caria-manor'),
        ' como sus dos sedes institucionales. De la ',
        link('Luna Llena', 'concept', 'full-moon'),
        ' como su signo cosmológico. De la ',
        link('Luna Oscura', 'concept', 'dark-moon'),
        ' de Ranni como inversión filial directa.'
      )
    ],
    confirmed: [
      'Rennala fue Gran Maestra de Raya Lucaria y reina del clan Caria',
      'Tuvo tres hijos con Radagon: Ranni, Radahn y Rykard',
      'Radagon le dejó el Amber Egg como prenda de despedida',
      'Aceptó la maldición del Renacimiento entregada por Lazuli Conspector',
      'Permite a los Tarnished reorganizar atributos mediante el ritual del renacimiento',
      'Ranni protege a su madre desde la distancia con una ilusión durante el combate'
    ],
    inferred: [
      'Su regresión es escudo psicológico activo, no demencia involuntaria',
      'Aún ama a Radagon a pesar de saber (o intuir) que él se fusionó con Marika',
      'Sus hijos arrastran cicatrices de su parálisis: cada uno respondió de modo distinto al colapso',
      'La luna llena de Caria es contraparte cosmológica directa de la luna oscura de Ranni',
      'Lazuli Conspector le entregó la maldición por compasión, no por malicia'
    ],
    theories: [
      'Rennala conserva conciencia plena durante el bucle pero rechaza activamente salir',
      'El Amber Egg contiene un poder cosmológico real que ella ha decidido no usar como represalia',
      'Si saliera del bucle, podría disputar la sucesión Empyrean junto a Ranni',
      'La maldición del Renacimiento es modificación deliberada de la magia Caria — no fue accidente que llegara precisamente a sus manos',
      'Su luna llena fue la primera magia académica de Liurnia; las demás líneas (Glintstone, Cuckoo, Carian) son derivaciones de su trabajo original'
    ],
    ambiguous: [
      'Si conserva conciencia plena durante el bucle del Amber Egg',
      'Si conoció el destino Empyrean de su hija Ranni y lo aprobó o lo rechazó',
      'Si la ilusión protectora de Ranni durante el combate la consultó o se impuso sin su consentimiento',
      'Si su título de Reina de la Luna Llena la liga a algún dios externo lunar específico',
      'Cuál es exactamente el contenido del Amber Egg — embrión real, símbolo, vehículo cosmológico latente'
    ],
    beneficiaries:
      'Los Tarnished, que pueden reorganizar atributos a través de su ritual residual. Ranni, que aprovecha la incapacitación de su madre como cobertura emocional para sus propias operaciones. La Academia, que sin gobernanza humana se ha convertido en organismo arcano semiautónomo.',
    victims:
      'Sus tres hijos, criados en la sombra de un duelo permanente. Ella misma, atrapada en el momento del abandono. Liurnia entera, sin gobierno efectivo. Y los académicos que aún la veneraban como Gran Maestra y han perdido referencia ritual.',
    relatedCharacters: ['radagon', 'ranni', 'radahn', 'rykard', 'marika', 'sellen'],
    relatedFactions: ['caria', 'raya-lucaria'],
    relatedRegions: ['raya-lucaria', 'liurnia', 'caria-manor', 'three-sisters'],
    relatedConcepts: ['full-moon', 'dark-moon', 'great-rune', 'empyrean', 'glintstone'],
    relatedTimelineEvents: ['radagon-rennala', 'radagon-es-marika', 'rennala-colapso'],
  },

  /* ════════════════════════════════ RADAHN ════════════════════════════════ */
  radahn: {
    slug: 'radahn',
    subtitle: 'General Estelar · Cazador del cielo · Caído por la Podredumbre Escarlata',
    summary:
      'Radahn fue hijo de Radagon y Rennala, el más fuerte de los demidioses, idólatra de Godfrey, dominador de la magia gravitacional. Detuvo las estrellas con su gravedad para impedir el destino de su hermana Ranni. Su duelo con Malenia en Caelid lo arruinó: la Floración Escarlata redujo al guerrero invicto a una bestia honorable y demente. El Festival es el ritual diseñado por sus seguidores para devolverle dignidad mediante una muerte digna.',
    deepLore: [
      h(2, 'Resumen esencial', 'resumen'),
      p(
        'Radahn es la figura más trágicamente grande de las Tierras Intermedias post-fractura. Fue invicto durante toda su carrera militar, dominaba magia gravitacional aprendida de Sellen, e idolatraba a Godfrey hasta el punto de cabalgar sobre un caballo decididamente demasiado pequeño para su masa — Leonard, su corcel — porque Godfrey había cabalgado de forma similar en su tiempo. Esa fidelidad simbólica define todo su carácter: el guerrero perfecto que escogió el ridículo cosmológico antes que abandonar el modelo del rey guerrero ancestral.'
      ),
      h(2, 'Rol en el mundo', 'rol'),
      p(
        'Su rol fue cuádruple. Como ',
        em('General'),
        ' lideró a los ',
        link('Redmanes', 'faction', 'redmanes'),
        ' desde ',
        link('Caelid', 'region', 'caelid'),
        ', con sede en ',
        link('Redmane Castle', 'region', 'redmane-castle'),
        '. Como ',
        em('Cazador de Estrellas'),
        ' usó su gravedad para mantener bloqueado el cielo astrológico — bloqueo que detenía específicamente el destino estelar de su hermana ',
        link('Ranni', 'character', 'ranni'),
        '. Como ',
        em('idólatra'),
        ' encarnó la última fidelidad pública al ideal del Primer Señor Elden, ',
        link('Godfrey', 'character', 'godfrey'),
        '. Y como ',
        em('víctima'),
        ' del duelo con ',
        link('Malenia', 'character', 'malenia'),
        ' se convirtió en la primera baja honorífica de la Podredumbre Escarlata.'
      ),
      h(2, 'Historia detallada', 'historia'),
      p(
        'Su infancia transcurrió en ',
        link('Raya Lucaria', 'region', 'raya-lucaria'),
        ' bajo tutela académica. Aprendió magia gravitacional de Sorceress ',
        link('Sellen', 'character', 'sellen'),
        ' antes de que ella fuera excomulgada. Esa magia se convertiría en su técnica distintiva: tirar del campo gravitacional para detener proyectiles, sostener su propia armadura colosal, y — el acto cosmológico más conocido — bloquear el movimiento de las estrellas en el cielo de Caelid.'
      ),
      p(
        'El bloqueo estelar fue acto deliberado contra su hermana Ranni. Las estrellas que Radahn detuvo eran exactamente las que la designación Empyrean de Ranni necesitaba para acelerar su destino. Los textos del juego no aclaran si Radahn supo desde el principio el efecto cosmológico que generaba o si simplemente bloqueó las estrellas como gesto de afecto a su hermana, evitando que la astronomía la arrastrase hacia un fin que él consideraba peligroso. La interpretación más sostenible: Radahn quería a Ranni y, sabiendo que el destino estelar la encadenaría al rol Empyrean, decidió posponerlo cosmológicamente. Su acto fue protección, aunque ella eventualmente lo rechazara.'
      ),
      p(
        'Tras la fractura del Anillo Elden, Radahn lideró la Guerra del Shattering como uno de los demidioses más poderosos. Su rivalidad favorita era con su hermana adoptiva ',
        link('Malenia', 'character', 'malenia'),
        ', Espada de Miquella, otra guerrera invicta de estilo radicalmente distinto: ella prefería el combate cuerpo a cuerpo, él el campo abierto con magia gravitacional. La ',
        link('Batalla de Aeonia', 'timeline', 'batalla-aeonia'),
        ' los enfrentó. Cuando Malenia comprendió que no podría vencerlo marcialmente, desató su Floración Escarlata — la primera real. ',
        link('Caelid', 'region', 'caelid'),
        ' entero quedó cubierto de ',
        link('podredumbre', 'concept', 'scarlet-rot'),
        '. Radahn fue infectado de modo terminal pero su honor le impidió rendirse a la corrupción. La podredumbre devoró su mente sin matar su cuerpo: quedó como bestia honorable, montado eternamente sobre Leonard, vagando por la costa carmesí de Caelid blandiendo espadas gigantes contra cualquiera que pasase.'
      ),
      p(
        'Sus seguidores Redmanes, encabezados por ',
        link('Jerren', 'character', 'jerren'),
        ', diseñaron el ',
        link('Festival', 'timeline', 'festival-radahn'),
        ' como solución ritual. Invitar a guerreros legendarios a derrotarlo permite tres cosas simultáneamente: 1) liberarlo de su cuerpo arruinado, 2) devolverle la dignidad de morir en combate y no por envenenamiento crónico, 3) restaurar el flujo de las estrellas que él había bloqueado — lo cual paradójicamente cumple el destino que él intentó proteger a Ranni de cumplir.'
      ),
      h(2, 'Motivaciones', 'motivaciones'),
      p(
        'Las motivaciones de Radahn son claras y trágicas. Quería ser ',
        em('como Godfrey'),
        ': rey guerrero ideal, fidelidad marcial absoluta, modelo eterno del Señor Elden. Idolatraba el modelo paterno-ancestral, no a su padre biológico Radagon (cuya fusión con Marika probablemente le repugnaba en silencio). Su Leonard, demasiado pequeño para su masa, es tributo deliberado: Godfrey había cabalgado pequeño, Radahn cabalga pequeño aún a costa del ridículo.'
      ),
      p(
        'Su segunda motivación: proteger a Ranni. Detener las estrellas era, leído así, gesto fraterno tardío. Bloquear el cielo era posponer el destino que la atrapaba. Que Ranni después rechazara esa protección — eligiendo asesinar su propio cuerpo Empyrean — no invalida el motivo de Radahn: él hizo lo que pensó que era amor.'
      ),
      h(2, 'Relaciones importantes', 'relaciones'),
      p(
        'Su modelo simbólico: ',
        link('Godfrey', 'character', 'godfrey'),
        '. Su rival favorita: ',
        link('Malenia', 'character', 'malenia'),
        '. Su hermana protegida: ',
        link('Ranni', 'character', 'ranni'),
        '. Su madre rota: ',
        link('Rennala', 'character', 'rennala'),
        '. Su padre/madre fusionado: ',
        link('Radagon', 'character', 'radagon'),
        '. Sus seguidores: los Redmanes, encabezados por ',
        link('Jerren', 'character', 'jerren'),
        '. Su maestra arcana: ',
        link('Sellen', 'character', 'sellen'),
        '. Su corcel imposible: Leonard.'
      ),
      h(2, 'Eventos clave', 'eventos'),
      ol(
        'Aprendizaje de magia gravitacional con Sellen.',
        'Ascenso como General de los Redmanes.',
        'Bloqueo cosmológico de las estrellas.',
        'Guerra del Shattering.',
        'Rivalidad sostenida con Malenia.',
        'Batalla de Aeonia.',
        'Floración Escarlata sobre Caelid.',
        'Corrupción de su mente.',
        'Estado de bestia honorable demente.',
        'Diseño del Festival por Jerren y los Redmanes.',
        'Derrota ritual ante el Tarnished.',
        'Liberación final de las estrellas, lo que reactiva el destino de Ranni.'
      ),
      h(2, 'Consecuencias', 'consecuencias'),
      p(
        'La carrera de Radahn definió el equilibrio cosmológico post-fractura. Mientras él bloqueó las estrellas, Ranni no pudo consolidar la Era de las Estrellas. Cuando cae, las estrellas se mueven — y la quest de Ranni se vuelve completable. Radahn es, así, el guardián involuntario del régimen actual: protegiendo a su hermana, mantuvo intacta la cosmología dorada. Su Gran Runa pasa al Tarnished tras el Festival. Caelid permanece arrasado: la podredumbre desatada por la Floración no se revierte con la muerte de Radahn — solo se calma.'
      ),
      h(2, 'Simbolismo e interpretación temática', 'simbolismo'),
      p(
        'Radahn encarna la fuerza honorable arruinada por una guerra que él no entendió del todo. Su cuerpo masivo cabalgando un caballo demasiado pequeño es la imagen más reveladora de las Tierras Intermedias: la fidelidad al ideal antiguo, sostenida hasta el ridículo cósmico, sin abandonar nunca la postura. Su silencio durante la batalla con el Tarnished — Radahn ya no habla, sólo embiste con honor mecánico — es la prueba de que la podredumbre devoró su mente sin tocar su disciplina marcial. Es la marcialidad sin sujeto: un cuerpo que sigue ejecutando códigos cuando el ejecutor ya se ha ido.'
      ),
      h(2, 'Conexiones internas', 'conexiones'),
      p(
        'Inseparable de ',
        link('Malenia', 'character', 'malenia'),
        ' como rival cosmológico. De ',
        link('Ranni', 'character', 'ranni'),
        ' como hermana protegida. De ',
        link('Caelid', 'region', 'caelid'),
        ' como su tierra arruinada. De ',
        link('Redmane Castle', 'region', 'redmane-castle'),
        ' como sede. Del ',
        link('Festival', 'timeline', 'festival-radahn'),
        ' como ritual de su muerte. De la ',
        link('Era de las Estrellas', 'ending', 'age-of-stars'),
        ' como destino que él bloqueaba.'
      )
    ],
    confirmed: [
      'Radahn es hijo de Radagon y Rennala',
      'Aprendió magia gravitacional de Sorceress Sellen',
      'Bloqueó las estrellas con su gravedad para impedir el destino de Ranni',
      'Su corcel Leonard es deliberadamente pequeño en imitación de Godfrey',
      'Lideraba a los Redmanes desde Caelid',
      'Fue corrompido por Scarlet Rot durante la Batalla de Aeonia',
      'El Festival es el ritual de eutanasia honorífica diseñado por Jerren',
      'Su muerte libera las estrellas que él bloqueaba'
    ],
    inferred: [
      'Su rivalidad con Malenia era de mutuo respeto, no odio',
      'El bloqueo de las estrellas fue gesto de protección a Ranni, no rivalidad',
      'Su honor le impide rendirse a la corrupción, prolongando su sufrimiento',
      'Idolatraba a Godfrey por encima de su padre biológico Radagon',
      'Conserva la disciplina marcial incluso cuando ha perdido la mente'
    ],
    theories: [
      'Radahn supo durante la batalla que Malenia liberaría la podredumbre y aceptó el riesgo',
      'Su Gran Runa contiene encaje específico para magia gravitacional — manipularla puede afectar las estrellas literalmente',
      'Su devoción a Godfrey era forma encubierta de rebelión contra Radagon: idolatraba al padre que el régimen había desechado',
      'La Floración Escarlata sobre Caelid era inevitable cosmológicamente — Malenia no decidió, ejecutó'
    ],
    ambiguous: [
      'Si Radahn supo durante la batalla que Malenia liberaría la podredumbre',
      'Cuánta consciencia conserva durante el Festival',
      'Si la liberación de las estrellas tras su muerte fue casualidad o liberación deliberada',
      'Si su admiración por Godfrey llegó al punto de saber que Godfrey regresaría como espectro'
    ],
    beneficiaries:
      'Ranni: con la muerte de Radahn, las estrellas vuelven a moverse, abriendo el camino a la Era de las Estrellas. El Tarnished: obtiene una Gran Runa. Los Redmanes: cumplen su deber ritual de devolver dignidad a su general.',
    victims:
      'Caelid entero, convertido en yermo. Sus Redmanes, condenados a guerrear sobre tierra muerta. Malenia, mutilada por la Floración que ella misma desató. Su propia honra, sometida a la indignidad del cuerpo arruinado. Y Radahn mismo, atrapado en el residuo marcial sin sujeto.',
    relatedCharacters: ['rennala', 'radagon', 'ranni', 'rykard', 'malenia', 'sellen', 'jerren', 'alexander', 'godfrey'],
    relatedFactions: ['redmanes', 'raya-lucaria'],
    relatedRegions: ['caelid', 'redmane-castle', 'sellia'],
    relatedConcepts: ['great-rune', 'scarlet-rot', 'primeval-current', 'empyrean'],
    relatedTimelineEvents: ['demidioses-fractura', 'batalla-aeonia', 'festival-radahn', 'la-fractura'],
    relatedEndings: ['age-of-stars'],
  },

  /* ════════════════════════════════ RYKARD ════════════════════════════════ */
  rykard: {
    slug: 'rykard',
    subtitle: 'Lord de la Blasfemia · Devorado por Eiglay · Profeta del antiOrden',
    summary:
      'Rykard fue hijo de Radagon y Rennala, originalmente noble respetado del Orden Dorado y posiblemente inquisidor. Tras la fractura, su decepción se convirtió en blasfemia: encontró bajo Mt. Gelmir a una serpiente-dios primordial — Eiglay — y se entregó a ella para ser devorado. Hoy es ambos: hombre y monstruo, profeta de la rebelión total contra el Orden, anfitriado por Tanith en el Volcano Manor.',
    deepLore: [
      h(2, 'Resumen esencial', 'resumen'),
      p(
        'Rykard es la versión inversa de su hermana Ranni. Ambos rechazaron el Orden Dorado tras la fractura, pero donde Ranni lo desinstaló cosmológicamente — alejando los dioses — Rykard lo combatió desde dentro pactando con un dios anterior. Su solución a la opresión cosmológica del Orden Dorado fue invocar una blasfemia más antigua aún: la serpiente-dios ',
        em('Eiglay'),
        ', entidad pre-Orden, hostil al Árbol Áureo, capaz de devorar dioses.'
      ),
      h(2, 'Rol en el mundo', 'rol'),
      p(
        'Su rol original fue institucional. Era noble respetado del Orden Dorado, posiblemente inquisidor — los textos de su Gran Runa hablan de su autoridad sobre la disidencia interna, sugiriendo función equivalente a praetor. Tras la fractura, su corte alternativa en el ',
        link('Volcano Manor', 'region', 'volcano-manor'),
        ' funciona como centro político de los nobles desafectos del régimen oficial: aristócratas que perdieron poder con el colapso, hechiceros excomulgados, soldados deshonrados. Su misionera oficial es Lady ',
        link('Tanith', 'character', 'tanith'),
        '; su reclutadora aristocrática es ',
        link('Rya', 'character', 'rya'),
        '.'
      ),
      h(2, 'Historia detallada', 'historia'),
      p(
        'Casado dos veces — primero con Tanith, luego con otra noble — instaló su corte en el Volcano Manor de ',
        link('Mt. Gelmir', 'region', 'mt-gelmir'),
        ' como contrapeso institucional a Leyndell. Sus primeras décadas como demidiós fueron las de un reformista respetable. Mantenía relaciones diplomáticas con la Academia, con la familia Caria, con los nobles de Altus. Aún era hijo legítimo del régimen.'
      ),
      p(
        'Tras la fractura, su decepción se convirtió en filosofía activa. La rotura del Anillo Elden por parte de Marika fue, para Rykard, prueba de que el Orden Dorado se contradecía a sí mismo. Si la propia diosa había roto su propio orden, entonces el orden no era sagrado — era simplemente una imposición. Su lectura era válida; su solución, catastrófica.'
      ),
      p(
        'Bajo el Volcano Manor habitaba una entidad muy anterior al Orden Dorado: ',
        em('Eiglay'),
        ', la Serpiente-Dios devoradora. Su origen es opaco. Las inferencias razonables: era una manifestación física del ',
        link('Crisol primigenio', 'concept', 'crucible'),
        ' que sobrevivió a la purga del Orden, o una entidad ',
        link('Antigua Dragón', 'faction', 'dragones-antiguos'),
        ' degenerada en serpiente-dragón, o una entidad cosmológica autónoma de origen desconocido. Lo que es indudable: era hostil al Árbol Áureo y capaz de digerir dioses.'
      ),
      p(
        'Rykard descendió al santuario subterráneo del Volcano Manor y permitió que la serpiente lo devorara. La fusión que resultó es físicamente monstruosa: cabeza humana en cuello de hombre saliendo del cuerpo descomunal de la serpiente, todo bañado en magma y carne fundida. Conservó memoria, voluntad y autoridad — pero su cuerpo es ahora indistinguible del de Eiglay. La frontera entre el demidiós y el dios devorador se ha disuelto.'
      ),
      p(
        'Desde esa fusión, opera una secta llamada los ',
        em('Recusantes'),
        ': nobles desafectos invitados al Volcano Manor para servir cazas rituales contra el Orden Dorado. Las cartas que ',
        link('Tanith', 'character', 'tanith'),
        ' envía son misiones de asesinato disfrazadas de rituales aristocráticos. Cada blanco eliminado alimenta al régimen sangriento alternativo. Su tridente característico — el "Devoraadios" — promete justicia cósmica y entrega solamente digestión.'
      ),
      p(
        'Cuando el Tarnished lo enfrenta, Rykard sigue hablando, sigue prometiendo justicia, sigue ofreciendo "comer al dios" mediante el tridente. Tras su derrota, ',
        link('Tanith', 'character', 'tanith'),
        ' devora su cadáver en un acto de comunión que es simultáneamente devoción canibalesca y preservación: si Rykard ahora vive dentro de ella, ella se ha convertido en su nueva sede.'
      ),
      h(2, 'Motivaciones', 'motivaciones'),
      p(
        'Las motivaciones de Rykard son filosóficamente articuladas. Cree genuinamente que el Orden Dorado no es sagrado sino impuesto, y que cualquier régimen alternativo, por sangriento que sea, es preferible a continuar bajo la mentira del oro. Su tridente "Devoraadios" no es metáfora: literalmente busca devorar a los dioses para recuperar los espacios cosmológicos que ellos ocupan. Es revolución teológica con dientes.'
      ),
      p(
        'El problema con Rykard es estructural, no filosófico. Para combatir la opresión cosmológica del Orden Dorado, se entregó a una entidad pre-Orden que opera con la misma lógica: imponer una ley absoluta a través de un consorte humano. Eiglay y Marika usan el mismo método: instalar voluntad divina en cuerpo humano para legislar sobre el cosmos. Rykard repite el crimen original que pretendía superar.'
      ),
      h(2, 'Relaciones importantes', 'relaciones'),
      p(
        'Su anfitriona y devoradora final: Lady ',
        link('Tanith', 'character', 'tanith'),
        '. Su reclutadora aristocrática: ',
        link('Rya', 'character', 'rya'),
        ' (que es serpiente bajo apariencia humana). Sus padres: ',
        link('Rennala', 'character', 'rennala'),
        ' y ',
        link('Radagon', 'character', 'radagon'),
        '. Sus hermanos: ',
        link('Ranni', 'character', 'ranni'),
        ' (rebelión paralela), ',
        link('Radahn', 'character', 'radahn'),
        ' (fidelidad opuesta). Su deidad devoradora: Eiglay. Su sirviente bandido: ',
        link('Patches', 'character', 'patches'),
        '. Su discípulo ex-leal: ',
        link('Bernahl', 'character', 'bernahl'),
        '.'
      ),
      h(2, 'Eventos clave', 'eventos'),
      ol(
        'Carrera institucional como noble del Orden Dorado.',
        'Primer matrimonio con Tanith.',
        'Construcción del Volcano Manor como corte alternativa.',
        'Fractura del Anillo Elden por Marika.',
        'Decepción filosófica.',
        'Descubrimiento de Eiglay bajo el manor.',
        'Devoración voluntaria.',
        'Fusión con la serpiente-dios.',
        'Establecimiento de la secta de los Recusantes.',
        'Cazas rituales contra el Orden Dorado.',
        'Lucha final contra el Tarnished.',
        'Devoración de su cadáver por Tanith.'
      ),
      h(2, 'Consecuencias', 'consecuencias'),
      p(
        'La existencia del régimen sangriento de Rykard documenta dos cosas estructurales. Primero: el Orden Dorado no es cosmología única sino dominante — entidades pre-Orden sobreviven en sus márgenes y pueden ser invocadas. Segundo: la rebelión cosmológica no garantiza superación. Rykard quiso destruir el régimen y construyó otro idéntico bajo otra deidad. Tras su muerte, los Recusantes se dispersan; Bernahl cae en un ciclo de blasfemia errante; Tanith preserva el cadáver dentro de sí. Su Gran Runa pasa al Tarnished, que ahora carga con el residuo cosmológico del proyecto fallido.'
      ),
      h(2, 'Simbolismo e interpretación temática', 'simbolismo'),
      p(
        'Rykard es la pregunta de si toda revolución cosmológica está condenada a reproducir la estructura que combate. Su cuerpo fusionado con Eiglay es la imagen literal de esa contradicción: el rebelde se ha vuelto la cosa contra la que se rebelaba. Su tridente "Devoraadios" promete liberación universal y entrega únicamente comida. Su matrimonio con Tanith — quien literalmente lo devora al final — completa el ciclo: el blasfemo se vuelve alimento de su propia anfitriona, y la anfitriona se vuelve sede de la nueva blasfemia. Es la teología convertida en gastronomía.'
      ),
      h(2, 'Conexiones internas', 'conexiones'),
      p(
        'Inseparable del ',
        link('Volcano Manor', 'region', 'volcano-manor'),
        ' como sede. De ',
        link('Mt. Gelmir', 'region', 'mt-gelmir'),
        ' como geografía. De ',
        link('Tanith', 'character', 'tanith'),
        ' como anfitriona-devoradora. De ',
        link('Rya', 'character', 'rya'),
        ' como reclutadora serpiente. Del ',
        link('Crisol', 'concept', 'crucible'),
        ' como posible origen de Eiglay. De los ',
        link('Antiguos Dragones', 'faction', 'dragones-antiguos'),
        ' como linaje cosmológico cercano.'
      )
    ],
    confirmed: [
      'Rykard es hijo de Rennala y Radagon',
      'Habitaba el Volcano Manor como centro político alternativo',
      'Permitió que la serpiente-dios Eiglay lo devorara',
      'Su cuerpo actual es fusión de hombre y serpiente colosal',
      'Tanith devora su cadáver tras la batalla',
      'Su tridente característico es el "Devoraadios"',
      'Sus seguidores son los Recusantes, encabezados por Tanith y Rya'
    ],
    inferred: [
      'Su blasfemia es respuesta filosófica a la decepción del Orden Dorado',
      'Eiglay es entidad pre-Orden, posiblemente vinculada al Crisol o a un dragón degenerado',
      'Su transformación lo convierte en lo opuesto pero estructuralmente equivalente del Orden',
      'Rya es su reclutadora oficial y conserva forma serpentina secreta'
    ],
    theories: [
      'Eiglay es una entidad estelar caída — su cuerpo ardiente sugiere origen cósmico, no terrestre',
      'Rykard conserva su voluntad humana plena: la serpiente sólo le presta el cuerpo',
      'Tanith lo devoraba por compasión — preservar al amado en lugar de dejarlo desintegrarse',
      'Su carrera como inquisidor le dio el conocimiento textual sobre Eiglay que ningún otro demidiós tenía',
      'La devoración fue ritual planificado durante años, no acto impulsivo de desesperación'
    ],
    ambiguous: [
      'Si Rykard conserva su voluntad humana o es marioneta de la serpiente',
      'Cuánto sabe Tanith sobre la naturaleza real de Eiglay',
      'Si Rykard actuó por venganza, fanatismo o ambición pura',
      'Si la devoración por Tanith preserva genuinamente o si solo perpetúa la blasfemia',
      'Si Eiglay sigue activa tras la muerte de Rykard, esperando un nuevo huésped'
    ],
    beneficiaries:
      'Eiglay obtuvo huésped y corte. Tanith obtuvo dios al que adorar literalmente con la boca. Los Recusantes obtuvieron causa institucional. Patches obtuvo otro régimen al que vender lealtades dudosas.',
    victims:
      'Los nobles seducidos por la causa que terminan asesinados o devorados. Los blancos rituales de las cazas Recusantes. El propio proyecto del Volcano Manor, congelado en su momento más blasfemo. Rykard mismo, que ya no es solo Rykard.',
    relatedCharacters: ['rennala', 'radagon', 'ranni', 'radahn', 'tanith', 'rya', 'patches', 'bernahl'],
    relatedFactions: ['volcano-manor', 'dragones-antiguos'],
    relatedRegions: ['mt-gelmir', 'volcano-manor'],
    relatedConcepts: ['great-rune', 'crucible', 'dioses-exteriores'],
    relatedTimelineEvents: ['demidioses-fractura', 'la-fractura'],
  },

  /* ════════════════════════════════ GODRICK ════════════════════════════════ */
  godrick: {
    slug: 'godrick',
    subtitle: 'El Injertado · Demidiós marginal aferrado al linaje · Bisnieto patético del Primer Señor Elden',
    summary:
      'Godrick es bisnieto descendiente lateral de Godfrey, el demidiós más débil del Linaje Dorado y el más patéticamente desesperado por mantener su Gran Runa. Conserva poder injertando partes de soldados caídos a su propio cuerpo: brazos múltiples, piernas extra, cabezas de dragón fusionadas. Reina sobre Stormveil — castillo originalmente de Godfrey — como caricatura senescente del rey ancestral al que jamás conoció.',
    deepLore: [
      h(2, 'Resumen esencial', 'resumen'),
      p(
        'Godrick encarna la decadencia aristocrática del Orden Dorado llevada al absurdo cosmológico. Es lo que el régimen produce cuando los grandes demidioses caen y los puestos los ocupan herederos laterales sin mérito propio. Su Gran Runa es ofensiva: heredada por sangre debilitada generacionalmente. Para conservarla — para que los Dos Dedos lo sigan reconociendo como portador legítimo — recurre a la única tecnología que sus ancestros le dejaron: el injerto. Cose partes de otros cuerpos a sí mismo y a sus salas, fingiendo que la acumulación de carne ajena equivale a poder propio.'
      ),
      h(2, 'Rol en el mundo', 'rol'),
      p(
        'Su rol post-fractura es triple. Como ',
        em('demidiós portador'),
        ' de una Gran Runa es teológicamente legítimo aunque sea el más débil de su categoría. Como ',
        em('señor de Stormveil'),
        ' gobierna el castillo fronterizo del Orden Dorado en Limgrave — sede ancestral originalmente de ',
        link('Godfrey', 'character', 'godfrey'),
        '. Como ',
        em('primer obstáculo'),
        ' del Tarnished, marca el umbral inicial de la cadena cosmológica de demidioses por derrotar; su Gran Runa es la primera que el aspirante obtiene.'
      ),
      h(2, 'Historia detallada', 'historia'),
      p(
        'Su árbol genealógico exacto no se documenta con precisión. Es bisnieto de Godfrey por línea lateral, no descendiente directo de los hijos primarios del Primer Señor (',
        link('Godwyn', 'character', 'godwyn'),
        ', etc.). Tres o cuatro generaciones lo separan del modelo ancestral, y cada generación diluyó la sangre Empyrean. Por eso su poder, aún siendo demidiós, está estructuralmente disminuido.'
      ),
      p(
        'Tras la fractura del Anillo Elden, Godrick reclamó el castillo ancestral de Godfrey: ',
        link('Stormveil', 'region', 'stormveil'),
        ' en Limgrave. Su tenencia era nominalmente legítima — era el único pariente vivo lo bastante prominente — pero su autoridad real fue marginal desde el principio. Los demás demidioses (Radahn, Mohg, Morgott, Malenia) lo veían como insignificante; sus súbditos lo despreciaban en silencio; sus enemigos lo subestimaban con razón.'
      ),
      p(
        'Su solución fue el injerto. Aprendido posiblemente de tradiciones marginales del Orden Dorado relacionadas con los Crucible Knights y la magia primigenia del Crisol, el injerto consiste en coser partes de cuerpos ajenos al propio. Godrick lo practicó con obsesión: brazos múltiples emergiendo de su torso, piernas adicionales, cabezas fusionadas, miembros bestiales. Su corona dorada — diseñada para parecer la corona ancestral — descansa sobre un cráneo recompuesto. Su lanza sostiene una cabeza de dragón fusionada como decoración funcional.'
      ),
      p(
        'La obsesión específica con dragones tiene raíz simbólica. ',
        link('Godwyn', 'character', 'godwyn'),
        ', el primogénito amado, había forjado pacto con el dragón ',
        link('Fortissax', 'character', 'fortissax'),
        '. Godrick injertando una cabeza de dragón en su propia lanza es imitación patética de aquel pacto: donde Godwyn obtuvo amistad cosmológica con un Antiguo Dragón mediante pacto sagrado, Godrick obtiene un colgante decorativo mediante carnicería ritual. La diferencia es exactamente la distancia entre el linaje vivo y el linaje muerto.'
      ),
      p(
        'Sus salas en Stormveil están decoradas con cuerpos injertados de soldados caídos: brazos múltiples saliendo de los muros, manos humanas como ornamentos, miembros extra cosidos a estatuas. La estética del injerto es su firma arquitectónica. Es el lenguaje material de un demidiós que solo puede mantener apariencia de poder mediante acumulación ostentosa de partes ajenas.'
      ),
      p(
        'Cuando el Tarnished lo derrota, Godrick suplica ante la Runa Dorada — pidiendo a un linaje que ya no responde — y muere injertando, en su última agonía, el brazo del propio Tarnished. La acción es perfecta como cierre: incluso muriendo, Godrick injerta. Es lo único que sabe hacer.'
      ),
      h(2, 'Motivaciones', 'motivaciones'),
      p(
        'Sus motivaciones son patéticas y completamente reconocibles. Quiere ',
        em('parecer'),
        ' un Señor Elden ancestral cuando sabe que no tiene materia para serlo. Su devoción al linaje no es ideológica — es desesperada. Si el linaje pierde valor cosmológico, él pierde el único recurso que justifica su existencia. De ahí su obsesión arquitectónica con marcas familiares dorádas, con rituales del Orden, con la lanza-dragón que imita el pacto de Godwyn.'
      ),
      p(
        'Su tragedia es saber, internamente, que es insuficiente. El injerto es síntoma de inseguridad estructural: si necesita carne ajena para sostener su forma, es porque su forma propia no basta. Cada brazo extra es admisión silenciosa de que un brazo solo nunca fue suficiente.'
      ),
      h(2, 'Relaciones importantes', 'relaciones'),
      p(
        'Su ancestro idealizado: ',
        link('Godfrey', 'character', 'godfrey'),
        '. Su modelo simbólico imposible: ',
        link('Godwyn', 'character', 'godwyn'),
        ' (el demidiós perfecto que él jamás puede emular). Su heredera natural — si la legitimidad funcionara por mérito — es ',
        link('Nepheli Loux', 'character', 'nepheli-loux'),
        ', posible descendiente más directa de Godfrey. Sus súbditos en Stormveil son guardias mercenarios sin más vínculo que el sueldo. Su portero traidor es ',
        link('Gostoc', 'character', 'gostoc'),
        ' (Gatekeeper Gostoc), que saquea cadáveres en sus muros.'
      ),
      h(2, 'Eventos clave', 'eventos'),
      ol(
        'Nacimiento como descendiente lateral de Godfrey.',
        'Acceso a la Gran Runa por sangre débil.',
        'Reclamo de Stormveil tras la fractura.',
        'Inicio de las prácticas de injerto.',
        'Construcción de la estética del injerto en su castillo.',
        'Obsesión específica con dragones e imitación del pacto de Godwyn.',
        'Margit (Morgott disfrazado) montando guardia en su umbral.',
        'Encuentro inicial con el Tarnished.',
        'Combate y derrota.',
        'Última agonía intentando injertar al propio aspirante.'
      ),
      h(2, 'Consecuencias', 'consecuencias'),
      p(
        'La caída de Godrick es la primera victoria simbólica del Tarnished: derrota al demidiós más débil, obtiene su Gran Runa, accede al circuito legítimo de la sucesión Elden. Pero también es lección estructural: si el régimen del Orden Dorado se sostiene con figuras como Godrick, el régimen ya está muerto. Su muerte no traumatiza a las Tierras Intermedias — al contrario, sus súbditos se dispersan con alivio. El castillo Stormveil queda libre para ser reclamado por una heredera más legítima como Nepheli, si el Tarnished lo coreografía así. La Gran Runa de Godrick, la más débil del juego, es paradójicamente la más fácil de obtener — coherente con su portador.'
      ),
      h(2, 'Simbolismo e interpretación temática', 'simbolismo'),
      p(
        'Godrick es la decadencia aristocrática del Orden Dorado llevada al absurdo cosmológico. Cada brazo injertado es metonimia perfecta del régimen entero: un sistema que solo puede sostener apariencia de poder acumulando partes ajenas. La diferencia entre Godrick y los demás demidioses no es de magnitud sino de esencia: Marika fundó, Godwyn integró, Ranni rebeló, Mohg apostató, Morgott defendió, Radahn protegió, Malenia sostuvo, Rykard blasfemó. Godrick solo cosió. Es el único demidiós cuyo verbo característico es transitivo y patético: él no hace, él pega. Su muerte injertando al Tarnished mismo cierra el bucle perfectamente: hasta el último gesto del demidiós más débil del Linaje Dorado es un injerto.'
      ),
      h(2, 'Conexiones internas', 'conexiones'),
      p(
        'Inseparable de ',
        link('Godfrey', 'character', 'godfrey'),
        ' como ancestro idealizado. De ',
        link('Stormveil', 'region', 'stormveil'),
        ' como sede heredada. De ',
        link('Nepheli Loux', 'character', 'nepheli-loux'),
        ' como heredera potencial alternativa. Del ',
        link('Linaje Dorado', 'faction', 'golden-lineage'),
        ' como concepto del que es residuo final. De los ',
        link('Crucible Knights', 'concept', 'crucible-knights'),
        ' por la herencia del injerto vinculada al ',
        link('Crisol', 'concept', 'crucible'),
        '.'
      )
    ],
    confirmed: [
      'Godrick es bisnieto descendiente lateral de Godfrey',
      'Mantiene su Gran Runa mediante injertos rituales de partes de cuerpos ajenos',
      'Reina en Stormveil, el castillo ancestral de Godfrey',
      'Es el demidiós más débil del Linaje Dorado vivo',
      'Su última agonía intenta injertar el brazo del propio Tarnished',
      'Margit (Morgott) hace guardia frente a Stormveil — incluso el régimen central considera necesario protegerlo'
    ],
    inferred: [
      'Su debilidad nominal lo hace primer demidiós abordable para el Tarnished',
      'Sus injertos son tanto técnica como compensación psicológica',
      'Su obsesión con dragones es imitación patética del pacto de Godwyn con Fortissax',
      'Nepheli Loux, posible heredera de Godfrey, podría legítimamente desplazarlo',
      'Sabe internamente que es insuficiente — el injerto es síntoma, no técnica neutra'
    ],
    theories: [
      'El conocimiento del injerto procede de tradiciones marginales del Crisol que el Orden no purgó del todo',
      'Su línea Empyrean fue diluida deliberadamente por el régimen para asegurar herederos manejables',
      'Sus súbditos en Stormveil le sirven por miedo, no por lealtad',
      'Si Nepheli ascendiera al trono de Stormveil, restauraría parcialmente el linaje Godfrey verdadero',
      'Su Gran Runa es genuinamente débil — los Dos Dedos lo aceptan sólo porque cualquier portador es mejor que ninguno'
    ],
    ambiguous: [
      'Si su linaje incluye descendencia directa de Godfrey o solo lateral',
      'Cuántos siglos lleva injertándose',
      'Si conoció a Margit/Morgott como pariente real o sólo como guardián anónimo',
      'Si su obsesión con dragones procede de saber privilegiado o de imitación accidental',
      'Si tenía conciencia plena de su propia inferioridad o vivía en autoengaño'
    ],
    beneficiaries:
      'El régimen del Orden Dorado obtuvo guardián marginal en Limgrave. Margit/Morgott obtuvo justificación para vigilar sus accesos. Los soldados que cobraron por servir a Stormveil. Posiblemente Nepheli, si su quest la lleva al trono ancestral.',
    victims:
      'Los soldados a quienes injertó partes corporales en sus rituales. Sus súbditos, condenados a obedecer a un señor sin mérito. Los visitantes desafortunados de Stormveil, transformados en decoración arquitectónica. El propio linaje Godfrey, cuya última manifestación pública es esta caricatura.',
    relatedCharacters: ['godfrey', 'godwyn', 'morgott', 'nepheli-loux', 'kenneth-haight', 'roderika', 'gostoc'],
    relatedFactions: ['orden-dorado', 'golden-lineage'],
    relatedRegions: ['stormveil', 'limgrave'],
    relatedConcepts: ['great-rune', 'grafting', 'crucible'],
    relatedTimelineEvents: ['la-fractura', 'demidioses-fractura', 'godrick-grafting'],
  },

  /* ════════════════ Promoción mass — invaders + NPCs ════════════════ */

  varre: {
    summary:
      'White Mask Varré es la primera voz amable que el Tarnished escucha al regresar a las Tierras Intermedias — y también la primera mentira. Su función es atraer aspirantes hacia el culto de Mohg disfrazando el reclutamiento como hospitalidad cortés. La gentileza inicial es el cebo del rito sangriento.',
    deepLore: [
      h(2, 'Resumen esencial'),
      p(
        'Varré aparece en la Iglesia de Elleh, en Limgrave, ofreciendo bienvenida calurosa al Tarnished recién llegado. Su máscara blanca es elegante; su lenguaje es protocolario; su intención es secuestrar al aspirante para el culto de ',
        link('Mohg', 'character', 'mohg'),
        '.'
      ),
      h(2, 'Historia detallada'),
      p(
        'Como misionero principal de los ',
        link('Bloody Fingers', 'faction', 'bloody-fingers'),
        ', Varré opera en superficie mientras Mohg construye la Dinastía Mohgwyn bajo tierra. Su quest específica: convencer al Tarnished de manchar Doncellas Tarnished con su propia sangre, paso ritual que abre acceso directo a ',
        link('Mohgwyn', 'region', 'mohgwyn'),
        '. Cada paso es disfrazado como cortesía protocolaria — la coerción nunca es explícita, solo implícita en el tono "amable".'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Varré es la imagen más nítida de la hospitalidad como anzuelo. Demuestra que el peor culto de las Tierras Intermedias se presenta primero como conversación cortés. La sangre se gana por etiqueta, no por violencia abierta. Su máscara blanca es metonimia perfecta: cubre el rostro real para presentar la cara que el aspirante quiere ver.'
      )
    ],
    confirmed: [
      'Varré es misionero de Mohg desde la Iglesia de Elleh',
      'Su quest dirige al Tarnished hacia Mohgwyn',
      'Entrega Doncellas Tarnished que el Tarnished debe manchar con su propia sangre',
      'Es derrotable como invasor en cualquier momento de su quest'
    ],
    inferred: [
      'La amabilidad inicial es estrategia deliberada, no rasgo de personalidad',
      'Su rol como primer NPC es diseño narrativo de FromSoftware',
      'Conoce el plan completo de Mohg con Miquella'
    ],
    theories: [
      'Varré es Tarnished original que se convirtió tras presenciar la inutilidad del régimen',
      'Su máscara blanca oculta deformidades Omen',
      'Es el reclutador más exitoso del culto — otros aspirantes Tarnished pueden haber caído antes'
    ],
    ambiguous: [
      'Cuándo se convirtió al culto de Mohg',
      'Si conoció a Mohg personalmente o solo a través de los Bloody Fingers',
      'Cuántos Tarnished ha reclutado antes del actual'
    ],
    relatedCharacters: ['mohg', 'miquella'],
    relatedFactions: ['bloody-fingers', 'omens'],
    relatedRegions: ['mohgwyn', 'limgrave'],
    relatedConcepts: ['formless-mother', 'bloodflame'],
    relatedTimelineEvents: ['mohg-formless-mother', 'mohg-toma-miquella'],
  },

  shabriri: {
    summary:
      'Shabriri es el espíritu del calumniador, profeta peripatético de la Llama Frenética. No tiene cuerpo propio: posee a sucesivos huéspedes durante eras para difundir su única doctrina — existir es sufrir, y la única piedad es quemarlo todo. Su última posesión documentada es Yura.',
    deepLore: [
      h(2, 'Resumen esencial'),
      p(
        'Shabriri fue, en su origen, calumniador en una era previa al Orden Dorado. Su crimen específico nunca se enuncia, pero su castigo sí: le arrancaron los ojos. Esa mutilación lo convirtió, paradójicamente, en visionario: el calumniador ciego ve la verdad que los videntes esconden.'
      ),
      h(2, 'Historia detallada'),
      p(
        'Como espíritu sin cuerpo, ha poseído a múltiples huéspedes durante siglos. Su misión es propagar la "frenética verdad" — la doctrina de la ',
        link('Llama Frenética', 'concept', 'frenzied-flame'),
        ' — entre quien sea capaz de oírla. Cada poseído se convierte en propagador. Cada víctima es semilla del próximo culto.'
      ),
      p(
        'Su posesión más reciente fue ',
        link('Yura', 'character', 'yura'),
        ', el cazador samurái de Land of Reeds. Tras debilitar a Yura en una emboscada, Shabriri tomó el cuerpo. ',
        link('Eleonora', 'character', 'eleonora'),
        ' siguió fielmente al Yura poseído sin distinguir al amante del impostor. La marca de Shabriri otorgada al Tarnished abre la ruta directa a la ',
        link('Llama Frenética', 'concept', 'frenzied-flame'),
        '.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Shabriri encarna la doctrina nihilista como contagio. No tiene cuerpo porque no necesita uno: vive en cada víctima que repite su mensaje. La calumnia se vuelve cosmología. La frenética verdad se contagia por escucha, no por convicción.'
      )
    ],
    confirmed: [
      'Shabriri fue calumniador en una era previa, condenado a perder los ojos',
      'Es espíritu sin cuerpo propio que posee huéspedes sucesivos',
      'Poseyó a Yura tras debilitarlo en emboscada',
      'Su marca abre la ruta a la Llama Frenética'
    ],
    inferred: [
      'Es proselitista activo desde antes del Orden Dorado',
      'Cada víctima es propagador del siguiente ciclo',
      'Su existencia depende de la presencia de los Tres Dedos como reserva cosmológica'
    ],
    theories: [
      'Shabriri fue creado deliberadamente por los Tres Dedos como agente itinerante',
      'Hyetta es su próximo huésped tras Yura',
      'Su nombre es solo una de muchas identidades que ha asumido'
    ],
    ambiguous: [
      'Su nombre real antes del castigo',
      'Cuántas eras de posesiones lleva acumuladas',
      'Si conserva personalidad propia o solo función misionera'
    ],
    relatedCharacters: ['yura', 'eleonora', 'hyetta'],
    relatedFactions: ['tres-dedos', 'frenzied-victims'],
    relatedConcepts: ['frenzied-flame', 'dioses-exteriores'],
    relatedEndings: ['frenzied-flame'],
  },

  yura: {
    summary:
      'Yura es samurái de Land of Reeds dedicado a cazar invasores Bloody Fingers. Su honor es estricto, su técnica refinada, su devoción completa. Cuando Shabriri lo posee tras una emboscada, se vuelve exactamente lo que cazaba — y el Tarnished debe matar al amigo para liberar al cuerpo.',
    deepLore: [
      h(2, 'Resumen esencial'),
      p(
        'Yura llegó a las Tierras Intermedias desde Land of Reeds con propósito específico: cazar a los ',
        link('Bloody Fingers', 'faction', 'bloody-fingers'),
        ', invasores Tarnished al servicio de ',
        link('Mohg', 'character', 'mohg'),
        '. Su técnica espadachín — Iaijutsu refinado — es de las más elegantes del juego. Su katana cae sin ruido y deja heridas profundas.'
      ),
      h(2, 'Historia detallada'),
      p(
        'Ayuda al Tarnished en múltiples invasiones a lo largo de Limgrave y Liurnia. Su lealtad es pragmática: cazadores se respaldan mutuamente. Cuando Yura es debilitado en una emboscada en Altus, el espíritu de ',
        link('Shabriri', 'character', 'shabriri'),
        ' aprovecha la herida abierta para poseer su cuerpo.'
      ),
      p(
        'El Yura poseído es indistinguible visualmente del original — misma armadura, misma katana, mismo tono. Pero su técnica se desvía hacia la Llama Frenética. ',
        link('Eleonora', 'character', 'eleonora'),
        ' lo sigue creyendo que es su amante; el Tarnished debe enfrentar a ambos para liberar el cuerpo de Yura. La caza se ha cerrado en círculo: el cazador se vuelve presa de su propia carrera.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Yura es la prueba de que la dedicación absoluta no protege contra la corrupción. Su honor estricto fue preludio del cuerpo perfecto para Shabriri: alguien tan disciplinado que su huésped puede operar con eficacia inmediata. Su tragedia es el cazador que se vuelve exactamente lo que cazaba — y muere a manos del aliado que él mismo había entrenado.'
      )
    ],
    confirmed: [
      'Yura es samurái de Land of Reeds dedicado a cazar Bloody Fingers',
      'Ayuda al Tarnished en múltiples invasiones',
      'Es debilitado en emboscada y poseído por Shabriri',
      'Su cuerpo poseído debe ser destruido para liberarlo'
    ],
    inferred: [
      'Su tradición espadachín es uno de los pocos linajes marciales no-Orden documentados',
      'Su lealtad al Tarnished es pragmática, no estructural',
      'Eleonora no distingue al Yura original del poseído'
    ],
    theories: [
      'Conoció al Blind Swordsman histórico antes de su llegada a las Tierras Intermedias',
      'Sabía del riesgo de posesión pero aceptó la cacería igualmente',
      'Su cuerpo conserva consciencia residual durante la posesión'
    ],
    ambiguous: [
      'Cuándo exactamente fue debilitado',
      'Si Eleonora conocía la posesión y la aceptó por amor',
      'Si su katana retiene memoria del verdadero Yura'
    ],
    relatedCharacters: ['shabriri', 'eleonora' ],
    relatedFactions: ['bloody-fingers', 'frenzied-victims'],
    relatedConcepts: ['frenzied-flame'],
  },

  eleonora: {
    summary:
      'Eleonora es lanza violeta del Foreign Hunt, asesina elegante con técnica fluida. Amaba a Yura. Cuando Shabriri lo posee, ella sigue al impostor sin distinguir — el amor convertido en complicidad inconsciente. El Tarnished debe matarlos juntos para que el ciclo termine.',
    deepLore: [
      h(2, 'Resumen esencial'),
      p(
        link('Eleonora', 'character', 'eleonora'),
        ' aparece en Altus Plateau como invasora elegante. Su lanza violeta es regalo de Yura — símbolo de su pacto romántico antes de la posesión. Su técnica de combate combina movimientos fluidos con magia carmesí.'
      ),
      h(2, 'Historia detallada'),
      p(
        'Su rol original como cazadora del Foreign Hunt era complementario al de Yura: él cazaba Bloody Fingers, ella cazaba a otros invasores en general. Eran pareja funcional y romántica. Cuando ',
        link('Shabriri', 'character', 'shabriri'),
        ' poseyó a Yura, Eleonora no detectó el cambio — el cuerpo era el mismo, la voz era similar, los gestos básicos coincidían. Su amor sirvió como camuflaje.'
      ),
      p(
        'Sigue al Yura poseído como consorte fiel. Caza junto a él aunque ahora la presa cambia: ya no son Bloody Fingers, son Tarnished aspirantes a la Llama Frenética. La transformación es gradual: cada caza la aleja más de su propia identidad.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Eleonora encarna el amor convertido en cómplice. Su devoción a Yura era genuina; su incapacidad de distinguir al amante del impostor es trágica precisamente porque demuestra cuánto lo amaba. Quien ama no examina; quien examina no ama del todo. El Tarnished al matarla cumple el último acto piadoso: liberar a una mujer enamorada de un cuerpo que ya no contiene al amado.'
      )
    ],
    confirmed: [
      'Eleonora aparece como invasora en Altus Plateau',
      'Su lanza violeta fue regalo de Yura',
      'Sigue al Yura poseído sin distinguir la posesión',
      'Su muerte ofrece la lanza al Tarnished'
    ],
    inferred: [
      'Su amor por Yura era genuino, no estratégico',
      'No detectó la posesión por exceso de devoción, no por incompetencia',
      'Su transformación posterior es gradual, no inmediata'
    ],
    theories: [
      'Sospechó la posesión en algún momento pero rechazó la sospecha',
      'Su lanza retiene magia del verdadero Yura',
      'Habría podido sobrevivir si hubiera abandonado a Yura — pero su amor lo impidió'
    ],
    ambiguous: [
      'Cuánto sabía exactamente del riesgo de Shabriri',
      'Si murió pensando que Yura era Yura',
      'Si su lanza violeta tiene función cosmológica más allá de lo simbólico'
    ],
    relatedCharacters: ['yura', 'shabriri'],
    relatedFactions: ['bloody-fingers', 'frenzied-victims'],
    relatedConcepts: ['frenzied-flame'],
  },

  bernahl: {
    summary:
      'Bernahl fue líder de los Caballeros Desterrados — orden que conservaba honor marcial fuera del régimen oficial. Su caída fue gradual: del Warmaster\'s Shack como mentor del Tarnished, al Volcano Manor como Recusante de Rykard, a Crumbling Farum Azula como invasor demente. Cada vez que reaparece está peor.',
    deepLore: [
      h(2, 'Resumen esencial'),
      p(
        'Bernahl encabeza a los ',
        link('Caballeros Desterrados', 'faction', 'banished-knights'),
        ' tras siglos de exilio del Orden Dorado oficial. Su filosofía original es honor marcial autónomo: defender lo justo aunque el régimen oficial no lo apruebe. Es una posición ideológicamente coherente y respetable.'
      ),
      h(2, 'Historia detallada'),
      p(
        'Aparece primero en el Warmaster\'s Shack en Stormhill, vendiendo invocaciones espirituales de Banished Knights muertos. Sirve como mentor secundario del Tarnished en sus primeros pasos. Su voz es la de un veterano cansado pero firme.'
      ),
      p(
        'Tras un punto narrativo específico, reaparece en el ',
        link('Volcano Manor', 'region', 'volcano-manor'),
        ' como Recusante al servicio de ',
        link('Rykard', 'character', 'rykard'),
        '. Su caída ideológica es completa: pasó del honor marcial autónomo a la blasfemia institucional. ',
        link('Tanith', 'character', 'tanith'),
        ' lo recibe como recluta valioso.'
      ),
      p(
        'Su última aparición es como invasor en Crumbling Farum Azula. Para entonces ya no parece recordar quién fue. Es Bernahl pero no es Bernahl: la blasfemia lo ha consumido. Su muerte allí es liberación piadosa, similar a la que Yura recibe del Tarnished.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Bernahl encarna la caída del caballero. Pasó de mentor a apóstata sin solución de continuidad. Cada vez que el Tarnished lo encuentra está peor — la última vez ya no sabe quién es. Es la prueba de que el honor marcial fuera del régimen oficial no se sostiene cosmológicamente sin estructura institucional protectora. La marcialidad pura es vulnerable a cualquier blasfemia que ofrezca pertenencia.'
      )
    ],
    confirmed: [
      'Bernahl lidera los Caballeros Desterrados',
      'Vende invocaciones espirituales en el Warmaster\'s Shack',
      'Reaparece como Recusante en el Volcano Manor',
      'Aparición final como invasor en Farum Azula'
    ],
    inferred: [
      'Su caída es gradual, no súbita',
      'La blasfemia institucional ofreció pertenencia que los Banished Knights no podían dar',
      'Su muerte final es liberación piadosa'
    ],
    theories: [
      'Conocía a Tanith desde antes — su ingreso al Volcano Manor fue invitación específica',
      'Algunos Banished Knights desertaron con él al Volcano Manor',
      'Su deterioro mental procede del contacto prolongado con Eiglay'
    ],
    ambiguous: [
      'Cuándo exactamente abandonó el Warmaster\'s Shack',
      'Si su transformación fue voluntaria o coercitiva',
      'Si conserva alguna conciencia residual durante la última batalla'
    ],
    relatedCharacters: ['rykard', 'tanith', 'patches'],
    relatedFactions: ['banished-knights', 'volcano-manor'],
    relatedRegions: ['stormveil', 'mt-gelmir', 'farum-azula'],
    relatedConcepts: ['serpent-god-eiglay'],
    relatedTimelineEvents: ['rykard-volcano-manor'],
  },

  patches: {
    summary:
      'Patches el Astuto aparece en cada era de cada mundo posible y siempre es el mismo: bandido cobarde, mendigo oportunista, mercader dudoso, sirviente de cualquier causa que pague. Es la inmortalidad como rutina. Sobrevive a todos los regímenes por puro pragmatismo.',
    deepLore: [
      h(2, 'Resumen esencial'),
      p(
        'Patches existe en muchos mundos de FromSoftware. En las Tierras Intermedias aparece como bandido en Limgrave, con la trampa estándar: emboscada, derrota, mendiga perdón, intenta venderte cosas como si nada hubiera pasado. La rutina es deliberada — Patches ha tendido la misma trampa durante eras y siempre funciona la misma disculpa.'
      ),
      h(2, 'Historia detallada'),
      p(
        'Tras la primera derrota, Patches se convierte en mercader itinerante con ofertas dudosas. Reaparece en múltiples regiones de las Tierras Intermedias: Limgrave, Mt Gelmir (al servicio de ',
        link('Tanith', 'character', 'tanith'),
        '), y ocasionalmente en otros lugares. Su oficio es vender lo que sea a quien sea por lo que sea.'
      ),
      p(
        'En el Volcano Manor sirve nominalmente a la causa Recusante pero su fidelidad es pragmática, no doctrinal. Cuando otra opción mejor aparece, cambiará de bando. Es uno de los pocos personajes de las Tierras Intermedias que no tiene ideología cosmológica — solo cálculo de supervivencia.'
      ),
      p(
        'Aparece también en relación con ',
        link('Boggart', 'character', 'boggart'),
        ' (Blackguard Big Boggart), a quien puede asesinar en algunas variantes para vender su Bell Bearing. La traición es funcional: es lo que Patches hace.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Patches es el bufón cósmico. Su existencia recuerda que ningún sistema sagrado está libre de la astucia menor del oportunista. Sobrevive a todos los dioses por puro pragmatismo. Su trampa siempre falla; su disculpa siempre funciona; mañana lo intentará de nuevo. Es la prueba de que el cosmos de las Tierras Intermedias no es solo trágico — también es absurdo.'
      )
    ],
    confirmed: [
      'Patches aparece en Limgrave como bandido con trampa estándar',
      'Tras la derrota se vuelve mercader itinerante',
      'Sirve a Tanith en el Volcano Manor con lealtad pragmática',
      'Puede asesinar a Boggart en algunas variantes'
    ],
    inferred: [
      'Su existencia trasciende eras — repite el mismo papel en mundos sucesivos',
      'No tiene ideología cosmológica, solo cálculo de supervivencia',
      'Cambiará de bando cuando otra opción mejor aparezca'
    ],
    theories: [
      'Patches es manifestación del mismo arquetipo en múltiples cosmologías',
      'Su inmortalidad es estructural, no biológica',
      'Conoce secretos de las Tierras Intermedias que ninguna facción reconoce'
    ],
    ambiguous: [
      'Si Patches actual es el mismo individuo que Patches anteriores o reencarnación',
      'Cuál es el origen real de su pragmatismo absoluto',
      'Si tiene algún momento de sinceridad genuina'
    ],
    relatedCharacters: ['tanith', 'rykard', 'boggart', 'bernahl', 'alexander'],
    relatedFactions: ['volcano-manor', 'banished-knights'],
    relatedRegions: ['limgrave', 'mt-gelmir'],
  },

  tanith: {
    summary:
      'Lady Tanith es la anfitriona perfecta del Volcano Manor. Sirve té con etiqueta impecable mientras coordina asesinatos rituales bajo su salón. Su devoción a Rykard excede toda métrica: cuando él muere, ella devora el cadáver para preservarlo dentro de sí. La cortesía aristocrática es contenedor del horror.',
    deepLore: [
      h(2, 'Resumen esencial'),
      p(
        'Tanith opera como anfitriona oficial del ',
        link('Volcano Manor', 'region', 'volcano-manor'),
        ' en nombre de su esposo ',
        link('Rykard', 'character', 'rykard'),
        '. Recibe nobles desafectos del régimen, ofrece té con protocolo perfecto, entrega cartas de invitación que en realidad son misiones de asesinato. La etiqueta y el horror coexisten sin contradicción visible.'
      ),
      h(2, 'Historia detallada'),
      p(
        'Su matrimonio con Rykard precede a la fusión con Eiglay. Era noble respetable del Orden Dorado antes de seguir a su esposo en su descenso institucional. Su lealtad es total: aceptó la transformación monstruosa de Rykard, aceptó la blasfemia institucional, aceptó la canalización de su corte como núcleo de los Recusantes.'
      ),
      p(
        'Reclutó a ',
        link('Rya', 'character', 'rya'),
        ' (Zorayas, serpiente bajo apariencia humana) como reclutadora aristocrática. Recibe a ',
        link('Bernahl', 'character', 'bernahl'),
        ', ',
        link('Diallos', 'character', 'diallos'),
        ' (que llega buscando a su sirvienta Lanya), ',
        link('Patches', 'character', 'patches'),
        ' (con su pragmatismo habitual). Cada huésped es invitado a unirse a las cazas rituales contra el Orden Dorado.'
      ),
      p(
        'Tras la derrota de Rykard por el Tarnished, Tanith devora el cadáver de su esposo. La devoración es ritual — preserva la voluntad de Rykard dentro de su propio cuerpo. Es simultáneamente devoción canibalesca y comunión teológica. Su matrimonio se completa en gastronomía.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Tanith encarna la pregunta más sutil del juego: ¿es la civilización compatible con la blasfemia? Su respuesta es escalofriante: sí, perfectamente. Las salas de mármol y los protocolos aristocráticos son contenedores funcionales para el rito sangriento. Sus modales son perfectos hasta el final — incluso al masticar.'
      )
    ],
    confirmed: [
      'Tanith es anfitriona oficial del Volcano Manor',
      'Coordina las misiones de asesinato disfrazadas de protocolo',
      'Recluta nobles desafectos como Recusantes',
      'Devora el cadáver de Rykard tras su derrota'
    ],
    inferred: [
      'Su matrimonio con Rykard precede a la fusión con Eiglay',
      'Su lealtad es total, no estratégica',
      'La cortesía aristocrática es contenedor funcional del horror, no contradicción'
    ],
    theories: [
      'Conserva ambición propia más allá de servir a Rykard',
      'La devoración del cadáver fue ritual planificado durante eras',
      'Si Eiglay sobrevive, podría buscar nuevo huésped a través de ella'
    ],
    ambiguous: [
      'Cuánto sabe sobre la naturaleza real de Eiglay',
      'Cuándo exactamente comenzó a oficiar como anfitriona',
      'Si conserva algún vínculo emocional con Rykard como persona o solo como dios'
    ],
    relatedCharacters: ['rykard', 'rya', 'patches', 'bernahl', 'diallos'],
    relatedFactions: ['volcano-manor'],
    relatedRegions: ['mt-gelmir'],
    relatedConcepts: ['serpent-god-eiglay'],
    relatedTimelineEvents: ['rykard-volcano-manor'],
  },

  rya: {
    summary:
      'Rya parece noble humana — elegante, cortés, encantadora — pero bajo el vestido tiene escamas. Es Zorayas, serpiente del linaje pre-Orden disfrazada de aristócrata. Su transformación final no es metamorfosis sino destape: cuando se permite ser lo que es, deja de mentir.',
    deepLore: [
      h(2, 'Resumen esencial'),
      p(
        link('Rya', 'character', 'rya'),
        ' opera como reclutadora aristocrática del ',
        link('Volcano Manor', 'region', 'volcano-manor'),
        '. Aparece primero en Liurnia pidiendo al Tarnished recuperar un collar robado — su collar de serpiente, prueba ritual de su identidad real.'
      ),
      h(2, 'Historia detallada'),
      p(
        'Su rostro humano es máscara cosmológica. Bajo él vive una serpiente del linaje pre-Orden Dorado — posiblemente vinculada al ',
        link('Eiglay', 'concept', 'serpent-god-eiglay'),
        ' que devoró a Rykard. Su nombre verdadero es Zorayas; "Rya" es alias funcional para operar en la sociedad humana.'
      ),
      p(
        'Cuando ',
        link('Tanith', 'character', 'tanith'),
        ' cae tras la derrota de Rykard, Rya revela su forma serpentina como Zorayas. La transformación no es magia — es solo dejar de mentir. Su cuerpo siempre fue serpentino; el rostro humano era el disfraz.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Rya/Zorayas encarna la identidad como disfraz cosmológico. Lo que llamamos "Rya" es lo que el cosmos del Orden Dorado permite ver de Zorayas. Su transformación final es solo dejar de mentir. Bajo el vestido, escamas. Bajo las escamas, hambre.'
      )
    ],
    confirmed: [
      'Rya es reclutadora aristocrática del Volcano Manor',
      'Su forma real es serpiente del linaje pre-Orden',
      'Su nombre verdadero es Zorayas',
      'Revela su forma tras la caída de Tanith'
    ],
    inferred: [
      'Su línea genética se vincula a Eiglay o entidad serpiente similar',
      'La sociedad humana del Orden Dorado no aceptaría su forma real',
      'Su disfraz humano requiere mantenimiento ritual constante'
    ],
    theories: [
      'Es una de las últimas hijas puras del linaje serpiente pre-Orden',
      'Conoce secretos sobre Eiglay que Tanith no domina',
      'Podría haber heredado el rol de anfitriona del Volcano Manor tras la caída de Tanith'
    ],
    ambiguous: [
      'Cuánto del conocimiento ritual de Tanith comparte',
      'Si su lealtad a Rykard es genuina o solo conveniencia',
      'Si existieron otros como ella en otras eras'
    ],
    relatedCharacters: ['rykard', 'tanith'],
    relatedFactions: ['volcano-manor', 'man-serpents'],
    relatedRegions: ['liurnia', 'mt-gelmir'],
    relatedConcepts: ['serpent-god-eiglay', 'crucible'],
  },

  boggart: {
    summary:
      'Blackguard Big Boggart es pescador del pueblo errante que se disfrazó dentro de una jarra para sobrevivir. Vende cebos y técnicas. Su risa se escucha desde dentro de la cerámica. Si rompes la jarra, lo matas — y su muerte revela que la persecución del pueblo nómada continúa post-mortem.',
    deepLore: [
      h(2, 'Resumen esencial'),
      p(
        link('Boggart', 'character', 'boggart'),
        ' es miembro del pueblo de los ',
        link('Mercaderes Nómadas', 'faction', 'nomadic-merchants'),
        ' que sobrevivió disfrazándose dentro de una jarra gigante. Su tradición pesquera continúa — vende cebos, comparte técnicas — pero ahora bajo cerámica protectora.'
      ),
      h(2, 'Historia detallada'),
      p(
        'Aparece en costas dispersas de las Tierras Intermedias: Limgrave, Liurnia, otros puntos costeros. Su oficio nunca cambia: pescar, vender, conversar amablemente con quien pase. La persecución del pueblo nómada que ',
        link('Kale', 'character', 'merchant-kale'),
        ' representa visiblemente, Boggart la ha convertido en disfraz literal.'
      ),
      p(
        link('Patches', 'character', 'patches'),
        ' puede asesinar a Boggart en algunas variantes para vender su Bell Bearing. La caza nocturna del Bell Bearing Hunter en su sitio confirma que la persecución contra los nómadas continúa post-mortem: incluso los pescadores pacíficos son blanco ritual.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Boggart encarna el disfraz como supervivencia. Se vuelve jarra para seguir siendo persona. Su risa desde dentro de la cerámica es prueba de que la humanidad puede sobrevivir incluso bajo formas inhumanas — pero requiere camuflaje constante. La jarra es ataúd que respira.'
      )
    ],
    confirmed: [
      'Boggart es miembro del pueblo nómada que se disfrazó dentro de una jarra',
      'Vende cebos de pescado y técnicas',
      'Aparece en costas dispersas de las Tierras Intermedias',
      'Patches puede asesinarlo en algunas variantes'
    ],
    inferred: [
      'Su disfraz fue respuesta directa a la persecución del pueblo nómada',
      'Su tradición pesquera precede al Orden Dorado',
      'Otros nómadas pueden haber adoptado disfraces similares'
    ],
    theories: [
      'Conoce a Kale y a otros nómadas supervivientes',
      'Su jarra es preparación para una eventual emergencia más grande',
      'Es uno de los últimos visibles del pueblo persiguido'
    ],
    ambiguous: [
      'Cuánto tiempo lleva dentro de la jarra',
      'Si su forma humana es completa o ya parcialmente disuelta',
      'Si hay comunicación entre nómadas dispersos'
    ],
    relatedCharacters: ['merchant-kale', 'patches', 'jar-bairn', 'alexander'],
    relatedFactions: ['nomadic-merchants', 'living-jars', 'bell-bearing-hunter'],
    relatedRegions: ['limgrave', 'liurnia'],
  },

  /* ──────── Secondary NPCs important ──────── */

  'nepheli-loux': {
    summary:
      'Nepheli Loux es Tarnished criada por Kenneth Haight, sin saber que es descendiente directa de Godfrey. Su sangre la conecta al linaje real ancestral del Orden Dorado, pero su crianza la formó como guerrera de identidad prestada. Es heredera ignorante del trono Stormveil.',
    deepLore: [
      h(2, 'Resumen esencial'),
      p(
        'Nepheli es Tarnished de Limgrave, hija adoptiva de ',
        link('Kenneth Haight', 'character', 'kenneth-haight'),
        '. Su biología la conecta a ',
        link('Godfrey', 'character', 'godfrey'),
        ' como descendiente directa: lleva sangre de Hoarah Loux en sus venas, pero la crianza la educó en otra identidad.'
      ),
      h(2, 'Historia detallada'),
      p(
        'Llegó a las Tierras Intermedias con Kenneth como padre adoptivo. Su crianza fue marcial pero sin pretensión real. Aprendió a pelear como noble menor de Limgrave, no como heredera de un linaje cosmológico. La verdad sobre su origen le es ocultada deliberadamente — Kenneth la protegía de las consecuencias políticas que el conocimiento traería.'
      ),
      p(
        'Cuando el Tarnished derrota a ',
        link('Godrick', 'character', 'godrick'),
        ', ',
        link('Stormveil', 'region', 'stormveil'),
        ' queda sin gobernante. Nepheli puede ser instalada como nueva Señora — recuperando el castillo ancestral de su bisabuelo perdido. Su instalación es restauración del linaje legítimo: Godrick, descendiente lateral diluido, es desplazado por Nepheli, descendencia directa.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Nepheli encarna la heredera ignorante. Lleva en la sangre el peso del Orden Dorado y vive sin saberlo. Es Tarnished por sangre y por crianza, dos veces — y la doble condición la hace inmune a la pretensión que arruinó a Godrick.'
      )
    ],
    confirmed: [
      'Nepheli es Tarnished criada por Kenneth Haight',
      'Es descendiente directa de Godfrey',
      'Puede ser instalada como Señora de Stormveil',
      'Recibe el Talismán de los Susurros si se sigue su quest hasta el final'
    ],
    inferred: [
      'Kenneth ocultó su origen deliberadamente',
      'Su sangre la posicionaría como heredera más legítima que Godrick',
      'Su crianza fuera del régimen central la protegió de las complicaciones de la sucesión'
    ],
    theories: [
      'Kenneth conoce el linaje completo y la protege específicamente',
      'Otros descendientes laterales de Godfrey existen en otras regiones',
      'Su instalación en Stormveil podría revertir parcialmente el deterioro del Linaje Dorado'
    ],
    ambiguous: [
      'Si Nepheli sospecha algo sobre su origen real',
      'Cuánto sabe Gideon sobre su linaje',
      'Si su sangre Empyrean es activa o latente'
    ],
    relatedCharacters: ['godfrey', 'kenneth-haight', 'gideon', 'godrick', 'roderika'],
    relatedFactions: ['orden-dorado', 'golden-lineage'],
    relatedRegions: ['limgrave', 'stormveil'],
    relatedConcepts: ['tarnished', 'great-rune'],
  },

  sellen: {
    summary:
      'Sorceress Sellen estudió las estrellas primigenias junto a Azur y Lusat hasta exceder los límites de Raya Lucaria. Su excomunión la dejó libre para descubrir lo que la Academia prohibía. Su iluminación final es geometría celestial: cuerpo suspendido entre piedras, parcialmente convertida en constelación viviente.',
    deepLore: [
      h(2, 'Resumen esencial'),
      p(
        'Sellen fue alumna prodigio de ',
        link('Raya Lucaria', 'region', 'raya-lucaria'),
        ' antes de su excomunión. Practicaba magia gravitacional avanzada y estudiaba la ',
        link('Corriente Primigenia', 'concept', 'primeval-current'),
        ' junto a sus maestros ',
        link('Azur', 'character', 'azur'),
        ' y ',
        link('Lusat', 'character', 'lusat'),
        '.'
      ),
      h(2, 'Historia detallada'),
      p(
        'La Academia la excomulgó cuando su investigación excedió los límites permitidos. Se refugió en Waypoint Ruins en Limgrave, donde sigue ofreciendo enseñanza de hechicería al Tarnished. Su quest dirige a recuperar a los Master Sorcerers excomulgados (',
        link('Azur', 'character', 'azur'),
        ', ',
        link('Lusat', 'character', 'lusat'),
        ') y a fragmentos de su propio cuerpo dispersos por las Tierras Intermedias.'
      ),
      p(
        'Entrenó a ',
        link('Radahn', 'character', 'radahn'),
        ' en su juventud — la magia gravitacional que Radahn usó para bloquear las estrellas procede de ella. Su relación con ',
        link('Jerren', 'character', 'jerren'),
        ', maestro de armas del Festival, es histórica y posiblemente romántica.'
      ),
      p(
        'Su quest final culmina con su transformación parcial en cuerpo cósmico. Ya no puede caminar — su cuerpo suspendido entre piedras es geometría celestial activa. Si el Tarnished lo permite, será asesinada por Jerren al final del Festival como acto piadoso.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Sellen es la prueba de que el conocimiento sobrepasa la carne. Su iluminación final no es metáfora: literalmente se convierte en constelación. Su tragedia es la del sabio que mira las estrellas demasiado tiempo y descubre que las estrellas ya lo están mirando de vuelta — y absorbiendo.'
      )
    ],
    confirmed: [
      'Sellen fue alumna excomulgada de Raya Lucaria',
      'Estudió la Corriente Primigenia con Azur y Lusat',
      'Entrenó a Radahn en magia gravitacional',
      'Tuvo relación histórica con Jerren',
      'Su transformación final la suspende parcialmente como cuerpo cósmico'
    ],
    inferred: [
      'Su excomunión fue prevención — la Academia temía lo que ya sabía',
      'Sus maestros sufrieron el mismo destino cósmico antes que ella',
      'Su asesinato por Jerren es acto piadoso, no traición'
    ],
    theories: [
      'Sellen, Azur y Lusat formaron triángulo cósmico que sigue completándose',
      'Si los tres se reunieran cosmológicamente, podrían constituir un Lord Elden alternativo',
      'Conoció al Festival de Radahn antes que Jerren — coordinó implícitamente con él'
    ],
    ambiguous: [
      'Cuánto tiempo lleva en transformación',
      'Si conserva consciencia plena o solo función ritual',
      'Si su muerte cierra completamente el linaje cósmico o solo lo aplaza'
    ],
    relatedCharacters: ['azur', 'lusat', 'radahn', 'jerren', 'rennala'],
    relatedFactions: ['raya-lucaria'],
    relatedRegions: ['limgrave', 'sellia', 'caelid'],
    relatedConcepts: ['glintstone', 'primeval-current', 'stars-and-fate-concept'],
    relatedTimelineEvents: ['festival-radahn'],
  },

  jerren: {
    summary:
      'Jerren oficia el Festival de Radahn como Maestro de Armas, devolviendo dignidad ritual a su general arruinado. Su honor es absoluto. Tuvo relación histórica con Sellen. Si así se le pide, ejecuta a su antigua amante al final de la quest — el deber por encima del amor.',
    deepLore: [
      h(2, 'Resumen esencial'),
      p(
        'Jerren es Maestro de Armas de los ',
        link('Redmanes', 'faction', 'redmanes'),
        ' y oficiante principal del ',
        link('Festival de Radahn', 'timeline', 'festival-radahn'),
        '. Su rol cosmológico: coordinar la eutanasia ritual de su general arruinado para devolverle la dignidad de morir en combate.'
      ),
      h(2, 'Historia detallada'),
      p(
        'Tuvo relación histórica con ',
        link('Sellen', 'character', 'sellen'),
        ' antes de la excomunión de ella. Su separación fue producto de los caminos divergentes: Jerren al servicio marcial de Radahn en Caelid, Sellen al exilio académico tras la Academia.'
      ),
      p(
        'Cuando organiza el Festival, su decisión es múltiple: 1) honra ritualmente a Radahn devolviéndole la dignidad de morir como guerrero, 2) coordina implícitamente con la quest cosmológica de Ranni (la muerte de Radahn libera las estrellas), 3) acepta la posibilidad de tener que ejecutar a Sellen al final de su transformación.'
      ),
      p(
        'Si el Tarnished completa la quest de Sellen permitiéndole excederse cosmológicamente, Jerren es quien la ejecuta — su honor le obliga a impedir que ella se vuelva amenaza activa al cosmos. Su acero llora antes de cortar, pero corta igual.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Jerren encarna el honor que mata por amor. Mata a quien ama porque permitirle vivir como aberración sería peor traición. Su deber es elegir la versión menos cruel de la crueldad. Su tragedia es la del oficiante perfecto: nunca falla en su rol, siempre paga el precio del rol.'
      )
    ],
    confirmed: [
      'Jerren es Maestro de Armas de los Redmanes',
      'Oficia el Festival de Radahn',
      'Tuvo relación histórica con Sellen',
      'Puede ejecutar a Sellen al final de su quest si el jugador lo pide'
    ],
    inferred: [
      'Coordinó implícitamente con la quest de Ranni a través del Festival',
      'Su honor le impide hacer excepciones por afecto personal',
      'Conocía el riesgo de la transformación de Sellen antes de que ocurriera'
    ],
    theories: [
      'Sellen lo visitó secretamente antes del Festival',
      'El Festival fue diseñado por ambos en colaboración silenciosa',
      'Su decisión final sobre Sellen fue acordada con ella'
    ],
    ambiguous: [
      'Si conserva amor por Sellen tras la separación',
      'Si conoce el efecto cosmológico exacto de matar a Radahn',
      'Si los Redmanes apoyan plenamente sus decisiones rituales'
    ],
    relatedCharacters: ['radahn', 'sellen', 'alexander', 'patches'],
    relatedFactions: ['redmanes'],
    relatedRegions: ['caelid', 'redmane-castle'],
    relatedConcepts: ['scarlet-rot', 'great-rune'],
    relatedTimelineEvents: ['festival-radahn', 'batalla-aeonia'],
    relatedEndings: ['age-of-stars'],
  },

  enia: {
    summary:
      'Enia es Doncella de Dedos en la Mesa Redonda, traductora oficial de los pronunciamientos de los Dos Dedos. Sirve a un dios que ya no contesta con claridad. Sus rituales continúan por inercia litúrgica — la forma de la fe sobrevive al objeto de la fe.',
    deepLore: [
      h(2, 'Resumen esencial'),
      p(
        link('Enia', 'character', 'enia'),
        ' es la ',
        link('Lectora de Dedos', 'faction', 'finger-readers'),
        ' principal de la Mesa Redonda. Recibe al Tarnished, lo unge formalmente como aspirante al trono Elden, y media entre los pronunciamientos de los ',
        link('Dos Dedos', 'faction', 'dos-dedos'),
        ' y los aspirantes humanos.'
      ),
      h(2, 'Historia detallada'),
      p(
        'Su función es traducción ritual. Los Dos Dedos no piensan — traducen voluntad de la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' a través de gestos físicos. Esos gestos requieren a su vez ser traducidos a palabras humanas. Enia es el último eslabón de la cadena: Voluntad Mayor → Dos Dedos → Lectora → Tarnished.'
      ),
      p(
        'La cadena, sin embargo, está rota. Los Dos Dedos están deteriorándose físicamente. Sus pronunciamientos son cada vez más vagos. Algunos están podridos visiblemente. Enia continúa sus rituales aunque sospecha que ya nadie escucha del otro lado. Cambia las Grandes Runas restauradas por bendiciones rúnicas. Atiende a los Dedos cuando estos comienzan a deteriorarse.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Enia encarna la fe que se sostiene en silencio. Continúa sus rituales aunque sospecha que la cadena divina está rota. La forma de la fe sobrevive al objeto de la fe. Sus dedos ciegos siguen leyendo dedos divinos que ya no responden. La liturgia continúa precisamente porque alguien tiene que mantenerla, incluso cuando ya no importa.'
      )
    ],
    confirmed: [
      'Enia es Lectora de Dedos en la Mesa Redonda',
      'Bautiza al Tarnished como aspirante al trono Elden',
      'Cambia Grandes Runas por bendiciones rúnicas',
      'Atiende a los Dos Dedos durante su deterioro'
    ],
    inferred: [
      'Sospecha que la Voluntad Mayor se ha retirado parcialmente',
      'Sigue los rituales por deber estructural, no por convicción ingenua',
      'Otras Lectoras existen pero ella es la principal de Roundtable Hold'
    ],
    theories: [
      'Conoce el secreto Radagon-es-Marika antes que Goldmask',
      'Sus visiones le mostraron eras pasadas y futuras',
      'Su ceguera es elección ritual, no defecto físico'
    ],
    ambiguous: [
      'Cuánto tiempo lleva oficiando',
      'Si sus interpretaciones son fieles o ya creativas',
      'Si los Dos Dedos podridos siguen comunicando algo o solo gimen'
    ],
    relatedCharacters: ['marika', 'gideon', 'goldmask', 'corhyn'],
    relatedFactions: ['dos-dedos', 'finger-readers', 'orden-dorado'],
    relatedRegions: ['leyndell'],
    relatedConcepts: ['voluntad-mayor', 'great-rune'],
    relatedTimelineEvents: ['two-fingers-roundtable'],
  },

  alexander: {
    summary:
      'Alexander, Olla Guerrero, es Living Jar con corazón de héroe. Su forma de cerámica oculta un alma marcial que aspira a la grandeza. Combate junto al Tarnished en el Festival de Radahn como guerrero invitado. Su muerte es cómica y trágica simultáneamente — un héroe en un cuerpo absurdo.',
    deepLore: [
      h(2, 'Resumen esencial'),
      p(
        'Alexander es ',
        link('Living Jar', 'faction', 'living-jars'),
        ' del pueblo de ',
        link('Jarburg', 'faction', 'living-jars'),
        ' que decidió convertirse en guerrero. Su cuerpo es jarra cerámica con alma humana parcialmente disuelta dentro. Su técnica marcial usa el peso de su propia jarra como arma.'
      ),
      h(2, 'Historia detallada'),
      p(
        'Aparece primero en Limgrave atascado en un pozo — el Tarnished lo libera empujándolo. Su ruta lo lleva al Festival de Radahn en Caelid, donde lucha como guerrero invitado por ',
        link('Jerren', 'character', 'jerren'),
        '. Su honor marcial es genuino aunque su cuerpo lo contradice constantemente.'
      ),
      p(
        'Tras el Festival, sigue su carrera marcial visitando otras regiones. Se enfrenta a un Magma Wyrm en Mt Gelmir y pierde. Reaparece en el Bestial Sanctum buscando combate digno. Su muerte final ocurre durante un combate ritual con el Tarnished — su cuerpo se rompe en pedazos cerámicos y su alma se libera.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Alexander encarna la heroicidad como elección, no como sangre. Demuestra que el espíritu marcial es independiente del linaje. Su tragedia es que no puede cambiar la forma que el cosmos le impone. Su corazón late dentro de una jarra. Cuando se rompe, suena como cerámica — pero quien escucha de cerca oye el rugido de un dios pequeño.'
      )
    ],
    confirmed: [
      'Alexander es Living Jar con vocación marcial',
      'Su quest lo lleva del pozo de Limgrave al Festival de Radahn',
      'Es derrotado por Magma Wyrm en Mt Gelmir',
      'Su muerte final es combate ritual con el Tarnished'
    ],
    inferred: [
      'Su alma humana original procede del pueblo de Jarburg',
      'Su honor marcial es genuino, no parodia',
      'Conoce a Diallos, Jar-Bairn y otros del pueblo errante'
    ],
    theories: [
      'Su jarra contiene fragmentos de un guerrero antiguo cuya alma se preservó',
      'Su muerte libera un espíritu legendario',
      'Si Jar-Bairn lo emula, completaría su linaje espiritual'
    ],
    ambiguous: [
      'Quién o qué fue antes de ser Living Jar',
      'Si conserva memoria de su forma humana original',
      'Si todos los Living Jars contienen almas humanas o solo algunos'
    ],
    relatedCharacters: ['jerren', 'patches', 'jar-bairn', 'diallos', 'radahn'],
    relatedFactions: ['living-jars', 'redmanes'],
    relatedRegions: ['limgrave', 'caelid', 'mt-gelmir', 'redmane-castle'],
    relatedTimelineEvents: ['festival-radahn'],
  },

  diallos: {
    summary:
      'Diallos Hoslow es noble pacifista que llegó a las Tierras Intermedias buscando a su sirvienta perdida Lanya. Su vida lo enseñó a no levantar la espada. Cuando finalmente la desenvaina, es para defender Jarburg contra un atacante — y muere protegiendo a niños de cerámica.',
    deepLore: [
      h(2, 'Resumen esencial'),
      p(
        link('Diallos', 'character', 'diallos'),
        ' es noble de Casa Hoslow que llegó a las Tierras Intermedias buscando a Lanya, su sirvienta personal. Su filosofía de vida fue siempre pacifista: la espada existe para no ser usada, el noble debe gobernar por palabra, no por hierro.'
      ),
      h(2, 'Historia detallada'),
      p(
        'Aparece en la Mesa Redonda en estado de melancolía profunda. Su búsqueda de Lanya nunca termina — ella ya está muerta, asesinada por los conflictos de las Tierras Intermedias post-fractura. El Tarnished puede dirigirlo a ',
        link('Tanith', 'character', 'tanith'),
        ' en el Volcano Manor (donde fracasa por su pacifismo) o a Jarburg, aldea de ',
        link('Living Jars', 'faction', 'living-jars'),
        ' en Liurnia.'
      ),
      p(
        'En Jarburg encuentra una comunidad pacífica que respeta su filosofía. Conoce a ',
        link('Jar-Bairn', 'character', 'jar-bairn'),
        ' y otros del pueblo. Cuando un atacante invade la aldea para masacrar a sus habitantes, Diallos finalmente levanta la espada por primera vez. Defiende la puerta. Mata al atacante. Muere por las heridas. Jar-Bairn sobrevive.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Diallos encarna la violencia como último recurso del pacifista. Representa el dilema del idealista: si no levantas la espada, mueren los inocentes; si la levantas, mueres tú. Su mejor lección la dio sin palabras — con la espalda apoyada en la puerta de una choza llena de niños hechos de barro.'
      )
    ],
    confirmed: [
      'Diallos es noble de Casa Hoslow',
      'Busca a Lanya, su sirvienta perdida',
      'Lanya ya está muerta cuando él llega',
      'Defiende Jarburg de un atacante y muere por ello',
      'Jar-Bairn sobrevive gracias a su sacrificio'
    ],
    inferred: [
      'Su pacifismo era convicción profunda, no ingenuidad',
      'Su fracaso en el Volcano Manor fue por incapacidad ética, no marcial',
      'Encontró en Jarburg la comunidad que su filosofía buscaba'
    ],
    theories: [
      'Conocía la posibilidad de su muerte al aceptar defender Jarburg',
      'Lanya era más que sirvienta — posible amante secreta',
      'La Casa Hoslow envió otros Hoslows que también fracasaron'
    ],
    ambiguous: [
      'Cuándo exactamente murió Lanya',
      'Si Diallos sospechaba la muerte antes de confirmarla',
      'Si la Casa Hoslow original sigue existiendo'
    ],
    relatedCharacters: ['tanith', 'patches', 'alexander', 'jar-bairn'],
    relatedFactions: ['living-jars', 'volcano-manor'],
    relatedRegions: ['liurnia', 'mt-gelmir'],
  },

  latenna: {
    summary:
      'Latenna es Albinaúrica de Caelid que sobrevivió a la masacre de su aldea. Carga el cuerpo de Lobelia, su hermana muerta, hasta el Snowfield Consagrado, hacia el Haligtree. Es peregrinación como duelo: caminar con la hermana muerta hasta un árbol que probablemente ya no las acoge.',
    deepLore: [
      h(2, 'Resumen esencial'),
      p(
        link('Latenna', 'character', 'latenna'),
        ' pertenecía a la aldea albinaúrica de Caelid antes de su masacre por Redmanes corrompidos. Sobrevivió escondida con su hermana ',
        link('Lobelia', 'character', 'latenna'),
        ' y un lobo guardián.'
      ),
      h(2, 'Historia detallada'),
      p(
        'Su hermana Lobelia murió durante la huida. Latenna sigue cargándola simbólicamente — su misión es llegar al ',
        link('Haligtree', 'region', 'haligtree'),
        ' con los restos de la hermana, cumpliendo así el éxodo Albinauric que ',
        link('Miquella', 'character', 'miquella'),
        ' había prometido. Sigue al Tarnished como invocación espiritual.'
      ),
      p(
        'La quest culmina en el ',
        link('Snowfield Consagrado', 'region', 'consecrated-snowfield'),
        ' donde Latenna espera ser llevada al Haligtree. El acceso real requiere completar el ritual en ',
        link('Ordina', 'region', 'ordina'),
        '. Si el Tarnished la lleva al borde del bosque sagrado, ella muere allí — hasta donde puede llegar como espíritu.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Latenna encarna la peregrinación como duelo. Camina con la hermana muerta hasta un árbol que probablemente ya no las acoge. Su lobo es el guía. Lobelia es la carga. El árbol es el destino — o la promesa de que existió uno. Su tragedia es que llega al borde, no al centro.'
      )
    ],
    confirmed: [
      'Latenna es Albinaúrica superviviente de Caelid',
      'Su hermana Lobelia murió durante la huida',
      'Sigue al Tarnished como invocación espiritual',
      'Espera ser llevada al Haligtree'
    ],
    inferred: [
      'La masacre de su aldea fue por Redmanes corrompidos por la Podredumbre',
      'Cumple peregrinación ritual del éxodo Albinauric prometido por Miquella',
      'Su lobo guardián es ancestral del pueblo Albinauric'
    ],
    theories: [
      'Lobelia conserva alguna forma de presencia residual mientras Latenna la carga',
      'Si Latenna llegara realmente a Elphael, completaría un rito interrumpido',
      'Otros Albinaurics supervivientes esperan en otras regiones'
    ],
    ambiguous: [
      'Cuándo exactamente ocurrió la masacre',
      'Si Lobelia conserva alguna forma post-mortem',
      'Si Latenna sabe que Miquella ya no está en el Haligtree'
    ],
    relatedCharacters: ['miquella', 'malenia', 'albus'],
    relatedFactions: ['albinauricos' ],
    relatedRegions: ['caelid', 'consecrated-snowfield', 'haligtree', 'ordina'],
    relatedConcepts: ['unalloyed-gold'],
  },

  hyetta: {
    summary:
      'Hyetta es doncella ciega cuya iluminación es maldición: cada Granos Brillante (que en realidad son ojos humanos) que consume la acerca a la verdad frenética. Cuando finalmente "ve", lo que ve es el fin universal. Se convierte en doncella del Señor de la Llama Frenética.',
    deepLore: [
      h(2, 'Resumen esencial'),
      p(
        link('Hyetta', 'character', 'hyetta'),
        ' aparece como doncella ciega vagando por las Tierras Intermedias. Pide al Tarnished encontrar Granos Brillantes (Shabriri Grapes) para saciar su sed. Lo que ella no sabe — y lo que el Tarnished descubre tarde — es que las "uvas" son ojos humanos extraídos.'
      ),
      h(2, 'Historia detallada'),
      p(
        'Cada Grano consumido le devuelve gradualmente la visión. Pero la visión que recobra no es ordinaria: es la "frenética verdad" — la doctrina nihilista de los ',
        link('Tres Dedos', 'faction', 'tres-dedos'),
        '. Cuanto más ve, más se aleja de la inocencia. Su transformación es gradual y voluntaria: cada Grano que pide es escalón hacia el horror cosmológico.'
      ),
      p(
        'Cuando finalmente ve plenamente, ya es doncella del Señor de la Llama Frenética. Guía al Tarnished a la cripta sellada bajo Leyndell donde residen los Tres Dedos. Si el Tarnished acepta el pacto, ella se convierte en su doncella post-frenesí — ',
        link('Melina', 'character', 'melina'),
        ' lo abandona, Hyetta lo recibe. Su iluminación termina en posesión cosmológica.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Hyetta encarna la revelación como herida. Ve por primera vez precisamente porque acepta una verdad que destruye toda forma. Su iluminación es una forma de ceguera más profunda. Cada uva la acerca al horror; cada ojo la aleja de la inocencia. Cuando finalmente ve, lo que ve es el fin.'
      )
    ],
    confirmed: [
      'Hyetta vaga ciega por las Tierras Intermedias pidiendo Granos Brillantes',
      'Los Granos son ojos humanos extraídos',
      'Cada Grano consumido le devuelve gradualmente la visión',
      'Su iluminación final la convierte en doncella de la Llama Frenética'
    ],
    inferred: [
      'Es contraparte estructural de Melina — doncella oficial del final frenético',
      'Su transformación es gradual pero voluntaria',
      'Su ceguera original podría haber sido protección cosmológica'
    ],
    theories: [
      'Es próximo huésped de Shabriri tras Yura',
      'Conoce el plan de los Tres Dedos antes que el Tarnished',
      'Su nombre original no es Hyetta sino algo borrado por la transformación'
    ],
    ambiguous: [
      'Si las uvas son ojos suyos también o solo ajenos',
      'Cuándo exactamente comenzó la transformación',
      'Si conserva alguna agencia tras la iluminación final'
    ],
    relatedCharacters: ['shabriri', 'melina'],
    relatedFactions: ['tres-dedos', 'frenzied-victims'],
    relatedRegions: ['liurnia', 'leyndell'],
    relatedConcepts: ['frenzied-flame', 'dioses-exteriores'],
    relatedEndings: ['frenzied-flame'],
  },

  /* ════════════════ Cierre Total — últimos NPCs compact ════════════════ */

  'kenneth-haight': {
    summary:
      'Kenneth Haight es noble destronado de Limgrave, lord nominal del Fuerte Haight cuando el Tarnished lo encuentra. Padre adoptivo de Nepheli Loux — la crió sin contarle que es descendiente directa de Godfrey. Pelea por una colina mientras el cosmos se desgarra; se aferra a un título cuyo significado se ha vaciado.',
    deepLore: [
      h(2, 'Resumen esencial'),
      p(
        'Kenneth aparece en una colina de Limgrave pidiendo al Tarnished liberar el Fuerte Haight de los enemigos que lo ocupan. Su lenguaje aristocrático — "Soy Kenneth Haight, undécimo del Fuerte Haight" — es residuo de protocolos cosmológicos que ya nadie sigue. Su séptimo de séptimo de séptimo del linaje original; el último vivo de su familia inmediata.'
      ),
      h(2, 'El padre adoptivo'),
      p(
        link('Nepheli Loux', 'character', 'nepheli-loux'),
        ' fue criada por Kenneth como hija propia. La verdad sobre su linaje real — descendiente directa de ',
        link('Godfrey', 'character', 'godfrey'),
        ' — Kenneth la oculta deliberadamente. Las razones nunca se enuncian, pero las inferencias son razonables: protegerla de los riesgos políticos del linaje, o quizás porque el propio Kenneth no se atreve a entregar a Nepheli al peso del Linaje Dorado real.'
      ),
      h(2, 'El destino paralelo'),
      p(
        'Si el Tarnished completa la quest de Nepheli y la corona como Señora de ',
        link('Stormveil', 'region', 'stormveil'),
        ', Kenneth migra al castillo y se autoproclama "Lord de Stormveil" — heredero por adopción del trono que su hija realmente debería gobernar por sangre. La maniobra es cómica y trágica: el padre adoptivo aprovecha la ascensión de la hija para inflar su propio rango.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Kenneth encarna la nobleza como costumbre. Recuerda lo que el Orden Dorado significaba antes de la fractura, pero ese recuerdo ya es más útil al disfraz que a la realidad. Su título sigue intacto, su autoridad ha ido por el camino que va de la batalla a la anécdota. Es prueba viva de que las jerarquías sobreviven a su contenido.'
      )
    ],
    confirmed: [
      'Kenneth es lord nominal del Fuerte Haight en Limgrave',
      'Padre adoptivo de Nepheli Loux',
      'Pide al Tarnished liberar el fuerte de enemigos',
      'Si Nepheli es coronada en Stormveil, Kenneth migra como "Lord"'
    ],
    inferred: [
      'Conoce el linaje real de Nepheli pero lo oculta deliberadamente',
      'Su pretensión nobiliaria post-fractura es residuo, no autoridad real',
      'Su séptimo undécimo del Fuerte Haight indica decadencia generacional larga'
    ],
    theories: [
      'Recibió a Nepheli de mensajeros del Orden Dorado oficial encubiertos',
      'Su propio linaje incluye sangre lateral del Linaje Dorado',
      'Sospecha que Nepheli es heredera más legítima que Godrick y la mantiene oculta por seguridad'
    ],
    ambiguous: [
      'Quién entregó originalmente a Nepheli a su cuidado',
      'Si Nepheli sospecha algo sobre su origen real',
      'Si Kenneth siente afecto genuino o pragmatismo aristocrático'
    ],
    relatedCharacters: ['nepheli-loux', 'godfrey', 'godrick', 'gideon'],
    relatedFactions: ['orden-dorado', 'golden-lineage'],
    relatedRegions: ['limgrave', 'stormveil'],
    relatedConcepts: ['great-rune', 'tarnished'],
  },

  roderika: {
    summary:
      'Roderika es doncella espiritual única superviviente de Stormhill: su grupo de Tarnished fue masacrado antes de llegar a Stormveil. Carga el peso de las almas que no pudo proteger. En la Mesa Redonda aprende el arte de las cenizas con Hewg, transformando duelo en oficio: ya que no pudo salvar a sus compañeros, los hace acompañarla como espectros invocables.',
    deepLore: [
      h(2, 'Resumen esencial'),
      p(
        'El Tarnished encuentra a Roderika al pie de Stormhill, en estado de shock catatónico. Es la única superviviente de un grupo Tarnished masacrado en el camino. Sus compañeros muertos no pueden ser sepultados — la violencia fue tan reciente que sus almas todavía vagan. Roderika lleva consigo el dolor sin cuerpo de varios.'
      ),
      h(2, 'La aprendiz'),
      p(
        'El Tarnished la dirige a la ',
        link('Mesa Redonda', 'region', 'leyndell'),
        ' donde puede encontrar refugio. Allí descubre su afinidad con el arte de las cenizas espirituales: conjurar a los muertos como aliados invocables. ',
        link('Hewg', 'character', 'hewg'),
        ', el maestro herrero, la enseña sin pretender mentor — solo accede porque ella insiste con dulzura.'
      ),
      h(2, 'El oficio del duelo'),
      p(
        'Roderika se convierte en la maestra de cenizas espirituales del juego. Mejora las invocaciones del Tarnished convirtiendo cenizas básicas en versiones potenciadas. Cada espíritu mejorado es un duelo trabajado — una transmutación del dolor original en herramienta funcional. Sus fantasmas pelean por ella ahora; cuando lo hacen, sonríe — porque al menos siguen existiendo.'
      ),
      h(2, 'La relación con Hewg'),
      p(
        'Su relación con Hewg evoluciona del respeto profesional al afecto silencioso. Roderika nota la maldición del herrero — la imposibilidad de morir — y le da, sin saberlo, lo que él más necesita: alguien que crea en su capacidad de hacer algo nuevo. Su cariño implícito es una forma de devolverle a Hewg parte de la humanidad que la diosa le había arrancado.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Roderika encarna el duelo convertido en oficio. Transforma trauma en herramienta: ya que no pudo salvar a sus compañeros, los hace acompañarla en cada batalla. Es la prueba más limpia del juego de que el cariño sobrevive a la pérdida — y de que la pérdida puede convertirse, con tiempo y trabajo, en algo útil sin dejar de ser pérdida.'
      )
    ],
    confirmed: [
      'Roderika sobrevive a la masacre de su grupo Tarnished en Stormhill',
      'Es dirigida a la Mesa Redonda por el Tarnished',
      'Aprende el arte de las cenizas espirituales con Hewg',
      'Mejora las invocaciones espirituales del Tarnished'
    ],
    inferred: [
      'Su afinidad espiritual procede del trauma de la masacre',
      'Su relación con Hewg evoluciona a afecto silencioso',
      'Cada invocación que potencia es un proceso de duelo'
    ],
    theories: [
      'Sus compañeros caídos conservan algún tipo de presencia residual a través de ella',
      'Si Hewg eventualmente acepta la maldición de la diosa, Roderika sería la única capaz de liberarlo',
      'Su don es heredado de una línea familiar de Doncellas Espirituales pre-Orden'
    ],
    ambiguous: [
      'Cuántos compañeros tenía exactamente antes de la masacre',
      'Quién o qué los masacró',
      'Si conoce el pasado real de Hewg como titán'
    ],
    relatedCharacters: ['hewg', 'nepheli-loux', 'godrick'],
    relatedFactions: ['orden-dorado'],
    relatedRegions: ['stormveil', 'leyndell'],
    relatedConcepts: ['tarnished', 'grace'],
  },

  hewg: {
    summary:
      'Hewg es maestro herrero de la Mesa Redonda, antiguo titán encadenado al taller por una maldición divina. Una diosa lo condenó a no poder morir; ahora desea ser asesinado por las armas que él mismo forja. Roderika, sin saberlo, le devuelve gradualmente la esperanza humana.',
    deepLore: [
      h(2, 'Resumen esencial'),
      p(
        'Hewg es titán antiguo de raza casi extinta — posiblemente vinculado a los Gigantes del Fuego o a alguna línea pre-Orden similar. Una diosa cuya identidad nunca se enuncia (probable: Marika misma, o una entidad relacionada) lo maldijo a la inmortalidad forzada. Su cuerpo no envejece, no se enferma, no puede ser herido fatalmente por causas comunes. Solo armas específicas — las que él mismo ayuda a forjar — podrían cortar la maldición.'
      ),
      h(2, 'El maestro herrero'),
      p(
        'Encadenado a su taller en la ',
        link('Mesa Redonda', 'region', 'leyndell'),
        ', Hewg sirve como herrero principal de los Tarnished. Forja todo: armas mejoradas, escudos, talismanes potenciados. Su técnica es ancestral — combina conocimientos pre-Orden con tradiciones doradas oficiales. Cada arma que sale de su martillo es objeto cosmológicamente refinado.'
      ),
      h(2, 'El deseo de morir'),
      p(
        'Confiesa al Tarnished, en un momento específico de su quest, que desea ser eliminado por uno de los aspirantes. Su lenguaje es deliberado: no busca suicidarse — busca ser asesinado por las armas que él mismo forjó. La paradoja es ritual: el herrero pide que su trabajo lo libere de su trabajo. La maldición lo mantiene; las armas que la maldición permite forjar son, en teoría, lo único que podría romperla.'
      ),
      h(2, 'La luz de Roderika'),
      p(
        link('Roderika', 'character', 'roderika'),
        ' lo cambia gradualmente. Su afecto silencioso — el respeto profesional que evoluciona en cariño — le devuelve a Hewg algo que la maldición le había arrancado: la posibilidad de tener algo nuevo que perder. Si Hewg muere ahora, deja a alguien atrás. La ironía cósmica es completa: la maldición lo condenó a no morir, y la única razón emocional para querer vivir le llegó precisamente cuando llevaba siglos pidiendo morir.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Hewg encarna la inmortalidad como castigo. Es la inversa de Marika: ella construyó el régimen sobre la inmortalidad ritualizada del Árbol Áureo; Hewg fue condenado individualmente al mismo principio. Su tragedia es inversa también — Marika rogó implícitamente para no haber sellado la Muerte; Hewg ruega explícitamente que alguien lo mate. Ninguno es escuchado por el cosmos.'
      )
    ],
    confirmed: [
      'Hewg es titán encadenado por maldición divina',
      'Sirve como maestro herrero en la Mesa Redonda',
      'No puede morir por causas comunes',
      'Confiesa al Tarnished que desea ser eliminado',
      'Su relación con Roderika evoluciona a afecto silencioso'
    ],
    inferred: [
      'Es contemporáneo de eras pre-Orden o muy tempranas del régimen',
      'La diosa que lo maldijo es probablemente Marika o entidad relacionada',
      'Solo armas que él mismo forja podrían cortar la maldición'
    ],
    theories: [
      'Hewg fue uno de los Gigantes del Fuego encadenado tras la guerra',
      'Su maldición fue castigo por intentar forjar un arma capaz de matar dioses',
      'Si Roderika alcanza nivel suficiente, podría ser quien lo libere'
    ],
    ambiguous: [
      'Identidad exacta de la diosa que lo maldijo',
      'Cuántos siglos lleva encadenado',
      'Si su martillo es residuo de su forma titánica original'
    ],
    relatedCharacters: ['roderika', 'marika', 'iji'],
    relatedFactions: ['fire-giants', 'orden-dorado'],
    relatedRegions: ['leyndell'],
    relatedConcepts: ['destined-death'],
  },

  boc: {
    summary:
      'Boc es Misbegotten sastre de corazón delicado. Su madre lo abandonó por su forma. Cose vestidos para extraños esperando que alguien le diga que es hermoso. Es el único Misbegotten de las Tierras Intermedias cuya identidad gira en torno al cuidado del otro, no a la rabia o la violencia.',
    deepLore: [
      h(2, 'Resumen esencial'),
      p(
        'Boc pertenece a la raza de los ',
        link('Misbegotten', 'faction', 'misbegotten'),
        ' — humanos malformados clasificados como aberraciones por el Orden Dorado. Pero su carácter es excepcional dentro de su categoría: donde otros Misbegotten responden con violencia a la opresión, Boc respondió con dulzura. Aprendió costura. Cose para quien sea.'
      ),
      h(2, 'La madre que lo abandonó'),
      p(
        'La historia personal de Boc es el dolor estructural de su raza llevado al caso individual. Su madre — humana — lo abandonó al verlo nacer Misbegotten. Boc creció solo, aprendiendo costura por necesidad y por afición. Su confesión al Tarnished es directa: "Mi madre… ella me dijo que yo era hermoso. Pero solo una vez". Esa única vez le sostiene la identidad entera.'
      ),
      h(2, 'El sastre del Tarnished'),
      p(
        'Cuando el Tarnished lo encuentra en Liurnia, Boc está siendo atacado por sus propios iguales — Misbegotten enloquecidos por la rabia. El Tarnished lo rescata. Desde ese momento, Boc se convierte en sastre personal del Tarnished: arregla la armadura, repara los rasgones, mejora la apariencia ritual del aspirante.'
      ),
      h(2, 'La transformación opcional'),
      p(
        'Si el Tarnished completa la quest de ',
        link('Rennala', 'character', 'rennala'),
        ' y obtiene una invocación específica del rito del Renacimiento, puede ofrecérsela a Boc. La invocación lo transforma temporalmente en humano. Pero Boc rechaza la transformación cuando el Tarnished le ofrece la opción real: prefiere ser quien es sabiendo que alguien lo aceptó como tal. La aceptación pesa más que la transformación.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Boc encarna la belleza como ofrecimiento. No quiere conquistar nada — solo que alguien lo mire sin asco. Su tragedia y su gracia es saber que el cariño existe, aunque no para él (excepto del Tarnished). Cada hilo que cose es una pregunta: ¿soy suficiente? Y cada armadura reparada es una respuesta provisional: para alguien, sí.'
      )
    ],
    confirmed: [
      'Boc es Misbegotten sastre de Liurnia',
      'Su madre lo abandonó al verlo nacer',
      'Es atacado por otros Misbegotten enloquecidos cuando el Tarnished lo encuentra',
      'Cose y mejora la armadura del Tarnished',
      'Puede ser transformado en humano usando una invocación de Rennala'
    ],
    inferred: [
      'Su carácter dulce es excepcional dentro de su raza',
      'Su única afirmación maternal sostiene su identidad entera',
      'Rechaza la transformación si el Tarnished lo acepta como es'
    ],
    theories: [
      'Boc fue criado en secreto por algún Misbegotten anciano antes de quedar solo',
      'Su don con la costura procede de una tradición Misbegotten pre-revuelta',
      'Si Boc sobreviviese al final del juego, podría iniciar una comunidad nueva de Misbegotten pacíficos'
    ],
    ambiguous: [
      'Identidad de su madre',
      'Si sobrevive más allá del final del juego',
      'Si conserva contacto con otros Misbegotten supervivientes'
    ],
    relatedCharacters: ['rennala', 'miquella'],
    relatedFactions: ['misbegotten' ],
    relatedRegions: ['liurnia', 'limgrave'],
    relatedConcepts: ['crucible', 'rebirth'],
  },

  'jar-bairn': {
    summary:
      'Jar-Bairn es el joven Living Jar de Jarburg, criado por Iris su tutora. Aspira a ser Olla Guerrera como Alexander. Sobrevive al ataque de invasores gracias al sacrificio de Diallos. Es la inocencia preservada por sangre adulta — vive porque otros eligieron no seguir viviendo.',
    deepLore: [
      h(2, 'Resumen esencial'),
      p(
        'Jar-Bairn habita la aldea de Jarburg, comunidad de ',
        link('Living Jars', 'faction', 'living-jars'),
        ' en Liurnia. Es el más joven de su pueblo — una jarra cerámica pequeña con alma humana parcialmente disuelta dentro. Iris, su tutora, lo cría con dulzura. Su modelo simbólico es ',
        link('Alexander', 'character', 'alexander'),
        ', el Olla Guerrera legendario de su raza.'
      ),
      h(2, 'La aldea pacífica'),
      p(
        'Jarburg es uno de los pocos lugares plenamente no-violentos de las Tierras Intermedias. Sus habitantes cultivan flores, cuidan a los más jóvenes, mantienen tradiciones rituales sin pretensiones cosmológicas. La paz es deliberada: el pueblo eligió esta forma de existencia precisamente para escapar de las violencias del régimen exterior.'
      ),
      h(2, 'El ataque y el sacrificio'),
      p(
        'En cierto momento de su quest, un atacante humano invade Jarburg para masacrar a sus habitantes. Los Living Jars no son combatientes — son frágiles cerámicamente. Sin defensa, la aldea entera caería. ',
        link('Diallos', 'character', 'diallos'),
        ', noble pacifista que había encontrado refugio espiritual en Jarburg, levanta la espada por primera vez en su vida. Defiende la puerta. Mata al atacante. Muere por las heridas. Jar-Bairn sobrevive.'
      ),
      h(2, 'El heredero'),
      p(
        'Tras el ataque, Jar-Bairn carga con el peso de ser superviviente. Su quest culmina con su decisión de viajar al ',
        link('Castillo Redmane', 'region', 'redmane-castle'),
        ' para emular a Alexander — convertirse en Olla Guerrera. La transformación es ritual: un joven que aspira a ser héroe carga el legado de un noble que murió defendiéndolo. Su viaje es continuidad cosmológica del pueblo nómada-cerámico.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Jar-Bairn encarna la inocencia preservada por sangre adulta. Vive porque Diallos eligió morir. Es niño porque otros eligieron no serlo más. Su aspiración a ser Olla Guerrera es ambición legítima — pero también es, implícitamente, agradecimiento al sacrificio del que lo salvó. Cada paso futuro es deuda devuelta.'
      )
    ],
    confirmed: [
      'Jar-Bairn es el joven Living Jar de Jarburg',
      'Iris es su tutora',
      'Aspira a ser Olla Guerrera como Alexander',
      'Diallos muere defendiéndolo de un atacante',
      'Sobrevive al ataque y planea viajar al Redmane Castle'
    ],
    inferred: [
      'Su pueblo eligió la paz deliberadamente',
      'El atacante específico procedía del Volcano Manor o de los Bloody Fingers',
      'Su transformación final lo conectaría con el legado completo de Alexander'
    ],
    theories: [
      'Iris fue alguna vez humana antes de convertirse en Living Jar',
      'Jar-Bairn contiene un alma humana específica con memoria latente',
      'La aldea de Jarburg es resto de una comunidad mucho mayor masacrada en eras pasadas'
    ],
    ambiguous: [
      'Origen del atacante específico',
      'Si Jar-Bairn alcanza Redmane Castle más allá del final del juego',
      'Si conserva memoria humana original o solo identidad cerámica nueva'
    ],
    relatedCharacters: ['diallos', 'alexander', 'boggart'],
    relatedFactions: ['living-jars', 'nomadic-merchants'],
    relatedRegions: ['liurnia', 'redmane-castle'],
  },

  albus: {
    summary:
      'Albus es Albinaúrico anciano disfrazado dentro de una jarra rota — sobreviviente literal del genocidio sistemático contra su pueblo. Custodia la mitad del Mapa Secreto del Snowfield Consagrado. La memoria es su herencia. La jarra es su camuflaje.',
    deepLore: [
      h(2, 'Resumen esencial'),
      p(
        'Albus pertenece a la raza de los ',
        link('Albinaurics', 'faction', 'albinauricos'),
        ' — humanos artificiales creados en eras antiguas, frágiles, perseguidos por el Orden Dorado. Su pueblo fue casi exterminado durante el éxodo al Haligtree, y los pocos supervivientes viven escondidos. Albus es uno de ellos.'
      ),
      h(2, 'La jarra rota'),
      p(
        'Su disfraz es literal: vive dentro de una jarra cerámica rota en la Aldea de los Albinaurics en Liurnia. Aparenta ser objeto inanimado. Cuando un visitante pasa, no responde. Solo cuando alguien lo identifica correctamente — usando información específica que solo ',
        link('Latenna', 'character', 'latenna'),
        ' u otros Albinaurics conocen — se revela como persona. La identificación es contraseña ritual; sin ella, Albus permanece estatua.'
      ),
      h(2, 'El custodio del mapa'),
      p(
        'Albus guarda la mitad del Mapa Secreto necesario para entrar al ',
        link('Snowfield Consagrado', 'region', 'consecrated-snowfield'),
        '. La otra mitad la guarda Latenna. La división es deliberada — si un atacante encontrara a uno de los dos, no obtendría el mapa completo. Es protección distribuida ante una persecución que continúa post-mortem.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Albus encarna la memoria como camuflaje. Sobrevive porque dejó de aparentar ser él mismo. Una jarra rota que recuerda más que cualquier biblioteca: contiene rituales del pueblo Albinauric, conocimiento del éxodo, geografía secreta del refugio prometido por Miquella. Su silencio aparente es archivo viviente.'
      )
    ],
    confirmed: [
      'Albus es Albinaúrico superviviente',
      'Vive disfrazado dentro de una jarra rota en Liurnia',
      'Custodia la mitad del Mapa Secreto del Snowfield',
      'Latenna guarda la otra mitad',
      'Solo se revela cuando un visitante lo identifica correctamente'
    ],
    inferred: [
      'Su disfraz fue respuesta directa a la persecución sistemática',
      'Conoce los rituales perdidos del pueblo Albinauric',
      'Otros Albinaurics supervivientes operan en disfraz similar en otras regiones'
    ],
    theories: [
      'Albus fue uno de los pocos que llegó al borde del Haligtree antes de retroceder',
      'Su memoria contiene la ubicación de otros sobrevivientes ocultos',
      'Si Miquella despertara, Albus podría guiar a los supervivientes restantes a Elphael'
    ],
    ambiguous: [
      'Cuántos siglos lleva escondido en la jarra',
      'Si conoció personalmente a Miquella o solo a través de leyendas Albinauric',
      'Si Latenna conoce la ubicación específica de Albus o solo el procedimiento de identificación'
    ],
    relatedCharacters: ['latenna', 'miquella'],
    relatedFactions: ['albinauricos' ],
    relatedRegions: ['liurnia', 'consecrated-snowfield', 'haligtree'],
    relatedConcepts: ['unalloyed-gold'],
  },

  thops: {
    summary:
      'Thops es hechicero pobre expulsado de Raya Lucaria por incapacidad económica. Vive en una cabaña a las afueras de la Academia, prepara clases que nunca dará, espera una llave que probablemente nunca tendrá. Si la consigue por intervención del Tarnished, su entusiasmo lo mata: muere intentando entrar a la Academia que ya lo había rechazado.',
    deepLore: [
      h(2, 'Resumen esencial'),
      p(
        'Thops fue alumno de ',
        link('Raya Lucaria', 'region', 'raya-lucaria'),
        ' antes de ser expulsado. Su expulsión no fue por desviación doctrinal (como ',
        link('Sellen', 'character', 'sellen'),
        ', ',
        link('Azur', 'character', 'azur'),
        ' o ',
        link('Lusat', 'character', 'lusat'),
        ') — fue por pobreza pura. La Academia cobra precios cosmológicos a sus alumnos; Thops no podía pagar. La exclusión es estructural: no hay caso filosófico que defender, solo una factura impagada.'
      ),
      h(2, 'La cabaña del aspirante'),
      p(
        'Vive en el Schoolhouse Classroom en Liurnia — una cabaña al borde de la Academia. Allí prepara clases que nunca dará, estudia textos básicos que ya domina, repite hechizos elementales como ritual privado. Su entusiasmo por la magia sobrevive a la institución que se lo negó. Es estudiante eterno sin clase eterna.'
      ),
      h(2, 'La quest de la llave'),
      p(
        'Pide al Tarnished encontrar la Llave Académica que abre los pasajes restringidos de la Academia. Si el Tarnished se la trae, Thops sale corriendo de su cabaña hacia la entrada. Lo siguiente que el Tarnished encuentra, regresando, es su cuerpo: muerto en la entrada de la Academia, posiblemente por trampas mágicas activadas, posiblemente por un hechicero superior que lo identificó como intruso.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Thops encarna la sed de saber como condena. No aprende — porque aprender requiere una institución que ya no lo quiere. Sus apuntes están manchados de lluvia. Las palabras se borran antes de ser escritas. Su muerte al recibir la llave es ironía perfecta: el sistema lo rechazó por falta de dinero, y cuando un agente externo le permite acceder, el propio acceso es lo que lo mata.'
      )
    ],
    confirmed: [
      'Thops fue alumno expulsado de Raya Lucaria por pobreza',
      'Vive en una cabaña a las afueras de la Academia',
      'Pide al Tarnished encontrar la Llave Académica',
      'Si recibe la llave, muere intentando entrar a la Academia'
    ],
    inferred: [
      'Su expulsión fue estructural, no doctrinal',
      'La Academia cobra precios cosmológicos a sus alumnos',
      'Su muerte fue causada por trampas mágicas o por un hechicero superior'
    ],
    theories: [
      'Conocía a Sellen y a otros excomulgados pero no se le permitió unirse a su causa',
      'Su muerte fue trampa específica del régimen académico contra disidencia económica',
      'Si Sellen alcanzara el control de la Academia, Thops habría sido recibido póstumamente'
    ],
    ambiguous: [
      'Quién o qué exactamente lo mató al entrar',
      'Si su muerte es accidente o asesinato deliberado',
      'Si dejó textos que documentan su investigación'
    ],
    relatedCharacters: ['sellen', 'azur', 'lusat', 'rennala'],
    relatedFactions: ['raya-lucaria'],
    relatedRegions: ['liurnia', 'raya-lucaria'],
    relatedConcepts: ['glintstone', 'primeval-current'],
  },

  irina: {
    summary:
      'Irina es hija ciega del Lord Edgar de Castle Morne. Escapó del castillo durante la rebelión Misbegotten y llegó ciega a la costa de la Península Llorosa con una carta para su padre. Pidió al Tarnished entregarla. Murió antes de saber que la carta llegaría — su voz pidiendo ayuda se desvanece como lluvia entre las rocas.',
    deepLore: [
      h(2, 'Resumen esencial'),
      p(
        'Irina pertenece a la familia Volmer de ',
        link('Castillo Morne', 'region', 'castle-morne'),
        '. Es hija de Edgar, lord nominal del castillo. Su ceguera es congénita pero no la incapacita socialmente: la familia Volmer la protegió y la educó como noble plena. Cuando los ',
        link('Misbegotten', 'faction', 'misbegotten'),
        ' se rebelaron y tomaron el castillo, Irina escapó con uno de los pocos sirvientes leales que le quedaban.'
      ),
      h(2, 'La carta'),
      p(
        'Llegó ciega a la costa rocosa de la ',
        link('Península Llorosa', 'region', 'peninsula-llorosa'),
        ', sola tras la muerte de su sirviente. El Tarnished la encuentra exhausta, sosteniendo una carta sellada para su padre. La carta es testimonio: explica la situación, pide ayuda, expresa amor filial. Irina no puede entregarla ella misma — está demasiado débil para regresar al castillo. Pide al Tarnished.'
      ),
      h(2, 'La muerte invisible'),
      p(
        'El Tarnished lleva la carta a Edgar. Edgar, al leerla, decide partir a vengar a Irina — sabe instintivamente que su hija está muriendo o ya muerta. Cuando el Tarnished regresa a la costa, encuentra el cuerpo de Irina sin vida, todavía mirando al horizonte donde nunca verá nada. La timing es trágico: Edgar parte cuando Irina ya está muriendo, ambos sin saberlo.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Irina encarna la carta como último gesto. Escribe palabras que llegarán cuando ella ya no esté para recibir respuesta. No puede ver a quién le escribe; pero confía en que la lluvia llevará el papel. Su muerte es invisible doblemente — no la ve el padre que parte a vengarla, no la ve ella misma porque era ciega de nacimiento. Solo el Tarnished, mensajero involuntario, es testigo.'
      )
    ],
    confirmed: [
      'Irina es hija ciega del Lord Edgar',
      'Escapó de Castle Morne durante la rebelión Misbegotten',
      'Pide al Tarnished entregar una carta a su padre',
      'Muere antes de que Edgar reciba la carta'
    ],
    inferred: [
      'Su ceguera es congénita',
      'Su sirviente murió en el camino antes de llegar a la costa',
      'Su muerte es por agotamiento y heridas no tratadas, no por ataque directo'
    ],
    theories: [
      'La carta contiene información específica sobre la rebelión que solo Irina presenció',
      'Su muerte está relacionada con la persecución continua contra los nobles Volmer',
      'Si Edgar hubiera regresado a tiempo, ambos habrían sobrevivido juntos'
    ],
    ambiguous: [
      'Quién la atacó en el camino o si murió por causas naturales',
      'Cuánto tiempo medió entre su huida y la entrega de la carta',
      'Si conserva consciencia post-mortem mínima'
    ],
    relatedCharacters: ['edgar', 'hyetta'],
    relatedFactions: ['misbegotten'],
    relatedRegions: ['castle-morne', 'peninsula-llorosa'],
  },

  edgar: {
    summary:
      'Edgar es lord superviviente de Castle Morne, defensor del último sector residual del castillo tras la rebelión Misbegotten. Cuando recibe la carta de su hija Irina, abandona el castillo para vengarla — sabiendo intuitivamente que ya está muriendo o muerta. Reaparece en Liurnia transformado en Caballero Maldito de Misericordia, masacrando inocentes en venganza ciega.',
    deepLore: [
      h(2, 'Resumen esencial'),
      p(
        'Edgar es lord nominal de la Casa Volmer de ',
        link('Castillo Morne', 'region', 'castle-morne'),
        '. Cuando los ',
        link('Misbegotten', 'faction', 'misbegotten'),
        ' se rebelaron contra siglos de esclavitud y tomaron el castillo, Edgar fue uno de los pocos defensores supervivientes. Se atrincheró en un sector residual del complejo, manteniendo posiciones casi imposibles. Su devoción a su familia — particularmente a su hija ',
        link('Irina', 'character', 'irina'),
        ' — era el motor de su resistencia.'
      ),
      h(2, 'La carta y la partida'),
      p(
        'Cuando el Tarnished le entrega la carta de Irina, Edgar lee de inmediato. Sabe que la carta procede de la costa — sabe que Irina escapó pero quedó vulnerable. Su reacción es rápida y absoluta: parte del castillo. La defensa que había sostenido durante meses se abandona en horas. Su misión cambia de protector institucional a vengador personal.'
      ),
      h(2, 'La transformación post-Irina'),
      p(
        'Cuando reaparece, Edgar ya está roto. Irina ya está muerta. Las heridas que él trataba de evitar ya ocurrieron. Su mente se rompió con la confirmación. Sigue avanzando — pero el avance ya no tiene dirección coherente. Su martillo cae sobre quien se cruce: Misbegotten dispersos, soldados Volcano Manor, viajeros aleatorios. La venganza se ha vuelto ciega porque ya no recuerda contra quién dirigirla.'
      ),
      h(2, 'El Caballero Maldito'),
      p(
        'En Liurnia, transformado en Caballero Maldito de Misericordia (Knight of the Misbegotten reclassified post-traumatically), Edgar es invasor errante. El Tarnished puede enfrentarlo ahí. Su muerte es liberación piadosa, similar a la de Bernahl en Farum Azula: matar al hombre roto antes de que rompa a más inocentes. Su martillo cae al final por última vez sobre nadie — y por fin descansa.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Edgar encarna la venganza vacía. Mata sin objetivo después de que su único objetivo se haya muerto. Su espada sigue cayendo, aunque ya no recuerda contra quién. Es la prueba más triste del juego de que la pérdida puede destruir la coherencia entera de una persona. La defensa institucional se desmoronó en horas; el padre se desmoronó en minutos; el Caballero Maldito sigue caminando porque el cuerpo no recibió el aviso.'
      )
    ],
    confirmed: [
      'Edgar es lord superviviente de Castle Morne',
      'Recibe la carta de Irina y abandona el castillo',
      'Reaparece en Liurnia transformado en Caballero Maldito de Misericordia',
      'Mata Misbegotten y otros viajeros como invasor',
      'Su muerte por el Tarnished es liberación piadosa'
    ],
    inferred: [
      'Sabe instintivamente al leer la carta que Irina ya está muriendo',
      'Su transformación es psicológica primero, marcial después',
      'Su mente se rompió con la confirmación de la muerte de Irina'
    ],
    theories: [
      'Edgar pudo haber salvado a Irina si hubiera partido antes — la culpa lo persigue',
      'Su transformación fue acelerada por contacto con podredumbre o frenética en el camino',
      'Su martillo retiene memoria residual de Irina, lo que lo hace especialmente letal'
    ],
    ambiguous: [
      'Si conserva alguna consciencia residual durante el estado de Caballero Maldito',
      'Cuánto tiempo medió entre la partida y su transformación visible',
      'Si encontró el cuerpo de Irina antes de su deterioro mental'
    ],
    relatedCharacters: ['irina'],
    relatedFactions: ['misbegotten'],
    relatedRegions: ['castle-morne', 'peninsula-llorosa', 'liurnia'],
  },

}
