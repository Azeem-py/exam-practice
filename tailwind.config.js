/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { headerBlue: '#03071e', bloodRed: '#660000' },
    },
  },
  plugins: [],
}
