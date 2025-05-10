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
        bgSecond:'#1E212C',
      },
      screens: {
        'xs': '550px',
        'sm': '760px',
        'md': '987px',
        'lg': '1084px',
        'xl': '1380px',
        '2xl': '1746px',
      }
    },
  },
  plugins: [],
}

