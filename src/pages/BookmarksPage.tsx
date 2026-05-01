import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Trash2, BookmarkX } from 'lucide-react'
import { SectionHero } from '../components/SectionHero'
import { SectionHeader } from '../components/SectionHeader'
import { useBookmarks } from '../lib/bookmarks'
import {
  findCharacter, findFaction, findRegion, findConcept, findTimelineEntry, findEnding,
  pathFor,
} from '../data/lookups'
import type { EntityType } from '../data/types'

interface ResolvedItem {
  type: EntityType
  slug: string
  to: string
  label: string
  sublabel?: string
  addedAt: number
}

const TYPE_LABEL: Record<EntityType, string> = {
  character: 'Personaje',
  region: 'Región',
  faction: 'Facción',
  concept: 'Concepto',
  timeline: 'Evento',
  ending: 'Final',
}

/** Canonical display order for bookmark sections. */
const TYPE_ORDER: EntityType[] = ['character', 'region', 'faction', 'concept', 'timeline', 'ending']

function resolve(type: EntityType, slug: string): { to: string; label: string; sublabel?: string } | null {
  switch (type) {
    case 'character': {
      const e = findCharacter(slug)
      return e ? { to: pathFor.character(e), label: e.name, sublabel: e.role } : null
    }
    case 'region': {
      const e = findRegion(slug)
      return e ? { to: pathFor.region(e), label: e.name, sublabel: e.mainFaction } : null
    }
    case 'faction': {
      const e = findFaction(slug)
      return e ? { to: pathFor.faction(e), label: e.name } : null
    }
    case 'concept': {
      const e = findConcept(slug)
      return e ? { to: pathFor.concept(e), label: e.term } : null
    }
    case 'timeline': {
      const e = findTimelineEntry(slug)
      return e ? { to: pathFor.timeline(e), label: e.title, sublabel: e.chapter } : null
    }
    case 'ending': {
      const e = findEnding(slug)
      return e ? { to: pathFor.ending(e), label: e.name } : null
    }
  }
}

export function BookmarksPage() {
  const { items, remove } = useBookmarks()

  useEffect(() => { document.title = 'Favoritos · Códice' }, [])

  const resolved: ResolvedItem[] = useMemo(() => {
    return items
      .map((b) => {
        const r = resolve(b.type, b.slug)
        if (!r) return null
        return { type: b.type, slug: b.slug, addedAt: b.addedAt, ...r }
      })
      .filter((x): x is ResolvedItem => x !== null)
  }, [items])

  const grouped = useMemo(() => {
    const map: Record<string, ResolvedItem[]> = {}
    for (const it of resolved) {
      if (!map[it.type]) map[it.type] = []
      map[it.type].push(it)
    }
    return map
  }, [resolved])

  return (
    <section id="favoritos">
      <SectionHero fallbackType="cosmic" />
      <div className="codex-section pt-6">
        <SectionHeader
          title="Favoritos"
          subtitle={resolved.length === 0
            ? 'Aún no has guardado entradas'
            : `${resolved.length} entrada${resolved.length === 1 ? '' : 's'} guardada${resolved.length === 1 ? '' : 's'}`}
        />

        {resolved.length === 0 ? (
          <div className="parchment-panel p-12 text-center max-w-2xl">
            <BookmarkX size={32} className="mx-auto text-codex-gold-dim mb-4" />
            <p className="font-subheading italic text-base text-codex-parchment-dim leading-relaxed">
              Marca cualquier entrada con el botón <strong className="text-codex-gold">Guardar</strong> y aparecerá aquí.
              Tus favoritos se almacenan en tu navegador — no salen de tu equipo.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {TYPE_ORDER.filter((t) => grouped[t]?.length).map((type, gi) => (
              <motion.section
                key={type}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: gi * 0.04 }}
              >
                <h2 className="font-heading text-lg text-codex-gold tracking-wider uppercase mb-3
                                pb-1.5 border-b border-codex-gold-dim/30">
                  {TYPE_LABEL[type]}
                  <span className="text-xs text-codex-gold-dim ml-2">({grouped[type].length})</span>
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {grouped[type].map((it) => (
                    <li key={`${it.type}:${it.slug}`} className="relative group">
                      <Link
                        to={it.to}
                        className="block parchment-panel p-3.5 hover:border-codex-gold-dim/60 transition-all pr-12"
                      >
                        <p className="font-subheading text-base text-codex-parchment group-hover:text-codex-gold-bright transition-colors">
                          {it.label}
                        </p>
                        {it.sublabel && (
                          <p className="font-body text-xs text-codex-parchment-dim/70 mt-0.5">
                            {it.sublabel}
                          </p>
                        )}
                      </Link>
                      <button
                        onClick={() => remove(it.type, it.slug)}
                        aria-label={`Quitar ${it.label} de favoritos`}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-sm
                                   text-codex-parchment-dim/50 hover:text-codex-gold hover:bg-codex-brown/40
                                   transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                      >
                        <Trash2 size={14} />
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.section>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
