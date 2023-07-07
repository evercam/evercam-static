<script setup>
const { slug } = useRoute().params
const { locale } = useI18n()

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join('/') : 'home',
  {
    version: 'draft',
    language: locale.value,
   }
);

useServerSeoMeta({
  title: () => story.value.content.metadata?.title,
  ogTitle: () => story.value.content.metadata?.title,
  description: () => story.value.content.metadata?.description,
  ogDescription: () => story.value.content.metadata?.description,
})

</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
