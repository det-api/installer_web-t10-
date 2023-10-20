/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bottom: {
          '0%': { transform:' translateY(42px)',opacity:'0.5'},
          '100%':{transform:' translateY(0)',opacity:'1'}
        },
        top: {
          '0%': { transform:' translateY(-42px)',opacity:'0.5'},
          '100%':{transform:' translateY(0)',opacity:'1'}
        },
        zoom: {
          '0%': { scale:0,opacity:'0'},
          '100%':{scale:1,opacity:'0.5'}
        },

      },
      colors: {
        'primary-color': '#282c34',
        'text-color':'#ffff'
      }
    },
    fontSize: {
      'header-one':'28px',
    },
    animation: {
      bottom:'bottom 0.7s linear',
      top: 'top 0.7s linear',
      zoom:'zoom 0.7s linear'
    }
  },
  plugins: [],
}

