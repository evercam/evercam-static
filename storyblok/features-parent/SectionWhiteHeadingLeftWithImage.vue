<template>
    <section v-editable="blok" id="pricing-banner">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h1>Evercam<br>
Features</h1>
<p>{{blok.description}}</p>
<p><a class="btn-style" href="#ask-us">Book a demo</a></p>
                </div>
                <div class="col-md-6">
                    <img src="https://evercam.io/wp-content/uploads/2023/02/features-image.jpg" alt="image">
                </div>
            </div>
        </div>
    </section>
  </template>
   
  <script setup>
  defineProps({ blok: Object })
  </script>