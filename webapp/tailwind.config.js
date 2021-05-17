const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      colors: {
        default: defaultTheme.colors.blue[900],
        primary: defaultTheme.colors.blue[800],
        secondary: defaultTheme.colors.gray[700],
        success: defaultTheme.colors.green[800],
        warning: defaultTheme.colors.yellow[800],
        danger: defaultTheme.colors.red[800],
        'inverse-default': defaultTheme.colors.blue[100],
        'inverse-primary': defaultTheme.colors.blue[200],
        'inverse-secondary': defaultTheme.colors.gray[300],
        'inverse-success': defaultTheme.colors.green[300],
        'inverse-warning': defaultTheme.colors.yellow[300],
        'inverse-danger': defaultTheme.colors.red[300]
      }
    }
  },
  variants: {
    backgroundColor: ['dark'],
    textColor: ['dark', 'dark-hover']
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ]
}
