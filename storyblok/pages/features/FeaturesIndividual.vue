<script>
import SectionNavigationTransparent from "@/storyblok/SectionNavigationTransparent.vue";
import SectionBreadcrumbLeftAll from "@/storyblok/SectionBreadcrumbLeftAll.vue";
import SectionAskUs from "@/storyblok/SectionAskUs.vue";
import OtherFeaturesCard from "./OtherFeaturesCard.vue";
import SectionContainerContent from "../../SectionContainerContent.vue";

export default {
  components: {
    SectionNavigationTransparent,
    SectionBreadcrumbLeftAll,
    SectionAskUs,
    OtherFeaturesCard,
    SectionContainerContent
},
};
</script>

<script setup>
const props = defineProps({ blok: Object });
const urlPath = useRoute().path;

const resolvedContentDescription = computed(() =>
  renderRichText(props.blok.content_description)
);

const features = ref(null);
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories", {
  version: useRoute().query._storyblok ? "draft" : "published",
  starts_with: "features",
  is_startpage: false,
});

/** 
 * Only show 3 Random Feature and exclude the Active Feature
 *  */

const urlFix = urlPath.replace("/features/", "");

features.value = data.stories
  .filter(e => e.slug !== urlFix)
  .slice(0,3)

// function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
// }

// shuffleArray(features.value);

/** Todo
 * Check the type of Features Content, if it's
 * Video,
 * Image, and
 * Richtext
 */

const videoSource = ["vimeo", "youtube", "mp4", ".mp4"];
const imageSource = ["webp", "png", "jpg", "jpeg", "gif"];
let assetSource = "";

if(props.blok.asset_heading.filename === "") {
  assetSource = "";
  console.log("The asset is not set", assetSource);
} else {
  assetSource = props.blok.asset_heading.filename;
  console.log("The asset is placed", assetSource);
}

if(props.blok.asset_heading.filename == null) {
  assetSource = "";
  console.log("The asset is not set", assetSource);
} else {
  assetSource = props.blok.asset_heading.filename;
  console.log("The asset is placed", assetSource);
}

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
  }
}


/**
 * Build a function to check Feature Section with isVideo
 * const isVideo => function to check and pass true or false
 */
let imageBackground = ""
// const imageBackground = props.blok.image_background ? props.blok.image_background.filename : "https://a.storyblok.com/f/208852/1920x1083/a5457bd6d0/image-features_placeholder.jpg";
if(props.blok.image_background === "") {
  imageBackground = "https://a.storyblok.com/f/208852/1920x1083/51ff3b2b72/home-banner-bg.webp";
  console.log("This is the background", imageBackground);
} else {
  // imageBackground = props.blok.image_background ? props.blok.image_background : "https://a.storyblok.com/f/208852/1920x1083/51ff3b2b72/home-banner-bg.webp";
  imageBackground = props.blok.image_background;
  console.log("This is the background", imageBackground);
}

/**
 * Check if Heading Background Image is Light or Dark
 * And change the font color of content to be contrast
 */
 onNuxtReady(async () => {
  if(imageBackground) {
    const img = imageBackground;
  
    const getImageBrightness = (imgSrc, callback) => {
      let img = document.createElement("img");
      img.src = imgSrc;
      img.crossOrigin = "Anonymous";
      img.style.display = "none";
      document.body.appendChild(img);
  
      let colorSum = 0;
  
      img.onload = function () {
        // create canvas
        let canvas = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;
  
        let ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0);
  
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let data = imageData.data;
        let r, g, b, avg;
  
        for (let x = 0, len = data.length; x < len; x += 4) {
          r = data[x];
          g = data[x + 1];
          b = data[x + 2];
  
          avg = Math.floor((r + g + b) / 3);
          colorSum += avg;
        }
  
        let brightness = Math.floor(colorSum / (this.width * this.height));
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
      } else {
        navbar.setAttribute('style', 'background-color:#111C27 !important');
      }
    })
  }
});
</script>

<template>
  <SectionNavigationTransparent />
  <div
    v-if="blok.image_background === ''"
    id="marketing-banner"
    class="trust-banner"
    :style="{
      backgroundImage: 'url(https://a.storyblok.com/f/208852/1920x1083/51ff3b2b72/home-banner-bg.webp)',
      noRepeat: 'center',
      backgroundSize: 'cover',
      minHeight: '50vh',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
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
  <div
    v-else
    id="marketing-banner"
    class="trust-banner"
    :style="{
      backgroundImage: 'url('+ imageBackground +')',
      noRepeat: 'center',
      backgroundSize: 'cover',
      minHeight: '50vh',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
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
    v-if="blok.content_title"
    id="marketing-up"
    class="project-management"
  >
    <div class="container text-center">
      <h2>{{ blok.content_title }}</h2>
      <div v-html="resolvedContentDescription"></div>
    </div>
    <div class="container tick-image text-center">
      <div class="row">
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
  <div v-if="assetSource">
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
        </div>
      </div>
    </section>
  </div>

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
    <SectionContainerContent
      v-for="blok in blok.full_additional_section"
      :blok="blok"
      :key="blok.uuid"
    />
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
  <SectionAskUs />
  <section id="add-ons">
    <div class="container">
      <h2 class="slide-up">Other Features</h2>
      <div class="row">
        <!-- Other Features Card -->
        <div v-for="feature in features" class="col-md-4">
          <OtherFeaturesCard
            :key="feature.uuid"
            :feature="feature.content"
            :slug="feature.full_slug"
          />
        </div>
      </div>
    </div>
  </section>
</template>
