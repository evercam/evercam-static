<script>
import SectionNavigationTransparent from "@/storyblok/SectionNavigationTransparent.vue";
import SectionBreadcrumbLeftAll from "@/storyblok/SectionBreadcrumbLeftAll.vue";
import SectionChatbox from "@/storyblok/SectionChatbox.vue";
import SectionFooter from "@/storyblok/SectionFooter.vue";
import SectionAskUs from "@/storyblok/SectionAskUs.vue";

export default {
  components: {
    SectionNavigationTransparent,
    SectionBreadcrumbLeftAll,
    SectionChatbox,
    SectionAskUs,
    SectionFooter,
  },
};
</script>

<script setup>
const props = defineProps({ blok: Object });

const resolvedContentDescription = computed(() =>
  renderRichText(props.blok.content_description)
);

// const resolvedContentFeatures = computed(() =>
//   renderRichText(props.blok.content_description)
// );

/** Todo
 * Check the type of Features Content, if it's
 * Video,
 * Image, and
 * Richtext
 */

const imageBackground = props.blok.image_features.filename;
</script>

<template>
  <SectionNavigationTransparent />
  <SectionChatbox />
  <div
    v-editable="blok"
    id="marketing-banner"
    class="trust-banner"
    :style="{
      backgroundImage: 'url(' + imageBackground + ')',
      noRepeat: 'center',
      backgroundSize: 'cover',
    }"
  >
    <div class="container">
      <h1 v-if="blok.name">{{ blok.name }}</h1>
      <p v-if="blok.description">{{ blok.description }}</p>
      <p v-if="blok.button_name">
        <a class="btn-style" :href="blok.button_cta">{{ blok.button_name }}</a>
      </p>
    </div>
  </div>
  <section
    v-if="blok.content_name"
    id="marketing-up"
    class="project-management"
  >
    <div class="container text-center">
      <h2>{{ blok.content_name }}</h2>
      <div v-html="resolvedContentDescription"></div>
    </div>
  </section>
  <section v-if="blok.video_heading" id="bmi-video" class="d-none d-md-block">
    <div class="container">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe
          class="embed-responsive-item"
          :src="blok.video_heading.filename"
          allowfullscreen=""
        ></iframe>
        {{ blok.video_heading }}
      </div>
    </div>
  </section>
  <div v-if="blok.features_list">
    <div v-for="feature in blok.features_list">
      <section
        v-if="feature.component === 'section-feature-left-image-right'"
        class="bottom-content-section"
      >
        <div class="container">
          <div class="row">
            <!-- Need to check if the Content have Video or Image -->
            <div class="col-md-7 order-md-2">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item lazyloaded" title="vimeo242232239" name="fitvid0" allowfullscreen="allowfullscreen" :src="feature.asset.filename"></iframe>
              </div>
              <img 
                  :src="feature.asset.filename"
                  class="lazyloaded"
                  alt="image"
                />
            </div>
            <div class="col-md-5">
              <h2>{{ feature.name }}</h2>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>
      <section
        v-if="feature.component === 'section-feature-right-image-left'"
        class="bottom-content-section"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <img
                :src="feature.image.filename"
                class="lazyloaded"
                :data-src="feature.image.filename"
                alt="image"
              />

            </div>
            <div class="col-md-5 text-md-right">
              <h2 style="text-align: left">{{ feature.name }}</h2>
              <p style="text-align: left">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <SectionAskUs/>
  <SectionFooter />
</template>
