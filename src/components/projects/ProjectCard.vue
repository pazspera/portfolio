<script setup lang="ts">
import TertiaryTitle from "../typography/TertiaryTitle.vue"
import MainText from "../typography/MainText.vue";
import ButtonContained from "../ButtonContained.vue";
import { ref } from "vue";
import type { RouteLocationRaw } from "vue-router";

type Project = {
  id: number,
  title: string,
  text: string,
  src: string,
  alt: string,
  to: RouteLocationRaw,
}

defineProps<{
  project: Project
}>();

const isHovered = ref(false);

</script>

<template>
  <article 
    class="rounded-lg overflow-hidden transition-all duration-300 flex flex-col items-stretch"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="overflow-hidden relative transition-all duration-150 ease-in-out">
      <img :src="project.src" :alt="project.alt" :class="[isHovered ? 'scale-105' : 'scale-100' , 'w-full h-auto object-cover transition-all duration-300']">
    </div>  
    <div class="p-6 bg-slate-300 dark:bg-slate-700 dark:text-zinc-200 d-flex flex-col flex-grow rounded-b-lg">
      <TertiaryTitle class="mb-2 text-primary-900 dark:text-primary-300">
        {{ project.title }}
      </TertiaryTitle>
      <MainText>
        {{ project.text }}
      </MainText>
      <ButtonContained class="mt-4" size="small" :to="project.to"> 
        Ver caso de estudio
      </ButtonContained>
    </div>
  </article>
</template>