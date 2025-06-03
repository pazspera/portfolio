<script setup lang="ts">
import CardTitle from "../components/typography/CardTitle.vue";
import MainText from "../components/typography/MainText.vue";
import ButtonContained from "./ButtonContained.vue";
import { ref } from "vue";

type Project = {
  id: number,
  title: string,
  text: string,
  imgDefault: string,
  imgHover: string,
  alt: string
  // Falta agregar ruta 
}

defineProps<{
  project: Project
}>();

const isHovered = ref(false);

</script>

<template>
  <article 
    class="rounded-lg overflow-hidden transition-all duration-500"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <img :src="isHovered ? project.imgHover : project.imgDefault" :alt="project.alt" class="w-full h-auto object-cover transition-opacity duration-500">
    <div class="p-6 bg-slate-300 dark:bg-slate-700 dark:text-zinc-200">
      <CardTitle class="mb-2 text-primary-900 dark:text-primary-300">
        {{ project.title }}
      </CardTitle>
      <MainText>
        {{ project.text }}
      </MainText>
      <ButtonContained label="Ver caso de estudio" class="mt-4" />
    </div>
  </article>
</template>