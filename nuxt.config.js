// https://nuxt.com/docs/api/configuration/nuxt-config
const localeDomains = require('./config/locale-domains')

export default defineNuxtConfig({
    modules: [
        ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_API_KEY }],
        // Activate unlight house only if want to check locally
        // '@unlighthouse/nuxt',
        '@nuxt/image-edge',
        '@nuxtjs/i18n',
        'nuxt-schema-org',
        'nuxt-simple-robots',
        'nuxt-gtag'
    ],
    gtag: {
        id: process.env.G_TAG
    },
    // Activate this if get [ERROR] No loader is configured for ".node" files: node_modules/fsevents/fsevents.node
    vite: {
        //...
        optimizeDeps: { exclude: ["fsevents"] },
    },
    // Activate unlight house only if want to check locally
    // unlighthouse: {
    //     scanner: {
    //         dynamicSampling: false,
    //         device: 'mobile',
    //     }
    // },
    linkChecker: {
        failOn404: false,
    },
    experimental: {
        inlineSSRStyles: false
    },
    nitro: {
        prerender: {
            routes: ['/']
        }
    },
    robots: {
        sitemap: [
            '/sitemap.xml',
        ],
    },
    i18n: {
        locales: localeDomains,
        defaultLocale: 'en-us',
        differentDomains: true,
        detectBrowserLanguage: false
    },
    image: {
        provider: 'storyblok',
        storyblok: {
            baseUrl: 'https://a.storyblok.com'
        }
    },
    extends: [
        'nuxt-seo-kit'
    ],
    runtimeConfig: {
        public: {
            siteUrl: 'https://evercam.com',
            siteName: 'Construction Time-lapse & Project Management Live Cameras | Evercam',
            siteDescription: 'Construction time-lapse cameras & project management software helps in marketing content, project management and dispute avoidance in the construction industry.',
            language: 'en-us', // prefer more explicit language codes like `en-AU` over `en`
        },
        indexable: true
    },
    css: [
        // CSS file in the project
        '@/assets/css/main.css',
        '@fortawesome/fontawesome-svg-core/styles.css',
    ],
    build: {
        transpile: ['@fortawesome/vue-fontawesome'],
    },
    app: {
        head: {
            // title: 'Nuxt - Evercam Demo',
            // meta: [
            //     // <meta name="description" content="My amazing site">
            //     { name: 'description', content: 'Demo from yonathanevan' }
            // ],
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css', integrity: 'sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor', crossorigin: 'anonymous' },
                { rel: 'stylesheet', href: 'https://evercam.io/wp-content/themes/evercam/css/main.css?id=2165878 ' },
                { rel: 'stylesheet', href: 'https://evercam.io/wp-content/themes/evercam/css/main.css?id=3162236' },
                { rel: 'stylesheet', href: 'https://evercam.io/wp-content/themes/evercam/fontawesome/css/all.min.css' },
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
