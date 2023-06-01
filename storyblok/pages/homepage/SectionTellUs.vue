<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" class="pt-0 tell-us-home">
    <div class="container">
      <div class="text-center">
        <!-- <h2>Tell us about your project</h2>
                <a href="/contact" class="btn-style">Get a quote</a> -->
        <h2>{{ blok.name }}</h2>
        <a href="/contact" class="btn-style">Get a quote</a>
      </div>
    </div>
  </section>
</template>
