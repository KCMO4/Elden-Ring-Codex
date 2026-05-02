import { useMemo } from 'react'
import type { Faction } from '../data/types'
import { SectionHeader } from './SectionHeader'
import { SectionHero } from './SectionHero'
import { FactionCard } from './FactionCard'
import { FilterBar, type SortOption } from './FilterBar'
import type { TagOption } from './TagPicker'
import { EmptyState } from './EmptyState'
import { ColorLegend } from './ColorLegend'
import { useFilters } from '../lib/useFilters'
import { buildTagOptions, compareByCertainty } from '../lib/filterHelpers'
import { useEntityFilter } from '../lib/expansion'

interface Props {
  factions: Faction[]
}

const SORT_OPTIONS: SortOption[] = [
  { value: 'default',    label: 'Orden canónico' },
  { value: 'name-asc',   label: 'A → Z' },
  { value: 'name-desc',  label: 'Z → A' },
  { value: 'certainty',  label: 'Por certeza' },
]

const VALID_SORTS = ['default', 'name-asc', 'name-desc', 'certainty'] as const
type FactionSort = typeof VALID_SORTS[number]

export function FactionSection({ factions }: Props) {
  const f = useFilters<FactionSort>({
    defaultSort: 'default',
    validSorts: VALID_SORTS,
    storageKey: 'factions',
  })

  const tagOptions: TagOption[] = useMemo(
    () => buildTagOptions(factions, (fa) => fa.tags),
    [factions],
  )

  const { visible: byExpansion } = useEntityFilter()

  const filtered = useMemo(() => {
    const q = f.search.toLowerCase()
    const result = byExpansion(factions).filter((fa) => {
      const matchSearch =
        !f.search ||
        fa.name.toLowerCase().includes(q) ||
        fa.what.toLowerCase().includes(q) ||
        fa.belief.toLowerCase().includes(q) ||
        fa.whyMatters.toLowerCase().includes(q)
      const matchCertainty = f.certainty === 'all' || fa.certainty === f.certainty
      const matchTags = f.tags.length === 0 || f.tags.every((t) => fa.tags.includes(t))
      return matchSearch && matchCertainty && matchTags
    })

    switch (f.sort) {
      case 'name-asc':
        return [...result].sort((a, b) => a.name.localeCompare(b.name))
      case 'name-desc':
        return [...result].sort((a, b) => b.name.localeCompare(a.name))
      case 'certainty':
        return [...result].sort(compareByCertainty((fa) => fa.name))
      default:
        return result
    }
  }, [factions, byExpansion, f.search, f.certainty, f.tags, f.sort])

  return (
    <section id="facciones">
      <SectionHero fallbackType="war" />

      <div className="codex-section pt-6">
        <SectionHeader
          asPageHeading
          title="Facciones y Lore Enemigo"
          subtitle="Los grupos que definen las Tierras Intermedias en su fractura"
          readingCategory="facciones"
        />

        <FilterBar
          search={f.search}
          onSearchChange={f.setSearch}
          searchPlaceholder="Buscar facción, creencia, miembros…"
          certainty={f.certainty}
          onCertaintyChange={f.setCertainty}
          tags={tagOptions}
          selectedTags={f.tags}
          onTagsChange={f.setTags}
          tagsLabel="Etiquetas"
          tagSearchPlaceholder="Buscar etiqueta..."
          sortOptions={SORT_OPTIONS}
          sort={f.sort}
          onSortChange={(v) => f.setSort(v as FactionSort)}
          totalCount={factions.length}
          filteredCount={filtered.length}
          unitLabel="facción"
          unitLabelPlural="facciones"
        />

        <ColorLegend />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((faction, i) => (
            <FactionCard key={faction.id} faction={faction} index={i} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="col-span-full">
            <EmptyState
              variant="filter"
              title="Sin facciones encontradas"
              description="Ningún registro coincide con los filtros activos. Quita filtros para ampliar la búsqueda o prueba con otra etiqueta."
              actionLabel="Limpiar todos los filtros"
              onAction={f.clearAll}
            />
          </div>
        )}
      </div>
    </section>
  )
}
