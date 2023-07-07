<script setup>
const props = defineProps({ blok: Object });

const description = computed(() => renderRichText(props.blok.description));

const checkMap = props.blok.google_maps_embed ? "col-lg-6 partner" : "col-lg-6 partner no-map";
</script>

<template>
  <div v-editable="blok" :class="checkMap">
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
    <div v-html="description"></div>
    <p>
      <strong>Areas Covered:<br /> </strong>{{ blok.area }}
    </p>
    <p>
      <strong>Contact:</strong><br />
      {{blok.address}}
      <br />
      <a v-if="blok.phone" :href="`tel://+`+ blok.phone">+{{blok.phone}}</a><br />
      <a v-if="blok.email" :href="`mailto:`+ blok.email"
        >{{blok.email}}</a
      ><br />
      <a v-if="blok.partner_website" :href="blok.partner_website">{{blok.name}}</a>
    </p>
    <iframe
      v-if="blok.google_maps_embed"
      :src="blok.google_maps_embed"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  <!-- <div v-editable="blok" v-else class="col-lg-6 partner no-map">
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
    <div v-html="description"></div>
    <p>
      <strong>Areas Covered:<br /> </strong>{{ blok.area }}
    </p>
    <p>
      <strong>Contact:</strong><br />
      {{blok.address}}
      <br />
      <a v-if="blok.phone" :href="`tel://+`+ blok.phone">+{{blok.phone}}</a><br />
      <a v-if="blok.email" :href="`mailto:`+ blok.email"
        >{{blok.email}}</a
      ><br />
      <a v-if="blok.partner_website" :href="blok.partner_website">{{blok.name}}</a>
    </p>
    <iframe
      v-if="blok.google_maps_embed"
      :src="blok.google_maps_embed"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div> -->
</template>
