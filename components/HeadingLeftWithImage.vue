<script setup>
const props = defineProps({
    blok: {
        type: Object,
        required: true,
    }
})

</script>

<template>
    <div class="banner-wrapper">
        <section id="pricing-banner" class="curved-bg-banner">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h1>{{blok.title_heading}}</h1>
    <p>{{ blok.description }}</p>
    <p><a class="btn-style" href={{ blok.button_link }}>{{ blok.button_cta }}</a></p>
                    </div>
                    <div class="col-md-6">
                        <!-- <nuxt-img class=" lazyloaded" src="~/assets/camera2.webp" data-src="~/assets/camera2.webp" alt="image" /> -->
                        <img class=" lazyloaded" src={{ blok.image }} data-src="https://evercam.io/wp-content/uploads/2021/07/camera2.png" alt="image">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>