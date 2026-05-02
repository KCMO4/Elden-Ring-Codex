import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { ResolvedRelatedItem } from '../../data/lookups'
import { EntityHoverCard } from '../EntityHoverCard'
import type { EntityType } from '../../data/types'
import { useTheme } from '../../lib/theme'
import { useExpansion } from '../../lib/expansion'
import { getEntityPreview } from '../../data/lookups'

type GroupKind = 'character' | 'region' | 'faction' | 'concept' | 'timeline' | 'ending'

interface GraphNode {
  label: string
  to?: string
  group: GroupKind
  slug: string
}

interface Props {
  centerLabel: string
  groups: { type: GroupKind; items: ResolvedRelatedItem[] }[]
  size?: number
}

/* Two palettes — dark and light — so the entity graph reads well against
   either canvas. The values mirror codex-* tokens but as concrete hex codes
   (SVG `stroke`/`fill` attributes don't accept CSS variables). */
const GROUP_COLOR_DARK: Record<GroupKind, string> = {
  character: '#d4ad62',
  region:    '#c97352',
  faction:   '#bf4848',
  concept:   '#5a72b5',
  timeline:  '#a04270',
  ending:    '#c98a3e',
}
const GROUP_COLOR_LIGHT: Record<GroupKind, string> = {
  character: '#9a7426',
  region:    '#a55032',
  faction:   '#943232',
  concept:   '#3c4f8a',
  timeline:  '#7d2f58',
  ending:    '#a05c1e',
}

/* Decoration colors that previously hardcoded gold; now resolve per theme */
const DECO_DARK = {
  background: '#13110d',
  glow: '#d4ad62',
  ring: '#d4ad62',
  centerHalo: '#f2deb0',
  centerCore: '#fff8e0',
  centerDot: '#1a1812',
}
const DECO_LIGHT = {
  background: '#f5edda',
  glow: '#9a7426',
  ring: '#9a7426',
  centerHalo: '#6c501a',
  centerCore: '#3a2818',
  centerDot: '#fffbf0',
}

const GROUP_LABEL_ES: Record<GroupKind, string> = {
  character: 'Personajes',
  region:    'Regiones',
  faction:   'Facciones',
  concept:   'Conceptos',
  timeline:  'Eventos',
  ending:    'Finales',
}

function slugFromTo(to: string | undefined): string | null {
  if (!to) return null
  const parts = to.split('/').filter(Boolean)
  return parts[parts.length - 1] ?? null
}

export function EntityGraph({ centerLabel, groups, size = 280 }: Props) {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState<number | null>(null)
  const { resolved } = useTheme()
  const { hideSote } = useExpansion()
  const GROUP_COLOR = resolved === 'light' ? GROUP_COLOR_LIGHT : GROUP_COLOR_DARK
  const DECO = resolved === 'light' ? DECO_LIGHT : DECO_DARK

  const filtered = groups.filter((g) => g.items.length > 0)
  const MAX_NODES = 18
  let allNodes: GraphNode[] = []
  for (const g of filtered) {
    for (const item of g.items) {
      const slug = slugFromTo(item.to)
      if (!slug) continue
      /* Skip SOTE-only related entries when the reader is in base mode */
      if (hideSote) {
        const preview = getEntityPreview(g.type as EntityType, slug)
        if (preview?.expansion === 'sote') continue
      }
      allNodes.push({ label: item.label, to: item.to, group: g.type, slug })
    }
  }
  /* Total reflects post-filter count so "N de M" honors hideSote (fix #7) */
  const total = allNodes.length
  if (total === 0) return null
  const truncated = allNodes.length > MAX_NODES
  if (truncated) allNodes = allNodes.slice(0, MAX_NODES)

  const cx = size / 2
  const cy = size / 2
  const radius = size * 0.34
  const N = allNodes.length

  const hoveredNode = hovered !== null ? allNodes[hovered] : null

  /* Compass-style outer tick marks every 15°. The 4 cardinal ones are
     longer/brighter to give the grafo a sense of cosmological orientation. */
  const TICK_COUNT = 24
  const tickInner = radius * 1.05
  const tickOuter = radius * 1.12
  const cardinalOuter = radius * 1.18

  return (
    <div className="parchment-panel p-4 overflow-visible">
      <div className="flex items-center gap-2 mb-3">
        <span className="block w-1 h-1 rounded-full bg-codex-gold-dim" aria-hidden />
        <p className="font-heading text-xs text-codex-gold-dim tracking-[0.18em] uppercase">
          Mapa de relaciones
        </p>
        <span className="flex-1 h-px bg-codex-gold-dim/20" aria-hidden />
      </div>

      {/* Stage: SVG draws decoration; HTML nodes are absolute-positioned on top. */}
      <div
        className="relative mx-auto"
        style={{ width: '100%', maxWidth: size, aspectRatio: '1 / 1' }}
      >
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="absolute inset-0 w-full h-full"
          role="img"
          aria-label="Grafo de relaciones"
        >
          <defs>
            <radialGradient id="entity-graph-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={DECO.glow} stopOpacity={0.32} />
              <stop offset="55%" stopColor={DECO.glow} stopOpacity={0.06} />
              <stop offset="100%" stopColor={DECO.glow} stopOpacity={0} />
            </radialGradient>
            <radialGradient id="entity-graph-vignette" cx="50%" cy="50%" r="50%">
              <stop offset="60%" stopColor={DECO.background} stopOpacity={0} />
              <stop offset="100%" stopColor={DECO.background} stopOpacity={0.55} />
            </radialGradient>
          </defs>

          {/* Background glow + vignette */}
          <circle cx={cx} cy={cy} r={radius * 1.25} fill="url(#entity-graph-glow)" />
          <circle cx={cx} cy={cy} r={size * 0.5} fill="url(#entity-graph-vignette)" />

          {/* Concentric rings — five layers for depth */}
          {[0.32, 0.55, 0.78, 1, 1.06].map((r, i) => (
            <circle
              key={`ring-${i}`}
              cx={cx}
              cy={cy}
              r={radius * r}
              fill="none"
              stroke={DECO.ring}
              strokeOpacity={r === 1 ? 0.18 : r === 1.06 ? 0.28 : 0.07}
              strokeWidth={r === 1.06 ? 0.8 : 0.6}
              strokeDasharray={r === 1.06 ? 'none' : r < 1 ? '1.5 3.5' : 'none'}
            />
          ))}

          {/* Compass tick marks around the outer ring */}
          {Array.from({ length: TICK_COUNT }).map((_, i) => {
            const angle = (i / TICK_COUNT) * 2 * Math.PI
            const isCardinal = i % 6 === 0  // every 90° (4 marks)
            const isMajor = i % 3 === 0     // every 45°
            const inner = tickInner
            const outer = isCardinal ? cardinalOuter : isMajor ? tickOuter : (tickInner + tickOuter) / 2
            return (
              <line
                key={`tick-${i}`}
                x1={cx + Math.cos(angle) * inner}
                y1={cy + Math.sin(angle) * inner}
                x2={cx + Math.cos(angle) * outer}
                y2={cy + Math.sin(angle) * outer}
                stroke={DECO.ring}
                strokeOpacity={isCardinal ? 0.55 : isMajor ? 0.3 : 0.15}
                strokeWidth={isCardinal ? 1.1 : 0.7}
                strokeLinecap="round"
              />
            )
          })}

          {/* Edges (center → node), all in unified gold for visual calm */}
          {allNodes.map((node, i) => {
            const angle = (i / N) * 2 * Math.PI - Math.PI / 2
            const x = cx + Math.cos(angle) * radius
            const y = cy + Math.sin(angle) * radius
            const isHovered = hovered === i
            return (
              <line
                key={`edge-${i}`}
                x1={cx} y1={cy} x2={x} y2={y}
                stroke={isHovered ? GROUP_COLOR[node.group] : DECO.ring}
                strokeOpacity={isHovered ? 0.85 : 0.22}
                strokeWidth={isHovered ? 1.6 : 0.6}
                strokeLinecap="round"
              />
            )
          })}

          {/* Center starburst — eight subtle radial lines behind the center dot */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * 2 * Math.PI
            const inner = 14
            const outer = 22
            return (
              <line
                key={`burst-${i}`}
                x1={cx + Math.cos(angle) * inner}
                y1={cy + Math.sin(angle) * inner}
                x2={cx + Math.cos(angle) * outer}
                y2={cy + Math.sin(angle) * outer}
                stroke={DECO.centerHalo}
                strokeOpacity={0.38}
                strokeWidth={0.9}
                strokeLinecap="round"
              />
            )
          })}

          {/* Center node — outer halo + inner core */}
          <circle cx={cx} cy={cy} r={13} fill="none" stroke={DECO.centerHalo} strokeOpacity={0.35} strokeWidth={1} />
          <circle cx={cx} cy={cy} r={10} fill={DECO.centerDot} stroke={DECO.centerHalo} strokeWidth={1.6} />
          <circle cx={cx} cy={cy} r={5}  fill={DECO.centerHalo} />
          <circle cx={cx} cy={cy} r={2}  fill={DECO.centerCore} />
        </svg>

        {/* HTML nodes — clickable + EntityHoverCard preview */}
        {allNodes.map((node, i) => {
          const angle = (i / N) * 2 * Math.PI - Math.PI / 2
          const xPct = ((cx + Math.cos(angle) * radius) / size) * 100
          const yPct = ((cy + Math.sin(angle) * radius) / size) * 100
          const color = GROUP_COLOR[node.group]
          const isHovered = hovered === i

          return (
            <span
              key={`node-${i}`}
              className="absolute"
              style={{
                left: `${xPct}%`,
                top: `${yPct}%`,
                transform: 'translate(-50%, -50%)',
                /* Hovered node sits above siblings so its EntityHoverCard
                   popup is never occluded by neighboring dots. */
                zIndex: isHovered ? 50 : 10,
              }}
            >
              <EntityHoverCard targetType={node.group as EntityType} slug={node.slug}>
                <button
                  type="button"
                  onClick={() => node.to && navigate(node.to)}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
                  onFocus={() => setHovered(i)}
                  onBlur={() => setHovered((h) => (h === i ? null : h))}
                  aria-label={node.label}
                  className="relative block rounded-full transition-transform duration-200 ease-out
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-codex-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-codex-brown"
                  style={{
                    cursor: node.to ? 'pointer' : 'default',
                    transform: isHovered ? 'scale(1.18)' : 'scale(1)',
                  }}
                >
                  {/* Outer halo ring — visible always, brighter on hover */}
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full transition-all duration-200"
                    style={{
                      transform: isHovered ? 'scale(1.7)' : 'scale(1.35)',
                      border: `1px solid ${color}`,
                      opacity: isHovered ? 0.75 : 0.25,
                      boxShadow: isHovered ? `0 0 10px ${color}88` : 'none',
                    }}
                  />
                  {/* Body dot */}
                  <span
                    aria-hidden
                    className="block rounded-full"
                    style={{
                      width: 13,
                      height: 13,
                      backgroundColor: DECO.centerDot,
                      border: `1.5px solid ${color}`,
                      boxShadow: `inset 0 0 4px ${color}55`,
                    }}
                  >
                    <span
                      className="block rounded-full mx-auto"
                      style={{
                        width: 6,
                        height: 6,
                        backgroundColor: color,
                        marginTop: 2,
                        boxShadow: isHovered ? `0 0 6px ${color}` : 'none',
                      }}
                    />
                  </span>
                </button>
              </EntityHoverCard>
            </span>
          )
        })}
      </div>

      {/* Center entity label — shown beneath the graph in its own space.
          Title-cased, with subtle decorative flanks, so it reads as "you are
          here" without colliding with the outer ring of nodes. */}
      <div className="mt-4 flex items-center gap-2 justify-center">
        <span aria-hidden className="block h-px w-6 bg-codex-gold-dim/35" />
        <p
          className="font-heading text-sm text-codex-gold-bright tracking-[0.06em] text-center leading-tight px-2"
          style={{ textShadow: '0 0 10px rgba(242,222,176,0.3)' }}
          title={centerLabel}
        >
          {centerLabel}
        </p>
        <span aria-hidden className="block h-px w-6 bg-codex-gold-dim/35" />
      </div>

      {/* Hover readout */}
      <div className="mt-2 min-h-[1.6em] text-center">
        {hoveredNode ? (
          <p className="font-subheading text-xs text-codex-gold-bright transition-opacity">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 align-middle"
              style={{
                backgroundColor: GROUP_COLOR[hoveredNode.group],
                boxShadow: `0 0 4px ${GROUP_COLOR[hoveredNode.group]}`,
              }}
              aria-hidden
            />
            {hoveredNode.label}
            <span className="text-codex-parchment-dim/55 ml-1.5 text-[10px] tracking-wider uppercase">
              · {GROUP_LABEL_ES[hoveredNode.group]}
            </span>
          </p>
        ) : (
          <p className="font-body text-[11px] text-codex-parchment-dim/45 italic tracking-wide">
            Pasa el ratón sobre un nodo
          </p>
        )}
      </div>

      {/* Legend — compact horizontal chips */}
      <div className="mt-3 pt-3 border-t border-codex-gold-dim/15">
        <ul className="flex flex-wrap gap-x-3 gap-y-1.5">
          {filtered.map((g) => (
            <li key={g.type} className="inline-flex items-center gap-1.5 text-[10px]">
              <span
                className="inline-block w-2 h-2 rounded-full shrink-0"
                style={{
                  backgroundColor: GROUP_COLOR[g.type],
                  boxShadow: `0 0 4px ${GROUP_COLOR[g.type]}66`,
                }}
                aria-hidden
              />
              <span className="text-codex-parchment-dim/85 tracking-wide">{GROUP_LABEL_ES[g.type]}</span>
              <span className="text-codex-gold-dim/70 font-mono">{g.items.length}</span>
            </li>
          ))}
        </ul>
        {truncated && (
          <p className="mt-2 text-[10px] text-codex-parchment-dim/55 italic">
            Mostrando las primeras {MAX_NODES} de {total} relaciones
          </p>
        )}
      </div>
    </div>
  )
}
