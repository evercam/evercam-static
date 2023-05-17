<script>
import SectionNavigationTransparent from "@/storyblok/SectionNavigationTransparent.vue";
import SectionBreadcrumbLeftAll from "@/storyblok/SectionBreadcrumbLeftAll.vue";
import SectionAskUs from "@/storyblok/SectionAskUs.vue";
import OtherFeaturesCard from "./OtherFeaturesCard.vue";
import SectionFeatureRightImageLeft from "../../SectionFeatureRightImageLeft.vue";
// import FeaturesListInternal from "./FeaturesListInternal.vue";

export default {
  components: {
    SectionNavigationTransparent,
    SectionBreadcrumbLeftAll,
    SectionAskUs,
    OtherFeaturesCard,
    SectionFeatureRightImageLeft
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

// feature in blok.feature_list_section_2
const features = ref(null);
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories", {
  version: useRoute().query._storyblok ? "draft" : "published",
  starts_with: "marketing",
  is_startpage: false,
});
features.value = data.stories;

/**
 * TODO:
 * Only show other Feature
 *  */
const otherFeature = computed(() => {
  return (
    features.value.find((feature) => !urlPath.includes(feature.full_slug)) !==
    undefined
  );
});

/** Todo
 * Check the type of Features Content, if it's
 * Video,
 * Image, and
 * Richtext
 */

const videoSource = ["vimeo", "youtube", "mp4", ".mp4"];
const imageSource = ["webp", "png", "jpg", "jpeg", "gif"];
// const assetSource = computed(() =>
//   props.blok.asset_heading.filename
// );

const assetSource = props.blok.asset_heading
  ? props.blok.asset_heading.filename
  : "https://a.storyblok.com/f/208852/1920x932/f9ba743fd2/bim-compare-bentley-4d-view.webp/m/250x0?cv=1681284255111";
// const assetSource = "https://a.storyblok.com/f/208852/1920x932/f9ba743fd2/bim-compare-bentley-4d-view.webp/m/250x0?cv=1681284255111";
console.log(assetSource);
// console.log(blok.asset_heading.filename)
let isVideo = false;

/**
 * Check if Youtube and make it embed
 */
const fromYoutube = "www.youtube.com/watch";
let isYoutube = assetSource.includes(fromYoutube);
let assetCheck = "";

if (isYoutube) {
  assetCheck = assetSource.replace("watch?v=", "embed/");
  console.log("This is assetCheck", assetCheck);
  console.log("This is assetSource", assetSource);
} else {
  assetCheck = assetSource;
}

if (assetSource) {
  if (
    videoSource.some(function (v) {
      return assetSource.indexOf(v) > -1;
    })
  ) {
    isVideo = true;
    console.log("It's Video", assetSource);
  } else {
    // assetSource = false;
    console.log("Is Video?", isVideo);
    console.log("It's Image", assetSource);
  }
}

const imageBackground = props.blok.image_features
  ? props.blok.image_features.filename
  : "https://a.storyblok.com/f/208852/1920x932/f9ba743fd2/bim-compare-bentley-4d-view.webp/m/250x0?cv=1681284255111";
console.log("This is the Background", imageBackground);

/**
 * Check if Heading Background Image is Light or Dark
 * And change the font color of content to be contrast
 */
onNuxtReady(async () => {
  const testHello = "Hello!";
  console.log("This component running on client", testHello);
  const img = imageBackground;
  console.log("This is the image that calculated", img);

  const getImageBrightness = (imgSrc, callback) => {
    var img = document.createElement("img");
    img.src = imgSrc;
    img.crossOrigin = "Anonymous";
    img.style.display = "none";
    document.body.appendChild(img);

    var colorSum = 0;

    img.onload = function () {
      // create canvas
      var canvas = document.createElement("canvas");
      canvas.width = this.width;
      canvas.height = this.height;

      var ctx = canvas.getContext("2d");
      ctx.drawImage(this, 0, 0);

      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imageData.data;
      var r, g, b, avg;

      for (var x = 0, len = data.length; x < len; x += 4) {
        r = data[x];
        g = data[x + 1];
        b = data[x + 2];

        avg = Math.floor((r + g + b) / 3);
        colorSum += avg;
      }

      var brightness = Math.floor(colorSum / (this.width * this.height));
      callback(brightness);
    };
  };

  getImageBrightness(img,function(brightness) {
    const navbar = document.getElementById("header-transparent");
    if(brightness > 100) {
      let heading = document.getElementsByClassName("h1-heading")
      let paragraph = document.getElementsByClassName("p-heading")
      navbar.setAttribute('style', 'background-color:#111C27 !important');

      heading[0].style.color = 'black';
      paragraph[0].style.color = 'black';
      console.log("The Background is bright!")
    } else {
      console.log("The Background is dark!")
      navbar.setAttribute('style', 'background-color:#111C27 !important');
    }
  })
});
</script>

<template>
  <SectionNavigationTransparent />
  <div
    v-editable="blok"
    v-if="imageBackground"
    id="marketing-banner"
    class="trust-banner"
    :style="{
      backgroundImage: 'url(' + imageBackground + ')',
      noRepeat: 'center',
      backgroundSize: 'cover',
    }"
  >
    <div class="container">
      <h1 class="h1-heading" v-if="blok.name">{{ blok.name }}</h1>
      <p class="p-heading" v-if="blok.description">{{ blok.description }}</p>
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
      <div v-if="feature.component === 'feature-list-internal'" class="row">
        <FeaturesListInternal
          v-for="feature in blok.feature_list_card"
          :key="feature.uuid"
          :src="feature.image.filename"
          :blok="feature"
        />
      </div>
    </div>
  </section>
  <!-- Video or Image Heading -->
  <section v-if="!isVideo" id="bmi-image" class="d-none d-md-block">
    <div class="container">
      <img v-if="assetSource" :src="assetSource" alt="Image" />
    </div>
  </section>
  <section v-if="isVideo" id="bmi-video" class="d-none d-md-block">
    <div class="container">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe
          v-if="assetCheck"
          class="embed-responsive-item"
          :src="assetCheck"
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
        <SectionFeatureLeftImageRight
          :blok="feature"
          :src="feature.asset.filename"
          :key="feature.uuid"
        />
      </section>
      <section
        v-if="feature.component === 'section-feature-right-image-left'"
        class="bottom-content-section"
      >
        <SectionFeatureRightImageLeft
          :blok="feature"
          :src="feature.asset.filename"
          :key="feature.uuid"
        />
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
      <div v-if="blok.asset.filename" class="box-shadow">
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
          <img v-if="card.image.filename" :src="card.image.filename" alt="" />
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
      <section v-if="feature.component === 'section-feature-left-image-right'">
        <SectionFeatureLeftImageRight
          :blok="feature"
          :src="feature.asset.filename"
          :key="feature.uuid"
        />
      </section>
      <section
        v-if="feature.component === 'section-feature-right-image-left'"
        class="bottom-content-section"
      >
        <SectionFeatureRightImageLeft
          :blok="feature"
          :src="feature.asset.filename"
          :key="feature.uuid"
        />
      </section>
    </div>
  </div>
  <section id="ask-us">
    <SectionAskUs />
  </section>
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
