/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nohemi: ["var(--font-nohemi)", "sans-serif"],
        delight: ["var(--font-delight)", "cursive"],
      },
    },
  },
  plugins: [],
};
