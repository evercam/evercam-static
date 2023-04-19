<script setup>
const props = defineProps({ blok: Object });
const resolvedFeatureName = computed(() => renderRichText(props.blok.name));
const resolvedDescription = computed(() => renderRichText(props.blok.description));


const videoSource = ["vimeo.com", "youtube.com", "mp4", ".mp4"];
let assetSource = props.blok.asset.filename;
let assetCheck = '';
let isVideo = false;
const fromYoutube = "www.youtube.com/watch"
let isYoutube = assetSource.includes(fromYoutube);
// console.log("isYoutube", isYoutube)

if (isYoutube) {
  assetCheck = assetSource.replace('watch?v=','embed/')
} else {
  assetCheck = assetSource
}
// console.log("This is the asset", assetCheck);
if (
  videoSource.some(function (v) {
    return assetCheck.indexOf(v) > -1;
  })
) {
  isVideo = true;
}
</script>

<template>
  <section :class="blok.class_option">
    <div class="container">
      <div class="row">
        <div v-if="!isVideo" class="col-md-7">
          <img
            :src="props.blok.asset.filename"
            class="lazyloaded"
            alt="image"
          />
        </div>
        <div v-else class="col-md-7">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              class="embed-responsive-item"
              :src="assetCheck"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
        <div class="col-md-5 text-md-right">
          <div v-html="resolvedFeatureName"></div>
          <div class="section-left-and-right" v-html="resolvedDescription"></div>
          <a v-if="blok.button_name" class="btn-style" :href="blok.button_url">{{ blok.button_name }}</a>
        </div>
      </div>
    </div>
  </section>
</template>
