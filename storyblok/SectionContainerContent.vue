<script setup>
const props = defineProps({ blok: Object })
const resolvedContent = computed(() => renderRichText(props.blok.content))
const videoSource = ["vimeo", "youtube", "mp4", ".mp4"]
const imageSource = ["webp", "png", "jpg", "jpeg", "gif"]
const assetSource = props.blok.asset
  ? props.blok.asset.filename
  : "https://a.storyblok.com/f/208852/1920x932/f9ba743fd2/bim-compare-bentley-4d-view.webp/m/250x0?cv=1681284255111"

// console.log("This is the asset", assetSource)

let isVideo = false

/**
 * Check if Youtube and make it embed
 */

const fromYoutube = "www.youtube.com/watch"
let isYoutube = assetSource.includes(fromYoutube)
let assetCheck = ""

if (isYoutube) {
  assetCheck = assetSource.replace("watch?v=", "embed/")
  // console.log("This is assetCheck", assetCheck);
  // console.log("This is assetSource", assetSource);
} else {
  assetCheck = assetSource
}

if (assetCheck) {
  if (
    videoSource.some(function (v) {
      return assetCheck.indexOf(v) > -1
    })
  ) {
    isVideo = true
    // console.log("It's Video", assetCheck);
  } else {
    // assetCheck = false;
    // console.log("Is Video?", isVideo);
    // console.log("It's Image", assetCheck);
  }
}
</script>

<template>
  <section class="text-center center-content-section">
    <div class="container text-center">
      <h2 v-if="blok.name">{{ blok.name }}</h2>
      <div v-html="resolvedContent"></div>
      <div v-if="blok.asset.filename != null" class="box-shadow">
        <div
          v-if="videoSource.some((el) => blok.asset.filename.includes(el))"
          class="embed-responsive embed-responsive-16by9"
        >
          <iframe
            class="embed-responsive-item lazyloaded"
            allowfullscreen="allowfullscreen"
            :src="assetCheck"
          ></iframe>
        </div>
        <div
          v-if="imageSource.some((el) => blok.asset.filename.includes(el))"
          class="embed-responsive"
        >
          <img :src="assetCheck" class="lazyloaded" alt="image" />
        </div>
      </div>
    </div>
  </section>
</template>
