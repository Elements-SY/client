import routes from './router'
export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],

    script: [
      { innerHTML: require('./plugins/postcss-px-to-viewport'), type: 'text/javascript', charset: 'utf-8' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'mint-ui/lib/style.css'
  ],
  router: { //中间件允许您定义一个自定义函数运行在一个页面或一组页面渲染之前。
    extendRoutes: routes
  },
  plugins: [
    '@/plugins/element-ui',
    { src: '@/plugins/mint-ui', ssr: true },
    '@/plugins/auth',
    // { src: '@/plugins', ssr: true },
  ],
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

    postcss: [
      require('postcss-px-to-viewport')({
        viewportWidth: 750,  //视窗的宽度
        viewportHeight: 1334,  //视窗的高度
        unitPrecision: 2, //将px转化为视窗单位值的小数位数
        viewportUnit: 'vw', //指定要转换成的视窗单位值
        selectorBlackList: ['.ignore', '.hairlines'],  //指定不转换视窗单位值得类，可以自定义，可以无限添加
        minPixelValue: 1,  //小于等于1px不转换为视窗单位
        mediaQuery: false  //允许在媒体查询中使用px
      }),
      // require('autoprefixer')({
      //   browsers: ['Android >= 4.0', 'iOS >= 7']
      // })
    ],
    extend (config, ctx) {
    }
  }
}
