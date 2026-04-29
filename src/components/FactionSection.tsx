import { useState, useMemo } from 'react'
import type { Faction } from '../data/types'
import { SectionHeader } from './SectionHeader'
import { SectionHero } from './SectionHero'
import { FactionCard } from './FactionCard'
import { SearchBar } from './SearchBar'

interface Props {
  factions: Faction[]
}

export function FactionSection({ factions }: Props) {
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return factions.filter(
      (f) =>
        !search ||
        f.name.toLowerCase().includes(q) ||
        f.what.toLowerCase().includes(q) ||
        f.belief.toLowerCase().includes(q)
    )
  }, [factions, search])

  return (
    <section id="facciones">
      <SectionHero fallbackType="war" />

      <div className="codex-section pt-6">
        <SectionHeader
          title="Facciones y Lore Enemigo"
          subtitle="Los grupos que definen el Interregno en su fractura"
        />

        <div className="mb-8">
          <SearchBar value={search} onChange={setSearch} placeholder="Buscar facción..." />
          <p className="font-heading text-xs text-codex-gold-dim tracking-wider mt-3">
            {filtered.length} facción{filtered.length !== 1 ? 'es' : ''}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((faction) => (
            <FactionCard key={faction.id} faction={faction} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full parchment-panel p-12 text-center">
              <p className="font-heading text-codex-gold-dim tracking-wider">Sin facciones encontradas</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
