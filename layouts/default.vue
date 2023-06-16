<script setup>
const urlPath = useRoute().path;
const { locale } = useI18n();

useHead({
  bodyAttrs: {
    class: urlPath.length < 2 ? "home" : "",
  },
});

const story = ref(null)
const storyblokApi = useStoryblokApi()

const { data } = await storyblokApi.get('cdn/stories/global/site-config', {
  version: 'draft',
  resolve_links: 'url',
  language: locale.value,
})

story.value = data.story

</script>

<template>
  <slot />
  <SectionFooter :phone_number="story.content.phone_number" :address_details="story.content.address_details" :address_link="story.content.address_link" />
</template>
