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
        'inverse-default': defaultTheme.colors.blue[100],
        'inverse-primary': defaultTheme.colors.blue[200]
      }
    }
  },
  variants: {},
  plugins: []
}
