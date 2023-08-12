/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow :{
        '3xl' : '[7px 7px 0px 0px rgba(0, 0, 0, 0.3)]',
      }
    },
    fontFamily :{
      Roboto : ["Roboto, sans-serif"],
    },
    container: {
      center: true,
      padding: '1rem',
      screens : {
        lg: '1024px',
        xl: '1024px',
        '2xl': '1024px',
      }

    },
  },
  plugins: [],
}

