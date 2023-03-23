<template>
    <div v-editable="blok" class="banner-wrapper">
        <section id="pricing-banner" class="curved-bg-banner">
          <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h1>{{blok.name}}</h1>
        <p>{{ blok.description }}</p>
        <p><a class="btn-style" :href="blok.button_url.url">{{ blok.button_name }}</a></p>
                        </div>
                        <div class="col-md-6">
                            <nuxt-img class="lazyloaded" :src="blok.image.filename"/>
                        </div>
                    </div>
                </div>
              </section>
            </div>
  </template>
   
  <script setup>
  defineProps({ blok: Object })
  </script>