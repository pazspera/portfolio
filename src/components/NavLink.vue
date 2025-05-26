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
  <a :href="props.href" class="py-2 px-3 block uppercase font-semibold text-primary-100 hover:text-primary-400  hover:underline hover:underline-offset-8 transition ease-in-out">{{props.label}}</a>
</template>