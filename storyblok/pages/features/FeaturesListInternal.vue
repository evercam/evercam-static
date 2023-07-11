<script setup>
const props = defineProps({ blok: Object })
const resolvedDescription = computed(() =>
  renderRichText(props.blok.description)
)
</script>

<template v-editable="blok">
  <div class="col-md-4">
    <img class="icon" :src="blok.image.filename" alt="" />
    <h3>
      {{ blok.heading }}
    </h3>
    <div v-html="resolvedDescription"></div>
  </div>
</template>
