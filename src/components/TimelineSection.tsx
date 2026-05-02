import { useMemo } from 'react'
import type { TimelineEntry } from '../data/types'
import { SectionHeader } from './SectionHeader'
import { SectionHero } from './SectionHero'
import { TimelineEntryCard } from './TimelineEntryCard'
import { TimelineRibbon } from './TimelineRibbon'
import { FilterBar, type SortOption } from './FilterBar'
import type { TagOption } from './TagPicker'
import { EmptyState } from './EmptyState'
import { ColorLegend } from './ColorLegend'
import { useFilters } from '../lib/useFilters'
import { buildTagOptions, compareByCertainty } from '../lib/filterHelpers'
import { useEntityFilter } from '../lib/expansion'

interface Props {
  entries: TimelineEntry[]
}

const SORT_OPTIONS: SortOption[] = [
  { value: 'default',    label: 'Orden cronológico' },
  { value: 'reverse',    label: 'Inverso' },
  { value: 'title-asc',  label: 'A → Z' },
  { value: 'certainty',  label: 'Por certeza' },
]

const VALID_SORTS = ['default', 'reverse', 'title-asc', 'certainty'] as const
type TimelineSort = typeof VALID_SORTS[number]

export function TimelineSection({ entries }: Props) {
  const f = useFilters<TimelineSort>({
    defaultSort: 'default',
    validSorts: VALID_SORTS,
    storageKey: 'timeline',
  })

  const tagOptions: TagOption[] = useMemo(
    () => buildTagOptions(entries, (e) => e.tags),
    [entries],
  )

  const { visible: byExpansion } = useEntityFilter()

  const filtered = useMemo(() => {
    const q = f.search.toLowerCase()
    const result = byExpansion(entries).filter((e) => {
      const matchSearch =
        !f.search ||
        e.title.toLowerCase().includes(q) ||
        e.lore.some((p) => p.toLowerCase().includes(q)) ||
        e.poeticIntro.toLowerCase().includes(q)
      const matchCertainty = f.certainty === 'all' || e.certainty === f.certainty
      const matchTags = f.tags.length === 0 || f.tags.every((t) => e.tags.includes(t))
      return matchSearch && matchCertainty && matchTags
    })

    switch (f.sort) {
      case 'reverse':
        return [...result].reverse()
      case 'title-asc':
        return [...result].sort((a, b) => a.title.localeCompare(b.title))
      case 'certainty':
        return [...result].sort(compareByCertainty((e) => e.title))
      default:
        return result
    }
  }, [entries, byExpansion, f.search, f.certainty, f.tags, f.sort])

  return (
    <section id="timeline">
      <SectionHero fallbackType="ending-fracture" />

      <div className="codex-section pt-6">
        <SectionHeader
          asPageHeading
          title="Timeline Profundo"
          subtitle="Del Vacío a la Fractura — Historia completa de las Tierras Intermedias"
          readingCategory="timeline"
        />

        <TimelineRibbon entries={byExpansion(entries)} />

        <FilterBar
          search={f.search}
          onSearchChange={f.setSearch}
          searchPlaceholder="Buscar evento, era, palabra clave…"
          certainty={f.certainty}
          onCertaintyChange={f.setCertainty}
          tags={tagOptions}
          selectedTags={f.tags}
          onTagsChange={f.setTags}
          tagsLabel="Etiquetas"
          tagSearchPlaceholder="Buscar etiqueta..."
          popularTagCount={6}
          sortOptions={SORT_OPTIONS}
          sort={f.sort}
          onSortChange={(v) => f.setSort(v as TimelineSort)}
          totalCount={entries.length}
          filteredCount={filtered.length}
          unitLabel="capítulo"
          unitLabelPlural="capítulos"
        />

        <ColorLegend />

        <div className="space-y-6">
          {filtered.map((entry, i) => (
            <TimelineEntryCard
              key={entry.id}
              entry={entry}
              index={i}
            />
          ))}
          {filtered.length === 0 && (
            <EmptyState
              variant="filter"
              title="Sin capítulos encontrados"
              description="Ningún evento de la cronología coincide con los filtros. Prueba a cambiar la certeza o quitar etiquetas."
              actionLabel="Limpiar todos los filtros"
              onAction={f.clearAll}
            />
          )}
        </div>
      </div>
    </section>
  )
}
