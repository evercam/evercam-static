<script>
import SectionNavigationWhite from "@/storyblok/SectionNavigationWhite.vue";
import SectionBreadcrumbLeftRight from "@/storyblok/SectionBreadcrumbLeftRight.vue";
import SectionContainerContent from "../../SectionContainerContent.vue";
import SectionAskUs from "@/storyblok/SectionAskUs.vue";
import BlogPostIndividual from "./BlogPostIndividual.vue";
// import SectionVideoWrapper from "../../SectionVideoWrapper.vue";

// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import BlogCardIndividual from "./BlogCardIndividual.vue";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    SectionNavigationWhite,
    SectionBreadcrumbLeftRight,
    SectionContainerContent,
    SectionAskUs,
    BlogPostIndividual,
    BlogCardIndividual,
  },
};
</script>

<script setup>
const props = defineProps({ blok: Object });

const resolvedContent = computed(() => renderRichText(props.blok.content));

const videoSource = ["vimeo.com", "youtube.com", "mp4", ".mp4"];

const blogs = ref(null);
const projects = ref(null);
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories", {
  version: useRoute().query._storyblok ? "draft" : "published",
  starts_with: "blog",
  is_startpage: false,
});
// const { data_project } = await storyblokApi.get("cdn/stories", {
//   version: useRoute().query._storyblok ? "draft" : "published",
//   starts_with: "projects",
//   is_startpage: false,
// });
blogs.value = data.stories.slice(0, 5);
// projects.value = data_project.stories.slice(0,15);

const assetHeading = props.blok.asset_heading
  ? props.blok.asset_heading.filename
  : "https://player.vimeo.com/video/427781103?dnt=1&app_id=122963";

/**
 *  Change format Date of Blog post
 */

function formatDate(d) {
  let date = new Date(d);

  if (isNaN(date.getTime())) {
    return d;
  } else {
    let month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "Juny";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    let day = date.getDate();

    if (day < 10) {
      day = "0" + day;
    }

    return month[date.getMonth()] + " " + day + "," + " " + date.getFullYear();
  }
}

/**
 * Check if Youtube and make it embed
 */

const fromYoutube = "www.youtube.com/watch";
let isYoutube = assetHeading.includes(fromYoutube);
let assetCheck = "";
let isVideo = false;

if (isYoutube) {
  assetCheck = assetHeading.replace("watch?v=", "embed/");
} else {
  assetCheck = assetHeading;
}

if (
  videoSource.some(function (v) {
    return assetCheck.indexOf(v) > -1;
  })
) {
  isVideo = true;
}

/**
 * Writer Details
 * Name and Photo
 */

const defaultPhoto = props.blok.writer_details
  ? props.blok.writer_details[0].photo
  : "https://a.storyblok.com/f/208852/225x225/07df9eefcf/photo_icon.png";
</script>

<template>
  <SectionNavigationWhite />
  <SectionBreadcrumbLeftRight class="d-none" />

  <section class="single-blog">
    <div class="container">
      <SectionSocialShare />
      <div class="row">
        <div class="col-lg-8">
          <div class="breadcrumbs-wrapper-banner">
            <div class="container">
              <div class="row">
                <div class="col-md-8 align-self-center">
                  <div v-for="writer in blok.writer_details" class="auth-div">
                    <div class="img-div">
                      <img :src="defaultPhoto" />
                    </div>
                    <div class="data">
                      <span class="auth-name">{{ writer.name }}</span>
                      <div class="all-dates">
                        <span class="entry-date">Date : 03-04-2023</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 align-self-center">
                  <SectionSocialShare class="desktop" />
                </div>
              </div>
            </div>
          </div>
          <div class="container img-title">
            <div class="row">
              <div v-if="!isVideo" class="col-md-12 mt-5">
                <img v-if="assetCheck" :src="assetCheck" />
              </div>
              <div v-else class="col-md-12 mt-5">
                <iframe
                  class="embed-responsive-item"
                  :src="assetCheck"
                  allowfullscreen=""
                ></iframe>
              </div>
              <div class="col-md-12 mt-3">
                <h1>
                  {{ blok.blog_title }}
                </h1>
              </div>
            </div>
          </div>
          <div
            class="standard-content container"
            v-html="resolvedContent"
          ></div>
          <SectionSocialShare class="mobile d-block d-md-none" />

          <!-- <div class="social-share-buttons mobile d-block d-md-none">
            <a
              class="share_facebook share-button"
              href="https://www.facebook.com/sharer/sharer.php?u=https://evercam.io/blog/meet-evercams-new-vp-of-sales-anton-marinovich-bringing-expertise-in-reality-capture-and-site-monitoring"
              target="_blank"
              title="Share this on facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="512"
                height="512"
                x="0"
                y="0"
                viewBox="0 0 49.652 49.652"
                style="enable-background: new 0 0 512 512"
                xml:space="preserve"
                class=""
              >
                <g>
                  <g xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path
                        d="m24.826 0c-13.689 0-24.826 11.137-24.826 24.826 0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826 0-13.689-11.136-24.826-24.826-24.826zm6.174 25.7h-4.039v14.396h-5.985s0-7.866 0-14.396h-2.845v-5.088h2.845v-3.291c0-2.357 1.12-6.04 6.04-6.04l4.435.017v4.939s-2.695 0-3.219 0-1.269.262-1.269 1.386v2.99h4.56z"
                        class=""
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
            <a
              class="share_whatsapp share-button"
              href="https://api.whatsapp.com/send?text=https://evercam.io/blog/meet-evercams-new-vp-of-sales-anton-marinovich-bringing-expertise-in-reality-capture-and-site-monitoring"
              target="_blank"
              title="Share this on whatsapp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45.093"
                height="45.093"
                viewBox="0 0 45.093 45.093"
              >
                <path
                  d="M22.552,0h-.011A22.533,22.533,0,0,0,4.292,35.762l-2.81,8.376,8.666-2.77A22.543,22.543,0,1,0,22.552,0ZM35.671,31.839c-.544,1.536-2.7,2.81-4.425,3.182-1.178.251-2.717.451-7.9-1.7-6.626-2.745-10.893-9.478-11.225-9.915s-2.677-3.565-2.677-6.8a7.2,7.2,0,0,1,2.305-5.487,3.276,3.276,0,0,1,2.305-.809c.279,0,.53.014.755.025.662.028.995.068,1.432,1.113.544,1.311,1.869,4.546,2.026,4.879a1.342,1.342,0,0,1,.1,1.22,3.9,3.9,0,0,1-.73,1.034c-.333.383-.648.676-.981,1.088-.3.358-.648.741-.265,1.4a20.012,20.012,0,0,0,3.658,4.546,16.576,16.576,0,0,0,5.287,3.261,1.426,1.426,0,0,0,1.59-.251A27.277,27.277,0,0,0,28.688,26.3a1.258,1.258,0,0,1,1.618-.49c.609.211,3.83,1.8,4.492,2.133s1.1.49,1.26.769A5.615,5.615,0,0,1,35.671,31.839Z"
                ></path>
              </svg>
            </a>
            <a
              class="share_linkedin share-button"
              href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://evercam.io/blog/meet-evercams-new-vp-of-sales-anton-marinovich-bringing-expertise-in-reality-capture-and-site-monitoring&amp;title=&amp;summary=&amp;source="
              target="_blank"
              title="linkedin"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45.093"
                height="45.093"
                viewBox="0 0 45.093 45.093"
              >
                <path
                  d="M22.547,0A22.547,22.547,0,1,0,45.093,22.547,22.549,22.549,0,0,0,22.547,0ZM15.995,34.084H10.5V17.564h5.491ZM13.249,15.308h-.036A2.862,2.862,0,1,1,13.286,9.6a2.863,2.863,0,1,1-.036,5.708ZM35.795,34.084H30.3V25.246c0-2.221-.8-3.736-2.782-3.736A3.006,3.006,0,0,0,24.7,23.518a3.76,3.76,0,0,0-.181,1.34v9.226H19.034s.072-14.97,0-16.52h5.491V19.9a5.451,5.451,0,0,1,4.949-2.727c3.613,0,6.322,2.361,6.322,7.435Zm0,0"
                ></path>
              </svg>
            </a>
            <a
              class="share_twitter share-button"
              href="https://twitter.com/intent/tweet?text=https://evercam.io/blog/meet-evercams-new-vp-of-sales-anton-marinovich-bringing-expertise-in-reality-capture-and-site-monitoring"
              target="_blank"
              title="Share this on Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45.093"
                height="45.093"
                viewBox="0 0 45.093 45.093"
              >
                <path
                  d="M22.547,0A22.547,22.547,0,1,0,45.093,22.547,22.549,22.549,0,0,0,22.547,0ZM32.841,17.579q.015.333.015.669A14.624,14.624,0,0,1,18.132,32.973h0A14.648,14.648,0,0,1,10.2,30.648a10.527,10.527,0,0,0,1.234.072A10.384,10.384,0,0,0,17.861,28.5a5.181,5.181,0,0,1-4.835-3.594,5.158,5.158,0,0,0,2.337-.089,5.176,5.176,0,0,1-4.152-5.073c0-.023,0-.044,0-.066a5.139,5.139,0,0,0,2.344.647,5.179,5.179,0,0,1-1.6-6.909,14.693,14.693,0,0,0,10.667,5.407,5.178,5.178,0,0,1,8.819-4.719,10.38,10.38,0,0,0,3.286-1.256,5.2,5.2,0,0,1-2.276,2.862,10.321,10.321,0,0,0,2.972-.815,10.517,10.517,0,0,1-2.581,2.68Zm0,0"
                ></path>
              </svg>
            </a>
          </div> -->
        </div>
        <div class="col-lg-4 right-sidebar blog-right-sidebar">
          <!--                                         -->

          <div class="recent-post-sidebar">
            <h3>Recent Posts</h3>
            <BlogPostIndividual
              v-for="blog in blogs"
              :key="blog.uuid"
              :blog="blog.content"
              :slug="blog.full_slug"
            />
          </div>

          <div class="recent-post-sidebar">
            <h3>Recent Projects</h3>
            <SectionRelatedProject />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="related-posts">
    <div class="container">
      <h2>Related Posts</h2>
      <carousel :items-to-show="3" :wrap-around="true">
        <slide v-for="blog in blogs" :key="slide">
          <div class="recent-blog" style="width: 350px; margin-right: 30px">
            <div class="item">
              <BlogCardIndividual
                :key="blog.uuid"
                :blog="blog.content"
                :slug="blog.full_slug"
              />
              <div class="content">
                <div class="row">
                  <div class="col">
                    <div class="date">{{ formatDate(blog.created_at) }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slide>

        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>
  </section>
</template>
