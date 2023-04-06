<script setup>
const props = defineProps({ blok: Object })

const imageBackground = props.blok.image.filename;
</script>

<template>
    <div v-editable="blok" id="marketing-banner" class="trust-banner" :style="{ backgroundImage: 'url(' + imageBackground + ')', noRepeat:'center', backgroundSize: 'cover' }">
        <div class="container ">
            <h1>{{ blok.name }}</h1>
            <p v-if="blok.button_name"><a class="btn-style" href="https://evercam.io/contact/">{{ blok.button_name }}</a></p>
        </div>
    </div>
</template>