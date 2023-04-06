<script setup>
defineProps({ project: Object, slug: String });
</script>

<template>
  <div class="gallery_product col-lg-3 col-md-6">
    <div class="product-wrapper">
        <NuxtLink
            :to="'/' + slug"
            v-editable="project"
        >  
        <div class="wrapper">
            <nuxt-img class="img-responsive" :src="project.image_thumbnail.filename"/>
        </div>
        </NuxtLink>
      <div class="content-wrapper">
        <h3>
            <NuxtLink
            :to="'/' + slug"
            v-editable="project"
            > 
            {{ project.name }}
            </NuxtLink>
        </h3>
        <p>
          {{ project.short_description }}
        </p>
      </div>
    </div>
  </div>
</template>
