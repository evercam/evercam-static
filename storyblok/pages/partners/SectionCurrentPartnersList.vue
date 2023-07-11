<script setup>
defineProps({ blok: Object });
</script>

<template>
  <section v-editable="blok" id="inner-page">
    <div class="container">
      <div class="row">
        <SectionPartnerCard
          v-for="partner in blok.partner_row"
          :key="partner.uuid"
          :blok="partner"
        />
      </div>
    </div>
  </section>
</template>
