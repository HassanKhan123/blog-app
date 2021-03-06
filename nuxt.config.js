export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'blog-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:'stylesheet',href:'https://fonts.googleapis.com/css2?family=Open+Sans'}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/styles/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js',

  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios'
  ],

  axios:{
    baseURL:"https://nuxt-blog-55f05.firebaseio.com"
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: "https://nuxt-blog-55f05.firebaseio.com"
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  env:{
    baseUrl:'https://nuxt-blog-55f05.firebaseio.com',
    apiKey:"AIzaSyDQjTznLfnz6OUkwxpqA3yAH6EnVeeQAvE"
  },
  pageTransition:{
    name:'fade',
    mode:'out-in'
  }
}
