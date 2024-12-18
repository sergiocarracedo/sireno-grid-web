module.exports = {
  mode: "universal",

  /*
  ** Headers of the page
  */
  head: {
    title:
      "Sireno Grid: A lightweight CSS Grid system based on CSS Grid Layout with flexbox fallback for unsupported browsers.",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Sireno Grid: A lightweight CSS Grid system based on CSS Grid Layout with flexbox fallback for unsupported browsers."
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "SirenoGrid CSS"
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "A lightweight CSS Grid system based on CSS Grid Layout with flexbox fallback for unsupported browsers."
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://sergiocarracedo.github.io/sireno-grid-web/og-image.jpg"
      },
      {
        property: "twitter:card",
        content: "summary_large_image"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#ff4260" },

  /*
  ** Global CSS
  */
  css: [
    process.env.DEPLOY_ENV === "GH_PAGES"
      ? "sireno-grid/dist/sireno-grid.css"
      : "assets/sireno-grid/sireno-grid.scss",
    "assets/scss/sireno-web.scss"
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ["plugins/htmlentities.js"],

  /*
  ** Nuxt.js modules
  */
  modules: [],

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
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
