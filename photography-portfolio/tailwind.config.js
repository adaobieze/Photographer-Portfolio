/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html'
  ],
  content: [],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['Cormorant', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        white: '#ffffff',
        primary: '#594E42',
      },
      fontSize: {
        tiny: ["0.625rem", "0.8125rem"],
        "tiny+": ["0.6875rem", "0.875rem"],
        "xs+": ["0.8125rem", "1.125rem"],
        "sm+": ["0.9375rem", "1.375rem"],
      },
      screens: {
        'mobile':{'max': '425px'},
        'tablet': {'max': '767px'},
        'laptop': {'max': '1023px'},
        'desktop': {'max': '1279px'},
        'wide': {'max': '1535px'},
      },
    },
  },
  plugins: [],
}

