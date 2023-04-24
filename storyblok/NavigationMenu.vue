<script setup>
defineProps({ blok: Object });
const urlPath = useRoute().path;
const isProjects = urlPath.includes("/projects");
const isPricing = urlPath.includes("/pricing");
const isBlog = urlPath.includes("/blog");
const isContact = urlPath.includes("/contact");
</script>

<template>
  <div class="col-md-9" id="main-menu">
    <nav>
      <div id="navbar">
        <ul class="nav-list">
          <li v-if="isProjects" id="li-1503" class="dropdown active">
            <a href="/projects">Projects</a>
          </li>
          <li v-else id="li-1503" class="dropdown">
            <a href="/projects">Projects</a>
          </li>
          <li id="li-29119" class="dropdown">
            <a href="/features/">Features</a>
            <ul class="dropdown-menu">
              <li id="li-30278" class="dropdown1">
                <a href="/features/construction-time-lapse">Time-lapse</a>
              </li>
              <li id="li-29114" class="dropdown1">
                <a href="/features/live-view-of-construction-site">Live View</a>
              </li>
              <li id="li-29117" class="dropdown1">
                <a
                  href="/features/recordings-with-evercam-construction-site-security-cameras"
                  >Recordings</a
                >
              </li>
              <li id="li-29116" class="dropdown1">
                <a href="/features/gate-report">Gate Report</a>
              </li>
              <li id="li-29118" class="dropdown1">
                <a href="/features/x-ray-tool-for-construction-site-projects"
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
                <a href="/features/drone-view">Drone View</a>
              </li>
              <li id="li-29112" class="dropdown1">
                <a href="/features">All features</a>
              </li>
              <li id="li-35131" class="dropdown1">
                <a href="/construction-camera-specs">Camera Specs</a>
              </li>
            </ul>
          </li>
          <li v-if="isPricing" id="li-353" class="dropdown active">
            <a href="/pricing">Pricing</a>
          </li>
          <li v-else id="li-353" class="dropdown">
            <a href="/pricing">Pricing</a>
          </li>
          <li v-if="isBlog" id="li-570" class="dropdown active">
            <a href="/blog">Blog</a>
          </li>
          <li v-else id="li-570" class="dropdown">
            <a href="/blog">Blog</a>
          </li>
          <li v-if="isContact" id="li-352" class="dropdown active">
            <a href="/contact">Contact</a>
          </li>
          <li v-else id="li-352" class="dropdown">
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
          <a
            href="#"
            class="glob-icon country lang-white"
            id="language-dropdown"
          >
            <span> IE </span>
          </a>
          <div class="language-menu">
            <!--    <a href="#" class="glob-icon" id="language-dropdown-close">
                                            <span class="sr-only">Language Dropdown</span>
                                        </a>-->
            <a href="#" class="glob-icon country" id="language-dropdown-close">
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
</template>
