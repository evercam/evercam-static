<script setup>

</script>

<template>
  <section
    class="customers-slider"
    style="
      background-image: url('https://evercam.io/wp-content/themes/evercam/img/customer-bg.jpg');
    "
  >
    <div class="container">
      <h2 class="slide-up">Happy Customers</h2>
      <h2>Happy Customers</h2>
      <carousel :items-to-show="1" :wrap-around="true">
        <slide v-for="slide in blok.testimonial_blok" :key="slide">
          <div class="testimonial-item">
            <div class="row">
              <div class="col-md-6">
                <h2>{{ slide.client_name }}</h2>
                <p>
                  {{ slide.testimonial_details }}
                </p>
                <p>
                  <strong>– {{ slide.client_pic }}</strong
                  ><br /><a href="/testimonials">See More</a>
                </p>
              </div>
              <div class="col-md-6 col-2-img">
                <div class="">
                  <img
                    v-if="slide.client_photo"
                    :src="slide.client_photo"
                    class="lazyloaded"
                    alt="image"
                  />
                  <img
                    v-else
                    :src="clientPhotoDefault"
                    class="lazyloaded"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </slide>

        <template #addons>
          <navigation />
        </template>
      </carousel>
      <div class="owl-carousel new-review-slider owl-loaded owl-drag">
        <div class="owl-stage-outer">
          <div
            class="owl-stage"
            style="
              transform: translate3d(-3420px, 0px, 0px);
              transition: all 0.25s ease 0s;
              width: 7980px;
            "
          >
            <div
              class="owl-item cloned"
              style="width: 1110px; margin-right: 30px"
            >
              <div class="item">
                <div>
                  <p>
                    Evercam has become an essential part of the construction
                    process making is so easy to view progress on site from
                    anywhere in the world—including Nigeria and Dublin!…Their
                    ability to provide us with time lapse videos, snapshots,
                    past video footage in time for monthly meeting and all done
                    in such a friendly way.
                  </p>
                </div>
                <strong>Gareth Cooney</strong>
                <span class="company"
                  >Project Construction Director, Berkeley Group</span
                >
                <div class="img-div">
                  <img
                    src="https://evercam.io/wp-content/uploads/2022/09/berkley-group-logo.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              class="owl-item cloned"
              style="width: 1110px; margin-right: 30px"
            >
              <div class="item">
                <div>
                  <p>
                    The real power of Evercam is their ability to integrate the
                    BIM model…This allows our clients to get a feel for what the
                    finished project would look like and gave us the ability to
                    track progress against the final product.
                  </p>
                </div>
                <strong>Niall Byrne</strong>
                <span class="company"
                  >Project Construction Director, Maveric Contractors</span
                >
                <div class="img-div">
                  <img
                    src="https://evercam.io/wp-content/uploads/2022/09/maveric-logo.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="owl-item" style="width: 1110px; margin-right: 30px">
              <div class="item">
                <p>
                  The creative and innovative ways that Evercam use to obtain
                  imagery is brilliant – it really helps us to capture the
                  essence of our projects.
                </p>
                <strong>Glenn Forbes</strong>
                <span class="company"
                  >Project Construction Director, K2 Construction
                  Management</span
                >
                <div class="img-div">
                  <img
                    src="https://evercam.io/wp-content/uploads/2022/09/k2-logo.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              class="owl-item active"
              style="width: 1110px; margin-right: 30px"
            >
              <div class="item">
                <div>
                  <p>
                    Evercam has become an essential part of the construction
                    process making is so easy to view progress on site from
                    anywhere in the world—including Nigeria and Dublin!…Their
                    ability to provide us with time lapse videos, snapshots,
                    past video footage in time for monthly meeting and all done
                    in such a friendly way.
                  </p>
                </div>
                <strong>Gareth Cooney</strong>
                <span class="company"
                  >Project Construction Director, Berkeley Group</span
                >
                <div class="img-div">
                  <img
                    src="https://evercam.io/wp-content/uploads/2022/09/berkley-group-logo.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="owl-item" style="width: 1110px; margin-right: 30px">
              <div class="item">
                <div>
                  <p>
                    The real power of Evercam is their ability to integrate the
                    BIM model…This allows our clients to get a feel for what the
                    finished project would look like and gave us the ability to
                    track progress against the final product.
                  </p>
                </div>
                <strong>Niall Byrne</strong>
                <span class="company"
                  >Project Construction Director, Maveric Contractors</span
                >
                <div class="img-div">
                  <img
                    src="https://evercam.io/wp-content/uploads/2022/09/maveric-logo.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              class="owl-item cloned"
              style="width: 1110px; margin-right: 30px"
            >
              <div class="item">
                <p>
                  The creative and innovative ways that Evercam use to obtain
                  imagery is brilliant – it really helps us to capture the
                  essence of our projects.
                </p>
                <strong>Glenn Forbes</strong>
                <span class="company"
                  >Project Construction Director, K2 Construction
                  Management</span
                >
                <div class="img-div">
                  <img
                    src="https://evercam.io/wp-content/uploads/2022/09/k2-logo.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              class="owl-item cloned"
              style="width: 1110px; margin-right: 30px"
            >
              <div class="item">
                <div>
                  <p>
                    Evercam has become an essential part of the construction
                    process making is so easy to view progress on site from
                    anywhere in the world—including Nigeria and Dublin!…Their
                    ability to provide us with time lapse videos, snapshots,
                    past video footage in time for monthly meeting and all done
                    in such a friendly way.
                  </p>
                </div>
                <strong>Gareth Cooney</strong>
                <span class="company"
                  >Project Construction Director, Berkeley Group</span
                >
                <div class="img-div">
                  <img
                    src="https://evercam.io/wp-content/uploads/2022/09/berkley-group-logo.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="owl-nav">
          <button type="button" role="presentation" class="owl-prev">
            <span aria-label="Previous">‹</span></button
          ><button type="button" role="presentation" class="owl-next">
            <span aria-label="Next">›</span>
          </button>
        </div>
        <div class="owl-dots">
          <button role="button" class="owl-dot"><span></span></button
          ><button role="button" class="owl-dot active"><span></span></button
          ><button role="button" class="owl-dot"><span></span></button>
        </div>
      </div>
    </div>
  </section>
</template>
