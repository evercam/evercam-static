<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section id="add-ons">
    <div class="container">
      <h2 class="slide-up">Other Features</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="wrapper slide-up">
            <a
              href="https://evercam.io/features/bim-time-lapse-integration"
              class="image-wrapper"
            >
              <img
                src="https://evercam.io/wp-content/uploads/2021/03/bim.jpg"
                alt="Add on"
              />
            </a>
            <h3>BIM Integration</h3>
          </div>
        </div>
        <div class="col-md-4">
          <div class="wrapper slide-up">
            <a
              href="https://evercam.io/features/gate-report"
              class="image-wrapper"
            >
              <img
                src="https://evercam.io/wp-content/uploads/2021/03/gate-report.jpg"
                alt="Add on"
              />
            </a>
            <h3>Gate Report</h3>
          </div>
        </div>
        <div class="col-md-4">
          <div class="wrapper slide-up">
            <div class="image-wrapper">
              <img
                src="https://evercam.io/wp-content/uploads/2021/03/archives.jpg"
                alt="Add on"
              />
            </div>
            <h3>Archives</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
