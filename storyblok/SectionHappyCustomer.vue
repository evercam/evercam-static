<script setup>
import LogoIndividual from "./LogoIndividual.vue";
import TestimonialIndividual from "./TestimonialIndividual.vue";

const props = defineProps({ blok: Object });
const isBackground = props.blok.background
  ? props.blok.background.filename
  : "";
</script>

<template>
  <!-- Happy Banner -->
  <section
    v-if="isBackground"
    v-editable="blok"
    id="happy-customers"
    :style="{
      backgroundImage: 'url(' + props.blok.background.filename + ')',
      noRepeat: 'center',
      backgroundSize: 'cover',
    }"
    :class="blok.class_option"
  >
    <div class="container">
      <h2>{{ blok.name }}</h2>
      <ul v-if="blok.brand_list" class="text-center">
        <LogoIndividual
          v-for="blok in blok.brand_list"
          :blok="blok"
          :key="blok.uuid"
        />
      </ul>
      <div v-if="blok.testimonial_list" class="row row-eq-height desktop-items justify-content-center">
        <TestimonialIndividual
          v-for="blok in blok.testimonial_list"
          :blok="blok"
          :key="blok.uuid"
        />
      </div>
    </div>
  </section>
  <section
    v-else
    id="happy-customers"
    :style="{ backgroundImage: 'none' }"
    :class="blok.class_option"
  >
    <div class="container">
      <h2>{{ blok.name }}</h2>
      <ul v-if="blok.brand_list" class="text-center">
        <LogoIndividual
          v-for="blok in blok.brand_list"
          :blok="blok"
          :key="blok.uuid"
        />
      </ul>
      <div v-if="blok.testimonial_list" class="row row-eq-height desktop-items justify-content-center">
        <TestimonialIndividual
          v-for="blok in blok.testimonial_list"
          :blok="blok"
          :key="blok.uuid"
        />
      </div>
    </div>
  </section>
</template>
