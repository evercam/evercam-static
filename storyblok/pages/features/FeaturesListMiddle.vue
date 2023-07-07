<script setup>
const props = defineProps({ blok: Object });
const resolvedDescription = computed(() => renderRichText(props.blok.description));

// check for route & change class if route is "brand"
const imgClass = useRoute().path.includes("brand") ? "brand-img" : "icon-big";

</script>

<template v-editable="blok">
  <div class="col-md-4">
    <img
      :class="imgClass"
      :src="blok.image.filename"
      alt=""
    />
    <h3 class="text-center">
      {{ blok.heading }}
    </h3>
    <div class="text-center" v-html="resolvedDescription"></div>
  </div>
</template>
