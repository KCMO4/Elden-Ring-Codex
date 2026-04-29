import { useEffect, useMemo, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SectionHeader } from '../components/SectionHeader'
import { SectionHero } from '../components/SectionHero'
import { SearchBar } from '../components/SearchBar'
import { charactersData, factionsData, regionsData, glossaryData, timelineData } from '../data'
import { endingsData } from '../data/endings'
import { pathFor } from '../data/lookups'

export function SearchPage() {
  const [params, setParams] = useSearchParams()
  const initial = params.get('q') ?? ''
  const [query, setQuery] = useState(initial)

  useEffect(() => {
    if (query) setParams({ q: query }, { replace: true })
    else setParams({}, { replace: true })
  }, [query, setParams])

  useEffect(() => { document.title = 'Búsqueda · Códice' }, [])

  const q = query.trim().toLowerCase()
  const groups = useMemo(() => {
    if (q.length < 2) return []
    return [
      {
        label: 'Personajes',
        results: charactersData
          .filter((c) =>
            c.name.toLowerCase().includes(q) ||
            c.role.toLowerCase().includes(q) ||
            c.faction.toLowerCase().includes(q) ||
            (c.summary?.toLowerCase().includes(q) ?? false)
          )
          .map((c) => ({ to: pathFor.character(c), label: c.name, sublabel: c.role })),
      },
      {
        label: 'Regiones',
        results: regionsData
          .filter((r) =>
            r.name.toLowerCase().includes(q) ||
            r.historical.toLowerCase().includes(q) ||
            r.mainFaction.toLowerCase().includes(q)
          )
          .map((r) => ({ to: pathFor.region(r), label: r.name, sublabel: r.mainFaction })),
      },
      {
        label: 'Facciones',
        results: factionsData
          .filter((f) =>
            f.name.toLowerCase().includes(q) ||
            f.what.toLowerCase().includes(q) ||
            f.belief.toLowerCase().includes(q)
          )
          .map((f) => ({ to: pathFor.faction(f), label: f.name, sublabel: f.what.slice(0, 80) + '…' })),
      },
      {
        label: 'Conceptos',
        results: glossaryData
          .filter((g) =>
            g.term.toLowerCase().includes(q) ||
            g.definition.toLowerCase().includes(q)
          )
          .map((g) => ({ to: pathFor.concept(g), label: g.term, sublabel: g.definition.slice(0, 80) + '…' })),
      },
      {
        label: 'Timeline',
        results: timelineData
          .filter((t) =>
            t.title.toLowerCase().includes(q) ||
            t.lore.some((p) => p.toLowerCase().includes(q))
          )
          .map((t) => ({ to: pathFor.timeline(t), label: t.title, sublabel: t.chapter })),
      },
      {
        label: 'Finales',
        results: endingsData
          .filter((e) =>
            e.name.toLowerCase().includes(q) ||
            e.description.toLowerCase().includes(q)
          )
          .map((e) => ({ to: pathFor.ending(e), label: e.name, sublabel: e.whoLeads })),
      },
    ].filter((g) => g.results.length > 0)
  }, [q])

  const total = groups.reduce((sum, g) => sum + g.results.length, 0)

  return (
    <section id="busqueda">
      <SectionHero fallbackType="cosmic" />

      <div className="codex-section pt-6">
        <SectionHeader title="Búsqueda en el Códice" subtitle="Cruza el lore por nombre o palabra clave" />

        <div className="max-w-2xl mb-8">
          <SearchBar value={query} onChange={setQuery} placeholder="Buscar en todo el Códice..." />
          {q.length >= 2 && (
            <p className="font-heading text-xs text-codex-gold-dim tracking-wider mt-3">
              {total} resultado{total !== 1 ? 's' : ''} para "{query}"
            </p>
          )}
        </div>

        {q.length < 2 && (
          <div className="parchment-panel p-12 text-center max-w-2xl">
            <p className="font-subheading italic text-base text-codex-parchment-dim leading-relaxed">
              Escribe al menos dos letras para invocar resultados de las páginas del códice.
            </p>
          </div>
        )}

        {q.length >= 2 && total === 0 && (
          <div className="parchment-panel p-12 text-center max-w-2xl">
            <p className="font-heading text-codex-gold-dim tracking-wider">Sin resultados</p>
            <p className="text-sm text-codex-parchment-dim mt-2">Intenta con otro término</p>
          </div>
        )}

        <div className="space-y-8">
          {groups.map((group, idx) => (
            <motion.section
              key={group.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <h2 className="font-heading text-lg text-codex-gold tracking-wider uppercase mb-3
                              pb-1.5 border-b border-codex-gold-dim/30">
                {group.label} <span className="text-xs text-codex-gold-dim">({group.results.length})</span>
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {group.results.map((r) => (
                  <li key={r.to}>
                    <Link
                      to={r.to}
                      className="block parchment-panel p-3.5 hover:border-codex-gold-dim/60 group transition-all"
                    >
                      <p className="font-subheading text-base text-codex-parchment group-hover:text-codex-gold-bright transition-colors">
                        {r.label}
                      </p>
                      {r.sublabel && (
                        <p className="font-body text-xs text-codex-parchment-dim/70 mt-0.5 line-clamp-1">
                          {r.sublabel}
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
