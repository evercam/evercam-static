<script setup>
const urlPath = useRoute().path;
useHead({
  bodyAttrs: {
    class: urlPath.length < 2 ? "home" : "",
  },
});
</script>

<template>
  <slot />
  <SectionFooter />
</template>
