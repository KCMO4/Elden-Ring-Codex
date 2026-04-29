import type { DeepEntity, RichBlock, RichInline } from '../types'

const link = (label: string, targetType: 'character' | 'region' | 'faction' | 'concept' | 'ending' | 'timeline', slug: string): RichInline =>
  ({ type: 'link', label, targetType, slug })
const p = (...children: RichInline[]): RichBlock =>
  ({ type: 'paragraph', children })
const h = (level: 2 | 3, text: string, id?: string): RichBlock =>
  ({ type: 'heading', level, text, id })

/**
 * Phase 8 — Subregions promoted to deep tier with extended lore.
 * Structure: Resumen / Historia / Estado actual / Tragedia oculta / Significado.
 */
export const regionsDeepLore: Record<string, Partial<DeepEntity>> = {

  'castle-morne': {
    summary:
      'Castle Morne, fortaleza costera de la Casa Volmer en la Península Llorosa, fue la sede aristocrática que cayó en la primera revuelta exitosa contra el Orden Dorado: la rebelión de los Misbegotten esclavizados. Su caída es la primera prueba pública del juego de que el régimen pierde el control en la base.',
    deepLore: [
      h(2, 'Resumen del lugar'),
      p(
        'Castle Morne se alza sobre acantilados castigados por la lluvia perpetua de la ',
        link('Península Llorosa', 'region', 'peninsula-llorosa'),
        '. Era sede de la Casa Volmer, dinastía noble menor del Orden Dorado dedicada al gobierno de la región más meridional del Interregno. Sus paredes hoy están manchadas de sangre Misbegotten y aristocrática por igual.',
      ),
      h(2, 'Historia detallada'),
      p(
        'La Casa Volmer gobernaba bajo la lógica habitual del régimen: usar a los ',
        link('Misbegotten', 'faction', 'misbegotten'),
        ' como esclavos guerreros, gladiadores y mano de obra. Generaciones de explotación acumularon resentimiento sin canal de expresión legítimo. La revuelta llegó cuando llegó: súbita, total, sangrienta. Los Misbegotten tomaron el castillo, mataron al gobernador, esclavizaron lo que pudieron y se establecieron como nuevos amos.',
      ),
      p(
        link('Edgar', 'character', 'edgar'),
        ', lord superviviente, defendió un sector residual del castillo hasta el final. Su hija ',
        link('Irina', 'character', 'irina'),
        ' escapó ciega a la costa con una carta para él. Cuando el Mancillado lleva la carta, Edgar parte a vengarla — sin saber al principio que ya está muerta.',
      ),
      h(2, 'Estado actual'),
      p(
        'El castillo está bajo control Misbegotten. Su jefe principal, el Leonine Misbegotten, custodia las salas centrales como rey-esclavo de su propia revuelta. Las antiguas armas Volmer permanecen en armerías; sus archivos genealógicos siguen intactos pero ya nadie los lee.',
      ),
      h(2, 'Tragedia oculta'),
      p(
        'La revuelta no liberó a los Misbegotten — solo los reposicionó. Siguen siendo malformados, siguen siendo perseguidos en otras regiones, siguen sin reconocimiento institucional. Tomar Castle Morne fue victoria táctica que no resolvió nada estructural. Edgar, en su locura post-Irina, los masacra en venganza ciega; ellos, en su rabia post-libertad, lo masacran a él. Es ciclo sin salida.',
      ),
      h(2, 'Significado simbólico'),
      p(
        'Castle Morne es la primera revuelta visible al Mancillado. Establece tema central del juego: la opresión del Orden Dorado genera respuestas, pero las respuestas reproducen el mismo patrón de poder. Los esclavos liberados se convierten en amos esclavizadores. La libertad sin estructura nueva es solo intercambio de roles.',
      ),
    ],
    confirmed: [
      'La Casa Volmer gobernaba la Península Llorosa desde Castle Morne',
      'Los Misbegotten se rebelaron y tomaron el castillo',
      'Edgar es el último lord superviviente',
      'Irina, su hija, escapó ciega con una carta',
    ],
    inferred: [
      'La revuelta fue acumulación de generaciones de explotación, no acto súbito',
      'Edgar enloquece tras la muerte de Irina y masacra Misbegotten en otras regiones',
      'La caída marca la pérdida de control del régimen en la base',
    ],
    theories: [
      'La revuelta de Castle Morne pudo ser inspirada o coordinada con otras revueltas Misbegotten',
      'Nepheli Loux podría tener parentesco lejano con la Casa Volmer',
      'La armería Volmer contenía armas pre-Orden capaces de matar Misbegotten — su uso por los rebeldes sería ironía',
    ],
    ambiguous: [
      'Cuándo exactamente ocurrió la revuelta',
      'Cuántos Misbegotten participaron y cuántos sobrevivieron',
      'Si Edgar conocía la naturaleza Crisol-derivada de los Misbegotten antes de la revuelta',
    ],
    relatedCharacters: ['edgar', 'irina', 'hyetta'],
    relatedFactions: ['misbegotten', 'orden-dorado'],
    relatedRegions: ['peninsula-llorosa', 'limgrave'],
    relatedConcepts: ['crucible', 'omen-curse'],
    relatedTimelineEvents: ['shattering-war'],
  },

  'caria-manor': {
    summary:
      'Caria Manor, sede ancestral de la familia Caria en Liurnia, conserva intactos los rituales protectores de su dinastía. Sus jardines están patrullados por manos vivientes; su biblioteca contiene secretos de la magia de la Luna Llena. Es el último bastión funcional de la línea Carian tras la caída institucional de Rennala.',
    deepLore: [
      h(2, 'Resumen del lugar'),
      p(
        'Caria Manor se alza al noroeste de Liurnia, conectado a las ',
        link('Tres Hermanas', 'region', 'three-sisters'),
        ' por puentes y pasajes ocultos. Es la residencia ancestral del clan ',
        link('Caria', 'faction', 'caria'),
        ' antes de que ',
        link('Rennala', 'character', 'rennala'),
        ' trasladase el centro de operaciones a la Academia de ',
        link('Raya Lucaria', 'region', 'raya-lucaria'),
        '.',
      ),
      h(2, 'Historia detallada'),
      p(
        'La familia Caria desarrolló su tradición mágica aquí: encantamientos protectores, espadas hechizadas con magia lunar, sigilos rituales en la arquitectura. Tras la guerra contra Radagon y el matrimonio mestizo, Caria Manor fue marginalmente desplazado por Raya Lucaria como sede principal — pero los rituales de la dinastía propia se siguen oficiando aquí.',
      ),
      p(
        link('Pidia', 'character', 'pidia'),
        ', sirviente Carian de antigua data, sigue cuidando los jardines superiores aunque sus señores ya no le respondan claramente. Su lealtad estructural ecoa la de Iji a Ranni: sirvientes que continúan cuando ya nadie ordena.',
      ),
      h(2, 'Estado actual'),
      p(
        'El manor está infestado por "Manos Vivientes" — guardianes corrompidos cuya función original era proteger a la familia y que ahora atacan a cualquier intruso, incluyendo a posibles descendientes Carian. ',
        link('Loretta', 'character', 'royal-knight-loretta'),
        ', Caballero Real Carian, patrulla los jardines como boss eternamente leal aunque su mente haya partido.',
      ),
      h(2, 'Tragedia oculta'),
      p(
        'Loretta sigue patrullando los jardines siglos después de la caída. Su lealtad sobrevive a su consciencia: pelea por una corte que ya no existe. Las Manos Vivientes son ex-protectores convertidos en peligro: la magia protectora se volvió contra los protegidos cuando los protegidos dejaron de ser identificables.',
      ),
      h(2, 'Significado simbólico'),
      p(
        'Caria Manor es prueba arqueológica de que la dinastía Caria es culturalmente distinta del Orden Dorado. Sus rituales, su magia, su arquitectura, todo predata o sobrevive en paralelo al régimen dorado. Aquí ',
        link('Ranni', 'character', 'ranni'),
        ' aprendió los rudimentos de su rebelión cosmológica. La continuidad cultural Carian es la matriz desde donde se incuba la Era de las Estrellas.',
      ),
    ],
    confirmed: [
      'Caria Manor es sede ancestral del clan Caria en Liurnia',
      'Las Manos Vivientes son ex-protectores corrompidos',
      'Loretta es Caballero Real Carian que sigue patrullando',
      'Pidia sirve como sirviente leal en los jardines superiores',
    ],
    inferred: [
      'La tradición mágica Caria se desarrolló aquí antes de Raya Lucaria',
      'Ranni aprendió rudimentos de su rebelión en este lugar',
      'La cultura Carian es distinta del Orden Dorado y predata su matrimonio mestizo',
    ],
    theories: [
      'Las Manos Vivientes son guardianes que perdieron capacidad de identificar a sus protegidos',
      'La biblioteca de Caria Manor contiene secretos cosmológicos que ni Rennala documentó',
      'Algunos de los hechizos protectores siguen activos y protegen acceso a Three Sisters',
    ],
    ambiguous: [
      'Cuántas generaciones Carian habitaron aquí antes del traslado a Raya Lucaria',
      'Si Pidia conoce el plan de Ranni o solo cumple deber',
      'Si Loretta sigue siendo la misma persona que en Elphael (el otro Loretta) o son dos personas distintas',
    ],
    relatedCharacters: ['rennala', 'ranni', 'royal-knight-loretta', 'pidia', 'seluvis'],
    relatedFactions: ['caria', 'raya-lucaria'],
    relatedRegions: ['liurnia', 'three-sisters', 'raya-lucaria'],
    relatedConcepts: ['full-moon', 'dark-moon', 'glintstone'],
    relatedTimelineEvents: ['radagon-rennala'],
  },

  'three-sisters': {
    summary:
      'Las Tres Hermanas son tres torres en el extremo noroeste de Liurnia, cada una hogar de una de las hijas Carian post-caída: Ranni en la torre central, Seluvis en otra, la torre de Renna como reliquia abandonada. Es el centro de operaciones de la rebelión cosmológica más sofisticada del juego.',
    deepLore: [
      h(2, 'Resumen del lugar'),
      p(
        'Tres torres se alzan al fondo de Caria Manor, accesibles solo por pasajes secretos. Cada una alberga (o albergó) a un miembro del círculo de ',
        link('Ranni', 'character', 'ranni'),
        ': la Torre de Ranni la Bruja, la Torre de Seluvis (alquimista de muñecos), y la Torre de Renna (alias humano de Ranni antes de su transformación, ahora abandonada).',
      ),
      h(2, 'Historia detallada'),
      p(
        'Tras la ',
        link('Noche de los Cuchillos Negros', 'timeline', 'ranni-noche-cuchillos'),
        ' y la ',
        link('muerte corporal de Ranni', 'timeline', 'ranni-bodily-death'),
        ', su mente se transfirió a una muñeca articulada. La Torre central se convirtió en su sede: aquí coordinaba a sus aliados — ',
        link('Blaidd', 'character', 'blaidd'),
        ', ',
        link('Iji', 'character', 'iji'),
        ', ',
        link('Seluvis', 'character', 'seluvis'),
        ' — desde la distancia de su porcelana.',
      ),
      p(
        'Seluvis opera su laboratorio de muñecas en su propia torre: colección espeluznante de figuras de mujeres notables del Interregno transformadas en marionetas. Su intento más siniestro es agregar a la propia Ranni a la colección — traición silenciada que termina con su muerte misteriosa, probablemente envenenado por Iji.',
      ),
      p(
        'La Torre de Renna es reliquia: contenía a Ranni en su forma humana antes del corte. El Mancillado encuentra aquí a Ranni-Renna en su primer encuentro, todavía manteniendo el alias humano. Su ofrenda inicial — el anillo Spirit Calling Bell — es lo que permite al Mancillado invocar espíritus durante todo el juego.',
      ),
      h(2, 'Estado actual'),
      p(
        'Las torres están infestadas por Royal Revenants (criaturas amalgamadas) y por Royal Carian Knights residuales. El acceso requiere atravesar Caria Manor entero. Adula, dragón glintstone aliada de Ranni, custodia los puentes.',
      ),
      h(2, 'Tragedia oculta'),
      p(
        'Tres hermanas, tres soledades. Cada torre alberga una respuesta distinta a la pérdida: Ranni planifica desde porcelana, Seluvis manipula figuras inanimadas, Renna ya no existe como persona separada. La rebelión cosmológica más sofisticada del juego se incuba en un cluster de aislamientos individuales.',
      ),
      h(2, 'Significado simbólico'),
      p(
        'Las Tres Hermanas son el laboratorio físico de la Era de las Estrellas. Sin estas torres, sin la coordinación discreta entre Ranni, Iji, Blaidd y Seluvis, sin el primer encuentro con el Mancillado en la Torre de Renna, ningún final estelar sería posible. Es el espacio donde la rebelión cosmológica deja de ser idea y se vuelve operación.',
      ),
    ],
    confirmed: [
      'Tres torres pertenecen a Ranni, Seluvis y Renna respectivamente',
      'Ranni opera su quest desde la torre central',
      'Seluvis colecciona muñecas-figuras en su propia torre',
      'La Torre de Renna es donde Ranni encuentra al Mancillado por primera vez',
      'Adula custodia el acceso',
    ],
    inferred: [
      'Las torres fueron diseñadas como espacios secretos del clan Caria',
      'Iji eliminó a Seluvis cuando intentó traicionar a Ranni',
      'Renna es alias humano de Ranni antes de la muñeca, no una persona separada',
    ],
    theories: [
      'Las torres están conectadas por hechizos de teletransporte que solo los iniciados pueden usar',
      'La Torre de Renna conserva fragmentos del cuerpo Empyrean original de Ranni',
      'El laboratorio de Seluvis tenía planes para convertir al propio Mancillado en muñeca',
    ],
    ambiguous: [
      'Cuándo exactamente Ranni se transfirió a la muñeca',
      'Si Renna fue persona real anterior o solo construcción narrativa',
      'Cuánta autoridad real ejerce Ranni sobre Iji y Blaidd',
    ],
    relatedCharacters: ['ranni', 'blaidd', 'iji', 'seluvis', 'pidia'],
    relatedFactions: ['caria'],
    relatedRegions: ['caria-manor', 'liurnia', 'nokron', 'nokstella'],
    relatedConcepts: ['dark-moon', 'age-of-stars', 'empyrean'],
    relatedTimelineEvents: ['ranni-noche-cuchillos', 'ranni-bodily-death'],
    relatedEndings: ['age-of-stars'],
  },

  'siofra-river': {
    summary:
      'Siofra River es río subterráneo del Interregno antiguo, hogar de la Mesa Ancestral de los Hombres-Bestia y de las almas inferiores que el Erdtree no acoge. Bajo su cielo estrellado falso operan rituales pre-Orden que el régimen dorado nunca pudo erradicar.',
    deepLore: [
      h(2, 'Resumen del lugar'),
      p(
        'Siofra es uno de los dos grandes ríos subterráneos del Interregno (el otro es ',
        link('Ainsel', 'region', 'ainsel-river'),
        '). Su cielo es falso: estrellas pintadas o constelaciones residuales de una era cosmológica anterior. El río corre bajo Caelid y Limgrave, conectando ruinas dispersas que formaron una civilización paralela al Orden Dorado.',
      ),
      h(2, 'Historia detallada'),
      p(
        'Los ',
        link('Seguidores Ancestrales', 'faction', 'ancestral-followers'),
        ' habitan estas riberas. Su iconografía — cornamentas, cuernos, cuerpos parcialmente cervidos — sugiere vínculo directo con el ',
        link('Crisol primigenio', 'concept', 'crucible'),
        '. Sus rituales se centran en la Mesa Ancestral, lugar donde se procesan las almas que el Erdtree no acoge: humanos demasiado primitivos, criaturas mestizas con animales, formas de vida que el Orden clasificó como impuras.',
      ),
      p(
        'El Espíritu Ancestral Real (Regal Ancestor Spirit) es la deidad-figura central del culto. Su Remembrance es premio al Mancillado que lo derrote. Pero el espíritu no es enemigo natural: es resultado material de un ritual cosmológico que el Orden Dorado interrumpió siglos atrás. Combatirlo es destruir un proceso ritual a medias.',
      ),
      h(2, 'Estado actual'),
      p(
        'El río fluye en silencio. Los Seguidores Ancestrales mantienen rituales con cantidad reducida. Las ruinas de la civilización paralela están intactas pero deshabitadas. Hay un pozo ascendente — el Pozo de Siofra — que conecta con la superficie de Caelid.',
      ),
      h(2, 'Tragedia oculta'),
      p(
        'Bajo Siofra existió una civilización completa que el Orden Dorado borró del registro. Sus rituales procesaban a los muertos que el Erdtree rechazaba. El sello de la Muerte Predestinada interrumpió esos rituales: las almas inferiores que antes encontraban descanso en la Mesa Ancestral hoy vagan sin proceso. Siofra es museo de un cosmos enterrado.',
      ),
      h(2, 'Significado simbólico'),
      p(
        'El cielo estrellado falso de Siofra es la imagen perfecta del lugar: una bóveda celeste que ya no es real pero que todavía recuerda haber sido. Los Seguidores Ancestrales pintan estrellas porque las estrellas reales ya no los miran. Es liturgia residual sosteniéndose por inercia ritual.',
      ),
    ],
    confirmed: [
      'Siofra es río subterráneo con cielo estrellado falso',
      'Los Seguidores Ancestrales habitan sus riberas',
      'La Mesa Ancestral procesaba almas que el Erdtree no acoge',
      'El Regal Ancestor Spirit es boss con Remembrance',
    ],
    inferred: [
      'Su civilización es paralela al Orden Dorado, no anterior ni posterior',
      'El sello de la Muerte interrumpió sus rituales originales',
      'Los Seguidores Ancestrales conservan vínculo con el Crisol primigenio',
    ],
    theories: [
      'El cielo estrellado falso es residuo de cuando los Nox aún operaban con autoridad',
      'Combatir al Regal Ancestor Spirit cierra definitivamente la posibilidad ritual del lugar',
      'Algunos Seguidores Ancestrales son humanos exiliados que adoptaron el culto',
    ],
    ambiguous: [
      'Cuánto tiempo lleva la civilización subterránea en su estado actual',
      'Si los Seguidores Ancestrales son humanos transformados o especie distinta',
      'Si Siofra y Ainsel se conectaron originalmente y fueron divididos por la fractura',
    ],
    relatedCharacters: ['placidusax', 'maliketh'],
    relatedFactions: ['ancestral-followers', 'hombres-bestia'],
    relatedRegions: ['caelid', 'ainsel-river', 'nokron'],
    relatedConcepts: ['crucible', 'destined-death', 'stars-and-fate-concept'],
    relatedTimelineEvents: ['era-antigua', 'antiguos-ritos-muerte'],
  },

  'ainsel-river': {
    summary:
      'Ainsel River es río subterráneo paralelo al Siofra, conducto a las ciudades eternas Nox. Hogar de Astel, Naturalborn of the Void — la entidad estelar que destruyó a los Nox. Su cosmología es astronómica, su agua refleja estrellas reales, su silencio guarda rebelión cosmológica.',
    deepLore: [
      h(2, 'Resumen del lugar'),
      p(
        'Ainsel desciende desde Liurnia hacia las profundidades. A diferencia de ',
        link('Siofra', 'region', 'siofra-river'),
        ', su cosmología es astronómica más que ancestral: refleja estrellas reales, comunica con cuerpos celestes, alberga ruinas Nox. Es el corredor subterráneo a ',
        link('Nokstella', 'region', 'nokstella'),
        ', ciudad de la Luna Oscura.',
      ),
      h(2, 'Historia detallada'),
      p(
        'Los ',
        link('Nox', 'faction', 'nox'),
        ', condenados por intentar forjar su propio dios, fueron enterrados aquí cuando Astel cayó del cielo y los aplastó. La entidad estelar quedó residente: hoy patrulla las ruinas como guardián cósmico de su propio crimen. Su Remembrance es premio al Mancillado.',
      ),
      p(
        'Ranni descendió aquí durante su quest. Su forma muñeca habita un nicho oculto en el río. Aquí obtiene la Hoja Mata-Dedos, arma capaz de cortar a los Dos Dedos. La quest de la Era de las Estrellas culmina derrotando a Astel y reuniendo los componentes de la espada lunar oscura.',
      ),
      h(2, 'Estado actual'),
      p(
        'Las ruinas Nox están parcialmente habitadas por sus descendientes silentes. Los ',
        link('Claymen', 'faction', 'claymen'),
        ' patrullan las riberas. Astel duerme entre las ruinas hasta ser despertado. La entidad sigue siendo letal: matar dioses fue su propósito original, y ese propósito no ha caducado.',
      ),
      h(2, 'Tragedia oculta'),
      p(
        'Los Nox perdieron todo. Su dios prototípico nunca llegó a existir; su civilización fue aplastada por una estrella enviada como castigo; ahora esperan en silencio una era que creen que llegará pero que la cosmología actual jamás permitirá. La Era de las Estrellas que Ranni promete es la única reivindicación posible — y aún así depende de un Mancillado externo cumpliendo el viaje hasta el final.',
      ),
      h(2, 'Significado simbólico'),
      p(
        'Ainsel es el monumento subterráneo a la rebelión cosmológica fallida. Donde Siofra preserva un cosmos paralelo enterrado, Ainsel preserva la memoria de una rebelión castigada. Astel no es enemigo arbitrario: es el verdugo cósmico patrullando eternamente la escena del crimen. Combatirlo es liberar a los Nox de su última cárcel.',
      ),
    ],
    confirmed: [
      'Ainsel desciende a Nokstella',
      'Astel, Naturalborn of the Void, habita las ruinas',
      'Los Claymen patrullan las riberas',
      'Ranni habita un nicho oculto durante su quest',
      'La Hoja Mata-Dedos se obtiene en este corredor',
    ],
    inferred: [
      'Astel fue enviado como castigo cósmico contra los Nox',
      'Las ruinas Nox son monumentos a una rebelión cosmológica anterior a Ranni',
      'La quest de la Era de las Estrellas culmina derrotando aquí a Astel',
    ],
    theories: [
      'Astel sigue siendo guardián activo bajo órdenes de la Voluntad Mayor o un dios externo',
      'Más Astels podrían existir en otras regiones esperando despertarse',
      'Ranni heredó el sueño Nox de manera deliberada, no accidental',
    ],
    ambiguous: [
      'Cuánto tiempo lleva Astel patrullando',
      'Si los Nox supervivientes saben que Ranni heredará su rebelión',
      'Si los Claymen son Nox transformados o especie distinta',
    ],
    relatedCharacters: ['ranni'],
    relatedFactions: ['nox', 'claymen', 'silver-mimic-tears'],
    relatedRegions: ['nokstella', 'lake-of-rot', 'liurnia'],
    relatedConcepts: ['dark-moon', 'age-of-stars', 'voluntad-mayor'],
    relatedTimelineEvents: ['nox-ciudades-eternas', 'hoja-mata-dedos'],
    relatedEndings: ['age-of-stars'],
  },

  sellia: {
    summary:
      'Sellia, Ciudad de la Hechicería, fue centro académico de magia gravitacional en Caelid antes de la Floración. Aquí aprendió Radahn los rudimentos de su poder cósmico; aquí Sellen estableció su laboratorio post-excomunión. Hoy sus calles brillan con maldiciones ardientes y sus académicos vagan transformados.',
    deepLore: [
      h(2, 'Resumen del lugar'),
      p(
        'Sellia se alza sobre la meseta central de ',
        link('Caelid', 'region', 'caelid'),
        '. Antes de la devastación era ciudad respetable: academia menor especializada en magia gravitacional y de las estrellas, satélite intelectual de ',
        link('Raya Lucaria', 'region', 'raya-lucaria'),
        '. Hoy es museo carmesí de su propio colapso.',
      ),
      h(2, 'Historia detallada'),
      p(
        link('Sellen', 'character', 'sellen'),
        ' se estableció aquí tras su excomunión de Raya Lucaria, junto a sus maestros ',
        link('Azur', 'character', 'azur'),
        ' y ',
        link('Lusat', 'character', 'lusat'),
        '. Los tres investigaron la Corriente Primigenia y las estrellas primordiales, sobrepasando los límites permitidos por la Academia. ',
        link('Radahn', 'character', 'radahn'),
        ' aprendió su técnica gravitacional con Sellen aquí. Su capacidad posterior de bloquear las estrellas es directa heredera de esa enseñanza.',
      ),
      p(
        'Tras la ',
        link('Batalla de Aeonia', 'timeline', 'batalla-aeonia'),
        ', la Podredumbre Escarlata cubrió Caelid. Los académicos fueron transformados: hechiceros podridos, investigadores carmesíes, maestros mutados. La ciudad sigue brillando con maldiciones residuales de hechizos en proceso. Visitar Sellia es entrar a un experimento académico interrumpido.',
      ),
      h(2, 'Estado actual'),
      p(
        'Tres campanas custodian el centro de Sellia: solo encendiéndolas todas se abre el acceso al núcleo. Magma Wyrm habita afueras. Hechiceros mutados patrullan el resto. La Torre Sellia donde Sellen residía sigue activa pero con su cuerpo transformándose lentamente en cuerpo cósmico.',
      ),
      h(2, 'Tragedia oculta'),
      p(
        'Sellen, Azur y Lusat compartieron el mismo destino: el conocimiento sobrepasó la carne. Los tres están parcialmente convertidos en cuerpos celestes, suspendidos entre la academia y las estrellas. Su iluminación final es geometría celestial que ya no pueden dejar de habitar.',
      ),
      h(2, 'Significado simbólico'),
      p(
        'Sellia encarna la pregunta del juego sobre el conocimiento: ¿hasta dónde puede mirar un mago a las estrellas antes de que las estrellas lo absorban? La excomunión de Raya Lucaria contra Sellen no fue arbitraria — fue prevención. Pero la prevención llegó tarde: el saber ya estaba en su cuerpo. Sellia es la prueba arqueológica de que toda academia tiene un límite invisible que algunos cruzan involuntariamente.',
      ),
    ],
    confirmed: [
      'Sellia es centro académico de magia gravitacional en Caelid',
      'Sellen estableció su laboratorio aquí tras la excomunión',
      'Radahn aprendió su técnica gravitacional con Sellen',
      'La ciudad fue cubierta por la Podredumbre tras Aeonia',
    ],
    inferred: [
      'Azur y Lusat también investigaron aquí antes de su transformación cósmica',
      'Sellen está parcialmente convertida en cuerpo celestial',
      'La transformación de los académicos no es solo podredumbre: es también iluminación cósmica',
    ],
    theories: [
      'Las maldiciones residuales que iluminan las calles son hechizos a medio terminar de los académicos transformados',
      'Sellen, Azur y Lusat formaron un triángulo cósmico que se sigue completando',
      'Si los tres se reunieran cosmológicamente, podrían constituir un Lord Elden alternativo',
    ],
    ambiguous: [
      'Si los hechiceros mutados conservan consciencia residual',
      'Cuánto tiempo lleva Sellen en su torre',
      'Si la magia gravitacional puede curarse o solo transformarse más',
    ],
    relatedCharacters: ['sellen', 'azur', 'lusat', 'radahn', 'rennala'],
    relatedFactions: ['raya-lucaria'],
    relatedRegions: ['caelid', 'raya-lucaria'],
    relatedConcepts: ['glintstone', 'primeval-current', 'scarlet-rot', 'stars-and-fate-concept'],
    relatedTimelineEvents: ['batalla-aeonia', 'caelid-devastation'],
  },

  'redmane-castle': {
    summary:
      'Redmane Castle es la fortaleza ritual de los Redmanes en Caelid, sede de Radahn antes de su corrupción y arena del Festival que diseña su muerte digna. Su arquitectura militar se transformó en escenario ceremonial: el lugar donde la fidelidad marcial pacta con la eutanasia honorífica.',
    deepLore: [
      h(2, 'Resumen del lugar'),
      p(
        'Redmane se alza al sur de Caelid, frente a la costa carmesí. Era fortaleza militar de los ',
        link('Redmanes', 'faction', 'redmanes'),
        ' bajo ',
        link('Radahn', 'character', 'radahn'),
        '. Tras su corrupción por la Podredumbre, ',
        link('Jerren', 'character', 'jerren'),
        ' la convirtió en escenario ceremonial del Festival ritual diseñado para liberar a su general arruinado.',
      ),
      h(2, 'Historia detallada'),
      p(
        'Pre-corrupción, Redmane funcionaba como cuartel general de la cabalgata Redmane: caballeros rojos entrenados en magia gravitacional residual, fidelidad militar absoluta a Radahn, ideología basada en la admiración a Godfrey como modelo. La cabalgata participó en la Batalla de Aeonia. La mayoría murió o fue corrompida.',
      ),
      p(
        'Post-Aeonia, Jerren — antiguo maestro de armas y posiblemente amante histórico de Sellen — diseñó el ',
        link('Festival', 'timeline', 'festival-radahn'),
        '. Invitar a guerreros legendarios a derrotar a Radahn permite tres cosas simultáneamente: liberarlo del cuerpo arruinado, devolverle la dignidad de morir en combate, restaurar el flujo de las estrellas que él bloqueaba. La fortaleza se convirtió en arena ritual.',
      ),
      h(2, 'Estado actual'),
      p(
        'El Festival está activado cuando el Mancillado llega a Caelid. Combatientes invitados — ',
        link('Alexander', 'character', 'alexander'),
        ', ',
        link('Patches', 'character', 'patches'),
        ', ',
        link('Bernahl', 'character', 'bernahl'),
        ' — están presentes o de camino. Jerren oficia. Los Redmanes supervivientes participan como guardia honorífica.',
      ),
      h(2, 'Tragedia oculta'),
      p(
        'Los Redmanes saben que el Festival es eutanasia. Cada combatiente invitado es ofrecido a su general arruinado. La fidelidad marcial llevada al extremo: amar a tu líder al punto de organizar su asesinato porque permitirle vivir como bestia sería peor traición. La cabalgata se prepara para enterrar simbólicamente al rey que ya no es rey.',
      ),
      h(2, 'Significado simbólico'),
      p(
        'Redmane Castle es la imagen del honor militar llevado a su consecuencia ética más extrema. La fortaleza no defiende ya — preside una ceremonia. Los Redmanes son los únicos seguidores del Interregno que comprenden que servir a un líder corrompido implica organizar su muerte. Es el opuesto exacto de la lealtad de Morgott a Marika: aquellos sirven hasta la muerte propia, los Redmanes sirven matando al servido.',
      ),
    ],
    confirmed: [
      'Redmane Castle es fortaleza ritual de los Redmanes',
      'Jerren oficia el Festival',
      'Alexander, Patches, Bernahl participan como combatientes invitados',
      'La derrota de Radahn libera las estrellas que él bloqueaba',
    ],
    inferred: [
      'Jerren tuvo relación previa con Sellen, posiblemente romántica',
      'Los Redmanes saben que el Festival es eutanasia',
      'La fidelidad marcial Redmane se opone éticamente a la lealtad de Morgott',
    ],
    theories: [
      'El Festival fue diseñado por Jerren con conocimiento previo del efecto cosmológico (liberar las estrellas)',
      'Algunos Redmanes esperan que la liberación les devuelva memoria de su líder no-corrupto',
      'Sellen visitó secretamente Redmane antes del Festival para coordinar con Jerren',
    ],
    ambiguous: [
      'Cuánto tiempo lleva el Festival activo antes de la llegada del Mancillado',
      'Si todos los Redmanes apoyan el Festival o algunos disienten',
      'Si Jerren conoce la conexión cosmológica entre la muerte de Radahn y la quest de Ranni',
    ],
    relatedCharacters: ['radahn', 'jerren', 'sellen', 'alexander', 'patches', 'bernahl'],
    relatedFactions: ['redmanes', 'banished-knights'],
    relatedRegions: ['caelid', 'sellia'],
    relatedConcepts: ['great-rune', 'scarlet-rot', 'primeval-current'],
    relatedTimelineEvents: ['batalla-aeonia', 'festival-radahn'],
    relatedEndings: ['age-of-stars'],
  },

  'subterranean-shunning-grounds': {
    summary:
      'El Subsuelo Shunning-Grounds es la cárcel oficial del Orden Dorado bajo Leyndell, donde se encerraban Omens, malformados y otros seres considerados aberraciones. Aquí crecieron Morgott y Mohg; aquí siguen sellados los Tres Dedos; aquí el Dung Eater cumple su condena. Es la columna vertebral oculta del régimen.',
    deepLore: [
      h(2, 'Resumen del lugar'),
      p(
        'Bajo ',
        link('Leyndell', 'region', 'leyndell'),
        ', accesible solo por canales secretos, se extienden las alcantarillas-prisión del régimen. Su función oficial: encerrar Omens, criaturas malformadas y seres clasificados como aberraciones. Su función no-oficial: ocultar las contradicciones del Orden Dorado bajo el suelo dorado de su propia capital.',
      ),
      h(2, 'Historia detallada'),
      p(
        link('Morgott', 'character', 'morgott'),
        ' y ',
        link('Mohg', 'character', 'mohg'),
        ' fueron encarcelados aquí durante toda su juventud. Los ',
        link('Verdugos Omen', 'faction', 'omenkillers'),
        ' oficiaban rituales sobre los presos: serrucharles cuernos, supresión de su naturaleza maldita, "neutralización" de su sangre Crisol. La cárcel funcionaba como instrumento de mantenimiento de la categoría: si el régimen clasifica a alguien como aberración, el subsuelo lo procesa.',
      ),
      p(
        'Los ',
        link('Tres Dedos', 'faction', 'tres-dedos'),
        ' están sellados en el nivel más bajo del subsuelo, tras tres puertas con tres llaves. Su presencia es paradoja teológica: el régimen del Orden Dorado, custodio de la Voluntad Mayor, alberga literalmente bajo su capital a la encarnación física del dios externo opuesto. La ',
        link('Llama Frenética', 'concept', 'frenzied-flame'),
        ' espera bajo el oro.',
      ),
      p(
        'El ',
        link('Dung Eater', 'character', 'dung-eater'),
        ' cumple su condena en celda separada. Su Sello Mendaz, si se entrega al Anillo Elden, instaurará la ',
        link('Bendición de la Desesperación', 'ending', 'despair'),
        '. La cárcel del régimen contiene, literalmente, la herramienta para condenar al cosmos entero.',
      ),
      h(2, 'Estado actual'),
      p(
        'El subsuelo está parcialmente derruido. Omens libres patrullan algunas secciones. Los Verdugos siguen activos pero reducidos. ',
        link('Mohg', 'character', 'mohg'),
        ' tiene una manifestación menor aquí (Mohg the Omen) anterior a su pacto con la Madre Informe. El Dung Eater puede ser asesinado o liberado por el Mancillado.',
      ),
      h(2, 'Tragedia oculta'),
      p(
        'Bajo la capital más bella del Interregno crece la cárcel más bestial. Cada gota de gracia dorada que cae sobre Leyndell tiene su contrapartida en el subsuelo: cada noble que rece en el templo dorado pisa, sin saberlo, sobre Omens encarcelados que llevan su misma sangre. La hipocresía no es excepción ni anomalía — es estructura.',
      ),
      h(2, 'Significado simbólico'),
      p(
        'El Shunning-Grounds es la imagen más exacta del Orden Dorado completo. Lo que la liturgia oficial no puede integrar — Omens, dios exterior nihilista, blasfemos extremos — el subsuelo lo guarda. Cada cosmología tiene su mazmorra escondida. Esta es particularmente honesta sobre lo que considera aberración.',
      ),
    ],
    confirmed: [
      'El Shunning-Grounds es cárcel oficial del Orden bajo Leyndell',
      'Morgott y Mohg fueron encarcelados aquí en su juventud',
      'Los Verdugos Omen oficiaban rituales sobre los presos',
      'Los Tres Dedos están sellados en el nivel más bajo',
      'El Dung Eater cumple condena en celda separada',
    ],
    inferred: [
      'La cárcel mantiene activamente la categoría de "aberración" del régimen',
      'Marika consintió o no pudo evitar el encarcelamiento de sus propios hijos',
      'La presencia simultánea de Tres Dedos y régimen dorado es paradoja deliberada',
    ],
    theories: [
      'Marika misma pudo haber descendido en secreto a visitar a sus hijos encarcelados',
      'El sello que contiene a los Tres Dedos se ha debilitado progresivamente',
      'Los Verdugos Omen son ellos mismos Omens convertidos al servicio del régimen',
    ],
    ambiguous: [
      'Cuántos siglos lleva la cárcel en su forma actual',
      'Si todos los Omens son encarcelados aquí o solo los más prominentes',
      'Si el Dung Eater fue capturado por sus crímenes o por su naturaleza Omen subyacente',
    ],
    relatedCharacters: ['morgott', 'mohg', 'marika', 'dung-eater'],
    relatedFactions: ['omens', 'omenkillers', 'tres-dedos', 'orden-dorado'],
    relatedRegions: ['leyndell'],
    relatedConcepts: ['frenzied-flame', 'crucible', 'omen-curse'],
    relatedTimelineEvents: ['morgott-mohg-imprisonment'],
    relatedEndings: ['frenzied-flame', 'despair'],
  },

  'volcano-manor': {
    summary:
      'Volcano Manor es la corte alternativa al Orden Dorado: aristocracia desafecta dirigida por Tanith en nombre de Rykard, asesinato ritualizado disfrazado de etiqueta cortés, y bajo el palacio la serpiente-dios devorando todo. Es la blasfemia institucional más sofisticada del Interregno.',
    deepLore: [
      h(2, 'Resumen del lugar'),
      p(
        'El manor volcánico se alza sobre la cumbre de ',
        link('Mt. Gelmir', 'region', 'mt-gelmir'),
        '. Sus salones de mármol blanco están construidos sobre un santuario subterráneo donde habita ',
        link('Eiglay', 'concept', 'serpent-god-eiglay'),
        ', la serpiente-dios pre-Orden que devoró a ',
        link('Rykard', 'character', 'rykard'),
        '. La fachada aristocrática esconde la blasfemia más completa.',
      ),
      h(2, 'Historia detallada'),
      p(
        link('Tanith', 'character', 'tanith'),
        ' funge como anfitriona oficial. Recibe a nobles desafectos del régimen — ',
        link('Bernahl', 'character', 'bernahl'),
        ', ',
        link('Diallos', 'character', 'diallos'),
        ' (que llega buscando a su sirvienta perdida), antiguos caballeros desterrados — y los pone al servicio de cazas rituales. Las cartas de invitación que envía son misiones de asesinato disfrazadas de protocolo cortés.',
      ),
      p(
        link('Rya', 'character', 'rya'),
        ' (en realidad Zorayas, serpiente bajo apariencia humana) opera como reclutadora aristocrática. ',
        link('Patches', 'character', 'patches'),
        ' está aquí porque siempre está donde haya negocio dudoso. Los ',
        link('Hombres-Serpiente', 'faction', 'man-serpents'),
        ', súbditos directos de Eiglay, patrullan los pasajes inferiores junto a las ',
        link('Vírgenes Secuestradoras', 'faction', 'abductor-virgins'),
        ' y los ',
        link('Monjes de Fuego', 'faction', 'fire-monks'),
        '.',
      ),
      h(2, 'Estado actual'),
      p(
        'El manor opera con plena funcionalidad ceremonial cuando el Mancillado llega. Tanith puede invitarlo a unirse a los Recusantes — ofreciéndole misiones de asesinato a cambio de armas y servicio bajo Rykard. Si las misiones se completan, el Mancillado avanza hacia el santuario inferior donde Rykard fundido con Eiglay aguarda como boss final. Tras su derrota, Tanith devora el cadáver.',
      ),
      h(2, 'Tragedia oculta'),
      p(
        'La cortesía de Tanith es perfecta hasta el final. Sirve té, ofrece protocolo, recibe huéspedes con dignidad — y todo el tiempo está alimentando rituales de sangre bajo su salón. La etiqueta aristocrática se vuelve forma perfeccionada del horror: lo que en otras facciones es violencia explícita, aquí es violencia con servicio de mesa. Su devoración final del cadáver de Rykard es el único momento en que rompe el protocolo, y lo rompe solo en privado.',
      ),
      h(2, 'Significado simbólico'),
      p(
        'Volcano Manor encarna la pregunta más sutil del juego: ¿es la civilización compatible con la blasfemia? Su respuesta es escalofriante: sí, perfectamente. Las salas de mármol y los protocolos aristocráticos son contenedores funcionales para el rito sangriento. La blasfemia no requiere romper la civilización — puede operar como su núcleo refinado.',
      ),
    ],
    confirmed: [
      'Volcano Manor es corte aristocrática alternativa bajo Rykard',
      'Tanith es anfitriona; Rya/Zorayas es reclutadora',
      'Las cartas de invitación son misiones de asesinato disfrazadas',
      'Eiglay habita el santuario subterráneo',
      'Tanith devora el cadáver de Rykard tras la batalla',
    ],
    inferred: [
      'Los Recusantes son ex-leales del Orden Dorado convertidos por desafección filosófica',
      'Tanith conoce la naturaleza monstruosa del proyecto pero la acepta',
      'La cortesía aristocrática es contenedor funcional del horror, no contradicción',
    ],
    theories: [
      'Eiglay es manifestación residual del Crisol primigenio o un Antiguo Dragón degenerado',
      'Rya/Zorayas es la última hija pura de la línea serpiente que precede al Orden',
      'Tanith fue elegida deliberadamente por Rykard porque su fidelidad excedería la devoración',
    ],
    ambiguous: [
      'Si todos los Recusantes saben sobre Eiglay o solo los iniciados',
      'Cuánto tiempo medió entre la primera invitación a un noble y la consolidación actual',
      'Si Tanith conserva ambición propia o opera puramente como vehículo de Rykard',
    ],
    relatedCharacters: ['rykard', 'tanith', 'rya', 'patches', 'bernahl', 'diallos'],
    relatedFactions: ['volcano-manor', 'banished-knights', 'man-serpents', 'abductor-virgins', 'fire-monks'],
    relatedRegions: ['mt-gelmir'],
    relatedConcepts: ['serpent-god-eiglay', 'crucible', 'great-rune'],
    relatedTimelineEvents: ['rykard-volcano-manor', 'shattering-war'],
  },

  ordina: {
    summary:
      'Ordina, Ciudad Liturgical, es ciudad ceremonial congelada en el Snowfield Consagrado, dedicada a los rituales del Erdtree antes del éxodo Albinaurico al Haligtree. Su silencio nevado oculta un acertijo de invocación: solo encendiendo cuatro estatuas rituales se abre el portal al árbol de Miquella.',
    deepLore: [
      h(2, 'Resumen del lugar'),
      p(
        'Ordina se alza congelada en medio del ',
        link('Snowfield Consagrado', 'region', 'consecrated-snowfield'),
        '. Su arquitectura es ceremonial: catedrales cubiertas de nieve, plazas amplias, estatuas litúrgicas. Era ciudad-altar dedicada a los rituales del Erdtree — pero en algún momento sus liturgias fueron suspendidas, posiblemente cuando los Albinaurics emprendieron éxodo hacia el ',
        link('Haligtree', 'region', 'haligtree'),
        '.',
      ),
      h(2, 'Historia detallada'),
      p(
        'La función original de Ordina parece haber sido bisagra: ceremonia oficial del Orden Dorado en una región fronteriza donde el régimen comenzaba a perder coherencia. Cuando ',
        link('Miquella', 'character', 'miquella'),
        ' construyó el Haligtree y los ',
        link('Albinaurics', 'faction', 'albinauricos'),
        ' iniciaron su peregrinación, Ordina quedó suspendida — sus rituales descontinuados, sus sacerdotes ausentes.',
      ),
      p(
        'Hoy es portal al Haligtree. Encender las cuatro estatuas litúrgicas alrededor del centro de la ciudad abre un Evergaol que transporta al Mancillado hacia el árbol prohibido. Los ',
        link('Black Knife Assassins', 'faction', 'cuchillos-negros'),
        ' acechan durante la operación: matan al peregrino antes de que complete el rito.',
      ),
      h(2, 'Estado actual'),
      p(
        'Ordina está congelada literalmente y figurativamente. La nieve cubre todo. Algunos restos de Albinaurics yacen en sus calles — peregrinos que nunca llegaron al Haligtree. Las catedrales están vacías. Solo las cuatro estatuas conservan función activa.',
      ),
      h(2, 'Tragedia oculta'),
      p(
        'La presencia de Black Knife Assassins en Ordina sugiere que la facción de los Cuchillos Negros — herederos de la operación que mató a Godwyn — sigue activa. Que estén custodiando específicamente el portal al Haligtree es siniestro: ¿están tratando de impedir que alguien llegue a Miquella secuestrado? ¿O custodian algo en la propia Ordina que el régimen no quiere ver alcanzado?',
      ),
      h(2, 'Significado simbólico'),
      p(
        'Ordina es el último filtro antes del Haligtree. Su silencio liturgical es la imagen del régimen del Orden Dorado en su frontera: rituales que ya no se oficían, sacerdotes que ya no llegan, ciudades que conservan la forma de la fe sin su contenido. La ciudad espera congelada el momento en que su rito sea completado por un agente externo — el Mancillado — para liberar finalmente el portal.',
      ),
    ],
    confirmed: [
      'Ordina es ciudad ceremonial congelada en el Snowfield Consagrado',
      'Cuatro estatuas litúrgicas abren el portal Evergaol al Haligtree',
      'Los Black Knife Assassins atacan durante la operación',
      'Restos Albinauricos yacen en las calles',
    ],
    inferred: [
      'Sus rituales fueron suspendidos cuando los Albinaurics iniciaron el éxodo',
      'Era bisagra ceremonial entre el régimen central y la frontera',
      'Los Black Knife Assassins custodian deliberadamente el acceso a Miquella',
    ],
    theories: [
      'Los Black Knife Assassins fueron enviados por Mohg para impedir intervención externa en Mohgwyn',
      'Ordina conserva textos litúrgicos que documentan el sello original de la Muerte Predestinada',
      'Los Albinaurics caídos en el camino fueron asesinados deliberadamente por los Cuchillos Negros',
    ],
    ambiguous: [
      'Cuándo exactamente Ordina dejó de funcionar como centro ceremonial',
      'Si los Black Knife Assassins son los mismos de la Noche o herederos directos',
      'Cuántos Albinaurics intentaron pasar por Ordina',
    ],
    relatedCharacters: ['miquella', 'malenia', 'latenna'],
    relatedFactions: ['cuchillos-negros', 'albinauricos', 'orden-dorado'],
    relatedRegions: ['consecrated-snowfield', 'haligtree'],
    relatedConcepts: ['unalloyed-gold', 'erdtree'],
    relatedTimelineEvents: ['unalloyed-gold-haligtree', 'mohg-toma-miquella'],
  },

  elphael: {
    summary:
      'Elphael, Trono del Haligtree, fue ciudad militar y religiosa construida bajo las raíces del árbol de Miquella como utopía de los excluidos. Cleanrot Knights y Albinaurics convivían como iguales bajo la luz del Oro sin Aleación. Hoy yace infectada por la Podredumbre que su propia protectora — Malenia — arrastró desde Caelid.',
    deepLore: [
      h(2, 'Resumen del lugar'),
      p(
        'Elphael se construyó bajo las raíces del ',
        link('Haligtree', 'region', 'haligtree'),
        ' como ciudad-utopía para refugiados. Su arquitectura combina elementos del Orden Dorado con innovaciones arquitectónicas propias: arcos curvos, torres gemelas, jardines bajo luz dorada artificial generada por el ',
        link('Oro sin Aleación', 'concept', 'unalloyed-gold'),
        '.',
      ),
      h(2, 'Historia detallada'),
      p(
        link('Miquella', 'character', 'miquella'),
        ' diseñó Elphael como prueba viva de que el cosmos podía funcionar sin excluir. ',
        link('Albinaurics', 'faction', 'albinauricos'),
        ', ',
        link('Misbegotten', 'faction', 'misbegotten'),
        ' refugiados, malformados de todas las regiones convivían aquí como iguales. Los ',
        link('Cleanrot Knights', 'faction', 'cleanrot-knights'),
        ' al servicio de ',
        link('Malenia', 'character', 'malenia'),
        ' constituían la guardia militar. La utopía funcionaba mientras Malenia podía protegerla.',
      ),
      p(
        'Tras la ',
        link('Batalla de Aeonia', 'timeline', 'batalla-aeonia'),
        ', Malenia regresó mutilada con la podredumbre infectando su cuerpo. La Podredumbre comenzó a filtrarse por el árbol mismo. Los Albinaurics se vieron afectados: muchos enloquecieron y se transformaron en seres carmesíes hostiles. Los Cleanrot Knights, ya infectados voluntariamente, perdieron control progresivo.',
      ),
      h(2, 'Estado actual'),
      p(
        'Elphael es ahora ciudad arruinada por la podredumbre. Albinaurics carmesíes patrullan calles antes pacíficas. Los Cleanrot Knights pelean en estado avanzado de corrupción. ',
        link('Loretta', 'character', 'royal-knight-loretta'),
        ', Caballero del Haligtree, custodia el acceso central — su lealtad final a Miquella la lleva a defender un trono vacío. Malenia espera en el corazón de la ciudad junto al capullo dorado de Miquella, ya secuestrado.',
      ),
      h(2, 'Tragedia oculta'),
      p(
        'La utopía falló no por enemigo externo sino por su propia protectora. Cada Floración Escarlata residual de Malenia infecta lentamente al árbol que ella misma debería defender. Los Albinaurics carmesíes son ex-refugiados consumidos por la podredumbre que su santuario no pudo detener. Es la prueba más honesta del Interregno de que ningún proyecto curativo sobrevive sin protección armada — y la protección armada eventualmente se contamina.',
      ),
      h(2, 'Significado simbólico'),
      p(
        'Elphael es el monumento del juego al fracaso del único proyecto positivo. Miquella quiso curar al cosmos; lo intentó genuinamente; trabajó durante eras; construyó arquitectura física para sostenerlo; entrenó a su gemela como espada protectora. Falló. La razón no fue maldad: fue la lógica estructural del Interregno. Ningún cosmos depredador permite proyectos curativos a largo plazo. El fracaso del Haligtree es la respuesta más oscura del juego a la pregunta de si el régimen actual es reformable.',
      ),
    ],
    confirmed: [
      'Elphael fue construida bajo las raíces del Haligtree por Miquella',
      'Albinaurics y Misbegotten convivían como iguales',
      'Cleanrot Knights eran la guardia militar',
      'La Podredumbre llegó tras Aeonia y la mutilación de Malenia',
      'Loretta custodia el acceso central',
      'Malenia espera en el corazón junto al capullo vacío de Miquella',
    ],
    inferred: [
      'La utopía dependía estructuralmente de la protección de Malenia',
      'La Podredumbre sigue avanzando lentamente',
      'Los Albinaurics carmesíes son ex-refugiados consumidos',
    ],
    theories: [
      'Si Miquella despertara, podría revertir parcialmente la podredumbre',
      'Algunos Cleanrot Knights conservan consciencia residual y aceptarían la muerte',
      'El capullo de Oro sin Aleación todavía protege a Miquella incluso secuestrado',
    ],
    ambiguous: [
      'Cuándo exactamente la Podredumbre llegó al Haligtree',
      'Si Malenia conserva ambivalencia sobre su propia infección',
      'Si la utopía podría restaurarse bajo otra cosmología',
    ],
    relatedCharacters: ['miquella', 'malenia', 'royal-knight-loretta', 'millicent'],
    relatedFactions: ['haligtree', 'cleanrot-knights', 'albinauricos', 'misbegotten'],
    relatedRegions: ['haligtree', 'consecrated-snowfield', 'ordina'],
    relatedConcepts: ['unalloyed-gold', 'scarlet-rot'],
    relatedTimelineEvents: ['unalloyed-gold-haligtree', 'batalla-aeonia', 'mohg-toma-miquella'],
  },

  dragonbarrow: {
    summary:
      'Dragonbarrow es la meseta superior de Caelid, refugio de los Antiguos Dragones residuales. Greyoll, dragona anciana, yace inmóvil rodeada de sus crías. La región es la última supervivencia significativa del régimen dragónico pre-Orden bajo el manto de la podredumbre que cubre Caelid.',
    deepLore: [
      h(2, 'Resumen del lugar'),
      p(
        'Dragonbarrow se eleva sobre la geografía corrupta de ',
        link('Caelid', 'region', 'caelid'),
        ', protegida parcialmente por su altura del avance de la Podredumbre. Es refugio de los descendientes residuales de los ',
        link('Antiguos Dragones', 'faction', 'dragones-antiguos'),
        ' que sobrevivieron a la guerra del Orden Dorado.',
      ),
      h(2, 'Historia detallada'),
      p(
        link('Greyoll', 'character', 'greyoll'),
        ', dragona anciana, yace inmóvil en el centro de la meseta. Sus crías la protegen: cuatro dragones menores patrullan los alrededores. La inmovilidad de Greyoll no es muerte — es algo más antiguo, anterior al sello de la Muerte Predestinada, que el régimen actual no puede procesar.',
      ),
      p(
        'El Bestial Sanctum, santuario donde ',
        link('Maliketh', 'character', 'maliketh'),
        ' opera como Gurranq, está en el extremo norte. Aquí come Deathroot ofrecida por peregrinos. Los Beastmen de Farum Azula patrullan los pasajes que conectan con la ciudadela atemporal del dragonlord.',
      ),
      p(
        'La ',
        link('Comunión Dracónica', 'faction', 'dragon-communion'),
        ' opera con presencia visible en Dragonbarrow. Sus sacerdotisas reciben corazones de dragón ofrecidos por peregrinos a cambio de hechicerías de aliento. Es uno de los pocos cultos pre-Orden con presencia institucional tolerada.',
      ),
      h(2, 'Estado actual'),
      p(
        'Dragonbarrow conserva integridad relativa frente al resto de Caelid. Los dragones siguen activos. El Bestial Sanctum funciona ritualmente. La presencia de la Comunión Dracónica documenta supervivencia cultural significativa.',
      ),
      h(2, 'Tragedia oculta'),
      p(
        'Greyoll inmóvil rodeada de sus crías es la imagen del régimen dragónico que no termina de morir. La dragona anciana podría haber sido testigo de la era de Placidusax. Sus crías son la última generación que conserva memoria genética del cosmos pre-Orden. Cuando ellas mueran, el régimen dragónico residual habrá terminado realmente.',
      ),
      h(2, 'Significado simbólico'),
      p(
        'Dragonbarrow es la cápsula del tiempo del Interregno. Aquí sobreviven prácticas, criaturas y rituales que el Orden Dorado intentó borrar pero no pudo. Combatir a sus dragones es destruir reliquias; alimentar la Comunión Dracónica es perpetuar una herejía tolerada. Cada decisión del Mancillado en este lugar es decisión sobre qué memoria conserva y qué memoria suprime.',
      ),
    ],
    confirmed: [
      'Dragonbarrow es la meseta superior de Caelid',
      'Greyoll yace inmóvil rodeada de sus crías',
      'El Bestial Sanctum de Gurranq/Maliketh está en el extremo norte',
      'La Comunión Dracónica opera con presencia visible',
    ],
    inferred: [
      'La altura protege parcialmente del avance de la Podredumbre',
      'Greyoll podría ser contemporánea de Placidusax',
      'Las crías son la última generación que conserva memoria genética del cosmos pre-Orden',
    ],
    theories: [
      'Greyoll no está muerta — está en estado dragónico cosmológico que el sello de la Muerte no puede procesar',
      'Maliketh eligió Dragonbarrow para Gurranq porque la presencia dragónica camufla la fuga de Deathroot',
      'Los Beastmen de Farum Azula provienen genéticamente de los Antiguos Dragones',
    ],
    ambiguous: [
      'Cuántos siglos lleva Greyoll inmóvil',
      'Si las crías son hijos directos o descendientes lejanos',
      'Si la Comunión Dracónica es legítima continuación del culto antiguo o degeneración tolerada',
    ],
    relatedCharacters: ['placidusax', 'fortissax', 'maliketh', 'greyoll'],
    relatedFactions: ['dragones-antiguos', 'dragon-communion', 'hombres-bestia'],
    relatedRegions: ['caelid', 'farum-azula'],
    relatedConcepts: ['deathroot', 'destined-death', 'shadow-bound-beast'],
    relatedTimelineEvents: ['placidusax-elden-lord', 'godwyn-dragones'],
  },
}
