/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'mobil': '480px',
        'sm': '640px',  
        'md': '768px',  
        'lg': '1024px',  
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

