<script setup>
defineProps({ blok: Object })
</script>

<template>
    <div v-editable="blok" class="breadcrumbs-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-md-7 align-self-center">
                    <!-- {{blok}} -->
                    <h1>{{ blok.page_name }}</h1>
                </div>
                <div class="col-md-12 align-self-center">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a>
                        </li>
                        <li class="breadcrumb-item active">{{ blok.page_url }}</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>