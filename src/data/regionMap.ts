/**
 * Geografía estilizada del Interregno para el mapa interactivo.
 *
 * Las coordenadas están en un viewBox de 1000×800 conceptual.
 * No pretenden replicar la geografía real del juego; son representación
 * abstracta de manuscrito antiguo que prioriza claridad sobre precisión.
 *
 * Cada región tiene:
 *  - id: slug que enlaza a la página /regiones/:id
 *  - name, faction: para tooltips
 *  - shape: array de puntos [x,y] que forman el polígono
 *  - label: posición {x,y} para el texto
 *  - layer: 'surface' | 'underground' (toggle para mostrar/ocultar)
 */

export interface MapRegion {
  id: string
  name: string
  faction: string
  shape: Array<[number, number]>
  label: { x: number; y: number }
  layer: 'surface' | 'underground' | 'extra'
  /** Color override (Tailwind palette) */
  tone: 'gold' | 'rot' | 'moon' | 'flame' | 'death' | 'cosmic' | 'beast' | 'serpent' | 'haligtree'
}

/**
 * Surface layer — disposición geográfica aproximada.
 * El sur es la entrada (Limgrave); el norte son las Mountaintops.
 * Liurnia está al oeste; Caelid al este; Altus en el centro-norte.
 */

export const mapRegions: MapRegion[] = [
  /* ────────── Surface ────────── */
  {
    id: 'limgrave',
    name: 'Limgrave',
    faction: 'Fuerzas de Godrick',
    shape: [[380, 540], [560, 530], [600, 590], [580, 670], [430, 680], [370, 620]],
    label: { x: 480, y: 605 },
    layer: 'surface',
    tone: 'gold',
  },
  {
    id: 'stormveil',
    name: 'Castillo Stormveil',
    faction: 'Godrick',
    shape: [[440, 470], [530, 460], [555, 510], [530, 540], [460, 540], [435, 510]],
    label: { x: 490, y: 505 },
    layer: 'surface',
    tone: 'gold',
  },
  {
    id: 'peninsula-llorosa',
    name: 'Península Llorosa',
    faction: 'Misbegotten',
    shape: [[400, 685], [550, 690], [560, 760], [490, 780], [410, 760]],
    label: { x: 480, y: 730 },
    layer: 'surface',
    tone: 'gold',
  },
  {
    id: 'castle-morne',
    name: 'Castillo Morne',
    faction: 'Misbegotten / Volmer',
    shape: [[470, 745], [535, 745], [535, 775], [470, 775]],
    label: { x: 502, y: 765 },
    layer: 'surface',
    tone: 'beast',
  },
  {
    id: 'liurnia',
    name: 'Liurnia de los Lagos',
    faction: 'Caria / Raya Lucaria',
    shape: [[180, 350], [380, 360], [380, 540], [200, 540], [150, 460]],
    label: { x: 270, y: 460 },
    layer: 'surface',
    tone: 'moon',
  },
  {
    id: 'raya-lucaria',
    name: 'Academia Raya Lucaria',
    faction: 'Académicos',
    shape: [[260, 430], [330, 430], [330, 480], [260, 480]],
    label: { x: 295, y: 460 },
    layer: 'surface',
    tone: 'moon',
  },
  {
    id: 'caria-manor',
    name: 'Mansión Caria',
    faction: 'Caria (caída)',
    shape: [[180, 360], [240, 360], [240, 410], [180, 410]],
    label: { x: 210, y: 388 },
    layer: 'surface',
    tone: 'moon',
  },
  {
    id: 'three-sisters',
    name: 'Tres Hermanas',
    faction: 'Ranni',
    shape: [[160, 310], [240, 310], [240, 355], [160, 355]],
    label: { x: 200, y: 335 },
    layer: 'surface',
    tone: 'moon',
  },
  {
    id: 'caelid',
    name: 'Caelid',
    faction: 'Redmanes (corruptos)',
    shape: [[610, 460], [820, 460], [840, 580], [780, 660], [620, 650]],
    label: { x: 715, y: 565 },
    layer: 'surface',
    tone: 'rot',
  },
  {
    id: 'sellia',
    name: 'Sellia',
    faction: 'Hechiceros mutados',
    shape: [[680, 530], [740, 530], [740, 570], [680, 570]],
    label: { x: 710, y: 552 },
    layer: 'surface',
    tone: 'rot',
  },
  {
    id: 'redmane-castle',
    name: 'Castillo Redmane',
    faction: 'Redmanes',
    shape: [[760, 600], [830, 600], [830, 640], [760, 640]],
    label: { x: 795, y: 622 },
    layer: 'surface',
    tone: 'rot',
  },
  {
    id: 'dragonbarrow',
    name: 'Dragonbarrow',
    faction: 'Antiguos Dragones',
    shape: [[640, 380], [820, 380], [830, 460], [640, 460]],
    label: { x: 735, y: 420 },
    layer: 'surface',
    tone: 'beast',
  },
  {
    id: 'altus-plateau',
    name: 'Meseta del Altus',
    faction: 'Orden Dorado',
    shape: [[400, 280], [620, 280], [630, 460], [400, 460]],
    label: { x: 515, y: 360 },
    layer: 'surface',
    tone: 'gold',
  },
  {
    id: 'leyndell',
    name: 'Leyndell',
    faction: 'Morgott / Orden',
    shape: [[450, 200], [580, 200], [580, 280], [450, 280]],
    label: { x: 515, y: 245 },
    layer: 'surface',
    tone: 'gold',
  },
  {
    id: 'mt-gelmir',
    name: 'Mt. Gelmir',
    faction: 'Volcano Manor',
    shape: [[290, 200], [400, 220], [400, 320], [310, 320], [270, 270]],
    label: { x: 340, y: 270 },
    layer: 'surface',
    tone: 'serpent',
  },
  {
    id: 'volcano-manor',
    name: 'Volcano Manor',
    faction: 'Recusantes',
    shape: [[310, 230], [380, 230], [380, 275], [310, 275]],
    label: { x: 345, y: 254 },
    layer: 'surface',
    tone: 'serpent',
  },
  {
    id: 'mountaintops',
    name: 'Cumbres de los Gigantes',
    faction: 'Gigantes del Fuego',
    shape: [[450, 60], [690, 60], [700, 200], [450, 200]],
    label: { x: 575, y: 130 },
    layer: 'surface',
    tone: 'flame',
  },
  {
    id: 'consecrated-snowfield',
    name: 'Snowfield Consagrado',
    faction: 'Albinaurics',
    shape: [[260, 60], [450, 60], [450, 200], [270, 200]],
    label: { x: 360, y: 130 },
    layer: 'surface',
    tone: 'haligtree',
  },
  {
    id: 'ordina',
    name: 'Ordina',
    faction: 'Black Knife',
    shape: [[330, 130], [400, 130], [400, 170], [330, 170]],
    label: { x: 365, y: 152 },
    layer: 'surface',
    tone: 'haligtree',
  },
  {
    id: 'haligtree',
    name: 'Haligtree',
    faction: 'Miquella',
    shape: [[140, 80], [260, 80], [260, 200], [140, 200]],
    label: { x: 200, y: 130 },
    layer: 'surface',
    tone: 'haligtree',
  },
  {
    id: 'elphael',
    name: 'Elphael',
    faction: 'Cleanrot Knights',
    shape: [[160, 145], [240, 145], [240, 195], [160, 195]],
    label: { x: 200, y: 170 },
    layer: 'surface',
    tone: 'haligtree',
  },

  /* ────────── Underground ────────── */
  {
    id: 'siofra-river',
    name: 'Río Siofra',
    faction: 'Ancestrales',
    shape: [[420, 545], [620, 545], [630, 620], [430, 620]],
    label: { x: 525, y: 580 },
    layer: 'underground',
    tone: 'beast',
  },
  {
    id: 'nokron',
    name: 'Nokron',
    faction: 'Nox',
    shape: [[460, 555], [560, 555], [560, 605], [460, 605]],
    label: { x: 510, y: 580 },
    layer: 'underground',
    tone: 'cosmic',
  },
  {
    id: 'ainsel-river',
    name: 'Río Ainsel',
    faction: 'Nox / Claymen',
    shape: [[210, 380], [380, 395], [380, 515], [220, 515]],
    label: { x: 295, y: 450 },
    layer: 'underground',
    tone: 'cosmic',
  },
  {
    id: 'nokstella',
    name: 'Nokstella',
    faction: 'Nox',
    shape: [[230, 410], [340, 410], [340, 470], [230, 470]],
    label: { x: 285, y: 442 },
    layer: 'underground',
    tone: 'cosmic',
  },
  {
    id: 'lake-of-rot',
    name: 'Lago de Podredumbre',
    faction: 'Kindred of Rot',
    shape: [[240, 470], [350, 470], [350, 525], [240, 525]],
    label: { x: 295, y: 500 },
    layer: 'underground',
    tone: 'rot',
  },
  {
    id: 'deeproot-depths',
    name: 'Deeproot Depths',
    faction: 'Aquellos que Viven en la Muerte',
    shape: [[400, 620], [580, 620], [590, 680], [400, 680]],
    label: { x: 495, y: 650 },
    layer: 'underground',
    tone: 'death',
  },
  {
    id: 'subterranean-shunning-grounds',
    name: 'Shunning-Grounds',
    faction: 'Omens / Tres Dedos',
    shape: [[450, 200], [580, 200], [580, 290], [450, 290]],
    label: { x: 515, y: 245 },
    layer: 'underground',
    tone: 'flame',
  },
  {
    id: 'mohgwyn',
    name: 'Palacio Mohgwyn',
    faction: 'Mohg',
    shape: [[700, 240], [820, 240], [830, 360], [710, 360]],
    label: { x: 765, y: 300 },
    layer: 'underground',
    tone: 'rot',
  },

  /* ────────── Extra-dimensional ────────── */
  {
    id: 'farum-azula',
    name: 'Crumbling Farum Azula',
    faction: 'Antiguos Dragones / Maliketh',
    shape: [[820, 60], [970, 60], [980, 230], [820, 230]],
    label: { x: 900, y: 145 },
    layer: 'extra',
    tone: 'beast',
  },
]

/**
 * Connection lines — caminos entre regiones (rutas, ríos, transiciones).
 */
export interface MapConnection {
  from: string
  to: string
  /** 'road' | 'river' | 'transition' (extra-dimensional/teleport) */
  kind: 'road' | 'river' | 'transition'
}

export const mapConnections: MapConnection[] = [
  { from: 'limgrave',          to: 'stormveil',         kind: 'road' },
  { from: 'limgrave',          to: 'peninsula-llorosa', kind: 'road' },
  { from: 'limgrave',          to: 'liurnia',           kind: 'road' },
  { from: 'limgrave',          to: 'caelid',            kind: 'road' },
  { from: 'liurnia',           to: 'caria-manor',       kind: 'road' },
  { from: 'caria-manor',       to: 'three-sisters',     kind: 'road' },
  { from: 'caria-manor',       to: 'raya-lucaria',      kind: 'road' },
  { from: 'liurnia',           to: 'altus-plateau',     kind: 'road' },
  { from: 'altus-plateau',     to: 'leyndell',          kind: 'road' },
  { from: 'altus-plateau',     to: 'mt-gelmir',         kind: 'road' },
  { from: 'mt-gelmir',         to: 'volcano-manor',     kind: 'road' },
  { from: 'leyndell',          to: 'mountaintops',      kind: 'road' },
  { from: 'mountaintops',      to: 'consecrated-snowfield', kind: 'road' },
  { from: 'consecrated-snowfield', to: 'haligtree',     kind: 'transition' },
  { from: 'consecrated-snowfield', to: 'ordina',        kind: 'road' },
  { from: 'haligtree',         to: 'elphael',           kind: 'road' },
  { from: 'caelid',            to: 'sellia',            kind: 'road' },
  { from: 'caelid',            to: 'redmane-castle',    kind: 'road' },
  { from: 'caelid',            to: 'dragonbarrow',      kind: 'road' },
  { from: 'castle-morne',      to: 'peninsula-llorosa', kind: 'road' },
  // Underground rivers/transitions
  { from: 'limgrave',          to: 'siofra-river',      kind: 'transition' },
  { from: 'siofra-river',      to: 'nokron',            kind: 'river' },
  { from: 'liurnia',           to: 'ainsel-river',      kind: 'transition' },
  { from: 'ainsel-river',      to: 'nokstella',         kind: 'river' },
  { from: 'nokstella',         to: 'lake-of-rot',       kind: 'river' },
  { from: 'limgrave',          to: 'deeproot-depths',   kind: 'transition' },
  { from: 'leyndell',          to: 'subterranean-shunning-grounds', kind: 'transition' },
  { from: 'mountaintops',      to: 'mohgwyn',           kind: 'transition' },
  { from: 'mountaintops',      to: 'farum-azula',       kind: 'transition' },
]

export const toneColors: Record<string, { fill: string; stroke: string; glow: string }> = {
  gold:       { fill: 'rgba(197,160,89,0.18)',  stroke: 'rgba(197,160,89,0.7)',  glow: 'rgba(197,160,89,0.35)' },
  rot:        { fill: 'rgba(138,42,26,0.20)',   stroke: 'rgba(220,80,90,0.65)',  glow: 'rgba(220,80,90,0.30)' },
  moon:       { fill: 'rgba(96,128,176,0.18)',  stroke: 'rgba(140,180,220,0.65)', glow: 'rgba(140,180,220,0.30)' },
  flame:      { fill: 'rgba(212,170,58,0.20)',  stroke: 'rgba(255,200,100,0.65)', glow: 'rgba(255,200,100,0.30)' },
  death:      { fill: 'rgba(60,40,80,0.25)',    stroke: 'rgba(140,120,180,0.65)', glow: 'rgba(140,120,180,0.30)' },
  cosmic:     { fill: 'rgba(120,80,180,0.20)',  stroke: 'rgba(180,150,220,0.65)', glow: 'rgba(180,150,220,0.30)' },
  beast:      { fill: 'rgba(110,90,60,0.20)',   stroke: 'rgba(180,150,100,0.65)', glow: 'rgba(180,150,100,0.30)' },
  serpent:    { fill: 'rgba(140,90,40,0.22)',   stroke: 'rgba(220,140,80,0.65)',  glow: 'rgba(220,140,80,0.30)' },
  haligtree:  { fill: 'rgba(168,200,140,0.18)', stroke: 'rgba(200,230,160,0.65)', glow: 'rgba(200,230,160,0.30)' },
}
