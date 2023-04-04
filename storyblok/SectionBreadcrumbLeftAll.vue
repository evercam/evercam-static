<script setup>
defineProps({ blok: Object });
const urlPath = useRoute().path;
const urlRaw = urlPath.replace("/projects/", "").replace(/-/g, " ");

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const titleAndPath = toTitleCase(urlRaw);
</script>

<template>
    <div class="breadcrumbs-wrapper">
        <div class="container">
        <div class="row">
            <div class="col-md-7 align-self-center">
            <h1 v-if="titleAndPath">{{ titleAndPath }}</h1>
            <h1 v-else>Pages Name Needed</h1>
            </div>
            <div class="col-md-12 align-self-center">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item"><a href="/projects">Projects</a></li>
                <li v-if="titleAndPath" class="breadcrumb-item active">
                {{ titleAndPath }}
                </li>
                <li v-else class="breadcrumb-item active">Pages url Needed</li>
            </ol>
            </div>
        </div>
        </div>
    </div>
</template>
