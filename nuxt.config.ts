// nuxt.config.ts
export default defineNuxtConfig({
  plugins: [{ src: '~/plugins/bootstrap.client.ts', mode: 'client' }],
  css: ['~/assets/styles/main.css']
})
