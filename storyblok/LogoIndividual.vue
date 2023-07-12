<script setup>
const props = defineProps({ 
  blok: Object,
  class_details: Object,
});
</script>

<template>
  <li v-editable="blok" v-if="blok.image.filename" :class="class_details ? class_details : 'slideUp'">
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
