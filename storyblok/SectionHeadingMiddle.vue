<script setup>
const props = defineProps({ blok: Object });
const resolvedContent = computed(() => renderRichText(props.blok.content));

// const route = useRoute().fullPath;

// console.log("This is the url", route);

const assetSource = props.blok.video
  ? props.blok.video
  : "https://player.vimeo.com/video/436930200?autoplay=0&amp;loop=1&amp;autopause=0&amp;title=0&amp;byline=0";

/**
 * Check if Youtube and make it embed
 */

const fromYoutube = "www.youtube.com/watch";
let isYoutube = assetSource.includes(fromYoutube);
let assetCheck = "";

if (isYoutube) {
  assetCheck = assetSource.replace("watch?v=", "embed/");
} else {
  assetCheck = assetSource;
}
</script>

<template>
  <section v-editable="blok" id="marketing-up">
    <div class="container">
      <h2 v-if="blok.name">{{ blok.name }}</h2>
      <div class="text-center" v-html="resolvedContent"></div>
      <div v-if="blok.video" class="box-shadow">
        <div v-for="blok in blok.video" class="embed-responsive embed-responsive-16by9">
          <iframe
            class="embed-responsive-item lazyloaded"
            v-if="blok.url"
            :src="blok.url"
          ></iframe>
        </div>
      </div>
      <div v-if="blok.feature_list_card" class="container">
        <div class="row">
          <FeaturesListInternal
            v-for="feature in blok.feature_list_card"
            :key="feature.uuid"
            :src="feature.image.filename"
            :blok="feature"
          />
        </div>
      </div>
      <div v-if="blok.feature_list_card_middle" class="container">
        <div class="row">
          <FeaturesListMiddle
            v-for="feature in blok.feature_list_card_middle"
            :key="feature.uuid"
            :src="feature.image.filename"
            :blok="feature"
          />
        </div>
      </div>
      <div
        v-if="blok.feature_list_card_left"
        class="row justify-content-center container"
      >
        <div v-for="blok in blok.feature_list_card_left" class="col-lg-4">
          <FeaturesLeftIcon
            v-if="blok.image.filename"
            :blok="blok"
            :src="blok.image.filename"
            :key="blok.uuid"
          />
        </div>
      </div>
    </div>
  </section>
</template>
