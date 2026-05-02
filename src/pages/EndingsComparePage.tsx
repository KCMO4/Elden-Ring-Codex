import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SectionHero } from '../components/SectionHero'
import { SectionHeader } from '../components/SectionHeader'
import { CodexImage } from '../components/images/CodexImage'
import { endingsData } from '../data/endings'
import { pathFor } from '../data/lookups'

/* Side-by-side comparison of the 6 endings. Four axes: who leads, the
   precondition / quest required, the immediate consequence, and the
   symbolic meaning. Designed for a horizontal scroll on narrow viewports
   so the reader can quickly contrast all six without losing rows. */

const AXES = [
  { key: 'whoLeads',    label: 'Quien lo desencadena' },
  { key: 'description', label: 'Qué ocurre' },
  { key: 'consequence', label: 'Consecuencia' },
  { key: 'meaning',     label: 'Significado' },
] as const

export function EndingsComparePage() {
  useEffect(() => {
    document.title = 'Comparar finales · Códice'
    return () => { document.title = 'Códice del Orden Fracturado' }
  }, [])

  const [highlighted, setHighlighted] = useState<typeof AXES[number]['key'] | null>(null)

  return (
    <section id="comparar-finales">
      <SectionHero fallbackType="ending-fracture" />
      <div className="codex-section pt-6">
        <SectionHeader
          title="Comparador de Finales"
          subtitle="Las seis eras posibles, lado a lado · Cuatro ejes para contrastar"
        />

        {/* Axis selector — clicking dims the others, focusing reader attention. */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="font-heading text-[10px] text-codex-gold-dim tracking-widest uppercase mr-2">
            Foco:
          </span>
          {AXES.map((a) => {
            const active = highlighted === a.key
            return (
              <button
                key={a.key}
                onClick={() => setHighlighted(active ? null : a.key)}
                className={`px-3 py-1 rounded-sm font-heading text-[10px] tracking-wider uppercase transition-all
                  ${active
                    ? 'bg-codex-gold/15 border border-codex-gold/40 text-codex-gold-bright'
                    : 'bg-codex-brown/30 border border-codex-gold-dim/20 text-codex-parchment-dim hover:text-codex-parchment hover:border-codex-gold-dim/45'
                  }`}
              >
                {a.label}
              </button>
            )
          })}
        </div>

        {/* Horizontal-scrolling table. Each ending is a column; each axis
            is a row. On narrow screens the columns become a snap carousel. */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scroll-smooth">
          <table className="min-w-full border-separate" style={{ borderSpacing: '0 0' }}>
            <thead>
              <tr>
                <th className="sticky left-0 z-10 bg-codex-black/95 backdrop-blur-sm align-bottom p-2 w-32 min-w-[8rem]" />
                {endingsData.map((e, idx) => (
                  <th
                    key={e.id}
                    className="snap-start align-bottom min-w-[260px] md:min-w-[220px] p-2"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="parchment-panel overflow-hidden border"
                      style={{
                        borderColor: e.borderColor?.replace('border-', '') ?? undefined,
                      }}
                    >
                      <Link to={pathFor.ending(e)} className="block group">
                        <div className="relative">
                          <CodexImage
                            alt={e.name}
                            fallbackType={e.fallbackType ?? 'ending-fracture'}
                            variant="card"
                            entityCategory="endings"
                            entityId={e.id}
                            overlayOpacity={0.4}
                            hoverZoom
                          />
                        </div>
                        <div className="p-3 text-left">
                          <span className="block font-heading text-2xl mb-1" style={{ color: e.accentColor }}>
                            {e.icon}
                          </span>
                          <h3
                            className="font-heading text-sm leading-tight group-hover:text-glow transition-all"
                            style={{ color: e.accentColor }}
                          >
                            {e.name}
                          </h3>
                          <p className="font-body text-[10px] text-codex-parchment-dim/65 mt-1 line-clamp-2 leading-snug italic">
                            {e.subtitle ?? ''}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {AXES.map((axis) => {
                const dim = highlighted !== null && highlighted !== axis.key
                return (
                  <tr key={axis.key} className={`transition-opacity ${dim ? 'opacity-30' : 'opacity-100'}`}>
                    <th
                      scope="row"
                      className="sticky left-0 z-10 bg-codex-black/95 backdrop-blur-sm align-top p-3 text-left w-32 min-w-[8rem]"
                    >
                      <p className="font-heading text-[10px] text-codex-gold-dim tracking-widest uppercase leading-snug">
                        {axis.label}
                      </p>
                    </th>
                    {endingsData.map((e) => (
                      <td
                        key={`${e.id}:${axis.key}`}
                        className="snap-start align-top p-3 min-w-[260px] md:min-w-[220px] border-t border-codex-gold-dim/15"
                      >
                        <p className="font-body text-sm text-codex-parchment-dim leading-relaxed">
                          {e[axis.key]}
                        </p>
                      </td>
                    ))}
                  </tr>
                )
              })}
              {/* Footer row: "ver detalle" CTAs */}
              <tr>
                <th
                  scope="row"
                  className="sticky left-0 z-10 bg-codex-black/95 backdrop-blur-sm p-3 w-32 min-w-[8rem]"
                />
                {endingsData.map((e) => (
                  <td key={`${e.id}:link`} className="p-3 min-w-[260px] md:min-w-[220px] border-t border-codex-gold-dim/15">
                    <Link
                      to={pathFor.ending(e)}
                      className="inline-flex items-center gap-1 font-heading text-[10px] tracking-wider uppercase text-codex-gold/80 hover:text-codex-gold-bright transition-colors group"
                    >
                      Ver ficha completa
                      <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-center font-body text-[11px] text-codex-parchment-dim/55 italic mt-6 max-w-2xl mx-auto">
          No hay un final correcto — solo respuestas distintas a la misma
          pregunta cosmológica. Pasa el cursor sobre los ejes para enfocar la
          comparación.
        </p>
      </div>
    </section>
  )
}
