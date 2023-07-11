<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" id="efficiency" class="how-section">
    <div class="container">
      <img
        src="https://evercam.io/wp-content/themes/evercam/new/img/right-camera.jpg"
        class="lazyloaded"
        data-src="https://evercam.io/wp-content/themes/evercam/new/img/right-camera.jpg"
        alt="Right Camera"
      />
      <div class="row">
        <div class="col-md-6">
          <h2>You manage the hardware and installation.</h2>
          <p><b>we handle the rest.</b></p>
          <p><strong>Evercam brings features such as:</strong></p>
          <ul>
            <li>Time-lapse</li>
            <li>Cloud recordings</li>
            <li>Construction analytics</li>
            <li>BIM integration</li>
          </ul>
          <p><strong>Offer more:</strong></p>
          <ul>
            <li>Dispute avoidance</li>
            <li>Marketing benefits</li>
            <li>Improved communication</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
