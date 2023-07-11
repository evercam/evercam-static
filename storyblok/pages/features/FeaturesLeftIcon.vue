<script setup>
const props = defineProps({ blok: Object })
const resolvedContent = computed(() => renderRichText(props.blok.description))
</script>

<template>
  <div class="d-flex flex-row">
    <img
      class="icon-left"
      v-if="blok.image.filename"
      :src="blok.image.filename"
      alt=""
    />
    <div class="wrapper record">
      <h3>{{ blok.heading }}</h3>
      <div v-html="resolvedContent"></div>
    </div>
  </div>
</template>
