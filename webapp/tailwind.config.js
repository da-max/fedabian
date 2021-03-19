const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        default: defaultTheme.colors.blue[900],
        primary: defaultTheme.colors.blue[800],
        secondary: defaultTheme.colors.gray[700],
        'inverse-default': defaultTheme.colors.blue[100],
        'inverse-primary': defaultTheme.colors.blue[200],
        'inverse-secondary': defaultTheme.colors.gray[300]
      }
    }
  },
  variants: {},
  plugins: []
}
