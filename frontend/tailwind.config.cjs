/** @type {import('tailwindcss').Config} */
console.log('Loading tailwind.config.cjs');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  safelist: [
    'p-4', 'bg-gray-100', 'gap-4', 'text-blue-500', 'text-2xl', 'font-bold', 'flex', 'text-2xl', 'font-bold'
  ],
  plugins: [],
};
