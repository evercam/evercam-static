<script setup>
const props = defineProps({ project: Object, slug: String });

const imageThumbnail = props.project.image_thumbnail
  ? props.project.image_thumbnail
  : "https://a.storyblok.com/f/208852/674x380/538e670581/image_thumbnail.jpg";

const urlPath = useRoute().path;
let isProjectPages = false;
let isBlogPages = false;

if (urlPath.includes("projects")) {
  isProjectPages = true;
}

if (urlPath.includes("blog")) {
  isBlogPages = true;
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
          <img
            class="img-responsive"
            :src="imageThumbnail"
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
  <div v-else-if="isBlogPages" class="post-wrapper">
    <NuxtLink :to="'/' + slug">
      <div class="post-div">
        <div class="data">
          <span class="post-title">{{ project.name }}</span>
        </div>
        <div class="img-div">
          <img v-if="imageThumbnail" :src="imageThumbnail" :alt=project.name />
        </div>
      </div>
    </NuxtLink>
  </div>
  <div v-else class="owl-item cloned active" style="margin-right: 30px">
    <a :href="'/' + slug" class="item">
      <div class="inner">
        <img
          class="owl-lazy"
          :alt="project.name"
          v-if="imageThumbnail"
          :src="imageThumbnail"
          style="opacity: 1"
        />
        <!-- <h4>{{ project }}</h4> -->
        <div class="text">
          <h4>
            <strong>
              {{ project.name }}
            </strong>
          </h4>
          <p>
            {{ project.short_description }}
          </p>
        </div>
      </div>
    </a>
  </div>
</template>
