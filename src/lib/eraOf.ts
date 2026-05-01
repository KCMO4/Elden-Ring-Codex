/* Temporal era classification for entities. Helps the reader place a
   character / event / region on the broad timeline of the codex without
   needing to read it. Returns undefined when there's no confident match —
   we'd rather hide the badge than show a wrong one.

   The four eras (each with its own visual tone):
   - pre-order   : Era Antigua, Crisol, Storm-Hawk, Nox, Dragones (pre-Orden)
   - marika      : Era de Marika / Edad Dorada (Orden funcional)
   - shattering  : La Fractura y la Guerra de las Grandes Runas
   - tarnished   : presente de la partida — el viaje del Tarnished */

export type Era = 'pre-order' | 'marika' | 'shattering' | 'tarnished'

interface Taggable { id?: string; tags?: string[] }

/* Explicit overrides for entities the heuristic would mis-classify or
   where we want to be authoritative. Keyed by entity id. */
const ERA_OVERRIDES: Record<string, Era> = {
  /* Pre-Orden */
  placidusax:           'pre-order',
  'storm-hawk-king':    'pre-order',
  'storm-lord':         'pre-order',
  'gloam-eyed-queen':   'pre-order',
  serosh:               'pre-order',
  godfrey:              'pre-order',
  'fortissax':          'pre-order',
  'lansseax':           'pre-order',
  'antes-orden-dorado': 'pre-order',
  'era-antigua':        'pre-order',
  'crisol-vida-primordial': 'pre-order',
  'nox-ciudades-eternas':   'pre-order',

  /* Era de Marika (Orden funcional) */
  marika:               'marika',
  radagon:              'marika',
  godwyn:               'marika',
  morgott:              'marika',
  mohg:                 'marika',
  rennala:              'marika',
  ranni:                'marika',
  miquella:             'marika',
  malenia:              'marika',
  radahn:               'marika',
  rykard:               'marika',
  godrick:              'marika',
  maliketh:             'marika',
  'marika-godfrey':     'marika',
  'birth-golden-order': 'marika',
  'radagon-rennala':    'marika',
  'hijos-marika-godfrey': 'marika',
  'guerra-gigantes-fuego': 'marika',
  'maliketh-libera-muerte': 'marika',

  /* La Fractura */
  'la-fractura':            'shattering',
  'demidioses-fractura':    'shattering',
  'shattering-war':         'shattering',
  'ranni-noche-cuchillos':  'shattering',
  'godwyn-prince-of-death': 'shattering',

  /* Tarnished — viaje del jugador */
  tarnished:                  'tarnished',
  melina:                     'tarnished',
  'tarnished-return':         'tarnished',
  'estado-mundo-mancillado':  'tarnished',
  'viaje-mancillado':         'tarnished',
  finales:                    'tarnished',
  'roundtable-hold':          'tarnished',
}

/* Tag patterns that strongly indicate each era. Lowercased for matching. */
const TAG_PATTERNS: Array<[Era, RegExp]> = [
  ['pre-order',  /(pre[-\s]?orden|antes[-\s]?del[-\s]?orden|era[-\s]?antigua|crisol|storm[-\s]?hawk|eochaid|nox(?!ron)|placidusax|drag[oó]n[-\s]?antiguo|hombres[-\s]?bestia|primordial)/],
  ['shattering', /(fractura|shatter|guerra[-\s]?de[-\s]?la[-\s]?fractura|noche[-\s]?de[-\s]?los[-\s]?cuchillos|night[-\s]?of[-\s]?the[-\s]?black[-\s]?knives)/],
  ['tarnished',  /(tarnished|mancillado|post[-\s]?fractura|hold[-\s]?roundtable)/],
  ['marika',     /(marika|orden[-\s]?dorado|orden[-\s]?[áa]ureo|edad[-\s]?dorada|erdtree|[áa]rbol[-\s]?[áa]ureo|gran[-\s]?runa)/],
]

export function eraOf(entity: Taggable | undefined | null): Era | undefined {
  if (!entity) return undefined
  if (entity.id && ERA_OVERRIDES[entity.id]) return ERA_OVERRIDES[entity.id]
  if (!entity.tags?.length) return undefined
  const tagBlob = entity.tags.join(' ').toLowerCase()
  for (const [era, pattern] of TAG_PATTERNS) {
    if (pattern.test(tagBlob)) return era
  }
  return undefined
}

export const ERA_LABEL: Record<Era, string> = {
  'pre-order':  'Pre-Orden',
  marika:       'Era de Marika',
  shattering:   'La Fractura',
  tarnished:    'Tarnished',
}

export const ERA_TONE: Record<Era, string> = {
  'pre-order':  'text-codex-flame    border-codex-flame/40    bg-codex-flame/10',
  marika:       'text-codex-gold     border-codex-gold/40     bg-codex-gold/10',
  shattering:   'text-codex-rot      border-codex-rot/40      bg-codex-rot/10',
  tarnished:    'text-codex-ghost    border-codex-ghost/40    bg-codex-ghost/10',
}
