<script setup lang="ts">
import { ExclamationCircleIcon } from '@heroicons/vue/24/outline';
import { ErrorMessage } from '../types/contact';

defineProps<ErrorMessage>();
</script>

<template>
  <div class="mt-2 flex items-center content-center gap-1.5 text-sm/5">
    <ExclamationCircleIcon class="w-5 h-5 flex-shrink-0 text-red-700 dark:text-red-900" />
    <span v-if="html" class=" text-red-700 dark:text-zinc-800" v-html="content" />
    <span v-else class=" text-red-700 dark:text-zinc-800"><slot /></span>
  </div>
</template>