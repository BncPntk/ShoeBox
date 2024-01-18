/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customBrown: '#7C5D43',
        customDarkBrown: '#322821',
        customPurple: '#5C5470',
        customDarkPurple: '#372F4B',
      },
    },
  },
  plugins: [],
};
