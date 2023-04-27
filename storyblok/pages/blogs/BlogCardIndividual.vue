<script setup>
const props = defineProps({ blog: Object, slug: String });

const resolvedContent = computed(() => renderRichText(props.blog.content).substring(0, 200));

const imageThumbnail = props.blog.asset_heading
  ? props.blog.asset_heading.filename
  : "https://a.storyblok.com/f/208852/1920x1083/82ba327790/asset-heading_placeholder.jpg";

const urlPath = useRoute().path;
let isBlogChild = false;
let isBlogParent = false;

if (urlPath.includes("/blog/")) {
  isBlogChild = true;
}

if (urlPath === '/blog') {
  isBlogParent = true;
}
</script>

<template>
  <div v-if="isBlogParent" class="col-lg-6">
    <div class="wrapper">
      <div class="image-wrapper">
        <a :href="'/' + slug">
          <img
            :alt="blog.blog_title"
            v-if="imageThumbnail"
            :src="imageThumbnail"
          />
          <img
            :alt="blog.blog_title"
            v-else
            src="https://a.storyblok.com/f/208852/1920x1083/82ba327790/asset-heading_placeholder.jpg"
          />
        </a>
      </div>
      <div class="content-wrapper">
        <h2>
          <a :href="'/' + slug">{{ blog.blog_title }}</a>
        </h2>
        <div v-html="resolvedContent"></div>
        <div class="text-right">
          <a :href="'/' + slug" class="btn-style">Read More</a>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
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
  </div>
</template>
