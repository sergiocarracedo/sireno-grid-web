const pkg = require('./package')

console.log('DEPLOY_ENV: ', process.env.DEPLOY_ENV)
module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Sireno Grid: A lightweight Css grid system based in CSS Grid Layout width flex fallback.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sireno Grid: A lightweight Css grid system based in CSS Grid Layout width flex fallback.' }
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
    process.env.DEPLOY_ENV == 'gh-pages' ? 'sireno-grid/dist/sireno-grid.css' : 'assets/sireno-grid/sireno-grid.scss',
    'assets/scss/sireno-web.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    'plugins/htmlentities.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS: true,
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
