/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ivory: '#F6F2EA',
          sand: '#D8C6AE',
          walnut: '#5A4030',
          charcoal: '#242320',
          brass: '#B69A65',
          gold: '#C7A76D',
          espresso: '#1A1816',
          stone: '#E8E2D8',
          linen: '#FAF7F2',
          clay: '#9D6B4E'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        editorial: '.08em',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(36, 35, 32, 0.08)',
        'luxury-hover': '0 30px 60px -15px rgba(36, 35, 32, 0.16)',
        'inner-subtle': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
