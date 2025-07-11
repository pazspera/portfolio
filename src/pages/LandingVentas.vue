<script setup lang="ts">
import ProjectDesafio from '../sections/projects/ProjectDesafio.vue';

import type { Desafio } from '../types/proyects';

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

</script>

<template>
  <div>

    <!-- Desafío -->
    <ProjectDesafio />
  </div>
</template>