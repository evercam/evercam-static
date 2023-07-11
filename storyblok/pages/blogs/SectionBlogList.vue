<script setup>
import BlogCardIndividual from "./BlogCardIndividual.vue"
defineProps({ blok: Object })
</script>

<script>
export default {
  data() {
    return {
      blogs: null,
      currentPage: 1,
      perPage: 30,
      totalPost: 0,
    }
  },
  created() {
    this.fetchPost()
  },
  watch: {
    currentPage: function (value) {
      this.fetchPost(this.searchInput)
    },
  },
  methods: {
    fetchPost: async function () {
      const storyblokApi = useStoryblokApi()

      const { data, headers } = await storyblokApi.get("cdn/stories", {
        version: useRoute().query._storyblok ? "draft" : "published",
        starts_with: "blog",
        is_startpage: false,
        sort_by: "content.date_published:desc",
        page: this.currentPage,
        per_page: this.perPage,
      })

      this.blogs = data.stories
      this.totalPost = parseInt(headers.total)
    },
    calculatePagesCount(perPage, totalPost) {
      return totalPost < perPage ? 1 : Math.ceil(totalPost / perPage)
    },
  },
}
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
      <div class="row">
        <div v-if="totalPost > perPage" class="paginate">
          <div style="margin-right: 10px">
            <p>
              Showing {{ currentPage * perPage - perPage + 1 }} - {{ " " }}
              {{ Math.min(currentPage * perPage, totalPost) }} of
              {{ totalPost }}
            </p>
          </div>

          <div>
            <nav class="text-right pagination-wrapper">
              <ul class="pagination">
                <li
                  v-for="page in calculatePagesCount(perPage, totalPost)"
                  :key="page"
                  :class="currentPage == page ? 'active' : ''"
                >
                  <a href="#" @click="currentPage = page"
                    ><span>{{ page }}</span></a
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
