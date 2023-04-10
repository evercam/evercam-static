<script setup>
defineProps({ feature: Object });
</script>

<template>
  <div class="col-md-4">
    <img
      src=" https://evercam.io/wp-content/uploads/2021/02/time-lapse.png"
      alt=""
    />
    <h3>
      {{ feature.heading }}
    </h3>
    <p>
      {{ feature.description }}
    </p>
  </div>
</template>
