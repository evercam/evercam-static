<script setup>
defineProps({ blok: Object })
</script>

<template>
    <div v-editable="blok" id="marketing-banner" class="trust-banner" style="background-image: url('https://evercam.io/wp-content/uploads/2021/03/banner1.jpg')">
        <div class="container ">
            <h1>{{ blok.name }}</h1>
            <p v-if="blok.button_name"><a class="btn-style" href="https://evercam.io/contact/">{{ blok.button_name }}</a></p>
        </div>
    </div>
</template>