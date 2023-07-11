<script setup>
defineProps({ blok: Object })

/** Run the Script on Client */
onMounted(() => {
  // console.log('brand-page class added');
  document.body.classList.add("new-design", "transparent-header", "brand-page")
  document.getElementById("marketing-banner").id = "new-design-banner"
})
</script>
<template>
  <section v-editable="blok" id="brand">
    <div class="container large-headings">
      <div class="row">
        <div class="col-md-8 slide-up">
          <h2>Our</h2>
          <h3>Brand</h3>
          <p>
            Our logo is based on&nbsp;<strong>simple</strong>&nbsp;shapes. It is
            carefully constructed to maintain&nbsp;<strong
              >unique characteristics</strong
            >
            while allowing for perfect legibility at any size on
            any&nbsp;<strong>application.</strong> Please always consider
            sizing, defined clear space, as well as well delineated placement in
            relation to other content all help to make it as instantly
            recognizable as possible at all sizes and in
            <strong>all contexts.</strong>
          </p>
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
          <h2>Clearspace &amp; Proportions</h2>
          <p>
            It’s always important to keep the
            logo<strong>&nbsp;proportion</strong>&nbsp;despite the size or
            format you are using. To calculate the correct proportions we used
            the “x” that is the width of the letter “E”. The distance from the
            symbol to the logotype is “2x” and the distance from the logotype to
            the signature is “x”.
          </p>
          <p>
            This enables everyone to check the proportions of the
            logo&nbsp;<strong>correctly.</strong>
          </p>
          <p>
            The clear space should be “3x” in all directions. This will give the
            logo a <strong>safe space</strong> from other graphic elements.
          </p>
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
  <section id="color">
    <div class="container">
      <h2 class="slide-up">Evercam Colours</h2>
      <p>
        The Evercam color palette was designed to reflect the brand essence.<br />
        Every layout, digital, and print material must be designed<br />
        around this color palette.
      </p>
      <div class="row">
        <div class="col-md-4 col-4 slideLeft">
          <img
            src="https://evercam.io/wp-content/themes/evercam/img/section-4-circle1.png"
            alt="img"
          />
          <p>
            EVERCAM RED<br />
            CMYK 0 | 100 | 100 | 20<br />
            RGB 196 | 22 | 28<br />
            HEX #C4161C
          </p>
        </div>
        <div class="col-md-4 col-4 slide-up">
          <img
            src="https://evercam.io/wp-content/themes/evercam/img/section-4-circle2.png"
            alt="img"
          />
          <p>
            EVERCAM BLACK<br />
            CMYK 0 | 100 | 100 | 20<br />
            RGB 196 | 22 | 28<br />
            HEX #C4161C
          </p>
        </div>
        <div class="col-md-4 col-4 slideRight">
          <img
            src="https://evercam.io/wp-content/themes/evercam/img/section-4-circle3.png"
            alt="img"
          />
          <p>
            EVERCAM WHITE<br />
            CMYK 0 | 100 | 100 | 20<br />
            RGB 196 | 22 | 28<br />
            HEX #C4161C
          </p>
        </div>
      </div>
    </div>
  </section>
  <section id="support">
    <div class="container">
      <h3 class="slide-up">Support colours</h3>
      <div class="row">
        <div class="col-md-3 col-6 text-center slideLeft">
          <img
            src="https://evercam.io/wp-content/themes/evercam/img/section-4-circle-4.png"
            alt="img"
          />
          <p>
            RED<br />
            CMYK 0 | 100 | 100 | 40<br />
            RGB 156 | 10 | 15<br />
            HEX #9D0B0F
          </p>
        </div>
        <div class="col-md-3 col-6 text-center slideLeft">
          <img
            src="https://evercam.io/wp-content/themes/evercam/img/section-4-circle5.png"
            alt="img"
          />
          <p>
            SUPPORT COLOUR<br />
            CMYK 0 | 0 | 0 | 75<br />
            RGB 100 | 100 | 100<br />
            HEX #636466
          </p>
        </div>
        <div class="col-md-3 col-6 text-center slideRight">
          <img
            src="https://evercam.io/wp-content/themes/evercam/img/section-4-circle6.png"
            alt="img"
          />
          <p>
            SUPPORT COLOUR<br />
            CMYK 0 | 0 | 0 | 40<br />
            RGB 169 | 169 | 169<br />
            HEX #A7A9AC
          </p>
        </div>
        <div class="col-md-3 col-6 text-center slideRight">
          <img
            src="https://evercam.io/wp-content/themes/evercam/img/section-4-circle7.png"
            alt="img"
          />
          <p>
            SUPPORT COLOUR<br />
            CMYK 0 | 0 | 0 | 15<br />
            RGB 220 | 220 | 220<br />
            HEX #DCDDDE
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
