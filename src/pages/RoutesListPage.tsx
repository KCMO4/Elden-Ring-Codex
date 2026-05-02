import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SectionHeader } from '../components/SectionHeader'
import { SectionHero } from '../components/SectionHero'
import { narrativeRoutes } from '../data/narrativeRoutes'
import { EnrichedText } from '../components/RichLoreText'

const accentClasses: Record<string, { border: string; text: string; bg: string }> = {
  gold:     { border: 'border-codex-gold/40',    text: 'text-codex-gold',         bg: 'bg-codex-gold/5' },
  order:    { border: 'border-amber-500/40',    text: 'text-amber-400',          bg: 'bg-amber-500/5' },
  dusk:     { border: 'border-blue-500/40',     text: 'text-blue-300',           bg: 'bg-blue-500/5' },
  frenzied: { border: 'border-yellow-600/40',   text: 'text-yellow-400',         bg: 'bg-yellow-600/5' },
  stars:    { border: 'border-purple-500/40',   text: 'text-purple-300',         bg: 'bg-purple-500/5' },
  despair:  { border: 'border-red-700/40',      text: 'text-red-400',            bg: 'bg-red-700/5' },
}

export function RoutesListPage() {
  return (
    <section id="rutas">
      <SectionHero fallbackType="cosmic" />

      <div className="codex-section pt-6">
        <SectionHeader
          title="Rutas Narrativas del Códice"
          subtitle="Lecturas guiadas a través del lore"
          poeticIntro="No hay un solo orden para entender las Tierras Intermedias. Cada ruta cose entidades dispersas en una sola voz coherente — el camino que esa voz recorrió antes de convertirse en final."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {narrativeRoutes.map((route, i) => {
            const accent = accentClasses[route.accent]
            return (
              <motion.article
                key={route.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to={`/rutas/${route.id}`}
                  className={`block parchment-panel p-6 group transition-all duration-300
                    border ${accent.border} ${accent.bg}
                    hover:shadow-[0_0_30px_rgba(197,160,89,0.15)]`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className={`font-heading text-2xl ${accent.text} leading-tight mb-1`}>
                        {route.title}
                      </h3>
                      <p className="font-subheading italic text-sm text-codex-parchment-dim leading-snug">
                        {route.subtitle}
                      </p>
                    </div>
                    <span className={`shrink-0 font-heading text-xs ${accent.text} tracking-wider uppercase mt-1`}>
                      {route.stops.length} paradas
                    </span>
                  </div>

                  <p className="font-body text-sm text-codex-parchment leading-relaxed mb-4 line-clamp-3">
                    <EnrichedText text={route.description} />
                  </p>

                  <p className="font-subheading italic text-sm text-codex-parchment-dim/70 leading-relaxed border-l-2 border-codex-gold-dim/30 pl-3">
                    "{route.poeticIntro}"
                  </p>

                  <div className="mt-4 pt-3 border-t border-codex-gold-dim/15 flex items-center justify-end">
                    <span className={`font-heading text-xs tracking-wider uppercase ${accent.text} group-hover:opacity-80 transition-opacity`}>
                      Comenzar lectura →
                    </span>
                  </div>
                </Link>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
