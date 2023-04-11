<script>
import SectionNavigationTransparent from "@/storyblok/SectionNavigationTransparent.vue";
import SectionBreadcrumbLeftAll from "@/storyblok/SectionBreadcrumbLeftAll.vue";
import SectionChatbox from "@/storyblok/SectionChatbox.vue";
import SectionFooter from "@/storyblok/SectionFooter.vue";
import SectionAskUs from "@/storyblok/SectionAskUs.vue";
import OtherFeaturesCard from "./OtherFeaturesCard.vue";
// import FeaturesListInternal from "./FeaturesListInternal.vue";

export default {
  components: {
    SectionNavigationTransparent,
    SectionBreadcrumbLeftAll,
    SectionChatbox,
    SectionAskUs,
    SectionFooter,
    OtherFeaturesCard
},
};
</script>

<script setup>
const props = defineProps({ blok: Object });
const urlPath = useRoute().path;

const resolvedContentDescription = computed(() =>
  renderRichText(props.blok.content_description)
);

const resolvedContentAdditionalDescription = computed(() =>
  renderRichText(props.blok.full_additional_section[0].content_description)
);

const features = ref(null);
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories", {
  version: useRoute().query._storyblok ? "draft" : "published",
  starts_with: "features",
  is_startpage: false,
});
features.value = data.stories;


/** 
 * TODO: 
 * Only show other Feature
 *  */
const otherFeature = computed(() => {
  return features.value.find( feature => !urlPath.includes(feature.full_slug) ) !== undefined
})
console.log("This is the other feature list", features.value)
console.log("This is the full slug", urlPath)
console.log("Is this other feature", otherFeature)

// console.log("This is the feature card list Heading", props.blok.feature_list_card.heading)

// const resolvedContentFeatures = computed(() =>
//   renderRichText(props.blok.content_description)
// );

/** Todo
 * Check the type of Features Content, if it's
 * Video,
 * Image, and
 * Richtext
 */

const videoSource = ["vimeo", "youtube", "mp4", ".mp4"];
const imageSource = ["webp", "png", "jpg", "jpeg", "gif"];
const assetSource = props.blok.asset_heading.filename;
let isVideo = false;
if (
  videoSource.some(function (v) {
    return assetSource.indexOf(v) > -1;
  })
) {
  isVideo = true;
  console.log("It's Video", assetSource);
} else {
  // assetSource = false;
  console.log("It's Image", assetSource);
}

/**
 * Build a function to check Feature Section with isVideo
 * const isVideo => function to check and pass true or false
 */

// const isFeatureVideo = (props) => {
//   if (videoSource.indexOf(props) > -1) {
//       //In the array!
//       console.log("is in array!");
//   } else {
//       //Not in the array
//       console.log("Not in array!");
//   }
// }

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
  <!-- Heading section -->
  <section
    v-if="blok.content_name"
    id="marketing-up"
    class="project-management"
  >
    <div class="container text-center">
      <h2>{{ blok.content_name }}</h2>
      <div v-html="resolvedContentDescription"></div>
    </div>
    <div class="container tick-image text-center">
      <div class="row">
        <!-- {{ blok.feature_list_card }} -->
        <!-- <FeaturesListInternal
          v-for="feature in blok.feature_list_card"
          :key="feature.uuid"
          :heading="feature.heading"
          :description="feature.description"
        /> -->
        <div v-for="card in blok.feature_list_card" class="col-md-4">
          <img :src="card.image.filename" alt="" />
          <h3>
            {{ card.heading }}
          </h3>
          <p>
            {{ card.description }}
          </p>
        </div>
      </div>
      <!-- <div v-else class="row">
      </div> -->
    </div>
  </section>
  <!-- Video or Image Heading -->
  <section v-if="!isVideo" id="bmi-image" class="d-none d-md-block">
    <div class="container">
      <img :src="blok.asset_heading.filename" alt="Image" />
    </div>
  </section>
  <section v-if="isVideo" id="bmi-video" class="d-none d-md-block">
    <div class="container">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe
          class="embed-responsive-item"
          :src="blok.asset_heading.filename"
          allowfullscreen=""
        ></iframe>
        {{ blok.asset_heading }}
      </div>
    </div>
  </section>
  <!-- Feature List 1st -->
  <div v-if="blok.feature_list_section">
    <div v-for="feature in blok.feature_list_section">
      <section
        v-if="feature.component === 'section-feature-left-image-right'"
        class="bottom-content-section"
      >
        <div class="container">
          <div class="row">
            <div
              v-if="
                imageSource.some((el) => feature.asset.filename.includes(el))
              "
              class="col-md-7 order-md-2"
            >
              <img
                :src="feature.asset.filename"
                class="lazyloaded"
                alt="image"
              />
            </div>
            <div
              v-if="
                videoSource.some((el) => feature.asset.filename.includes(el))
              "
              class="col-md-7 order-md-2"
            >
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  class="embed-responsive-item lazyloaded"
                  title="vimeo242232239"
                  name="fitvid0"
                  allowfullscreen="allowfullscreen"
                  :src="feature.asset.filename"
                ></iframe>
              </div>
            </div>
            <div v-else class="col-md-7 order-md-2"></div>
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
                :src="feature.asset.filename"
                class="lazyloaded"
                :data-src="feature.asset.filename"
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

  <!-- Heading 2nd section -->
  <section
    v-if="blok.full_additional_section"
    id="marketing-up"
    class="project-management"
  >
    <div
      v-for="blok in blok.full_additional_section"
      class="container text-center"
    >
      <h2>{{ blok.content_name }}</h2>
      <div v-html="resolvedContentAdditionalDescription"></div>
      <div class="box-shadow">
        <div
          v-if="videoSource.some((el) => blok.asset.filename.includes(el))"
          class="embed-responsive embed-responsive-16by9"
        >
          <iframe
            class="embed-responsive-item lazyloaded"
            allowfullscreen="allowfullscreen"
            :src="blok.asset.filename"
          ></iframe>
        </div>
        <div
          v-if="imageSource.some((el) => blok.asset.filename.includes(el))"
          class="embed-responsive embed-responsive-16by9"
        >
          <img
            :src="blok.asset.filename"
            class="lazyloaded"
            :data-src="blok.asset.filename"
            alt="image"
          />
        </div>
      </div>
    </div>
    <div
      v-for="blok in blok.full_additional_section.feature_list_card"
      class="container tick-image text-center"
    >
      <div class="row">
        <div v-for="card in blok.full_additional_section" class="col-md-4">
          <img :src="card.image.filename" alt="" />
          <h3>
            {{ card.heading }}
          </h3>
          <p>
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Feature List 2nd -->
  <div v-if="blok.feature_list_section_2">
    <div v-for="feature in blok.feature_list_section_2">
      <section
        v-if="feature.component === 'section-feature-left-image-right'"
        class="bottom-content-section"
      >
        <div class="container">
          <div class="row">
            <div
              v-if="
                imageSource.some((el) => feature.asset.filename.includes(el))
              "
              class="col-md-7 order-md-2"
            >
              <img
                :src="feature.asset.filename"
                class="lazyloaded"
                alt="image"
              />
            </div>
            <div
              v-if="
                videoSource.some((el) => feature.asset.filename.includes(el))
              "
              class="col-md-7 order-md-2"
            >
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  class="embed-responsive-item lazyloaded"
                  title="vimeo242232239"
                  name="fitvid0"
                  allowfullscreen="allowfullscreen"
                  :src="feature.asset.filename"
                ></iframe>
              </div>
            </div>
            <div v-else class="col-md-7 order-md-2"></div>
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
                :src="feature.asset.filename"
                class="lazyloaded"
                :data-src="feature.asset.filename"
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
  <SectionAskUs />
  <section id="add-ons">
    <div class="container">
      <h2 class="slide-up">Other Features</h2>
      <div class="row">
        <OtherFeaturesCard
          v-for="feature in features"
          :key="feature.uuid"
          :feature="feature.content"
          :slug="feature.full_slug"
        />
        <!-- <div class="col-md-4">
          <div class="wrapper slide-up">
            <div class="image-wrapper">
              <img
                src="https://evercam.io/wp-content/uploads/2021/03/share.jpg"
                alt="Add on"
              />
            </div>
            <h3>Sharing</h3>
          </div>
        </div> -->
        <div class="col-md-4">
          <div class="wrapper slide-up">
            <a
              href="https://evercam.io/features/snapmail"
              class="image-wrapper"
            >
              <img
                src="https://evercam.io/wp-content/uploads/2021/03/snapmail-1.jpg"
                alt="Add on"
              />
            </a>
            <h3>Snapmail</h3>
          </div>
        </div>
        <div class="col-md-4">
          <div class="wrapper slide-up">
            <a
              href="https://evercam.io/features/gate-report"
              class="image-wrapper"
            >
              <img
                src="https://evercam.io/wp-content/uploads/2021/03/gate-report.jpg"
                alt="Add on"
              />
            </a>
            <h3>Gate Report</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  <SectionFooter />
</template>
