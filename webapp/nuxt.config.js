export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Fedabian',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  router: {
    linkExactActiveClass: 'active-link'
  },

  pageTransition: {
    name: 'page'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/fontawesome-module
    '@nuxtjs/fontawesome',
    '@nuxtjs/color-mode'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/nuxt-community/apollo-module
    '@nuxtjs/apollo',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  // Apollo configuration
  apollo: {
    includeNodeModules: true,
    clientConfigs: {
      default: {
        httpEndpoint: process.env.GRAPHQL_ENDPOINT
      }
    }
  },

  // TailwindCss configuration
  tailwindcss: {
    jit: true,
    cssPath: '~/assets/scss/main.scss'
  },

  // Fontawesome configuration
  fontawesome: {
    icons: {
      brands: [
        'faCss3Alt',
        'faDocker',
        'faFedora',
        'faGitlab',
        'faHtml5',
        'faJs',
        'faLinux',
        'faMastodon',
        'faPython',
        'faTwitter',
        'faVuejs'
      ],
      solid: [
        'faBars',
        'faEnvelope',
        'faMoon',
        'faSun'
      ]
    },

    // color mode
    colorMode: {
      classSuffix: ''
    }
  },

  // Robots
  robots: {
    UserAgent: '*',
    Disallow: '',
    Sitemap: process.env.HOST + '/sitemap.xml'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}
