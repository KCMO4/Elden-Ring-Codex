import { useState, useMemo } from 'react'
import type { TimelineEntry, Certainty } from '../data/types'
import { SectionHeader } from './SectionHeader'
import { SectionHero } from './SectionHero'
import { TimelineEntryCard } from './TimelineEntryCard'
import { TimelineRibbon } from './TimelineRibbon'
import { SearchBar } from './SearchBar'
import { TagPill } from './TagPill'

const certaintyOptions: { value: Certainty | 'all'; label: string }[] = [
  { value: 'all', label: 'Todo' },
  { value: 'confirmado', label: 'Confirmado' },
  { value: 'inferencia', label: 'Inferencia Fuerte' },
  { value: 'teoria', label: 'Teoría' },
]

interface Props {
  entries: TimelineEntry[]
  readingMode: boolean
}

export function TimelineSection({ entries, readingMode }: Props) {
  const [search, setSearch] = useState('')
  const [certaintyFilter, setCertaintyFilter] = useState<Certainty | 'all'>('all')
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const allTags = useMemo(() => {
    const set = new Set<string>()
    entries.forEach((e) => e.tags.forEach((t) => set.add(t)))
    return Array.from(set).sort()
  }, [entries])

  const filtered = useMemo(() => {
    return entries.filter((e) => {
      const matchSearch =
        !search ||
        e.title.toLowerCase().includes(search.toLowerCase()) ||
        e.lore.some((p) => p.toLowerCase().includes(search.toLowerCase())) ||
        e.poeticIntro.toLowerCase().includes(search.toLowerCase())
      const matchCertainty = certaintyFilter === 'all' || e.certainty === certaintyFilter
      const matchTag = !activeTag || e.tags.includes(activeTag)
      return matchSearch && matchCertainty && matchTag
    })
  }, [entries, search, certaintyFilter, activeTag])

  return (
    <section id="timeline">
      <SectionHero fallbackType="ending-fracture" />

      <div className="codex-section pt-6">
        <SectionHeader
          title="Timeline Profundo"
          subtitle="Del Vacío a la Fractura — Historia completa del Interregno"
        />

        {!readingMode && <TimelineRibbon entries={entries} />}

        {!readingMode && (
          <div className="mb-8 space-y-4">
            <SearchBar value={search} onChange={setSearch} placeholder="Buscar en el timeline..." />

            <div className="flex flex-wrap gap-2">
              {certaintyOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setCertaintyFilter(opt.value)}
                  className={`px-3 py-1.5 font-heading text-xs tracking-wider uppercase rounded-sm border transition-all
                    ${certaintyFilter === opt.value
                      ? 'bg-codex-gold/15 border-codex-gold/40 text-codex-gold'
                      : 'bg-codex-brown/30 border-codex-gold-dim/20 text-codex-parchment-dim hover:border-codex-gold-dim/40'
                    }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {activeTag && (
                <TagPill tag="× Quitar filtro" onClick={() => setActiveTag(null)} active />
              )}
              {allTags.slice(0, 20).map((tag) => (
                <TagPill
                  key={tag}
                  tag={tag}
                  onClick={(t) => setActiveTag(activeTag === t ? null : t)}
                  active={activeTag === tag}
                />
              ))}
            </div>

            {filtered.length !== entries.length && (
              <p className="font-heading text-xs text-codex-gold-dim tracking-wider">
                Mostrando {filtered.length} de {entries.length} capítulos
              </p>
            )}
          </div>
        )}

        <div className="space-y-6">
          {filtered.map((entry) => (
            <TimelineEntryCard
              key={entry.id}
              entry={entry}
              onTagClick={(tag) => setActiveTag(activeTag === tag ? null : tag)}
              readingMode={readingMode}
            />
          ))}
          {filtered.length === 0 && (
            <div className="parchment-panel p-12 text-center">
              <p className="font-heading text-codex-gold-dim tracking-wider">Sin resultados</p>
              <p className="text-sm text-codex-parchment-dim mt-2">Intenta con términos diferentes</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
