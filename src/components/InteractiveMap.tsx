import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, EyeOff, Sparkles } from 'lucide-react'
import { mapRegions, mapConnections, toneColors, type MapRegion } from '../data/regionMap'
import { regionsData } from '../data/regions'

const VIEWBOX_W = 1000
const VIEWBOX_H = 800

export function InteractiveMap() {
  const [showSurface, setShowSurface] = useState(true)
  const [showUnderground, setShowUnderground] = useState(false)
  const [showExtra, setShowExtra] = useState(true)
  const [hovered, setHovered] = useState<MapRegion | null>(null)

  const regionById = useMemo(() => {
    const m = new Map<string, MapRegion>()
    for (const r of mapRegions) m.set(r.id, r)
    return m
  }, [])

  const visibleRegions = useMemo(
    () => mapRegions.filter((r) => {
      if (r.layer === 'surface') return showSurface
      if (r.layer === 'underground') return showUnderground
      return showExtra
    }),
    [showSurface, showUnderground, showExtra],
  )

  const visibleConnections = useMemo(
    () => mapConnections.filter((c) => {
      const a = regionById.get(c.from)
      const b = regionById.get(c.to)
      if (!a || !b) return false
      const aVisible = visibleRegions.includes(a)
      const bVisible = visibleRegions.includes(b)
      return aVisible && bVisible
    }),
    [visibleRegions, regionById],
  )

  // Region details for tooltip card (uses real regionsData if available)
  const hoveredDetail = useMemo(() => {
    if (!hovered) return null
    const data = regionsData.find((r) => r.id === hovered.id)
    return data
  }, [hovered])

  return (
    <div className="parchment-panel p-4">
      {/* Layer toggles */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <p className="font-heading text-xs text-codex-gold-dim tracking-widest uppercase">
          Cartografía del Interregno · {mapRegions.length} ubicaciones
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          <LayerToggle
            label="Superficie"
            active={showSurface}
            onToggle={() => setShowSurface((v) => !v)}
            tone="text-codex-gold"
          />
          <LayerToggle
            label="Subterráneo"
            active={showUnderground}
            onToggle={() => setShowUnderground((v) => !v)}
            tone="text-purple-300"
          />
          <LayerToggle
            label="Atemporal"
            active={showExtra}
            onToggle={() => setShowExtra((v) => !v)}
            tone="text-blue-300"
          />
        </div>
      </div>

      <div className="relative">
        <svg
          viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
          className="w-full h-auto block"
          style={{ background: 'radial-gradient(ellipse at center, rgba(20,16,10,1) 0%, rgba(10,10,8,1) 70%)' }}
        >
          <defs>
            {/* Parchment-like background pattern */}
            <pattern id="parchment-grain" patternUnits="userSpaceOnUse" width="200" height="200">
              <rect width="200" height="200" fill="rgba(15,12,8,0)" />
              <circle cx="20" cy="35" r="0.8" fill="rgba(197,160,89,0.06)" />
              <circle cx="120" cy="80" r="1" fill="rgba(197,160,89,0.04)" />
              <circle cx="65" cy="150" r="0.6" fill="rgba(197,160,89,0.05)" />
              <circle cx="170" cy="190" r="0.9" fill="rgba(197,160,89,0.03)" />
            </pattern>

            {/* Glow filter */}
            <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background */}
          <rect width={VIEWBOX_W} height={VIEWBOX_H} fill="url(#parchment-grain)" />

          {/* Outer ornamental border */}
          <rect
            x={20}
            y={20}
            width={VIEWBOX_W - 40}
            height={VIEWBOX_H - 40}
            fill="none"
            stroke="rgba(197,160,89,0.25)"
            strokeWidth={1}
          />
          <rect
            x={28}
            y={28}
            width={VIEWBOX_W - 56}
            height={VIEWBOX_H - 56}
            fill="none"
            stroke="rgba(197,160,89,0.15)"
            strokeWidth={0.5}
          />

          {/* Compass rose */}
          <g transform="translate(920, 740)">
            <circle r={30} fill="rgba(10,10,8,0.7)" stroke="rgba(197,160,89,0.4)" strokeWidth={0.8} />
            <path d="M0,-25 L4,0 L0,25 L-4,0 Z" fill="rgba(197,160,89,0.7)" />
            <path d="M-25,0 L0,4 L25,0 L0,-4 Z" fill="rgba(197,160,89,0.4)" />
            <text y={-18} textAnchor="middle" fontFamily="Cinzel, serif" fontSize="9" fill="rgba(232,213,163,0.85)">N</text>
          </g>

          {/* Title cartouche */}
          <g transform="translate(50, 60)">
            <text fontFamily="Cinzel, serif" fontSize="18" fill="rgba(232,213,163,0.85)" fontWeight={600}>
              EL INTERREGNO
            </text>
            <text y={20} fontFamily="Cormorant Garamond, serif" fontSize="13" fontStyle="italic" fill="rgba(197,160,89,0.6)">
              Cartografía estilizada del Reino Caído
            </text>
          </g>

          {/* Connections */}
          <g>
            {visibleConnections.map((c, i) => {
              const a = regionById.get(c.from)!
              const b = regionById.get(c.to)!
              const dasharray = c.kind === 'transition' ? '4 4' : c.kind === 'river' ? '8 3' : undefined
              const stroke = c.kind === 'transition'
                ? 'rgba(140,180,220,0.35)'
                : c.kind === 'river'
                ? 'rgba(96,128,176,0.45)'
                : 'rgba(197,160,89,0.3)'
              return (
                <line
                  key={`${c.from}-${c.to}-${i}`}
                  x1={a.label.x}
                  y1={a.label.y}
                  x2={b.label.x}
                  y2={b.label.y}
                  stroke={stroke}
                  strokeWidth={c.kind === 'transition' ? 0.6 : 0.8}
                  strokeDasharray={dasharray}
                />
              )
            })}
          </g>

          {/* Regions */}
          <g>
            {visibleRegions.map((region) => {
              const tone = toneColors[region.tone]
              const points = region.shape.map((p) => p.join(',')).join(' ')
              const isHovered = hovered?.id === region.id
              return (
                <Link key={region.id} to={`/regiones/${region.id}`}>
                  <g
                    onMouseEnter={() => setHovered(region)}
                    onMouseLeave={() => setHovered(null)}
                    style={{ cursor: 'pointer' }}
                  >
                    <polygon
                      points={points}
                      fill={tone.fill}
                      stroke={tone.stroke}
                      strokeWidth={isHovered ? 2 : 1}
                      strokeDasharray={region.layer === 'underground' ? '3 2' : undefined}
                      filter={isHovered ? 'url(#glow)' : undefined}
                      style={{ transition: 'all 0.2s ease' }}
                    />
                    {/* Region label */}
                    <text
                      x={region.label.x}
                      y={region.label.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontFamily="Cinzel, serif"
                      fontSize={region.layer === 'extra' ? 10 : region.label.x > 600 || region.label.x < 250 ? 9 : 10}
                      fontWeight={isHovered ? 600 : 400}
                      fill={isHovered ? 'rgba(232,213,163,1)' : 'rgba(232,213,163,0.85)'}
                      style={{ pointerEvents: 'none', textShadow: '0 1px 3px rgba(0,0,0,0.95)' }}
                    >
                      {region.name}
                    </text>
                  </g>
                </Link>
              )
            })}
          </g>
        </svg>

        {/* Hover tooltip card */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.18 }}
              className="absolute top-4 right-4 max-w-xs parchment-panel p-3 pointer-events-none"
              style={{ borderColor: toneColors[hovered.tone].stroke, boxShadow: `0 0 30px ${toneColors[hovered.tone].glow}` }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: toneColors[hovered.tone].stroke }} />
                <p className="font-heading text-[10px] text-codex-gold-dim tracking-widest uppercase">
                  {hovered.layer === 'surface' ? 'Superficie' : hovered.layer === 'underground' ? 'Subterráneo' : 'Atemporal'}
                </p>
              </div>
              <h4 className="font-heading text-base text-codex-gold-bright leading-tight mb-1">
                {hovered.name}
              </h4>
              <p className="font-subheading italic text-xs text-codex-parchment-dim mb-2">
                {hovered.faction}
              </p>
              {hoveredDetail?.summary && (
                <p className="font-body text-xs text-codex-parchment leading-relaxed line-clamp-3 mb-2">
                  {hoveredDetail.summary}
                </p>
              )}
              <p className="font-heading text-[9px] text-codex-gold-dim tracking-wider uppercase flex items-center gap-1">
                <Sparkles size={9} />
                Click para abrir página
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-3 mt-4 pt-3 border-t border-codex-gold-dim/20">
        <p className="font-heading text-[10px] text-codex-gold-dim tracking-widest uppercase">Leyenda:</p>
        <LegendItem label="Camino" color="rgba(197,160,89,0.6)" />
        <LegendItem label="Río subterráneo" color="rgba(96,128,176,0.7)" dashed="8 3" />
        <LegendItem label="Transición / Pasaje" color="rgba(140,180,220,0.55)" dashed="4 4" />
      </div>
    </div>
  )
}

function LayerToggle({
  label, active, onToggle, tone,
}: {
  label: string; active: boolean; onToggle: () => void; tone: string
}) {
  return (
    <button
      onClick={onToggle}
      className={`flex items-center gap-1.5 px-2.5 py-1.5 border rounded-sm font-heading text-[10px] tracking-wider uppercase transition-all
        ${active
          ? 'bg-codex-gold/10 border-codex-gold-dim/50 text-codex-parchment'
          : 'bg-codex-brown/30 border-codex-gold-dim/15 text-codex-parchment-dim/50'
        }`}
    >
      {active ? <Eye size={11} className={tone} /> : <EyeOff size={11} />}
      {label}
    </button>
  )
}

function LegendItem({
  label, color, dashed,
}: {
  label: string; color: string; dashed?: string
}) {
  return (
    <span className="flex items-center gap-2 text-[10px] font-heading tracking-wider uppercase text-codex-parchment-dim/70">
      <svg width={20} height={6}>
        <line x1={0} y1={3} x2={20} y2={3} stroke={color} strokeWidth={1.2} strokeDasharray={dashed} />
      </svg>
      {label}
    </span>
  )
}
