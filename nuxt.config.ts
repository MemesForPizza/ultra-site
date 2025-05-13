// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ["~/assets/styles/main.scss"],
  ssr: true,
  nitro: {
    preset: "cloudflare"
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in'}
  }
})
