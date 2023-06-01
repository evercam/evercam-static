<template>
  <div v-editable="blok" id="banner-thankyou">
    <div class="video-container">
      <!--<div class="filter"></div>-->
      <video autoplay="" loop="" muted="" class="fillWidth" id="banner-video">
        <source
          src="https://evercam.io/wp-content/themes/evercam/videos/Thank-you-v1.1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="container">
      <div class="wrapper-404 text-center">
        <h1 class="wp-block-heading">
          Thank you for subscribing to our newsletter.
        </h1>

        <h2 class="wp-block-heading">
          You’ve been added to our list and will hear from us soon.
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
