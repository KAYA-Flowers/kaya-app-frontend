// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: ['@nuxt/image', '@nuxt/scripts', '@nuxt/ui', '@nuxtjs/i18n', '@nuxt/fonts', '@pinia/nuxt'],
    css: ['~/assets/scss/base.scss'],
    i18n: {
        defaultLocale: 'de',
        locales: [
            { code: 'de', name: 'German', file: 'de.json' }
        ]
    }
})