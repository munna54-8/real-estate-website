module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Example primary color
        secondary: '#FBBF24', // Example secondary color
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}