<script setup>
defineProps({ blok: Object });

const projects = ref(null);
const storyblokApi = useStoryblokApi();
let getPost = true;

const { data } = await storyblokApi.get("cdn/stories", {
  version: useRoute().query._storyblok ? "draft" : "published",
  starts_with: "projects",
  is_startpage: false,
});

async function fetchSuggestions(searchInput) {
  if (searchInput) {
    const { data } = await storyblokApi.get("cdn/stories", {
      version: useRoute().query._storyblok ? "draft" : "published",
      starts_with: "projects",
      // resolve_relations: 'author',
      search_term: searchInput,
      per_page: 5,
    });
    projects.value = data.stories;
    console.log("This is the result", data.stories.length)
    if(data.stories.length >= 1) {
      getPost = true;
      console.log("Are there a post?", getPost)
    } else {
      getPost = false;
      console.log("Are there a post?", getPost)
    }
    // if(data.stories.length >= 1) {
    // }
  } else {
    const { data } = await storyblokApi.get("cdn/stories", {
      version: useRoute().query._storyblok ? "draft" : "published",
      starts_with: "projects",
      is_startpage: false,
    });
    projects.value = data.stories;
    console.log("This is the result", data.stories.length)
    if(data.stories.length >= 1) {
      getPost = true;
      console.log("Are there a post?", getPost)
    } else {
      getPost = false;
      console.log("Are there a post?", getPost)
    }
    
  }
}
projects.value = data.stories;

if(data.stories.length < 1) {
  getPost = false
}

if(data.stories.length >= 1) {
  getPost = true
}
</script>

<template>
  <div v-editable="blok" id="projectsFilter" class="container">
    <div class="vue-app-wrapper">
      <div class="filter-wrapper">
        <div class="row">
          <div class="col-md-6 col-lg-3"><h1>Projects</h1></div>
          <div class="col-md-6 col-lg-9">
            <div id="filters-wrapper" class="">
              <a href="#" class="close-icon d-md-none"
                ><img
                  src="https://evercam.io/wp-content/themes/evercam/img/filter-close.svg"
                  alt="Close"
              /></a>
              <h3 class="d-md-none">Filter by</h3>
              <div class="select-dropdown">
                <button id="categories" type="button" class="">Location</button>
                <ul class="categories-list">
                  <li class="categories-list-item">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox-all-country"
                        value="all"
                        checked="checked"
                        class="custom-control-input"
                      />
                      <label
                        for="checkbox-all-country"
                        class="custom-control-label"
                        >ALL</label
                      >
                    </div>
                  </li>
                  <li class="categories-list-item">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox-country-0"
                        checked="checked"
                        class="custom-control-input"
                        value="australia"
                      />
                      <label
                        for="checkbox-country-0"
                        class="custom-control-label"
                      ></label>
                      <label
                        for="checkbox-country-0"
                        class="custom-control-label"
                        ><span class="text">australia</span
                        ><span class="badge badge-secondary float-right"
                          >9</span
                        ></label
                      >
                    </div>
                  </li>
                  <li class="categories-list-item">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox-country-1"
                        checked="checked"
                        class="custom-control-input"
                        value="ireland"
                      />
                      <label
                        for="checkbox-country-1"
                        class="custom-control-label"
                      ></label>
                      <label
                        for="checkbox-country-1"
                        class="custom-control-label"
                        ><span class="text">ireland</span
                        ><span class="badge badge-secondary float-right"
                          >103</span
                        ></label
                      >
                    </div>
                  </li>
                  <li class="categories-list-item">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox-country-2"
                        checked="checked"
                        class="custom-control-input"
                        value="poland"
                      />
                      <label
                        for="checkbox-country-2"
                        class="custom-control-label"
                      ></label>
                      <label
                        for="checkbox-country-2"
                        class="custom-control-label"
                        ><span class="text">poland</span
                        ><span class="badge badge-secondary float-right"
                          >2</span
                        ></label
                      >
                    </div>
                  </li>
                  <li class="categories-list-item">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox-country-3"
                        checked="checked"
                        class="custom-control-input"
                        value="singapore"
                      />
                      <label
                        for="checkbox-country-3"
                        class="custom-control-label"
                      ></label>
                      <label
                        for="checkbox-country-3"
                        class="custom-control-label"
                        ><span class="text">singapore</span
                        ><span class="badge badge-secondary float-right"
                          >1</span
                        ></label
                      >
                    </div>
                  </li>
                  <li class="categories-list-item">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox-country-4"
                        checked="checked"
                        class="custom-control-input"
                        value="united-kingdom"
                      />
                      <label
                        for="checkbox-country-4"
                        class="custom-control-label"
                      ></label>
                      <label
                        for="checkbox-country-4"
                        class="custom-control-label"
                        ><span class="text">united kingdom</span
                        ><span class="badge badge-secondary float-right"
                          >33</span
                        ></label
                      >
                    </div>
                  </li>
                  <li class="categories-list-item">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox-country-5"
                        checked="checked"
                        class="custom-control-input"
                        value="united-states"
                      />
                      <label
                        for="checkbox-country-5"
                        class="custom-control-label"
                      ></label>
                      <label
                        for="checkbox-country-5"
                        class="custom-control-label"
                        ><span class="text">united states</span
                        ><span class="badge badge-secondary float-right"
                          >17</span
                        ></label
                      >
                    </div>
                  </li>
                </ul>
              </div>
              <div class="select-dropdown">
                <button id="categories" type="button" class="">
                  Categories
                </button>
                <ul class="categories-list">
                  <li class="categories-list-item">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox-all"
                        value="all"
                        checked="checked"
                        class="custom-control-input"
                      />
                      <label for="checkbox-all" class="custom-control-label"
                        >ALL</label
                      >
                    </div>
                  </li>
                  <li class="categories-list-item">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox-0"
                        checked="checked"
                        class="custom-control-input"
                        value="arts-heritage-culture"
                      />
                      <label
                        for="checkbox-0"
                        class="custom-control-label"
                      ></label>
                      <label for="checkbox-0" class="custom-control-label"
                        ><span class="text">arts heritage culture</span
                        ><span class="badge badge-secondary float-right"
                          >11</span
                        ></label
                      >
                    </div>
                  </li>
                  <li class="categories-list-item">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox-1"
                        checked="checked"
                        class="custom-control-input"
                        value="civil"
                      />
                      <label
                        for="checkbox-1"
                        class="custom-control-label"
                      ></label>
                      <label for="checkbox-1" class="custom-control-label"
                        ><span class="text">civil</span
                        ><span class="badge badge-secondary float-right"
                          >13</span
                        ></label
                      >
                    </div>
                  </li>
                  <li class="categories-list-item">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox-2"
                        checked="checked"
                        class="custom-control-input"
                        value="commercial"
                      />
                      <label
                        for="checkbox-2"
                        class="custom-control-label"
                      ></label>
                      <label for="checkbox-2" class="custom-control-label"
                        ><span class="text">commercial</span
                        ><span class="badge badge-secondary float-right"
                          >48</span
                        ></label
                      >
                    </div>
                  </li>
                  <li class="categories-list-item">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox-3"
                        checked="checked"
                        class="custom-control-input"
                        value="completed"
                      />
                      <label
                        for="checkbox-3"
                        class="custom-control-label"
                      ></label>
                      <label for="checkbox-3" class="custom-control-label"
                        ><span class="text">completed</span
                        ><span class="badge badge-secondary float-right"
                          >55</span
                        ></label
                      >
                    </div>
                  </li>
                  <li class="categories-list-item">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox-4"
                        checked="checked"
                        class="custom-control-input"
                        value="education"
                      />
                      <label
                        for="checkbox-4"
                        class="custom-control-label"
                      ></label>
                      <label for="checkbox-4" class="custom-control-label"
                        ><span class="text">education</span
                        ><span class="badge badge-secondary float-right"
                          >14</span
                        ></label
                      >
                    </div>
                  </li>
                  <li class="categories-list-item">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox-5"
                        checked="checked"
                        class="custom-control-input"
                        value="fit-out"
                      />
                      <label
                        for="checkbox-5"
                        class="custom-control-label"
                      ></label>
                      <label for="checkbox-5" class="custom-control-label"
                        ><span class="text">fit out</span
                        ><span class="badge badge-secondary float-right"
                          >11</span
                        ></label
                      >
                    </div>
                  </li>
                  <li class="categories-list-item">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox-6"
                        checked="checked"
                        class="custom-control-input"
                        value="healthcare-pharma"
                      />
                      <label
                        for="checkbox-6"
                        class="custom-control-label"
                      ></label>
                      <label for="checkbox-6" class="custom-control-label"
                        ><span class="text">healthcare pharma</span
                        ><span class="badge badge-secondary float-right"
                          >10</span
                        ></label
                      >
                    </div>
                  </li>
                  <li class="categories-list-item">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox-7"
                        checked="checked"
                        class="custom-control-input"
                        value="hotel-leisure"
                      />
                      <label
                        for="checkbox-7"
                        class="custom-control-label"
                      ></label>
                      <label for="checkbox-7" class="custom-control-label"
                        ><span class="text">hotel leisure</span
                        ><span class="badge badge-secondary float-right"
                          >7</span
                        ></label
                      >
                    </div>
                  </li>
                  <li class="categories-list-item">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox-8"
                        checked="checked"
                        class="custom-control-input"
                        value="industrial"
                      />
                      <label
                        for="checkbox-8"
                        class="custom-control-label"
                      ></label>
                      <label for="checkbox-8" class="custom-control-label"
                        ><span class="text">industrial</span
                        ><span class="badge badge-secondary float-right"
                          >13</span
                        ></label
                      >
                    </div>
                  </li>
                  <li class="categories-list-item">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox-9"
                        checked="checked"
                        class="custom-control-input"
                        value="projects-of-interest"
                      />
                      <label
                        for="checkbox-9"
                        class="custom-control-label"
                      ></label>
                      <label for="checkbox-9" class="custom-control-label"
                        ><span class="text">projects of interest</span
                        ><span class="badge badge-secondary float-right"
                          >20</span
                        ></label
                      >
                    </div>
                  </li>
                  <li class="categories-list-item">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox-10"
                        checked="checked"
                        class="custom-control-input"
                        value="public-sector-utilities"
                      />
                      <label
                        for="checkbox-10"
                        class="custom-control-label"
                      ></label>
                      <label for="checkbox-10" class="custom-control-label"
                        ><span class="text">public sector utilities</span
                        ><span class="badge badge-secondary float-right"
                          >32</span
                        ></label
                      >
                    </div>
                  </li>
                  <li class="categories-list-item">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox-11"
                        checked="checked"
                        class="custom-control-input"
                        value="residential"
                      />
                      <label
                        for="checkbox-11"
                        class="custom-control-label"
                      ></label>
                      <label for="checkbox-11" class="custom-control-label"
                        ><span class="text">residential</span
                        ><span class="badge badge-secondary float-right"
                          >42</span
                        ></label
                      >
                    </div>
                  </li>
                  <li class="categories-list-item">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox-12"
                        checked="checked"
                        class="custom-control-input"
                        value="retail"
                      />
                      <label
                        for="checkbox-12"
                        class="custom-control-label"
                      ></label>
                      <label for="checkbox-12" class="custom-control-label"
                        ><span class="text">retail</span
                        ><span class="badge badge-secondary float-right"
                          >11</span
                        ></label
                      >
                    </div>
                  </li>
                  <li class="categories-list-item">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox-13"
                        checked="checked"
                        class="custom-control-input"
                        value="student-accom"
                      />
                      <label
                        for="checkbox-13"
                        class="custom-control-label"
                      ></label>
                      <label for="checkbox-13" class="custom-control-label"
                        ><span class="text">student accom</span
                        ><span class="badge badge-secondary float-right"
                          >8</span
                        ></label
                      >
                    </div>
                  </li>
                </ul>
              </div>
              <div class="search-box">
                <div class="input-group">
                  <SearchProject :search="fetchSuggestions" />
                  <div class="input-group-append">
                    <button :on-click="fetchSuggestions" type="button" class="btn btn-outline-secondary">
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
            ><span><font-awesome-icon :icon="['fas', 'th-large']" /></span>Grid
            View</a
          >
          <a href="#" class="d-md-none"
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
