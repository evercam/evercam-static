<script setup>
defineProps({ blok: Object });
</script>

<template>
  <section class="our-projects">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 order-lg-2 image-full">
          <img
            id="camera-specs"
            src="https://evercam.io/wp-content/uploads/2021/08/camera2.png"
            class="box-shadow lazyloaded"
            data-src="https://evercam.io/wp-content/uploads/2021/08/camera2.png"
            alt="image"
          />
        </div>
        <div class="col-lg-6">
          <h1>
            Construction<br />
            Camera Specs
          </h1>
          <ul>
            <li>12mp fixed position cameras</li>
            <li>4k resolution</li>
            <li>Video archiving stored locally and digitally</li>
            <li>8 frames per second</li>
            <li>Professionally edited time-lapse videos</li>
            <li>Full suite of software tools</li>
            <li>Cellular and/or Solar powered cameras</li>
          </ul>
          <p>
            <a
              id="download-files"
              class="btn-style"
              href="/files/Evercam_A&amp;E_Specifications.zip"
              download=""
              >Download A&E specification</a
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
