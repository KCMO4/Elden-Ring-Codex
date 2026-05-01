import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'vendor-react':         ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion':        ['framer-motion'],
          'vendor-icons':         ['lucide-react'],
          // Lore chunks (heaviest content)
          'lore-characters-deep': ['./src/data/lore/charactersDeepLore.ts'],
          'lore-characters':      ['./src/data/lore/charactersLore.ts'],
          'lore-timeline-deep':   ['./src/data/lore/timelineDeepLore.ts'],
          'lore-timeline':        ['./src/data/lore/timelineLore.ts'],
          'lore-regions':         ['./src/data/lore/regionsLore.ts', './src/data/lore/regionsDeepLore.ts'],
          'lore-factions':        ['./src/data/lore/factionsLore.ts'],
          'lore-glossary':        ['./src/data/lore/glossaryLore.ts'],
          /* Decorative SVG fallbacks (only rendered when an entity has no image) */
          'fallback-illustrations': ['./src/components/images/FallbackIllustrations.tsx'],
        },
      },
    },
  },
})
