import type { DeepEntity, RichBlock, RichInline } from '../types'

const link = (label: string, targetType: 'character' | 'region' | 'faction' | 'concept' | 'ending' | 'timeline', slug: string): RichInline =>
  ({ type: 'link', label, targetType, slug })
const p = (...children: RichInline[]): RichBlock =>
  ({ type: 'paragraph', children })
const h = (level: 2 | 3, text: string, id?: string): RichBlock =>
  ({ type: 'heading', level, text, id })
const em = (text: string): RichInline => ({ type: 'em', text })

export const timelineLore: Record<string, Partial<DeepEntity>> = {

  'antes-orden-dorado': {
    summary:
      'La era pre-Orden Dorado: cosmos primigenio dominado por el Crisol y los Antiguos Dragones. Los seres se mezclaban entre formas; las leyes del cosmos eran fluidas. La era termina cuando el dios externo de los dragones desaparece sin sucesor, dejando vacante cosmológica que la Voluntad Mayor llenará al elegir a Marika como nueva vasija humana. La transición es serial — cada régimen cosmológico cae para que el siguiente lo reemplace.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'La era pre-Orden Dorado es período cosmológico de duración indeterminada en el que el ',
        link('Crisol', 'concept', 'crucible'),
        ' operaba como fuerza vital dominante y los ',
        link('Antiguos Dragones', 'faction', 'dragones-antiguos'),
        ' reinaban bajo el liderazgo de ',
        link('Placidusax', 'character', 'placidusax'),
        ' como Señor Elden. Su capital era ',
        link('Farum Azula', 'region', 'farum-azula'),
        '. Coexistieron también otras cosmologías marginales: la de la ',
        link('Reina de Ojos Crepusculares', 'character', 'gloam-eyed-queen'),
        ' (con sus ',
        link('Pieles de Dios', 'faction', 'pieles-de-dios'),
        '), la civilización ',
        link('Nox', 'faction', 'nox'),
        ' subterránea, los ',
        link('Gigantes del Fuego', 'faction', 'fire-giants'),
        ' en las Mountaintops.'
      ),
      h(2, 'Historia detallada'),
      p(
        'En la cosmología pre-Orden, las formas vitales no estaban estandarizadas. Los seres podían tener cuernos, escamas, alas, hibridaciones diversas — todo era manifestación legítima del Crisol. Los ',
        link('Hombres-Bestia', 'faction', 'hombres-bestia'),
        ' eran clero ritual del régimen dragónico. La autoridad cosmológica fluía a través del relámpago, del tiempo congelado de Farum Azula, del gigantismo cosmológico (Greyoll, la Madre Dragón Anciana). El dios externo de los dragones — cuya identidad nunca se enuncia en los textos del juego base — sostenía estructuralmente todo el régimen.'
      ),
      p(
        'Cuando ese dios desapareció sin batalla, sin testigo, sin sucesor designado, sin explicación, el régimen dragónico perdió eje cosmológico. La operación fue gradual pero irreversible. Algunos dragones se dispersaron por las Tierras Intermedias; ',
        link('Fortissax', 'character', 'fortissax'),
        ' eventualmente pactaría con los humanos del Orden naciente. Otros se retiraron a ',
        link('Farum Azula', 'region', 'farum-azula'),
        ', que quedó suspendida en su tormenta atemporal. Placidusax mismo se retiró a una cámara escondida y entró en estasis ritual, esperando un retorno cosmológico que el cosmos descartó.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'La causa estructural fue el abandono divino. La consecuencia cosmológica fue vacante de autoridad — las Tierras Intermedias quedó sin Lord Elden coordinador. La ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' — uno de los muchos ',
        link('dioses exteriores', 'concept', 'dioses-exteriores'),
        ' — aprovechó el vacío. Eligió una numen humana específica como nueva vasija: ',
        link('Marika', 'character', 'marika'),
        '. Su selección no fue inmediatamente unánime — la ',
        link('Reina de Ojos Crepusculares', 'character', 'gloam-eyed-queen'),
        ' representaba cosmología rival, los Pieles de Dios cazaban divinidades activamente, los Nox preparaban su propio proyecto teológico. La transición duró eras y produjo conflictos que el régimen siguiente intentaría borrar de los registros.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La era pre-Orden Dorado documenta que el régimen actual no es la primera cosmología — es la actual. Esta sucesión revela una verdad estructural de las Tierras Intermedias: ',
        em('los regímenes cosmológicos son seriales, no eternos'),
        '. Cada uno se considera definitivo durante su tiempo y es eventualmente reemplazado. Cada manifestación residual del Crisol que sobrevive (Omens, Misbegotten, Hombres-Bestia, Crucible Knights) es testimonio silencioso de que la cosmología actual no purgó plenamente lo anterior. La era pre-Orden no terminó: solo fue empujada al margen mientras esperaba.'
      ),
    ],
    confirmed: [
      'Placidusax fue Señor Elden de la era cosmológica anterior al Orden Dorado',
      'Su capital era Farum Azula, hoy suspendida en tormenta atemporal',
      'El dios externo de los dragones desapareció sin batalla ni sucesor',
      'La Voluntad Mayor eligió a Marika como nueva vasija al ocupar la vacante',
      'Coexistieron múltiples cosmologías marginales (Reina de Ojos Crepusculares, Nox, Gigantes del Fuego)',
    ],
    inferred: [
      'El régimen dragónico precede al Crisol como cosmología dominante o lo coexistió como capa paralela',
      'La transición duró eras y produjo conflictos que el régimen siguiente borró de los registros',
      'Cada manifestación residual del Crisol es testimonio de purga incompleta',
      'Los Hombres-Bestia operaban como clero ritual del régimen dragónico',
    ],
    theories: [
      'Existieron Lords Elden de regímenes pre-Placidusax cuyos nombres se han perdido',
      'El dios externo desaparecido podría retornar bajo condiciones cosmológicas específicas',
      'La sucesión cosmológica de las Tierras Intermedias son ciclo programado por entidad mayor',
      'La Voluntad Mayor estaba esperando deliberadamente la vacante para ocuparla',
    ],
    ambiguous: [
      'Identidad del dios externo desaparecido del régimen dragónico',
      'Cuánto tiempo duró el régimen dragónico antes de la caída',
      'Si la Reina de Ojos Crepusculares precede o sucede a Placidusax',
      'Cuántos otros regímenes cosmológicos existieron antes que se hayan perdido',
    ],
    relatedCharacters: ['placidusax', 'marika', 'gloam-eyed-queen', 'fortissax', 'maliketh'],
    relatedFactions: ['dragones-antiguos', 'pieles-de-dios', 'hombres-bestia', 'nox', 'fire-giants'],
    relatedConcepts: ['crucible', 'voluntad-mayor', 'dioses-exteriores', 'numen', 'empyrean'],
    relatedRegions: ['farum-azula', 'mountaintops'],
    relatedTimelineEvents: ['era-antigua', 'placidusax-elden-lord'],
  },

  'era-antigua': {
    summary:
      'La era de la Reina de Ojos Crepusculares: cosmología precedente al Orden Dorado donde la Empyrean Numen tenía la Runa de la Muerte como autoridad central. Otorgó la Llama Negra a los Pieles de Dios como instrumento deicida ritual. Maliketh la derrotó usando la propia Muerte Predestinada — la misma fuerza que después sería sellada en su propio cuerpo. Su caída abrió el camino al Orden Dorado pero su doctrina deicida sobrevivió, transmitida a apóstoles dispersos.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'La era de la Reina de Ojos Crepusculares es período cosmológico de duración indeterminada en el que una Empyrean Numen específica gobernó las Tierras Intermedias como vasija humana de un dios externo no nombrado. Su autoridad central: poseer la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ' como Gran Runa operativa, lo que le daba control sobre la Muerte Predestinada como ley cosmológica. Su régimen coexistió con el dragónico de Placidusax como cosmología paralela — los dos régimenes operaban en regiones distintas con autoridades cosmológicas distintas.'
      ),
      h(2, 'Historia detallada'),
      p(
        'La ',
        link('Reina de Ojos Crepusculares', 'character', 'gloam-eyed-queen'),
        ' otorgó la ',
        link('Llama Negra', 'concept', 'black-flame'),
        ' a sus seguidores rituales — los ',
        link('Pieles de Dios', 'faction', 'pieles-de-dios'),
        '. La operación fue cosmológicamente ambiciosa: la Llama Negra es fuego ritual capaz de quemar carne divina específicamente. Su doctrina explícita era el deicidio — los dioses pueden morir, deben morir, la justicia cosmológica requiere su mortalidad. Los apóstoles desarrollaron tecnología deicida sofisticada: las pieles de divinidades asesinadas se incorporaban en sus armaduras como archivo material de matanzas previas.'
      ),
      p(
        'La autoridad de la Reina amenazaba estructuralmente a cualquier dios externo dominante. La ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' — emergiendo como contendiente cosmológico tras la caída del régimen dragónico — encargó la operación de derrocamiento a ',
        link('Maliketh', 'character', 'maliketh'),
        ', su Bestia Sombra recién extraída del linaje Hombre-Bestia. Maliketh derrotó a la Reina usando la propia Muerte Predestinada como arma ritual — paradoja cosmológica exacta: la Reina cayó por la fuerza que ella misma representaba.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'La causa de la guerra fue rivalidad cosmológica directa: dos regímenes incompatibles disputándose el mismo cosmos. Las consecuencias estructurales fueron triples. Primera: Maliketh recuperó la Runa de la Muerte y la cosió en su propio cuerpo por orden de Marika — el sello fundacional del Orden Dorado. Segunda: la doctrina deicida de los Pieles de Dios sobrevivió en clandestinidad, transmitida a apóstoles dispersos que siguen operativos siglos después en regiones marginales (Caelid, Volcano Manor, Farum Azula). Tercera: las ',
        link('Cuchillos Negros', 'faction', 'cuchillos-negros'),
        ' como facción-hermana conservaron tecnología cosmológica derivada — eventualmente Ranni la usaría para ejecutar la Noche que rompería el cosmos.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La era de la Reina de Ojos Crepusculares es el monumento del juego al régimen derrocado cuya doctrina sobrevive. Maliketh derrotó a la Reina militarmente; pero la Llama Negra siguió operativa, los apóstoles siguieron cazando, las técnicas deicidas siguieron transmitiéndose. La pregunta filosófica: ¿se puede derrotar plenamente una cosmología o solo se la marginaliza? La respuesta del juego: solo se la marginaliza. El régimen dorado tuvo que sellar la Muerte Predestinada precisamente porque sabía que la doctrina deicida persistiría. Cada apóstol Pieles de Dios todavía activo es declaración silenciosa: ',
        em('los dioses pueden ser asesinados, y el régimen no pudo refutar la lógica'),
        '.'
      ),
    ],
    confirmed: [
      'La Reina de Ojos Crepusculares fue Empyrean Numen anterior al régimen de Marika',
      'Tuvo la Runa de la Muerte como Gran Runa operativa antes que Maliketh la recuperara',
      'Otorgó la Llama Negra a los Pieles de Dios como instrumento deicida',
      'Maliketh la derrotó usando la propia Muerte Predestinada como arma',
      'Tras su derrota, la Runa de la Muerte fue cosida en el cuerpo de Maliketh',
      'Los Pieles de Dios sobrevivieron en clandestinidad y siguen operativos',
    ],
    inferred: [
      'Su régimen coexistió con el dragónico de Placidusax como cosmología paralela',
      'La Voluntad Mayor encargó específicamente a Maliketh la operación de derrocamiento',
      'Las Cuchillos Negros son facción-hermana que conservó tecnología derivada',
      'La era duró indeterminadamente pero fue cerrada militarmente, no por abandono divino',
    ],
    theories: [
      'La Reina puede no estar muerta plenamente — solo derrotada y sellada en estado liminal',
      'Su dios externo era distinto de la Voluntad Mayor — quizá entidad opuesta cosmológicamente',
      'Conoció a Marika personalmente antes de la guerra como Numen contemporánea',
      'Su retorno bajo condiciones específicas reactivaría plenamente la doctrina deicida',
    ],
    ambiguous: [
      'Identidad y forma actual de la Reina (¿muerta, sellada, dispersa?)',
      'Identidad de su dios externo',
      'Cuánto tiempo duró su régimen',
      'Si la doctrina deicida puede aplicarse contra Marika misma',
    ],
    relatedCharacters: ['gloam-eyed-queen', 'maliketh', 'marika'],
    relatedFactions: ['pieles-de-dios', 'cuchillos-negros'],
    relatedConcepts: ['black-flame', 'destined-death', 'rune-of-death', 'empyrean', 'numen'],
    relatedRegions: ['farum-azula'],
    relatedTimelineEvents: ['antes-orden-dorado', 'muerte-predestinada', 'gloam-eyed-queen-fall'],
  },

  'muerte-predestinada': {
    summary:
      'Marika ordena a Maliketh sellar la Runa de la Muerte dentro de su propio cuerpo-bestia, fundando la era inmortal del Orden Dorado. El acto fundacional es mutilación cosmológica deliberada: extraer la muerte verdadera del Anillo Elden para producir inmortalidad funcional. Todos los problemas del cosmos siguiente — Aquellos que Viven en la Muerte, la corrupción de Godwyn, la herida estructural de las Tierras Intermedias — rastrean directamente hasta este sello.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'Tras la derrota de la ',
        link('Reina de Ojos Crepusculares', 'character', 'gloam-eyed-queen'),
        ' a manos de ',
        link('Maliketh', 'character', 'maliketh'),
        ', la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ' fue extraída del régimen anterior. ',
        link('Marika', 'character', 'marika'),
        ', recién designada como vasija de la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ', tomó decisión cosmológica fundacional: ordenar a Maliketh sellar la Runa dentro de su propio cuerpo-bestia. La operación es excepcional — Maliketh no solo cumple función custodia, su cuerpo se vuelve contenedor cosmológico activo. Su lealtad absoluta a Marika es candado ritual.'
      ),
      h(2, 'Historia detallada'),
      p(
        'La operación cosmológica fue ritualmente compleja. Maliketh — ',
        link('Bestia Sombra', 'concept', 'shadow-bound-beast'),
        ' recién extraída del linaje ',
        link('Hombre-Bestia', 'faction', 'hombres-bestia'),
        ' — recibió la Runa de la Muerte y la cosió en su propio ser. Su naturaleza no-humana lo cualificaba precisamente: un humano dorado no podía ser custodio de aquello que el régimen había excluido. Su cuerpo se transformó en candado viviente. Desde ese momento la muerte real dejó de funcionar normalmente en las Tierras Intermedias: las almas de los seres muertos eran absorbidas por el Árbol Áureo para reciclaje, los cuerpos eran procesados ritualmente, pero la Muerte Predestinada como ley cosmológica genuina quedó en suspensión.'
      ),
      p(
        'La premisa cosmológica del sello: la inmortalidad funcional como fundamento del régimen dorado. Sin la Muerte como ley operativa, los seres de las Tierras Intermedias no morían verdaderamente — sus almas regresaban al ciclo del Árbol Áureo, sus cuerpos se procesaban como combustible cosmológico. La era dorada se construyó sobre esta paradoja: la inmortalidad ofrecida no era ausencia de muerte sino ',
        em('redirección'),
        ' de la muerte hacia formas que el régimen controlaba.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'La causa fue cálculo cosmológico directo de Marika: producir régimen estructuralmente distinto del anterior eliminando su autoridad central (la Muerte). Las consecuencias se desplegaron a lo largo de eras posteriores. ',
        link('Aquellos que Viven en la Muerte', 'concept', 'those-who-live-in-death'),
        ' eventualmente aparecen como manifestación material del sello fallido — la causa "muerte del alma" deja de producir el efecto "muerte del cuerpo". La corrupción de ',
        link('Godwyn', 'character', 'godwyn'),
        ' tras su asesinato parcial es paradigma exacto: alma muerta + cuerpo activo = monstruosidad estructural. La ',
        link('Deathroot', 'concept', 'deathroot'),
        ' fluye porque la descomposición de Godwyn no encuentra ciclo cosmológico que la procese. Cada anomalía de las Tierras Intermedias actuales rastrea hasta este sello.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'El sello de la Muerte Predestinada es el monumento del juego a la inseparabilidad de la muerte y la vida. Marika selló la Muerte para crear inmortalidad — y el resultado fue una existencia que no era ni vida ni muerte sino acumulación indefinida. La doctrina implícita del juego es que la muerte no es enemiga de la vida sino su condición de posibilidad. Cada cosmos viable la integra. El Tierras Intermedias enfermó precisamente porque eligió excluirla. La ',
        link('Era del Crepúsculo', 'ending', 'duskborn'),
        ' es el único final que repara la falla fundacional restaurando la Runa de la Muerte al Anillo Elden — todos los demás finales operan con la falla persistente.'
      ),
    ],
    confirmed: [
      'Marika ordenó a Maliketh sellar la Runa de la Muerte tras la derrota de la Reina de Ojos Crepusculares',
      'El sello fue cosido dentro del cuerpo-bestia de Maliketh',
      'Su lealtad absoluta a Marika es candado ritual del sello',
      'La inmortalidad funcional del Orden Dorado depende estructuralmente del sello permanente',
      'Cada anomalía cosmológica de las Tierras Intermedias actuales rastrea hasta este acto',
      'La Era del Crepúsculo es el único final que restaura la Runa al Anillo',
    ],
    inferred: [
      'La operación es mutilación cosmológica deliberada, no descuido',
      'La inmortalidad ofrecida es redirección de la muerte hacia formas controladas, no ausencia',
      'La corrupción de Godwyn es paradigma exacto del sello fallido',
      'Los Aquellos que Viven en la Muerte aparecen como manifestación material del fallo del sello',
    ],
    theories: [
      'Marika sabía desde el principio que el sello sería transitorio y eligió hacerlo de cualquier modo',
      'La Voluntad Mayor exigió el sello como condición de la designación de Marika',
      'Existen otros sellos cosmológicos que el régimen mantiene en reserva',
      'El sello es reversible si Maliketh muere completamente — y la Era del Crepúsculo confirma esto',
    ],
    ambiguous: [
      'Cuándo exactamente fue ejecutado (la era fundacional es difusa)',
      'Si Maliketh sufre conscientemente bajo el sello o solo lo soporta',
      'Si Marika consultó con otros agentes antes de la decisión',
      'Si la operación tenía precedente cosmológico en regímenes pre-Orden',
    ],
    relatedCharacters: ['marika', 'maliketh', 'gloam-eyed-queen', 'godwyn'],
    relatedFactions: ['orden-dorado', 'hombres-bestia'],
    relatedConcepts: ['destined-death', 'rune-of-death', 'voluntad-mayor', 'shadow-bound-beast', 'erdtree', 'deathroot'],
    relatedTimelineEvents: ['era-antigua', 'antes-orden-dorado', 'marika-godfrey'],
    relatedEndings: ['duskborn'],
  },

  'marika-godfrey': {
    summary:
      'Marika toma a Godfrey como Primer Señor Elden tras sellar la Muerte Predestinada. Juntos consolidan el Orden Dorado mediante guerra de conquista que somete a tribus pre-Orden, gigantes del fuego, civilizaciones rivales y pueblos disidentes. La unión es funcional: la diosa necesitaba consorte marcial; el guerrero exterior aceptó el contrato. Tuvieron al menos un hijo prominente, Godwyn, y posiblemente otros menos documentados. La era de la consolidación dura siglos hasta que ya no quedan enemigos por los que pelear.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'La unión entre ',
        link('Marika', 'character', 'marika'),
        ' y ',
        link('Godfrey', 'character', 'godfrey'),
        ' es contrato político-cosmológico que define el régimen del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' como autoridad operativa. Marika es vasija de la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' con poder cosmológico pero sin capacidad marcial directa. Godfrey es guerrero excepcional de las tierras exteriores cuya capacidad de combate es la mayor documentada en el régimen primitivo. El contrato: Godfrey conquista militarmente, Marika legitima cosmológicamente, juntos consolidan las Tierras Intermedias bajo régimen unificado.'
      ),
      h(2, 'Historia detallada'),
      p(
        'La operación de conquista duró siglos. Las campañas documentadas incluyen: 1) La guerra contra los ',
        link('Gigantes del Fuego', 'faction', 'fire-giants'),
        ' en las ',
        link('Mountaintops', 'region', 'mountaintops'),
        ', exterminio sistemático de un pueblo cuyo dios externo (el Fell God) era amenaza estructural al Árbol Áureo. 2) Subyugación de los descendientes del régimen dragónico — algunos ',
        link('Antiguos Dragones', 'faction', 'dragones-antiguos'),
        ' pactaron (',
        link('Fortissax', 'character', 'fortissax'),
        ' con Godwyn), otros fueron exterminados, otros se retiraron. 3) Encierro de los Nox subterráneos castigados por Astel siglos antes — el régimen dorado heredó la situación pero la endureció. 4) Conquista del reino lunar de ',
        link('Caria', 'faction', 'caria'),
        ' liderada después por Radagon. 5) Subyugación de tribus dispersas (Storm Hawk King de Limgrave, otras dinastías locales).'
      ),
      p(
        'Tuvieron descendencia. ',
        link('Godwyn', 'character', 'godwyn'),
        ' el de Ojos Dorados fue el primogénito documentado — heredero ejemplar del régimen. Algunas lecturas comunitarias proponen que tuvieron otros hijos menos prominentes posteriormente reabsorbidos en la genealogía oficial. La rama oficial reconoce solo a Godwyn como hijo de la primera unión; los demás hijos de Marika nacieron de su segunda unión con Radagon.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'La causa de la unión fue necesidad funcional: Marika requería brazo marcial; Godfrey buscaba propósito cosmológico. Las consecuencias estructurales fueron triples. Primera: el Orden Dorado se consolidó como régimen operativo dominante sobre las Tierras Intermedias. Segunda: cada conquista militar produjo enemigo estructural diferido — los gigantes exterminados generaron al último custodio que eventualmente quemaría el Árbol Áureo, los dragones subyugados conservaron memoria racial, los Nox encerrados conservaron proyecto cosmológico latente. Tercera: cuando ya no hubo enemigos, Godfrey perdió función. Marika lo despojó de la Gracia y lo exilió — los descendientes de sus seguidores serían los ',
        link('Tarnished', 'concept', 'tarnished'),
        '.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La unión Marika-Godfrey es el monumento del juego a la conquista como acto fundacional. Cada régimen cosmológico requiere derrocamiento militar de cosmologías rivales — la coexistencia pacífica de regímenes es estructuralmente imposible. La pregunta filosófica: ¿se puede fundar régimen sin guerra? La respuesta del juego es no. Marika necesitó a Godfrey precisamente porque la fundación cosmológica requiere violencia. Y cuando la violencia ya no era necesaria, ',
        em('Godfrey mismo se volvió obstáculo'),
        ' — el guerrero que ya no tiene guerra es excedente cosmológico. Su exilio posterior es lógica directa de su función fundacional: instrumento descartado tras ejecutar el plan.'
      ),
    ],
    confirmed: [
      'Marika tomó a Godfrey como Primer Señor Elden tras sellar la Muerte Predestinada',
      'La conquista militar duró siglos y consolidó el Orden Dorado como régimen dominante',
      'Las campañas incluyeron exterminio de Gigantes del Fuego, subyugación de dragones, conquista de Caria',
      'Godwyn fue su primogénito documentado como heredero ejemplar',
      'Cuando ya no hubo enemigos, Godfrey fue despojado de la Gracia y exiliado',
      'Sus descendientes seguidores se convirtieron en los primeros Tarnished',
    ],
    inferred: [
      'La unión fue contrato político-funcional, no romántico',
      'Cada conquista militar produjo enemigo estructural diferido',
      'Pueden haber existido otros hijos menos prominentes que la genealogía oficial reabsorbió',
      'El exilio fue cálculo deliberado de Marika antes de tomar a Radagon como segundo consorte',
    ],
    theories: [
      'Godfrey conoció su destino futuro como exiliado desde antes del contrato y aceptó',
      'Marika diseñó el exilio futuro de los Tarnished como instrumento diferido para reformar el cosmos',
      'La descendencia primera incluyó hijos no documentados que fueron eliminados ritualmente',
      'La selección específica de Godfrey procedía de visión profética de la Voluntad Mayor',
    ],
    ambiguous: [
      'Geografía exacta de las "tierras exteriores" de origen de Godfrey',
      'Cuántas eras duró la conquista militar',
      'Si Godfrey tenía descendencia previa al contrato con Marika',
      'Si conocían personalmente entre sí antes del contrato político',
    ],
    relatedCharacters: ['marika', 'godfrey', 'godwyn', 'fortissax', 'maliketh'],
    relatedFactions: ['orden-dorado', 'fire-giants', 'dragones-antiguos', 'caria', 'nox'],
    relatedRegions: ['leyndell', 'mountaintops', 'liurnia', 'limgrave'],
    relatedConcepts: ['golden-order', 'voluntad-mayor', 'tarnished', 'grace'],
    relatedTimelineEvents: ['muerte-predestinada', 'exilio-godfrey', 'guerra-gigantes-fuego'],
  },

  'hijos-marika-godfrey': {
    summary:
      'La descendencia de Marika incluye a Godwyn (de su unión con Godfrey), y posteriormente a Morgott y Mohg como gemelos Omens (de su unión con Radagon, que es ella misma). Godwyn nació amado y pleno como heredero ejemplar; sus medio-hermanos posteriores nacieron como Omens — manifestación de la sangre antigua del Crisol que persistía en el linaje real. El régimen los encarceló bajo Leyndell por la propia ley dorada que los engendró. Su existencia es contradicción viva del régimen.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        ' La descendencia oficial de ',
        link('Marika', 'character', 'marika'),
        ' nace en dos momentos cosmológicos distintos. La primera unión con ',
        link('Godfrey', 'character', 'godfrey'),
        ' produce a ',
        link('Godwyn', 'character', 'godwyn'),
        ' el de Ojos Dorados como heredero ejemplar del régimen. La segunda unión con ',
        link('Radagon', 'character', 'radagon'),
        ' (que es ella misma — revelación cosmológica clave) produce a ',
        link('Morgott', 'character', 'morgott'),
        ' y ',
        link('Mohg', 'character', 'mohg'),
        ' como gemelos ',
        link('Omens', 'faction', 'omens'),
        '. La asimetría es estructural: el primer hijo es público y celebrado, los gemelos son secretos y encarcelados.'
      ),
      h(2, 'Historia detallada'),
      p(
        'Godwyn nació con cuerpo humano canónico y capacidades excepcionales. Recibió educación marcial completa, alianzas diplomáticas con los ',
        link('Antiguos Dragones', 'faction', 'dragones-antiguos'),
        ' (',
        link('Fortissax', 'character', 'fortissax'),
        ' aceptó pacto fraternal con él), y posición de heredero presunto del régimen. Su crianza fue pública y orgullosa.'
      ),
      p(
        'Morgott y Mohg nacieron generaciones después como gemelos Omens. La sangre del ',
        link('Crisol', 'concept', 'crucible'),
        ' apareció en el linaje real a través de Radagon — específicamente porque Radagon comparte cuerpo con Marika, y la sangre Omen es manifestación residual de tradiciones cosmológicas que el régimen había declarado impuras. Los gemelos nacieron con cuernos, asimetrías corporales, fuerza física desproporcionada. La doctrina oficial del Orden Dorado clasificaba a los Omens como maldición — y los hijos del régimen mismo eran ejemplos cumbre de la maldición que el régimen perseguía.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'La causa cosmológica de los Omens-realeza es la persistencia del Crisol en el linaje a través de Radagon. La consecuencia política inmediata fue su encarcelamiento sistemático en el Subterranean Shunning-Grounds bajo ',
        link('Leyndell', 'region', 'leyndell'),
        '. El régimen no podía exterminarlos (eran hijos de la diosa) pero tampoco podía reconocerlos públicamente (la doctrina oficial los excluía). El compromiso cosmológico fue silencio: ningún heraldo oficial hablaba de ellos, su existencia era secreto institucional, los ',
        link('Verdugos Omen', 'faction', 'omenkillers'),
        ' oficiaron rituales correctivos sobre ellos durante su juventud. La asimetría entre Godwyn y los gemelos definió políticamente toda la siguiente era del régimen.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La descendencia de Marika es el monumento del juego a la inseparabilidad del cuerpo cosmológico y el cuerpo político. El régimen del Orden Dorado podía haber integrado al Crisol en su doctrina — pero eligió declararlo maldición. La consecuencia: los hijos del propio régimen se convirtieron en ejemplos de la maldición que el régimen perseguía. Cada Omen-realeza encarcelado bajo Leyndell es declaración silenciosa de que ',
        em('el cosmos no se deja excluir por decreto'),
        '. La asimetría entre Godwyn (público, amado) y los gemelos (secreto, encarcelado) es metonimia del régimen entero: lo que la doctrina excluye sigue existiendo, pero invisibilizado, ',
        em('y eventualmente la invisibilización falla'),
        ' — Mohg eventualmente operó como Lord of Blood activo, Morgott eventualmente defendió Leyndell con fidelidad obstinada del rechazado.'
      ),
    ],
    confirmed: [
      'Marika tuvo a Godwyn de su unión con Godfrey',
      'Tuvo a Morgott y Mohg de su unión con Radagon (que es ella misma)',
      'Godwyn nació como heredero ejemplar del régimen, públicamente amado',
      'Morgott y Mohg nacieron como gemelos Omens, encarcelados bajo Leyndell',
      'Los Verdugos Omen oficiaron rituales correctivos sobre ellos durante su juventud',
      'Ningún heraldo oficial del régimen hablaba de los gemelos',
    ],
    inferred: [
      'La sangre del Crisol apareció en el linaje real a través de Radagon',
      'El régimen no pudo exterminarlos por ser hijos de la diosa',
      'El compromiso cosmológico fue silencio institucional, no aceptación',
      'La asimetría entre Godwyn y los gemelos definió toda la siguiente era política',
    ],
    theories: [
      'Pueden haber existido otros hijos no documentados que el régimen eliminó',
      'Marika visitó secretamente a sus hijos encarcelados a lo largo de los siglos',
      'Mohg y Morgott conocían su parentesco con Marika desde la infancia',
      'La maldición Omen es transmitida específicamente por Radagon como aspecto materno',
    ],
    ambiguous: [
      'Si Godfrey conoció a Morgott y Mohg antes de su exilio',
      'Si Godwyn conocía la existencia de sus medio-hermanos encarcelados',
      'Cuándo exactamente nacieron los gemelos respecto a la primera unión',
      'Si tuvieron contacto con los demás demidióses (Radahn, Rykard) o estuvieron aislados',
    ],
    relatedCharacters: ['marika', 'godfrey', 'godwyn', 'morgott', 'mohg', 'radagon'],
    relatedFactions: ['orden-dorado', 'omens', 'omenkillers', 'golden-lineage'],
    relatedRegions: ['leyndell', 'subterranean-shunning-grounds', 'mohgwyn'],
    relatedConcepts: ['crucible', 'omen-curse', 'voluntad-mayor'],
    relatedTimelineEvents: ['marika-godfrey', 'radagon-rennala', 'morgott-mohg-imprisonment'],
  },

  'exilio-godfrey': {
    summary:
      'Cuando ya no quedaron enemigos dignos, Marika despojó a Godfrey de la Gracia y lo exilió junto con sus seguidores leales. La operación es cálculo cosmológico deliberado: el guerrero que ya no tiene guerra es excedente cosmológico que debe ser descartado antes de que el régimen tome a Radagon como segundo consorte. Una lágrima rodó por la mejilla del rey — no por el destierro sino por la falta de propósito. Sus descendientes serían los Tarnished, los exiliados que generaciones después regresarían como candidatos al trono.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'Tras la consolidación militar del régimen del Orden Dorado y la conquista de las Tierras Intermedias, la era de la guerra terminó. ',
        link('Godfrey', 'character', 'godfrey'),
        ' como Primer Señor Elden ya no tenía función operativa — había cumplido el rol para el que ',
        link('Marika', 'character', 'marika'),
        ' lo había tomado. La operación de descarte fue ritualmente exacta: Marika le retiró la ',
        link('Gracia', 'concept', 'grace'),
        ' (los puntos dorados luminosos en sus ojos se apagaron literalmente), lo despojó de autoridad institucional, y lo exilió a las tierras exteriores. Los seguidores leales de Godfrey aceptaron seguirlo al exilio. Su descendencia en regiones exteriores conservó memoria racial de las Tierras Intermedias pero sin ',
        link('Gracia', 'concept', 'grace'),
        ' visible — los primeros ',
        link('Tarnished', 'concept', 'tarnished'),
        '.'
      ),
      h(2, 'Historia detallada'),
      p(
        'La razón pública del exilio: ya no quedaban enemigos por los que pelear, su función estaba cumplida. La razón cosmológica es más oscura. Marika necesitaba descartar al Primer Señor Elden antes de poder tomar como segundo consorte a ',
        link('Radagon', 'character', 'radagon'),
        ' (que es ella misma — revelación cosmológica que Goldmask identificará siglos después). La fusión Marika-Radagon como segundo matrimonio requiere viudez cosmológica del primero. Godfrey no muere — pero deja de ser cosmológicamente activo, lo que ritualmente equivale a viudez para los propósitos del régimen.'
      ),
      p(
        'El relato canónico del momento del exilio incluye un detalle conmovedor: una lágrima rodó por la mejilla de Godfrey. La interpretación tradicional: lloró por la falta de propósito, no por el destierro mismo. Para un guerrero cuya identidad estaba estructurada por la conquista, la era sin guerra es la era sin sentido. La pérdida no es de territorio sino de ',
        em('razón de existir'),
        '. Sus seguidores leales — los Caballeros Mancillados originales — lo siguieron al exilio cargando la misma pérdida.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'La causa fue cálculo cosmológico de Marika: ejecutar viudez ritual del Primer Señor Elden antes de la fusión-segundo-matrimonio con Radagon-aspecto. Las consecuencias se desplegaron a lo largo de eras posteriores. Primera: los Tarnished vivieron generaciones lejos de las Tierras Intermedias como personas-no-personas, conservando memoria racial pero sin Gracia. Segunda: tras la rotura del Anillo Elden y la retirada parcial de la Voluntad Mayor, el régimen necesitó urgentemente Señor Elden nuevo — los demidióses estaban enfrentados entre sí, ningún demidiós podía coronarse sin reproducir las grietas. Los Tarnished se convirtieron en candidatos exteriores ideales. Tercera: el ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' restituyó parcialmente su Gracia a descendientes específicos — comenzaron a recibir visiones de la Gracia Errante guiándolos a las Tierras Intermedias.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'El exilio de Godfrey es el monumento del juego al instrumento descartado. Sirvió fielmente; cumplió su función; fue desechado cuando ya no era necesario. La pregunta filosófica: ¿es la lealtad recompensada cosmológicamente o solo instrumentalizada? Marika responde con cálculo frío: instrumentalizada. Su lágrima es admisión de la verdad — el guerrero amado por su servicio descubre que el servicio era el único valor que tenía a ojos del régimen. La pregunta paralela del juego: cuando los Tarnished retornan eras después, ¿están siendo nuevamente instrumentalizados o tienen genuinamente la posibilidad de elegir el destino del cosmos? El juego no decide — cada final del juego responde distinto.'
      ),
    ],
    confirmed: [
      'Marika despojó a Godfrey de la Gracia tras la consolidación militar del régimen',
      'Lo exilió con sus seguidores leales a las tierras exteriores',
      'Una lágrima rodó por su mejilla en el momento del exilio — interpretación tradicional: por falta de propósito',
      'Sus descendientes seguidores se convirtieron en los primeros Tarnished',
      'Tras la fractura del Anillo, el Árbol Áureo restituyó parcialmente la Gracia a los Tarnished',
      'Los Tarnished retornados son candidatos al trono Elden post-fractura',
    ],
    inferred: [
      'La operación fue cálculo cosmológico deliberado, no descarte casual',
      'Requería viudez ritual del Primer Señor antes de la fusión Marika-Radagon',
      'Godfrey aceptó el exilio con dignidad pero conservó orgullo guerrero residual',
      'Los seguidores fueron escogidos específicamente — no todos los aliados de Godfrey siguieron al exilio',
    ],
    theories: [
      'Marika diseñó el exilio sabiendo que los Tarnished retornarían eras después como instrumento de reforma cosmológica',
      'Godfrey conocía su destino futuro como exiliado desde antes de aceptar el contrato',
      'Algunos Tarnished tienen sangre Numen latente heredada de Godfrey y sus aliados',
      'El número total de Tarnished retornados es limitado — una cohorte específica de candidatos cosmológicamente preseleccionados',
    ],
    ambiguous: [
      'Geografía exacta de las tierras exteriores donde Godfrey vivió exiliado',
      'Si Godfrey sabía del plan futuro de los Tarnished retornantes',
      'Cuántas generaciones pasaron entre el exilio original y el retorno',
      'Si la lágrima fue genuina o ritualizada',
    ],
    relatedCharacters: ['godfrey', 'marika', 'melina'],
    relatedFactions: ['orden-dorado'],
    relatedConcepts: ['tarnished', 'grace', 'voluntad-mayor', 'erdtree'],
    relatedRegions: ['leyndell'],
    relatedTimelineEvents: ['marika-godfrey', 'radagon-rennala', 'viaje-mancillado'],
    relatedEndings: ['fracture'],
  },

  'radagon-rennala': {
    summary:
      'Radagon — operando como general independiente del régimen — lidera la guerra de invasión contra Liurnia. La reina Rennala propone matrimonio como condición de paz. Radagon acepta y se convierte en consorte real de Caria. La unión es próspera durante eras: tres hijos demidióses (Ranni, Radahn, Rykard), magia compartida entre la tradición Carian Lunar y el Orden Dorado. Eventualmente Marika llama a Radagon de regreso a Leyndell. La fusión cosmológica (Radagon es Marika) significa que el llamado es autoconvocatoria — y Caria queda traumatizada por el abandono.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'La unión entre ',
        link('Radagon', 'character', 'radagon'),
        ' y ',
        link('Rennala', 'character', 'rennala'),
        ' es uno de los momentos cosmológicamente más densos de las Tierras Intermedias pre-fractura. Inicia como guerra de conquista — Radagon lidera la invasión del Orden Dorado contra el reino lunar de Liurnia. Rennala, reina-Gran Maestra de la Academia de ',
        link('Raya Lucaria', 'region', 'raya-lucaria'),
        ', propone matrimonio como condición de paz para evitar la destrucción de Liurnia. Radagon acepta. La unión transforma la dinámica: deja de ser guerra y se convierte en alianza dinástica. Caria pasa a ser dinastía mestiza dentro del régimen del Orden Dorado.'
      ),
      h(2, 'Historia detallada'),
      p(
        'La unión fue inicialmente próspera. Tres hijos demidióses nacieron: ',
        link('Ranni', 'character', 'ranni'),
        ' (futura Empyrean rebelde), ',
        link('Radahn', 'character', 'radahn'),
        ' (futuro general supremo), ',
        link('Rykard', 'character', 'rykard'),
        ' (futuro Lord of Blasphemy). La magia se compartió entre tradiciones: la ',
        link('Luna Llena', 'concept', 'full-moon'),
        ' tradicional Caria que Rennala dominaba se enseñó en la Academia junto con incantaciones del Orden Dorado. Los hijos crecieron en cosmología híbrida — sangre lunar materna combinada con sangre dorada paterna (que es realmente sangre divina marikiana).'
      ),
      p(
        'El abandono llegó eras después. ',
        link('Marika', 'character', 'marika'),
        ' llamó a Radagon de regreso a ',
        link('Leyndell', 'region', 'leyndell'),
        '. Radagon dejó a Rennala sin explicación pública. La revelación cosmológica clave — ',
        em('Radagon es Marika'),
        ' — significa que el abandono fue autoconvocatoria: Marika llamando a su otra mitad de regreso a sí misma. Rennala perdió la razón. Sus estudiantes la quemaron en espirales de dolor. Los estudiantes supervivientes la contuvieron con el Huevo Ambarino. La Academia se replegó. La regencia familiar se fragmentó: Iji y Seluvis operaron como tutores parciales de Ranni adulta.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'La causa de la unión inicial fue diplomacia bélica — Rennala salvó a Liurnia mediante matrimonio. La causa cosmológica del abandono fue la fusión Marika-Radagon como acto de auto-reabsorción. Las consecuencias estructurales fueron triples. Primera: cada hijo encarnó respuesta opuesta al trauma fundacional. Ranni la rebelión cosmológica (rechazó el rol Empyrean, ejecutó la Noche de los Cuchillos Negros, instauró la Era de las Estrellas en su final). Radahn la fidelidad obstinada (lealtad al régimen pese al abandono paterno, eventualmente vencido por la Podredumbre de Malenia). Rykard la blasfemia activa (rechazó el régimen, pactó con la entidad serpentina pre-Orden, fue devorado). Segunda: la Casa Caria conservó tradición lunar pero perdió coherencia política — sus integrantes restantes operan en facciones marginales o como conspiradores autónomos. Tercera: el régimen del Orden Dorado integró formalmente a Liurnia pero nunca pudo plenamente controlarla.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La unión Radagon-Rennala es el monumento del juego a cómo el linaje mestizo produce inestabilidad estructural. Cada uno de los tres hijos heredó porciones distintas del trauma: rebelión cosmológica, lealtad obstinada, blasfemia activa. Ninguno pudo simplemente ',
        em('continuar'),
        ' como demidiós dorado normal. Su existencia plantea la pregunta más fina del juego sobre identidad: ¿se hereda el conflicto entre cosmologías como sangre, o se construye como respuesta? Caria responde que ambas cosas son la misma — y que su producto es el plan más radical de rebelión documentado en las Tierras Intermedias (la Era de las Estrellas de Ranni). El abandono cosmológico del padre que es también la madre divina produce hijos cuyas respuestas opuestas son síntomas del mismo conflicto fundacional.'
      ),
    ],
    confirmed: [
      'Radagon lideró la guerra del Orden Dorado contra Liurnia',
      'Rennala propuso matrimonio como condición de paz',
      'Tuvieron tres hijos demidióses: Ranni, Radahn y Rykard',
      'La magia Carian Lunar se compartió con el Orden Dorado durante la unión',
      'Marika llamó eventualmente a Radagon de regreso a Leyndell',
      'Rennala perdió la razón tras el abandono y fue contenida con el Huevo Ambarino',
    ],
    inferred: [
      'El abandono fue autoconvocatoria cosmológica de Marika a sí misma',
      'Cada hijo encarnó respuesta opuesta al mismo trauma fundacional',
      'La Casa Caria conservó tradición lunar pero perdió coherencia política',
      'El régimen integró formalmente a Liurnia pero nunca pudo controlarla plenamente',
    ],
    theories: [
      'Rennala conocía secretamente que Radagon era Marika antes del matrimonio',
      'Radagon retiene afecto residual hacia Rennala incluso tras la reabsorción',
      'Los hijos heredaron capacidades específicas según el momento cosmológico de su nacimiento',
      'Iji conoció a Marika antes del exterminio de Gigantes y se sumó a Caria estratégicamente',
    ],
    ambiguous: [
      'Cuándo exactamente Radagon abandonó a Rennala',
      'Si los hijos conocían a su padre como Radagon o como Marika',
      'Si Rennala podría recuperar capacidad funcional bajo cosmología distinta',
      'Cuántos eras duró la unión antes del abandono',
    ],
    relatedCharacters: ['radagon', 'rennala', 'ranni', 'radahn', 'rykard', 'marika', 'iji', 'seluvis'],
    relatedFactions: ['caria', 'raya-lucaria', 'orden-dorado'],
    relatedRegions: ['liurnia', 'raya-lucaria', 'caria-manor'],
    relatedConcepts: ['full-moon', 'dark-moon', 'empyrean', 'voluntad-mayor'],
    relatedTimelineEvents: ['marika-godfrey', 'radagon-es-marika', 'rennala-quiebre'],
  },

  'radagon-es-marika': {
    summary:
      'El secreto cosmológico mejor guardado de las Tierras Intermedias: Radagon y Marika comparten cuerpo. La fusión es ontológica — dos voluntades en un mismo ser, dos consortes consecutivos del mismo cuerpo, una sola vasija humana del Anillo Elden con dos aspectos irreconciliables. La revelación es identificada filosóficamente por Goldmask como contradicción central del Orden Dorado y produce la Era del Orden mediante la Ley de la Regresión. La frase "Radagon es Marika" no se enuncia oficialmente pero cualquier observador atento puede deducirla.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'La fusión Radagon-Marika no es evento puntual sino condición ontológica permanente. ',
        link('Radagon', 'character', 'radagon'),
        ' ',
        em('es'),
        ' ',
        link('Marika', 'character', 'marika'),
        '. La fusión es física (un cuerpo, dos manifestaciones), cosmológica (vasija humana del Anillo Elden con dos aspectos), y temporal (los dos consortes consecutivos del régimen son el mismo ser auto-convocado). La revelación es secreto institucional cuidadosamente protegido — el régimen oficial nunca la enuncia, y solo ',
        link('Goldmask', 'character', 'goldmask'),
        ' alcanza la formulación filosófica explícita siglos después como núcleo de su proyecto fundamentalista.'
      ),
      h(2, 'Historia detallada'),
      p(
        'Cuándo exactamente ocurrió la fusión es ambiguo. Las hipótesis comunitarias incluyen: 1) La fusión es congénita — Marika y Radagon son aspectos del mismo ser desde el inicio, y la "guerra de Liurnia" fue Marika operando bajo identidad masculina secundaria. 2) La fusión ocurrió cuando Radagon abandonó a Rennala y regresó a Leyndell — en ese momento se reabsorbió en Marika tras eras de existencia paralela. 3) La fusión fue impuesta por la Voluntad Mayor como castigo o consolidación cosmológica. Los items del juego no permiten elegir definitivamente entre las hipótesis.'
      ),
      p(
        'Lo que es indudable: las dos voluntades coexisten irreconciliables dentro del mismo ser. Marika representa el cambio (rompió el Anillo Elden por su mano tras la muerte de Godwyn). Radagon representa la conservación (dedicó su existencia post-fractura a intentar reparar el Anillo). Ninguno gana; ningún martillazo de Marika es suficiente para destruir plenamente, ningún esfuerzo reformista de Radagon es suficiente para restaurar plenamente. El régimen mismo opera bajo esta paradoja sostenida — sus instituciones reflejan la contradicción interna de su vasija central.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'La causa cosmológica de la fusión es opaca. Las consecuencias estructurales son la falla central del Orden Dorado identificada por la ',
        link('Ley de la Regresión', 'concept', 'law-of-regression'),
        ': si el aspecto del cambio (Marika) y el aspecto de la conservación (Radagon) son el mismo ser, el cosmos contiene contradicción interna estructural irreducible. Cada institución del régimen hereda la contradicción: las leyes son ambivalentes, las doctrinas son contradictorias, los rituales son simultáneamente afirmativos y reformistas. ',
        link('Goldmask', 'character', 'goldmask'),
        ' identifica la falla y propone correcciones mediante la ',
        link('Era del Orden', 'ending', 'order'),
        ' — reducir la fusión a sus términos más simples eliminando la contradicción. La operación produce cosmos perfectamente coherente pero frío y geométrico, sin espacio para lo no encajable.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La fusión Radagon-Marika es el monumento del juego a la contradicción interna como condición ontológica. La pregunta filosófica más profunda del juego: ¿puede un cosmos contener su propia contradicción sin colapsar? La respuesta del régimen del Orden Dorado fue sostenerla durante eras mediante institución, ritual, silencio y secretos. Eventualmente la contradicción colapsa cuando Goldmask la formula explícitamente. La pregunta paralela: ¿es preferible un cosmos contradictorio o uno coherente sin contradicción? El juego no decide. La Era del Orden corrige la contradicción a costa de eliminar individualidad humana imperfecta. Otros finales preservan la contradicción al costo de mantener la grieta cosmológica abierta. Cada Tarnished elige cuál preferir.'
      ),
    ],
    confirmed: [
      'Radagon y Marika comparten cuerpo — son aspectos del mismo ser',
      'Las dos voluntades coexisten irreconciliables dentro del mismo ser',
      'Marika representa el cambio (rompió el Anillo); Radagon representa la conservación (intentó repararlo)',
      'La revelación es secreto institucional que el régimen nunca enuncia oficialmente',
      'Goldmask identifica la fusión como contradicción central del Orden Dorado',
      'La Era del Orden corrige la contradicción mediante la Ley de la Regresión',
    ],
    inferred: [
      'La revelación es deducible por cualquier observador atento que examine los items del juego',
      'Cada institución del régimen hereda la contradicción interna de su vasija central',
      'La operación de corrección produce cosmos coherente pero frío y geométrico',
      'Otros finales preservan la contradicción al costo de mantener la grieta abierta',
    ],
    theories: [
      'La fusión es congénita — Marika y Radagon son aspectos del mismo ser desde el inicio',
      'La fusión ocurrió cuando Radagon abandonó a Rennala y regresó a Leyndell',
      'La fusión fue impuesta por la Voluntad Mayor como castigo o consolidación cosmológica',
      'Marika diseñó la fusión deliberadamente como instrumento diferido contra el régimen futuro',
    ],
    ambiguous: [
      'Cuándo exactamente ocurrió la fusión',
      'Si fue voluntaria, impuesta o congénita',
      'Si Marika consciente puede comunicarse con Radagon consciente dentro del mismo ser',
      'Si la fusión es reversible bajo cosmología distinta',
    ],
    relatedCharacters: ['marika', 'radagon', 'goldmask', 'corhyn'],
    relatedFactions: ['orden-dorado', 'fundamentalistas'],
    relatedConcepts: ['elden-ring', 'golden-order', 'law-of-regression', 'voluntad-mayor'],
    relatedRegions: ['leyndell'],
    relatedTimelineEvents: ['marika-godfrey', 'radagon-rennala', 'la-fractura'],
    relatedEndings: ['order'],
  },

  'miquella-malenia': {
    summary:
      'Marika y Radagon engendran a los Empyreans gemelos: Miquella eternamente niño (no puede madurar), Malenia infectada de Podredumbre Escarlata desde el nacimiento (no puede dejar de morir). Ambos cargan dios externo en su nacimiento — manifestaciones cosmológicas paralelas. Sus maldiciones son simétricamente inversas. Miquella desarrolla el Oro sin Aleación como cura; Malenia es su escudo y primer paciente. Juntos construyen el Haligtree como cosmología alternativa al régimen del Orden Dorado.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'Los gemelos Empyreans nacen de la unión entre ',
        link('Marika', 'character', 'marika'),
        ' y ',
        link('Radagon', 'character', 'radagon'),
        ' (que es ella misma — fusión cosmológica). Su nacimiento es momento crítico del régimen dorado: por primera vez en eras, dos Empyreans nacen simultáneamente. La operación cosmológica es excepcional — los Empyreans son rarísimos, dos de la misma generación es estructuralmente improbable. Sus maldiciones simétricamente inversas sugieren intervención cosmológica deliberada en lugar de accidente genético.'
      ),
      h(2, 'Historia detallada'),
      p(
        link('Miquella', 'character', 'miquella'),
        ' nace con maldición de juventud eterna — no puede madurar físicamente. Su mente cosmológica se desarrolla normalmente, su sabiduría avanza, su capacidad mágica florece. Pero su cuerpo permanece niño. Es Empyrean designado por la Voluntad Mayor con poder cosmológico latente que solo se activaría con madurez física. La maldición lo deja en suspensión cosmológica permanente.'
      ),
      p(
        link('Malenia', 'character', 'malenia'),
        ' nace infectada con ',
        link('Podredumbre Escarlata', 'concept', 'scarlet-rot'),
        ' como condición ontológica. Su cuerpo es vasija humana del dios externo del decaimiento. Cada momento de su vida es coexistencia con la enfermedad. Su capacidad marcial es excepcional — la mejor de las Tierras Intermedias documentada — pero cada combate intenso amenaza con desencadenar la Floración. Su maldición la deja en suspensión simétricamente inversa: donde Miquella no puede crecer, Malenia no puede curarse.'
      ),
      h(2, 'El proyecto del Haligtree'),
      p(
        'La respuesta cosmológica de los gemelos fue colaborativa. Miquella pasó eras desarrollando el ',
        link('Oro sin Aleación', 'concept', 'unalloyed-gold'),
        ' — metalurgia teológica capaz de expulsar dioses externos del cuerpo de huéspedes. Malenia fue su escudo militar y primer paciente experimental. Juntos plantaron y cultivaron el ',
        link('Haligtree', 'concept', 'haligtree'),
        ' como árbol cosmológico alternativo al ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        '. Bajo sus raíces construyeron ',
        link('Elphael', 'region', 'elphael'),
        ' como capital de la única utopía documentada de las Tierras Intermedias: refugio para Albinaurics, Misbegotten y excluidos del Orden Dorado.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'La causa cosmológica de las maldiciones gemelas es ambigua. Las hipótesis comunitarias incluyen: 1) La Voluntad Mayor las impuso para impedir que cualquiera de los gemelos sucediera plenamente a Marika como vasija central. 2) Son consecuencia de la fusión Marika-Radagon — la contradicción interna del padre se manifiesta como maldiciones simétricas en los hijos. 3) Son intervención de dioses externos rivales (Madre Informe, dios del decaimiento) que reclamaron porciones de los Empyreans recién nacidos. Las consecuencias estructurales fueron tres: el régimen oficial nunca pudo activar plenamente a Miquella como sucesor de Marika; la Podredumbre Escarlata se volvió amenaza cosmológica recurrente de las Tierras Intermedias; el proyecto del Haligtree existió como única utopía pero estructuralmente vulnerable.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Los gemelos malditos son el monumento del juego a la maldición cosmológica como condición de partida. Otros personajes adquieren maldiciones por elección (Mohg pacta con la Madre Informe), accidente (Vyke contacta la Llama Frenética), o consecuencia (Godwyn es asesinado parcialmente). Miquella y Malenia nacieron malditos. Su existencia plantea la pregunta más cruda sobre justicia cosmológica: ¿es justo nacer ya condenado? La respuesta del juego: no, pero el cosmos no opera por justicia. Lo que pueden hacer los maldicios es ',
        em('responder a la maldición'),
        ' — y la respuesta de los gemelos (Oro sin Aleación + Haligtree + utopía para excluidos) es uno de los proyectos más éticamente nobles de las Tierras Intermedias. Su tragedia es que ambos fueron interrumpidos antes de culminarlo.'
      ),
    ],
    confirmed: [
      'Miquella nace con maldición de juventud eterna, no puede madurar físicamente',
      'Malenia nace infectada con Podredumbre Escarlata como condición ontológica',
      'Ambos son Empyreans designados por la Voluntad Mayor',
      'Miquella desarrolla el Oro sin Aleación como contrahechizo a dioses externos',
      'Malenia es escudo militar y primera paciente experimental del proyecto',
      'Juntos plantaron y cultivaron el Haligtree como cosmología alternativa al Árbol Áureo',
    ],
    inferred: [
      'Sus maldiciones simétricamente inversas sugieren intervención cosmológica deliberada',
      'El Haligtree es la única utopía documentada de las Tierras Intermedias',
      'Su proyecto fue interrumpido antes de culminar plenamente',
      'Sus maldiciones impidieron que cualquiera sucediera a Marika como vasija central',
    ],
    theories: [
      'La Voluntad Mayor impuso las maldiciones para impedir la sucesión',
      'Son consecuencia de la fusión Marika-Radagon manifestándose en los hijos',
      'Son intervención de dioses externos rivales reclamando porciones de los Empyreans recién nacidos',
      'Si Miquella despertara y Malenia floreciera plenamente, podrían reformar el cosmos juntos',
    ],
    ambiguous: [
      'Causa cosmológica exacta de las maldiciones',
      'Si los gemelos pueden comunicarse cosmológicamente entre sí',
      'Cuándo exactamente nacieron respecto a otros eventos del régimen',
      'Si las maldiciones son reversibles bajo cosmología distinta',
    ],
    relatedCharacters: ['miquella', 'malenia', 'marika', 'radagon', 'mohg', 'millicent'],
    relatedFactions: ['haligtree', 'cleanrot-knights', 'kindred-of-rot'],
    relatedConcepts: ['empyrean', 'scarlet-rot', 'unalloyed-gold', 'haligtree', 'dioses-exteriores'],
    relatedRegions: ['haligtree', 'elphael', 'caelid'],
    relatedTimelineEvents: ['unalloyed-gold-haligtree', 'aeonia-bloom', 'mohg-toma-miquella'],
  },

  'empyreans-fingers-shadows': {
    summary:
      'Los Empyreans del ciclo actual — Ranni, Malenia, Miquella — son designados por la Voluntad Mayor a través de los Dos Dedos como candidatos potenciales a vasija divina futura. Cada uno recibe una Bestia Sombra como guardián cosmológico personal: Maliketh sirve a Marika; Blaidd es construido para Ranni siguiendo la fórmula original. La designación es ontológicamente vinculante — produce alteración cosmológica del ser. Pero ningún Empyreans del ciclo actual culmina el rol: cada uno responde distinto al destino impuesto.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'La designación Empyrean es operación cosmológica ritual de la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' a través de sus mensajeros físicos, los ',
        link('Dos Dedos', 'faction', 'dos-dedos'),
        '. Los criterios documentados: descendencia de la vasija central actual, sangre ',
        link('Numen', 'concept', 'numen'),
        ' o equivalente cosmológico, capacidad ritual específica. ',
        link('Marika', 'character', 'marika'),
        ' fue ',
        link('Empyrean', 'concept', 'empyrean'),
        ' del ciclo anterior — ahora es vasija central activa. Los Empyreans designados del ciclo actual son ',
        link('Ranni', 'character', 'ranni'),
        ', ',
        link('Malenia', 'character', 'malenia'),
        ' y ',
        link('Miquella', 'character', 'miquella'),
        '. La ',
        link('Reina de Ojos Crepusculares', 'character', 'gloam-eyed-queen'),
        ' fue Empyrean del ciclo previo a Marika.'
      ),
      h(2, 'Historia detallada'),
      p(
        'Cada Empyrean recibe una ',
        link('Bestia Sombra', 'concept', 'shadow-bound-beast'),
        ' como guardián cosmológico personal cuya existencia está estructuralmente entrelazada. ',
        link('Maliketh', 'character', 'maliketh'),
        ' es la Bestia Sombra de Marika — extraído del linaje ',
        link('Hombre-Bestia', 'faction', 'hombres-bestia'),
        ' al fundar el Orden Dorado. ',
        link('Blaidd', 'character', 'blaidd'),
        ' fue construido siglos después siguiendo la fórmula original como Bestia Sombra de Ranni — biología Hombre-Bestia combinada con sangre Caria, magia ritual de Raya Lucaria, supervisión técnica del propio Maliketh. Las Bestias Sombra de Malenia y Miquella no se documentan explícitamente en items del juego — pueden no existir o haber sido construidas pero no nombradas.'
      ),
      p(
        'La función dual de la Bestia: protege al Empyrean y simultáneamente lo encadena al rol cosmológico. Cuando Ranni traicionó el rol Empyrean (transfiriendo su alma a la muñeca para escapar al contrato), el vínculo con Blaidd se rompió y él cayó en locura progresiva. Es la prueba operativa de que la designación Empyrean no es honorífica — es ontológica, produce alteración cosmológica del ser, y romperla rompe a la Bestia Sombra correspondiente.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'La causa de la designación es necesidad estructural del régimen: la Voluntad Mayor requiere candidatos a sucesión potencial. Las consecuencias se desplegaron como respuestas opuestas al rol. ',
        link('Ranni', 'character', 'ranni'),
        ' rechazó con violencia ontológica — usó las dagas Cuchillo Negro para asesinar específicamente su cuerpo Empyrean, transfirió su alma a una muñeca de porcelana, mantuvo identidad fuera del rol designado. ',
        link('Malenia', 'character', 'malenia'),
        ' es Empyrean infectada de podredumbre desde el nacimiento — el dios externo del decaimiento la convirtió en vasija incumplible, no puede culminar el rol porque el cuerpo está estructuralmente comprometido. ',
        link('Miquella', 'character', 'miquella'),
        ' es Empyrean atrapado en juventud eterna — sus poderes despertarían con madurez física pero su capullo dorado en el Haligtree lo mantiene en suspensión. Ningún Empyrean del ciclo actual culmina el rol como Marika lo hizo.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La designación Empyrean es el monumento del juego a la condición cosmológica como prisión. Ser Empyrean no es solo privilegio — es destino impuesto que altera al ser. La pregunta filosófica: ¿es deseable cumplir el destino cosmológico designado? Cada Empyrean responde distinto — Ranni con rechazo ontológico, Malenia con integración trágica de la maldición, Miquella con suspensión hasta condiciones más favorables. La ',
        link('Era de las Estrellas', 'ending', 'age-of-stars'),
        ' de Ranni argumenta que la libertad fría supera al rol asignado. Otras cosmologías argumentan distinto. Lo cierto es que la designación produce vínculo cosmológico real (las Bestias Sombra son testimonio operativo) — y romperlo tiene consecuencias.'
      ),
    ],
    confirmed: [
      'La Voluntad Mayor designa Empyreans a través de los Dos Dedos',
      'Los Empyreans del ciclo actual son Ranni, Malenia y Miquella',
      'Marika fue Empyrean del ciclo anterior, ahora es vasija central activa',
      'Cada Empyrean recibe una Bestia Sombra como guardián cosmológico personal',
      'Maliketh es Bestia Sombra de Marika; Blaidd fue construido para Ranni',
      'La designación es ontológica — produce alteración cosmológica del ser',
    ],
    inferred: [
      'Los criterios incluyen descendencia, sangre Numen y selección ritual de los Dedos',
      'Romper el rol Empyrean rompe a la Bestia Sombra correspondiente',
      'Ningún Empyrean del ciclo actual culmina el rol como Marika lo hizo',
      'Las Bestias Sombra de Malenia y Miquella pueden existir pero no se documentan explícitamente',
    ],
    theories: [
      'Existen Empyreans no documentados en regiones marginales',
      'Melina es Empyrean no nacida o aspecto incompleto de Marika',
      'La Voluntad Mayor selecciona múltiples candidatos para asegurar al menos una sucesión',
      'Bajo cosmología distinta, los Tarnished podrían adquirir condición cuasi-Empyrean',
    ],
    ambiguous: [
      'Si Malenia y Miquella tienen Bestias Sombra construidas',
      'Cómo se realiza exactamente el ritual de designación',
      'Si la condición Empyrean es transferible o solo intrínseca',
      'Cuántos Empyreans existieron en eras anteriores',
    ],
    relatedCharacters: ['ranni', 'malenia', 'miquella', 'blaidd', 'maliketh', 'marika', 'gloam-eyed-queen', 'melina'],
    relatedFactions: ['dos-dedos', 'orden-dorado', 'finger-readers', 'hombres-bestia'],
    relatedConcepts: ['empyrean', 'shadow-bound-beast', 'voluntad-mayor', 'numen'],
    relatedTimelineEvents: ['miquella-malenia', 'blaidd-construction', 'ranni-noche-cuchillos'],
  },

  'ranni-noche-cuchillos': {
    summary:
      'La conjura cosmológica más ambiciosa documentada de las Tierras Intermedias: Ranni planea durante siglos, roba fragmento de la Runa de la Muerte del cuerpo de Maliketh, forja las dagas Cuchillo Negro mediante las asesinas Numen, y ejecuta asesinato simultáneo de su propio cuerpo Empyrean y del de su medio-hermano Godwyn. La operación produce dos muertes incompletas (alma de Godwyn / cuerpo de Ranni). El daño colateral fue inmenso: la pena de Marika por Godwyn detonó la rotura del Anillo Elden — la fractura que abre la era actual.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'La Noche de los Cuchillos Negros es operación cosmológica conspiratoria orquestada por ',
        link('Ranni', 'character', 'ranni'),
        ' contra el régimen del Orden Dorado. Su objetivo personal: liberarse del rol ',
        link('Empyrean', 'concept', 'empyrean'),
        ' designado por la Voluntad Mayor mediante asesinato cosmológico de su propio cuerpo. Su objetivo cosmológico: ejecutar acto que el régimen no podría revertir, generando consecuencias que abrirían posibilidad de cosmología post-Voluntad Mayor en eras futuras.'
      ),
      h(2, 'Historia detallada: la preparación'),
      p(
        'La preparación duró siglos. Los pasos documentados: 1) Robar fragmento de la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ' del cuerpo de ',
        link('Maliketh', 'character', 'maliketh'),
        '. La operación es excepcional — Maliketh es guardián cosmológico de rango supremo, su cuerpo no se viola fácilmente. La hipótesis comunitaria más aceptada: la operación requirió cooperación interna del régimen (algún clérigo desafecto, posible asistencia de las ',
        link('Cuchillos Negros', 'faction', 'cuchillos-negros'),
        ' como facción-hermana). 2) Forjar las dagas Cuchillo Negro mediante las asesinas Numen — todas mujeres del pueblo Numen, el mismo pueblo de Marika. La coincidencia étnica con la diosa que combaten es uno de los detalles más densos del lore. 3) Coordinar el momento exacto del asesinato simultáneo.'
      ),
      h(2, 'Historia detallada: la ejecución'),
      p(
        'La ejecución fue simultánea y ritualmente exacta. Cada daga Cuchillo Negro puede matar ',
        em('media muerte'),
        ' — alma o cuerpo, no ambos — porque la mecha de Runa de la Muerte robada era limitada. La operación aplicó esto deliberadamente: las asesinas apuñalaron el alma de ',
        link('Godwyn', 'character', 'godwyn'),
        ' en su lecho (alma muerta, cuerpo sigue funcionando por sello de la Muerte Predestinada). Ranni misma apuñaló su cuerpo Empyrean (cuerpo muerto, alma sigue viviendo). La operación fue éticamente compleja: Godwyn era daño colateral inevitable, no objetivo personal de Ranni. Su asesinato parcial era condición cosmológica necesaria — el sufrimiento de Marika por su primogénito amado tenía que ser suficiente para detonar la rotura del Anillo Elden.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'La causa fue cálculo cosmológico de Ranni: ejecutar acto irreversible que el régimen no pudiera revertir. Las consecuencias se desplegaron en cascada inmediata. Primera: Ranni transfirió su alma a una muñeca de porcelana antes del momento crítico — perdió cuerpo Empyrean pero conservó identidad operativa, libre del contrato divino. Segunda: Godwyn quedó como ',
        link('Príncipe de la Muerte', 'character', 'godwyn'),
        ' — cuerpo sin alma activo por la Deathroot, padre estructural de ',
        link('Aquellos que Viven en la Muerte', 'concept', 'those-who-live-in-death'),
        '. Tercera: ',
        link('Fortissax', 'character', 'fortissax'),
        ' entró al sueño moribundo de Godwyn para protegerlo, quedando atrapado en bucle eterno. Cuarta: la pena de ',
        link('Marika', 'character', 'marika'),
        ' por Godwyn detonó la rotura del ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        ' — ',
        link('la fractura', 'timeline', 'la-fractura'),
        ' que abre la era actual de las Tierras Intermedias.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La Noche de los Cuchillos Negros es el monumento del juego a la operación cosmológica como conspiración paciente. Ranni no derrocó al régimen en combate — lo desestabilizó mediante operación quirúrgica que requirió eras de preparación. La pregunta filosófica más oscura: ¿es justificable el daño colateral cosmológico? Godwyn era el más amado del régimen, el menos culpable de las grietas, el menos merecedor de su destino. Pero su asesinato parcial era condición necesaria para que el plan operara. La justificación implícita de Ranni: el régimen del Orden Dorado producía sufrimiento estructural en miles (Omens encarcelados, Misbegotten esclavizados, Albinaurics perseguidos, Tarnished exiliados), y eliminar ese sufrimiento requería sacrificar a alguien. Eligió a Godwyn. La pregunta queda abierta para el jugador: ¿es defendible esa lógica?'
      ),
    ],
    confirmed: [
      'Ranni planeó la operación durante siglos antes de ejecutarla',
      'Robó fragmento de la Runa de la Muerte del cuerpo de Maliketh',
      'Las dagas Cuchillo Negro fueron forjadas por las asesinas Numen',
      'Cada daga puede matar media muerte (alma o cuerpo, no ambos)',
      'Godwyn fue asesinado en su alma; Ranni asesinó su propio cuerpo Empyrean',
      'La pena de Marika por Godwyn detonó la rotura del Anillo Elden',
      'Ranni transfirió su alma a una muñeca antes del momento crítico',
    ],
    inferred: [
      'La operación requirió cooperación interna no documentada explícitamente',
      'Godwyn era daño colateral cosmológicamente necesario, no objetivo personal',
      'La justificación implícita es eliminación de sufrimiento estructural a costa de un sacrificio',
      'El régimen no pudo revertir la operación pese a investigarla durante eras',
    ],
    theories: [
      'Las Cuchillos Negros sirvieron antes a la Reina de Ojos Crepusculares',
      'Marika sabía del complot y lo permitió como forma de iniciar la fractura sin tener que ejecutarla ella directamente',
      'Ranni recibió asistencia cosmológica de los Nox supervivientes',
      'El plan original incluía a más demidióses como blancos pero fue truncado',
    ],
    ambiguous: [
      'Identidad exacta del cómplice interno que ayudó a robar la mecha de Maliketh',
      'Si Godwyn conocía el plan en sus etapas finales',
      'Cuántos siglos exactamente duró la preparación',
      'Si la operación es replicable bajo cosmología distinta',
    ],
    relatedCharacters: ['ranni', 'godwyn', 'maliketh', 'marika', 'iji', 'blaidd', 'seluvis', 'fortissax'],
    relatedFactions: ['cuchillos-negros', 'caria', 'those-who-live-in-death'],
    relatedConcepts: ['rune-of-death', 'destined-death', 'empyrean', 'numen', 'deathroot'],
    relatedRegions: ['deeproot-depths', 'leyndell'],
    relatedTimelineEvents: ['empyreans-fingers-shadows', 'la-fractura', 'godwyn-corruption-spread'],
    relatedEndings: ['age-of-stars', 'duskborn'],
  },

  'la-fractura': {
    summary:
      'Tras el asesinato parcial de Godwyn durante la Noche de los Cuchillos Negros, Marika rompe el Anillo Elden con sus propias manos. Las Grandes Runas se dispersan entre sus hijos demidióses. La Ley de la Causalidad se fragmenta. La Voluntad Mayor se retira parcialmente de las Tierras Intermedias. Marika es encadenada por la Voluntad Mayor dentro del propio Árbol Áureo como castigo cosmológico. Radagon queda como guardián residual. Inicia la era actual de las Tierras Intermedias — fragmentada, post-divina, esperando un nuevo Señor Elden.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'La fractura del Anillo Elden es momento cosmológico definitorio de las Tierras Intermedias actuales. ',
        link('Marika', 'character', 'marika'),
        ' tomó un martillo y rompió el ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        ' contra el suelo de ',
        link('Leyndell', 'region', 'leyndell'),
        '. La operación fue acto consciente, no impulso descontrolado — Marika sostuvo el martillo, eligió el momento, ejecutó el golpe con plena consciencia de las consecuencias. La fragmentación fue inmediata: cada Gran Runa quedó dispersa, el cosmos perdió su centro coordinador, la Ley de la Causalidad comenzó a quebrarse. La era del Orden Dorado terminó cosmológicamente en ese instante, aunque el régimen institucional siguiera operando por inercia durante eras posteriores.'
      ),
      h(2, 'Historia detallada'),
      p(
        'La causa inmediata fue la pena de Marika por el asesinato parcial de su primogénito ',
        link('Godwyn', 'character', 'godwyn'),
        ' durante la ',
        link('Noche de los Cuchillos Negros', 'timeline', 'ranni-noche-cuchillos'),
        '. La causa estructural es más profunda y disputada. Las hipótesis comunitarias incluyen: 1) ',
        em('Dolor maternal'),
        ' — la rotura es rabieta divina ante la herida abierta de Godwyn, el único de sus hijos plenamente integrado al régimen. 2) ',
        em('Crítica filosófica al Orden'),
        ' — Marika comprendió durante eras que el Orden Dorado con la Muerte sellada era una jaula; la rotura es protesta deliberada contra el sistema que ella misma fundó. 3) ',
        em('Conspiración contra la Voluntad Mayor'),
        ' — el martillazo no fue acto de fidelidad cósmica; rompió la liturgia de un dios externo que la estaba usando. Su exilio en el árbol sería casi forma de victoria. 4) ',
        em('Plan a largo plazo del Tarnished'),
        ' — Marika sembró las condiciones (Gracia restituida, exilio de los Tarnished, fractura programada) para que un agente exterior al régimen pudiera al fin elegir el destino del cosmos. Las cuatro hipótesis tienen base textual; el juego no decide entre ellas.'
      ),
      p(
        'Las Grandes Runas se dispersaron entre los hijos demidióses según afinidad cosmológica natural. ',
        link('Godrick', 'character', 'godrick'),
        ' tomó la del linaje. ',
        link('Rennala', 'character', 'rennala'),
        ' la del ciclo vital. ',
        link('Radahn', 'character', 'radahn'),
        ' la astronómica. ',
        link('Rykard', 'character', 'rykard'),
        ' la suya antes de ser devorado por la entidad serpentina. ',
        link('Morgott', 'character', 'morgott'),
        ' la del régimen. ',
        link('Malenia', 'character', 'malenia'),
        ' la del decaimiento. ',
        link('Mohg', 'character', 'mohg'),
        ' la de la sangre. La Runa de la Muerte permanece sellada en Maliketh. Cada demidiós sostuvo su porción autónomamente — el cosmos quedó fragmentado en regiones operando bajo leyes parcialmente independientes.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'Las consecuencias estructurales fueron cuatro. Primera: la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' se retiró parcialmente de las Tierras Intermedias al perder vasija coordinadora. Sus mensajeros físicos los Dos Dedos comenzaron a deteriorarse visiblemente. Las Lectoras siguieron oficiando rituales cuyas respuestas se volvían cada vez más vagas. Segunda: la Voluntad Mayor encadenó a Marika dentro del propio ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' como castigo cosmológico — la diosa convertida en exhibición arquitectónica de su propio templo. Tercera: ',
        link('Radagon', 'character', 'radagon'),
        ' quedó como guardián residual del régimen, dedicando su existencia post-fractura a intentar reparar el Anillo. Cuarta: la era de la fractura inició su decadencia institucional — los demidióses entraron en guerra civil cosmológica, el régimen oficial perdió coordinación, la inestabilidad se hizo permanente.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La fractura del Anillo Elden es el monumento del juego al colapso voluntario del régimen por su vasija central. La pregunta más oscura: ¿es posible rebelarse contra el cosmos cuando se ',
        em('es'),
        ' el cosmos? La acción de Marika es la de una madre, una diosa, una vasija y una mujer Numen al mismo tiempo, y esas cuatro voces no se reconcilian. Su encadenamiento al árbol es uno de los símbolos más potentes del juego: la diosa convertida en exhibición, la legisladora reducida a pieza arquitectónica de su propio templo. Se puede leer como castigo, auto-encarcelamiento ritual, u ofrenda voluntaria a un futuro que solo el Tarnished puede ejecutar. Cada uno de los seis ',
        link('finales', 'ending', 'fracture'),
        ' del juego es respuesta distinta a la pregunta que la fractura abrió: dado que el régimen ya colapsó, ¿qué cosmos viene a continuación?'
      ),
    ],
    confirmed: [
      'Marika rompió el Anillo Elden con sus propias manos tras el asesinato parcial de Godwyn',
      'La operación fue acto consciente, no impulso descontrolado',
      'Las Grandes Runas se dispersaron entre los demidióses según afinidad cosmológica',
      'La Voluntad Mayor se retiró parcialmente al perder vasija coordinadora',
      'Marika fue encadenada por la Voluntad Mayor dentro del propio Árbol Áureo como castigo',
      'Radagon quedó como guardián residual intentando reparar el Anillo',
    ],
    inferred: [
      'La operación quebró la Ley de la Causalidad simultáneamente',
      'Aquellos que Viven en la Muerte aparecieron como manifestación del quiebre causal',
      'Las cuatro hipótesis comunitarias sobre motivación tienen base textual',
      'El régimen institucional siguió operando por inercia durante eras posteriores al colapso cosmológico',
    ],
    theories: [
      'Marika programó la fractura desde la fundación del régimen como instrumento diferido',
      'La rotura apuntaba contra la Voluntad Mayor más que contra el Orden Dorado en sí',
      'Las cadenas en el Árbol Áureo son auto-impuestas — castigo ritual que ella misma diseñó',
      'Marika sigue consciente dentro de su prisión arbórea esperando al Tarnished',
    ],
    ambiguous: [
      'Causa estructural exacta — el juego permite múltiples lecturas',
      'Si Marika orquestó el robo de la Runa de la Muerte por parte de Ranni',
      'Si las palabras finales que el Tarnished escucha al golpearla son ruegos, instrucciones o ecos',
      'Cuándo exactamente se retiró completamente la Voluntad Mayor (la operación es gradual)',
    ],
    relatedCharacters: ['marika', 'radagon', 'godwyn', 'godrick', 'rennala', 'radahn', 'rykard', 'morgott', 'malenia', 'mohg'],
    relatedFactions: ['orden-dorado', 'dos-dedos', 'finger-readers'],
    relatedConcepts: ['elden-ring', 'great-rune', 'voluntad-mayor', 'law-of-causality', 'destined-death'],
    relatedRegions: ['leyndell'],
    relatedTimelineEvents: ['ranni-noche-cuchillos', 'demidioses-fractura', 'estado-mundo-mancillado'],
    relatedEndings: ['fracture', 'order', 'duskborn', 'frenzied-flame', 'age-of-stars'],
  },

  'demidioses-fractura': {
    summary:
      'Tras la rotura del Anillo Elden, los demidióses pelean entre sí por las Grandes Runas dispersas. La Guerra de la Fractura (Shattering War) es guerra civil cosmológica que dura eras y produce los acontecimientos definitorios de las Tierras Intermedias actuales: la corrupción de Caelid en la Batalla de Aeonia, el secuestro de Miquella, la blasfemia de Rykard, la defensa obstinada de Morgott. Cada demidiós es respuesta distinta a la fractura. Cuando llega el Tarnished, todos están corrompidos, ausentes o ya derrotados.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'La Guerra de la Fractura es período cosmológico extenso (',
        link('Shattering War', 'timeline', 'shattering-war'),
        ' en algunos textos) que se inicia inmediatamente tras la rotura del Anillo Elden por Marika. Cada demidiós heredó una ',
        link('Gran Runa', 'concept', 'great-rune'),
        ' y la usó para sostener poder personal. Sin coordinación cosmológica central, las disputas se volvieron militares. La guerra civil cosmológica produjo los acontecimientos definitorios de las Tierras Intermedias actuales.'
      ),
      h(2, 'Historia detallada: las cinco trayectorias'),
      p(
        'Cada demidiós encarnó respuesta distinta a la fractura. ',
        link('Radahn', 'character', 'radahn'),
        ' bloqueó cosmológicamente las estrellas en el cielo de Caelid usando su magia gravitacional — gesto fraternal hacia ',
        link('Ranni', 'character', 'ranni'),
        ' para protegerla del destino Empyrean. Su batalla contra ',
        link('Malenia', 'character', 'malenia'),
        ' en Aeonia fue el momento más cosmológicamente costoso de la guerra: Malenia floreció parcialmente para no perder, la Podredumbre se dispersó como tormenta escarlata, ',
        link('Caelid', 'region', 'caelid'),
        ' entera se transformó en yermo putrefacto. Radahn no murió pero perdió la mente — quedó reducido a estado animal violento.'
      ),
      p(
        link('Mohg', 'character', 'mohg'),
        ' secuestró a ',
        link('Miquella', 'character', 'miquella'),
        ' del Haligtree mientras estaba en su capullo dorado. La operación fue ataque cosmológico al proyecto utópico — sin Miquella despierto, el Oro sin Aleación dejó de operar plenamente, los Albinaurics quedaron desprotegidos, el Haligtree comenzó a corromperse. Mohg llevó a Miquella a su Palacio en Mohgwyn como reserva ritual para potencialmente convertirlo en vasija superior de la Madre Informe. ',
        link('Rykard', 'character', 'rykard'),
        ' fue devorado por la entidad serpentina pre-Orden bajo el Volcano Manor — su pacto con la blasfemia salió mal, la entidad lo consumió y opera ahora a través de su nombre. ',
        link('Morgott', 'character', 'morgott'),
        ' defendió ',
        link('Leyndell', 'region', 'leyndell'),
        ' como Rey Omen — fidelidad obstinada al régimen que lo encarceló desde el nacimiento. ',
        link('Godrick', 'character', 'godrick'),
        ' (descendiente lateral, no hijo directo de Marika) practicó injertos rituales para mantener su Gran Runa diluida.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'La causa estructural de la guerra fue la fragmentación cosmológica del Anillo. Sin coordinación central, cada Gran Runa operaba autónomamente; cada demidiós que la sostenía actuaba según su propia lógica. Las consecuencias estructurales fueron geográficas y políticas. Caelid quedó devastada por la Podredumbre. El Haligtree quedó corrompido y aislado. Volcano Manor opera bajo régimen blasfemo encubierto. Leyndell mantuvo apariencia institucional bajo Morgott pero en estado de sitio crónico. Stormveil pasó a ser fortaleza marginal bajo Godrick injertando víctimas. Cuando llega el Tarnished, todos los demidióses están corrompidos, ausentes o esperando muerte ritual.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La Guerra de la Fractura es el monumento del juego a la guerra civil cosmológica como condición permanente de las Tierras Intermedias actuales. Cada demidiós eligió respuesta distinta al colapso del régimen — Radahn la fidelidad fraternal, Mohg la blasfemia activa, Rykard la blasfemia consumidora, Morgott la lealtad obstinada al régimen que lo rechazó, Malenia la integración trágica de su maldición, Miquella la suspensión esperando condiciones favorables, Ranni la rebelión cosmológica completa. Cada respuesta es coherente individualmente pero ninguna resuelve estructuralmente el problema. La pregunta filosófica: ¿puede un cosmos fragmentado autorrepararse mediante guerra interna? La respuesta del juego es no. Solo agencia exterior (los Tarnished retornados) podría reformar el régimen. La Guerra de la Fractura demuestra que la fractura interna no se cura desde dentro.'
      ),
    ],
    confirmed: [
      'La guerra civil cosmológica se inició tras la rotura del Anillo Elden',
      'Cada demidiós heredó una Gran Runa y la usó para sostener poder personal',
      'Radahn bloqueó las estrellas; su duelo con Malenia en Aeonia devastó Caelid',
      'Mohg secuestró a Miquella del Haligtree mientras estaba en su capullo dorado',
      'Rykard fue devorado por la entidad serpentina pre-Orden bajo Volcano Manor',
      'Morgott defendió Leyndell como Rey Omen con fidelidad obstinada',
      'Cuando llega el Tarnished, todos los demidióses están corrompidos o ausentes',
    ],
    inferred: [
      'Cada demidiós encarnó respuesta distinta al colapso del régimen',
      'Ninguna respuesta resolvió estructuralmente el problema cosmológico',
      'Solo agencia exterior podría reformar el régimen',
      'La fragmentación cosmológica produjo regiones operando bajo leyes parcialmente independientes',
    ],
    theories: [
      'Algunos demidióses coordinaron entre sí en momentos específicos pero el juego no documenta los pactos',
      'Existieron otras Grandes Runas que el régimen oficial nunca documentó',
      'La Voluntad Mayor anticipaba la guerra civil y se retiró deliberadamente',
      'Si los demidióses hubieran cooperado, podrían haber reformado el cosmos sin asistencia exterior',
    ],
    ambiguous: [
      'Cuánto tiempo exactamente duró la Guerra de la Fractura',
      'Si los demidióses se enfrentaron físicamente entre sí o solo a través de proxies',
      'Si Ranni participó activamente en la guerra o solo orquestó eventos paralelos',
      'Cuándo exactamente cada demidiós alcanzó su estado actual de corrupción',
    ],
    relatedCharacters: ['radahn', 'malenia', 'miquella', 'mohg', 'rykard', 'morgott', 'godrick', 'ranni'],
    relatedFactions: ['orden-dorado', 'redmanes', 'haligtree', 'volcano-manor', 'bloody-fingers'],
    relatedRegions: ['caelid', 'haligtree', 'mt-gelmir', 'mohgwyn', 'leyndell', 'stormveil'],
    relatedConcepts: ['great-rune', 'scarlet-rot', 'formless-mother', 'crucible'],
    relatedTimelineEvents: ['la-fractura', 'aeonia-bloom', 'mohg-toma-miquella', 'rykard-blasphemy', 'shattering-war'],
  },

  'estado-mundo-mancillado': {
    summary:
      'El estado de las Tierras Intermedias tras la Guerra de la Fractura: regiones arruinadas, demidióses corrompidos o ausentes, Voluntad Mayor distante, instituciones operando por inercia. Es el paisaje cosmológico donde llega el Tarnished retornado. Cada región refleja la respuesta específica de su demidiós a la fractura: Caelid bajo Podredumbre, Stormveil bajo injertos, Liurnia inundada con Rennala atrapada, Volcano Manor conspirando, los Tres Dedos sellados bajo Leyndell aguardando. La era es decadencia institucional permanente.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'El estado de las Tierras Intermedias post-fractura es condición cosmológica permanente que define el escenario donde llega el Tarnished retornado. La era se caracteriza por: regímenes locales fragmentados sin coordinación cosmológica central, ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' parcialmente retirada, instituciones operando por inercia ritual sin contenido vital, demidióses corrompidos en estados terminales o ausentes, geografías profundamente alteradas por la Guerra de la Fractura, y la corrupción de ',
        link('Aquellos que Viven en la Muerte', 'concept', 'those-who-live-in-death'),
        ' propagándose progresivamente desde Deeproot Depths.'
      ),
      h(2, 'Historia detallada: el paisaje regional'),
      p(
        'Cuando el Tarnished regresa, encuentra una geografía cosmológicamente fragmentada. ',
        link('Limgrave', 'region', 'limgrave'),
        ' opera bajo control marginal del Orden Dorado oficial pero con presencia residual de ',
        link('Margit', 'character', 'morgott'),
        ' (Morgott encubierto) y bandidos ocupando fortalezas como Fort Haight. ',
        link('Stormveil', 'region', 'stormveil'),
        ' está bajo ',
        link('Godrick', 'character', 'godrick'),
        ' practicando injertos rituales para sostener su Gran Runa diluida. ',
        link('Liurnia', 'region', 'liurnia'),
        ' está inundada con la Academia ',
        link('Raya Lucaria', 'region', 'raya-lucaria'),
        ' replegada, ',
        link('Rennala', 'character', 'rennala'),
        ' atrapada en el Huevo Ambarino, y conspiradores Caria operando autónomamente.'
      ),
      p(
        link('Caelid', 'region', 'caelid'),
        ' está arrasado por la Podredumbre Escarlata residual de la Floración de Aeonia — yermo putrefacto donde solo los Redmanes leales a ',
        link('Radahn', 'character', 'radahn'),
        ' organizan el Festival ritual para liberarlo. ',
        link('Volcano Manor', 'region', 'mt-gelmir'),
        ' opera como corte alternativa al Orden Dorado dirigida por ',
        link('Tanith', 'character', 'tanith'),
        ' en nombre de ',
        link('Rykard', 'character', 'rykard'),
        ' devorado. ',
        link('Leyndell', 'region', 'leyndell'),
        ' está sitiada bajo ',
        link('Morgott', 'character', 'morgott'),
        ', con los ',
        link('Tres Dedos', 'faction', 'tres-dedos'),
        ' sellados en el Subterranean Shunning-Grounds. Las ',
        link('Mountaintops of the Giants', 'region', 'mountaintops'),
        ' albergan al último Gigante del Fuego encadenado custodiando la Llama de Ruina. El ',
        link('Haligtree', 'region', 'haligtree'),
        ' está corrompido por la Podredumbre tras Aeonia.'
      ),
      h(2, 'Causas y consecuencias'),
      p(
        'La causa estructural del estado actual es la acumulación de consecuencias de la fractura del Anillo Elden y la subsiguiente Guerra de la Fractura. Las consecuencias operativas son cuatro. Primera: la fragmentación cosmológica produjo regiones operando bajo leyes parcialmente independientes — la Podredumbre escarlata domina Caelid, los injertos rituales dominan Stormveil, la blasfemia serpentina domina el Volcano Manor. Segunda: las instituciones del régimen central perdieron coordinación efectiva — Gideon en la Mesa Redonda acumula información sin poder ejecutar decisiones, Goldmask diagnostica la falla pero no puede corregirla solo, Morgott defiende un régimen que ya no responde con coherencia. Tercera: la corrupción de Aquellos que Viven en la Muerte se propaga progresivamente sin contención efectiva. Cuarta: la Voluntad Mayor opera con cada vez más demora — los pronunciamientos de los Dos Dedos son cada vez más vagos, las Lectoras siguen oficiando rituales cuyas respuestas se debilitan.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'El estado del mundo mancillado es el monumento del juego a la decadencia institucional permanente. Otros juegos representan apocalipsis con eventos catastróficos súbitos; las Tierras Intermedias representa apocalipsis como condición prolongada en la que las instituciones siguen operando pero sin coherencia genuina. La pregunta filosófica: ¿puede una civilización sobrevivir indefinidamente a su propia fractura cosmológica? La respuesta del juego: sí, pero a costa de degradación progresiva. La era actual de las Tierras Intermedias son testimonio de que el cosmos roto puede sostenerse por inercia durante eras — pero cada era prolonga el sufrimiento. La llegada del Tarnished es interrupción de la inercia. Cada uno de los seis ',
        link('finales', 'ending', 'fracture'),
        ' es propuesta de cómo terminar la decadencia.'
      ),
    ],
    confirmed: [
      'El Tierras Intermedias post-fractura está en estado de decadencia institucional permanente',
      'Cada región refleja la respuesta específica de su demidiós a la fractura',
      'La Voluntad Mayor opera con cada vez más demora a través de los Dos Dedos',
      'La corrupción de Aquellos que Viven en la Muerte se propaga progresivamente',
      'Las instituciones operan por inercia ritual sin contenido vital coherente',
      'El Tarnished retornado encuentra paisaje cosmológicamente fragmentado',
    ],
    inferred: [
      'La fragmentación cosmológica produjo regiones operando bajo leyes parcialmente independientes',
      'La inercia institucional puede sostener cosmos rotos durante eras',
      'La degradación es progresiva, no estática',
      'Solo agencia exterior puede interrumpir la decadencia institucional',
    ],
    theories: [
      'La Voluntad Mayor podría retornar plenamente bajo cosmología reformada',
      'Algunas regiones contienen tradiciones pre-Orden que podrían reactivarse bajo final correcto',
      'El estado actual es transición — no condición terminal — esperando reforma cosmológica',
      'Existen regiones marginales no documentadas donde el régimen nunca penetró completamente',
    ],
    ambiguous: [
      'Cuánto tiempo exactamente lleva las Tierras Intermedias en estado post-fractura',
      'Si la decadencia es reversible plenamente o solo parcialmente',
      'Si Marika consciente puede comunicarse desde su prisión arbórea',
      'Cuándo exactamente la Voluntad Mayor se retiró completamente',
    ],
    relatedCharacters: ['godrick', 'rennala', 'rykard', 'morgott', 'malenia', 'miquella', 'mohg', 'radahn', 'marika'],
    relatedFactions: ['orden-dorado', 'dos-dedos', 'redmanes', 'volcano-manor', 'haligtree', 'tres-dedos'],
    relatedRegions: ['caelid', 'stormveil', 'liurnia', 'mt-gelmir', 'leyndell', 'mountaintops', 'haligtree'],
    relatedConcepts: ['voluntad-mayor', 'great-rune', 'erdtree', 'scarlet-rot', 'crucible'],
    relatedTimelineEvents: ['la-fractura', 'demidioses-fractura', 'viaje-mancillado'],
  },

  'viaje-mancillado': {
    summary:
      'El Tarnished retorna desde las tierras exteriores con la Gracia restaurada y comienza la travesía hacia el trono Elden. Acompañado por Melina, asesorado por Gideon Ofnir, ungido por Enia. Recolecta las Grandes Runas mediante combate ritual con los demidióses. Melina se inmola en las Mountaintops como portadora ritual de la Llama de Ruina para quemar el Árbol Áureo. El Tarnished enfrenta a Marika, Radagon y la Bestia Elden — y elige uno de los seis finales posibles del cosmos.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'El viaje del Tarnished retornado es la operación cosmológica que el juego documenta directamente. ',
        link('El Tarnished', 'concept', 'tarnished'),
        ' es descendiente de los seguidores exiliados de ',
        link('Godfrey', 'character', 'godfrey'),
        ' que recibió ',
        link('Gracia', 'concept', 'grace'),
        ' restituida tras la rotura del Anillo Elden. Su misión cosmológica: convertirse en candidato al trono Elden mediante recolección de ',
        link('Grandes Runas', 'concept', 'great-rune'),
        ' y eventualmente elegir el destino del cosmos. Su origen exterior al régimen lo hace especialmente apto: no está comprometido con ninguna grieta específica del régimen fragmentado.'
      ),
      h(2, 'Historia detallada: el viaje'),
      p(
        'El Tarnished aparece en ',
        link('Limgrave', 'region', 'limgrave'),
        ' tras llegar desde las tierras exteriores. Es recibido en la ',
        link('Mesa Redonda', 'concept', 'tarnished'),
        ' por ',
        link('Gideon Ofnir', 'character', 'gideon'),
        ' (asesor estratégico que conoce dossiers completos de cada demidiós), ',
        link('Enia', 'character', 'enia'),
        ' (Lectora de Dedos que oficia rituales de coronación), ',
        link('Brother Corhyn', 'character', 'corhyn'),
        ' (predicador del Orden Dorado), ',
        link('Roderika', 'character', 'roderika'),
        ' (asistente especializada en cenizas espirituales). ',
        link('Melina', 'character', 'melina'),
        ' lo acompaña como guía cosmológica — su naturaleza exacta es ambigua durante todo el viaje, pero su función es estructural: conduce al Tarnished hacia los Sites of Grace, le ofrece consejo, eventualmente paga el precio cosmológico final.'
      ),
      p(
        'La operación específica de la travesía: derrotar a cada demidiós en combate ritual y reclamar su Gran Runa. ',
        link('Godrick', 'character', 'godrick'),
        ' en ',
        link('Stormveil', 'region', 'stormveil'),
        '. ',
        link('Rennala', 'character', 'rennala'),
        ' en Raya Lucaria. ',
        link('Radahn', 'character', 'radahn'),
        ' en el Festival ritual organizado por los Redmanes. ',
        link('Rykard', 'character', 'rykard'),
        ' devorado por la entidad serpentina del Volcano Manor. ',
        link('Morgott', 'character', 'morgott'),
        ' defendiendo Leyndell. Cada demidiós es prueba ritual; cada Gran Runa reclamada es validación adicional del Tarnished como candidato legítimo. Los Dos Dedos requieren mínimo dos Grandes Runas para autorizar la coronación; los siete posibles maximizan la legitimidad cosmológica.'
      ),
      h(2, 'Causas y consecuencias: la quema y el trono'),
      p(
        'Para acceder al trono Elden, el ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' debe ser quemado. La operación cosmológica requiere fuego que el régimen oficial no controla — específicamente la ',
        link('Llama de Ruina', 'concept', 'fell-god'),
        ' confinada con el último Gigante del Fuego en las ',
        link('Mountaintops of the Giants', 'region', 'mountaintops'),
        '. ',
        link('Melina', 'character', 'melina'),
        ' se inmola como portadora ritual: su cuerpo se ofrenda como vehículo para activar la Llama y prender el Árbol Áureo. La operación es ritualmente costosa — Melina paga con su existencia. Pero si el Tarnished aceptó la Llama Frenética antes, Melina abandona el viaje y maldice al Tarnished prometiendo terminarlo personalmente. En ese caso el Tarnished debe quemar el Árbol Áureo usando solo su sello frenético.'
      ),
      p(
        'Tras la quema, el Tarnished accede al núcleo del Árbol Áureo donde encuentra a ',
        link('Marika', 'character', 'marika'),
        ' encadenada. Al golpearla, ',
        link('Radagon', 'character', 'radagon'),
        ' emerge como guardián residual. Tras derrotar a Radagon, la ',
        link('Bestia Elden', 'concept', 'bestia-elden'),
        ' aparece como aspecto autónomo del Anillo. Tras derrotar a la Bestia, ningún guardián humano, divino o cosmológico defiende ya el régimen. El Tarnished puede entonces elegir libremente entre los seis ',
        link('finales', 'ending', 'fracture'),
        ' del juego.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'El viaje del Tarnished es el monumento del juego a la agencia exterior como instrumento de reforma cosmológica. Otros personajes de las Tierras Intermedias son partes del régimen fragmentado: cada demidiós representa una grieta, cada NPC tiene afiliación cosmológica específica, cada actor está estructuralmente comprometido. El Tarnished es exterior — descendiente de exiliados, retornado tras eras, sin afiliación previa al régimen actual. Esa exterioridad es exactamente lo que lo hace cosmológicamente útil: puede recolectar Grandes Runas sin estar adherido a ninguna en particular, puede coronarse sin estar comprometido con cosmología específica, puede elegir entre los seis finales con neutralidad estructural que ningún demidiós tiene. La pregunta filosófica del juego: ¿es preferible la decisión cosmológica desde fuera o desde dentro? Marika eligió desde dentro y rompió el cosmos. El Tarnished elige desde fuera y puede repararlo o reemplazarlo. Su agencia es la posibilidad genuina del juego.'
      ),
    ],
    confirmed: [
      'El Tarnished retorna desde las tierras exteriores con Gracia restaurada',
      'Es asesorado por Gideon Ofnir desde la Mesa Redonda',
      'Melina lo acompaña como guía cosmológica',
      'Recolecta Grandes Runas derrotando demidióses en combate ritual',
      'Melina se inmola en las Mountaintops como portadora ritual de la Llama de Ruina',
      'El Tarnished enfrenta secuencialmente a Marika, Radagon y la Bestia Elden',
      'Tras la victoria, elige entre los seis finales posibles del cosmos',
    ],
    inferred: [
      'Su exterioridad al régimen fragmentado lo hace cosmológicamente útil para reformar el cosmos',
      'Los Dos Dedos requieren mínimo dos Grandes Runas para autorizar la coronación',
      'Melina abandona y maldice al Tarnished que aceptó la Llama Frenética',
      'La quema del Árbol Áureo es estructuralmente necesaria — el Orden no puede reformarse mientras el árbol siga operando en su forma actual',
    ],
    theories: [
      'Marika diseñó el exilio de los Tarnished sabiendo que retornarían eras después como instrumento de reforma',
      'Melina es Empyrean no nacida o aspecto incompleto de Marika',
      'La quema del Árbol Áureo libera al menos parcialmente al Crisol primigenio confinado',
      'Algunos Tarnished retornaron antes que el protagonista pero ninguno completó el viaje',
    ],
    ambiguous: [
      'Identidad y origen exacto de Melina',
      'Cuántos Tarnished retornaron en total — el número canónico no se documenta',
      'Si la elección final es genuinamente libre o cada cosmología impone presión',
      'Si la quema del Árbol Áureo es reversible bajo cosmología distinta',
    ],
    relatedCharacters: ['melina', 'gideon', 'enia', 'goldmask', 'corhyn', 'roderika', 'godrick', 'rennala', 'radahn', 'rykard', 'morgott', 'marika', 'radagon'],
    relatedFactions: ['orden-dorado', 'dos-dedos', 'fundamentalistas'],
    relatedConcepts: ['tarnished', 'grace', 'erdtree', 'great-rune', 'fell-god', 'voluntad-mayor', 'bestia-elden'],
    relatedRegions: ['leyndell', 'mountaintops', 'limgrave'],
    relatedTimelineEvents: ['exilio-godfrey', 'estado-mundo-mancillado', 'erdtree-quemado'],
    relatedEndings: ['fracture', 'order', 'duskborn', 'frenzied-flame', 'age-of-stars', 'despair'],
  },

  finales: {
    summary:
      'Seis posibles eras al alcance del Tarnished — cada una respuesta filosófica distinta a si el Orden Dorado merece existir tal como es. Era de la Fractura (restauración pasiva), Era del Orden (perfección lógica de Goldmask), Era del Crepúsculo (Fia restaura la Muerte), Bendición de la Desesperación (Dung-Eater impone sufrimiento universal), Señor de la Llama Frenética (apocalipsis nihilista), Era de las Estrellas (Ranni retira a la Voluntad Mayor). Ninguna era es enteramente buena o mala. El juego no privilegia ninguna — deja al jugador la responsabilidad cosmológica que ningún demidiós quiso asumir.',
    deepLore: [
      h(2, 'Resumen del evento'),
      p(
        'Los seis finales del juego son las opciones cosmológicas que el Tarnished puede ejecutar tras derrotar a la ',
        link('Bestia Elden', 'concept', 'bestia-elden'),
        '. Cada uno es respuesta filosófica completa al problema cosmológico de las Tierras Intermedias: dado que el ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        ' está fragmentado y la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' parcialmente retirada, ¿qué cosmos viene a continuación? Las seis respuestas son estructuralmente incompatibles entre sí — solo una puede ejecutarse por partida.'
      ),
      h(2, 'Las seis respuestas: descripción'),
      p(
        'La ',
        link('Era de la Fractura', 'ending', 'fracture'),
        ' (final por defecto) reensambla el Anillo Elden tal cual estaba antes de la rotura. El Tarnished se corona como Señor Elden bajo la cosmología del Orden Dorado restaurada. Es restauración pasiva: el régimen continúa, las grietas persisten, la fractura puede repetirse.'
      ),
      p(
        'La ',
        link('Era del Orden', 'ending', 'order'),
        ' aplica la ',
        link('Ley de la Regresión', 'concept', 'law-of-regression'),
        ' a la fusión Marika-Radagon. ',
        link('Goldmask', 'character', 'goldmask'),
        ' produce cosmos perfectamente coherente, frío, geométrico, sin contradicción interna. Pero también sin espacio para excepciones, individualidades, ambigüedades. La utopía absoluta y el infierno de los que no caben.'
      ),
      p(
        'La ',
        link('Era del Crepúsculo', 'ending', 'duskborn'),
        ' restaura la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ' al Anillo Elden mediante el ritual de ',
        link('Fia', 'character', 'fia'),
        '. Los muertos pueden volver a morir verdaderamente. La herida de Godwyn se cierra. ',
        link('Aquellos que Viven en la Muerte', 'concept', 'those-who-live-in-death'),
        ' descansan piadosamente. La era más melancólica y misericordiosa.'
      ),
      p(
        'La ',
        link('Bendición de la Desesperación', 'ending', 'despair'),
        ' aplica el Sello Mendaz del ',
        link('Dung Eater', 'character', 'dung-eater'),
        ' al Anillo. Toda la humanidad de las Tierras Intermedias carga maldición eterna. El régimen continúa operando mecánicamente pero cada habitante experimenta condena consciente. Igualdad por degradación universal.'
      ),
      p(
        'El ',
        link('Señor de la Llama Frenética', 'ending', 'frenzied-flame'),
        ' acepta el sello completo de los ',
        link('Tres Dedos', 'faction', 'tres-dedos'),
        '. El Tarnished se convierte en vehículo de la Llama Frenética y quema el cosmos entero. Apocalipsis nihilista — la doctrina del fin universal aplicada estructuralmente.'
      ),
      p(
        'La ',
        link('Era de las Estrellas', 'ending', 'age-of-stars'),
        ' instaura la cosmología de ',
        link('Ranni', 'character', 'ranni'),
        '. La Voluntad Mayor pierde acceso a las Tierras Intermedias. La luna oscura distante reemplaza al árbol cercano. El cosmos queda libre — y solo. Libertad fría que supera al control compasivo.'
      ),
      h(2, 'Causas y consecuencias: la elección'),
      p(
        'Cada final tiene precondiciones específicas. La Era de la Fractura es default — no requiere quest secundaria. La Era del Orden requiere completar la quest de Goldmask y Corhyn. La Era del Crepúsculo requiere asistir a Fia, derrotar a Fortissax en Deeproot Depths, obtener la Runa Mendaz cosida. La Bendición de la Desesperación requiere sembrar suficientes víctimas con el Sello del Dung Eater. La Llama Frenética requiere descender al Subterranean Shunning-Grounds y aceptar el sello completo de los Tres Dedos. La Era de las Estrellas requiere completar la quest de Ranni desde el inicio del juego — entregarle la Hoja Mata-Dedos, asistir en eventos cosmológicos paralelos, llegar a la consumación final.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Los seis finales son el monumento del juego a la pluralidad de respuestas cosmológicas legítimas. Ninguna era es enteramente buena o mala. Cada una resuelve algunos problemas y abre otros. La Era de la Fractura preserva el régimen pero perpetúa sus grietas. La Era del Orden corrige las grietas pero elimina la individualidad. La Era del Crepúsculo cura la herida fundacional pero no reforma el régimen. La Bendición condena pero iguala. La Llama Frenética extingue pero termina con el sufrimiento. La Era de las Estrellas libera pero deja al cosmos solo. El juego no privilegia ninguna — deja al jugador la responsabilidad cosmológica que ningún demidiós quiso asumir. La pregunta filosófica final: cuando el cosmos está roto, ¿hay respuesta correcta? El juego responde: no hay respuesta correcta, solo respuestas que cada uno debe poder defender. La libertad cosmológica del jugador es también su carga.'
      ),
    ],
    confirmed: [
      'El Tarnished puede ejecutar uno de seis finales tras derrotar a la Bestia Elden',
      'La Era de la Fractura es el final por defecto sin quest específica',
      'La Era del Orden requiere completar la quest de Goldmask y Corhyn',
      'La Era del Crepúsculo requiere asistir a Fia y obtener la Runa Mendaz cosida',
      'La Bendición de la Desesperación requiere sembrar víctimas con el Sello del Dung Eater',
      'La Llama Frenética requiere aceptar el sello completo de los Tres Dedos',
      'La Era de las Estrellas requiere completar la quest de Ranni completa',
    ],
    inferred: [
      'Las seis respuestas son estructuralmente incompatibles entre sí',
      'Cada final resuelve algunos problemas cosmológicos y abre otros',
      'La libertad cosmológica del jugador es también responsabilidad ética',
      'Ningún demidiós quiso asumir la decisión cosmológica que el Tarnished debe tomar',
    ],
    theories: [
      'Marika diseñó la posibilidad de los seis finales como abanico programado de respuestas',
      'La Voluntad Mayor permite la pluralidad porque cualquier final es preferible al estado actual',
      'Existen otros finales no documentados en regiones que el juego no explora',
      'Cada final produce cosmos genuinamente distinto — no son variantes de la misma cosmología',
    ],
    ambiguous: [
      'Si los finales son reversibles bajo cosmología posterior',
      'Cuál final corresponde al "canon" oficial — el juego no decide',
      'Si el Tarnished puede experimentar más de un final en sucesivas eras',
      'Si Marika consciente prefiere alguno específico de los finales',
    ],
    relatedCharacters: ['ranni', 'fia', 'goldmask', 'dung-eater', 'melina', 'hyetta', 'marika', 'radagon'],
    relatedFactions: ['orden-dorado', 'fundamentalistas', 'tres-dedos', 'caria'],
    relatedEndings: ['fracture', 'order', 'duskborn', 'despair', 'frenzied-flame', 'age-of-stars'],
    relatedConcepts: ['elden-ring', 'voluntad-mayor', 'golden-order', 'rune-of-death', 'frenzied-flame', 'dark-moon', 'law-of-regression'],
    relatedTimelineEvents: ['viaje-mancillado', 'la-fractura'],
  },
}
