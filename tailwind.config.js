/ @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src//*.{html,ts}",
  ],
  theme: {
    colors: {
      '100': '#dbe9fe',
      '200': '#bfdafe',
      '300': '#94c3fc',
      '400': '#61a3f9',
      '500': '#3c7ff5',
      '600': '#2660ea',
      '700': '#1e4cd7',
      '800': '#1f3fae',
      '900': '#203b8f',
      '1000': '#cfd1d2',
      '1100': '#aeb1b2',
      '1200': '#85898b',
      '1300': '#6a6e70',
      '1400': '#5a5d5f',
      '1500': '#252627',
      '1600': '#FFFFFF',
    },
    fontSize: {
      sm: '12px',
      base: '16px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '32px',

    },
    extend: {

    },
  },
  plugins: [],
}

