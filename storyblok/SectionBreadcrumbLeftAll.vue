<script setup>
defineProps({ blok: Object })
const urlPath = useRoute().path
const isProjects = urlPath.includes("/projects/")
const isFeatures = urlPath.includes("/features/")

function checkUrl(urlPath) {
  if (isProjects) {
    return urlPath.replace("/projects/", "").replace(/-/g, " ")
  }
  if (isFeatures) {
    return urlPath.replace("/features/", "").replace(/-/g, " ")
  }
}

const urlRaw = checkUrl(urlPath)

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

const titleAndPath = toTitleCase(urlRaw)
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
            <li v-if="isProjects" class="breadcrumb-item">
              <a href="/projects">Projects</a>
            </li>
            <li v-if="isFeatures" class="breadcrumb-item">
              <a href="/features">Features</a>
            </li>
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
