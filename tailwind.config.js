/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      "classic": ['Barlow', 'sans-serif'],
      "original": ['Fraunces', 'serif']
    },
    colors: {
      "midnight": "#23303E",
      "shuttleGrey": "#5A636C",
      "manatee": "#818498",
      "jordyBlue": "#72ABE3",
      "turbo": "#FACC15",
      "white": "#FFFFFF",
      "transparent": "transparent"
    },
    extend: {},
  },
  plugins: [],
}