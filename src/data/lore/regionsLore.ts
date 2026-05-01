import type { DeepEntity, RichBlock, RichInline } from '../types'

const link = (label: string, targetType: 'character' | 'region' | 'faction' | 'concept' | 'ending' | 'timeline', slug: string): RichInline =>
  ({ type: 'link', label, targetType, slug })
const p = (...children: RichInline[]): RichBlock =>
  ({ type: 'paragraph', children })
const h = (level: 2 | 3, text: string, id?: string): RichBlock =>
  ({ type: 'heading', level, text, id })
const em = (text: string): RichInline => ({ type: 'em', text })

export const regionsLore: Record<string, Partial<DeepEntity>> = {

  limgrave: {
    summary:
      'Limgrave es la tierra de entrada del Tarnished a las Tierras Intermedias tras su exilio: praderas verdes, costas templadas, bosques antiguos, ruinas dispersas. La fachada apacible esconde estratos cosmológicos densos — bajo cada cripta yacen civilizaciones del Crisol que el Orden Dorado purgó. Stormveil al norte, Castle Morne al sur, los Lagos de Agheel al sureste. Es geografía aparentemente accesible que el régimen mantiene bajo control marginal porque no puede permitirse perder la región-puerta.',
    deepLore: [
      h(2, 'Geografía y posición estratégica'),
      p(
        'Limgrave es región de praderas onduladas, bosques de roble antiguo, costas templadas al sur, lagos interiores y peñascos rocosos. Se ubica en el extremo sur-occidental de las Tierras Intermedias, conectada al norte con ',
        link('Stormveil', 'region', 'stormveil'),
        ', al sur con la ',
        link('Península Llorosa', 'region', 'peninsula-llorosa'),
        ', al noreste con ',
        link('Caelid', 'region', 'caelid'),
        ' (separada por el Aeonia Swamp), y al este con ',
        link('Liurnia', 'region', 'liurnia'),
        ' (a través del Stormhill). Su posición estratégica como región-puerta a las Tierras Intermedias explica por qué el régimen mantiene vigilancia activa allí — ',
        link('Margit', 'character', 'morgott'),
        ' (Morgott encubierto) aguarda en Stormhill como primer centinela.'
      ),
      h(2, 'Historia detallada: estratos cosmológicos'),
      p(
        'Bajo la fachada apacible, Limgrave acumula múltiples estratos cosmológicos. El más profundo es el del ',
        link('Crisol', 'concept', 'crucible'),
        ' primigenio — bajo los Lagos de Agheel y en cuevas costeras yacen estatuas con cuernos, raíces espinosas, criaturas con rasgos hibridados. Todo lo que el Orden Dorado purgó por considerarlo impuro se conserva fosilizado en estas profundidades. Las catacumbas dispersas (Tombsward, Stormfoot, Murkwater) contienen Caballeros del Crisol en bucles eternos custodiando rituales que el régimen toleró pero descontinuó.'
      ),
      p(
        'El siguiente estrato es el del Storm Hawk King — la dinastía pre-Orden que gobernó Limgrave antes de que ',
        link('Godfrey', 'character', 'godfrey'),
        ' la conquistara. Sus restos arqueológicos persisten en Fort Haight (reclamado por ',
        link('Kenneth Haight', 'character', 'kenneth-haight'),
        '), en la heráldica del castillo Stormveil pre-Godrick, y en la sangre latente de ',
        link('Nepheli Loux', 'character', 'nepheli-loux'),
        '. El estrato más reciente es el del régimen actual del Orden Dorado, operando con control marginal pero sin coordinación efectiva post-fractura.'
      ),
      h(2, 'Castle Morne y Stormveil: las dos fortalezas'),
      p(
        link('Stormveil', 'region', 'stormveil'),
        ' al norte fue originalmente el palacio fronterizo de Godfrey antes de su ascensión a Leyndell. Hoy es sede de ',
        link('Godrick', 'character', 'godrick'),
        ', descendiente lateral injertando víctimas para sostener Gran Runa diluida. ',
        link('Castle Morne', 'region', 'castle-morne'),
        ' al sur fue sede de la Casa Volmer hasta que los ',
        link('Misbegotten', 'faction', 'misbegotten'),
        ' esclavizados se rebelaron y la tomaron. ',
        link('Edgar', 'character', 'edgar'),
        ' es el último lord superviviente; ',
        link('Irina', 'character', 'irina'),
        ' su hija ciega escapada. Las dos fortalezas son contrastantes: una sostenida por injertos rituales, la otra perdida en revuelta esclava.'
      ),
      h(2, 'Estado actual: control marginal'),
      p(
        'Tras la fractura, Limgrave opera bajo control marginal del régimen oficial. Las patrullas de caballeros dorados son escasas. Bandidos ocupan Fort Haight. Mercenarios y oportunistas rondan los caminos. ',
        link('Patches', 'character', 'patches'),
        ' opera desde la cueva costera vendiéndole de todo a quien pase. Mercaderes nómadas mantienen rutas autónomas. Los Tibia Mariners aparecen de noche en zonas funerarias. La región está parcialmente abandonada por el régimen pero no plenamente controlada por ninguna alternativa — es zona gris cosmológica.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Limgrave es el monumento del juego a la región-puerta como capa visible que esconde profundidad cosmológica. Su superficie es accesible y aparentemente apacible; sus catacumbas y subterráneos contienen tradiciones cosmológicas enteras que el régimen marginalizó. La pregunta filosófica implícita: ¿cuántas tradiciones excluidas pueden coexistir bajo un régimen oficial sin desestabilizarlo? Limgrave responde: muchas, pero solo mientras la fachada se mantenga. Tras la fractura, las grietas se vuelven visibles — y el Tarnished retornado puede acceder a estratos cosmológicos que el régimen prefería invisibles. La región-puerta es también la región-revelación.'
      ),
    ],
    confirmed: [
      'Limgrave es la región-puerta de entrada a las Tierras Intermedias tras el exilio del Tarnished',
      'Stormveil al norte es sede de Godrick; Castle Morne al sur fue tomado por los Misbegotten',
      'Margit (Morgott encubierto) aguarda en Stormhill como primer centinela',
      'Las catacumbas contienen rituales del Crisol que el Orden Dorado purgó',
      'El linaje del Storm Hawk King precedió al régimen dorado en la región',
      'La región opera bajo control marginal del régimen post-fractura',
    ],
    inferred: [
      'La fachada apacible esconde estratos cosmológicos densos en sus subterráneos',
      'La presencia activa de Morgott como vigilante señala importancia estratégica de la región-puerta',
      'Sangre latente del Storm Hawk King persiste en descendientes laterales como Nepheli',
      'El régimen no puede perder Limgrave porque es entrada cosmológica a las Tierras Intermedias',
    ],
    theories: [
      'Existieron dinastías pre-Storm Hawk King que el régimen oficial nunca documentó',
      'Las catacumbas conectan subterráneamente con regiones más profundas (Siofra, Deeproot)',
      'Los Tibia Mariners son agentes residuales de la Reina de Ojos Crepusculares',
      'El bosque de Limgrave contiene tradiciones del Crisol todavía operativas en aldeas dispersas',
    ],
    ambiguous: [
      'Cuántas dinastías pre-Storm Hawk King existieron en la región',
      'Origen exacto del nombre "Limgrave" — si procede de tradición pre-Orden',
      'Si la región era próspera antes de la fractura o ya estaba en declive',
      'Si los Caballeros del Crisol de las catacumbas conservan consciencia plena',
    ],
    relatedCharacters: ['godrick', 'morgott', 'godfrey', 'kenneth-haight', 'nepheli-loux', 'patches', 'edgar', 'irina'],
    relatedFactions: ['orden-dorado', 'misbegotten', 'crucible-knights'],
    relatedRegions: ['stormveil', 'peninsula-llorosa', 'castle-morne', 'liurnia', 'caelid'],
    relatedConcepts: ['crucible', 'grace', 'tarnished'],
    relatedTimelineEvents: ['marika-godfrey', 'estado-mundo-mancillado'],
  },

  stormveil: {
    summary:
      'Stormveil es fortaleza fronteriza al norte de Limgrave, construida originalmente por Godfrey como palacio antes de su ascensión a Leyndell. Tras el exilio del Primer Señor, el castillo pasó por manos cada vez más débiles hasta caer en las de Godrick el Injertado. Sus muros están decorados con cuerpos injertados de soldados caídos — estética del despojo convertida en símbolo de poder. Margit el Maleante (Morgott encubierto) aguarda en el portal como primer obstáculo del Tarnished. Es prueba inicial de su capacidad cosmológica.',
    deepLore: [
      h(2, 'Geografía: la fortaleza fronteriza'),
      p(
        'Stormveil se ubica al norte de ',
        link('Limgrave', 'region', 'limgrave'),
        ' en Stormhill, dominando la frontera entre Limgrave y la Meseta de Altus. Su geografía es estratégica: el castillo se construye sobre acantilados castigados por vientos cosmológicos perpetuos (los rituales de la Tormenta dieron el nombre a la fortaleza). Tres puertas principales y múltiples pasajes laterales requieren combate progresivo. Su torre central (Liftside Chamber) alberga la sala del trono. Catacumbas internas conectan con sistemas subterráneos pre-Orden. La región exterior incluye Stormhill propiamente, donde Margit aguarda como centinela.'
      ),
      h(2, 'Historia detallada: el palacio del Primer Señor'),
      p(
        'Stormveil fue originalmente el palacio fronterizo de ',
        link('Godfrey', 'character', 'godfrey'),
        ' antes de su ascensión como Primer Señor Elden. Los rituales de la Tormenta — el Espíritu Tormenta atado en su frente como dispositivo cosmológico — partían desde estas torres. La heráldica original incluía iconografía del Storm Hawk King (el linaje pre-Orden que Godfrey había conquistado), reabsorbida ritualmente. Tras el exilio del Primer Señor, el castillo pasó por manos cada vez más débiles. Cada generación heredaba menos sangre divina y necesitaba más recursos artificiales para sostener el linaje. Eventualmente cayó en manos de ',
        link('Godrick', 'character', 'godrick'),
        ' — descendiente lateral, no hijo directo de Marika, quien necesitó practicar injertos rituales para mantener su Gran Runa diluida.'
      ),
      h(2, 'La estética del injerto'),
      p(
        'Las paredes de Stormveil están adornadas con cuerpos injertados de soldados caídos: brazos múltiples saliendo de muros, manos desplegadas como decoración mortuoria, cabezas dispuestas en estandartes. Es la firma cosmológica de Godrick. Su práctica de fortalecerse mediante injertos se convirtió en lenguaje arquitectónico — el castillo entero es exhibición ritualizada de su técnica. La operación es simultáneamente trofeo (cada víctima injertada documenta poder ejercido) y necesidad (cada injerto sostiene cosmológicamente su Gran Runa diluida). La precedente filosófica viene de los ',
        link('Caballeros del Crisol', 'faction', 'crucible-knights'),
        ' del Orden primitivo — pero la versión de Godrick es técnica corporal cruda, no ritual integrador como la de los Crucible Knights originales.'
      ),
      h(2, 'Margit el Maleante: el centinela'),
      p(
        link('Margit', 'character', 'morgott'),
        ' aguarda en Stormhill como centinela del portal. Es ',
        link('Morgott', 'character', 'morgott'),
        ' encubierto bajo identidad alternativa — el Rey Omen de Leyndell operando como agente avanzado de vigilancia. Su función dual: probar la capacidad cosmológica del Tarnished que llega, y proteger Stormveil de cualquier candidato no calificado. Su línea de combate es exacta: "',
        em('What a sad sight you are, Tarnished — you and your fellow accursed kin'),
        '". La derrota de Margit no lo mata — solo lo retira temporalmente; reaparecerá en Leyndell como el Rey Omen plenamente revelado.'
      ),
      h(2, 'Estado actual: la primera prueba'),
      p(
        'Stormveil es la primera fortaleza mayor del viaje del Tarnished. Su atravesamiento entrega la primera Gran Runa (la de Godrick, que rige el linaje y la herencia mediante injerto). ',
        link('Nepheli Loux', 'character', 'nepheli-loux'),
        ' puede acompañar al Tarnished durante la batalla contra Godrick si ',
        link('Kenneth Haight', 'character', 'kenneth-haight'),
        ' la dirigió hacia él. La victoria abre la posibilidad de la coronación de Nepheli como nueva regente — restauración del linaje pre-dorado del Storm Hawk King. ',
        link('Roderika', 'character', 'roderika'),
        ' opera ahí inicialmente como sobreviviente traumada antes de unirse a la Mesa Redonda. ',
        link('Gostoc', 'character', 'gostoc'),
        ' es el portero traidor que sobrevive vendiéndose al ganador del momento.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Stormveil es el monumento del juego a la fortaleza heredada que ya no encaja con su heredero. Godfrey la construyó cuando el régimen del Orden Dorado se consolidaba. Godrick la ocupa cuando ese régimen se desmorona. La degradación arquitectónica documenta la degradación dinástica: la heráldica del Storm Hawk King está oculta bajo capas de decoración Godrick, los rituales de la Tormenta están abandonados, los cuerpos injertados son la única estética nueva. La pregunta filosófica: ¿qué pasa con una fortaleza cuando su línea de herencia se diluye? Stormveil responde: se convierte en exhibición de su propia decadencia. El Tarnished que la atraviesa puede continuar la decadencia (matar a Godrick y heredar la Gran Runa) o catalizar restauración (asistir a Nepheli para coronar el linaje pre-dorado). La elección define qué tipo de Señor Elden el Tarnished será.'
      ),
    ],
    confirmed: [
      'Stormveil fue palacio fronterizo de Godfrey antes de su ascensión a Leyndell',
      'Tras el exilio del Primer Señor, pasó por manos cada vez más débiles',
      'Godrick lo ocupa actualmente practicando injertos rituales sobre soldados caídos',
      'Margit (Morgott encubierto) aguarda en Stormhill como centinela',
      'Atravesarlo entrega la primera Gran Runa (la de Godrick)',
      'Nepheli Loux puede ser coronada como nueva regente restaurando el linaje pre-dorado',
      'Gostoc sobrevive como portero traidor vendiéndose al ganador del momento',
    ],
    inferred: [
      'La heráldica original del Storm Hawk King está oculta bajo capas de decoración Godrick',
      'Los injertos de Godrick son simultáneamente trofeo y necesidad cosmológica',
      'La precedente filosófica viene de los Caballeros del Crisol del Orden primitivo',
      'La degradación arquitectónica documenta la degradación dinástica',
    ],
    theories: [
      'Las catacumbas internas conectan subterráneamente con Deeproot Depths',
      'Existieron civilizaciones pre-Storm Hawk King cuyos restos están bajo el castillo',
      'Margit fue desplegado específicamente como prueba ritual del Tarnished, no solo como vigilancia',
      'El Espíritu Tormenta original sigue parcialmente atado a las torres aunque Godfrey ya no esté',
    ],
    ambiguous: [
      'Cuándo exactamente Godrick tomó posesión del castillo',
      'Si las catacumbas internas albergan secretos cosmológicos no descubiertos',
      'Si Nepheli puede sostener el linaje pre-dorado a largo plazo',
      'Si Gostoc opera autónomo o tiene cómplices en otras regiones',
    ],
    relatedCharacters: ['godrick', 'godfrey', 'morgott', 'nepheli-loux', 'roderika', 'gostoc', 'kenneth-haight'],
    relatedRegions: ['limgrave', 'leyndell'],
    relatedFactions: ['orden-dorado', 'crucible-knights', 'golden-lineage'],
    relatedConcepts: ['great-rune', 'crucible', 'tarnished'],
    relatedTimelineEvents: ['marika-godfrey', 'exilio-godfrey'],
  },

  liurnia: {
    summary:
      'Liurnia de los Lagos es vasta extensión inundada al este de Limgrave: lago perpetuo, ruinas hundidas, torres parcialmente sumergidas, brumas eternas. Hogar de la dinastía Caria mestiza fundada por la unión Radagon-Rennala, sede de la Academia de Raya Lucaria, refugio de Albinaurics encubiertos. Es la región del agua, el conocimiento y la melancolía aristocrática. Su tradición lunar precede al Orden Dorado; la guerra de Radagon y el subsiguiente abandono dejaron la región atrapada en duelo cosmológico permanente.',
    deepLore: [
      h(2, 'Geografía: las tierras del lago'),
      p(
        'Liurnia ocupa el centro-norte de las Tierras Intermedias occidental — vasta cuenca inundada con ruinas sumergidas, peñones que emergen como islas, brumas perpetuas que difuminan las distancias. La tradición local cuenta que el agua llegó como castigo divino tras una guerra cosmológica. Otros relatos sostienen que Liurnia siempre fue así y los humanos aprendieron a vivir sobre el agua. La región conecta con ',
        link('Limgrave', 'region', 'limgrave'),
        ' al sureste a través del Stormhill, con ',
        link('Caelid', 'region', 'caelid'),
        ' al este a través de pasos peligrosos, y con la ',
        link('Meseta de Altus', 'region', 'altus-plateau'),
        ' al norte mediante la Gran Escalera. Sus subdivisiones incluyen Three Sisters (Caria-Manor + dos torres satélite), Raya Lucaria (la Academia central), las Albinauric Villages (refugios encubiertos), y el Moonlight Altar al noroeste.'
      ),
      h(2, 'Historia detallada: la dinastía mestiza'),
      p(
        link('Radagon', 'character', 'radagon'),
        ' lideró la guerra del Orden Dorado contra Liurnia siglos atrás. La invasión fue militarmente exitosa pero políticamente costosa. La reina-Gran Maestra ',
        link('Rennala', 'character', 'rennala'),
        ' propuso matrimonio como condición de paz para evitar la destrucción de la Academia y los reinos lunares. Radagon aceptó. La unión transformó la dinámica: dejó de ser guerra y se convirtió en alianza dinástica. ',
        link('Caria', 'faction', 'caria'),
        ' pasó a ser dinastía mestiza dentro del régimen del Orden Dorado, y la magia se compartió entre tradiciones — la ',
        link('Luna Llena', 'concept', 'full-moon'),
        ' tradicional Caria que Rennala dominaba se enseñó en la Academia junto con incantaciones del Orden Dorado.'
      ),
      p(
        'Tres hijos demidióses nacieron: ',
        link('Ranni', 'character', 'ranni'),
        ' (futura Empyrean rebelde), ',
        link('Radahn', 'character', 'radahn'),
        ' (futuro general supremo en Caelid), ',
        link('Rykard', 'character', 'rykard'),
        ' (futuro Lord of Blasphemy en Volcano Manor). Cada uno cargó la sangre mestiza distintivamente. Eventualmente Marika llamó a Radagon de regreso a Leyndell — Rennala perdió la razón, sus estudiantes la quemaron en espirales de dolor, los supervivientes la contuvieron con el Huevo Ambarino en su sala de banquete arruinada. La regencia familiar se fragmentó. ',
        link('Iji', 'character', 'iji'),
        ' y ',
        link('Seluvis', 'character', 'seluvis'),
        ' operaron como tutores parciales de Ranni adulta.'
      ),
      h(2, 'La Academia y sus excomulgados'),
      p(
        link('Raya Lucaria', 'region', 'raya-lucaria'),
        ' es la academia de magia más prestigiosa de las Tierras Intermedias. Su corpus incluye magia estelar, gravitacional y de cristales primordiales. Bajo Rennala alcanzó su esplendor; tras su quiebre opera en estado de ruina funcional. Sus excomulgados notables incluyen a ',
        link('Sellen', 'character', 'sellen'),
        ' (excomulgada por estudiar magia primordial prohibida), ',
        link('Lusat', 'character', 'lusat'),
        ' y ',
        link('Azur', 'character', 'azur'),
        ' (cristalizados parcialmente por la Corriente Primigenia), y ',
        link('Thops', 'character', 'thops'),
        ' (excomulgado por pobreza simple, no doctrinal).'
      ),
      h(2, 'Estado actual: la memoria del agua'),
      p(
        'Liurnia es la tierra que no olvida. Cada ruina sumergida es testimonio de algo silenciado por el Orden. Los rituales de Caria conservan rezos pre-Orden disfrazados de cortesía aristocrática. Los Albinaurics encubiertos como ',
        link('Albus', 'character', 'albus'),
        ' (disfrazado dentro de jarra rota) sobreviven en escondites improbables. El proyecto de ',
        link('Ranni', 'character', 'ranni'),
        ' opera desde Three Sisters preparando la Era de las Estrellas. ',
        link('Seluvis', 'character', 'seluvis'),
        ' colecciona muñecas en su torre lateral hasta ser silenciado por Iji. ',
        link('Miriel', 'character', 'miriel'),
        ' la tortuga ancestral predica en la Iglesia de Vows con serenidad estructural. La región es palimpsesto cosmológico — capas superpuestas de tradiciones que el régimen no pudo plenamente borrar.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Liurnia es el monumento del juego al duelo cosmológico permanente. Otras regiones tuvieron tragedias específicas (Caelid la Floración, el Haligtree el secuestro, Leyndell el sitio). Liurnia tiene tragedia ',
        em('crónica'),
        ' — el abandono de Radagon es herida que Rennala nunca cura, la Academia nunca recupera coherencia, los hijos nunca reconcilian sus respuestas opuestas al trauma. La región vive en estado de duelo cosmológico permanente. Sus brumas eternas son metonimia de la condición: nunca claridad plena, siempre niebla atravesable. La pregunta filosófica: ¿se puede sostener una región en duelo permanente? Liurnia responde: sí, pero a costa de operatividad reducida. La memoria es valiosa pero también pesada. Cada ruina sumergida es archivo y, simultáneamente, ancla.'
      ),
    ],
    confirmed: [
      'Liurnia es región inundada al centro-norte de las Tierras Intermedias occidental',
      'Radagon lideró la guerra del Orden Dorado contra Liurnia',
      'Rennala propuso matrimonio como condición de paz, fundando la dinastía Caria mestiza',
      'Sus tres hijos demidióses son Ranni, Radahn y Rykard',
      'Raya Lucaria es la academia de magia más prestigiosa de las Tierras Intermedias',
      'Sellen, Lusat, Azur y Thops fueron excomulgados de la Academia',
      'Tras el abandono de Radagon, Rennala fue contenida con el Huevo Ambarino',
    ],
    inferred: [
      'La región conserva tradiciones lunares pre-Orden disfrazadas como cortesía aristocrática',
      'Los Albinaurics encubiertos sobreviven en escondites improbables (jarras, ruinas, refugios)',
      'La Academia opera en estado de ruina funcional sin coordinación efectiva',
      'El proyecto de Ranni desde Three Sisters opera autónomamente del régimen oficial',
    ],
    theories: [
      'El agua de Liurnia llegó como castigo cosmológico tras guerra pre-Orden no documentada',
      'Existieron civilizaciones lunares anteriores a Caria cuyos restos siguen sumergidos',
      'La tradición Caria pre-Rennala incluyó cuartos lunares (fases intermedias) que se han perdido',
      'Marika tolera a la Academia porque Radagon retiene afecto residual hacia Rennala',
    ],
    ambiguous: [
      'Origen exacto del agua que inundó la región',
      'Si Rennala podría recuperar capacidad funcional bajo cosmología distinta',
      'Cuántos eras duró la unión Radagon-Rennala antes del abandono',
      'Si las brumas eternas son fenómeno natural o residuo cosmológico',
    ],
    relatedCharacters: ['rennala', 'radagon', 'ranni', 'iji', 'seluvis', 'sellen', 'thops', 'lusat', 'azur', 'albus', 'miriel'],
    relatedRegions: ['raya-lucaria', 'caria-manor', 'three-sisters', 'altus-plateau'],
    relatedFactions: ['caria', 'raya-lucaria', 'albinauricos'],
    relatedConcepts: ['dark-moon', 'full-moon', 'great-rune', 'glintstone', 'primeval-current'],
    relatedTimelineEvents: ['radagon-rennala', 'rennala-quiebre', 'sellen-excommunion'],
  },

  caelid: {
    summary:
      'Caelid es el yermo escarlata al este de las Tierras Intermedias. Antes próspero hogar de los Redmanes y la academia gravitacional de Sellia; tras el duelo Malenia-Radahn en la Batalla de Aeonia, la región entera fue cubierta por la Floración Escarlata. La Podredumbre no es contaminación física — es ocupación divina del paisaje, presencia material de un dios exterior del decaimiento. Hoy es tierra donde no crece nada vital y no muere completamente nadie. Los Redmanes residuales organizan el Festival ritual para liberar a Radahn mediante muerte digna.',
    deepLore: [
      h(2, 'Geografía: la tierra antes del horror'),
      p(
        'Caelid ocupa el este de las Tierras Intermedias conectada con ',
        link('Limgrave', 'region', 'limgrave'),
        ' al oeste (el Aeonia Swamp marca la frontera divisoria) y con regiones del norte y noreste. Antes de la fractura era región próspera bajo el liderazgo de los ',
        link('Redmanes', 'faction', 'redmanes'),
        ' — caballeros rojos leales a ',
        link('Radahn', 'character', 'radahn'),
        '. Sus subdivisiones incluían el ',
        link('Castillo Redmane', 'region', 'redmane-castle'),
        ' (sede de los caballeros rojos), ',
        link('Sellia', 'region', 'sellia'),
        ' (la academia menor de magia gravitacional), las llanuras agrícolas centrales, y los pantanos costeros. ',
        link('Sellen', 'character', 'sellen'),
        ' enseñó allí magia gravitacional a Radahn antes de su excomunión.'
      ),
      h(2, 'Historia detallada: la Batalla de Aeonia'),
      p(
        'El evento definitorio de la región es la Batalla de Aeonia. ',
        link('Malenia', 'character', 'malenia'),
        ' invadió Caelid buscando duelo decisivo con Radahn — los dos demidióses con mayor capacidad marcial documentada de las Tierras Intermedias. El combate fue militar, ritual y cosmológico simultáneamente. Radahn era invencible mediante medios convencionales — su masa marcial colosal y magia gravitacional lo hacían superior. Malenia eligió no perder y floreció parcialmente. Su cuerpo liberó la ',
        link('Podredumbre Escarlata', 'concept', 'scarlet-rot'),
        ' acumulada como tormenta cosmológica. La región entera cambió de carácter en cuestión de días.'
      ),
      p(
        'La Floración no fue contaminación física simple. La Podredumbre Escarlata es presencia material de un ',
        link('dios exterior', 'concept', 'dioses-exteriores'),
        ' del decaimiento — su presencia en Caelid es ocupación divina del paisaje. Los cielos se volvieron pútridos. La hierba dejó de crecer. Las criaturas locales se transformaron en versiones podridas o murieron en estado intermedio. Radahn perdió la mente — la Podredumbre lo redujo a estado animal violento que ningún tratamiento podía revertir. Los Redmanes vieron a su señor convertirse en monstruo en cuestión de días.'
      ),
      h(2, 'Estado actual: el yermo y el Festival'),
      p(
        'Hoy Caelid es yermo color sangre seca. Hierba muerta, cielos pútridos, criaturas-mosca-podredumbre vagando por los pantanos. La presencia material residual del dios queda como ',
        link('Lago de Podredumbre', 'region', 'lake-of-rot'),
        ' bajo Liurnia (conexión subterránea), donde otras hijas escarlatas convocan a ',
        link('Millicent', 'character', 'millicent'),
        ' a fusionarse. Los Redmanes residuales bajo dirección de ',
        link('Jerren', 'character', 'jerren'),
        ' organizan el Festival ritual: invitar a guerreros legendarios a darle al Radahn corrompido la muerte digna que su locura ya no le permite alcanzar. ',
        link('Gowry', 'character', 'gowry'),
        ' opera autónomo desde una aldea derruida cerca de Sellia, estudiando la Podredumbre y guiando a Millicent. Dragones podridos rondan los confines orientales — descendientes corrompidos de los Antiguos Dragones.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Caelid es el monumento del juego a la región-vasija de un dios externo. Donde Limgrave esconde estratos cosmológicos en sus subterráneos, Caelid los expone en su superficie — la Podredumbre Escarlata domina el paisaje completo. La región dejó de operar bajo régimen del Orden Dorado y pasó a ser territorio cosmológico del dios del decaimiento, sin acto formal de cesión. La pregunta filosófica: ¿qué pasa con una región cuando su geografía es ocupada por un dios externo distinto al régimen oficial? La respuesta del juego: el régimen pierde control efectivo aunque conserve nominalmente la región. Caelid sigue formalmente bajo Orden Dorado, pero operativamente bajo el dios del decaimiento. La Era del Crepúsculo o la Era de las Estrellas podrían reclamarla cosmológicamente — la Era de la Fractura solo perpetuaría la ocupación.'
      ),
    ],
    confirmed: [
      'Caelid fue región próspera bajo los Redmanes antes de la fractura',
      'Sellia era academia menor de magia gravitacional donde Sellen enseñó a Radahn',
      'La Batalla de Aeonia entre Malenia y Radahn produjo la Floración Escarlata',
      'La Podredumbre Escarlata es presencia material de un dios exterior del decaimiento',
      'Radahn perdió la mente y quedó reducido a estado animal violento',
      'Jerren organiza el Festival ritual para liberar a Radahn mediante muerte digna',
      'Los Redmanes residuales siguen operativos pese a la corrupción del paisaje',
    ],
    inferred: [
      'La Floración cosmológica fue ocupación divina del paisaje, no contaminación física',
      'El régimen del Orden Dorado perdió control efectivo aunque conserve nominalmente la región',
      'Las criaturas-mosca-podredumbre son hijas escarlatas dispersas de Malenia',
      'Los dragones podridos son descendientes corrompidos de los Antiguos Dragones',
    ],
    theories: [
      'Sellia conocía la Floración como posibilidad cosmológica antes de Aeonia',
      'Existieron civilizaciones pre-Redmanes en Caelid cuyos restos están sumergidos en pantanos',
      'Si Malenia floreciera plenamente, la Podredumbre se extendería a las Tierras Intermedias enteras',
      'El dios del decaimiento puede ser hermano cosmológico del dios de la Llama Frenética',
    ],
    ambiguous: [
      'Cuándo exactamente ocurrió la Batalla de Aeonia respecto a otros eventos',
      'Identidad y nombre canónico del dios exterior del decaimiento',
      'Si Caelid puede recuperarse plenamente bajo cosmología post-Voluntad Mayor',
      'Si los Redmanes residuales saben del dios exterior o solo experimentan sus efectos',
    ],
    relatedCharacters: ['radahn', 'malenia', 'jerren', 'gowry', 'millicent', 'sellen'],
    relatedRegions: ['lake-of-rot', 'redmane-castle', 'sellia', 'liurnia'],
    relatedFactions: ['redmanes', 'kindred-of-rot', 'orden-dorado'],
    relatedConcepts: ['scarlet-rot', 'dioses-exteriores', 'gravity-magic', 'primeval-current'],
    relatedTimelineEvents: ['demidioses-fractura', 'aeonia-bloom', 'radahn-festival'],
    relatedEndings: ['duskborn', 'age-of-stars'],
  },

  leyndell: {
    summary:
      'Leyndell es la capital cosmológica del Orden Dorado, ciudad-templo construida alrededor de la base del Árbol Áureo. Sus calles ascienden en espirales, sus templos brillan en oro pálido, sus guardianes son los Caballeros Dorados. Es la ciudad más bella de las Tierras Intermedias y la más estructuralmente compleja: bajo sus calles doradas yacen tres estratos cosmológicos superpuestos — alcantarillas de Omens encarcelados, raíces de Deathroot infiltradas desde Deeproot Depths, y la cripta sellada de los Tres Dedos. La ironía estructural está incrustada en cada nivel.',
    deepLore: [
      h(2, 'Geografía: la ciudad del árbol'),
      p(
        'Leyndell se construyó alrededor de la base del ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' como capital cosmológica del régimen. Su geografía vertical es estructuralmente significativa: las calles ascienden en espirales hacia el árbol central, los templos están dispuestos jerárquicamente según proximidad al núcleo, los palacios reales rodean directamente la base del Árbol Áureo. La operación arquitectónica es deliberada — la ciudad ',
        em('es'),
        ' un templo cuyas estructuras manifestan la cosmología dorada en su disposición física. Conecta con la ',
        link('Meseta de Altus', 'region', 'altus-plateau'),
        ' al sur, con ',
        link('Mohgwyn', 'region', 'mohgwyn'),
        ' subterráneamente al noroeste, y con las ',
        link('Mountaintops of the Giants', 'region', 'mountaintops'),
        ' al norte.'
      ),
      h(2, 'Historia detallada: la capital cosmológica'),
      p(
        'La ciudad fue fundada por ',
        link('Marika', 'character', 'marika'),
        ' tras consolidar el régimen con ',
        link('Godfrey', 'character', 'godfrey'),
        '. Era simultáneamente sede política, centro religioso, archivo cosmológico, y residencia divina. La Mesa Redonda — institución administrativa de los Tarnished retornados — opera bajo Leyndell como nodo de mediación entre la diosa central, los Dos Dedos, y los candidatos al trono Elden. ',
        link('Enia', 'character', 'enia'),
        ' oficia rituales de coronación allí; ',
        link('Gideon Ofnir', 'character', 'gideon'),
        ' acumula información estratégica desde su biblioteca; ',
        link('Brother Corhyn', 'character', 'corhyn'),
        ' enseñaba doctrina antes de seguir a Goldmask.'
      ),
      h(2, 'Los tres estratos subterráneos'),
      p(
        'La complejidad cosmológica de Leyndell radica en sus tres estratos subterráneos superpuestos. Cada uno documenta una contradicción estructural del régimen.'
      ),
      h(3, 'Las alcantarillas: el secreto encarcelado'),
      p(
        'El primer estrato es el sistema de alcantarillas (Subterranean Shunning-Grounds) donde el régimen encarcela a los ',
        link('Omens', 'faction', 'omens'),
        ' considerados maldición. Los gemelos ',
        link('Morgott', 'character', 'morgott'),
        ' y ',
        link('Mohg', 'character', 'mohg'),
        ' — hijos de la propia Marika a través de Radagon — fueron prisioneros allí durante su juventud. Otros Omens menos famosos siguen viviendo en estos pasajes, donde los ',
        link('Verdugos Omen', 'faction', 'omenkillers'),
        ' oficiaron rituales correctivos durante eras. La existencia de un sistema penitenciario completo dedicado a los hijos del régimen documenta cuán estructural era la persecución.'
      ),
      h(3, 'Las raíces: la herida infiltrada'),
      p(
        'El segundo estrato son las raíces de la ',
        link('Deathroot', 'concept', 'deathroot'),
        ' infiltradas desde ',
        link('Deeproot Depths', 'region', 'deeproot-depths'),
        ' bajo Limgrave. La corrupción del cadáver de ',
        link('Godwyn', 'character', 'godwyn'),
        ' viaja físicamente por las raíces del Árbol Áureo hasta llegar bajo Leyndell. Cada vez que un cadáver de la capital se reanima como Aquel que Vive en la Muerte, la fuente rastreable es la herida fundacional. La ironía estructural es exacta: el sistema vascular cosmológico del régimen es ahora vector de su corrupción más profunda.'
      ),
      h(3, 'La cripta sellada: la doctrina opuesta'),
      p(
        'El tercer estrato — el más profundo y más cosmológicamente cargado — es la cripta sellada de los ',
        link('Tres Dedos', 'faction', 'tres-dedos'),
        ', presencia material de la ',
        link('Llama Frenética', 'concept', 'frenzied-flame'),
        ' bajo la propia capital del Orden. La cripta está sellada tras tres puertas ceremoniales que se abren con llaves rituales específicas. La doctrina nihilista frenética — que existir es sufrir y la única piedad es terminar todo — opera literalmente bajo el templo central del régimen que defiende lo opuesto. La ironía no necesita comentario.'
      ),
      h(2, 'El asedio final y la batalla cosmológica'),
      p(
        'Cuando el Tarnished llega, la ciudad ya está parcialmente arruinada por la guerra civil cosmológica. ',
        link('Morgott', 'character', 'morgott'),
        ' la defiende como Rey Omen con fidelidad obstinada del rechazado. ',
        link('Godfrey', 'character', 'godfrey'),
        ' regresa como Espectro Dorado guardando el trono — el Primer Señor Elden retornando a defender el régimen que lo exilió. Tras la quema del Árbol Áureo por ',
        link('Melina', 'character', 'melina'),
        ', el Tarnished accede al núcleo del árbol donde ',
        link('Marika', 'character', 'marika'),
        ' está encadenada. Tras golpearla, ',
        link('Radagon', 'character', 'radagon'),
        ' emerge como guardián residual. Tras Radagon, la ',
        link('Bestia Elden', 'concept', 'bestia-elden'),
        ' aparece como aspecto autónomo del Anillo. Tras la Bestia, el Tarnished elige uno de los seis finales del cosmos.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Leyndell es el monumento del juego a la institución cosmológica como contradicción incrustada. Cada estrato de la ciudad documenta una grieta del régimen: las alcantarillas exponen la persecución de los propios hijos, las raíces exponen la herida fundacional sin sanar, la cripta expone la doctrina opuesta tolerada por sello pero no por refutación. La ciudad más bella de las Tierras Intermedias son también la más estructuralmente comprometida — su belleza arquitectónica es metonimia de la cosmología que sostiene: hermosa en apariencia, hueca en coherencia. La pregunta filosófica: ¿es viable un régimen cuya capital es contradicción superpuesta? Leyndell responde: viable durante eras, pero no permanentemente. El final cosmológico que el Tarnished elige se ejecuta precisamente en este lugar — la contradicción se resuelve donde se concentra.'
      ),
    ],
    confirmed: [
      'Leyndell es capital cosmológica del Orden Dorado construida alrededor del Árbol Áureo',
      'La Mesa Redonda opera bajo Leyndell como nodo de mediación administrativa',
      'Las alcantarillas (Subterranean Shunning-Grounds) encarcelan Omens, incluyendo a Morgott y Mohg en su juventud',
      'Las raíces de Deathroot se infiltran desde Deeproot Depths',
      'La cripta sellada de los Tres Dedos contiene la presencia activa de la Llama Frenética',
      'Morgott defiende la ciudad como Rey Omen tras la fractura',
      'El combate final del juego ocurre en el núcleo del Árbol Áureo quemado',
    ],
    inferred: [
      'La geografía vertical de la ciudad manifiesta la cosmología dorada en su disposición física',
      'Cada estrato subterráneo documenta una contradicción estructural del régimen',
      'El sistema vascular cosmológico del régimen se convirtió en vector de su corrupción',
      'La doctrina frenética fue sellada en lugar de refutada porque el régimen no encontró contraargumento',
    ],
    theories: [
      'Existieron civilizaciones pre-Orden bajo Leyndell cuyos restos están en estratos aún no documentados',
      'La cripta de los Tres Dedos fue construida específicamente para contener la doctrina antes del fallo cosmológico',
      'Marika consciente puede comunicarse débilmente desde su prisión arbórea',
      'Los rituales del Subterranean Shunning-Grounds tienen función cosmológica aún no plenamente documentada',
    ],
    ambiguous: [
      'Cuándo exactamente fue construida la ciudad respecto a la fundación del régimen',
      'Cuántos Omens viven actualmente en las alcantarillas',
      'Si Marika consciente prefiere algún final específico de los seis posibles',
      'Origen exacto de las llaves rituales que abren la cripta de los Tres Dedos',
    ],
    relatedCharacters: ['marika', 'radagon', 'godfrey', 'godwyn', 'morgott', 'mohg', 'melina', 'enia', 'gideon', 'corhyn', 'goldmask'],
    relatedRegions: ['altus-plateau', 'mohgwyn', 'subterranean-shunning-grounds', 'mountaintops'],
    relatedFactions: ['orden-dorado', 'omens', 'tres-dedos', 'omenkillers', 'finger-readers', 'dos-dedos'],
    relatedConcepts: ['erdtree', 'great-rune', 'frenzied-flame', 'deathroot', 'voluntad-mayor', 'bestia-elden'],
    relatedTimelineEvents: ['la-fractura', 'finales', 'morgott-mohg-imprisonment', 'erdtree-quemado'],
    relatedEndings: ['fracture', 'order', 'duskborn', 'frenzied-flame', 'age-of-stars', 'despair'],
  },

  haligtree: {
    summary:
      'El Haligtree es árbol cosmológico alternativo plantado por Miquella en las tierras nevadas más allá de las Mountaintops. A diferencia del Árbol Áureo, no recibe gracia de la Voluntad Mayor — su luz es propia, alimentada por el Oro sin Aleación que repele la influencia de los dioses externos. Bajo sus raíces se construyó Elphael como capital de la única utopía documentada de las Tierras Intermedias: refugio para Albinaurics, Misbegotten y excluidos del Orden Dorado. Tras el secuestro de Miquella y la Floración de Malenia, el árbol se contaminó con Podredumbre.',
    deepLore: [
      h(2, 'Geografía: el árbol secreto'),
      p(
        'El Haligtree se ubica en las tierras nevadas más allá de las Mountaintops del norte, accesible solo a través del ',
        link('Snowfield Consagrado', 'region', 'consecrated-snowfield'),
        ' — yermo nevado que consume vida no autorizada. La región alberga dos áreas principales: ',
        link('Ordina', 'region', 'ordina'),
        ' (ciudad ritual de invocación que sirve como portal cosmológico al árbol) y ',
        link('Elphael', 'region', 'elphael'),
        ' (la ciudad-baluarte construida bajo las raíces). El acceso requiere ensamblar el Mapa Secreto del Snowfield (custodiado por ',
        link('Albus', 'character', 'albus'),
        ' y ',
        link('Latenna', 'character', 'latenna'),
        ' en mitades distintas) y completar el ritual de Ordina. La protección geográfica era diseño cosmológico — la nieve consagrada filtra a quienes pueden llegar al árbol.'
      ),
      h(2, 'Historia detallada: la cosmología alternativa'),
      p(
        'El Haligtree fue plantado por ',
        link('Miquella', 'character', 'miquella'),
        ' como manifestación física de su proyecto cosmológico antiteo. La premisa filosófica: si el ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' dorado distribuye gracia contaminada por la influencia de la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ', un árbol nuevo cuya luz fuera ',
        link('Oro sin Aleación', 'concept', 'unalloyed-gold'),
        ' sería cosmología pura. La operación requirió eras de preparación alquímica y filosófica — Miquella canalizó Oro sin Aleación durante eras como savia primaria, convirtiéndolo gradualmente en árbol cosmológico funcional. ',
        link('Malenia', 'character', 'malenia'),
        ' protegía militarmente el santuario; los ',
        link('Cleanrot Knights', 'faction', 'cleanrot-knights'),
        ' eran su guardia bajo juramento de infección voluntaria de Podredumbre como solidaridad ontológica con la Empyrean.'
      ),
      h(2, 'La utopía: Elphael bajo las raíces'),
      p(
        'Bajo las raíces del árbol se construyó Elphael como capital del proyecto utópico. Refugiados ',
        link('Albinaurics', 'faction', 'albinauricos'),
        ', ',
        link('Misbegotten', 'faction', 'misbegotten'),
        ', y excluidos diversos del Orden Dorado peregrinaron a través del Snowfield para llegar al árbol. La travesía costó vidas — la nieve consume vida no autorizada — pero los que llegaron vivieron como ciudadanos plenos del proyecto. Su clero era mixto, su gobierno distribuido, su seguridad militar en manos de los Cleanrot Knights bajo Malenia. Por primera vez en la historia de las Tierras Intermedias, un sistema cosmológico reconocía como personas a los que el régimen oficial clasificaba como aberración. Era utopía operativa, no ideal teórico.'
      ),
      h(2, 'La doble caída: Aeonia y secuestro'),
      p(
        'El proyecto colapsó en dos golpes sucesivos. Primero, la ',
        link('Batalla de Aeonia', 'timeline', 'aeonia-bloom'),
        ': cuando Malenia floreció parcialmente para no perder contra Radahn, la Podredumbre escapó del control individual. Su Empyrean regresó al Haligtree infectada de modo más profundo. La Podredumbre residual contaminó el árbol mismo — su savia de Oro sin Aleación se mezcló con escarlata. Segundo, el secuestro de Miquella por ',
        link('Mohg', 'character', 'mohg'),
        ': sin Miquella despierto canalizando Oro sin Aleación, la corrupción Aeonia avanzó sin contención. Los Albinaurics enloquecieron y se transformaron progresivamente. Los Cleanrot Knights perdieron control. Cuando el Tarnished llega, Elphael es ciudad arruinada que conserva la forma utópica vacía de su contenido.'
      ),
      h(2, 'Estado actual: la utopía corrompida'),
      p(
        'El árbol sigue en pie pero su luz dorada es ahora intermitente. La Podredumbre se ha integrado parcialmente al sistema circulatorio del árbol. Los Albinaurics restantes son versiones corrompidas de sí mismos. Los Cleanrot Knights operan en bucles defensivos sin coordinación coherente. ',
        link('Loretta', 'character', 'royal-knight-loretta'),
        ' (Royal Knight) defiende rutas específicas. Malenia incompleta espera en su sala interior el regreso del gemelo que nunca despertó. ',
        link('Millicent', 'character', 'millicent'),
        ', si la quest se completó, llega como aliada residual. La utopía no fue destruida — fue ',
        em('vaciada de su contenido'),
        ' mientras conservaba su forma.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'El Haligtree es el monumento del juego a la utopía como existencia frágil. Era posible — el proyecto operó genuinamente durante eras, refugió a miles, demostró que la integración era viable. Pero su existencia dependía estructuralmente de tres condiciones simultáneas: Miquella despierto, Malenia conteniendo la podredumbre, distancia geográfica del régimen oficial. Cuando dos de las tres fallaron casi simultáneamente, el proyecto colapsó. La pregunta filosófica: ¿es la utopía cosmológicamente viable o solo posibilidad transitoria? El juego responde: viable pero estructuralmente vulnerable. La esperanza no se desvanece — solo requiere condiciones específicas que el régimen anfitrión activamente sabotea. El Haligtree es prueba de que ',
        em('la utopía existió'),
        ' — y eso solo es lo que la mantiene concebible bajo cualquier final del juego.'
      ),
    ],
    confirmed: [
      'El Haligtree fue plantado por Miquella en las tierras nevadas más allá de las Mountaintops',
      'Su luz es Oro sin Aleación, no gracia de la Voluntad Mayor',
      'Bajo sus raíces se construyó Elphael como capital del proyecto utópico',
      'Refugió Albinaurics, Misbegotten y excluidos del Orden Dorado',
      'Malenia protegía militarmente; los Cleanrot Knights eran su guardia',
      'La Podredumbre lo infectó tras la Batalla de Aeonia y el secuestro de Miquella',
      'El acceso requiere el Mapa Secreto del Snowfield ensamblado y el ritual de Ordina',
    ],
    inferred: [
      'Era la única utopía operativa documentada de las Tierras Intermedias',
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
    relatedCharacters: ['miquella', 'malenia', 'mohg', 'royal-knight-loretta', 'millicent', 'albus', 'latenna'],
    relatedFactions: ['cleanrot-knights', 'albinauricos', 'misbegotten', 'haligtree'],
    relatedRegions: ['consecrated-snowfield', 'mohgwyn', 'elphael', 'ordina'],
    relatedConcepts: ['unalloyed-gold', 'haligtree', 'scarlet-rot', 'voluntad-mayor', 'erdtree'],
    relatedTimelineEvents: ['miquella-malenia', 'unalloyed-gold-haligtree', 'aeonia-bloom', 'mohg-toma-miquella'],
  },

  mohgwyn: {
    summary:
      'Mohgwyn Palace es dinastía subterránea construida por Mohg lejos del Árbol Áureo, oculta bajo la superficie de las Tierras Intermedias. Valle de roca roja, tierra fértil de sangre, lagos carmesíes — todo alimentado por la presencia cosmológica de la Madre Informe. Aquí Mohg trajo el cuerpo dormido de Miquella para criar al nuevo dios consorte mediante rituales hemáticos. La población local es Albinaurics capturados como reserva de sangre — cada cuerpo es alimento del proyecto blasfemo. Es altar a un dios que nunca despertó.',
    deepLore: [
      h(2, 'Geografía: la dinastía oculta'),
      p(
        'Mohgwyn Palace se ubica subterráneamente bajo el noroeste de las Tierras Intermedias, conectado con ',
        link('Leyndell', 'region', 'leyndell'),
        ' mediante pasajes ocultos en el Subterranean Shunning-Grounds y con regiones marginales mediante portales rituales (uno notable opera desde Mohgwyn Palace via "Pureblood Knight\'s Medal" de Varré). Su geografía interna combina valles de roca volcánica roja, ríos de sangre estancada (no metafórico — sangre real acumulada de víctimas), bosques de árboles negros sin hojas, palacios construidos en arquitectura ritual sangrienta, y catacumbas inferiores donde los Albinaurics capturados cuelgan como reserva activa. La tierra misma está ',
        em('enrojecida cosmológicamente'),
        ' — la presencia de la ',
        link('Madre Informe', 'concept', 'formless-mother'),
        ' la transformó.'
      ),
      h(2, 'Historia detallada: la dinastía sangrienta'),
      p(
        link('Mohg', 'character', 'mohg'),
        ', expulsado del Orden Dorado por su naturaleza Omen, encontró nuevo dios externo en la ',
        link('Madre Informe', 'concept', 'formless-mother'),
        '. El pacto le concedió la ',
        link('sangre flameante', 'concept', 'bloodflame'),
        ' como instrumento ritual y la posibilidad de fundar régimen cosmológico paralelo al Orden. Construyó Mohgwyn como sede de su dinastía. La población inicial fue gente desafecta del régimen oficial — Omens fugitivos, vasallos personales, ',
        link('Bloody Fingers', 'faction', 'bloody-fingers'),
        ' iniciados. Su corte oculta operaba autónomamente del régimen dorado durante eras antes de que el Tarnished la descubriera.'
      ),
      h(2, 'El proyecto del nuevo dios'),
      p(
        'El proyecto cosmológico central de Mohg fue ambicioso: criar a ',
        link('Miquella', 'character', 'miquella'),
        ' como consorte divino para instaurar nueva era cosmológica con él (Mohg) como Lord of Blood. Tras secuestrar a Miquella en su capullo dorado del Haligtree, Mohg trajo el cuerpo dormido al Palacio de Mohgwyn. Allí inició rituales de incubación — ofrendas de sangre constantes alimentando el capullo, intentando despertar a Miquella bajo influencia de la Madre Informe en lugar del Oro sin Aleación original. La operación nunca culminó. Miquella permaneció dormido, su despertar nunca ocurrió bajo las condiciones del proyecto.'
      ),
      h(2, 'La masacre Albinauric'),
      p(
        'La población activa del palacio es horrenda. ',
        link('Albinaurics', 'faction', 'albinauricos'),
        ' del Haligtree fueron capturados masivamente tras el secuestro de Miquella — sin Miquella protegiéndolos, no había forma de contener al ataque. ',
        link('Varré', 'character', 'varre'),
        ' opera como reclutador-coordinador del culto, atrayendo nuevos Tarnished mediante invitaciones rituales (el "bautismo ensangrentado" del Pureblood Knight\'s Medal). Los cuerpos Albinauric cuelgan en las catacumbas inferiores como reserva de sangre — cada uno sangrado ritualmente para alimentar el proyecto. La operación es genocidio ritualizado disfrazado de proyecto cosmológico. La cuna del nuevo dios es un lago hecho de sus víctimas.'
      ),
      h(2, 'Estado actual: la arqueología del fracaso'),
      p(
        'Cuando el Tarnished llega, Mohg ya ha sido derrotado o lo será. El proyecto está congelado en el momento de su falla. Miquella sigue dormido en el capullo dorado, sin despertar. Las ofrendas siguen sangrando. Los Albinaurics colgantes siguen vivos en estado liminal. Varré sigue reclutando hasta que el Tarnished decide enfrentarlo. Es altar a un dios que nunca despertó — la operación cosmológica más ambiciosa post-fractura, congelada en su momento de fracaso.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Mohgwyn es el monumento del juego al proyecto cosmológico ambicioso que falla por una sola condición no cumplida. Mohg tuvo todo: pacto cosmológico real con la Madre Informe, instrumentación operativa (sangre flameante), recursos rituales (Albinaurics como reserva), captura del candidato (Miquella en capullo). Falló por una razón: Miquella no era criable bajo influencia hostil. El proyecto requería despertarlo bajo Madre Informe; pero Miquella estaba diseñado por sí mismo (cosmológicamente) para despertar bajo Oro sin Aleación. La incompatibilidad fue irreducible. La pregunta filosófica: ¿se puede forzar cosmología contra la voluntad del candidato? La respuesta del juego: no. La cuna sangrienta nunca produjo dios; solo produjo cementerio Albinauric. El régimen alternativo más ambicioso de las Tierras Intermedias post-fractura es testimonio arqueológico de su propia falla estructural.'
      ),
    ],
    confirmed: [
      'Mohgwyn Palace fue construido por Mohg como dinastía oculta bajo la superficie de las Tierras Intermedias',
      'Su geografía está alimentada cosmológicamente por la presencia de la Madre Informe',
      'Mohg trajo el cuerpo dormido de Miquella tras secuestrarlo del Haligtree',
      'Los rituales de incubación buscaban despertar a Miquella bajo la Madre Informe',
      'Los Albinaurics capturados cuelgan en catacumbas como reserva de sangre',
      'Varré opera como reclutador-coordinador del culto Bloody Fingers',
      'El proyecto nunca culminó — Miquella permaneció dormido',
    ],
    inferred: [
      'La incompatibilidad cosmológica entre Madre Informe y Oro sin Aleación impidió el despertar',
      'La operación es genocidio ritualizado disfrazado de proyecto cosmológico',
      'El régimen alternativo más ambicioso de las Tierras Intermedias post-fractura es Mohgwyn',
      'La sangre acumulada en lagos del palacio es real, no metafórica',
    ],
    theories: [
      'Mohg podría revivir bajo cosmología post-Voluntad Mayor con conocimiento residual del proyecto',
      'Existen otros agentes Bloody Finger operando autónomamente en regiones marginales',
      'La Madre Informe sigue activa esperando vasija alternativa tras el fallo del proyecto',
      'Algunos Albinaurics capturados conservan consciencia residual y podrían liberarse bajo final correcto',
    ],
    ambiguous: [
      'Cuándo exactamente Mohg secuestró a Miquella — cronología incierta',
      'Si Mohg conocía la incompatibilidad cosmológica antes de iniciar el proyecto',
      'Cuántos Albinaurics fueron capturados en total',
      'Si existen otros sectores del palacio aún no explorados',
    ],
    relatedCharacters: ['mohg', 'miquella', 'varre', 'malenia'],
    relatedFactions: ['bloody-fingers', 'omens', 'albinauricos'],
    relatedRegions: ['leyndell', 'haligtree'],
    relatedConcepts: ['formless-mother', 'bloodflame', 'dioses-exteriores', 'unalloyed-gold'],
    relatedTimelineEvents: ['mohg-toma-miquella', 'albinauric-massacre'],
    relatedEndings: ['fracture'],
  },

  'farum-azula': {
    summary:
      'Farum Azula es ciudadela suspendida fuera del tiempo, último vestigio del reino de los Antiguos Dragones. No está en ningún lugar fijo de las Tierras Intermedias — flota en una tormenta atemporal, perpetuamente desmoronándose sin terminar de caer. Era la capital del régimen dragónico bajo Lord Placidusax antes del Orden Dorado. Hoy alberga al propio Placidusax dormido en cámara escondida, a Maliketh refugiado tras el robo de la Runa de la Muerte, al clero Hombre-Bestia oficiando rituales del relámpago, y a dragones residuales que sobreviven en el tiempo congelado.',
    deepLore: [
      h(2, 'Geografía: la ciudad atemporal'),
      p(
        'Farum Azula no opera bajo geografía ordinaria de las Tierras Intermedias. Su ubicación es metafísica — flota en una tormenta cosmológica perpetua que circula fragmentos arquitectónicos en órbita eterna. La ciudadela parece estar siempre cayendo pero nunca termina el descenso. El acceso requiere viaje cosmológico específico — el Tarnished llega solo después de la quema del Árbol Áureo, transportado por intervención divina parcial. La estructura interna combina templos rituales del relámpago, salones funerarios dragónicos, plazas de combate ceremonial, y la Cámara Imperial donde duerme Placidusax. El tiempo opera distintamente dentro: los habitantes existen en presente extendido, sin envejecer pero sin avanzar.'
      ),
      h(2, 'Historia detallada: la capital del régimen anterior'),
      p(
        'Farum Azula fue capital cosmológica del régimen de los ',
        link('Antiguos Dragones', 'faction', 'dragones-antiguos'),
        ' bajo el liderazgo de ',
        link('Placidusax', 'character', 'placidusax'),
        ' como Señor Elden. La datación exacta del régimen está perdida — precede al Orden Dorado por eras incontables, posiblemente coexistió con el ',
        link('Crisol', 'concept', 'crucible'),
        ' como cosmología paralela. El régimen operaba bajo un dios externo cuya identidad nunca se enuncia en los textos del juego base. Los rituales del relámpago eran su autoridad cosmológica central. Los ',
        link('Hombres-Bestia', 'faction', 'hombres-bestia'),
        ' operaban como clero ritual del régimen, preservando tradiciones que sobrevivirían a la caída.'
      ),
      p(
        'Cuando el dios externo de los dragones desapareció — sin batalla, sin testigo, sin sucesor designado — el régimen perdió eje cosmológico. La operación fue gradual pero irreversible. Algunos dragones se dispersaron por las Tierras Intermedias (',
        link('Fortissax', 'character', 'fortissax'),
        ' eventualmente pactaría con Godwyn). Otros se retiraron a Farum Azula que quedó suspendida en su tormenta atemporal. Placidusax mismo se retiró a una cámara escondida y entró en estasis ritual, esperando un retorno cosmológico que el cosmos descartó. La ciudadela permanece desde entonces fuera del tiempo de las Tierras Intermedias — testimonio arqueológico viviente de cosmología derrocada que nunca terminó de caer.'
      ),
      h(2, 'Maliketh y la Runa de la Muerte'),
      p(
        link('Maliketh', 'character', 'maliketh'),
        ' eligió Farum Azula como refugio tras el robo del fragmento de la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ' por parte de Ranni durante la ',
        link('Noche de los Cuchillos Negros', 'timeline', 'ranni-noche-cuchillos'),
        '. La razón cosmológica es estructural: la ciudadela atemporal protegía la herida abierta de su cuerpo del avance del tiempo ordinario. En Farum Azula la corrupción residual del robo no podía progresar porque el tiempo no fluía normalmente. La operación es defensiva ritualizada — Maliketh protegía no solo la Runa restante sino el sello cosmológico fundacional del Orden Dorado.'
      ),
      h(2, 'Estado actual: el último santuario dragónico'),
      p(
        'Cuando el Tarnished llega tras la quema del Árbol Áureo, Farum Azula opera con sus habitantes residuales: el clero Hombre-Bestia oficiando rituales que ningún dios escucha desde hace eras, dragones residuales en bucles defensivos sin coordinación, ',
        link('Placidusax', 'character', 'placidusax'),
        ' dormido en su cámara escondida, ',
        link('Maliketh', 'character', 'maliketh'),
        ' refugiado en la Cámara del Relámpago. La pelea contra Maliketh es punto cosmológico clave: su derrota libera plenamente la Runa de la Muerte al cosmos. Las consecuencias son visibles desde Farum hasta Limgrave — los Aquellos que Viven en la Muerte se intensifican, la Deathroot avanza, la Era del Crepúsculo se vuelve operativamente posible. Placidusax permanece dormido — es opcional pelear con él. Su presencia es el dios que el juego permite olvidar, igual que el cosmos lo olvidó.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Farum Azula es el monumento del juego al régimen derrocado que persiste fuera del tiempo. Otros lugares de las Tierras Intermedias cambiaron tras la fractura del Orden Dorado; Farum Azula nunca cambió porque ya estaba fuera del flujo temporal cuando ese cambio ocurrió. La pregunta filosófica más extraña: ¿qué pasa con un régimen cosmológico cuyo dios desapareció? La respuesta arquitectónica de Farum Azula: el régimen no muere — se desconecta del tiempo. Sigue existiendo cosmológicamente, sigue habitado, sigue ritualmente operativo — solo deja de avanzar. La ciudadela es prueba persistente de que ',
        em('los regímenes cosmológicos no terminan, solo dejan de ser tiempo presente'),
        '. Cada ciclo del cosmos de las Tierras Intermedias podría producir nueva Farum Azula al ser reemplazado.'
      ),
    ],
    confirmed: [
      'Farum Azula es ciudadela suspendida fuera del tiempo, capital del régimen dragónico anterior',
      'Placidusax fue Señor Elden del régimen y duerme en cámara escondida',
      'Maliketh se refugió allí tras el robo de la Runa de la Muerte',
      'El clero Hombre-Bestia opera rituales del relámpago en su honor',
      'Dragones residuales sobreviven en bucles defensivos',
      'La derrota de Maliketh libera plenamente la Runa de la Muerte al cosmos',
      'El acceso requiere viaje cosmológico tras la quema del Árbol Áureo',
    ],
    inferred: [
      'El régimen dragónico colapsó por abandono divino, no por derrota militar',
      'La protección atemporal preservaba la corrupción residual del robo de la Runa',
      'Los rituales del clero Hombre-Bestia son testimonio de cosmología sin dios escuchando',
      'La ciudadela existe fuera del flujo temporal de las Tierras Intermedias',
    ],
    theories: [
      'El dios externo de Placidusax podría retornar bajo condiciones cosmológicas específicas',
      'Existieron otros Lords Elden de regímenes pre-Placidusax cuyos nombres se han perdido',
      'Si Placidusax despierta plenamente, podría reclamar el cosmos',
      'Maliketh sospechaba que el robo de la Runa por parte de Ranni iba a ocurrir y se preparó cosmológicamente',
    ],
    ambiguous: [
      'Identidad exacta del dios externo desaparecido del régimen dragónico',
      'Cuánto tiempo duró el régimen dragónico antes de la caída',
      'Si Maliketh sabe del plan completo de Ranni desde antes del robo',
      'Cómo exactamente la ciudadela mantiene su tormenta atemporal',
    ],
    relatedCharacters: ['maliketh', 'placidusax', 'fortissax', 'marika'],
    relatedFactions: ['dragones-antiguos', 'hombres-bestia'],
    relatedConcepts: ['destined-death', 'rune-of-death', 'shadow-bound-beast', 'voluntad-mayor', 'crucible'],
    relatedTimelineEvents: ['era-antigua', 'muerte-predestinada', 'antes-orden-dorado', 'placidusax-elden-lord'],
    relatedEndings: ['duskborn'],
  },

  'mt-gelmir': {
    summary:
      'Mt. Gelmir es volcán activo al este de la Meseta de Altus cuya cumbre alberga el Volcano Manor — corte alternativa al Orden Dorado dirigida por Tanith en nombre de su esposo Rykard. Las nobles desafectas del régimen oficial son reclutadas como Recusantes mediante cartas-invitación. Las laderas del volcán albergan los Magma Wyrm Makar y otras criaturas pre-Orden. Bajo el palacio espera la entidad serpentina primordial que devoró a Rykard y opera ahora a través de su nombre.',
    deepLore: [
      h(2, 'Geografía: el volcán activo'),
      p(
        'Mt. Gelmir es volcán activo cuya cumbre se eleva al este de la Meseta de Altus. Sus laderas son alternancia de roca volcánica, ríos de lava, géiseres minerales, y caminos rituales tallados en piedra negra. El acceso al Volcano Manor requiere ascenso vertical técnicamente difícil — el Tarnished puede llegar caminando por rutas peligrosas o ser invitado mediante carta ritual. Las laderas albergan a los Magma Wyrm Makar (dragones-magma residuales), a Caballeros de los Pieles de Dios en bucles de patrullaje, y a los Demi-Humanos que sobreviven entre fumarolas. La cumbre conecta cosmológicamente con regímenes pre-Orden — su antigüedad geológica precede al Orden Dorado por eras incontables.'
      ),
      h(2, 'Historia detallada: Volcano Manor como fachada'),
      p(
        'El Volcano Manor opera como corte alternativa al Orden Dorado oficial. ',
        link('Tanith', 'character', 'tanith'),
        ' lo dirige operativamente en nombre de su esposo ',
        link('Rykard', 'character', 'rykard'),
        ', reclutando nobles desafectos del régimen como Recusantes mediante cartas-invitación. ',
        link('Rya', 'character', 'rya'),
        ' opera como portadora pública de invitaciones — sin saber plenamente del proyecto teológico subyacente. Los Recusantes prominentes incluyen a ',
        link('Bernahl', 'character', 'bernahl'),
        ' (Banished Knight caído en blasfemia), ',
        link('Diallos', 'character', 'diallos'),
        ' (durante una fase efímera antes de retirarse), y Tarnished anónimos. Cada Recusante recibe rango ritual, residencia en el manor, y cartas-invitación con misiones de asesinato disfrazadas de rituales — cazar Tarnished específicos, recuperar artefactos pre-Orden, eliminar agentes del régimen oficial.'
      ),
      p(
        link('Patches', 'character', 'patches'),
        ' está naturalmente en Volcano Manor, vendiendo lo que sea a quien sea. Su presencia operacional aquí es coherente con su filosofía de supervivencia oportunista — donde hay régimen alternativo con flujo de bienes ilegítimos, hay oportunidad comercial.'
      ),
      h(2, 'La serpiente bajo el palacio'),
      p(
        'Pero Volcano Manor es la fachada visible. Bajo el palacio espera la entidad serpentina pre-Orden — la "Gran Serpiente" cuyo nombre original se ha perdido. Era dios menor del fuego volcánico antes del Orden Dorado, anterior al Crisol como autoridad cósmica regional. ',
        link('Rykard', 'character', 'rykard'),
        ' eligió ofrecerse como vasija para hacerse inmortal — pero la entidad lo devoró. Ahora la serpiente opera a través del nombre de Rykard. La voz que emite es la del demidiós; la voluntad es la del dios serpentino. La doctrina implícita del proyecto: producir Tarnished asesinados ofrendados al sistema digestivo cósmico de la Gran Serpiente. Cada Recusante que mata fortalece a la entidad. La Era del Lord Blasfemo (final asociado a Rykard) sería establecimiento cosmológico de este sistema como nueva regla.'
      ),
      h(2, 'Estado actual: la blasfemia funcional'),
      p(
        'Cuando el Tarnished llega, Rykard sigue formalmente vivo aunque cosmológicamente ya devorado. Tanith oficia con elegancia un sistema que termina alimentando a una entidad anterior. Los Recusantes activos invaden Tarnished a través de las Tierras Intermedias. Bernahl eventualmente cayó al servicio completo de Rykard como Recusante, completando la trayectoria del Banished Knight independiente al apóstol blasfemo. Los Magma Wyrms patrullan las laderas. La región opera bajo régimen blasfemo encubierto del que solo el Tarnished puede graduarse — sea matando a Rykard como objetivo de quest principal, sea uniéndose como Recusante adicional.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Mt. Gelmir es el monumento del juego a la blasfemia organizada como alternativa cosmológica. Otras regiones representan respuestas distintas a la fractura — Caelid bajo Podredumbre (víctima cosmológica), el Haligtree (utopía corrompida), Leyndell (régimen sitiado). Mt. Gelmir representa la opción ',
        em('voluntaria'),
        ': nobles que eligieron la blasfemia. La pregunta filosófica: ¿es preferible la rebelión cosmológica organizada al colapso institucional? La respuesta del juego es ambigua. Volcano Manor opera con eficiencia — produce Tarnished asesinados, alimenta a la entidad serpentina, mantiene rango ritual entre sus miembros. Pero la entidad devoró a Rykard al primer intento. Cualquier vasalla del Manor podría ser la siguiente. La blasfemia alternativa no es liberación — es solo otro régimen de explotación operando bajo nombre distinto.'
      ),
    ],
    confirmed: [
      'Mt. Gelmir es volcán activo al este de la Meseta de Altus',
      'El Volcano Manor opera como corte alternativa al Orden Dorado',
      'Tanith dirige operativamente en nombre de Rykard',
      'Rya recluta Recusantes mediante cartas-invitación',
      'Bajo el palacio habita la entidad serpentina pre-Orden que devoró a Rykard',
      'Bernahl cayó al servicio completo de Rykard como Recusante',
      'Patches y Diallos pasaron por el Manor en distintas fases',
    ],
    inferred: [
      'Las cartas-invitación son sistema de reclutamiento ritualizado, no comunicación accidental',
      'Cada Recusante asesinado o vencido fortalece a la entidad serpentina',
      'Rykard eligió la inmortalidad de la serpiente conscientemente y fue traicionado',
      'La blasfemia organizada es solo otro régimen de explotación bajo nombre distinto',
    ],
    theories: [
      'Tanith es ella misma vasija parcial de la serpiente',
      'La entidad serpentina podría ser hermana cosmológica de la Madre Informe',
      'Existe una jerarquía de Recusantes con rangos rituales que el juego no documenta',
      'Si la Gran Serpiente fuera derrotada, Rykard regresaría parcialmente como persona',
    ],
    ambiguous: [
      'Identidad y nombre original de la entidad serpentina',
      'Si Tanith está consciente del proyecto teológico subyacente',
      'Cuántos Recusantes han operado a lo largo de la historia del Manor',
      'Si los huéspedes pueden abandonar libremente o están atrapados ritualmente',
    ],
    relatedCharacters: ['rykard', 'tanith', 'rya', 'patches', 'diallos', 'bernahl'],
    relatedFactions: ['volcano-manor', 'dragones-antiguos', 'banished-knights', 'pieles-de-dios'],
    relatedRegions: ['altus-plateau', 'leyndell'],
    relatedConcepts: ['great-rune', 'crucible', 'dioses-exteriores'],
    relatedTimelineEvents: ['rykard-blasphemy', 'demidioses-fractura'],
    relatedEndings: ['fracture'],
  },

  'mountaintops': {
    summary:
      'Las Mountaintops of the Giants son las cumbres heladas al norte de las Tierras Intermedias donde habitaban los Gigantes del Fuego. Aquí Marika ordenó el exterminio sistemático de la raza pre-Orden cuya llama era específicamente capaz de quemar el Árbol Áureo. Casi todos fueron asesinados; el último gigante quedó encadenado como custodio eterno de la Llama Quemadora. La paradoja cosmológica es exacta: la pira ritual donde Melina se inmola para quemar el Árbol Áureo usa la misma llama del pueblo que el régimen exterminó eras atrás.',
    deepLore: [
      h(2, 'Geografía: las cumbres heladas'),
      p(
        'Las Mountaintops of the Giants son cordillera elevada al norte de las Tierras Intermedias, accesible mediante el Grand Lift of Rold desde la Meseta de Altus o mediante pasos rocosos desde el ',
        link('Snowfield Consagrado', 'region', 'consecrated-snowfield'),
        ' oculto. Su geografía combina nieve perpetua, picos imposibles, vientos cosmológicos, ruinas dispersas, y la presencia constante de la Llama Quemadora confinada. La región conecta al sur con la Meseta de Altus, al noroeste con el Snowfield Consagrado (acceso al Haligtree), y al este con ',
        link('Farum Azula', 'region', 'farum-azula'),
        ' (cosmológicamente, no geográficamente — Farum Azula opera fuera del tiempo). Las temperaturas y vientos son hostiles a vida ordinaria — solo seres cosmológicamente preparados sobreviven.'
      ),
      h(2, 'Historia detallada: la guerra contra los Gigantes'),
      p(
        'Las Mountaintops fueron escenario de la guerra que ',
        link('Marika', 'character', 'marika'),
        ' ordenó contra los ',
        link('Gigantes del Fuego', 'faction', 'fire-giants'),
        '. La premisa cosmológica era estructural: los gigantes adoraban una llama hostil al Árbol Áureo por designio de su dios externo (el ',
        link('Fell God', 'concept', 'fell-god'),
        '). La existencia continua del pueblo gigante era amenaza permanente al régimen dorado. ',
        link('Godfrey', 'character', 'godfrey'),
        ' lideró el genocidio sistemático. La operación duró eras y consumió generaciones de soldados dorados. Casi todos los gigantes fueron asesinados.'
      ),
      p(
        'Los pocos supervivientes documentados incluyen a ',
        link('Iji', 'character', 'iji'),
        ' (gigante reformado al servicio de la familia Caria como herrero personal) y al ',
        link('último Gigante del Fuego', 'character', 'fire-giant'),
        ' (encadenado como custodio eterno en la Forja). Otros gigantes pueden haberse refugiado en regiones marginales no documentadas. La paradoja del confinamiento: la Llama Quemadora no pudo ser destruida — solo confinada. El último gigante quedó como guardián cosmológico de la propia llama que el régimen había buscado eliminar.'
      ),
      h(2, 'La pira ritual: el Árbol Áureo quemado'),
      p(
        'Eras después de la guerra, cuando el régimen del Orden Dorado entró en crisis post-fractura, las Mountaintops adquirieron función cosmológica nueva. La Llama Quemadora confinada en el último gigante es la única llama de las Tierras Intermedias capaz de quemar el ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        '. Para que el Tarnished acceda al núcleo del árbol y al trono Elden, el Árbol Áureo debe quemarse. La paradoja cosmológica es exacta: el régimen necesita la llama del pueblo que exterminó para reformarse cosmológicamente.'
      ),
      p(
        link('Melina', 'character', 'melina'),
        ' se inmola ritualmente como portadora humana de la Llama. La operación es cosmológicamente costosa — Melina paga con su existencia para activar la Llama y prender el árbol. Pero si el Tarnished aceptó la Llama Frenética antes, Melina abandona el viaje y maldice al Tarnished. En ese caso el Tarnished debe quemar el Árbol Áureo usando solo su sello frenético, sin asistencia ritual. La operación produce el mismo efecto físico (árbol quemado, acceso al trono abierto) pero cosmológicamente distinto.'
      ),
      h(2, 'Estado actual: el último santuario gigante'),
      p(
        'Cuando el Tarnished llega tras subir el Grand Lift, encuentra región mayormente vacía pero con presencia residual: dragones residuales como Borealis vagando por las nieves, gigantes menores en ruinas dispersas, el último Gigante del Fuego encadenado en la Forja. La derrota del último gigante es prerrequisito para activar la pira ritual con la Llama. Tras la quema, las Mountaintops conservan paisaje físicamente intacto pero cosmológicamente alterado — la Llama Quemadora ya no está confinada porque cumplió su función diferida.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Las Mountaintops son el monumento del juego al instrumento del exterminio que se vuelve necesario eras después. Marika exterminó a los Gigantes del Fuego porque su llama era amenaza al Árbol Áureo. Eras después, la única forma de reformar el cosmos requiere precisamente esa llama. La pregunta filosófica más oscura: ¿Marika sabía? La hipótesis comunitaria más aceptada: sí, sabía. El confinamiento del último gigante en lugar de su exterminio total fue siembra estratégica deliberada — Marika anticipaba que la llama eventualmente sería necesaria para reforma cosmológica diferida. La región es testimonio de que el régimen no destruye plenamente nada — solo lo confina hasta que lo necesita. La crueldad del exterminio es operativa, no terminal.'
      ),
    ],
    confirmed: [
      'Las Mountaintops of the Giants son cordillera elevada al norte de las Tierras Intermedias',
      'Habitaban allí los Gigantes del Fuego antes del Orden Dorado',
      'Su llama era específicamente capaz de quemar el Árbol Áureo',
      'Marika ordenó el exterminio; Godfrey lideró el genocidio',
      'El último Gigante del Fuego quedó encadenado como custodio eterno de la Llama Quemadora',
      'Iji es uno de los pocos gigantes reformados supervivientes',
      'Melina se inmola ritualmente como portadora humana para quemar el Árbol Áureo',
      'Si el Tarnished acepta la Llama Frenética, Melina abandona y debe quemar el árbol solo',
    ],
    inferred: [
      'La Llama Quemadora no pudo ser destruida — solo confinada',
      'Marika anticipaba que la llama eventualmente sería necesaria para reforma cosmológica',
      'El confinamiento del último gigante fue siembra estratégica deliberada',
      'El régimen no destruye plenamente nada — solo lo confina hasta que lo necesita',
    ],
    theories: [
      'Algunos gigantes sobrevivieron escondidos en regiones que el juego no documenta',
      'El Fell God sigue activo cosmológicamente aunque su pueblo sea casi extinto',
      'Iji conoce el plan completo pero lo oculta por lealtad estratégica',
      'La Llama Quemadora podría reactivarse plenamente bajo cosmología post-régimen',
    ],
    ambiguous: [
      'Cuántos gigantes había antes de la guerra',
      'Si los Zamor fueron aliados o cazadores oportunistas',
      'Si la llama tiene voluntad propia o solo materialidad hostil',
      'Si el Fell God puede manifestarse como dios exterior activo bajo condiciones específicas',
    ],
    relatedCharacters: ['marika', 'melina', 'iji', 'godfrey', 'fire-giant'],
    relatedRegions: ['consecrated-snowfield', 'farum-azula', 'altus-plateau'],
    relatedFactions: ['orden-dorado', 'fire-giants'],
    relatedConcepts: ['erdtree', 'frenzied-flame', 'fell-god', 'dioses-exteriores'],
    relatedTimelineEvents: ['estado-mundo-mancillado', 'guerra-gigantes-fuego', 'flame-of-ruin-confined', 'erdtree-quemado'],
    relatedEndings: ['fracture', 'frenzied-flame'],
  },

  'consecrated-snowfield': {
    summary:
      'El Snowfield Consagrado es yermo nevado al norte de las Tierras Intermedias, oculto entre las Mountaintops y el Haligtree. La nieve consagrada no es nieve común — borra a quien camina sobre ella sin guía. Solo quien lleva el Mapa Secreto ensamblado (custodiado en mitades por Albus y Latenna) puede atravesarla con seguridad. Es trampa cosmológica deliberada — protección geográfica del proyecto Miquella diseñada para filtrar quiénes pueden llegar al árbol. Tumba blanca de Albinaurics que no lograron completar el peregrinaje.',
    deepLore: [
      h(2, 'Geografía: la tierra oculta'),
      p(
        'El Snowfield Consagrado se ubica al norte de las ',
        link('Mountaintops of the Giants', 'region', 'mountaintops'),
        ' y al sur del ',
        link('Haligtree', 'region', 'haligtree'),
        '. Su acceso es ritualmente complejo — el Tarnished debe ensamblar el Mapa Secreto del Snowfield (mitad sur custodiada por ',
        link('Latenna', 'character', 'latenna'),
        ' en las ruinas de la Aldea Albinaurica de Liurnia, mitad norte custodiada por ',
        link('Albus', 'character', 'albus'),
        ' disfrazado dentro de jarra rota en otra Aldea Albinaurica). Solo con el mapa completo se puede activar la entrada cosmológica desde el Grand Lift of Rold. La región alberga: ruinas de aldeas Albinauric abandonadas, el área de Ordina (ciudad ritual de invocación), el Apóstata Catedral, y los caminos cubiertos hacia Elphael bajo el Haligtree.'
      ),
      h(2, 'Historia detallada: la nieve cosmológica'),
      p(
        'La nieve consagrada no es nieve común. Su sustancia es cosmológicamente activa: borra recuerdos progresivamente, desorienta direcciones, consume vida no autorizada. Cada paso sobre ella sin guía adecuada genera pérdida de coherencia espacial — el viajero pierde primero memoria de hacia dónde iba, luego la dirección actual, luego eventualmente la consciencia plena. La región opera como trampa cosmológica deliberada — protección geográfica del proyecto del ',
        link('Haligtree', 'region', 'haligtree'),
        ' diseñada por ',
        link('Miquella', 'character', 'miquella'),
        ' para filtrar quiénes pueden llegar al árbol.'
      ),
      p(
        'La filosofía del filtro es coherente con el proyecto utópico de Miquella: solo quienes acceden mediante asistencia ritual mutua (los dos Albinaurics custodiando mitades del mapa requieren confianza específica para cooperar con un visitante) pueden alcanzar el santuario. La protección no es militar — es ',
        em('cosmológica de pertenencia'),
        '. Quien no merece el Haligtree por afinidad ritual con los excluidos no puede llegar. La operación protegió el santuario durante eras pero también lo aisló del resto de las Tierras Intermedias.'
      ),
      h(2, 'El éxodo de los Albinaurics'),
      p(
        'Los ',
        link('Albinaurics', 'faction', 'albinauricos'),
        ' refugiados peregrinaron a través de este yermo durante eras hacia el Haligtree. La travesía fue masiva y mortal — la nieve consume vida no autorizada, y muchos Albinaurics no tenían el mapa completo. Pocos llegaron a Elphael. La mayoría yace bajo la nieve, congelados en estado liminal — sus cuerpos preservados por la sustancia cosmológica de la nieve, pero sin avanzar ni descomponerse. Cuando ',
        link('Miquella', 'character', 'miquella'),
        ' fue secuestrado por Mohg, su pueblo quedó atrapado a mitad del camino — sin Miquella canalizando Oro sin Aleación, la nieve consagrada se volvió aún más hostil.'
      ),
      h(2, 'Ordina: la ciudad ritual'),
      p(
        link('Ordina', 'region', 'ordina'),
        ' es ciudad ritual ubicada en el corazón del Snowfield. Su función cosmológica: portal de invocación al Haligtree. El acceso al árbol mismo requiere completar el ritual de Ordina — encender cuatro llamas rituales en la ciudad mientras invasores Black Knife asesinas (',
        link('Cuchillos Negros', 'faction', 'cuchillos-negros'),
        ') intentan impedirlo. El ritual es prueba de capacidad cosmológica del candidato. Que las Cuchillos Negros operen aquí como guardianes hostiles documenta conexión profunda entre el proyecto Miquella y los enemigos cosmológicos del régimen — Miquella usaba operativos de la conspiración anti-Voluntad Mayor para proteger su santuario.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'El Snowfield Consagrado es el monumento del juego al filtro cosmológico como protección utópica. Otras regiones excluyen mediante violencia explícita (Caelid corrompida, Mt. Gelmir blasfemo). El Snowfield excluye mediante ',
        em('borradura'),
        ' — no daña a los no autorizados, solo los disuelve cosmológicamente. La pregunta filosófica: ¿es éticamente defensible la utopía que requiere filtros? El proyecto Miquella responde: necesario por contexto cosmológico hostil, no por elección. Sin filtro, el régimen oficial habría destruido el Haligtree. El precio fue alto — miles de Albinaurics murieron en el peregrinaje, su tumba blanca es testimonio del costo. Cada nieve fresca en el Snowfield cubre evidencia de que la utopía siempre tiene víctimas en su camino, incluso cuando es genuinamente liberadora para quienes la alcanzan.'
      ),
    ],
    confirmed: [
      'El Snowfield Consagrado se ubica entre las Mountaintops y el Haligtree',
      'La nieve consagrada borra recuerdos y desorienta a quien camina sin guía',
      'Solo el Mapa Secreto ensamblado permite atravesarla con seguridad',
      'Albus y Latenna custodian las dos mitades del Mapa Secreto',
      'Los Albinaurics peregrinaron a través de este yermo hacia el Haligtree',
      'Ordina es ciudad ritual de invocación que sirve como portal al Haligtree',
      'Las Cuchillos Negros operan como guardianes hostiles del ritual de Ordina',
    ],
    inferred: [
      'La nieve consagrada es protección cosmológica deliberada del proyecto Miquella',
      'El filtro opera por afinidad ritual con los excluidos, no por capacidad militar',
      'Los Albinaurics congelados están en estado liminal, no plenamente muertos',
      'Miquella usaba operativos anti-Voluntad Mayor para proteger su santuario',
    ],
    theories: [
      'La nieve consagrada contiene fragmentos cosmológicos del Oro sin Aleación de Miquella',
      'Existen otros caminos al Haligtree que el juego no documenta',
      'Si Miquella despertara, podría revivir parcialmente a los Albinaurics congelados',
      'Las Cuchillos Negros aquí son operativos coordinados con Ranni o agentes autónomos post-Reina',
    ],
    ambiguous: [
      'Cuántos Albinaurics murieron en total durante el peregrinaje',
      'Origen exacto de la sustancia cosmológica de la nieve consagrada',
      'Si la región puede ser cruzada por otros medios bajo cosmología distinta',
      'Si Miquella diseñó él mismo el filtro o adaptó tradición cosmológica anterior',
    ],
    relatedCharacters: ['miquella', 'malenia', 'albus', 'latenna'],
    relatedRegions: ['haligtree', 'mountaintops', 'ordina', 'elphael', 'liurnia'],
    relatedFactions: ['albinauricos', 'misbegotten', 'haligtree', 'cuchillos-negros'],
    relatedConcepts: ['unalloyed-gold', 'haligtree'],
    relatedTimelineEvents: ['unalloyed-gold-haligtree', 'albinauric-massacre'],
  },

  'deeproot-depths': {
    summary:
      'Deeproot Depths es el sótano cosmológico de las Tierras Intermedias donde yace el cadáver descompuesto de Godwyn entrelazado con dragones y raíces. Es la fuente material de toda la Deathroot que se propaga por las Tierras Intermedias. La tumba que no termina de morir — un demidiós descomponiéndose eternamente porque la Muerte Predestinada está sellada. Fortissax está atrapado en su sueño moribundo intentando proteger al alma agonizante. Es el escenario donde Fia consagra el ritual de la Era del Crepúsculo restaurando la Runa de la Muerte al Anillo.',
    deepLore: [
      h(2, 'Geografía: el sótano cosmológico'),
      p(
        'Deeproot Depths se ubica bajo Limgrave geográficamente, pero conecta cosmológicamente con todas las Tierras Intermedias mediante el sistema vascular del Árbol Áureo. El acceso requiere caer físicamente — no hay entrada lateral. Solo a través de los Mausoleos Errantes específicos o mediante interacción cosmológica con las raíces principales del árbol se puede alcanzar la región. Su geografía interna es alternancia de raíces gigantescas que serpentean entre rocas oscuras, ríos subterráneos de aguas necróticas, fragmentos arquitectónicos de civilizaciones pre-Orden caídos durante eras, y el Coliseo del Príncipe de la Muerte donde yace la forma corrompida de Godwyn.'
      ),
      h(2, 'Historia detallada: el cadáver primordial'),
      p(
        link('Godwyn', 'character', 'godwyn'),
        ' fue asesinado parcialmente durante la ',
        link('Noche de los Cuchillos Negros', 'timeline', 'ranni-noche-cuchillos'),
        '. Las dagas Cuchillo Negro forjadas con la mecha de la Runa de la Muerte mataron su alma; su cuerpo no pudo morir porque la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ' estaba sellada en Maliketh. La forma actual del cuerpo es paradójica e irreducible: un demidiós descomponiéndose eternamente, intentando completar el ciclo natural de descomposición pero sin poder culminarlo. El resultado es crecimiento monstruoso. El cuerpo se extendió. Generó raíces necróticas (la ',
        link('Deathroot', 'concept', 'deathroot'),
        '). Se entrelazó con serpentinas dragónicas — incluyendo a ',
        link('Fortissax', 'character', 'fortissax'),
        ' que entró al sueño moribundo de Godwyn intentando protegerlo y quedó atrapado en bucle eterno.'
      ),
      h(2, 'El origen de la Deathroot'),
      p(
        'Toda la Deathroot de las Tierras Intermedias emana de Deeproot Depths. La operación es físicamente rastreable: las raíces del Árbol Áureo (que distribuyen gracia hacia las regiones) ahora también distribuyen Deathroot desde el cadáver de Godwyn. Cuando un cadáver se reanima en Caelid, en Limgrave, en Liurnia, en Leyndell — cuando un ',
        link('Aquel que Vive en la Muerte', 'concept', 'those-who-live-in-death'),
        ' aparece en cualquier región — su origen rastreable es siempre Deeproot Depths. La ironía estructural del régimen: el sistema vascular cosmológico construido para distribuir bendición es ahora vector de su corrupción más profunda.'
      ),
      h(2, 'Estado actual: el escenario del Crepúsculo'),
      p(
        'Cuando el Tarnished llega a Deeproot Depths, encuentra el escenario cosmológico clave para múltiples finales. El cadáver de Godwyn aparece como el "Príncipe de la Muerte" — figura monstruosa con cuerpo masivo descompuesto, rostro reconocible aún humano-divino, raíces necróticas extendiéndose. ',
        link('Fortissax', 'character', 'fortissax'),
        ' aparece en su sueño moribundo como dragón distorsionado por eras de bucle. La pelea contra Fortissax lo libera del bucle — operación piadosa simultáneamente. La región alberga también a guardias dorados originalmente leales a Godwyn que ahora sirven a su forma corrompida sin saber por qué.'
      ),
      p(
        'Si la quest de ',
        link('Fia', 'character', 'fia'),
        ' se completa, ella consagra aquí el ritual final de la ',
        link('Era del Crepúsculo', 'ending', 'duskborn'),
        ': la Runa Mendaz se cose en el cadáver de Godwyn, restaurando la Muerte Predestinada al Anillo Elden. La operación es cosmológicamente reparadora — la herida de Godwyn se cierra, los Aquellos que Viven en la Muerte descansan piadosamente, la Deathroot deja de propagarse como corrupción y se convierte en sustancia funeraria normal. Es el único final que ',
        em('repara'),
        ' la falla fundacional en lugar de extender sus consecuencias.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Deeproot Depths es el monumento del juego a la herida cosmológica como condición permanente de las Tierras Intermedias actuales. Otras regiones tienen tragedias específicas (Caelid bajo Podredumbre, Mt. Gelmir bajo blasfemia). Deeproot Depths tiene la herida ',
        em('original'),
        ' — el evento cosmológico del que emanan todas las demás corrupciones. La pregunta filosófica más profunda: ¿se puede curar una herida cosmológica que el sistema mismo produjo? La Era del Crepúsculo responde sí, pero requiere agencia exterior (el Tarnished + la voluntad de Fia + la Runa Mendaz). Otras eras dejan la herida abierta — el cosmos sigue operando con la falla persistente. Cada Aquel que Vive en la Muerte que el Tarnished encuentra en cualquier región es declaración silenciosa: ',
        em('todo rastrea hasta aquí'),
        '. Deeproot Depths es la verdad subterránea de las Tierras Intermedias enteras.'
      ),
    ],
    confirmed: [
      'Deeproot Depths está bajo Limgrave, accesible solo a través de raíces del Árbol Áureo o Mausoleos Errantes',
      'El cuerpo descompuesto de Godwyn yace allí desde la Noche de los Cuchillos Negros',
      'Fortissax está atrapado en el sueño moribundo de Godwyn intentando protegerlo',
      'Toda la Deathroot de las Tierras Intermedias emana del cadáver de Godwyn',
      'Fia consagra aquí el ritual final de la Era del Crepúsculo',
      'Guardias dorados originalmente leales a Godwyn sirven a su forma corrompida',
    ],
    inferred: [
      'La Deathroot se propaga físicamente por el sistema vascular del Árbol Áureo',
      'La forma actual de Godwyn es paradoja ontológica producida por el sello de la Muerte',
      'La pelea contra Fortissax es prerequisito para la consagración correcta de la Era del Crepúsculo',
      'La derrota de Fortissax es operación piadosa que lo libera del bucle eterno',
    ],
    theories: [
      'Si Godwyn fuera completamente destruido, toda la Deathroot cesaría simultáneamente',
      'Algunos guardias de Deeproot conservan consciencia residual del Godwyn pre-corrupción',
      'La región contiene fragmentos arquitectónicos de civilizaciones pre-Orden no documentados',
      'Bajo cosmología distinta, la región podría restaurarse plenamente como tumba pacífica',
    ],
    ambiguous: [
      'Si Godwyn conserva alguna forma de consciencia bajo Deeproot',
      'Cuán profundo se extiende la región — el juego no documenta el límite inferior',
      'Si existen otras víctimas similares a Godwyn en niveles aún más profundos',
      'Si Marika ha visitado el lugar tras la fractura',
    ],
    relatedCharacters: ['godwyn', 'fortissax', 'fia', 'd', 'rogier', 'maliketh'],
    relatedFactions: ['those-who-live-in-death'],
    relatedRegions: ['limgrave', 'leyndell'],
    relatedConcepts: ['deathroot', 'destined-death', 'rune-of-death', 'those-who-live-in-death', 'erdtree'],
    relatedTimelineEvents: ['ranni-noche-cuchillos', 'godwyn-corruption-spread'],
    relatedEndings: ['duskborn'],
  },

  nokron: {
    summary:
      'Nokron es la Ciudad Eterna de los Nox, sumergida bajo Limgrave por la caída de Astel como castigo cosmológico. Construida con cielos artificiales que imitan las estrellas que sus habitantes ya no pueden ver. Aún operativa pese al exilio — sus rituales nocturnos continúan, sus criaturas custodian artefactos cosmológicos del proyecto pre-Orden, sus habitantes silenciosos esperan la consumación de la rebelión cosmológica que Ranni hereda parcialmente. Es testimonio arqueológico viviente del proyecto teológico más sofisticado de las Tierras Intermedias.',
    deepLore: [
      h(2, 'Geografía: la ciudad subterránea'),
      p(
        'Nokron se ubica subterráneamente bajo el norte de ',
        link('Limgrave', 'region', 'limgrave'),
        ', accesible mediante el cráter dejado por la caída ritual de la estrella Astel — Mistwood, donde el meteorito impactó tras matar a Radahn (en su Festival ritual). Su geografía interna es vasta ciudad de arquitectura sofisticada con cielos artificiales: estrellas falsas brillan sobre las plazas, una luna artificial flota sobre el centro, paisajes urbanos imitan condiciones nocturnas perpetuas. La sofisticación arquitectónica excede lo que el régimen del Orden Dorado documenta haber alcanzado. Las construcciones incluyen palacios con cúpulas estelares, plazas ceremoniales, edificios residenciales habitados por sobrevivientes Nox silenciosos, y catacumbas inferiores que conectan con ',
        link('Nokstella', 'region', 'nokstella'),
        ' y otras Ciudades Eternas relacionadas.'
      ),
      h(2, 'Historia detallada: el pecado cosmológico'),
      p(
        'Los ',
        link('Nox', 'faction', 'nox'),
        ' fueron civilización ennoblecida durante la era anterior al Orden Dorado. Su crimen fue ambición teológica concreta: querer fabricar su propio dios. El proyecto se llamaba la Luna Eterna o Noche Eterna — alternativa cosmológica a la dominancia diurna del Árbol Áureo. Las ',
        link('Lágrimas de Plata y Mimic Tears', 'faction', 'silver-mimic-tears'),
        ' eran prototipos de cuerpo divino: vida líquida capaz de adoptar cualquier forma, candidata a vasija humana sustituta. Si hubiesen completado el proyecto, habrían tenido un Lord Elden propio independiente de la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        '. Forjaron también la ',
        link('Hoja Mata-Dedos', 'concept', 'fingerslayer-blade'),
        ' como contramedida operativa contra los Dos Dedos del régimen rival.'
      ),
      h(2, 'El castigo: la caída de Astel'),
      p(
        'La Voluntad Mayor respondió al proyecto Nox con violencia ontológica. ',
        link('Astel', 'character', 'astel'),
        ' — entidad estelar cósmica de tipo Naturalborn of the Void — fue enviada como ejecutor. La operación fue cosmológicamente devastadora: una estrella que cayó del cielo, destruyó las ciudades exteriores, enterró las Ciudades Eternas bajo la superficie de las Tierras Intermedias. Los Nox supervivientes fueron condenados a vivir en cielos subterráneos contemplando estrellas falsas que imitaban las que ya no podían ver. Astel mismo permaneció en las profundidades de Nokstella como guardián mutilado del exilio — cumpliendo función dual de castigador y testimonio de la operación.'
      ),
      h(2, 'Estado actual: la espera silenciosa'),
      p(
        'Hoy los Nox de Nokron esperan en silencio ritual. Su doctrina sobrevive: el cosmos no debe estar dominado por la luz dorada, las estrellas son la verdadera autoridad cósmica, una era nocturna es viable. Cuando el Tarnished llega a la ciudad (vía Mistwood/Astel), encuentra población residual operando en bucles ceremoniales: Nox silenciosos en plazas, criaturas custodias (Nox Knights, Mimic Tears autónomos) defendiendo artefactos, lentes ópticas estelares todavía operativas. La ciudad alberga el Mimic Tear como espíritu invocable cosmológicamente significativo — herencia operativa del proyecto Nox que el Tarnished puede usar.'
      ),
      h(2, 'La esperanza estelar: la herencia de Ranni'),
      p(
        'Cuando ',
        link('Ranni', 'character', 'ranni'),
        ' diseña su rebelión cosmológica contra la Voluntad Mayor, hereda parcialmente el proyecto Nox — pero adapta los medios. En lugar de fabricar un dios, retira al actual. La ',
        link('Era de las Estrellas', 'ending', 'age-of-stars'),
        ' es la promesa cumplida que los Nox no pudieron culminar. Ranni recoge específicamente la Hoja Mata-Dedos (el arma deicida Nox) y otros artefactos cosmológicos durante su quest. Si el Tarnished completa la quest de Ranni, los Nox supervivientes verán finalmente la consumación de su esperanza ancestral.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Nokron es el monumento del juego al proyecto cosmológico castigado pero no extinto. Otros pueblos derrocados perdieron tradición operativa al ser militarmente derrotados (Gigantes del Fuego). Los Nox conservaron tradición plena pese al castigo cosmológico — sus ciudades operan, sus rituales continúan, sus tecnologías siguen disponibles. La pregunta filosófica: ¿se puede mantener proyecto cosmológico durante eras de castigo activo? La respuesta del juego: sí, pero requiere paciencia cosmológicamente larga. Los Nox han esperado eras. La rebelión de Ranni les ofrece la primera oportunidad real de consumación post-castigo. Cada estrella falsa de sus cielos es declaración silenciosa: el proyecto sigue activo, el cosmos podría haber sido distinto, y todavía podría serlo.'
      ),
    ],
    confirmed: [
      'Nokron es Ciudad Eterna de los Nox, sumergida bajo Limgrave',
      'Su acceso es vía Mistwood donde Astel cayó como meteorito ritual',
      'Tiene cielos artificiales con estrellas falsas y luna artificial',
      'Los Nox querían forjar su propio dios — la Luna Eterna o Noche Eterna',
      'Astel fue ejecutor cósmico enviado por la Voluntad Mayor para destruir el proyecto',
      'Las Lágrimas de Plata y Mimic Tears son tecnología residual del proyecto',
      'La Hoja Mata-Dedos fue forjada en la civilización Nox',
    ],
    inferred: [
      'Su tecnología cosmológica excedía la del Orden Dorado en sofisticación',
      'Los Nox supervivientes mantienen identidad cultural y memoria del proyecto',
      'Ranni recoge parcialmente su legado adaptando los medios (retirada en lugar de fabricación)',
      'El proyecto sigue cosmológicamente activo pese al castigo durante eras',
    ],
    theories: [
      'Algunos Nox supervivientes asistieron a Ranni en su plan inicial',
      'La civilización Nox descubrió la mortalidad de los dioses externos',
      'Las estrellas falsas de sus cielos contienen información cosmológica codificada',
      'Existen otras Ciudades Eternas no documentadas en otras regiones del subsuelo',
    ],
    ambiguous: [
      'Cuántos Nox sobreviven en las Ciudades Eternas',
      'Si pueden fabricar nueva tecnología o solo preservan la antigua',
      'Si el proyecto del cuerpo divino es completable bajo otras condiciones',
      'Su relación exacta con los Hados Estelares y los Naturalborn of the Void',
    ],
    relatedCharacters: ['ranni', 'astel'],
    relatedRegions: ['nokstella', 'siofra-river', 'ainsel-river', 'limgrave'],
    relatedFactions: ['nox', 'silver-mimic-tears'],
    relatedConcepts: ['dark-moon', 'age-of-stars', 'voluntad-mayor', 'fingerslayer-blade'],
    relatedTimelineEvents: ['nox-ciudades-eternas', 'silver-tears-creation', 'astel-castigo'],
    relatedEndings: ['age-of-stars'],
  },

  nokstella: {
    summary:
      'Nokstella es ciudad gemela de Nokron, sumergida más profundamente en la noche eterna. Templo de la magia lunar avanzada — la tradición que Caria heredaría siglos después como casa real lunar. Es aquí donde Ranni obtiene la Espada de la Luna Oscura, el arma cosmológica que invocará la Era de las Estrellas. Astel Naturalborn habita las profundidades como guardián mutilado del castigo cosmológico. La ciudad opera como archivo viviente de la magia lunar pre-Orden que el régimen dorado intentó suprimir.',
    deepLore: [
      h(2, 'Geografía: la ciudad lunar'),
      p(
        'Nokstella se ubica en niveles más profundos que ',
        link('Nokron', 'region', 'nokron'),
        ', accesible mediante el Ainsel River a través de descenso ritualizado. Su geografía interna combina arquitectura dedicada específicamente a la magia lunar: observatorios de cuerpos celestes ocultos, plazas ceremoniales con piedras lunares, cúpulas que reflejan luz astronómica artificial, y el santuario interior donde la Espada de la Luna Oscura aguarda al Empyrean designado por elección. Sus habitantes incluyen Silver Tears y Mimic Tears autónomos en mayor concentración que en Nokron — la sofisticación tecnológica del proyecto Nox alcanza aquí su pico documentado. Astel habita las profundidades como guardián cosmológico mutilado.'
      ),
      h(2, 'Historia detallada: el templo de la magia lunar'),
      p(
        'Donde Nokron contenía la mayor parte de la población Nox y los rituales nocturnos generales, Nokstella se especializó en la tradición de la magia lunar avanzada. La ',
        link('Luna Oscura', 'concept', 'dark-moon'),
        ' como cosmología completa fue desarrollada aquí — antes de la Voluntad Mayor, antes del Orden Dorado, antes incluso de la elevación de la familia Caria como casa real lunar. La tradición que después aparece en Liurnia bajo Caria es ',
        em('derivación posterior'),
        ' de la magia lunar Nox original. Los textos cosmológicos que Caria preservó proceden filogenéticamente de Nokstella.'
      ),
      h(2, 'La Espada de la Luna Oscura'),
      p(
        'El artefacto cosmológico más importante de Nokstella es la Espada de la Luna Oscura. La operación de su forja es ritualmente compleja: requiere fragmento ritual de la luna misma, sangre del Empyrean designado para empuñarla, y consagración cosmológica específica. La espada estaba esperando — durante eras incontables — al Empyrean correcto. Cuando ',
        link('Ranni', 'character', 'ranni'),
        ' completa su quest cosmológica, recoge la espada ritualmente. La operación es vinculante: la espada elige tanto como es elegida. Tras recibirla, Ranni puede usarla como arma operativa para invocar la ',
        link('Era de las Estrellas', 'ending', 'age-of-stars'),
        '. ',
        link('Blaidd', 'character', 'blaidd'),
        ' la usa también — su lealtad a Ranni se materializa en este arma compartida.'
      ),
      h(2, 'Astel: el guardián mutilado'),
      p(
        link('Astel', 'character', 'astel'),
        ' Naturalborn of the Void habita las profundidades de Nokstella tras cumplir su función como ejecutor del castigo cosmológico de los Nox. Su forma actual es mutilación parcial — la operación lo desgastó cosmológicamente, dejándolo como guardián incompleto del exilio que él mismo ejecutó. Su presencia tiene función dual: castigador histórico y memorial activo de la operación. Quien quiera acceder al núcleo cosmológico de Nokstella debe enfrentar a Astel — la operación es prerrequisito ritual para activar la herencia plena del proyecto Nox. Ranni necesita pasar por este proceso para consumar su rebelión cosmológica.'
      ),
      h(2, 'Estado actual: el santuario operativo'),
      p(
        'Cuando el Tarnished llega a Nokstella siguiendo la quest de Ranni, encuentra la ciudad en estado operativo silencioso. Los Silver Tears patrullan en bucles defensivos. Los Mimic Tears autónomos custodian áreas específicas. La población Nox sobreviviente opera en silencio ritual. La Espada de la Luna Oscura aguarda. Astel aguarda. Toda la región está en estado de espera cosmológica — el proyecto Nox no ha sido derrotado, solo confinado mientras espera consumación. El paso del Tarnished con asistencia de Ranni es la primera vez en eras que la espera se interrumpe activamente.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Nokstella es el monumento del juego al santuario cosmológico que aguarda durante eras. Otras ciudades fueron destruidas tras castigo o operan bajo régimen actual. Nokstella opera ',
        em('en pausa cosmológica'),
        ' — sin avanzar ni retroceder, esperando consumación que solo agencia exterior específica puede activar. La Espada de la Luna Oscura es metonimia exacta: artefacto creado para Empyrean específico, esperando durante eras al portador correcto. La pregunta filosófica: ¿es éticamente legítimo planificar cosmológicamente para eras posteriores a la propia generación? El proyecto Nox responde: sí. Su paciencia cosmológica produce, eras después, la oportunidad de consumar el proyecto que su generación inició. Ranni no inventó la rebelión — la heredó. Cada portador del Empyrean potencial pasa por Nokstella en algún momento, y la espada espera ver si es ',
        em('el correcto'),
        '.'
      ),
    ],
    confirmed: [
      'Nokstella es ciudad gemela de Nokron, sumergida más profundamente',
      'Es accesible vía Ainsel River mediante descenso ritualizado',
      'Se especializó en la tradición de magia lunar avanzada de los Nox',
      'La Espada de la Luna Oscura aguarda allí al Empyrean designado',
      'Ranni la recoge ritualmente al completar su quest cosmológica',
      'Astel Naturalborn habita las profundidades como guardián mutilado',
      'Blaidd usa la espada también — manifestación material de su lealtad a Ranni',
    ],
    inferred: [
      'La tradición lunar Caria es derivación posterior de la magia lunar Nox original',
      'La Espada eligió a Ranni tanto como Ranni la eligió',
      'Astel cumple función dual de castigador y memorial activo',
      'Toda la región opera en estado de espera cosmológica durante eras',
    ],
    theories: [
      'Los textos cosmológicos de Caria proceden filogenéticamente de Nokstella',
      'Existen otras armas rituales Nox aguardando portadores específicos',
      'Astel puede liberarse parcialmente bajo cosmología post-Voluntad Mayor',
      'La paciencia cosmológica Nox es estrategia deliberada, no resignación',
    ],
    ambiguous: [
      'Cuánto tiempo exactamente lleva esperando la Espada de la Luna Oscura',
      'Si Ranni es el primer Empyrean correcto en eras o ha habido otros candidatos rechazados',
      'Si Astel puede ser sanado plenamente bajo final correcto',
      'Si existen otras Ciudades Eternas más profundas que Nokstella',
    ],
    relatedCharacters: ['ranni', 'astel', 'blaidd'],
    relatedRegions: ['nokron', 'ainsel-river', 'liurnia'],
    relatedFactions: ['nox', 'silver-mimic-tears', 'caria'],
    relatedConcepts: ['dark-moon', 'age-of-stars', 'fingerslayer-blade', 'primeval-current'],
    relatedTimelineEvents: ['nox-ciudades-eternas', 'silver-tears-creation', 'astel-castigo'],
    relatedEndings: ['age-of-stars'],
  },

  'lake-of-rot': {
    summary:
      'El Lake of Rot es presencia material directa del dios exterior de la decadencia bajo Liurnia. No es cuerpo de agua infectado — es la sustancia cosmológica del dios manifestándose como geografía. Cualquier ser vivo que toque su superficie comienza a descomponerse en cuestión de segundos. Aquí las hijas escarlatas dispersas convocan a Millicent a fusionarse en el enjambre. Es el escenario donde Millicent decide entre identidad propia y absorción cosmológica — uno de los duelos más íntimamente cosmológicos del juego.',
    deepLore: [
      h(2, 'Geografía: la presencia del dios'),
      p(
        'El Lake of Rot se ubica subterráneamente bajo el área de Ainsel River, accesible desde ',
        link('Liurnia', 'region', 'liurnia'),
        ' mediante descenso ritualizado a las profundidades. Su geografía es vasta extensión de líquido escarlata-púrpura, peñones rocosos emergentes que sirven como puntos seguros para criaturas adaptadas, ruinas sumergidas de civilizaciones pre-Orden, y la Aldea de la Decadencia (Putrid Pond) en uno de sus márgenes. La conexión cosmológica con ',
        link('Caelid', 'region', 'caelid'),
        ' es estructural — el lago es continuación subterránea de la Floración Escarlata, sustancia del mismo dios externo manifestada en distinta forma geográfica.'
      ),
      h(2, 'Historia detallada: la sustancia cosmológica'),
      p(
        'El Lake of Rot no es agua contaminada. Su sustancia es presencia material directa del ',
        link('dios exterior del decaimiento', 'concept', 'dioses-exteriores'),
        ' asociado a la ',
        link('Podredumbre Escarlata', 'concept', 'scarlet-rot'),
        '. La distinción es ontológica: agua contaminada se purifica eliminando contaminante; la sustancia del lago ',
        em('es'),
        ' el contaminante — no se puede purificar porque no contiene corrupción separable, ',
        em('es'),
        ' la corrupción manifestada. Cualquier ser vivo que toque su superficie comienza a descomponerse en cuestión de segundos. Solo los infectados con Podredumbre Escarlata pueden sobrevivir contacto prolongado — la afinidad cosmológica con el dios los protege parcialmente.'
      ),
      p(
        'La existencia del lago bajo Liurnia documenta la propagación cosmológica del dios del decaimiento más allá de Caelid. La Floración de Aeonia no fue evento contenido — su residuo cosmológico se extendió subterráneamente, encontrando sustrato favorable en regiones específicas. El Lake of Rot es manifestación del dios en territorio sin presencia humana significativa — pura sustancia cosmológica acumulada sin filtro civilizatorio.'
      ),
      h(2, 'El convocatoria de las Kindred'),
      p(
        'Las ',
        link('Kindred of Rot', 'faction', 'kindred-of-rot'),
        ' (las hijas escarlatas dispersas de Malenia) habitan el lago como ambiente nativo. Aquí su capacidad de fusión es máxima — la sustancia cosmológica del dios facilita la convergencia. Cuando ',
        link('Millicent', 'character', 'millicent'),
        ' alcanza su quest final, sus hermanas escarlatas la convocan ritualmente al lago para fusionarse en el enjambre. La convocatoria es cosmológicamente vinculante — Millicent siente la presión hacia regresar al colectivo. Su elección entre aceptar (perderse en lo colectivo) o rechazar (defender identidad individual) es el corazón filosófico de su quest.'
      ),
      h(2, 'Estado actual: el escenario del duelo identitario'),
      p(
        'Cuando el Tarnished asiste a Millicent en su quest final, el escenario es el Lake of Rot. Si Millicent eligió defender identidad propia, debe pelear contra sus propias hermanas — cuatro versiones no-individuadas de sí misma convergiendo simultáneamente. La pelea es múltiple: cada hermana es Millicent en versión sin individuación, todas con capacidad marcial similar. La victoria de Millicent sobre sus hermanas es uno de los pocos triunfos puramente humanos del juego — alguien afirmó ser persona contra todo lo que la cosmología decía sobre su naturaleza. ',
        link('Gowry', 'character', 'gowry'),
        ' aparece en el lago como obstáculo final si su trayectoria culminó en intento de Floración personal. La región alberga también a ',
        link('Astel', 'character', 'astel'),
        ' Naturalborn of the Void en zonas adjacentes — entidad cosmológica del Vacío Estelar cuyo origen Nox conecta cosmológicamente con la rebelión de Ranni.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'El Lake of Rot es el monumento del juego al territorio cosmológicamente ocupado por dios externo no humano. Otras regiones tienen ocupación cosmológica con habitantes humanos como huéspedes (Caelid bajo Podredumbre con los Redmanes residuales, Mohgwyn bajo Madre Informe con la corte Bloody Finger). El Lake of Rot es ocupación pura — sin humanos significativos, sin instituciones, sin filtro civilizatorio. La sustancia del dios sin mediación. La pregunta filosófica: ¿qué pasa cuando un dios externo opera sin necesitar huéspedes humanos? La respuesta del juego: produce geografía hostil sin coordinación pero también sin contención posible. Las Kindred son los únicos seres adaptados al ambiente. Su victoria absoluta requeriría que la sustancia se extendiera a las Tierras Intermedias enteras — y esa extensión está activamente en proceso, lentamente, durante eras posteriores a la Floración.'
      ),
    ],
    confirmed: [
      'El Lake of Rot es presencia material directa del dios exterior de la decadencia',
      'Se ubica subterráneamente bajo Ainsel River en Liurnia',
      'Cualquier ser vivo no infectado que toque su superficie se descompone en segundos',
      'Las Kindred of Rot habitan el lago como ambiente nativo',
      'Millicent enfrenta aquí la convocatoria de fusión con sus hermanas escarlatas',
      'Astel Naturalborn of the Void habita zonas adjacentes al lago',
      'Conecta cosmológicamente con la Floración Escarlata de Caelid',
    ],
    inferred: [
      'La sustancia del lago no es purificable — es el dios manifestado, no contaminación separable',
      'Solo los infectados con Podredumbre pueden sobrevivir contacto prolongado',
      'El residuo cosmológico de la Floración de Aeonia se propagó subterráneamente',
      'La región es ocupación cosmológica pura sin huéspedes humanos significativos',
    ],
    theories: [
      'La sustancia del lago se está extendiendo lentamente a las Tierras Intermedias enteras durante eras',
      'Si Malenia floreciera plenamente, el Lake se conectaría con todos los pantanos podridos',
      'Existieron civilizaciones pre-Orden cuyas ruinas están sumergidas en el lago',
      'Astel y el dios del decaimiento son entidades cosmológicas relacionadas filogenéticamente',
    ],
    ambiguous: [
      'Cuándo exactamente el lago alcanzó su forma actual',
      'Origen del nombre canónico del dios exterior del decaimiento',
      'Si el Lake puede ser drenado o sellado bajo cosmología distinta',
      'Si las civilizaciones sumergidas son Nox, pre-Nox o de otro régimen',
    ],
    relatedCharacters: ['millicent', 'gowry', 'malenia', 'astel'],
    relatedFactions: ['kindred-of-rot', 'nox'],
    relatedRegions: ['liurnia', 'caelid', 'ainsel-river', 'aeonia'],
    relatedConcepts: ['scarlet-rot', 'dioses-exteriores'],
    relatedTimelineEvents: ['aeonia-bloom'],
  },

  'altus-plateau': {
    summary:
      'Altus Plateau es la meseta dorada que conduce a Leyndell. Tierra agrícola del Orden Dorado en su esplendor — campos dorados, viñedos, caminos pavimentados. La belleza está intacta pero su época ya pasó. Cada villa abandonada es testimonio de la fractura silenciosa. Los Mausoleos Errantes — torres móviles caminando sobre piernas — recorren la meseta llevando los cuerpos eternos de los demidióses, solución arquitectónica al problema cosmológico de almacenar reyes que no terminan de morir.',
    deepLore: [
      h(2, 'Geografía: la meseta elevada'),
      p(
        'Altus Plateau es meseta elevada al norte de Liurnia, accesible mediante la Gran Escalera (Grand Lift of Dectus). Conecta con ',
        link('Leyndell', 'region', 'leyndell'),
        ' al sur (la capital se construye en su extremo meridional, alrededor del Árbol Áureo), con ',
        link('Mt. Gelmir', 'region', 'mt-gelmir'),
        ' al este (volcán activo que alberga el Volcano Manor), con las ',
        link('Mountaintops of the Giants', 'region', 'mountaintops'),
        ' al noreste (a través de pasos rocosos), y con ',
        link('Liurnia', 'region', 'liurnia'),
        ' al sur. Su geografía es alternancia de campos cultivados, viñedos abandonados, caminos pavimentados con piedra dorada, y ruinas dispersas de civilizaciones tempranas del Orden.'
      ),
      h(2, 'Historia detallada: la utopía agrícola'),
      p(
        'Altus es la tierra que los devotos del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' imaginan cuando piensan en su utopía: campos de trigo dorado, viñedos cultivados durante eras, caminos seguros patrullados por caballeros, villas prósperas con templos a la Voluntad Mayor. Durante el esplendor del régimen, Altus producía el alimento que sostenía a Leyndell. Sus aristócratas locales eran nobles menores leales pero autónomos. Sus templos eran satélites operativos del Árbol Áureo central. Las catacumbas dispersas albergaban Caballeros del Crisol en función ritual aún tolerada.'
      ),
      p(
        'La era del esplendor terminó gradualmente con la fractura del Anillo Elden. Las patrullas se redujeron. Los caminos se volvieron inseguros. Las villas se abandonaron progresivamente. Los viñedos siguieron produciendo durante eras pero sin distribución organizada. Cuando el Tarnished cruza la meseta tras subir la Gran Escalera, encuentra paisaje físicamente intacto pero socialmente vacío. La belleza arquitectónica persiste; la operatividad humana ha cesado.'
      ),
      h(2, 'Los Mausoleos Errantes'),
      p(
        'La característica cosmológicamente más distintiva de Altus son los Mausoleos Errantes (',
        em('Walking Mausoleums'),
        ') — torres móviles arquitectónicamente complejas caminando lentamente sobre piernas óseas gigantescas. Su función es almacenar los cuerpos eternos de demidióses muertos parcialmente, ofreciendo refugio cosmológico a los Recuerdos asociados. Son solución arquitectónica al problema cosmológico de almacenar reyes que no terminan de morir — el régimen del Orden Dorado, con la Muerte sellada, no podía permitir que los demidióses caídos se descompusieran ordinariamente. Los Mausoleos los conservan en estado liminal, caminando perpetuamente por la meseta.'
      ),
      p(
        'El Tarnished puede aprovechar los Mausoleos. Destruir los caracoles parásitos en sus piernas detiene el caminar; entrar al interior permite duplicar Recuerdos asociados a demidióses específicos — operación cosmológica única que ningún otro lugar de las Tierras Intermedias permite. Los Mausoleos son por tanto simultáneamente cementerio activo, infraestructura ritual, y herramienta operativa para el Tarnished. Su existencia documenta cuán sofisticada era la respuesta del régimen al problema de la inmortalidad sellada.'
      ),
      h(2, 'Estado actual: vacío con belleza'),
      p(
        'Altus Plateau opera bajo control nominal del régimen central pero sin presencia humana significativa. Los Caballeros del Crisol patrullan en bucles rituales sin coordinación. Bandidos ocupan algunas villas. ',
        link('Goldmask', 'character', 'goldmask'),
        ' opera desde un puente menor de la meseta meditando en silencio absoluto. ',
        link('Brother Corhyn', 'character', 'corhyn'),
        ' eventualmente lo encuentra ahí. Los Mausoleos siguen caminando. La región aguarda — geográficamente intacta, cosmológicamente en suspensión.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Altus Plateau es el monumento del juego a la utopía vacía. Otros lugares de las Tierras Intermedias tienen tragedia activa (Caelid bajo Podredumbre, Mohgwyn como matadero, Stormveil bajo injertos). Altus tiene tragedia ',
        em('latente'),
        ' — la belleza arquitectónica intacta sin habitantes. La pregunta filosófica: ¿qué pasa con la utopía cuando se vacía sin ser destruida? Altus responde: persiste como monumento, indistinguible visualmente del esplendor original, pero vacía operativamente. El régimen del Orden Dorado en su forma más bella es también su forma más desolada. La utopía conservada sin habitantes es testimonio silencioso de su propia obsolescencia.'
      ),
    ],
    confirmed: [
      'Altus Plateau es meseta elevada accesible mediante la Gran Escalera de Dectus',
      'Conecta con Leyndell al sur, Mt. Gelmir al este, las Mountaintops al noreste',
      'Era tierra agrícola próspera durante el esplendor del Orden Dorado',
      'Los Mausoleos Errantes recorren la meseta almacenando cuerpos de demidióses muertos parcialmente',
      'Destruir los caracoles parásitos detiene el caminar y permite duplicar Recuerdos',
      'Goldmask opera desde un puente menor de la meseta meditando en silencio',
    ],
    inferred: [
      'La región dejó de operar humanamente tras la fractura aunque la belleza arquitectónica persiste',
      'Los Mausoleos son solución arquitectónica al problema cosmológico de la inmortalidad sellada',
      'Los Caballeros del Crisol patrullan en bucles rituales sin coordinación efectiva',
      'La región opera bajo control nominal del régimen central pero sin presencia humana significativa',
    ],
    theories: [
      'Existieron civilizaciones pre-Orden en Altus cuyos restos están bajo los caminos pavimentados',
      'Los Mausoleos fueron diseñados por arquitectos cosmológicos cuya identidad nunca se documenta',
      'Algunos Mausoleos contienen Recuerdos que nadie ha descubierto todavía',
      'Bajo la cosmología correcta, Altus podría reactivarse plenamente como utopía habitada',
    ],
    ambiguous: [
      'Cuándo exactamente comenzó el abandono progresivo de las villas',
      'Origen y constructor de los Mausoleos Errantes',
      'Cuántos Mausoleos operan actualmente en la meseta',
      'Si los Caballeros del Crisol que patrullan conservan consciencia residual',
    ],
    relatedCharacters: ['goldmask', 'corhyn', 'godfrey', 'godrick'],
    relatedRegions: ['leyndell', 'mt-gelmir', 'liurnia', 'mountaintops'],
    relatedFactions: ['orden-dorado', 'crucible-knights', 'fundamentalistas'],
    relatedConcepts: ['great-rune', 'erdtree', 'crucible', 'destined-death'],
    relatedTimelineEvents: ['marika-godfrey', 'estado-mundo-mancillado'],
  },

  'raya-lucaria': {
    summary:
      'Raya Lucaria es la Academia de magia más prestigiosa de las Tierras Intermedias, fundada en una isla en Liurnia bajo el Stargazer Ruins. Centro intelectual donde se cultivaba la magia estelar, gravitacional y de cristales primordiales. Su Gran Maestra Rennala la dirigió durante siglos hasta su quiebre tras el abandono de Radagon. La Academia castigó la curiosidad excesiva con excomunión sistemática — Sellen, Azur, Lusat y Thops fueron expulsados por exceder los límites doctrinalmente permitidos. Hoy opera como ruina funcional sin coordinación.',
    deepLore: [
      h(2, 'Geografía: la academia insular'),
      p(
        'Raya Lucaria se ubica en una isla específica dentro del lago central de ',
        link('Liurnia', 'region', 'liurnia'),
        ', accesible mediante el Schoolhouse Classroom como entrada lateral o el Grand Lift of Dectus como ruta alternativa. La estructura arquitectónica incluye: el Liftside Chamber donde estudiantes recibían orientación inicial, las aulas centrales (Schoolhouse Classroom), la biblioteca principal (Schoolhouse), el Sala de Banquete donde Rennala reside actualmente con el Huevo Ambarino, observatorios estelares en las torres altas, y el Stargazer Ruins en el extremo superior donde se realizaban rituales avanzados de comunicación astronómica. Cristal de Glintstone forma parte estructural de las paredes — el material mismo del edificio resuena con la magia que se estudia ahí.'
      ),
      h(2, 'Historia detallada: el corpus académico'),
      p(
        'Raya Lucaria fue fundada como institución académica autónoma de la magia con tres tradiciones especializadas: 1) Magia estelar (estudio de los astros y su influencia cósmica). 2) Magia gravitacional (manipulación de masa y peso, derivada de meteoros caídos). 3) Magia de cristal primordial (cristalografía cosmológica usando ',
        link('Glintstones', 'concept', 'glintstone'),
        '). Su jerarquía interna: Gran Maestre, Profesores, Estudiantes graduados, Estudiantes en formación. Su biblioteca contiene textos pre-Orden que el régimen oficial nunca catalogó.'
      ),
      p(
        link('Rennala', 'character', 'rennala'),
        ' dirigió la Academia durante eras como Gran Maestra. Su especialidad: magia de la ',
        link('Luna Llena', 'concept', 'full-moon'),
        '. Su matrimonio con ',
        link('Radagon', 'character', 'radagon'),
        ' integró oficialmente la Academia al Orden Dorado — pero Raya Lucaria conservó tradiciones pre-Orden disfrazadas de cortesía aristocrática. Cuando Radagon abandonó a Rennala para regresar al lado de Marika, Rennala perdió la razón. Sus estudiantes la quemaron en espirales de dolor. Los supervivientes la contuvieron con el Huevo Ambarino en su sala de banquete arruinada — donde permanece actualmente.'
      ),
      h(2, 'La política del exceso: las excomuniones'),
      p(
        'La Academia castigó sistemáticamente la curiosidad que excedía los límites doctrinales. Las excomuniones documentadas incluyen: ',
        link('Sellen', 'character', 'sellen'),
        ' (excomulgada por estudiar magia primordial prohibida — específicamente el corpus de Lusat y Azur sobre la ',
        link('Corriente Primigenia', 'concept', 'primeval-current'),
        '), ',
        link('Lusat', 'character', 'lusat'),
        ' y ',
        link('Azur', 'character', 'azur'),
        ' (cristalizados parcialmente por contacto prolongado con la Corriente — ahora son cuerpos cósmicos parciales), y ',
        link('Thops', 'character', 'thops'),
        ' (excomulgado por pobreza simple, no por desviación doctrinal). Las excomuniones documentan diferentes tipos de transgresión: doctrinal, cosmológica, económica.'
      ),
      h(2, 'Estado actual: la ruina funcional'),
      p(
        'Tras el quiebre de Rennala y la fractura del Anillo Elden, la Academia entró en crisis estructural. Sus profesores se dispersaron o se atrincheraron. Algunos hechiceros sobreviven en torres laterales (Mausoleum Knights patrullan rutas específicas, Crystalians custodian salones de Glintstone). La biblioteca permanece intacta pero parcialmente inaccesible. La sala de banquete de Rennala es objeto de quest específica del Tarnished — su derrota produce su Gran Runa (que rige el ciclo vital). Los Carian Sword Masters defienden zonas específicas. Los Schoolhouse Classroom siguen operativos parcialmente con clases en bucle ritual sin maestros vivos.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'Raya Lucaria es el monumento del juego a la institución del saber bajo régimen cosmológico. La Academia parecía neutral — solo magia, solo conocimiento — pero estaba estructuralmente ligada al Orden Dorado mediante el matrimonio dinástico Radagon-Rennala. Cuando ese matrimonio falló, la Academia falló. La excomunión de Sellen muestra que incluso las instituciones más laicas sancionan el conocimiento que amenaza al régimen anfitrión. La libertad académica es siempre condicional al pacto político subyacente. La pregunta filosófica: ¿puede el conocimiento existir genuinamente sin afiliación cosmológica? La Academia responde: solo dentro de límites tolerados por el régimen anfitrión. Quien excede los límites es excomulgado, cristalizado, o expulsado. La curiosidad libre es lujo cosmológicamente costoso.'
      ),
    ],
    confirmed: [
      'Raya Lucaria es la academia de magia más prestigiosa de las Tierras Intermedias',
      'Se ubica en isla específica dentro del lago central de Liurnia',
      'Sus tres tradiciones son magia estelar, gravitacional y de cristal primordial',
      'Rennala fue Gran Maestra antes de ser abandonada por Radagon',
      'El matrimonio Radagon-Rennala integró oficialmente la Academia al Orden Dorado',
      'Sellen, Lusat, Azur y Thops fueron excomulgados por distintas razones',
      'Tras el quiebre de Rennala, la Academia opera como ruina funcional',
    ],
    inferred: [
      'La biblioteca contiene textos pre-Orden que el régimen oficial nunca catalogó',
      'La Academia conservó tradiciones pre-Orden disfrazadas de cortesía aristocrática',
      'Lusat y Azur están cristalizados parcialmente — cuerpos cósmicos parciales',
      'La libertad académica es condicional al pacto político subyacente',
    ],
    theories: [
      'La Academia conoce secretos sobre los Nox que el régimen dorado nunca extrajo',
      'Si Sellen reformara la institución, podría reactivar magia primordial a gran escala',
      'Lusat y Azur siguen vivos en estados liminales (cristalizados, atemporales)',
      'Marika tolera a la Academia porque Radagon retiene afecto residual hacia Rennala',
    ],
    ambiguous: [
      'Cuántos profesores activos quedan en la Academia',
      'Si Rennala podría recuperar capacidad funcional bajo cosmología distinta',
      'Si la magia primordial puede practicarse fuera de la institución',
      'Cuándo exactamente cesaron las admisiones de nuevos estudiantes',
    ],
    relatedCharacters: ['rennala', 'radagon', 'sellen', 'ranni', 'thops', 'lusat', 'azur'],
    relatedRegions: ['liurnia', 'caria-manor'],
    relatedFactions: ['raya-lucaria', 'caria', 'orden-dorado'],
    relatedConcepts: ['dark-moon', 'full-moon', 'great-rune', 'glintstone', 'primeval-current'],
    relatedTimelineEvents: ['radagon-rennala', 'rennala-quiebre', 'sellen-excommunion'],
  },

  'peninsula-llorosa': {
    summary:
      'La Península Llorosa (Weeping Peninsula) es la región sur de Limgrave: pantanos perpetuos, lluvia eterna, tumbas dispersas, fortalezas marginales. Castle Morne en su extremo sur fue tomado por los Misbegotten esclavizados que se rebelaron contra sus amos. Es la primera revuelta visible al Tarnished — prueba inicial de que la opresión del Orden Dorado genera respuestas a todas las escalas. La lluvia eterna que da nombre a la región es alegoría meteorológica del duelo cosmológico permanente de las Tierras Intermedias.',
    deepLore: [
      h(2, 'Geografía: la tierra que llora'),
      p(
        'La Península Llorosa se ubica al sur de ',
        link('Limgrave', 'region', 'limgrave'),
        ', conectada por un puente angosto en su extremo norte. Su geografía es alternancia de praderas con lluvia perpetua, pantanos costeros, tumbas dispersas (Tombsward Catacombs, Impaler\'s Catacombs), y la fortaleza Castle Morne en su extremo meridional. La lluvia no cesa nunca — fenómeno cosmológico, no meteorológico ordinario. Las criaturas locales se han adaptado a la humedad permanente: Árbol Áureo Avatars patrullan ciertas áreas, Tibia Mariners aparecen de noche, Demi-Humanos habitan ruinas costeras, fantasmas vagan por los caminos.'
      ),
      h(2, 'Historia detallada: Castle Morne y la rebelión'),
      p(
        link('Castle Morne', 'region', 'castle-morne'),
        ' fue sede de la Casa Volmer, dinastía noble menor del Orden Dorado dedicada al gobierno de la región más meridional de las Tierras Intermedias. La Casa esclavizó ',
        link('Misbegotten', 'faction', 'misbegotten'),
        ' como guerreros gladiadores y mano de obra durante generaciones. La acumulación de explotación generó resentimiento sin canal de expresión legítimo. La revuelta llegó cuando llegó: súbita, total, sangrienta. Los Misbegotten tomaron el castillo, mataron al gobernador, esclavizaron a los aristócratas supervivientes y se establecieron como nuevos amos. ',
        link('Edgar', 'character', 'edgar'),
        ' es el último lord superviviente que defiende un sector residual; ',
        link('Irina', 'character', 'irina'),
        ' su hija ciega escapó con una carta para él.'
      ),
      p(
        'La revuelta de Castle Morne es la primera prueba pública del juego de que el régimen pierde control en la base. Donde Caelid muestra colapso por dios externo (Podredumbre), Mt. Gelmir muestra colapso por blasfemia organizada, Castle Morne muestra colapso por revuelta esclava interna. Es el más político de los colapsos regionales — sin teología cosmológica, sin pacto con dios alternativo, solo opresores derrocados por oprimidos.'
      ),
      h(2, 'La lluvia eterna como fenómeno cosmológico'),
      p(
        'La lluvia perpetua no es meteorología ordinaria. Es fenómeno cosmológico cuya causa exacta nunca se enuncia explícitamente pero cuyas hipótesis comunitarias incluyen: 1) Maldición ritual sobre la región tras la conquista del Storm Hawk King por Godfrey. 2) Manifestación residual de cosmología pre-Orden que nunca fue purificada plenamente. 3) Duelo cosmológico activo de las Tierras Intermedias post-fractura concentrado geográficamente. La lluvia eterna hace de la región alegoría meteorológica del duelo cosmológico permanente — todas las regiones de las Tierras Intermedias post-fractura están en duelo, pero la Península lo manifiesta visiblemente. Las criaturas locales beben de su melancolía. Los caminos están permanentemente embarrados. Las catacumbas se inundan progresivamente.'
      ),
      h(2, 'Estado actual: la región en duelo permanente'),
      p(
        'Cuando el Tarnished cruza el puente sur de Limgrave, encuentra paisaje cosmológicamente alterado. Castle Morne está bajo control Misbegotten — su jefe principal, el Leonine Misbegotten, custodia las salas centrales como rey-esclavo de su propia revuelta. La quest de ',
        link('Edgar', 'character', 'edgar'),
        ' e ',
        link('Irina', 'character', 'irina'),
        ' opera ahí — Edgar enloquecerá tras la muerte de Irina y eventualmente masacrará Misbegotten en otras regiones como venganza ciega. Las catacumbas dispersas albergan jefes menores (Árbol Áureo Burial Watchdog, Cemetery Shade). Mercaderes nómadas mantienen rutas costeras autónomamente. Tibia Mariners reaniman cadáveres durante la noche en las playas.'
      ),
      h(2, 'Significado simbólico'),
      p(
        'La Península Llorosa es el monumento del juego al colapso por revuelta interna sin teología alternativa. La rebelión Misbegotten no produjo nuevo régimen cosmológico — solo intercambió roles dentro del mismo patrón de poder. Los esclavos liberados se convirtieron en amos esclavizadores. La libertad sin estructura nueva es solo intercambio de roles. La lluvia eterna sobre la región es metonimia exacta: el cielo llora porque ningún cambio es genuino. Solo el ',
        link('Haligtree', 'region', 'haligtree'),
        ' de Miquella ofrecía rediseño cosmológico completo — y los Misbegotten que peregrinaron allí encontraron por primera vez integración real. La Península es testimonio doloroso: la opresión genera respuestas, pero las respuestas que reproducen el patrón solo perpetúan la lluvia.'
      ),
    ],
    confirmed: [
      'La Península Llorosa se ubica al sur de Limgrave, conectada por un puente angosto',
      'La lluvia eterna no es meteorología ordinaria — es fenómeno cosmológico',
      'Castle Morne fue sede de la Casa Volmer hasta la revuelta Misbegotten',
      'Edgar es el último lord superviviente; Irina su hija ciega escapada',
      'Es la primera revuelta visible al Tarnished durante su viaje',
      'La quest de Edgar lo lleva a masacrar Misbegotten en otras regiones tras la muerte de Irina',
    ],
    inferred: [
      'La revuelta no produjo cambio cosmológico — solo intercambió roles dentro del mismo patrón',
      'La lluvia eterna es manifestación residual de cosmología pre-Orden o duelo activo post-fractura',
      'La Casa Volmer pertenecía al linaje del Storm Hawk King con sangre Godfreyana lateral',
      'Los Misbegotten que peregrinaron al Haligtree encontraron por primera vez integración real',
    ],
    theories: [
      'La lluvia eterna fue causada por maldición ritual tras la conquista del Storm Hawk King',
      'Existieron civilizaciones pre-Orden bajo la península cuyas ruinas están sumergidas en pantanos',
      'Algunos Misbegotten supervivientes a Castle Morne mantuvieron contacto con los Albinaurics del Haligtree',
      'La región fue zona ritual específica para procesamiento funerario en eras pre-Orden',
    ],
    ambiguous: [
      'Causa exacta de la lluvia eterna',
      'Cuándo exactamente ocurrió la revuelta de Castle Morne',
      'Cuántos Misbegotten participaron y cuántos sobrevivieron',
      'Si la región puede recuperarse plenamente bajo cosmología post-Voluntad Mayor',
    ],
    relatedCharacters: ['godfrey', 'edgar', 'irina'],
    relatedRegions: ['limgrave', 'castle-morne'],
    relatedFactions: ['misbegotten', 'orden-dorado'],
    relatedConcepts: ['crucible', 'omen-curse'],
    relatedTimelineEvents: ['castle-morne-rebellion', 'estado-mundo-mancillado'],
  },
}
