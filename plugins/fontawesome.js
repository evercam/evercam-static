import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faWhatsapp, faGithub, faLinkedin, faTwitter, faFacebook, faVimeo, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faWhatsapp, faGithub, faLinkedin, faTwitter, faFacebook, faVimeo, faYoutube, faInstagram)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})