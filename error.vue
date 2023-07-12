<template>
  <SectionNavigationWhite :blok="blok" />
  <div id="banner-404">
    <div class="video-container">
      <!--<div class="filter"></div>-->
      <video autoplay="" loop="" muted="" class="fillWidth" id="banner-video">
        <source
          src="https://evercam.io/wp-content/themes/evercam/videos/Page-Error.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="container">
      <div class="wrapper-404">
        <h1>404 Page Not Found</h1>
        <p class="hidden">{{ error.message }}</p>
        <div class="btn-wrappers">
          <a href="/" class="btn-style">BACK TO HOMEPAGE</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionNavigationWhite from "./storyblok/SectionNavigationWhite.vue"
defineProps(["error"])
</script>
