/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      screens: {
        'xs': '300px',
        'sm': '430px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
        '2xl': '1750px',
      },
      fontFamily: {
        Lato: ['Lato', 'sans-serif'],
        Raleway: ['Raleway', 'Raleway'],
      },
      colors:{
        "primary": "#FF305E",
        "secondary": "#F35E98"
      }
    },
  },
  plugins: [],
}

