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
            { rel: "icon", href: "/soudana.png", type: "image/png"}
            ]
        }
    },
    css: [
        "bulma"
    ]
})
