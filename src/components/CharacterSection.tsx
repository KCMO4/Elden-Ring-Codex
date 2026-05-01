import { useMemo } from 'react'
import type { Character } from '../data/types'
import { SectionHeader } from './SectionHeader'
import { SectionHero } from './SectionHero'
import { CharacterCard } from './CharacterCard'
import { FilterBar, type SortOption } from './FilterBar'
import { TagPicker, type TagOption } from './TagPicker'
import { EmptyState } from './EmptyState'
import { ColorLegend } from './ColorLegend'
import { useFilters } from '../lib/useFilters'
import { buildTagOptions, compareByCertainty } from '../lib/filterHelpers'

interface Props {
  characters: Character[]
}

const SORT_OPTIONS: SortOption[] = [
  { value: 'default',    label: 'Orden canónico' },
  { value: 'name-asc',   label: 'A → Z' },
  { value: 'name-desc',  label: 'Z → A' },
  { value: 'certainty',  label: 'Por certeza' },
]

const VALID_SORTS = ['default', 'name-asc', 'name-desc', 'certainty'] as const
type CharacterSort = typeof VALID_SORTS[number]

export function CharacterSection({ characters }: Props) {
  const f = useFilters<CharacterSort>({
    defaultSort: 'default',
    validSorts: VALID_SORTS,
    withSecondaryTags: true,
    storageKey: 'characters',
  })

  const factionOptions: TagOption[] = useMemo(
    () => buildTagOptions(characters, (c) => c.faction),
    [characters],
  )

  const tagOptions: TagOption[] = useMemo(
    () => buildTagOptions(characters, (c) => c.tags),
    [characters],
  )

  const filtered = useMemo(() => {
    const q = f.search.toLowerCase()
    const result = characters.filter((c) => {
      const matchSearch =
        !f.search ||
        c.name.toLowerCase().includes(q) ||
        c.role.toLowerCase().includes(q) ||
        c.tragedy.toLowerCase().includes(q) ||
        c.faction.toLowerCase().includes(q) ||
        c.region.toLowerCase().includes(q)
      const matchCertainty = f.certainty === 'all' || c.certainty === f.certainty
      const matchFactions =
        f.secondaryTags.length === 0 || f.secondaryTags.includes(c.faction)
      const matchTags =
        f.tags.length === 0 || f.tags.every((t) => c.tags.includes(t))
      return matchSearch && matchCertainty && matchFactions && matchTags
    })

    switch (f.sort) {
      case 'name-asc':
        return [...result].sort((a, b) => a.name.localeCompare(b.name))
      case 'name-desc':
        return [...result].sort((a, b) => b.name.localeCompare(a.name))
      case 'certainty':
        return [...result].sort(compareByCertainty((c) => c.name))
      default:
        return result
    }
  }, [characters, f.search, f.certainty, f.secondaryTags, f.tags, f.sort])

  const toggleTag = (t: string) =>
    f.setTags(f.tags.includes(t) ? f.tags.filter((x) => x !== t) : [...f.tags, t])

  return (
    <section id="personajes">
      <SectionHero fallbackType="golden-order" />

      <div className="codex-section pt-6">
        <SectionHeader
          title="Enciclopedia de Personajes"
          subtitle="Las almas que dieron forma a las Tierras Intermedias"
          readingCategory="personajes"
        />

        <FilterBar
          search={f.search}
          onSearchChange={f.setSearch}
          searchPlaceholder="Buscar personaje, rol, tragedia, región…"
          certainty={f.certainty}
          onCertaintyChange={f.setCertainty}
          tags={factionOptions}
          selectedTags={f.secondaryTags}
          onTagsChange={f.setSecondaryTags}
          tagsLabel="Facciones"
          tagSearchPlaceholder="Buscar facción..."
          popularTagCount={6}
          sortOptions={SORT_OPTIONS}
          sort={f.sort}
          onSortChange={(v) => f.setSort(v as CharacterSort)}
          totalCount={characters.length}
          filteredCount={filtered.length}
          unitLabel="personaje"
          unitLabelPlural="personajes"
        />

        {/* Secondary picker: tags (separate axis from faction) */}
        <div className="-mt-5 mb-8">
          <TagPicker
            tags={tagOptions}
            selected={f.tags}
            onChange={f.setTags}
            label="Etiquetas"
            searchPlaceholder="Buscar etiqueta..."
            popularCount={8}
          />
        </div>

        <ColorLegend />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((char, i) => (
            <CharacterCard key={char.id} character={char} onTagClick={toggleTag} index={i} />
          ))}
        </div>
        {filtered.length === 0 && (
          <EmptyState
            variant="filter"
            title="Sin personajes encontrados"
            description="Ninguna alma de las Tierras Intermedias coincide con los filtros. Prueba a quitar facción, etiqueta o certeza para ampliar."
            actionLabel="Limpiar todos los filtros"
            onAction={f.clearAll}
          />
        )}
      </div>
    </section>
  )
}
