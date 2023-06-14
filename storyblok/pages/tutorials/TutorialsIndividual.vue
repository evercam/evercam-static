<script>
import SectionNavigationWhite from "@/storyblok/SectionNavigationWhite.vue";
import SectionBreadcrumbLeftRight from "@/storyblok/SectionBreadcrumbLeftRight.vue";
import SectionContainerContent from "../../SectionContainerContent.vue";
import SectionAskUs from "@/storyblok/SectionAskUs.vue";
// import SectionVideoWrapper from "../../SectionVideoWrapper.vue";

export default {
  components: {
    SectionNavigationWhite,
    SectionBreadcrumbLeftRight,
    SectionContainerContent,
    SectionAskUs,
    // SectionVideoWrapper,
  },
};
</script>

<script setup>
const props = defineProps({ blok: Object });
const urlPath = useRoute().path;

const resolvedContent = computed(() => renderRichText(props.blok.content));

const tutorials = ref(null);
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories", {
  version: useRoute().query._storyblok ? "draft" : "published",
  starts_with: "tutorials",
  is_startpage: false,
});
tutorials.value = data.stories;

let assetSource = ""

if(props.blok.video_url.filename != "") {
  assetSource = props.blok.video_url.filename;
}
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
  <SectionNavigationWhite :blok="blok" />
  <SectionBreadcrumbLeftRight />
  <div v-editable="blok" class="standard-content container">
    <figure
      v-if="assetSource"
      class="wp-block-embed-vimeo wp-block-embed is-type-video is-provider-vimeo wp-embed-aspect-16-9 wp-has-aspect-ratio"
      style="width: 100%"
    >
      <div class="wp-block-embed__wrapper">
        <iframe
          v-if="assetCheck"
          :title="blok.video_name"
          :src="assetCheck"
          width="500"
          height="281"
          frameborder="0"
          allow=" fullscreen"
          allowfullscreen=""
        ></iframe>
      </div>
    </figure>
    <div class="standard-content" v-html="resolvedContent"></div>
    <a v-if="blok.button_name"
      class="button-red"
      :href="blok.button_url"
      target="_blank"
      rel="noreferrer noopener"
      >{{ blok.button_name }}</a
    >
    <a v-else
      class="button-red"
      href="https://dash.evercam.io/v2/users/signin"
      target="_blank"
      rel="noreferrer noopener"
      >Login to Evercam</a
    >
  </div>
</template>
