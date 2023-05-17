<script setup>
defineProps({ blok: Object });
</script>

<template>
  <div v-editable="blok" class="row">
    <div class="col-lg-6 partner">
      <div class="text-center">
        <a :href="blok.partner_website" target="_blank">
          <img
            v-if="blok.partner_logo"
            :src="blok.partner_logo"
            :alt="blok.name"
          />
        </a>
      </div>
      <h2>{{ blok.name }}</h2>
      <p>
        {{ blok.description }}
      </p>
      <p>
        <strong>Areas Covered:<br /> </strong>{{ blok.area }}
      </p>
      <p>
        <strong>Contact:</strong><br />
        {{blok.address}}
        <a v-if="blok.phone" :href="`tel://+`+ blok.phone">+{{blok.phone}}</a><br />
        <a v-if="blok.email" :href="`mailto:`+ blok.email"
          >{{blok.email}}</a
        ><br />
        <a v-if="blok.partner_website" :href="blok.partner_website">{{blok.name}}</a>
      </p>
      <iframe
        :src="blok.google_maps_embed"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>
