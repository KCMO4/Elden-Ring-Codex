import { useState, useMemo } from 'react'
import type { Character } from '../data/types'
import { SectionHeader } from './SectionHeader'
import { SectionHero } from './SectionHero'
import { CharacterCard } from './CharacterCard'
import { SearchBar } from './SearchBar'

interface Props {
  characters: Character[]
}

export function CharacterSection({ characters }: Props) {
  const [search, setSearch] = useState('')
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const allFactions = useMemo(() => {
    const set = new Set(characters.map((c) => c.faction))
    return Array.from(set).sort()
  }, [characters])

  const filtered = useMemo(() => {
    return characters.filter((c) => {
      const q = search.toLowerCase()
      const matchSearch =
        !search ||
        c.name.toLowerCase().includes(q) ||
        c.role.toLowerCase().includes(q) ||
        c.tragedy.toLowerCase().includes(q) ||
        c.faction.toLowerCase().includes(q)
      const matchTag = !activeTag || c.faction === activeTag || c.tags.includes(activeTag)
      return matchSearch && matchTag
    })
  }, [characters, search, activeTag])

  return (
    <section id="personajes">
      <SectionHero fallbackType="golden-order" />

      <div className="codex-section pt-6">
        <SectionHeader
          title="Enciclopedia de Personajes"
          subtitle="Las almas que dieron forma al Interregno"
        />

        <div className="mb-8 space-y-4">
          <SearchBar value={search} onChange={setSearch} placeholder="Buscar personaje..." />

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag(null)}
              className={`px-3 py-1.5 font-heading text-xs tracking-wider uppercase rounded-sm border transition-all
                ${!activeTag ? 'bg-codex-gold/15 border-codex-gold/40 text-codex-gold' : 'bg-codex-brown/30 border-codex-gold-dim/20 text-codex-parchment-dim hover:border-codex-gold-dim/40'}`}
            >
              Todos
            </button>
            {allFactions.map((f) => (
              <button
                key={f}
                onClick={() => setActiveTag(activeTag === f ? null : f)}
                className={`px-3 py-1.5 font-heading text-xs tracking-wider uppercase rounded-sm border transition-all
                  ${activeTag === f ? 'bg-codex-gold/15 border-codex-gold/40 text-codex-gold' : 'bg-codex-brown/30 border-codex-gold-dim/20 text-codex-parchment-dim hover:border-codex-gold-dim/40'}`}
              >
                {f}
              </button>
            ))}
          </div>

          <p className="font-heading text-xs text-codex-gold-dim tracking-wider">
            {filtered.length} personaje{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((char) => (
            <CharacterCard key={char.id} character={char} onTagClick={setActiveTag} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full parchment-panel p-12 text-center">
              <p className="font-heading text-codex-gold-dim tracking-wider">Sin personajes encontrados</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
