<script setup>
defineProps({ list: Object });
</script>

<template>
  <tr>
    <td>{{ list.name }}:</td>
    <td>
      <p v-if="!list.description_link.url">
        {{ list.description }}
      </p>
      <p v-else>
        <a :href="list.description_link.url">
          {{ list.description }}
        </a>
      </p>
    </td>
  </tr>
</template>
