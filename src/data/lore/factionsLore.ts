import type { DeepEntity, RichBlock, RichInline } from '../types'

const link = (label: string, targetType: 'character' | 'region' | 'faction' | 'concept' | 'ending' | 'timeline', slug: string): RichInline =>
  ({ type: 'link', label, targetType, slug })
const p = (...children: RichInline[]): RichBlock =>
  ({ type: 'paragraph', children })
const h = (level: 2 | 3, text: string, id?: string): RichBlock =>
  ({ type: 'heading', level, text, id })
const em = (text: string): RichInline => ({ type: 'em', text })

export const factionsLore: Record<string, Partial<DeepEntity>> = {

  'orden-dorado': {
    summary:
      'El régimen cosmológico fundado por Marika tras sellar la Muerte Predestinada. Sus dogmas estructuran las Tierras Intermedias enteras — y sus exclusiones definen quién es persona y quién no lo es. La era dorada prometía inmortalidad pero solo a los reconocidos como dignos; ese filtro generó la fractura que ningún Tarnished puede deshacer plenamente.',
    deepLore: [
      h(2, 'La fundación cosmológica'),
      p(
        link('Marika', 'character', 'marika'),
        ', vasija humana elegida por la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ', fundó el ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' con un acto de mutilación cósmica: hizo que ',
        link('Maliketh', 'character', 'maliketh'),
        ' arrancase la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ' del ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        ' y la sellase en su propio cuerpo-bestia. Sin ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ' operativa, los seres de las Tierras Intermedias dejaron de poder morir verdaderamente. La inmortalidad de la era dorada nació, así, de un acto de violencia ontológica.'
      ),
      p(
        'Tomó como Primer Señor Elden a ',
        link('Godfrey', 'character', 'godfrey'),
        ', conquistador exterior, y consolidó el régimen mediante la subyugación de las civilizaciones rivales: dragónica de ',
        link('Placidusax', 'character', 'placidusax'),
        ', la de los ',
        link('Gigantes del Fuego', 'faction', 'fire-giants'),
        ', el reino lunar de ',
        link('Caria', 'faction', 'caria'),
        ', la civilización ',
        link('Nox', 'faction', 'nox'),
        '. Cada subyugación dejó un resentimiento cosmológico que el régimen jamás procesó.'
      ),
      h(2, 'Dogma y estructura'),
      p(
        'El Orden se sostiene sobre cuatro dispositivos: el ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' como árbol-vasija que absorbe almas y las recicla; la ',
        link('Gracia', 'concept', 'grace'),
        ' como marca de pertenencia visible (puntos dorados en los ojos); las ',
        link('Grandes Runas', 'concept', 'great-rune'),
        ' como leyes específicas del cosmos delegadas a los demidioses; y la ',
        link('Llama Sagrada', 'concept', 'llama-sagrada'),
        ' como instrumento de purificación contra todo lo no-canónico. La jerarquía baja desde ',
        link('Marika', 'character', 'marika'),
        ' a los demidioses, los caballeros dorados, los clérigos, las ',
        link('Lectoras de Dedos', 'faction', 'finger-readers'),
        ' y los nobles regionales.'
      ),
      h(2, 'Los excluidos'),
      p(
        'El Orden no es para todos. Los ',
        link('Omens', 'faction', 'omens'),
        ' nacen con manifestaciones del ',
        link('Crisol', 'concept', 'crucible'),
        ' y son encarcelados bajo Leyndell por los ',
        link('Verdugos Omen', 'faction', 'omenkillers'),
        '. Los ',
        link('Misbegotten', 'faction', 'misbegotten'),
        ' son esclavizados como guerreros desechables. Los ',
        link('Albinaurics', 'faction', 'albinauricos'),
        ' son perseguidos como humanidad artificial inferior. Los ',
        link('Tarnished', 'concept', 'tarnished'),
        ' fueron despojados de la ',
        link('Gracia', 'concept', 'grace'),
        ' y exiliados tras servir su propósito. Y la propia tradición integradora del ',
        link('Crisol', 'concept', 'crucible'),
        ' fue gradualmente declarada herejía: los ',
        link('Caballeros del Crisol', 'faction', 'crucible-knights'),
        ' quedaron como reliquia.'
      ),
      h(2, 'Estado actual: la liturgia sobre el silencio'),
      p(
        'Tras la rotura del ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        ' por la propia ',
        link('Marika', 'character', 'marika'),
        ' tras la ',
        link('Noche de los Cuchillos Negros', 'timeline', 'ranni-noche-cuchillos'),
        ', el régimen está técnicamente intacto pero estructuralmente paralizado. La ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' se ha retirado parcialmente; los ',
        link('Dos Dedos', 'faction', 'dos-dedos'),
        ' se deterioran visiblemente; las ',
        link('Lectoras', 'faction', 'finger-readers'),
        ' siguen oficiando rituales cuyas respuestas se han vuelto vagas. ',
        link('Morgott', 'character', 'morgott'),
        ' defiende Leyndell con la fidelidad del rechazado; ',
        link('Gideon', 'character', 'gideon'),
        ' acumula información sin poder ejecutar ninguna decisión; ',
        link('Goldmask', 'character', 'goldmask'),
        ' diagnostica que la ley cosmológica está mal formulada. Cada actor central del Orden hoy reconoce, en silencio o explícitamente, que el régimen ha fallado.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'El ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' es la pregunta del juego sobre si un sistema basado en exclusión puede sostenerse cosmológicamente. Cada categoría que excluyó (Omens, Misbegotten, Albinaurics, ',
        link('Tarnished', 'concept', 'tarnished'),
        ', Nox, Gigantes) volvió eventualmente como amenaza estructural. La rotura del Anillo no fue un accidente externo: fue la consecuencia lógica acumulada de eras de filtrado cosmológico. Cada uno de los seis ',
        link('finales', 'ending', 'fracture'),
        ' del juego es respuesta distinta a la misma pregunta: ¿se reforma el Orden, se sustituye, se reafirma, o se quema entero?'
      ),
    ],
    confirmed: [
      ['El ', link('Orden Dorado', 'concept', 'golden-order'), ' fue fundado por ', link('Marika', 'character', 'marika'), ' tras sellar la ', link('Runa de la Muerte', 'concept', 'rune-of-death'), ' en ', link('Maliketh', 'character', 'maliketh')],
      ['Su jerarquía: ', link('Marika', 'character', 'marika'), ' → demidioses con Grandes Runas → caballeros dorados → clérigos y Lectoras → nobles regionales'],
      ['Excluyó sistemáticamente a Omens, Misbegotten, Albinaurics y ', link('Tarnished', 'concept', 'tarnished')],
      ['Marginalizó la tradición del ', link('Crisol', 'concept', 'crucible'), ' y la magia estelar pre-Orden'],
      ['Tras la rotura del Anillo, los ', link('Dos Dedos', 'faction', 'dos-dedos'), ' se deterioran y la ', link('Voluntad Mayor', 'concept', 'voluntad-mayor'), ' se ha retirado parcialmente'],
    ],
    inferred: [
      ['La integración inicial de tradiciones (', link('Crisol', 'concept', 'crucible'), ', dragones) se volvió hostil cuando el régimen consolidó poder'],
      'La acumulación de excluidos generó las fuerzas que eventualmente fracturaron el cosmos',
      ['La ', link('Gracia', 'concept', 'grace'), ' funciona simultáneamente como bendición y mecanismo de control político'],
      ['Cada demidiós representó una grieta del régimen: ', link('Godwyn', 'character', 'godwyn'), ' la única "norma", el resto excepciones gestionadas'],
    ],
    theories: [
      [link('Marika', 'character', 'marika'), ' diseñó la ', link('fractura', 'timeline', 'la-fractura'), ' del Orden desde el principio como instrumento de su rebelión cosmológica diferida'],
      ['La ', link('Voluntad Mayor', 'concept', 'voluntad-mayor'), ' sabía que el régimen sería transitorio — todo Orden Externo lo es'],
      ['La marginalización del ', link('Crisol', 'concept', 'crucible'), ' fue propaganda interna posterior, no doctrina original'],
      ['Los ', link('Tarnished', 'concept', 'tarnished'), ' son el experimento de ', link('Marika', 'character', 'marika'), ' para producir un agente capaz de elegir libremente el destino del cosmos'],
    ],
    ambiguous: [
      ['Cuándo exactamente el Orden pasó de inclusivo a excluyente con respecto al ', link('Crisol', 'concept', 'crucible')],
      ['Si ', link('Marika', 'character', 'marika'), ' genuinamente creyó en el régimen o lo construyó sabiendo que fracasaría'],
      ['Si la ', link('Voluntad Mayor', 'concept', 'voluntad-mayor'), ' podría retornar plenamente bajo el final correcto'],
      'Cuántas eras y dinastías acumuladas componen el Orden tal como existe al inicio del juego',
    ],
    beneficiaries:
      ['El régimen central de Leyndell, los demidioses con Grandes Runas, la nobleza dorada y los clérigos. ', link('Marika', 'character', 'marika'), ' misma como vasija central. Los ', link('Tarnished', 'concept', 'tarnished'), ' que recuperan ', link('Gracia', 'concept', 'grace'), ' para servir como instrumentos.'],
    victims:
      ['Omens encarcelados, Misbegotten esclavizados, Albinaurics perseguidos, Nox enterrados, ', link('Gigantes del Fuego', 'faction', 'fire-giants'), ' exterminados, ', link('Caballeros del Crisol', 'faction', 'crucible-knights'), ' marginalizados, dragones desplazados, y los propios ', link('Tarnished', 'concept', 'tarnished'), ' exiliados tras cumplir función.'],
    relatedCharacters: ['marika', 'radagon', 'godfrey', 'godwyn', 'morgott', 'maliketh', 'godrick', 'gideon', 'goldmask', 'corhyn', 'enia'],
    relatedFactions: ['dos-dedos', 'cuchillos-negros', 'omens', 'misbegotten', 'albinauricos', 'omenkillers', 'crucible-knights', 'finger-readers', 'fundamentalistas', 'golden-lineage'],
    relatedRegions: ['leyndell', 'altus-plateau'],
    relatedConcepts: ['elden-ring', 'erdtree', 'golden-order', 'great-rune', 'voluntad-mayor', 'grace', 'destined-death', 'crucible'],
    relatedTimelineEvents: ['marika-godfrey', 'la-fractura', 'ranni-noche-cuchillos'],
  },

  'dos-dedos': {
    summary:
      'Los Dos Dedos son extensiones físicas de la Voluntad Mayor en las Tierras Intermedias. No piensan ni hablan: gesticulan. Su función es designar al próximo Señor Elden y dispensar la Gracia. Tras la rotura del Anillo Elden están deteriorándose visiblemente — la institución sobrevive al dios al que servía.',
    deepLore: [
      h(2, 'Naturaleza física y mediación'),
      p(
        'Los Dos Dedos son apéndices cosmológicos: dedos físicamente desproporcionados, sin cuerpo visible, fijados en pedestales rituales. Reciben voluntad de la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' y la convierten en gestos. Esos gestos requieren a su vez ser leídos por las ',
        link('Lectoras de Dedos', 'faction', 'finger-readers'),
        ' — sacerdotisas ciegas como ',
        link('Enia', 'character', 'enia'),
        ' — que los traducen a palabras humanas. La cadena de mediación es larga (',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' → Dedos → Lectoras → mortales) y, post-fractura, cada vez más rota.'
      ),
      h(2, 'Función ritual: designar al Señor Elden'),
      p(
        'Su función central es designar al ',
        link('Tarnished', 'concept', 'tarnished'),
        ' que cumpla los requisitos como candidato al trono Elden. Reciben las ',
        link('Grandes Runas', 'concept', 'great-rune'),
        ' tomadas de los demidioses derrotados, las legitiman, y autorizan la coronación. La ',
        link('Mesa Redonda', 'concept', 'roundtable-hold'),
        ' es estructura institucional construida en torno a su sede principal. Cada ',
        link('Tarnished', 'concept', 'tarnished'),
        ' que llega allí recibe gracias rituales (',
        em('Maiden Blessing'),
        ', habilidades específicas) que solo los Dedos pueden dispensar.'
      ),
      h(2, 'Conflicto con los Tres Dedos'),
      p(
        'Los Dos Dedos tienen antítesis directa: los ',
        link('Tres Dedos', 'faction', 'tres-dedos'),
        ', sellados bajo Leyndell tras tres puertas ceremoniales. Si los Dos representan la ley cosmológica de la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' — orden, jerarquía, sucesión — los Tres son la doctrina opuesta de la ',
        link('Llama Frenética', 'concept', 'frenzied-flame'),
        ': existir es sufrir, la única piedad es quemarlo todo. La oposición es estructural: cada uno necesita al otro para existir como categoría cosmológica.'
      ),
      h(2, 'Crisis post-fractura'),
      p(
        'Tras la rotura del ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        ', los Dedos se están descomponiendo. Sus dedos cárnicos muestran corrupción visible. Sus pronunciamientos son cada vez más vagos. Las Lectoras siguen oficiando rituales cuyas respuestas no llegan claras. ',
        link('Goldmask', 'character', 'goldmask'),
        ' diagnostica el problema: la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' se ha retirado parcialmente, y los Dedos están repitiendo liturgia sin contenido. ',
        link('Gideon', 'character', 'gideon'),
        ' lo sospecha pero no puede actuar sobre ello. La opción del jugador en cierto punto del juego — golpear a los Dedos con el ',
        link('Hoja Mata-Dedos', 'concept', 'fingerslayer-blade'),
        ' — confirma que ya no protegen ningún cosmos viable.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Los Dos Dedos son el mejor símbolo del juego sobre la liturgia que sobrevive al objeto de la fe. Su sola existencia plantea la pregunta: ¿es válido el ritual cuando el dios al que invoca ya no responde? La respuesta del juego es ambigua. En algunos finales su autoridad sigue siendo necesaria; en otros (la ',
        link('Era de las Estrellas', 'ending', 'age-of-stars'),
        ', la ',
        link('Era de la Llama Frenética', 'ending', 'frenzied-flame'),
        ') son sustituidos. Su deterioro visible es metáfora de toda institución cuyo principio fundacional ha caducado pero cuya estructura sigue operando.'
      ),
    ],
    confirmed: [
      ['Son extensiones físicas de la ', link('Voluntad Mayor', 'concept', 'voluntad-mayor'), ' que comunican mediante gestos'],
      ['Las ', link('Lectoras de Dedos', 'faction', 'finger-readers'), ' traducen sus gestos a palabras humanas'],
      'Designan al Señor Elden y autorizan la coronación',
      'Se están deteriorando visiblemente tras la rotura del Anillo',
      ['Pueden ser asesinados con la ', link('Hoja Mata-Dedos', 'concept', 'fingerslayer-blade'), ' forjada por los ', link('Nox', 'faction', 'nox')],
    ],
    inferred: [
      ['Su deterioro corresponde a la retirada parcial de la ', link('Voluntad Mayor', 'concept', 'voluntad-mayor'), ' de las Tierras Intermedias'],
      ['Han operado durante toda la ', link('era del Orden', 'ending', 'order'), ' Dorado sin reemplazo'],
      'Su autoridad institucional persiste por inercia ritual, no por canalización efectiva',
      ['Existen Dos Dedos en regiones marginales además de la ', link('Mesa Redonda', 'concept', 'roundtable-hold')],
    ],
    theories: [
      'Originalmente fueron mortales rituales que ascendieron al ser tomados como vehículos físicos',
      'Su deterioro es señal cosmológica de que un nuevo régimen es necesario',
      ['La ', link('Voluntad Mayor', 'concept', 'voluntad-mayor'), ' podría retornar y restaurarlos bajo el final correcto'],
      'Saben más de lo que sus gestos comunican y eligen no transmitirlo',
    ],
    ambiguous: [
      ['Cómo exactamente reciben información de la ', link('Voluntad Mayor', 'concept', 'voluntad-mayor')],
      'Si pueden interpretar mal o solo transmiten correctamente',
      'Si su deterioro es reversible',
      'Cuántos pares de Dedos hay actualmente activos en las Tierras Intermedias',
    ],
    relatedCharacters: ['enia', 'marika', 'gideon', 'goldmask', 'corhyn'],
    relatedFactions: ['orden-dorado', 'tres-dedos', 'finger-readers'],
    relatedRegions: ['leyndell'],
    relatedConcepts: ['voluntad-mayor', 'great-rune', 'tarnished', 'fingerslayer-blade', 'grace'],
    relatedTimelineEvents: ['two-fingers-roundtable', 'la-fractura'],
    relatedEndings: ['fracture', 'order', 'duskborn'],
  },

  'tres-dedos': {
    summary:
      'Los Tres Dedos son la encarnación física de la Llama Frenética: dios externo opuesto a la Voluntad Mayor. Sellados tras tres puertas bajo Leyndell, susurran una sola verdad — existir es sufrir, y la única piedad es quemarlo todo. Su doctrina es radicalmente compasiva en su lógica interna y radicalmente nihilista en su consecuencia cosmológica.',
    deepLore: [
      h(2, 'La presencia sellada'),
      p(
        'Bajo ',
        link('Leyndell', 'region', 'leyndell'),
        ', en el Subterranean Shunning-Grounds, tras tres puertas ceremoniales que se abren con los ',
        link('Three Fingers', 'concept', 'frenzied-flame'),
        ' como llave, viven los Tres Dedos: la presencia física de la ',
        link('Llama Frenética', 'concept', 'frenzied-flame'),
        ' en las Tierras Intermedias. Son tres dedos retorcidos, ardientes, conectados a un dios externo cuya identidad no se nombra. El régimen del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' los selló en lugar de exterminarlos — quizá porque no podía exterminarlos.'
      ),
      h(2, 'Doctrina del fin universal'),
      p(
        'La doctrina frenética es coherente y atroz. Premisa: ',
        em('existir es sufrir'),
        ' — no hay vida sin dolor, no hay placer sin pérdida futura, no hay relación sin separación final. Conclusión: la única piedad cosmológica posible es ',
        em('terminar con todo'),
        '. Quemarlo todo de una vez. Fundir todas las consciencias en una llama yermo donde ya nadie pueda sufrir porque ya nadie es. Es nihilismo presentado como acto último de amor.'
      ),
      h(2, 'Reclutamiento y propagación'),
      p(
        'La Llama no se propaga por contacto físico — se propaga por contacto cosmológico. Una víctima escucha la doctrina, la siente como verdad, y comienza la transformación: ojos amarillos ardientes, voz que predica el fin, espirales de fuego que no consumen. ',
        link('Hyetta', 'character', 'hyetta'),
        ' es doncella ritualizada designada. ',
        link('Shabriri', 'character', 'shabriri'),
        ' es misionero histórico que opera por posesión de huéspedes. Las ',
        link('Víctimas Frenéticas', 'faction', 'frenzied-victims'),
        ' anónimas — campesinos, peregrinos, prisioneros del Subsuelo — son contagio pasivo: sus bocas predican sin que ellas elijan.'
      ),
      h(2, 'Antítesis y conflicto cosmológico'),
      p(
        'Los Tres Dedos son antítesis exacta de los ',
        link('Dos Dedos', 'faction', 'dos-dedos'),
        '. Donde los Dos representan la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ', jerarquía y sucesión, los Tres representan ruptura cosmológica total. Donde los Dos exigen al ',
        link('Tarnished', 'concept', 'tarnished'),
        ' que sea designado y consagrado, los Tres ofrecen entrega libre a la quema. ',
        link('Melina', 'character', 'melina'),
        ' aborrece la ',
        link('Llama Frenética', 'concept', 'frenzied-flame'),
        ' con intensidad personal — si el ',
        link('Tarnished', 'concept', 'tarnished'),
        ' se entrega a ella, abandona el viaje y promete ',
        em('terminar al Tarnished con sus propias manos'),
        ' en una era futura. Su rechazo es uno de los pocos actos de voluntad clara que ella expresa.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Los Tres Dedos plantean la pregunta más oscura del juego: ¿qué pasa si la única respuesta coherente al sufrimiento del cosmos es terminar el cosmos? La doctrina frenética no es tentación trivial — es lectura filosófica seria que el juego presenta como opción genuina. La ',
        link('Era de la Llama Frenética', 'ending', 'frenzied-flame'),
        ' es el final más radical: no reforma, no sustituye — extingue. Que el régimen oficial elija sellar la doctrina en lugar de refutarla sugiere que sus propios teólogos no encontraron contraargumento totalmente convincente.'
      ),
    ],
    confirmed: [
      'Son tres dedos retorcidos sellados tras tres puertas bajo Leyndell',
      ['Encarnan la voluntad de un dios externo opuesto a la ', link('Voluntad Mayor', 'concept', 'voluntad-mayor')],
      'Su doctrina: existir es sufrir, la única piedad es terminar todo',
      [link('Hyetta', 'character', 'hyetta'), ' es su doncella designada; ', link('Shabriri', 'character', 'shabriri'), ' su misionero histórico'],
      [link('Melina', 'character', 'melina'), ' abandona y maldice al ', link('Tarnished', 'concept', 'tarnished'), ' que se entrega a ellos'],
    ],
    inferred: [
      'El régimen los selló en lugar de exterminarlos porque no podía',
      'La radiación cosmológica crece con la proximidad al sello',
      'Cada víctima frenética es vehículo del próximo ciclo de propagación',
      'La doctrina sobrevive porque nunca fue refutada, solo silenciada',
    ],
    theories: [
      'El dios externo de los Tres Dedos es el sufrimiento personificado del cosmos entero',
      'Si el sello cae, todas las Tierras Intermedias se transformaría en víctimas',
      ['Los ', link('Tarnished', 'concept', 'tarnished'), ' con suficiente sufrimiento acumulado son particularmente susceptibles'],
      'Algunas víctimas conservan consciencia residual y predican voluntariamente',
    ],
    ambiguous: [
      'Identidad exacta del dios externo',
      'Si la transformación es reversible',
      'Si los Tres Dedos son tres entidades o tres aspectos de una',
      'Cuántas víctimas frenéticas hay actualmente operando en las Tierras Intermedias',
    ],
    relatedCharacters: ['hyetta', 'shabriri', 'melina'],
    relatedFactions: ['orden-dorado', 'dos-dedos', 'frenzied-victims'],
    relatedRegions: ['leyndell', 'subterranean-shunning-grounds'],
    relatedConcepts: ['frenzied-flame', 'dioses-exteriores', 'voluntad-mayor'],
    relatedEndings: ['frenzied-flame'],
    relatedTimelineEvents: ['frenzied-flame-spread'],
  },

  'cuchillos-negros': {
    summary: 'Asesinas Numen — mujeres del mismo pueblo que Marika — armadas con dagas forjadas con una mecha de la Runa de la Muerte robada a Maliketh. Conspiraron con Ranni para ejecutar la Noche que rompió el cosmos.',
    deepLore: [
      h(2, 'Las asesinas Numen'),
      p(
        'Las Cuchillos Negros son ',
        { type: 'em', text: 'asesinas' },
        ' — todas mujeres, todas ',
        link('Numen', 'concept', 'numen'),
        ', el mismo pueblo del que provino ',
        link('Marika', 'character', 'marika'),
        '. Las descripciones de su armadura las identifican explícitamente como mujeres del pueblo ',
        link('Numen', 'concept', 'numen'),
        '. Esa coincidencia étnica con la diosa que combaten es uno de los detalles más densos del lore: el pueblo cuya hija ascendió a diosa envió a sus hijas a apuñalar al hijo de esa misma diosa.'
      ),
      h(2, 'Las dagas y la Runa de la Muerte'),
      p(
        'Sus hojas fueron forjadas con un fragmento de la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ' robado del cuerpo de ',
        link('Maliketh', 'character', 'maliketh'),
        '. Solo estas armas pueden ',
        { type: 'em', text: 'matar' },
        ' a un demidiós; cualquier otra herida cierra. La mecha era limitada — bastaba para media muerte (alma o cuerpo, no ambos), lo que produjo las muertes incompletas de ',
        link('Godwyn', 'character', 'godwyn'),
        ' (alma) y ',
        link('Ranni', 'character', 'ranni'),
        ' (cuerpo).'
      ),
      h(2, 'La Noche y la conspiración con Ranni'),
      p(
        'Bajo dirección de ',
        link('Ranni', 'character', 'ranni'),
        ', ejecutaron la ',
        link('Noche de los Cuchillos Negros', 'timeline', 'ranni-noche-cuchillos'),
        ': dos muertes-espejo coordinadas — alma de ',
        link('Godwyn', 'character', 'godwyn'),
        ' apuñalada en su lecho, cuerpo ',
        link('Empyrean', 'concept', 'empyrean'),
        ' de ',
        link('Ranni', 'character', 'ranni'),
        ' apuñalado por su propia mano. Ambas muertes incompletas, ambas necesarias para el plan.'
      ),
      h(3, 'Teoría: la conexión con la Reina del Ojo Velado', 'gloam'),
      p(
        'Una lectura comunitaria muy aceptada — pero no afirmada directamente por ninguna descripción de item — sostiene que las Cuchillos Negros sirvieron originalmente a la ',
        link('Reina del Ojo Velado', 'character', 'gloam-eyed-queen'),
        ', otra ',
        link('Empyrean', 'concept', 'empyrean'),
        ' ',
        link('Numen', 'concept', 'numen'),
        ' que pudo haber tenido la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ' antes que ',
        link('Maliketh', 'character', 'maliketh'),
        ' la recuperara. La teoría se apoya en: (1) ambas son ',
        link('Numen', 'concept', 'numen'),
        ', (2) los ',
        link('Pieles de Dios', 'faction', 'pieles-de-dios'),
        ' — sí confirmados como sirvientes de la Reina — son la facción ',
        { type: 'em', text: 'hermana' },
        ' de las Cuchillos Negros, y (3) la lógica narrativa de un pueblo ',
        link('Numen', 'concept', 'numen'),
        ' disidente. Pero los items solo confirman la conexión ',
        link('Numen', 'concept', 'numen'),
        ' y la conspiración con ',
        link('Ranni', 'character', 'ranni'),
        '; el resto es inferencia razonada.'
      )
    ],
    confirmed: [
      ['Son mujeres del pueblo ', link('Numen', 'concept', 'numen'), ' — identificado explícitamente en la descripción de su armadura'],
      ['Sus dagas están forjadas con un fragmento de la ', link('Runa de la Muerte', 'concept', 'rune-of-death'), ' robado a ', link('Maliketh', 'character', 'maliketh')],
      ['Conspiraron con ', link('Ranni', 'character', 'ranni'), ' para ejecutar la Noche de los Cuchillos Negros'],
      ['Asesinaron el alma de ', link('Godwyn', 'character', 'godwyn'), ' y el cuerpo ', link('Empyrean', 'concept', 'empyrean'), ' de ', link('Ranni', 'character', 'ranni'), ' con las dagas Cuchillo Negro'],
      [link('Alecto', 'character', 'alecto-black-knife'), ', la Cabecilla, sigue activa como invader/boss en Moonlight Altar'],
    ],
    inferred: [
      ['El reclutamiento de ', link('Numen', 'concept', 'numen'), ' para una conspiración contra el Lineaje Dorado tiene componente étnico — no es coincidencia que sean del pueblo de ', link('Marika', 'character', 'marika')],
      ['La operación requirió acceso interno al cuerpo de ', link('Maliketh', 'character', 'maliketh'), ' para robar la mecha de ', link('Runa de la Muerte', 'concept', 'rune-of-death'), ' — alguien dentro del Orden colaboró'],
      'Algunas Cuchillos Negros sobrevivieron y permanecen activas en las Tierras Intermedias actuales',
    ],
    theories: [
      ['Sirvieron antes a la ', link('Reina del Ojo Velado', 'character', 'gloam-eyed-queen'), ' — teoría popular basada en la conexión ', link('Numen', 'concept', 'numen'), ' y en el paralelo con los ', link('Pieles de Dios', 'faction', 'pieles-de-dios'), ', no afirmada por items'],
      ['La ', link('Reina del Ojo Velado', 'character', 'gloam-eyed-queen'), ' poseyó la ', link('Runa de la Muerte', 'concept', 'rune-of-death'), ' antes que ', link('Maliketh', 'character', 'maliketh'), ' la recuperara, y las Cuchillos Negros conservaron el conocimiento de cómo manipularla'],
      [link('Marika', 'character', 'marika'), ' sabía del complot y lo permitió como forma de iniciar la ', link('Fractura', 'timeline', 'la-fractura'), ' sin tener que romper el Anillo ella misma todavía'],
    ],
    ambiguous: [
      ['Si todas las Cuchillos Negros activas en la Noche eran ', link('Numen', 'concept', 'numen'), ' o solo el grupo central'],
      'Cuántas siguen vivas en la era actual del juego',
      ['Cómo lograron concretamente robar la mecha de ', link('Maliketh', 'character', 'maliketh'), ' — un guardián de ese rango no se viola fácil'],
    ],
    relatedCharacters: ['ranni', 'godwyn', 'maliketh', 'marika', 'gloam-eyed-queen', 'alecto-black-knife'],
    relatedFactions: ['pieles-de-dios'],
    relatedConcepts: ['rune-of-death', 'destined-death', 'empyrean', 'numen'],
    relatedTimelineEvents: ['ranni-noche-cuchillos', 'hoja-mata-dedos'],
  },

  'pieles-de-dios': {
    summary:
      'Secta deicida de la era anterior al Orden Dorado, devotos originales de la Reina del Ojo Velado. Sus apóstoles cazaban y desollaban dioses con la Llama Negra — el único fuego cosmológico capaz de quemar la divinidad. Tras la caída de su Reina sobrevivieron en sombras; siguen activos como apóstoles y asesinos en el presente del juego.',
    deepLore: [
      h(2, 'Origen pre-Orden y servicio a la Reina'),
      p(
        'Los Pieles de Dios — ',
        em('Godskin Apostles'),
        ' — pertenecen al período cosmológico previo al ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ', cuando la ',
        link('Reina del Ojo Velado', 'character', 'gloam-eyed-queen'),
        ' (otra ',
        link('Empyrean', 'concept', 'empyrean'),
        ' ',
        link('Numen', 'concept', 'numen'),
        ', predecesora ritual de ',
        link('Marika', 'character', 'marika'),
        ') tenía la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ' bajo su control. Bajo su mandato, los Pieles desarrollaron una doctrina y una tecnología cosmológica única: el ',
        link('asesinato ritual de dioses', 'concept', 'black-flame'),
        '.'
      ),
      h(2, 'La Llama Negra: el arma deicida'),
      p(
        'La ',
        link('Llama Negra', 'concept', 'black-flame'),
        ' es fuego cosmológico distinto del fuego ordinario y de la llama dorada del ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        '. Su propiedad única: puede quemar incluso a un dios. La sangre de los dioses asesinados queda incorporada en sus propias pieles — de ahí el nombre del culto. Los apóstoles llevan literalmente las pieles de las divinidades que han ejecutado, drapeadas como armadura sagrada. Cada cazador es archivo material de una matanza divina previa.'
      ),
      h(2, 'La caída de la Reina'),
      p(
        link('Maliketh', 'character', 'maliketh'),
        ' derrotó a la ',
        link('Reina del Ojo Velado', 'character', 'gloam-eyed-queen'),
        ' en una batalla cuya datación exacta está perdida. Recuperó la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ' y la selló en su propio cuerpo. La Reina cayó; el régimen del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' se consolidó como sucesor. Los Pieles, sin embargo, no fueron exterminados — se dispersaron en clandestinidad, conservando la doctrina y la Llama.'
      ),
      h(2, 'Apóstoles modernos'),
      p(
        'Hoy los Apóstoles operan como cazadores aislados o pequeñas células. Aparecen en ',
        link('Caelid', 'region', 'caelid'),
        ' (Stargazer Ruins), Volcano Manor (cripta interior), ',
        link('Farum Azula', 'region', 'farum-azula'),
        ' (en pleno régimen dragónico), y como invasores en regiones marginales. Sus rituales privados con la ',
        link('Llama Negra', 'concept', 'black-flame'),
        ' siguen apuntando al asesinato de cualquier dios disponible. Que sigan operativos siglos después de la caída de su Reina indica que su doctrina es transmisible sin ella — y que el régimen del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' no ha podido erradicar la convicción de que ',
        em('los dioses pueden morir'),
        '.'
      ),
      h(2, 'Conexión con los Cuchillos Negros'),
      p(
        'Los ',
        link('Cuchillos Negros', 'faction', 'cuchillos-negros'),
        ' — asesinas ',
        link('Numen', 'concept', 'numen'),
        ' que ejecutaron la Noche que rompió el cosmos — comparten patrón cosmológico con los Pieles de Dios: ambos son sectas vinculadas a la ',
        link('Reina del Ojo Velado', 'character', 'gloam-eyed-queen'),
        ' y ambos manejan instrumentos derivados de la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        '. La conexión específica no se afirma directamente en items pero la lectura comunitaria razonada los trata como facciones-hermanas: dos manifestaciones del mismo proyecto deicida pre-Orden.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Los Pieles de Dios son la prueba persistente de que el régimen del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' no es definitivo. Su mera existencia funcional — el hecho de que aún sea posible quemar dioses — convierte a ',
        link('Marika', 'character', 'marika'),
        ', a ',
        link('Radagon', 'character', 'radagon'),
        ', a la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' misma en blancos teóricamente alcanzables. Cada apóstol es un memorando ambulante: ',
        em('el cosmos puede ser asesinado'),
        '. Es la herejía que el régimen no pudo cerrar.'
      ),
    ],
    confirmed: [
      ['Los Pieles de Dios sirvieron a la ', link('Reina del Ojo Velado', 'character', 'gloam-eyed-queen'), ' ', link('antes del Orden Dorado', 'timeline', 'antes-orden-dorado')],
      ['Su ', link('Llama Negra', 'concept', 'black-flame'), ' puede quemar incluso a un dios'],
      'Llevan pieles de divinidades previamente asesinadas',
      [link('Maliketh', 'character', 'maliketh'), ' derrotó a la Reina y selló la ', link('Runa de la Muerte', 'concept', 'rune-of-death')],
      'Los apóstoles siguen operativos en las Tierras Intermedias actuales',
    ],
    inferred: [
      'Su tradición sobrevive sin necesidad de la Reina viva',
      ['Compartían cosmología con los ', link('Cuchillos Negros', 'faction', 'cuchillos-negros'), ' como facciones-hermanas'],
      'Su dispersión clandestina fue protegida por información cosmológica que el régimen no pudo extraer',
      ['Su ', link('Llama Negra', 'concept', 'black-flame'), ' no es fuego sino corrupción ritualizada de la ', link('Runa de la Muerte', 'concept', 'rune-of-death')],
    ],
    theories: [
      'La doctrina de los Pieles podría reactivarse si la Reina retornara cosmológicamente',
      ['Algunos apóstoles han identificado a ', link('Marika', 'character', 'marika'), ' como su próximo blanco aunque no pueden alcanzarla'],
      ['El conocimiento de cómo forjar ', link('Llama Negra', 'concept', 'black-flame'), ' requiere posesión transitoria de la ', link('Runa de la Muerte', 'concept', 'rune-of-death')],
      'Existe una jerarquía interna entre apóstoles modernos que el juego no documenta',
    ],
    ambiguous: [
      ['Identidad y forma actual de la ', link('Reina del Ojo Velado', 'character', 'gloam-eyed-queen'), ' (¿muerta, sellada, dispersa?)'],
      'Cuántos Pieles de Dios siguen activos',
      'Si pueden coordinar entre células o operan aislados',
      'Si su servicio es al dios externo de la Reina o a la propia Reina como dios',
    ],
    relatedCharacters: ['gloam-eyed-queen', 'maliketh', 'marika'],
    relatedFactions: ['cuchillos-negros'],
    relatedConcepts: ['black-flame', 'destined-death', 'rune-of-death', 'numen', 'empyrean'],
    relatedTimelineEvents: ['era-antigua', 'gloam-eyed-queen-fall'],
  },

  nox: {
    summary:
      'Civilización subterránea pre-Orden condenada por intentar forjar su propio dios. Habitantes de las Ciudades Eternas (Nokron, Nokstella), su sofisticación cosmológica excedía la del régimen dorado. La Voluntad Mayor los exilió bajo tierra como castigo. Hoy esperan, silenciosos, el retorno de las estrellas — y el cumplimiento de un proyecto que la rebelión de Ranni recoge en parte.',
    deepLore: [
      h(2, 'La civilización avanzada'),
      p(
        'Los Nox fueron raza ennoblecida durante la era anterior al ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        '. Construyeron las Ciudades Eternas — ',
        link('Nokron', 'region', 'nokron'),
        ', ',
        link('Nokstella', 'region', 'nokstella'),
        ', Uhl Palace — bajo cielos artificiales donde estrellas falsas brillaban sobre arquitecturas imposibles. Su tecnología cosmológica incluyó las ',
        link('Lágrimas de Plata y Mimic Tears', 'faction', 'silver-mimic-tears'),
        ', la ',
        link('magia gravitacional', 'concept', 'gravity-magic'),
        ' aprendida después por ',
        link('Caelid', 'region', 'caelid'),
        ', y el conocimiento de cómo forjar la ',
        link('Hoja Mata-Dedos', 'concept', 'fingerslayer-blade'),
        ' — única arma capaz de matar a los ',
        link('Dos Dedos', 'faction', 'dos-dedos'),
        '.'
      ),
      h(2, 'La transgresión cosmológica'),
      p(
        'Su crimen fue ambición teológica concreta: querían fabricar su propio dios. El proyecto se llamaba la Luna Eterna o Noche Eterna — una alternativa cosmológica a la dominancia diurna del ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        '. Las Lágrimas de Plata eran prototipos de cuerpo divino: vida líquida capaz de adoptar cualquier forma, candidata a vasija humana sustituta. Si hubiesen completado el proyecto, habrían tenido un Lord Elden propio, independiente de la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        '.'
      ),
      h(2, 'El castigo'),
      p(
        'La ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' respondió con violencia ontológica. Astel — entidad estelar cósmica de tipo Naturalborn of the Void — fue enviada como ejecutor. Sus ciudades fueron destruidas y enterradas. Los supervivientes fueron condenados a vivir en cielos subterráneos contemplando estrellas falsas que imitaban las que ya no podían ver. Astel mismo permaneció en las profundidades de Nokstella como guardián mutilado del exilio.'
      ),
      h(2, 'La esperanza estelar'),
      p(
        'Hoy los Nox esperan en silencio ritual. Su doctrina sobrevive: el cosmos no debe estar dominado por la luz dorada, las estrellas son la verdadera autoridad cósmica, una era nocturna es viable. Cuando ',
        link('Ranni', 'character', 'ranni'),
        ' diseña su rebelión contra la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ', hereda parcialmente este proyecto. La ',
        link('Era de las Estrellas', 'ending', 'age-of-stars'),
        ' es la promesa cumplida que los Nox no pudieron cumplir — aunque el camino de ',
        link('Ranni', 'character', 'ranni'),
        ' no exija fabricar un dios sino retirar la influencia divina del cosmos.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Los Nox son el primer experimento documentado de rebelión cosmológica de las Tierras Intermedias. Su castigo establece la regla del régimen: ningún pueblo puede forjar divinidad propia. Su supervivencia subterránea establece el contraejemplo: incluso castigado, el proyecto persiste. Cada Mimic Tear que el ',
        link('Tarnished', 'concept', 'tarnished'),
        ' invoca es eco de la blasfemia más sofisticada de las Tierras Intermedias; cada estrella falsa de sus cielos es declaración silenciosa de que el cosmos podría haber sido distinto.'
      ),
    ],
    confirmed: [
      ['Los Nox construyeron las Ciudades Eternas (Nokron, Nokstella, Uhl Palace) ', link('antes del Orden Dorado', 'timeline', 'antes-orden-dorado')],
      'Intentaron forjar su propio dios — la Luna Eterna o Noche Eterna',
      ['Las ', link('Lágrimas de Plata y Mimic Tears', 'faction', 'silver-mimic-tears'), ' son su tecnología residual'],
      ['Forjaron la ', link('Hoja Mata-Dedos', 'concept', 'fingerslayer-blade'), ', única arma capaz de matar a los ', link('Dos Dedos', 'faction', 'dos-dedos')],
      'Astel fue el ejecutor cósmico que destruyó sus ciudades',
    ],
    inferred: [
      ['Su tecnología cosmológica excedía la del ', link('Orden Dorado', 'concept', 'golden-order'), ' en sofisticación'],
      ['Su proyecto teológico era directamente competidor de la ', link('Voluntad Mayor', 'concept', 'voluntad-mayor')],
      'Los supervivientes mantienen identidad cultural y memoria del proyecto',
      [link('Ranni', 'character', 'ranni'), ' recoge parcialmente su legado pero adapta los medios (retirada de los dioses, no fabricación)'],
    ],
    theories: [
      ['Algunos Nox supervivientes asistieron a ', link('Ranni', 'character', 'ranni'), ' en su plan inicial'],
      'La civilización Nox pudo haber descubierto la mortalidad de los dioses externos',
      'Astel fue parcialmente alma Nox capturada y deformada',
      'Las estrellas falsas de sus cielos contienen información cosmológica codificada',
    ],
    ambiguous: [
      'Cuántos Nox sobreviven en las Ciudades Eternas',
      'Si conservan capacidad de fabricar nueva tecnología o solo preservan la antigua',
      'Si el proyecto del cuerpo divino es completable bajo otras condiciones',
      'Su relación exacta con los Hados Estelares y los Naturalborn of the Void',
    ],
    relatedCharacters: ['ranni', 'astel'],
    relatedFactions: ['silver-mimic-tears'],
    relatedRegions: ['nokron', 'nokstella', 'ainsel-river'],
    relatedConcepts: ['dark-moon', 'age-of-stars', 'voluntad-mayor', 'fingerslayer-blade'],
    relatedEndings: ['age-of-stars'],
    relatedTimelineEvents: ['nox-ciudades-eternas', 'silver-tears-creation', 'astel-castigo'],
  },

  'dragones-antiguos': {
    summary:
      'Los Antiguos Dragones reinaron las Tierras Intermedias antes del Orden Dorado bajo el liderazgo de Lord Placidusax como Señor Elden. Cuando su dios externo desapareció — sin batalla, sin testigo — su régimen se fragmentó. Algunos pactaron con el Orden naciente; otros se retiraron a Farum Azula, atrapada fuera del tiempo; los más antiguos siguen durmiendo, esperando un retorno que el cosmos descartó.',
    deepLore: [
      h(2, 'El imperio anterior'),
      p(
        'Antes de ',
        link('Marika', 'character', 'marika'),
        ' hubo dragones. ',
        link('Placidusax', 'character', 'placidusax'),
        ' fue Señor Elden de un régimen cósmico cuya datación exacta se ha perdido. ',
        link('Farum Azula', 'region', 'farum-azula'),
        ' fue su capital — ciudad-fortaleza dragónica suspendida en una tormenta atemporal. Sus habitantes incluían dragones, ',
        link('Hombres-Bestia', 'faction', 'hombres-bestia'),
        ', y una orden ritual que continúa hoy adorándolos como dioses.'
      ),
      h(2, 'Cosmología propia'),
      p(
        'Los dragones operaban bajo un dios externo cuya identidad nunca se enuncia en los textos del juego base. Su cosmos tenía leyes propias: la autoridad fluía por relámpago (la sangre de los dragones rojos), por tiempo congelado (',
        link('Farum Azula', 'region', 'farum-azula'),
        '), y por gigantismo cosmológico (',
        link('Greyoll', 'character', 'greyoll'),
        ', la Madre Dragón Anciana). Su régimen era anterior a la mayoría de las construcciones que el ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' considera primordiales — incluso al ',
        link('Crisol', 'concept', 'crucible'),
        ' como autoridad dominante.'
      ),
      h(2, 'La caída sin batalla'),
      p(
        'El régimen dragónico no fue derrotado militarmente. Su dios externo se retiró sin dejar registro, sin sucesor designado, sin explicación. Sin eje cosmológico, los dragones se fragmentaron. ',
        link('Farum Azula', 'region', 'farum-azula'),
        ' quedó suspendida en su tormenta. Placidusax se retiró a una cámara escondida y se durmió. Sus súbditos se dispersaron. La vacante cosmológica que quedó fue eventualmente ocupada por la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' al elegir a ',
        link('Marika', 'character', 'marika'),
        ' como nueva vasija.'
      ),
      h(2, 'Diáspora y pactos'),
      p(
        'Algunos dragones pactaron con el Orden naciente. ',
        link('Fortissax', 'character', 'fortissax'),
        ' fue el caso paradigmático: alianza personal con ',
        link('Godwyn', 'character', 'godwyn'),
        ' que se convirtió en amistad y eventualmente en sacrificio compartido — Fortissax se quemó intentando proteger el alma de ',
        link('Godwyn', 'character', 'godwyn'),
        ' tras la Noche de los ',
        link('Cuchillos Negros', 'faction', 'cuchillos-negros'),
        ', y aún hoy guarda esa alma corrompida bajo Deeproot Depths. Otros dragones — ',
        link('Greyoll', 'character', 'greyoll'),
        ', sus hijos rojos en ',
        link('Caelid', 'region', 'caelid'),
        ', ',
        link('Magma', 'character', 'magma-wyrm-makar'),
        ' Wyrms — se dispersaron por las regiones manteniendo presencia residual. Los más antiguos siguen durmiendo en tumbas dispersas, leales a un régimen que el cosmos ya descartó.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Los Antiguos Dragones son el monumento del juego al dios olvidado. Su existencia silenciosa — opcional incluso para el ',
        link('Tarnished', 'concept', 'tarnished'),
        ' — recuerda que toda era cosmológica termina y nadie la registra. Su régimen no fue derrotado: fue ',
        em('abandonado'),
        ' por su propia divinidad. Ese precedente plantea la pregunta más oscura sobre el régimen actual: ¿qué pasaría si la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' también se retirase plenamente? La respuesta del juego es que ya está ocurriendo, lentamente, ante los ojos del ',
        link('Tarnished', 'concept', 'tarnished'),
        '.'
      ),
    ],
    confirmed: [
      'Placidusax fue Señor Elden de la era dragónica',
      [link('Farum Azula', 'region', 'farum-azula'), ' fue capital del régimen dragónico, hoy suspendida fuera del tiempo'],
      'Su dios externo desapareció sin batalla registrada',
      ['Fortissax pactó con ', link('Godwyn', 'character', 'godwyn'), ' y guarda hoy su alma corrompida bajo Deeproot Depths'],
      [link('Greyoll', 'character', 'greyoll'), ' es la Madre Dragón Anciana, abuela de los dragones rojos de ', link('Caelid', 'region', 'caelid')],
    ],
    inferred: [
      ['El régimen dragónico precede al ', link('Crisol', 'concept', 'crucible'), ' como cosmología dominante en las Tierras Intermedias'],
      'La caída fue por abandono divino, no por derrota militar',
      ['La ', link('Voluntad Mayor', 'concept', 'voluntad-mayor'), ' llenó la vacante cosmológica que quedó'],
      'Algunos dragones siguen leales a Placidusax aunque dispersos',
    ],
    theories: [
      'El dios externo de Placidusax podría retornar bajo condiciones cósmicas específicas',
      [link('Farum Azula', 'region', 'farum-azula'), ' está atemporal porque su régimen aún no ha terminado de caer'],
      [link('Marika', 'character', 'marika'), ' sabe que los dragones son precedente cosmológico de su propia caída futura'],
      ['Los ', link('Hombres-Bestia', 'faction', 'hombres-bestia'), ' siguen ejecutando rituales que conservan parte del cosmos dragónico'],
    ],
    ambiguous: [
      'Identidad del dios externo desaparecido',
      'Cuánto tiempo duró el régimen dragónico antes de caer',
      ['Si los Antiguos Dragones siguen leales a Placidusax o han aceptado el ', link('Orden Dorado', 'faction', 'orden-dorado')],
      'Si Placidusax podría despertar y reclamar el cosmos',
    ],
    relatedCharacters: ['placidusax', 'fortissax', 'godwyn'],
    relatedRegions: ['farum-azula', 'mt-gelmir', 'caelid'],
    relatedFactions: ['hombres-bestia'],
    relatedConcepts: ['dioses-exteriores', 'voluntad-mayor', 'crucible'],
    relatedTimelineEvents: ['era-antigua', 'placidusax-elden-lord', 'fortissax-godwyn'],
  },

  'hombres-bestia': {
    summary:
      'Los Hombres-Bestia son raza primigenia vinculada al Crisol, anterior tanto al Orden Dorado como a la era humana de las Tierras Intermedias. Habitan principalmente Farum Azula como sirvientes ritualistas de la era dragónica. Maliketh fue extraído de su linaje para servir como Bestia Sombra de Marika; Blaidd fue construido siglos después a partir de su biología para servir a Ranni. Su tradición ritual es uno de los pocos eslabones vivientes con la cosmología pre-Orden.',
    deepLore: [
      h(2, 'Hijos del Crisol'),
      p(
        'Los Hombres-Bestia son criaturas anteriores al ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ', vinculados directamente al ',
        link('Crisol', 'concept', 'crucible'),
        ' — la fuerza vital primigenia donde todas las formas de vida se mezclaban sin diferenciación canónica. Sus cuerpos combinan rasgos humanoides con animales (lobos, leones, perros). En la cosmología original, esta hibridación no era aberración: era la norma. Cuando el ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' impuso formas estandarizadas, los Hombres-Bestia quedaron como recordatorio fósil de que el cosmos podía haber sido mucho más promiscuo en sus configuraciones.'
      ),
      h(2, 'Servicio cosmológico'),
      p(
        'En el régimen dragónico de Placidusax, los Hombres-Bestia operaban como clero ritual. Su función incluía el cuidado de tumbas, la custodia de templos y la oficiación de los ritos del relámpago. Cuando el régimen dragónico cayó, parte de ellos se mantuvo en ',
        link('Farum Azula', 'region', 'farum-azula'),
        ' bajo el clero del relámpago — los ',
        em('Beast Clergy'),
        ' que el ',
        link('Tarnished', 'concept', 'tarnished'),
        ' encuentra ahí siguen oficiando ceremonias para un dios externo que se retiró eras atrás. Su lealtad sobrevive a su contexto cosmológico original.'
      ),
      h(2, 'Maliketh: extracción ritual'),
      p(
        link('Maliketh', 'character', 'maliketh'),
        ' fue extraído del linaje de los Hombres-Bestia para servir a ',
        link('Marika', 'character', 'marika'),
        ' como su ',
        link('Bestia Sombra', 'concept', 'shadow-bound-beast'),
        '. La extracción fue ritual: ',
        link('Maliketh', 'character', 'maliketh'),
        ' recibió forma definitiva (la ',
        link('Hoja Negra', 'concept', 'maliketh-black-blade'),
        '), función definitiva (custodia de la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ') y lealtad absoluta a ',
        link('Marika', 'character', 'marika'),
        '. Su naturaleza no-humana lo cualificaba precisamente para guardar la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ' — un humano dorado no podía ser custodio de aquello que el ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' había excluido. ',
        link('Maliketh', 'character', 'maliketh'),
        ' es Hombre-Bestia integrado al régimen sin perder su origen.'
      ),
      h(2, 'Blaidd: construcción derivada'),
      p(
        link('Blaidd', 'character', 'blaidd'),
        ' fue construido siglos después siguiendo el patrón ',
        link('Maliketh', 'character', 'maliketh'),
        ': un Hombre-Bestia diseñado para ser ',
        link('Bestia Sombra', 'concept', 'shadow-bound-beast'),
        ' de un ',
        link('Empyrean', 'concept', 'empyrean'),
        ' específico — en su caso, ',
        link('Ranni', 'character', 'ranni'),
        '. La fabricación involucró biología de Hombres-Bestia, sangre Caria, magia ritual de Raya Lucaria, y conocimiento del régimen sobre cómo replicar la fórmula original. ',
        link('Blaidd', 'character', 'blaidd'),
        ' es la prueba de que la fórmula es transferible — y la prueba paralela de que el régimen no descartó la tecnología, solo la mantuvo en reserva.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Los Hombres-Bestia son la continuidad viva del cosmos pre-Orden. Cada uno de ellos — Beast Clergy en ',
        link('Farum Azula', 'region', 'farum-azula'),
        ', Hombres-Bestia silvestres dispersos, ',
        link('Maliketh', 'character', 'maliketh'),
        ' y ',
        link('Blaidd', 'character', 'blaidd'),
        ' como casos integrados — porta en su cuerpo la prueba de que el ',
        link('Crisol', 'concept', 'crucible'),
        ' nunca se purgó del todo. El régimen dorado los marginalizó pero los necesitó para sus operaciones más críticas. Cada vez que el cosmos requiere un guardián de algo que el ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' oficialmente repudia, recurre a un Hombre-Bestia. Es la herencia que el régimen no puede quemar porque la usa.'
      ),
    ],
    confirmed: [
      ['Los Hombres-Bestia son raza vinculada al ', link('Crisol', 'concept', 'crucible'), ', anterior al ', link('Orden Dorado', 'concept', 'golden-order')],
      ['Operan como clero ritual en ', link('Farum Azula', 'region', 'farum-azula'), ' bajo el régimen dragónico'],
      [link('Maliketh', 'character', 'maliketh'), ' fue extraído de su linaje para servir a ', link('Marika', 'character', 'marika'), ' como ', link('Bestia Sombra', 'concept', 'shadow-bound-beast')],
      [link('Blaidd', 'character', 'blaidd'), ' fue construido a partir de ellos para servir a ', link('Ranni', 'character', 'ranni')],
      ['Sus rituales del relámpago continúan en ', link('Farum Azula', 'region', 'farum-azula')],
    ],
    inferred: [
      'Su tradición preserva conocimiento cosmológico pre-Orden que el régimen dorado descartó',
      'La fabricación de Bestias Sombra requiere biología Hombre-Bestia específicamente',
      'El régimen dorado nunca pudo prescindir totalmente de ellos pese a marginalizarlos',
      ['Existen Hombres-Bestia en otras regiones marginales además de ', link('Farum Azula', 'region', 'farum-azula')],
    ],
    theories: [
      ['La fórmula ', link('Maliketh', 'character', 'maliketh'), '-', link('Blaidd', 'character', 'blaidd'), ' podría replicarse para construir más Bestias Sombra'],
      'Algunos Hombres-Bestia conservan memoria racial del régimen dragónico original',
      'Su lealtad ritual al cosmos pre-Orden es estructural, no eligible',
      ['Si el ', link('Crisol', 'concept', 'crucible'), ' regresara cosmológicamente, su poder ritual aumentaría exponencialmente'],
    ],
    ambiguous: [
      ['Cuántos Hombres-Bestia sobreviven actualmente fuera de ', link('Farum Azula', 'region', 'farum-azula')],
      'Si pueden reproducirse o solo existen los actuales',
      ['Si ', link('Blaidd', 'character', 'blaidd'), ' hereda memoria racial del linaje Hombre-Bestia o solo biología'],
      ['Si ', link('Maliketh', 'character', 'maliketh'), ' siente lealtad residual hacia su raza de origen'],
    ],
    relatedCharacters: ['maliketh', 'blaidd', 'placidusax'],
    relatedFactions: ['dragones-antiguos'],
    relatedRegions: ['farum-azula'],
    relatedConcepts: ['crucible', 'shadow-bound-beast', 'destined-death'],
    relatedTimelineEvents: ['era-antigua', 'maliketh-extraction', 'blaidd-construction'],
  },

  omens: {
    summary:
      'Los Omens son humanos nacidos con manifestaciones del Crisol — cuernos, escamas, cuerpos asimétricos. El Orden Dorado los clasifica como aberración maldita y los encarcela bajo Leyndell. Pero los Omens más famosos del régimen — Morgott y Mohg — son hijos de Marika misma, lo que documenta una verdad incómoda: la sangre primordial nunca se purificó del todo del linaje real.',
    deepLore: [
      h(2, 'La sangre antigua'),
      p(
        'Los Omens son humanos nacidos con manifestaciones físicas del ',
        link('Crisol', 'concept', 'crucible'),
        ': cuernos en frente y espalda, escamas en piel, asimetrías corporales, fuerza física desproporcionada. La doctrina del Orden los clasifica como ',
        link('maldición', 'concept', 'omen-curse'),
        ' — aberración cosmológica, evidencia de impureza, cuerpos que el sistema dorado debería haber excluido del todo. La realidad ontológica es inversa: los Omens son la prueba persistente de que la sangre primordial del ',
        link('Crisol', 'concept', 'crucible'),
        ' nunca se purificó del linaje humano, y mucho menos del linaje real.'
      ),
      h(2, 'Leyndell subterránea: el secreto bajo el trono'),
      p(
        'Bajo ',
        link('Leyndell', 'region', 'leyndell'),
        ', en el Subterranean Shunning-Grounds, el régimen mantiene una población encarcelada de Omens. Allí operan los ',
        link('Verdugos Omen', 'faction', 'omenkillers'),
        ' como mano ejecutora: serruchan cuernos a Omens jóvenes, aplican rituales correctivos, ejecutan a los irreductibles. La existencia de un sistema penitenciario completo dedicado a una sola categoría de seres documenta cuán estructural es la persecución.'
      ),
      h(2, 'Los Omens-realeza: Morgott y Mohg'),
      p(
        link('Morgott', 'character', 'morgott'),
        ' y ',
        link('Mohg', 'character', 'mohg'),
        ' son gemelos, hijos de ',
        link('Marika', 'character', 'marika'),
        ' y ',
        link('Radagon', 'character', 'radagon'),
        ', encarcelados bajo Leyndell desde su nacimiento. La sangre Omen apareció a través de la línea de ',
        link('Radagon', 'character', 'radagon'),
        ' — ',
        em('en Radagon mismo'),
        ', técnicamente, ya que él comparte cuerpo con ',
        link('Marika', 'character', 'marika'),
        '. Su existencia documenta que los Omens son posibilidad estructural del propio linaje divino, no contaminación externa.'
      ),
      p(
        'Su rebelión adoptó formas opuestas. ',
        link('Morgott', 'character', 'morgott'),
        ' aceptó la doctrina del régimen que lo encarceló: bajo la máscara de ',
        link('Margit', 'character', 'margit'),
        ' el Maleante, defiende Leyndell con la fidelidad absoluta del rechazado. ',
        link('Mohg', 'character', 'mohg'),
        ' la repudió enteramente: encontró otro dios externo (la ',
        link('Madre Informe', 'concept', 'formless-mother'),
        '), construyó un palacio propio en Mohgwyn, secuestró a ',
        link('Miquella', 'character', 'miquella'),
        ', y se proclamó Lord of Blood. Cada uno representa una respuesta posible al rechazo cosmológico: lealtad obstinada o rebelión absoluta.'
      ),
      h(2, 'Estado actual'),
      p(
        'Tras la ',
        link('fractura', 'timeline', 'la-fractura'),
        ', la situación de los Omens es ambigua. ',
        link('Morgott', 'character', 'morgott'),
        ' sigue defendiendo Leyndell pero su régimen se desmorona. ',
        link('Mohg', 'character', 'mohg'),
        ' ha establecido una corte ensangrentada paralela. Los Omens del Subsuelo — los anónimos — siguen encarcelados, pero el régimen que los encarcela ya no responde con coordinación. Algunos han escapado a regiones marginales. La represión continúa por inercia, pero su autoridad cosmológica está vacía.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Los Omens son el símbolo del juego sobre la inseparabilidad del cuerpo cosmológico y el cuerpo político. El ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' podía haber integrado al ',
        link('Crisol', 'concept', 'crucible'),
        ' en su doctrina; eligió declararlo maldición y construir prisiones. La consecuencia: los hijos del propio régimen se convirtieron en ejemplos de la maldición que el régimen perseguía. Cada Omen vivo bajo Leyndell es declaración silenciosa de que ',
        em('el cosmos no se deja excluir por decreto'),
        '.'
      ),
    ],
    confirmed: [
      ['Los Omens son humanos con manifestaciones físicas del ', link('Crisol', 'concept', 'crucible')],
      'El régimen los considera maldición y los encarcela bajo Leyndell',
      [link('Morgott', 'character', 'morgott'), ' y ', link('Mohg', 'character', 'mohg'), ' son hijos de ', link('Marika', 'character', 'marika'), ' y ', link('Radagon', 'character', 'radagon'), ' nacidos Omen'],
      ['Los ', link('Verdugos Omen', 'faction', 'omenkillers'), ' ejecutan rituales contra ellos sistemáticamente'],
      'Algunos Omens son tolerados socialmente en el Subsuelo de Leyndell',
    ],
    inferred: [
      ['La sangre Omen apareció en el linaje real a través de ', link('Radagon', 'character', 'radagon')],
      ['Su existencia documenta que el ', link('Crisol', 'concept', 'crucible'), ' nunca fue purgado plenamente'],
      [link('Morgott', 'character', 'morgott'), ' internalizó la doctrina del régimen que lo rechazó; ', link('Mohg', 'character', 'mohg'), ' la repudió'],
      'La represión institucional continúa post-fractura pero sin autoridad cosmológica clara',
    ],
    theories: [
      [link('Marika', 'character', 'marika'), ' sabía que el ', link('Crisol', 'concept', 'crucible'), ' persistía en su linaje y eligió ocultarlo'],
      'Otros Omens-realeza no documentados existen o existieron',
      ['Si el ', link('Crisol', 'concept', 'crucible'), ' regresara cosmológicamente, los Omens serían repentinamente justificados'],
      'La encarcelación masiva tiene función ritual además de penal',
    ],
    ambiguous: [
      'Cuántos Omens viven actualmente bajo Leyndell',
      ['Si ', link('Marika', 'character', 'marika'), ' visitó alguna vez a sus hijos encarcelados'],
      'Si la fórmula del Omen-curse es genética, ritual o cosmológica',
      'Si pueden coordinar entre sí o están aislados por completo',
    ],
    relatedCharacters: ['morgott', 'mohg', 'marika', 'radagon'],
    relatedFactions: ['orden-dorado', 'omenkillers', 'golden-lineage'],
    relatedRegions: ['leyndell', 'subterranean-shunning-grounds', 'mohgwyn'],
    relatedConcepts: ['crucible', 'omen-curse'],
    relatedTimelineEvents: ['morgott-mohg-imprisonment'],
  },

  misbegotten: {
    summary:
      'Los Misbegotten son humanos nacidos con cuerpos malformados — pieles peludas, garras, asimetrías brutales. El Orden Dorado los esclavizó como guerreros desechables, mineros y mano de obra forzada durante eras. Su rebelión en Castle Morne fue la primera revuelta visible contra el régimen; el santuario que les ofreció Miquella en el Haligtree fue la primera vez que un sistema cosmológico los reconoció como personas.',
    deepLore: [
      h(2, 'Los cuerpos no canónicos'),
      p(
        'Los Misbegotten son humanos nacidos con manifestaciones extremas del ',
        link('Crisol', 'concept', 'crucible'),
        ' — cuerpos peludos, garras, hocicos, asimetrías brutales. A diferencia de los ',
        link('Omens', 'faction', 'omens'),
        ' (que conservan apariencia humana con cuernos), los Misbegotten son visualmente más distantes de la norma humana. Su fuerza física es brutal pero acompañada de dolor crónico. Su esperanza de vida es corta. Sus cuerpos son la prueba más visible de que el ',
        link('Crisol', 'concept', 'crucible'),
        ' nunca fue purgado del linaje humano.'
      ),
      h(2, 'Esclavitud institucional'),
      p(
        'El ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' los esclavizó sistemáticamente durante eras. La Casa Volmer en ',
        link('Castle Morne', 'region', 'castle-morne'),
        ' los usó como guerreros gladiadores y mano de obra. Otras casas nobles los usaron como mineros, sirvientes y verdugos disponibles. Su uso era ritual además de económico: poseer Misbegotten esclavos era marca de status aristocrático. La Iglesia del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' los catalogaba como animales sagrados, no como personas, lo que justificaba doctrinalmente la esclavitud.'
      ),
      h(2, 'La revuelta de Castle Morne'),
      p(
        'La rebelión llegó cuando llegó: súbita, total, sangrienta. Los Misbegotten esclavizados en Castle Morne se levantaron, mataron al gobernador, esclavizaron a los aristócratas supervivientes y se establecieron como nuevos amos del castillo. ',
        link('Edgar', 'character', 'edgar'),
        ', lord superviviente, defendió un sector residual hasta el final; su hija ',
        link('Irina', 'character', 'irina'),
        ' escapó ciega. La revuelta fue victoria táctica que no resolvió nada estructural — los Misbegotten tomaron Castle Morne pero siguieron siendo perseguidos en otras regiones.'
      ),
      h(2, 'El santuario del Haligtree'),
      p(
        link('Miquella', 'character', 'miquella'),
        ' los acogió en el ',
        link('Haligtree', 'region', 'haligtree'),
        ' como ciudadanos plenos del proyecto utópico que estaba construyendo. Por primera vez en la historia documentada de las Tierras Intermedias, un sistema cosmológico los reconocía como personas. El éxodo a través del ',
        link('Snowfield Consagrado', 'region', 'consecrated-snowfield'),
        ' costó vidas, pero los que llegaron a Elphael vivieron como iguales. ',
        link('Boc', 'character', 'boc'),
        ' es uno de ellos: el sastre Misbegotten que ofrece sus servicios al ',
        link('Tarnished', 'concept', 'tarnished'),
        ', recordatorio viviente de que la utopía existió.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Los Misbegotten son la prueba estructural del juego de que la opresión genera respuestas, pero las respuestas reproducen el mismo patrón de poder. Los esclavos liberados en Castle Morne se convirtieron en amos esclavizadores. La libertad sin estructura nueva es solo intercambio de roles. Solo el ',
        link('Haligtree', 'concept', 'haligtree'),
        ' — el proyecto de ',
        link('Miquella', 'character', 'miquella'),
        ' que requería rediseño cosmológico completo — pudo realmente integrarlos como iguales. Su existencia plantea la pregunta filosófica más urgente del juego: ¿es posible la liberación sin reemplazar el cosmos entero?'
      ),
    ],
    confirmed: [
      ['Los Misbegotten son humanos con manifestaciones extremas del ', link('Crisol', 'concept', 'crucible')],
      ['El ', link('Orden Dorado', 'faction', 'orden-dorado'), ' los esclavizó como guerreros, mineros y servidumbre'],
      ['La ', link('revuelta de Castle Morne', 'timeline', 'castle-morne-rebellion'), ' fue la primera victoria militar pública contra el régimen'],
      [link('Miquella', 'character', 'miquella'), ' los acogió como iguales en el ', link('Haligtree', 'concept', 'haligtree')],
      ['Boc es Misbegotten superviviente del ', link('Haligtree', 'region', 'haligtree')],
    ],
    inferred: [
      'Su esclavitud era ritual además de económica',
      ['La Iglesia del ', link('Orden Dorado', 'concept', 'golden-order'), ' proporcionó justificación doctrinal a la esclavitud'],
      ['La ', link('revuelta de Castle Morne', 'timeline', 'castle-morne-rebellion'), ' fue acumulación de generaciones de explotación'],
      ['El reconocimiento del ', link('Haligtree', 'region', 'haligtree'), ' fue amenaza estructural al régimen — la utopía existía'],
    ],
    theories: [
      ['Algunos Misbegotten descienden de generaciones de esclavitud específica que concentró rasgos del ', link('Crisol', 'concept', 'crucible')],
      ['La caída del ', link('Haligtree', 'region', 'haligtree'), ' fue arquitectónicamente diseñada por la ', link('Voluntad Mayor', 'concept', 'voluntad-mayor')],
      'Existieron Misbegotten-realeza en otras épocas que el régimen ocultó',
      ['Si el ', link('Crisol', 'concept', 'crucible'), ' retornara cosmológicamente, los Misbegotten serían los menos sorprendidos de las Tierras Intermedias'],
    ],
    ambiguous: [
      'Cuántos Misbegotten viven actualmente esclavizados',
      ['Si la ', link('revuelta de Castle Morne', 'timeline', 'castle-morne-rebellion'), ' fue espontánea o coordinada'],
      'Si los Leonine Misbegotten son evolución biológica o ritual',
      ['Si el ', link('Haligtree', 'concept', 'haligtree'), ' podría restaurarse como santuario funcional'],
    ],
    relatedCharacters: ['miquella', 'boc', 'edgar', 'irina', 'malenia'],
    relatedFactions: ['orden-dorado', 'haligtree'],
    relatedRegions: ['peninsula-llorosa', 'castle-morne', 'haligtree', 'mt-gelmir'],
    relatedConcepts: ['crucible', 'omen-curse', 'unalloyed-gold'],
    relatedTimelineEvents: ['castle-morne-rebellion', 'unalloyed-gold-haligtree'],
  },

  albinauricos: {
    summary:
      'Los Albinaurics son humanos artificiales — no nacidos sino fabricados — creados en eras antiguas mediante magia y alquimia avanzada. Frágiles, de esperanza de vida corta, perseguidos por el Orden Dorado como humanidad falsa. Miquella los acogió en el Haligtree, donde por primera vez fueron reconocidos como personas. Tras el secuestro de Miquella por Mohg, muchos fueron desangrados rituales en Mohgwyn — tragedia ontológica multiplicada.',
    deepLore: [
      h(2, 'Los seres construidos'),
      p(
        'Los Albinaurics fueron creados artificialmente — no nacidos. La fórmula original combina ',
        link('Oro sin Aleación', 'concept', 'unalloyed-gold'),
        ' (oro purificado de influencia divina externa), agua viva ritualizada y magia ceremonial específica. Sus cuerpos son frágiles, sus piernas a menudo malformadas, su esperanza de vida es corta. Algunos nacen como humanoides operativos; otros como cuerpos que apenas pueden sostenerse. Su existencia documenta que la humanidad puede fabricarse sin intervención divina externa — herejía cosmológica fundamental para el régimen del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        '.'
      ),
      h(2, 'Persecución sistemática'),
      p(
        'El Orden los considera humanidad falsa, anomalía cosmológica, blasfemia tecnológica. Comunidades enteras fueron disueltas: la aldea Albinaurica de Liurnia, los pueblos del Snowfield. Los supervivientes operan en escondites: ',
        link('Albus', 'character', 'albus'),
        ' vive disfrazado dentro de una jarra rota, indistinguible de objeto inanimado. ',
        link('Latenna', 'character', 'latenna'),
        ' vive con su perro guardián en las ruinas heladas del Snowfield, custodiando la mitad del Mapa Secreto. La memoria es su herencia. La invisibilidad es su escudo.'
      ),
      h(2, 'El éxodo al Haligtree'),
      p(
        link('Miquella', 'character', 'miquella'),
        ' los acogió en el ',
        link('Haligtree', 'region', 'haligtree'),
        ' como ciudadanos plenos. El éxodo a través del ',
        link('Snowfield Consagrado', 'region', 'consecrated-snowfield'),
        ' fue masivo y mortal — la nieve consume vida; muchos murieron en el camino. Los que llegaron a ',
        link('Elphael', 'region', 'elphael'),
        ' vivieron como iguales bajo la luz del ',
        link('Oro sin Aleación', 'concept', 'unalloyed-gold'),
        '. Era santuario que reconocía su humanidad sin asterisco.'
      ),
      h(2, 'La masacre de Mohgwyn'),
      p(
        'Tras el secuestro de ',
        link('Miquella', 'character', 'miquella'),
        ' por ',
        link('Mohg', 'character', 'mohg'),
        ', los Albinaurics del ',
        link('Haligtree', 'region', 'haligtree'),
        ' perdieron protección estructural. ',
        link('Mohg', 'character', 'mohg'),
        ' los capturó masivamente y los transportó al Palacio de Mohgwyn como reserva de sangre. Sus cuerpos cuelgan en las catacumbas, sangrados rituales para alimentar la cosmología sangrienta de la ',
        link('Madre Informe', 'concept', 'formless-mother'),
        '. La utopía que les ofreció ',
        link('Miquella', 'character', 'miquella'),
        ' terminó como genocidio ritualizado por el dios externo opuesto.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Los Albinaurics son la prueba persistente del juego de que la humanidad es construible sin la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        '. Su existencia es herejía estructural. Su persecución es admisión cosmológica del régimen: si los Albinaurics son personas válidas, la doctrina dorada de que solo lo bendecido por la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' es plenamente humano se desploma. Su utopía bajo ',
        link('Miquella', 'character', 'miquella'),
        ' probaba que la integración era viable; su masacre bajo ',
        link('Mohg', 'character', 'mohg'),
        ' probaba que cualquier alternativa cosmológica al ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' puede ser arrasada por otra cosmología más violenta. Sus cuerpos colgantes en Mohgwyn son el cementerio invisible de las Tierras Intermedias.'
      ),
    ],
    confirmed: [
      'Los Albinaurics son humanos fabricados, no nacidos',
      ['El ', link('Orden Dorado', 'faction', 'orden-dorado'), ' los persigue como humanidad falsa'],
      [link('Miquella', 'character', 'miquella'), ' los acogió en el ', link('Haligtree', 'concept', 'haligtree'), ' como iguales'],
      [link('Mohg', 'character', 'mohg'), ' los capturó masivamente tras el secuestro de ', link('Miquella', 'character', 'miquella')],
      'Sus cuerpos sangran rituales en las catacumbas de Mohgwyn',
      [link('Latenna', 'character', 'latenna'), ' y ', link('Albus', 'character', 'albus'), ' son supervivientes encubiertos'],
    ],
    inferred: [
      ['Su fabricación requiere ', link('Oro sin Aleación', 'concept', 'unalloyed-gold'), ', agua viva y magia ceremonial avanzada'],
      'Su existencia es herejía cosmológica fundamental para el régimen dorado',
      'El régimen oficial nunca pudo replicar la fórmula de fabricación',
      'La masacre de Mohgwyn fue tolerada por el régimen pese a no ser obra suya',
    ],
    theories: [
      'La fórmula original fue desarrollada por una civilización pre-Orden cuyo nombre se ha perdido',
      'Algunos Albinaurics conservan memoria racial latente de su creación',
      ['Si ', link('Miquella', 'character', 'miquella'), ' despertara, podría restaurar la fórmula y rehabilitar a los supervivientes'],
      ['Existen Albinaurics ocultos en regiones marginales que ningún ', link('Tarnished', 'concept', 'tarnished'), ' encuentra'],
    ],
    ambiguous: [
      'Cuántos Albinaurics sobreviven en las Tierras Intermedias actuales',
      'Quién desarrolló originalmente la fórmula de fabricación',
      'Si la fragilidad física es estructural o consecuencia de generaciones de persecución',
      'Si conservan capacidad reproductiva natural o solo pueden ser fabricados',
    ],
    relatedCharacters: ['miquella', 'mohg', 'malenia', 'albus', 'latenna'],
    relatedFactions: ['haligtree'],
    relatedRegions: ['haligtree', 'elphael', 'consecrated-snowfield', 'mohgwyn', 'liurnia'],
    relatedConcepts: ['unalloyed-gold', 'crucible'],
    relatedTimelineEvents: ['unalloyed-gold-haligtree', 'mohg-toma-miquella', 'albinauric-massacre'],
  },

  'cleanrot-knights': {
    summary:
      'Los Cleanrot Knights — Caballeros de la Podredumbre Limpia — son la guardia personal de Malenia, cuerpo de elite del Haligtree. Aceptaron infección voluntaria con podredumbre escarlata como prueba de lealtad absoluta. Su devoción es médicamente suicida y completamente coherente con la dialéctica de Miquella: aceptar lo que el régimen rechaza convierte la enfermedad en sacramento.',
    deepLore: [
      h(2, 'Origen y juramento'),
      p(
        'Los Cleanrot Knights fueron fundados como guardia personal de ',
        link('Malenia', 'character', 'malenia'),
        ' por iniciativa propia de la ',
        link('Empyrean', 'concept', 'empyrean'),
        '. Cada caballero aceptó infectarse voluntariamente con la ',
        link('Podredumbre Escarlata', 'concept', 'scarlet-rot'),
        ' como prueba de lealtad. La infección no es metáfora: es real, progresiva, incurable. Cada caballero porta dentro de su armadura el mismo veneno que su ',
        link('Empyrean', 'concept', 'empyrean'),
        '. La tradición convierte la enfermedad de ',
        link('Malenia', 'character', 'malenia'),
        ' en condición compartida — solidaridad ontológica.'
      ),
      h(2, 'Estructura y armaduras rituales'),
      p(
        'Sus armaduras blancas y doradas están diseñadas con doble función: proteger el cuerpo del caballero del entorno externo y, simultáneamente, contener la podredumbre interna para que no se propague a aliados no infectados. Cada caballero porta espadas largas y guadañas características. Su disciplina marcial es ascética; sus rituales internos son médicos: monitoreo del avance de la podredumbre, contención mediante magia del ',
        link('Haligtree', 'region', 'haligtree'),
        ', sostenimiento de capacidad combativa pese a la corrupción acumulada.'
      ),
      h(2, 'Servicio al Haligtree'),
      p(
        'Operan como guardia militar del proyecto utópico. Defienden ',
        link('Elphael', 'region', 'elphael'),
        ' y los caminos del ',
        link('Haligtree', 'region', 'haligtree'),
        '. Protegen a los refugiados ',
        link('Albinaurics', 'faction', 'albinauricos'),
        ' y ',
        link('Misbegotten', 'faction', 'misbegotten'),
        ' que llegan al santuario. Su lealtad personal a ',
        link('Malenia', 'character', 'malenia'),
        ' es absoluta — ',
        link('Finlay', 'character', 'finlay'),
        ' (uno de sus comandantes) muere protegiéndola, y su monumento conmemorativo es uno de los detalles más íntimos del juego.'
      ),
      h(2, 'Caída tras Aeonia'),
      p(
        'Tras la Batalla de Aeonia donde ',
        link('Malenia', 'character', 'malenia'),
        ' floreció parcialmente, la podredumbre escapó del control individual. Los Cleanrot Knights que estaban con ella fueron sobrepasados: la dosis interna combinada con la radiación externa los empujó al límite. Algunos perdieron consciencia parcial; otros se transformaron en formas peores; algunos sobrevivieron pero acelerados en su podredumbre. Los que el ',
        link('Tarnished', 'concept', 'tarnished'),
        ' encuentra hoy en el ',
        link('Haligtree', 'concept', 'haligtree'),
        ' son los supervivientes corrompidos — siguen luchando pero ya no recuerdan exactamente qué defienden.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Los Cleanrot Knights son el monumento del juego a la lealtad absoluta como acto cosmológico. Aceptaron compartir la enfermedad de su ',
        link('Empyrean', 'concept', 'empyrean'),
        ' como forma de no abandonarla. La devoción es médicamente suicida y políticamente clarividente: si ',
        link('Malenia', 'character', 'malenia'),
        ' debe vivir podrida, ellos también. Su existencia es respuesta directa a la doctrina del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' de purificación: en lugar de purgar la podredumbre, la integran como condición de pertenencia. La enfermedad se convierte en sacramento.'
      ),
    ],
    confirmed: [
      ['Los Cleanrot Knights son guardia personal de ', link('Malenia', 'character', 'malenia')],
      ['Aceptaron infección voluntaria de ', link('Podredumbre Escarlata', 'concept', 'scarlet-rot'), ' como juramento'],
      'Sus armaduras protegen del entorno externo pero contienen el veneno interno',
      ['Defendieron Elphael y los caminos del ', link('Haligtree', 'region', 'haligtree')],
      [link('Finlay', 'character', 'finlay'), ' fue uno de sus comandantes con monumento conmemorativo dedicado'],
    ],
    inferred: [
      ['Su tradición convierte la enfermedad de ', link('Malenia', 'character', 'malenia'), ' en condición compartida'],
      'Los rituales internos incluyen monitoreo médico y contención ritual',
      'Tras Aeonia perdieron control sobre la propia podredumbre',
      ['Los supervivientes en el ', link('Haligtree', 'concept', 'haligtree'), ' actual son versiones corrompidas'],
    ],
    theories: [
      'Algunos Cleanrot Knights iniciados eran ellos mismos infectados orgánicamente y se sumaron por afinidad ontológica',
      ['Su disciplina marcial fue diseñada por ', link('Malenia', 'character', 'malenia'), ' con base en técnicas Caria'],
      ['Si ', link('Miquella', 'character', 'miquella'), ' despertara, podría revertir parte de la corrupción acumulada'],
      'Existen Cleanrot Knights desertores que abandonaron tras Aeonia',
    ],
    ambiguous: [
      'Cuántos Cleanrot Knights operativos sobreviven actualmente',
      'Si conservan consciencia residual o son puramente reactivos',
      ['Si su juramento permite servir a otra ', link('Empyrean', 'concept', 'empyrean'), ' si ', link('Malenia', 'character', 'malenia'), ' cayera definitivamente'],
      'Si la transformación post-Aeonia es reversible',
    ],
    relatedCharacters: ['malenia', 'miquella', 'finlay'],
    relatedFactions: ['kindred-of-rot', 'haligtree', 'albinauricos', 'misbegotten'],
    relatedRegions: ['haligtree', 'elphael', 'caelid', 'aeonia'],
    relatedConcepts: ['scarlet-rot', 'unalloyed-gold'],
    relatedTimelineEvents: ['aeonia-bloom', 'unalloyed-gold-haligtree'],
  },

  redmanes: {
    summary:
      'Los Redmanes fueron caballería de elite leal a Radahn, originaria de Caelid. Combatían bajo magia gravitacional aprendida en Sellia. Tras la corrupción de su señor por la Podredumbre Escarlata de Malenia durante la Batalla de Aeonia, organizaron el Festival ritual como último acto de servicio: invitar a guerreros legendarios a darle al Radahn corrompido la muerte digna que su locura ya no le permite alcanzar.',
    deepLore: [
      h(2, 'La caballería estelar'),
      p(
        'Los Redmanes fueron caballería de elite leal a ',
        link('Radahn', 'character', 'radahn'),
        ', su general y demidiós. Su nombre proviene del rojo distintivo de su melena guerrera y de la heráldica del ',
        link('Castillo Redmane', 'region', 'redmane-castle'),
        ' en ',
        link('Caelid', 'region', 'caelid'),
        '. Combatían con ',
        link('magia gravitacional', 'concept', 'gravity-magic'),
        ' aprendida en la ciudad-academia de ',
        link('Sellia', 'region', 'caelid'),
        ' — la única tradición mágica de las Tierras Intermedias comparable en sofisticación a la magia estelar de Raya Lucaria.'
      ),
      h(2, 'Doctrina marcial'),
      p(
        'Su disciplina combinaba honor caballeresco con maestría arcana. Cada Redmane montaba caballos preparados ritualmente, portaba armaduras que canalizaban gravedad como herramienta defensiva, y empleaba técnicas espadas-y-magia coordinadas. El propio ',
        link('Radahn', 'character', 'radahn'),
        ' era el ejemplo absoluto: sostenía a su caballo Leonard en el aire mediante ',
        link('magia gravitacional', 'concept', 'gravity-magic'),
        ' propia, una proeza imposible para cualquier otro jinete de las Tierras Intermedias.'
      ),
      h(2, 'La Batalla de Aeonia'),
      p(
        'Cuando ',
        link('Malenia', 'character', 'malenia'),
        ' invadió ',
        link('Caelid', 'region', 'caelid'),
        ' en busca de combate decisivo contra ',
        link('Radahn', 'character', 'radahn'),
        ', los Redmanes pelearon en formación cerrada. ',
        link('Radahn', 'character', 'radahn'),
        ' y ',
        link('Malenia', 'character', 'malenia'),
        ' se enfrentaron en duelo personal. La ',
        link('Empyrean', 'concept', 'empyrean'),
        ' floreció parcialmente para no perder; la podredumbre se dispersó como tormenta escarlata. ',
        link('Caelid', 'region', 'caelid'),
        ' se transformó en páramo putrefacto. ',
        link('Radahn', 'character', 'radahn'),
        ' no murió pero perdió la mente — la podredumbre lo redujo a estado animal violento. Los Redmanes vieron a su señor convertirse en monstruo en cuestión de días.'
      ),
      h(2, 'El Festival ritual'),
      p(
        'Bajo la dirección de ',
        link('Jerren', 'character', 'jerren'),
        ', Señor de la Guerra superviviente, los Redmanes organizaron un Festival ritual: invitar a guerreros legendarios de todas las Tierras Intermedias a desafiar al ',
        link('Radahn', 'character', 'radahn'),
        ' corrompido. La premisa cosmológica es teológicamente compleja — ',
        link('Radahn', 'character', 'radahn'),
        ' como demidiós con ',
        link('Gran Runa', 'concept', 'great-rune'),
        ' no puede morir de causas naturales (la Muerte sigue sellada), solo puede ser vencido en combate ritualmente válido. El Festival es el cierre piadoso: ofrecerle la muerte digna que su locura ya no le permite alcanzar por sí mismo. Su ',
        link('Gran Runa', 'concept', 'great-rune'),
        ' es el premio para quien lo derrote.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Los Redmanes son el monumento del juego a la lealtad transformada en piedad. No abandonaron a ',
        link('Radahn', 'character', 'radahn'),
        ' cuando se volvió monstruo — eligieron orquestar su muerte ritual con los honores que merecía como señor. El Festival es uno de los pocos eventos de las Tierras Intermedias donde un colectivo guerrero acepta ',
        em('cuidar a su señor matándolo'),
        '. Es lealtad llevada hasta su extremo lógico: si no podemos salvarlo, le daremos al menos una muerte digna.'
      ),
    ],
    confirmed: [
      ['Los Redmanes fueron caballería de elite de ', link('Radahn', 'character', 'radahn')],
      ['Aprendían ', link('magia gravitacional', 'concept', 'gravity-magic'), ' en Sellia, ciudad-academia de ', link('Caelid', 'region', 'caelid')],
      ['Combatieron en la Batalla de Aeonia donde ', link('Radahn', 'character', 'radahn'), ' perdió la mente'],
      ['Organizan el Festival ritual bajo dirección de ', link('Jerren', 'character', 'jerren')],
      ['La ', link('Gran Runa de Radahn', 'concept', 'radahns-great-rune'), ' es el premio del Festival'],
    ],
    inferred: [
      'Su lealtad incluye obligación ritual de orquestar muerte digna en caso de degradación',
      ['La corrupción de ', link('Radahn', 'character', 'radahn'), ' fue gradual tras Aeonia, no instantánea'],
      'El Festival es estructuralmente similar a otros rituales del régimen pre-Orden',
      'Algunos Redmanes desertaron tras Aeonia rechazando el Festival',
    ],
    theories: [
      'Sellen fue alguna vez maestra de algunos Redmanes en Sellia antes de su excomunión',
      ['La ', link('magia gravitacional', 'concept', 'gravity-magic'), ' Redmane es derivación tardía de tecnología Nox'],
      ['Si ', link('Radahn', 'character', 'radahn'), ' fuera curado de la Podredumbre, la disciplina podría reactivarse plenamente'],
      ['Algunos Redmanes guardan secretos sobre la Floración de ', link('Malenia', 'character', 'malenia'), ' que el régimen oficial no documenta'],
    ],
    ambiguous: [
      'Cuántos Redmanes operativos sobreviven actualmente',
      ['Si ', link('Jerren', 'character', 'jerren'), ' cree que ', link('Radahn', 'character', 'radahn'), ' pueda ser curado o si solo busca cierre ritual'],
      ['Si la ', link('magia gravitacional', 'concept', 'gravity-magic'), ' puede transferirse a tradiciones no-Redmane'],
      ['Si el Festival se completaría sin la intervención del ', link('Tarnished', 'concept', 'tarnished')],
    ],
    relatedCharacters: ['radahn', 'jerren', 'sellen', 'malenia'],
    relatedFactions: ['orden-dorado'],
    relatedRegions: ['caelid', 'redmane-castle', 'sellia'],
    relatedConcepts: ['great-rune', 'scarlet-rot'],
    relatedTimelineEvents: ['aeonia-bloom', 'radahn-festival'],
  },

  'volcano-manor': {
    summary:
      'Volcano Manor es corte alternativa al Orden Dorado situada en el cráter del Monte Gelmir. Tanith la dirige en nombre de su esposo Rykard. Recluta nobles desafectos y los emplea como Recusantes — asesinos que invaden a otros Tarnished. Bajo la fachada aristocrática espera la entidad serpentina pre-Orden que devoró a Rykard y opera ahora a través de su nombre. Es la única corte explícitamente blasfema de las Tierras Intermedias.',
    deepLore: [
      h(2, 'La fachada aristocrática'),
      p(
        link('Tanith', 'character', 'tanith'),
        ' es Lady consorte de ',
        link('Rykard', 'character', 'rykard'),
        ' y dirigente operativa del Manor. Su corte recibe nobles que han sido desafectados del ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' por motivos diversos: ambición política frustrada, exilio doctrinal, ofensas familiares, vocación blasfema. Cada huésped recibe rango ritual, residencia en el manor, y una serie de cartas-invitación. Las cartas son misiones de asesinato disfrazadas de rituales: cazar ',
        link('Tarnished', 'concept', 'tarnished'),
        ' específicos, recuperar artefactos, eliminar facciones rivales del Orden. Quien acepta y cumple asciende dentro de la jerarquía del Manor.'
      ),
      h(2, 'Los Recusantes'),
      p(
        'Los miembros activos del Manor se llaman Recusantes — los que rehúsan el régimen oficial. Cada uno ha sido reclutado mediante carta-invitación entregada por mensajero misterioso. Los Recusantes prominentes incluyen a ',
        link('Bernahl', 'character', 'bernahl'),
        ' (líder Banished Knight caído en blasfemia), ',
        link('Diallos', 'character', 'diallos'),
        ' (durante una fase efímera), y los ',
        link('Tarnished', 'concept', 'tarnished'),
        ' anónimos que el jugador puede invadir. ',
        link('Rya', 'character', 'rya'),
        ' es la portadora ritual de invitaciones — sirve como reclutadora pública pese a no ser plenamente consciente del proyecto teológico subyacente.'
      ),
      h(2, 'La serpiente bajo el palacio'),
      p(
        'Pero Volcano Manor es solo la fachada visible. Bajo el palacio espera la entidad serpentina pre-Orden — la "Gran Serpiente" cuyo nombre original se ha perdido. Era dios menor del fuego volcánico ',
        link('antes del Orden Dorado', 'timeline', 'antes-orden-dorado'),
        ', anterior al ',
        link('Crisol', 'concept', 'crucible'),
        ' como autoridad cósmica regional. ',
        link('Rykard', 'character', 'rykard'),
        ' eligió ofrecerse como vasija para hacerse ',
        em('inmortal'),
        ' — pero la entidad lo devoró. Ahora la serpiente opera a través del nombre de ',
        link('Rykard', 'character', 'rykard'),
        '. La voz que emite es la del demidiós; la voluntad es la del dios serpentino.'
      ),
      h(2, 'Doctrina implícita: blasfemia funcional'),
      p(
        'La doctrina del Manor no se enuncia explícitamente — pero se infiere de su práctica. La serpiente representa cosmología pre-Orden donde dioses-objeto eran consumibles ritualmente. El proyecto del Manor es producir ',
        link('Tarnished', 'concept', 'tarnished'),
        ' asesinados ofrendados al sistema digestivo cósmico de la Gran Serpiente. Cada Recusante que mata fortalece a la entidad. Cada ',
        link('Tarnished', 'concept', 'tarnished'),
        ' asesinado es ofrenda. La Era del Lord Blasfemo (final asociado a ',
        link('Rykard', 'character', 'rykard'),
        ') sería establecimiento cosmológico de este sistema como nueva regla.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Volcano Manor es el monumento del juego a cómo los regímenes alternativos al ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' terminan reproduciendo formas paralelas de explotación. La serpiente devora a sus propios sirvientes (',
        link('Rykard', 'character', 'rykard'),
        '); los Recusantes asesinan a otros ',
        link('Tarnished', 'concept', 'tarnished'),
        ' sin ganar mucho ellos mismos; Tanith oficia con elegancia un sistema que termina alimentando a una entidad anterior. La rebelión contra el Orden no produce libertad cosmológica — produce solo otra cosmología que devora distinto. Es la lección política más fría del juego.'
      ),
    ],
    confirmed: [
      ['Volcano Manor está en el cráter del ', link('Monte Gelmir', 'region', 'mt-gelmir')],
      ['Tanith dirige operativamente; ', link('Rykard', 'character', 'rykard'), ' es el demidiós-vasija nominal'],
      'Recluta nobles desafectos como Recusantes mediante cartas-invitación',
      ['Bajo el palacio habita una entidad serpentina pre-Orden que devoró a ', link('Rykard', 'character', 'rykard')],
      'Rya es la portadora ritual de invitaciones',
    ],
    inferred: [
      'Las cartas-invitación son sistema de reclutamiento ritualizado, no comunicación accidental',
      'Cada Recusante asesinado o vencido fortalece a la entidad serpentina',
      [link('Rykard', 'character', 'rykard'), ' eligió la inmortalidad de la serpiente conscientemente y fue traicionado'],
      'Tanith puede o no saber que su esposo está completamente devorado',
    ],
    theories: [
      'Tanith es ella misma vasija parcial de la serpiente',
      'La entidad serpentina podría ser hermana cosmológica de la Madre Informe',
      'Existe una jerarquía de Recusantes con rangos rituales que el juego no documenta',
      ['Si la Gran Serpiente fuera derrotada, ', link('Rykard', 'character', 'rykard'), ' regresaría parcialmente como persona'],
    ],
    ambiguous: [
      'Identidad y nombre original de la entidad serpentina',
      'Si Tanith está consciente del proyecto teológico subyacente',
      'Cuántos Recusantes han operado a lo largo de la historia del Manor',
      'Si los huéspedes pueden abandonar libremente o están atrapados ritualmente',
    ],
    relatedCharacters: ['rykard', 'tanith', 'rya', 'patches', 'diallos', 'bernahl'],
    relatedFactions: ['orden-dorado', 'banished-knights'],
    relatedRegions: ['mt-gelmir'],
    relatedConcepts: ['great-rune', 'crucible', 'dioses-exteriores'],
    relatedTimelineEvents: ['rykard-blasphemy'],
    relatedEndings: ['fracture'],
  },

  'bloody-fingers': {
    summary:
      'Los Bloody Fingers son culto invasor al servicio de la Madre Informe a través de Mohg. Sus miembros invaden a otros Tarnished como cazadores rituales: cada víctima es ofrenda sangrienta para alimentar los proyectos cosmológicos de Mohgwyn. Varré es su reclutador público; los invasores anónimos son su mano operativa. Su sangre flameante es uno de los pocos instrumentos no-Orden capaces de quemar carne divina.',
    deepLore: [
      h(2, 'Origen: el contrato con la Madre Informe'),
      p(
        link('Mohg', 'character', 'mohg'),
        ', expulsado del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' por su naturaleza Omen, encontró nuevo dios externo en la ',
        link('Madre Informe', 'concept', 'formless-mother'),
        ': entidad cosmológica de la sangre, sin forma propia, hambrienta de ofrendas hemáticas. El contrato establecido fue claro: ',
        link('Mohg', 'character', 'mohg'),
        ' como vasija humana, sangre como combustible ritual, Mohgwyn como templo. La Madre Informe le concedió la sangre flameante — fuego que arde sin necesidad de combustible orgánico, capaz de consumir incluso a un dios. Los Bloody Fingers son los apóstoles humanos del culto.'
      ),
      h(2, 'Estructura: reclutadores e invasores'),
      p(
        link('Varré', 'character', 'varre'),
        ' es la cara amable del culto. Su función es reclutar ',
        link('Tarnished', 'concept', 'tarnished'),
        ' perdidos, ofrecerles audiencia con la Madre Informe (mediante el bautismo ensangrentado del Pure Bloody Finger ritual), y dirigirlos al palacio de ',
        link('Mohg', 'character', 'mohg'),
        '. Bajo él operan invasores anónimos: Bloody Fingers que cazan ',
        link('Tarnished', 'concept', 'tarnished'),
        ' a través de las Tierras Intermedias mediante la mecánica multiplayer del juego. Cada invasión exitosa es ofrenda. Cada ',
        link('Tarnished', 'concept', 'tarnished'),
        ' asesinado es alimento para la Madre Informe.'
      ),
      h(2, 'Sangre flameante como tecnología'),
      p(
        'La ',
        link('sangre flameante', 'concept', 'bloodflame'),
        ' no es metáfora — es magia ritual específica. ',
        link('Mohg', 'character', 'mohg'),
        ' la canaliza durante combate. Los Bloody Fingers iniciados pueden adquirir versiones diluidas. Sus armas características — Reduvia, Cinquedea, Bloody Helice — están imbuidas con el efecto. Es una de las pocas formas de fuego de las Tierras Intermedias que pueden quemar carne divina además de carne mortal. Combinada con la maldición del Lord of Blood, hace al cuerpo de ',
        link('Mohg', 'character', 'mohg'),
        ' literalmente intransferible al canon dorado.'
      ),
      h(2, 'Conflicto con otros cultos'),
      p(
        'Los Bloody Fingers son enemigos jurados de los ',
        link('Cazadores de Recusantes', 'concept', 'recusant-hunters'),
        ' (',
        link('Tarnished', 'concept', 'tarnished'),
        ' defensores anti-invasión). Compiten ideológicamente con los ',
        link('Pieles de Dios', 'faction', 'pieles-de-dios'),
        ': ambos cultos tienen tecnología deicida, pero la Madre Informe es divinidad operativa, mientras que los Pieles servían a la Reina ya derrotada. Los Bloody Fingers tienen patrón vivo; los Pieles tienen tradición sin liderazgo presente.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Los Bloody Fingers son la prueba de que la blasfemia organizada es posible y operativa. A diferencia del Volcano Manor (donde la entidad subyacente devoró a su propio vasallo), los Bloody Fingers tienen relación funcional con su deidad: la Madre Informe alimentada produce poder real para ',
        link('Mohg', 'character', 'mohg'),
        ', que produce reclutamiento real para Varré, que produce invasiones reales que producen ofrendas reales. El sistema funciona. Es el contraejemplo más fuerte del juego al monopolio cosmológico del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ': existe otra cosmología que da resultados.'
      ),
    ],
    confirmed: [
      [link('Mohg', 'character', 'mohg'), ' sirve a la Madre Informe como vasija humana'],
      'Varré es el reclutador público del culto',
      ['Los invasores Bloody Fingers cazan otros ', link('Tarnished', 'concept', 'tarnished'), ' como ofrendas'],
      ['La sangre flameante de ', link('Mohg', 'character', 'mohg'), ' es magia ritual específica capaz de quemar lo divino'],
      'Mohgwyn es su templo central',
    ],
    inferred: [
      'El reclutamiento incluye un bautismo ritual de sangre antes de ser efectivo',
      ['Cada ', link('Tarnished', 'concept', 'tarnished'), ' asesinado fortalece directamente a la Madre Informe'],
      ['El sistema produce poder operativo real para ', link('Mohg', 'character', 'mohg'), ', no solo metáfora teológica'],
      ['Los Bloody Fingers compiten con otros cultos deicidas como los ', link('Pieles de Dios', 'faction', 'pieles-de-dios')],
    ],
    theories: [
      ['La Madre Informe es hermana cosmológica de la ', link('Voluntad Mayor', 'concept', 'voluntad-mayor'), ' o derivación de un mismo dios externo más antiguo'],
      [link('Mohg', 'character', 'mohg'), ' planeaba usar a ', link('Miquella', 'character', 'miquella'), ' como vasija superior una vez la Madre Informe consumiera suficiente sangre'],
      ['Algunos Bloody Fingers desertaron al ver el destino de ', link('Mohg', 'character', 'mohg'), ' al final de la quest de Varré'],
      ['La sangre flameante puede destilarse de cuerpos no-', link('Mohg', 'character', 'mohg'), ' con técnica suficiente'],
    ],
    ambiguous: [
      'Identidad exacta y origen de la Madre Informe',
      'Cuántos Bloody Fingers operan actualmente en las Tierras Intermedias',
      ['Si ', link('Mohg', 'character', 'mohg'), ' conocía el plan completo de la Madre Informe o solo lo seguía'],
      'Si Varré creía genuinamente o operaba como manipulador autónomo',
    ],
    relatedCharacters: ['mohg', 'varre', 'miquella'],
    relatedFactions: ['pieles-de-dios'],
    relatedRegions: ['mohgwyn'],
    relatedConcepts: ['formless-mother', 'bloodflame', 'dioses-exteriores'],
    relatedTimelineEvents: ['mohg-toma-miquella'],
  },

  'those-who-live-in-death': {
    summary:
      'Aquellos que Viven en la Muerte son seres con cuerpos animados por la Deathroot pero vacíos de alma. No pueden morir verdaderamente porque la Muerte Predestinada está sellada en Maliketh. La forma original es Godwyn — el alma asesinada cuyo cuerpo sigue extendiéndose como raíz corrupta. Sus formas derivadas son miles de cadáveres animados dispersos por las Tierras Intermedias. Cada uno es la herida cosmológica de Godwyn replicándose.',
    deepLore: [
      h(2, 'Origen: la herida de Godwyn'),
      p(
        'La condición ontológica de "vivir en la muerte" no existía antes de la ',
        link('Noche de los Cuchillos Negros', 'timeline', 'ranni-noche-cuchillos'),
        '. Los ',
        link('Cuchillos Negros', 'faction', 'cuchillos-negros'),
        ' apuñalaron el alma de ',
        link('Godwyn', 'character', 'godwyn'),
        ' con dagas forjadas con un fragmento de la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        '. Su alma murió; su cuerpo no pudo morir porque la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ' estaba sellada en ',
        link('Maliketh', 'character', 'maliketh'),
        '. El resultado fue una forma nueva de existencia: cuerpo sin alma que sigue funcionando, creciendo, replicándose. ',
        link('Godwyn', 'character', 'godwyn'),
        ' se convirtió en el ',
        em('Príncipe de la Muerte'),
        ' — no muerto, no vivo, expandiéndose como raíz corrupta bajo el ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        '.'
      ),
      h(2, 'Mecánica del contagio'),
      p(
        'Las raíces de ',
        link('Godwyn', 'character', 'godwyn'),
        ' — ',
        link('Deathroot', 'concept', 'deathroot'),
        ' — se extienden bajo el ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' y emergen en distintas regiones. Cada brote de Deathroot que toca un cadáver lo reactiva como ser que vive en la muerte. Los cadáveres reanimados son cuerpos puramente materiales — sin conciencia plena, sin descanso, sin memoria. Operan en bucle. Algunos conservan rasgos físicos del individuo original; otros han mutado en formas que ya no se reconocen humanas.'
      ),
      h(2, 'Categorías y manifestaciones'),
      p(
        'Existen múltiples manifestaciones: los Skeletons que se reactivan repetidamente en ',
        link('Caelid', 'region', 'caelid'),
        ' y Liurnia (no descansan hasta que su columna vertebral es destruida), los Revenants en catacumbas, los Ghostflame Spirits en Catacombs of the Mountain, los Death Birds que se alimentan de Deathroot. Cada categoría representa una etapa distinta de la corrupción. Los más cercanos a ',
        link('Godwyn', 'character', 'godwyn'),
        ' — los habitantes de ',
        link('Deeproot Depths', 'region', 'deeproot-depths'),
        ' — son los más extraños: caballeros dorados originalmente leales al príncipe, ahora sirven a su forma corrompida sin saber por qué.'
      ),
      h(2, 'Los dos cierres rituales'),
      p(
        'Dos NPCs proponen respuestas opuestas al mismo problema. ',
        link('Fia', 'character', 'fia'),
        ', Doncella de Muerte, busca darles muerte verdadera mediante la ',
        link('Era del Crepúsculo', 'ending', 'duskborn'),
        ': restaurar la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ' al ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        ', permitir que Aquellos que Viven en la Muerte mueran piadosamente, integrar la Muerte como parte legítima del orden cosmológico. ',
        link('D', 'character', 'd'),
        ', Cazador de Aquellos que Viven en la Muerte, busca exterminarlos como blasfemia: cada uno es ofensa al ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ', debe ser erradicado individualmente. Las dos posturas son políticamente opuestas pero comparten diagnóstico: la situación actual es insostenible.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Aquellos que Viven en la Muerte son la consecuencia ontológica directa de la decisión fundacional de ',
        link('Marika', 'character', 'marika'),
        ' de sellar la Muerte. Su existencia prueba que el sello no eliminó la muerte — solo la deformó. La ',
        link('Era del Crepúsculo', 'ending', 'duskborn'),
        ' argumenta que la solución es restaurar la Muerte; los exterminadores como D argumentan que la solución es purgar la corrupción. El juego nunca decide: cada postura tiene mérito. Lo único cierto es que la herida sigue abierta.'
      ),
    ],
    confirmed: [
      'Aquellos que Viven en la Muerte tienen cuerpos sin almas activos por Deathroot',
      [link('Godwyn', 'character', 'godwyn'), ' es la forma original tras la Noche de los ', link('Cuchillos Negros', 'faction', 'cuchillos-negros')],
      ['Las raíces de Deathroot se extienden bajo el ', link('Árbol Áureo', 'concept', 'erdtree'), ' desde Deeproot Depths'],
      ['Los cadáveres reanimados no pueden morir verdaderamente por el sello de ', link('Maliketh', 'character', 'maliketh')],
      'Fia busca su cierre ritual; D busca exterminarlos como blasfemia',
    ],
    inferred: [
      ['La condición no existía antes de la Noche de los ', link('Cuchillos Negros', 'faction', 'cuchillos-negros')],
      'Cada brote de Deathroot reactiva cadáveres locales',
      'La corrupción avanza progresivamente y produce mutaciones',
      ['El ', link('Orden Dorado', 'faction', 'orden-dorado'), ' oficial los considera blasfemia pero no puede exterminarlos completamente'],
    ],
    theories: [
      ['Si ', link('Godwyn', 'character', 'godwyn'), ' fuera completamente destruido, todos los Aquellos que Viven en la Muerte cesarían simultáneamente'],
      'Algunos conservan fragmentos de consciencia del individuo original',
      'La Deathroot tiene voluntad propia y selecciona huéspedes',
      ['Fortissax intentando proteger a ', link('Godwyn', 'character', 'godwyn'), ' aceleró parcialmente la corrupción'],
    ],
    ambiguous: [
      ['Si ', link('Godwyn', 'character', 'godwyn'), ' conserva alguna forma de consciencia bajo Deeproot Depths'],
      'Cuántos Aquellos que Viven en la Muerte hay actualmente en las Tierras Intermedias',
      'Si la condición es reversible bajo cosmología distinta',
      'Si los Skeletons que se reactivan son la misma categoría o una distinta',
    ],
    relatedCharacters: ['godwyn', 'fia', 'd', 'rogier', 'maliketh', 'fortissax'],
    relatedFactions: ['cuchillos-negros'],
    relatedRegions: ['deeproot-depths', 'leyndell'],
    relatedConcepts: ['destined-death', 'rune-of-death', 'deathroot'],
    relatedTimelineEvents: ['ranni-noche-cuchillos', 'godwyn-corruption-spread'],
    relatedEndings: ['duskborn'],
  },

  deathbirds: {
    summary:
      'Los Deathbirds son aves carroñeras gigantes anteriores al Orden Dorado que se alimentan exclusivamente de la Deathroot. Su existencia documenta un ecosistema cosmológico que se adaptó a la herida de Godwyn como nueva fuente alimentaria. Operan como guardianes territoriales nocturnos en zonas funerarias de las Tierras Intermedias.',
    deepLore: [
      h(2, 'Origen ecológico'),
      p(
        'Los Deathbirds son aves carroñeras de tamaño gigante, anteriores al ',
        link('Orden Dorado', 'concept', 'golden-order'),
        '. Originalmente se alimentaban de cadáveres dispersos por las Tierras Intermedias antiguo. Tras la ',
        link('Noche de los Cuchillos Negros', 'timeline', 'ranni-noche-cuchillos'),
        ' y la aparición de la ',
        link('Deathroot', 'concept', 'deathroot'),
        ' como nueva sustancia cosmológica, evolucionaron — o se adaptaron — para alimentarse exclusivamente de ella. Cada ave es marcador territorial de un brote de Deathroot activo.'
      ),
      h(2, 'Comportamiento'),
      p(
        'Operan principalmente de noche. Sus territorios son zonas funerarias y catacumbas dispersas (Tibia Mariner regions, ',
        link('Limgrave', 'region', 'limgrave'),
        ' nocturno, ',
        link('Caelid', 'region', 'caelid'),
        ' nocturno). Cuando el ',
        link('Tarnished', 'concept', 'tarnished'),
        ' se aproxima a un brote de Deathroot custodiado, el Deathbird emerge como guardián. Su flama negra característica es derivada de la ',
        link('Llama Negra', 'concept', 'black-flame'),
        ' ancestral — no idéntica, pero relacionada filogenéticamente con la tecnología deicida de los ',
        link('Pieles de Dios', 'faction', 'pieles-de-dios'),
        '.'
      ),
      h(2, 'Conexión con la Llama Negra'),
      p(
        'La filogenia exacta entre Deathbirds y ',
        link('Llama Negra', 'concept', 'black-flame'),
        ' no se enuncia explícitamente, pero el patrón es claro: ambos manejan fuego oscuro asociado a la Muerte, ambos preceden al ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ', ambos fueron tolerados o ignorados durante el régimen. Una hipótesis comunitaria sostiene que los Deathbirds eran parte del séquito ritual de la ',
        link('Reina del Ojo Velado', 'character', 'gloam-eyed-queen'),
        ' antes de su caída — sus aves rituales de cierre ceremonial. La hipótesis no se afirma directamente pero es consistente con la cosmología disponible.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Los Deathbirds son la evidencia ecológica de que la Muerte sigue siendo procesada cosmológicamente pese al sello de ',
        link('Marika', 'character', 'marika'),
        '. Donde hay sello, hay grieta; donde hay grieta, hay brote; donde hay brote, hay carroñero. El sistema completo opera fuera de la doctrina del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' pero dentro del cosmos efectivo. Cada Deathbird es prueba de que la Muerte no fue eliminada — solo redirigida hacia formas no canónicas de procesamiento.'
      ),
    ],
    confirmed: [
      ['Los Deathbirds son aves carroñeras gigantes anteriores al ', link('Orden Dorado', 'concept', 'golden-order')],
      'Se alimentan exclusivamente de Deathroot',
      'Operan principalmente de noche en zonas funerarias',
      'Manejan flama negra derivada de la tradición deicida pre-Orden',
    ],
    inferred: [
      'Originalmente carroñeros de cadáveres ordinarios; se adaptaron post-Noche',
      'Cada ave marca territorialmente un brote activo de Deathroot',
      ['Su flama negra es filogenéticamente relacionada con la ', link('Llama Negra', 'concept', 'black-flame'), ' de los ', link('Pieles de Dios', 'faction', 'pieles-de-dios')],
      'El régimen dorado los toleró como mal menor en el ecosistema marginal',
    ],
    theories: [
      ['Fueron parte del séquito ritual de la ', link('Reina del Ojo Velado', 'character', 'gloam-eyed-queen')],
      'Su consciencia es más alta de lo que aparentan — coordinan territorialmente',
      'Si la Reina retornara, los Deathbirds podrían unirse a ella inmediatamente',
      'Cada Deathbird recuerda fragmentariamente eras pre-Orden',
    ],
    ambiguous: [
      'Cuántos Deathbirds existen actualmente',
      'Si pueden reproducirse o son los individuos originales',
      'Si su flama es genética o ritual',
      ['Su relación funcional con los ', link('Pieles de Dios', 'faction', 'pieles-de-dios'), ' actuales'],
    ],
    relatedFactions: ['pieles-de-dios', 'those-who-live-in-death'],
    relatedConcepts: ['deathroot', 'destined-death', 'black-flame'],
    relatedRegions: ['limgrave', 'caelid', 'leyndell'],
    relatedTimelineEvents: ['ranni-noche-cuchillos'],
  },

  'kindred-of-rot': {
    summary:
      'Las Kindred of Rot son las hijas escarlatas de Malenia: criaturas-mosca-podredumbre nacidas de la Floración de Aeonia. Existen como enjambre vinculado emocionalmente a su Empyrean-madre. Aspiran a la fusión total con sus iguales — la podredumbre como forma de comunión. Millicent es la única que desarrolló identidad humana plena; las demás son enjambre.',
    deepLore: [
      h(2, 'Origen: la Floración de Aeonia'),
      p(
        'Cuando ',
        link('Malenia', 'character', 'malenia'),
        ' floreció parcialmente durante la Batalla de Aeonia contra ',
        link('Radahn', 'character', 'radahn'),
        ' en ',
        link('Caelid', 'region', 'caelid'),
        ', sus brotes escarlatas se dispersaron como semillas. La mayoría se convirtió en criaturas-mosca-podredumbre que vagan por los pantanos podridos. Algunas adoptaron formas más complejas: Aeonia Mariposas, brotes humanoides incompletos, criaturas-flor que se posan en cadáveres. Cada una es hija ontológica de ',
        link('Malenia', 'character', 'malenia'),
        '.'
      ),
      h(2, 'Vínculo emocional con la Empyrean'),
      p(
        'Las Kindred of Rot conservan vínculo emocional con ',
        link('Malenia', 'character', 'malenia'),
        '. Sus reacciones afectivas son rastreables: cuando ella sufre, ellas se agitan; cuando ella combate, se concentran. La Floración no fue solo dispersión biológica — fue extensión emocional. Cada criatura es fragmento de la psique de ',
        link('Malenia', 'character', 'malenia'),
        ' operando autónomamente. La relación es inversa también: ',
        link('Malenia', 'character', 'malenia'),
        ' siente vagamente lo que sus hijas sienten, lo que probablemente la mantiene en estado de sufrimiento difuso constante.'
      ),
      h(2, 'Aspiración a la fusión'),
      p(
        'La doctrina interna del enjambre — inferida de su comportamiento, no afirmada explícitamente — es la fusión total. Las criaturas se concentran, se mezclan, intentan reunirse en una sola entidad mayor. La podredumbre es vehículo de comunión: cuanto más infectado un cuerpo, más fácilmente se funde con otros infectados. El proyecto del enjambre completo sería reconstituirse en una entidad unificada. Esa fusión nunca culmina porque siempre falta un elemento: ',
        link('Malenia', 'character', 'malenia'),
        ' misma plenamente florecida.'
      ),
      h(2, 'Millicent: la excepción humana'),
      p(
        link('Millicent', 'character', 'millicent'),
        ' es la única Kindred que desarrolló identidad humana plena. Su origen exacto es ambiguo: brotó de ',
        link('Malenia', 'character', 'malenia'),
        ' tras Aeonia, pero adoptó forma humana joven con conciencia, memoria, voluntad propia. ',
        link('Gowry', 'character', 'gowry'),
        ' la cuida y la usa como instrumento de su propio plan. La quest de ',
        link('Millicent', 'character', 'millicent'),
        ' es lucha por mantener identidad propia frente a la presión cosmológica de regresar al enjambre. Su decisión final — combatir a sus propias hermanas — es uno de los actos de voluntad más puros del juego.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Las Kindred of Rot son la prueba de que la podredumbre no es solo enfermedad — es proyecto cosmológico. Cada criatura es ',
        link('Malenia', 'character', 'malenia'),
        ' distribuida. Cada infectado por ',
        link('podredumbre escarlata', 'concept', 'scarlet-rot'),
        ' en las Tierras Intermedias está parcialmente conectado a este enjambre. Si ',
        link('Malenia', 'character', 'malenia'),
        ' floreciera plenamente, todas las Kindred convergerían en una sola entidad y la podredumbre se convertiría en la cosmología dominante. Que el enjambre exista en estado fragmentado es prueba de que ',
        link('Malenia', 'character', 'malenia'),
        ' se ha contenido — el cosmos depende, irónicamente, de que ella siga sufriendo en silencio.'
      ),
    ],
    confirmed: [
      ['Las Kindred of Rot nacieron de la Floración parcial de ', link('Malenia', 'character', 'malenia'), ' en Aeonia'],
      ['Existen como enjambre disperso por los pantanos de ', link('Caelid', 'region', 'caelid')],
      ['Mantienen vínculo emocional con ', link('Malenia', 'character', 'malenia')],
      [link('Millicent', 'character', 'millicent'), ' es la única que desarrolló identidad humana plena'],
      [link('Gowry', 'character', 'gowry'), ' la cuida y la usa para sus propios fines'],
    ],
    inferred: [
      'La aspiración a fusión total es proyecto cosmológico, no solo comportamiento biológico',
      ['Cuando ', link('Malenia', 'character', 'malenia'), ' sufre, el enjambre se agita'],
      ['Si ', link('Malenia', 'character', 'malenia'), ' floreciera plenamente, las Kindred convergerían en entidad unificada'],
      ['La ', link('podredumbre escarlata', 'concept', 'scarlet-rot'), ' en otras regiones está parcialmente conectada al enjambre'],
    ],
    theories: [
      [link('Gowry', 'character', 'gowry'), ' pretende usar a ', link('Millicent', 'character', 'millicent'), ' para reunir a todas las Kindred bajo su control'],
      ['Algunas Kindred conservan fragmentos de la consciencia original de ', link('Malenia', 'character', 'malenia')],
      ['La Floración fue parcial intencionalmente — ', link('Malenia', 'character', 'malenia'), ' eligió no florecer completamente'],
      'El enjambre podría adquirir consciencia colectiva si alcanza masa crítica',
    ],
    ambiguous: [
      'Cuántas Kindred of Rot existen actualmente',
      ['Si todas son hijas de ', link('Malenia', 'character', 'malenia'), ' o algunas son contagio derivado'],
      ['Si ', link('Millicent', 'character', 'millicent'), ' fue brote especial o accidente cósmico'],
      'Si pueden coordinar entre sí o solo reaccionar emocionalmente',
    ],
    relatedCharacters: ['malenia', 'millicent', 'gowry'],
    relatedFactions: ['cleanrot-knights'],
    relatedRegions: ['caelid', 'lake-of-rot', 'aeonia'],
    relatedConcepts: ['scarlet-rot'],
    relatedTimelineEvents: ['aeonia-bloom'],
  },

  perfumers: {
    summary:
      'Los Perfumers son orden de alquimistas-sacerdotisas asociadas al Orden Dorado, especialistas en aceites destilados para fines simultáneamente rituales, médicos y bélicos. Su disciplina combina sacralidad litúrgica con utilidad militar — cada perfume es ofrenda al Árbol Áureo y arma alquímica al mismo tiempo. Marginalizadas tras el florecimiento del clero estricto del régimen, hoy operan como casta menor con conocimiento técnico no replicable por otras tradiciones.',
    deepLore: [
      h(2, 'Origen y disciplina'),
      p(
        'Los Perfumers — casi todas mujeres, casta exclusivamente femenina por tradición — fueron orden alquímica especializada en destilación ritual. Su corpus técnico incluye aceites de fuego ácido, vapor venenoso, curación purificante, niebla embalsamadora, y fragancias rituales asociadas al ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        '. Su disciplina cruza categorías: cada perfume es simultáneamente ofrenda litúrgica, instrumento médico, y arma de combate. La ambivalencia es estructural — el régimen del ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' nunca permite que el arte sagrado deje de servir también como arma.'
      ),
      h(2, 'Marginalización institucional'),
      p(
        'Cuando el clero estricto del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' consolidó autoridad doctrinal, las Perfumers fueron progresivamente marginalizadas. Su mezcla de funciones rituales y bélicas era incómoda para teólogos que preferían separación clara entre sacramento y guerra. Sus comunidades fueron reducidas a aldeas dispersas (Perfumer Ruins en Altus). Sus textos fueron desclasificados a uso doméstico. Pero el conocimiento técnico permaneció intacto: nadie más en las Tierras Intermedias pueden destilar aceites con su precisión alquímica.'
      ),
      h(2, 'Aplicaciones militares actuales'),
      p(
        'Hoy las Perfumers operan en pequeños grupos como mercenarias de elite, ofreciendo servicios alquímicos a aristocracias regionales y a ejércitos del régimen residual. Algunas se sumaron al Volcano Manor; otras siguen leales al régimen oficial; otras operan autónomas. Sus venenos y curaciones son particularmente cotizados durante la guerra de fragmentos post-fractura. El ',
        link('Tarnished', 'concept', 'tarnished'),
        ' encuentra a varias en bucles defensivos en regiones marginales.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Las Perfumers son el monumento del juego al saber técnico que sobrevive a la institución que lo nutría. Cuando el régimen las marginalizó, no las exterminó — porque el conocimiento técnico era irreemplazable. La consecuencia: opera ',
        em('fuera'),
        ' de la jerarquía oficial pero ',
        em('dentro'),
        ' de las redes de poder reales. Cada Perfumer es ejemplo de cómo las castas marginalizadas adquieren autonomía paradójica: pierden status doctrinal pero ganan independencia operativa.'
      ),
    ],
    confirmed: [
      ['Los Perfumers son orden alquímica asociada históricamente al ', link('Orden Dorado', 'concept', 'golden-order')],
      'Casta tradicionalmente femenina',
      'Destilan aceites para fines rituales, médicos y bélicos simultáneamente',
      'Fueron marginalizados por el clero estricto sin ser exterminados',
      'Operan hoy como mercenarias de elite con conocimiento técnico irreemplazable',
    ],
    inferred: [
      'Su disciplina cruza la separación canónica entre sacramento y guerra',
      'El régimen las toleró por dependencia técnica pese a marginalizarlas doctrinalmente',
      'Algunas se sumaron al Volcano Manor o a otras facciones blasfemas',
      'Sus textos circulan en versiones desclasificadas pero su conocimiento profundo es exclusivo de la casta',
    ],
    theories: [
      ['Su origen pre-Orden está vinculado a tradiciones del ', link('Crisol', 'concept', 'crucible'), ' o de los ', link('Hombres-Bestia', 'faction', 'hombres-bestia'), ' rituales'],
      ['Conservan secretos cosmológicos sobre el ', link('Árbol Áureo', 'concept', 'erdtree'), ' que ningún clérigo posee'],
      ['Algunas Perfumers operan secretamente para ', link('Ranni', 'character', 'ranni'), ' en proyectos de magia mestiza'],
      'Si el régimen oficial colapsara, podrían reorganizarse como autoridad alquímica autónoma',
    ],
    ambiguous: [
      'Cuándo exactamente fueron marginalizadas',
      'Si la transmisión es matrilineal estricta o admite excepciones rituales',
      'Cuántas Perfumers operan actualmente en cada región',
      'Si pueden coordinar entre células o operan totalmente independientes',
    ],
    relatedCharacters: ['marika'],
    relatedFactions: ['orden-dorado', 'volcano-manor'],
    relatedRegions: ['altus-plateau', 'leyndell'],
    relatedConcepts: ['erdtree', 'crucible'],
  },

  'raya-lucaria': {
    summary:
      'Raya Lucaria es la Academia de magia más prestigiosa de las Tierras Intermedias, fundada en Liurnia bajo Rennala como Gran Maestra. Su corpus se especializa en magia estelar, gravitacional y de cristales primordiales. Tras el matrimonio Radagon-Rennala fue oficialmente integrada al Orden Dorado, pero conserva tradiciones pre-Orden que el régimen tolera con reservas. La excomunión de Sellen documentó dónde están los límites institucionales de su libertad académica.',
    deepLore: [
      h(2, 'Fundación y filosofía'),
      p(
        'Raya Lucaria fue fundada como institución académica autónoma de la magia. Su corpus se construyó sobre tres tradiciones: magia estelar (estudio de los astros y su influencia cósmica), ',
        link('magia gravitacional', 'concept', 'gravity-magic'),
        ' (manipulación de masa y peso, derivada de meteoros caídos), y magia de cristal primordial (cristalografía cosmológica). La Academia tiene jerarquía interna: Gran Maestre, Profesores, Estudiantes graduados, Estudiantes en formación. Su biblioteca contiene textos pre-Orden que el régimen oficial nunca catalogó.'
      ),
      h(2, 'Rennala y la matriarcado lunar'),
      p(
        link('Rennala', 'character', 'rennala'),
        ' fue Gran Maestra en una época de florecimiento. Su especialidad era la magia de la ',
        link('Luna Llena', 'concept', 'full-moon'),
        '. Su matrimonio con ',
        link('Radagon', 'character', 'radagon'),
        ' fue tratado político tras la guerra entre Liurnia y Leyndell — la integración de la Academia al ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' fue dote ritual. Tres hijos nacieron del matrimonio: ',
        link('Radahn', 'character', 'radahn'),
        ' (general), ',
        link('Rykard', 'character', 'rykard'),
        ' (lord blasfemo), ',
        link('Ranni', 'character', 'ranni'),
        ' (rebelde cosmológica). Cuando ',
        link('Radagon', 'character', 'radagon'),
        ' abandonó a ',
        link('Rennala', 'character', 'rennala'),
        ' para regresar al lado de ',
        link('Marika', 'character', 'marika'),
        ', ',
        link('Rennala', 'character', 'rennala'),
        ' perdió la razón. La Academia se replegó. El Huevo Ambarino la contiene desde entonces como Gran Maestra catatónica.'
      ),
      h(2, 'Estudiantes paradigmáticos'),
      p(
        link('Sellen', 'character', 'sellen'),
        ' fue la estudiante más prometedora de la era post-',
        link('Rennala', 'character', 'rennala'),
        '. Descubrió textos prohibidos sobre magia primordial — específicamente el corpus de ',
        link('Lusat', 'character', 'lusat'),
        ' y ',
        link('Azur', 'character', 'azur'),
        ', dos hechiceros legendarios cuya magia excedía los límites institucionales. La Academia la excomulgó. Otros casos paradigmáticos incluyen a ',
        link('Thops', 'character', 'thops'),
        ' (excomulgado por pobreza, no por desviación), y a ',
        link('Ranni', 'character', 'ranni'),
        ' misma que aprendió magia avanzada en el seno de la institución antes de operar contra ella.'
      ),
      h(2, 'Política institucional post-fractura'),
      p(
        'Tras el quiebre de ',
        link('Rennala', 'character', 'rennala'),
        ' y la ',
        link('fractura', 'timeline', 'la-fractura'),
        ' del ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        ', la Academia entró en crisis. Sus profesores se dispersaron o se atrincheraron. ',
        link('Carian', 'faction', 'caria'),
        ' Sword Masters defienden algunas zonas. La biblioteca permanece intacta pero parcialmente inaccesible. Cuando el ',
        link('Tarnished', 'concept', 'tarnished'),
        ' llega, la Academia opera como ruina funcional: aún hay clases, aún hay rituales, aún hay disciplina interna — pero ningún proyecto coherente. La excomunión de Sellen ya no se ejecutaría hoy con la misma autoridad porque no hay autoridad ejecutiva clara.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Raya Lucaria es el monumento del juego a las instituciones del saber bajo regímenes cosmológicos. La Academia parecía neutral — solo magia, solo conocimiento — pero estaba estructuralmente ligada al ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' mediante el matrimonio dinástico. Cuando ese matrimonio falló, la Academia falló. La excomunión de Sellen muestra que incluso las instituciones más laicas sancionan el conocimiento que amenaza al régimen anfitrión. La libertad académica es siempre condicional al pacto político subyacente.'
      ),
    ],
    confirmed: [
      'Raya Lucaria es la academia de magia más prestigiosa de las Tierras Intermedias',
      [link('Rennala', 'character', 'rennala'), ' fue Gran Maestra antes de ser abandonada por ', link('Radagon', 'character', 'radagon')],
      ['El ', link('matrimonio Radagon-Rennala', 'timeline', 'radagon-rennala-marriage'), ' integró oficialmente la Academia al ', link('Orden Dorado', 'concept', 'golden-order')],
      'Sellen fue excomulgada por estudiar magia primordial prohibida',
      [link('Lusat', 'character', 'lusat'), ' y ', link('Azur', 'character', 'azur'), ' son hechiceros legendarios cuya magia excedía los límites institucionales'],
    ],
    inferred: [
      'La biblioteca contiene textos pre-Orden que el régimen oficial nunca catalogó',
      'La integración al Orden fue tratado político tras la guerra Liurnia-Leyndell',
      ['Tras el quiebre de ', link('Rennala', 'character', 'rennala'), ' la Academia carece de autoridad ejecutiva clara'],
      'Los Carian Sword Masters operan parcialmente como brazo armado restante',
    ],
    theories: [
      ['La Academia conoce secretos sobre los ', link('Nox', 'faction', 'nox'), ' que el régimen dorado nunca extrajo'],
      'Si Sellen reformara la institución, podría reactivar magia primordial a gran escala',
      [link('Lusat', 'character', 'lusat'), ' y ', link('Azur', 'character', 'azur'), ' siguen vivos en estados liminales (cristalizados, atemporales)'],
      [link('Marika', 'character', 'marika'), ' tolera a la Academia porque ', link('Radagon', 'character', 'radagon'), ' retiene afecto residual hacia ', link('Rennala', 'character', 'rennala')],
    ],
    ambiguous: [
      'Cuántos profesores activos quedan en la Academia',
      ['Si ', link('Rennala', 'character', 'rennala'), ' podría recuperar capacidad funcional bajo cosmología distinta'],
      'Si la magia primordial puede practicarse fuera de la institución',
      'Cuándo exactamente cesaron las admisiones de nuevos estudiantes',
    ],
    relatedCharacters: ['rennala', 'radagon', 'sellen', 'ranni', 'thops', 'lusat', 'azur'],
    relatedFactions: ['caria', 'orden-dorado'],
    relatedRegions: ['liurnia', 'raya-lucaria'],
    relatedConcepts: ['dark-moon', 'great-rune'],
    relatedTimelineEvents: ['radagon-rennala-marriage', 'rennala-quiebre', 'sellen-excommunion'],
  },

  caria: {
    summary:
      'La Casa Real Caria es dinastía mestiza fundada por la unión Radagon-Rennala. Madre de Ranni, Radahn y Rykard. Heredera de la tradición lunar pre-Orden de Liurnia. Su legado es la magia de la Luna Oscura, el conflicto identitario causado por el abandono de Radagon, y la rebelión cosmológica de Ranni que culmina en la Era de las Estrellas — el contraproyecto cosmológico más viable contra el Orden Dorado.',
    deepLore: [
      h(2, 'Origen: el tratado'),
      p(
        'Caria nació de un acto de paz forzada. Tras la guerra de invasión que ',
        link('Radagon', 'character', 'radagon'),
        ' lideró por orden del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' contra Liurnia, la reina liurnia ',
        link('Rennala', 'character', 'rennala'),
        ' propuso matrimonio como condición de paz. ',
        link('Radagon', 'character', 'radagon'),
        ' aceptó y se convirtió en consorte real. La unión fue inicialmente próspera: tres hijos, magia compartida, integración entre el régimen invasor y el reino conquistado. Pero cada hijo nació con tensión cosmológica acumulada: linaje mestizo, sangre dorada combinada con sangre lunar, identidades partidas desde el principio.'
      ),
      h(2, 'Tradición lunar'),
      p(
        'Caria conserva la tradición de la ',
        link('Luna Oscura', 'concept', 'dark-moon'),
        ' — magia anterior al ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ', vinculada al ciclo lunar y a las estrellas. La Espada de la ',
        link('Luna Oscura', 'concept', 'dark-moon'),
        ' es heredera directa de Renalla. Los Carian Sword Masters mezclan espadas largas con magia estelar. Esta tradición opera en paralelo a la magia estelar de Raya Lucaria pero precede a la institución académica: Caria es la fuente mística, Raya Lucaria es la institución que la formalizó posteriormente.'
      ),
      h(2, 'Los tres hijos: tres direcciones de fractura'),
      p(
        link('Ranni', 'character', 'ranni'),
        ' es la respuesta intelectual: rechaza el destino impuesto, transfiere su alma a una muñeca para escapar a la elección ',
        link('Empyrean', 'concept', 'empyrean'),
        ', conspira con los ',
        link('Cuchillos Negros', 'faction', 'cuchillos-negros'),
        ', ejecuta el plan de eras que culmina en la ',
        link('Era de las Estrellas', 'concept', 'age-of-stars'),
        '. ',
        link('Radahn', 'character', 'radahn'),
        ' es la respuesta marcial: lealtad obstinada al régimen pese a su origen mestizo, general supremo, demidiós ejemplar — hasta que la Podredumbre lo reduce a animal. ',
        link('Rykard', 'character', 'rykard'),
        ' es la respuesta blasfema: rechaza el régimen, pacta con la entidad serpentina pre-Orden, busca inmortalidad cosmológica fuera del canon dorado. Tres hijos, tres respuestas opuestas al mismo trauma.'
      ),
      h(2, 'El abandono y la regencia rota'),
      p(
        link('Radagon', 'character', 'radagon'),
        ' abandonó a ',
        link('Rennala', 'character', 'rennala'),
        ' — y a sus tres hijos — cuando ',
        link('Marika', 'character', 'marika'),
        ' lo llamó de regreso a Leyndell. La revelación cosmológica de que ',
        link('Radagon', 'character', 'radagon'),
        ' ',
        em('es'),
        ' ',
        link('Marika', 'character', 'marika'),
        ' significa que el abandono fue acto de la propia diosa: ',
        link('Marika', 'character', 'marika'),
        ' llamó a su otra mitad de regreso, dejando a Caria con tres hijos huérfanos. ',
        link('Rennala', 'character', 'rennala'),
        ' enloqueció. La regencia se fragmentó. ',
        link('Iji', 'character', 'iji'),
        ' (gigante reformado) y ',
        link('Seluvis', 'character', 'seluvis'),
        ' (mago manipulador) operan como tutores de ',
        link('Ranni', 'character', 'ranni'),
        ' adulta. La familia ha producido los conspiradores más sofisticados de las Tierras Intermedias precisamente porque su trauma fundacional fue cosmológico, no privado.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La Casa Caria es el monumento del juego a cómo el linaje mestizo produce inestabilidad estructural. Cada uno de los tres hijos heredó porciones distintas del trauma: rebelión cosmológica, lealtad obstinada, blasfemia activa. Ninguno de los tres pudo simplemente ',
        em('continuar'),
        ' como demidiós dorado normal. Su existencia plantea la pregunta más fina del juego sobre identidad: ¿se hereda el conflicto entre cosmologías como sangre, o se construye como respuesta? Caria responde que ambas cosas son la misma — y que su producto es el plan más radical de rebelión documentado en las Tierras Intermedias.'
      ),
    ],
    confirmed: [
      ['Caria es dinastía mestiza fundada por unión ', link('Radagon', 'character', 'radagon'), '-', link('Rennala', 'character', 'rennala')],
      ['Sus tres hijos son ', link('Ranni', 'character', 'ranni'), ', ', link('Radahn', 'character', 'radahn'), ' y ', link('Rykard', 'character', 'rykard')],
      'Conserva tradición lunar pre-Orden anterior a Raya Lucaria',
      [link('Radagon', 'character', 'radagon'), ' abandonó a ', link('Rennala', 'character', 'rennala'), ' para regresar al lado de ', link('Marika', 'character', 'marika')],
      ['Iji y ', link('Seluvis', 'character', 'seluvis'), ' son tutores de ', link('Ranni', 'character', 'ranni'), ' en su rebelión cosmológica'],
    ],
    inferred: [
      ['La unión fue paz forzada tras invasión de ', link('Radagon', 'character', 'radagon'), ' contra Liurnia'],
      'Cada hijo encarna respuesta opuesta al mismo trauma fundacional',
      ['El abandono fue acto cosmológico (', link('Marika', 'character', 'marika'), ' llamó a ', link('Radagon', 'character', 'radagon'), ' de regreso)'],
      'La tradición lunar es fuente mística que Raya Lucaria formalizó posteriormente',
    ],
    theories: [
      ['La Casa Caria conserva conocimiento sobre los ', link('Nox', 'faction', 'nox'), ' que ningún otro regimen tiene'],
      [link('Rennala', 'character', 'rennala'), ' podría recuperarse bajo cosmología post-Orden'],
      ['El linaje Caria contiene sangre ', link('Empyrean', 'concept', 'empyrean'), ' adicional no documentada'],
      ['Existieron generaciones Caria pre-', link('Rennala', 'character', 'rennala'), ' que el régimen ocultó'],
    ],
    ambiguous: [
      'Cuántas generaciones lleva la Casa Caria operando en Liurnia',
      'Si los Carian Sword Masters siguen leales a la dinastía o operan autónomamente',
      ['Si Iji conoció a ', link('Marika', 'character', 'marika'), ' en su forma original'],
      ['Si ', link('Seluvis', 'character', 'seluvis'), ' trabaja para ', link('Ranni', 'character', 'ranni'), ' o para sus propios fines paralelos'],
    ],
    relatedCharacters: ['rennala', 'radagon', 'ranni', 'radahn', 'rykard', 'iji', 'seluvis', 'blaidd'],
    relatedFactions: ['raya-lucaria', 'orden-dorado'],
    relatedRegions: ['liurnia', 'raya-lucaria', 'caria-manor'],
    relatedConcepts: ['dark-moon', 'age-of-stars', 'empyrean'],
    relatedTimelineEvents: ['radagon-rennala-marriage', 'radagon-abandono', 'ranni-noche-cuchillos'],
    relatedEndings: ['age-of-stars'],
  },

  /* ════════════════ Mass promotion batch — facciones/especies partial ════════════════ */

  haligtree: {
    summary:
      'Los Seguidores del Haligtree son la única utopía documentada de las Tierras Intermedias: refugiados Albinaurics, Misbegotten y excluidos del Orden Dorado convertidos en comunidad funcional bajo el árbol alternativo de Miquella. Su existencia es prueba de que el cosmos podía haber sido distinto. Su contaminación posterior por la Podredumbre demuestra por qué no lo fue.',
    deepLore: [
      h(2, 'Origen del proyecto'),
      p(
        link('Miquella', 'character', 'miquella'),
        ' diseñó el Haligtree como cosmología alternativa al ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        '. La premisa: ningún ser sería rechazado por su forma. Los excluidos del régimen oficial — ',
        link('Albinaurics', 'faction', 'albinauricos'),
        ', ',
        link('Misbegotten', 'faction', 'misbegotten'),
        ', malformados de todas las regiones — peregrinaron a través del Snowfield para llegar al árbol.'
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
        '.'
      ),
      h(2, 'Caída'),
      p(
        'Tras la Batalla de Aeonia y el secuestro de ',
        link('Miquella', 'character', 'miquella'),
        ' por ',
        link('Mohg', 'character', 'mohg'),
        ', el proyecto colapsó gradualmente. La Podredumbre residual de ',
        link('Malenia', 'character', 'malenia'),
        ' infectó al árbol mismo. Los Albinaurics enloquecieron y se transformaron. Los Cleanrot Knights perdieron control progresivo. Cuando el ',
        link('Tarnished', 'concept', 'tarnished'),
        ' llega, Elphael es ciudad arruinada que conserva la forma utópica vacía de su contenido.'
      )
    ],
    confirmed: [
      'Los Seguidores del Haligtree refugiaron a Albinaurics y Misbegotten',
      ['Convivían como iguales bajo la luz del ', link('Oro sin Aleación', 'concept', 'unalloyed-gold')],
      'Los Cleanrot Knights eran su guardia militar',
      ['La Podredumbre de ', link('Malenia', 'character', 'malenia'), ' infectó el árbol post-Aeonia']
    ],
    inferred: [
      'Era la única utopía documentada de las Tierras Intermedias',
      ['Su éxito dependía estructuralmente de la protección de ', link('Malenia', 'character', 'malenia')],
      ['El secuestro de ', link('Miquella', 'character', 'miquella'), ' detuvo el proyecto definitivamente']
    ],
    theories: [
      ['Si ', link('Miquella', 'character', 'miquella'), ' despertara, podría revertir la corrupción del Haligtree'],
      'Algunos Seguidores conservan consciencia residual durante su transformación',
      ['El proyecto era amenaza estructural a la ', link('Voluntad Mayor', 'concept', 'voluntad-mayor'), ' — su caída no fue accidente']
    ],
    ambiguous: [
      'Cuántos Seguidores había antes de la corrupción',
      'Si el árbol mismo conserva voluntad propia',
      'Si la utopía podría restaurarse bajo otra cosmología'
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
        ' durante sus eras de reparación del ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        '. La premisa: el ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' en su forma actual contiene una contradicción lógica interna — y si esa contradicción se corrige, el cosmos se vuelve perfectamente coherente.'
      ),
      h(2, 'Discípulos activos'),
      p(
        link('Goldmask', 'character', 'goldmask'),
        ' es el único monje vivo capaz de operar la corrección. Su silencio absoluto es disciplina ritual, no defecto. ',
        link('Corhyn', 'character', 'corhyn'),
        ' lo acompaña como traductor parcial — el único que oye los pensamientos no pronunciados del maestro y los comparte con el ',
        link('Tarnished', 'concept', 'tarnished'),
        '.'
      ),
      h(2, 'La revelación final'),
      p(
        link('Goldmask', 'character', 'goldmask'),
        ' alcanza la conclusión cosmológica: la Ley Mayor está mal formulada. La frase "',
        link('Radagon', 'character', 'radagon'),
        ' es ',
        link('Marika', 'character', 'marika'),
        '" es revelación clave — la fusión interna de los dos aspectos divinos es la falla estructural. La corrección produce la ',
        link('Era del Orden', 'ending', 'order'),
        ': un cosmos perfectamente coherente, frío, sin grietas, sin espacio para lo no encajable.'
      )
    ],
    confirmed: [
      ['Los Fundamentalistas heredan el proyecto reformista de ', link('Radagon', 'character', 'radagon')],
      [link('Goldmask', 'character', 'goldmask'), ' y ', link('Corhyn', 'character', 'corhyn'), ' son sus únicos miembros activos'],
      ['La frase "', link('Radagon', 'character', 'radagon'), ' es ', link('Marika', 'character', 'marika'), '" es revelación clave de su filosofía'],
      ['Su tradición culmina en la ', link('Era del Orden', 'ending', 'order')]
    ],
    inferred: [
      ['Su rama intelectual era casi extinta antes de ', link('Goldmask', 'character', 'goldmask')],
      'Otras eras tuvieron Fundamentalistas que fueron silenciados',
      ['La corrección de la Ley Mayor era anticipada por ', link('Radagon', 'character', 'radagon'), ' como meta diferida']
    ],
    theories: [
      [link('Marika', 'character', 'marika'), ' misma podría haber alentado secretamente la línea Fundamentalista'],
      ['La ', link('Era del Orden', 'ending', 'order'), ' elimina la individualidad además de las contradicciones'],
      ['Sus textos sobreviven en bibliotecas dispersas que ningún ', link('Tarnished', 'concept', 'tarnished'), ' ha encontrado']
    ],
    ambiguous: [
      ['Cuántos Fundamentalistas existieron antes de ', link('Goldmask', 'character', 'goldmask')],
      ['Si ', link('Corhyn', 'character', 'corhyn'), ' comprende plenamente la filosofía de su maestro'],
      'Si la corrección final es genuinamente perfeccionamiento o solo simplificación'
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
        ' y la convierten en gestos físicos. Esos gestos requieren a su vez ser traducidos a palabras. Las Lectoras son el último eslabón humano de la cadena.'
      ),
      h(2, 'Estructura institucional'),
      p(
        link('Enia', 'character', 'enia'),
        ' es la Lectora principal en la ',
        link('Mesa Redonda', 'concept', 'roundtable-hold'),
        '. Otras Lectoras del Crucible operan en regiones marginales como satélites de la institución central. Sus visiones rituales requieren ceguera ritualizada — ven con los dedos, no con los ojos.'
      ),
      h(2, 'Crisis post-fractura'),
      p(
        'Tras la ',
        link('fractura', 'timeline', 'la-fractura'),
        ' del ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        ', los Dedos están deteriorándose. Sus pronunciamientos son cada vez más vagos. Las Lectoras continúan oficiando — la liturgia sobrevive aunque el contenido se disuelva. Es la fe que se sostiene en silencio.'
      )
    ],
    confirmed: [
      ['Las Lectoras traducen los gestos de los ', link('Dos Dedos', 'faction', 'dos-dedos'), ' a palabras humanas'],
      [link('Enia', 'character', 'enia'), ' es la Lectora principal de la ', link('Mesa Redonda', 'concept', 'roundtable-hold')],
      'Su ceguera es ritual, no defecto',
      'Continúan oficiando aunque los Dedos se deterioran'
    ],
    inferred: [
      'Múltiples Lectoras coexisten en distintas regiones',
      'Su entrenamiento ritual es largo y específico',
      ['Sospechan la retirada parcial de la ', link('Voluntad Mayor', 'concept', 'voluntad-mayor'), ' pero no pueden decirlo']
    ],
    theories: [
      'Conocen secretos del régimen que ningún otro mortal accede',
      'Su ceguera permite ver dimensiones cosmológicas vedadas a los videntes',
      'Algunas Lectoras desertaron al ver lo que sus dedos leían'
    ],
    ambiguous: [
      ['Cómo se reclutan nuevas Lectoras tras la ', link('fractura', 'timeline', 'la-fractura')],
      'Si pueden mentir o están ritualmente forzadas a la fidelidad',
      'Si los Dedos podridos siguen comunicando algo'
    ],
    relatedCharacters: ['enia', 'marika'],
    relatedFactions: ['dos-dedos', 'orden-dorado'],
    relatedRegions: ['leyndell'],
    relatedConcepts: ['voluntad-mayor', 'great-rune'],
    relatedTimelineEvents: ['two-fingers-roundtable'],
  },

  'fire-giants': {
    summary:
      'Los Gigantes del Fuego fueron pueblo cosmológicamente independiente cuya llama era hostil al Árbol Áureo por designio. Marika ordenó su exterminio. Godfrey lideró el genocidio. El último gigante fue encadenado como custodio eterno de la llama que no pudo ser destruida — y que eras después prendería el árbol que ordenó su matanza.',
    deepLore: [
      h(2, 'Origen y cosmología'),
      p(
        'Los Gigantes del Fuego habitaban las ',
        link('Mountaintops', 'region', 'mountaintops'),
        ' como pueblo independiente del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        '. Adoraban al ',
        link('Fell God', 'concept', 'fell-god'),
        ', dios externo del fuego primigenio. Su llama era específicamente capaz de quemar al ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' — amenaza estructural absoluta al régimen dorado.'
      ),
      h(2, 'La guerra'),
      p(
        link('Godfrey', 'character', 'godfrey'),
        ' lideró el exterminio. La operación duró eras y consumió generaciones de soldados dorados. Casi todos los gigantes fueron asesinados. Los pocos supervivientes incluyen a ',
        link('Iji', 'character', 'iji'),
        ' (reformado al servicio Caria) y al ',
        link('último Gigante del Fuego', 'character', 'fire-giant'),
        ' (encadenado en la Forja).'
      ),
      h(2, 'La paradoja del confinamiento'),
      p(
        'La Llama Quemadora no pudo ser destruida — solo confinada. El último gigante quedó como custodio eterno. Eras después, cuando el ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' rechazó al ',
        link('Tarnished', 'concept', 'tarnished'),
        ', esa misma llama fue lo que prendió el árbol. ',
        link('Melina', 'character', 'melina'),
        ' se inmoló como portadora ritual. El régimen exterminó al pueblo cuya llama eventualmente lo destruyó.'
      )
    ],
    confirmed: [
      'Los Gigantes del Fuego adoraban al Fell God',
      ['Su llama era específicamente hostil al ', link('Árbol Áureo', 'concept', 'erdtree')],
      [link('Marika', 'character', 'marika'), ' ordenó su exterminio, ', link('Godfrey', 'character', 'godfrey'), ' lo lideró'],
      'La Llama Quemadora fue confinada con el último gigante como custodio',
      ['Esa llama es la que prende el ', link('Árbol Áureo', 'concept', 'erdtree'), ' al final del juego']
    ],
    inferred: [
      ['El ', link('Fell God', 'concept', 'fell-god'), ' es dios externo distinto de la ', link('Voluntad Mayor', 'concept', 'voluntad-mayor')],
      'La guerra duró eras y consumió generaciones',
      'Iji fue uno de los pocos gigantes reformados'
    ],
    theories: [
      [link('Marika', 'character', 'marika'), ' sabía que la llama eventualmente sería necesaria — el confinamiento fue siembra estratégica'],
      'Algunos gigantes sobrevivieron escondidos en otras regiones',
      ['El ', link('Fell God', 'concept', 'fell-god'), ' sigue activo cosmológicamente aunque su pueblo sea casi extinto']
    ],
    ambiguous: [
      'Cuántos gigantes había antes de la guerra',
      'Si los Zamor fueron aliados o cazadores oportunistas',
      'Si la llama tiene voluntad propia o solo materialidad hostil'
    ],
    relatedCharacters: ['godfrey', 'marika', 'melina', 'fire-giant', 'iji' ],
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
        ').'
      ),
      h(2, 'La línea oficial vs la línea real'),
      p(
        'La sucesión pública mostraba a ',
        link('Godwyn', 'character', 'godwyn'),
        ' como ejemplo arquetípico de pureza. Los ',
        link('Omens', 'faction', 'omens'),
        ' fueron encarcelados secretamente bajo ',
        link('Leyndell', 'region', 'leyndell'),
        '. Los Empyreans malditos fueron tolerados pero marginalizados (',
        link('Malenia', 'character', 'malenia'),
        ' infectada, ',
        link('Miquella', 'character', 'miquella'),
        ' eterno-niño). La hipocresía era estructural: cada generación traía nuevas grietas escondidas.'
      ),
      h(2, 'Decadencia post-fractura'),
      p(
        'Tras la ',
        link('fractura', 'timeline', 'la-fractura'),
        ', los descendientes laterales heredaron el peso del linaje sin la fuerza original. ',
        link('Godrick', 'character', 'godrick'),
        ' es el ejemplo cumbre: bisnieto de ',
        link('Godfrey', 'character', 'godfrey'),
        ' por línea diluida, mantiene su ',
        link('Gran Runa', 'concept', 'great-rune'),
        ' solo mediante injertos rituales. El linaje oficial murió cuando murió ',
        link('Godwyn', 'character', 'godwyn'),
        '; lo que queda es decadencia aristocrática llevada al absurdo.'
      )
    ],
    confirmed: [
      ['El Linaje Dorado es descendencia oficial de ', link('Marika', 'character', 'marika')],
      [link('Godwyn', 'character', 'godwyn'), ' fue heredero visible y arquetípico'],
      [link('Morgott', 'character', 'morgott'), ' y ', link('Mohg', 'character', 'mohg'), ' fueron encarcelados como Omens'],
      [link('Godrick', 'character', 'godrick'), ' mantiene su sangre diluida mediante injertos']
    ],
    inferred: [
      'La línea pública era propaganda cosmológica',
      'Cada generación generó más contradicciones internas',
      [link('Nepheli Loux', 'character', 'nepheli-loux'), ' es heredera lateral pero más legítima que ', link('Godrick', 'character', 'godrick')]
    ],
    theories: [
      [link('Marika', 'character', 'marika'), ' engendró otros hijos no documentados que fueron eliminados'],
      [link('Melina', 'character', 'melina'), ' es hija no nacida de ', link('Marika', 'character', 'marika')],
      'Existen otros descendientes laterales en regiones marginales'
    ],
    ambiguous: [
      ['Cuántos hijos engendró ', link('Marika', 'character', 'marika'), ' en total'],
      ['Si ', link('Godfrey', 'character', 'godfrey'), ' conocía la existencia de los ', link('Omens', 'faction', 'omens')],
      ['Si la sangre ', link('Empyrean', 'concept', 'empyrean'), ' puede revivir en descendientes laterales']
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
      'Las Lágrimas de Plata y Mimic Tears son tecnología cosmológica residual de los Nox: criaturas líquidas argénteas capaces de imitar formas con perfección absoluta. Su sofisticación documenta una alternativa al Orden Dorado que el régimen jamás igualó. Hoy son espíritus invocables que el Tarnished puede usar.',
    deepLore: [
      h(2, 'Origen tecnológico'),
      p(
        'Los ',
        link('Nox', 'faction', 'nox'),
        ' desarrollaron las Silver Tears como prototipo de un proyecto teológico ambicioso: forjar su propio dios. Las Lágrimas eran experimento preliminar — vida artificial maleable capaz de adoptar cualquier forma. Su sofisticación cosmológica excede lo que el ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' documenta haber alcanzado.'
      ),
      h(2, 'Mimic Tears'),
      p(
        'Los Mimic Tears son variantes superiores. Copian al observador con perfección absoluta — equipo, estadísticas, tácticas, todo. El ',
        link('Tarnished', 'concept', 'tarnished'),
        ' puede invocar uno como espíritu durante combates específicos. Cada uso es eco residual del proyecto blasfemo más sofisticado de las Tierras Intermedias.'
      )
    ],
    confirmed: [
      'Silver Tears son creación Nox',
      'Mimic Tears son variantes superiores',
      'Imitan al observador con precisión total',
      'Sobreviven en las ruinas de Nokron y Nokstella'
    ],
    inferred: [
      'Eran prototipos del proyecto del cuerpo divino',
      ['Su tecnología excede la del ', link('Orden Dorado', 'concept', 'golden-order')],
      'Conservan algún tipo de consciencia residual'
    ],
    theories: [
      'Cada Mimic Tear contiene fragmentos de un alma Nox',
      'Bajo condiciones específicas podrían producir un dios completo',
      'Algunas Mimic Tears han escapado de Nokstella y operan en otras regiones'
    ],
    ambiguous: [
      'Si tienen voluntad propia o son puramente reactivas',
      'Cuándo exactamente fueron creadas',
      'Si podrían unirse formando una entidad mayor'
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
        'El pueblo de Jarburg en Liurnia practicaba la conversión voluntaria a Living Jars como rito de paso espiritual. La transformación combina cuerpo humano parcialmente disuelto con cerámica ritualizada. El alma se preserva; el cuerpo se vuelve contenedor.'
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
        ' muere protegiéndolos.'
      ),
      h(2, 'Significado'),
      p(
        'Su tradición es uno de los pocos cultos no-violentos de las Tierras Intermedias. Su existencia documenta que el cuerpo humano es modificable más profundamente de lo que el ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' oficialmente permite. Su vulnerabilidad — son frágiles cerámicamente — los hace blanco fácil de cualquier atacante.'
      )
    ],
    confirmed: [
      'Los Living Jars conservan almas humanas dentro de cerámica',
      'La conversión es ritual voluntario',
      'Habitan principalmente Jarburg en Liurnia',
      'Su tradición es no-violenta'
    ],
    inferred: [
      ['El rito predata al ', link('Orden Dorado', 'concept', 'golden-order')],
      'No todos los Living Jars contienen almas — algunos son cerámica vacía',
      'La conversión requiere conocimiento ritual específico'
    ],
    theories: [
      'Algunos contienen almas de guerreros legendarios',
      ['Si ', link('Jar-Bairn', 'character', 'jar-bairn'), ' culmina su entrenamiento, sería heredero del legado de ', link('Alexander', 'character', 'alexander')],
      'La cerámica protectora es magia ritual, no solo material'
    ],
    ambiguous: [
      'Cómo exactamente se realiza el rito',
      'Cuántos Living Jars existieron antes de la persecución',
      'Si conservan memoria de su forma humana original'
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
        '. Su oficio es ritualmente sagrado dentro del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ': cada Omen ejecutado o "neutralizado" es servicio cosmológico al régimen.'
      ),
      h(2, 'Práctica ritual'),
      p(
        'Su práctica incluye serrucharles cuernos a Omens jóvenes, aplicar rituales correctivos, y ejecutar a quienes excedan los límites. ',
        link('Morgott', 'character', 'morgott'),
        ' y ',
        link('Mohg', 'character', 'mohg'),
        ' fueron sometidos a estos rituales durante su juventud bajo el ',
        link('Subsuelo Shunning-Grounds', 'region', 'subterranean-shunning-grounds'),
        '.'
      ),
      h(2, 'Existencia paradójica'),
      p(
        'Algunos Verdugos Omen son ellos mismos Omens convertidos al servicio del régimen — el oprimido que se vuelve verdugo de su propia categoría. Esa contradicción interna es característica del régimen entero: la ley se aplica usando los cuerpos que la ley clasifica como aberración.'
      )
    ],
    confirmed: [
      'Los Omenkillers cazan y ejecutan Omens',
      ['Su oficio es sagrado dentro del ', link('Orden Dorado', 'concept', 'golden-order')],
      ['Oficiaron rituales sobre ', link('Morgott', 'character', 'morgott'), ' y ', link('Mohg', 'character', 'mohg'), ' en su juventud'],
      'Algunos son ellos mismos Omens convertidos'
    ],
    inferred: [
      'Su existencia confirma persecución sistemática contra Omens',
      'Su entrenamiento es ritual e institucional',
      'Continúan operativos incluso post-fractura'
    ],
    theories: [
      'El Orden recluta Omenkillers de Omens jóvenes "reformados"',
      ['Conocen secretos sobre la ', link('Maldición Omen', 'concept', 'omen-curse'), ' que el régimen prefiere ocultar'],
      'Algunos desertaron al Volcano Manor'
    ],
    ambiguous: [
      'Cuántos Omenkillers operan actualmente',
      'Si tienen jerarquía interna',
      'Si pueden cuestionar las órdenes que reciben'
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
        'Los Banished Knights fueron orden caballeresca con tradición específica: defender lo justo aunque el régimen oficial no lo apruebe. Su devoción al honor marcial autónomo los llevó a desviarse de la doctrina central. El régimen los exilió como medida disciplinaria.'
      ),
      h(2, 'Vida post-exilio'),
      p(
        link('Bernahl', 'character', 'bernahl'),
        ' encabeza a los supervivientes desde el Warmaster\'s Shack en Stormhill. Vende invocaciones de Banished Knights muertos como espíritus combatientes. Su filosofía pública sigue siendo el honor marcial autónomo.'
      ),
      h(2, 'Caída en el Volcano Manor'),
      p(
        'Pero el exilio sin estructura institucional protectora hizo a los Banished Knights vulnerables a cualquier oferta de pertenencia. ',
        link('Bernahl', 'character', 'bernahl'),
        ' eventualmente cayó al servicio de ',
        link('Rykard', 'character', 'rykard'),
        ' como Recusante. La trayectoria del líder representa la trayectoria del orden entero: del honor marcial autónomo a la blasfemia institucional.'
      )
    ],
    confirmed: [
      ['Los Banished Knights fueron orden exiliada del ', link('Orden Dorado', 'concept', 'golden-order')],
      [link('Bernahl', 'character', 'bernahl'), ' es su líder superviviente'],
      'Vende invocaciones espirituales de sus camaradas muertos',
      [link('Bernahl', 'character', 'bernahl'), ' cayó al servicio de ', link('Rykard', 'character', 'rykard'), ' como Recusante']
    ],
    inferred: [
      'Su exilio fue por desviación doctrinal, no por incompetencia marcial',
      'Su filosofía original era ideológicamente coherente',
      ['La caída de ', link('Bernahl', 'character', 'bernahl'), ' es trayectoria predecible para órdenes sin estructura protectora']
    ],
    theories: [
      ['Otros Banished Knights desertaron al Volcano Manor con ', link('Bernahl', 'character', 'bernahl')],
      'Algunos sobreviven escondidos rechazando tanto el régimen oficial como la blasfemia',
      'Su exilio fue maniobra política específica de un facción del Orden contra otra'
    ],
    ambiguous: [
      'Cuándo exactamente fueron exiliados',
      'Cuántos Banished Knights vivos hay actualmente',
      'Si su tradición original puede ser recuperada'
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
        'La ',
        link('Llama Frenética', 'concept', 'frenzied-flame'),
        ' se propaga por contacto cosmológico, no por contacto físico. Una víctima escucha la doctrina, la siente como verdad, y comienza la transformación. Sus ojos arden amarillos; su voz pronuncia profecías del fin; su cuerpo desarrolla espirales de fuego que no consumen.'
      ),
      h(2, 'Categorías de víctimas'),
      p(
        link('Hyetta', 'character', 'hyetta'),
        ' es víctima ritualizada: doncella designada del ',
        link('Señor de la Llama Frenética', 'ending', 'frenzied-flame'),
        '. ',
        link('Shabriri', 'character', 'shabriri'),
        ' es víctima activa: posee huéspedes para propagar la doctrina. Las víctimas anónimas — campesinos, peregrinos, prisioneros — son contagio pasivo: sus bocas predican sin que ellos elijan.'
      )
    ],
    confirmed: [
      'Las víctimas frenéticas portan ojos amarillos ardientes',
      'Sus voces predican la frenética verdad',
      [link('Hyetta', 'character', 'hyetta'), ' es la víctima ritualizada principal'],
      [link('Shabriri', 'character', 'shabriri'), ' propaga la doctrina por posesión']
    ],
    inferred: [
      'El contagio es cosmológico, no físico',
      'Cada víctima es vehículo del próximo ciclo de propagación',
      'La cripta sellada bajo Leyndell es origen de la radiación'
    ],
    theories: [
      'Algunas víctimas sobreviven con consciencia residual de su yo previo',
      'La radiación crece más fuerte cuanto más cerca del sello',
      'Si el sello cae, todas las Tierras Intermedias se transformaría en víctimas'
    ],
    ambiguous: [
      'Cuántas víctimas hay actualmente',
      'Si la transformación es reversible',
      'Si las víctimas conservan algún tipo de comunidad o son fragmentos aislados'
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
        'Los Crucible Knights pertenecen al período del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' primitivo en que el régimen aún integraba formas del ',
        link('Crisol', 'concept', 'crucible'),
        ' como tradición sagrada. Sus armaduras llevan deliberadamente alas, escamas y cuernos como signo de continuidad cosmológica.'
      ),
      h(2, 'Marginalización progresiva'),
      p(
        'Cuando el régimen se volvió hostil al ',
        link('Crisol', 'concept', 'crucible'),
        ', la orden quedó marginalizada. Sus rituales fueron tolerados pero no propagados. Sus iniciaciones cesaron. Los miembros existentes siguieron operando hasta morir, sin sustitutos. ',
        link('Ordovis', 'character', 'crucible-knight-ordovis'),
        ' es el último ejemplo prominente — su Greatsword conserva técnicas que ningún discípulo nuevo ha aprendido.'
      ),
      h(2, 'Reliquia funcional'),
      p(
        'Hoy los Crucible Knights aparecen patrullando catacumbas y fortalezas en bucles eternos. Su lealtad sobrevive a su consciencia: defienden tradiciones que el régimen ya no respalda. Su conocimiento del injerto sirve como precedente filosófico al de ',
        link('Godrick', 'character', 'godrick'),
        ', aunque la tradición original era ritual integrador, no técnica corporal cruda.'
      )
    ],
    confirmed: [
      ['Los Crucible Knights pertenecen al ', link('Orden Dorado', 'concept', 'golden-order'), ' primitivo'],
      ['Sus armaduras incorporan iconografía del ', link('Crisol', 'concept', 'crucible')],
      [link('Ordovis', 'character', 'crucible-knight-ordovis'), ' es el último ejemplo prominente'],
      'No se inician nuevos miembros'
    ],
    inferred: [
      'Su marginalización fue gradual, no súbita',
      ['Su conocimiento ritual fue precedente filosófico del injerto de ', link('Godrick', 'character', 'godrick')],
      'Algunas tradiciones suyas sobreviven en ramas marginales del régimen'
    ],
    theories: [
      'Algunos miembros activos conservan consciencia residual',
      ['Su tradición podría ser revivida si el ', link('Crisol', 'concept', 'crucible'), ' regresa cosmológicamente'],
      ['Compartían información secreta sobre ', link('Marika', 'character', 'marika'), ' y los gemelos Omens']
    ],
    ambiguous: [
      'Cuántos Crucible Knights operan actualmente',
      'Si sus iniciaciones cesaron por decreto o por extinción natural',
      ['Si ', link('Marika', 'character', 'marika'), ' misma autorizó la marginalización']
    ],
    relatedCharacters: ['crucible-knight-ordovis', 'godrick'],
    relatedFactions: ['orden-dorado'],
    relatedRegions: ['leyndell'],
    relatedConcepts: ['crucible', 'grafting'],
  },
}
