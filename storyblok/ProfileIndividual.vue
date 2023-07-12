<script setup>
const props = defineProps({ blok: Object })
</script>

<template>
  <div v-if="blok.photo" class="col-md-3 col-6 slide-up">
    <img :src="blok.photo" :alt="blok.name" />
    <h3>{{ blok.name }}</h3>
    <span>{{ blok.title }}</span
    ><a :href="blok.linkedin" target="_blank" class="linkedin"></a>
  </div>
</template>
