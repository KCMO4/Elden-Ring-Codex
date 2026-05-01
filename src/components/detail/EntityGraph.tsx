import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { ResolvedRelatedItem } from '../../data/lookups'

interface GraphNode {
  label: string
  to?: string
  group: 'character' | 'region' | 'faction' | 'concept' | 'timeline' | 'ending'
}

interface Props {
  centerLabel: string
  groups: { type: GraphNode['group']; items: ResolvedRelatedItem[] }[]
  size?: number
}

const GROUP_COLOR: Record<GraphNode['group'], string> = {
  character: '#c5a059',
  region:    '#8b6f47',
  faction:   '#a64d4d',
  concept:   '#7d6cb0',
  timeline:  '#6b8e9e',
  ending:    '#c98a3e',
}

const GROUP_LABEL_ES: Record<GraphNode['group'], string> = {
  character: 'Personajes',
  region:    'Regiones',
  faction:   'Facciones',
  concept:   'Conceptos',
  timeline:  'Eventos',
  ending:    'Finales',
}

export function EntityGraph({ centerLabel, groups, size = 260 }: Props) {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState<number | null>(null)

  const filtered = groups.filter((g) => g.items.length > 0)
  const total = filtered.reduce((acc, g) => acc + g.items.length, 0)
  if (total === 0) return null

  // Cap nodes for legibility
  const MAX_NODES = 18
  let allNodes: GraphNode[] = []
  for (const g of filtered) {
    for (const item of g.items) {
      allNodes.push({ label: item.label, to: item.to, group: g.type })
    }
  }
  const truncated = allNodes.length > MAX_NODES
  if (truncated) allNodes = allNodes.slice(0, MAX_NODES)

  const cx = size / 2
  const cy = size / 2
  const radius = size * 0.36
  const N = allNodes.length

  const hoveredNode = hovered !== null ? allNodes[hovered] : null

  return (
    <div className="parchment-panel p-4">
      <p className="font-heading text-xs text-codex-gold-dim tracking-wider uppercase mb-3">
        Mapa de relaciones
      </p>
      <div className="relative">
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="w-full h-auto"
          role="img"
          aria-label="Grafo de relaciones"
        >
          <defs>
            <radialGradient id="entity-graph-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#c5a059" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#c5a059" stopOpacity={0} />
            </radialGradient>
          </defs>

          {/* Concentric rings (decoration) */}
          <circle cx={cx} cy={cy} r={radius * 0.4} fill="none" stroke="#c5a059" strokeOpacity={0.1} strokeDasharray="2 4" />
          <circle cx={cx} cy={cy} r={radius * 0.7} fill="none" stroke="#c5a059" strokeOpacity={0.08} strokeDasharray="2 4" />
          <circle cx={cx} cy={cy} r={radius} fill="none" stroke="#c5a059" strokeOpacity={0.12} />

          {/* Glow behind center */}
          <circle cx={cx} cy={cy} r={radius * 0.55} fill="url(#entity-graph-glow)" />

          {/* Edges */}
          {allNodes.map((node, i) => {
            const angle = (i / N) * 2 * Math.PI - Math.PI / 2
            const x = cx + Math.cos(angle) * radius
            const y = cy + Math.sin(angle) * radius
            const color = GROUP_COLOR[node.group]
            const isHovered = hovered === i
            return (
              <line
                key={`edge-${i}`}
                x1={cx} y1={cy} x2={x} y2={y}
                stroke={color}
                strokeOpacity={isHovered ? 0.85 : 0.32}
                strokeWidth={isHovered ? 1.4 : 0.7}
              />
            )
          })}

          {/* Nodes (rendered after edges so they sit on top) */}
          {allNodes.map((node, i) => {
            const angle = (i / N) * 2 * Math.PI - Math.PI / 2
            const x = cx + Math.cos(angle) * radius
            const y = cy + Math.sin(angle) * radius
            const color = GROUP_COLOR[node.group]
            const isHovered = hovered === i

            // Compute label anchor based on quadrant for clean readout
            const labelOffset = 11
            const labelX = x + Math.cos(angle) * labelOffset
            const labelY = y + Math.sin(angle) * labelOffset
            const cosA = Math.cos(angle)
            const anchor: 'start' | 'middle' | 'end' =
              cosA > 0.25 ? 'start' : cosA < -0.25 ? 'end' : 'middle'
            const dy = Math.sin(angle) > 0.25 ? '0.7em' : Math.sin(angle) < -0.25 ? '-0.2em' : '0.35em'

            // Truncate long labels for readability
            const display = node.label.length > 16 ? node.label.slice(0, 14) + '…' : node.label

            return (
              <g
                key={`node-${i}`}
                className={node.to ? 'cursor-pointer' : 'cursor-default'}
                onClick={() => node.to && navigate(node.to)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
                onFocus={() => setHovered(i)}
                onBlur={() => setHovered((h) => (h === i ? null : h))}
                role={node.to ? 'link' : undefined}
                aria-label={node.label}
                tabIndex={node.to ? 0 : -1}
              >
                <circle
                  cx={x} cy={y}
                  r={isHovered ? 8 : 6}
                  fill="#1a1812"
                  stroke={color}
                  strokeWidth={isHovered ? 2 : 1.5}
                />
                <circle cx={x} cy={y} r={isHovered ? 4 : 3} fill={color} />
                <title>{node.label}</title>

                {/* Visible label only when hovered/focused */}
                {isHovered && (
                  <text
                    x={labelX}
                    y={labelY}
                    textAnchor={anchor}
                    dy={dy}
                    fill="#e8d5a3"
                    style={{
                      fontSize: size * 0.045,
                      fontFamily: 'Cormorant Garamond, serif',
                      pointerEvents: 'none',
                      paintOrder: 'stroke',
                      stroke: 'rgba(10,10,8,0.85)',
                      strokeWidth: 3,
                      strokeLinejoin: 'round',
                    }}
                  >
                    {display}
                  </text>
                )}
              </g>
            )
          })}

          {/* Center: current entity */}
          <circle cx={cx} cy={cy} r={11} fill="#1a1812" stroke="#e8d29c" strokeWidth={1.8} />
          <circle cx={cx} cy={cy} r={5} fill="#e8d29c" />
          <text
            x={cx}
            y={cy + size * 0.43}
            textAnchor="middle"
            className="font-heading"
            fill="#c5a059"
            style={{ fontSize: size * 0.05, letterSpacing: '0.05em' }}
          >
            {centerLabel.length > 22 ? centerLabel.slice(0, 20) + '…' : centerLabel}
          </text>
        </svg>
      </div>

      {/* Hover readout: full label of the hovered node */}
      <div className="mt-2 min-h-[1.5em] text-center">
        {hoveredNode ? (
          <p className="font-subheading text-xs text-codex-gold-bright">
            <span
              className="inline-block w-2 h-2 rounded-full mr-1.5 align-middle"
              style={{ backgroundColor: GROUP_COLOR[hoveredNode.group] }}
              aria-hidden
            />
            {hoveredNode.label}
            <span className="text-codex-parchment-dim/60 ml-1.5">· {GROUP_LABEL_ES[hoveredNode.group]}</span>
          </p>
        ) : (
          <p className="font-body text-[11px] text-codex-parchment-dim/60 italic">
            Pasa el ratón sobre un nodo para verlo
          </p>
        )}
      </div>

      {/* Legend */}
      <ul className="mt-3 space-y-1">
        {filtered.map((g) => (
          <li key={g.type} className="flex items-center gap-2 text-[11px]">
            <span
              className="inline-block w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: GROUP_COLOR[g.type] }}
              aria-hidden
            />
            <span className="text-codex-parchment-dim">{GROUP_LABEL_ES[g.type]}</span>
            <span className="text-codex-gold-dim/70 ml-auto">{g.items.length}</span>
          </li>
        ))}
        {truncated && (
          <li className="text-[10px] text-codex-parchment-dim/70 italic pt-1">
            Solo se muestran las primeras {MAX_NODES} relaciones
          </li>
        )}
      </ul>
    </div>
  )
}
