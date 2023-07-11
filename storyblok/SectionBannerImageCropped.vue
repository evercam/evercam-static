<script setup>
const props = defineProps({ blok: Object })
const imageBackground = props.blok.image.filename
// let image = blok.image.url
</script>

<template>
  <div
    id="banner-image"
    :style="{
      backgroundImage: 'url(' + imageBackground + ')',
      noRepeat: 'center',
      backgroundSize: 'cover',
    }"
  ></div>
</template>
