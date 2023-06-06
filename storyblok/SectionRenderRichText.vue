<template>
    <template v-for="node in nodes" :key="node.key">
      <component
        :is="node.content.blok.content.component"
        v-if="node.type === 'blok'"
        :blok="node.content.blok.content"
      />
      <div v-else v-html="node.content"></div>
    </template>
  </template>
  
  <script setup lang="ts">
  import { ISbRichtext } from "@storyblok/vue";
  
  const props = defineProps<{
    articleContent: ISbRichtext[] | undefined;
  }>();
  
  const nodes: any = [];
  Object.entries(props.articleContent!).forEach(([key, node]) => {
    if (node.type === "blok") {
      const blok = {
        content: node.attrs?.body[0],
      };
      nodes.push({
        key,
        type: "blok",
        content: {
          blok,
        },
      });
    } else {
      nodes.push({
        key,
        type: "html",
        content: renderRichText({
          type: "doc",
          content: [node],
        }),
      });
    }
  });
  </script>