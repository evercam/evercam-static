<script setup>
defineProps({ blok: Object });
</script>

<script>
import kebabCase from "lodash/kebabCase";

export default {
  data() {
    return {
      projects: null,
      getPost: true,
      currentPage: 1,
      perPage: 24,
      totalPost: 0,
      showFilterLocation: false,
      showFilterCategory: false,
      isCheckedAllCategory: true,
      isCheckedAllLocation: true,
      showFilterOnMobile: false,
      searchText: "",
      searchInput: "",
      locations: [
        {
          id: "ba36f6fc-ee8d-4623-8ee9-37178297fe9f",
          value: "Australia",
          total: 0,
          selected: true,
        },
        {
          id: "94332311-8c5a-447f-bf35-d01f8c6de53c",
          value: "Ireland",
          total: 0,
          selected: true,
        },
        {
          id: "f6547d6e-d16c-4c20-ab81-b919aa4c2a17",
          value: "Poland",
          total: 0,
          selected: true,
        },
        {
          id: "99ca21c1-5030-4289-aa4b-ba9b2535b98b",
          value: "Singapore",
          total: 0,
          selected: true,
        },
        {
          id: "03549e41-cad9-427f-8547-d99255e6eb40",
          value: "United Kingdom",
          total: 0,
          selected: true,
        },
        {
          id: "bca81fbe-0317-4d5b-bbe2-5ace823bb8b4",
          value: "United State",
          total: 0,
          selected: true,
        },
      ],
      categories: [
        {
          id: "ebc5a82c-6354-4f98-9978-47e312313bc4",
          value: "Arts Heritage Culture",
          total: 0,
          selected: true,
        },
        {
          id: "5f461bf1-5a30-488f-80ed-c603a53b07f7",
          value: "Civil",
          total: 0,
          selected: true,
        },
        {
          id: "8f03353d-81d1-49b3-bb47-c288d5f1bd77",
          value: "Commercial",
          total: 0,
          selected: true,
        },
        {
          id: "e5313f8a-9e0f-4e95-9bdb-e43d7df1c415",
          value: "Completed",
          total: 0,
          selected: true,
        },
        {
          id: "63dc68e9-ed1d-430a-9353-b679dfef6023",
          value: "Education",
          total: 0,
          selected: true,
        },
        {
          id: "7426b71c-2783-4e3e-9207-960a4bcfc624",
          value: "Fit Out",
          total: 0,
          selected: true,
        },
        {
          id: "d0ed6ace-8573-486f-ae17-1f4385e8477e",
          value: "Healthcare Pharma",
          total: 0,
          selected: true,
        },
        {
          id: "9963cd99-5e83-4572-bd7f-504f9fdcf48a",
          value: "Hotel Leisure",
          total: 0,
          selected: true,
        },
        {
          id: "e2b872a0-2d4e-42fd-86d7-5cd5760b6010",
          value: "Industrial",
          total: 0,
          selected: true,
        },
        {
          id: "15b17749-c004-4572-a494-302bf47e149e",
          value: "Project Of Interest",
          total: 0,
          selected: true,
        },
        {
          id: "efdaebfb-60db-43f9-9321-b0b082f31e7e",
          value: "Public Sector Utilities",
          total: 0,
          selected: true,
        },
        {
          id: "454002d7-5f7b-48a7-bd77-a3e04df10263",
          value: "Residential",
          total: 0,
          selected: true,
        },
        {
          id: "5a845318-fc2c-4cbf-b994-b6b68616e035",
          value: "Retail",
          total: 0,
          selected: true,
        },
        {
          id: "5beaebfa-e244-4423-9778-c418bdda4514",
          value: "Student Accom",
          total: 0,
          selected: true,
        },
      ],
    };
  },
  computed: {
    selectedLocation() {
      return this.locations.filter((location) => location.selected);
    },
    selectedCategory() {
      return this.categories.filter((category) => category.selected);
    },
  },
  created() {
    this.fetchPost();
  },
  watch: {
    selectedLocation: function () {
      this.fetchSuggestions(this.searchInput);
    },
    selectedCategory: function () {
      this.fetchSuggestions(this.searchInput);
    },
    currentPage: function (value) {
      this.fetchSuggestions(this.searchInput);
    },
  },
  methods: {
    checkAllLocation() {
      if (!this.isCheckedAllLocation) {
        return this.locations.map((location) => (location.selected = true));
      }
      return this.locations.map((location) => (location.selected = false));
    },
    checkAllCategory() {
      if (!this.isCheckedAllCategory) {
        return this.categories.map((category) => (category.selected = true));
      }
      return this.categories.map((category) => (category.selected = false));
    },
    groupingPost: async function () {
      const storyblokApi = useStoryblokApi();
      var customPerPage = 50;

      // console.log(
      //   this.totalPost,
      //   "grouping post",
      //   this.calculatePagesCount(100, this.totalPost)
      // );
      for (
        var i = 0;
        i <= this.calculatePagesCount(customPerPage, this.totalPost);
        i++
      ) {
        const { data, headers } = await storyblokApi.get("cdn/stories", {
          version: useRoute().query._storyblok ? "draft" : "published",
          starts_with: "projects",
          is_startpage: false,
          per_page: customPerPage,
          page: i + 1,
        });

        data.stories.map((story) => {
          // Group and find locations
          var locationIndex = this.locations.findIndex(
            (location) => location.id == story.content.project_country
          );

          if (locationIndex >= 0) {
            this.locations[locationIndex].total += 1;
          }

          // Group and find categories
          var categoryIndex = this.categories.findIndex(
            (category) => category.id == story.content.project_category
          );

          if (categoryIndex >= 0) {
            this.categories[categoryIndex].total += 1;
          }
        });
      }
    },
    fetchPost: async function () {
      const storyblokApi = useStoryblokApi();

      const { data, headers } = await storyblokApi.get("cdn/stories", {
        version: useRoute().query._storyblok ? "draft" : "published",
        starts_with: "projects",
        is_startpage: false,
        page: this.currentPage,
        per_page: this.perPage,
      });

      this.projects = data.stories;
      this.totalPost = parseInt(headers.total);

      if (data.stories.length < 1) {
        this.getPost = false;
      }

      if (data.stories.length >= 1) {
        this.getPost = true;
      }

      this.groupingPost();
    },
    fetchSuggestions: async function () {
      const storyblokApi = useStoryblokApi();

      var optCategories = this.selectedCategory.map((category) => category.id);
      var optLocations = this.selectedLocation.map((location) => location.id);

      // additional since, not all list has id
      optCategories = optCategories.filter((n) => n != "");
      optLocations = optLocations.filter((n) => n != "");

      const { data, headers } = await storyblokApi.get("cdn/stories", {
        version: useRoute().query._storyblok ? "draft" : "published",
        starts_with: "projects",
        is_startpage: false,
        search_term: this.searchText || null,
        page: this.currentPage,
        per_page: this.perPage,
        filter_query: {
          project_country: {
            in: optLocations.join(),
          },
          project_category: {
            in: optCategories.join(),
          },
        },
      });

      this.projects = data.stories;
      this.totalPost = parseInt(headers.total);
      this.getPost = data.stories.length >= 1;
    },
    calculatePagesCount(perPage, totalPost) {
      return totalPost < perPage ? 1 : Math.ceil(totalPost / perPage);
    },
  },
};
</script>

<template>
  <div v-editable="blok" id="projectsFilter" class="container">
    <div class="vue-app-wrapper">
      <div class="filter-wrapper">
        <div class="row">
          <div class="col-md-6 col-lg-3"><h1>Projects</h1></div>
          <div class="col-md-6 col-lg-9">
            <div
              id="filters-wrapper"
              :class="showFilterOnMobile ? 'active' : ''"
            >
              <a
                @click="showFilterOnMobile = !showFilterOnMobile"
                href="#"
                class="close-icon d-md-none"
              >
                <img
                  src="https://evercam.io/wp-content/themes/evercam/img/filter-close.svg"
                  alt="Close"
                />
              </a>
              <h3 class="d-md-none">Filter by</h3>
              <div class="select-dropdown">
                <button
                  id="locations"
                  type="button"
                  class=""
                  @click="showFilterLocation = !showFilterLocation"
                >
                  Location
                </button>
                <ul
                  v-if="showFilterLocation"
                  class="categories-list"
                  style="display: block"
                >
                  <li class="categories-list-item">
                    <div class="custom-control custom-checkbox">
                      <input
                        v-model="isCheckedAllLocation"
                        @click="checkAllLocation"
                        type="checkbox"
                        id="checkbox-all-country"
                        class="custom-control-input"
                      />
                      <label
                        for="checkbox-all-country"
                        class="custom-control-label"
                        >ALL</label
                      >
                    </div>
                  </li>
                  <li
                    v-for="(location, key) in locations"
                    :key="location.value"
                    class="categories-list-item"
                  >
                    <div class="custom-control custom-checkbox">
                      <input
                        v-model="location.selected"
                        type="checkbox"
                        :id="'checkbox-country-' + key"
                        class="custom-control-input"
                      />
                      <label
                        :for="'checkbox-country-' + key"
                        class="custom-control-label"
                      >
                        <span class="text">{{ location.value }}</span>
                        <span class="badge badge-secondary float-right">{{
                          location.total
                        }}</span>
                      </label>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="select-dropdown">
                <button
                  id="categories"
                  type="button"
                  class=""
                  @click="showFilterCategory = !showFilterCategory"
                >
                  Categories
                </button>
                <ul
                  v-if="showFilterCategory"
                  class="categories-list"
                  style="display: block"
                >
                  <li class="categories-list-item">
                    <div class="custom-control custom-checkbox">
                      <input
                        v-model="isCheckedAllCategory"
                        @click="checkAllCategory"
                        type="checkbox"
                        id="checkbox-all-category"
                        class="custom-control-input"
                      />
                      <label
                        for="checkbox-all-category"
                        class="custom-control-label"
                        >ALL</label
                      >
                    </div>
                  </li>
                  <li
                    v-for="(category, key) in categories"
                    :key="category.value"
                    class="categories-list-item"
                  >
                    <div class="custom-control custom-checkbox">
                      <input
                        v-model="category.selected"
                        type="checkbox"
                        :id="'checkbox-category-' + key"
                        class="custom-control-input"
                      />
                      <!-- <label for="checkbox-0" class="custom-control-label"></label> -->
                      <label
                        :for="'checkbox-category-' + key"
                        class="custom-control-label"
                      >
                        <span class="text">{{ category.value }}</span>
                        <span class="badge badge-secondary float-right">{{
                          category.total
                        }}</span>
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="search-box">
                <div class="input-group">
                  <SearchProject
                    :search="fetchSuggestions"
                    v-model="searchText"
                  />
                  <div class="input-group-append">
                    <button
                      :on-click="fetchSuggestions"
                      type="button"
                      class="btn btn-outline-secondary"
                    >
                      <font-awesome-icon :icon="['fas', 'search']" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="switches-wrapper">
        <div id="toogle-switch">
          <a href="#" class=""
            ><span><font-awesome-icon :icon="['fas', 'map-marker-alt']" /></span
            >Map View</a
          >
          <a href="#" class="active"
            ><span><font-awesome-icon :icon="['fas', 'th-large']" /></span
            >GridView</a
          >
          <a
            @click="showFilterOnMobile = !showFilterOnMobile"
            href="#"
            class="d-md-none"
            ><span><font-awesome-icon :icon="['fas', 'filter']" /></span
            >Filters</a
          >
        </div>
      </div>
      <section id="projects-map" class="container">
        <div id="default"></div>
      </section>
      <div id="filterprojects" class="active">
        <div class="filter-projects">
          <div class="row">
            <ProjectCard
              v-for="project in projects"
              :key="project.uuid"
              :project="project.content"
              :slug="project.full_slug"
            />
            <span v-if="!getPost" class="no-result">No project found</span>
          </div>
        </div>
      </div>
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
</template>
