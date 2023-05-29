<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default defineComponent({
  name: 'Basic',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
})
</script>

<script setup>
const props = defineProps({ blok: Object });
const sliderType = props.blok.slider_option;
const { locale, locales } = useI18n();

// console.log("What is the Language", locale.value);

const clientPhotoDefault =
  "https://a.storyblok.com/f/208852/800x600/398723ac00/client_photo_placeholder.jpg";
</script>

<template>
  <section v-if="sliderType === 'testimonial_full'" class="black-bg gray-bg">
    <div class="container text-center">
      <div id="gray-slider" class="owl-carousel owl-loaded owl-drag">
        <Carousel v-if="blok.testimonial_blok.length > 1" :items-to-show="1" :autoplay="4000" :wrap-around="true">
          <Slide v-for="item in blok.testimonial_blok" :key="item">
            <div class="item">
              <h3>“{{ item.testimonial_details }}”</h3>
              <p>{{ item.client_name }}</p>
            </div>
          </Slide>

          <template #addons>
            <Navigation v-if="blok.testimonial_blok.length > 1" />
          </template>
        </Carousel>
        <Carousel v-else :items-to-show="1">
          <Slide v-for="item in blok.testimonial_blok" :key="item">
            <div class="item">
              <h3>“{{ item.testimonial_details }}”</h3>
              <p>{{ item.client_name }}</p>
            </div>
          </Slide>

          <template #addons>
          </template>
        </Carousel>
      </div>
    </div>
  </section>
  <section v-if="sliderType === 'testimonial_card_ie' && locale === 'en-ie'" class="story-section">
    <div id="testimonials" class="container">
      <h2>Success Stories</h2>
      <Carousel :items-to-show="1" :wrap-around="true">
        <Slide v-for="item in blok.testimonial_blok" :key="item">
          <div class="testimonial-item">
            <div class="row">
              <div class="col-md-6">
                <h2>{{ item.client_name }}</h2>
                <p>
                  {{ item.testimonial_details }}
                </p>
                <p>
                  <strong>– {{ item.client_pic }}</strong
                  ><br /><a href="/testimonials">See More</a>
                </p>
              </div>
              <div class="col-md-6 col-2-img">
                <div class="">
                  <img
                    v-if="item.client_photo"
                    :src="item.client_photo"
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
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
  <section v-if="sliderType === 'testimonial_card_au' && locale === 'en-sg'" class="story-section">
    <div id="testimonials" class="container">
      <h2>Success Stories</h2>
      <Carousel :items-to-show="1" :wrap-around="true">
        <Slide v-for="item in blok.testimonial_blok" :key="item">
          <div class="testimonial-item">
            <div class="row">
              <div class="col-md-6">
                <h2>{{ item.client_name }}</h2>
                <p>
                  {{ item.testimonial_details }}
                </p>
                <p>
                  <strong>– {{ item.client_pic }}</strong
                  ><br /><a href="/testimonials">See More</a>
                </p>
              </div>
              <div class="col-md-6 col-2-img">
                <div class="">
                  <img
                    v-if="item.client_photo"
                    :src="item.client_photo"
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
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>