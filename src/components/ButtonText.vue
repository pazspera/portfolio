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
  <a :href="props.href" class="uppercase px-4 py-2 rounded-sm text-primary-900 font-bold text-base hover:bg-gray-200/40 transition">
    {{ props.label }}
  </a>
</template>