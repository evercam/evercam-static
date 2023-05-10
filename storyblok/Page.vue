<template>
  <StoryblokComponent
    v-for="blok in blok.body"
    :key="blok._uid"
    :blok="blok"
    v-editable="blok"
  />
</template>

<script setup>
defineProps({ blok: Object });
const { locale } = useI18n()
</script>
