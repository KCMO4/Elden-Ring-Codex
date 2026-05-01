import { useEffect, useMemo, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Users, Map, Shield, BookMarked, Clock, Scroll } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { SectionHero } from '../components/SectionHero'
import { SearchBar } from '../components/SearchBar'
import { charactersData, factionsData, regionsData, glossaryData, timelineData } from '../data'
import { endingsData } from '../data/endings'
import { pathFor } from '../data/lookups'
import { flattenLore, extractSnippet } from '../lib/deepText'

type GroupKey = 'characters' | 'regions' | 'factions' | 'concepts' | 'timeline' | 'endings'

const GROUP_META: Record<GroupKey, { label: string; icon: React.ReactNode }> = {
  characters: { label: 'Personajes', icon: <Users size={13} /> },
  regions:    { label: 'Regiones',   icon: <Map size={13} /> },
  factions:   { label: 'Facciones',  icon: <Shield size={13} /> },
  concepts:   { label: 'Conceptos',  icon: <BookMarked size={13} /> },
  timeline:   { label: 'Timeline',   icon: <Clock size={13} /> },
  endings:    { label: 'Finales',    icon: <Scroll size={13} /> },
}

const GROUP_ORDER: GroupKey[] = ['characters', 'regions', 'factions', 'concepts', 'timeline', 'endings']

interface Result {
  to: string
  label: string
  sublabel?: string
  snippet?: string
}

/**
 * Splits a string by case-insensitive matches of `needle` and returns
 * an array of segments tagged as 'match' or 'plain'. Lets the renderer
 * decide how to highlight matched fragments.
 */
function highlightSegments(text: string, needle: string): { kind: 'match' | 'plain'; text: string }[] {
  if (!needle) return [{ kind: 'plain', text }]
  const out: { kind: 'match' | 'plain'; text: string }[] = []
  const lower = text.toLowerCase()
  const lowerNeedle = needle.toLowerCase()
  let i = 0
  while (i < text.length) {
    const idx = lower.indexOf(lowerNeedle, i)
    if (idx === -1) {
      out.push({ kind: 'plain', text: text.slice(i) })
      break
    }
    if (idx > i) out.push({ kind: 'plain', text: text.slice(i, idx) })
    out.push({ kind: 'match', text: text.slice(idx, idx + needle.length) })
    i = idx + needle.length
  }
  return out
}

function Highlighted({ text, query }: { text: string; query: string }) {
  if (!text) return null
  return (
    <>
      {highlightSegments(text, query).map((seg, i) =>
        seg.kind === 'match'
          ? <mark key={i} className="bg-codex-gold/25 text-codex-gold-bright rounded-sm px-0.5">{seg.text}</mark>
          : <span key={i}>{seg.text}</span>
      )}
    </>
  )
}

export function SearchPage() {
  const [params, setParams] = useSearchParams()
  const initial = params.get('q') ?? ''
  const [query, setQuery] = useState(initial)
  const [activeGroup, setActiveGroup] = useState<GroupKey | 'all'>('all')

  useEffect(() => {
    if (query) setParams({ q: query }, { replace: true })
    else setParams({}, { replace: true })
  }, [query, setParams])

  useEffect(() => { document.title = 'Búsqueda · Códice' }, [])

  const q = query.trim().toLowerCase()

  /* Build search index once (memoized): each entity gets shallow text + flattened deep lore. */
  const index = useMemo(() => ({
    characters: charactersData.map((c) => ({
      e: c, shallow: `${c.name} ${c.role} ${c.faction} ${c.region}`.toLowerCase(),
      deep: flattenLore(c),
    })),
    regions: regionsData.map((r) => ({
      e: r, shallow: `${r.name} ${r.historical} ${r.mainFaction}`.toLowerCase(),
      deep: flattenLore(r),
    })),
    factions: factionsData.map((f) => ({
      e: f, shallow: `${f.name} ${f.what} ${f.belief}`.toLowerCase(),
      deep: flattenLore(f),
    })),
    concepts: glossaryData.map((g) => ({
      e: g, shallow: `${g.term} ${g.definition} ${g.deepDive ?? ''}`.toLowerCase(),
      deep: flattenLore(g),
    })),
    timeline: timelineData.map((t) => ({
      e: t, shallow: `${t.title} ${t.chapter} ${t.lore.join(' ')}`.toLowerCase(),
      deep: flattenLore(t),
    })),
    endings: endingsData.map((en) => ({
      e: en, shallow: `${en.name} ${en.description} ${en.whoLeads}`.toLowerCase(),
      deep: '',
    })),
  }), [])

  const allGroups = useMemo(() => {
    if (q.length < 2) return [] as { key: GroupKey; results: Result[] }[]

    const matchOne = <T extends { e: any; shallow: string; deep: string }>(
      items: T[],
      pathFn: (e: any) => string,
      labelFn: (e: any) => string,
      subFn: (e: any) => string | undefined,
    ): Result[] => {
      const out: Result[] = []
      for (const it of items) {
        const inShallow = it.shallow.includes(q)
        if (inShallow) {
          out.push({ to: pathFn(it.e), label: labelFn(it.e), sublabel: subFn(it.e) })
          continue
        }
        if (it.deep && it.deep.includes(q)) {
          const snip = extractSnippet(it.deep, q, 160) ?? ''
          out.push({ to: pathFn(it.e), label: labelFn(it.e), sublabel: subFn(it.e), snippet: snip })
        }
      }
      return out
    }

    return [
      { key: 'characters' as const, results: matchOne(index.characters, pathFor.character, (e) => e.name, (e) => e.role) },
      { key: 'regions'    as const, results: matchOne(index.regions, pathFor.region, (e) => e.name, (e) => e.mainFaction) },
      { key: 'factions'   as const, results: matchOne(index.factions, pathFor.faction, (e) => e.name, (e) => e.what.slice(0, 80) + '…') },
      { key: 'concepts'   as const, results: matchOne(index.concepts, pathFor.concept, (e) => e.term, (e) => e.definition.slice(0, 80) + '…') },
      { key: 'timeline'   as const, results: matchOne(index.timeline, pathFor.timeline, (e) => e.title, (e) => e.chapter) },
      { key: 'endings'    as const, results: matchOne(index.endings, pathFor.ending, (e) => e.name, (e) => e.whoLeads) },
    ].filter((g) => g.results.length > 0)
  }, [q, index])

  /* Counts per group (full set) and visible groups (filtered by activeGroup). */
  const counts: Record<GroupKey, number> = {
    characters: 0, regions: 0, factions: 0, concepts: 0, timeline: 0, endings: 0,
  }
  allGroups.forEach((g) => { counts[g.key] = g.results.length })
  const total = allGroups.reduce((sum, g) => sum + g.results.length, 0)

  const visible = activeGroup === 'all'
    ? allGroups
    : allGroups.filter((g) => g.key === activeGroup)

  return (
    <section id="busqueda">
      <SectionHero fallbackType="cosmic" />

      <div className="codex-section pt-6">
        <SectionHeader title="Búsqueda en el Códice" subtitle="Cruza el lore por nombre o palabra clave" />

        <div className="max-w-2xl mb-6">
          <SearchBar value={query} onChange={setQuery} placeholder="Buscar en todo el Códice..." />
          {q.length >= 2 && (
            <p className="font-heading text-xs text-codex-gold-dim tracking-wider mt-3">
              {total} resultado{total !== 1 ? 's' : ''} para "{query}"
            </p>
          )}
        </div>

        {/* Type filter chips */}
        {q.length >= 2 && total > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-8">
            <FilterChip
              label="Todos"
              count={total}
              active={activeGroup === 'all'}
              onClick={() => setActiveGroup('all')}
            />
            {GROUP_ORDER.map((key) => {
              const c = counts[key]
              if (c === 0) return null
              return (
                <FilterChip
                  key={key}
                  icon={GROUP_META[key].icon}
                  label={GROUP_META[key].label}
                  count={c}
                  active={activeGroup === key}
                  onClick={() => setActiveGroup(key)}
                />
              )
            })}
          </div>
        )}

        {q.length < 2 && (
          <div className="parchment-panel p-12 text-center max-w-2xl">
            <p className="font-subheading italic text-base text-codex-parchment-dim leading-relaxed mb-4">
              Escribe al menos dos letras para invocar resultados de las páginas del códice.
            </p>
            <p className="font-heading text-[11px] text-codex-gold-dim/70 tracking-wider uppercase">
              Sugerencias rápidas
            </p>
            <div className="flex flex-wrap gap-1.5 justify-center mt-2">
              {['Marika', 'Ranni', 'Árbol Áureo', 'Llama Frenética', 'Crisol', 'Cuchillos Negros'].map((s) => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  className="px-2 py-0.5 text-xs bg-codex-brown/40 text-codex-parchment-dim
                             border border-codex-gold-dim/20 hover:border-codex-gold-dim/40 hover:text-codex-parchment
                             rounded-sm transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {q.length >= 2 && total === 0 && (
          <div className="parchment-panel p-12 text-center max-w-2xl">
            <p className="font-heading text-codex-gold-dim tracking-wider">Sin resultados</p>
            <p className="text-sm text-codex-parchment-dim mt-2">Intenta con otro término o reduce la cadena</p>
          </div>
        )}

        <div className="space-y-8">
          {visible.map((group, idx) => (
            <motion.section
              key={group.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <h2 className="font-heading text-lg text-codex-gold tracking-wider uppercase mb-3
                              pb-1.5 border-b border-codex-gold-dim/30 flex items-center gap-2">
                <span className="text-codex-gold-dim">{GROUP_META[group.key].icon}</span>
                {GROUP_META[group.key].label}
                <span className="text-xs text-codex-gold-dim ml-1">({group.results.length})</span>
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {group.results.map((r) => (
                  <li key={r.to}>
                    <Link
                      to={r.to}
                      className="block parchment-panel p-3.5 hover:border-codex-gold-dim/60 group transition-all"
                    >
                      <p className="font-subheading text-base text-codex-parchment group-hover:text-codex-gold-bright transition-colors">
                        <Highlighted text={r.label} query={query} />
                      </p>
                      {r.sublabel && (
                        <p className="font-body text-xs text-codex-parchment-dim/70 mt-0.5 line-clamp-1">
                          <Highlighted text={r.sublabel} query={query} />
                        </p>
                      )}
                      {r.snippet && (
                        <p className="font-body text-[11px] text-codex-parchment-dim/60 mt-1.5 italic line-clamp-2 border-l-2 border-codex-gold-dim/30 pl-2">
                          <Highlighted text={r.snippet} query={query} />
                        </p>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.section>
          ))}
        </div>
      </div>
    </section>
  )
}

function FilterChip({
  label, count, active, onClick, icon,
}: {
  label: string
  count: number
  active: boolean
  onClick: () => void
  icon?: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 font-heading text-xs tracking-wider uppercase
                  rounded-sm border transition-all
                  ${active
                    ? 'bg-codex-gold/15 border-codex-gold/40 text-codex-gold'
                    : 'bg-codex-brown/30 border-codex-gold-dim/20 text-codex-parchment-dim hover:border-codex-gold-dim/40 hover:text-codex-parchment'
                  }`}
    >
      {icon}
      {label}
      <span className="text-[10px] opacity-70">{count}</span>
    </button>
  )
}
