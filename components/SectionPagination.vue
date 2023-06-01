<script setup>
defineProps({
  totalPages: Number,
  currentPage: Number,
})

defineEmits(["change"])
</script>

<template>
  <nav class="text-right pagination-wrapper" aria-label="Page navigation">
    <ul class="pagination">
      <li
        @click="$emit('change', pageNumber)"
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="pnos"
      >
        <a>{{ pageNumber }}</a>
      </li>
    </ul>
  </nav>
</template>
