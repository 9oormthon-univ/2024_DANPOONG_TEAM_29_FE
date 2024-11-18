/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A8CFF',
        'light-gray': '#D9D9D9',
        gray: '#838383',
      },
    },
  },
  plugins: [],
};
