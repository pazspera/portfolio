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
  imgDefault: string,
  imgHover: string,
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
    class="rounded-lg overflow-hidden transition-all duration-500 flex flex-col items-stretch"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <img :src="isHovered ? project.imgHover : project.imgDefault" :alt="project.alt" class="w-full h-auto object-cover transition-opacity duration-500">
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