<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" id="marketing-up" class="project-management">
    <div class="container text-center"></div>
    <div class="container tick-image text-center">
      <div class="row">
        <div class="col-md-4">
          <span class="icon-monthly"></span>
          <h3>Monthly Revenue</h3>
          <p>
            Evercam increases your recurring revenue and gets you on site first.
          </p>
          <p>A unique hardware, install, and recurring combination.</p>
        </div>
        <div class="col-md-4">
          <span class="icon-industry"></span>
          <h3>Industry Experts</h3>
          <p>Construction camera software is our expertise.</p>
          <p>We support you and your customer throughout the whole process.</p>
        </div>
        <div class="col-md-4">
          <span class="icon-market"></span>
          <h3>Market Leaders</h3>
          <p>Evercam is the construction camera market leader.</p>
          <p>
            We work with Tier-1 contractors and provide global 24hr support.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
