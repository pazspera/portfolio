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
  <a :href="props.href" class="uppercase px-4 py-2 rounded-sm bg-primary-500 text-primary-900 font-bold text-base hover:bg-primary-900 hover:text-primary-100 transition dark:bg-primary-900 dark:text-primary-100">
    {{ props.label }}
  </a>
</template>