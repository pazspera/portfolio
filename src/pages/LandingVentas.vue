<script setup lang="ts">
import ProjectDesafio from '../sections/projects/ProjectDesafio.vue';
import ProjectResumen from '../sections/projects/ProjectResumen.vue';
import ReadingProgressBar from '../components/ReadingProgressBar.vue';

import type { Desafio } from '../types/proyects';
import type { Tech } from '../types/techChips';

import { useDocumentTitle } from '../composables/useDocumentTitle';

useDocumentTitle("Landing optimizada para ventas - Paz Spera");

const challenges: Desafio[] = [
  {
    id: 1,
    text: "Liquid Sound necesitaba una landing page comercial para campañas, ya que su sitio institucional limitaba la captación estratégica de leads."
  },
  {
    id: 2,
    text: "Se requería un enfoque de ventas más directo y agresivo, alejándose del tono institucional, para convertir visitantes en potenciales clientes."
  },
  {
    id: 3,
    text: "La prioridad fue optimizar la experiencia de usuario y guiarlo hacia la acción, para reforzar el carácter comercial de la marca."
  }
]

const techStack: Tech[] = [
  { src: '/src/assets/react-original.svg', alt: 'Logo de React', label: "React"},
  { src: '/src/assets/materialui-original.svg', alt: 'Logo de Material UI', label: "Material UI"},
]

</script>

<template>
  <div>
    <ReadingProgressBar/>

    
    <!-- Resumen -->
    <ProjectResumen :techStack="techStack">
      <template #summary>
        Diseñé y desarrollé una landing page comercial para Liquid Sound, una empresa de insumos de higiene y asepsia. El desafío fue pasar de un enfoque institucional a uno orientado a ventas directas, optimizando la captación de leads de alto valor. Prioricé la creación de contenido persuasivo, orientando la experiencia de usuarios en la generación de prospectos. Implementé el sitio con React y Material UI, incluyendo automatización de formularios y gestión de leads.
      </template>
      <template #role>
        Diseñadora UX/UI, Desarrolladora Frontend y Copywriter (única responsable del proyecto)
      </template>
      <template #client>
        Liquid Sound (fabricación y distribución de insumos de higiene)
      </template>
      <template #duration>
        5 semanas
      </template>
    </ProjectResumen>

    <!-- Desafío -->
    <ProjectDesafio :desafios="challenges" />
  </div>
</template>