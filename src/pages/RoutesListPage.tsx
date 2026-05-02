import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SectionHeader } from '../components/SectionHeader'
import { SectionHero } from '../components/SectionHero'
import { narrativeRoutes } from '../data/narrativeRoutes'
import { EnrichedText } from '../components/RichLoreText'

/* Tokens mapped to codex-* CSS-var palette so light mode adapts.
   Tailwind palette colors (amber-400, blue-300, etc.) were dark-tuned and
   washed out on the cream background. */
const accentClasses: Record<string, { border: string; text: string; bg: string }> = {
  gold:     { border: 'border-codex-gold/40',     text: 'text-codex-gold',        bg: 'bg-codex-gold/5' },
  order:    { border: 'border-codex-gold-dim/40', text: 'text-codex-gold-dim',    bg: 'bg-codex-gold-dim/5' },
  dusk:     { border: 'border-codex-ghost/40',    text: 'text-codex-ghost',       bg: 'bg-codex-ghost/5' },
  frenzied: { border: 'border-codex-flame/40',    text: 'text-codex-flame',       bg: 'bg-codex-flame/5' },
  stars:    { border: 'border-codex-rot/40',      text: 'text-codex-rot',         bg: 'bg-codex-rot/5' },
  despair:  { border: 'border-codex-crimson/40',  text: 'text-codex-crimson',     bg: 'bg-codex-crimson/5' },
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
