<script setup>
const props = defineProps({ blok: Object })

const switchLocalePath = useSwitchLocalePath()
const urlPath = useRoute().path
const localePath = useLocalePath()
const { locale, locales } = useI18n()

const currentLocale = computed(() => {
    return locales.value.find((i) => i.code === locale.value)
})
const availableLocales = computed(() => {
    return locales.value.filter((i) => i.code !== locale.value)
})

const phoneNumber = computed(() => props.blok.phone_number || "35319194500")
const telLink = computed(() => `tel:+${phoneNumber}`)

const items = [
    {
        href: localePath("/projects"),
        label: "Projects",
    },
    {
        label: "Features",
        children: [
            {
                href: localePath("/features/construction-time-lapse"),
                label: "Time - lapse",
            },
            {
                href: localePath("/features/live-view-of-construction-site"),
                label: "Live View",
            },
            {
                href: localePath(
                    "/features/recordings-with-evercam-construction-site-security-cameras"
                ),
                label: "Recordings",
            },
            {
                href: localePath("/features/gate-report"),
                label: "Gate Report",
            },
            {
                href: localePath(
                    "/features/x-ray-tool-for-construction-site-projects"
                ),
                label: "X - Ray",
            },
            {
                href: localePath(
                    "/features/evercam-construction-project-management-software-integrations"
                ),
                label: "Integrations",
            },
            {
                href: localePath("/features/drone-view"),
                label: "Drone View",
            },
            {
                href: localePath("/features"),
                label: "All features",
            },
            {
                href: localePath("/construction-camera-specs"),
                label: "Camera Specs",
            },
        ],
    },
    {
        href: localePath("/pricing"),
        label: "Pricing",
    },
    {
        href: localePath("/blog"),
        label: "Blog",
    },
    {
        href: localePath("/contact"),
        label: "Contact",
    },
]
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
                        v-for="(item, i) in items"
                        :key="i"
                        class="dropdown"
                        :class="{ active: urlPath.includes(item.href) }"
                    >
                        <a :href="item.href || 'javascript:void(0)'">{{
                            item.label
                        }}</a>
                        <ul
                            v-if="item.children"
                            class="dropdown-menu dropdown-menu-custom"
                        >
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
                    <div
                        class="language-dropdown"
                        :class="{ 'active': menuActive }"
                    >
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
                                    {{
                                        currentLocale.name
                                    }}
                                </span>
                            </a>
                            <NuxtLink
                                v-for="{ code, name } in availableLocales"
                                :key="code"
                                :to="switchLocalePath(code)"
                            >
                                {{ name }}
                            </NuxtLink>
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
