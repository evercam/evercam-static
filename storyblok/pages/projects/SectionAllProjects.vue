<script setup>
defineProps({ blok: Object });
</script>

<style>
#map {
  border: 1px solid black;
  width: 100%;
  height: 900px;
  @media screen and (max-width: 768px) {
    height: 300px;
    width: 100%;
  }
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>

<script>
import { Loader } from "@googlemaps/js-api-loader";
import mapStyleJson from "../../../utils/map-style";

export default {
  data() {
    return {
      locale: this.$i18n.locale,
      map: null,
      mapLoaded: false,
      tabs: {
        gridView: true,
        mapView: false,
      },
      projects: {
        data: [],
        total: 0,
      },
      projectsFiltered: {
        data: [],
        total: 0,
        totalPage: 0,
        itemPerPage: 24,
        currentPage: 1,
      },
      getPost: true,
      currentPage: 1,
      perPage: 24,
      totalProject: 0,
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
          code: "en-au",
          total: 0,
          selected: true,
        },
        {
          id: "94332311-8c5a-447f-bf35-d01f8c6de53c",
          value: "Ireland",
          code: "en-ie",
          total: 0,
          selected: true,
        },
        {
          id: "f6547d6e-d16c-4c20-ab81-b919aa4c2a17",
          value: "Poland",
          code: "pl",
          total: 0,
          selected: true,
        },
        {
          id: "99ca21c1-5030-4289-aa4b-ba9b2535b98b",
          value: "Singapore",
          code: "en-sg",
          total: 0,
          selected: true,
        },
        {
          id: "03549e41-cad9-427f-8547-d99255e6eb40",
          value: "United Kingdom",
          code: "en-gb",
          total: 0,
          selected: true,
        },
        {
          id: "bca81fbe-0317-4d5b-bbe2-5ace823bb8b4",
          value: "United States",
          code: "en-us",
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
          value: "Student Accommodation",
          total: 0,
          selected: true,
        },
      ],
      mapStyleJson: mapStyleJson,
    };
  },
  computed: {
    selectedLocation() {
      return this.locations.filter((location) => location.selected);
    },
    selectedCategory() {
      return this.categories.filter((category) => category.selected);
    },
    fetchFilteredProject: function () {
      const selectedCategories = this.selectedCategory
        .filter((category) => category.id !== "")
        .map((category) => category.id);
      const selectedLocations = this.selectedLocation
        .filter((location) => location.id !== "")
        .map((location) => location.id);
      const searchQuery = this.searchText.toLowerCase();

      this.projectsFiltered.data = this.projects.data.filter((project) => {
        const categoryMatch = selectedCategories.includes(
          project.content.project_category
        );
        const locationMatch = selectedLocations.includes(
          project.content.project_country
        );
        const searchMatch = Object.values(project.content).some((value) => {
          if (typeof value !== "string") return false;
          return value.toLowerCase().includes(searchQuery);
        });
        return categoryMatch && locationMatch && searchMatch;
      });

      this.projectsFiltered.total = this.projectsFiltered.data.length;
      this.paginate();

      // reload google maps
      this.loadGoogleMap();
    },
  },
  created() {
    this.fetchAllProject();
  },
  methods: {
    filterProjects() {
      this.fetchFilteredProject;
    },
    switchTab(type) {
      if (type == "map") {
        this.tabs.gridView = false;
        this.tabs.mapView = true;

        if (!this.mapLoaded) {
          this.loadGoogleMap();
          this.mapLoaded = true;
        }
      } else {
        this.tabs.gridView = true;
        this.tabs.mapView = false;
      }
    },
    loadGoogleMap: async function () {
      if (process.client) {
        const loader = await new Loader({
          apiKey: useRuntimeConfig().public.googleMapKey,
        });

        await loader.load();

        google.maps.event.clearInstanceListeners(window);
        google.maps.event.clearInstanceListeners(document);

        var latlng = new google.maps.LatLng(53.349804, -6.26031);

        this.map = new google.maps.Map(document.getElementById("map"), {
          center: latlng,
          zoom: 18,
          styles: this.mapStyleJson,
        });

        this.setMarkers();
      }
    },
    parseLatLong(urlString) {
      const url = new URL(urlString);
      const params = new URLSearchParams(url.search);

      const qValue = params.get("q");
      const [latitude, longitude] = qValue.split(",");

      return {
        lat: latitude,
        long: longitude,
      };
    },
    setMarkers: function () {
      var _this = this;
      var marker, i;
      var bounds = new google.maps.LatLngBounds();

      for (i = 0; i < this.projectsFiltered.data.length; i++) {
        var title = this.projectsFiltered.data[i]["name"];
        var lat = "";
        var long = "";
        var image =
          this.projectsFiltered.data[i]["content"]["image_thumbnail"] ?? "";
        var link = this.projectsFiltered.data[i]["full_slug"] ?? "";
        var detail = this.projectsFiltered.data[i]["detail"] ?? "";

        if (this.projectsFiltered.data[i].content.maps) {
          let tempData = this.parseLatLong(
            this.projectsFiltered.data[i].content.maps
          );

          lat = tempData.lat;
          long = tempData.long;
        }

        if (lat && long && !isNaN(lat) && !isNaN(long)) {
          var latlngset = new google.maps.LatLng(lat, long);
          var marker = new google.maps.Marker({
            map: this.map,
            title: title,
            position: latlngset,
          });
          this.map.setCenter(marker.getPosition());

          this.map.setCenter(bounds.getCenter());

          this.map.fitBounds(bounds);
          this.map.setZoom(this.map.getZoom() - 1);

          bounds.extend(marker.getPosition());

          var content =
            '<h3><a href="' +
            link +
            '">' +
            title +
            '</a></h3><div class="image-div"><img src="' +
            image +
            '"></div><p>' +
            detail +
            "</p>";

          var infowindow = new google.maps.InfoWindow();

          google.maps.event.addListener(
            marker,
            "click",
            (function (marker, content, infowindow) {
              return function () {
                if (_this.activeInfoWindow) {
                  _this.activeInfoWindow.close();
                }
                infowindow.setOptions({
                  content: content,
                });
                infowindow.open(_this.map, marker);
                _this.map.setCenter(marker.getPosition());
                _this.activeInfoWindow = infowindow;
              };
            })(marker, content, infowindow)
          );
        }
      }
    },
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
    fetchAllProject: async function () {
      const storyblokApi = useStoryblokApi();
      const customPerPage = 50;

      const { headers } = await storyblokApi.get("cdn/stories", {
        version: useRoute().query._storyblok ? "draft" : "published",
        starts_with: "projects",
        is_startpage: false,
        page: 1,
        per_page: 1,
      });

      this.projects.total = parseInt(headers.total);
      const totalPagination = this.calculatePagesCount(
        customPerPage,
        this.projects.total
      );

      const dataPromises = Array.from({ length: totalPagination }, (_, i) =>
        storyblokApi
          .get("cdn/stories", {
            version: useRoute().query._storyblok ? "draft" : "published",
            starts_with: "projects",
            is_startpage: false,
            per_page: customPerPage,
            page: i + 1,
          })
          .then(({ data }) => data.stories)
      );

      this.projects.data = (await Promise.all(dataPromises)).flat();

      // ****************************
      // Sort The Projects based on User Country
      // ****************************
      this.sortProjectsByUserLocale();

      // ****************************
      // Count Categories & Country
      // ****************************
      this.groupByCategoriesAndLocation();
    },
    sortProjectsByUserLocale() {
      // Select Stories by User Country
      const userLocale = this.locations.find(
        (location) => location.code === this.$i18n.locale
      );

      this.projects.data.sort((a, b) => {
        if (
          a.content.project_country === userLocale.id &&
          b.content.project_country !== userLocale.id
        ) {
          return -1; // `a` comes first if content.project_country is 'A'
        } else if (
          a.content.project_country !== userLocale.id &&
          b.content.project_country === userLocale.id
        ) {
          return 1; // `b` comes first if content.project_country is 'A'
        } else {
          return a.content.project_country.localeCompare(
            b.content.project_country
          ); // Sort by name if content.project_country is the same or not 'A'
        }
      });
    },
    groupByCategoriesAndLocation() {
      this.projects.data.map((story) => {
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
    },

    setPage: function (pageNumber) {
      this.projectsFiltered.currentPage = pageNumber;
      this.fetchFilteredProject;
    },
    paginate: function () {
      var itemsPerPage = this.projectsFiltered.itemPerPage;
      var totalData = this.projectsFiltered.total;
      var currentPage = this.projectsFiltered.currentPage;
      var totalPage = this.calculatePagesCount(itemsPerPage, totalData);

      this.projectsFiltered.totalPage = totalPage;

      if (
        !this.projectsFiltered.data ||
        this.projectsFiltered.data.length < 1
      ) {
        return;
      }

      if (currentPage >= totalPage) {
        currentPage = totalPage;
      }

      var index = currentPage * itemsPerPage - itemsPerPage;

      this.projectsFiltered.data = this.projectsFiltered.data.slice(
        index,
        index + itemsPerPage
      );

    },
    calculatePagesCount(perPage, totalProject) {
      return totalProject < perPage ? 1 : Math.ceil(totalProject / perPage);
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
                    :search="filterProjects"
                    v-model="searchText"
                  />
                  <div class="input-group-append">
                    <button
                      :on-click="fetchFilteredProject"
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
          <a
            href="#"
            @click="switchTab('map')"
            :class="tabs.mapView ? 'active' : ''"
            ><span><font-awesome-icon :icon="['fas', 'map-marker-alt']" /></span
            >Map View</a
          >
          <a
            href="#"
            @click="switchTab('grid')"
            :class="tabs.gridView ? 'active' : ''"
          >
            <span> <font-awesome-icon :icon="['fas', 'th-large']" /> </span
            >GridView
          </a>
          <a
            @click="showFilterOnMobile = !showFilterOnMobile"
            href="#"
            class="d-md-none"
            ><span><font-awesome-icon :icon="['fas', 'filter']" /></span
            >Filters</a
          >
        </div>
      </div>

      <!-- Map View -->
      <section class="container" v-show="tabs.mapView">
        <div v-once id="map"></div>
      </section>

      <!-- Grid View -->
      <div v-if="tabs.gridView" id="filterprojects" class="active">
        <div class="filter-projects">
          <div class="row">
            <ProjectCard
              v-for="project in projectsFiltered.data"
              :key="project.uuid"
              :project="project.content"
              :slug="project.full_slug"
            />
            <span v-if="!getPost" class="no-result">No project found</span>
          </div>
        </div>

        <div
          v-if="projectsFiltered.total > projectsFiltered.itemPerPage"
          class="paginate"
        >
          <div style="margin-right: 10px">
            <p>
              Showing
              {{
                projectsFiltered.currentPage * projectsFiltered.itemPerPage -
                projectsFiltered.itemPerPage +
                1
              }}
              - {{ " " }}
              {{
                Math.min(
                  projectsFiltered.currentPage * projectsFiltered.itemPerPage,
                  projectsFiltered.total
                )
              }}
              of
              {{ projectsFiltered.total }}
            </p>
          </div>

          <div>
            <nav class="text-right pagination-wrapper">
              <ul class="pagination">
                <li
                  v-for="page in calculatePagesCount(
                    projectsFiltered.itemPerPage,
                    projectsFiltered.total
                  )"
                  :key="page"
                  :class="projectsFiltered.currentPage == page ? 'active' : ''"
                >
                  <a href="#" @click="setPage(page)"
                    ><span>{{ page }}</span></a
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
