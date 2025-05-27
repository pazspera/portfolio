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
  <a :href="props.href" class="uppercase px-4 py-2 rounded-sm text-primary-900 font-bold text-base hover:bg-gray-200/40 focus-visible:ring-2 focus-visible:ring-primary-500 
  dark:focus-visible:ring-primary-700 focus-visible:outline-none active:bg-primary-900/20 transition">
    {{ props.label }}
  </a>
</template>