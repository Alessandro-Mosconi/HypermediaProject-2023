// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Celesta Capital',
            charset: 'utf-8',
            meta: [
                {
                    name: 'description',
                    content: 'Celesta Capital is a venture capital for space-related startups.'
                },
                {
                    name: 'keywords',
                    content: 'celesta, capital, venture, firm, space, startup'
                }
            ]
        },
    },
    css: [
        '~/assets/css/general.css'
    ],
    modules: [
        '@nuxtjs/supabase',
        '@pinia/nuxt',
    ],
    imports: {
      dirs: ['./stores'],
    },
    pinia: {
      autoImports: [
        // automatically imports `defineStore`
        'defineStore', // import { defineStore } from 'pinia'
        ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
      ],
    },
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    ssr: true
})
