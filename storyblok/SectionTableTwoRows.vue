<template>
  <section id="price-list">
    <div class="container">
      <h2>Price List</h2>
      <div class="main-wrapper">
        <div class="price-list-header">
          <h3>Products</h3>
          <h3>Cost</h3>
        </div>
        <div v-for="blok in blok.price_list_table" class="price-list-wrapper">
          <div class="price-list-detail" v-html="renderRichText(blok.detail)">
          </div>
          <div class="price-list-cost" v-html="renderRichText(blok.cost)">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" scoped></style>
