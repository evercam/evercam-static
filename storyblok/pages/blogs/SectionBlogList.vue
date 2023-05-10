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
  console.log(page);
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

      <!-- <vue-awesome-paginate
        :total-items="2"
        :items-per-page="1"
        v-model="currentPage"
        :on-click="onClickHandler"
      /> -->
      <!-- <SectionPagination @change="refecth" :totalPages="2" :currentPage="page.value"/> -->
      <!-- <nav class="text-right pagination-wrapper" aria-label="Page navigation">
        <ul class="pagination">
          <li id="liP1" class="pnos active">
            <a href="https://evercam.io/blog">1</a>
          </li>
          <li id="liP2" class="pnos">
            <a href="https://evercam.io/blog/page/2">2</a>
          </li>
          <li id="liP3" class="pnos">
            <a href="https://evercam.io/blog/page/3">3</a>
          </li>
          <li id="liP4" class="pnos">
            <a href="https://evercam.io/blog/page/4">4</a>
          </li>
          <li id="liP5" class="pnos">
            <a href="https://evercam.io/blog/page/5">5</a>
          </li>
          <li id="liP6" class="pnos">
            <a href="https://evercam.io/blog/page/6">6</a>
          </li>
          <li id="liP7" class="pnos">
            <a href="https://evercam.io/blog/page/7">7</a>
          </li>
          <li id="liP8" class="pnos">
            <a href="https://evercam.io/blog/page/8">8</a>
          </li>
        </ul>
      </nav> -->
    </div>
  </section>
</template>
