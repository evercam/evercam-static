<script setup>
import { navigationList } from "../utils/navigation-list"
const props = defineProps({
  blok: Object,
  phone_number: String,
})

const urlPath = useRoute().path
const { locale, locales } = useI18n()

const currentLocale = computed(() => {
  return locales.value.find((i) => i.code === locale.value)
})

const phoneNumber = props.phone_number || ""
const telLink = computed(() => `tel:+${phoneNumber}`)
</script>

<script>
export default {
  data() {
    return {
      menuActive: false,
    }
  },
  methods: {
    onClickLocale() {
      this.menuActive = !this.menuActive
    },
  },
}
</script>

<template>
  <div id="main-menu" v-editable="blok" class="col-md-9">
    <nav>
      <div id="navbar" class="d-md-flex">
        <ul class="nav-list">
          <li
            v-for="(item, i) in navigationList().headerList"
            :key="i"
            class="dropdown"
            :class="{ active: urlPath.includes(item.href) }"
          >
            <a :href="item.href || 'javascript:void(0)'">{{ item.label }}</a>
            <ul v-if="item.children" class="dropdown-menu dropdown-menu-custom">
              <li
                v-for="(subItem, i) in item.children"
                :key="i"
                class="dropdown1"
                :class="{
                  active: urlPath.includes(subItem.href),
                }"
              >
                <a :href="subItem.href">{{ subItem.label }}</a>
              </li>
            </ul>
          </li>
        </ul>

        <div class="d-md-flex align-items-center">
          <!-- LOGIN  / PHONE-->
          <div class="sign-in-and-phone">
            <a
              href="https://dash.evercam.io/v2/users/signin"
              target="_blank"
              rel="noopener"
              >Sign in</a
            >
            <span>|</span>
            <!-- phoneNumber -->
            <a :href="telLink">+{{ phoneNumber }}</a>
          </div>

          <!-- LOCALE SELECTION -->
          <div class="language-dropdown" :class="{ active: menuActive }">
            <NuxtLink
              id="language-dropdown"
              class="glob-icon country lang-white"
              href=""
              style="border: 1px solid #fff !important"
              @click="onClickLocale()"
            >
              <span class="country cursor-pointer">
                {{ currentLocale.name }}
              </span>
            </NuxtLink>
            <div class="language-menu cursor-pointer">
              <a
                id="language-dropdown-close"
                href="#"
                class="glob-icon country cursor-pointer"
                @click="onClickLocale()"
              >
                <span class="country cursor-pointer">
                  {{ currentLocale.name }}
                </span>
              </a>
              <AvailableLocales />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
@media screen and (max-width: 767px) {
  .home header #navbar .nav-list > li.dropdown > a,
  .home header #navbar .nav-list > li.dropdown1 > a {
    color: black !important;
  }
  #navbar li.dropdown > a:hover + ul.dropdown-menu.dropdown-menu-custom,
  #navbar li.dropdown > ul.dropdown-menu.dropdown-menu-custom:hover {
    display: block !important;
    margin-top: 0 !important;
  }
}
</style>
