import type { DeepEntity, RichBlock, RichInline } from '../types'

/* ────────────────────────────────────────────────────────────────────── */
/* Helpers — write internal links concisely                              */
/* ────────────────────────────────────────────────────────────────────── */

const link = (label: string, targetType: 'character' | 'region' | 'faction' | 'concept' | 'ending' | 'timeline', slug: string): RichInline =>
  ({ type: 'link', label, targetType, slug })

const p = (...children: RichInline[]): RichBlock =>
  ({ type: 'paragraph', children })

const h = (level: 2 | 3, text: string, id?: string): RichBlock =>
  ({ type: 'heading', level, text, id })

const q = (text: string, attribution?: string): RichBlock =>
  ({ type: 'quote', text, attribution })

const em = (text: string): RichInline => ({ type: 'em', text })

/* ────────────────────────────────────────────────────────────────────── */
/* Deep lore by character ID                                             */
/* ────────────────────────────────────────────────────────────────────── */

export const charactersLore: Record<string, Partial<DeepEntity>> = {

  /* ══════════════════════════════ MARIKA ══════════════════════════════ */
  marika: {
    slug: 'marika',
    subtitle: 'La Eterna · Vasija del Anillo Elden · Diosa que rompió a su propia diosidad',
    summary:
      'Marika fue elegida por la Voluntad Mayor como vasija humana del Anillo Elden y fundó el Orden Dorado. Tras la muerte de su hijo Godwyn rompió el Anillo con sus propias manos, fragmentando el cosmos. Es ahora prisionera y símbolo de su propio árbol.',
    deepLore: [
      h(2, 'Quién era antes de ser diosa', 'origen'),
      p(
        'Marika nació numen — humano de cualidades superiores capaz de ser elegido como vasija divina. La Voluntad Mayor, una de las muchas ',
        link('voluntades exteriores', 'concept', 'dioses-exteriores'),
        ', la seleccionó como recipiente del ',
        link('Anillo Elden', 'concept', 'elden-ring'),
        ' tras la fractura cósmica de la era previa. Marika no fue una diosa primordial: fue ascendida.'
      ),
      p(
        'Antes de su deificación había vivido entre numen oprimidos por las primeras eras del cosmos. Esa memoria la persigue: el Orden Dorado se construye explícitamente sobre la represión de aquellas tribus que ',
        link('Maliketh', 'character', 'maliketh'),
        ' y las primeras Pieles de Dios habían perseguido — incluyendo posiblemente al pueblo de la propia Marika.'
      ),
      h(2, 'La fundación del Orden Dorado', 'fundacion'),
      p(
        'Como vasija ungida, Marika selló la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ' dentro de ',
        link('Maliketh', 'character', 'maliketh'),
        ' y proclamó la era dorada: una existencia donde la muerte verdadera ya no funciona, donde los seres del cosmos pueden ser inmortalizados a través del ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        '. Tomó como ',
        link('Primer Señor Elden', 'character', 'godfrey'),
        ' a Godfrey, un guerrero de las tierras exteriores, y juntos conquistaron las Tierras Intermedias.'
      ),
      p(
        'El acto fundacional contiene su propia condena. Sellar la Muerte no la elimina — solo la guarda. Y los seres que el Orden no acepta (los ',
        link('Omens', 'faction', 'omens'),
        ', los ',
        link('Misbegotten', 'faction', 'misbegotten'),
        ', los ',
        link('Albinaurics', 'faction', 'albinauricos'),
        ') quedan como evidencia silenciosa de las grietas estructurales del sistema.'
      ),
      h(2, 'Radagon, el otro yo', 'radagon'),
      p(
        'Marika comparte cuerpo con ',
        link('Radagon', 'character', 'radagon'),
        ', su otra mitad, su esposo y su contradicción. Mientras Marika fue la diosa del cambio, ',
        link('Radagon', 'character', 'radagon'),
        ' era el conservador absoluto: el que siempre quiso reparar lo que ella rompía. Cuando Godfrey fue exiliado, Marika tomó a Radagon como segundo consorte — es decir, se casó consigo misma. La unión final es geometría imposible: una sola persona, dos voluntades irreconciliables.'
      ),
      h(2, 'La fractura', 'fractura'),
      p(
        'Tras el asesinato de su primogénito ',
        link('Godwyn', 'character', 'godwyn'),
        ' a manos de los ',
        link('Cuchillos Negros', 'faction', 'cuchillos-negros'),
        ' durante la ',
        link('Noche de los Cuchillos Negros', 'timeline', 'ranni-noche-cuchillos'),
        ', Marika rompió el Anillo Elden con un martillo. La consecuencia inmediata fue la ',
        link('Era de la Fractura', 'timeline', 'la-fractura'),
        ': sus hijos se reclamaron las Grandes Runas, el cosmos perdió su centro, y la Voluntad Mayor abandonó a las Tierras Intermedias.'
      ),
      q(
        'Mi hijo Godwyn no debió morir esta muerte. Romperé al Anillo Elden por él, aunque caiga el cielo.',
        'Lectura interpretativa de las acciones de Marika'
      ),
      h(2, 'El castigo', 'castigo'),
      p(
        'Por la transgresión, la Voluntad Mayor encadenó a Marika dentro del propio Árbol Áureo. Cuando el ',
        link('Tarnished', 'concept', 'tarnished'),
        ' encuentra finalmente a la diosa, lo que ve es ambivalente: ¿es Marika la prisionera del cosmos, o el cosmos es prisionero de Marika? El golpe que rompe su cuerpo libera a ',
        link('Radagon', 'character', 'radagon'),
        ' como último guardián.'
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Marika es la pregunta de qué significa el poder absoluto cuando ese poder se construye sobre una mentira estructural. Construyó la inmortalidad y descubrió que la inmortalidad sin la muerte es una jaula, no una salvación. Su rebelión no es heroica — es una madre rota destruyendo el sistema que mató a su hijo. Pero también es el dios cuya creación contradice a su creador, una pregunta abierta sobre si la fidelidad cósmica es virtud o servidumbre.'
      )
    ],
    confirmed: [
      'Marika ascendió a la divinidad como numen elegido por la Voluntad Mayor',
      'Selló la Muerte Predestinada dentro de Maliketh para iniciar la era dorada',
      'Rompió el Anillo Elden por su propia mano tras la muerte de Godwyn',
      'Comparte cuerpo y voluntad con Radagon'
    ],
    inferred: [
      'Su ascenso fue un acto político del que ahora se arrepiente',
      'El sello de la Muerte fue lo que permitió la corrupción de Godwyn',
      'Su martillazo final liberó a la Voluntad Mayor de las Tierras Intermedias tanto como liberó al cosmos de ella'
    ],
    ambiguous: [
      'Si su rebelión fue por amor maternal, por venganza, o por una crítica filosófica al Orden Dorado',
      'Cómo y cuándo se fusionó con Radagon — y si la fusión fue voluntaria',
      'Si la figura encadenada en el Árbol Áureo es realmente Marika o una proyección del Tarnished'
    ],
    beneficiaries: 'Sus hijos pudieron disputar grandes runas tras la fractura. La Voluntad Mayor obtuvo, paradójicamente, una excusa para rebajar su presencia activa.',
    victims: 'Godwyn (la víctima inicial), todos los Tarnished arrojados al exilio, los Omens y Misbegotten silenciados por su Orden, y ella misma encadenada como ofrenda eterna.',
    relatedCharacters: ['radagon', 'godfrey', 'godwyn', 'morgott', 'mohg', 'maliketh', 'ranni', 'malenia', 'miquella', 'melina'],
    relatedFactions: ['orden-dorado', 'dos-dedos', 'cuchillos-negros'],
    relatedRegions: ['leyndell'],
    relatedConcepts: ['elden-ring', 'erdtree', 'golden-order', 'destined-death', 'voluntad-mayor', 'empyrean'],
    relatedTimelineEvents: ['marika-godfrey', 'radagon-es-marika', 'la-fractura', 'ranni-noche-cuchillos'],
    relatedEndings: ['fracture', 'order'],
  },

  /* ══════════════════════════════ RADAGON ══════════════════════════════ */
  radagon: {
    slug: 'radagon',
    subtitle: 'La Melena Roja · El reparador imposible · Mitad escondida de una diosa',
    summary:
      'Radagon es el aspecto masculino de Marika. Lideró la guerra contra Liurnia, se casó con Rennala, después con Marika (consigo mismo), y dedicó su existencia tardía a intentar reparar el Anillo que su otra mitad había roto.',
    deepLore: [
      h(2, 'El guerrero del Orden', 'guerrero'),
      p(
        'Radagon emergió como general al servicio del Orden Dorado durante la conquista de ',
        link('Liurnia', 'region', 'liurnia'),
        '. Su melena roja simbolizaba el linaje rojo (el de su pueblo), pero su lealtad iba al árbol dorado: peleó contra los suyos en nombre del Orden. Tras la guerra se casó con ',
        link('Rennala', 'character', 'rennala'),
        ', Gran Maestre de ',
        link('Raya Lucaria', 'region', 'raya-lucaria'),
        ', y tuvo con ella tres hijos — ',
        link('Ranni', 'character', 'ranni'),
        ', ',
        link('Radahn', 'character', 'radahn'),
        ' y ',
        link('Rykard', 'character', 'rykard'),
        '.'
      ),
      h(2, 'El segundo matrimonio', 'segundo-matrimonio'),
      p(
        'Cuando ',
        link('Godfrey', 'character', 'godfrey'),
        ' fue exiliado por perder la gracia divina, Marika llamó a Radagon a Leyndell. Él abandonó a Rennala — dejándole un Amber Egg como recuerdo del amor que le retiraba — y se casó con la diosa. Aquí ocurre la revelación oculta de las Tierras Intermedias: Radagon ',
        { type: 'em' as const, text: 'es' },
        ' Marika. La unión es la fusión de dos voluntades en un cuerpo. Tuvieron dos hijos juntos: ',
        link('Morgott', 'character', 'morgott'),
        ' y ',
        link('Mohg', 'character', 'mohg'),
        ', ambos nacidos como ',
        link('Omens', 'faction', 'omens'),
        ' por la sangre antigua que Radagon ocultaba.'
      ),
      h(2, 'El conservador absoluto', 'conservador'),
      p(
        'Mientras Marika se preparaba para la rebelión, Radagon hacía lo opuesto: estudiar, restaurar, golpear el Anillo Elden con su martillo intentando que las grietas se cerraran. Es el reverso temperamental de su otra mitad. Donde ella ve un sistema injusto, él ve un sistema perfectible. Donde ella destruye, él repara.'
      ),
      p(
        'Su lucha como jefe final encarna la imposibilidad: el Tarnished lo combate justo después de derrotar a la propia Marika encadenada. Las marcas doradas en su cuerpo son las cadenas que él mismo se forjó al volverse hombre y diosa al mismo tiempo. Cuando muere, surge la ',
        link('Bestia Elden', 'concept', 'bestia-elden'),
        ' — el aspecto puro del Anillo desligado de la voluntad humana.'
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Radagon es la imposibilidad de la auto-reconciliación. En el mismo cuerpo conviven el revolucionario y el reformista, y ninguno puede ganar sin matar al otro. Es el dios fragmentado de un orden que nunca podrá decidirse entre cambiar y permanecer.'
      )
    ],
    confirmed: [
      'Radagon es el aspecto masculino de Marika; comparten un solo cuerpo',
      'Lideró la guerra contra Liurnia y se casó con Rennala, fruto del cual nacieron Ranni, Radahn y Rykard',
      'Engendró a Morgott y Mohg con Marika',
      'Es el último guardián humano del Anillo Elden antes de la Bestia Elden'
    ],
    inferred: [
      'Radagon ocultaba sangre Omen (ascendencia maldita) que se manifestó en sus hijos con Marika',
      'Su devoción al Orden lo enemistaba interiormente con la rebelión de Marika',
      'Las cadenas doradas son auto-impuestas: signo de su propio conflicto'
    ],
    ambiguous: [
      'Si la fusión Radagon/Marika fue voluntaria, accidental, o impuesta por la Voluntad Mayor',
      'Si Radagon llegó realmente a comprender que sus martillazos no podían reparar el Anillo',
      'Si la Bestia Elden lo respetó como anfitrión o lo expulsó tras su muerte'
    ],
    beneficiaries: 'El Orden Dorado obtuvo un guardián incansable. La Voluntad Mayor obtuvo a través de él un reparador eterno.',
    victims: 'Rennala, abandonada en su pena. Sus hijos con ella, todos malditos por sus propios destinos. Y Radagon mismo, prisionero en un cuerpo compartido.',
    relatedCharacters: ['marika', 'rennala', 'ranni', 'radahn', 'rykard', 'morgott', 'mohg'],
    relatedRegions: ['liurnia', 'raya-lucaria', 'leyndell'],
    relatedFactions: ['orden-dorado', 'caria', 'raya-lucaria'],
    relatedConcepts: ['elden-ring', 'golden-order', 'bestia-elden'],
    relatedTimelineEvents: ['radagon-rennala', 'radagon-es-marika', 'la-fractura'],
  },

  /* ══════════════════════════════ GODFREY ══════════════════════════════ */
  godfrey: {
    slug: 'godfrey',
    subtitle: 'Hoarah Loux · Primer Señor Elden · Padre exiliado de los Tarnished',
    summary:
      'Primer Señor Elden, esposo original de Marika, conquistador de las Tierras Intermedias. Tras perder la gracia fue exiliado con sus seguidores — los primeros Tarnished. Regresa al final como espectro dorado para guardar el trono que ya no le pertenece.',
    deepLore: [
      h(2, 'El conquistador', 'conquistador'),
      p(
        'Godfrey fue el Primer Señor Elden, el guerrero exterior elegido por ',
        link('Marika', 'character', 'marika'),
        ' para ser su consorte y mano marcial. Junto al ',
        link('Espíritu de la Tormenta', 'character', 'godfrey'),
        ' encadenado en su frente, sometió a los pueblos de las Tierras Intermedias bajo el ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        '. Su consorte le dio cuatro hijos directos — ',
        link('Godwyn', 'character', 'godwyn'),
        ', ',
        link('Morgott', 'character', 'morgott'),
        ', ',
        link('Mohg', 'character', 'mohg'),
        ' (estos dos con sangre Omen heredada de Radagon), y posiblemente más.'
      ),
      h(2, 'El exilio', 'exilio'),
      p(
        'Cuando ya no hubo enemigos dignos para conquistar, Marika lo despojó del estatus de Señor Elden. Una lágrima rodó por la mejilla de Godfrey — no por desesperación, sino porque su rey de los reyes ya no tenía guerras que ofrecerle. Fue desterrado con los ',
        link('Tarnished', 'concept', 'tarnished'),
        ' a las tierras exteriores. Allí, despojado de la gracia, retomó su nombre primigenio: Hoarah Loux.'
      ),
      h(2, 'El regreso', 'regreso'),
      p(
        'Tras la fractura, la gracia de los Tarnished volvió a brillar. Godfrey regresó como espectro dorado para defender el trono — no porque lo deseara, sino porque era llamado por su deber. Su batalla final tiene dos formas: la armadura del rey civilizado y, cuando esa máscara cae, Hoarah Loux el cazador desnudo, peleando con sus propias manos.'
      ),
      q(
        'No esperaba ser llamado de nuevo. Pero el deber del rey es responder.',
        'Lectura interpretativa del retorno de Godfrey'
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Godfrey es la fidelidad como prisión. Fue el instrumento perfecto: tan eficaz que se volvió obsoleto. Su tragedia es que entendió las reglas del Orden Dorado y las aceptó incluso cuando lo expulsaron. Cuando los hijos del trono fracturaron el cosmos, fue el padre original — desterrado generaciones antes — el llamado a defender lo que ellos ya no defendían.'
      )
    ],
    confirmed: [
      'Godfrey fue el Primer Señor Elden y consorte original de Marika',
      'Fue exiliado con sus seguidores cuando perdió la gracia',
      'Regresa como espectro dorado guardando el camino al trono',
      'Tiene dos formas en combate: el rey blindado y el cazador Hoarah Loux'
    ],
    inferred: [
      'Su lágrima al perder la gracia fue por la pérdida de propósito, no de privilegio',
      'Mantuvo lealtad incluso en el exilio, lo que justifica su retorno',
      'Es el ancestro biológico de muchos Tarnished, incluyendo Nepheli Loux'
    ],
    ambiguous: [
      'Si tuvo conciencia plena de la fusión Marika/Radagon o vivió ignorante',
      'Cuántos hijos engendró antes del exilio',
      'Si su retorno es voluntad propia o una correa de la Voluntad Mayor'
    ],
    beneficiaries: 'Marika obtuvo un consorte eficiente y luego un guardián post-mortem. El Orden Dorado obtuvo su mayor expansión a través de él.',
    victims: 'Los pueblos conquistados por Godfrey. Los Tarnished arrojados al exilio. Sus hijos, criados sin él tras la expulsión.',
    relatedCharacters: ['marika', 'godwyn', 'morgott', 'mohg', 'nepheli-loux'],
    relatedFactions: ['orden-dorado'],
    relatedRegions: ['leyndell'],
    relatedConcepts: ['tarnished', 'grace', 'great-rune'],
    relatedTimelineEvents: ['marika-godfrey', 'exilio-godfrey'],
  },

  /* ══════════════════════════════ GODWYN ══════════════════════════════ */
  godwyn: {
    slug: 'godwyn',
    subtitle: 'El de Ojos Dorados · Primer demidiós muerto · La Muerte que no acaba',
    summary:
      'Primogénito amado de Marika y Godfrey. Asesinado durante la Noche de los Cuchillos Negros, su muerte parcial — solo el alma muere, no el cuerpo — engendró el fenómeno de Aquellos que Viven en la Muerte. Su cadáver crece eternamente como Príncipe de la Muerte bajo Limgrave.',
    deepLore: [
      h(2, 'El amado de las Tierras Intermedias', 'amado'),
      p(
        'Godwyn fue el primogénito y favorito del Orden Dorado: hijo de ',
        link('Marika', 'character', 'marika'),
        ' y ',
        link('Godfrey', 'character', 'godfrey'),
        ', resplandeciente, dorado, dominador del antiguo dragón ',
        link('Fortissax', 'character', 'fortissax'),
        ' a quien convirtió en aliado mediante un pacto sagrado. Era la cara amable del régimen: la promesa de un futuro coherente.'
      ),
      h(2, 'La Noche de los Cuchillos Negros', 'noche-cuchillos'),
      p(
        'Durante un evento conocido como la ',
        link('Noche de los Cuchillos Negros', 'timeline', 'ranni-noche-cuchillos'),
        ', un grupo de ',
        link('asesinas Numen', 'faction', 'cuchillos-negros'),
        ' — mujeres del mismo pueblo que Marika — empuñó cuchillos forjados con una mecha de la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ' robada del cuerpo de ',
        link('Maliketh', 'character', 'maliketh'),
        '. ',
        link('Ranni', 'character', 'ranni'),
        ' fue arquitecta de la conspiración — la misma noche se quitó su propio cuerpo Empyrean para escapar de los ',
        link('Dos Dedos', 'faction', 'dos-dedos'),
        '. Pero la mecha de Muerte Predestinada que poseían era limitada: la Muerte completa había sido extraída del Anillo Elden por orden de Marika. La fracción robada solo bastaba para matar la ',
        { type: 'em', text: 'mitad' },
        ' de un ser. En Godwyn mataron su alma y dejaron su cuerpo; en Ranni mataron el cuerpo y dejaron su alma. Ese límite cosmológico es precisamente lo que hizo posible que ambos sobrevivieran de forma incompleta.'
      ),
      h(2, 'El Príncipe de la Muerte', 'principe-muerte'),
      p(
        'El cuerpo sin alma de Godwyn se hundió en las raíces del ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' y se convirtió en el primer caso de una nueva forma de existencia: ',
        link('Aquellos que Viven en la Muerte', 'concept', 'those-who-live-in-death'),
        '. Un ser cuyo cuerpo crece eternamente sin alma, generando ',
        link('Deathroot', 'concept', 'deathroot'),
        ' que infecta el suelo y reanima cadáveres. La forma actual de Godwyn — un cadáver enorme entrelazado con raíces y serpentinas dragonícolas — está bajo ',
        link('Deeproot Depths', 'region', 'deeproot-depths'),
        '.'
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Godwyn es la víctima cuya muerte transformó el cosmos. La rebelión de Marika comenzó con su asesinato. La existencia de la podredumbre dorada (Deathroot) procede de su cuerpo que sigue creciendo. La ',
        link('Era del Crepúsculo', 'ending', 'duskborn'),
        ' busca cerrarle la herida que sigue abierta, devolviéndole la verdadera muerte.'
      ),
      q(
        'Solo aquellos como nosotros, hijos de la Muerte, podrían acompañar a Godwyn en sus sueños eternos.',
        'Fia, Doncella de Muerte'
      )
    ],
    confirmed: [
      'Godwyn fue el primer hijo de Marika y Godfrey',
      'Domesticó al antiguo dragón Fortissax mediante un pacto',
      'Fue asesinado en la Noche de los Cuchillos Negros',
      'Su cuerpo se convirtió en el primer caso de "vida en la muerte" bajo Limgrave'
    ],
    inferred: [
      'Su asesinato detonó la fractura del Anillo Elden por parte de Marika',
      'La Deathroot que infecta las Tierras Intermedias emana de su cadáver inmortal',
      'Su muerte parcial creó el fenómeno entero de Aquellos que Viven en la Muerte'
    ],
    ambiguous: [
      'Si Ranni planeó la muerte de Godwyn o solo aprovechó el ataque para matar su propio cuerpo',
      'Si Godwyn conserva alguna conciencia bajo Deeproot Depths',
      'Si su pacto con Fortissax sobrevive en el cadáver eterno'
    ],
    beneficiaries: 'Ranni: la conmoción facilitó su escape Empyrean. Aquellos que Viven en la Muerte: existen gracias a este precedente.',
    victims: 'Marika, en cuya pena rompió el cosmos. Fortissax, condenado a luchar eternamente las pesadillas del demidiós muerto. Todo Tierras Intermedias, que arrastra desde entonces la herida abierta.',
    relatedCharacters: ['marika', 'godfrey', 'fortissax', 'ranni', 'maliketh', 'fia', 'd'],
    relatedFactions: ['orden-dorado', 'cuchillos-negros', 'those-who-live-in-death'],
    relatedRegions: ['deeproot-depths', 'leyndell'],
    relatedConcepts: ['destined-death', 'rune-of-death', 'deathroot', 'those-who-live-in-death'],
    relatedTimelineEvents: ['ranni-noche-cuchillos', 'la-fractura'],
    relatedEndings: ['duskborn'],
  },

  /* ══════════════════════════════ MORGOTT ══════════════════════════════ */
  morgott: {
    slug: 'morgott',
    subtitle: 'El Rey Caído · Hijo Omen escondido por su madre · Defensor del trono que lo despreciaba',
    summary:
      'Hijo omen de Marika y Radagon, encadenado bajo Leyndell en su infancia. Tras la fractura, escapó disfrazándose como Margit y se erigió como último defensor del trono dorado — el régimen que lo había rechazado por su forma maldita.',
    deepLore: [
      h(2, 'El nacimiento maldito', 'origen'),
      p(
        'Morgott y su gemelo ',
        link('Mohg', 'character', 'mohg'),
        ' nacieron de la unión de ',
        link('Marika', 'character', 'marika'),
        ' y ',
        link('Radagon', 'character', 'radagon'),
        ' como ',
        link('Omens', 'faction', 'omens'),
        ': cuerpos con cuernos, signo de la sangre antigua que Radagon arrastraba. Como las leyes del ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' consideraban a los Omens criaturas malditas, los gemelos fueron encarcelados en las ',
        link('alcantarillas de Leyndell', 'region', 'leyndell'),
        ' durante toda su juventud.'
      ),
      h(2, 'El defensor del trono', 'defensor'),
      p(
        'Cuando llegó la ',
        link('fractura', 'timeline', 'la-fractura'),
        ', Morgott eligió lo opuesto a su hermano: en lugar de odiar al Orden, lo defendió. Asumió el manto del Rey Caído y se convirtió en último guardián de Leyndell. Bajo el alias de Margit el Presagio Caído, vagaba por las Tierras Intermedias bloqueando a los Tarnished aspirantes al trono. La paradoja es brutal: el ser que el Orden encarceló por nacimiento se convierte en su defensor más leal.'
      ),
      q(
        '¿Tarnished? Lleváis un odio amargo. Sois esclavos de la lujuria por una herencia ajena. Volved al lodo del que nacisteis.',
        'Margit el Presagio Caído'
      ),
      h(2, 'La maldición y el orgullo', 'maldicion-orgullo'),
      p(
        'Lo trágico de Morgott es que ',
        { type: 'em' as const, text: 'sabía' },
        ' que el Orden Dorado lo despreciaba — y aun así escogió morir por él. Su devoción no es ignorancia: es pacto deliberado con un sistema que sigue rechazándolo. La gracia que mantiene su cuerpo es prestada y dolorosa; cada paso le recuerda que él no debería existir según las reglas que defiende.'
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Morgott es la fidelidad excesiva del oprimido. Es el caso límite del leal: el que defiende al opresor mejor que el propio opresor. Su contrapunto con ',
        link('Mohg', 'character', 'mohg'),
        ' es completo: ambos sufrieron lo mismo, uno respondió con devoción, el otro con culto profano. Ninguno escapó del estigma; cada uno construyó una respuesta opuesta al mismo trauma.'
      )
    ],
    confirmed: [
      'Morgott es hijo Omen de Marika y Radagon, gemelo de Mohg',
      'Fue encarcelado bajo Leyndell durante su juventud',
      'Se disfraza como Margit el Presagio Caído',
      'Defiende el Anillo Elden ante los Tarnished aspirantes al trono'
    ],
    inferred: [
      'Su devoción al Orden es deliberada, no ingenua',
      'La gracia que lo mantiene es dolorosa y le recuerda su estigma',
      'Su última carga es defender el árbol incluso sabiendo que lo aborrece'
    ],
    ambiguous: [
      'Si Marika alguna vez intentó liberarlo o reconocerlo',
      'Cuándo abandonó la prisión y por qué medio',
      'Si su lealtad llegó al fanatismo o si era una forma de venganza interna'
    ],
    beneficiaries: 'El Orden Dorado obtuvo su defensor más improbable y eficaz.',
    victims: 'Mohg, su gemelo, repudiado por la elección opuesta. Los Tarnished que cayeron tratando de acceder al trono. El propio Morgott, que muere defendiendo lo que lo encarceló.',
    relatedCharacters: ['marika', 'radagon', 'mohg', 'godfrey'],
    relatedFactions: ['orden-dorado', 'omens'],
    relatedRegions: ['leyndell'],
    relatedConcepts: ['great-rune', 'grace', 'tarnished'],
    relatedTimelineEvents: ['la-fractura', 'estado-mundo-mancillado'],
  },

  /* ══════════════════════════════ MOHG ══════════════════════════════ */
  mohg: {
    slug: 'mohg',
    subtitle: 'Señor de la Sangre · Profeta de la Madre Informe · Secuestrador de Miquella',
    summary:
      'Gemelo Omen de Morgott, también encarcelado en su juventud. Su respuesta al estigma fue forjar pacto con la Madre Informe, un dios exterior de la sangre. Secuestró a Miquella para hacerlo su consorte divino e instaurar una dinastía de sangre.',
    deepLore: [
      h(2, 'La rebelión gemela', 'rebelion'),
      p(
        'Donde su gemelo ',
        link('Morgott', 'character', 'morgott'),
        ' eligió la fidelidad servil al Orden, Mohg eligió el rechazo absoluto. Hizo pacto con un ',
        link('dios exterior', 'concept', 'dioses-exteriores'),
        ' — la ',
        link('Madre Informe', 'concept', 'formless-mother'),
        ' — y se convirtió en su profeta. Su cuerpo se transformó: alas de demonio, cuernos coronados, y el dominio de la magia carmesí que extrae de su propia sangre.'
      ),
      h(2, 'El proyecto dinástico', 'dinastia'),
      p(
        'Mohg construyó la ',
        link('Dinastía Mohgwyn', 'region', 'mohgwyn'),
        ' subterránea, oculta de las Tierras Intermedias, donde planeaba criar un ',
        link('Señor Elden', 'concept', 'elden-ring'),
        ' bajo su propia ley sangrienta. Para esto necesitaba un consorte Empyrean — y eligió a ',
        link('Miquella', 'character', 'miquella'),
        ', encerrado en su capullo dorado en el ',
        link('Haligtree', 'region', 'haligtree'),
        '. Lo secuestró durante su sueño y lo llevó a Mohgwyn para incubarlo en sangre.'
      ),
      h(2, 'El final fallido', 'fallido'),
      p(
        'El plan fracasó por dos razones: Miquella nunca despertó dentro de Mohgwyn (el capullo dorado lo protegía incluso del rito sangriento), y Mohg fue derrotado por el Tarnished antes de completar la ascensión. Su muerte deja a Miquella todavía dormido — y la línea sangrienta truncada.'
      ),
      q(
        'Levanta tu cabeza, mi Miquella, oh tú dorada hermosura. ¿Acaso este sangriento ritual no merece tu mirada?',
        'Mohg, Señor de la Sangre'
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Mohg es la respuesta opuesta a Morgott al mismo trauma original. Si el sistema lo rechaza por ser Omen, entonces que el sistema arda y nazca uno nuevo bajo otra ley divina. Su tragedia es que su rebelión es estructuralmente idéntica a la del Orden Dorado: secuestrar a una figura sagrada y forzarla en el rol de consorte. Reproduce el mismo crimen original que Marika cometió con Godfrey.'
      )
    ],
    confirmed: [
      'Mohg es hijo Omen de Marika y Radagon, gemelo de Morgott',
      'Hizo pacto con la Madre Informe, un dios exterior de la sangre',
      'Secuestró a Miquella durante su sueño en el Haligtree',
      'Construyó la Dinastía Mohgwyn como reino subterráneo paralelo'
    ],
    inferred: [
      'Su rebelión es respuesta directa al trauma del encarcelamiento juvenil',
      'La Madre Informe lo ha usado tanto como él la ha usado a ella',
      'Miquella nunca colaboró voluntariamente; el rito fue puro secuestro'
    ],
    ambiguous: [
      'Si la Madre Informe es realmente un dios o un parásito de Mohg',
      'Cuánta autoconciencia tenía Miquella durante el secuestro',
      'Si Mohg actuó por venganza, fanatismo, o ambición pura'
    ],
    beneficiaries: 'La Madre Informe ganó adoración y un consorte celestial fallido. Los Dedos Sangrientos obtuvieron culto y poder.',
    victims: 'Miquella, secuestrado en su sueño. Los Albinaurics que Mohg sangra para producir sirvientes. Morgott, abandonado por su gemelo en el camino opuesto.',
    relatedCharacters: ['morgott', 'miquella', 'marika', 'radagon', 'malenia', 'varre'],
    relatedFactions: ['omens', 'bloody-fingers'],
    relatedRegions: ['mohgwyn', 'leyndell', 'haligtree'],
    relatedConcepts: ['formless-mother', 'bloodflame', 'dioses-exteriores', 'empyrean'],
    relatedTimelineEvents: ['la-fractura', 'estado-mundo-mancillado'],
  },

  /* ══════════════════════════════ RANNI ══════════════════════════════ */
  ranni: {
    slug: 'ranni',
    subtitle: 'La Bruja · Empyrean rebelde · Arquitecta de un cosmos sin dioses',
    summary:
      'Hija Empyrean de Rennala y Radagon. Conspiró en la Noche de los Cuchillos Negros: dos muertes-espejo coordinadas — Godwyn perdió el alma y conservó el cuerpo, Ranni perdió el cuerpo y conservó el alma. Ambas eran necesarias para su plan. Desde entonces opera desde una muñeca, libre del contrato con los Dos Dedos.',
    deepLore: [
      h(2, 'La hija fría', 'origen'),
      p(
        'Ranni nació hija de ',
        link('Rennala', 'character', 'rennala'),
        ' y ',
        link('Radagon', 'character', 'radagon'),
        ' como ',
        link('Empyrean', 'concept', 'empyrean'),
        ' — un ser destinado a poder convertirse en dios, atado por contrato a los ',
        link('Dos Dedos', 'faction', 'dos-dedos'),
        '. Era una prisión dorada: aceptar la sucesión de Marika la ataría a la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' por toda la eternidad.'
      ),
      h(2, 'La conspiración', 'conspiracion'),
      p(
        'Ranni fue arquitecta de un plan que requería ',
        { type: 'em', text: 'dos muertes-espejo' },
        '. Una mecha de la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ' robada del cuerpo de ',
        link('Maliketh', 'character', 'maliketh'),
        ' fue forjada en cuchillos por los ',
        link('Cuchillos Negros', 'faction', 'cuchillos-negros'),
        '. En la ',
        link('Noche de los Cuchillos Negros', 'timeline', 'ranni-noche-cuchillos'),
        ' apuñalaron a ',
        link('Godwyn', 'character', 'godwyn'),
        ' — su alma murió, su cuerpo continuó descomponiéndose en las raíces. Ranni usó la misma fuerza para apuñalarse a sí misma — su cuerpo murió, su alma escapó. Las dos muertes son simétricas y deliberadas: matar a un Empyrean del Linaje Dorado debilitaba al Árbol Áureo y abría la puerta a la Fractura; matar el propio cuerpo cortaba el contrato cosmológico con los Dos Dedos.'
      ),
      h(2, 'La bruja muñeca', 'bruja-muneca'),
      p(
        'Tras matar su cuerpo, Ranni transfirió su mente a una muñeca articulada — un truco que llevaba siglos preparándose. Reúne aliados: ',
        link('Blaidd', 'character', 'blaidd'),
        ', el medio-lobo creado por ',
        link('Maliketh', 'character', 'maliketh'),
        ' como su sombra; ',
        link('Iji', 'character', 'iji'),
        ', el viejo gigante herrero; ',
        link('Seluvis', 'character', 'seluvis'),
        ', el manipulador. Cada uno cumple un rol; ninguno conoce el plan completo.'
      ),
      h(2, 'La Era de las Estrellas', 'era-estrellas'),
      p(
        'El plan de Ranni culmina en un final radical: reemplazar a la Voluntad Mayor con una luna oscura distante, dejando al cosmos sin dios cercano. Si el Tarnished completa su quest, instaurará la ',
        link('Era de las Estrellas', 'ending', 'age-of-stars'),
        ': un universo huérfano de divinidad inmediata, frío pero finalmente libre.'
      ),
      q(
        'Mi anhelo es que la Era del Orden lleguen a su fin... y nuestra era venidera, una era de las estrellas, será iluminada solo por la lejanía.',
        'Ranni la Bruja'
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Ranni es la única figura de las Tierras Intermedias que parece haber pensado el problema cosmológico hasta el final. No quiere reformar el Orden; lo quiere desinstalar. Su frialdad no es maldad: es la única respuesta racional posible cuando los dioses son cárceles. La pregunta que abre es si un cosmos huérfano es verdaderamente libre o solo abandonado.'
      )
    ],
    confirmed: [
      'Ranni es hija Empyrean de Rennala y Radagon',
      'Mató su propio cuerpo durante la Noche de los Cuchillos Negros',
      'Ahora habita en una muñeca articulada',
      'Sus aliados son Blaidd, Iji y Seluvis',
      'Su quest culmina en la Era de las Estrellas'
    ],
    inferred: [
      'Su plan estaba en preparación durante siglos antes de la Noche',
      'La muerte de Godwyn fue daño colateral, no objetivo',
      'Su frialdad emocional es estrategia, no patología'
    ],
    ambiguous: [
      'Si su plan elimina la Voluntad Mayor o solo la aleja',
      'Si los Dos Dedos sospechaban su rebelión antes de la Noche',
      'Si conserva sentimientos por sus aliados o los ve como herramientas'
    ],
    beneficiaries: 'Ranni misma, liberada de la sucesión Empyrean. El Tarnished que la sigue, parte con ella entre las estrellas. El cosmos liberado de la Voluntad Mayor.',
    victims: 'Godwyn, asesinado parcialmente. Blaidd, dispuesto a la locura por su lealtad. Iji, sacrificado por sus enemigos. Seluvis, traicionado por la Bruja a la que servía.',
    relatedCharacters: ['rennala', 'radagon', 'godwyn', 'maliketh', 'blaidd', 'iji', 'seluvis', 'marika'],
    relatedFactions: ['caria', 'cuchillos-negros'],
    relatedRegions: ['raya-lucaria', 'liurnia', 'nokron', 'nokstella'],
    relatedConcepts: ['empyrean', 'rune-of-death', 'destined-death', 'dark-moon', 'age-of-stars', 'voluntad-mayor'],
    relatedTimelineEvents: ['ranni-noche-cuchillos', 'la-fractura', 'finales'],
    relatedEndings: ['age-of-stars'],
  },

  /* ══════════════════════════════ RENNALA ══════════════════════════════ */
  rennala: {
    slug: 'rennala',
    subtitle: 'Reina de la Luna Llena · Gran Maestra de Raya Lucaria · Madre abandonada',
    summary:
      'Reina-hechicera de Liurnia, esposa abandonada de Radagon. Tras la partida de su amante quedó atrapada en la regresión: hechiza eternamente al "Amber Egg" creyendo que cada nuevo demidiós es un hijo suyo recién nacido.',
    deepLore: [
      h(2, 'El amor perdido', 'amor'),
      p(
        'Rennala fue Gran Maestra de la Academia de ',
        link('Raya Lucaria', 'region', 'raya-lucaria'),
        ' y reina del clan ',
        link('Caria', 'faction', 'caria'),
        '. Tras la guerra contra Liurnia, ',
        link('Radagon', 'character', 'radagon'),
        ' se casó con ella en gesto de paz. Tuvieron tres hijos: ',
        link('Ranni', 'character', 'ranni'),
        ', ',
        link('Radahn', 'character', 'radahn'),
        ' y ',
        link('Rykard', 'character', 'rykard'),
        '. Cuando Marika llamó a Radagon de regreso a Leyndell, él le dejó como prenda de despedida un Amber Egg — el huevo dorado donde anidan los nacimientos divinos.'
      ),
      h(2, 'La regresión', 'regresion'),
      p(
        'Rennala no soportó el abandono. Cuando un academico llamado ',
        { type: 'em' as const, text: 'Lazuli Conspector' },
        ' regresó del más allá con la maldición del Renacimiento, se la entregó a ella. Desde entonces Rennala usa sus poderes para "renacer" su propio Amber Egg en bucle infinito, abrazando el huevo como si fuera un bebé que nunca llega. Su poder, en otro tiempo el más refinado de las Tierras Intermedias, ahora solo sirve para mantenerla en negación eterna.'
      ),
      h(2, 'La utilidad accidental', 'utilidad'),
      p(
        'Su poder de renacimiento, sin embargo, es valioso. Tarnished que la derrotan pueden usarla para reorganizar sus propios atributos: ella canta sobre el cuerpo del aspirante y "lo renace" como una versión rediseñada. La función benevolente es lo que queda de la diosa que fue.'
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Rennala es el dolor convertido en parálisis. Su tragedia es la única que el Orden Dorado no necesitó construir: simplemente le pasó. Sus hijos cargan esta herida — Ranni la cosmológica, Radahn la marcial, Rykard la apóstata. Cada uno responde de modo distinto a una madre que dejó de mirar a sus hijos para mirar siempre al huevo.'
      )
    ],
    confirmed: [
      'Rennala fue Gran Maestra de Raya Lucaria y reina del clan Caria',
      'Tuvo tres hijos con Radagon: Ranni, Radahn y Rykard',
      'Posee el poder de renacimiento gracias a Lazuli Conspector',
      'El Amber Egg fue regalo de despedida de Radagon'
    ],
    inferred: [
      'Su regresión es un escudo psicológico contra el abandono',
      'Sus hijos arrastran las cicatrices de su parálisis',
      'Aún ama a Radagon a pesar de saber que él se fusionó con Marika'
    ],
    ambiguous: [
      'Si conserva conciencia plena durante el bucle de renacimiento',
      'Si el huevo contiene algo real o es puramente simbólico',
      'Si conoció el destino Empyrean de su hija Ranni'
    ],
    beneficiaries: 'Los Tarnished que pueden reorganizar sus atributos a través de ella.',
    victims: 'Sus tres hijos, criados en la sombra de un duelo permanente. Ella misma, atrapada en el momento del abandono.',
    relatedCharacters: ['radagon', 'ranni', 'radahn', 'rykard', 'marika'],
    relatedFactions: ['caria', 'raya-lucaria'],
    relatedRegions: ['raya-lucaria', 'liurnia'],
    relatedConcepts: ['great-rune', 'empyrean'],
    relatedTimelineEvents: ['radagon-rennala', 'radagon-es-marika'],
  },

  /* ══════════════════════════════ RADAHN ══════════════════════════════ */
  radahn: {
    slug: 'radahn',
    subtitle: 'General Estelar · Cazador del cielo · Caído por la podredumbre',
    summary:
      'Hijo de Rennala y Radagon, el más fuerte de los demidioses. Detuvo las estrellas con su gravedad. Fue corrompido por la podredumbre escarlata y reducido a una bestia incoherente; el Festival de Caelid es el ritual para liberar su honor mediante una muerte digna.',
    deepLore: [
      h(2, 'El cazador de estrellas', 'cazador'),
      p(
        'Radahn dominó la magia de la gravedad enseñada por ',
        link('Sellen', 'character', 'sellen'),
        ' en su juventud y desarrolló una técnica única: usar su gravedad para sostener las estrellas en el cielo, deteniendo el destino estelar de su hermana ',
        link('Ranni', 'character', 'ranni'),
        '. Este acto cosmológico — un guerrero rojo bloqueando una era astronómica — es uno de los grandes secretos de las Tierras Intermedias.'
      ),
      h(2, 'El general invicto', 'general'),
      p(
        'Lideró a los ',
        link('Redmanes', 'faction', 'redmanes'),
        ' desde ',
        link('Caelid', 'region', 'caelid'),
        ' y peleó contra todos sus hermanos demidiós tras la fractura. Su rival favorito era ',
        link('Malenia', 'character', 'malenia'),
        ', cuyo combate cuerpo a cuerpo es legendario. La batalla terminó cuando Malenia desató su forma podrida — la primera ',
        link('Floración Escarlata', 'concept', 'scarlet-rot'),
        ' — convirtiendo Caelid entero en un yermo maldito y a Radahn en una víctima.'
      ),
      h(2, 'El Festival', 'festival'),
      p(
        'Tras su corrupción, sus seguidores organizaron un festival ritual: invitar a guerreros legendarios a derrotarlo, liberándolo así de su cuerpo arruinado. ',
        link('Jerren', 'character', 'jerren'),
        ' es el oficiante. ',
        link('Alexander', 'character', 'alexander'),
        ', ',
        link('Patches', 'character', 'patches'),
        ' y otros acuden. El espíritu del general invicto duerme bajo capas de podredumbre; matarlo es un acto piadoso.'
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Radahn es la fuerza honorable arruinada por una guerra que él no entendió del todo. Su rivalidad con Malenia es trágica simétricamente: dos guerreros perfectos que se admiran, batallando hasta que uno desata la enfermedad cósmica. Su honor lo lleva a no rendirse incluso cuando perderse a sí mismo es lo único que le queda. El Festival es el cierre que merece: una muerte como guerrero, no como bestia.'
      )
    ],
    confirmed: [
      'Radahn es hijo de Rennala y Radagon',
      'Aprendió magia gravitacional de Sorceress Sellen',
      'Detiene las estrellas con su gravedad para impedir el destino de Ranni',
      'Fue corrompido por Scarlet Rot durante el duelo con Malenia',
      'El Festival es el ritual para liberarlo mediante derrota digna'
    ],
    inferred: [
      'Su rivalidad con Malenia era de mutuo respeto, no odio',
      'El bloqueo de las estrellas era voluntario y consciente — quería a su hermana',
      'Su honor lo impide rendirse a la corrupción, prolongando su sufrimiento'
    ],
    ambiguous: [
      'Si Radahn supo durante la batalla que Malenia liberaría la podredumbre',
      'Cuánta consciencia conserva durante el Festival',
      'Si la liberación de las estrellas tras su muerte fue casualidad o liberación deliberada'
    ],
    beneficiaries: 'Ranni: con la muerte de Radahn, las estrellas comienzan a moverse otra vez, abriendo el camino a su Era. El Tarnished: una Gran Runa.',
    victims: 'Caelid entero, convertido en yermo. Sus Redmanes, condenados a guerrear sobre tierra muerta. Su propia honra, sometida a la indignidad del cuerpo arruinado.',
    relatedCharacters: ['rennala', 'radagon', 'ranni', 'rykard', 'malenia', 'sellen', 'jerren', 'alexander'],
    relatedFactions: ['redmanes', 'raya-lucaria'],
    relatedRegions: ['caelid'],
    relatedConcepts: ['great-rune', 'scarlet-rot'],
    relatedTimelineEvents: ['demidioses-fractura', 'la-fractura'],
  },

  /* ══════════════════════════════ RYKARD ══════════════════════════════ */
  rykard: {
    slug: 'rykard',
    subtitle: 'El Blasfemo · Devorado por la Serpiente Dios · Profeta del antiOrden',
    summary:
      'Hijo de Rennala y Radagon, originalmente noble del Orden Dorado. Enloquecido tras la fractura, se entregó a una serpiente-dios primordial bajo el Mt. Gelmir y fue devorado por ella. Ahora es ambos: hombre y monstruo, profeta de la rebelión total contra el Orden.',
    deepLore: [
      h(2, 'El reformista del Orden', 'reformista'),
      p(
        'En su juventud, Rykard fue un noble respetado del ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        '. Casado dos veces — primero con ',
        link('Tanith', 'character', 'tanith'),
        ', luego con otra noble — instaló su corte en el ',
        link('Volcano Manor', 'region', 'mt-gelmir'),
        ' como centro político alternativo a Leyndell. Su pose era reformista, no rupturista.'
      ),
      h(2, 'La devorada', 'devorada'),
      p(
        'Tras la fractura, su decepción se convirtió en blasfemia. Buscó y encontró a una ',
        link('serpiente-dios primordial', 'faction', 'dragones-antiguos'),
        ' que habitaba bajo el Volcano Manor — una entidad muy anterior al Orden Dorado, posiblemente vinculada al ',
        link('Crisol', 'concept', 'crucible'),
        '. Permitió que la serpiente lo devorara. Su cuerpo se fusionó con el de ella: cabeza humana en una bestia descomunal de fuego y carne fundida.'
      ),
      h(2, 'El proyecto blasfemo', 'proyecto'),
      p(
        'Desde el Volcano Manor, Rykard recibe nobles desafectos del Orden Dorado y los adoctrina contra Leyndell. Tanith, su anfitriona, sirve la causa con devoción canibalesca: cuando el ',
        link('Tarnished', 'concept', 'tarnished'),
        ' lo derrota, ella consume su cadáver para preservarlo dentro de sí. ',
        link('Rya', 'character', 'rya'),
        ' funciona como reclutadora.'
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Rykard es el rebelde que se convierte en lo que combate: para destruir al Orden Dorado, se entrega a una entidad pre-orden y termina siendo más monstruoso que cualquier sistema. Su tragedia es que no escapa del totalitarismo cósmico — solo lo cambia por uno más antiguo. Su tridente "Devorador de Dioses" promete justicia universal y entrega solo digestión.'
      )
    ],
    confirmed: [
      'Rykard es hijo de Rennala y Radagon',
      'Habitaba el Volcano Manor como centro político alternativo',
      'Permitió que una serpiente-dios primordial lo devorase',
      'Tanith devora su cadáver tras la batalla'
    ],
    inferred: [
      'Su blasfemia es respuesta filosófica a la decepción del Orden Dorado',
      'La serpiente-dios precede al Orden y posiblemente al Crisol',
      'Su transformación lo convierte en lo opuesto pero equivalente del Orden: otro régimen totalitario'
    ],
    ambiguous: [
      'Si Rykard conserva su voluntad humana o es marioneta de la serpiente',
      'Cuánto sabe Tanith sobre la naturaleza real de la entidad',
      'Si la serpiente es un dios exterior o algo del cosmos primordial'
    ],
    beneficiaries: 'La serpiente-dios obtiene un huésped y una corte. Tanith obtiene un dios al que adorar literalmente con la boca.',
    victims: 'Los nobles seducidos por la causa que terminan asesinados o devorados. Rykard mismo, que ya no es solo Rykard.',
    relatedCharacters: ['rennala', 'radagon', 'ranni', 'radahn', 'tanith', 'rya', 'patches'],
    relatedFactions: ['volcano-manor', 'dragones-antiguos'],
    relatedRegions: ['mt-gelmir'],
    relatedConcepts: ['great-rune', 'crucible'],
    relatedTimelineEvents: ['demidioses-fractura', 'la-fractura'],
  },

  /* ══════════════════════════════ MALENIA ══════════════════════════════ */
  malenia: {
    slug: 'malenia',
    subtitle: 'La Espada de Miquella · Hoja de Podredumbre · La invicta que perdió',
    summary:
      'Hija Empyrean de Marika y Radagon, gemela de Miquella. Nació con la maldición de la podredumbre escarlata. Su honor marcial la hizo invicta — pero cada victoria la consumía un poco más. Su duelo con Radahn liberó la primera Floración Escarlata.',
    deepLore: [
      h(2, 'La gemela maldita', 'gemela'),
      p(
        'Malenia y ',
        link('Miquella', 'character', 'miquella'),
        ' nacieron juntos como Empyreans, hijos de ',
        link('Marika', 'character', 'marika'),
        ' y ',
        link('Radagon', 'character', 'radagon'),
        '. Cada uno cargaba una maldición: Miquella, eterno niño que no podía crecer; Malenia, infectada desde el nacimiento por la ',
        link('Podredumbre Escarlata', 'concept', 'scarlet-rot'),
        ' — manifestación de un ',
        link('dios exterior', 'concept', 'dioses-exteriores'),
        ' del decaimiento.'
      ),
      h(2, 'La Espada hermana', 'espada'),
      p(
        'Malenia se erigió como Espada de Miquella. Mientras él intentaba curar todos los males del mundo desde su jardín del ',
        link('Haligtree', 'region', 'haligtree'),
        ', ella combatía sus enemigos. Lideró a los ',
        link('Caballeros Cleanrot', 'faction', 'cleanrot-knights'),
        ' — guerreros que voluntariamente se infectaban con podredumbre para combatir junto a su señora.'
      ),
      h(2, 'El duelo con Radahn', 'duelo-radahn'),
      p(
        'Su rival favorito era ',
        link('Radahn', 'character', 'radahn'),
        ', el otro guerrero invicto de las Tierras Intermedias. El duelo entre ambos en ',
        link('Caelid', 'region', 'caelid'),
        ' fue el más legendario de las Tierras Intermedias. Cuando vio que no podía vencerlo en combate marcial, Malenia desató su Floración Escarlata — la primera floración real de la podredumbre, que arrasó Caelid entero. Ganó técnicamente: dejó a Radahn como una bestia. Pero perdió: la podredumbre la consumió a ella misma, dejándola tullida.'
      ),
      q(
        'Soy Malenia. Espada de Miquella. Y nunca he conocido la derrota.',
        'Malenia, antes del duelo'
      ),
      h(2, 'El secuestro de Miquella', 'secuestro'),
      p(
        'Mientras Malenia se recuperaba en el Haligtree, ',
        link('Mohg', 'character', 'mohg'),
        ' secuestró a Miquella. Cuando el Tarnished la encuentra, ella ya está incompleta: piernas perdidas, ojo dorado borrado, cuerpo apenas funcional, esperando a su hermano que nunca volverá despierto. Cada vez que florece su podredumbre durante la batalla es porque no le queda otra forma de pelear.'
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Malenia es la cumbre marcial de las Tierras Intermedias y simultáneamente su mayor víctima. Su honor le impide rendirse, pero rendirse sería piadoso. Cada victoria es una derrota interna; cada Floración es un grito. Su lealtad a Miquella no se basa en jerarquía: se basa en que fueron los únicos dos seres del cosmos que entendieron mutuamente la maldición de existir en cuerpos rotos.'
      )
    ],
    confirmed: [
      'Malenia es hija Empyrean de Marika y Radagon, gemela de Miquella',
      'Nació infectada por la Podredumbre Escarlata',
      'Lidera a los Caballeros Cleanrot al servicio de Miquella',
      'El duelo con Radahn liberó la primera Floración Escarlata',
      'Está incompleta físicamente tras el duelo y aguardando a Miquella'
    ],
    inferred: [
      'La podredumbre es manifestación de un dios exterior pegado a su alma',
      'Su honor marcial es genuino — la Floración fue acto de desesperación, no estrategia',
      'Su lealtad a Miquella es el único vínculo emocional que la sostiene'
    ],
    ambiguous: [
      'Si la podredumbre es maldición o el coste de su naturaleza Empyrean',
      'Si conserva esperanza de que Miquella regrese',
      'Si su tercera Floración (la del jefe) es voluntaria o reflejo del cuerpo'
    ],
    beneficiaries: 'Miquella, defendido durante años por su espada. La Podredumbre como dios exterior, alimentada por sus victorias.',
    victims: 'Caelid arrasada. Radahn arruinado. Los Cleanrot Knights condenados a la podredumbre. Malenia misma, prisionera del cuerpo que el cosmos le dio.',
    relatedCharacters: ['miquella', 'marika', 'radagon', 'radahn', 'mohg', 'millicent', 'gowry'],
    relatedFactions: ['cleanrot-knights', 'kindred-of-rot' ],
    relatedRegions: ['haligtree', 'consecrated-snowfield', 'caelid'],
    relatedConcepts: ['scarlet-rot', 'empyrean', 'unalloyed-gold', 'dioses-exteriores'],
    relatedTimelineEvents: ['miquella-malenia', 'demidioses-fractura'],
  },

  /* ══════════════════════════════ MIQUELLA ══════════════════════════════ */
  miquella: {
    slug: 'miquella',
    subtitle: 'El Más Compasivo · Eterno niño · Soñador del cosmos sin Voluntad Mayor',
    summary:
      'Hijo Empyrean gemelo de Malenia. Maldecido a no poder crecer, dedicó su existencia a aliviar a los excluidos del Orden Dorado. Construyó el Haligtree como refugio de albinaurics y misbegotten. Fue secuestrado por Mohg durante su sueño curativo.',
    deepLore: [
      h(2, 'El refugio dorado', 'refugio'),
      p(
        'Miquella no podía crecer físicamente — una de las maldiciones de su línea Empyrean. Pero su mente y su poder eran enormes. Construyó el ',
        link('Haligtree', 'region', 'haligtree'),
        ' como árbol alternativo al Árbol Áureo, refugio de quienes el ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' rechazaba: ',
        link('Albinaurics', 'faction', 'albinauricos'),
        ', ',
        link('Misbegotten', 'faction', 'misbegotten'),
        ', y todo ser malformado que necesitara santuario.'
      ),
      h(2, 'El proyecto del Oro Sin Aleación', 'oro-sin-aleacion'),
      p(
        'Miquella desarrolló el ',
        link('Oro sin Aleación', 'concept', 'unalloyed-gold'),
        ': una forma de oro que repele la influencia de los ',
        link('dioses exteriores', 'concept', 'dioses-exteriores'),
        '. Era su intento más ambicioso: construir un cosmos que pudiera funcionar ',
        { type: 'em' as const, text: 'sin' },
        ' la Voluntad Mayor, sin la Madre Informe, sin la Podredumbre. Un mundo curado de toda divinidad parásita. Su hermana ',
        link('Malenia', 'character', 'malenia'),
        ' era el primer y más doloroso paciente del proyecto.'
      ),
      h(2, 'El sueño curativo', 'sueno'),
      p(
        'Sabiendo que su crecimiento era imposible bajo el cosmos actual, Miquella se durmió en un capullo dorado en el Haligtree, esperando que el cosmos cambiase y, al despertar, pudiera crecer. Durante este sueño fue secuestrado por ',
        link('Mohg', 'character', 'mohg'),
        ', que lo llevó a ',
        link('Mohgwyn', 'region', 'mohgwyn'),
        ' para usarlo como consorte divino.'
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Miquella es la pregunta de si la compasión sirve cuando el cosmos está estructuralmente diseñado para excluir. Su proyecto de Oro Sin Aleación es la única filosofía positiva de las Tierras Intermedias — no destruir el sistema, no reformarlo, sino curarlo de los dioses parásitos. Que su sueño fuera interrumpido por el secuestro es la prueba de que ningún proyecto pacífico sobrevive en este cosmos sin protección armada (que era precisamente el rol de Malenia, ausente cuando ocurrió el rapto).'
      )
    ],
    confirmed: [
      'Miquella es hijo Empyrean de Marika y Radagon, gemelo de Malenia',
      'No puede crecer físicamente por una maldición de su línea',
      'Creó el Haligtree como refugio para los excluidos del Orden',
      'Desarrolló el Oro Sin Aleación contra los dioses exteriores',
      'Fue secuestrado por Mohg durante su sueño en el capullo dorado'
    ],
    inferred: [
      'Su proyecto era el más radical de las Tierras Intermedias: cosmos sin dioses parásitos',
      'Iba a despertar como dios completo, fuera del control de la Voluntad Mayor',
      'Su sueño fue posible porque confiaba en Malenia como su escudo'
    ],
    ambiguous: [
      'Si Miquella conserva alguna conciencia durante el secuestro',
      'Si el rapto consumó alguna forma de transformación divina',
      'Si su despertar habría sido benigno o autoritario en su propio modo'
    ],
    beneficiaries: 'Albinaurics y Misbegotten, refugiados bajo el Haligtree. Cualquiera infectado por dios exterior, candidato a su cura.',
    victims: 'Su gemela Malenia, dejada incompleta y vigilando un capullo vacío. Los habitantes del Haligtree, eventualmente arrasados por Albinauric refugees corruptos.',
    relatedCharacters: ['malenia', 'marika', 'radagon', 'mohg', 'millicent'],
    relatedFactions: ['cleanrot-knights', 'albinauricos', 'misbegotten'],
    relatedRegions: ['haligtree', 'consecrated-snowfield', 'mohgwyn'],
    relatedConcepts: ['unalloyed-gold', 'empyrean', 'dioses-exteriores'],
    relatedTimelineEvents: ['miquella-malenia', 'demidioses-fractura'],
  },

  /* ══════════════════════════════ MALIKETH ══════════════════════════════ */
  maliketh: {
    slug: 'maliketh',
    subtitle: 'La Hoja Negra · Bestia ligada en sombra a Marika · Cárcel viva de la Muerte',
    summary:
      'Hombre-Bestia hermano leal de Marika, ligado a ella como su Bestia Sombra. Aceptó el rol más doloroso de toda la era: contener la Muerte Predestinada dentro de su propio cuerpo, para que la era dorada pudiera existir.',
    deepLore: [
      h(2, 'El hermano sombra', 'hermano'),
      p(
        'Maliketh es ',
        link('Hombre-Bestia', 'faction', 'hombres-bestia'),
        ' — una raza primigenia, antecesora del orden mismo. Su vínculo con ',
        link('Marika', 'character', 'marika'),
        ' es el de una ',
        link('Bestia ligada en sombra', 'concept', 'shadow-bound-beast'),
        ', un guardián personal cosmológicamente entrelazado con un Empyrean. Donde Marika va, Maliketh sigue. Lo que Marika necesita, Maliketh ejecuta.'
      ),
      h(2, 'El sello de la Muerte', 'sello'),
      p(
        'El acto fundacional del Orden Dorado fue sellar la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        '. Marika no pudo destruirla — solo encerrarla. La encerró dentro de su propio hermano: la Runa de la Muerte fue cosida al alma de Maliketh. Desde entonces, su cuerpo ',
        { type: 'em' as const, text: 'es' },
        ' la prisión de la verdadera muerte. Su servicio es indistinguible de su tortura.'
      ),
      h(2, 'El robo', 'robo'),
      p(
        'Antes de la Noche de los Cuchillos Negros, ',
        link('Ranni', 'character', 'ranni'),
        ' robó una mecha de la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ' del cuerpo de Maliketh. Esta mecha fue lo que permitió forjar las hojas de los ',
        link('Cuchillos Negros', 'faction', 'cuchillos-negros'),
        ', únicas armas capaces de matar a un demidiós. Maliketh quedó marcado por ese robo: una herida cosmológica abierta.'
      ),
      h(2, 'La Bestia de la Muerte Negra', 'bestia-final'),
      p(
        'Cuando el Tarnished lo combate, lo encuentra como Bestia de la Muerte Negra: forma final liberada por desesperación. Está protegiendo, al fin, no a Marika ni al Orden, sino a la Runa que lleva dentro. Su derrota libera la Muerte Predestinada de vuelta al cosmos — el mismo evento que cierra la herida de Godwyn en la ',
        link('Era del Crepúsculo', 'ending', 'duskborn'),
        '.'
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Maliketh es la fidelidad llevada al extremo del autosacrificio. Aceptó cargar la cosa más insoportable del cosmos — la muerte misma — para que su hermana pudiera reinar. Su lealtad nunca se cuestiona, ni se pone en duda. Es por eso que es difícil sentir que él es feliz, incluso cuando cumple. Su existencia es la obediencia hecha cárcel, y la única liberación posible es ser derrotado por alguien que pueda llevar la carga adelante.'
      )
    ],
    confirmed: [
      'Maliketh es Hombre-Bestia, hermano-sombra de Marika',
      'Lleva la Runa de la Muerte cosida en su cuerpo',
      'Una mecha de la Runa fue robada por Ranni para fabricar los Cuchillos Negros',
      'Su derrota libera la Muerte Predestinada al cosmos'
    ],
    inferred: [
      'Su servicio es indistinguible de su tortura cosmológica',
      'Su transformación en Bestia de la Muerte Negra es desesperación, no orgullo',
      'Su lealtad no se cuestiona — es estructural, no elegida'
    ],
    ambiguous: [
      'Si Maliketh experimenta algo parecido a la libertad o solo al deber',
      'Si conoció el robo de Ranni en su momento o solo al final',
      'Cuál es la relación entre su raza y los Hombres-Bestia primordiales del Crisol'
    ],
    beneficiaries: 'Marika, durante toda la era dorada. El Orden Dorado, sostenido por su sacrificio. La Voluntad Mayor.',
    victims: 'Maliketh mismo, prisión viva. Godwyn, asesinado con un fragmento de su carga. Aquellos que Viven en la Muerte, criaturas hijas de la fuga parcial.',
    relatedCharacters: ['marika', 'godwyn', 'ranni', 'gloam-eyed-queen'],
    relatedFactions: ['hombres-bestia', 'cuchillos-negros'],
    relatedRegions: ['farum-azula'],
    relatedConcepts: ['destined-death', 'rune-of-death', 'shadow-bound-beast', 'black-flame', 'deathroot'],
    relatedTimelineEvents: ['muerte-predestinada', 'ranni-noche-cuchillos'],
    relatedEndings: ['duskborn'],
  },

  /* ══════════════════════════════ MELINA ══════════════════════════════ */
  melina: {
    slug: 'melina',
    subtitle: 'La de Ojo Cerrado · Doncella sin tumba · Posible hija de Marika',
    summary:
      'Compañera misteriosa del Tarnished. Doncella espectral, posiblemente hija no nacida de Marika, posiblemente la Doncella Quemada destinada a encender el Árbol Áureo. Abandona al Tarnished solo si este abraza la Llama Frenética.',
    deepLore: [
      h(2, 'La acompañante', 'acompanante'),
      p(
        'Melina aparece tempranamente en el viaje del ',
        link('Tarnished', 'concept', 'tarnished'),
        ' como guía sin pasado. Le ofrece convertir las runas en niveles, le revela los puntos de gracia, le lleva al lugar donde despierta el caballo Torrent. Su origen es deliberadamente vago: nació "junto al Árbol Áureo", de "una madre que no existe", "su rol fue ofrecido pero está incompleto".'
      ),
      h(2, 'Posibles identidades', 'identidades'),
      p(
        'Las teorías son varias y mutuamente excluyentes. La más fuerte: Melina es una hija de ',
        link('Marika', 'character', 'marika'),
        ' que nunca llegó a nacer, una identidad incompleta. Su ojo cerrado puede ser metáfora de su naturaleza incompleta — falta una parte de ella en el cosmos. Otra: es la Doncella Quemada original, destinada a sacrificarse para encender el ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ' tras la fractura.'
      ),
      h(2, 'La quema', 'quema'),
      p(
        'Si el Tarnished sigue la ruta clásica, llega un punto en que el Árbol Áureo debe ser quemado para dejar pasar al trono. Melina se ofrece voluntariamente para encender la llama del sacrificio. Pero si el Tarnished abraza la ',
        link('Llama Frenética', 'concept', 'frenzied-flame'),
        ', Melina lo abandona — y, en ese final, jura venganza fría desde la oscuridad.'
      ),
      q(
        'Te concedo este don: el de la sangre, lágrimas y muerte. El Árbol Áureo me espera. Que el destino de los dioses sea mi destino también.',
        'Melina antes de la inmolación'
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Melina es la única figura de las Tierras Intermedias que parece amar al Tarnished sin agenda — al menos hasta el último momento, donde su identidad cosmológica se manifiesta. Su sacrificio es el único acto enteramente generoso del juego. Su abandono ante la Llama Frenética demuestra que incluso lo más amoroso del cosmos prefiere desaparecer antes que tolerar el nihilismo total.'
      )
    ],
    confirmed: [
      'Melina aparece junto al Árbol Áureo, sin recuerdos de madre humana',
      'Permite al Tarnished convertir runas en niveles',
      'Se inmola para encender el Árbol Áureo en la ruta clásica',
      'Abandona al Tarnished si este acepta la Llama Frenética'
    ],
    inferred: [
      'Es probablemente una hija no nacida de Marika',
      'Su ojo cerrado representa una incompletitud cosmológica',
      'Su afecto por el Tarnished es genuino y no manipulador'
    ],
    ambiguous: [
      'Si es la Doncella Quemada original o un eco posterior',
      'Si su sacrificio es destino o elección',
      'Si reaparece como antagonista al final de la ruta de la Llama Frenética'
    ],
    beneficiaries: 'El Tarnished, sostenido en su viaje. El Orden Dorado, gracias a su sacrificio en la quema del árbol.',
    victims: 'Melina misma, autoinmolada. El cosmos del final de la Llama Frenética, donde su venganza se prepara.',
    relatedCharacters: ['marika', 'hyetta'],
    relatedRegions: ['leyndell', 'mountaintops'],
    relatedConcepts: ['erdtree', 'tarnished', 'grace', 'frenzied-flame'],
    relatedTimelineEvents: ['viaje-mancillado', 'finales'],
    relatedEndings: ['fracture', 'frenzied-flame'],
  },

  /* ══════════════════════════════ GLOAM-EYED QUEEN ══════════════════════════════ */
  'gloam-eyed-queen': {
    slug: 'gloam-eyed-queen',
    subtitle: 'Reina de la Llama Negra · Heresarca anterior al Orden · Madre olvidada de los Pieles de Dios',
    summary:
      'Empyrean de una era anterior al Orden Dorado, dominadora de la Llama Negra y patrona de los Pieles de Dios. Fue derrotada por Maliketh — derrota que abrió el camino para que Marika sellara la Muerte Predestinada e iniciara la era dorada.',
    deepLore: [
      h(2, 'La era anterior', 'era-anterior'),
      p(
        'Antes del Orden Dorado existió otra era cósmica, dominada por una ',
        link('Empyrean', 'concept', 'empyrean'),
        ' de ojos crepusculares. Su voluntad otorgó a los ',
        link('Pieles de Dios', 'faction', 'pieles-de-dios'),
        ' el dominio de la ',
        link('Llama Negra', 'concept', 'black-flame'),
        ', un fuego que podía consumir incluso a los dioses.'
      ),
      h(2, 'La derrota', 'derrota'),
      p(
        'Cuando ',
        link('Marika', 'character', 'marika'),
        ' fue elevada por la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ', la primera tarea fue desplazar a la antigua reina. ',
        link('Maliketh', 'character', 'maliketh'),
        ' ejecutó la derrota — usando el poder de la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ', irónicamente la misma fuerza que después fue sellada en él. Tras la caída de la Reina, los Pieles de Dios quedaron como secta perseguida pero no extinta.'
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'La Gloam-Eyed Queen es la cara olvidada del cosmos. Cada era nueva borra la anterior, pero los rituales y la llama persisten. Su existencia confirma que el Orden Dorado no es eterno — solo es la era ',
        { type: 'em' as const, text: 'actual' },
        '. El próximo final, sea cual sea, hará a Marika tan olvidada como ahora lo está la Reina del Crepúsculo.'
      )
    ],
    confirmed: [
      'Gloam-Eyed Queen fue Empyrean de una era previa al Orden Dorado',
      'Otorgó la Llama Negra a los Pieles de Dios',
      'Fue derrotada por Maliketh',
      'Su derrota permitió la implantación del Orden Dorado'
    ],
    inferred: [
      'Es prueba de que la cosmología tiene sucesión de eras, no estructura eterna',
      'Los Pieles de Dios actuales conservan rituales en su nombre',
      'La Llama Negra que portó es opuesta filosóficamente al fuego dorado'
    ],
    ambiguous: [
      'Su nombre verdadero, su forma exacta, y su origen',
      'Si la Llama Negra precede a ella o fue creación suya',
      'Si su derrota fue decisiva o si su presencia persiste de modos sutiles'
    ],
    beneficiaries: 'El Orden Dorado, instalado tras su caída.',
    victims: 'Los Pieles de Dios, perseguidos pero supervivientes. La memoria misma de la era previa, borrada del cosmos oficial.',
    relatedCharacters: ['maliketh', 'marika'],
    relatedFactions: ['pieles-de-dios'],
    relatedConcepts: ['empyrean', 'black-flame', 'destined-death'],
    relatedTimelineEvents: ['era-antigua', 'muerte-predestinada'],
  },

  /* ══════════════════════════════ Otros principales (más concisos) ══════════════════════════════ */

  godrick: {
    slug: 'godrick',
    subtitle: 'El Injertado · Demidiós marginal aferrado al linaje',
    summary: 'Demidiós menor, primo lejano de los demás. Conserva su Gran Runa injertando partes de otros seres a su cuerpo, intentando compensar la sangre debilitada de su línea. Es el más débil — y el más patético — de los demidioses.',
    deepLore: [
      h(2, 'El linaje débil', 'linaje'),
      p(
        'Godrick es bisnieto de ',
        link('Godfrey', 'character', 'godfrey'),
        ' — descendiente lateral, no hijo directo. Su sangre Empyrean está diluida varias generaciones abajo, lo que le da menos poder natural que sus parientes. Tras la ',
        link('fractura', 'timeline', 'la-fractura'),
        ', mantiene su Gran Runa solo a base de injertos: brazos cortados a soldados caídos, manos múltiples cosidas en su cuerpo, animales fusionados en sus extremidades.'
      ),
      h(2, 'El reino de Stormveil', 'stormveil'),
      p(
        'Reina sobre ',
        link('Stormveil', 'region', 'stormveil'),
        ', el castillo originalmente de su antepasado Godfrey. Sus súbditos lo desprecian; sus enemigos lo subestiman. Su tragedia es la patética: aferrarse al linaje precisamente porque sabe que él, personalmente, no tiene mérito propio.'
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Godrick es la decadencia aristocrática llevada al absurdo cosmológico. Es lo que el Orden Dorado deja cuando los dioses se han ido: nobles secundarios injertando piezas para mantener la apariencia de poder.'
      )
    ],
    confirmed: [
      'Godrick es descendiente lateral de Godfrey',
      'Mantiene su Gran Runa mediante injertos rituales',
      'Reina en Stormveil, el castillo ancestral de Godfrey'
    ],
    inferred: [
      'Su debilidad nominal lo vuelve el primer demidiós abordable para el Tarnished',
      'Sus injertos son tanto técnica como compensación psicológica',
      'Nepheli Loux, posible heredera de Godfrey, podría legítimamente desplazarlo'
    ],
    ambiguous: [
      'Si su linaje incluye descendencia directa de Godfrey o solo lateral',
      'Cuántos siglos lleva injertándose'
    ],
    relatedCharacters: ['godfrey', 'nepheli-loux', 'kenneth-haight'],
    relatedRegions: ['stormveil', 'limgrave'],
    relatedConcepts: ['great-rune'],
    relatedFactions: ['orden-dorado'],
  },

  fortissax: {
    slug: 'fortissax',
    subtitle: 'Antiguo Dragón aliado de Godwyn · Guardián onírico del demidiós muerto · Pacto que sobrevive a la muerte',
    summary:
      'Fortissax fue Antiguo Dragón — uno de los últimos vestigios de la era pre-Orden Dorado. Godwyn no lo derrotó en combate: lo persuadió. Hicieron pacto de fraternidad eterna simbolizado por el rayo dragónico que Godwyn aprendió a empuñar. Tras la Noche de los Cuchillos Negros y la muerte parcial de Godwyn, Fortissax quedó atrapado dentro del sueño moribundo del demidiós, peleando eternamente contra la corrupción que invade el cuerpo de su amigo. Combatirlo en su sueño es liberarlo del bucle.',
    deepLore: [
      h(2, 'Origen: heredero del régimen dragónico', 'origen'),
      p(
        'Fortissax pertenece al linaje de los ',
        link('Antiguos Dragones', 'faction', 'dragones-antiguos'),
        ' — el régimen cosmológico anterior al Orden Dorado bajo el liderazgo de ',
        link('Placidusax', 'character', 'placidusax'),
        '. Cuando ese régimen cayó por abandono divino, los dragones se dispersaron. Fortissax fue uno de los más capaces — sobrevivió la transición, se mantuvo activo en regiones específicas, conservó capacidad cosmológica plena. Su rayo dragónico es expresión material de la autoridad pre-Orden: fuego cósmico que precede al fuego dorado del Árbol Áureo.'
      ),
      h(2, 'El pacto con Godwyn', 'pacto'),
      p(
        link('Godwyn', 'character', 'godwyn'),
        ' el de Ojos Dorados — primogénito de Marika y Godfrey, demidiós ejemplar — no derrotó a Fortissax en combate convencional. Lo persuadió. La operación fue diplomacia cosmológica: Godwyn argumentó que el régimen dorado no buscaba exterminar a los dragones supervivientes sino integrarlos como aliados de la nueva era. Fortissax aceptó. Hicieron pacto de fraternidad eterna que produjo dos consecuencias: 1) Godwyn aprendió a empuñar el rayo dragónico, fusionando autoridad pre-Orden con autoridad dorada. 2) Fortissax adoptó vínculo cosmológico personal con Godwyn — su existencia se entrelazó con la del demidiós aliado.'
      ),
      h(2, 'La trampa cosmológica', 'trampa'),
      p(
        'El pacto tuvo costo no anticipado. Cuando ',
        link('Godwyn', 'character', 'godwyn'),
        ' fue asesinado parcialmente durante la ',
        link('Noche de los Cuchillos Negros', 'timeline', 'ranni-noche-cuchillos'),
        ' (alma muerta, cuerpo sigue funcionando por sello de la Muerte Predestinada), el vínculo cosmológico personal se manifestó de manera trágica. Fortissax intentó proteger el alma agonizante de su amigo — entró en el sueño moribundo de Godwyn para defenderlo. Pero el alma de Godwyn ya estaba muriendo, y el sueño moribundo se transformó en bucle eterno. Fortissax quedó atrapado dentro: peleando, en sueños, contra la corrupción que invade el cuerpo de su amigo, sin poder salir, sin poder ganar.'
      ),
      h(2, 'Deeproot Depths: el campo de batalla onírico', 'deeproot'),
      p(
        link('Deeproot Depths', 'region', 'deeproot-depths'),
        ' bajo el Árbol Áureo es el lugar físico donde el sueño moribundo persiste. Fortissax aparece allí en su forma onírica — todavía dragón, todavía empuñando rayo cosmológico, pero ya distorsionado por eras de batalla sin victoria. La corrupción de Godwyn ha avanzado lentamente; la lealtad de Fortissax no ha cedido pero su capacidad de protección ha disminuido. El Tarnished que llega lo encuentra en la fase final de la trampa: cansado, parcialmente corrompido él mismo, todavía peleando pero sin esperanza de éxito.'
      ),
      h(2, 'La liberación piadosa', 'liberacion'),
      p(
        'Combatir a Fortissax en su sueño es paradójicamente acto piadoso. Su derrota lo libera del bucle eterno. La operación es simultáneamente combate y liberación — el Tarnished que lo derrota en Deeproot Depths le da el cierre que él no podía darse a sí mismo. Tras la derrota, el sueño moribundo se intensifica brevemente y luego se debilita. Es prerrequisito específico para la quest de ',
        link('Fia', 'character', 'fia'),
        ' — sin la liberación de Fortissax, la corrupción de Godwyn no puede procesarse plenamente, y la Era del Crepúsculo no puede consagrarse correctamente.'
      ),
      h(2, 'Significado simbólico', 'tematica'),
      p(
        'Fortissax es el monumento del juego a la lealtad cósmica más allá de la muerte. Su pesadilla es la negación de un amigo a aceptar que el otro ya no puede ser salvado. Cada bucle de combate onírico es expresión exacta de la condición: alguien que ama a otro lo suficiente como para no aceptar su muerte real, condenándose a sí mismo en el proceso. La pregunta filosófica: ¿cuándo es correcto soltar a quien amamos? Fortissax responde nunca. Su trampa es prueba de que la lealtad absoluta puede ser tan destructiva como la traición. Liberarlo es acto de piedad cosmológica — y el Tarnished que lo hace está completando la operación que el propio Fortissax no podía autorizar para sí mismo.'
      )
    ],
    confirmed: [
      'Fortissax fue Antiguo Dragón aliado a Godwyn por pacto de fraternidad',
      'Godwyn lo persuadió, no derrotó — la alianza fue diplomática',
      'Godwyn aprendió a empuñar rayo dragónico tras el pacto',
      'Tras la Noche de los Cuchillos Negros, Fortissax entró al sueño moribundo de Godwyn para protegerlo',
      'Quedó atrapado en bucle eterno en Deeproot Depths',
      'Su derrota es prerrequisito para la consagración correcta de la Era del Crepúsculo',
    ],
    inferred: [
      'El pacto produjo vínculo cosmológico personal entrelazando sus existencias',
      'La corrupción de Godwyn ha avanzado lentamente durante eras',
      'Fortissax mismo está parcialmente corrompido por el sueño prolongado',
      'Es el último Antiguo Dragón con capacidad cosmológica plena en regiones accesibles',
    ],
    theories: [
      'Existieron otros pactos similares entre dragones y demidióses no documentados',
      'Si la Era del Crepúsculo se consagra, el alma de Fortissax podría retornar restaurada',
      'Su rayo dragónico contiene fragmento del dios externo desaparecido del régimen dragónico',
      'Conoce el secreto de la desaparición del dios externo de Placidusax',
    ],
    ambiguous: [
      'Si Fortissax mantiene consciencia plena dentro del bucle o solo reacciona instintivamente',
      'Cuándo exactamente entró al sueño moribundo de Godwyn',
      'Si su lealtad a Godwyn era afectiva genuina o estructural al pacto',
      'Si podría haber escapado del bucle si lo hubiera intentado lo suficiente',
    ],
    relatedCharacters: ['godwyn', 'placidusax', 'fia', 'maliketh'],
    relatedRegions: ['deeproot-depths', 'farum-azula'],
    relatedFactions: ['dragones-antiguos'],
    relatedConcepts: ['those-who-live-in-death', 'destined-death', 'rune-of-death', 'deathroot'],
    relatedTimelineEvents: ['ranni-noche-cuchillos', 'fortissax-godwyn'],
    relatedEndings: ['duskborn'],
  },

  placidusax: {
    slug: 'placidusax',
    subtitle: 'Antiguo Lord Elden de los Dragones · Dios olvidado · Soberano sin liturgia',
    summary:
      'Placidusax fue Señor Elden de la era previa al Orden Dorado — el régimen cosmológico cuando los Antiguos Dragones reinaban con autoridad de un dios externo no nombrado. Su dios desapareció sin batalla, sin sucesor, sin explicación. Placidusax permanece en Farum Azula suspendido en estasis fuera del tiempo, esperando un retorno cosmológico que nunca llegará. Es opcional pelear con él — es el dios que el juego permite olvidar, igual que el cosmos lo olvidó.',
    deepLore: [
      h(2, 'Origen: Lord Elden del régimen dragónico', 'origen'),
      p(
        'Placidusax fue Señor Elden de la era cosmológica anterior al Orden Dorado. Datación exacta perdida — el régimen dragónico precede al ',
        link('Crisol', 'concept', 'crucible'),
        ' como autoridad dominante en algunos relatos, lo coexiste como capa paralela en otros. Su forma física es excepcional: dragón primordial de cinco cabezas (la mayoría de dragones documentados tienen una o tres cabezas), tamaño cosmológico, capacidad de invocación de cuerpos celestes durante combate. Su capital era ',
        link('Farum Azula', 'region', 'farum-azula'),
        ', ciudad-fortaleza dragónica que ahora flota suspendida en una tormenta atemporal.'
      ),
      h(2, 'El dios externo desaparecido', 'dios'),
      p(
        'La autoridad de Placidusax procedía de un dios externo cuya identidad nunca se enuncia en los textos del juego base. Cuando ese dios desapareció — sin batalla, sin testigo, sin sucesor designado, sin explicación — el régimen dragónico perdió eje cosmológico. La operación fue gradual pero irreversible. Algunos dragones se dispersaron por las Tierras Intermedias (',
        link('Fortissax', 'character', 'fortissax'),
        ', Lansseax, Greyoll). Otros pactaron con humanos del régimen naciente. Los más antiguos siguieron durmiendo. Placidusax mismo se retiró a una cámara escondida en Farum Azula y entró en estasis. La vacante cosmológica fue eventualmente llenada por la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' al elegir a ',
        link('Marika', 'character', 'marika'),
        ' como nueva vasija.'
      ),
      h(2, 'La cámara escondida', 'camara'),
      p(
        'Habita en una cámara oculta de Farum Azula suspendida en estasis ritual. La operación es cosmológicamente compleja: el tiempo no fluye normalmente en su cámara — Placidusax existe en un punto temporal específico que no avanza. Su estasis no es inconsciencia: es espera consciente. Cuando el Tarnished entra a la cámara, Placidusax se anima brevemente para combate ritual. La pelea es opcional — el juego no la requiere para ningún final. Es el dios que el juego ',
        em('permite'),
        ' olvidar, igual que el cosmos lo olvidó.'
      ),
      h(2, 'El combate como ofrenda', 'combate'),
      p(
        'Si el Tarnished elige combatir a Placidusax, la pelea es una de las más exigentes del juego. Sus cinco cabezas operan independientemente; sus ataques invocan cuerpos celestes (cometas, tormentas estelares, fragmentos de meteoros); su capacidad de teletransportación es cosmológicamente excepcional. La derrota produce su Recuerdo — pero no afecta cosmológicamente a las Tierras Intermedias. La operación es pura ofrenda: el Tarnished demuestra capacidad cosmológica suficiente para vencer al dios olvidado, y eso es todo. No hay Gran Runa, no hay coronación, no hay reforma del cosmos. Solo el reconocimiento mutuo entre el último Lord Elden anterior y el potencial Lord Elden próximo.'
      ),
      h(2, 'Significado simbólico', 'tematica'),
      p(
        'Placidusax es el monumento del juego al dios sin pueblo, sin templo, sin ritual: existencia sin función. Su tragedia es estructural — no fue derrotado militarmente, no fue traicionado por sus súbditos, no falló éticamente. Su dios externo simplemente ',
        em('se fue'),
        '. Sin liturgia, su autoridad cosmológica perdió relevancia. La pregunta filosófica más oscura del juego: ¿qué pasa con un dios cuando su pueblo lo olvida? Placidusax responde: nada y todo. Sigue existiendo cosmológicamente, conserva capacidad operativa, pero opera fuera del tiempo del cosmos que lo olvidó. Su cámara escondida es metáfora exacta de la condición: presente pero invisible, capaz pero irrelevante, esperando un retorno que el cosmos descartó. La existencia continua de las Tierras Intermedias bajo la Voluntad Mayor es admisión silenciosa de que un régimen cosmológico puede ser plenamente sustituido sin que los antiguos dioses mueran necesariamente — solo se vuelven olvidables.'
      )
    ],
    confirmed: [
      'Placidusax fue Señor Elden del régimen cosmológico anterior al Orden Dorado',
      'Es dragón primordial de cinco cabezas con capacidad cosmológica excepcional',
      'Su capital fue Farum Azula, hoy suspendida en tormenta atemporal',
      'Su dios externo desapareció sin batalla ni sucesor',
      'Habita en cámara escondida de Farum Azula suspendido en estasis ritual',
      'El combate con él es opcional — no afecta cosmológicamente a las Tierras Intermedias',
    ],
    inferred: [
      'El régimen dragónico precede al Crisol como cosmología dominante',
      'La caída fue por abandono divino, no por derrota militar',
      'La Voluntad Mayor llenó la vacante cosmológica que él dejó',
      'Su estasis es espera consciente, no inconsciencia',
    ],
    theories: [
      'El dios externo desaparecido podría retornar bajo condiciones cosmológicas específicas',
      'Farum Azula está atemporal precisamente porque su régimen aún no ha terminado de caer',
      'Placidusax sabe la identidad del dios desaparecido pero no puede enunciarla',
      'Existieron otros Lords Elden de regímenes pre-Placidusax cuyos nombres se han perdido',
    ],
    ambiguous: [
      'Identidad exacta del dios externo desaparecido',
      'Cuánto tiempo duró el régimen dragónico antes de la caída',
      'Si Placidusax podría despertar plenamente y reclamar el cosmos',
      'Si conoce a Marika personalmente desde antes del régimen actual',
    ],
    relatedCharacters: ['fortissax', 'maliketh', 'marika'],
    relatedRegions: ['farum-azula'],
    relatedFactions: ['dragones-antiguos', 'hombres-bestia'],
    relatedConcepts: ['dioses-exteriores', 'voluntad-mayor', 'crucible'],
    relatedTimelineEvents: ['era-antigua', 'placidusax-elden-lord'],
  },

  millicent: {
    slug: 'millicent',
    subtitle: 'Hija prostética de Malenia · Brote escarlata con consciencia humana · Triunfo de la identidad sobre el enjambre',
    summary:
      'Millicent es brote escarlata de Malenia que desarrolló consciencia humana plena — la única excepción documentada del enjambre Kindred of Rot. Gowry la encontró, le proporcionó un brazo prostético y la guió por motivos cuestionables. Su quest es búsqueda existencial: mantener identidad propia frente a la presión cosmológica de regresar al enjambre escarlata. Su victoria — ser ella misma, no parte del coro — es uno de los pocos triunfos puramente humanos del juego.',
    deepLore: [
      h(2, 'Origen: la excepción de la Floración', 'origen'),
      p(
        'Cuando ',
        link('Malenia', 'character', 'malenia'),
        ' floreció parcialmente durante la Batalla de Aeonia en ',
        link('Caelid', 'region', 'caelid'),
        ', sus brotes escarlatas se dispersaron como semillas. La inmensa mayoría se convirtieron en ',
        link('Kindred of Rot', 'faction', 'kindred-of-rot'),
        ' — criaturas-mosca-podredumbre del enjambre. Millicent fue la única excepción documentada: brote que desarrolló consciencia humana plena. Su existencia es estadísticamente improbable. Su forma humana es estable. Su voluntad es propia.'
      ),
      h(2, 'Gowry: el guía cuestionable', 'gowry'),
      p(
        link('Gowry', 'character', 'gowry'),
        ' la encontró cuando todavía estaba en estado intermedio entre brote y persona. Le proporcionó cuerpo humano funcional, brazo prostético (la podredumbre había consumido el original), nombre, y guía durante la transformación. Su afecto aparente esconde objetivo dudoso: aspira a comprender la podredumbre desde dentro, y Millicent es su laboratorio caminante. Pero su cuidado durante años fue genuino — la mantuvo viva, la enseñó a moverse, le dio estructura emocional. La ambigüedad es estructural: usó a Millicent ',
        em('y'),
        ' la cuidó. Las dos verdades coexisten.'
      ),
      h(2, 'El brazo prostético y la espada', 'prostetico'),
      p(
        'Su brazo prostético es metáfora cosmológica exacta de su condición: tecnología externa que reemplaza lo que la podredumbre consumió. Aprende a luchar con espada — primero por necesidad defensiva, luego por convicción personal. Los Tarnished que la asisten en su quest la acompañan en duelos contra otras hijas escarlatas, monstruos podridos, finalmente sus propias hermanas. Su capacidad marcial crece progresivamente. Para el final de la quest combate al nivel de un caballero veterano — habiendo aprendido en años lo que otros aprenden en eras.'
      ),
      h(2, 'La quest: identidad sobre el enjambre', 'identidad'),
      p(
        'Su quest culmina en el ',
        link('Lago de Podredumbre', 'region', 'lake-of-rot'),
        ' bajo Liurnia, donde las otras hijas escarlatas la convocan ritualmente para fusionarse con ellas. La premisa cosmológica: el enjambre completo aspira a fusión total como Kindred of Rot reconstituidas; cada brote separado es resistencia parcial; todas las hijas convergiendo producirían entidad mayor capaz de rivalizar con la propia Malenia. Millicent puede aceptar la fusión (perdiéndose en lo colectivo) o rechazarla (defendiendo su identidad individual). Si el Tarnished la apoya, ella lucha por mantener su yo. La pelea es contra sus propias hermanas — cada una de las cuales es ella misma en versión no-individuada.'
      ),
      h(2, 'Posibles desenlaces', 'desenlaces'),
      p(
        'Si Millicent vence en el Lago de la Podredumbre con asistencia del Tarnished, viaja eventualmente al ',
        link('Haligtree', 'region', 'haligtree'),
        ' como aliada de Miquella. Pero su podredumbre es congénita — eventualmente la consume. El Tarnished encuentra su cadáver en Elphael; sobre él hay una aguja de ',
        link('Oro sin Aleación', 'concept', 'unalloyed-gold'),
        ' que ella usaba como tratamiento. Su muerte tras lograr identidad propia es trágica pero también dignificada — murió siendo ella misma, no parte del enjambre. La aguja queda como herencia para que el Tarnished la use en momentos cosmológicos clave.'
      ),
      h(2, 'Significado simbólico', 'tematica'),
      p(
        'Millicent es el monumento del juego a la victoria de la identidad sobre la presión cosmológica. La inmensa mayoría de brotes de Malenia se rindieron al enjambre. Ella no. Su existencia es prueba de que la individualidad es posible incluso en condiciones cosmológicamente hostiles — pero requiere coraje, tecnología externa (brazo prostético), guías ambiguos (Gowry), y eventualmente resistencia armada contra versiones de uno mismo. Su victoria es uno de los pocos triunfos puramente humanos del juego en el sentido más estricto: alguien afirmó ser persona contra todo lo que la cosmología decía sobre su naturaleza. Su muerte tras la victoria no la disminuye — la dignifica. Murió siendo ella, no parte del coro.'
      )
    ],
    confirmed: [
      'Millicent es brote escarlata de Malenia con consciencia humana plena',
      'Gowry la encontró y la guió durante la transformación',
      'Su brazo prostético reemplaza lo que la podredumbre consumió',
      'Su quest culmina en el Lago de la Podredumbre rechazando fusión con sus hermanas',
      'Si vence, viaja al Haligtree como aliada de Miquella',
      'Eventualmente muere por su podredumbre congénita en Elphael',
    ],
    inferred: [
      'Su existencia es estadísticamente improbable — la inmensa mayoría de brotes se rindieron al enjambre',
      'Gowry la usó como laboratorio caminante mientras genuinamente la cuidaba',
      'Su capacidad marcial creció progresivamente durante años',
      'Su muerte tras lograr identidad es trágica pero dignificada',
    ],
    theories: [
      'Millicent contiene fragmento específico de la consciencia original de Malenia',
      'Su excepcionalidad fue resultado de intervención de Gowry en momento crítico de la transformación',
      'Si Miquella despertara, podría curar plenamente su podredumbre congénita',
      'Existen otras excepciones similares no documentadas dispersas por las Tierras Intermedias',
    ],
    ambiguous: [
      'Si Millicent recuerda algo de la consciencia original previa a la individuación',
      'Cuándo exactamente Gowry la encontró durante el proceso de transformación',
      'Si su identidad humana es plena o solo aproximación operativa',
      'Si la fusión con las hermanas era reversible si hubiera elegido aceptar',
    ],
    relatedCharacters: ['malenia', 'gowry', 'miquella'],
    relatedFactions: ['kindred-of-rot', 'haligtree'],
    relatedRegions: ['caelid', 'lake-of-rot', 'haligtree', 'elphael', 'aeonia'],
    relatedConcepts: ['scarlet-rot', 'unalloyed-gold', 'dioses-exteriores'],
    relatedTimelineEvents: ['aeonia-bloom'],
  },

  gowry: {
    slug: 'gowry',
    subtitle: 'Mago de la podredumbre · Padre adoptivo ambiguo de Millicent · Aspirante a la Floración cosmológica',
    summary:
      'Gowry es mago experto en Podredumbre Escarlata, residente de Caelid. Adoptó a Millicent cuando estaba en estado intermedio entre brote y persona, le dio cuerpo humano funcional, brazo prostético y guía durante años. Su devoción aparente esconde objetivo dudoso: aspira a comprender la podredumbre desde dentro convirtiéndose él mismo en hija escarlata mediante la fusión final con las otras hijas. Su afecto por Millicent es genuino pero instrumentalizado simultáneamente.',
    deepLore: [
      h(2, 'Origen: filósofo de la podredumbre', 'filosofo'),
      p(
        'Gowry vive en ',
        link('Caelid', 'region', 'caelid'),
        ', en una aldea derruida cerca de Sellia. Su especialización: estudiar la ',
        link('Podredumbre Escarlata', 'concept', 'scarlet-rot'),
        ' como mago y filósofo. Su línea de investigación es heterodoxa — el régimen del Orden Dorado considera la podredumbre solo como amenaza, pero Gowry la trata como tradición cosmológica genuina merecedora de estudio sistemático. Su biblioteca personal incluye textos sobre la Floración, el dios externo del decaimiento, las técnicas Albinauric de contención, y rituales pre-Orden vinculados a la podredumbre. Es el único hechicero documentado del juego que aborda la podredumbre con metodología académica seria.'
      ),
      h(2, 'El encuentro con Millicent', 'encuentro'),
      p(
        'Gowry encontró a ',
        link('Millicent', 'character', 'millicent'),
        ' cuando todavía estaba en estado intermedio entre brote escarlata y persona. La inmensa mayoría de brotes se rendían al enjambre antes de individuarse plenamente; Millicent era excepción rarísima. Gowry intervino en momento crítico: le proporcionó cuerpo humano funcional, brazo prostético, nombre, y guía durante años de transformación. Sin él, Millicent probablemente se habría perdido en el enjambre. Su intervención fue genuinamente salvadora — y simultáneamente investigación cosmológica de campo.'
      ),
      h(2, 'Las dos verdades simultáneas', 'verdades'),
      p(
        'La ambigüedad estructural de Gowry: usa a Millicent ',
        em('y'),
        ' la cuida. Las dos verdades coexisten sin posibilidad de separación. La cuidó durante años con afecto manifiesto, pero también la consideró laboratorio cosmológico ambulante. Le enseñó a defenderse, pero también la dejó expuesta a riesgos pedagógicamente útiles para él. Le dio identidad, pero también esperaba que esa identidad le permitiera completar el proyecto cosmológico que él perseguía. La interpretación moral del personaje depende del peso relativo que se asigne a cada componente — y el juego deliberadamente no resuelve la cuestión.'
      ),
      h(2, 'El proyecto: la Floración personal', 'floracion'),
      p(
        'Su objetivo cosmológico final: ',
        em('convertirse él mismo en hija escarlata'),
        '. La premisa: si las hijas escarlatas alcanzan fusión total, producen entidad cosmológica mayor capaz de rivalizar con Malenia. Si Gowry pudiera convertirse en versión humana de hija escarlata, sería puente conceptual — humano con consciencia plena ',
        em('y'),
        ' parte del enjambre. La operación requiere fusión ritual con las otras hijas en el ',
        link('Lago de Podredumbre', 'region', 'lake-of-rot'),
        '. Millicent fue su prueba de concepto y, simultáneamente, su entrada cosmológica al ritual.'
      ),
      h(2, 'La traición final', 'traicion'),
      p(
        'Si Millicent rechaza la fusión y vence en el Lago de la Podredumbre con asistencia del Tarnished, Gowry intenta completar el ritual él mismo. La operación falla por razón estructural: él no es brote escarlata genuino, solo aspirante humano. La fusión lo consume sin producir la entidad mayor que esperaba. Si el Tarnished lo enfrenta antes de la falla, Gowry pelea con técnicas residuales — su capacidad marcial es limitada porque su rol siempre fue investigación, no combate. El padre adoptivo se convierte en último obstáculo de la independencia de Millicent. Su muerte es triste pero no trágica: él eligió este camino con conocimiento completo del riesgo.'
      ),
      h(2, 'Significado simbólico', 'tematica'),
      p(
        'Gowry es el monumento del juego a la ambigüedad moral irreducible. Otros personajes son claramente buenos (Fia, Iji), claramente malos (Mohg, Shabriri), o complejos pero descomponibles (Ranni, Goldmask). Gowry es genuinamente ambiguo — su afecto por Millicent es real, su instrumentalización también. La pregunta filosófica: ¿se puede juzgar a alguien que cuida y usa simultáneamente? El juego no responde. Cada Tarnished que conoce su historia debe decidir si lo enfrenta como villano (al servicio de Millicent) o como aliado complicado (al servicio de la investigación cosmológica). La elección es genuinamente difícil.'
      )
    ],
    confirmed: [
      'Gowry es mago experto en Podredumbre Escarlata residente de Caelid',
      'Encontró a Millicent en estado intermedio entre brote y persona',
      'Le proporcionó cuerpo humano funcional y brazo prostético',
      'Su objetivo final es convertirse él mismo en hija escarlata mediante fusión ritual',
      'Si Millicent rechaza la fusión, Gowry intenta completarla él mismo',
      'Su capacidad marcial es limitada — su rol fue siempre investigación',
    ],
    inferred: [
      'Su afecto por Millicent es genuino pero instrumentalizado simultáneamente',
      'Es el único hechicero documentado que estudia la podredumbre con metodología académica seria',
      'Su biblioteca incluye textos pre-Orden y técnicas Albinauric',
      'Su línea de investigación es heterodoxa al régimen del Orden Dorado',
    ],
    theories: [
      'Tuvo contacto previo con apóstoles de la Reina de Ojos Crepusculares',
      'Conocía la posibilidad de individuación humana de brotes escarlatas antes de encontrar a Millicent',
      'Su transformación final fue planeada durante eras, no oportunismo',
      'Existen otros aspirantes a Floración personal en regiones marginales',
    ],
    ambiguous: [
      'Origen humano y trayectoria académica de Gowry pre-Caelid',
      'Si conocía a Malenia personalmente o solo a través del estudio',
      'Si la transformación final era reversible si hubiera fallado antes',
      'Si tuvo cómplices académicos en su investigación de la podredumbre',
    ],
    relatedCharacters: ['millicent', 'malenia'],
    relatedFactions: ['kindred-of-rot'],
    relatedRegions: ['caelid', 'lake-of-rot', 'sellia'],
    relatedConcepts: ['scarlet-rot', 'dioses-exteriores'],
    relatedTimelineEvents: ['aeonia-bloom'],
  },

  blaidd: {
    slug: 'blaidd',
    subtitle: 'Lobo en sombra de Ranni · Hombre-Bestia construido · Hermano por contrato cosmológico',
    summary:
      'Blaidd es Hombre-Bestia construido por Maliketh siguiendo la fórmula original — diseñado específicamente como Bestia Sombra de Ranni. Su lealtad es estructural y simultáneamente afectiva: el contrato cosmológico se mezcla con afecto fraterno genuino. Sus creadores instalaron en él una semilla de locura como freno por si Ranni traicionara el rol Empyrean. Cuando ella efectivamente lo traicionó, la locura comenzó a despertar — Blaidd termina encerrado en jaula ritual, deslizándose hacia animalidad sin perder consciencia plena de ello.',
    deepLore: [
      h(2, 'Origen: la fórmula Maliketh replicada', 'origen'),
      p(
        'Blaidd fue construido siglos después de ',
        link('Maliketh', 'character', 'maliketh'),
        ' siguiendo la fórmula original: extracción de biología ',
        link('Hombre-Bestia', 'faction', 'hombres-bestia'),
        ', combinación con sangre Caria, magia ritual de Raya Lucaria, conocimiento del régimen sobre cómo replicar la operación. El propósito específico: producir ',
        link('Bestia Sombra', 'concept', 'shadow-bound-beast'),
        ' para ',
        link('Ranni', 'character', 'ranni'),
        ' — la siguiente Empyrean designada en el ciclo posterior al de Marika. Maliketh supervisó la operación. Blaidd es prueba de que la fórmula es transferible — y prueba paralela de que el régimen mantuvo la tecnología en reserva específicamente para el siguiente ciclo cosmológico.'
      ),
      h(2, 'Vínculo estructural y afectivo', 'vinculo'),
      p(
        'A diferencia de Maliketh (cuya lealtad a Marika es absolutamente estructural sin componente afectivo claro), Blaidd combina contrato cosmológico con afecto fraterno genuino. La razón: la operación de construcción incluyó componente Caria — sangre familiar de la madre adoptiva (Rennala) y de los hermanos sociales (Radahn, Rykard). Blaidd nació siendo simultáneamente Bestia Sombra ritual y miembro de facto de la familia. Su lealtad a Ranni es operativa y emocional al mismo tiempo. La distinción es estructural: cumple la función ritual, pero también la quiere por afecto.'
      ),
      h(2, 'Iji y Seluvis: el círculo de Ranni', 'circulo'),
      p(
        'Blaidd opera dentro del círculo cercano de Ranni junto con ',
        link('Iji', 'character', 'iji'),
        ' (gigante reformado, herrero personal) y ',
        link('Seluvis', 'character', 'seluvis'),
        ' (mago de muñecos manipulador). Iji y Blaidd se respetan mutuamente — ambos saben que sirven a Ranni con lealtad genuina. Seluvis es el extraño: su lealtad es interesada, y Blaidd lo sabe. La quest secundaria de Blaidd implica investigar el ',
        link('Castillo Redmane', 'region', 'redmane-castle'),
        ' en busca de la espada del Orden Dorado que Maliketh oculta — Blaidd nunca la encuentra plenamente, pero su búsqueda es coherente con su rol.'
      ),
      h(2, 'La semilla de locura', 'locura'),
      p(
        'Sus creadores instalaron en él una semilla de locura como freno cosmológico: si Ranni alguna vez se desviara del rol Empyrean designado por la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ', Blaidd debería convertirse en bestia incontrolable. La premisa: una Bestia Sombra que conserve poder pleno sobre Empyrean traidora sería amenaza estructural al régimen. La locura es mecanismo de seguridad. Pero la operación tuvo defecto: cuando Ranni efectivamente traicionó el rol (transfiriendo su alma a la muñeca para escapar al contrato), la semilla de locura comenzó a despertar pero ',
        em('lentamente'),
        ', no inmediatamente. Blaidd retuvo consciencia plena durante el proceso — y eso es lo que hace su tragedia particularmente cruel.'
      ),
      h(2, 'El encierro ritual', 'encierro'),
      p(
        'Tras el avance progresivo de la locura, Blaidd entra en estado de pérdida creciente del control. ',
        link('Iji', 'character', 'iji'),
        ' eventualmente debe encerrarlo en una jaula ritual cerca del bosque sellado de Liurnia para evitar que su animalidad creciente dañe a aliados de Ranni. Cuando el Tarnished lo encuentra ahí, Blaidd está plenamente consciente de su deterioro — sabe que la locura crece, sabe que su lealtad a Ranni es real, y sabe que ambas verdades coexisten sin posibilidad de reconciliación. Su última pelea contra el Tarnished (si el jugador acepta el desafío) es el último momento de su consciencia: pelea con todo lo que tiene, pierde, y el Tarnished lo acaba como acto de piedad.'
      ),
      h(2, 'Significado simbólico', 'tematica'),
      p(
        'Blaidd es el monumento del juego a la lealtad diseñada que descubre que es jaula. Su tragedia es saber que su devoción a Ranni es real ',
        em('y'),
        ' que su locura también lo es — dos verdades simultáneas inseparables. Sus creadores instalaron el freno por buenas razones cosmológicas: una Bestia Sombra rebelde sería amenaza al régimen. Pero el costo lo paga Blaidd: él no eligió la lealtad ni la locura, ambas le fueron instaladas. Su existencia plantea la pregunta más cruel sobre la designación cosmológica: si el dios externo determina quién serás, ¿es la lealtad genuina o solo programación con afecto secundario? Blaidd responde: ambas cosas a la vez, indistinguibles, dolorosas.'
      )
    ],
    confirmed: [
      'Blaidd fue construido por Maliketh siguiendo la fórmula original de Bestia Sombra',
      'Su biología combina Hombre-Bestia, sangre Caria y magia ritual de Raya Lucaria',
      'Es Bestia Sombra de Ranni, equivalente al rol que Maliketh tiene con Marika',
      'Sus creadores instalaron en él una semilla de locura como freno cosmológico',
      'Cuando Ranni traicionó el rol Empyrean, la locura comenzó a despertar progresivamente',
      'Iji lo encierra ritualmente cuando el deterioro avanza demasiado',
    ],
    inferred: [
      'Su lealtad combina contrato cosmológico con afecto fraterno genuino',
      'La locura despierta lentamente — no inmediatamente — lo que prolonga su sufrimiento consciente',
      'Su quest del Castillo Redmane busca espada del Orden Dorado que Maliketh oculta',
      'Su construcción mantuvo en reserva tecnología cosmológica específicamente para el siguiente ciclo',
    ],
    theories: [
      'Si Ranni completa la Era de las Estrellas, podría restaurar parcialmente la consciencia de Blaidd',
      'Existen otras Bestias Sombra construidas que el juego no documenta (para Malenia, Miquella)',
      'La fórmula original de Maliketh contenía la semilla de locura como característica heredada',
      'Blaidd sospechaba la traición de Ranni desde antes y eligió ignorarla',
    ],
    ambiguous: [
      'Cuándo exactamente se construyó (la era es difusa)',
      'Si conoce el secreto de su propia semilla de locura desde el inicio',
      'Si Maliketh siente afecto residual hacia Blaidd como descendiente técnico',
      'Si su locura es reversible bajo cosmología distinta a la actual',
    ],
    relatedCharacters: ['ranni', 'maliketh', 'iji', 'seluvis', 'rennala', 'radahn'],
    relatedFactions: ['hombres-bestia', 'caria'],
    relatedConcepts: ['shadow-bound-beast', 'empyrean', 'voluntad-mayor', 'crucible'],
    relatedRegions: ['liurnia', 'mistwood', 'redmane-castle'],
    relatedTimelineEvents: ['blaidd-construction', 'ranni-noche-cuchillos'],
    relatedEndings: ['age-of-stars'],
  },

  iji: {
    slug: 'iji',
    subtitle: 'Gigante reformado · Herrero personal de los Caria · Peón consciente que se sacrifica con dignidad',
    summary:
      'Iji es uno de los pocos Gigantes del Fuego supervivientes a la guerra de exterminio que Godfrey lideró por orden de Marika. Tras eras de soledad encontró refugio en la familia Caria como herrero personal — único capaz de forjar las hojas de las muñecas que Ranni habita. Sirve a Ranni con discreción y tristeza, sabiendo que ella usa aliados como herramientas. Su sacrificio final permite que la quest avance — recibe a los asesinos enviados contra él sin huir, con dignidad de peón plenamente consciente de su rol.',
    deepLore: [
      h(2, 'Origen: superviviente del genocidio', 'origen'),
      p(
        'Iji pertenece a la raza de los ',
        link('Gigantes del Fuego', 'faction', 'fire-giants'),
        ' que habitaban las ',
        link('Mountaintops of the Giants', 'region', 'mountaintops'),
        ' antes del Orden Dorado. ',
        link('Marika', 'character', 'marika'),
        ' ordenó su exterminio porque su llama era específicamente capaz de quemar al Árbol Áureo. ',
        link('Godfrey', 'character', 'godfrey'),
        ' lideró la operación. La guerra duró eras y consumió generaciones de soldados dorados. Iji fue uno de los pocos Gigantes reformados que sobrevivieron — aceptó conversión ritual, abandonó la adoración del Fell God, se integró parcialmente al régimen del Orden Dorado. Su tamaño y fuerza siguen siendo gigantescos pero su afiliación es ahora institucionalmente otra.'
      ),
      h(2, 'Refugio en los Caria', 'refugio'),
      p(
        'Tras eras de soledad operando como gigante reformado en regiones marginales, Iji encontró refugio definitivo en la casa real de ',
        link('Caria', 'faction', 'caria'),
        ' en Liurnia. La razón cosmológica: Caria es dinastía mestiza producto del matrimonio Radagon-Rennala, marginalmente integrada al Orden Dorado central, dispuesta a aceptar refugiados que el régimen ortodoxo perseguiría. Iji se convirtió en herrero personal de la casa — su capacidad ferraria gigantesca le permitía forjar armas y herramientas que ningún herrero humano podía replicar.'
      ),
      h(2, 'El herrero de las muñecas', 'herrero'),
      p(
        'Su función específica más importante: forjar las hojas de las muñecas que ',
        link('Ranni', 'character', 'ranni'),
        ' habita tras transferir su alma. Cada vez que Ranni necesita cuerpo nuevo (las muñecas se desgastan o son dañadas), Iji forja la siguiente. La operación es ritualmente compleja — combina metalurgia gigantesca con magia Caria con porcelana ceremonial. Solo Iji puede ejecutarla. Su existencia continua es estructuralmente necesaria para la operación de Ranni durante eras: sin él, ella no tendría reemplazo de cuerpo cuando lo necesite.'
      ),
      h(2, 'Lealtad consciente', 'lealtad'),
      p(
        'Iji conoce el plan completo de Ranni. Sabe que ella opera para retirar a la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' del cosmos, sabe que usa aliados como herramientas instrumentales, sabe que algunos morirán en la ejecución. Lo acepta. Su filosofía implícita: el plan de Ranni es el único proyecto cosmológico que ofrece libertad genuina, y servirlo aunque sea como peón es preferible a servir cosmologías que solo perpetúan la opresión. Su lealtad no es ciega — es completamente informada y eligible.'
      ),
      h(2, 'El sacrificio anunciado', 'sacrificio'),
      p(
        'Si el Tarnished avanza la quest de Ranni, los enemigos de la Bruja (Empyreans rivales, agentes del régimen, posiblemente Seluvis operando en paralelo) envían asesinos contra los aliados centrales. Iji es blanco prioritario porque su muerte impide que Ranni reciba muñeca de reemplazo. Él lo sabía desde el inicio: cuando los asesinos llegan, los recibe sin huir, sin aviso al Tarnished, sin dramatismo. Su muerte ocurre fuera de pantalla. El Tarnished la descubre llegando al puesto de Iji y encontrando solo silencio. Su sacrificio permite que la quest avance hacia su consumación.'
      ),
      h(2, 'Significado simbólico', 'tematica'),
      p(
        'Iji es el monumento del juego a la dignidad del peón consciente. Sabe que es herramienta y sirve igualmente. Sabe que morirá y no huye. Sabe que Ranni usa aliados sin consultarles plenamente y elige servirla aún. La pregunta filosófica: ¿es la sabiduría compatible con la subordinación voluntaria? Iji responde: sí, cuando el proyecto al que se subordina es genuinamente liberador. Su existencia plantea uno de los modelos éticos más maduros del juego: lealtad informada que no requiere ilusión sobre el costo. Donde Blaidd sufre por no poder elegir, Iji elige sin ilusión y por eso conserva dignidad incluso al morir.'
      )
    ],
    confirmed: [
      'Iji es Gigante del Fuego reformado — superviviente al genocidio liderado por Godfrey',
      'Encontró refugio en la familia Caria como herrero personal',
      'Forja las hojas de las muñecas que Ranni habita',
      'Conoce el plan completo de Ranni y lo apoya conscientemente',
      'Es asesinado por enemigos de Ranni si el Tarnished avanza la quest',
      'Su muerte ocurre fuera de pantalla con dignidad de peón consciente',
    ],
    inferred: [
      'Su capacidad ferraria gigantesca es necesaria para reemplazar muñecas Ranni',
      'Su existencia continua es estructuralmente necesaria para la operación cosmológica de Ranni',
      'Su lealtad es completamente informada, no fanática',
      'Sabía desde el principio que sería sacrificado',
    ],
    theories: [
      'Iji conoció a Marika antes del exterminio de los Gigantes',
      'Su conversión ritual al Orden Dorado fue estratégica para sobrevivir, no genuina',
      'Existen otros Gigantes reformados ocultos en regiones marginales',
      'Su forja secreta incluye armas anti-Voluntad Mayor que nunca llegó a usar',
    ],
    ambiguous: [
      'Edad exacta y trayectoria pre-Caria',
      'Si conoce a Marika personalmente desde antes del régimen',
      'Si tiene contemporáneos Gigantes con los que mantiene contacto',
      'Si su sacrificio era su elección o estaba ritualmente forzado',
    ],
    relatedCharacters: ['ranni', 'blaidd', 'seluvis', 'rennala'],
    relatedFactions: ['caria', 'fire-giants', 'orden-dorado'],
    relatedRegions: ['mountaintops', 'liurnia', 'caria-manor'],
    relatedConcepts: ['fell-god', 'empyrean', 'voluntad-mayor'],
    relatedTimelineEvents: ['guerra-gigantes-fuego', 'ranni-noche-cuchillos'],
    relatedEndings: ['age-of-stars'],
  },

  seluvis: {
    slug: 'seluvis',
    subtitle: 'Mago de muñecos · Falso aliado de Ranni · Coleccionista cosmológico',
    summary:
      'Seluvis es hechicero del círculo cercano de Ranni, mago especialista en transferencia de almas a muñecas de porcelana. A diferencia de Iji y Blaidd, su lealtad a Ranni es interesada — su objetivo final es agregarla a su colección de mujeres poderosas convertidas en marionetas. Su laboratorio en Three Sisters contiene figuras de aristócratas, hechiceras y guerreras de las Tierras Intermedias transformadas. Si el Tarnished descubre su plan, Seluvis muere por causas misteriosas — probablemente envenenado por Iji.',
    deepLore: [
      h(2, 'El especialista en muñecos', 'especialista'),
      p(
        'Seluvis es hechicero educado en ',
        link('Raya Lucaria', 'region', 'raya-lucaria'),
        ' especializado en una rama estrecha: la transferencia ritual de almas humanas a muñecas de porcelana. La técnica es precursora directa de la operación que ',
        link('Ranni', 'character', 'ranni'),
        ' usó para escapar al rol Empyrean — cuando ella transfirió su alma a la muñeca, lo hizo siguiendo procedimiento que Seluvis investigaba paralelamente. Su rol oficial: discípulo y aliado de Ranni. Su rol operativo: investigador autónomo cuyas conclusiones cosmológicas Ranni nunca controló plenamente.'
      ),
      h(2, 'La colección', 'coleccion'),
      p(
        'Su laboratorio en ',
        link('Three Sisters', 'region', 'liurnia'),
        ' (uno de los tres torrejones que conforman el complejo Caria) contiene colección espeluznante de muñecas. Cada una contiene el alma transferida de una mujer notable de las Tierras Intermedias: aristócratas Carias menores, hechiceras de Raya Lucaria, guerreras de varias regiones. La transferencia es ',
        em('parcial'),
        ' — el cuerpo original muere, el alma queda atrapada dentro de la muñeca con consciencia consciente pero sin capacidad de moverse autónomamente. Cada muñeca es prisión perpetua. La colección es prueba de que Seluvis ha estado operando esta tecnología durante eras.'
      ),
      h(2, 'El plan contra Ranni', 'plan'),
      p(
        'Su objetivo final: agregar a Ranni a la colección. Cuando ella transfirió su alma a una muñeca para escapar al rol Empyrean, Seluvis vio oportunidad cosmológica única. Una Empyrean dentro de muñeca controlable sería poder cosmológico inmenso bajo su dirección. Su plan operativo era complejo: ofrecer al Tarnished un poción específica para administrar a Nepheli Loux (convertirla en muñeca primero como prueba de concepto), luego progresar hacia operaciones más ambiciosas. Si el Tarnished acepta administrar la poción a Nepheli, Seluvis revela parcialmente el plan; si el Tarnished se niega, Seluvis lo intenta con otras víctimas.'
      ),
      h(2, 'La traición silenciada', 'silenciada'),
      p(
        'Independientemente de las elecciones del jugador, Seluvis muere por causas misteriosas en cierto momento de su quest. La explicación más probable: ',
        link('Iji', 'character', 'iji'),
        ' lo envenena al detectar el plan. Iji vigila los alrededores de Ranni con cuidado obsesivo; Seluvis era amenaza estructural a la operación cosmológica completa. La muerte ocurre fuera de pantalla. Ni Iji ni Ranni la mencionan. Es ejecución silenciosa, eficiente, sin ceremonia. La traición nunca llega a consumarse. Su existencia es prueba de que incluso los conspiradores tienen conspiradores propios — y que el círculo de Ranni opera con seguridad operativa que detecta y neutraliza amenazas internas sin escándalo.'
      ),
      h(2, 'Significado simbólico', 'tematica'),
      p(
        'Seluvis es el monumento del juego a la lealtad como apariencia operativa. Donde Iji y Blaidd sirven a Ranni con devoción genuina (informada en Iji, programada en Blaidd, ambas sinceras), Seluvis sirve por instrumentalización. La pregunta implícita: ¿cuántos miembros del círculo de cualquier líder son Iji-tipo y cuántos son Seluvis-tipo? El juego sugiere que la respuesta es siempre algunos de cada uno, y que la diferencia entre proyectos cosmológicos exitosos y fallidos puede depender de la capacidad de detectar y neutralizar a los Seluvis-tipo antes de que ejecuten sus planes paralelos. Iji-tipo lealtades son raras. Seluvis-tipo manipulaciones son más comunes. La operación de Ranni sobrevive porque tuvo a Iji.'
      )
    ],
    confirmed: [
      'Seluvis es hechicero especialista en transferencia de almas a muñecas',
      'Su laboratorio está en Three Sisters de Liurnia',
      'Mantiene colección de mujeres poderosas convertidas en marionetas',
      'Su objetivo final es agregar a Ranni a la colección',
      'Muere por causas misteriosas durante su quest, probablemente envenenado por Iji',
      'Ofrece al Tarnished una poción para convertir a Nepheli Loux en muñeca',
    ],
    inferred: [
      'Su técnica precede a la operación de transferencia que Ranni usó para escapar al rol Empyrean',
      'Iji detectó el plan y ejecutó la sentencia sin consultar a Ranni',
      'La operación de neutralización fue silenciosa y eficiente — protocolo de seguridad establecido',
      'Cada muñeca de su colección contiene un alma viva en prisión perpetua',
    ],
    theories: [
      'Seluvis aprendió la técnica de transferencia estudiando textos pre-Orden Nox sobre Mimic Tears',
      'Tuvo contacto con apóstoles Pieles de Dios buscando técnica de captura divina',
      'Su colección incluye almas que el Tarnished podría liberar bajo cosmología post-Voluntad Mayor',
      'Ranni sabía del plan desde el inicio y permitió su existencia como prueba de seguridad',
    ],
    ambiguous: [
      'Origen exacto y educación pre-Caria de Seluvis',
      'Cuántas almas exactamente contiene su colección',
      'Si las almas atrapadas son recuperables tras su muerte',
      'Si tuvo cómplices entre otros hechiceros de Raya Lucaria',
    ],
    relatedCharacters: ['ranni', 'iji', 'blaidd', 'nepheli-loux'],
    relatedFactions: ['caria', 'raya-lucaria'],
    relatedRegions: ['liurnia', 'caria-manor', 'three-sisters'],
    relatedConcepts: ['empyrean', 'shadow-bound-beast', 'mimic-tear'],
  },

  fia: {
    slug: 'fia',
    subtitle: 'Doncella de Muerte · Portadora de la Runa Mendaz · Arquitecta cosmológica del Crepúsculo',
    summary:
      'Fia es mujer Numen de las Tierras del Norte, doncella ritual de los muertos cuyo don es ambiguo: abrazando a un guerrero le regala vigor temporal al precio de acortarle la vida. Su devoción cosmológica es por Godwyn, el demidiós cuya muerte parcial creó a Aquellos que Viven en la Muerte. Su misión es sanar la herida cosmológica restaurando la Muerte Predestinada al Anillo Elden mediante la Runa Mendaz cosida en el cadáver de Godwyn. Es la única arquitecta cosmológica que ofrece reparación estructural en lugar de sustitución.',
    deepLore: [
      h(2, 'Origen: Numen de las Tierras del Norte', 'origen'),
      p(
        'Fia procede de las Tierras del Norte — región exterior a las Tierras Intermedias cuya geografía exacta el juego no documenta. Su sangre es ',
        link('Numen', 'concept', 'numen'),
        ', linaje humano de cualidades superiores capaz de ser elegido como vasija divina. La misma sangre que Marika, la misma sangre que las Cuchillos Negros. Su llegada a las Tierras Intermedias fueron accidental — buscaba lugar donde su don funcionara propósitos legítimos en lugar de tragedia personal.'
      ),
      h(2, 'El don ambiguo: el abrazo', 'don'),
      p(
        'Su don es ritualmente complejo. Abrazar a un guerrero le concede vigor temporal — bonus marcial real, defensa aumentada, energía vital prestada. Pero el préstamo tiene costo: cada abrazo acorta la vida del receptor. La gente la llama "Doncella de Muerte" por buenas razones. Su don es expresión humana de la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ' como flujo: ella canaliza vida prestada hacia un lado, deuda de muerte hacia el otro. La operación es éticamente compleja — el receptor recibe poder real pero paga con futuro acortado. Fia perdió a su amante usando el don sin querer.'
      ),
      h(2, 'La devoción a Godwyn', 'godwyn'),
      p(
        'En la Mesa Redonda Fia desarrolla devoción cosmológica por ',
        link('Godwyn', 'character', 'godwyn'),
        '. La razón: comprende que su muerte parcial es la herida estructural de las Tierras Intermedias. Aquellos que Viven en la Muerte existen porque Godwyn no pudo morir verdaderamente. Cada cadáver reanimado es replicación de su tragedia. Su don personal (vida prestada con costo de muerte) es metáfora exacta de la situación cosmológica: el Orden Dorado dio inmortalidad a costa de muerte verdadera. Fia es la única que ve la conexión y la única que propone reparación.'
      ),
      h(2, 'La quest cosmológica', 'quest'),
      p(
        'Su misión específica: obtener la ',
        link('Runa Mendaz', 'concept', 'rune-of-death'),
        ' (la Runa de la Muerte completa) cosida en el cadáver de Godwyn como Lord of Death. La operación requiere progreso simultáneo del Tarnished: derrotar a Maliketh para liberar la Runa, encontrar el cadáver primario en Deeproot Depths, ejecutar el ritual de cosido. ',
        link('D', 'character', 'd'),
        ' (Cazador de Aquellos que Viven en la Muerte) la considera blasfemia y se opone. ',
        link('Rogier', 'character', 'rogier'),
        ' (mago académico de la Mesa Redonda) la apoya intelectualmente — ambos investigadores honestos llegaron a la misma conclusión.'
      ),
      h(2, 'La Era del Crepúsculo', 'crepusculo'),
      p(
        'Si el Tarnished completa la quest hasta su consumación, Fia consagra el ritual final: la Runa Mendaz se integra al Anillo Elden como Ley Mayor restaurada. La consecuencia: los muertos pueden volver a morir verdaderamente. La herida de Godwyn se cierra. Aquellos que Viven en la Muerte descansan piadosamente. La ',
        link('Deathroot', 'concept', 'deathroot'),
        ' deja de propagarse como corrupción y se convierte en sustancia funeraria normal. El cosmos vuelve a tener Muerte como ley legítima. Es la ',
        link('Era del Crepúsculo', 'ending', 'duskborn'),
        ' — la era más melancólica del juego y, simultáneamente, la más misericordiosa.'
      ),
      h(2, 'Significado simbólico', 'tematica'),
      p(
        'Fia es el monumento del juego a la solución estructural en lugar de la sustitución. Donde Ranni propone reemplazar la cosmología (Era de las Estrellas), Goldmask perfeccionarla (Era del Orden), Mohg corromperla (Lord of Blood), los Tres Dedos extinguirla (Llama Frenética), Fia simplemente repara la falla fundacional. La Muerte sellada por Marika fue error cosmológico; restaurar la Muerte cura el error. Su solución es la más madura filosóficamente: no aspira a utopía nueva, solo a cierre del problema original. La pregunta del juego: ¿es preferible reparar lo dañado o sustituirlo? Fia argumenta reparación. Su Era del Crepúsculo no elimina el régimen del Orden Dorado — solo le devuelve la pieza que faltaba para funcionar coherentemente.'
      )
    ],
    confirmed: [
      'Fia es Numen de las Tierras del Norte — sangre superior',
      'Su don ritual es abrazar guerreros para concederles vigor temporal a costa de acortar su vida',
      'Su devoción cosmológica es por Godwyn como herida estructural de las Tierras Intermedias',
      'Su misión es obtener la Runa Mendaz cosida en el cadáver de Godwyn',
      'Su quest produce la Era del Crepúsculo restaurando la Muerte Predestinada al Anillo Elden',
      'D se opone considerando blasfemia; Rogier la apoya intelectualmente',
    ],
    inferred: [
      'Su sangre Numen la conecta cosmológicamente con Marika y las Cuchillos Negros',
      'Su don personal es metáfora exacta de la situación cosmológica de las Tierras Intermedias',
      'Su solución es estructural en lugar de sustitución — más madura filosóficamente',
      'Perdió a su amante usando el don accidentalmente antes de llegar a las Tierras Intermedias',
    ],
    theories: [
      'Tuvo conexión previa con la Reina de Ojos Crepusculares como Doncella de Muerte ritual',
      'Su don procede de tradición pre-Orden de las Tierras del Norte',
      'Conoce el secreto de Marika con detalles que no comparte',
      'Si la Era del Crepúsculo se ejecuta, Fia podría suceder a Marika como vasija reformada',
    ],
    ambiguous: [
      'Geografía exacta de las Tierras del Norte',
      'Si su don es genético o ritual',
      'Si conoció a otros Numen antes de llegar a las Tierras Intermedias',
      'Si su devoción a Godwyn es cosmológica o también afectiva',
    ],
    relatedCharacters: ['godwyn', 'd', 'maliketh', 'rogier', 'gloam-eyed-queen'],
    relatedFactions: ['those-who-live-in-death', 'cuchillos-negros'],
    relatedRegions: ['deeproot-depths', 'leyndell'],
    relatedConcepts: ['rune-of-death', 'destined-death', 'deathroot', 'those-who-live-in-death', 'numen'],
    relatedEndings: ['duskborn'],
    relatedTimelineEvents: ['ranni-noche-cuchillos', 'godwyn-corruption-spread'],
  },

  d: {
    slug: 'd',
    subtitle: 'Cazador de Aquellos que Viven en la Muerte · Caballero exterminador · Hermano de un vengador silencioso',
    summary:
      'D, Cazador de los Muertos es caballero del Orden Dorado especializado en exterminar Aquellos que Viven en la Muerte. Su odio es teológico — los considera blasfemia estructural contra la era dorada. Considera a Fia su antítesis cosmológica. Tiene un hermano gemelo que viste su armadura tras la muerte, completando una venganza muda contra quien mató a su pariente. Su existencia plantea la postura más fría del juego: purga sin reforma como respuesta a la corrupción cosmológica.',
    deepLore: [
      h(2, 'El cazador especializado', 'cazador'),
      p(
        'D es caballero del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' con función específica: cazar y eliminar a ',
        link('Aquellos que Viven en la Muerte', 'concept', 'those-who-live-in-death'),
        '. Su orden — los Cazadores de los Muertos — opera como brazo ejecutor del régimen contra la corrupción de Godwyn. Sus armas (la Espada Cazadora, la armadura específica) están diseñadas con runas anti-Deathroot. Su entrenamiento es teológico además de marcial: cada cuerpo reanimado es ofensa cosmológica al Árbol Áureo, debe ser purgado individualmente sin contemplación.'
      ),
      h(2, 'Doctrina: purga sin reforma', 'doctrina'),
      p(
        'Su filosofía es coherente y atroz. Premisa: los Aquellos que Viven en la Muerte son blasfemia contra la era dorada. La Muerte Predestinada está sellada por orden divina (',
        link('Marika', 'character', 'marika'),
        ' lo decretó); cualquier criatura que escape a esa decisión es ofensa cosmológica. La doctrina implícita: el problema no es el sello sino la corrupción que escapó a él. La solución no es restaurar la Muerte (',
        em('eso lo hace la Era del Crepúsculo'),
        ') sino exterminar individualmente cada manifestación. La purga sin reforma. La doctrina más fría disponible respecto a la herida de Godwyn.'
      ),
      h(2, 'Antagonismo con Fia', 'antagonismo'),
      p(
        'D considera a ',
        link('Fia', 'character', 'fia'),
        ' su antítesis cosmológica. La razón es estructural: Fia propone restaurar la Muerte mediante reforma; D propone exterminar las consecuencias mediante purga. Cada uno tiene postura coherente sobre la misma situación, y cada postura excluye a la otra. La tensión entre ellos en la Mesa Redonda es palpable — D la trata con desprecio gélido, Fia lo trata con tristeza compasiva. ',
        link('Rogier', 'character', 'rogier'),
        ' (mago académico que apoya a Fia) intenta mediar pero su deterioro físico le impide intervenir efectivamente.'
      ),
      h(2, 'El asesinato', 'asesinato'),
      p(
        'Si el Tarnished avanza la quest de Fia hasta cierto punto crítico — específicamente cuando Fia revela públicamente la Runa Mendaz — D inicia plan de eliminarla físicamente. Para preservar la quest, el Tarnished debe ',
        em('matar a D primero'),
        '. La operación es éticamente compleja: D no es villano cosmológico, su doctrina es internamente coherente, su ataque a Fia es defensa del régimen que él considera correcto. El Tarnished lo asesina por necesidad cosmológica, no por justicia. Su muerte fuera de pantalla deja armadura y armas que el Tarnished puede portar.'
      ),
      h(2, 'El hermano gemelo', 'hermano'),
      p(
        'D tenía hermano gemelo idéntico — su existencia se revela post-mortem. Cuando el Tarnished encuentra el cadáver de D y se queda con la armadura, eventualmente puede entregarla al hermano vivo (que aparece en regiones específicas). El hermano viste la armadura del muerto y completa una venganza muda contra Fia: durante el ritual final del Crepúsculo, ataca a Fia mientras está vulnerable. La operación no detiene la Era del Crepúsculo (Fia ya consagró el ritual) pero sí mata a Fia personalmente. La venganza fraternal es pequeña, exacta, sin redención posible para nadie. Es una de las quests más amargas del juego.'
      ),
      h(2, 'Significado simbólico', 'tematica'),
      p(
        'D es el monumento del juego a la postura más fría posible: purga sin reforma. Su existencia plantea la pregunta cosmológica más cruda: cuando hay corrupción en el cosmos, ¿es preferible eliminar las manifestaciones (D) o reparar la causa (Fia)? Cada respuesta tiene su lógica. D es coherente — las manifestaciones son problema visible, las causas son abstracciones cosmológicas, la purga es operativamente eficaz aunque sea inhumana. La pregunta del juego no es cuál postura es correcta sino cuál puede el jugador soportar éticamente. Cada Tarnished que apoya a Fia debe matar a D. Cada matanza es elección filosófica explícita. Es uno de los pocos momentos del juego donde la elección moral es genuinamente difícil.'
      )
    ],
    confirmed: [
      'D es caballero Cazador de Aquellos que Viven en la Muerte',
      'Su orden opera como brazo ejecutor del Orden Dorado contra la corrupción de Godwyn',
      'Considera a Fia su antítesis cosmológica',
      'Si el Tarnished apoya la quest de Fia, debe matar a D',
      'Tiene hermano gemelo idéntico que viste su armadura tras la muerte',
      'El hermano completa venganza muda matando a Fia durante el ritual final',
    ],
    inferred: [
      'Su doctrina es coherente y deliberada, no simplemente fanatismo',
      'Sus armas y armadura están diseñadas con runas anti-Deathroot específicas',
      'Su entrenamiento incluye contenido teológico además de marcial',
      'La venganza fraternal no detiene el ritual cosmológico — solo mata personalmente a Fia',
    ],
    theories: [
      'Existen otros Cazadores de los Muertos en regiones que el juego no documenta',
      'El hermano gemelo conocía la doctrina pero no había sido caballero activo',
      'D tuvo contacto previo con apóstoles Pieles de Dios pero rechazó su doctrina deicida',
      'Su orden fue creada específicamente tras la Noche de los Cuchillos Negros como respuesta institucional',
    ],
    ambiguous: [
      'Identidad humana de D antes de la orden Cazadora',
      'Si conoció personalmente a Godwyn antes de su muerte parcial',
      'Cuántos Cazadores activos quedan en las Tierras Intermedias',
      'Si la doctrina de purga puede coexistir con cualquier final del juego',
    ],
    relatedCharacters: ['fia', 'godwyn', 'rogier', 'maliketh', 'd-twin-brother'],
    relatedFactions: ['orden-dorado', 'those-who-live-in-death'],
    relatedConcepts: ['rune-of-death', 'destined-death', 'deathroot', 'golden-order'],
    relatedRegions: ['leyndell', 'deeproot-depths'],
    relatedEndings: ['duskborn'],
  },

  rogier: {
    slug: 'rogier',
    subtitle: 'Mago académico de la Mesa Redonda · Investigador del cuerpo de Godwyn · Honestidad que mata',
    summary:
      'Rogier es mago educado en Raya Lucaria, único hechicero de la Mesa Redonda que aborda el enigma de la Noche de los Cuchillos Negros con seriedad académica. Investiga directamente el cuerpo de Godwyn bajo el Castillo Stormveil. Su contacto con la Deathroot lo enferma progresivamente. Apoya la quest de Fia con afecto manifiesto. Su deterioro físico es resultado directo del trabajo de investigación: comprender el secreto cosmológico cuesta vida.',
    deepLore: [
      h(2, 'Origen: educación académica', 'origen'),
      p(
        'Rogier fue educado en ',
        link('Raya Lucaria', 'region', 'raya-lucaria'),
        ' como hechicero del corpus académico estándar. Su especialidad inicial: magia de cristal y telekinesis. Su curiosidad lo llevó eventualmente a un campo no estándar: las anomalías cosmológicas post-fractura, específicamente las relacionadas con la corrupción de Godwyn. La Academia desaprobó la línea de investigación pero no la prohibió formalmente. Rogier abandonó la institución para investigar autónomamente.'
      ),
      h(2, 'El investigador del cuerpo', 'investigador'),
      p(
        'Rogier es el único mago de la ',
        link('Mesa Redonda', 'concept', 'tarnished'),
        ' que aborda el enigma de ',
        link('Godwyn', 'character', 'godwyn'),
        ' con metodología académica seria. Su investigación de campo: descender al cuerpo descompuesto de Godwyn bajo el ',
        link('Castillo Stormveil', 'region', 'stormveil'),
        ' (donde una de las raíces principales emerge). Allí estudia muestras de ',
        link('Deathroot', 'concept', 'deathroot'),
        ', analiza las dagas Cuchillo Negro residuales, deduce la mecánica del asesinato parcial. Sus conclusiones — apoyadas en evidencia material, no especulación — coinciden con las de ',
        link('Fia', 'character', 'fia'),
        ', aunque cada uno llegó por camino independiente.'
      ),
      h(2, 'Las conclusiones académicas', 'conclusiones'),
      p(
        'Sus conclusiones documentadas son notables por precisión. Identifica: que la Noche de los Cuchillos Negros fue conspiración interna del Lineaje Dorado (no agresión externa); que las dagas usaron mecha de la Runa de la Muerte robada de Maliketh; que ',
        link('Ranni', 'character', 'ranni'),
        ' fue arquitecta del complot; que el cuerpo de Godwyn produce la Deathroot como manifestación de su muerte parcial; que la solución cosmológica requeriría restaurar la Runa de la Muerte completa al Anillo Elden. Las conclusiones son tan completas que el Tarnished puede usar las notas de Rogier como guía operativa para la quest de Fia.'
      ),
      h(2, 'El deterioro físico', 'deterioro'),
      p(
        'El contacto prolongado con la ',
        link('Deathroot', 'concept', 'deathroot'),
        ' enferma a Rogier progresivamente. Su pierna se necrosa primero — la mantiene cubierta por capa larga, pero el avance es visible. Su salud general declina. Su capacidad mágica se debilita. La conclusión melancólica: comprender el secreto de la Noche cuesta vida — la Deathroot no perdona a investigadores honestos. Cuando el Tarnished encuentra a Rogier en su última forma, está casi catatónico, transmitiendo sus notas finales antes de morir.'
      ),
      h(2, 'El afecto por Fia', 'fia'),
      p(
        'Rogier desarrolla afecto manifiesto por ',
        link('Fia', 'character', 'fia'),
        '. La razón es académica además de personal: ella llegó por intuición ritual a las mismas conclusiones que él alcanzó por investigación empírica. Cada uno valida al otro. Su devoción mutua es uno de los pocos vínculos puramente sanos del juego — no es romance dramático, es respeto profundo entre dos investigadores honestos del mismo problema. Antes de morir, Rogier le confía sus notas finales a Fia y al Tarnished. Su última voluntad: que la quest cosmológica continúe, aunque él no pueda presenciar la consumación.'
      ),
      h(2, 'Significado simbólico', 'tematica'),
      p(
        'Rogier es el monumento del juego a la honestidad académica como vocación cosmológicamente costosa. Otros personajes investigan con autoprotección (',
        link('Gideon', 'character', 'gideon'),
        ' archiva sin contacto directo), con instrumentalización (',
        link('Seluvis', 'character', 'seluvis'),
        ' usa el saber para fines propios), o con devoción ritual (',
        link('Goldmask', 'character', 'goldmask'),
        ' contempla en silencio). Rogier investiga con el cuerpo expuesto al objeto. La Deathroot lo mata progresivamente; él lo sabe; sigue investigando. La pregunta filosófica: ¿es la honestidad académica suicidio digno o necedad cosmológica? El juego no decide. Rogier es testimonio de que algunos secretos solo se develan a costa de la vida del que los descubre.'
      )
    ],
    confirmed: [
      'Rogier fue educado en Raya Lucaria como hechicero académico estándar',
      'Investiga directamente el cuerpo de Godwyn bajo Stormveil',
      'Sus conclusiones académicas anticipan las de Fia mediante metodología empírica',
      'La Deathroot lo enferma progresivamente — su pierna se necrosa primero',
      'Apoya la quest de Fia con afecto manifiesto',
      'Muere antes de la consumación del ritual y lega sus notas al Tarnished',
    ],
    inferred: [
      'Su investigación rompió con la disciplina académica oficial de Raya Lucaria',
      'Sus conclusiones son tan completas que sirven como guía operativa para la quest de Fia',
      'Su afecto por Fia es respeto académico además de afectivo',
      'Conocía el riesgo del contacto directo con la Deathroot y eligió investigarla igualmente',
    ],
    theories: [
      'Tuvo contacto previo con Sellen u otros excomulgados antes de su investigación',
      'Sus notas contienen información sobre la Reina de Ojos Crepusculares que el Tarnished podría descubrir',
      'Si hubiera sobrevivido, podría haber sido aliado del proyecto Miquella',
      'Su deterioro fue parcialmente acelerado por intervención externa (D oficialmente niega cualquier acción)',
    ],
    ambiguous: [
      'Identidad humana pre-Raya Lucaria',
      'Si su afecto por Fia es romántico o platonicamente filial',
      'Cuándo exactamente comenzó su investigación de campo',
      'Si tuvo cómplices académicos no documentados',
    ],
    relatedCharacters: ['fia', 'godwyn', 'd', 'sellen'],
    relatedFactions: ['those-who-live-in-death', 'raya-lucaria'],
    relatedConcepts: ['rune-of-death', 'deathroot', 'destined-death'],
    relatedRegions: ['stormveil', 'leyndell', 'raya-lucaria'],
    relatedTimelineEvents: ['ranni-noche-cuchillos'],
    relatedEndings: ['duskborn'],
  },

  gideon: {
    slug: 'gideon',
    subtitle: 'El Que Todo Lo Sabe · Erudito jefe de la Mesa Redonda · Guardián paralizado por el saber',
    summary:
      'Gideon Ofnir es el erudito jefe de la Mesa Redonda — antiguo Tarnished retornado que se autoasignó la tarea de investigar exhaustivamente a cada demidiós, cada doctrina cosmológica y cada destino posible de las Tierras Intermedias. Conoce cada camino al trono Elden y considera todos catastróficos. Su oposición final al Tarnished no procede de un pacto con un dios externo sino de la parálisis que produce la información completa: sabe lo suficiente para descartar todo, no lo suficiente para construir nada.',
    deepLore: [
      h(2, 'Origen e instalación', 'origen'),
      p(
        'Gideon llegó a las Tierras Intermedias como Tarnished retornado tras la rotura del Anillo Elden, igual que el protagonista del juego. Pero su trayectoria fue distinta: en lugar de aspirar a la coronación inmediata, se instaló en la ',
        link('Mesa Redonda', 'concept', 'tarnished'),
        ' como erudito y se dedicó a investigar metódicamente a cada demidiós, cada facción, cada doctrina cosmológica. Su biblioteca personal es archivo más completo que el del propio régimen oficial: tiene dossiers de ',
        link('Godrick', 'character', 'godrick'),
        ', ',
        link('Rennala', 'character', 'rennala'),
        ', ',
        link('Radahn', 'character', 'radahn'),
        ', ',
        link('Rykard', 'character', 'rykard'),
        ', ',
        link('Malenia', 'character', 'malenia'),
        ', ',
        link('Mohg', 'character', 'mohg'),
        ', y de cosmologías específicas (Llama Frenética, Era de las Estrellas, fundamentalismo de Goldmask).'
      ),
      h(2, 'El asesor estratégico', 'asesor'),
      p(
        'Su función operativa para el Tarnished que llega: orientación estratégica. Sugiere objetivos, ofrece datos sobre puntos débiles de cada demidiós, advierte sobre rutas peligrosas. Su conocimiento es real y útil. ',
        link('Roderika', 'character', 'roderika'),
        ' lo asiste como ayudante; ',
        link('Brother Corhyn', 'character', 'corhyn'),
        ' opera en paralelo como predicador; ',
        link('Goldmask', 'character', 'goldmask'),
        ' eventualmente lo trasciende filosóficamente. Adoptó como hija a ',
        link('Nepheli Loux', 'character', 'nepheli-loux'),
        ', criándola con conocimiento que él mismo no podía ejecutar — ella tiene capacidad marcial, él tiene erudición; juntos podrían haber sido un Señor Elden compuesto.'
      ),
      h(2, 'La parálisis del omnisciente', 'paralisis'),
      p(
        'La crisis de Gideon es estructural. Cada cosmología que estudia tiene problema fatal: la Era de la Fractura perpetúa las grietas; la Era del Orden de Goldmask elimina la individualidad; la Era del Crepúsculo reactiva la corrupción de Godwyn; la Era de las Estrellas abandona al cosmos a frialdad eterna; la Llama Frenética extingue todo; la Bendición de la Desesperación condena a la humanidad. ',
        em('Cada respuesta tiene precio inaceptable'),
        '. Su omnisciencia lo lleva a la inacción — no porque sea cobarde, sino porque genuinamente no encuentra opción defendible.'
      ),
      h(2, 'La traición final', 'traicion'),
      p(
        'Tras la caída de los principales demidióses, Gideon se enfrenta al Tarnished a las puertas del Árbol Áureo. Su declaración: ningún Tarnished debe coronarse, porque ningún destino disponible es bueno. Prefiere bloquear el camino con violencia a permitir cualquier resolución. Su pelea es desesperada — se enfrenta a un Tarnished que ya derrotó a varios demidióses con dossiers que el propio Gideon proporcionó. Su derrota es inevitable, pero la certeza no le impide intentarlo.'
      ),
      h(2, 'Reconocimiento de la Llama Frenética', 'frenzied'),
      p(
        'El detalle más fino del personaje: si el Tarnished ya ha aceptado el sello de los ',
        link('Tres Dedos', 'faction', 'tres-dedos'),
        ' antes de llegar a la confrontación final, Gideon lo nota inmediatamente. Su voluntad de combate se quiebra. En lugar de luchar suplica al Tarnished que abandone el camino frenético — incluso ofreciendo ayudarlo a coronarse bajo cualquier otra cosmología, incluso bajo la Bendición de la Desesperación. Es el único momento del juego donde Gideon prefiere genuinamente cualquier final menos uno. La radiación frenética es el único horizonte que su omnisciencia identifica como peor que la inacción.'
      ),
      h(2, 'Significado simbólico', 'tematica'),
      p(
        'Gideon es el monumento del juego al saber como impedimento. Donde otros NPCs eligen rumbos por convicción (Fia el Crepúsculo, Goldmask el Orden, Ranni las Estrellas, Mohg la sangre), Gideon ha visto demasiado para elegir. La pregunta filosófica: ¿es la omnisciencia liberadora o paralizante? El juego responde: paralizante. La acción cosmológica requiere ',
        em('no ver todas las consecuencias'),
        '. Cada NPC que actúa decisivamente lo hace mediante simplificación voluntaria; Gideon no pudo simplificar, y por eso falló. Su muerte a manos del Tarnished es la respuesta más cruel del juego al saber sin acción.'
      )
    ],
    confirmed: [
      'Gideon estableció la Mesa Redonda y dirige a los Tarnished retornados',
      'Conoce dossiers completos de cada demidiós y cosmología disponible',
      'Adoptó a Nepheli Loux como hija y la crió en la Mesa Redonda',
      'Se opone al Tarnished a las puertas del Árbol Áureo antes del trono',
      'Si el Tarnished tiene la Llama Frenética, Gideon le suplica abandonarla en lugar de pelear',
    ],
    inferred: [
      'Su parálisis nace de la información completa, no de la cobardía simple',
      'Su rol como "guardián de los Tarnished" siempre fue gestión de expectativas, no liderazgo',
      'Crió a Nepheli sabiendo su linaje del Storm Hawk King — la preparó como heredera alternativa',
      'Su biblioteca incluye textos pre-Orden que ningún clérigo del régimen ha leído',
    ],
    theories: [
      'Pudo haber estudiado a Marika con la esperanza de salvarla, no de reemplazarla',
      'Conoce el procedimiento exacto del Oro sin Aleación pero no puede aplicarlo solo',
      'Su afiliación previa pre-Mesa Redonda incluyó investigación sobre la Reina de Ojos Crepusculares',
      'Sabe que la Voluntad Mayor se ha retirado plenamente y oculta la información para no desestabilizar la Mesa',
    ],
    ambiguous: [
      'Si alguna vez aspiró a ser Señor Elden él mismo o si siempre delegó',
      'Si su omnisciencia es real o solo recopilación bien archivada',
      'Cuándo exactamente comenzó su parálisis — ¿desde el principio o tras estudio progresivo?',
      'Si su afecto por Nepheli es paternal genuino o instrumentalización del linaje',
    ],
    relatedCharacters: ['nepheli-loux', 'corhyn', 'goldmask', 'roderika', 'kenneth-haight'],
    relatedFactions: ['orden-dorado', 'fundamentalistas'],
    relatedConcepts: ['frenzied-flame', 'great-rune', 'tarnished', 'voluntad-mayor', 'golden-order'],
    relatedRegions: ['leyndell'],
    relatedEndings: ['fracture', 'order'],
  },

  goldmask: {
    slug: 'goldmask',
    subtitle: 'El monje silencioso · Reformador fundamentalista del Orden Dorado · Heredero filosófico de Radagon',
    summary:
      'Goldmask es asceta que jamás pronuncia palabra. Heredero único del proyecto fundamentalista de Radagon: descubrir y corregir la falla lógica interna del Orden Dorado mediante la Ley de la Regresión. Su silencio absoluto es disciplina ritual, no defecto. Su discípulo Corhyn opera como traductor parcial. La conclusión cosmológica que alcanza — "Radagon es Marika" — produce la Era del Orden: cosmos perfectamente coherente, frío, geométrico, sin espacio para lo no encajable.',
    deepLore: [
      h(2, 'El monje silencioso', 'silencioso'),
      p(
        'Goldmask jamás pronuncia palabra. Su silencio no es defecto físico — es disciplina ritual de los ',
        link('Fundamentalistas del Orden Dorado', 'faction', 'fundamentalistas'),
        '. La premisa: la formulación correcta de la Ley Mayor requiere meditación pura, sin contaminación verbal. Cada palabra pronunciada introduce ambigüedad; cada gesto sin habla preserva la posibilidad de pensamiento exacto. Su máscara dorada es simultáneamente armadura ritual y vehículo cosmológico — refleja la luz dorada del Árbol Áureo que su contemplación intenta corregir.'
      ),
      h(2, 'Heredero del proyecto de Radagon', 'radagon'),
      p(
        'La tradición fundamentalista que Goldmask hereda fue codificada por ',
        link('Radagon', 'character', 'radagon'),
        ' durante sus eras de reparación del Anillo Elden. La premisa: el Orden Dorado en su forma actual contiene una contradicción lógica interna específica, y si esa contradicción se corrige, el cosmos se vuelve perfectamente coherente. Radagon no pudo completar el proyecto — fue interrumpido por su retorno al lado de Marika (consigo mismo). Goldmask es el único monje vivo capaz de completar la operación. Su silencio absoluto durante eras es preparación ritual.'
      ),
      h(2, 'La revelación: Radagon es Marika', 'revelacion'),
      p(
        'Tras siglos de meditación, Goldmask alcanza la conclusión cosmológica clave: ',
        em('la fusión Radagon-Marika es la falla central'),
        '. La frase "Radagon es Marika" — que el régimen oficial nunca enuncia explícitamente pero que cualquier observador atento puede deducir — es revelación que desestabiliza toda la teología dorada. Si el aspecto del cambio (Marika que rompió el Anillo) y el aspecto de la conservación (Radagon que intentó repararlo) son el mismo ser, entonces el cosmos contiene contradicción interna estructural irreducible. La aplicación de la ',
        link('Ley de la Regresión', 'concept', 'law-of-regression'),
        ' produce la corrección: reducir la fusión a sus términos más simples, eliminando la contradicción.'
      ),
      h(2, 'La Era del Orden', 'orden'),
      p(
        'Si el Tarnished apoya su quest hasta el final (recolectando sus secretos y permitiéndole alcanzar la Capital Real durante el Árbol Áureo quemado), Goldmask aplica la Ley de la Regresión y reformula el Anillo Elden. La consecuencia: la ',
        link('Era del Orden', 'ending', 'order'),
        ' — un cosmos perfectamente coherente. Cada ley cosmológica encaja sin grieta. La Voluntad Mayor opera con eficiencia matemática. Las contradicciones que producían Omens, Misbegotten, Aquellos que Viven en la Muerte se eliminan estructuralmente. Es la utopía absoluta. Pero también el infierno de los que no caben: cuanto más perfecta la coherencia, menos espacio para excepciones, individualidades, ambigüedades. La frialdad geométrica es el precio de la perfección.'
      ),
      h(2, 'Significado simbólico', 'tematica'),
      p(
        'Goldmask es el monumento del juego a la razón filosófica llevada hasta sus consecuencias finales. Es el único personaje que ',
        em('genuinamente'),
        ' resuelve el problema cosmológico de las Tierras Intermedias — su Era del Orden no es parche, es solución estructural. Pero la solución requiere amputación de todo lo que no encaje en la lógica perfecta. Su silencio absoluto es metáfora exacta de su filosofía: las palabras introducen ambigüedad, y la ambigüedad es lo que su cosmos eliminará. Cada jugador que elige la Era del Orden está aceptando esta ecuación: coherencia perfecta a costa de individualidad humana imperfecta. ¿Es preferible un cosmos sin grietas o uno con grietas que albergan lo no canónico? Goldmask responde: sin grietas. La pregunta queda abierta para el jugador.'
      )
    ],
    confirmed: [
      'Goldmask jamás pronuncia palabra — silencio absoluto como disciplina ritual',
      'Hereda el proyecto fundamentalista de Radagon',
      'Brother Corhyn lo acompaña como discípulo y traductor parcial',
      'Identifica la fusión Radagon-Marika como contradicción central del Orden Dorado',
      'Su quest produce la Era del Orden mediante aplicación de la Ley de la Regresión',
    ],
    inferred: [
      'Su máscara dorada es vehículo cosmológico además de armadura ritual',
      'Su silencio durante eras fue preparación ritual para la revelación final',
      'La tradición fundamentalista que hereda fue casi extinta antes de él',
      'La operación final requiere acceso a la Capital Real durante el Árbol Áureo quemado',
    ],
    theories: [
      'Marika misma alentó secretamente la línea fundamentalista anticipando la corrección',
      'Goldmask fue alguna vez Tarnished común antes de adoptar el silencio',
      'Existen otros fundamentalistas en regiones marginales que el juego no documenta',
      'La Era del Orden no elimina la individualidad — solo la regula con coherencia perfecta',
    ],
    ambiguous: [
      'Identidad humana original de Goldmask antes de la disciplina silenciosa',
      'Si Corhyn comprende plenamente la filosofía o solo la transmite',
      'Si la corrección final preserva alguna forma de excepcionalidad',
      'Cuánto tiempo lleva Goldmask en disciplina silenciosa',
    ],
    relatedCharacters: ['corhyn', 'gideon', 'radagon', 'marika'],
    relatedFactions: ['fundamentalistas', 'orden-dorado'],
    relatedConcepts: ['golden-order', 'voluntad-mayor', 'law-of-regression', 'elden-ring'],
    relatedRegions: ['leyndell', 'altus-plateau'],
    relatedEndings: ['order'],
    relatedTimelineEvents: ['radagon-repair-attempt'],
  },

  corhyn: {
    slug: 'corhyn',
    subtitle: 'Hermano predicador · Discípulo de Goldmask · Traductor parcial del silencio',
    summary:
      'Brother Corhyn es monje del Orden Dorado que abandona su puesto en la Mesa Redonda para acompañar a Goldmask en su peregrinación filosófica. Su devoción es total: sigue al maestro silencioso por todo el continente intentando comprender lo que él contempla. Su rol cosmológico es testimonio — estar presente en el momento de la corrección de la Ley Mayor. Su tragedia es que nunca termina de entender la filosofía que apoya, solo de creer en el monje que la formula.',
    deepLore: [
      h(2, 'Origen: predicador de la Mesa Redonda', 'origen'),
      p(
        'Corhyn comenzó como predicador menor en la ',
        link('Mesa Redonda', 'concept', 'tarnished'),
        ', enseñando los rezos del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' a Tarnished retornados que llegaban sin doctrina. Su biblioteca personal incluía incantaciones del Árbol Áureo, plegarias al ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ', textos sobre la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        '. Era erudito menor, no figura central — operaba con la modestia institucional típica del clero del régimen.'
      ),
      h(2, 'El encuentro con Goldmask', 'encuentro'),
      p(
        'Cuando ',
        link('Goldmask', 'character', 'goldmask'),
        ' apareció en las Tierras Intermedias cargando consigo la disciplina silenciosa de los ',
        link('Fundamentalistas', 'faction', 'fundamentalistas'),
        ', Corhyn experimentó conversión filosófica inmediata. Abandonó su puesto en la Mesa Redonda — un acto institucional menor pero personalmente decisivo — y comenzó a seguir a Goldmask por el continente. Su filosofía fue clara desde el inicio: él no aspiraba a comprender plenamente lo que Goldmask contempla, sino a estar presente cuando la contemplación culmine.'
      ),
      h(2, 'El traductor parcial', 'traductor'),
      p(
        'Su función operativa: traducir parcialmente los pensamientos no pronunciados de Goldmask. Cuando el monje silencioso hace gestos, contempla un símbolo, o se detiene ante un altar, Corhyn ofrece interpretación al Tarnished y a otros NPCs. Las interpretaciones son aproximadas — Corhyn admite repetidamente que no comprende plenamente. Pero su transmisión preserva al menos parcialmente la dirección filosófica del proyecto. Es traductor honesto: nunca pretende comprensión completa, siempre transmite la fracción que captura.'
      ),
      h(2, 'La culminación: testigo del Orden', 'culminacion'),
      p(
        'Si el Tarnished apoya la quest hasta el final, Corhyn está presente en la Capital Real cuando Goldmask aplica la ',
        link('Ley de la Regresión', 'concept', 'law-of-regression'),
        ' al Anillo Elden. Su rol cosmológico exacto: ser testimonio humano del momento. La operación de Goldmask requiere observador — no por necesidad técnica, sino para que la corrección no se haga en aislamiento absoluto. Corhyn es la presencia humana que asegura que la Ley reformada conserva al menos un punto de contacto con la subjetividad. Tras la culminación, ambos quedan como reliquias doradas en la Capital — Goldmask formulando, Corhyn observando, ambos preservados en el momento del cambio cosmológico.'
      ),
      h(2, 'Significado simbólico', 'tematica'),
      p(
        'Corhyn es el monumento del juego a la fe sin comprensión completa. Sigue a Goldmask sin entender plenamente; cree sin tener acceso a la justificación filosófica completa; testifica sin haber participado en la formulación. Su devoción plantea la pregunta: ¿es válida la fe sin comprensión? La respuesta del juego es ambigua. Por un lado, Corhyn es ejemplo de devoción genuina, no manipulada. Por otro, su acompañamiento permite que el proyecto culmine — sin él, Goldmask habría sido solo monje silencioso. La fe sin comprensión es, en este caso, condición operativa de la transformación cosmológica.'
      )
    ],
    confirmed: [
      'Corhyn comenzó como predicador menor en la Mesa Redonda',
      'Abandonó su puesto para acompañar a Goldmask',
      'Funciona como traductor parcial de los pensamientos no pronunciados del maestro',
      'Está presente en la Capital Real durante la culminación de la quest',
      'Su devoción es total pero su comprensión es admitidamente parcial',
    ],
    inferred: [
      'Su conversión filosófica fue inmediata e intuitiva, no producto de estudio sistemático',
      'Su transmisión preserva la dirección filosófica aunque pierda detalles técnicos',
      'Su rol cosmológico es asegurar punto de contacto subjetivo con la corrección',
      'Sin él, el proyecto de Goldmask habría sido aislamiento absoluto sin observador',
    ],
    theories: [
      'Corhyn fue alguna vez Tarnished antes de instalarse como predicador',
      'Su comprensión es más profunda de lo que admite y la modestia es estrategia ritual',
      'Goldmask eligió específicamente a Corhyn por su capacidad de fe sin comprensión',
      'Si la Era del Orden falla, Corhyn sería capaz de mantener fragmentos del proyecto',
    ],
    ambiguous: [
      'Si Corhyn entiende plenamente la revelación "Radagon es Marika"',
      'Si su devoción es eligible o estructural a su personalidad',
      'Si tiene biografía pre-Mesa Redonda significativa',
      'Si su preservación final como reliquia dorada es consciente',
    ],
    relatedCharacters: ['goldmask', 'gideon', 'marika', 'radagon'],
    relatedFactions: ['orden-dorado', 'fundamentalistas'],
    relatedConcepts: ['golden-order', 'law-of-regression', 'voluntad-mayor', 'erdtree'],
    relatedRegions: ['leyndell', 'altus-plateau'],
    relatedEndings: ['order'],
  },

  'dung-eater': {
    slug: 'dung-eater',
    subtitle: 'El blasfemo del Sello Mendaz · Profeta del sufrimiento universal · Sadismo cosmológico activo',
    summary:
      'El Dung Eater (Comecagas) es asesino y profanador encarcelado bajo Leyndell — su filosofía única es el sufrimiento como ley universal. No busca poder, no aspira a coronarse, no opera por interés propio: busca instaurar maldición eterna sobre toda la humanidad. Posee Sello Mendaz que, aplicado al Anillo Elden, produce la Bendición de la Desesperación — el final más oscuro del juego. Es uno de los pocos personajes de las Tierras Intermedias cuya motivación es puro sadismo cosmológico sin componente personal.',
    deepLore: [
      h(2, 'Origen: profanador serial', 'origen'),
      p(
        'El Dung Eater es asesino serial cuyos crímenes documentados incluyen: violación de cadáveres, asesinato por placer, profanación sistemática de cuerpos sagrados, contaminación ritual de funerales. Su nombre — el "Comecagas" — no es metáfora: literalmente consume excremento humano como acto ritual de degradación voluntaria. La operación es deliberada: cada profanación reduce su propia humanidad, alineándolo cosmológicamente con la dignidad violada que él inflige a otros. Fue capturado eventualmente y encarcelado en el Subterranean Shunning-Grounds bajo ',
        link('Leyndell', 'region', 'leyndell'),
        ' — el mismo sistema penitenciario que alberga a los Omens.'
      ),
      h(2, 'Filosofía: el sufrimiento universal', 'filosofia'),
      p(
        'A diferencia de la mayoría de villanos de las Tierras Intermedias (que buscan poder, dominio cosmológico, o servicio a un dios externo específico), el Dung Eater no busca nada para sí mismo. Su filosofía es internamente coherente y atroz: el cosmos contiene sufrimiento, los humanos lo experimentan en cantidades variables, la justicia cosmológica requiere igualar el sufrimiento universalizándolo. Si todos sufren la misma maldición eterna, nadie sufre injustamente más que otros. La operación es nihilista pero formalmente igualitaria — todos condenados por igual. Su sadismo no es desigual: es democrático.'
      ),
      h(2, 'El Sello Mendaz', 'sello'),
      p(
        'Posee un Sello Mendaz (',
        em('Seedbed Curse'),
        ') — marca cosmológica que cuando se aplica a un Anillo Elden coronado produce maldición específica: condena eterna sobre quien lleve el sello. La operación tiene precondición ritual cruel: el Sello debe ser "sembrado" en víctimas vivas antes de poder aplicarse al Anillo. Cada víctima sembrada amplifica la potencia del Sello. El Dung Eater necesita asistencia operativa para sembrar cuerpos en distintas regiones — y aquí entra el Tarnished como cómplice potencial.'
      ),
      h(2, 'La quest del cómplice', 'quest'),
      p(
        'El Dung Eater puede ofrecer al Tarnished cuerpos específicos para profanar ritualmente con el Sello Mendaz. La operación es desafío moral explícito: el Tarnished que acepta se vuelve cómplice activo de la profanación. Cada cuerpo sembrado debe ser regresado al Dung Eater encarcelado, quien lo procesa ritualmente para amplificar la maldición. La quest culmina con suficientes víctimas sembradas para que el Sello tenga potencia cosmológica completa. El Tarnished puede entonces aplicarlo al Anillo Elden tras la coronación final, produciendo la ',
        link('Bendición de la Desesperación', 'ending', 'despair'),
        '.'
      ),
      h(2, 'La Bendición de la Desesperación', 'bendicion'),
      p(
        'El final más oscuro del juego. Si el Tarnished elige este camino, su coronación como Señor Elden viene acompañada de la maldición universal. Toda la humanidad de las Tierras Intermedias carga el Sello Mendaz como condición ontológica. Cada persona, cada Tarnished futuro, cada nacimiento subsiguiente — todos cargan eterna desesperación cosmológica. La operación no destruye las Tierras Intermedias (',
        em('eso lo hace la Llama Frenética'),
        ') pero lo condena a sufrimiento perpetuo sin escape posible. El régimen continúa operando mecánicamente, pero cada habitante experimenta condena consciente. Es la utopía nihilista del Dung Eater: igualdad por degradación universal.'
      ),
      h(2, 'Significado simbólico', 'tematica'),
      p(
        'El Dung Eater es el monumento del juego al sadismo como filosofía coherente. La pregunta más oscura: ¿es defendible una postura cuya conclusión lógica es la condena universal? Su filosofía es internamente consistente — si el sufrimiento es estructural al cosmos, igualarlo democratiza la condición. Pero la operación requiere agencia activa: alguien debe sembrar las víctimas, alguien debe aplicar el Sello, alguien debe coronarse para activar la maldición. El Tarnished que ejecuta la quest del Dung Eater se vuelve cómplice cosmológico de su filosofía. La pregunta para el jugador es ética antes que cosmológica: ¿qué hace falta para asistir a alguien cuya filosofía es la condena universal? La respuesta del juego: esa elección es enteramente del jugador. El Dung Eater solo ofrece la herramienta. La aplicación es tuya.'
      )
    ],
    confirmed: [
      'El Dung Eater es asesino serial encarcelado en el Subterranean Shunning-Grounds',
      'Sus crímenes incluyen violación de cadáveres, asesinato por placer, profanación ritual',
      'Posee Sello Mendaz que produce maldición eterna al aplicarse al Anillo Elden',
      'El Sello requiere ser sembrado en víctimas vivas para alcanzar potencia completa',
      'El Tarnished puede asistirlo recolectando y devolviendo cuerpos sembrados',
      'Su quest produce la Bendición de la Desesperación — el final más oscuro del juego',
    ],
    inferred: [
      'Su filosofía es internamente coherente y formalmente igualitaria',
      'Su sadismo es cosmológico, no personal — busca condena universal, no venganza específica',
      'La consumición ritual de excremento es alineamiento cosmológico con la dignidad violada',
      'El Tarnished que ejecuta su quest se vuelve cómplice cosmológico activo',
    ],
    theories: [
      'El Sello Mendaz tiene origen pre-Orden, posiblemente derivado de tecnología Pieles de Dios',
      'Existieron otros profanadores con filosofías similares cuyos sellos no fueron preservados',
      'Su existencia fue tolerada por el régimen como vehículo potencial de un final cosmológico extremo',
      'Conoce el secreto de cómo amplificar el Sello mediante ofrendas adicionales que el juego no documenta',
    ],
    ambiguous: [
      'Identidad humana original del Dung Eater antes de la profanación',
      'Origen exacto del Sello Mendaz y cómo llegó a sus manos',
      'Si la Bendición de la Desesperación es reversible bajo cosmología posterior',
      'Si tiene cómplices fuera del Subterránean Shunning-Grounds',
    ],
    relatedCharacters: ['d', 'shabriri'],
    relatedFactions: ['orden-dorado', 'frenzied-victims'],
    relatedRegions: ['leyndell', 'subterranean-shunning-grounds'],
    relatedConcepts: ['great-rune', 'elden-ring', 'omen-curse'],
    relatedEndings: ['despair'],
  },

  /* ══════════════════════════ NPCs SECUNDARIOS ══════════════════════════ */

  'nepheli-loux': {
    slug: 'nepheli-loux',
    subtitle: 'Hija adoptiva de Gideon · Heredera del Storm Hawk King · Aspirante al trono de Stormveil',
    summary:
      'Nepheli Loux es guerrera Tarnished criada por Gideon Ofnir como hija adoptiva. Lleva la sangre del Storm Hawk King — linaje pre-Árbol Áureo que gobernó Limgrave antes de que Godfrey conquistara la región. Su derecho ancestral a Stormveil es estructuralmente más antiguo que el de Godrick. Si su questline se completa con asistencia del Tarnished, es coronada como nueva regente del castillo, restaurando la línea pre-dorada que el régimen había desplazado eras atrás.',
    deepLore: [
      h(2, 'Origen: el linaje del Storm Hawk King', 'origen'),
      p(
        'Nepheli pertenece al linaje del Storm Hawk King — la dinastía pre-Árbol Áureo que gobernó Limgrave antes de que ',
        link('Godfrey', 'character', 'godfrey'),
        ' conquistara la región como Primer Señor Elden. El Storm Hawk King era cosmológicamente vinculado a las tormentas de la región, su autoridad procedía de tradición chamánica del viento. Cuando Godfrey lo derrotó, el linaje no fue exterminado — fue dispersado, marginalizado, gradualmente olvidado por el régimen oficial. Nepheli es descendiente lateral cuyas trazas raciales (físicamente robusta, capacidad marcial superior, afinidad natural con magia del viento) la marcan como heredera aunque ella misma no sepa la genealogía completa.'
      ),
      h(2, 'La hija prestada', 'hija'),
      p(
        'Nepheli fue encontrada huérfana por ',
        link('Kenneth Haight', 'character', 'kenneth-haight'),
        ' (noble menor de Limgrave que reclama derecho ancestral propio al Storm Hawk King). Kenneth la entregó a ',
        link('Gideon Ofnir', 'character', 'gideon'),
        ' para que la criara en la ',
        link('Mesa Redonda', 'concept', 'tarnished'),
        '. La operación fue probablemente coordinada — Kenneth reconoció el linaje, Gideon aceptó criarla precisamente por ese reconocimiento. Su crianza fue híbrida: erudición Roundtable, entrenamiento marcial, exposición a doctrinas cosmológicas del régimen oficial. Pero su sangre del Storm Hawk King le dio capacidad innata que la educación no podía explicar.'
      ),
      h(2, 'La crisis tras Godrick', 'crisis'),
      p(
        'Si el Tarnished invita a Nepheli a participar en la batalla contra ',
        link('Godrick', 'character', 'godrick'),
        ' en Stormveil, ella combate con valor. Tras la victoria, queda en shock cosmológico: ha matado a un demidiós, acto demasiado grande para procesar. Su crianza la había preparado para servir al régimen, no para destruirlo. La crisis es genuina — no sabe qué hacer consigo misma. Vagabundea por la Mesa Redonda, sin propósito, sin dirección.'
      ),
      h(2, 'El Stormhawk Deenh: el reconocimiento', 'reconocimiento'),
      p(
        'El Tarnished puede entregarle el ',
        em('Stormhawk Deenh'),
        ' — talismán pre-Orden que invoca el ánimo del antiguo Storm Hawk King. El objeto es reliquia rara, encontrada en Stormveil mismo. Cuando Nepheli lo recibe, experimenta reconocimiento cosmológico: la sangre del rey-tormenta resuena con el ánimo invocado, y ella comprende su linaje por primera vez. Su crisis se resuelve no por explicación racional sino por reconocimiento ritual. Encuentra propósito específico: reclamar Stormveil como heredera legítima.'
      ),
      h(2, 'La coronación', 'coronacion'),
      p(
        'Con el Stormhawk Deenh activo, Nepheli regresa a Stormveil. Kenneth Haight la recibe como heredera y oficia ritualmente su coronación como nueva regente del castillo. La operación es cosmológicamente significativa: por primera vez en eras, una autoridad pre-Orden Dorado regresa a posición de poder. Stormveil deja de ser fortaleza del régimen dorado y se convierte en santuario del linaje del Storm Hawk King. Nepheli no se proclama rebelde contra el régimen — solo restaura tradición que el régimen había desplazado. Su coronación es uno de los pocos cambios político-cosmológicos genuinamente positivos del juego.'
      ),
      h(2, 'Significado simbólico', 'tematica'),
      p(
        'Nepheli es el monumento del juego a los linajes desplazados que regresan. Su sangre del Storm Hawk King estaba dispersa pero no extinta. Su crianza la había alejado de su origen, pero la sangre prevaleció con el reconocimiento ritual correcto. La pregunta filosófica: ¿pueden las tradiciones pre-régimen retornar genuinamente, o son solo reliquias arqueológicas? La quest de Nepheli responde: pueden retornar, pero requieren reconocimiento ritual específico (el talismán) y agentes externos (el Tarnished) capaces de catalizar el momento. Las tradiciones marginalizadas no se restauran solas — necesitan condiciones cosmológicas precisas. Nepheli las tuvo. Su Stormveil restaurado es uno de los pocos lugares de las Tierras Intermedias donde el régimen dorado ha cedido espacio sin destruir lo que estaba ahí antes.'
      )
    ],
    confirmed: [
      'Nepheli fue criada por Gideon como hija adoptiva',
      'Posee sangre del Storm Hawk King, linaje pre-Godfrey de Limgrave',
      'Kenneth Haight la encontró huérfana y la entregó a Gideon',
      'Si recibe el Stormhawk Deenh tras la victoria contra Godrick, encuentra propósito',
      'Puede coronarse como nueva regente de Stormveil con asistencia ritual de Kenneth',
      'Su capacidad marcial es innata, derivada del linaje',
    ],
    inferred: [
      'Su derecho ancestral a Stormveil es estructuralmente más antiguo que el de Godrick',
      'Gideon la crió específicamente sabiendo el linaje, en coordinación con Kenneth',
      'Su crianza Roundtable la alejó de su origen pero la sangre prevaleció con reconocimiento ritual',
      'Su coronación restaura linaje pre-Orden sin derrocar al régimen oficial',
    ],
    theories: [
      'Gideon previó específicamente la caída del Lineaje Dorado y la preparó como heredera alternativa',
      'El Stormhawk Deenh contiene fragmento del alma del Storm Hawk King original',
      'Existen otros descendientes laterales del Storm Hawk King en regiones que el juego no documenta',
      'Su victoria sobre Godrick le da derecho ritual a la Gran Runa pero no la reclama por elección',
    ],
    ambiguous: [
      'Si Gideon le ocultó el linaje deliberadamente o solo no lo enunció',
      'Identidad y trayectoria de sus padres biológicos',
      'Si su coronación es reversible si el régimen central reactivara fuerza punitiva',
      'Si Marika sabe del retorno del linaje y lo permite',
    ],
    relatedCharacters: ['gideon', 'kenneth-haight', 'godrick', 'godfrey'],
    relatedRegions: ['limgrave', 'stormveil'],
    relatedFactions: ['orden-dorado'],
    relatedConcepts: ['great-rune', 'tarnished'],
    relatedTimelineEvents: ['exilio-godfrey'],
  },

  'kenneth-haight': {
    slug: 'kenneth-haight',
    subtitle: 'Heredero exiliado de Limgrave · Reclamante del Storm Hawk King · Tutor secreto del linaje',
    summary:
      'Kenneth Haight es noble menor de Limgrave que reclama derecho ancestral al castillo de Stormveil como descendiente del Storm Hawk King. Su pretensión es genuina pero impotente — sin ejército, sin influencia, solo convicción. Encontró a Nepheli Loux huérfana y la entregó a Gideon para crianza, probablemente reconociendo en ella la sangre del rey-tormenta. Si la quest culmina, oficia su coronación en Stormveil restaurando el linaje pre-dorado mediante una Tarnished que ni siquiera sabía su origen.',
    deepLore: [
      h(2, 'Origen: noble menor desplazado', 'origen'),
      p(
        'Kenneth Haight pertenece al linaje del Storm Hawk King — la dinastía pre-Árbol Áureo que gobernó Limgrave antes de que ',
        link('Godfrey', 'character', 'godfrey'),
        ' conquistara la región. Pero su rama del linaje es lateral: descendientes que sobrevivieron en posiciones nobiliarias menores tras la consolidación del régimen dorado. Su título como Lord Haight es nominal — refiere a un fuerte familiar (Fort Haight en Limgrave oriental) que técnicamente le pertenece pero del que está desplazado por bandidos. Es nobleza vacía: estatus sin recursos, derecho sin medios, herencia sin patrimonio operativo.'
      ),
      h(2, 'La pretensión solitaria', 'pretension'),
      p(
        'Kenneth se posiciona explícitamente como heredero legítimo de Stormveil. Su lógica: el Storm Hawk King precedió al Linaje Dorado, su sangre tiene derecho ancestral más antiguo, ',
        link('Godrick', 'character', 'godrick'),
        ' es usurpador genealógico. La pretensión es jurídicamente correcta dentro del marco pre-Orden — pero el régimen actual no reconoce ese marco. Sin ejército, sin aliados, sin influencia, sin Gracia significativa, su pretensión es solo convicción persistente. Vive como sirviente itinerante de su propio derecho ancestral.'
      ),
      h(2, 'El tutor secreto de Nepheli', 'tutor'),
      p(
        'Cuando encontró huérfana a ',
        link('Nepheli Loux', 'character', 'nepheli-loux'),
        ', Kenneth probablemente reconoció en ella signos de la sangre del Storm Hawk King — capacidad marcial innata, afinidad con el viento, presencia física específica. La entregó a ',
        link('Gideon Ofnir', 'character', 'gideon'),
        ' para que la criara en la Mesa Redonda. La operación fue probablemente coordinada — Kenneth reconoció el linaje, Gideon aceptó precisamente por ese reconocimiento. Kenneth nunca le dijo a Nepheli su origen genealógico; esperaba que el reconocimiento ritual ocurriera por otros medios cuando el momento fuera propicio.'
      ),
      h(2, 'El plan de restauración', 'plan'),
      p(
        'Su plan a largo plazo: aprovechar la fractura del régimen para restaurar el linaje pre-dorado en Stormveil. La operación específica requiere: 1) Caída de Godrick (que el Tarnished puede ejecutar). 2) Reconocimiento ritual de Nepheli como heredera (mediante el ',
        em('Stormhawk Deenh'),
        '). 3) Coronación oficial — que Kenneth puede oficiar como noble del linaje. 4) Aceptación tácita del régimen central (que está demasiado fragmentado post-fractura para oponerse activamente). El plan funciona si todas las condiciones convergen. Si una falla, Kenneth queda como pretendiente sin trono.'
      ),
      h(2, 'La quest del fuerte', 'fuerte'),
      p(
        'La quest visible de Kenneth para el Tarnished es modesta: recuperar Fort Haight de bandidos. La operación es militar simple — el Tarnished derrota a los bandidos y libera el fuerte. Kenneth lo recibe agradecidamente y comienza a operar desde ahí. Pero la quest real es paralela: si el Tarnished también asiste a Nepheli en su crisis post-Godrick, Kenneth aparece en Stormveil para oficiar la coronación. Las dos quests son aparentemente independientes pero estructuralmente entrelazadas: el Tarnished que las completa ambas restaura el linaje pre-dorado en Limgrave entero.'
      ),
      h(2, 'Significado simbólico', 'tematica'),
      p(
        'Kenneth Haight es el monumento del juego a la nobleza desplazada que persiste. Otros nobles de las Tierras Intermedias son aristócratas activos del régimen actual (los nobles del Volcano Manor, los caballeros dorados); Kenneth es noble de régimen anterior cuya autoridad nunca fue reconocida en su tiempo de vida. Su existencia plantea la pregunta sobre legitimidad histórica versus legitimidad operativa. La operativa pertenece al régimen del Orden Dorado; la histórica le pertenece a Kenneth y al linaje del Storm Hawk King. Su quest demuestra que la legitimidad histórica puede recuperar fuerza operativa bajo condiciones específicas: cuando el régimen actual se fragmenta y existe agente externo (el Tarnished) capaz de catalizar la restauración. Kenneth es la prueba paciente de que las dinastías desplazadas no siempre desaparecen — a veces solo esperan.'
      )
    ],
    confirmed: [
      'Kenneth Haight es noble menor del linaje del Storm Hawk King',
      'Reclama derecho ancestral a Stormveil como heredero pre-dorado',
      'Encontró huérfana a Nepheli Loux y la entregó a Gideon para crianza',
      'Si Nepheli vence a Godrick y recibe reconocimiento ritual, Kenneth oficia su coronación',
      'Su quest visible es recuperar Fort Haight de bandidos',
      'Su plan a largo plazo es restaurar el linaje pre-dorado en Stormveil',
    ],
    inferred: [
      'Reconoció la sangre del Storm Hawk King en Nepheli huérfana',
      'Coordinó con Gideon la crianza de Nepheli como heredera potencial',
      'Su pretensión es jurídicamente correcta dentro del marco pre-Orden',
      'Su rol post-fractura aprovecha la fragmentación del régimen central',
    ],
    theories: [
      'Conoce el procedimiento ritual completo de coronación pre-dorada',
      'Existen otros nobles del linaje del Storm Hawk King ocultos en Limgrave',
      'Su título Haight es derivación nominal del linaje real más antiguo',
      'Tuvo contacto previo con la Mesa Redonda fuera de la conexión Nepheli-Gideon',
    ],
    ambiguous: [
      'Genealogía exacta entre Kenneth y el Storm Hawk King original',
      'Cuándo encontró a Nepheli huérfana y bajo qué circunstancias',
      'Si Marika sabe del retorno del linaje y lo permite tácitamente',
      'Si tendrá rol activo bajo cosmología post-Voluntad Mayor',
    ],
    relatedCharacters: ['nepheli-loux', 'godrick', 'gideon', 'godfrey'],
    relatedFactions: ['orden-dorado'],
    relatedRegions: ['limgrave', 'stormveil'],
    relatedConcepts: ['tarnished', 'grace'],
    relatedTimelineEvents: ['exilio-godfrey'],
  },

  'jar-bairn': {
    slug: 'jar-bairn',
    subtitle: 'Niño-jarra heredero de Jarburg · Posible primer Jar nacido · Inocencia frágil cargando legado',
    summary:
      'Jar-Bairn es el joven Living Jar de la aldea de Jarburg en Liurnia. La aldea lo ha nombrado heredero — posiblemente porque es el primer Jar nacido en lugar de fabricado, lo que plantearía especie con derechos propios. Su quest es búsqueda existencial: descubrir qué significa ser un Jar, si los Jars tienen alma, dignidad y futuro. Su héroe es Iron Fist Alexander; cuando el Tarnished le anuncia la muerte de Alexander, pierde la inocencia. Diallos murió defendiendo Jarburg para que él sobreviviera.',
    deepLore: [
      h(2, 'Origen: posible primer Jar nacido', 'origen'),
      p(
        'Los ',
        link('Living Jars', 'faction', 'living-jars'),
        ' son contenedores rituales que tradicionalmente se fabrican: cadáveres de criminales fermentados con técnicas alquímicas pre-Orden, almas conservadas dentro de cerámica protectora. La fabricación es ritual conocido aunque costoso. Jar-Bairn es excepción documentada: no fue fabricado sino que ',
        em('nació'),
        '. Sus creadores aparentes (su tutora Iris y otros Jars adultos de Jarburg) lo cuidan como cría natural. Si la información es exacta, Jar-Bairn sería el primer Jar nacido de las Tierras Intermedias — lo que cambiaría la categoría ontológica de los Living Jars de utensilios fabricados a especie con reproducción propia.'
      ),
      h(2, 'Jarburg: la aldea pacífica', 'jarburg'),
      p(
        link('Jarburg', 'region', 'liurnia'),
        ' es una de las aldeas más pacíficas de las Tierras Intermedias. Sus habitantes Jars cultivan flores, cuidan a los más jóvenes, mantienen tradiciones rituales sin pretensiones cosmológicas. La paz es deliberada: el pueblo eligió esta forma de existencia precisamente para escapar de las violencias del régimen exterior. Jar-Bairn fue criado en este ambiente — su infancia es probablemente la única infancia plenamente protegida documentada en el juego.'
      ),
      h(2, 'El sacrificio de Diallos', 'diallos'),
      p(
        'En cierto momento de su quest, un atacante humano invade Jarburg para masacrar a sus habitantes. Los Living Jars no son combatientes — son frágiles cerámicamente. Sin defensa, la aldea entera caería. ',
        link('Diallos', 'character', 'diallos'),
        ', noble pacifista que había encontrado refugio espiritual en Jarburg, levanta la espada por primera vez en su vida. Defiende la puerta. Mata al atacante. Muere por las heridas. Jar-Bairn sobrevive específicamente porque otro eligió morir por él. La operación es uno de los momentos más conmovedores del juego: alguien que había rechazado la violencia toda su vida la abraza para proteger a un niño-jarra.'
      ),
      h(2, 'La búsqueda del legado de Alexander', 'alexander'),
      p(
        'Su héroe es ',
        link('Iron Fist Alexander', 'character', 'alexander'),
        ', el Warrior Jar más famoso de las Tierras Intermedias. Aspira a convertirse en Olla Guerrera y emular su trayectoria — viajar al ',
        link('Castillo Redmane', 'region', 'redmane-castle'),
        ' para entrenamiento marcial, completar pruebas de fuerza, eventualmente convertirse en guerrero respetado del nivel de Alexander. Cuando el Tarnished le anuncia la muerte de Alexander (que ocurre durante el Festival de Radahn), Jar-Bairn pierde la inocencia — comprende por primera vez que el camino del guerrero termina en ruptura, no en gloria. Recibe el corazón fragmentado de Alexander como reliquia heredada. La operación lo cambia: ya no es niño que aspira a héroe, es heredero que carga legado.'
      ),
      h(2, 'Significado simbólico', 'tematica'),
      p(
        'Jar-Bairn es el monumento del juego a la inocencia preservada por sangre adulta. Vive porque Diallos eligió morir. Es niño porque otros eligieron no serlo más. Su aspiración a ser Olla Guerrera es ambición legítima — pero también es, implícitamente, agradecimiento al sacrificio del que lo salvó. Cada paso futuro es deuda devuelta. Su existencia plantea la pregunta más tierna del juego: ¿qué hace el cosmos con la inocencia que se preserva? La respuesta del juego: la inocencia preservada se convierte en legado consciente. Jar-Bairn no permanecerá inocente eternamente — pero su pérdida de inocencia será gradual y consciente, no traumática y forzada. Es uno de los pocos personajes del juego cuyo futuro es genuinamente esperanzador.'
      )
    ],
    confirmed: [
      'Jar-Bairn es el joven Living Jar de Jarburg',
      'Iris (su tutora) y otros Jars adultos lo cuidan como cría natural',
      'La aldea lo nombra heredero — posiblemente el primer Jar nacido en lugar de fabricado',
      'Aspira a ser Olla Guerrera como Iron Fist Alexander',
      'Diallos muere defendiéndolo de un atacante humano',
      'Recibe el corazón fragmentado de Alexander como reliquia heredada',
      'Sobrevive al ataque y planea viajar al Castillo Redmane',
    ],
    inferred: [
      'Si es genuinamente el primer Jar nacido, los Living Jars cambian de utensilios a especie',
      'Su pueblo eligió la paz deliberadamente para escapar de las violencias del régimen',
      'El atacante específico procedía probablemente del Volcano Manor o de los Bloody Fingers',
      'Su transformación final lo conectaría con el legado completo de Alexander',
    ],
    theories: [
      'Iris fue alguna vez humana antes de convertirse en Living Jar',
      'Jar-Bairn contiene un alma humana específica con memoria latente',
      'La aldea de Jarburg es resto de una comunidad mucho mayor masacrada en eras pasadas',
      'Bajo cosmología distinta podría haber especie de Jars naturales en otras regiones',
    ],
    ambiguous: [
      'Si genuinamente nació o fue fabricado de manera distinta a la tradicional',
      'Origen exacto del atacante específico',
      'Si Jar-Bairn alcanza Redmane Castle más allá del final del juego',
      'Si conserva memoria humana original o solo identidad cerámica nueva',
    ],
    relatedCharacters: ['alexander', 'diallos', 'boggart'],
    relatedFactions: ['living-jars', 'nomadic-merchants'],
    relatedRegions: ['liurnia', 'redmane-castle'],
  },

  miriel: {
    slug: 'miriel',
    subtitle: 'Pastor de Votos · Tortuga ancestral · Único creyente honesto de las Tierras Intermedias',
    summary:
      'Miriel es tortuga ancestral que sirve como pastor de la Iglesia de Vows en Liurnia. Devoto del Orden Dorado en su forma original, archivista de incantaciones y plegarias, predicador de una compasión que el régimen institucional ya olvidó. Es uno de los pocos seres de las Tierras Intermedias que conserva fe genuina sin amargura ni ambición. Su serenidad es estructural — no le procede de ignorancia sino de aceptación contemplativa.',
    deepLore: [
      h(2, 'Naturaleza tortuga', 'naturaleza'),
      p(
        'Miriel es tortuga ancestral — no es metáfora, es categoría biológica. Su especie precede al ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' como criatura del ',
        link('Crisol', 'concept', 'crucible'),
        ' que el régimen toleró por su naturaleza pacífica. Su esperanza de vida es cosmológicamente larga: testigos de eras enteras pasan ante sus ojos. Cada generación humana de las Tierras Intermedias son para Miriel breve estación. Esta perspectiva temporal es lo que produce su serenidad: ha visto regímenes anteriores caer, sabe que el actual también caerá, y sirve sin desesperación.'
      ),
      h(2, 'La Iglesia de Vows', 'iglesia'),
      p(
        'Su iglesia está medio abandonada en Liurnia. El régimen ya no envía visitantes regulares; los peregrinos son raros; los ritos institucionales se han marchitado. Miriel permanece. Cumple deberes para congregación que rara vez aparece: enseña incantaciones a Tarnished que llegan, vende plegarias a quien las pida, archiva textos rituales que ningún clérigo central reclama. Su iglesia es uno de los pocos santuarios de las Tierras Intermedias donde la fe se practica sin pretensión política — el régimen no lo necesita, así que no lo politiza.'
      ),
      h(2, 'Función pedagógica', 'pedagogica'),
      p(
        'El Tarnished que llega a Miriel encuentra tutor. Le ofrece incantaciones del Orden Dorado, plegarias menores, hechizos derivados. Su biblioteca personal incluye textos sobre el ',
        link('Árbol Áureo', 'concept', 'erdtree'),
        ', plegarias al ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ', y derivaciones rituales que solo él archiva. A diferencia de ',
        link('Goldmask', 'character', 'goldmask'),
        ' (que critica el Orden) o ',
        link('Brother Corhyn', 'character', 'corhyn'),
        ' (que aspira a renovarlo), Miriel simplemente lo transmite sin pretensión de reformarlo.'
      ),
      h(2, 'Fe sin amargura', 'fe'),
      p(
        'Su característica más distintiva: serenidad sin negación. Miriel no ignora la crisis del régimen — es plenamente consciente de que la ',
        link('Voluntad Mayor', 'concept', 'voluntad-mayor'),
        ' se ha retirado parcialmente, de que los Dos Dedos se deterioran, de que el Árbol Áureo contiene corrupción profunda. Pero acepta sin desesperación. Su filosofía implícita: cada cosmología tiene su tiempo, cada régimen tiene su declive, y servir genuinamente lo que existe es valioso aunque sea transitorio. Es el caso límite del creyente honesto en cosmos donde la fe institucional ha perdido coherencia política.'
      ),
      h(2, 'Significado simbólico', 'tematica'),
      p(
        'Miriel es el monumento del juego a la fe contemplativa que sobrevive sin requerir refundación. Otros personajes responden a la crisis del régimen con propuestas (Goldmask reforma, Fia restauración, Ranni sustitución, Mohg blasfemia, Shabriri extinción). Miriel responde con servicio honesto sin propuesta. La pregunta filosófica: ¿es válido servir genuinamente lo que se sabe transitorio? La respuesta del juego es: probablemente sí. Su serenidad es estructural, no producto de ignorancia. Cada Tarnished que se detiene en su iglesia recibe lo único que el régimen pre-fractura podía ofrecer auténticamente: tradición transmitida sin manipulación. Su existencia continua bajo cualquier final del juego es prueba de que lo contemplativo trasciende lo cosmológico.'
      )
    ],
    confirmed: [
      'Miriel es tortuga ancestral, especie pre-Orden Dorado',
      'Sirve como pastor de la Iglesia de Vows en Liurnia',
      'Vende incantaciones y plegarias del Orden Dorado al Tarnished',
      'Su iglesia está medio abandonada por el régimen institucional',
      'Es plenamente consciente de la crisis del régimen pero la acepta sin desesperación',
    ],
    inferred: [
      'Su esperanza de vida es cosmológicamente larga, ha visto regímenes anteriores',
      'Su perspectiva temporal larga produce su serenidad estructural',
      'Su biblioteca incluye textos rituales que ningún clérigo central archiva',
      'Su tradición es la única transmisión no politizada del Orden Dorado disponible',
    ],
    theories: [
      'Recuerda parcialmente eras pre-Orden y elige no compartir la información',
      'Conoce a Marika personalmente desde antes de la fundación del régimen',
      'Su especie de tortugas ancestrales tenía función ritual específica en el Crisol original',
      'Sobrevive a cualquier final del juego por su neutralidad cosmológica',
    ],
    ambiguous: [
      'Edad exacta y trayectoria pre-Iglesia de Vows',
      'Si conoce el secreto "Radagon es Marika" pero elige no enunciarlo',
      'Si su tortugaidad es congénita o transformación ritual',
      'Si tiene contemporáneos de su especie en otras regiones',
    ],
    relatedCharacters: ['goldmask', 'corhyn', 'marika', 'radagon'],
    relatedFactions: ['orden-dorado', 'fundamentalistas'],
    relatedRegions: ['liurnia'],
    relatedConcepts: ['golden-order', 'erdtree', 'voluntad-mayor', 'crucible'],
  },

  gostoc: {
    slug: 'gostoc',
    subtitle: 'Portero de Stormveil · Traidor profesional · Reverso del ideal heroico',
    summary:
      'Gostoc es sirviente del castillo Stormveil que sobrevivió a Godrick mediante traición sistemática. Se autodescribe como portero, pero hizo de todo en Stormveil bajo Godrick: mensajero, espía, ladrón de cadáveres caídos. Su filosofía es supervivencia pura — no le importa quién gobierne, solo que él siga vivo bajo la nueva administración. Si el Tarnished lo perdona, intentará robarle también, y si lo descubren, se disculpará y se venderá al siguiente vencedor. Es el reverso exacto de cualquier ideal heroico.',
    deepLore: [
      h(2, 'Origen: el sirviente sin lealtad', 'origen'),
      p(
        'Gostoc apareció en Stormveil hace años — su origen exacto es opaco. Se ofreció como sirviente menor, demostró capacidad operativa básica, fue aceptado como portero y mensajero. Su rol oficial era modesto pero su acceso era amplio: como portero conocía cada pasaje secreto, cada puerta lateral, cada momento del día con menor vigilancia. Su capacidad para operar en las sombras no procedía de habilidad excepcional sino de invisibilidad social — nadie presta atención al portero, nadie lo considera amenaza, nadie lo vigila con cuidado.'
      ),
      h(2, 'Operaciones bajo Godrick', 'godrick'),
      p(
        'Bajo el reino de ',
        link('Godrick', 'character', 'godrick'),
        ', Gostoc desempeñó múltiples funciones simultáneas: portero oficial, mensajero entre niveles del castillo, espía de bajo perfil, y — su operación más lucrativa — ladrón de cadáveres caídos. Cuando Tarnished invasores morían en Stormveil intentando derrotar a Godrick, Gostoc registraba sus cuerpos antes de que el régimen oficial los procesara. Sustraía runas, equipos valiosos, talismanes. La operación era sistemática, eficiente, y completamente fuera del conocimiento de Godrick. Durante años acumuló pequeña fortuna personal mediante carroña ritualizada.'
      ),
      h(2, 'La traición de Godrick', 'traicion'),
      p(
        'Cuando el Tarnished protagonista llega a Stormveil, Gostoc detecta inmediatamente la posibilidad de cambio de régimen. Su operación es coherente: ofrece al Tarnished pasajes secretos, advertencias estratégicas, información sobre la posición de Godrick — todo a cambio de pequeñas cantidades de runas. La traición no procede de oposición a Godrick (a Gostoc no le importa Godrick) sino de cálculo de probabilidades: si el Tarnished tiene posibilidad razonable de ganar, alinearse con él temprano es mejor inversión que mantener lealtad inútil al régimen perdedor. Es traición sin componente moral — solo análisis costo-beneficio.'
      ),
      h(2, 'El segundo robo', 'segundo'),
      p(
        'Tras la victoria del Tarnished, Gostoc intenta robar runas adicionales mediante una segunda operación: aparentar muerte propia o desviar atención durante combates en Stormveil. Si el Tarnished lo descubre, Gostoc se disculpa con elegancia — admite el robo, devuelve parcialmente las runas, ofrece nuevos servicios. Si el Tarnished decide ejecutarlo, no resiste: se rinde inmediatamente, suplica con dignidad genuina, y muere sin drama. Su filosofía es coherente hasta el final: ',
        em('mejor seguir vivo bajo cualquier administración que muerto bajo cualquier ideal'),
        '.'
      ),
      h(2, 'Significado simbólico', 'tematica'),
      p(
        'Gostoc es el monumento del juego al reverso del ideal heroico. Otros NPCs eligen rumbos por convicción (lealtad de Iji a Ranni, devoción de Corhyn a Goldmask, vocación de Fia hacia el Crepúsculo). Gostoc no elige rumbo — solo se adapta al rumbo más probable de éxito. La pregunta filosófica: ¿es despreciable la supervivencia oportunista? El juego no responde claramente. Por un lado, Gostoc es ejemplo claro de lo que el sistema produce cuando los grandes proyectos colapsan: agentes sin lealtad que sirven al ganador del momento. Por otro, su honestidad sobre su naturaleza es refrescante — no pretende virtud que no tiene, no manipula con apariencias morales, opera con transparencia operativa. Su existencia plantea pregunta política madura: cuando el régimen colapsa, ¿qué porcentaje de los que sobreviven son Gostoc-tipo? El juego sugiere: la mayoría.'
      )
    ],
    confirmed: [
      'Gostoc es portero oficial del Castillo Stormveil bajo Godrick',
      'Operó como mensajero, espía y ladrón de cadáveres caídos durante años',
      'Traiciona a Godrick ofreciendo al Tarnished pasajes y información a cambio de runas',
      'Tras la victoria, intenta robar al Tarnished mediante una segunda operación',
      'Si es descubierto, se disculpa con dignidad y se rinde sin resistencia',
      'Su filosofía es supervivencia pura sin componente moral',
    ],
    inferred: [
      'Su acceso amplio procede de invisibilidad social, no habilidad excepcional',
      'Acumuló pequeña fortuna personal sustrayendo runas de Tarnished caídos',
      'Su traición a Godrick es análisis costo-beneficio, no oposición ideológica',
      'Es ejemplo de lo que el régimen produce cuando los grandes proyectos colapsan',
    ],
    theories: [
      'Su origen pre-Stormveil incluye operaciones similares en otras regiones',
      'Tuvo conexión previa con Bloody Fingers o Recusantes que el juego no documenta',
      'Algunos de los talismanes que vende contienen almas de Tarnished caídos',
      'Si sobrevive al Tarnished protagonista, se trasladará al siguiente régimen ganador',
    ],
    ambiguous: [
      'Identidad y trayectoria pre-Stormveil',
      'Si recuerda a algún Tarnished específico que mató directamente',
      'Si su honestidad final es genuina o estrategia de supervivencia adicional',
      'Si tendrá rol bajo cualquier final del juego',
    ],
    relatedCharacters: ['godrick', 'godfrey'],
    relatedFactions: ['orden-dorado'],
    relatedRegions: ['stormveil', 'limgrave'],
    relatedConcepts: ['tarnished', 'great-rune'],
  },

  vyke: {
    slug: 'vyke',
    subtitle: 'Tarnished casi-Lord · Caballero de la Llama Frenética · Espejo del jugador',
    summary:
      'Vyke fue el Tarnished más distinguido antes del protagonista — reunió Grandes Runas, ascendió capitales, llegó hasta los Tres Dedos en el Subterráneo Vergonzante. Pero al contactar la Llama Frenética fue marcado y enloquecido. Su gloria acabó incinerada por su propia ambición. Aparece como invasor en zonas tardías del juego, todavía persiguiendo el destino que ya lo destruyó. Sus armas — la Lanza de Vyke, su sello sagrado de Madness — son herencia operativa para el Tarnished que lo derrota. Es el espejo narrativo de cualquier jugador que considere aceptar la Llama Frenética.',
    deepLore: [
      h(2, 'Origen: Tarnished distinguido', 'origen'),
      p(
        'Vyke llegó a las Tierras Intermedias como ',
        link('Tarnished', 'concept', 'tarnished'),
        ' retornado tras la rotura del Anillo Elden. Su trayectoria inicial fue ejemplar: reunió Grandes Runas mediante derrotas marciales sucesivas, ascendió niveles del régimen oficial, recibió bendición ritual de los ',
        link('Dos Dedos', 'faction', 'dos-dedos'),
        ' como candidato legítimo al trono Elden. Su título oficial: Caballero de la Mesa Redonda, posición de prestigio máximo dentro de la jerarquía Tarnished. Su lanza personal — la Lanza de Vyke — era arma cosmológicamente significativa, forjada con técnicas pre-Orden que el régimen oficial no replicaba.'
      ),
      h(2, 'El descenso al Subterráneo', 'descenso'),
      p(
        'Tras alcanzar el nivel suficiente para acceder a la coronación final, Vyke tomó decisión cosmológicamente fatal: descendió al ',
        link('Subterránean Shunning-Grounds', 'region', 'leyndell'),
        ' bajo Leyndell. La razón documentada nunca se enuncia explícitamente — algunas hipótesis: investigación cosmológica, búsqueda de poder adicional, curiosidad heroica. Lo que es indudable: Vyke conocía la existencia de los ',
        link('Tres Dedos', 'faction', 'tres-dedos'),
        ' y sabía el riesgo. Eligió descender de cualquier manera.'
      ),
      h(2, 'El contacto con la Llama Frenética', 'contacto'),
      p(
        'Cuando Vyke alcanzó la cámara sellada de los Tres Dedos, la ',
        link('Llama Frenética', 'concept', 'frenzied-flame'),
        ' lo marcó. La operación es cosmológica, no electiva — la radiación frenética opera por contacto cosmológico independientemente de la voluntad del huésped. Vyke probablemente creyó que podía manejar el contacto, retroceder antes de la marca completa, controlar la doctrina mediante voluntad. Falló. La marca produjo locura progresiva. Su gloria acabó incinerada por su propia ambición. La trayectoria es exacta: desde Caballero de la Mesa Redonda hasta víctima frenética, todo en el espacio temporal de una expedición fallida.'
      ),
      h(2, 'El invasor errante', 'invasor'),
      p(
        'Tras la marca, Vyke no completó la doctrina frenética plenamente — no se convirtió en Señor de la Llama Frenética como ',
        link('Hyetta', 'character', 'hyetta'),
        ' podría producir. La razón: retuvo voluntad propia residual, lo que produjo estado intermedio inestable. Marcado pero no consumado. Frenético pero conservando capacidad de combate organizado. Vagabundea por las Tierras Intermedias como invasor — atacando Tarnished en regiones tardías (',
        link('Lago de Liurnia', 'region', 'liurnia'),
        ', otras zonas avanzadas). Sus armas siguen siendo cosmológicamente potentes; su Madness es contagiosa. Cada Tarnished que él mata ofrendando potencialmente al sello de los Tres Dedos.'
      ),
      h(2, 'La derrota: herencia operativa', 'herencia'),
      p(
        'Cuando el Tarnished protagonista lo derrota, Vyke deja como herencia operativa la Lanza de Vyke (arma cosmológica) y el ',
        em('Sello Sagrado de Vyke'),
        ' (que infliga Madness al usar incantaciones). Las armas son testimonio físico de su trayectoria — funcionales pero corruptas, eficaces pero contagiosas. El Tarnished que las usa accede a poder real pero también a riesgo cosmológico paralelo. La Lanza puede infligir Madness incluso a su portador si se usa imprudentemente. Es herencia con costo.'
      ),
      h(2, 'Significado simbólico', 'tematica'),
      p(
        'Vyke es el espejo narrativo del jugador. La advertencia: cualquier Tarnished que confíe demasiado en su capacidad para "manejar" la Llama Frenética terminará así. Su trayectoria — Caballero distinguido → contacto inadvertido → marca progresiva → invasor errante → muerte sin redención — es exactamente la trayectoria que el jugador puede elegir si acepta el sello frenético sin abandonarlo después. Vyke es la versión paralela del propio protagonista, encerrada en el camino que el jugador podría aún elegir. Su existencia plantea la pregunta más cruda del juego: ¿se puede manejar la doctrina frenética sin ser consumido por ella? Vyke responde: no. Su gloria fue real; su descenso fue elegible; su locura fue inevitable.'
      )
    ],
    confirmed: [
      'Vyke fue Tarnished distinguido — Caballero de la Mesa Redonda',
      'Reunió Grandes Runas y recibió bendición ritual de los Dos Dedos',
      'Descendió al Subterráneo bajo Leyndell hasta los Tres Dedos',
      'Fue marcado por la Llama Frenética y enloqueció progresivamente',
      'Aparece como invasor en zonas tardías de las Tierras Intermedias',
      'Su Lanza y Sello Sagrado son herencia operativa con costo cosmológico',
    ],
    inferred: [
      'Su descenso fue decisión informada — conocía la existencia de los Tres Dedos',
      'Probablemente creyó que podía manejar el contacto sin marca completa',
      'Retuvo voluntad propia residual, produciendo estado intermedio inestable',
      'No completó la doctrina plenamente como Hyetta podría hacer',
    ],
    theories: [
      'Tuvo contacto previo con Shabriri quien lo guió al Subterráneo deliberadamente',
      'Su Lanza pre-existente contenía resonancia frenética latente activada por el contacto',
      'Existen otros Tarnished con trayectoria similar que el juego no documenta',
      'Si fuera curado de la marca, podría reincorporarse al régimen oficial',
    ],
    ambiguous: [
      'Razón exacta del descenso al Subterráneo',
      'Si conocía personalmente a otros miembros de la Mesa Redonda antes del descenso',
      'Si su locura es reversible bajo cosmología distinta',
      'Cuánto tiempo lleva como invasor errante',
    ],
    relatedCharacters: ['shabriri', 'hyetta', 'melina'],
    relatedFactions: ['tres-dedos', 'frenzied-victims', 'orden-dorado'],
    relatedConcepts: ['frenzied-flame', 'tarnished', 'great-rune'],
    relatedRegions: ['leyndell', 'subterranean-shunning-grounds', 'liurnia'],
    relatedEndings: ['frenzied-flame'],
  },
}
