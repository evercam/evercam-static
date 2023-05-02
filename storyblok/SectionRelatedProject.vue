<script setup>
const props = defineProps({ blok: Object });
const projects = ref(null);
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories", {
  version: useRoute().query._storyblok ? "draft" : "published",
  starts_with: "projects",
  is_startpage: false,
});
projects.value = data.stories;

const urlPath = useRoute().path;
const isProjects = urlPath.includes("/projects");
const isBlog = urlPath.includes("/blog");

function changeBlogtoProject(d) {
  return d.replace("blog", "");
}

// const imageThumbnail = props.project.image_thumbnail
//   ? props.project.image_thumbnail.filename
//   : "https://a.storyblok.com/f/208852/674x380/538e670581/image_thumbnail.jpg";
</script>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>

<template>
  <div v-if="isBlog">
    <div v-for="project in projects" class="post-wrapper">
      <a :href="'/projects/' + project.slug">
        <div class="post-div">
          <div class="data">
            <span class="post-title">{{ project.name }} </span>
          </div>
          <!-- Load the Image Dynamically -->
          <div class="img-div">
            <img
              v-if="!project.content.image_thumbnail.filename"
              src="https://a.storyblok.com/f/208852/674x380/bf71efc381/image_thumbnail.jpg"
              :alt="project.name"
            />
            <img
              v-else
              :src="project.content.image_thumbnail.filename"
              :alt="project.name"
            />
          </div>
        </div>
      </a>
    </div>
  </div>
  <section v-else id="related-posts" class="recent-projects">
    <div class="container">
      <h2>Recent Projects</h2>

      <carousel :items-to-show="5" :wrap-around="true">
        <slide style="align-items: baseline;" v-for="project in projects" :key="slide">
          <div class="owl-item" style="margin: 10px">
            <div class="item">
              <div class="image-wrapper">
                <a :href="'/projects/' + project.slug">
                  <img
                    v-if="!project.content.image_thumbnail.filename"
                    src="https://a.storyblok.com/f/208852/674x380/bf71efc381/image_thumbnail.jpg"
                    :alt="project.name"
                  />
                  <img
                    v-else
                    :src="project.content.image_thumbnail.filename"
                    :alt="project.name"
                  />
                </a>
              </div>
              <div class="content">
                <h3>
                  <a :href="'/projects/' + project.slug">
                    {{ project.name }}
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </slide>

        <template #addons>
          <navigation class="recent_project" />
        </template>
      </carousel>
      <!-- <div class="owl-carousel related-posts-slider owl-loaded owl-drag">
        <div class="owl-stage-outer">
          <div
            class="owl-stage"
            style="
              transform: translate3d(-1140px, 0px, 0px);
              transition: all 0s ease 0s;
              width: 4104px;
            "
          >
            
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>
