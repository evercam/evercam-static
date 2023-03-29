<script setup>
defineProps({ blok: Object });
</script>

<template>
  <section v-editable="blok" class="story-section">
    <div class="container">
      <h2>{{ blok.name }}</h2>
      <div id="testimonials" class="owl-carousel owl-loaded owl-drag">
        <div class="owl-stage-outer">
          <div
            class="owl-stage"
            style="
              /* transform: translate3d(-3090px, 0px, 0px); */
              transition: all 0.25s ease 0s;
              width: 9680px;
            "
          >
            <!-- <div
              class="owl-item cloned"
              style="width: 930px; margin-right: 100px"
            >
              <div class="item">
                <div class="row">
                  <div class="col-md-6">
                    <h2>Irelands New Children’s Hospital</h2>
                    <p>
                      Evercam greatly enhance our ability to monitor and manage
                      our operations.<br />
                      It has been a genuine pleasure working with you and I
                      thank you for your professionalism, great product and
                      great service.
                    </p>
                    <p>
                      <strong
                        >– Howard McDonagh, BAM Construction Director</strong
                      ><br />
                      <a href="/testimonials">See More</a>
                    </p>
                  </div>
                  <div class="col-md-6 col-2-img">
                    <div class="box-shadow">
                      <img
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        class="lazyload box-shadow"
                        data-src="https://evercam.io/wp-content/uploads/2020/02/nch_1.jpg"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="owl-item cloned"
              style="width: 930px; margin-right: 100px"
            >
              <div class="item">
                <div class="row">
                  <div class="col-md-6">
                    <h2>Burra Place Shellharbour</h2>
                    <p>
                      The real power of Evercam is the ability to integrate the
                      BIM model…This allowed our client to get a feel for what
                      the finished office would look like and gave the ability
                      to track progress against the final product.
                    </p>
                    <p>
                      <strong>– Niall Byrne, CARAS General Manager</strong
                      ><br />
                      <a href="/testimonials">See More</a>
                    </p>
                  </div>
                  <div class="col-md-6 col-2-img">
                    <div class="box-shadow">
                      <img
                        src="https://evercam.io/wp-content/uploads/2020/07/caras.jpg"
                        class="box-shadow ls-is-cached lazyloaded"
                        data-src="https://evercam.io/wp-content/uploads/2020/07/caras.jpg"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
            <div class="owl-item" style="width: 1110px; margin-right: 100px">
              <div class="item">
                <div class="row">
                  <div class="col-md-6">
                    <h2>Coopers Cross Residential</h2>
                    <p>
                      Evercam involvement in this project has been
                      invaluable.<br />
                      The cameras provide certainty on past events and help us
                      plan into the future using real-time broadcast.<br />
                      The service provided by Evercam is exemplar.
                    </p>
                    <p>
                      <strong
                        >– Maurice Flynn Contracts Manager, SISK Ireland</strong
                      ><br />
                      <a href="/testimonials">See More</a>
                    </p>
                  </div>
                  <div class="col-md-6 col-2-img">
                    <div class="box-shadow">
                      <img
                        src="https://evercam.io/wp-content/uploads/2021/11/Coopers-Cross-campus-in-Dublins-north-docklands-1.jpg"
                        class="box-shadow lazyloaded"
                        data-src="https://evercam.io/wp-content/uploads/2021/11/Coopers-Cross-campus-in-Dublins-north-docklands-1.jpg"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div
              class="owl-item active"
              style="width: 930px; margin-right: 100px"
            >
              <div class="item">
                <div class="row">
                  <div class="col-md-6">
                    <h2>London’s Luton Street</h2>
                    <p>
                      I am truly a big fan of Evercam.<br />
                      Apart from the usual live camera which is very helpful I
                      like the sense of flexibility that Evercam has with their
                      partners and to develop cool bespoke tools such as BIM
                      compare or the Xray.
                    </p>
                    <p>
                      <strong
                        >– Augustin Dufour Project Director, Bouygues UK</strong
                      ><br />
                      <a href="/testimonials">See More</a>
                    </p>
                  </div>
                  <div class="col-md-6 col-2-img">
                    <div class="box-shadow">
                      <img
                        src="https://evercam.io/wp-content/uploads/2021/08/luton-street.jpg"
                        class="box-shadow ls-is-cached lazyloaded"
                        data-src="https://evercam.io/wp-content/uploads/2021/08/luton-street.jpg"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="owl-item" style="width: 930px; margin-right: 100px">
              <div class="item">
                <div class="row">
                  <div class="col-md-6">
                    <h2>Irelands New Children’s Hospital</h2>
                    <p>
                      Evercam greatly enhance our ability to monitor and manage
                      our operations.<br />
                      It has been a genuine pleasure working with you and I
                      thank you for your professionalism, great product and
                      great service.
                    </p>
                    <p>
                      <strong
                        >– Howard McDonagh, BAM Construction Director</strong
                      ><br />
                      <a href="/testimonials">See More</a>
                    </p>
                  </div>
                  <div class="col-md-6 col-2-img">
                    <div class="box-shadow">
                      <img
                        src="https://evercam.io/wp-content/uploads/2020/02/nch_1.jpg"
                        class="box-shadow lazyloaded"
                        data-src="https://evercam.io/wp-content/uploads/2020/02/nch_1.jpg"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="owl-item" style="width: 930px; margin-right: 100px">
              <div class="item">
                <div class="row">
                  <div class="col-md-6">
                    <h2>Burra Place Shellharbour</h2>
                    <p>
                      The real power of Evercam is the ability to integrate the
                      BIM model…This allowed our client to get a feel for what
                      the finished office would look like and gave the ability
                      to track progress against the final product.
                    </p>
                    <p>
                      <strong>– Niall Byrne, CARAS General Manager</strong
                      ><br />
                      <a href="/testimonials">See More</a>
                    </p>
                  </div>
                  <div class="col-md-6 col-2-img">
                    <div class="box-shadow">
                      <img
                        src="https://evercam.io/wp-content/uploads/2020/07/caras.jpg"
                        class="box-shadow lazyloaded"
                        data-src="https://evercam.io/wp-content/uploads/2020/07/caras.jpg"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="owl-item cloned"
              style="width: 930px; margin-right: 100px"
            >
              <div class="item">
                <div class="row">
                  <div class="col-md-6">
                    <h2>Coopers Cross Residential</h2>
                    <p>
                      Evercam involvement in this project has been
                      invaluable.<br />
                      The cameras provide certainty on past events and help us
                      plan into the future using real-time broadcast.<br />
                      The service provided by Evercam is exemplar.
                    </p>
                    <p>
                      <strong
                        >– Maurice Flynn Contracts Manager, SISK Ireland</strong
                      ><br />
                      <a href="/testimonials">See More</a>
                    </p>
                  </div>
                  <div class="col-md-6 col-2-img">
                    <div class="box-shadow">
                      <img
                        src="https://evercam.io/wp-content/uploads/2021/11/Coopers-Cross-campus-in-Dublins-north-docklands-1.jpg"
                        class="box-shadow lazyloaded"
                        data-src="https://evercam.io/wp-content/uploads/2021/11/Coopers-Cross-campus-in-Dublins-north-docklands-1.jpg"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="owl-item cloned"
              style="width: 930px; margin-right: 100px"
            >
              <div class="item">
                <div class="row">
                  <div class="col-md-6">
                    <h2>London’s Luton Street</h2>
                    <p>
                      I am truly a big fan of Evercam.<br />
                      Apart from the usual live camera which is very helpful I
                      like the sense of flexibility that Evercam has with their
                      partners and to develop cool bespoke tools such as BIM
                      compare or the Xray.
                    </p>
                    <p>
                      <strong
                        >– Augustin Dufour Project Director, Bouygues UK</strong
                      ><br />
                      <a href="/testimonials">See More</a>
                    </p>
                  </div>
                  <div class="col-md-6 col-2-img">
                    <div class="box-shadow">
                      <img
                        src="https://evercam.io/wp-content/uploads/2021/08/luton-street.jpg"
                        class="box-shadow ls-is-cached lazyloaded"
                        data-src="https://evercam.io/wp-content/uploads/2021/08/luton-street.jpg"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
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
          ><button role="button" class="owl-dot"><span></span></button
          ><button role="button" class="owl-dot"><span></span></button>
        </div>
      </div>
    </div>
  </section>
</template>
