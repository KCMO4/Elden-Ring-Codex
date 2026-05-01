import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search, X, Check } from 'lucide-react'

export interface TagOption {
  value: string
  count: number
}

interface Props {
  tags: TagOption[]
  selected: string[]
  onChange: (next: string[]) => void
  /** How many top-frequency tags to surface as one-click chips. Default 6. */
  popularCount?: number
  /** Header label for the popular row. Default "Etiquetas". */
  label?: string
  /** Placeholder for the inner search input. */
  searchPlaceholder?: string
}

/**
 * Multi-select tag picker.
 *  - Top-N most-used tags appear as quick chips (always visible).
 *  - A toggle reveals the full list with search + counts.
 *  - Selected tags appear as removable pills above the chips row.
 *
 * Filtering semantics is AND: an entry matches if it has ALL selected tags.
 * (Owner of selected[] decides; this component is a pure controlled UI.)
 */
export function TagPicker({
  tags,
  selected,
  onChange,
  popularCount = 6,
  label = 'Etiquetas',
  searchPlaceholder = 'Buscar etiqueta...',
}: Props) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const drawerRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  /* Sort by frequency descending, then alpha. */
  const sortedByFreq = useMemo(
    () => [...tags].sort((a, b) => b.count - a.count || a.value.localeCompare(b.value)),
    [tags],
  )
  const sortedAlpha = useMemo(
    () => [...tags].sort((a, b) => a.value.localeCompare(b.value)),
    [tags],
  )

  const popular = useMemo(
    () => sortedByFreq.slice(0, popularCount),
    [sortedByFreq, popularCount],
  )

  const filtered = useMemo(() => {
    if (!query.trim()) return sortedAlpha
    const q = query.toLowerCase()
    return sortedAlpha.filter((t) => t.value.toLowerCase().includes(q))
  }, [sortedAlpha, query])

  const toggle = (tag: string) => {
    onChange(selected.includes(tag) ? selected.filter((t) => t !== tag) : [...selected, tag])
  }

  /* Close on Escape, but keep open on click outside (drawer is inline, not floating). */
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open])

  /* Auto-focus search input when drawer opens. */
  useEffect(() => {
    if (open) searchInputRef.current?.focus()
  }, [open])

  if (tags.length === 0) return null

  const clearable = selected.length > 0

  return (
    <div className="space-y-2">
      {/* Selected pills row */}
      {clearable && (
        <div className="flex flex-wrap gap-1.5 items-center">
          <span className="font-heading text-[10px] text-codex-gold-dim/80 tracking-wider uppercase mr-1">
            Activas:
          </span>
          {selected.map((t) => (
            <button
              key={t}
              onClick={() => toggle(t)}
              aria-label={`Quitar etiqueta ${t}`}
              className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium tracking-wide
                         bg-codex-gold/15 text-codex-gold border border-codex-gold/40
                         hover:bg-codex-gold/25 transition-colors rounded-sm"
            >
              {t}
              <X size={11} className="opacity-70" />
            </button>
          ))}
          <button
            onClick={() => onChange([])}
            className="text-[10px] font-heading tracking-wider uppercase
                       text-codex-parchment-dim hover:text-codex-gold transition-colors ml-1"
          >
            Quitar todas
          </button>
        </div>
      )}

      {/* Popular chips + open toggle */}
      <div className="flex flex-wrap gap-1.5 items-center">
        <span className="font-heading text-[10px] text-codex-gold-dim/80 tracking-wider uppercase mr-1">
          {label}:
        </span>
        {popular.map(({ value }) => {
          const active = selected.includes(value)
          return (
            <button
              key={value}
              onClick={() => toggle(value)}
              className={`px-2 py-0.5 text-xs font-medium tracking-wide rounded-sm border transition-all
                ${active
                  ? 'bg-codex-gold/20 text-codex-gold border-codex-gold/50'
                  : 'bg-codex-brown/40 text-codex-parchment-dim border-codex-gold-dim/20 hover:border-codex-gold-dim/40 hover:text-codex-parchment'
                }`}
            >
              {value}
            </button>
          )
        })}
        {tags.length > popularCount && (
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-heading tracking-wider uppercase
                        rounded-sm border transition-all
                        ${open
                          ? 'bg-codex-gold/15 text-codex-gold border-codex-gold/40'
                          : 'border-codex-gold-dim/30 text-codex-gold-dim hover:text-codex-gold hover:border-codex-gold-dim/60'
                        }`}
          >
            {open ? 'Ocultar' : `Más (${tags.length})`}
            <ChevronDown
              size={11}
              className={`transition-transform ${open ? 'rotate-180' : ''}`}
            />
          </button>
        )}
      </div>

      {/* Drawer: full searchable list */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            ref={drawerRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div className="parchment-panel p-3 mt-1">
              {/* Search inside drawer */}
              <div className="relative mb-3">
                <Search
                  size={13}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 text-codex-gold-dim"
                />
                <input
                  ref={searchInputRef}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={searchPlaceholder}
                  className="w-full pl-8 pr-3 py-1.5 bg-codex-black/40 border border-codex-gold-dim/20
                             text-codex-parchment placeholder-codex-parchment-dim/40
                             font-body text-xs rounded-sm
                             focus:outline-none focus:border-codex-gold/60 transition-all"
                />
              </div>

              {/* Tag list — column-flow grid */}
              {filtered.length === 0 ? (
                <p className="font-body text-xs text-codex-parchment-dim/70 italic px-1 py-2">
                  Sin coincidencias para "{query}"
                </p>
              ) : (
                <ul
                  className="grid gap-x-3 gap-y-0.5 max-h-72 overflow-y-auto pr-1"
                  style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' }}
                >
                  {filtered.map(({ value, count }) => {
                    const active = selected.includes(value)
                    return (
                      <li key={value}>
                        <button
                          onClick={() => toggle(value)}
                          aria-pressed={active}
                          className={`w-full flex items-center gap-2 px-2 py-1 text-left rounded-sm
                                       transition-colors
                                       ${active
                                         ? 'bg-codex-gold/15 text-codex-gold'
                                         : 'text-codex-parchment-dim hover:bg-codex-brown/40 hover:text-codex-parchment'
                                       }`}
                        >
                          <span
                            className={`shrink-0 w-3.5 h-3.5 inline-flex items-center justify-center rounded-sm border
                                         ${active
                                           ? 'bg-codex-gold border-codex-gold text-codex-black'
                                           : 'border-codex-gold-dim/40'
                                         }`}
                          >
                            {active && <Check size={9} strokeWidth={3} />}
                          </span>
                          <span className="font-body text-xs truncate">{value}</span>
                          <span className="ml-auto font-heading text-[10px] text-codex-gold-dim/60 tabular-nums">
                            {count}
                          </span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between gap-3 mt-3 pt-2 border-t border-codex-gold-dim/15">
                <p className="font-heading text-[10px] text-codex-gold-dim tracking-wider uppercase">
                  {filtered.length} de {tags.length} · {selected.length} activa{selected.length === 1 ? '' : 's'}
                </p>
                <div className="flex gap-2">
                  {selected.length > 0 && (
                    <button
                      onClick={() => onChange([])}
                      className="text-[10px] font-heading tracking-wider uppercase
                                 text-codex-parchment-dim hover:text-codex-gold transition-colors"
                    >
                      Limpiar
                    </button>
                  )}
                  <button
                    onClick={() => setOpen(false)}
                    className="text-[10px] font-heading tracking-wider uppercase
                               text-codex-gold hover:text-codex-gold-bright transition-colors"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
