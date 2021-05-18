export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Voron black',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // import '@splidejs/splide/dist/css/themes/splide-default.min.css';
  css: [
    '@/assets/css/main.css',
    '@/assets/css/mobile.css',
    '@/static/fa/css/all.min.css',
    '@splidejs/splide/dist/css/themes/splide-default.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/filters',
    { src: '@/plugins/carousel', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    }
  },

  loading: false,


  // router: {
  //   scrollBehavior: async (to, from, savedPosition) => {
  //     if (savedPosition) {
  //       return savedPosition
  //     }

  //     // const findEl = async (hash, x) => {
  //     //   return document.querySelector(hash) ||
  //     //     new Promise((resolve, reject) => {
  //     //       if (x > 50) {
  //     //         return resolve()
  //     //       }
  //     //       setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 500)
  //     //     })
  //     // }

  //     if (to.hash) {
  //       let el = await findEl(to.hash)
  //       if ('scrollBehavior' in document.documentElement.style) {
  //         // return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
  //         return window.scrollTo({ top: 100, behavior: 'smooth' })
  //       } else {
  //         return window.scrollTo(0, el.offsetTop)
  //       }
  //     }

  //     return { x: 0, y: 0 }
  //   }
  // },




}
