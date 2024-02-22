const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Libre Baskerville"', ...defaultTheme.fontFamily.sans]
      }
    }
  },
}