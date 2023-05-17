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
    SectionContainerContent,
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

const isHeaderForm = props.blok.is_header_form;

console.log("Is Header have Form", isHeaderForm);

features.value = data.stories.filter((e) => e.slug !== urlFix).slice(0, 3);

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

if (props.blok.asset_heading.filename === "") {
  assetSource = "";
} else {
  assetSource = props.blok.asset_heading.filename;
}

if (props.blok.asset_heading.filename == null) {
  assetSource = "";
} else {
  assetSource = props.blok.asset_heading.filename;
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
let imageBackground = "";
// const imageBackground = props.blok.image_background ? props.blok.image_background.filename : "https://a.storyblok.com/f/208852/1920x1083/a5457bd6d0/image-features_placeholder.jpg";
if (props.blok.image_background === "") {
  imageBackground =
    "https://a.storyblok.com/f/208852/1920x1083/51ff3b2b72/home-banner-bg.webp";
} else {
  // imageBackground = props.blok.image_background ? props.blok.image_background : "https://a.storyblok.com/f/208852/1920x1083/51ff3b2b72/home-banner-bg.webp";
  imageBackground = props.blok.image_background;
}

onMounted(() => {
  if (isHeaderForm) {
    console.log("landing page is with form");
    document.body.classList.add("landing-page-new-with-form");
  }
});

/**
 * Check if Heading Background Image is Light or Dark
 * And change the font color of content to be contrast
 */
onNuxtReady(async () => {
  if (imageBackground) {
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

    getImageBrightness(img, function (brightness) {
      const navbar = document.getElementById("header-transparent");
      if (brightness > 100) {
        let heading = document.getElementsByClassName("h1-heading");
        let paragraph = document.getElementsByClassName("p-heading");
        navbar.setAttribute("style", "background-color:#111C27 !important");

        heading[0].style.color = "black";
        paragraph[0].style.color = "black";
      } else {
        navbar.setAttribute("style", "background-color:#111C27 !important");
      }
    });
  }
});
</script>

<template>
  <SectionNavigationTransparent />
  <section
    v-if="isHeaderForm"
    id="ask-us"
    class="top-landing-page-banner new-drone-page features-header"
    :style="{
      backgroundImage: 'url(' + imageBackground + ')',
      noRepeat: 'center',
      backgroundSize: 'cover',
      minHeight: '50vh',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-6 slideLeft">
          <h1 v-if="blok.name">{{ blok.name }}
          </h1>
          <p v-if="blok.description">
            {{ blok.description }}
          </p>
          <p v-if="blok.button_name">
            <a class="btn-style" :href="blok.button_cta">{{
              blok.button_name
            }}</a>
          </p>
        </div>
        <div class="col-md-6 form-iframe-wrapper">
          <div class="wpcf7 js" id="wpcf7-f35318-o1" lang="en-US" dir="ltr">
            <div class="screen-reader-response">
              <p role="status" aria-live="polite" aria-atomic="true"></p>
              <ul></ul>
            </div>
            <form
              action="/features/drone-view#wpcf7-f35318-o1"
              method="post"
              class="wpcf7-form init"
              aria-label="Contact form"
              novalidate="novalidate"
              data-status="init"
            >
              <div style="display: none">
                <input type="hidden" name="_wpcf7" value="35318" />
                <input type="hidden" name="_wpcf7_version" value="5.7.6" />
                <input type="hidden" name="_wpcf7_locale" value="en_US" />
                <input
                  type="hidden"
                  name="_wpcf7_unit_tag"
                  value="wpcf7-f35318-o1"
                />
                <input type="hidden" name="_wpcf7_container_post" value="0" />
                <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                <input
                  type="hidden"
                  name="_wpcf7_recaptcha_response"
                  value="03AL8dmw-ENUT_4hdGxXwWmirSWPtfg1PuVv_DWmaI8pKG64mbzkXkcTY2shw5TEkRuP54HkqFeT9RWe1ABbN_UCJcDYR_s-wgW9_U4SXqIKlvuArpL6d3sdJFR8x3zniqcIPkgFma6OXpmOOCmMMuz7YOdye_ARBjt8hIN-l-A1sUco8V1RcoS0pnEhCaTYB-PrrC_d_kXROXrkAoZBYwgXeCqs-5qe1QMCZuYuq_QoVdIA4t8SzvCZSraPUoAoMfPN8mCKxq8iDy0uPaBSIf_6gd-7QnFF-2eIrWH5RvUw5Pf6T-dly4dO3GZxi7AC6X9A1L4uoUudSCH_-BBFxHPazOBPWab-7xFaxkWSIh68Oh1uNukhgg-s6Dh6JrllijuE4pR7PmYCyC-gr554N-TRxl9M9YHMh9etNIAXa81LVD27TbxuIDTY3XcgbXyRj_zK991jNm6yrsL26r98ZdHTVzq5-10lnU9Ag6tWJlBsPKDM0wze2rFa0FzWMCI4jMtorNpigXIJbKPnbNA8x2LXlx5FRa469hyasi81lfvRRqfihwF9klfX8"
                />
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <p>
                    <label class="d-none">First name*</label
                    ><span
                      class="wpcf7-form-control-wrap"
                      data-name="first-name"
                      ><input
                        size="40"
                        class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                        aria-required="true"
                        aria-invalid="false"
                        value=""
                        type="text"
                        name="first-name"
                    /></span>
                  </p>
                </div>
                <div class="form-group col-md-6">
                  <p>
                    <label class="d-none">Last name*</label
                    ><span class="wpcf7-form-control-wrap" data-name="last-name"
                      ><input
                        size="40"
                        class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                        aria-required="true"
                        aria-invalid="false"
                        value=""
                        type="text"
                        name="last-name"
                    /></span>
                  </p>
                </div>
                <div class="form-group col-md-6">
                  <p>
                    <label class="d-none">Email*</label
                    ><span
                      class="wpcf7-form-control-wrap"
                      data-name="your-email"
                      ><input
                        size="40"
                        class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control"
                        aria-required="true"
                        aria-invalid="false"
                        value=""
                        type="email"
                        name="your-email"
                    /></span>
                  </p>
                </div>
                <div class="form-group col-md-6">
                  <p>
                    <label class="d-none">Phone*</label
                    ><span class="wpcf7-form-control-wrap" data-name="Phone"
                      ><input
                        size="40"
                        class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel form-control"
                        aria-required="true"
                        aria-invalid="false"
                        value=""
                        type="tel"
                        name="Phone"
                    /></span>
                  </p>
                </div>
                <div class="form-group col-md-12">
                  <p>
                    <label class="d-none">Message*</label
                    ><span
                      class="wpcf7-form-control-wrap"
                      data-name="your-message"
                    >
                      <textarea
                        cols="40"
                        rows="10"
                        class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required form-control"
                        aria-required="true"
                        aria-invalid="false"
                        name="your-message"
                      ></textarea>
                    </span>
                  </p>
                </div>
                <div class="form-group col-md-12">
                  <p>
                    <input
                      class="wpcf7-form-control has-spinner wpcf7-submit btn-style"
                      type="submit"
                      value="Send message"
                    /><span class="wpcf7-spinner"></span>
                  </p>
                </div>
              </div>
              <div class="wpcf7-response-output" aria-hidden="true"></div>
              <input type="hidden" name="vx_width" value="1440" /><input
                type="hidden"
                name="vx_height"
                value="900"
              /><input
                type="hidden"
                name="vx_url"
                value="https://evercam.io/features/drone-view"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="features-header" v-else>
    <div
      v-if="blok.image_background === ''"
      id="marketing-banner"
      class="trust-banner"
      :style="{
        backgroundImage:
          'url(https://a.storyblok.com/f/208852/1920x1083/51ff3b2b72/home-banner-bg.webp)',
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
          <a class="btn-style" :href="blok.button_cta">{{
            blok.button_name
          }}</a>
        </p>
      </div>
    </div>
    <div
      v-else
      id="marketing-banner"
      class="trust-banner"
      :style="{
        backgroundImage: 'url(' + imageBackground + ')',
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
          <a class="btn-style" :href="blok.button_cta">{{
            blok.button_name
          }}</a>
        </p>
      </div>
    </div>
  </section>
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
  <!-- <section v-if="isHeaderForm" class="landing-page-footer text-center">
    <div class="container">
      <div class="logo-wrapper">
        <a class="logo" href="https://evercam.io">
          <img
            src="https://evercam.io/wp-content/themes/evercam/img/white-logo.svg"
            alt="Logo"
          />
        </a>
      </div>
      <div class="book-wrapper">
        <h2>Start building faster and smarter today</h2>
        <p>Contact us for a quote and book a free demo:</p>
        <a href="#ask-us" class="btn-style">Book a demo</a>
      </div>
      <div class="btn-wrapper">
        <a href="/terms">Terms &amp; Conditions</a>
        <a href="/gdpr-compliance">GDPR compliance</a>
      </div>
    </div>
  </section> -->
  <section>
    <SectionAskUs />
  </section>
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
