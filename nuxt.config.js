// import route from './plugins'
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  router: { //中间件允许您定义一个自定义函数运行在一个页面或一组页面渲染之前。
    // middleware: ['authorities'],
    // base: '/',
    // router: routes,
    extendRoutes (routes, resolve) {
      routes.splice(0, routes.length,
        {
          path: "*",
          component: resolve(__dirname, 'pages/404.vue'),
          meta: {
            requireAuth: true
          }
        },
        {
          path: "/login",
          name: "login",
          component: resolve(__dirname, 'pages/login.vue')
        },
        {
          path: "/register",
          name: "register",
          component: resolve(__dirname, 'pages/register.vue')
        },
        {
          path: "/restAccount",
          name: "restAccount",
          component: resolve(__dirname, 'pages/restAccount.vue')
        },
        {
          path: "/home",
          component: resolve(__dirname, 'pages/index.vue'),
          meta: {
            requireAuth: true
          }
        })
    }
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/auth',
    // { src: '@/plugins', ssr: true },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
