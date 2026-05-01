/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        codex: {
          black: '#13110d',
          brown: '#261b15',
          green: '#15211c',
          gold: '#d4ad62',
          'gold-dim': '#b08e58',
          'gold-bright': '#f2deb0',
          parchment: '#ede0c5',
          'parchment-dim': '#d4c8b0',
          ink: '#352a20',
          crimson: '#bf4848',
          rot: '#a04270',
          ghost: '#5a72b5',
          flame: '#c97352',
        }
      },
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        subheading: ['Cormorant Garamond', 'serif'],
        body: ['Merriweather', 'serif'],
      },
      backgroundImage: {
        'parchment-gradient': 'linear-gradient(to bottom right, #1c1410, #0f1a15)',
        'gold-glow': 'radial-gradient(circle, rgba(197,160,89,0.15) 0%, rgba(0,0,0,0) 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { filter: 'brightness(1)' },
          '100%': { filter: 'brightness(1.3)' },
        }
      }
    },
  },
  plugins: [],
}
