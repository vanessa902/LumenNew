/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#DEDBC8',
        brand: '#3D81E3',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        haffer: ["'Haffer X Trial'", "'Space Grotesk'", 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
