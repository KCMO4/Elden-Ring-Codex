import type { DeepEntity, RichBlock, RichInline } from '../types'

const link = (label: string, targetType: 'character' | 'region' | 'faction' | 'concept' | 'ending' | 'timeline', slug: string): RichInline =>
  ({ type: 'link', label, targetType, slug })
const p = (...children: RichInline[]): RichBlock =>
  ({ type: 'paragraph', children })
const h = (level: 2 | 3, text: string, id?: string): RichBlock =>
  ({ type: 'heading', level, text, id })

export const timelineLore: Record<string, Partial<DeepEntity>> = {

  'antes-orden-dorado': {
    summary: 'La era pre-Orden: cosmos primigenio dominado por el Crisol y los Antiguos Dragones. Los seres se mezclaban entre formas; las leyes del cosmos eran fluidas. La era termina cuando la Voluntad Mayor selecciona a Marika.',
    deepLore: [
      h(2, 'El Crisol primordial'),
      p(
        'Antes del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' existió el ',
        link('Crisol', 'concept', 'crucible'),
        ': una fuerza vital donde todas las formas se mezclaban. ',
        link('Antiguos Dragones', 'faction', 'dragones-antiguos'),
        ' reinaban; ',
        link('Placidusax', 'character', 'placidusax'),
        ' era Lord Elden bajo un dios externo cuya identidad se ha perdido.',
      ),
      h(2, 'El cambio cosmológico'),
      p(
        'Cuando el dios externo de los dragones desapareció, la cosmología quedó vacante. La ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' aprovechó el vacío y eligió a una numen humana — ',
        link('Marika', 'character', 'marika'),
        ' — como su nueva vasija. La transición no fue pacífica.',
      ),
    ],
    relatedCharacters: ['placidusax', 'marika', 'gloam-eyed-queen'],
    relatedFactions: ['dragones-antiguos', 'pieles-de-dios'],
    relatedConcepts: ['crucible', 'voluntad-mayor', 'dioses-exteriores'],
    relatedRegions: ['farum-azula'],
  },

  'era-antigua': {
    summary: 'Era de la Reina de Ojos Crepusculares: dominio de la Llama Negra, hostil a las divinidades. Maliketh la derrota usando la Muerte Predestinada — la misma fuerza que después será sellada en él.',
    deepLore: [
      h(2, 'La reina hereje'),
      p(
        'Antes de Marika, la ',
        link('Reina de Ojos Crepusculares', 'character', 'gloam-eyed-queen'),
        ' fue Empyrean. Otorgó la ',
        link('Llama Negra', 'concept', 'black-flame'),
        ' a sus seguidores — los ',
        link('Pieles de Dios', 'faction', 'pieles-de-dios'),
        '. Su régimen era una de las muchas eras posibles del cosmos.',
      ),
      h(2, 'La derrota'),
      p(
        link('Maliketh', 'character', 'maliketh'),
        ' la derrotó usando la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ' — la misma fuerza que después será sellada en su propio cuerpo. Su caída abrió el camino al Orden Dorado.',
      ),
    ],
    relatedCharacters: ['gloam-eyed-queen', 'maliketh'],
    relatedFactions: ['pieles-de-dios'],
    relatedConcepts: ['black-flame', 'destined-death', 'empyrean'],
  },

  'muerte-predestinada': {
    summary: 'Marika sella la Muerte Predestinada dentro de Maliketh, fundando la era inmortal del Orden Dorado. El acto fundacional contiene su propia condena.',
    deepLore: [
      h(2, 'El sello'),
      p(
        'Tras la ascensión de ',
        link('Marika', 'character', 'marika'),
        ' como vasija de la Voluntad Mayor, su primera operación cosmológica fue sellar la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ' dentro de ',
        link('Maliketh', 'character', 'maliketh'),
        '. Desde ese momento la muerte real deja de funcionar en el Interregno.',
      ),
      h(2, 'Las consecuencias diferidas'),
      p(
        'Sellar la muerte no la destruye — solo la guarda. Todos los problemas del cosmos siguiente se rastrean a este acto: la inmortalidad de ',
        link('Godwyn', 'character', 'godwyn'),
        ' tras su asesinato parcial, la imposibilidad de procesar a los demidioses, la generación misma de ',
        link('Aquellos que Viven en la Muerte', 'concept', 'those-who-live-in-death'),
        '.',
      ),
    ],
    relatedCharacters: ['marika', 'maliketh', 'gloam-eyed-queen'],
    relatedConcepts: ['destined-death', 'rune-of-death', 'voluntad-mayor', 'shadow-bound-beast'],
  },

  'marika-godfrey': {
    summary: 'Marika toma a Godfrey como Primer Señor Elden y juntos conquistan el Interregno. El régimen del Orden Dorado se consolida sobre la marcialidad de Hoarah Loux y la voluntad cosmológica de Marika.',
    deepLore: [
      h(2, 'La unión funcional'),
      p(
        'La unión entre ',
        link('Marika', 'character', 'marika'),
        ' y ',
        link('Godfrey', 'character', 'godfrey'),
        ' fue ante todo política: la diosa necesitaba un consorte marcial; el guerrero exterior aceptó el contrato. Tuvieron varios hijos, incluyendo ',
        link('Godwyn', 'character', 'godwyn'),
        '.',
      ),
      h(2, 'La conquista'),
      p(
        'Bajo Godfrey, el Orden Dorado conquistó el Interregno entero, sometiendo a tribus pre-Orden, gigantes, omens y otros pueblos disidentes.',
      ),
    ],
    relatedCharacters: ['marika', 'godfrey', 'godwyn'],
    relatedFactions: ['orden-dorado'],
    relatedRegions: ['leyndell'],
    relatedConcepts: ['golden-order'],
  },

  'hijos-marika-godfrey': {
    summary: 'Godwyn, Morgott y Mohg nacen de Marika y Radagon-bajo-Marika. Los dos últimos son omens, encarcelados bajo Leyndell por la propia ley dorada que los engendró.',
    deepLore: [
      h(2, 'La descendencia'),
      p(
        link('Godwyn', 'character', 'godwyn'),
        ' nació amado y pleno; sus hermanos posteriores ',
        link('Morgott', 'character', 'morgott'),
        ' y ',
        link('Mohg', 'character', 'mohg'),
        ' nacieron como ',
        link('Omens', 'faction', 'omens'),
        ' — manifestación de la sangre antigua que ',
        link('Radagon', 'character', 'radagon'),
        ' ocultaba.',
      ),
      h(2, 'El secreto enterrado'),
      p(
        'Los gemelos omen fueron encarcelados bajo Leyndell. Ningún heraldo del Orden hablaba de ellos. Su existencia es contradicción viva del régimen.',
      ),
    ],
    relatedCharacters: ['marika', 'godfrey', 'godwyn', 'morgott', 'mohg', 'radagon'],
    relatedFactions: ['orden-dorado', 'omens'],
    relatedRegions: ['leyndell'],
  },

  'exilio-godfrey': {
    summary: 'Marika despoja a Godfrey de su gracia y lo exilia con sus seguidores. Los expulsados son los primeros Mancillados.',
    deepLore: [
      h(2, 'La pérdida'),
      p(
        'Cuando ya no hubo enemigos dignos, Marika quitó la gracia a Godfrey. Una lágrima rodó por la mejilla del rey: no por el destierro, sino por la falta de propósito. Fue exiliado con sus seguidores. Sus descendientes serían los ',
        link('Mancillados', 'concept', 'tarnished'),
        '.',
      ),
    ],
    relatedCharacters: ['godfrey', 'marika'],
    relatedConcepts: ['tarnished', 'grace'],
  },

  'radagon-rennala': {
    summary: 'Radagon, ahora segundo consorte de Marika, había estado previamente casado con Rennala. La traición de Liurnia lo persigue como antecedente del régimen presente.',
    deepLore: [
      h(2, 'El primer matrimonio'),
      p(
        'Antes de unirse a Marika, ',
        link('Radagon', 'character', 'radagon'),
        ' lideró la guerra contra ',
        link('Liurnia', 'region', 'liurnia'),
        ' y se casó con ',
        link('Rennala', 'character', 'rennala'),
        ', la reina conquistada. Tuvieron tres hijos: ',
        link('Ranni', 'character', 'ranni'),
        ', ',
        link('Radahn', 'character', 'radahn'),
        ' y ',
        link('Rykard', 'character', 'rykard'),
        '.',
      ),
    ],
    relatedCharacters: ['radagon', 'rennala', 'ranni', 'radahn', 'rykard'],
    relatedFactions: ['caria', 'raya-lucaria'],
    relatedRegions: ['liurnia', 'raya-lucaria'],
  },

  'radagon-es-marika': {
    summary: 'El secreto cosmológico mejor guardado del Interregno: Radagon y Marika comparten cuerpo. El segundo matrimonio de Marika fue contigo misma.',
    deepLore: [
      h(2, 'La revelación'),
      p(
        link('Radagon', 'character', 'radagon'),
        ' es ',
        link('Marika', 'character', 'marika'),
        '. La fusión es física y cosmológica: dos voluntades en un cuerpo, dos consortes consecutivos del mismo ser. Cuando Radagon llegó a Leyndell tras abandonar a Rennala, no se casó con la diosa: se reabsorbió en sí mismo.',
      ),
      h(2, 'La paradoja sostenida'),
      p(
        'Las dos voluntades persisten irreconciliables. Marika destruye el Anillo Elden; Radagon dedica su existencia a repararlo. Ninguno gana; ningún martillazo es suficiente.',
      ),
    ],
    relatedCharacters: ['marika', 'radagon'],
    relatedConcepts: ['elden-ring', 'golden-order'],
  },

  'miquella-malenia': {
    summary: 'Marika y Radagon engendran a los Empyreans gemelos: Miquella eternamente niño, Malenia infectada por la Podredumbre. Ambos cargan dios exterior.',
    deepLore: [
      h(2, 'Los gemelos malditos'),
      p(
        link('Miquella', 'character', 'miquella'),
        ' nace incapaz de crecer. ',
        link('Malenia', 'character', 'malenia'),
        ' nace infectada por la ',
        link('Podredumbre Escarlata', 'concept', 'scarlet-rot'),
        '. Sus maldiciones son simétricas: uno no puede madurar, la otra no puede dejar de morir.',
      ),
      h(2, 'El proyecto'),
      p(
        'Miquella pasaría su existencia desarrollando el ',
        link('Oro sin Aleación', 'concept', 'unalloyed-gold'),
        ' como cura. Su gemela sería su escudo y primer paciente.',
      ),
    ],
    relatedCharacters: ['miquella', 'malenia', 'marika', 'radagon'],
    relatedConcepts: ['empyrean', 'scarlet-rot', 'unalloyed-gold', 'haligtree'],
    relatedRegions: ['haligtree'],
  },

  'empyreans-fingers-shadows': {
    summary: 'Los Empyreans del ciclo actual — Ranni, Malenia, Miquella — son designados por la Voluntad Mayor a través de los Dos Dedos. Cada uno tiene una Bestia Sombra.',
    deepLore: [
      h(2, 'La designación'),
      p(
        'Los ',
        link('Dos Dedos', 'faction', 'dos-dedos'),
        ' designan a los Empyreans del ciclo actual. ',
        link('Ranni', 'character', 'ranni'),
        ', ',
        link('Malenia', 'character', 'malenia'),
        ' y ',
        link('Miquella', 'character', 'miquella'),
        ' son los conocidos. Cada uno recibe una ',
        link('Bestia Sombra', 'concept', 'shadow-bound-beast'),
        ': Ranni recibe a ',
        link('Blaidd', 'character', 'blaidd'),
        '.',
      ),
    ],
    relatedCharacters: ['ranni', 'malenia', 'miquella', 'blaidd', 'maliketh'],
    relatedFactions: ['dos-dedos', 'orden-dorado'],
    relatedConcepts: ['empyrean', 'shadow-bound-beast'],
  },

  'ranni-noche-cuchillos': {
    summary: 'La conjura cosmológica más ambiciosa del Interregno: Ranni roba un fragmento de la Runa de la Muerte, forja los Cuchillos Negros y mata su propio cuerpo Empyrean. Daño colateral: Godwyn.',
    deepLore: [
      h(2, 'La preparación'),
      p(
        link('Ranni', 'character', 'ranni'),
        ' planeó la operación durante siglos. Los pasos: 1) robar fragmento de la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ' del cuerpo de ',
        link('Maliketh', 'character', 'maliketh'),
        '. 2) forjar las hojas de los ',
        link('Cuchillos Negros', 'faction', 'cuchillos-negros'),
        '. 3) coordinar el asesinato simultáneo de su propio cuerpo y de su hermano ',
        link('Godwyn', 'character', 'godwyn'),
        '.',
      ),
      h(2, 'El éxito parcial'),
      p(
        'Ranni mató su cuerpo Empyrean — liberándola del contrato divino. Pero como la Muerte Predestinada estaba sellada, los asesinatos no fueron completos: Godwyn quedó con cuerpo sin alma, Ranni transferió su mente a una muñeca.',
      ),
      h(2, 'La consecuencia'),
      p(
        'El asesinato parcial de Godwyn detonó la pena de Marika, que rompió el Anillo Elden — la ',
        link('fractura', 'timeline', 'la-fractura'),
        ' que abre la era actual.',
      ),
    ],
    relatedCharacters: ['ranni', 'godwyn', 'maliketh', 'marika', 'iji', 'blaidd', 'seluvis'],
    relatedFactions: ['cuchillos-negros', 'caria', 'those-who-live-in-death'],
    relatedConcepts: ['rune-of-death', 'destined-death', 'empyrean'],
    relatedRegions: ['deeproot-depths'],
  },

  'la-fractura': {
    summary: 'Marika rompe el Anillo Elden con un martillo. Las Grandes Runas se dispersan entre sus hijos. La Voluntad Mayor se retira parcialmente. Inicia la era de la fractura.',
    deepLore: [
      h(2, 'El martillazo'),
      p(
        'Tras el asesinato parcial de ',
        link('Godwyn', 'character', 'godwyn'),
        ', ',
        link('Marika', 'character', 'marika'),
        ' rompió el ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        ' con sus propias manos. El cosmos se desensambla: las ',
        link('Grandes Runas', 'concept', 'great-rune'),
        ' se dispersan, la sucesión se interrumpe, la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' se distancia.',
      ),
      h(2, 'El castigo'),
      p(
        'La Voluntad Mayor encadena a Marika dentro del propio Erdtree. ',
        link('Radagon', 'character', 'radagon'),
        ' queda como guardián residual. La era inicia su decadencia institucional.',
      ),
    ],
    relatedCharacters: ['marika', 'radagon', 'godwyn'],
    relatedConcepts: ['elden-ring', 'great-rune', 'voluntad-mayor'],
    relatedRegions: ['leyndell'],
  },

  'demidioses-fractura': {
    summary: 'Tras la fractura, los demidioses pelean entre sí por las Grandes Runas. La guerra civil cosmológica produce la corrupción de Caelid, el sueño de Miquella, el rapto, la blasfemia de Rykard.',
    deepLore: [
      h(2, 'La guerra entre hijos'),
      p(
        'Cada demidiós reclamó su Gran Runa. ',
        link('Radahn', 'character', 'radahn'),
        ' contra ',
        link('Malenia', 'character', 'malenia'),
        ' en Caelid. ',
        link('Mohg', 'character', 'mohg'),
        ' secuestrando a ',
        link('Miquella', 'character', 'miquella'),
        '. ',
        link('Rykard', 'character', 'rykard'),
        ' devorado por una serpiente-dios. ',
        link('Morgott', 'character', 'morgott'),
        ' defendiendo el régimen que lo despreció. Cada demidiós es respuesta distinta a la fractura.',
      ),
    ],
    relatedCharacters: ['radahn', 'malenia', 'miquella', 'mohg', 'rykard', 'morgott', 'godrick', 'ranni'],
    relatedRegions: ['caelid', 'haligtree', 'mt-gelmir', 'mohgwyn', 'leyndell'],
    relatedConcepts: ['great-rune', 'scarlet-rot'],
  },

  'estado-mundo-mancillado': {
    summary: 'El Interregno tras la fractura: regiones arruinadas, demidioses corrompidos o ausentes, Voluntad Mayor distante. Es el escenario donde llegará el Mancillado.',
    deepLore: [
      h(2, 'El paisaje en ruinas'),
      p(
        'Cuando el Mancillado regresa, encuentra: ',
        link('Caelid', 'region', 'caelid'),
        ' arrasado por la podredumbre, ',
        link('Stormveil', 'region', 'stormveil'),
        ' bajo Godrick injertando víctimas, ',
        link('Liurnia', 'region', 'liurnia'),
        ' inundada con Rennala atrapada en su huevo, ',
        link('Volcano Manor', 'region', 'mt-gelmir'),
        ' conspirando, los Tres Dedos sellados bajo Leyndell.',
      ),
    ],
    relatedRegions: ['caelid', 'stormveil', 'liurnia', 'mt-gelmir', 'leyndell'],
    relatedCharacters: ['godrick', 'rennala', 'rykard', 'morgott'],
  },

  'viaje-mancillado': {
    summary: 'El Mancillado regresa, recolecta Grandes Runas, escala el Erdtree. Acompañado por Melina, asesorado por Gideon. Su viaje culmina en la elección del final.',
    deepLore: [
      h(2, 'La travesía'),
      p(
        'El ',
        link('Mancillado', 'concept', 'tarnished'),
        ' regresa desde las tierras exteriores con la gracia restaurada. ',
        link('Melina', 'character', 'melina'),
        ' lo acompaña; ',
        link('Gideon', 'character', 'gideon'),
        ' lo asesora desde la Mesa Redonda; ',
        link('Enia', 'character', 'enia'),
        ' lo unge.',
      ),
      h(2, 'El sacrificio'),
      p(
        'Melina se inmola en los ',
        link('Mountaintops', 'region', 'mountaintops'),
        ' para encender el Erdtree. El árbol se quema, dejando el camino abierto al trono. Ahora resta enfrentar a Marika, Radagon y la Bestia Elden — y elegir el final del cosmos.',
      ),
    ],
    relatedCharacters: ['melina', 'gideon', 'enia', 'goldmask', 'corhyn'],
    relatedConcepts: ['tarnished', 'grace', 'erdtree', 'great-rune'],
    relatedRegions: ['leyndell', 'mountaintops'],
  },

  finales: {
    summary: 'Seis posibles eras al alcance del Mancillado, cada una respuesta filosófica distinta a si el Orden Dorado merece existir tal como es.',
    deepLore: [
      h(2, 'Las seis respuestas'),
      p(
        'El Mancillado puede instaurar: la ',
        link('Era de la Fractura', 'ending', 'fracture'),
        ' (restauración pasiva), la ',
        link('Era del Orden', 'ending', 'order'),
        ' (perfección lógica), la ',
        link('Era del Crepúsculo', 'ending', 'duskborn'),
        ' (devolver la Muerte), la ',
        link('Bendición de la Desesperación', 'ending', 'despair'),
        ' (sufrimiento universal), el ',
        link('Señor de la Llama Frenética', 'ending', 'frenzied-flame'),
        ' (apocalipsis nihilista), o la ',
        link('Era de las Estrellas', 'ending', 'age-of-stars'),
        ' (cosmos sin Voluntad Mayor).',
      ),
      h(2, 'La pregunta abierta'),
      p(
        'Ninguna era es enteramente buena o mala. Cada una resuelve algunos problemas y abre otros. El juego no privilegia ninguna; deja al jugador la responsabilidad cosmológica que ningún demidiós quiso asumir.',
      ),
    ],
    relatedCharacters: ['ranni', 'fia', 'goldmask', 'dung-eater', 'melina', 'hyetta'],
    relatedEndings: ['fracture', 'order', 'duskborn', 'despair', 'frenzied-flame', 'age-of-stars'],
    relatedConcepts: ['elden-ring', 'voluntad-mayor', 'golden-order'],
  },
}
