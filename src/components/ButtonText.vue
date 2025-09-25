<script setup lang="ts">
import { ButtonText } from '../types/general';

const props = defineProps<ButtonText>();
const type = props.type ?? "button";
</script>

<template>
  <a v-if="href" :href="href" :type="type" class="uppercase px-4 py-2 2xl:px-6 2xl:py-3 rounded-sm text-primary-900 font-bold text-base lg:text-lg xl:text-xl 2xl:text-2xl hover:bg-gray-200/40 focus-visible:ring-2 focus-visible:ring-primary-500 
  dark:focus-visible:ring-primary-700 focus-visible:outline-none active:bg-primary-900/20 transition">
    <slot></slot>
  </a>

  <router-link
    v-else-if="to"
    :to="to"
    class="uppercase px-4 py-2 2xl:px-6 2xl:py-3 rounded-sm text-primary-900 font-bold text-base lg:text-lg xl:text-xl 2xl:text-2xl hover:bg-gray-200/40 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-700 focus-visible:outline-none active:bg-primary-900/20 transition"
  >
    <slot></slot>
  </router-link>

</template>