<script setup lang="ts">
import ProjectHero from '../sections/projects/ProjectHero.vue';
import SectionTitle from '../components/typography/SectionTitle.vue';
import HighlightText from '../components/typography/HighlightText.vue';
import MainText from '../components/typography/MainText.vue';
import RoleCard from '../components/projects/RoleCard.vue';
import ProjectResumen from '../sections/projects/ProjectResumen.vue';
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
  <section class="pt-12 pb-8">
    <div class="lg:mb-6">
      <SectionTitle class="text-primary-900 dark:text-primary-300">Resumen del proyecto</SectionTitle>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-12">
      <div class="lg:col-span-8 lg:order-last lg:ps-8 lg:pt-4">
        <HighlightText>
          Lideré la estrategia de contenido y la ejecución de UX Writing para dos empresas B2B. Gestioné el proceso completo de definición de buyer personas, diseño y redacción de copys persuasivos para redes sociales (con foco en LinkedIn) y la investigación y redacción de artículos de blog especializados. Los objetivos principales fueron desarrollar la presencia digital, educar a las audiencias y posicionar a las marcas como autoridades en sus nichos.
        </HighlightText>
      </div>
      <RoleCard>
        <template #role>
          UX Writer, Content Strategist, Diseñadora UI
        </template>
        <template #client>
          Agencia de telemarketing y generación de leads B2B y agencia de traducción global
        </template>
        <template #duration>
          10 y 6 meses, respectivamente
        </template>
      </RoleCard>
    </div>
  </section>

  <!-- Desafío -->
  <section class="py-6">
    <div class="grid grid-cols-1 lg:grid-cols-12">
      <div class="lg:col-span-4">
        <SectionTitle class="text-primary-900 dark:text-primary-300">
          Desafío
        </SectionTitle>
      </div>
      <div class="lg:col-span-8 ps-4 lg:ps-8">
        <ul>
          <li class="list-disc list-inside pb-3">
            <MainText class="inline">
              Establecer una presencia digital distintiva y persuasiva para ambas agencias en mercados competitivos. Era crucial definir una voz y estética de marca consistentes.
            </MainText>
          </li>
          <li class="list-disc list-inside pb-3">
            <MainText class="inline">
              Para la agencia de telemarketing, el reto fue comunicar su reposicionamiento estratégico. Esto implicaba integrar nuevos servicios sin perder el foco en su experiencia histórica en telemarketing.
            </MainText>
          </li>
          <li class="list-disc list-inside pb-3">
            <MainText class="inline">
              La agencia de traducción global necesitaba educar sobre la importancia de la traducción profesional certificada. El objetivo era resaltar el valor del conocimiento humano frente a las soluciones automatizadas.
            </MainText>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>