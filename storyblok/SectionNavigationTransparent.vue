<script setup>
defineProps({ blok: Object });
const localePath = useLocalePath();
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
            <span id="menu-btn"></span>
          </div>
          <NavigationMenu />
        </div>
      </div>
    </div>
  </header>
</template>
