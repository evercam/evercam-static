<script>
// import SectionNavigationWhite from "@/storyblok/SectionNavigationWhite.vue";
// import SectionBreadcrumbLeftAll from "@/storyblok/SectionBreadcrumbLeftAll.vue";
// import SectionRelatedProject from "@/storyblok/SectionRelatedProject.vue";
// import ProjectDetailsList from "./ProjectDetailsList.vue";
import ImageCompare from "image-compare-viewer";

// export default {
//   name: "app",
//   components: {
//     // VueCompareImage,
//     SectionNavigationWhite,
//     SectionBreadcrumbLeftAll,
//     SectionRelatedProject,
//     ProjectDetailsList,
//   },
// };
</script>

<script setup>
const props = defineProps({ blok: Object });

const resolvedRichText = computed(() => renderRichText(props.blok.content));
onMounted(() => {
  const element = document.getElementById("image-compare");
  const options = {
    // UI Theme Defaults

    controlColor: "#FFFFFF",
    controlShadow: true,
    addCircle: false,
    addCircleBlur: true,

    // Label Defaults

    showLabels: false,
    labelOptions: {
      before: "Before",
      after: "After",
      onHover: false,
    },

    // Smoothing

    smoothing: true,
    smoothingAmount: 100,

    // Other options

    hoverStart: false,
    verticalMode: false,
    startingPoint: 50,
    fluidMode: false,
  };

  // Add your options object as the second argument
  const viewer = new ImageCompare(element, options).mount();
});

const assetSource = props.blok.additional_video
let assetCheck = ""

const fromYoutube = "www.youtube.com/watch"
let isYoutube = ""

if(assetSource) {
  isYoutube = assetSource.includes(fromYoutube);
}

// console.log("isYoutube", isYoutube)

if (assetSource) {
  if (isYoutube) {
    assetCheck = assetSource.replace('watch?v=','embed/')
    // console.log("This is the additional video", assetCheck)
  } else {
    assetCheck = assetSource
    // console.log("This is the additional video", assetCheck)
  }
}
</script>

<template>
  <SectionNavigationWhite />
  <SectionBreadcrumbLeftAll />
  <section
    class="single-blog projects-single"
    v-editable="blok"
    id="page-34491"
  >
    <div class="container">
      <div class="top-content">
        <div class="embed-responsive embed-responsive-16by9">
          <main>
            <iframe
              class="embed-responsive-item"
              :src="blok.video_heading.filename"
              allowfullscreen=""
            ></iframe>
          </main>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <div class="standard-content" v-html="resolvedRichText"></div>
          <div>
            <div v-if="blok.image_compare_section">
              <div
                v-for="image in blok.image_compare_section"
                id="image-compare"
              >
                <img :src="image.image_before.filename" alt="" />
                <img :src="image.image_after.filename" alt="" />
              </div>
            </div>
          </div>
          <div class="standard-content">
            <iframe
              v-if="assetCheck"
              class="embed-responsive-item"
              :src="assetCheck"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
        <div class="col-md-4 right-sidebar">
          <h3>Project Details</h3>
          <table class="table">
            <tbody v-if="blok.project_details">
              <tr v-for="list in blok.project_details">
                <td>{{ list.name }}:</td>
                <td>
                  <p v-if="!list.description_link.url">
                    {{ list.description }}
                  </p>
                  <p v-else>
                    <a :href="list.description_link.url">
                      {{ list.description }}
                    </a>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <iframe :src="blok.maps" style="border: 0"></iframe>
        </div>
      </div>
    </div>
  </section>
  <SectionProjectGallery />
</template>
