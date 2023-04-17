<script setup>
const props = defineProps({ project: Object, slug: String });

const imageThumbnail = props.project.image_thumbnail
  ? props.project.image_thumbnail.filename
  : "https://a.storyblok.com/f/208852/674x380/538e670581/image_thumbnail.jpg";
</script>

<template>
  <div class="gallery_product col-lg-3 col-md-6">
    <div class="product-wrapper">
        <NuxtLink
            :to="'/' + slug"
            v-editable="project"
        >  
        <div class="wrapper">
            <nuxt-img class="img-responsive" v-if="imageThumbnail" :src="imageThumbnail"/>
            <nuxt-img class="img-responsive" v-else src="https://a.storyblok.com/f/208852/674x380/bf71efc381/image_thumbnail.jpg"/>          </div>
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
