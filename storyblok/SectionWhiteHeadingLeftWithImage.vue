<template>
  <section v-editable="blok" id="pricing-banner">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1>{{ blok.name }}</h1>
          <p>{{ blok.description }}</p>
          <p><a class="btn-style" href="#ask-us">Book a demo</a></p>
        </div>
        <div class="col-md-6">
          <img v-if="blok.image" :src="blok.image.filename" alt="image" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ blok: Object })
</script>
