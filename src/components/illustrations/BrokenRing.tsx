import { motion } from 'framer-motion'

export function BrokenRing({ className = '', size = 120 }: { className?: string; size?: number }) {
  const cx = size / 2
  const cy = size / 2
  const r = size * 0.38
  const strokeW = size * 0.06

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className={className} aria-hidden="true">
      <defs>
        <radialGradient id="ringGlow">
          <stop offset="0%" stopColor="#e8d5a3" stopOpacity="1" />
          <stop offset="100%" stopColor="#c5a059" stopOpacity="0.6" />
        </radialGradient>
        <filter id="ring-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Broken ring — two arcs with a gap */}
      <motion.path
        d={`M ${cx + r * Math.cos(-0.4)} ${cy + r * Math.sin(-0.4)}
            A ${r} ${r} 0 1 1 ${cx + r * Math.cos(Math.PI + 0.4)} ${cy + r * Math.sin(Math.PI + 0.4)}`}
        stroke="url(#ringGlow)"
        strokeWidth={strokeW}
        fill="none"
        strokeLinecap="round"
        filter="url(#ring-glow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />
      <motion.path
        d={`M ${cx + r * Math.cos(Math.PI - 0.4)} ${cy + r * Math.sin(Math.PI - 0.4)}
            A ${r} ${r} 0 0 1 ${cx + r * Math.cos(0.4)} ${cy + r * Math.sin(0.4)}`}
        stroke="#8a7040"
        strokeWidth={strokeW * 0.7}
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
      />

      {/* Break sparks */}
      {[[-0.4, 0], [0.4, 1]].map(([angle, side], i) => {
        const x = cx + r * Math.cos(angle * (side === 0 ? -1 : 1))
        const y = cy + r * Math.sin(angle * (side === 0 ? -1 : 1))
        return (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r={strokeW * 0.6}
            fill="#e8d5a3"
            animate={{ opacity: [1, 0.3, 1], scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
          />
        )
      })}

      {/* Central glyph */}
      <motion.text
        x={cx}
        y={cy + 5}
        textAnchor="middle"
        fill="#c5a059"
        fontSize={size * 0.2}
        fontFamily="Cinzel, serif"
        opacity="0.4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5 }}
      >
        ✦
      </motion.text>
    </svg>
  )
}
