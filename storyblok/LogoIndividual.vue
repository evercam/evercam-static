<script setup>
const props = defineProps({ blok: Object })
// const isLink = props.blok.
</script>

<template>
  <li v-if="blok.image.filename" class="slideUp">
    <div v-if="blok.link.url">
      <a :href="blok.link.url" rel="nofollow" target="_blank">
        <img class="lazyloaded" :src="blok.image.filename" alt="Image" />
      </a>
    </div>
    <div v-else>
      <img class="lazyloaded" :src="blok.image.filename" alt="Image" />
    </div>
  </li>
</template>
