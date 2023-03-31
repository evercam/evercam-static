import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faMapMarkerAlt, faThLarge } from '@fortawesome/free-solid-svg-icons'

// library.add(faSearch, faMapMarkerAlt, faThLarge, faWhatsapp, faGithub, faLinkedin, faTwitter, faFacebook, faVimeo, faYoutube, faInstagram)
library.add(faSearch, faMapMarkerAlt, faThLarge, fab)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})