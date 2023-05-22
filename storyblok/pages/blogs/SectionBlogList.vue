<script setup>
// import { Pagination } from 'vue3-carousel';
import BlogCardIndividual from "./BlogCardIndividual.vue";

defineProps({ blok: Object });

const blogs = ref(null);
const page = ref(1);
const currentPage = ref(1);

const storyblokApi = useStoryblokApi();
const { data, refresh } = await storyblokApi.get("cdn/stories", {
  version: useRoute().query._storyblok ? "draft" : "published",
  starts_with: "blog",
  is_startpage: false,
  sort_by: "content.date_published:desc",
  per_page: 25,
  page: currentPage,
});

blogs.value = data.stories;

const onClickHandler = (page) => {
  refresh();
  // console.log(page);
};
</script>

<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
</style>

<template>
  <section v-editable="blok" id="blog-list" class="updated">
    <div class="container">
      <div class="row">
        <BlogCardIndividual
          v-for="blog in blogs"
          :key="blog.uuid"
          :blog="blog.content"
          :slug="blog.full_slug"
          v-model="currentPage"
        />
      </div>
    </div>
  </section>
</template>
