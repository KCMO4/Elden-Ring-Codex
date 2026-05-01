import { motion } from 'framer-motion'

/**
 * Broken Elden Ring — concentric arc fragments with sparks at the breaks
 * and drifting shards in the void. Decorative element used on the landing
 * page corners and in detail-page prev/next ornaments.
 */
export function BrokenRing({ className = '', size = 120 }: { className?: string; size?: number }) {
  const cx = size / 2
  const cy = size / 2
  const R  = size * 0.4   // outer ring radius
  const r  = size * 0.27  // inner ring radius
  const sw = size * 0.055 // outer stroke width

  /* Convert degrees-from-top to (x,y) on a ring of radius `rad`. */
  const onRing = (deg: number, rad: number) => {
    const a = ((deg - 90) * Math.PI) / 180
    return [cx + Math.cos(a) * rad, cy + Math.sin(a) * rad]
  }

  /* Outer ring break angles (in degrees from top): two gaps, top-right and bottom-left */
  const OUTER_GAPS = [
    { start: 22,  end: 56  },
    { start: 202, end: 236 },
  ]
  const outerArcs = arcsBetweenGaps(OUTER_GAPS, R, cx, cy)

  /* Inner ring breaks at slightly different angles for a layered fracture */
  const INNER_GAPS = [
    { start: 130, end: 165 },
    { start: 310, end: 345 },
  ]
  const innerArcs = arcsBetweenGaps(INNER_GAPS, r, cx, cy)

  /* Spark positions: midpoints of each gap on each ring */
  const sparkPositions = [
    ...OUTER_GAPS.map((g) => onRing((g.start + g.end) / 2, R)),
    ...INNER_GAPS.map((g) => onRing((g.start + g.end) / 2, r)),
  ]

  /* Drifting shards inside the ring's void — small chips of broken gold */
  const shards = [
    { d: `M 0 0 L 4 -1 L 5 2 Z`, x: cx + size * 0.04,  y: cy - size * 0.07, rot: 25,  delay: 0.0 },
    { d: `M 0 0 L 5 -2 L 4 2 Z`, x: cx - size * 0.08,  y: cy + size * 0.05, rot: -40, delay: 0.6 },
    { d: `M 0 0 L 3 -1 L 4 2 Z`, x: cx + size * 0.1,   y: cy + size * 0.08, rot: 60,  delay: 1.2 },
    { d: `M 0 0 L 5 -1 L 4 3 Z`, x: cx - size * 0.05,  y: cy - size * 0.1,  rot: -15, delay: 0.3 },
  ]

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className={className} aria-hidden="true"
         xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="br-arc" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#fff5d8" />
          <stop offset="50%"  stopColor="#e8d5a3" />
          <stop offset="100%" stopColor="#c5a059" />
        </linearGradient>
        <linearGradient id="br-arc-faint" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#c5a059" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#7a5a30" stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id="br-void" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#fff5d8" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#fff5d8" stopOpacity="0" />
        </radialGradient>
        <filter id="br-bloom" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="1.6" />
        </filter>
      </defs>

      {/* Soft inner light suggesting the ring still emits residual power */}
      <circle cx={cx} cy={cy} r={r * 1.15} fill="url(#br-void)" />

      {/* Outer ring fragments */}
      {outerArcs.map((d, i) => (
        <motion.path
          key={`o-${i}`}
          d={d}
          stroke="url(#br-arc)"
          strokeWidth={sw}
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.2 + i * 0.2, ease: 'easeOut' }}
        />
      ))}

      {/* Inner ring fragments */}
      {innerArcs.map((d, i) => (
        <motion.path
          key={`i-${i}`}
          d={d}
          stroke="url(#br-arc-faint)"
          strokeWidth={sw * 0.55}
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7 + i * 0.2, ease: 'easeOut' }}
        />
      ))}

      {/* Spark twinkles at every break point */}
      {sparkPositions.map(([x, y], i) => (
        <g key={`s-${i}`}>
          <motion.circle
            cx={x} cy={y} r={sw * 1.4}
            fill="#fff5d8"
            opacity={0.25}
            filter="url(#br-bloom)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.4 }}
          />
          <motion.circle
            cx={x} cy={y} r={sw * 0.5}
            fill="#fff8e0"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.85, 1, 0.85],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: 1.6 + i * 0.4,
              ease: 'easeInOut',
            }}
          />
        </g>
      ))}

      {/* Drifting fragments in the void */}
      {shards.map((s, i) => (
        <motion.path
          key={`f-${i}`}
          d={s.d}
          fill="#c5a059"
          opacity={0.7}
          initial={{ x: s.x, y: s.y, rotate: s.rot, opacity: 0 }}
          animate={{
            x: [s.x, s.x + (i % 2 ? 4 : -4), s.x],
            y: [s.y, s.y - 3, s.y],
            rotate: [s.rot, s.rot + 12, s.rot],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: s.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Central glyph — Elden cross */}
      <motion.g
        transform={`translate(${cx} ${cy})`}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
      >
        <line x1={-size * 0.05} y1={0} x2={size * 0.05} y2={0}
              stroke="#e8d5a3" strokeWidth={1} strokeLinecap="round" />
        <line x1={0} y1={-size * 0.05} x2={0} y2={size * 0.05}
              stroke="#e8d5a3" strokeWidth={1} strokeLinecap="round" />
        <circle r={size * 0.012} fill="#fff5d8" />
      </motion.g>
    </svg>
  )
}

/**
 * Build SVG arc `d` strings for the segments between the supplied gaps.
 * The arcs go clockwise from each gap-end to the next gap-start.
 */
function arcsBetweenGaps(
  gaps: { start: number; end: number }[],
  rad: number,
  cx: number,
  cy: number,
): string[] {
  const sorted = [...gaps].sort((a, b) => a.start - b.start)
  const arcs: string[] = []
  for (let i = 0; i < sorted.length; i++) {
    const fromAngle = sorted[i].end
    const toAngle   = sorted[(i + 1) % sorted.length].start
                    + (i + 1 === sorted.length ? 360 : 0)
    const sweep     = toAngle - fromAngle
    const largeArc  = sweep > 180 ? 1 : 0
    const fromA = ((fromAngle - 90) * Math.PI) / 180
    const toA   = ((toAngle   - 90) * Math.PI) / 180
    const x1 = cx + Math.cos(fromA) * rad
    const y1 = cy + Math.sin(fromA) * rad
    const x2 = cx + Math.cos(toA)   * rad
    const y2 = cy + Math.sin(toA)   * rad
    arcs.push(`M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${rad} ${rad} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`)
  }
  return arcs
}
