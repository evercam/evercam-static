<script setup>
defineProps({ blok: Object })
const urlPath = useRoute().path.replace(/[^\w\s]/gi, "")
const urlRaw = urlPath.replace("/projects/", "").replace(/-/g, " ")

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

const titleAndPath = toTitleCase(urlPath)
</script>

<template>
  <div v-editable="blok" class="breadcrumbs-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-7 align-self-center">
          <!-- {{blok}} -->
          <!-- <h1>{{ titleAndPath }}</h1> -->
        </div>
        <div class="col-md-12 align-self-center">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item active">{{ titleAndPath }}</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>
