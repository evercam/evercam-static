<script setup>
const props = defineProps({
    blok: {
        type: Object,
        required: true,
    }
})
</script>

<template>
    <div>
        <component
            :is="blok.component"
            v-for="blok in blok.body"
            :key="blok._id"
            :blok="blok"
        />
    </div>
</template>