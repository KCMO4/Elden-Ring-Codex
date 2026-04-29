/**
 * Coverage Plan — Elden Ring Codex (juego base)
 *
 * Mapa exhaustivo de todas las entidades que el codex debería contemplar.
 * Solo lore del juego base. NO incluye Shadow of the Erdtree.
 *
 * Cada entrada documenta:
 *  - slug: identificador propuesto (en kebab-case, idéntico al `id` en data
 *    cuando ya existe)
 *  - name: nombre canónico en español o transliteración
 *  - category: una de las 18 categorías del plan
 *  - priority: core | important | secondary | compact
 *      core      → narrativa central, debe tener página dedicada profunda
 *      important → relevante para el lore, debe tener página dedicada
 *      secondary → contexto útil, página dedicada media
 *      compact   → entrada corta o referencia interna
 *  - shouldHaveDedicatedPage: si merece su propia página /detalle
 *  - currentStatus:
 *      existing → entrada en data con lore profundo (charactersDeepLore o
 *                 lore supplement equivalente)
 *      partial  → entrada existe en data pero sin deepLore supplement
 *      missing  → no existe entrada todavía
 *  - suggestedEntityType: bajo qué tipo de página renderizarse
 *  - notes: nota de implementación
 */

export type CoverageCategory =
  | 'major-characters'
  | 'secondary-npcs'
  | 'quest-npcs'
  | 'invaders-hostiles'
  | 'demigods'
  | 'remembrance-bosses'
  | 'major-bosses-non-remembrance'
  | 'dragons'
  | 'astral-cosmic'
  | 'outer-gods-cosmic-forces'
  | 'historical-unseen'
  | 'enemy-races'
  | 'factions'
  | 'regions'
  | 'subregions'
  | 'concepts'
  | 'timeline-events'
  | 'endings'

export type CoveragePriority = 'core' | 'important' | 'secondary' | 'compact'
export type CoverageStatus = 'existing' | 'partial' | 'missing'
export type CoverageEntityType =
  | 'character'
  | 'region'
  | 'faction'
  | 'concept'
  | 'timeline'
  | 'boss'
  | 'species'
  | 'ending'

export interface CoverageEntry {
  slug: string
  name: string
  category: CoverageCategory
  priority: CoveragePriority
  shouldHaveDedicatedPage: boolean
  currentStatus: CoverageStatus
  suggestedEntityType: CoverageEntityType
  notes?: string
}

/* ════════════════════════════════════════════════════════════════════════ */
/* THE COVERAGE PLAN                                                         */
/* ════════════════════════════════════════════════════════════════════════ */

export const coveragePlan: CoverageEntry[] = [

  /* ──────────────────────── 1. MAJOR CHARACTERS ──────────────────────── */
  { slug: 'marika',           name: 'Marika la Eterna',                category: 'major-characters', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character', notes: 'Página ultra-detallada en charactersDeepLore. Núcleo del juego.' },
  { slug: 'radagon',          name: 'Radagon de la Melena Roja',       category: 'major-characters', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character', notes: 'Página ultra-detallada. Aspecto masculino de Marika.' },
  { slug: 'godfrey',          name: 'Godfrey / Hoarah Loux',           category: 'major-characters', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character', notes: 'Primer Señor Elden. Página ultra-detallada.' },
  { slug: 'maliketh',         name: 'Maliketh la Hoja Negra',          category: 'major-characters', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character', notes: 'Bestia Sombra de Marika. Carga la Runa de la Muerte.' },
  { slug: 'melina',           name: 'Melina',                          category: 'major-characters', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character', notes: 'Promovida a deep tier en Batch 1 — estructura completa de 12 secciones con identidad cosmológica como hija implícita de Marika.' },
  { slug: 'gloam-eyed-queen', name: 'Reina de Ojos Crepusculares',     category: 'major-characters', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character', notes: 'Promovida a deep tier en Batch 1 — predecesora cosmológica de Marika con análisis explícito de teorías y ambigüedades.' },

  /* ──────────────────────── 2. SECONDARY NPCs ──────────────────────── */
  { slug: 'fia',              name: 'Fia, Doncella de Muerte',         category: 'secondary-npcs', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character', notes: 'Tiene deep lore. Núcleo de la ruta del Crepúsculo.' },
  { slug: 'd',                name: 'D, Cazador de Aquellos que Viven en la Muerte', category: 'secondary-npcs', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character' },
  { slug: 'rogier',           name: 'Rogier el Mago',                  category: 'secondary-npcs', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character' },
  { slug: 'gideon',           name: 'Gideon Ofnir',                    category: 'secondary-npcs', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character' },
  { slug: 'goldmask',         name: 'Goldmask',                        category: 'secondary-npcs', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character' },
  { slug: 'corhyn',           name: 'Brother Corhyn',                  category: 'secondary-npcs', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character' },
  { slug: 'blaidd',           name: 'Blaidd el Lobo Sombra',           category: 'secondary-npcs', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character' },
  { slug: 'iji',              name: 'Iji el Gigante',                  category: 'secondary-npcs', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character' },
  { slug: 'seluvis',          name: 'Seluvis el Manipulador',          category: 'secondary-npcs', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character' },
  { slug: 'millicent',        name: 'Millicent',                       category: 'secondary-npcs', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character' },
  { slug: 'gowry',            name: 'Gowry',                           category: 'secondary-npcs', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character' },
  { slug: 'nepheli-loux',     name: 'Nepheli Loux',                    category: 'secondary-npcs', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'character', notes: 'Existe en data pero falta lore profundo en charactersLore.' },
  { slug: 'kenneth-haight',   name: 'Kenneth Haight',                  category: 'secondary-npcs', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'character' },
  { slug: 'sellen',           name: 'Sorceress Sellen',                category: 'secondary-npcs', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'character', notes: 'Lore base. Promover a deep — clave para Caelid y magia.' },
  { slug: 'jerren',           name: 'Jerren, Señor de la Guerra',      category: 'secondary-npcs', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'character' },
  { slug: 'roderika',         name: 'Roderika',                        category: 'secondary-npcs', priority: 'secondary', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'character' },
  { slug: 'hewg',             name: 'Hewg el Maestro Herrero',         category: 'secondary-npcs', priority: 'secondary', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'character' },
  { slug: 'enia',             name: 'Enia, Doncella de Dedos',         category: 'secondary-npcs', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'character' },
  { slug: 'boc',              name: 'Boc el Sastre',                   category: 'secondary-npcs', priority: 'secondary', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'character' },
  { slug: 'alexander',        name: 'Alexander, Olla Guerrero',        category: 'secondary-npcs', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'character', notes: 'Promover a deep — núcleo del Festival de Caelid.' },
  { slug: 'diallos',          name: 'Diallos Hoslow',                  category: 'secondary-npcs', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'character' },
  { slug: 'jar-bairn',        name: 'Jar-Bairn',                       category: 'secondary-npcs', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'character' },
  { slug: 'latenna',          name: 'Latenna la Albinaúrica',          category: 'secondary-npcs', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'character' },
  { slug: 'albus',            name: 'Albus el Albinaúrico',            category: 'secondary-npcs', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'character' },
  { slug: 'thops',            name: 'Thops, el Mago Aspirante',        category: 'secondary-npcs', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'character' },
  { slug: 'merchant-kale',    name: 'Mercader Kale',                   category: 'secondary-npcs', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'character', notes: 'Primer mercader del Mancillado. Importante simbólicamente.' },
  { slug: 'miriel',           name: 'Miriel, Pastor de los Votos',     category: 'secondary-npcs', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'character', notes: 'Tortuga académica de la Iglesia de los Votos. Vendedor de hechizos y rezos clave.' },
  { slug: 'gostoc',           name: 'Gatekeeper Gostoc',               category: 'secondary-npcs', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'character', notes: 'Portero traidor de Stormveil — saquea cadáveres del Mancillado.' },
  { slug: 'pidia',            name: 'Pidia, Sirviente Carian',         category: 'secondary-npcs', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'character', notes: 'Sirviente fiel de la familia Caria en Caria Manor.' },
  { slug: 'ensha',            name: 'Ensha del Recuerdo Real',         category: 'secondary-npcs', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'character', notes: 'Asesino de Gideon. Marca el momento en que Gideon traiciona al Mancillado.' },
  { slug: 'twin-maiden-husks', name: 'Doncellas Gemelas Husks',        category: 'secondary-npcs', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'character', notes: 'Mercaderes-cadáver de la Mesa Redonda. Reliquias.' },
  { slug: 'd-twin-brother',   name: 'El Hermano de D',                 category: 'secondary-npcs', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'character', notes: 'Aparece tras la muerte de D vistiendo su armadura. Cumple venganza muda en la quest de Fia.' },

  /* ──────────────────────── 3. QUEST NPCs (otros con quests) ──────────────────────── */
  { slug: 'irina',            name: 'Irina de la Casa Volmer',         category: 'quest-npcs', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'character' },
  { slug: 'edgar',            name: 'Edgar de la Casa Volmer',         category: 'quest-npcs', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'character' },
  { slug: 'hyetta',           name: 'Hyetta',                          category: 'quest-npcs', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'character', notes: 'Promover a deep — central para la ruta de la Llama Frenética.' },
  { slug: 'dung-eater',       name: 'Dung Eater',                      category: 'quest-npcs', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character' },

  /* ──────────────────────── 4. INVADERS / HOSTILES ──────────────────────── */
  { slug: 'varre',            name: 'White Mask Varré',                category: 'invaders-hostiles', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'character', notes: 'Promover a deep — primer NPC del juego, gancho del culto de Mohg.' },
  { slug: 'shabriri',         name: 'Shabriri',                        category: 'invaders-hostiles', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'character', notes: 'Espíritu poseedor. Profeta de la Llama Frenética.' },
  { slug: 'yura',             name: 'Yura el Cazador de Dedos Sangrientos', category: 'invaders-hostiles', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'character' },
  { slug: 'eleonora',         name: 'Eleonora la Lanza Violeta',       category: 'invaders-hostiles', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'character' },
  { slug: 'bernahl',          name: 'Bernahl el Caballero Desterrado', category: 'invaders-hostiles', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'character' },
  { slug: 'patches',          name: 'Patches el Astuto',               category: 'invaders-hostiles', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'character' },
  { slug: 'tanith',           name: 'Lady Tanith',                     category: 'invaders-hostiles', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'character' },
  { slug: 'rya',              name: 'Rya / Zorayas',                   category: 'invaders-hostiles', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'character' },
  { slug: 'boggart',          name: 'Blackguard Big Boggart',          category: 'invaders-hostiles', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'character', notes: 'Estrictamente NPC mercader, no invasor; pero su quest cruza con Patches.' },

  /* ──────────────────────── 5. DEMIGODS ──────────────────────── */
  { slug: 'godwyn',           name: 'Godwyn el de Ojos Dorados',       category: 'demigods', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character', notes: 'Primer demidiós muerto. Núcleo de la ruta Crepúsculo.' },
  { slug: 'morgott',          name: 'Morgott, el Rey Caído',           category: 'demigods', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character' },
  { slug: 'mohg',             name: 'Mohg, Señor de la Sangre',        category: 'demigods', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character' },
  { slug: 'ranni',            name: 'Ranni la Bruja',                  category: 'demigods', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character', notes: 'Empyrean rebelde.' },
  { slug: 'rennala',          name: 'Rennala, Reina de la Luna Llena', category: 'demigods', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character', notes: 'Promovida a deep tier en Batch 1 — tragedia del abandono institucional con análisis del bucle del Amber Egg.' },
  { slug: 'radahn',           name: 'Radahn, General Estelar',         category: 'demigods', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character', notes: 'Promovido a deep tier en Batch 1 — clave para Caelid, bloqueo estelar de Ranni y Festival.' },
  { slug: 'rykard',           name: 'Rykard, Lord de la Blasfemia',    category: 'demigods', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character', notes: 'Promovido a deep tier en Batch 1 — análisis del pacto con Eiglay y blasfemia institucional.' },
  { slug: 'malenia',          name: 'Malenia, Espada de Miquella',     category: 'demigods', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character' },
  { slug: 'miquella',         name: 'Miquella el Más Compasivo',       category: 'demigods', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character' },
  { slug: 'godrick',          name: 'Godrick el Injertado',            category: 'demigods', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character', notes: 'Promovido a deep tier en Batch 1 — análisis de la decadencia aristocrática y la patética imitación de Godfrey.' },

  /* ──────────────────────── 6. REMEMBRANCE BOSSES ──────────────────────── */
  { slug: 'astel-naturalborn', name: 'Astel, Nacido de Naturaleza Vacía', category: 'remembrance-bosses', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'boss', notes: 'Página dedicada en characters.ts. Remembrance del Naturalborn.' },
  { slug: 'regal-ancestor-spirit', name: 'Espíritu Ancestral Real',     category: 'remembrance-bosses', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'boss', notes: 'Página dedicada en characters.ts. Remembrance del Regal Ancestor.' },
  { slug: 'fortissax',        name: 'Lichdragon Fortissax',            category: 'remembrance-bosses', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character' },
  { slug: 'placidusax',       name: 'Dragonlord Placidusax',           category: 'remembrance-bosses', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character' },
  { slug: 'elden-beast-boss', name: 'Bestia Elden (boss final)',       category: 'remembrance-bosses', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'boss', notes: 'Existe como concepto. Crear página de boss separada para Elden Remembrance.' },

  /* ──────────────────────── 7. MAJOR NON-REMEMBRANCE BOSSES ──────────────────────── */
  { slug: 'tree-sentinel',    name: 'Tree Sentinel (Caballero del Erdtree)', category: 'major-bosses-non-remembrance', priority: 'compact', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'species', notes: 'Élite militar dorada montada. Página en factions.ts.' },
  { slug: 'grafted-scion',    name: 'Grafted Scion',                   category: 'major-bosses-non-remembrance', priority: 'compact', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'species', notes: 'Experimentos preliminares del injerto. Página en factions.ts.' },
  { slug: 'beast-clergyman',  name: 'Beast Clergyman',                 category: 'major-bosses-non-remembrance', priority: 'compact', shouldHaveDedicatedPage: false, currentStatus: 'partial',  suggestedEntityType: 'boss', notes: 'Primera fase de Maliketh. Cubierto en página de Maliketh.' },
  { slug: 'royal-knight-loretta', name: 'Loretta, Caballero Real (Caria Manor)', category: 'major-bosses-non-remembrance', priority: 'compact', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'boss', notes: 'Loretta tiene dos versiones: una en Caria Manor, otra en Elphael (Knight of the Haligtree). Misma persona.' },
  { slug: 'ulcerated-tree-spirit', name: 'Espíritu Ulcerado del Árbol', category: 'major-bosses-non-remembrance', priority: 'compact', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character', notes: 'Encarnación corporal de la corrupción del Erdtree. Página dedicada en characters.ts.' },
  { slug: 'fire-giant',       name: 'El Último Gigante del Fuego',     category: 'major-bosses-non-remembrance', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character', notes: 'Boss único en Mountaintops. Custodio de la Llama Quemadora. Página dedicada.' },
  { slug: 'godskin-noble',    name: 'Godskin Noble',                   category: 'major-bosses-non-remembrance', priority: 'compact', shouldHaveDedicatedPage: false, currentStatus: 'partial', suggestedEntityType: 'boss', notes: 'Apóstol Pieles de Dios. Cubierto por faction pieles-de-dios.' },
  { slug: 'godskin-apostle',  name: 'Godskin Apostle',                 category: 'major-bosses-non-remembrance', priority: 'compact', shouldHaveDedicatedPage: false, currentStatus: 'partial', suggestedEntityType: 'boss', notes: 'Mismo culto que el Noble. Cubierto por faction.' },
  { slug: 'godskin-duo',      name: 'Dúo Godskin (Farum Azula)',       category: 'major-bosses-non-remembrance', priority: 'compact', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character', notes: 'Dúo final de Pieles de Dios. Página dedicada en characters.ts.' },
  { slug: 'black-blade-kindred', name: 'Black Blade Kindred',          category: 'major-bosses-non-remembrance', priority: 'compact', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'species', notes: 'Avatares menores de Maliketh. Página en factions.ts.' },
  { slug: 'elemer-of-briar',  name: 'Elemer of the Briar',             category: 'major-bosses-non-remembrance', priority: 'compact', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character', notes: 'Bell Bearing Hunter en Volcano Manor. Personaje histórico de Eochaid con su propio backstory.' },
  { slug: 'crucible-knight-ordovis', name: 'Ordovis, Caballero del Crisol',    category: 'major-bosses-non-remembrance', priority: 'compact', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character', notes: 'Caballero del Crisol más prominente. Página dedicada en characters.ts.' },
  { slug: 'commander-niall',  name: 'Commander Niall',                 category: 'major-bosses-non-remembrance', priority: 'compact', shouldHaveDedicatedPage: false, currentStatus: 'existing', suggestedEntityType: 'boss', notes: 'Comandante de la fortaleza Sol en Mountaintops.' },
  { slug: 'commander-oneill', name: 'Commander O\'Neil',               category: 'major-bosses-non-remembrance', priority: 'compact', shouldHaveDedicatedPage: false, currentStatus: 'existing', suggestedEntityType: 'boss', notes: 'Cleanrot Knight en Caelid. Custodio de podredumbre escarlata.' },
  { slug: 'royal-revenant',   name: 'Royal Revenant',                  category: 'major-bosses-non-remembrance', priority: 'compact', shouldHaveDedicatedPage: false, currentStatus: 'partial', suggestedEntityType: 'boss', notes: 'Cubierto vagamente por species revenants.' },
  { slug: 'cemetery-shade',   name: 'Sombras del Cementerio (Cemetery Shades)', category: 'major-bosses-non-remembrance', priority: 'compact', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'species', notes: 'Espectros funerarios. Página en factions.ts.' },
  { slug: 'erdtree-burial-watchdog', name: 'Perros Custodios del Entierro Erdtree', category: 'major-bosses-non-remembrance', priority: 'compact', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'species', notes: 'Custodios pétreos de tumbas oficiales. Página en factions.ts.' },
  { slug: 'bell-bearing-hunter', name: 'Bell Bearing Hunters', category: 'major-bosses-non-remembrance', priority: 'compact', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'species', notes: 'Cazadores espectrales nocturnos en sitios de mercaderes muertos. Página en factions.ts.' },
  { slug: 'ancestor-spirit',  name: 'Espíritu Ancestral (versión menor)', category: 'major-bosses-non-remembrance', priority: 'compact', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character', notes: 'Variante menor del Regal Ancestor Spirit. Página dedicada en characters.ts.' },

  /* ──────────────────────── 8. DRAGONS ──────────────────────── */
  { slug: 'placidusax',       name: 'Dragonlord Placidusax',           category: 'dragons', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character' },
  { slug: 'fortissax',        name: 'Lichdragon Fortissax',            category: 'dragons', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character' },
  { slug: 'lansseax',         name: 'Dragón Antiguo Lansseax',         category: 'dragons', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'boss',      notes: 'Hermana de Fortissax. Boss en Altus.' },
  { slug: 'gransax',          name: 'Gransax el Dragón Tormenta',      category: 'dragons', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'character', notes: 'Histórico — su cuerpo gigante atravesado en Leyndell. Atacó la capital eras atrás.' },
  { slug: 'greyoll',          name: 'Greyoll, Dragona Anciana',        category: 'dragons', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'boss',      notes: 'Dragona inmóvil de Dragonbarrow. Madre de muchos.' },
  { slug: 'dragon-agheel',    name: 'Dragón Volador Agheel',           category: 'dragons', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'boss' },
  { slug: 'dragon-greyll',    name: 'Dragón Volador Greyll',           category: 'dragons', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'boss' },
  { slug: 'dragon-smarag',    name: 'Dragón Glintstone Smarag',        category: 'dragons', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'boss' },
  { slug: 'dragon-adula',     name: 'Dragón Glintstone Adula',         category: 'dragons', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'boss',      notes: 'Aliado de Ranni. Aparece en Three Sisters.' },
  { slug: 'dragon-ekzykes',   name: 'Decaying Ekzykes',                category: 'dragons', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'boss',      notes: 'Dragón corrompido por Scarlet Rot en Caelid.' },
  { slug: 'dragon-borealis',  name: 'Borealis, la Niebla Congelante',  category: 'dragons', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'boss',      notes: 'Dragón de hielo en Mountaintops.' },
  { slug: 'magma-wyrm-makar', name: 'Magma Wyrm Makar',                category: 'dragons', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'boss',      notes: 'Wyrm-magma en Mt Gelmir.' },
  { slug: 'great-wyrm-theodorix', name: 'Great Wyrm Theodorix',        category: 'dragons', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'boss',      notes: 'Wyrm congelado en Mountaintops.' },
  { slug: 'dragonkin-soldier-nokstella', name: 'Dragonkin Soldier de Nokstella', category: 'dragons', priority: 'compact', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'boss' },
  { slug: 'dragonkin-soldier-siofra', name: 'Dragonkin Soldier de Siofra River', category: 'dragons', priority: 'compact', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'boss' },
  { slug: 'dragonkin-soldier-rot', name: 'Dragonkin Soldier de Lake of Rot', category: 'dragons', priority: 'compact', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'boss' },
  { slug: 'dragones-antiguos', name: 'Antiguos Dragones',              category: 'dragons', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'faction',   notes: 'Cubierto. Conecta a todos los dragones individuales.' },
  { slug: 'dragon-communion', name: 'Comunión Dracónica',              category: 'dragons', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'faction',   notes: 'Existe como faction sin lore profundo.' },
  { slug: 'ancient-dragon-cult', name: 'Culto del Antiguo Dragón',     category: 'dragons', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'faction',   notes: 'Página dedicada en factions.ts. Culto sincrético de Godwyn + Fortissax + Lansseax.' },

  /* ──────────────────────── 9. ASTRAL / COSMIC ──────────────────────── */
  { slug: 'astel-naturalborn-cosmic', name: 'Astel, Naturalborn (entidad cosmológica)', category: 'astral-cosmic', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character', notes: 'Página dedicada en characters.ts (también como remembrance boss). La estrella que destruyó a los Nox.' },
  { slug: 'astel-stars-of-darkness', name: 'Astel, Estrellas de la Oscuridad', category: 'astral-cosmic', priority: 'compact', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character', notes: 'Variante en Yelough Anix Tunnel. Página en characters.ts.' },
  { slug: 'malformed-stars',  name: 'Estrellas Malformadas / Withered Astels', category: 'astral-cosmic', priority: 'compact', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'species', notes: 'Variantes menores degenerated de Astel. Página en factions.ts.' },
  { slug: 'fallingstar-beast', name: 'Bestia Estrellada (Fallingstar Beast)', category: 'astral-cosmic', priority: 'compact', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'species', notes: 'Especie en factions.ts.' },
  { slug: 'fallingstar-beast-full', name: 'Full-Grown Fallingstar Beast', category: 'astral-cosmic', priority: 'compact', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character', notes: 'Versión adulta. Boss único en Mt Gelmir. Página en characters.ts.' },
  { slug: 'alabaster-lords',  name: 'Lords Alabastro',                 category: 'astral-cosmic', priority: 'compact', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'species', notes: 'Caballeros cósmicos blancos. Página en factions.ts.' },
  { slug: 'onyx-lords',       name: 'Lords Onyx',                      category: 'astral-cosmic', priority: 'compact', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'species', notes: 'Variantes negras de los Alabaster Lords. Página en factions.ts.' },
  { slug: 'gravity-magic',    name: 'Magia Gravitacional',             category: 'astral-cosmic', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'concept', notes: 'Cubierto parcialmente por primeval-current. Crear concept dedicado o expandir.' },
  { slug: 'primeval-current', name: 'Corriente Primigenia',            category: 'astral-cosmic', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'concept' },
  { slug: 'stars-and-fate',   name: 'Estrellas y Destino',             category: 'astral-cosmic', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'concept', notes: 'Concepto cosmológico — cómo el destino se inscribe en cuerpos celestes. Núcleo de la quest de Ranni.' },
  { slug: 'sellia',           name: 'Sellia, Ciudad de Hechicería',    category: 'astral-cosmic', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'region' },
  { slug: 'radahn-holds-stars', name: 'Radahn detiene las Estrellas', category: 'astral-cosmic', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'partial', suggestedEntityType: 'timeline', notes: 'Cubierto en lore de personajes. Crear timeline event dedicado para mayor visibilidad.' },

  /* ──────────────────────── 10. OUTER GODS / COSMIC FORCES ──────────────────────── */
  { slug: 'voluntad-mayor',   name: 'Voluntad Mayor (Greater Will)',   category: 'outer-gods-cosmic-forces', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept' },
  { slug: 'bestia-elden-cosmic', name: 'Bestia Elden (entidad cosmológica)', category: 'outer-gods-cosmic-forces', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept', notes: 'Tiene concept entry. Considerar separar boss + concepto cosmológico.' },
  { slug: 'outer-god-of-rot', name: 'Dios Exterior de la Podredumbre', category: 'outer-gods-cosmic-forces', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'concept', notes: 'Implícito en scarlet-rot pero merece concept aparte como entidad parásita.' },
  { slug: 'formless-mother',  name: 'Madre Informe',                   category: 'outer-gods-cosmic-forces', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept' },
  { slug: 'frenzied-flame',   name: 'Llama Frenética',                 category: 'outer-gods-cosmic-forces', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept' },
  { slug: 'one-great',        name: 'El Único Grande (One Great)',     category: 'outer-gods-cosmic-forces', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'concept', notes: 'Mencionado en oraciones de Pieles de Dios. Posiblemente entidad cósmica perdida.' },
  { slug: 'twinbird-outer-death', name: 'Twinbird / Dios Exterior de la Muerte', category: 'outer-gods-cosmic-forces', priority: 'compact', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept', notes: 'Estatuas Twinbird en Bestial Sanctum y otros lugares. Teoría: dios de la verdadera muerte previo a Marika.' },
  { slug: 'fell-god',         name: 'El Fell God (Dios Caído del Fuego)', category: 'outer-gods-cosmic-forces', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept', notes: 'Dios de los Gigantes del Fuego. Distinto de la Llama Frenética. Su llama es la Llama Quemadora.' },
  { slug: 'dark-moon',        name: 'Luna Oscura',                     category: 'outer-gods-cosmic-forces', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept' },
  { slug: 'full-moon',        name: 'Luna Llena',                      category: 'outer-gods-cosmic-forces', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'concept' },
  { slug: 'blood-star',       name: 'Estrella de Sangre',              category: 'outer-gods-cosmic-forces', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'concept', notes: 'Teorizada en lore de Mohg. Podría ser la estrella roja que él perseguía.' },
  { slug: 'serpent-god-eiglay', name: 'Eiglay, el Dios Serpiente',     category: 'outer-gods-cosmic-forces', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept', notes: 'Serpiente-dios que devoró a Rykard bajo Volcano Manor. Su nombre: Eiglay.' },
  { slug: 'vanished-dragon-god', name: 'El Dios Desaparecido de Placidusax', category: 'outer-gods-cosmic-forces', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept', notes: 'El dios externo cuya retirada inició la caída de los Antiguos Dragones. Identidad desconocida.' },

  /* ──────────────────────── 11. HISTORICAL / UNSEEN ──────────────────────── */
  { slug: 'gloam-eyed-queen', name: 'Reina de Ojos Crepusculares',     category: 'historical-unseen', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character', notes: 'Promovida a deep tier en Batch 1 — entry duplicada también listada bajo major-characters.' },
  { slug: 'snow-witch-renna', name: 'La Bruja de Nieve / Renna',       category: 'historical-unseen', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'character', notes: 'Renna es alias de Ranni en su forma humana antes de volverse muñeca. Snow Witch puede ser figura distinta de la tradición Caria — investigar.' },
  { slug: 'blind-swordsman',  name: 'El Espadachín Ciego',             category: 'historical-unseen', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'character', notes: 'Mencionado en items de Land of Reeds. Origen de la katana Hand of Malenia.' },
  { slug: 'storm-lord',       name: 'El Señor Tormenta',               category: 'historical-unseen', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'character', notes: 'Título primigenio de Godfrey antes del Orden — se conecta con Stormhawk y Serosh.' },
  { slug: 'serosh',           name: 'Serosh, el León Sabio',           category: 'historical-unseen', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'character', notes: 'Espíritu leonino encadenado en la frente de Godfrey. Voz interior del rey.' },
  { slug: 'uhl-civilization', name: 'Civilización Uhl / Uld',          category: 'historical-unseen', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'faction', notes: 'Antigua civilización subterránea del Eternal City lineage. Pre-Nox.' },
  { slug: 'ancient-astrologers', name: 'Antiguos Astrólogos',          category: 'historical-unseen', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'faction', notes: 'Predecesores de la Academia. Sus túmulos contienen secretos cósmicos.' },
  { slug: 'azur',             name: 'Azur el Astrólogo Primigenio',    category: 'historical-unseen', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'character', notes: 'Maestro de Sellen. Transformado en cuerpo cósmico por exceso de saber.' },
  { slug: 'lusat',            name: 'Lusat el Astrólogo Primigenio',   category: 'historical-unseen', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'character', notes: 'Compañero de Azur. Mismo destino cósmico.' },
  { slug: 'zamor-heroes',     name: 'Héroes Zamor',                    category: 'historical-unseen', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'faction', notes: 'Pueblo de Zamor — héroes congelados que cazaban gigantes.' },
  { slug: 'eochaid',          name: 'Eochaid, los Maestros de la Espada', category: 'historical-unseen', priority: 'compact', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'faction', notes: 'Linaje de Bastard\'s Stars y Helphen\'s Steeple. Sectas espadachín perdidas.' },
  { slug: 'elemer-of-briar-character', name: 'Elemer of the Briar (histórico)', category: 'historical-unseen', priority: 'compact', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'character', notes: 'Caballero de Eochaid. Originalmente histórico — luego boss en Volcano Manor.' },

  /* ──────────────────────── 12. ENEMY RACES / SPECIES ──────────────────────── */
  { slug: 'omens',            name: 'Omens',                           category: 'enemy-races', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'faction' },
  { slug: 'misbegotten',      name: 'Misbegotten',                     category: 'enemy-races', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'faction' },
  { slug: 'albinauricos',     name: 'Albinaurics',                     category: 'enemy-races', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'faction' },
  { slug: 'silver-mimic-tears', name: 'Lágrimas de Plata / Mimic Tears', category: 'enemy-races', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'faction' },
  { slug: 'claymen',          name: 'Hombres de Arcilla (Claymen)',    category: 'enemy-races', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'species', notes: 'Habitantes de Liurnia. Forma de vida arcillosa.' },
  { slug: 'ancestral-followers', name: 'Seguidores Ancestrales',       category: 'enemy-races', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'species', notes: 'Pueblo del Mesa Ancestral en Siofra. Cazadores con cornamentas.' },
  { slug: 'oracle-envoys',    name: 'Mensajeros Oráculo (Oracle Envoys)', category: 'enemy-races', priority: 'compact', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'species', notes: 'Trompetistas-globo. Heraldos del Orden Dorado en sus formas más extrañas.' },
  { slug: 'wormfaces',        name: 'Caras de Gusano (Wormfaces)',     category: 'enemy-races', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'species', notes: 'Habitantes de Caelid. Posiblemente víctimas de la fractura.' },
  { slug: 'revenants',        name: 'Aparecidos (Revenants)',          category: 'enemy-races', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'species', notes: 'Cuerpos amalgamados. Common en Caria Manor.' },
  { slug: 'wraith-callers',   name: 'Invocadores Espectrales (Wraith Callers)', category: 'enemy-races', priority: 'compact', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'species' },
  { slug: 'gargoyles',        name: 'Gárgolas',                        category: 'enemy-races', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'species', notes: 'Custodios de Deeproot Depths.' },
  { slug: 'imps',             name: 'Diablillos (Imps)',               category: 'enemy-races', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'species' },
  { slug: 'living-jars',      name: 'Jarros Vivientes',                category: 'enemy-races', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'faction' },
  { slug: 'perfumers',        name: 'Perfumeros',                      category: 'enemy-races', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'faction' },
  { slug: 'omenkillers',      name: 'Verdugos Omen',                   category: 'enemy-races', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'faction' },
  { slug: 'fire-monks',       name: 'Monjes de Fuego',                 category: 'enemy-races', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'species', notes: 'Devotos de la Llama del Volcano Manor. Asociados a Fire Giants y Mt Gelmir.' },
  { slug: 'blackflame-monks', name: 'Monjes de la Llama Negra',        category: 'enemy-races', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'species', notes: 'Variantes de Pieles de Dios. Practicantes activos de Black Flame.' },
  { slug: 'thorn-sorcerers',  name: 'Hechiceros de Espinas',           category: 'enemy-races', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'species', notes: 'Practicantes de magia Briars. Asociados a Eochaid.' },
  { slug: 'crystalians',      name: 'Cristalianos (Crystalians)',      category: 'enemy-races', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'species', notes: 'Seres minerales primigenios. Custodios de glintstones.' },
  { slug: 'marionette-soldiers', name: 'Soldados Marioneta',           category: 'enemy-races', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'species', notes: 'Autómatas de Raya Lucaria. Defensores arcanos.' },
  { slug: 'cuckoo-knights',   name: 'Caballeros del Cuco',             category: 'enemy-races', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'species', notes: 'Caballeros de Raya Lucaria. Hechicería marcial.' },
  { slug: 'carian-knights',   name: 'Caballeros Carian',               category: 'enemy-races', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'species', notes: 'Élite de la familia Caria. Loretta es ejemplo.' },
  { slug: 'leyndell-knights', name: 'Caballeros de Leyndell',          category: 'enemy-races', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'species', notes: 'Guardia real del Orden Dorado.' },
  { slug: 'cleanrot-knights', name: 'Caballeros Cleanrot',             category: 'enemy-races', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'faction' },
  { slug: 'redmane-knights',  name: 'Caballeros Redmane',              category: 'enemy-races', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'faction', notes: 'Cubierto como redmanes.' },
  { slug: 'haligtree-knights', name: 'Caballeros del Haligtree',       category: 'enemy-races', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'species', notes: 'Guardia de Elphael — distintos de los Cleanrot Knights.' },
  { slug: 'mausoleum-knights', name: 'Caballeros del Mausoleo',        category: 'enemy-races', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'species', notes: 'Custodios de los Mausoleos Errantes. Recolectores de huesos demidiós.' },
  { slug: 'banished-knights', name: 'Caballeros Desterrados',          category: 'enemy-races', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'faction' },
  { slug: 'vulgar-militia',   name: 'Milicia Vulgar',                  category: 'enemy-races', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'species', notes: 'Caníbales encapuchados. Esclavos del Volcano Manor.' },
  { slug: 'kindred-of-rot',   name: 'Parentela de la Podredumbre',     category: 'enemy-races', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'faction' },
  { slug: 'man-serpents',     name: 'Hombres-Serpiente',               category: 'enemy-races', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'species', notes: 'Súbditos de Eiglay en Volcano Manor. Mismos genes que Rykard ahora.' },
  { slug: 'abductor-virgins', name: 'Vírgenes Secuestradoras',         category: 'enemy-races', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'species', notes: 'Máquinas-secuestradoras del Volcano Manor. Capturan víctimas para Rykard.' },
  { slug: 'frenzied-victims', name: 'Víctimas de la Llama Frenética',  category: 'enemy-races', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'faction' },
  { slug: 'hombres-bestia',   name: 'Hombres-Bestia',                  category: 'enemy-races', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'faction', notes: 'Raza de Maliketh. Cubierto.' },
  { slug: 'crucible-knights', name: 'Caballeros del Crisol',           category: 'enemy-races', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'species' },

  /* ──────────────────────── 13. FACTIONS (no listadas en otras categorías) ──────────────────────── */
  { slug: 'orden-dorado',     name: 'Orden Dorado',                    category: 'factions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'faction' },
  { slug: 'fundamentalistas', name: 'Fundamentalistas del Orden Dorado', category: 'factions', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'faction' },
  { slug: 'dos-dedos',        name: 'Dos Dedos',                       category: 'factions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'faction' },
  { slug: 'tres-dedos',       name: 'Tres Dedos',                      category: 'factions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'faction' },
  { slug: 'finger-readers',   name: 'Lectoras de Dedos',               category: 'factions', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'faction' },
  { slug: 'cuchillos-negros', name: 'Cuchillos Negros',                category: 'factions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'faction' },
  { slug: 'pieles-de-dios',   name: 'Pieles de Dios (Godskins)',       category: 'factions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'faction' },
  { slug: 'nox',              name: 'Nox / Civilización Eterna',       category: 'factions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'faction' },
  { slug: 'volcano-manor',    name: 'Volcano Manor / Recusantes',      category: 'factions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'faction' },
  { slug: 'bloody-fingers',   name: 'Dedos Sangrientos',               category: 'factions', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'faction' },
  { slug: 'those-who-live-in-death', name: 'Aquellos que Viven en la Muerte', category: 'factions', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'faction' },
  { slug: 'deathbirds',       name: 'Pájaros de Muerte (Deathbirds)',  category: 'factions', priority: 'compact',   shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'faction' },
  { slug: 'raya-lucaria-faction', name: 'Académicos de Raya Lucaria',  category: 'factions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'faction' },
  { slug: 'caria',            name: 'Familia Real Carian',             category: 'factions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'faction' },
  { slug: 'fire-giants',      name: 'Gigantes del Fuego',              category: 'factions', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'faction' },
  { slug: 'golden-lineage',   name: 'Linaje Dorado',                   category: 'factions', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'faction' },
  { slug: 'haligtree',        name: 'Seguidores del Haligtree',        category: 'factions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'faction', notes: 'Existe parcialmente. Crear faction dedicada distinto del Haligtree-region.' },
  { slug: 'redmanes',         name: 'Redmanes',                        category: 'factions', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'faction' },
  { slug: 'nomadic-merchants', name: 'Mercaderes Nómadas',             category: 'factions', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'faction', notes: 'Página dedicada en factions.ts. Pueblo nómada perseguido sistemáticamente; Kale es uno de los últimos visibles.' },

  /* ──────────────────────── 14. REGIONS (mayores) ──────────────────────── */
  { slug: 'limgrave',         name: 'Limgrave',                        category: 'regions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'region' },
  { slug: 'liurnia',          name: 'Liurnia de los Lagos',            category: 'regions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'region' },
  { slug: 'caelid',           name: 'Caelid',                          category: 'regions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'region' },
  { slug: 'altus-plateau',    name: 'Meseta del Altus',                category: 'regions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'region' },
  { slug: 'leyndell',         name: 'Leyndell, Capital Real',          category: 'regions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'region' },
  { slug: 'mt-gelmir',        name: 'Mt. Gelmir',                      category: 'regions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'region' },
  { slug: 'mountaintops',     name: 'Cumbres de los Gigantes',         category: 'regions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'region' },
  { slug: 'consecrated-snowfield', name: 'Campo Nevado Consagrado',    category: 'regions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'region' },
  { slug: 'haligtree',        name: 'Haligtree de Miquella',           category: 'regions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'region' },
  { slug: 'farum-azula',      name: 'Crumbling Farum Azula',           category: 'regions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'region' },
  { slug: 'mohgwyn',          name: 'Palacio de Mohgwyn',              category: 'regions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'region' },
  { slug: 'deeproot-depths',  name: 'Deeproot Depths',                 category: 'regions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'region' },

  /* ──────────────────────── 15. SUBREGIONS ──────────────────────── */
  { slug: 'stormveil',        name: 'Castillo Stormveil',              category: 'subregions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'region' },
  { slug: 'peninsula-llorosa', name: 'Península Llorosa',              category: 'subregions', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'region' },
  { slug: 'castle-morne',     name: 'Castillo Morne',                  category: 'subregions', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'region' },
  { slug: 'raya-lucaria',     name: 'Academia de Raya Lucaria',        category: 'subregions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'region' },
  { slug: 'caria-manor',      name: 'Mansión Caria',                   category: 'subregions', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'region' },
  { slug: 'three-sisters',    name: 'Tres Hermanas',                   category: 'subregions', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'region' },
  { slug: 'siofra-river',     name: 'Río Siofra',                      category: 'subregions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'region' },
  { slug: 'ainsel-river',     name: 'Río Ainsel',                      category: 'subregions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'region' },
  { slug: 'nokron',           name: 'Nokron, Ciudad Eterna',           category: 'subregions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'region' },
  { slug: 'nokstella',        name: 'Nokstella, Ciudad Eterna',        category: 'subregions', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'region' },
  { slug: 'lake-of-rot',      name: 'Lago de Podredumbre',             category: 'subregions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'region' },
  { slug: 'sellia',           name: 'Sellia, Ciudad de Hechicería',    category: 'subregions', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'region' },
  { slug: 'redmane-castle',   name: 'Castillo Redmane',                category: 'subregions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'region' },
  { slug: 'dragonbarrow',     name: 'Tumba de los Dragones',           category: 'subregions', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'region' },
  { slug: 'subterranean-shunning-grounds', name: 'Subsuelo Shunning-Grounds', category: 'subregions', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'region' },
  { slug: 'volcano-manor-region', name: 'Mansión Volcánica',           category: 'subregions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'region' },
  { slug: 'ordina',           name: 'Ordina, Ciudad Liturgical',       category: 'subregions', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'region' },
  { slug: 'elphael',          name: 'Elphael, Trono del Haligtree',    category: 'subregions', priority: 'core',      shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'region' },

  /* ──────────────────────── 16. CONCEPTS ──────────────────────── */
  { slug: 'elden-ring',       name: 'Anillo Elden',                    category: 'concepts', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept' },
  { slug: 'elden-beast-concept', name: 'Bestia Elden',                 category: 'concepts', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept' },
  { slug: 'crucible',         name: 'Crisol',                          category: 'concepts', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept' },
  { slug: 'erdtree',          name: 'Erdtree',                         category: 'concepts', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept' },
  { slug: 'minor-erdtrees',   name: 'Erdtrees Menores',                category: 'concepts', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'concept' },
  { slug: 'destined-death',   name: 'Muerte Predestinada',             category: 'concepts', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept' },
  { slug: 'rune-of-death',    name: 'Runa de la Muerte',               category: 'concepts', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept' },
  { slug: 'deathroot',        name: 'Deathroot',                       category: 'concepts', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept' },
  { slug: 'empyrean',         name: 'Empyrean',                        category: 'concepts', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept' },
  { slug: 'shadow-bound-beast', name: 'Bestia Ligada en Sombra',       category: 'concepts', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept' },
  { slug: 'great-rune',       name: 'Gran Runa',                       category: 'concepts', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept' },
  { slug: 'grace',            name: 'Gracia',                          category: 'concepts', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept' },
  { slug: 'tarnished',        name: 'Mancillado (Tarnished)',          category: 'concepts', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept' },
  { slug: 'scarlet-rot',      name: 'Podredumbre Escarlata',           category: 'concepts', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept' },
  { slug: 'unalloyed-gold',   name: 'Oro sin Aleación',                category: 'concepts', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept' },
  { slug: 'frenzied-flame-concept', name: 'Llama Frenética',           category: 'concepts', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept' },
  { slug: 'formless-mother-concept', name: 'Madre Informe',            category: 'concepts', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept' },
  { slug: 'dark-moon-concept', name: 'Luna Oscura',                    category: 'concepts', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept' },
  { slug: 'full-moon-concept', name: 'Luna Llena',                     category: 'concepts', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'concept' },
  { slug: 'black-flame',      name: 'Llama Negra',                     category: 'concepts', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept' },
  { slug: 'ghostflame',       name: 'Llama Espectral',                 category: 'concepts', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept' },
  { slug: 'bloodflame',       name: 'Bloodflame',                      category: 'concepts', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept' },
  { slug: 'haligtree-concept', name: 'Haligtree (concepto)',           category: 'concepts', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept' },
  { slug: 'age-of-stars-concept', name: 'Era de las Estrellas',        category: 'concepts', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'concept' },
  { slug: 'glintstone',       name: 'Glintstone',                      category: 'concepts', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'concept' },
  { slug: 'primeval-current-concept', name: 'Corriente Primigenia',    category: 'concepts', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'concept' },
  { slug: 'stars-and-fate-concept', name: 'Estrellas y Destino',       category: 'concepts', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'concept' },
  { slug: 'law-of-regression', name: 'Ley de la Regresión',            category: 'concepts', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'concept' },
  { slug: 'law-of-causality', name: 'Ley de la Causalidad',            category: 'concepts', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial',  suggestedEntityType: 'concept' },
  { slug: 'omen-curse',       name: 'Maldición Omen',                  category: 'concepts', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'concept', notes: 'Concepto distinto de la facción Omens. La maldición física específica que sufren.' },
  { slug: 'grafting',         name: 'Injerto (Grafting)',              category: 'concepts', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'concept', notes: 'Práctica de Godrick. Magia ritual de fusión corporal.' },
  { slug: 'rebirth',          name: 'Renacimiento',                    category: 'concepts', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'concept', notes: 'Maldición/poder usado por Rennala y la Lazuli Conspector.' },
  { slug: 'dragon-communion-concept', name: 'Comunión Dracónica',      category: 'concepts', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing',  suggestedEntityType: 'concept', notes: 'Concept distinto de la faction. Cómo funciona el rito.' },

  /* ──────────────────────── 17. TIMELINE EVENTS ──────────────────────── */
  { slug: 'antes-orden-dorado', name: 'Antes del Orden Dorado',        category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline' },
  { slug: 'crisol-vida-primordial', name: 'El Crisol y la vida primordial', category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'partial', suggestedEntityType: 'timeline' },
  { slug: 'antiguos-ritos-muerte', name: 'Antiguos ritos de muerte',   category: 'timeline-events', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial', suggestedEntityType: 'timeline' },
  { slug: 'era-antigua',      name: 'Era Antigua / Reinado de los Dragones', category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline' },
  { slug: 'placidusax-elden-lord', name: 'Placidusax como Elden Lord previo', category: 'timeline-events', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline', notes: 'Era específica del reinado dragónico antes del Orden.' },
  { slug: 'nox-ciudades-eternas', name: 'Civilización Nox y Ciudades Eternas', category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'partial', suggestedEntityType: 'timeline' },
  { slug: 'silver-tears-creation', name: 'Creación de las Lágrimas de Plata', category: 'timeline-events', priority: 'compact', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline', notes: 'Subrayar conexión con tecnología Nox.' },
  { slug: 'hoja-mata-dedos',  name: 'Hoja Mata-Dedos y la rebelión Nox latente', category: 'timeline-events', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial', suggestedEntityType: 'timeline' },
  { slug: 'gloam-eyed-godskins', name: 'Reina de Ojos Crepusculares y los Godskins', category: 'timeline-events', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline', notes: 'Era de la reina caída.' },
  { slug: 'maliketh-derrota-gloam', name: 'Maliketh derrota a la Reina', category: 'timeline-events', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline', notes: 'Distinto del sello posterior. Acto militar específico.' },
  { slug: 'muerte-predestinada', name: 'Sello de la Muerte Predestinada', category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline' },
  { slug: 'birth-golden-order', name: 'Nacimiento del Orden Dorado',  category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline', notes: 'Crear evento dedicado para fundación oficial.' },
  { slug: 'marika-godfrey',   name: 'Marika toma a Godfrey como Señor Elden', category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline' },
  { slug: 'guerra-gigantes-fuego', name: 'Guerra contra los Gigantes del Fuego', category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'partial', suggestedEntityType: 'timeline' },
  { slug: 'flame-of-ruin-confined', name: 'Confinamiento de la Llama de Ruina', category: 'timeline-events', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline' },
  { slug: 'tormenta-lord-conquista', name: 'Storm Lord y la conquista', category: 'timeline-events', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial', suggestedEntityType: 'timeline' },
  { slug: 'nacimiento-linaje-dorado', name: 'Nacimiento del Linaje Dorado', category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'partial', suggestedEntityType: 'timeline' },
  { slug: 'godwyn-dragones',  name: 'Godwyn y los Antiguos Dragones',  category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'partial', suggestedEntityType: 'timeline' },
  { slug: 'morgott-mohg-imprisonment', name: 'Encarcelamiento de Morgott y Mohg', category: 'timeline-events', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline', notes: 'Evento separado del nacimiento — incluye cómo la sociedad reaccionó.' },
  { slug: 'exilio-godfrey',   name: 'Exilio de Godfrey y los Mancillados', category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline' },
  { slug: 'radagon-rennala',  name: 'Guerra y matrimonio de Radagon con Rennala', category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline' },
  { slug: 'hijos-marika-godfrey', name: 'Hijos de Marika y Godfrey',   category: 'timeline-events', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline' },
  { slug: 'radagon-es-marika', name: 'Radagon es Marika',              category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline' },
  { slug: 'rennala-colapso',  name: 'Colapso emocional de Rennala',    category: 'timeline-events', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'partial', suggestedEntityType: 'timeline' },
  { slug: 'miquella-malenia', name: 'Nacimiento de Miquella y Malenia', category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline' },
  { slug: 'unalloyed-gold-haligtree', name: 'Oro sin Aleación y fundación del Haligtree', category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'partial', suggestedEntityType: 'timeline' },
  { slug: 'empyreans-fingers-shadows', name: 'Designación de Empyreans', category: 'timeline-events', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline' },
  { slug: 'ranni-noche-cuchillos', name: 'Noche de los Cuchillos Negros', category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline' },
  { slug: 'ranni-bodily-death', name: 'Muerte corporal de Ranni',     category: 'timeline-events', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline', notes: 'Subrayar como evento separado del asesinato de Godwyn — momento clave de la rebelión cosmológica.' },
  { slug: 'godwyn-prince-of-death', name: 'Godwyn como Príncipe de la Muerte', category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline' },
  { slug: 'la-fractura',      name: 'Marika rompe el Anillo Elden',    category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline' },
  { slug: 'radagon-repair-attempt', name: 'Radagon intenta reparar el Anillo', category: 'timeline-events', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline', notes: 'Evento documentado en lore de Radagon — promover a evento dedicado.' },
  { slug: 'demidioses-fractura', name: 'Demidioses tras la fractura',  category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline' },
  { slug: 'shattering-war',   name: 'La Guerra del Shattering',        category: 'timeline-events', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline', notes: 'La guerra civil entre demidioses como evento global.' },
  { slug: 'godrick-grafting', name: 'Godrick perfecciona el injerto',  category: 'timeline-events', priority: 'compact', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline' },
  { slug: 'morgott-defends-leyndell', name: 'Morgott defiende Leyndell', category: 'timeline-events', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline' },
  { slug: 'mohg-formless-mother', name: 'Mohg pacta con la Madre Informe', category: 'timeline-events', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline' },
  { slug: 'rykard-volcano-manor', name: 'Rykard se entrega a Eiglay',  category: 'timeline-events', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline' },
  { slug: 'malenia-marcha-caelid', name: 'Marcha de Malenia a Caelid', category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'partial', suggestedEntityType: 'timeline' },
  { slug: 'batalla-aeonia',   name: 'Batalla de Aeonia',               category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'partial', suggestedEntityType: 'timeline' },
  { slug: 'caelid-devastation', name: 'Devastación de Caelid',         category: 'timeline-events', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline' },
  { slug: 'festival-radahn',  name: 'Festival de Radahn',              category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'partial', suggestedEntityType: 'timeline' },
  { slug: 'mohg-toma-miquella', name: 'Mohg secuestra a Miquella',     category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'partial', suggestedEntityType: 'timeline' },
  { slug: 'tarnished-return', name: 'Regreso de los Mancillados',      category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline', notes: 'Evento general — subrayar cómo regresó la gracia a los exiliados.' },
  { slug: 'estado-mundo-mancillado', name: 'Estado del mundo cuando llega el Mancillado', category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline' },
  { slug: 'two-fingers-roundtable', name: 'Dos Dedos y la Mesa Redonda', category: 'timeline-events', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline' },
  { slug: 'erdtree-rejection', name: 'El Erdtree rechaza al Mancillado', category: 'timeline-events', priority: 'important', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline' },
  { slug: 'erdtree-quemado',  name: 'El Erdtree es quemado',           category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'partial', suggestedEntityType: 'timeline' },
  { slug: 'maliketh-libera-muerte', name: 'Maliketh libera la Muerte', category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'partial', suggestedEntityType: 'timeline' },
  { slug: 'godfrey-regresa',  name: 'Regreso de Godfrey',              category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'partial', suggestedEntityType: 'timeline' },
  { slug: 'bestia-elden-revelada', name: 'Marika, Radagon y la Bestia Elden', category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'partial', suggestedEntityType: 'timeline' },
  { slug: 'finales',          name: 'Los Finales',                     category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline' },
  { slug: 'viaje-mancillado', name: 'El viaje del Mancillado',         category: 'timeline-events', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'timeline' },

  /* ──────────────────────── 18. ENDINGS ──────────────────────── */
  { slug: 'fracture',         name: 'Era de la Fractura',              category: 'endings', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'ending' },
  { slug: 'order',            name: 'Era del Orden',                   category: 'endings', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'ending' },
  { slug: 'duskborn',         name: 'Era del Crepúsculo',              category: 'endings', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'ending' },
  { slug: 'despair',          name: 'Bendición de la Desesperación',   category: 'endings', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'ending' },
  { slug: 'frenzied-flame',   name: 'Señor de la Llama Frenética',     category: 'endings', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'ending' },
  { slug: 'age-of-stars',     name: 'Era de las Estrellas',            category: 'endings', priority: 'core', shouldHaveDedicatedPage: true, currentStatus: 'existing', suggestedEntityType: 'ending' },
]

/* ════════════════════════════════════════════════════════════════════════ */
/* HELPER QUERIES                                                            */
/* ════════════════════════════════════════════════════════════════════════ */

export const getEntriesByStatus = (status: CoverageStatus): CoverageEntry[] =>
  coveragePlan.filter((e) => e.currentStatus === status)

export const getEntriesByCategory = (category: CoverageCategory): CoverageEntry[] =>
  coveragePlan.filter((e) => e.category === category)

export const getEntriesByPriority = (priority: CoveragePriority): CoverageEntry[] =>
  coveragePlan.filter((e) => e.priority === priority)

export const getMissingCore = (): CoverageEntry[] =>
  coveragePlan.filter((e) => e.currentStatus === 'missing' && (e.priority === 'core' || e.priority === 'important'))

export const getPartialCore = (): CoverageEntry[] =>
  coveragePlan.filter((e) => e.currentStatus === 'partial' && (e.priority === 'core' || e.priority === 'important'))

export interface CoverageStats {
  total: number
  existing: number
  partial: number
  missing: number
  byCategory: Record<CoverageCategory, { total: number; existing: number; partial: number; missing: number }>
}

export function computeCoverageStats(): CoverageStats {
  const stats: CoverageStats = {
    total: coveragePlan.length,
    existing: 0,
    partial: 0,
    missing: 0,
    byCategory: {} as CoverageStats['byCategory'],
  }
  for (const entry of coveragePlan) {
    stats[entry.currentStatus] += 1
    const cat = stats.byCategory[entry.category] ??= { total: 0, existing: 0, partial: 0, missing: 0 }
    cat.total += 1
    cat[entry.currentStatus] += 1
  }
  return stats
}

/**
 * Recommended implementation order — process high-priority missing first,
 * then promote partial-core entries to deep tier, then fill compact missing.
 */
export const recommendedImplementationOrder: { phase: number; label: string; criteria: string }[] = [
  { phase: 1, label: 'Promote core/important demigods to deep tier',
    criteria: 'currentStatus=partial AND priority=core AND category=demigods' },
  { phase: 2, label: 'Add missing remembrance bosses',
    criteria: 'currentStatus=missing AND category=remembrance-bosses' },
  { phase: 3, label: 'Add missing core characters and historical figures',
    criteria: 'currentStatus=missing AND priority=core AND category in [major-characters, historical-unseen]' },
  { phase: 4, label: 'Promote partial core characters to deep tier',
    criteria: 'currentStatus=partial AND priority=core AND category in [major-characters, secondary-npcs, invaders-hostiles]' },
  { phase: 5, label: 'Add missing dragons (start with important)',
    criteria: 'currentStatus=missing AND priority=important AND category=dragons' },
  { phase: 6, label: 'Add missing astral/cosmic and outer-god concepts',
    criteria: 'currentStatus=missing AND category in [astral-cosmic, outer-gods-cosmic-forces]' },
  { phase: 7, label: 'Add missing timeline events (subdivide existing big arcs)',
    criteria: 'currentStatus=missing AND category=timeline-events' },
  { phase: 8, label: 'Promote partial regions to deep tier (start with subregions of core arcs)',
    criteria: 'currentStatus=partial AND category in [regions, subregions]' },
  { phase: 9, label: 'Add missing enemy races/species (compact entries)',
    criteria: 'currentStatus=missing AND priority=compact AND category=enemy-races' },
  { phase: 10, label: 'Fill remaining compact missing entries',
    criteria: 'currentStatus=missing AND priority=compact' },
]
