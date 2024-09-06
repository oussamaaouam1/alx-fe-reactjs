/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],  // Replaces 'purge'
  darkMode: 'class',  // Change this if you use dark mode ('media' or 'class')
  theme: {
    extend: {},  // You can extend the theme here
  },
  variants: { extend: {} },
  plugins: [],  // Add Tailwind plugins if you have any
};
