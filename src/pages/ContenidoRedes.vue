<script setup lang="ts">
import ProjectHero from '../sections/projects/ProjectHero.vue';
import ProjectResumen from '../sections/projects/ProjectResumen.vue';
import ProjectDesafio from '../sections/projects/ProjectDesafio.vue';
import ProjectEnfoque from '../sections/projects/ProjectEnfoque.vue';

import type { Desafio, ItemEnfoque } from '../types/proyects';

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

const methodology: ItemEnfoque[] = [
  {
    id: 1,
    title: "Análisis de audiencia y puntos de dolor",
    text: 'El primer paso fue hacer una investigación para entender a la audiencia objetivo. Identifiqué sus "pain points" específicos y los argumentos más convincentes para presentar soluciones relevantes.'
  },
  {
    id: 2,
    title: "Estrategia de contenido educativo",
    text: "Desarrollé una estrategia de contenido enfocada en educar y empoderar a la buyer persona. Brindé valor con información clave para la toma de decisiones, desde la importancia de la certificación hasta la mejora en la generación de leads."
  },
  {
    id: 3,
    title: "Diseño de contenido multiplataforma",
    text: "Fui responsable de la conceptualización, redacción y diseño de piezas. Creé copies persuasivos y carruseles para LinkedIn e Instagram, priorizando LinkedIn por ser la plataforma principal para el público B2B."
  },
  {
    id: 4,
    title: "Redacción de artículos especializados",
    text: "Investigué y redacté artículos de blog detallados para posicionar a las marcas como autoridades. Este contenido educativo buscaba proveer valor y aumentar el tráfico orgánico, abordando temas relevantes y especializados."
  },
  {
    id: 5,
    title: "Unificación de identidad de marca",
    text: "Aseguré una voz de marca consistente y reconocible en todas las comunicaciones. Diseñé piezas gráficas y carruseles visualmente atractivos, que reflejaban la identidad de cada marca para lograr cohesión y profesionalismo."
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

  <!-- Enfoque y metodología -->
  <ProjectEnfoque :itemsEnfoque="methodology" />


</template>