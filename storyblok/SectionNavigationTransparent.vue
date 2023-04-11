<script setup>
defineProps({ blok: Object });
// var $ZC = jQuery.noConflict();
// var trackingText = 'ZCFORMVIEW';
// var new_optin_response_in = 1;
// var duplicate_optin_response_in = 1;
// $ZC(document).ready(function ($) {
//     $ZC("#zc_trackCode").val(trackingText);
//     $ZC("#fieldBorder").val($ZC("[changeItem='SIGNUP_FORM_FIELD']").css("border-color"));
//     _setOptin(false, function (th) {/*Before submit, if you want to trigger your event, "include your code here"*/
//     });/*Load Captcha For this*/   /*Tracking Enabled*/
//     trackSignupEvent(trackingText);
// });
</script>

<template>
  <header
    v-editable="blok"
    id="header-transparent"
    class="new-design-header bg-header header-transparent sticky"
  >
    <div class="menu-bar">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <a class="logo" href="/">
              <img
                class="lazyloaded"
                src="https://evercam.io/wp-content/themes/evercam/img/white-logo.svg"
                data-src="https://evercam.io/wp-content/themes/evercam/img/white-logo.svg"
                alt="Logo"
              />
              <img
                class="sticky-logo"
                src="https://evercam.io/wp-content/themes/evercam/img/white-logo.svg"
                alt="Logo"
              />
            </a>
            <span id="menu-btn"></span>
          </div>
          <div class="col-md-9" id="main-menu">
            <nav>
              <div id="navbar">
                <ul class="nav-list">
                  <li id="li-1503" class="dropdown">
                    <a href="/projects">Projects</a>
                  </li>
                  <li id="li-29119" class="dropdown">
                    <a href="/features/">Features</a>
                    <ul class="dropdown-menu">
                      <li id="li-30278" class="dropdown1">
                        <a
                          href="/features/construction-time-lapse"
                          >Time-lapse</a
                        >
                      </li>
                      <li id="li-29114" class="dropdown1">
                        <a
                          href="/features/live-view-of-construction-site"
                          >Live View</a
                        >
                      </li>
                      <li id="li-29117" class="dropdown1">
                        <a
                          href="/features/recordings-with-evercam-construction-site-security-cameras"
                          >Recordings</a
                        >
                      </li>
                      <li id="li-29116" class="dropdown1">
                        <a href="/features/gate-report"
                          >Gate Report</a
                        >
                      </li>
                      <li id="li-29118" class="dropdown1">
                        <a
                          href="/features/x-ray-tool-for-construction-site-projects"
                          >X-Ray</a
                        >
                      </li>
                      <li id="li-29383" class="dropdown1">
                        <a
                          href="/features/evercam-construction-project-management-software-integrations"
                          >Integrations</a
                        >
                      </li>
                      <li id="li-34534" class="dropdown1">
                        <a href="/features/drone-view"
                          >Drone View</a
                        >
                      </li>
                      <li id="li-29112" class="dropdown1">
                        <a href="/features">All features</a>
                      </li>
                      <li id="li-35131" class="dropdown1">
                        <a href="/construction-camera-specs"
                          >Camera Specs</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li id="li-351" class="dropdown">
                    <a href="/pricing">Pricing</a>
                  </li>
                  <li id="li-570" class="dropdown">
                    <a href="/blog">Blog</a>
                  </li>
                  <li id="li-352" class="dropdown">
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
                <div class="sign-in-and-phone">
                  <a
                    href="https://dash.evercam.io/v2/users/signin"
                    target="_blank"
                    rel="noopener"
                    >Sign in</a
                  >
                  <span>|</span> <a href="tel:+35319194500">+353 1 919 4500</a>
                </div>
                <div class="language-dropdown">
                  <!--  <a href="#" class="glob-icon" id="language-dropdown">
                                            <span class="sr-only">Language Dropdown</span>
                                        </a>-->
                  <a href="#" class="glob-icon country" id="language-dropdown">
                    <span> IE </span>
                  </a>
                  <div class="language-menu">
                    <!--    <a href="#" class="glob-icon" id="language-dropdown-close">
                                                <span class="sr-only">Language Dropdown</span>
                                            </a>-->
                    <a
                      href="#"
                      class="glob-icon country"
                      id="language-dropdown-close"
                    >
                      <span class="country"> IE </span>
                    </a>
                    <!--                                            <a href="" class="active">IE</a>-->
                    <a href="https://evercam.uk">UK</a>
                    <a href="https://evercam.sg">SG</a>
                    <a href="https://evercam.com.au">AU</a>
                    <a href="https://evercam.com">US</a>
                    <a href="https://evercam.pl">PL</a>
                  </div>
                </div>

                <div class="language-bar d-block d-sm-none">
                  <!--                                        <a href="" class="active">IE</a>-->
                  <a href="https://evercam.uk">UK</a>
                  <a href="https://evercam.sg">SG</a>
                  <a href="https://evercam.com.au">AU</a>
                  <a href="https://evercam.com">US</a>
                  <a href="https://evercam.pl">PL</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
