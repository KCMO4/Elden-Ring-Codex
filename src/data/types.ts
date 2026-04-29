export type Certainty = 'confirmado' | 'inferencia' | 'teoria'

export type FallbackType =
  | 'golden-order' | 'omen' | 'rot' | 'blood' | 'moon' | 'dragon'
  | 'death' | 'flame' | 'frenzied-flame' | 'cosmic' | 'serpent' | 'nox'
  | 'haligtree' | 'war' | 'beast' | 'character' | 'region' | 'faction'
  | 'concept' | 'ending-fracture' | 'ending-order' | 'ending-dusk'
  | 'ending-despair' | 'ending-frenzied' | 'ending-stars'

export interface Tag {
  label: string
  category: 'personaje' | 'faccion' | 'region' | 'dios' | 'batalla' | 'concepto'
}

export interface TimelineEntry {
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

export interface Character {
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

export interface Faction {
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

export interface Region {
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

export interface GlossaryEntry {
  id: string
  term: string
  definition: string
  deepDive: string
  related: string[]
  certainty: Certainty
  fallbackType?: FallbackType
}

export interface Ending {
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
