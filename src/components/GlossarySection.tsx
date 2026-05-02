import { useMemo } from 'react'
import type { GlossaryEntry } from '../data/types'
import { SectionHeader } from './SectionHeader'
import { SectionHero } from './SectionHero'
import { GlossaryGrid } from './GlossaryModal'
import { FilterBar, type SortOption } from './FilterBar'
import type { TagOption } from './TagPicker'
import { EmptyState } from './EmptyState'
import { ColorLegend } from './ColorLegend'
import { useFilters } from '../lib/useFilters'
import { buildTagOptions, compareByCertainty } from '../lib/filterHelpers'
import { useEntityFilter } from '../lib/expansion'

interface Props {
  entries: GlossaryEntry[]
}

const SORT_OPTIONS: SortOption[] = [
  { value: 'default',    label: 'Orden canónico' },
  { value: 'name-asc',   label: 'A → Z' },
  { value: 'name-desc',  label: 'Z → A' },
  { value: 'certainty',  label: 'Por certeza' },
]

const VALID_SORTS = ['default', 'name-asc', 'name-desc', 'certainty'] as const
type GlossarySort = typeof VALID_SORTS[number]

export function GlossarySection({ entries }: Props) {
  const f = useFilters<GlossarySort>({
    defaultSort: 'default',
    validSorts: VALID_SORTS,
    storageKey: 'concepts',
  })

  const relatedOptions: TagOption[] = useMemo(
    () => buildTagOptions(entries, (e) => e.related),
    [entries],
  )

  const { visible: byExpansion } = useEntityFilter()

  const filtered = useMemo(() => {
    const q = f.search.toLowerCase()
    const result = byExpansion(entries).filter((e) => {
      const matchSearch =
        !f.search ||
        e.term.toLowerCase().includes(q) ||
        e.definition.toLowerCase().includes(q) ||
        (e.deepDive ?? '').toLowerCase().includes(q)
      const matchCertainty = f.certainty === 'all' || e.certainty === f.certainty
      const matchRelated =
        f.tags.length === 0 || f.tags.every((t) => e.related.includes(t))
      return matchSearch && matchCertainty && matchRelated
    })

    switch (f.sort) {
      case 'name-asc':
        return [...result].sort((a, b) => a.term.localeCompare(b.term))
      case 'name-desc':
        return [...result].sort((a, b) => b.term.localeCompare(a.term))
      case 'certainty':
        return [...result].sort(compareByCertainty((e) => e.term))
      default:
        return result
    }
  }, [entries, byExpansion, f.search, f.certainty, f.tags, f.sort])

  return (
    <section id="glosario">
      <SectionHero fallbackType="cosmic" />

      <div className="codex-section pt-6">
        <SectionHeader
          asPageHeading
          title="Glosario de las Tierras Intermedias"
          subtitle="Los conceptos que definen el cosmos del Orden Dorado"
          poeticIntro="Para entender las Tierras Intermedias, primero debes entender su lenguaje sagrado."
          readingCategory="conceptos"
        />

        <FilterBar
          search={f.search}
          onSearchChange={f.setSearch}
          searchPlaceholder="Buscar concepto, definición, glosa…"
          certainty={f.certainty}
          onCertaintyChange={f.setCertainty}
          tags={relatedOptions}
          selectedTags={f.tags}
          onTagsChange={f.setTags}
          tagsLabel="Relacionado con"
          tagSearchPlaceholder="Buscar concepto relacionado..."
          sortOptions={SORT_OPTIONS}
          sort={f.sort}
          onSortChange={(v) => f.setSort(v as GlossarySort)}
          totalCount={entries.length}
          filteredCount={filtered.length}
          unitLabel="concepto"
          unitLabelPlural="conceptos"
        />

        <ColorLegend />

        {filtered.length > 0 ? (
          <GlossaryGrid entries={filtered} />
        ) : (
          <EmptyState
            variant="filter"
            title="Sin conceptos encontrados"
            description="Ningún concepto coincide con los filtros activos. Quita filtros para explorar todo el glosario."
            actionLabel="Limpiar todos los filtros"
            onAction={f.clearAll}
          />
        )}
      </div>
    </section>
  )
}
