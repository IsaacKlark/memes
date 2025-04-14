const {heroui} = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/(button|ripple|spinner|modal|table|image|input|card).js"
],
  theme: {
    extend: {},
  },
  plugins: [heroui()],
}

