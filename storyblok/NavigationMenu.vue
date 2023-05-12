<script setup>
defineProps({ blok: Object });
const urlPath = useRoute().path;
const fullPath = useRoute().fullPath;
const isProjects = urlPath.includes("/projects");
const isPricing = urlPath.includes("/pricing");
const isBlog = urlPath.includes("/blog");
const isContact = urlPath.includes("/contact");
const isHomepage = fullPath.length < 2;

/** Multilanguage Configuration */
const localePath = useLocalePath();
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>

<script>
export default {
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    onClickLocale() {
      this.menuActive = !this.menuActive;
    },
  },
};
</script>

<template>
  <div v-editable="blok" class="col-md-9" id="main-menu">
    <nav>
      <div v-if="isHomepage" id="navbar">
        <ul class="nav-list">
          <li v-if="isProjects" id="li-1503" class="dropdown active">
            <a :href="localePath('/projects')">Projects</a>
          </li>
          <li v-else id="li-1503" class="dropdown">
            <a :href="localePath('/projects')">Projects</a>
          </li>
          <li id="li-29119" class="dropdown">
            <a :href="localePath('/features')">Features</a>
            <ul class="dropdown-menu">
              <li id="li-30278" class="dropdown1">
                <a :href="localePath('/features/construction-time-lapse')"
                  >Time-lapse</a
                >
              </li>
              <li id="li-29114" class="dropdown1">
                <a
                  :href="localePath('/features/live-view-of-construction-site')"
                  >Live View</a
                >
              </li>
              <li id="li-29117" class="dropdown1">
                <a
                  :href="
                    localePath(
                      '/features/recordings-with-evercam-construction-site-security-cameras'
                    )
                  "
                  >Recordings</a
                >
              </li>
              <li id="li-29116" class="dropdown1">
                <a :href="localePath('/features/gate-report')">Gate Report</a>
              </li>
              <li id="li-29118" class="dropdown1">
                <a :href="localePath('/features/x-ray-tool-for-construction-site-projects')"
                  >X-Ray</a
                >
              </li>
              <li id="li-29383" class="dropdown1">
                <a
                  :href="localePath('/features/evercam-construction-project-management-software-integrations')"
                  >Integrations</a
                >
              </li>
              <li id="li-34534" class="dropdown1">
                <a :href="localePath('/features/drone-view')">Drone View</a>
              </li>
              <li id="li-29112" class="dropdown1">
                <a :href="localePath('/features')">All features</a>
              </li>
              <li id="li-35131" class="dropdown1">
                <a :href="localePath('/construction-camera-specs')">Camera Specs</a>
              </li>
            </ul>
          </li>
          <li v-if="isPricing" id="li-353" class="dropdown active">
            <a :href="localePath('/pricing')">Pricing</a>
          </li>
          <li v-else id="li-353" class="dropdown">
            <a :href="localePath('/pricing')">Pricing</a>
          </li>
          <li v-if="isBlog" id="li-570" class="dropdown active">
            <a :href="localePath('/blog')">Blog</a>
          </li>
          <li v-else id="li-570" class="dropdown">
            <a :href="localePath('/blog')">Blog</a>
          </li>
          <li v-if="isContact" id="li-352" class="dropdown active">
            <a :href="localePath('/contact')">Contact</a>
          </li>
          <li v-else id="li-352" class="dropdown">
            <a :href="localePath('/contact')">Contact</a>
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
        <div class="language-dropdown" :class="menuActive ? 'active' : ''">
          <NuxtLink
            class="glob-icon country lang-white"
            id="language-dropdown"
            @click="onClickLocale()"
            href="#"
          >
            <span class="country"> {{ locale.toUpperCase() }} </span>
          </NuxtLink>
          <div class="language-menu">
            <a
              href="#"
              class="glob-icon country"
              @click="onClickLocale()"
              id="language-dropdown-close"
            >
              <span class="country"> {{ locale.toUpperCase() }} </span>
            </a>
            <NuxtLink
              v-for="{ code, name } in locales"
              :key="code"
              :to="switchLocalePath(code)"
            >
              {{ name }}
            </NuxtLink>
            <!-- <a href="https://evercam.uk">UK</a>
  <a href="https://evercam.sg">SG</a>
  <a href="https://evercam.com.au">AU</a>
  <a href="https://evercam.com">US</a>
  <a href="https://evercam.pl">PL</a> -->
          </div>
        </div>

        <div class="language-bar d-block d-sm-none">
          <a
            href="#"
            class="glob-icon country"
            @click="onClickLocale()"
            id="language-dropdown-close"
          >
            <span class="country"> {{ locale.toUpperCase() }} </span>
          </a>
          <NuxtLink
            v-for="{ code, name } in locales"
            :key="code"
            :to="switchLocalePath(code)"
          >
            {{ name }}
          </NuxtLink>
          <!-- <a href="https://evercam.uk">UK</a>
<a href="https://evercam.sg">SG</a>
<a href="https://evercam.com.au">AU</a>
<a href="https://evercam.com">US</a>
<a href="https://evercam.pl">PL</a> -->
        </div>
      </div>
      <div v-else id="navbar">
        <ul class="nav-list">
          <li v-if="isProjects" id="li-1502" class="dropdown active">
            <a :href="localePath('/projects')">Projects</a>
          </li>
          <li v-else id="li-1502" class="dropdown">
            <a :href="localePath('/projects')">Projects</a>
          </li>
          <li id="li-29119" class="dropdown">
            <a :href="localePath('/features')">Features</a>
            <ul class="dropdown-menu">
              <li id="li-30278" class="dropdown1">
                <a :href="localePath('/features/construction-time-lapse')"
                  >Time-lapse</a
                >
              </li>
              <li id="li-29114" class="dropdown1">
                <a
                  :href="localePath('/features/live-view-of-construction-site')"
                  >Live View</a
                >
              </li>
              <li id="li-29117" class="dropdown1">
                <a
                  :href="
                    localePath(
                      '/features/recordings-with-evercam-construction-site-security-cameras'
                    )
                  "
                  >Recordings</a
                >
              </li>
              <li id="li-29116" class="dropdown1">
                <a :href="localePath('/features/gate-report')">Gate Report</a>
              </li>
              <li id="li-29118" class="dropdown1">
                <a :href="localePath('/features/x-ray-tool-for-construction-site-projects')"
                  >X-Ray</a
                >
              </li>
              <li id="li-29383" class="dropdown1">
                <a
                  :href="localePath('/features/evercam-construction-project-management-software-integrations')"
                  >Integrations</a
                >
              </li>
              <li id="li-34534" class="dropdown1">
                <a :href="localePath('/features/drone-view')">Drone View</a>
              </li>
              <li id="li-29112" class="dropdown1">
                <a :href="localePath('/features')">All features</a>
              </li>
              <li id="li-35131" class="dropdown1">
                <a :href="localePath('/construction-camera-specs')">Camera Specs</a>
              </li>
            </ul>
          </li>
          <li v-if="isPricing" id="li-351" class="dropdown active">
            <a :href="localePath('/pricing')">Pricing</a>
          </li>
          <li v-else id="li-351" class="dropdown">
            <a :href="localePath('/pricing')">Pricing</a>
          </li>
          <li v-if="isBlog" id="li-569" class="dropdown active">
            <a :href="localePath('/blog')">Blog</a>
          </li>
          <li v-else id="li-569" class="dropdown">
            <a :href="localePath('/blog')">Blog</a>
          </li>
          <li v-if="isContact" id="li-350" class="dropdown active">
            <a :href="localePath('/contact')">Contact</a>
          </li>
          <li v-else id="li-350" class="dropdown">
            <a :href="localePath('/contact')">Contact</a>
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
        <div class="language-dropdown" :class="menuActive ? 'active' : ''">
          <NuxtLink
            class="glob-icon country lang-white"
            id="language-dropdown"
            @click="onClickLocale()"
            href="#"
          >
            <span class="country"> {{ locale.toUpperCase() }} </span>
          </NuxtLink>
          <div class="language-menu">
            <a
              href="#"
              class="glob-icon country"
              @click="onClickLocale()"
              id="language-dropdown-close"
            >
              <span class="country"> {{ locale.toUpperCase() }} </span>
            </a>
            <NuxtLink
              v-for="{ code, name } in locales"
              :key="code"
              :to="switchLocalePath(code)"
            >
              {{ name }}
            </NuxtLink>
            <!-- <a href="https://evercam.uk">UK</a>
  <a href="https://evercam.sg">SG</a>
  <a href="https://evercam.com.au">AU</a>
  <a href="https://evercam.com">US</a>
  <a href="https://evercam.pl">PL</a> -->
          </div>
        </div>

        <div class="language-bar d-block d-sm-none">
          <a
            href="#"
            class="glob-icon country"
            @click="onClickLocale()"
            id="language-dropdown-close"
          >
            <span class="country"> {{ locale.toUpperCase() }} </span>
          </a>
          <NuxtLink
            v-for="{ code, name } in locales"
            :key="code"
            :to="switchLocalePath(code)"
          >
            {{ name }}
          </NuxtLink>
          <!-- <a href="https://evercam.uk">UK</a>
<a href="https://evercam.sg">SG</a>
<a href="https://evercam.com.au">AU</a>
<a href="https://evercam.com">US</a>
<a href="https://evercam.pl">PL</a> -->
        </div>
      </div>
    </nav>
  </div>
</template>
