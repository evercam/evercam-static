<script setup>
defineProps({ blok: Object });
</script>

<template>
  <section class="bottom-content-section">
    <div class="container">
      <div class="row">
        <div class="col-md-7 order-md-2">
          <img
            :src="blok.image.filename"
            class="lazyloaded"
            data-src="https://evercam.io/wp-content/uploads/2022/02/BIM-compare-Bentley-4d-view.jpg"
            alt="image"
          />
        </div>
        <div class="col-md-5">
          <h2>{{ blok.name }}</h2>
          <p>{{ blok.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
