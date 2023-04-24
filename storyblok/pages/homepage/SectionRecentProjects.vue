<script setup>
defineProps({ blok: Object });

const projects = ref(null);
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories", {
  version: useRoute().query._storyblok ? "draft" : "published",
  starts_with: "projects",
  is_startpage: false,
});
projects.value = data.stories;

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
  <section v-editable="blok" class="project-section">
    <div class="container">
      <h2>{{ blok.name }}</h2>
      <p>
        Our solutions are used on some of the largest (and smallest!)
        construction projects across the globe.
      </p>
      <div id="testimonial">
        <carousel :items-to-show="3.1" :wrap-around="true">
          <slide v-for="project in projects" :key="slide">
            <ProjectCard
              :key="project.uuid"
              :project="project.content"
              :slug="project.full_slug"
            />
          </slide>

          <template #addons>
            <navigation />
          </template>
        </carousel>
      </div>
      <div class="btn-div">
        <a href="/projects" class="btn-style">See All Projects</a>
      </div>
    </div>
  </section>
</template>
