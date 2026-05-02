export type Certainty = 'confirmado' | 'inferencia' | 'teoria'

export type FallbackType =
  | 'golden-order' | 'omen' | 'rot' | 'blood' | 'moon' | 'dragon'
  | 'death' | 'flame' | 'frenzied-flame' | 'cosmic' | 'serpent' | 'nox'
  | 'haligtree' | 'war' | 'beast' | 'character' | 'region' | 'faction'
  | 'concept' | 'ending-fracture' | 'ending-order' | 'ending-dusk'
  | 'ending-despair' | 'ending-frenzied' | 'ending-stars'

export type EntityType =
  | 'character'
  | 'region'
  | 'faction'
  | 'concept'
  | 'ending'
  | 'timeline'

/** Marca la procedencia narrativa de una entrada o bloque. Default es 'base'
   (juego base). Bloques marcados 'sote' pueden ser ocultados por el lector
   vía toggle global. La marcación es a nivel de bloque/item, no de entidad
   completa — Marika sigue teniendo una sola página, pero ciertas secciones
   suyas pueden ser SOTE-only. */
export type Expansion = 'base' | 'sote'

export interface Tag {
  label: string
  category: 'personaje' | 'faccion' | 'region' | 'dios' | 'batalla' | 'concepto'
}

/* ──────────────────────────────────────────────────────────── */
/* Rich text format for cross-linked lore                      */
/* ──────────────────────────────────────────────────────────── */

export interface RichLink {
  type: 'link'
  label: string
  targetType: EntityType
  slug: string
}

export interface RichEmphasis {
  type: 'em' | 'strong'
  text: string
}

export type RichInline = string | RichLink | RichEmphasis

export interface RichParagraph {
  type: 'paragraph'
  children: RichInline[]
  expansion?: Expansion
}

export interface RichHeading {
  type: 'heading'
  level: 2 | 3
  text: string
  id?: string
  expansion?: Expansion
}

export interface RichQuote {
  type: 'quote'
  text: string
  attribution?: string
  expansion?: Expansion
}

export interface RichList {
  type: 'list'
  ordered?: boolean
  items: RichInline[][]
  expansion?: Expansion
}

export type RichBlock = RichParagraph | RichHeading | RichQuote | RichList

/* ──────────────────────────────────────────────────────────── */
/* Shared "deep page" mixin                                    */
/* ──────────────────────────────────────────────────────────── */

/** A bucket-list entry: either a plain string, an array of RichInline nodes
   (so individual facts can contain link() calls), or a marked wrapper that
   tags the item as belonging to a specific expansion (base / sote). */
export type BucketItem =
  | string
  | RichInline[]
  | { expansion?: Expansion; content: string | RichInline[] }

/** A field that can be either plain prose or RichInline (with cross-links). */
export type ProseField = string | RichInline[]

export interface DeepEntity {
  /** Page slug (defaults to id when omitted) */
  slug?: string
  /** Short subtitle / epithet shown under the title on the detail page */
  subtitle?: string
  /** ~1-2 sentence summary used on cards and SEO description */
  summary?: string
  /** Marca la entrada como base (default) o expansión SOTE. Cuando el lector
     activa el filtro 'base', las entidades marcadas 'sote' se ocultan de
     listados, búsqueda y grafos relacionados. */
  expansion?: Expansion
  /** The full ultra-detailed lore — array of RichBlocks */
  deepLore?: RichBlock[]
  /** Bullet lists of canonical knowledge buckets — items can be plain
      strings or RichInline arrays for embedded cross-links. */
  confirmed?: BucketItem[]
  inferred?: BucketItem[]
  /** Theories — plausible interpretations not directly stated by the game */
  theories?: BucketItem[]
  ambiguous?: BucketItem[]
  /** Who benefited / who suffered from this entity's existence/actions */
  beneficiaries?: ProseField
  victims?: ProseField
  /** Cross-linked entity IDs */
  relatedCharacters?: string[]
  relatedRegions?: string[]
  relatedFactions?: string[]
  relatedConcepts?: string[]
  relatedTimelineEvents?: string[]
  relatedEndings?: string[]
}

/* ──────────────────────────────────────────────────────────── */
/* Concrete entity shapes                                      */
/* ──────────────────────────────────────────────────────────── */

export interface TimelineEntry extends DeepEntity {
  id: string
  chapter: string
  chapterNumber: string
  title: string
  poeticIntro: string
  lore: string[]
  whyItMatters: string
  certainty: Certainty
  tags: string[]
  fallbackType?: FallbackType
}

export interface Character extends DeepEntity {
  id: string
  name: string
  role: string
  faction: string
  tragedy: string
  events: string[]
  related: string[]
  region: string
  theme: string
  poeticDesc: string
  certainty: Certainty
  tags: string[]
  fallbackType?: FallbackType
}

export interface Faction extends DeepEntity {
  id: string
  name: string
  what: string
  belief: string
  whyMatters: string
  relationToOrder: string
  certainty: Certainty
  tags: string[]
  fallbackType?: FallbackType
  keyMembers?: string[]
}

export interface Region extends DeepEntity {
  id: string
  name: string
  historical: string
  mainFaction: string
  bosses: string[]
  hiddenTragedy: string
  timelineRelation: string
  certainty: Certainty
  tags: string[]
  fallbackType?: FallbackType
}

export interface GlossaryEntry extends DeepEntity {
  id: string
  term: string
  definition: string
  deepDive: string
  related: string[]
  certainty: Certainty
  fallbackType?: FallbackType
}

export interface Ending extends DeepEntity {
  id: string
  name: string
  description: string
  meaning: string
  whoLeads: string
  consequence: string
  fallbackType?: FallbackType
  accentColor?: string
  borderColor?: string
  bgColor?: string
  icon?: string
}
