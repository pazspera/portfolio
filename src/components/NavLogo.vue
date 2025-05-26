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
  <a :href="props.href" class="py-2 block uppercase font-normal text-primary-100 hover:text-primary-400  transition ease-in-out">{{props.label}}</a>
</template>