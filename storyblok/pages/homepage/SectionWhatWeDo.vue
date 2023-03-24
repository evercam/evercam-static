<template>
    <!-- What we do -->
  <section v-editable="blok" id="what-we-do" class="gray-bg-new text-center">
    <div class="container">
        <h2>{{blok.name}}</h2>
        <p>{{blok.description}}</p>
        <div class="box-shadow">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item lazyloaded" data-src="https://player.vimeo.com/video/436930200?autoplay=0&amp;loop=1&amp;autopause=0&amp;title=0&amp;byline=0"></iframe>
            </div>
        </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ blok: Object })
</script>