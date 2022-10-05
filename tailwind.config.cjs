/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'background-stars': "url('/assets/bg-stars.svg')",
      },
      colors: {
        white: '#ffffff',
        black: '#070724',
        'gray-dark': '#38384F',
        gray: '#838391',
        'blue-light': '#419EBB',
        yellow: '#EDA249',
        purple: '#6F2ED6',
        'orange-100': '#CD5120',
        'orange-200': '#D14C32',
        'orange-300': '#D83A3A',
        green: '#1EC1A2',
        blue: '#2D68F0',
      },
      fontFamily: {
        antonio: ['Antonio', 'sans-serif'],
        spartan: ['Spartan', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
