<script setup>
defineProps({ blok: Object });
</script>

<template>
  <header v-editable="blok" class="new-design-header inner-page-menu sticky">
    <div class="menu-bar menu-white">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <a class="logo" href="/">
              <img
                class="sticky-logo"
                src="https://evercam.io/wp-content/themes/evercam/img/section-1-logo2.png"
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
