import { useScroll, motion } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 z-50 origin-left"
      style={{
        scaleX: scrollYProgress,
        background: 'linear-gradient(to right, #8a7040, #c5a059, #e8d5a3)',
        boxShadow: '0 0 8px rgba(197,160,89,0.5)',
      }}
    />
  )
}
