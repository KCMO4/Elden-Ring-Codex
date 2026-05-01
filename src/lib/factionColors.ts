/* Visual identity color per faction. Maps faction id (or faction-name string)
   to a key from the codex palette. Used by cards to render a 4px left
   border + colored faction label so the reader can spot allegiances at a
   glance in long lists.

   Returns one of the codex-* color tokens (gold, parchment, flame, ghost,
   rot, crimson, gold-bright, gold-dim) so we stay inside the established
   aesthetic — no new colors introduced. */

export type FactionTone =
  | 'gold' | 'gold-dim' | 'gold-bright'
  | 'parchment' | 'parchment-dim'
  | 'flame' | 'ghost' | 'rot' | 'crimson'
  | 'neutral'

const FACTION_COLOR_BY_ID: Record<string, FactionTone> = {
  /* Golden-Order sphere — gold/parchment family */
  'orden-dorado':         'gold',
  'fundamentalistas':     'gold-bright',
  'dos-dedos':            'gold',
  'finger-readers':       'gold-dim',
  'golden-lineage':       'gold-bright',
  perfumers:              'gold-dim',
  'leyndell-knights':     'gold',
  'cuckoo-knights':       'gold-dim',
  'tree-sentinel':        'gold',

  /* Caria + Moon */
  caria:                  'ghost',
  'raya-lucaria':         'ghost',
  'carian-knights':       'ghost',
  'cuchillos-negros':     'ghost',
  'silver-mimic-tears':   'parchment',

  /* Death / Deathroot family */
  'those-who-live-in-death': 'rot',
  deathbirds:             'rot',
  'mausoleum-knights':    'rot',
  'cemetery-shade':       'rot',
  'wraith-callers':       'rot',
  revenants:              'rot',

  /* Rot / Caelid */
  'kindred-of-rot':       'rot',
  'cleanrot-knights':     'flame',
  'haligtree-knights':    'parchment-dim',
  haligtree:              'parchment-dim',

  /* Mohgwyn / Blood */
  'bloody-fingers':       'crimson',
  'recusant-hunters':     'gold-dim',

  /* Outer-god aligned */
  'tres-dedos':           'flame',
  'frenzied-victims':     'flame',
  'pieles-de-dios':       'crimson',
  'blackflame-monks':     'crimson',
  'fire-monks':           'flame',
  'fire-giants':          'flame',
  'flame-of-ruin-confined': 'flame',

  /* Pre-Order / Crucible / Beast */
  crucible:               'flame',
  'crucible-knights':     'flame',
  'hombres-bestia':       'flame',
  'ancestral-followers':  'flame',
  'dragones-antiguos':    'flame',
  'dragon-communion':     'flame',
  'ancient-dragon-cult':  'gold-dim',
  'ancient-astrologers':  'ghost',
  'storm-lord':           'ghost',
  'storm-hawk-king':      'ghost',
  eochaid:                'ghost',
  'zamor-heroes':         'ghost',

  /* Nox / cosmic */
  nox:                    'ghost',
  'onyx-lords':           'ghost',
  numen:                  'ghost',

  /* Excluded / outcast */
  omens:                  'rot',
  misbegotten:            'rot',
  albinauricos:           'parchment-dim',
  omenkillers:            'crimson',
  'banished-knights':     'gold-dim',
  redmanes:               'crimson',
  'volcano-manor':        'crimson',
  'man-serpents':         'crimson',
  'thorn-sorcerers':      'rot',

  /* Misc factions / minor */
  'living-jars':          'parchment-dim',
  'jar-bairn':            'parchment-dim',
  'oracle-envoys':        'parchment-dim',
  imps:                   'parchment-dim',
  gargoyles:              'gold-dim',
  crystalians:            'parchment-dim',
  claymen:                'parchment-dim',
  'avionette-soldiers':   'parchment-dim',
  'marionette-soldiers':  'parchment-dim',
  'vulgar-militia':       'gold-dim',
  'nomadic-merchants':    'parchment-dim',
  'wormfaces':            'rot',
  'twin-maiden-husks':    'gold-dim',
  'commander-niall':      'parchment-dim',
  'cursed-knights':       'rot',
  'alabaster-lords':      'parchment',
  'duskborn':             'parchment-dim',
  'black-blade-kindred':  'rot',
  'twinbird-outer-death': 'rot',
}

/* Map faction *name* (the human-readable string used in `Character.faction`)
   to the same id-based tones, by lowercasing and matching common labels.
   For new factions not in the index, fall back to neutral. */
const FACTION_COLOR_BY_NAME: Record<string, FactionTone> = {
  'orden dorado':         'gold',
  'fundamentalistas':     'gold-bright',
  'dos dedos':            'gold',
  'tres dedos':           'flame',
  'cuchillos negros':     'ghost',
  'pieles de dios':       'crimson',
  nox:                    'ghost',
  'dragones antiguos':    'flame',
  'hombres bestia':       'flame',
  omens:                  'rot',
  misbegotten:            'rot',
  albinauricos:           'parchment-dim',
  'cleanrot knights':     'flame',
  redmanes:               'crimson',
  'volcano manor':        'crimson',
  'bloody fingers':       'crimson',
  'those who live in death': 'rot',
  deathbirds:             'rot',
  caria:                  'ghost',
  'raya lucaria':         'ghost',
  haligtree:              'parchment-dim',
  'orden áureo':          'gold',
  'orden aureo':          'gold',
}

export function factionTone(idOrName: string | undefined): FactionTone {
  if (!idOrName) return 'neutral'
  const id = idOrName.toLowerCase()
  if (FACTION_COLOR_BY_ID[id])   return FACTION_COLOR_BY_ID[id]
  if (FACTION_COLOR_BY_NAME[id]) return FACTION_COLOR_BY_NAME[id]
  /* slugify-style fallback: try kebab-case version */
  const slug = id.normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  return FACTION_COLOR_BY_ID[slug] ?? 'neutral'
}

/* Tailwind class fragments for each tone — used directly in card markup. */
export const toneBorderClass: Record<FactionTone, string> = {
  gold:           'border-l-codex-gold',
  'gold-dim':     'border-l-codex-gold-dim',
  'gold-bright':  'border-l-codex-gold-bright',
  parchment:      'border-l-codex-parchment',
  'parchment-dim':'border-l-codex-parchment-dim',
  flame:          'border-l-codex-flame',
  ghost:          'border-l-codex-ghost',
  rot:            'border-l-codex-rot',
  crimson:        'border-l-codex-crimson',
  neutral:        'border-l-codex-gold-dim/30',
}

export const toneTextClass: Record<FactionTone, string> = {
  gold:           'text-codex-gold',
  'gold-dim':     'text-codex-gold-dim',
  'gold-bright':  'text-codex-gold-bright',
  parchment:      'text-codex-parchment',
  'parchment-dim':'text-codex-parchment-dim',
  flame:          'text-codex-flame',
  ghost:          'text-codex-ghost',
  rot:            'text-codex-rot',
  crimson:        'text-codex-crimson',
  neutral:        'text-codex-gold-dim/80',
}
