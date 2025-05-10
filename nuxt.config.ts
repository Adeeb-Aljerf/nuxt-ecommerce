// nuxt.config.ts
export default defineNuxtConfig({
  plugins: [{ src: '~/plugins/bootstrap.client.ts', mode: 'client' }],
  css: [
    '~/assets/styles/main.css',
       '~/assets/styles/bootstrap-icons-fix.css',
    'bootstrap-icons/font/bootstrap-icons.css'
   
  ],
   modules: ['@pinia/nuxt', 'nuxt-icon'],
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
