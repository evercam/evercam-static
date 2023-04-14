<script setup>
const props = defineProps({ blok: Object });
const resolvedContent = computed(() => renderRichText(props.blok.content));
</script>

<template>
  <section v-editable="blok" id="marketing-up">
    <div class="container">
      <h2 v-if="blok.name">{{ blok.name }}</h2>
      <div class="text-center" v-html="resolvedContent"></div>
      <div v-if="blok.feature_list_card" class="container">
        <div class="row">
          <FeaturesListInternal
            v-for="feature in blok.feature_list_card"
            :key="feature.uuid"
            :src="feature.image.filename"
            :blok="feature"
          />
        </div>
      </div>
      <div v-if="blok.feature_list_card_middle" class="container">
        <div class="row">
          <FeaturesListMiddle
            v-for="feature in blok.feature_list_card_middle"
            :key="feature.uuid"
            :src="feature.image.filename"
            :blok="feature"
          />
        </div>
      </div>
      <div
        v-if="blok.feature_list_card_left"
        class="row justify-content-center container"
      >
        <div v-for="blok in blok.feature_list_card_left" class="col-lg-4">
          <FeaturesLeftIcon
            v-if="blok.image.filename"
            :blok="blok"
            :src="blok.image.filename"
            :key="blok.uuid"
          />
        </div>
      </div>
    </div>
  </section>
</template>
