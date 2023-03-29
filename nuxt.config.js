// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_API_KEY }],
        '@nuxt/image-edge',
    ],
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
                // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css', integrity: 'sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor', crossorigin: 'anonymous' },
                // { rel: 'stylesheet', href: 'https://evercam.io/wp-content/themes/evercam/css/main.css?id=2165878 '},
                { rel: 'stylesheet', href: 'https://evercam.io/wp-content/themes/evercam/css/main.css?id=3162236'},
                { rel: 'stylesheet', href: 'https://evercam.io/wp-content/themes/evercam/fontawesome/css/all.min.css'},
                { rel: 'icon', type: 'image/x-icon', href: 'https://evercam.io/favicon.ico' }
            ],
            script: [
                { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js', integrity: 'sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2', crossorigin: 'anonymous' },
                { src: "https://zcs1.maillist-manage.com/js/jquery.form.js", async: true,
                defer: true }, 
                { src: "https://zcs1.maillist-manage.com/js/optin_min.js", async: true,
                defer: true },
            ]
        },
    },
})
