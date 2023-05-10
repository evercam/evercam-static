<template>
  <div v-editable="blok" class="language-dropdown" :class="menuActive ? 'active' : ''">

    <NuxtLink
      class="glob-icon country lang-white"
      id="language-dropdown"
      @click="onClickLocale()"
      href="#"
    >
      <span class="country"> {{ locale.toUpperCase() }} </span>
    </NuxtLink>
    <div class="language-menu">
      <a href="#" class="glob-icon country" @click="onClickLocale()" id="language-dropdown-close">
        <span class="country"> {{ locale.toUpperCase() }} </span>
      </a>
      <NuxtLink
        v-for="{ code, name } in locales"
        :key="code"
        :to="switchLocalePath(code)"
      >
        {{ name }}
      </NuxtLink>
      <!-- <a href="https://evercam.uk">UK</a>
      <a href="https://evercam.sg">SG</a>
      <a href="https://evercam.com.au">AU</a>
      <a href="https://evercam.com">US</a>
      <a href="https://evercam.pl">PL</a> -->
    </div>
  </div>

  <div class="language-bar d-block d-sm-none">
    <a href="#" class="glob-icon country" @click="onClickLocale()" id="language-dropdown-close">
        <span class="country"> {{ locale.toUpperCase() }} </span>
      </a>
      <NuxtLink
        v-for="{ code, name } in locales"
        :key="code"
        :to="switchLocalePath(code)"
      >
        {{ name }}
      </NuxtLink>  
    <!-- <a href="https://evercam.uk">UK</a>
    <a href="https://evercam.sg">SG</a>
    <a href="https://evercam.com.au">AU</a>
    <a href="https://evercam.com">US</a>
    <a href="https://evercam.pl">PL</a> -->
  </div>
</template>

<script setup>
// let menuActive = false;
defineProps({ blok: Object });
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
