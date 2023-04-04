<!-- <script>
import VueCompareImage from 'vue-compare-image';

export default {
    components: {
      VueCompareImage
      // SectionCompareImages
    }
}
</script>

<script setup>
const props = defineProps({ blok: Object });
</script> -->

<template>
  <div :style="{ maxWidth: '100%' }">
    <VueCompareImage
      leftImage="https://evercam.io/wp-content/uploads/2022/09/Technimark-Longford-2021-November-20-13-00-Evercam-Time-lase-screenshot.jpg"
      rightImage="https://evercam.io/wp-content/uploads/2022/09/Technimark-Longford-2022-September-21-12-00-Evercam-Time-lapse-screenshot.jpg"
      :sliderLineWidth="3"
      :handleSize="50"
    />;
  </div>
</template>
