<script setup>
const props = defineProps({
  blok: Object,
});

const { locale, locales } = useI18n();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<template>
    <ul style="list-style-type: none; padding: 0;">
        <li
          v-for="{ code, name } in availableLocales"
          :key="code"
          style="padding: 2px 0;"
        >
          <NuxtLink style="padding: 0;" :to="switchLocalePath(code)">
            {{ name }}
          </NuxtLink>
        </li>
    </ul>
</template>
