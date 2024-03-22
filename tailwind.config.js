/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",

  'node_modules/flowbite-react/lib/esm/**/*.js'
],
  theme: {
    extend: {
      fontFamily: {
        Averia:['Averia Serif Libre' ,'sans-serif'],
        Roboto: ['Roboto Slab' , 'sans-serif' ],
        Raleway: ['Raleway' , ' sans-serif'],
        Riot: ['Protest Riot' , ' sans-serif'],
        
    },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

