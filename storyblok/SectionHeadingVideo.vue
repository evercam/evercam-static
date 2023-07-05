<script setup>
const props = defineProps({ blok: Object });
</script>

<template>
  <div v-editable="blok" id="banner-thankyou">
    <div v-if="props.blok.video_background" class="video-container">
      <video autoplay="" loop="" muted="" class="fillWidth" id="banner-video">
        <source
          :src="props.blok.video_background.filename"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="container">
      <div class="wrapper-404 text-center">
        <h1 class="wp-block-heading">
          {{ props.blok.headline }}
        </h1>

        <h2 class="wp-block-heading">
          {{ props.blok.description }}
        </h2>
      </div>
    </div>
  </div>
</template>
