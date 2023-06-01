<script setup>
defineProps({ blok: Object })
const localePath = useLocalePath()
</script>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    }
  },
  methods: {
    onClickMenuMobile() {
      this.menuOpen = !this.menuOpen
      const mobileMenu = document.getElementById("main-menu")
      console.log("This is the mobile menu", mobileMenu)
      if (this.menuOpen === true) {
        mobileMenu.style.display = "block"
        console.log("Is menu Open", this.menuOpen)
      } else {
        mobileMenu.style.display = "none"
        console.log("Is menu Open", this.menuOpen)
      }
    },
  },
}
</script>

<template>
  <header
    v-editable="blok"
    id="header-transparent"
    class="new-design-header bg-header header-transparent sticky"
  >
    <div class="menu-bar">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <a class="logo" :href="localePath('/')">
              <img
                class="lazyloaded"
                src="https://evercam.io/wp-content/themes/evercam/img/white-logo.svg"
                data-src="https://evercam.io/wp-content/themes/evercam/img/white-logo.svg"
                alt="Logo"
              />
              <img
                class="sticky-logo"
                src="https://evercam.io/wp-content/themes/evercam/img/white-logo.svg"
                alt="Logo"
              />
            </a>
            <span
              id="menu-btn"
              @click="onClickMenuMobile"
              :class="menuOpen ? 'active' : ''"
            ></span>
          </div>
          <NavigationMenu />
        </div>
      </div>
    </div>
  </header>
</template>
