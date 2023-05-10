<script setup>
const { slug } = useRoute().params;
const { locale } = useI18n();

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join('/') : 'home',
  { 
    version: 'draft',
    language: locale.value,
   }
);
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>