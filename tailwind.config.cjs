const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,ts,json}'],
  theme: {
    fontFamily: {
      sans: ['Rubik', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
}
