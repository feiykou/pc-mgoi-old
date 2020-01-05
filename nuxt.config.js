
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
  loading: '@/components/loading.vue',
  /*
  ** Global CSS
  */
  css: [    
    'element-ui/lib/theme-chalk/index.css',
    '@/static/css/style.css',
    '@/static/css/animate.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/global',
    '@/plugins/components',
    {src: '@/plugins/vue-lazyload.js', ssr: false}
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
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    prefix: '/api/',
    proxy: true // Can be also an object with default options
  },
  proxy: [
    ['/api', { target: 'http://www.mgoi.net/', pathRewrite: { '^/api': '/api/v1/' } }]
  ],
  
  /*
  ** Build configuration
  */
  build: {
    analyze: false, 
    transpile: [/^element-ui/],
    vendor: ['element-ui','axios'],
    extractCSS: { allChunks: true },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  router: {
    middleware: 'nav',
    extendRoutes (routes, resolve) {
      const indexIndex = routes.findIndex(route => route.chunkName === 'pages/column/index')
      // let index = routes[indexIndex].children.findIndex(route => route.name === 'column-index')
      // routes[indexIndex].children[index] = {
      //   ...routes[indexIndex].children[index],
      //   components: {
      //     default: routes[indexIndex].children[index].component,
      //     columnList: resolve(__dirname, 'components/column-list.vue')
      //   },
      //   chunkNames: {
      //     columnList: 'components/column-list'
      //   }
      // }

      const aboutIndex = routes.findIndex(route => route.chunkName === 'pages/about/index')
      let aindex = routes[aboutIndex].children.findIndex(route => route.name === 'about-index')
      routes[aboutIndex].children[aindex] = {
        ...routes[aboutIndex].children[aindex],
        components: {
          default: routes[aboutIndex].children[aindex].component,
          contact: resolve(__dirname, 'components/about/contact.vue'),
          news: resolve(__dirname, 'components/about/news.vue'),
          recruit: resolve(__dirname, 'components/about/recruit.vue')
        },
        chunkNames: {
          contact: 'components/contact',
          news: 'components/news',
          recruit: 'components/recruit'
        }
      }
    }
  }
}
