<script setup>
const props = defineProps({ blok: Object })
const resolvedContent = computed(() => renderRichText(props.blok.content))
</script>

<template>
  <div v-html="resolvedContent" class="container standard-content"></div>
</template>
