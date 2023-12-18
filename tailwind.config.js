/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        arab: ['Noto Sans Arabic', 'sans-serif'],
        archivo: ['Archivo Black', 'sans-serif'],
        Silkscreen: ['Silkscreen', 'sans-serif'],
      },
      colors:{
        biru : '#150050',
        ungu : '#3F0071',
        ping : '#FB2576',
        kotak : '#001F3F',
        Second : '#41766F',
        Second2 : '#216974',
        Second3 : '#093840',
        transparent: 'rgba(0,0,0,0)',
      }
    },
  },
  plugins: [],
}





