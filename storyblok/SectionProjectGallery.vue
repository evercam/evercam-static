<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import { Carousel, Slide, Navigation } from "vue3-carousel"

export default defineComponent({
  name: "Basic",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
})
</script>

<script setup>
const props = defineProps({ blok: Object })
const projects = ref(null)
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get("cdn/stories", {
  version: useRoute().query._storyblok ? "draft" : "published",
  starts_with: "projects",
  is_startpage: false,
})
projects.value = data.stories

const thumbnailPlaceholder =
  "https://a.storyblok.com/f/208852/674x380/bf71efc381/image_thumbnail.jpg"
</script>

<template>
  <section id="related-posts" class="recent-projects">
    <div class="container">
      <h2>Recent Projects</h2>

      <Carousel :items-to-show="5" :wrap-around="true">
        <Slide v-for="project in projects" :key="project">
          <div class="owl-item" style="margin: 10px">
            <div class="item">
              <div class="image-wrapper">
                <a :href="'/projects/' + project.slug">
                  <img
                    v-if="project.content.image_thumbnail"
                    :src="project.content.image_thumbnail"
                    :alt="project.name"
                  />
                  <img v-else :src="thumbnailPlaceholder" :alt="project.name" />
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
        </Slide>

        <template #addons>
          <Navigation class="recent_project" />
        </template>
      </Carousel>
    </div>
  </section>
</template>
