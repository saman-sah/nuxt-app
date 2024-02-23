// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/main.sass',
  ],
  dir: {
    pages: 'pages/astro'
  },
  modules: [
    '@nuxt/content',
    '@nuxt/pinia'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
