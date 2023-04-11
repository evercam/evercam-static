<script setup>
defineProps({ feature: Object, slug: String });
</script>

<template>
  <div class="col-md-4">
    <div class="wrapper slide-up">
      <NuxtLink :to="'/' + slug" v-editable="feature" class="image-wrapper">
        <nuxt-img
            :src="feature.image_thumbnail.filename"
          />
      </NuxtLink>
      <h3>
        {{ feature.name }}
      </h3>
    </div>
  </div>
</template>
