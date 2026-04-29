import { motion } from 'framer-motion'

export function GoldenTree({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 600"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="treeGlow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#e8d5a3" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#c5a059" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#8a7040" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="rootGlow" cx="50%" cy="80%" r="50%">
          <stop offset="0%" stopColor="#c5a059" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#8a7040" stopOpacity="0" />
        </radialGradient>
        <filter id="blur-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Glow background */}
      <ellipse cx="200" cy="200" rx="150" ry="200" fill="url(#treeGlow)" opacity="0.4" />
      <ellipse cx="200" cy="480" rx="120" ry="80" fill="url(#rootGlow)" opacity="0.3" />

      {/* Main trunk */}
      <motion.path
        d="M200 550 L200 300 Q195 280 190 260 L200 240 Q210 260 205 280 L200 300"
        stroke="#c5a059"
        strokeWidth="4"
        fill="none"
        filter="url(#blur-glow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      />

      {/* Main branches */}
      <motion.path
        d="M200 300 Q160 260 120 200 Q100 170 80 140"
        stroke="#c5a059"
        strokeWidth="2.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
      />
      <motion.path
        d="M200 300 Q240 260 280 200 Q300 170 320 140"
        stroke="#c5a059"
        strokeWidth="2.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.6, ease: 'easeOut' }}
      />
      <motion.path
        d="M200 260 Q170 230 140 180 Q120 150 100 120"
        stroke="#c5a059"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.7, ease: 'easeOut' }}
      />
      <motion.path
        d="M200 260 Q230 230 260 180 Q280 150 300 120"
        stroke="#c5a059"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
      />
      <motion.path
        d="M200 240 Q185 200 170 160 Q160 130 155 100"
        stroke="#c5a059"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.9 }}
      />
      <motion.path
        d="M200 240 Q215 200 230 160 Q240 130 245 100"
        stroke="#c5a059"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 1.0 }}
      />

      {/* Top crown */}
      <motion.path
        d="M200 240 Q200 180 200 120"
        stroke="#e8d5a3"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      />

      {/* Roots spreading into darkness */}
      {[
        "M200 520 Q160 540 120 560 Q90 575 60 580",
        "M200 520 Q240 540 280 560 Q310 575 340 580",
        "M200 530 Q170 550 140 570 Q115 580 90 590",
        "M200 530 Q230 550 260 570 Q285 580 310 590",
        "M200 540 Q180 555 160 565 Q145 572 130 578",
        "M200 540 Q220 555 240 565 Q255 572 270 578",
        "M200 540 Q200 560 195 580",
        "M200 540 Q202 560 205 580",
      ].map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="#8a7040"
          strokeWidth={1 + (i % 3) * 0.3}
          fill="none"
          opacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.5 + i * 0.1 }}
        />
      ))}

      {/* Glowing orbs / leaves */}
      {[
        [80, 140], [120, 110], [155, 100], [200, 80], [245, 100], [280, 110], [320, 140],
        [100, 120], [170, 90], [230, 90], [300, 120],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r={3 + Math.random() * 2}
          fill="#e8d5a3"
          opacity={0.6 + Math.random() * 0.4}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, delay: 1.8 + i * 0.1, repeat: Infinity }}
        />
      ))}

      {/* Central crown glow */}
      <motion.circle
        cx="200"
        cy="120"
        r="15"
        fill="#e8d5a3"
        opacity="0.9"
        filter="url(#blur-glow)"
        animate={{ r: [15, 18, 15], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  )
}
