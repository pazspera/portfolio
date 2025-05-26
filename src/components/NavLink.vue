<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})
</script>

<template>
  <a :href="href" class="py-2 px-3 block text-primary-100  hover:text-primary-400 hover:font-bold transition ease-in-out">{label}</a>
</template>