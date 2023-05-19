<script setup>
const props = defineProps({ blok: Object });
const sliderType = props.blok.slider_option;
const { locale, locales } = useI18n();

console.log("What is the Language", locale.value);

const clientPhotoDefault =
  "https://a.storyblok.com/f/208852/800x600/398723ac00/client_photo_placeholder.jpg";
</script>

<template>
  <section v-if="sliderType === 'testimonial_full'" class="black-bg gray-bg">
    <div class="container text-center">
      <div id="gray-slider" class="owl-carousel owl-loaded owl-drag">
        <carousel :items-to-show="1" :autoplay="4000" :wrap-around="true">
          <slide v-for="slide in blok.testimonial_blok" :key="slide">
            <div class="item">
              <h3>“{{ slide.testimonial_details }}”</h3>
              <p>{{ slide.client_name }}</p>
            </div>
          </slide>

          <template #addons>
            <navigation />
          </template>
        </carousel>
      </div>
    </div>
  </section>
  <section v-if="sliderType === 'testimonial_card_ie' && locale === 'en-ie'" class="story-section">
    <div id="testimonials" class="container">
      <h2>Success Stories</h2>
      <carousel :items-to-show="1" :wrap-around="true">
        <slide v-for="slide in blok.testimonial_blok" :key="slide">
          <div class="testimonial-item">
            <div class="row">
              <div class="col-md-6">
                <h2>{{ slide.client_name }}</h2>
                <p>
                  {{ slide.testimonial_details }}
                </p>
                <p>
                  <strong>– {{ slide.client_pic }}</strong
                  ><br /><a href="/testimonials">See More</a>
                </p>
              </div>
              <div class="col-md-6 col-2-img">
                <div class="">
                  <img
                    v-if="slide.client_photo"
                    :src="slide.client_photo"
                    class="lazyloaded"
                    alt="image"
                  />
                  <img
                    v-else
                    :src="clientPhotoDefault"
                    class="lazyloaded"
                    alt="image"
                  />
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
  <section v-if="sliderType === 'testimonial_card_au' && locale === 'en-sg'" class="story-section">
    <div id="testimonials" class="container">
      <h2>Success Stories</h2>
      <carousel :items-to-show="1" :wrap-around="true">
        <slide v-for="slide in blok.testimonial_blok" :key="slide">
          <div class="testimonial-item">
            <div class="row">
              <div class="col-md-6">
                <h2>{{ slide.client_name }}</h2>
                <p>
                  {{ slide.testimonial_details }}
                </p>
                <p>
                  <strong>– {{ slide.client_pic }}</strong
                  ><br /><a href="/testimonials">See More</a>
                </p>
              </div>
              <div class="col-md-6 col-2-img">
                <div class="">
                  <img
                    v-if="slide.client_photo"
                    :src="slide.client_photo"
                    class="lazyloaded"
                    alt="image"
                  />
                  <img
                    v-else
                    :src="clientPhotoDefault"
                    class="lazyloaded"
                    alt="image"
                  />
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

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>
