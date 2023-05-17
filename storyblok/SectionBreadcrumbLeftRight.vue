<script setup>
defineProps({ blok: Object })
const urlPath = useRoute().path;
const isProjects = urlPath.includes("/projects/");
const isFeatures = urlPath.includes("/features/");
const isBlog = urlPath.includes("/blog/");
const isTutorials = urlPath.includes("/tutorials/");

function checkUrl(urlPath) {
  if (isProjects) {
    return urlPath.replace("/projects/", "").replace(/[^a-zA-Z0-9]/g, " ");
  } 
  if (isFeatures) {
    return urlPath.replace("/features/", "").replace(/[^a-zA-Z0-9]/g, " ");
  }
  if (isBlog) {
    return urlPath.replace("/blog/", "").replace(/[^a-zA-Z0-9]/g, " ");
  }
  if (isTutorials) {
    return urlPath.replace("/tutorials/", "").replace(/[^a-zA-Z0-9]/g, " ");
  }
  return urlPath.replace(/[^a-zA-Z0-9]/g, " ");
}

const urlRaw = checkUrl(urlPath);

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
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
                <div class="col-md-5 align-self-center">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a>
                        </li>
                        <li v-if="isProjects" class="breadcrumb-item"><a href="/projects">Projects</a></li>
                        <li v-else-if="isFeatures" class="breadcrumb-item"><a href="/features">Features</a></li>
                        <li v-else-if="isBlog" class="breadcrumb-item"><a href="/blog">Blog</a></li>
                        <li v-else-if="isTutorials" class="breadcrumb-item"><a href="/tutorials">Tutorials</a></li>
                        <li v-if="titleAndPath" class="breadcrumb-item active">{{ titleAndPath }}</li>
                        <li v-else class="breadcrumb-item active">Pages url Needed</li>
                    </ol>    
                </div>
            </div>
        </div>
    </div>
</template>