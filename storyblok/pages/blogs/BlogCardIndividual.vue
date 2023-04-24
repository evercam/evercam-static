<script setup>
const props = defineProps({ blog: Object, slug: String });

const imageThumbnail = props.blog.asset_heading
  ? props.blog.asset_heading.filename
  : "https://a.storyblok.com/f/208852/1920x1083/82ba327790/asset-heading_placeholder.jpg";
</script>

<template>
  <div class="image-wrapper">
    <a :href="'/' + slug" class="item">
      <nuxt-img
        class="img-div"
        :alt="blog.blog_title"
        v-if="imageThumbnail"
        :src="imageThumbnail"
        style="opacity: 1"
      />
      <nuxt-img
        class="img-div"
        :alt="blog.blog_title"
        v-else
        src="https://a.storyblok.com/f/208852/1920x1083/82ba327790/asset-heading_placeholder.jpg"
        style="opacity: 1"
      />
    </a>
  </div>
  <div class="content">
    <h3>
      <a :href="'/' + slug">{{ blog.blog_title }}</a>
    </h3>
  </div>
</template>
