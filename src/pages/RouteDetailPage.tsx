import { useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, BookOpen, MapPin } from 'lucide-react'
import { SectionHero } from '../components/SectionHero'
import { findRoute, type NarrativeRoute, type RouteStop } from '../data/narrativeRoutes'
import { entityTypePath } from '../data/lookups'
import {
  charactersData, regionsData, factionsData, glossaryData, timelineData,
} from '../data'
import { endingsData } from '../data/endings'

const accentClasses: Record<string, { border: string; text: string; bg: string; glow: string }> = {
  gold:     { border: 'border-codex-gold/40',  text: 'text-codex-gold',     bg: 'bg-codex-gold/5',  glow: 'rgba(197,160,89,0.2)' },
  order:    { border: 'border-amber-500/40',   text: 'text-amber-400',      bg: 'bg-amber-500/5',   glow: 'rgba(245,158,11,0.2)' },
  dusk:     { border: 'border-blue-500/40',    text: 'text-blue-300',       bg: 'bg-blue-500/5',    glow: 'rgba(59,130,246,0.2)' },
  frenzied: { border: 'border-yellow-600/40',  text: 'text-yellow-400',     bg: 'bg-yellow-600/5',  glow: 'rgba(202,138,4,0.2)' },
  stars:    { border: 'border-purple-500/40',  text: 'text-purple-300',     bg: 'bg-purple-500/5',  glow: 'rgba(168,85,247,0.2)' },
  despair:  { border: 'border-red-700/40',     text: 'text-red-400',        bg: 'bg-red-700/5',     glow: 'rgba(185,28,28,0.2)' },
}

function resolveStopName(stop: RouteStop): string {
  switch (stop.type) {
    case 'character': return charactersData.find((c) => c.id === stop.slug || c.slug === stop.slug)?.name ?? stop.slug
    case 'region':    return regionsData.find((r) => r.id === stop.slug || r.slug === stop.slug)?.name ?? stop.slug
    case 'faction':   return factionsData.find((f) => f.id === stop.slug || f.slug === stop.slug)?.name ?? stop.slug
    case 'concept':   return glossaryData.find((g) => g.id === stop.slug || g.slug === stop.slug)?.term ?? stop.slug
    case 'timeline':  return timelineData.find((t) => t.id === stop.slug || t.slug === stop.slug)?.title ?? stop.slug
    case 'ending':    return endingsData.find((e) => e.id === stop.slug || e.slug === stop.slug)?.name ?? stop.slug
  }
}

const typeLabels: Record<string, string> = {
  character: 'Personaje',
  region:    'Región',
  faction:   'Facción',
  concept:   'Concepto',
  timeline:  'Evento',
  ending:    'Final',
}

export function RouteDetailPage() {
  const { id } = useParams<{ id: string }>()
  const route = id ? findRoute(id) : undefined
  if (!route) return <Navigate to="/rutas" replace />
  /* `key={route.id}` forces React to remount RouteContent when navigating
     between routes, naturally resetting `activeIndex` to 0 without an extra
     useEffect that would briefly render the old stop with the new route. */
  return <RouteContent key={route.id} route={route} />
}

function RouteContent({ route }: { route: NarrativeRoute }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    document.title = `${route.title} · Códice`
    return () => { document.title = 'Códice del Orden Fracturado' }
  }, [route.title])

  const accent = accentClasses[route.accent]
  const currentStop = route.stops[activeIndex]
  const stopName = resolveStopName(currentStop)
  const stopHref = entityTypePath(currentStop.type, currentStop.slug)

  return (
    <article>
      <SectionHero fallbackType="cosmic" />

      <div className="codex-section pt-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-xs font-heading tracking-wider uppercase text-codex-parchment-dim/80 mb-4" aria-label="Breadcrumbs">
          <Link to="/" className="hover:text-codex-gold-bright transition-colors">Códice</Link>
          <ChevronRight size={11} className="opacity-50" />
          <Link to="/rutas" className="hover:text-codex-gold-bright transition-colors">Rutas Narrativas</Link>
          <ChevronRight size={11} className="opacity-50" />
          <span className="text-codex-parchment">{route.title}</span>
        </nav>

        {/* Header */}
        <div className={`parchment-panel p-6 md:p-8 mb-8 border ${accent.border}`} style={{ boxShadow: `0 0 40px ${accent.glow}` }}>
          <h1 className={`font-heading text-3xl md:text-4xl ${accent.text} leading-tight mb-2`}>
            {route.title}
          </h1>
          <p className="font-subheading italic text-lg text-codex-parchment-dim mb-4">
            {route.subtitle}
          </p>
          <p className="font-body text-base text-codex-parchment leading-relaxed mb-4">
            {route.description}
          </p>
          <p className="font-subheading italic text-base text-codex-parchment-dim/80 leading-relaxed border-l-2 border-codex-gold-dim/40 pl-4">
            "{route.poeticIntro}"
          </p>
        </div>

        {/* Stepper progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <p className="font-heading text-xs text-codex-gold-dim tracking-wider uppercase">
              Paso {activeIndex + 1} de {route.stops.length}
            </p>
            <p className="font-heading text-xs text-codex-parchment-dim/60 tracking-wider uppercase">
              {Math.round(((activeIndex + 1) / route.stops.length) * 100)} %
            </p>
          </div>
          <div className="h-1 bg-codex-brown/40 rounded-full overflow-hidden">
            <motion.div
              className={`h-full ${accent.bg} border-r-2 ${accent.border}`}
              style={{ background: accent.glow }}
              initial={false}
              animate={{ width: `${((activeIndex + 1) / route.stops.length) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        {/* Two-column: stop detail + stops list */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
          {/* Current stop card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className={`parchment-panel p-6 md:p-8 border ${accent.border}`}
            >
              <p className={`font-heading text-xs ${accent.text} tracking-widest uppercase mb-2`}>
                {typeLabels[currentStop.type]}
              </p>
              <h2 className="font-heading text-3xl text-codex-gold-bright leading-tight mb-5">
                {stopName}
              </h2>

              <div className="font-body text-base text-codex-parchment leading-loose mb-6 italic">
                {currentStop.why}
              </div>

              <Link
                to={stopHref}
                className={`inline-flex items-center gap-2 px-5 py-2.5 ${accent.bg} border ${accent.border} ${accent.text}
                  font-heading text-sm tracking-wider uppercase rounded-sm hover:opacity-80 transition-opacity`}
              >
                <BookOpen size={14} />
                Leer página completa
              </Link>

              {/* Prev/Next nav */}
              <nav className="mt-8 pt-4 border-t border-codex-gold-dim/15 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
                  disabled={activeIndex === 0}
                  className="flex items-center gap-2 px-4 py-2 font-heading text-xs tracking-wider uppercase text-codex-parchment-dim hover:text-codex-gold-bright disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={12} /> Anterior
                </button>
                <button
                  onClick={() => setActiveIndex((i) => Math.min(route.stops.length - 1, i + 1))}
                  disabled={activeIndex === route.stops.length - 1}
                  className="flex items-center gap-2 px-4 py-2 font-heading text-xs tracking-wider uppercase text-codex-parchment-dim hover:text-codex-gold-bright disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  Siguiente <ChevronRight size={12} />
                </button>
              </nav>
            </motion.div>
          </AnimatePresence>

          {/* Stops list sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="parchment-panel p-4">
              <p className={`font-heading text-xs ${accent.text} tracking-wider uppercase mb-3 flex items-center gap-1.5`}>
                <MapPin size={11} />
                Itinerario completo
              </p>
              <ol className="space-y-1.5">
                {route.stops.map((stop, i) => {
                  const name = resolveStopName(stop)
                  const isActive = i === activeIndex
                  return (
                    <li key={`${stop.type}-${stop.slug}-${i}`}>
                      <button
                        onClick={() => setActiveIndex(i)}
                        className={`w-full text-left flex items-start gap-2 px-2.5 py-1.5 rounded-sm transition-colors
                          ${isActive
                            ? `${accent.bg} ${accent.text}`
                            : 'text-codex-parchment-dim hover:text-codex-parchment hover:bg-codex-brown/20'
                          }`}
                      >
                        <span className={`shrink-0 font-heading text-[10px] tracking-wider mt-0.5 ${isActive ? accent.text : 'text-codex-parchment-dim/50'}`}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className={`block font-subheading text-sm leading-snug ${isActive ? 'font-semibold' : ''}`}>
                            {name}
                          </span>
                          <span className="block text-[10px] text-codex-parchment-dim/60 uppercase tracking-wider font-heading mt-0.5">
                            {typeLabels[stop.type]}
                          </span>
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </article>
  )
}
