// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['nuxt-gtag', '@nuxt/image'],
  modules: ['nuxt-gtag', '@nuxtjs/seo'],

  gtag: {
    id: 'G-NYN47FGJ5Z',
  },
})