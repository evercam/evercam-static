<script setup>
defineProps({ blok: Object });
</script>

<template>
  <section class="black-bg gray-bg">
    <div class="container text-center">
      <div id="gray-slider" class="owl-carousel owl-loaded owl-drag">
        <ssr-carousel :slides-per-page='2'>
        <slide :index='1'>
            <div
              class="owl-item cloned"
              style="width: 1120px; margin-right: 30px"
            >
              <div class="item">
                <h3>
                  “It’s great providing our clients transparency and keeping<br />
                  them updated 24/7.”
                </h3>
                <p>Jay Cheung – Bartra BWAL Marketing Director</p>
              </div>
            </div>
        </slide>
        <slide :index='2'>
            <div
              class="owl-item cloned"
              style="width: 1120px; margin-right: 30px"
            >
              <div class="item">
                <h3>
                  “It’s great providing our clients transparency and keeping<br />
                  them updated 24/7.”
                </h3>
                <p>Jay Cheung – Bartra BWAL Marketing Director</p>
              </div>
            </div>
        </slide>
        <slide :index='3'>
            <div
              class="owl-item cloned"
              style="width: 1120px; margin-right: 30px"
            >
              <div class="item">
                <h3>
                  “It’s great providing our clients transparency and keeping<br />
                  them updated 24/7.”
                </h3>
                <p>Jay Cheung – Bartra BWAL Marketing Director</p>
              </div>
            </div>
        </slide>
        </ssr-carousel>
        <!-- <div class="owl-stage-outer">
          <div
            class="owl-stage"
            style="
              transform: translate3d(-3450px, 0px, 0px);
              transition: all 0.25s ease 0s;
              width: 6900px;
            "
          >
            <div
              class="owl-item cloned"
              style="width: 1120px; margin-right: 30px"
            >
              <div class="item">
                <h3>
                  “It’s great providing our clients transparency and keeping<br />
                  them updated 24/7.”
                </h3>
                <p>Jay Cheung – Bartra BWAL Marketing Director</p>
              </div>
            </div>

          </div>
        </div> -->
        <div class="owl-nav">
          <button type="button" role="presentation" class="owl-prev">
            <span aria-label="Previous">‹</span></button
          ><button type="button" role="presentation" class="owl-next">
            <span aria-label="Next">›</span>
          </button>
        </div>
        <div class="owl-dots">
          <button role="button" class="owl-dot"><span></span></button
          ><button role="button" class="owl-dot active"><span></span></button>
        </div>
      </div>
    </div>
  </section>
</template>
