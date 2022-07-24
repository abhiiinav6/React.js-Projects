/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
          "xx": "hsl(229, 64%, 46%)",
      },
    },
  },
  plugins: [],
}
