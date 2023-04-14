<script setup>
const props = defineProps({ blok: Object })
const imageBackground = props.blok.image ? props.blok.image.filename : "https://a.storyblok.com/f/208852/1920x1083/2910988f60/only-image_placeholder.jpg";
</script>

<template>
    <section id="bmi-image" class="d-none d-md-block">
            <div class="container">
                <img v-if="imageBackground" :src="imageBackground" alt="Image">
            </div>
        </section>
</template>