import type { EntityType } from './types'

/**
 * Rutas narrativas — lecturas guiadas que recorren las entidades del codex
 * en orden temático. Cada ruta corresponde a uno de los seis finales del
 * juego o a un arco mayor del lore. Cada parada tiene un "why" que explica
 * por qué leerla en este punto del recorrido.
 */

export interface RouteStop {
  slug: string
  type: EntityType
  why: string
}

export interface NarrativeRoute {
  id: string
  title: string
  subtitle: string
  ending?: string
  description: string
  poeticIntro: string
  /** Color principal Tailwind (text-X y border-X) */
  accent: 'gold' | 'order' | 'dusk' | 'frenzied' | 'stars' | 'despair'
  stops: RouteStop[]
}

export const narrativeRoutes: NarrativeRoute[] = [

  /* ════════════════════════════════════════════════════════════════════════ */
  /* RUTA DE LA FRACTURA                                                     */
  /* ════════════════════════════════════════════════════════════════════════ */
  {
    id: 'fractura',
    title: 'Ruta de la Fractura',
    subtitle: 'El final por defecto · Restaurar el régimen sin preguntar por qué se rompió',
    ending: 'fracture',
    accent: 'gold',
    description:
      'La ruta canónica del Mancillado: derrotar demidioses, reunir Grandes Runas, ascender al trono Elden y restaurar el Orden Dorado en su forma básica. Sin reformas, sin rebelión, sin alternativa cosmológica. Es el camino que asume que el régimen merece continuar tal como era — incluso después de saber por qué se rompió.',
    poeticIntro:
      'El árbol llama. El Mancillado responde. Lo demás es ritual repetido por inercia.',
    stops: [
      { slug: 'tarnished',           type: 'concept',   why: 'Empieza por entender qué eres: descendiente exiliado generaciones atrás, ahora portador improbable de la gracia restituida.' },
      { slug: 'tarnished-return',    type: 'timeline',  why: 'Marika dejó un discurso convocando a tu pueblo. La gracia regresó cuando el Anillo se rompió. Ese mismo día comenzó tu viaje.' },
      { slug: 'two-fingers-roundtable', type: 'timeline', why: 'Los Dos Dedos te ungen en la Mesa Redonda. Recibirás instrucciones; algunas obsoletas, otras intactas.' },
      { slug: 'godrick',             type: 'character', why: 'Primer demidiós: el más débil del Linaje Dorado. Cae al primer empuje. La Gran Runa que cargas tras él es la más débil del juego.' },
      { slug: 'rennala',             type: 'character', why: 'Segunda Gran Runa. Una reina rota en bucle eterno; te dejará reorganizar tus atributos como subproducto de su duelo.' },
      { slug: 'radahn',              type: 'character', why: 'Tercera Gran Runa. El Festival te invita a derrotar al guerrero invicto corrompido. Su muerte libera estrellas que él bloqueaba.' },
      { slug: 'rykard',              type: 'character', why: 'Cuarta Gran Runa. La blasfemia institucional consumida por una serpiente-dios. Ya no es del todo Rykard.' },
      { slug: 'morgott',             type: 'character', why: 'Quinta Gran Runa. El Rey Caído defiende el régimen que lo encarceló. "Último de todos los reyes". Su sacrificio es enseñanza.' },
      { slug: 'erdtree-rejection',   type: 'timeline',  why: 'El árbol cierra sus raíces. Los rituales oficiales ya no funcionan. Solo queda la pira.' },
      { slug: 'melina',              type: 'character', why: 'Tu compañera silenciosa se ofrece como llama. Su madre — quizás Marika misma — la diseñó para este momento.' },
      { slug: 'erdtree-quemado',     type: 'timeline',  why: 'El sacrificio de Melina prende el árbol entero. La era dorada termina técnicamente con esta antorcha.' },
      { slug: 'maliketh',            type: 'character', why: 'En Farum Azula, la Bestia Sombra de Marika acepta su derrota. Su muerte libera la Muerte Predestinada que cargó por eras.' },
      { slug: 'godfrey',             type: 'character', why: 'El Primer Señor Elden regresa como espectro. Su lealtad estructural lo trae aunque el régimen ya no lo merezca.' },
      { slug: 'marika',              type: 'character', why: 'La diosa encadenada. Golpearla libera a Radagon. Cada golpe es ritual de transmisión cosmológica.' },
      { slug: 'radagon',             type: 'character', why: 'Su otra mitad pelea por reparar el Anillo que su otra mitad rompió. Cuando cae, queda solo la Bestia.' },
      { slug: 'bestia-elden-revelada', type: 'timeline', why: 'El Anillo Elden manifiesta su forma autónoma. Es la cosmología misma defendiéndose. Su derrota deja el cosmos vacante.' },
      { slug: 'fracture',            type: 'ending',    why: 'Eliges no elegir. Reensamblas las Grandes Runas en su configuración original. El régimen continúa con las mismas grietas.' },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════════ */
  /* RUTA DEL ORDEN                                                          */
  /* ════════════════════════════════════════════════════════════════════════ */
  {
    id: 'orden',
    title: 'Ruta del Orden',
    subtitle: 'La Era de la Perfección Lógica · Corregir la contradicción interna del Orden Dorado',
    ending: 'order',
    accent: 'order',
    description:
      'Goldmask descubre lo que Radagon nunca pudo decir en voz alta: el Orden Dorado contiene una falla lógica interna. Si esa contradicción se corrige, el cosmos se vuelve perfectamente coherente — al precio de toda excepción humana. La Era del Orden es la utopía geométrica de un cosmos sin grietas y sin individualidad.',
    poeticIntro:
      'Los círculos se cierran. La fe se vuelve teorema. Lo que no encaja, ya no existe.',
    stops: [
      { slug: 'golden-order',        type: 'concept',   why: 'Antes de reformar nada, entender qué es el Orden Dorado: la cosmología actual que Marika fundó sellando la Muerte.' },
      { slug: 'radagon',             type: 'character', why: 'El reformista original. Sus martillazos al Anillo eran intento por cerrar grietas que no se cierran. La filosofía Fundamentalista nace de él.' },
      { slug: 'radagon-repair-attempt', type: 'timeline', why: 'Cada golpe de su martillo durante eras prepara el terreno para Goldmask. La Ley de la Regresión hereda directamente de aquí.' },
      { slug: 'fundamentalistas',    type: 'faction',   why: 'La secta intelectual que continúa el proyecto de Radagon. Goldmask y Corhyn son sus únicos miembros activos.' },
      { slug: 'goldmask',            type: 'character', why: 'El monje silencioso. Solo él alcanza la conclusión final: la fusión Marika-Radagon es la falla central.' },
      { slug: 'corhyn',              type: 'character', why: 'Su discípulo-traductor. Sin él, las conclusiones de Goldmask quedarían sin transmisión.' },
      { slug: 'radagon-es-marika',   type: 'timeline',  why: 'La revelación clave de la ruta. Si comprendes esto, comprendes por qué el cosmos no puede sostenerse en su forma actual.' },
      { slug: 'law-of-regression',   type: 'concept',   why: 'La herramienta intelectual. Reduce contradicciones a sus formas más simples. Aplicada al Anillo: identifica qué leyes son redundantes.' },
      { slug: 'voluntad-mayor',      type: 'concept',   why: 'El dios externo cuya autoridad legitima al Orden. La reforma de Goldmask opera dentro de su contrato, no contra él.' },
      { slug: 'erdtree',             type: 'concept',   why: 'El árbol cosmológico que se quemará. Sin entender su función, la Era del Orden es vacío geométrico.' },
      { slug: 'order',               type: 'ending',    why: 'La Ley Mayor en su forma perfecta. Sin contradicciones. Sin excepciones. Sin individualidad. La utopía absoluta o el infierno de lo no encajable.' },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════════ */
  /* RUTA DEL CREPÚSCULO                                                     */
  /* ════════════════════════════════════════════════════════════════════════ */
  {
    id: 'crepusculo',
    title: 'Ruta del Crepúsculo',
    subtitle: 'Devolver la muerte verdadera al cosmos · El final piadoso, melancólico, honesto',
    ending: 'duskborn',
    accent: 'dusk',
    description:
      'Cuando Marika selló la Muerte Predestinada, los seres del Interregno dejaron de poder morir verdaderamente. Godwyn fue el primer caso visible: alma destruida, cuerpo eterno bajo Deeproot Depths. Fia dedica su quest a sanar esa herida cosmológica devolviendo la Muerte al cosmos. Es la era más misericordiosa — y quizás la más honesta con la naturaleza humana.',
    poeticIntro:
      'Dejar morir a quienes han muerto. Dejar descansar al hijo dorado. La piedad como cosmología.',
    stops: [
      { slug: 'destined-death',      type: 'concept',   why: 'Lo que Marika selló para fundar la era dorada. Comprender esto es comprender por qué el régimen está estructuralmente roto.' },
      { slug: 'maliketh',            type: 'character', why: 'El verdugo cosmológico. Su cuerpo carga la Runa de la Muerte que Marika cosió en él. Su tortura es indistinguible de su servicio.' },
      { slug: 'muerte-predestinada', type: 'timeline',  why: 'El acto fundacional del Orden Dorado. Cada problema posterior se rastrea a este momento.' },
      { slug: 'godwyn',              type: 'character', why: 'El primer demidiós muerto. Su muerte parcial es origen de toda la lore que viene después. Sin Godwyn, no hay Crepúsculo.' },
      { slug: 'fortissax',           type: 'character', why: 'El dragón aliado de Godwyn, atrapado en pesadilla onírica luchando eternamente contra la corrupción de su amigo.' },
      { slug: 'godwyn-dragones',     type: 'timeline',  why: 'El pacto que precede a la Noche. Sin él, Fortissax no estaría atrapado. Es la única reforma religiosa positiva del régimen.' },
      { slug: 'cuchillos-negros',    type: 'faction',   why: 'Las hojas forjadas con la mecha robada de la Runa de la Muerte. Únicas armas capaces de matar a un demidiós.' },
      { slug: 'ranni-noche-cuchillos', type: 'timeline', why: 'La conjura que mató parcialmente a Godwyn. Daño colateral de la rebelión cosmológica de Ranni.' },
      { slug: 'godwyn-prince-of-death', type: 'timeline', why: 'El cuerpo sin alma se hunde en las raíces del Erdtree. Comienza la fuga de Deathroot que infectará el Interregno entero.' },
      { slug: 'deathroot',           type: 'concept',   why: 'La sustancia necrótica que emana del cadáver eterno. Cada cadáver reanimado del juego procede de aquí.' },
      { slug: 'those-who-live-in-death', type: 'concept', why: 'El estado de existencia parcial: cuerpo sin alma, animado por la Deathroot. Existen porque la Muerte verdadera no funciona.' },
      { slug: 'deeproot-depths',     type: 'region',    why: 'El sótano del Interregno donde yace Godwyn. La pesadilla se materializa aquí.' },
      { slug: 'd',                   type: 'character', why: 'El cazador de Aquellos que Viven en la Muerte. Antagonista cosmológico de Fia. Su muerte es bisagra de la quest.' },
      { slug: 'rogier',              type: 'character', why: 'El investigador académico que descifra parte del caso. Sus notas guían a Fia. Muere por exposición a la Deathroot.' },
      { slug: 'fia',                 type: 'character', why: 'La Doncella de Muerte. Su devoción a Godwyn es lo que sostiene la quest entera. Solo ella obtiene la Runa Mendaz.' },
      { slug: 'maliketh-libera-muerte', type: 'timeline', why: 'En Farum Azula, la derrota de Maliketh libera parcialmente la Muerte. Sin esto, la Era del Crepúsculo es imposible.' },
      { slug: 'rune-of-death',       type: 'concept',   why: 'La runa que Fia ha estado preparando para entregar al Anillo Elden restaurado. Es lo que sella técnicamente el final.' },
      { slug: 'duskborn',            type: 'ending',    why: 'La Era del Crepúsculo. Los muertos pueden volver a morir. La era más melancólica y posiblemente la más honesta.' },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════════ */
  /* RUTA DE LA LLAMA FRENÉTICA                                              */
  /* ════════════════════════════════════════════════════════════════════════ */
  {
    id: 'frenetica',
    title: 'Ruta de la Llama Frenética',
    subtitle: 'Quemar el cosmos para liberar a los vivos del sufrimiento · El final apocalíptico',
    ending: 'frenzied-flame',
    accent: 'frenzied',
    description:
      'La respuesta más radical al sufrimiento universal: borrarlo todo. Los Tres Dedos predican que existir es sufrir y la única piedad es quemarlo. El Mancillado que abraza esta llama abandona a Melina, se entrega al dios externo nihilista, y consume el Interregno entero en una conflagración dorada caótica. Si Melina sobrevive, jura venganza desde la oscuridad.',
    poeticIntro:
      'Que la individualidad se disuelva. Que el sufrimiento termine en su forma más completa: borrando a quien sufre.',
    stops: [
      { slug: 'dioses-exteriores',   type: 'concept',   why: 'El campo de batalla cosmológico. La Llama Frenética es uno de varios dioses externos rivales. Entender esto es entender lo que estás invocando.' },
      { slug: 'tres-dedos',          type: 'faction',   why: 'La encarnación física del dios externo. Sellados bajo Leyndell. Su mera proximidad enloquece.' },
      { slug: 'frenzied-flame',      type: 'concept',   why: 'La doctrina cosmológica completa: existir es sufrir, la individualidad es agonía, quemarlo todo es piedad.' },
      { slug: 'shabriri',            type: 'character', why: 'El profeta itinerante. Espíritu del calumniador que posee huéspedes durante eras para propagar la doctrina.' },
      { slug: 'yura',                type: 'character', why: 'El cazador honorable poseído por Shabriri tras una emboscada. Su cuerpo se vuelve vehículo de lo que cazaba.' },
      { slug: 'eleonora',            type: 'character', why: 'La amante de Yura que no distingue al impostor. El amor convertido en complicidad inconsciente.' },
      { slug: 'hyetta',              type: 'character', why: 'La doncella ciega cuya iluminación es maldición. Cada Grano consumido la acerca más a la verdad frenética.' },
      { slug: 'subterranean-shunning-grounds', type: 'region', why: 'El subsuelo de Leyndell. La cárcel oficial del régimen donde duermen los Tres Dedos sellados.' },
      { slug: 'frenzied-victims',    type: 'faction',   why: 'Los infectados anónimos: campesinos, peregrinos, cuerpos cualesquiera. Sus voces predican lo que sus dueños no eligieron decir.' },
      { slug: 'melina',              type: 'character', why: 'Tu compañera silenciosa. Te abandonará si abrazas la llama. Su última frase es promesa de venganza.' },
      { slug: 'gideon',              type: 'character', why: 'El erudito de la Mesa Redonda. Cuando comprende que el Mancillado eligió la Llama, se rebela. Su traición es predecible — alguien tiene que detenerte.' },
      { slug: 'frenzied-flame',      type: 'ending',    why: 'El Señor de la Llama Frenética. El Interregno se quema en océano dorado caótico. Si Melina sobrevive, regresa con un cuchillo desde la oscuridad.' },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════════ */
  /* RUTA DE LAS ESTRELLAS                                                   */
  /* ════════════════════════════════════════════════════════════════════════ */
  {
    id: 'estrellas',
    title: 'Ruta de las Estrellas',
    subtitle: 'Liberar al cosmos de la Voluntad Mayor · Un universo sin dioses cercanos',
    ending: 'age-of-stars',
    accent: 'stars',
    description:
      'Ranni la Bruja conspiró durante siglos para liberarse del contrato Empyrean impuesto por los Dos Dedos. Su Era de las Estrellas reemplaza la luz cercana del Erdtree con la luna oscura distante. Es la única rebelión cosmológica del Interregno que tuvo éxito estructural. El Mancillado que la sigue parte con ella entre las estrellas como su consorte.',
    poeticIntro:
      'Que los dioses se alejen. Que la luna fría reemplace al árbol cálido. Que el cosmos quede libre — y completamente solo.',
    stops: [
      { slug: 'voluntad-mayor',      type: 'concept',   why: 'El dios externo cuya jaula Ranni quiere romper. Sin entenderlo, la rebelión carece de objetivo claro.' },
      { slug: 'empyrean',            type: 'concept',   why: 'La categoría cosmológica que Ranni heredó por nacimiento — y que rechazó matando su propia carne.' },
      { slug: 'rennala',             type: 'character', why: 'La madre de Ranni, rota por el abandono de Radagon. La cuida desde la distancia con una ilusión protectora.' },
      { slug: 'radagon',             type: 'character', why: 'El padre que se reabsorbió en Marika. Sin entender su fusión, la rebelión de Ranni es solo despecho personal.' },
      { slug: 'caria',               type: 'faction',   why: 'La dinastía mestiza Carian. Ranni hereda la magia lunar de su madre y el poder Empyrean de su padre.' },
      { slug: 'maliketh',            type: 'character', why: 'El verdugo de Marika cuya Runa de la Muerte Ranni necesita robar. Sin esa mecha, no hay Cuchillos Negros.' },
      { slug: 'ranni-noche-cuchillos', type: 'timeline', why: 'La conjura. Una sola noche cambia el cosmos: Godwyn muere parcialmente, Ranni mata su propio cuerpo Empyrean.' },
      { slug: 'ranni-bodily-death',  type: 'timeline',  why: 'El acto cosmológico más radical del juego: la Empyrean asesina su propia carne para escapar del contrato divino.' },
      { slug: 'ranni',               type: 'character', why: 'La Bruja muñeca. Su frialdad es estrategia, no patología. Es la única mente del Interregno que pensó el problema cosmológico hasta el final.' },
      { slug: 'three-sisters',       type: 'region',    why: 'El centro de operaciones de la rebelión. Tres torres, tres herederas Carian, tres respuestas distintas a la pérdida.' },
      { slug: 'blaidd',              type: 'character', why: 'La Bestia Sombra de Ranni. Su lealtad es estructural pero su locura instalada como freno la consume.' },
      { slug: 'iji',                 type: 'character', why: 'El gigante reformado. Forja la espada lunar y muere sabiendo que su sacrificio es precio del plan.' },
      { slug: 'seluvis',             type: 'character', why: 'El manipulador. Conserva ambición propia. Iji probablemente lo elimina cuando intenta convertir a Ranni en muñeca.' },
      { slug: 'nox',                 type: 'faction',   why: 'La civilización subterránea castigada eras atrás por intentar lo mismo que Ranni intenta ahora. Su sueño se cumple a través de ella.' },
      { slug: 'silver-tears-creation', type: 'timeline', why: 'Los prototipos del cuerpo divino Nox. La sofisticación cosmológica que Ranni hereda técnicamente.' },
      { slug: 'astel-naturalborn',   type: 'character', why: 'El verdugo cósmico que castigó a los Nox. Ranni lo derrota completando lo que ellos no pudieron.' },
      { slug: 'hoja-mata-dedos',     type: 'concept',   why: 'El arma forjada por los Nox para cortar a los Dos Dedos. Ranni la recupera. Es lo que asegura que los Dedos no retomen control.' },
      { slug: 'radahn',              type: 'character', why: 'El hermano que bloqueó las estrellas para protegerla. Su muerte en el Festival es lo que libera el destino estelar.' },
      { slug: 'radahn-holds-stars',  type: 'concept',   why: 'El bloqueo que Ranni necesita romper. Su hermano la protegía sin saber que su protección era la cárcel.' },
      { slug: 'dark-moon',           type: 'concept',   why: 'La magia lunar que reemplazará al sol del Erdtree. Espadón de la Luna Oscura es el cetro cosmológico de la nueva era.' },
      { slug: 'age-of-stars',        type: 'ending',    why: 'La Era de las Estrellas. El cosmos se aleja de los dioses cercanos. Frío. Libre. El Mancillado parte con Ranni entre constelaciones.' },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════════ */
  /* RUTA DE LA DESESPERACIÓN                                                */
  /* ════════════════════════════════════════════════════════════════════════ */
  {
    id: 'desesperacion',
    title: 'Bendición de la Desesperación',
    subtitle: 'La maldición eterna como ley universal · El único final cuya motivación es puro sadismo',
    ending: 'despair',
    accent: 'despair',
    description:
      'A diferencia de los otros finales — que tienen al menos pretensión filosófica — la Bendición de la Desesperación es maldad pura sin justificación cosmológica. El Dung Eater corrompe el Anillo Elden con su Sello Mendaz; toda la humanidad queda condenada a sufrir eternamente. Es el único final donde el villano gana sin pretensión de bien. La existencia se convierte en agonía permanente.',
    poeticIntro:
      'No hay filosofía aquí — solo la victoria de algo que genuinamente desea el sufrimiento universal como estado permanente.',
    stops: [
      { slug: 'omens',               type: 'faction',   why: 'La categoría que el Dung Eater encarna en exceso. Comprender la opresión Omen es comprender por qué este final tiene poder simbólico.' },
      { slug: 'omen-curse',          type: 'concept',   why: 'La maldición física específica. El Dung Eater carga las marcas pero rechaza neutralizarlas — eligió ser monstruo en lugar de víctima.' },
      { slug: 'subterranean-shunning-grounds', type: 'region', why: 'El subsuelo donde el Dung Eater cumple condena. La cárcel del régimen contiene literalmente la herramienta para condenar al cosmos.' },
      { slug: 'dung-eater',          type: 'character', why: 'El blasfemo activo. Su filosofía no busca poder — busca sufrimiento universal por sí mismo. Es uno de los pocos personajes cuya motivación es puro sadismo.' },
      { slug: 'great-rune',          type: 'concept',   why: 'El instrumento que el Dung Eater corrompe. Sin entender qué son las Grandes Runas, no se entiende la magnitud de la perversión.' },
      { slug: 'tarnished',           type: 'concept',   why: 'Los condenados específicos por el Sello Mendaz. Tu propia categoría se vuelve maldita si abrazas este final.' },
      { slug: 'despair',             type: 'ending',    why: 'La Bendición de la Desesperación. La existencia se convierte en agonía perpetua. El mal triunfa no por necesidad cosmológica sino por elección deliberada.' },
    ],
  },

]

export const findRoute = (id: string) => narrativeRoutes.find((r) => r.id === id)
