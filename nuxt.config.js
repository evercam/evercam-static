// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_API_KEY }],
        '@nuxt/image-edge',
        '@nuxtjs/i18n',
    ],
    i18n: {
        locales: [
            {
                code: 'ie',
                name: 'IE'
            },
            {
                code: 'en-au',
                name: 'AU'
            },
            {
                code: 'en-gb',
                name: 'UK'
            },
        ],
        defaultLocale: 'ie',
        strategy: 'prefix_except_default'
    },
    image: {
        provider: 'storyblok',
        storyblok: {
            baseUrl: 'https://a.storyblok.com'
        }
    },
    css: [
        // CSS file in the project
        '@/assets/css/main.css',
        '@fortawesome/fontawesome-svg-core/styles.css',
    ],
    // nitro: {
    // prerender: {
    //     routes: ['/sitemap.xml']
    // }
    // },
    build: {
        transpile: ['@fortawesome/vue-fontawesome'],
    },
    app: {
        head: {
            title: 'Nuxt - Evercam Demo',
            meta: [
                // <meta name="description" content="My amazing site">
                { name: 'description', content: 'Demo from yonathanevan' }
            ],
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css', integrity: 'sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor', crossorigin: 'anonymous' },
                { rel: 'stylesheet', href: 'https://evercam.io/wp-content/themes/evercam/css/main.css?id=2165878 '},
                { rel: 'stylesheet', href: 'https://evercam.io/wp-content/themes/evercam/css/main.css?id=3162236'},
                { rel: 'stylesheet', href: 'https://evercam.io/wp-content/themes/evercam/fontawesome/css/all.min.css'},
                { rel: 'icon', type: 'image/x-icon', href: 'https://evercam.io/favicon.ico' }
            ],
            script: [
                { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js', integrity: 'sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2', crossorigin: 'anonymous' },
                {
                    type: 'text/javascript',
                    id: 'zsiqchat',
                    body: true,
                    innerHTML: `var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "694935cc19da1884296ec776ee2796a95201621fa2797eb644df334acc9aa292", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);`
                }
            ]
        },
    },
})
