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
  <a :href="props.href" class="uppercase px-4 py-2 rounded-sm bg-primary-500 text-primary-900 font-bold text-base hover:bg-primary-900 focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:outline-none  active:bg-primary-700 hover:text-primary-100 transition dark:bg-primary-900 dark:text-primary-100 dark:focus-visible:ring-primary-300">
    {{ props.label }}
  </a>
</template>