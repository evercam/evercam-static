<script setup>
const props = defineProps({ project: Object, slug: String });

const imageThumbnail = props.project.image_thumbnail
  ? props.project.image_thumbnail.filename
  : "https://a.storyblok.com/f/208852/674x380/538e670581/image_thumbnail.jpg";

const urlPath = useRoute().path;
let isProjectPages = false;

if (urlPath.includes("/projects/")) {
  isProjectPages = true;
}
</script>

<template>
  <div
    v-if="isProjectPages"
    v-editable="project"
    class="gallery_product col-lg-3 col-md-6"
  >
    <div class="product-wrapper">
      <NuxtLink :to="'/' + slug">
        <div class="wrapper">
          <nuxt-img
            class="img-responsive"
            v-if="imageThumbnail"
            :src="imageThumbnail"
          />
          <nuxt-img
            class="img-responsive"
            v-else
            src="https://a.storyblok.com/f/208852/674x380/bf71efc381/image_thumbnail.jpg"
          />
        </div>
      </NuxtLink>
      <div class="content-wrapper">
        <h3>
          <NuxtLink :to="'/' + slug" v-editable="project">
            {{ project.name }}
          </NuxtLink>
        </h3>
        <p>
          {{ project.short_description }}
        </p>
      </div>
    </div>
  </div>
  <div class="owl-item cloned active" style="width: 300px; margin-right: 30px">
    <a :href="'/' + slug" class="item">
      <div class="inner">
        <nuxt-img
          class="owl-lazy"
          :alt="project.name"
          v-if="imageThumbnail"
          :src="imageThumbnail"
          style="opacity: 1"
        />
        <nuxt-img
          class="owl-lazy"
          v-else
          style="opacity: 1"
          src="https://a.storyblok.com/f/208852/674x380/bf71efc381/image_thumbnail.jpg"
        />
        <!-- <h4>{{ project }}</h4> -->
        <div class="text">
          <strong>{{ project.name }}</strong>
          <p>
            {{ project.short_description }}
          </p>
        </div>
      </div>
    </a>
  </div>
</template>
