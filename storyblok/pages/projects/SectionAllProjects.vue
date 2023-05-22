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
      showFilterLocation: false,
      showFilterCategory: false,
      isCheckedAllCategory: true,
      isCheckedAllLocation: true,
      showFilterOnMobile: false,
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
          id: "",
          value: "Poland",
          total: 0,
          selected: true,
        },
        {
          id: "",
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
          id: "",
          value: "United State",
          total: 0,
          selected: true,
        },
      ],
      categories: [
        {
          id: "",
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
          id: "",
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
          id: "",
          value: "Fit Out",
          total: 0,
          selected: true,
        },
        {
          id: "",
          value: "Healthcare Pharma",
          total: 0,
          selected: true,
        },
        {
          id: "",
          value: "Hotel Leisure",
          total: 0,
          selected: true,
        },
        {
          id: "",
          id: "e2b872a0-2d4e-42fd-86d7-5cd5760b6010",
          value: "Industrial",
          total: 0,
          selected: true,
        },
        {
          id: "",
          value: "Project Of Interest",
          total: 0,
          selected: true,
        },
        {
          id: "",
          value: "Public Sector Utilities",
          total: 0,
          selected: true,
        },
        {
          id: "",
          value: "Residential",
          total: 0,
          selected: true,
        },
        {
          id: "",
          value: "Retail",
          total: 0,
          selected: true,
        },
        {
          id: "",
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
    this.fetchTags();
    this.fetchPost();
  },
  watch: {
    selectedLocation: function () {
      this.fetchSuggestions(this.searchInput);
    },
    selectedCategory: function () {
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
    fetchTags: async function () {
      // Fetch Tags and Mapping to Category & Location to count total post / stories
      const storyblokApi = useStoryblokApi();
      const data = await storyblokApi.get("cdn/tags");

      console.log(data.data.tags);

      this.categories.map((category) => {
        var categoriesTitle = kebabCase(category.value);

        const findTag = data.data.tags.find(
          (tag) => tag.name == categoriesTitle
        );

        category.total = findTag ? findTag.taggings_count : 0;
      });

      this.locations.map((location) => {
        var locationsTitle = kebabCase(location.value);

        const findTag = data.data.tags.find(
          (tag) => tag.name == locationsTitle
        );

        location.total = findTag ? findTag.taggings_count : 0;
      });
    },
    fetchPost: async function () {
      const storyblokApi = useStoryblokApi();

      const { data } = await storyblokApi.get("cdn/stories", {
        version: useRoute().query._storyblok ? "draft" : "published",
        starts_with: "projects",
        is_startpage: false,
      });

      this.projects = data.stories;

      if (data.stories.length < 1) {
        this.getPost = false;
      }

      if (data.stories.length >= 1) {
        this.getPost = true;
      }
    },
    fetchSuggestions: async function () {
      const storyblokApi = useStoryblokApi();

      var optCategories = this.selectedCategory.map((category) => category.id);
      var optLocations = this.selectedLocation.map((location) => location.id);

      // additional since, not all list has id
      optCategories = optCategories.filter((n) => n != "");
      optLocations = optLocations.filter((n) => n != "");

      // this.searchText = searchInput

      if (this.searchText) {
        const { data } = await storyblokApi.get("cdn/stories", {
          version: useRoute().query._storyblok ? "draft" : "published",
          starts_with: "projects",
          // resolve_relations: 'author',
          search_term: this.searchText,
          per_page: 5,
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
        if (data.stories.length >= 1) {
          this.getPost = true;
        } else {
          this.getPost = false;
        }
      } else {
        const { data } = await storyblokApi.get("cdn/stories", {
          version: useRoute().query._storyblok ? "draft" : "published",
          starts_with: "projects",
          is_startpage: false,
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

        if (data.stories.length >= 1) {
          this.getPost = true;
        } else {
          this.getPost = false;
        }
      }
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
      <!-- <nav class="text-right pagination-wrapper">
        <ul class="pagination">
          <li class="active">
            <a href="#"><span>1</span></a>
          </li>
          <li class="">
            <a href="#"><span>2</span></a>
          </li>
          <li class="">
            <a href="#"><span>3</span></a>
          </li>
          <li class="">
            <a href="#"><span>4</span></a>
          </li>
          <li class="">
            <a href="#"><span>5</span></a>
          </li>
          <li class="">
            <a href="#"><span>6</span></a>
          </li>
          <li class="last">
            <a href="#"><span>7</span></a>
          </li>
        </ul>
      </nav> -->
    </div>
  </div>
</template>
