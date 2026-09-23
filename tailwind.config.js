/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#FAF9F6', // Base light background (alabaster/linen)
          900: '#FFFFFF', // Cards & sections - pure white
          850: '#F1EFEA', // Subtle warm contrast
          800: '#FFFFFF', // Elevated cards - pure white
          700: '#E2E8F0', // Light border / divider
          600: '#CBD5E1',
          500: '#94A3B8',
          slate: '#0F172A',
        },
        ink: {
          DEFAULT: '#0F172A', // Deep executive slate for headings
          950: '#020617',
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
        },
        cream: {
          DEFAULT: '#334155', // Slate 700 - rich readable body text
          light: '#64748B',   // Slate 500 - elegant secondary text
          dark: '#0F172A',    // Slate 900 - dark text
        },
        gold: {
          DEFAULT: '#B88A45', // Warm antique luxury bronze-gold (high contrast on light)
          light: '#C99D5A',
          muted: '#9E6F2B',
          dark: '#835A1E',
          subtle: 'rgba(184, 138, 69, 0.12)',
        },
        slate: {
          soft: '#64748B',
          light: '#F8FAFC',
          border: 'rgba(15, 23, 42, 0.08)',
          'border-gold': 'rgba(184, 138, 69, 0.28)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Manrope', 'sans-serif'],
        editorial: ['Cormorant Garamond', 'Playfair Display', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em',
        widest: '0.2em',
        grand: '0.28em',
      },
      boxShadow: {
        'glow-gold': '0 8px 25px -4px rgba(184, 138, 69, 0.25)',
        'glow-subtle': '0 20px 40px -15px rgba(15, 23, 42, 0.06)',
        'card-dark': '0 10px 30px -5px rgba(15, 23, 42, 0.06), 0 4px 6px -2px rgba(15, 23, 42, 0.03)',
        'premium': '0 20px 45px -12px rgba(15, 23, 42, 0.08)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 0%, var(--tw-gradient-stops))',
        'gold-shimmer': 'linear-gradient(135deg, #B88A45 0%, #E8D3B0 50%, #A27330 100%)',
      },
    },
  },
  plugins: [],
}
