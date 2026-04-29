import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { CodexImage } from './images/CodexImage'
import { RuneSeparator } from './illustrations/RuneSeparator'
import { getEndingArt } from '../lib/assetPaths'
import type { FallbackType } from '../data/types'

interface Ending {
  id: string
  name: string
  icon: string
  accentColor: string
  borderColor: string
  bgGlow: string
  fallback: FallbackType
  description: string
  meaning: string
  whoLeads: string
  consequence: string
  atmosphere: string
}

const endings: Ending[] = [
  {
    id: 'fracture',
    name: 'Era de la Fractura',
    icon: '◈',
    accentColor: '#c5a059',
    borderColor: 'border-codex-gold/40',
    bgGlow: 'rgba(197,160,89,0.12)',
    fallback: 'ending-fracture',
    description: 'El Mancillado repara el Elden Ring con las Grandes Runas y se convierte en Señor Elden. El ciclo de la Voluntad Mayor continúa bajo una nueva mano.',
    meaning: 'La restauración sin cuestionamiento. El mundo vuelve a funcionar — pero las mismas contradicciones que lo rompieron permanecen intactas bajo el dorado.',
    whoLeads: 'Mancillado guiado por los Dos Dedos',
    consequence: 'El Orden Dorado restaurado en su forma más básica. Un Señor Elden en el trono, el árbol brillando, la gracia fluyendo. Hasta la próxima fractura.',
    atmosphere: 'Dorado envejecido. Trono agrietado. Anillo restaurado pero marcado por las fisuras.',
  },
  {
    id: 'order',
    name: 'Era del Orden',
    icon: '⊕',
    accentColor: '#d4aa3a',
    borderColor: 'border-amber-600/40',
    bgGlow: 'rgba(212,170,58,0.12)',
    fallback: 'ending-order',
    description: 'Con la guía de Goldmask, se instauran las leyes perfectas de la Ley Mayor. El Orden más puro y simétrico posible.',
    meaning: 'La perfección fría. Un orden sin grietas — y sin humanidad. La máxima expresión del absolutismo que el Orden Dorado siempre quiso ser.',
    whoLeads: 'Mancillado + Goldmask el monje ascético',
    consequence: 'Las leyes del cosmos se vuelven perfectamente coherentes. Sin excepciones, sin misericordia, sin espacio para lo que no encaja en el mandala dorado.',
    atmosphere: 'Círculos perfectos. Dorado brillante. Frialdad geométrica. Sin sombras.',
  },
  {
    id: 'duskborn',
    name: 'Era del Crepúsculo',
    icon: '☽',
    accentColor: '#6080b0',
    borderColor: 'border-blue-700/40',
    bgGlow: 'rgba(96,128,176,0.12)',
    fallback: 'ending-dusk',
    description: 'Fia restaura un Elden Ring que incluye la Muerte Predestinada. Los muertos pueden morir verdaderamente y el mundo puede exhalar.',
    meaning: 'La era más melancólica — y quizás la más misericordiosa. Permite que quienes sufren descansen, que lo que murió permanezca muerto.',
    whoLeads: 'Mancillado + Fia la Guardiana de Muertos',
    consequence: 'La inmortalidad artificial del Orden Dorado termina. Los seres pueden morir definitivamente. Es un mundo más frágil, pero más honesto con su naturaleza.',
    atmosphere: 'Azul crepuscular. Raíces de muerte. Paz de lo que finalmente descansa.',
  },
  {
    id: 'despair',
    name: 'Bendición de la Desesperación',
    icon: '⚕',
    accentColor: '#8a2a1a',
    borderColor: 'border-red-900/50',
    bgGlow: 'rgba(138,42,26,0.15)',
    fallback: 'ending-despair',
    description: 'El Dung Eater corrompe el Elden Ring con su sello carmesí. Toda la humanidad queda maldita para siempre.',
    meaning: 'El horror sin redención. No hay filosofía aquí — solo la victoria de algo que genuinamente desea el sufrimiento universal como estado permanente.',
    whoLeads: 'Mancillado + Dung Eater',
    consequence: 'La existencia se convierte en agonía perpetua para todos los seres del Interregno. El mal triunfa no por necesidad cosmológica sino por elección deliberada.',
    atmosphere: 'Rojo-marrón corrupto. Marcas malditas. Carne desfigurada. Sin esperanza.',
  },
  {
    id: 'frenzied-flame',
    name: 'Señor de la Llama Frenética',
    icon: '◉',
    accentColor: '#d4aa3a',
    borderColor: 'border-yellow-700/40',
    bgGlow: 'rgba(212,170,58,0.15)',
    fallback: 'ending-frenzied',
    description: 'El Mancillado absorbe la Llama Frenética y quema el Interregno entero, borrando toda separación entre seres.',
    meaning: 'El nihilismo cósmico consumado. La respuesta más radical a si el Orden merece existir: quemarlo todo, incluyendo lo alternativo.',
    whoLeads: 'Mancillado solo — los Tres Dedos',
    consequence: 'El mundo se convierte en océano dorado caótico. La individualidad desaparece. Si Melina sobrevivió, jura frría venganza desde la oscuridad.',
    atmosphere: 'Amarillo caótico. Llamas que borran formas. Todo se vuelve una sola cosa ardiente.',
  },
  {
    id: 'age-of-stars',
    name: 'Era de las Estrellas',
    icon: '✦',
    accentColor: '#9070d0',
    borderColor: 'border-purple-800/40',
    bgGlow: 'rgba(144,112,208,0.12)',
    fallback: 'ending-stars',
    description: 'Ranni usa el Elden Ring para instaurar una era donde la luna oscura reemplaza la ley de la Voluntad Mayor.',
    meaning: 'La libertad incierta. Un cosmos más frío y distante, sin la guía cálida del árbol. ¿Es mejor la incertidumbre libre que el control compasivo?',
    whoLeads: 'Mancillado + Ranni la Bruja',
    consequence: 'La Voluntad Mayor pierde su influencia. El Mancillado parte con Ranni entre las estrellas. El Interregno queda libre — y completamente solo.',
    atmosphere: 'Azul violeta profundo. Estrellas frías. Luna plateada. Silencio del vacío.',
  },
]

export function EndingsSection() {
  const [selected, setSelected] = useState<Ending | null>(null)

  return (
    <section className="codex-section" id="finales">
      <SectionHeader
        title="Los Finales"
        subtitle="Las seis eras que el Mancillado puede instaurar"
        poeticIntro="No hay final correcto. Solo diferentes respuestas a la misma pregunta: si tuvieras el poder de definir una era, ¿qué elegirías?"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        {endings.map((ending, i) => (
          <motion.article
            key={ending.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            onClick={() => setSelected(selected?.id === ending.id ? null : ending)}
            className={`parchment-panel overflow-hidden cursor-pointer group transition-all duration-300
              ${ending.borderColor}
              ${selected?.id === ending.id
                ? `shadow-[0_0_40px_${ending.bgGlow}]`
                : 'hover:shadow-[0_0_25px_rgba(197,160,89,0.1)]'
              }`}
            style={selected?.id === ending.id ? { boxShadow: `0 0 40px ${ending.bgGlow}` } : undefined}
          >
            {/* Artwork */}
            <div className="relative">
              <CodexImage
                src={getEndingArt(ending.id)}
                alt={ending.name}
                fallbackType={ending.fallback}
                variant="card"
                overlayOpacity={0.4}
                hoverZoom
              >
                <div className="p-4 pt-6">
                  <div className="flex items-end gap-3">
                    <span className="text-3xl leading-none" style={{ color: ending.accentColor, fontFamily: 'Cinzel, serif', textShadow: `0 0 12px ${ending.accentColor}` }}>
                      {ending.icon}
                    </span>
                    <h3 className="font-heading text-lg leading-tight drop-shadow-lg"
                      style={{ color: ending.accentColor, textShadow: '0 2px 8px rgba(0,0,0,0.95)' }}>
                      {ending.name}
                    </h3>
                  </div>
                </div>
              </CodexImage>

              {/* Corner frames */}
              <div className="absolute top-2 left-2 w-3 h-3 border-l border-t pointer-events-none" style={{ borderColor: ending.accentColor + '60' }} />
              <div className="absolute top-2 right-2 w-3 h-3 border-r border-t pointer-events-none" style={{ borderColor: ending.accentColor + '60' }} />
            </div>

            {/* Body */}
            <div className="p-4">
              <p className="text-sm text-codex-parchment-dim leading-relaxed mb-3 line-clamp-3">
                {ending.description}
              </p>

              <div className="p-3 rounded-sm" style={{ background: ending.bgGlow, borderLeft: `2px solid ${ending.accentColor}50` }}>
                <p className="font-subheading italic text-sm text-codex-parchment-dim/80 leading-relaxed line-clamp-2">
                  {ending.atmosphere}
                </p>
              </div>

              <div className="mt-3 pt-3 border-t border-codex-gold-dim/15 flex justify-end">
                <span className="font-heading text-xs tracking-wider uppercase text-codex-gold-dim group-hover:text-codex-gold transition-colors">
                  {selected?.id === ending.id ? '↑ Cerrar' : '↓ Análisis'}
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Expanded analysis modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35 }}
            className={`parchment-panel p-6 md:p-8 border-2 ${selected.borderColor}`}
            style={{ boxShadow: `0 0 50px ${selected.bgGlow}` }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl" style={{ color: selected.accentColor, textShadow: `0 0 15px ${selected.accentColor}` }}>
                {selected.icon}
              </span>
              <div>
                <p className="font-heading text-xs tracking-widest uppercase mb-1" style={{ color: selected.accentColor }}>
                  Final
                </p>
                <h3 className="font-heading text-2xl text-codex-gold-bright">{selected.name}</h3>
              </div>
            </div>

            <RuneSeparator className="mb-6 opacity-50" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Block label="Descripción" content={selected.description} />
                <Block label="Consecuencia" content={selected.consequence} />
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-sm" style={{ background: selected.bgGlow, border: `1px solid ${selected.accentColor}30` }}>
                  <p className="font-heading text-xs tracking-wider uppercase mb-2" style={{ color: selected.accentColor }}>
                    Significado Filosófico
                  </p>
                  <p className="font-subheading italic text-base text-codex-parchment-dim leading-relaxed">
                    {selected.meaning}
                  </p>
                </div>
                <Block label="Requiere" content={selected.whoLeads} />
                <div className="p-3 rounded-sm bg-codex-brown/30 border border-codex-gold-dim/20">
                  <p className="font-heading text-xs text-codex-gold-dim tracking-wider uppercase mb-1">Atmósfera Visual</p>
                  <p className="font-subheading italic text-sm text-codex-parchment-dim">{selected.atmosphere}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function Block({ label, content }: { label: string; content: string }) {
  return (
    <div>
      <p className="font-heading text-xs text-codex-gold-dim tracking-wider uppercase mb-2">{label}</p>
      <p className="text-sm text-codex-parchment leading-relaxed">{content}</p>
    </div>
  )
}
