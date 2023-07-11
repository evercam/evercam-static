<script setup>
const props = defineProps({ blok: Object })
const resolvedClientName = computed(() =>
  renderRichText(props.blok.client_name)
)
// const isLink = props.blok.
</script>

<template>
  <div class="col-md-4 active">
    <div class="inner">
      <div class="text v-a-center">
        <p>
          {{ blok.testimonial }}
        </p>
      </div>
      <div v-html="resolvedClientName"></div>
      <img :src="blok.client_logo.filename" :alt="blok.client_name" />
    </div>
  </div>
</template>
