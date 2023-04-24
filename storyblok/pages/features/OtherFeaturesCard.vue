<script setup>
const props = defineProps({ feature: Object, slug: String });
const thumbnailAsset = props.feature.image_thumbnail
  ? props.feature.image_thumbnail.filename
  : "https://a.storyblok.com/f/208852/1024x576/786f8fa4c3/other_timelapse.webp/m/250x0?cv=1681194645343";
</script>

<template>
  <div v-editable="feature" class="wrapper slide-up">
    <NuxtLink :to="'/' + slug" class="image-wrapper">
      <img v-if="thumbnailAsset" :src="thumbnailAsset" alt="" />
      <img v-else src="https://a.storyblok.com/f/208852/1024x576/786f8fa4c3/other_timelapse.webp/m/250x0?cv=1681194645343" alt="" />
    </NuxtLink>
    <h3>
      {{ feature.name }}
    </h3>
  </div>
</template>
