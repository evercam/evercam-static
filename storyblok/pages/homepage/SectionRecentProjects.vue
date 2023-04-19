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

<template>
  <section v-editable="blok" class="project-section">
    <div class="container">
      <h2>{{ blok.name }}</h2>
      <p>
        Our solutions are used on some of the largest (and smallest!)
        construction projects across the globe.
      </p>
      <div id="testimonial" class="owl-carousel owl-loaded owl-drag">
        <div class="owl-stage-outer">
          <div
            class="owl-stage"
            style="transition: all 0s ease 0s; width: 3360px"
          >
            <ProjectCard
              v-for="project in projects"
              :key="project.uuid"
              :project="project.content"
              :slug="project.full_slug"
            />
          </div>
        </div>
        <div class="owl-nav">
          <button type="button" role="presentation" class="owl-prev">
            <span aria-label="Previous">‹</span></button
          ><button type="button" role="presentation" class="owl-next">
            <span aria-label="Next">›</span>
          </button>
        </div>
        <div class="owl-dots">
          <button role="button" class="owl-dot"><span></span></button
          ><button role="button" class="owl-dot active"><span></span></button>
        </div>
      </div>
      <div class="btn-div">
        <a href="/projects" class="btn-style">See All Projects</a>
      </div>
    </div>
  </section>
</template>
