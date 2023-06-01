<script setup>
defineProps({ blok: Object })

const projects = ref(null)
const storyblokApi = useStoryblokApi()
const { locale } = useI18n()

/** Search by country */
const { data } = await storyblokApi.get("cdn/stories", {
  version: useRoute().query._storyblok ? "draft" : "published",
  starts_with: "projects",
  is_startpage: false,
  filter_query: {
    project_country: {
      in: projectBasedUrl(),
    },
  },
})

function projectBasedUrl() {
  if (locale.value === "en-ie") {
    return "94332311-8c5a-447f-bf35-d01f8c6de53c,ba36f6fc-ee8d-4623-8ee9-37178297fe9f,03549e41-cad9-427f-8547-d99255e6eb40"
  }
  if (locale.value === "en-sg") {
    return "94332311-8c5a-447f-bf35-d01f8c6de53c,ba36f6fc-ee8d-4623-8ee9-37178297fe9f,03549e41-cad9-427f-8547-d99255e6eb40"
  }
  if (locale.value === "en-au") {
    return "ba36f6fc-ee8d-4623-8ee9-37178297fe9f"
  }
  if (locale.value === "en-gb") {
    return "03549e41-cad9-427f-8547-d99255e6eb40"
  }
}

projects.value = data.stories

// const imageThumbnail = props.project.image_thumbnail
//   ? props.project.image_thumbnail.filename
//   : "https://a.storyblok.com/f/208852/674x380/538e670581/image_thumbnail.jpg";
</script>

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

<template>
  <section v-editable="blok" class="project-section">
    <div class="container">
      <h2>{{ blok.name }}</h2>
      <p>
        Our solutions are used on some of the largest (and smallest!)
        construction projects across the globe.
      </p>
      <div id="testimonial">
        <Carousel :items-to-show="3.1" :wrap-around="true">
          <Slide v-for="project in projects" :key="project">
            <ProjectCard
              :key="project.uuid"
              :project="project.content"
              :slug="project.full_slug"
            />
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
      <div class="btn-div">
        <a href="/projects" class="btn-style">See All Projects</a>
      </div>
    </div>
  </section>
</template>
