<script setup>
const props = defineProps({ blok: Object })

const imageBackground = props.blok.image.filename;
const containerClass = props.blok.container_class_option ? props.blok.container_class_option : "";
const sectionId = props.blok.id_option ? props.blok.id_option : "";
</script>

<template>
    <div v-editable="blok" :id="sectionId" class="trust-banner" :style="{ backgroundImage: 'url(' + imageBackground + ')', noRepeat:'center', backgroundSize: 'cover' }">
        <div class="container ">
            <h1 :class="containerClass" v-if="blok.name">{{ blok.name }}</h1>
            <p :class="containerClass" v-if="blok.description">{{ blok.description }}</p>
            <p :class="containerClass" v-if="blok.button_name"><a class="btn-style" href="/contact">{{ blok.button_name }}</a></p>
        </div>
    </div>
</template>