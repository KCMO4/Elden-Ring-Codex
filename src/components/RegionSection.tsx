import { useState } from 'react'
import type { Region } from '../data/types'
import { SectionHeader } from './SectionHeader'
import { SectionHero } from './SectionHero'
import { RegionCard } from './RegionCard'
import { SearchBar } from './SearchBar'

interface Props {
  regions: Region[]
}

export function RegionSection({ regions }: Props) {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<string | null>(null)

  const filtered = regions.filter((r) => {
    const q = search.toLowerCase()
    return (
      !search ||
      r.name.toLowerCase().includes(q) ||
      r.historical.toLowerCase().includes(q) ||
      r.mainFaction.toLowerCase().includes(q)
    )
  })

  return (
    <section id="regiones">
      <SectionHero fallbackType="dragon" />

      <div className="codex-section pt-6">
        <SectionHeader
          title="Regiones del Interregno"
          subtitle="Cada tierra, su historia, su tragedia oculta"
          poeticIntro="El mapa no es solo geografía — es memoria. Cada región lleva el peso de lo que ocurrió allí."
        />

        <div className="mb-8">
          <SearchBar value={search} onChange={setSearch} placeholder="Buscar región..." />
          <p className="font-heading text-xs text-codex-gold-dim tracking-wider mt-3">
            {filtered.length} región{filtered.length !== 1 ? 'es' : ''}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((region) => (
            <RegionCard
              key={region.id}
              region={region}
              selected={selected === region.id}
              onSelect={() => setSelected(selected === region.id ? null : region.id)}
            />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full parchment-panel p-12 text-center">
              <p className="font-heading text-codex-gold-dim tracking-wider">No se encontraron regiones</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
