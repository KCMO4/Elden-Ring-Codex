import { ArrowUpDown, X } from 'lucide-react'
import { SearchBar } from './SearchBar'
import { TagPicker, type TagOption } from './TagPicker'
import type { Certainty } from '../data/types'

const CERTAINTY_OPTIONS: { value: Certainty | 'all'; label: string }[] = [
  { value: 'all',         label: 'Todo' },
  { value: 'confirmado',  label: 'Confirmado' },
  { value: 'inferencia',  label: 'Inferencia' },
  { value: 'teoria',      label: 'Teoría' },
]

export interface SortOption {
  value: string
  label: string
}

export interface FilterBarProps {
  /* Search input */
  search: string
  onSearchChange: (s: string) => void
  searchPlaceholder?: string

  /* Certainty chips (optional) */
  certainty?: Certainty | 'all'
  onCertaintyChange?: (c: Certainty | 'all') => void

  /* Multi-select tag picker (optional). Pass tags WITH counts. */
  tags?: TagOption[]
  selectedTags?: string[]
  onTagsChange?: (next: string[]) => void
  tagsLabel?: string
  popularTagCount?: number
  tagSearchPlaceholder?: string

  /* Sort dropdown (optional) */
  sortOptions?: SortOption[]
  sort?: string
  onSortChange?: (s: string) => void

  /* Result count */
  totalCount: number
  filteredCount: number
  unitLabel: string          /* singular */
  unitLabelPlural?: string   /* defaults to unitLabel + "es" */
}

/**
 * Reusable filter+search+sort+count panel. Used by lists across the codex.
 * All blocks except search are optional; pass the props you need.
 */
export function FilterBar({
  search,
  onSearchChange,
  searchPlaceholder,
  certainty,
  onCertaintyChange,
  tags,
  selectedTags,
  onTagsChange,
  tagsLabel,
  popularTagCount,
  tagSearchPlaceholder,
  sortOptions,
  sort,
  onSortChange,
  totalCount,
  filteredCount,
  unitLabel,
  unitLabelPlural,
}: FilterBarProps) {
  const hasActiveFilter =
    search.trim().length > 0 ||
    (certainty !== undefined && certainty !== 'all') ||
    (selectedTags !== undefined && selectedTags.length > 0)

  const clearAll = () => {
    onSearchChange('')
    onCertaintyChange?.('all')
    onTagsChange?.([])
  }

  const plural = unitLabelPlural ?? `${unitLabel}es`
  const countLabel = filteredCount === 1 ? unitLabel : plural

  return (
    <div className="mb-8 space-y-3">
      {/* Row 1: search + sort */}
      <div className="flex items-stretch gap-2 flex-wrap md:flex-nowrap">
        <div className="flex-1 min-w-[260px]">
          <SearchBar
            value={search}
            onChange={onSearchChange}
            placeholder={searchPlaceholder ?? 'Buscar...'}
          />
        </div>
        {sortOptions && sortOptions.length > 0 && onSortChange && (
          <div className="relative">
            <ArrowUpDown
              size={14}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 text-codex-gold-dim pointer-events-none"
            />
            <select
              value={sort}
              onChange={(e) => onSortChange(e.target.value)}
              aria-label="Ordenar por"
              className="appearance-none pl-8 pr-8 py-2.5 h-full bg-codex-brown/50 border border-codex-gold-dim/30
                         text-codex-parchment font-body text-sm rounded-sm
                         focus:outline-none focus:border-codex-gold/60 transition-all"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-codex-gold-dim pointer-events-none text-xs">▾</span>
          </div>
        )}
      </div>

      {/* Row 2: certainty chips */}
      {certainty !== undefined && onCertaintyChange && (
        <div role="radiogroup" aria-label="Filtrar por certeza" className="flex flex-wrap gap-1.5">
          {CERTAINTY_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={certainty === opt.value}
              onClick={() => onCertaintyChange(opt.value)}
              className={`px-3 py-1.5 font-heading text-xs tracking-wider uppercase rounded-sm border transition-all
                ${certainty === opt.value
                  ? 'bg-codex-gold/15 border-codex-gold/40 text-codex-gold'
                  : 'bg-codex-brown/30 border-codex-gold-dim/20 text-codex-parchment-dim hover:border-codex-gold-dim/40'
                }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}

      {/* Row 3: tag picker */}
      {tags && tags.length > 0 && selectedTags !== undefined && onTagsChange && (
        <TagPicker
          tags={tags}
          selected={selectedTags}
          onChange={onTagsChange}
          label={tagsLabel ?? 'Etiquetas'}
          popularCount={popularTagCount}
          searchPlaceholder={tagSearchPlaceholder}
        />
      )}

      {/* Row 4: count + clear */}
      <div className="flex items-center justify-between gap-3 flex-wrap pt-1">
        <p className="font-heading text-xs text-codex-gold-dim tracking-wider">
          {filteredCount === totalCount
            ? `${totalCount} ${countLabel}`
            : `${filteredCount} de ${totalCount} ${plural}`}
        </p>
        {hasActiveFilter && (
          <button
            onClick={clearAll}
            className="inline-flex items-center gap-1 text-xs font-heading tracking-wider uppercase
                       text-codex-parchment-dim hover:text-codex-gold transition-colors"
          >
            <X size={11} />
            Limpiar filtros
          </button>
        )}
      </div>
    </div>
  )
}
