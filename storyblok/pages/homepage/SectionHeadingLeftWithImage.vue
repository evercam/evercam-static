<template>
  <div v-editable="blok" class="banner-wrapper">
    <section id="pricing-banner" class="curved-bg-banner">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h1>{{ blok.name }}</h1>
            <p>{{ blok.description }}</p>
            <p v-if="blok.button_name">
              <a class="btn-style" :href="`/` + button_url">{{
                blok.button_name
              }}</a>
            </p>
          </div>
          <div class="col-md-6">
            <nuxt-img class="lazyloaded" :src="blok.image.filename" />
            <!-- {{ blok.image }} -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });

let button_url = "";
if (props.blok.button_url.url !== "") {
  button_url = props.blok.button_url.url;
//   console.log("This is the button_url", button_url);
} else {
  button_url = props.blok.button_url.cached_url;
//   console.log("This is the button_url", button_url);
}
</script>
