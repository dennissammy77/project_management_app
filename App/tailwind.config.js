/** @type {import('tailwindcss').Config} */

//Font style
module.exports = {
    content: [
      "./App.{js,jsx,ts,tsx}", 
      "./src/screens/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        colors:{
          'background-color-1':'#eeeeee',
          'secondary-color-1':'#714DD9',
          'secondary-color-2':'#232229',
          'primary-color':'#ffffff',
        },
      },
    },
    plugins: [],
  }