/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        mainText: '#1E212C',
        secondText:'#ffffff',
        buttonCol:'#FF3F3A',
        textThird:'#424551',
        textForth:'#787A80',
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1746px',
      }
    },
  },
  plugins: [],
}

