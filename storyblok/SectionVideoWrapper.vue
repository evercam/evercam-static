<script setup>
const props = defineProps({ blok: Object });
const assetSource = props.blok.video_url;

/**
 * Check if Youtube and make it embed
 */

const fromYoutube = "www.youtube.com/watch";
let isYoutube = assetSource.includes(fromYoutube);
let assetCheck = "";

if (isYoutube) {
  assetCheck = assetSource.replace("watch?v=", "embed/");
  // console.log("This is assetCheck", assetCheck);
  // console.log("This is assetSource", assetSource);
} else {
  assetCheck = assetSource;
}
</script>

<template>
  <figure
    class="wp-block-embed-vimeo wp-block-embed is-type-video is-provider-vimeo wp-embed-aspect-16-9 wp-has-aspect-ratio"
    style="width: 100%"
  >
    <div class="wp-block-embed__wrapper">
      <iframe
        v-if="blok.video_url"
        :title="blok.video_name"
        :src="blok.video_url"
        width="500"
        height="281"
        frameborder="0"
        allow=" fullscreen"
        allowfullscreen=""
      ></iframe>
    </div>
  </figure>
</template>
