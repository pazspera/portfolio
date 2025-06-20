<script setup lang="ts">
import ProjectHero from '../sections/projects/ProjectHero.vue';
import SectionTitle from '../components/typography/SectionTitle.vue';
import MainText from '../components/typography/MainText.vue';
import ProjectResumen from '../sections/projects/ProjectResumen.vue';
import ProjectDesafio from '../sections/projects/ProjectDesafio.vue';

import type { Desafio } from '../types/proyects';

const challenges: Desafio[] = [
  {
    id: 1,
    text: "Establecer una presencia digital distintiva y persuasiva para ambas agencias en mercados competitivos. Era crucial definir una voz y estética de marca consistentes."
  },
  {
    id: 2,
    text: "Para la agencia de telemarketing, el reto fue comunicar su reposicionamiento estratégico. Esto implicaba integrar nuevos servicios sin perder el foco en su experiencia histórica en telemarketing."
  },
  {
    id: 3,
    text: "La agencia de traducción global necesitaba educar sobre la importancia de la traducción profesional certificada. El objetivo era resaltar el valor del conocimiento humano frente a las soluciones automatizadas."
  }
]

</script>

<template>
  <ProjectHero :imgHero="{
    imgSrc: '/src/assets/mockup_rrss.png',
    imgAlt: 'Mockup de notebook con una página de Instagram con una publicación'
  }">
    <template #title>
      Contenido estratégico para redes
    </template>
    <template #text>
      Diseñé y ejecuté estrategias de UX Writing para potenciar la comunicación, la presencia digital y el engagement de dos agencias B2B en mercados especializados.
    </template>
  </ProjectHero>

  <!-- Resumen -->
  <ProjectResumen>
    <template #summary>
      Lideré la estrategia de contenido y la ejecución de UX Writing para dos empresas B2B. Gestioné el proceso completo de definición de buyer personas, diseño y redacción de copys persuasivos para redes sociales (con foco en LinkedIn) y la investigación y redacción de artículos de blog especializados. Los objetivos principales fueron desarrollar la presencia digital, educar a las audiencias y posicionar a las marcas como autoridades en sus nichos.
    </template>
    <template #role>
      UX Writer, Content Strategist, Diseñadora UI
    </template>
    <template #client>
      Agencia de telemarketing y generación de leads B2B y agencia de traducción global
    </template>
    <template #duration>
      10 y 6 meses, respectivamente
    </template>
  </ProjectResumen>

  <!-- Desafío -->
  <ProjectDesafio :desafios="challenges" />
</template>