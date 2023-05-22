<script setup>
defineProps({ blok: Object });
/** Multilanguage Configuration */
const localePath = useLocalePath();
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>

<style>
#customForm p {
  display: inline;
}
#customForm * {
  -webkit-box-sizing: border-box !important;
  -moz-box-sizing: border-box !important;
  box-sizing: border-box !important;
  word-break: break-word;
  overflow-wrap: break-word;
}
/*** RESPONSIVE START */
@media only screen and (max-width: 200px) {
  [name="SIGNUP_BODY"] {
    width: 100% !important;
    min-width: 100% !important;
    margin: 0px auto !important;
    padding: 0px !important;
  }
}
/*Major Mobiles*/
@media screen and (min-width: 320px) and (max-width: 580px) and (orientation: portrait) {
  [name="SIGNUP_BODY"] {
    max-width: 300px !important;
    margin: 0px auto !important;
    padding: 0px !important;
  }
}
/* iPads*/
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  [name="SIGNUP_BODY"] {
    max-width: 500px !important;
    margin: 0px auto !important;
  }
}
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  [name="SIGNUP_BODY"] {
    max-width: 700px !important;
    margin: 0px auto !important;
  }
}
@media screen and (min-width: 475px) and (max-width: 980px) and (orientation: landscape) {
  [name="SIGNUP_BODY"] {
    max-width: 400px !important;
    margin: 0px auto !important;
    padding: 0px !important;
  }
}
/*** RESPONSIVE END */
.quick_form_17_css form {
  text-align: left;
}
.quick_form_17_css::placeholder {
  color: rgb(55, 55, 55);
}
.quick_form_17_css ::-webkit-input-placeholder {
  color: rgb(55, 55, 55);
}
.quick_form_17_css :-moz-placeholder {
  /* Firefox 18- */
  color: rgb(55, 55, 55);
}
.quick_form_17_css::-moz-placeholder {
  /* Firefox 19+ */
  color: rgb(55, 55, 55);
}
.quick_form_17_css :-ms-input-placeholder {
  color: rgb(55, 55, 55);
}
</style>

<template>
  <footer v-editable="blok">
    <div class="container">
      <div class="logo-wrapper">
        <div class="row">
          <div class="col-6">
            <a class="logo" href="https://evercam.io">
              <img
                src="https://evercam.io/wp-content/themes/evercam/img/white-logo.png"
                alt="Logo"
              />
            </a>
          </div>
          <div class="col-6 text-right">
            <a href="/contact" class="btn-style">Book a demo</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 slideRight order-md-4 footer-address">
          <h3>Contact</h3>
          <p>
            <a href="https://goo.gl/maps/jhDWBGdppEBUpckF9" target="_blank"
              >6-7 Granby Row, Dublin 1, Ireland</a
            >
            <br />
            <a href="tel:+35319194500">+353 1 919 4500</a>
            <!-- <br>-->
            <!--<a href="mailto:"></a>-->
          </p>
          <h3>Other Locations</h3>
          <ul>
            <!-- <li><a href="">IE</a></li>
            <li><a href="https://evercam.uk">UK</a></li>
            <li><a href="https://evercam.sg">SG</a></li>
            <li><a href="https://evercam.com.au">AU</a></li>
            <li><a href="https://evercam.com">US</a></li>
            <li><a href="https://evercam.pl">PL</a></li> -->
            <li v-for="{ code, name } in locales"
                :key="code">
              <NuxtLink
                :to="switchLocalePath(code)"
              >
                {{ name.replace('en-','') }}
              </NuxtLink>
            </li>
          </ul>
          <div class="accordion d-md-none" id="accordion">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Construction Cameras
                  </button>
                </h2>
              </div>
              <div
                id="collapseOne"
                class="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div class="card-body">
                  <ul class="">
                    <li id="li-405" class="dropdown">
                      <a href="/pricing">Pricing</a>
                    </li>
                    <li id="li-568" class="dropdown">
                      <a href="/blog">Blog</a>
                    </li>
                    <li id="li-406" class="dropdown">
                      <a href="/contact">Contact Us</a>
                    </li>
                    <li id="li-559" class="dropdown">
                      <a href="/tutorials">Tutorials</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Productivity
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div class="card-body">
                  <ul class="">
                    <li id="li-29063" class="dropdown">
                      <a
                        href="https://evercam.io/features/evercam-construction-project-management-software-integrations"
                        >Software Integrations</a
                      >
                    </li>
                    <li id="li-29064" class="dropdown">
                      <a href="/project-management"
                        >Project Management</a
                      >
                    </li>
                    <li id="li-29065" class="dropdown">
                      <a href="/marketing">Marketing</a>
                    </li>
                    <li id="li-29066" class="dropdown">
                      <a
                        href="https://evercam.io/machine-learning-for-construction"
                        >A.I. for Construction</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Features
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div class="card-body">
                  <ul class="">
                    <li id="li-29056" class="dropdown">
                      <a
                        href="https://evercam.io/features/construction-time-lapse"
                        >Time-lapse</a
                      >
                    </li>
                    <li id="li-29057" class="dropdown">
                      <a
                        href="https://evercam.io/features/live-view-of-construction-site"
                        >Live View</a
                      >
                    </li>
                    <li id="li-29058" class="dropdown">
                      <a
                        href="https://evercam.io/features/recordings-with-evercam-construction-site-security-cameras"
                        >Recordings</a
                      >
                    </li>
                    <li id="li-28138" class="dropdown">
                      <a href="/features/gate-report"
                        >Gate Report</a
                      >
                    </li>
                    <li id="li-29059" class="dropdown">
                      <a
                        href="https://evercam.io/features/x-ray-tool-for-construction-site-projects"
                        >X-Ray</a
                      >
                    </li>
                    <li id="li-492" class="dropdown">
                      <a href="/bim-time-lapse-integration"
                        >BIM Integration</a
                      >
                    </li>
                    <li id="li-29060" class="dropdown">
                      <a href="/features/the-measuring-tool"
                        >Measuring Tool</a
                      >
                    </li>
                    <li id="li-29062" class="dropdown">
                      <a
                        href="https://evercam.io/features/the-compare-tool-for-construction-sites"
                        >Compare Tool</a
                      >
                    </li>
                    <li id="li-29061" class="dropdown">
                      <a href="/features/edit-tool"
                        >Edit Tool</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingFour">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Partners
                  </button>
                </h2>
              </div>
              <div
                id="collapseFour"
                class="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordion"
              >
                <div class="card-body">
                  <ul class="">
                    <li id="li-25747" class="dropdown">
                      <a href="/become-an-installer"
                        >Become An Installer</a
                      >
                    </li>
                    <li id="li-1705" class="dropdown">
                      <a href="/partners"
                        >Find An Installer</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingFive">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    About
                  </button>
                </h2>
              </div>
              <div
                id="collapseFive"
                class="collapse"
                aria-labelledby="headingFive"
                data-parent="#accordion"
              >
                <div class="card-body">
                  <ul class="">
                    <li id="li-376" class="dropdown">
                      <a href="/terms">Terms &amp; Conditions</a>
                    </li>
                    <li id="li-34950" class="dropdown">
                      <a href="/trust">Trust</a>
                    </li>
                    <li id="li-30377" class="dropdown">
                      <a
                        href="https://jobs.evercam.io/jobs/Careers"
                        target="_blank"
                        >Job Opportunities</a
                      >
                    </li>
                    <li id="li-24896" class="dropdown">
                      <a href="/about">About</a>
                    </li>
                    <li id="li-29228" class="dropdown">
                      <a href="https://jobs.evercam.io/jobs/Careers">Careers</a>
                    </li>
                    <li id="li-31853" class="dropdown">
                      <a href="/testimonials">Testimonials</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 d-md-block d-none slideLeft">
          <h3>Construction Cameras</h3>
          <ul class="">
            <li id="li-405" class="dropdown">
              <a href="/pricing">Pricing</a>
            </li>
            <li id="li-568" class="dropdown"><a href="/blog">Blog</a></li>
            <li id="li-406" class="dropdown">
              <a href="/contact">Contact Us</a>
            </li>
            <li id="li-559" class="dropdown">
              <a href="/tutorials">Tutorials</a>
            </li>
          </ul>
          <h3>Productivity</h3>
          <ul class="">
            <li id="li-29063" class="dropdown">
              <a
                href="/features/evercam-construction-project-management-software-integrations"
                >Software Integrations</a
              >
            </li>
            <li id="li-29064" class="dropdown">
              <a href="/project-management">Project Management</a>
            </li>
            <li id="li-29065" class="dropdown">
              <a href="/marketing">Marketing</a>
            </li>
            <li id="li-29066" class="dropdown">
              <a href="/machine-learning-for-construction"
                >A.I. for Construction</a
              >
            </li>
          </ul>
        </div>
        <div class="col-md-3 d-md-block d-none slideUp">
          <h3>About</h3>
          <ul class="">
            <li id="li-376" class="dropdown">
              <a href="/terms">Terms &amp; Conditions</a>
            </li>
            <li id="li-34950" class="dropdown"><a href="/trust">Trust</a></li>
            <li id="li-30377" class="dropdown">
              <a href="https://jobs.evercam.io/jobs/Careers" target="_blank"
                >Job Opportunities</a
              >
            </li>
            <li id="li-24896" class="dropdown"><a href="/about">About</a></li>
            <li id="li-29228" class="dropdown">
              <a href="https://jobs.evercam.io/jobs/Careers">Careers</a>
            </li>
            <li id="li-31853" class="dropdown">
              <a href="/testimonials">Testimonials</a>
            </li>
          </ul>
          <h3>Partners</h3>
          <ul class="">
            <li id="li-25747" class="dropdown">
              <a href="/become-an-installer">Become An Installer</a>
            </li>
            <li id="li-1705" class="dropdown">
              <a href="/partners">Find An Installer</a>
            </li>
          </ul>
          <!-- <h3>OTHER</h3>
                         -->
        </div>
        <div class="col-md-3 d-md-block d-none slideUp">
          <h3>Features</h3>
          <ul class="">
            <li id="li-29056" class="dropdown">
              <a href="/features/construction-time-lapse">Time-lapse</a>
            </li>
            <li id="li-29057" class="dropdown">
              <a href="/features/live-view-of-construction-site">Live View</a>
            </li>
            <li id="li-29058" class="dropdown">
              <a
                href="/features/recordings-with-evercam-construction-site-security-cameras"
                >Recordings</a
              >
            </li>
            <li id="li-28138" class="dropdown">
              <a href="/features/gate-report">Gate Report</a>
            </li>
            <li id="li-29059" class="dropdown">
              <a href="/features/x-ray-tool-for-construction-site-projects"
                >X-Ray</a
              >
            </li>
            <li id="li-492" class="dropdown">
              <a href="/bim-time-lapse-integration">BIM Integration</a>
            </li>
            <li id="li-29060" class="dropdown">
              <a href="/features/the-measuring-tool">Measuring Tool</a>
            </li>
            <li id="li-29062" class="dropdown">
              <a href="/features/the-compare-tool-for-construction-sites"
                >Compare Tool</a
              >
            </li>
            <li id="li-29061" class="dropdown">
              <a href="/features/edit-tool">Edit Tool</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bottom-bar">
      <div class="container">
        <div class="row">
          <div class="col-md-3 align-self-center slideLeft">
            <a
              href="https://play.google.com/store/apps/details?id=io.evercam.androidapp"
              target="_blank"
              rel="noopener"
              ><img
                class="ls-is-cached lazyloaded"
                src="https://evercam.io/wp-content/themes/evercam/img/google_play_download.png"
                data-src="https://evercam.io/wp-content/themes/evercam/img/google_play_download.png"
                alt="Google Paly"
              /><span class="sr-only">Google Play</span></a
            >
            <a
              href="https://itunes.apple.com/ie/app/evercam-play-ip-camera-viewer/id983189658?mt=8"
              target="_blank"
              rel="noopener"
              ><img
                class="ls-is-cached lazyloaded"
                src="https://evercam.io/wp-content/themes/evercam/img/ios-logo.png"
                data-src="https://evercam.io/wp-content/themes/evercam/img/ios-logo.png"
                alt="IOS"
              /><span class="sr-only">Apple Store</span></a
            >
          </div>
          <div class="col-md-5 align-self-center slideUp">
            <div id="customForm">
              <input
                id="signupFormType"
                type="hidden"
                value="QuickForm_Vertical"
              />
              <div>
                <table
                  id="SIGNUP_BODY"
                  class="quick_form_17_css"
                  style="
                    background-color: #363839;
                    color: #ffffff;
                    border-width: 8px 1px 1px;
                    border-image: initial;
                    padding: 0px;
                    margin: 0px auto;
                    bottom: 2px;
                    width: 100%;
                    font-size: 11px;
                    border-color: #363839;
                    border-style: none;
                    text-align: center;
                  "
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  align="center"
                >
                  <tbody>
                    <tr>
                      <td align="center" valign="top">
                        <div
                          id="SIGNUP_HEADING"
                          style="
                            background-color: #363839;
                            color: #dddddd;
                            letter-spacing: 1px;
                            font-weight: 100;
                            font-size: 13px;
                            border-style: none;
                            padding: 0px;
                            text-align: left;
                          "
                        >
                          JOIN TO OUR NEWSLETTER
                        </div>
                        <div>
                          <div style="position: relative">
                            <div
                              id="Zc_SignupSuccess"
                              style="
                                display: none;
                                position: absolute;
                                margin-left: 4%;
                                width: 90%;
                                background-color: white;
                                padding: 3px;
                                border: 3px solid #c2e19a;
                                margin-top: 10px;
                                margin-bottom: 10px;
                                word-break: break-all;
                              "
                            >
                              <table
                                border="0"
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr>
                                    <td width="10%">
                                      <img
                                        class="successicon"
                                        src="https://zcs1.maillist-manage.com/images/challangeiconenable.jpg"
                                        align="absmiddle"
                                      />
                                    </td>
                                    <td>
                                      <span
                                        id="signupSuccessMsg"
                                        style="
                                          color: #498c84;
                                          font-size: 14px;
                                          word-break: break-word;
                                        "
                                        >&nbsp;&nbsp;Thank you for Signing
                                        Up</span
                                      >
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <form
                            id="zcampaignOptinForm"
                            style="margin: 0px"
                            action="https://zcs1.maillist-manage.com/campaigns/weboptin.zc"
                            method="POST"
                            target="_zcSignup"
                            siq_id="autopick_5124"
                          >
                            <div
                              id="errorMsgDiv"
                              style="
                                display: none;
                                background-color: #ffebe8;
                                padding: 10px 10px;
                                color: #d20000;
                                font-size: 11px;
                                margin: 10px;
                                border: solid 1px #ffd9d3;
                                margin-top: 20px;
                              "
                            >
                              &nbsp;&nbsp;Please correct the marked field(s)
                              below.
                            </div>
                            <div>
                              <label for="CONTACT_EMAIL" class="sr-only"
                                >CONTACT EMAIL</label
                              >
                              <input
                                id="CONTACT_EMAIL"
                                style="
                                  border-radius: 0;
                                  color: #716a6a;
                                  background-color: #ffffff;
                                  border: 1px solid #d2d2d2;
                                  padding: 4px;
                                  text-align: left;
                                  box-sizing: border-box;
                                  text-indent: 14px;
                                  outline: 0px;
                                  border-radius: 0;
                                  font-size: 17px;
                                  height: 43px;
                                  margin-right: 5px;
                                "
                                name="CONTACT_EMAIL"
                                required="true"
                                type="email"
                                placeholder="Email"
                              />
                              <button
                                id="zcWebOptin"
                                style="
                                  background-color: #c4161c;
                                  color: #ffffff;
                                  cursor: pointer;
                                  border: none;
                                  padding: 6px 10px;
                                  outline: 0px;
                                  width: 120px;
                                  height: 43px;
                                  font-size: 13px;
                                  font-weight: bold;
                                  border-radius: 0px;
                                  text-align: center;
                                  box-shadow: none;
                                "
                                name="SIGNUP_SUBMIT_BUTTON"
                                onclick="	saveOptin($ZC(this).closest('form').find('#zcWebOptin'),false,function (th) {/*Before submit, if you want to trigger your event, &quot;include your code here&quot;*/
                                    });return false;"
                              >
                                Subscribe
                              </button>
                              <span id="dt_CONTACT_EMAIL" style="display: none"
                                >1,true,6,Subscriber Email,2</span
                              >
                            </div>
                            <div style="display: none; padding: 15px">
                              <input
                                id="LASTNAME"
                                style="
                                  width: 100%;
                                  color: #716a6a;
                                  background-color: #ffffff;
                                  border: 2px solid #d6cdcd;
                                  padding: 4px;
                                  text-align: left;
                                  box-sizing: border-box;
                                  text-indent: 14px;
                                  outline: 0px;
                                  border-radius: 5px;
                                  font-size: 17px;
                                  height: 43px;
                                "
                                name="LASTNAME"
                                type="text"
                                placeholder="Name"
                              /><span id="dt_LASTNAME" style="display: none"
                                >1,false,1,Last Name,2</span
                              >
                            </div>

                            <input
                              id="fieldBorder"
                              type="hidden"
                              value=""
                            /><input
                              id="submitType"
                              name="submitType"
                              type="hidden"
                              value="optinCustomView"
                            /><input
                              id="lD"
                              name="lD"
                              type="hidden"
                              value="1b1aa02d41a21d3"
                            /><input
                              id="emailReportId"
                              name="emailReportId"
                              type="hidden"
                              value=""
                            /><input
                              id="formType"
                              name="formType"
                              type="hidden"
                              value="QuickForm"
                            /><input
                              id="cmpZuid"
                              name="zx"
                              type="hidden"
                              value="170d4b1"
                            /><input
                              name="zcvers"
                              type="hidden"
                              value="2.0"
                            /><input
                              id="allCheckedListIds"
                              name="oldListIds"
                              type="hidden"
                              value=""
                            /><input
                              id="mode"
                              name="mode"
                              type="hidden"
                              value="OptinCreateView"
                            /><input
                              id="zcld"
                              name="zcld"
                              type="hidden"
                              value="1b1aa02d41a21d3"
                            /><input
                              id="document_domain"
                              type="hidden"
                              value="zoho.com"
                            /><input
                              id="zc_Url"
                              type="hidden"
                              value="zcs1.maillist-manage.com"
                            /><input
                              id="new_optin_response_in"
                              type="hidden"
                              value="1"
                            /><input
                              id="duplicate_optin_response_in"
                              type="hidden"
                              value="1"
                            /><input
                              id="zc_trackCode"
                              name="zc_trackCode"
                              type="hidden"
                              value="ZCFORMVIEW"
                            /><input
                              id="zc_formIx"
                              name="zc_formIx"
                              type="hidden"
                              value="0a3bda0a6b739c70eedd7fea137a80c4cbad3f9c5f6454d4"
                            />
                          </form>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <img
                id="refImage"
                style="display: none"
                src="https://zcs1.maillist-manage.com/images/spacer.gif"
              />
            </div>
            <div
              id="zcOptinOverLay"
              style="
                display: none;
                text-align: center;
                background-color: #000000;
                opacity: 0.5;
                z-index: 100;
                position: fixed;
                width: 100%;
                top: 0px;
                left: 0px;
                height: 988px;
              "
            ></div>
            <div
              id="zcOptinSuccessPopup"
              style="
                display: none;
                z-index: 9999;
                width: 800px;
                height: 40%;
                top: 84px;
                position: fixed;
                left: 26%;
                background-color: #ffffff;
                box-shadow: 0 1px 10px #424242;
                padding: 35px;
                border: 1px solid #e6e6e6;
              "
            >
              <span
                id="closeSuccess"
                style="
                  position: absolute;
                  top: -16px;
                  right: -14px;
                  z-index: 99999;
                  cursor: pointer;
                "
                ><img
                  src="https://zcs1.maillist-manage.com/images/videoclose.png"
              /></span>
              <div id="zcOptinSuccessPanel"></div>
            </div>
          </div>
          <div
            class="col-md-4 align-self-center slideRight mobile-social-icons"
          >
            <ul class="social-links">
              <li>
                <a
                  href="https://wa.me/353894481651"
                  target="_blank"
                  rel="noopener"
                  >
                  <font-awesome-icon icon="fa-brands fa-whatsapp" />
                  <span class="sr-only">Whatsapp </span></a
                >
              </li>
              <li>
                <a
                  href="https://github.com/evercam"
                  target="_blank"
                  rel="noopener"
                  >
                  <font-awesome-icon icon="fa-brands fa-github" />
                  <span
                    class="sr-only"
                    >Github
                  </span>
                  </a
                >
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/evercam"
                  target="_blank"
                  rel="noopener"
                  >
                  <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                  <span class="sr-only">Linkedin </span></a
                >
              </li>
              <li>
                <a
                  href="https://twitter.com/evrcm"
                  target="_blank"
                  rel="noopener"
                  >
                  <font-awesome-icon icon="fa-brands fa-twitter" />
                  <span class="sr-only">Twitter </span></a
                >
              </li>
              <li>
                <a
                  href="https://www.facebook.com/evrcm/"
                  target="_blank"
                  rel="noopener"
                  >
                  <font-awesome-icon icon="fa-brands fa-facebook-f" />
                  <span
                    class="sr-only"
                    >Facebook
                  </span></a
                >
              </li>
              <li>
                <a
                  href="https://vimeo.com/evercam"
                  target="_blank"
                  rel="noopener"
                  >
                  <font-awesome-icon icon="fa-brands fa-vimeo-v" />
                  <span class="sr-only">Vimeo </span>
                  </a
                >
              </li>
              <li>
                <a
                  href="https://www.youtube.com/user/evrcm"
                  target="_blank"
                  rel="noopener"
                  >
                  <font-awesome-icon icon="fa-brands fa-youtube" />
                  <span class="sr-only">Youtube </span></a
                >
              </li>
              <li>
                <a
                  href="https://www.instagram.com/EvercamConstructionCameras/"
                  target="_blank"
                  rel="noopener"
                  >
                  <font-awesome-icon icon="fa-brands fa-instagram" />
                  <span class="sr-only">Instagram </span>
                  </a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
