<script setup>
const props = defineProps({ blok: Object });
const projects = ref(null);
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories", {
  version: useRoute().query._storyblok ? "draft" : "published",
  starts_with: "projects",
  is_startpage: false,
  per_page: 15,
});
projects.value = data.stories;

const urlPath = useRoute().path;
const isProjects = urlPath.includes("/projects");
const isBlog = urlPath.includes("/blog");

function changeBlogtoProject(d) {
  return d.replace("blog", "");
}

const thumbnailPlaceholder =
  "https://a.storyblok.com/f/208852/674x380/bf71efc381/image_thumbnail.jpg";
</script>

<template>
  <div v-for="project in projects" class="post-wrapper">
    <a :href="'/projects/' + project.slug">
      <div class="post-div">
        <div class="data">
          <span class="post-title">{{ project.name }} </span>
        </div>
        <!-- Load the Image Dynamically -->
        <div class="img-div">
          <img
            v-if="project.content.image_thumbnail"
            :src="project.content.image_thumbnail"
            :alt="project.name"
          />
          <img v-else :src="thumbnailPlaceholder" :alt="project.name" />
        </div>
      </div>
    </a>
  </div>
</template>
