<script setup>
const props = defineProps({ blok: Object });
const resolvedFeatureName = computed(() => renderRichText(props.blok.title));
const resolvedDescription = computed(() =>
  renderRichText(props.blok.description)
);

const isPrice = props.blok.is_price;

const videoSource = ["vimeo.com", "youtube.com", "mp4", ".mp4"];
let assetSource = props.blok.asset.filename;
let assetCheck = "";
let isVideo = false;
const fromYoutube = "www.youtube.com/watch";
let isYoutube = assetSource.includes(fromYoutube);

if (isYoutube) {
  assetCheck = assetSource.replace("watch?v=", "embed/");
} else {
  assetCheck = assetSource;
}
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
    <div v-if="assetCheck" class="container">
      <h2 v-if="blok.middle_title">{{ blok.middle_title }}</h2>
      <div class="row">
        <div v-if="!isVideo" class="col-md-7 order-md-2">
          <img
            :src="blok.asset.filename"
            class="lazyloaded"
            data-src="https://evercam.io/wp-content/uploads/2022/02/BIM-compare-Bentley-4d-view.jpg"
            alt="image"
          />
        </div>
        <div v-else class="col-md-7 order-md-2">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              class="embed-responsive-item"
              :src="assetCheck"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
        <div class="col-md-5">
          <small v-if="isPrice">from</small>
          <div v-html="resolvedFeatureName"></div>
          <small v-if="isPrice">/month + installation</small>
          <div
            class="section-left-and-right"
            v-html="resolvedDescription"
          ></div>
          <a
            v-if="blok.button_name"
            class="btn-style"
            :href="blok.button_url"
            >{{ blok.button_name }}</a
          >
        </div>
      </div>
    </div>
    <div v-else class="container">
      <h2 v-if="blok.middle_title">{{ blok.middle_title }}</h2>
      <small v-if="isPrice">from</small>
      <div v-html="resolvedFeatureName"></div>
      <small v-if="isPrice">/month + installation</small>
      <div class="section-left-and-right" v-html="resolvedDescription"></div>
    </div>
  </section>
</template>
