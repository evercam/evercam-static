<script setup>
defineProps({ blok: Object });
const localePath = useLocalePath();
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>

<script>
export default {
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    onClickLocale() {
      this.menuActive = !this.menuActive;
    },
  },
};
</script>

<template>
  <header v-editable="blok" class="new-design-header bg-header sticky">
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
            <span id="menu-btn"></span>
          </div>
          <NavigationMenu />
        </div>
      </div>
    </div>
  </header>
</template>
