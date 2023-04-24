// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "そうだな",
            titleTemplate: '',
            meta: [
            { name: 'description', content: 'そうだね' },
            { name: 'og:image', content: '/soudana.png' },
            { name: 'og:site_name', content: 'そうだな' }
            ],
            link: [
            { rel: "icon", href: "favicon.ico", type: "image/x-icon"}
            ]
        }
    },
    css: [
        "bulma"
    ],
    modules: [
        'nuxt-purgecss',
        'nuxt-cloudflare-analytics',
        {
            token: "ac39e1fbb25543fd97a96c1a42bcbb44",
            scriptPath: false
        }
    ]
})
