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
        ' tras la fractura cósmica de la era previa. Marika no fue una diosa primordial: fue ascendida.',
      ),
      p(
        'Antes de su deificación había vivido entre numen oprimidos por las primeras eras del cosmos. Esa memoria la persigue: el Orden Dorado se construye explícitamente sobre la represión de aquellas tribus que ',
        link('Maliketh', 'character', 'maliketh'),
        ' y las primeras Pieles de Dios habían perseguido — incluyendo posiblemente al pueblo de la propia Marika.',
      ),
      h(2, 'La fundación del Orden Dorado', 'fundacion'),
      p(
        'Como vasija ungida, Marika selló la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        ' dentro de ',
        link('Maliketh', 'character', 'maliketh'),
        ' y proclamó la era dorada: una existencia donde la muerte verdadera ya no funciona, donde los seres del cosmos pueden ser inmortalizados a través del ',
        link('Erdtree', 'concept', 'erdtree'),
        '. Tomó como ',
        link('Primer Señor Elden', 'character', 'godfrey'),
        ' a Godfrey, un guerrero de las tierras exteriores, y juntos conquistaron el Interregno.',
      ),
      p(
        'El acto fundacional contiene su propia condena. Sellar la Muerte no la elimina — solo la guarda. Y los seres que el Orden no acepta (los ',
        link('Omens', 'faction', 'omens'),
        ', los ',
        link('Misbegotten', 'faction', 'misbegotten'),
        ', los ',
        link('Albinaurics', 'faction', 'albinauricos'),
        ') quedan como evidencia silenciosa de las grietas estructurales del sistema.',
      ),
      h(2, 'Radagon, el otro yo', 'radagon'),
      p(
        'Marika comparte cuerpo con ',
        link('Radagon', 'character', 'radagon'),
        ', su otra mitad, su esposo y su contradicción. Mientras Marika fue la diosa del cambio, ',
        link('Radagon', 'character', 'radagon'),
        ' era el conservador absoluto: el que siempre quiso reparar lo que ella rompía. Cuando Godfrey fue exiliado, Marika tomó a Radagon como segundo consorte — es decir, se casó consigo misma. La unión final es geometría imposible: una sola persona, dos voluntades irreconciliables.',
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
        ': sus hijos se reclamaron las Grandes Runas, el cosmos perdió su centro, y la Voluntad Mayor abandonó al Interregno.',
      ),
      q(
        'Mi hijo Godwyn no debió morir esta muerte. Romperé al Anillo Elden por él, aunque caiga el cielo.',
        'Lectura interpretativa de las acciones de Marika'
      ),
      h(2, 'El castigo', 'castigo'),
      p(
        'Por la transgresión, la Voluntad Mayor encadenó a Marika dentro del propio Erdtree. Cuando el ',
        link('Mancillado', 'concept', 'tarnished'),
        ' encuentra finalmente a la diosa, lo que ve es ambivalente: ¿es Marika la prisionera del cosmos, o el cosmos es prisionero de Marika? El golpe que rompe su cuerpo libera a ',
        link('Radagon', 'character', 'radagon'),
        ' como último guardián.',
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Marika es la pregunta de qué significa el poder absoluto cuando ese poder se construye sobre una mentira estructural. Construyó la inmortalidad y descubrió que la inmortalidad sin la muerte es una jaula, no una salvación. Su rebelión no es heroica — es una madre rota destruyendo el sistema que mató a su hijo. Pero también es el dios cuya creación contradice a su creador, una pregunta abierta sobre si la fidelidad cósmica es virtud o servidumbre.',
      ),
    ],
    confirmed: [
      'Marika ascendió a la divinidad como numen elegido por la Voluntad Mayor',
      'Selló la Muerte Predestinada dentro de Maliketh para iniciar la era dorada',
      'Rompió el Anillo Elden por su propia mano tras la muerte de Godwyn',
      'Comparte cuerpo y voluntad con Radagon',
    ],
    inferred: [
      'Su ascenso fue un acto político del que ahora se arrepiente',
      'El sello de la Muerte fue lo que permitió la corrupción de Godwyn',
      'Su martillazo final liberó a la Voluntad Mayor del Interregno tanto como liberó al cosmos de ella',
    ],
    ambiguous: [
      'Si su rebelión fue por amor maternal, por venganza, o por una crítica filosófica al Orden Dorado',
      'Cómo y cuándo se fusionó con Radagon — y si la fusión fue voluntaria',
      'Si la figura encadenada en el Erdtree es realmente Marika o una proyección del Mancillado',
    ],
    beneficiaries: 'Sus hijos pudieron disputar grandes runas tras la fractura. La Voluntad Mayor obtuvo, paradójicamente, una excusa para rebajar su presencia activa.',
    victims: 'Godwyn (la víctima inicial), todos los Mancillados arrojados al exilio, los Omens y Misbegotten silenciados por su Orden, y ella misma encadenada como ofrenda eterna.',
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
        '.',
      ),
      h(2, 'El segundo matrimonio', 'segundo-matrimonio'),
      p(
        'Cuando ',
        link('Godfrey', 'character', 'godfrey'),
        ' fue exiliado por perder la gracia divina, Marika llamó a Radagon a Leyndell. Él abandonó a Rennala — dejándole un Amber Egg como recuerdo del amor que le retiraba — y se casó con la diosa. Aquí ocurre la revelación oculta del Interregno: Radagon ',
        { type: 'em' as const, text: 'es' },
        ' Marika. La unión es la fusión de dos voluntades en un cuerpo. Tuvieron dos hijos juntos: ',
        link('Morgott', 'character', 'morgott'),
        ' y ',
        link('Mohg', 'character', 'mohg'),
        ', ambos nacidos como ',
        link('Omens', 'faction', 'omens'),
        ' por la sangre antigua que Radagon ocultaba.',
      ),
      h(2, 'El conservador absoluto', 'conservador'),
      p(
        'Mientras Marika se preparaba para la rebelión, Radagon hacía lo opuesto: estudiar, restaurar, golpear el Anillo Elden con su martillo intentando que las grietas se cerraran. Es el reverso temperamental de su otra mitad. Donde ella ve un sistema injusto, él ve un sistema perfectible. Donde ella destruye, él repara.',
      ),
      p(
        'Su lucha como jefe final encarna la imposibilidad: el Mancillado lo combate justo después de derrotar a la propia Marika encadenada. Las marcas doradas en su cuerpo son las cadenas que él mismo se forjó al volverse hombre y diosa al mismo tiempo. Cuando muere, surge la ',
        link('Bestia Elden', 'concept', 'bestia-elden'),
        ' — el aspecto puro del Anillo desligado de la voluntad humana.',
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Radagon es la imposibilidad de la auto-reconciliación. En el mismo cuerpo conviven el revolucionario y el reformista, y ninguno puede ganar sin matar al otro. Es el dios fragmentado de un orden que nunca podrá decidirse entre cambiar y permanecer.',
      ),
    ],
    confirmed: [
      'Radagon es el aspecto masculino de Marika; comparten un solo cuerpo',
      'Lideró la guerra contra Liurnia y se casó con Rennala, fruto del cual nacieron Ranni, Radahn y Rykard',
      'Engendró a Morgott y Mohg con Marika',
      'Es el último guardián humano del Anillo Elden antes de la Bestia Elden',
    ],
    inferred: [
      'Radagon ocultaba sangre Omen (ascendencia maldita) que se manifestó en sus hijos con Marika',
      'Su devoción al Orden lo enemistaba interiormente con la rebelión de Marika',
      'Las cadenas doradas son auto-impuestas: signo de su propio conflicto',
    ],
    ambiguous: [
      'Si la fusión Radagon/Marika fue voluntaria, accidental, o impuesta por la Voluntad Mayor',
      'Si Radagon llegó realmente a comprender que sus martillazos no podían reparar el Anillo',
      'Si la Bestia Elden lo respetó como anfitrión o lo expulsó tras su muerte',
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
    subtitle: 'Hoarah Loux · Primer Señor Elden · Padre exiliado de los Mancillados',
    summary:
      'Primer Señor Elden, esposo original de Marika, conquistador del Interregno. Tras perder la gracia fue exiliado con sus seguidores — los primeros Mancillados. Regresa al final como espectro dorado para guardar el trono que ya no le pertenece.',
    deepLore: [
      h(2, 'El conquistador', 'conquistador'),
      p(
        'Godfrey fue el Primer Señor Elden, el guerrero exterior elegido por ',
        link('Marika', 'character', 'marika'),
        ' para ser su consorte y mano marcial. Junto al ',
        link('Espíritu de la Tormenta', 'character', 'godfrey'),
        ' encadenado en su frente, sometió a los pueblos del Interregno bajo el ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        '. Su consorte le dio cuatro hijos directos — ',
        link('Godwyn', 'character', 'godwyn'),
        ', ',
        link('Morgott', 'character', 'morgott'),
        ', ',
        link('Mohg', 'character', 'mohg'),
        ' (estos dos con sangre Omen heredada de Radagon), y posiblemente más.',
      ),
      h(2, 'El exilio', 'exilio'),
      p(
        'Cuando ya no hubo enemigos dignos para conquistar, Marika lo despojó del estatus de Señor Elden. Una lágrima rodó por la mejilla de Godfrey — no por desesperación, sino porque su rey de los reyes ya no tenía guerras que ofrecerle. Fue desterrado con los ',
        link('Mancillados', 'concept', 'tarnished'),
        ' a las tierras exteriores. Allí, despojado de la gracia, retomó su nombre primigenio: Hoarah Loux.',
      ),
      h(2, 'El regreso', 'regreso'),
      p(
        'Tras la fractura, la gracia de los Mancillados volvió a brillar. Godfrey regresó como espectro dorado para defender el trono — no porque lo deseara, sino porque era llamado por su deber. Su batalla final tiene dos formas: la armadura del rey civilizado y, cuando esa máscara cae, Hoarah Loux el cazador desnudo, peleando con sus propias manos.',
      ),
      q(
        'No esperaba ser llamado de nuevo. Pero el deber del rey es responder.',
        'Lectura interpretativa del retorno de Godfrey'
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Godfrey es la fidelidad como prisión. Fue el instrumento perfecto: tan eficaz que se volvió obsoleto. Su tragedia es que entendió las reglas del Orden Dorado y las aceptó incluso cuando lo expulsaron. Cuando los hijos del trono fracturaron el cosmos, fue el padre original — desterrado generaciones antes — el llamado a defender lo que ellos ya no defendían.',
      ),
    ],
    confirmed: [
      'Godfrey fue el Primer Señor Elden y consorte original de Marika',
      'Fue exiliado con sus seguidores cuando perdió la gracia',
      'Regresa como espectro dorado guardando el camino al trono',
      'Tiene dos formas en combate: el rey blindado y el cazador Hoarah Loux',
    ],
    inferred: [
      'Su lágrima al perder la gracia fue por la pérdida de propósito, no de privilegio',
      'Mantuvo lealtad incluso en el exilio, lo que justifica su retorno',
      'Es el ancestro biológico de muchos Mancillados, incluyendo Nepheli Loux',
    ],
    ambiguous: [
      'Si tuvo conciencia plena de la fusión Marika/Radagon o vivió ignorante',
      'Cuántos hijos engendró antes del exilio',
      'Si su retorno es voluntad propia o una correa de la Voluntad Mayor',
    ],
    beneficiaries: 'Marika obtuvo un consorte eficiente y luego un guardián post-mortem. El Orden Dorado obtuvo su mayor expansión a través de él.',
    victims: 'Los pueblos conquistados por Godfrey. Los Mancillados arrojados al exilio. Sus hijos, criados sin él tras la expulsión.',
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
      h(2, 'El amado del Interregno', 'amado'),
      p(
        'Godwyn fue el primogénito y favorito del Orden Dorado: hijo de ',
        link('Marika', 'character', 'marika'),
        ' y ',
        link('Godfrey', 'character', 'godfrey'),
        ', resplandeciente, dorado, dominador del antiguo dragón ',
        link('Fortissax', 'character', 'fortissax'),
        ' a quien convirtió en aliado mediante un pacto sagrado. Era la cara amable del régimen: la promesa de un futuro coherente.',
      ),
      h(2, 'La Noche de los Cuchillos Negros', 'noche-cuchillos'),
      p(
        'Durante un evento conocido como la ',
        link('Noche de los Cuchillos Negros', 'timeline', 'ranni-noche-cuchillos'),
        ', un grupo de ',
        link('asesinos', 'faction', 'cuchillos-negros'),
        ' (engendrados por una mecha de la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ' robada a ',
        link('Maliketh', 'character', 'maliketh'),
        ') asesinaron a Godwyn. La conspiradora detrás del acto fue ',
        link('Ranni', 'character', 'ranni'),
        ', que también ordenó matar su propio cuerpo Empyrean para escapar de los ',
        link('Dos Dedos', 'faction', 'dos-dedos'),
        '. Pero como la Muerte Predestinada estaba sellada, el asesinato salió mal: solo mató su alma, no su cuerpo.',
      ),
      h(2, 'El Príncipe de la Muerte', 'principe-muerte'),
      p(
        'El cuerpo sin alma de Godwyn se hundió en las raíces del ',
        link('Erdtree', 'concept', 'erdtree'),
        ' y se convirtió en el primer caso de una nueva forma de existencia: ',
        link('Aquellos que Viven en la Muerte', 'concept', 'those-who-live-in-death'),
        '. Un ser cuyo cuerpo crece eternamente sin alma, generando ',
        link('Deathroot', 'concept', 'deathroot'),
        ' que infecta el suelo y reanima cadáveres. La forma actual de Godwyn — un cadáver enorme entrelazado con raíces y serpentinas dragonícolas — está bajo ',
        link('Deeproot Depths', 'region', 'deeproot-depths'),
        '.',
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Godwyn es la víctima cuya muerte transformó el cosmos. La rebelión de Marika comenzó con su asesinato. La existencia de la podredumbre dorada (Deathroot) procede de su cuerpo que sigue creciendo. La ',
        link('Era del Crepúsculo', 'ending', 'duskborn'),
        ' busca cerrarle la herida que sigue abierta, devolviéndole la verdadera muerte.',
      ),
      q(
        'Solo aquellos como nosotros, hijos de la Muerte, podrían acompañar a Godwyn en sus sueños eternos.',
        'Fia, Doncella de Muerte'
      ),
    ],
    confirmed: [
      'Godwyn fue el primer hijo de Marika y Godfrey',
      'Domesticó al antiguo dragón Fortissax mediante un pacto',
      'Fue asesinado en la Noche de los Cuchillos Negros',
      'Su cuerpo se convirtió en el primer caso de "vida en la muerte" bajo Limgrave',
    ],
    inferred: [
      'Su asesinato detonó la fractura del Anillo Elden por parte de Marika',
      'La Deathroot que infecta el Interregno emana de su cadáver inmortal',
      'Su muerte parcial creó el fenómeno entero de Aquellos que Viven en la Muerte',
    ],
    ambiguous: [
      'Si Ranni planeó la muerte de Godwyn o solo aprovechó el ataque para matar su propio cuerpo',
      'Si Godwyn conserva alguna conciencia bajo Deeproot Depths',
      'Si su pacto con Fortissax sobrevive en el cadáver eterno',
    ],
    beneficiaries: 'Ranni: la conmoción facilitó su escape Empyrean. Aquellos que Viven en la Muerte: existen gracias a este precedente.',
    victims: 'Marika, en cuya pena rompió el cosmos. Fortissax, condenado a luchar eternamente las pesadillas del demidiós muerto. Todo Interregno, que arrastra desde entonces la herida abierta.',
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
        ' durante toda su juventud.',
      ),
      h(2, 'El defensor del trono', 'defensor'),
      p(
        'Cuando llegó la ',
        link('fractura', 'timeline', 'la-fractura'),
        ', Morgott eligió lo opuesto a su hermano: en lugar de odiar al Orden, lo defendió. Asumió el manto del Rey Caído y se convirtió en último guardián de Leyndell. Bajo el alias de Margit el Presagio Caído, vagaba por el Interregno bloqueando a los Mancillados aspirantes al trono. La paradoja es brutal: el ser que el Orden encarceló por nacimiento se convierte en su defensor más leal.',
      ),
      q(
        '¿Mancillado? Lleváis un odio amargo. Sois esclavos de la lujuria por una herencia ajena. Volved al lodo del que nacisteis.',
        'Margit el Presagio Caído'
      ),
      h(2, 'La maldición y el orgullo', 'maldicion-orgullo'),
      p(
        'Lo trágico de Morgott es que ',
        { type: 'em' as const, text: 'sabía' },
        ' que el Orden Dorado lo despreciaba — y aun así escogió morir por él. Su devoción no es ignorancia: es pacto deliberado con un sistema que sigue rechazándolo. La gracia que mantiene su cuerpo es prestada y dolorosa; cada paso le recuerda que él no debería existir según las reglas que defiende.',
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Morgott es la fidelidad excesiva del oprimido. Es el caso límite del leal: el que defiende al opresor mejor que el propio opresor. Su contrapunto con ',
        link('Mohg', 'character', 'mohg'),
        ' es completo: ambos sufrieron lo mismo, uno respondió con devoción, el otro con culto profano. Ninguno escapó del estigma; cada uno construyó una respuesta opuesta al mismo trauma.',
      ),
    ],
    confirmed: [
      'Morgott es hijo Omen de Marika y Radagon, gemelo de Mohg',
      'Fue encarcelado bajo Leyndell durante su juventud',
      'Se disfraza como Margit el Presagio Caído',
      'Defiende el Anillo Elden ante los Mancillados aspirantes al trono',
    ],
    inferred: [
      'Su devoción al Orden es deliberada, no ingenua',
      'La gracia que lo mantiene es dolorosa y le recuerda su estigma',
      'Su última carga es defender el árbol incluso sabiendo que lo aborrece',
    ],
    ambiguous: [
      'Si Marika alguna vez intentó liberarlo o reconocerlo',
      'Cuándo abandonó la prisión y por qué medio',
      'Si su lealtad llegó al fanatismo o si era una forma de venganza interna',
    ],
    beneficiaries: 'El Orden Dorado obtuvo su defensor más improbable y eficaz.',
    victims: 'Mohg, su gemelo, repudiado por la elección opuesta. Los Mancillados que cayeron tratando de acceder al trono. El propio Morgott, que muere defendiendo lo que lo encarceló.',
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
        ' — y se convirtió en su profeta. Su cuerpo se transformó: alas de demonio, cuernos coronados, y el dominio de la magia carmesí que extrae de su propia sangre.',
      ),
      h(2, 'El proyecto dinástico', 'dinastia'),
      p(
        'Mohg construyó la ',
        link('Dinastía Mohgwyn', 'region', 'mohgwyn'),
        ' subterránea, oculta del Interregno, donde planeaba criar un ',
        link('Señor Elden', 'concept', 'elden-ring'),
        ' bajo su propia ley sangrienta. Para esto necesitaba un consorte Empyrean — y eligió a ',
        link('Miquella', 'character', 'miquella'),
        ', encerrado en su capullo dorado en el ',
        link('Haligtree', 'region', 'haligtree'),
        '. Lo secuestró durante su sueño y lo llevó a Mohgwyn para incubarlo en sangre.',
      ),
      h(2, 'El final fallido', 'fallido'),
      p(
        'El plan fracasó por dos razones: Miquella nunca despertó dentro de Mohgwyn (el capullo dorado lo protegía incluso del rito sangriento), y Mohg fue derrotado por el Mancillado antes de completar la ascensión. Su muerte deja a Miquella todavía dormido — y la línea sangrienta truncada.',
      ),
      q(
        'Levanta tu cabeza, mi Miquella, oh tú dorada hermosura. ¿Acaso este sangriento ritual no merece tu mirada?',
        'Mohg, Señor de la Sangre'
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Mohg es la respuesta opuesta a Morgott al mismo trauma original. Si el sistema lo rechaza por ser Omen, entonces que el sistema arda y nazca uno nuevo bajo otra ley divina. Su tragedia es que su rebelión es estructuralmente idéntica a la del Orden Dorado: secuestrar a una figura sagrada y forzarla en el rol de consorte. Reproduce el mismo crimen original que Marika cometió con Godfrey.',
      ),
    ],
    confirmed: [
      'Mohg es hijo Omen de Marika y Radagon, gemelo de Morgott',
      'Hizo pacto con la Madre Informe, un dios exterior de la sangre',
      'Secuestró a Miquella durante su sueño en el Haligtree',
      'Construyó la Dinastía Mohgwyn como reino subterráneo paralelo',
    ],
    inferred: [
      'Su rebelión es respuesta directa al trauma del encarcelamiento juvenil',
      'La Madre Informe lo ha usado tanto como él la ha usado a ella',
      'Miquella nunca colaboró voluntariamente; el rito fue puro secuestro',
    ],
    ambiguous: [
      'Si la Madre Informe es realmente un dios o un parásito de Mohg',
      'Cuánta autoconciencia tenía Miquella durante el secuestro',
      'Si Mohg actuó por venganza, fanatismo, o ambición pura',
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
      'Hija Empyrean de Rennala y Radagon. Para escapar a la jaula de los Dos Dedos, ordenó la Noche de los Cuchillos Negros, en la que asesinó su propio cuerpo y, accidentalmente, también a Godwyn. Desde entonces conspira con frialdad calculada para liberar al cosmos de toda voluntad divina.',
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
        ' por toda la eternidad.',
      ),
      h(2, 'La conspiración', 'conspiracion'),
      p(
        'Ranni planeó cuidadosamente. Robó una mecha de la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ' del cuerpo de ',
        link('Maliketh', 'character', 'maliketh'),
        ' y, junto a los ',
        link('Cuchillos Negros', 'faction', 'cuchillos-negros'),
        ', orquestó la ',
        link('Noche de los Cuchillos Negros', 'timeline', 'ranni-noche-cuchillos'),
        '. El objetivo principal: matar su propio cuerpo Empyrean. Apuñalarlo era apuñalarse a sí misma cosmológicamente, librándola del contrato divino. El daño colateral: ',
        link('Godwyn', 'character', 'godwyn'),
        ', cuya alma murió al mismo tiempo, pero cuyo cuerpo no.',
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
        ', el manipulador. Cada uno cumple un rol; ninguno conoce el plan completo.',
      ),
      h(2, 'La Era de las Estrellas', 'era-estrellas'),
      p(
        'El plan de Ranni culmina en un final radical: reemplazar a la Voluntad Mayor con una luna oscura distante, dejando al cosmos sin dios cercano. Si el Mancillado completa su quest, instaurará la ',
        link('Era de las Estrellas', 'ending', 'age-of-stars'),
        ': un universo huérfano de divinidad inmediata, frío pero finalmente libre.',
      ),
      q(
        'Mi anhelo es que la Era del Orden lleguen a su fin... y nuestra era venidera, una era de las estrellas, será iluminada solo por la lejanía.',
        'Ranni la Bruja'
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Ranni es la única figura del Interregno que parece haber pensado el problema cosmológico hasta el final. No quiere reformar el Orden; lo quiere desinstalar. Su frialdad no es maldad: es la única respuesta racional posible cuando los dioses son cárceles. La pregunta que abre es si un cosmos huérfano es verdaderamente libre o solo abandonado.',
      ),
    ],
    confirmed: [
      'Ranni es hija Empyrean de Rennala y Radagon',
      'Mató su propio cuerpo durante la Noche de los Cuchillos Negros',
      'Ahora habita en una muñeca articulada',
      'Sus aliados son Blaidd, Iji y Seluvis',
      'Su quest culmina en la Era de las Estrellas',
    ],
    inferred: [
      'Su plan estaba en preparación durante siglos antes de la Noche',
      'La muerte de Godwyn fue daño colateral, no objetivo',
      'Su frialdad emocional es estrategia, no patología',
    ],
    ambiguous: [
      'Si su plan elimina la Voluntad Mayor o solo la aleja',
      'Si los Dos Dedos sospechaban su rebelión antes de la Noche',
      'Si conserva sentimientos por sus aliados o los ve como herramientas',
    ],
    beneficiaries: 'Ranni misma, liberada de la sucesión Empyrean. El Mancillado que la sigue, parte con ella entre las estrellas. El cosmos liberado de la Voluntad Mayor.',
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
        '. Cuando Marika llamó a Radagon de regreso a Leyndell, él le dejó como prenda de despedida un Amber Egg — el huevo dorado donde anidan los nacimientos divinos.',
      ),
      h(2, 'La regresión', 'regresion'),
      p(
        'Rennala no soportó el abandono. Cuando un academico llamado ',
        { type: 'em' as const, text: 'Lazuli Conspector' },
        ' regresó del más allá con la maldición del Renacimiento, se la entregó a ella. Desde entonces Rennala usa sus poderes para "renacer" su propio Amber Egg en bucle infinito, abrazando el huevo como si fuera un bebé que nunca llega. Su poder, en otro tiempo el más refinado del Interregno, ahora solo sirve para mantenerla en negación eterna.',
      ),
      h(2, 'La utilidad accidental', 'utilidad'),
      p(
        'Su poder de renacimiento, sin embargo, es valioso. Mancillados que la derrotan pueden usarla para reorganizar sus propios atributos: ella canta sobre el cuerpo del aspirante y "lo renace" como una versión rediseñada. La función benevolente es lo que queda de la diosa que fue.',
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Rennala es el dolor convertido en parálisis. Su tragedia es la única que el Orden Dorado no necesitó construir: simplemente le pasó. Sus hijos cargan esta herida — Ranni la cosmológica, Radahn la marcial, Rykard la apóstata. Cada uno responde de modo distinto a una madre que dejó de mirar a sus hijos para mirar siempre al huevo.',
      ),
    ],
    confirmed: [
      'Rennala fue Gran Maestra de Raya Lucaria y reina del clan Caria',
      'Tuvo tres hijos con Radagon: Ranni, Radahn y Rykard',
      'Posee el poder de renacimiento gracias a Lazuli Conspector',
      'El Amber Egg fue regalo de despedida de Radagon',
    ],
    inferred: [
      'Su regresión es un escudo psicológico contra el abandono',
      'Sus hijos arrastran las cicatrices de su parálisis',
      'Aún ama a Radagon a pesar de saber que él se fusionó con Marika',
    ],
    ambiguous: [
      'Si conserva conciencia plena durante el bucle de renacimiento',
      'Si el huevo contiene algo real o es puramente simbólico',
      'Si conoció el destino Empyrean de su hija Ranni',
    ],
    beneficiaries: 'Los Mancillados que pueden reorganizar sus atributos a través de ella.',
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
        '. Este acto cosmológico — un guerrero rojo bloqueando una era astronómica — es uno de los grandes secretos del Interregno.',
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
        ' — convirtiendo Caelid entero en un yermo maldito y a Radahn en una víctima.',
      ),
      h(2, 'El Festival', 'festival'),
      p(
        'Tras su corrupción, sus seguidores organizaron un festival ritual: invitar a guerreros legendarios a derrotarlo, liberándolo así de su cuerpo arruinado. ',
        link('Jerren', 'character', 'jerren'),
        ' es el oficiante. ',
        link('Alexander', 'character', 'alexander'),
        ', ',
        link('Patches', 'character', 'patches'),
        ' y otros acuden. El espíritu del general invicto duerme bajo capas de podredumbre; matarlo es un acto piadoso.',
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Radahn es la fuerza honorable arruinada por una guerra que él no entendió del todo. Su rivalidad con Malenia es trágica simétricamente: dos guerreros perfectos que se admiran, batallando hasta que uno desata la enfermedad cósmica. Su honor lo lleva a no rendirse incluso cuando perderse a sí mismo es lo único que le queda. El Festival es el cierre que merece: una muerte como guerrero, no como bestia.',
      ),
    ],
    confirmed: [
      'Radahn es hijo de Rennala y Radagon',
      'Aprendió magia gravitacional de Sorceress Sellen',
      'Detiene las estrellas con su gravedad para impedir el destino de Ranni',
      'Fue corrompido por Scarlet Rot durante el duelo con Malenia',
      'El Festival es el ritual para liberarlo mediante derrota digna',
    ],
    inferred: [
      'Su rivalidad con Malenia era de mutuo respeto, no odio',
      'El bloqueo de las estrellas era voluntario y consciente — quería a su hermana',
      'Su honor lo impide rendirse a la corrupción, prolongando su sufrimiento',
    ],
    ambiguous: [
      'Si Radahn supo durante la batalla que Malenia liberaría la podredumbre',
      'Cuánta consciencia conserva durante el Festival',
      'Si la liberación de las estrellas tras su muerte fue casualidad o liberación deliberada',
    ],
    beneficiaries: 'Ranni: con la muerte de Radahn, las estrellas comienzan a moverse otra vez, abriendo el camino a su Era. El Mancillado: una Gran Runa.',
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
        ' como centro político alternativo a Leyndell. Su pose era reformista, no rupturista.',
      ),
      h(2, 'La devorada', 'devorada'),
      p(
        'Tras la fractura, su decepción se convirtió en blasfemia. Buscó y encontró a una ',
        link('serpiente-dios primordial', 'faction', 'dragones-antiguos'),
        ' que habitaba bajo el Volcano Manor — una entidad muy anterior al Orden Dorado, posiblemente vinculada al ',
        link('Crisol', 'concept', 'crucible'),
        '. Permitió que la serpiente lo devorara. Su cuerpo se fusionó con el de ella: cabeza humana en una bestia descomunal de fuego y carne fundida.',
      ),
      h(2, 'El proyecto blasfemo', 'proyecto'),
      p(
        'Desde el Volcano Manor, Rykard recibe nobles desafectos del Orden Dorado y los adoctrina contra Leyndell. Tanith, su anfitriona, sirve la causa con devoción canibalesca: cuando el ',
        link('Mancillado', 'concept', 'tarnished'),
        ' lo derrota, ella consume su cadáver para preservarlo dentro de sí. ',
        link('Rya', 'character', 'rya'),
        ' funciona como reclutadora.',
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Rykard es el rebelde que se convierte en lo que combate: para destruir al Orden Dorado, se entrega a una entidad pre-orden y termina siendo más monstruoso que cualquier sistema. Su tragedia es que no escapa del totalitarismo cósmico — solo lo cambia por uno más antiguo. Su tridente "Devorador de Dioses" promete justicia universal y entrega solo digestión.',
      ),
    ],
    confirmed: [
      'Rykard es hijo de Rennala y Radagon',
      'Habitaba el Volcano Manor como centro político alternativo',
      'Permitió que una serpiente-dios primordial lo devorase',
      'Tanith devora su cadáver tras la batalla',
    ],
    inferred: [
      'Su blasfemia es respuesta filosófica a la decepción del Orden Dorado',
      'La serpiente-dios precede al Orden y posiblemente al Crisol',
      'Su transformación lo convierte en lo opuesto pero equivalente del Orden: otro régimen totalitario',
    ],
    ambiguous: [
      'Si Rykard conserva su voluntad humana o es marioneta de la serpiente',
      'Cuánto sabe Tanith sobre la naturaleza real de la entidad',
      'Si la serpiente es un dios exterior o algo del cosmos primordial',
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
        ' del decaimiento.',
      ),
      h(2, 'La Espada hermana', 'espada'),
      p(
        'Malenia se erigió como Espada de Miquella. Mientras él intentaba curar todos los males del mundo desde su jardín del ',
        link('Haligtree', 'region', 'haligtree'),
        ', ella combatía sus enemigos. Lideró a los ',
        link('Caballeros Cleanrot', 'faction', 'cleanrot-knights'),
        ' — guerreros que voluntariamente se infectaban con podredumbre para combatir junto a su señora.',
      ),
      h(2, 'El duelo con Radahn', 'duelo-radahn'),
      p(
        'Su rival favorito era ',
        link('Radahn', 'character', 'radahn'),
        ', el otro guerrero invicto del Interregno. El duelo entre ambos en ',
        link('Caelid', 'region', 'caelid'),
        ' fue el más legendario del Interregno. Cuando vio que no podía vencerlo en combate marcial, Malenia desató su Floración Escarlata — la primera floración real de la podredumbre, que arrasó Caelid entero. Ganó técnicamente: dejó a Radahn como una bestia. Pero perdió: la podredumbre la consumió a ella misma, dejándola tullida.',
      ),
      q(
        'Soy Malenia. Espada de Miquella. Y nunca he conocido la derrota.',
        'Malenia, antes del duelo'
      ),
      h(2, 'El secuestro de Miquella', 'secuestro'),
      p(
        'Mientras Malenia se recuperaba en el Haligtree, ',
        link('Mohg', 'character', 'mohg'),
        ' secuestró a Miquella. Cuando el Mancillado la encuentra, ella ya está incompleta: piernas perdidas, ojo dorado borrado, cuerpo apenas funcional, esperando a su hermano que nunca volverá despierto. Cada vez que florece su podredumbre durante la batalla es porque no le queda otra forma de pelear.',
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Malenia es la cumbre marcial del Interregno y simultáneamente su mayor víctima. Su honor le impide rendirse, pero rendirse sería piadoso. Cada victoria es una derrota interna; cada Floración es un grito. Su lealtad a Miquella no se basa en jerarquía: se basa en que fueron los únicos dos seres del cosmos que entendieron mutuamente la maldición de existir en cuerpos rotos.',
      ),
    ],
    confirmed: [
      'Malenia es hija Empyrean de Marika y Radagon, gemela de Miquella',
      'Nació infectada por la Podredumbre Escarlata',
      'Lidera a los Caballeros Cleanrot al servicio de Miquella',
      'El duelo con Radahn liberó la primera Floración Escarlata',
      'Está incompleta físicamente tras el duelo y aguardando a Miquella',
    ],
    inferred: [
      'La podredumbre es manifestación de un dios exterior pegado a su alma',
      'Su honor marcial es genuino — la Floración fue acto de desesperación, no estrategia',
      'Su lealtad a Miquella es el único vínculo emocional que la sostiene',
    ],
    ambiguous: [
      'Si la podredumbre es maldición o el coste de su naturaleza Empyrean',
      'Si conserva esperanza de que Miquella regrese',
      'Si su tercera Floración (la del jefe) es voluntaria o reflejo del cuerpo',
    ],
    beneficiaries: 'Miquella, defendido durante años por su espada. La Podredumbre como dios exterior, alimentada por sus victorias.',
    victims: 'Caelid arrasada. Radahn arruinado. Los Cleanrot Knights condenados a la podredumbre. Malenia misma, prisionera del cuerpo que el cosmos le dio.',
    relatedCharacters: ['miquella', 'marika', 'radagon', 'radahn', 'mohg', 'millicent', 'gowry'],
    relatedFactions: ['cleanrot-knights', 'kindred-of-rot', 'haligtree'],
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
        ' como árbol alternativo al Erdtree, refugio de quienes el ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' rechazaba: ',
        link('Albinaurics', 'faction', 'albinauricos'),
        ', ',
        link('Misbegotten', 'faction', 'misbegotten'),
        ', y todo ser malformado que necesitara santuario.',
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
        ' era el primer y más doloroso paciente del proyecto.',
      ),
      h(2, 'El sueño curativo', 'sueno'),
      p(
        'Sabiendo que su crecimiento era imposible bajo el cosmos actual, Miquella se durmió en un capullo dorado en el Haligtree, esperando que el cosmos cambiase y, al despertar, pudiera crecer. Durante este sueño fue secuestrado por ',
        link('Mohg', 'character', 'mohg'),
        ', que lo llevó a ',
        link('Mohgwyn', 'region', 'mohgwyn'),
        ' para usarlo como consorte divino.',
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Miquella es la pregunta de si la compasión sirve cuando el cosmos está estructuralmente diseñado para excluir. Su proyecto de Oro Sin Aleación es la única filosofía positiva del Interregno — no destruir el sistema, no reformarlo, sino curarlo de los dioses parásitos. Que su sueño fuera interrumpido por el secuestro es la prueba de que ningún proyecto pacífico sobrevive en este cosmos sin protección armada (que era precisamente el rol de Malenia, ausente cuando ocurrió el rapto).',
      ),
    ],
    confirmed: [
      'Miquella es hijo Empyrean de Marika y Radagon, gemelo de Malenia',
      'No puede crecer físicamente por una maldición de su línea',
      'Creó el Haligtree como refugio para los excluidos del Orden',
      'Desarrolló el Oro Sin Aleación contra los dioses exteriores',
      'Fue secuestrado por Mohg durante su sueño en el capullo dorado',
    ],
    inferred: [
      'Su proyecto era el más radical del Interregno: cosmos sin dioses parásitos',
      'Iba a despertar como dios completo, fuera del control de la Voluntad Mayor',
      'Su sueño fue posible porque confiaba en Malenia como su escudo',
    ],
    ambiguous: [
      'Si Miquella conserva alguna conciencia durante el secuestro',
      'Si el rapto consumó alguna forma de transformación divina',
      'Si su despertar habría sido benigno o autoritario en su propio modo',
    ],
    beneficiaries: 'Albinaurics y Misbegotten, refugiados bajo el Haligtree. Cualquiera infectado por dios exterior, candidato a su cura.',
    victims: 'Su gemela Malenia, dejada incompleta y vigilando un capullo vacío. Los habitantes del Haligtree, eventualmente arrasados por Albinauric refugees corruptos.',
    relatedCharacters: ['malenia', 'marika', 'radagon', 'mohg', 'millicent'],
    relatedFactions: ['haligtree', 'cleanrot-knights', 'albinauricos', 'misbegotten'],
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
        ', un guardián personal cosmológicamente entrelazado con un Empyrean. Donde Marika va, Maliketh sigue. Lo que Marika necesita, Maliketh ejecuta.',
      ),
      h(2, 'El sello de la Muerte', 'sello'),
      p(
        'El acto fundacional del Orden Dorado fue sellar la ',
        link('Muerte Predestinada', 'concept', 'destined-death'),
        '. Marika no pudo destruirla — solo encerrarla. La encerró dentro de su propio hermano: la Runa de la Muerte fue cosida al alma de Maliketh. Desde entonces, su cuerpo ',
        { type: 'em' as const, text: 'es' },
        ' la prisión de la verdadera muerte. Su servicio es indistinguible de su tortura.',
      ),
      h(2, 'El robo', 'robo'),
      p(
        'Antes de la Noche de los Cuchillos Negros, ',
        link('Ranni', 'character', 'ranni'),
        ' robó una mecha de la ',
        link('Runa de la Muerte', 'concept', 'rune-of-death'),
        ' del cuerpo de Maliketh. Esta mecha fue lo que permitió forjar las hojas de los ',
        link('Cuchillos Negros', 'faction', 'cuchillos-negros'),
        ', únicas armas capaces de matar a un demidiós. Maliketh quedó marcado por ese robo: una herida cosmológica abierta.',
      ),
      h(2, 'La Bestia de la Muerte Negra', 'bestia-final'),
      p(
        'Cuando el Mancillado lo combate, lo encuentra como Bestia de la Muerte Negra: forma final liberada por desesperación. Está protegiendo, al fin, no a Marika ni al Orden, sino a la Runa que lleva dentro. Su derrota libera la Muerte Predestinada de vuelta al cosmos — el mismo evento que cierra la herida de Godwyn en la ',
        link('Era del Crepúsculo', 'ending', 'duskborn'),
        '.',
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Maliketh es la fidelidad llevada al extremo del autosacrificio. Aceptó cargar la cosa más insoportable del cosmos — la muerte misma — para que su hermana pudiera reinar. Su lealtad nunca se cuestiona, ni se pone en duda. Es por eso que es difícil sentir que él es feliz, incluso cuando cumple. Su existencia es la obediencia hecha cárcel, y la única liberación posible es ser derrotado por alguien que pueda llevar la carga adelante.',
      ),
    ],
    confirmed: [
      'Maliketh es Hombre-Bestia, hermano-sombra de Marika',
      'Lleva la Runa de la Muerte cosida en su cuerpo',
      'Una mecha de la Runa fue robada por Ranni para fabricar los Cuchillos Negros',
      'Su derrota libera la Muerte Predestinada al cosmos',
    ],
    inferred: [
      'Su servicio es indistinguible de su tortura cosmológica',
      'Su transformación en Bestia de la Muerte Negra es desesperación, no orgullo',
      'Su lealtad no se cuestiona — es estructural, no elegida',
    ],
    ambiguous: [
      'Si Maliketh experimenta algo parecido a la libertad o solo al deber',
      'Si conoció el robo de Ranni en su momento o solo al final',
      'Cuál es la relación entre su raza y los Hombres-Bestia primordiales del Crisol',
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
      'Compañera misteriosa del Mancillado. Doncella espectral, posiblemente hija no nacida de Marika, posiblemente la Doncella Quemada destinada a encender el Erdtree. Abandona al Mancillado solo si este abraza la Llama Frenética.',
    deepLore: [
      h(2, 'La acompañante', 'acompanante'),
      p(
        'Melina aparece tempranamente en el viaje del ',
        link('Mancillado', 'concept', 'tarnished'),
        ' como guía sin pasado. Le ofrece convertir las runas en niveles, le revela los puntos de gracia, le lleva al lugar donde despierta el caballo Torrent. Su origen es deliberadamente vago: nació "junto al Erdtree", de "una madre que no existe", "su rol fue ofrecido pero está incompleto".',
      ),
      h(2, 'Posibles identidades', 'identidades'),
      p(
        'Las teorías son varias y mutuamente excluyentes. La más fuerte: Melina es una hija de ',
        link('Marika', 'character', 'marika'),
        ' que nunca llegó a nacer, una identidad incompleta. Su ojo cerrado puede ser metáfora de su naturaleza incompleta — falta una parte de ella en el cosmos. Otra: es la Doncella Quemada original, destinada a sacrificarse para encender el ',
        link('Erdtree', 'concept', 'erdtree'),
        ' tras la fractura.',
      ),
      h(2, 'La quema', 'quema'),
      p(
        'Si el Mancillado sigue la ruta clásica, llega un punto en que el Erdtree debe ser quemado para dejar pasar al trono. Melina se ofrece voluntariamente para encender la llama del sacrificio. Pero si el Mancillado abraza la ',
        link('Llama Frenética', 'concept', 'frenzied-flame'),
        ', Melina lo abandona — y, en ese final, jura venganza fría desde la oscuridad.',
      ),
      q(
        'Te concedo este don: el de la sangre, lágrimas y muerte. El Erdtree me espera. Que el destino de los dioses sea mi destino también.',
        'Melina antes de la inmolación'
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Melina es la única figura del Interregno que parece amar al Mancillado sin agenda — al menos hasta el último momento, donde su identidad cosmológica se manifiesta. Su sacrificio es el único acto enteramente generoso del juego. Su abandono ante la Llama Frenética demuestra que incluso lo más amoroso del cosmos prefiere desaparecer antes que tolerar el nihilismo total.',
      ),
    ],
    confirmed: [
      'Melina aparece junto al Erdtree, sin recuerdos de madre humana',
      'Permite al Mancillado convertir runas en niveles',
      'Se inmola para encender el Erdtree en la ruta clásica',
      'Abandona al Mancillado si este acepta la Llama Frenética',
    ],
    inferred: [
      'Es probablemente una hija no nacida de Marika',
      'Su ojo cerrado representa una incompletitud cosmológica',
      'Su afecto por el Mancillado es genuino y no manipulador',
    ],
    ambiguous: [
      'Si es la Doncella Quemada original o un eco posterior',
      'Si su sacrificio es destino o elección',
      'Si reaparece como antagonista al final de la ruta de la Llama Frenética',
    ],
    beneficiaries: 'El Mancillado, sostenido en su viaje. El Orden Dorado, gracias a su sacrificio en la quema del árbol.',
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
        ', un fuego que podía consumir incluso a los dioses.',
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
        ', irónicamente la misma fuerza que después fue sellada en él. Tras la caída de la Reina, los Pieles de Dios quedaron como secta perseguida pero no extinta.',
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'La Gloam-Eyed Queen es la cara olvidada del cosmos. Cada era nueva borra la anterior, pero los rituales y la llama persisten. Su existencia confirma que el Orden Dorado no es eterno — solo es la era ',
        { type: 'em' as const, text: 'actual' },
        '. El próximo final, sea cual sea, hará a Marika tan olvidada como ahora lo está la Reina del Crepúsculo.',
      ),
    ],
    confirmed: [
      'Gloam-Eyed Queen fue Empyrean de una era previa al Orden Dorado',
      'Otorgó la Llama Negra a los Pieles de Dios',
      'Fue derrotada por Maliketh',
      'Su derrota permitió la implantación del Orden Dorado',
    ],
    inferred: [
      'Es prueba de que la cosmología tiene sucesión de eras, no estructura eterna',
      'Los Pieles de Dios actuales conservan rituales en su nombre',
      'La Llama Negra que portó es opuesta filosóficamente al fuego dorado',
    ],
    ambiguous: [
      'Su nombre verdadero, su forma exacta, y su origen',
      'Si la Llama Negra precede a ella o fue creación suya',
      'Si su derrota fue decisiva o si su presencia persiste de modos sutiles',
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
        ', mantiene su Gran Runa solo a base de injertos: brazos cortados a soldados caídos, manos múltiples cosidas en su cuerpo, animales fusionados en sus extremidades.',
      ),
      h(2, 'El reino de Stormveil', 'stormveil'),
      p(
        'Reina sobre ',
        link('Stormveil', 'region', 'stormveil'),
        ', el castillo originalmente de su antepasado Godfrey. Sus súbditos lo desprecian; sus enemigos lo subestiman. Su tragedia es la patética: aferrarse al linaje precisamente porque sabe que él, personalmente, no tiene mérito propio.',
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Godrick es la decadencia aristocrática llevada al absurdo cosmológico. Es lo que el Orden Dorado deja cuando los dioses se han ido: nobles secundarios injertando piezas para mantener la apariencia de poder.',
      ),
    ],
    confirmed: [
      'Godrick es descendiente lateral de Godfrey',
      'Mantiene su Gran Runa mediante injertos rituales',
      'Reina en Stormveil, el castillo ancestral de Godfrey',
    ],
    inferred: [
      'Su debilidad nominal lo vuelve el primer demidiós abordable para el Mancillado',
      'Sus injertos son tanto técnica como compensación psicológica',
      'Nepheli Loux, posible heredera de Godfrey, podría legítimamente desplazarlo',
    ],
    ambiguous: [
      'Si su linaje incluye descendencia directa de Godfrey o solo lateral',
      'Cuántos siglos lleva injertándose',
    ],
    relatedCharacters: ['godfrey', 'nepheli-loux', 'kenneth-haight'],
    relatedRegions: ['stormveil', 'limgrave'],
    relatedConcepts: ['great-rune'],
    relatedFactions: ['orden-dorado'],
  },

  fortissax: {
    slug: 'fortissax',
    subtitle: 'Antiguo Dragón aliado de Godwyn · Atrapado en la pesadilla del demidiós muerto',
    summary: 'Antiguo dragón de Farum Azula, aliado eterno de Godwyn por pacto sagrado. Tras la muerte parcial de Godwyn, quedó atrapado dentro del sueño moribundo del demidiós, peleando eternamente contra su corrupción.',
    deepLore: [
      h(2, 'El pacto', 'pacto'),
      p(
        'Fortissax fue un Antiguo Dragón — uno de los últimos vestigios de la era anterior al Orden Dorado. ',
        link('Godwyn', 'character', 'godwyn'),
        ', el de Ojos Dorados, no lo derrotó: lo persuadió. Hicieron pacto de fraternidad eterna, simbolizado por el rayo que Godwyn aprendió a empuñar.',
      ),
      h(2, 'La prisión onírica', 'prision'),
      p(
        'Tras la ',
        link('Noche de los Cuchillos Negros', 'timeline', 'ranni-noche-cuchillos'),
        ', cuando Godwyn quedó parcialmente muerto, su aliado dragónico quedó atrapado dentro del sueño moribundo del demidiós. ',
        link('Deeproot Depths', 'region', 'deeproot-depths'),
        ' es el lugar donde sigue luchando contra la corrupción que invade el cuerpo de Godwyn — peleando, en sueños, contra la propia descomposición de su amigo.',
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Fortissax es la lealtad cósmica más allá de la muerte. Su pesadilla es la negación de un amigo a aceptar que el otro ya no puede ser salvado. Combatirlo en su sueño es liberarlo del bucle.',
      ),
    ],
    relatedCharacters: ['godwyn', 'placidusax', 'fia'],
    relatedRegions: ['deeproot-depths', 'farum-azula'],
    relatedFactions: ['dragones-antiguos'],
    relatedConcepts: ['those-who-live-in-death', 'destined-death'],
  },

  placidusax: {
    slug: 'placidusax',
    subtitle: 'Antiguo Lord de los Dragones · Dios olvidado de la era previa',
    summary: 'Dragón primordial de cinco cabezas, antiguo señor del cosmos antes del Orden Dorado. Su dios — quienquiera que fuese — lo abandonó. Sigue dormitando en Farum Azula, esperando que alguien venga a romperle la espera.',
    deepLore: [
      h(2, 'El dios desaparecido', 'dios'),
      p(
        'Placidusax fue Lord Elden de la era previa al Orden Dorado: regente del cosmos cuando los ',
        link('Antiguos Dragones', 'faction', 'dragones-antiguos'),
        ' aún reinaban. Su dios externo — fuente de su autoridad — desapareció, dejándolo como soberano sin liturgia.',
      ),
      h(2, 'La espera eterna', 'espera'),
      p(
        'Habita en una cámara oculta de ',
        link('Farum Azula', 'region', 'farum-azula'),
        ' suspendido en estasis, esperando un retorno cosmológico que nunca llegará. Es opcional pelear con él — es el dios que el juego permite olvidar, igual que el cosmos lo olvidó.',
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Placidusax es la prueba de que las divinidades anteriores no mueren — solo pierden el escenario. Su tragedia es la del dios sin pueblo, sin templo, sin ritual: existencia sin función.',
      ),
    ],
    relatedCharacters: ['fortissax', 'maliketh'],
    relatedRegions: ['farum-azula'],
    relatedFactions: ['dragones-antiguos'],
    relatedConcepts: ['dioses-exteriores'],
  },

  millicent: {
    slug: 'millicent',
    subtitle: 'Hija prostética de Malenia · Floración inocente de podredumbre',
    summary: 'Brote escarlata de Malenia que ganó conciencia humana. Aprende a usar la espada con un brazo prostético y rechaza la fusión con sus hermanas escarlatas. Su quest es la búsqueda de identidad propia más allá de la podredumbre que la creó.',
    deepLore: [
      h(2, 'Hija de la Floración', 'hija'),
      p(
        'Cuando ',
        link('Malenia', 'character', 'malenia'),
        ' floreció en ',
        link('Caelid', 'region', 'caelid'),
        ', sus brotes escarlatas se dispersaron por el Interregno. La mayoría se convirtieron en horrores. Una sola — Millicent — desarrolló conciencia humana. ',
        link('Gowry', 'character', 'gowry'),
        ' la encontró, le proporcionó un brazo prostético y la guió.',
      ),
      h(2, 'La elección de la identidad', 'identidad'),
      p(
        'Su quest culmina en el ',
        link('Lago de la Podredumbre', 'region', 'lake-of-rot'),
        ', donde otras hijas escarlatas la convocan para fusionarse con ellas. Millicent puede aceptar (perdiéndose en lo colectivo) o rechazar (defendiendo su identidad individual). Si la apoya el Mancillado, lucha por mantener su yo.',
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Millicent es la posibilidad de que un fragmento de horror se vuelva persona. Su victoria — ser ella misma, no parte del coro — es uno de los pocos triunfos puramente humanos del juego.',
      ),
    ],
    relatedCharacters: ['malenia', 'gowry'],
    relatedRegions: ['caelid', 'lake-of-rot', 'haligtree'],
    relatedConcepts: ['scarlet-rot', 'unalloyed-gold'],
  },

  gowry: {
    slug: 'gowry',
    subtitle: 'Mago obsesionado con la podredumbre · Padre adoptivo cuestionable de Millicent',
    summary: 'Mago experto en la podredumbre escarlata que adoptó a Millicent. Su devoción aparente esconde un objetivo dudoso: usarla para acercarse al poder de la Floración Escarlata.',
    deepLore: [
      h(2, 'El obsesivo', 'obsesivo'),
      p(
        'Gowry vive en ',
        link('Caelid', 'region', 'caelid'),
        ', estudiando la ',
        link('Podredumbre Escarlata', 'concept', 'scarlet-rot'),
        ' como filósofo y mago. Encontró a ',
        link('Millicent', 'character', 'millicent'),
        ' y la cuidó. Pero su afecto está mezclado con interés: aspira a comprender la podredumbre desde dentro, y Millicent es su laboratorio caminante.',
      ),
      h(2, 'La fusión final', 'fusion'),
      p(
        'En el final de su quest, Gowry intenta fusionarse con las otras hijas escarlatas para alcanzar el poder pleno de la Floración. Si Millicent rechazó la fusión, debe enfrentar a Gowry y derrotarlo — el padre adoptivo se convierte en último obstáculo de su independencia.',
      ),
    ],
    relatedCharacters: ['millicent', 'malenia'],
    relatedRegions: ['caelid', 'lake-of-rot'],
    relatedConcepts: ['scarlet-rot'],
  },

  blaidd: {
    slug: 'blaidd',
    subtitle: 'Lobo en sombra de Ranni · Hermano-bestia diseñado',
    summary: 'Hombre-lobo creado por Maliketh como Bestia Sombra de Ranni. Su lealtad es estructural — pero lleva en sí la semilla de una locura que sus propios creadores instalaron como freno por si la traicionara.',
    deepLore: [
      h(2, 'El experimento', 'experimento'),
      p(
        'Blaidd fue creado por ',
        link('Maliketh', 'character', 'maliketh'),
        ' a partir de los Hombres-Bestia, diseñado específicamente para servir a ',
        link('Ranni', 'character', 'ranni'),
        ' como su Bestia Sombra. La intención: que Ranni tuviera un guardián tan ligado a ella como Maliketh lo está a Marika. Pero Blaidd no era Maliketh: su devoción se mezcla con un afecto de hermano que excede el contrato.',
      ),
      h(2, 'La locura interna', 'locura'),
      p(
        'Como freno, sus creadores instalaron en él una semilla de locura: si Ranni alguna vez se desviara de su rol Empyrean, Blaidd se volvería bestia incontrolable. Cuando Ranni traiciona a la Voluntad Mayor, esta locura comienza a despertar. Blaidd termina su quest encerrado en una jaula, deslizándose hacia la animalidad.',
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Blaidd es la lealtad diseñada que descubre que es jaula. Su tragedia es saber que su devoción es real ',
        { type: 'em' as const, text: 'y' },
        ' que su locura también lo es: dos verdades simultáneas inseparables.',
      ),
    ],
    relatedCharacters: ['ranni', 'maliketh', 'iji', 'seluvis'],
    relatedFactions: ['hombres-bestia', 'caria'],
    relatedConcepts: ['shadow-bound-beast'],
  },

  iji: {
    slug: 'iji',
    subtitle: 'Gigante herrero · Sirviente leal de Carias',
    summary: 'Antiguo gigante reformado, herrero personal de la familia Caria. Sirve a Ranni con discreción y tristeza, sabiendo que ella usa a sus aliados como herramientas — y aceptándolo porque el plan de la Bruja es lo único que vale la pena en el cosmos.',
    deepLore: [
      h(2, 'El gigante reformado', 'reformado'),
      p(
        'Iji es uno de los pocos gigantes supervivientes de la guerra contra los gigantes del fuego en las ',
        link('Mountaintops', 'region', 'mountaintops'),
        '. Tras siglos de soledad, encontró refugio en la familia ',
        link('Caria', 'faction', 'caria'),
        '. Sirve como herrero — único capaz de forjar las hojas de las muñecas que Ranni habita.',
      ),
      h(2, 'El sacrificio anunciado', 'sacrificio'),
      p(
        'Si el Mancillado avanza la quest de Ranni, los enemigos de la Bruja envían asesinos a Iji. Él lo sabía; los recibe sin huir. Su muerte permite que la quest avance.',
      ),
      h(2, 'Lo que representa', 'tematica'),
      p(
        'Iji es la dignidad del peón consciente. Sabe que es herramienta y sirve igualmente, porque el plan al que sirve es el único que ofrece libertad cosmológica.',
      ),
    ],
    relatedCharacters: ['ranni', 'blaidd', 'seluvis'],
    relatedFactions: ['caria'],
    relatedRegions: ['mountaintops', 'liurnia'],
  },

  seluvis: {
    slug: 'seluvis',
    subtitle: 'Manipulador de muñecos · Falso aliado de Ranni',
    summary: 'Hechicero que forma parte del trío de aliados de Ranni — pero a diferencia de Iji y Blaidd, su lealtad es interesada. Coleciona muñecas de poderosas figuras del Interregno y desea convertir a la propia Ranni en una de ellas.',
    deepLore: [
      h(2, 'El falso compañero', 'falso'),
      p(
        'Seluvis se presenta como discípulo de ',
        link('Ranni', 'character', 'ranni'),
        ' y mago de muñecos. Su laboratorio en ',
        link('Three Sisters', 'region', 'liurnia'),
        ' contiene una colección espeluznante: figuras de mujeres notables del Interregno transformadas en marionetas. Su objetivo final es agregar a Ranni a la colección.',
      ),
      h(2, 'La traición silenciada', 'traicion'),
      p(
        'Si el Mancillado descubre su plan, Seluvis muere por causas misteriosas — probablemente envenenado por el propio Iji, que vigila los alrededores de su señora. La traición nunca llega a consumarse, y Ranni nunca lo nombra. Su existencia es prueba de que incluso los conspiradores tienen conspiradores propios.',
      ),
    ],
    relatedCharacters: ['ranni', 'iji', 'blaidd'],
    relatedFactions: ['caria'],
    relatedRegions: ['liurnia'],
  },

  fia: {
    slug: 'fia',
    subtitle: 'Doncella de Muerte · Portadora de la Runa Mendaz · Compasiva por el cadáver de Godwyn',
    summary: 'Mujer de las Tierras del Norte, doncella ritual de los muertos. Su don es abrazar a otros para regalarles temporalmente fuerza — al precio de quitarles vida. Su quest culmina al obtener la Runa Mendaz cosida en el cadáver de Godwyn.',
    deepLore: [
      h(2, 'El abrazo trágico', 'abrazo'),
      p(
        'Fia llegó al Interregno desde tierras lejanas con un don ambiguo: abrazando a un guerrero, le regala vigor temporal — pero le acorta la vida. La gente la llama Doncella de Muerte por buenas razones. Pierde a su amante temprano usando este don sin querer.',
      ),
      h(2, 'La devoción a Godwyn', 'godwyn'),
      p(
        'Fia desarrolla devoción especial por ',
        link('Godwyn', 'character', 'godwyn'),
        ', el demidiós cuya muerte parcial creó a ',
        link('Aquellos que Viven en la Muerte', 'concept', 'those-who-live-in-death'),
        '. Su misión: sanar la herida cosmológica que sigue abierta. Para esto necesita la ',
        link('Runa Mendaz', 'concept', 'rune-of-death'),
        ' cosida en el cadáver de Godwyn — la pieza que devolverá la Muerte Predestinada al cosmos.',
      ),
      h(2, 'La Era del Crepúsculo', 'crepusculo'),
      p(
        'Su quest culmina en el final ',
        link('Era del Crepúsculo', 'ending', 'duskborn'),
        ': los muertos pueden volver a morir verdaderamente, la herida de Godwyn se cierra, los Que Viven en la Muerte descansan. Es la era más melancólica y, en muchos sentidos, la más misericordiosa.',
      ),
    ],
    relatedCharacters: ['godwyn', 'd', 'maliketh'],
    relatedFactions: ['those-who-live-in-death'],
    relatedRegions: ['deeproot-depths'],
    relatedConcepts: ['rune-of-death', 'destined-death', 'deathroot', 'those-who-live-in-death'],
    relatedEndings: ['duskborn'],
  },

  d: {
    slug: 'd',
    subtitle: 'Cazador de Aquellos que Viven en la Muerte · Hermano del que viste su armadura',
    summary: 'Caballero del Orden Dorado dedicado a exterminar a los Que Viven en la Muerte. Considera a Fia su antítesis. Tiene un hermano que toma su armadura tras su asesinato — la quest culmina en una traición fraternal.',
    deepLore: [
      h(2, 'El cazador', 'cazador'),
      p(
        'D es caballero del ',
        link('Orden Dorado', 'faction', 'orden-dorado'),
        ' especializado en eliminar a ',
        link('Aquellos que Viven en la Muerte', 'faction', 'those-who-live-in-death'),
        '. Su odio es teológico: los considera blasfemia contra la era dorada.',
      ),
      h(2, 'El asesinato', 'asesinato'),
      p(
        'Si el Mancillado asiste a ',
        link('Fia', 'character', 'fia'),
        ' en su quest, D será asesinado por el propio Mancillado al revelar la Runa Mendaz. Su hermano, que viste su armadura tras la muerte, completa una venganza muda contra el héroe que mató a su pariente.',
      ),
    ],
    relatedCharacters: ['fia', 'godwyn'],
    relatedFactions: ['orden-dorado', 'those-who-live-in-death'],
    relatedConcepts: ['rune-of-death', 'destined-death'],
    relatedEndings: ['duskborn'],
  },

  rogier: {
    slug: 'rogier',
    subtitle: 'Mago académico de la Mesa Redonda · Investigador del cuerpo de Godwyn',
    summary: 'Mago educado en Raya Lucaria, investigador serio del enigma de Godwyn. Su salud se deteriora rápidamente al tocar la deathroot. Su honestidad cosmológica lo mata.',
    deepLore: [
      h(2, 'El investigador', 'investigador'),
      p(
        'Rogier es el único mago de la ',
        link('Mesa Redonda', 'concept', 'tarnished'),
        ' que aborda el enigma de ',
        link('Godwyn', 'character', 'godwyn'),
        ' con seriedad académica. Llega a deducir muchas cosas de la ',
        link('Noche de los Cuchillos Negros', 'timeline', 'ranni-noche-cuchillos'),
        ' antes de que su contacto con la ',
        link('Deathroot', 'concept', 'deathroot'),
        ' lo enferme.',
      ),
      h(2, 'La muerte por curiosidad', 'muerte'),
      p(
        'Su deterioro físico es directo resultado de su trabajo de investigación. La conclusión melancólica: comprender el secreto de la Noche cuesta vida. Lega al Mancillado sus notas y un afecto manifiesto por Fia, que él considera honesta.',
      ),
    ],
    relatedCharacters: ['fia', 'godwyn', 'd'],
    relatedFactions: ['those-who-live-in-death'],
    relatedConcepts: ['rune-of-death', 'deathroot'],
  },

  gideon: {
    slug: 'gideon',
    subtitle: 'El Que Todo Lo Sabe · Erudito de la Mesa Redonda · Aspirante traicionero',
    summary: 'El erudito jefe de la Mesa Redonda, antiguo Mancillado que se autoasignó la tarea de investigar a los demidioses. Aparenta servir al Mancillado — pero al final intenta detenerlo, prefiriendo el statu quo a un Señor Elden imprevisible.',
    deepLore: [
      h(2, 'El asesor cuestionable', 'asesor'),
      p(
        'Gideon Ofnir vive en la ',
        link('Mesa Redonda', 'concept', 'tarnished'),
        ' como erudito jefe. Conoce el dossier completo de cada demidiós y guía al Mancillado por el Interregno. Su saber es real; su lealtad, no del todo.',
      ),
      h(2, 'La traición final', 'traicion'),
      p(
        'Tras todas las Grandes Runas reunidas, Gideon revela su pacto con la ',
        link('Llama Frenética', 'concept', 'frenzied-flame'),
        ' y se opone al Mancillado. Su razón: todos los caminos al trono que ha investigado parecen catastróficos, y prefiere el cataclismo conocido al elegido por un advenedizo. Su traición es la del académico que prefiere mantener su modelo a permitir que la realidad lo rebase.',
      ),
    ],
    relatedCharacters: ['nepheli-loux', 'corhyn', 'goldmask'],
    relatedFactions: ['orden-dorado'],
    relatedConcepts: ['frenzied-flame', 'great-rune'],
  },

  goldmask: {
    slug: 'goldmask',
    subtitle: 'El monje silencioso · Reformador filosófico del Orden Dorado',
    summary: 'Asceta que jamás habla, dedicado a descubrir la falla lógica del Orden Dorado. Su estudio metódico lleva al final más cerebral del juego: la Era del Orden, donde la Ley Mayor es perfeccionada hasta ser pura geometría.',
    deepLore: [
      h(2, 'El silencioso', 'silencioso'),
      p(
        'Goldmask jamás pronuncia palabra. Su discípulo ',
        link('Brother Corhyn', 'character', 'corhyn'),
        ' funciona como traductor parcial. Su misión: descubrir y corregir la contradicción interna del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        '.',
      ),
      h(2, 'La reforma', 'reforma'),
      p(
        'Tras siglos de meditación, Goldmask alcanza la conclusión: la Ley Mayor está mal formulada. Si el Mancillado lo apoya, podrá rectificar el Anillo Elden, instaurando la ',
        link('Era del Orden', 'ending', 'order'),
        ' — un cosmos perfectamente coherente. Frío, sin fisuras, sin espacio para lo no encajable. La utopía absoluta o el infierno de los que no caben.',
      ),
    ],
    relatedCharacters: ['corhyn', 'gideon'],
    relatedFactions: ['orden-dorado'],
    relatedConcepts: ['golden-order', 'voluntad-mayor'],
    relatedEndings: ['order'],
  },

  corhyn: {
    slug: 'corhyn',
    subtitle: 'Hermano predicador · Discípulo de Goldmask',
    summary: 'Monje de la Mesa Redonda que abandona su puesto para acompañar a Goldmask en su pilgrim filosófico. Su devoción es total y conmovedora — sigue al maestro silencioso por el continente entero.',
    deepLore: [
      h(2, 'La devoción', 'devocion'),
      p(
        'Corhyn empieza como predicador menor en la ',
        link('Mesa Redonda', 'concept', 'tarnished'),
        ', enseñando los rezos del ',
        link('Orden Dorado', 'concept', 'golden-order'),
        ' a quien quiera. Tras encontrar a ',
        link('Goldmask', 'character', 'goldmask'),
        ' abandona su puesto y lo sigue por todo el Interregno, intentando entender lo que su maestro contempla en silencio.',
      ),
      h(2, 'El acompañante', 'acompanante'),
      p(
        'Es el único contacto humano de Goldmask. Su rol es testimonio: estar presente en el momento en que la Ley Mayor sea reformada. La paradoja final es que Corhyn nunca termina de entender lo que su maestro hace — solo de creer en él.',
      ),
    ],
    relatedCharacters: ['goldmask', 'gideon'],
    relatedFactions: ['orden-dorado'],
    relatedConcepts: ['golden-order'],
    relatedEndings: ['order'],
  },

  'dung-eater': {
    slug: 'dung-eater',
    subtitle: 'El blasfemo del Sello Mendaz · Profeta del sufrimiento universal',
    summary: 'Asesino y violador encarcelado bajo Leyndell, devoto del sufrimiento por sí mismo. Su Sello Mendaz, si se entrega al Anillo Elden, instaura el peor de los finales: la maldición eterna de toda la humanidad.',
    deepLore: [
      h(2, 'El nihilista activo', 'nihilista'),
      p(
        'El Dung Eater fue capturado tras cometer crímenes innombrables: violar cadáveres, asesinar por placer, profanar cuerpos sagrados. Su filosofía no busca poder — busca el sufrimiento como ley universal. Es uno de los pocos personajes del Interregno cuya motivación es puro sadismo cosmológico.',
      ),
      h(2, 'El sello carmesí', 'sello'),
      p(
        'Posee un Sello Mendaz: una marca que, aplicada al Anillo Elden, condena eternamente a quien la lleve. Para perfeccionar su maldición, el Dung Eater necesita "sembrarla" en víctimas vivas — el Mancillado puede ayudarlo recolectando cadáveres marcados. La quest culmina con la marca aplicada al Anillo, instaurando la ',
        link('Bendición de la Desesperación', 'ending', 'despair'),
        '.',
      ),
    ],
    relatedCharacters: ['d'],
    relatedConcepts: ['great-rune'],
    relatedEndings: ['despair'],
  },
}
