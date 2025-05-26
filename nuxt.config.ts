// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  app: {
    pageTransition: {name: 'page', mode: 'out-in'},
    layoutTransition: {name: 'page', mode: 'out-in'},

    head: {
      htmlAttrs: {
        lang: 'fr'
      }
    }
  },

  css: [
    '@/assets/css/animation.css'
  ],

  modules: [
      '@nuxt/image'
  ]

})