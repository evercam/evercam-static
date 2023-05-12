<script setup>
const props = defineProps({ tutorial: Object, slug: String });

const imageThumbnail = props.tutorial.image_thumbnail
  ? props.tutorial.image_thumbnail
  : "https://a.storyblok.com/f/208852/1920x1083/82ba327790/asset-heading_placeholder.jpg";
</script>

<template>
  <div class="col-md-3 slide-up">
    <a :href="'/' + slug">
      <img
        :alt="tutorial.title"
        v-if="imageThumbnail"
        :src="imageThumbnail"
      />
      <h3>{{tutorial.title}}</h3>
    </a>
    <p>{{ tutorial.short_description }}</p>
  </div>
</template>
