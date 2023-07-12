<script setup>
const props = defineProps({ blok: Object });
const resolvedContent1 = computed(() => renderRichText(props.blok.content_1));
const resolvedContent2 = computed(() => renderRichText(props.blok.content_2));

/** Run the Script on Client */
onMounted(() => {
  document.body.classList.add("new-design","transparent-header","brand-page");
  document.getElementById('marketing-banner').id = 'new-design-banner'
});
</script>
<template>
  <section v-editable="blok" id="brand">
    <div class="container large-headings">
      <div class="row">
        <div class="col-md-8 slide-up">
          <div v-html="resolvedContent1"></div>
          <a
            href="https://docs.google.com/presentation/d/1ZtD4MqI9Jx0JUkp8dCI0S1wiPilgQFsKjyz2KGBQueg/present?ts=6053466f&amp;slide=id.g3f4d0f2d6a_0_0"
            class="btn-style"
            target="_blank"
            >Check our brand guidelines</a
          >
        </div>
        <div class="col-md-4 slide-up">
          <img
            src="https://evercam.io/wp-content/themes/evercam/img/section-1-logo.png"
            alt="img"
          />
          <h4>Preferred Version</h4>
          <a
            href="https://evercam.io/wp-content/themes/evercam/img/brand/EVERCAM%20400x400%20Transparent.png"
            target="_blank"
            class="download"
            download=""
            >Download Logo</a
          >
          <br />
          <img
            class="logo2"
            src="https://evercam.io/wp-content/themes/evercam/img/section-1-logo2.png"
            alt="img"
          />
          <h4>Horizontal Option</h4>
          <a
            href="https://evercam.io/wp-content/themes/evercam/img/brand/EVERCAM%20475x100%20Transparent.png"
            target="_blank"
            class="download"
            download=""
            >Download Logo</a
          >
        </div>
      </div>
    </div>
  </section>
  <section id="variation">
    <div class="container">
      <h2 class="slide-up">Variations</h2>
      <div class="row">
        <div class="col-md-12 col-6">
          <div class="row">
            <div class="col-md-4 slideLeft">
              <div class="img-wrapper">
                <img
                  class="img-1"
                  src="https://evercam.io/wp-content/themes/evercam/img/section-2-logo1.png"
                  alt="img"
                />
              </div>
              <h4>Watermark</h4>
              <a
                href="https://evercam.io/wp-content/themes/evercam/img/brand/EVERCAM%20400x400%20watermark.png"
                target="_blank"
                class="download"
                download=""
                >Download Logo</a
              >
            </div>
            <div class="col-md-4 slide-up">
              <div class="img-wrapper">
                <img
                  class="img-1"
                  src="https://evercam.io/wp-content/themes/evercam/img/section-2-logo2.png"
                  alt="img"
                />
              </div>
              <h4>1 Colour Black</h4>
              <a
                href="https://evercam.io/wp-content/themes/evercam/img/brand/evercam_black_logo-vertical.png"
                target="_blank"
                class="download"
                download=""
                >Download Logo</a
              >
            </div>
            <div class="col-md-4 slideRight">
              <div class="img-wrapper">
                <img
                  class="img-1 logo3"
                  src="https://evercam.io/wp-content/themes/evercam/img/section-2-logo3.png"
                  alt="img"
                />
              </div>
              <h4>1 Colour White</h4>
              <a
                href="https://evercam.io/wp-content/themes/evercam/img/brand/evercam_white_logo-vertical.png"
                target="_blank"
                class="download"
                download=""
                >Download Logo</a
              >
            </div>
          </div>
        </div>
        <div class="col-md-12 col-6">
          <div class="row">
            <div class="col-md-4 slideLeft">
              <div class="img-wrapper">
                <img
                  class="logo4"
                  src="https://evercam.io/wp-content/themes/evercam/img/section-2-logo4.png"
                  alt="img"
                />
              </div>
              <h4>Watermark</h4>
              <a
                href="https://evercam.io/wp-content/themes/evercam/img/brand/EVERCAM%20475x100%20watermark.png"
                target="_blank"
                class="download"
                download=""
                >Download Logo</a
              >
            </div>
            <div class="col-md-4 slide-up">
              <div class="img-wrapper">
                <img
                  class="logo4"
                  src="https://evercam.io/wp-content/themes/evercam/img/section-2-logo5.png"
                  alt="img"
                />
              </div>
              <h4>1 Colour Black</h4>
              <a
                href="https://evercam.io/wp-content/themes/evercam/img/brand/evercam_black_logo-horizontal.png"
                target="_blank"
                class="download"
                download=""
                >Download Logo</a
              >
            </div>
            <div class="col-md-4 slideRight">
              <div class="img-wrapper">
                <img
                  class="logo6"
                  src="https://evercam.io/wp-content/themes/evercam/img/section-3-logo6.png"
                  alt="img"
                />
              </div>
              <h4>1 Colour White</h4>
              <a
                href="https://evercam.io/wp-content/themes/evercam/img/brand/evercam_white_logo-horizontal.png"
                target="_blank"
                class="download"
                download=""
                >Download Logo</a
              >
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://evercam.io/wp-content/themes/evercam/img/brand/Evercam%20Brand%20Assets.zip"
        class="btn-style slide-up"
        target="_blank"
        download=""
        >Download All Assets</a
      >
    </div>
  </section>
  <section id="clear">
    <div class="container">
      <div class="row">
        <div class="col-md-7 slideLeft">
          <div v-html="resolvedContent2"></div>
        </div>
        <div class="col-md-5 slideRight">
          <img
            src="https://evercam.io/wp-content/themes/evercam/img/section-3-logo1.png"
            alt="img"
          />
          <img
            src="https://evercam.io/wp-content/themes/evercam/img/section-3-logo2.png"
            alt="img"
          />
        </div>
      </div>
    </div>
  </section>
</template>
