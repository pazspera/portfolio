<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <a :href="props.href" class="uppercase px-4 py-2 2xl:px-6 2xl:py-3 rounded-sm bg-primary-500 text-primary-900 font-bold text-base lg:text-lg xl:text-xl 2xl:text-2xl hover:bg-primary-900 focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:outline-none  active:bg-primary-700 hover:text-primary-100 transition dark:bg-primary-900 dark:text-primary-100 dark:focus-visible:ring-primary-300">
    {{ props.label }}
  </a>
</template>