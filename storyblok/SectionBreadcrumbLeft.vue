<script setup>
defineProps({ blok: Object })
</script>

<template>
    <div v-editable="blok" class="breadcrumbs-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-6 align-self-center">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active">Projects</li>
                    </ol>
                </div>
                <div class="col-6 align-self-center">
                </div>
            </div>
        </div>
    </div>
</template>