/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js", // This is the correct way to include Flowbite components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // Require Flowbite plugin correctly
  ],
};
