import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { SectionHero } from './SectionHero'
import { CodexImage } from './images/CodexImage'
import { endingsData } from '../data/endings'
import { pathFor } from '../data/lookups'
import { EnrichedText } from './RichLoreText'
import { useEntityFilter } from '../lib/expansion'

export function EndingsSection() {
  const { visible: byExpansion } = useEntityFilter()
  const filtered = byExpansion(endingsData)
  return (
    <section id="finales">
      <SectionHero fallbackType="ending-fracture" />

      <div className="codex-section pt-6">
        <SectionHeader
          asPageHeading
          title="Los Finales"
          subtitle="Las seis eras que el Tarnished puede instaurar"
          poeticIntro="No hay final correcto. Solo diferentes respuestas a la misma pregunta: si tuvieras el poder de definir una era, ¿qué elegirías?"
          readingCategory="finales"
        />

        {/* Quick CTA to side-by-side comparison */}
        <div className="flex justify-center mb-8">
          <Link
            to="/finales/comparar"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-sm
                       bg-codex-brown/40 border border-codex-gold-dim/30
                       font-heading text-xs tracking-wider uppercase text-codex-gold-dim
                       hover:border-codex-gold-dim/60 hover:text-codex-gold-bright transition-all"
          >
            Comparar lado a lado →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((ending, i) => (
            <motion.article
              key={ending.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={pathFor.ending(ending)}
                className={`block parchment-panel overflow-hidden group transition-all duration-300
                  ${ending.borderColor ?? 'border-codex-gold-dim/30'}
                  hover:shadow-[0_0_25px_rgba(197,160,89,0.15)]`}
              >
                <div className="relative">
                  <CodexImage
                    alt={ending.name}
                    fallbackType={ending.fallbackType ?? 'ending-fracture'}
                    variant="card"
                    entityCategory="endings"
                    entityId={ending.id}
                    overlayOpacity={0.4}
                    hoverZoom
                  />
                  <span
                    className="absolute top-2 left-2 text-2xl leading-none z-10"
                    style={{
                      color: ending.accentColor,
                      fontFamily: 'Cinzel, serif',
                      textShadow: `0 0 12px ${ending.accentColor}, 0 2px 6px rgba(0,0,0,0.9)`,
                    }}
                  >
                    {ending.icon}
                  </span>

                  <div
                    className="absolute top-2 left-2 w-3 h-3 border-l border-t pointer-events-none"
                    style={{ borderColor: (ending.accentColor ?? '#c5a059') + '60' }}
                  />
                  <div
                    className="absolute top-2 right-2 w-3 h-3 border-r border-t pointer-events-none"
                    style={{ borderColor: (ending.accentColor ?? '#c5a059') + '60' }}
                  />
                </div>

                <div className="p-4">
                  <h3
                    className="font-heading text-base leading-tight mb-3"
                    style={{
                      color: ending.accentColor,
                      /* Subtle text-shadow keeps the unique accentColor legible
                         on the cream background of light mode. */
                      textShadow: '0 1px 0 rgb(var(--codex-black) / 0.15)',
                    }}
                  >
                    {ending.name}
                  </h3>
                  <p className="text-sm text-codex-parchment-dim leading-relaxed mb-3 line-clamp-3">
                    <EnrichedText text={ending.description} selfId={ending.id} />
                  </p>

                  <div
                    className="p-3 rounded-sm"
                    style={{
                      background: ending.bgColor,
                      borderLeft: `2px solid ${(ending.accentColor ?? '#c5a059')}50`,
                    }}
                  >
                    <p className="font-subheading italic text-sm text-codex-parchment-dim/80 leading-relaxed line-clamp-2">
                      <EnrichedText text={ending.meaning} selfId={ending.id} />
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-codex-gold-dim/15 flex justify-end">
                    <span className="font-heading text-xs tracking-wider uppercase text-codex-gold-dim group-hover:text-codex-gold transition-colors">
                      Leer más →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
