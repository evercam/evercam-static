<script setup>
const props = defineProps({ blok: Object });
const resolvedDescription = computed(() =>
  renderRichText(props.blok.description)
);
</script>

<template>
  <section class="our-projects">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 order-lg-2 image-full">
          <img
            id="camera-specs"
            :src="blok.image.filename"
            class="box-shadow lazyloaded"
            alt="image"
          />
        </div>
        <div class="col-lg-6">
          <h1>{{ blok.name }}</h1>
          <div v-html="resolvedDescription"></div>
          <p>
            <a
              id="download-files"
              class="btn-style"
              :href="blok.download_url.filename"
              download=""
              >{{blok.download_name}}</a
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
