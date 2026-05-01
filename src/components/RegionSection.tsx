import { useState, useMemo } from 'react'
import type { Region } from '../data/types'
import { SectionHeader } from './SectionHeader'
import { SectionHero } from './SectionHero'
import { RegionCard } from './RegionCard'
import { FilterBar, type SortOption } from './FilterBar'
import type { TagOption } from './TagPicker'
import { EmptyState } from './EmptyState'
import { ColorLegend } from './ColorLegend'
import { useFilters } from '../lib/useFilters'
import { buildTagOptions, compareByCertainty } from '../lib/filterHelpers'

interface Props {
  regions: Region[]
}

const SORT_OPTIONS: SortOption[] = [
  { value: 'default',    label: 'Orden canónico' },
  { value: 'name-asc',   label: 'A → Z' },
  { value: 'name-desc',  label: 'Z → A' },
  { value: 'certainty',  label: 'Por certeza' },
]

const VALID_SORTS = ['default', 'name-asc', 'name-desc', 'certainty'] as const
type RegionSort = typeof VALID_SORTS[number]

export function RegionSection({ regions }: Props) {
  const f = useFilters<RegionSort>({
    defaultSort: 'default',
    validSorts: VALID_SORTS,
    storageKey: 'regions',
  })
  const [selected, setSelected] = useState<string | null>(null)

  const tagOptions: TagOption[] = useMemo(
    () => buildTagOptions(regions, (r) => r.tags),
    [regions],
  )

  const filtered = useMemo(() => {
    const q = f.search.toLowerCase()
    const result = regions.filter((r) => {
      const matchSearch =
        !f.search ||
        r.name.toLowerCase().includes(q) ||
        r.historical.toLowerCase().includes(q) ||
        r.mainFaction.toLowerCase().includes(q) ||
        r.hiddenTragedy.toLowerCase().includes(q)
      const matchCertainty = f.certainty === 'all' || r.certainty === f.certainty
      const matchTags = f.tags.length === 0 || f.tags.every((t) => r.tags.includes(t))
      return matchSearch && matchCertainty && matchTags
    })

    switch (f.sort) {
      case 'name-asc':
        return [...result].sort((a, b) => a.name.localeCompare(b.name))
      case 'name-desc':
        return [...result].sort((a, b) => b.name.localeCompare(a.name))
      case 'certainty':
        return [...result].sort(compareByCertainty((r) => r.name))
      default:
        return result
    }
  }, [regions, f.search, f.certainty, f.tags, f.sort])

  const toggleTag = (t: string) =>
    f.setTags(f.tags.includes(t) ? f.tags.filter((x) => x !== t) : [...f.tags, t])

  return (
    <section id="regiones">
      <SectionHero fallbackType="dragon" />

      <div className="codex-section pt-6">
        <SectionHeader
          title="Regiones de las Tierras Intermedias"
          subtitle="Cada tierra, su historia, su tragedia oculta"
          poeticIntro="El mapa no es solo geografía — es memoria. Cada región lleva el peso de lo que ocurrió allí."
          readingCategory="regiones"
        />

        <FilterBar
          search={f.search}
          onSearchChange={f.setSearch}
          searchPlaceholder="Buscar región, facción, tragedia…"
          certainty={f.certainty}
          onCertaintyChange={f.setCertainty}
          tags={tagOptions}
          selectedTags={f.tags}
          onTagsChange={f.setTags}
          tagsLabel="Etiquetas"
          tagSearchPlaceholder="Buscar etiqueta..."
          sortOptions={SORT_OPTIONS}
          sort={f.sort}
          onSortChange={(v) => f.setSort(v as RegionSort)}
          totalCount={regions.length}
          filteredCount={filtered.length}
          unitLabel="región"
          unitLabelPlural="regiones"
        />

        <ColorLegend />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((region, i) => (
            <RegionCard
              key={region.id}
              region={region}
              selected={selected === region.id}
              onSelect={() => setSelected(selected === region.id ? null : region.id)}
              onTagClick={toggleTag}
              index={i}
            />
          ))}
        </div>
        {filtered.length === 0 && (
          <EmptyState
            variant="filter"
            title="Sin regiones encontradas"
            description="Ningún territorio coincide con los filtros activos. Quita filtros para ver todas las regiones de las Tierras Intermedias."
            actionLabel="Limpiar todos los filtros"
            onAction={f.clearAll}
          />
        )}
      </div>
    </section>
  )
}
