<script setup>
defineProps({ blok: Object });
const localePath = useLocalePath();
</script>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    onClickMenuMobile() {
      this.menuOpen = !this.menuOpen;
      const mobileMenu = document.getElementById("main-menu");
      console.log("This is the mobile menu", mobileMenu);
      if (this.menuOpen === true) {
        mobileMenu.style.display = "block";
        console.log("Is menu Open", this.menuOpen);
      } else {
        mobileMenu.style.display = "none";
        console.log("Is menu Open", this.menuOpen);
      }
    },
  },
};
</script>

<template>
  <header v-editable="blok" class="new-design-header inner-page-menu sticky">
    <div class="menu-bar">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <a class="logo" :href="localePath('/')">
              <img
                class="sticky-logo"
                src="https://evercam.io/wp-content/themes/evercam/img/section-1-logo2.png"
                alt="Logo"
              />
            </a>
            <span
              id="menu-btn"
              @click="onClickMenuMobile"
              :class="menuOpen ? 'active' : ''"
            ></span>
          </div>
          <NavigationMenu :blok="blok" />
        </div>
      </div>
    </div>
  </header>
</template>
