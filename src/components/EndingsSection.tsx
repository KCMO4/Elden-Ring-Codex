import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { SectionHero } from './SectionHero'
import { CodexImage } from './images/CodexImage'
import { endingsData } from '../data/endings'
import { pathFor } from '../data/lookups'

export function EndingsSection() {
  return (
    <section id="finales">
      <SectionHero fallbackType="ending-fracture" />

      <div className="codex-section pt-6">
        <SectionHeader
          title="Los Finales"
          subtitle="Las seis eras que el Mancillado puede instaurar"
          poeticIntro="No hay final correcto. Solo diferentes respuestas a la misma pregunta: si tuvieras el poder de definir una era, ¿qué elegirías?"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {endingsData.map((ending, i) => (
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
                  >
                    <div className="p-4 pt-6">
                      <div className="flex items-end gap-3">
                        <span
                          className="text-3xl leading-none"
                          style={{
                            color: ending.accentColor,
                            fontFamily: 'Cinzel, serif',
                            textShadow: `0 0 12px ${ending.accentColor}`,
                          }}
                        >
                          {ending.icon}
                        </span>
                        <h3
                          className="font-heading text-lg leading-tight drop-shadow-lg"
                          style={{
                            color: ending.accentColor,
                            textShadow: '0 2px 8px rgba(0,0,0,0.95)',
                          }}
                        >
                          {ending.name}
                        </h3>
                      </div>
                    </div>
                  </CodexImage>

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
                  <p className="text-sm text-codex-parchment-dim leading-relaxed mb-3 line-clamp-3">
                    {ending.description}
                  </p>

                  <div
                    className="p-3 rounded-sm"
                    style={{
                      background: ending.bgColor,
                      borderLeft: `2px solid ${(ending.accentColor ?? '#c5a059')}50`,
                    }}
                  >
                    <p className="font-subheading italic text-sm text-codex-parchment-dim/80 leading-relaxed line-clamp-2">
                      {ending.meaning}
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
