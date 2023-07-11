<script setup>
const props = defineProps({ blog: Object, slug: String })

const imageThumbnail = props.blog.asset_heading.filename
  ? props.blog.asset_heading.filename
  : "https://a.storyblok.com/f/208852/674x380/bf71efc381/image_thumbnail.jpg"
</script>

<template>
  <div class="post-wrapper">
    <a :href="'/' + slug" class="item">
      <div class="post-div">
        <div class="data">
          <span class="post-title">
            {{ blog.blog_title }}
          </span>
        </div>
        <nuxt-img
          class="img-div"
          :alt="blog.blog_title"
          v-if="imageThumbnail"
          :src="imageThumbnail"
          style="opacity: 1"
        />
      </div>
    </a>
  </div>
</template>
