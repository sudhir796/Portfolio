/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#06070C',
        panel: 'rgba(255, 255, 255, 0.04)',
        'glass-border': 'rgba(255, 255, 255, 0.12)',
        cyan: '#4CF0FF',
        violet: '#8B5CF6',
        'text-primary': '#F5F6FA',
        'text-dim': '#8B93A7',
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(40px, -60px) scale(1.1)' },
          '66%': { transform: 'translate(-30px, 30px) scale(0.95)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(76, 240, 255, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)' },
        },
      },
      animation: {
        drift: 'drift 20s ease-in-out infinite',
        'drift-reverse': 'drift 25s ease-in-out infinite reverse',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
