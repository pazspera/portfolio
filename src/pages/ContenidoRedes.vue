<script setup lang="ts">
import HeroProject from '../sections/projects/HeroProject.vue';
import SectionTitle from '../components/typography/SectionTitle.vue';
import HighlightText from '../components/typography/HighlightText.vue';
import SecondaryTitle from '../components/typography/SecondaryTitle.vue';
</script>

<template>
  <HeroProject :imgHero="{
    imgSrc: '/src/assets/mockup_rediseno_institucional.png',
    imgAlt: 'Mockup de notebook mostrando una pantalla del rediseño del sitio institucional'
  }">
    <template #title>
      Contenido estratégico para redes
    </template>
    <template #text>
      Diseñé y ejecuté estrategias de UX Writing para potenciar la comunicación, la presencia digital y el engagement de dos agencias B2B en mercados especializados.
    </template>
  </HeroProject>

  <!-- Resumen -->
  <section class="pt-12 pb-8">
    <div class="lg:mb-6">
      <SectionTitle class="text-primary-900 dark:text-primary-300">Resumen del proyecto</SectionTitle>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-12">
      <div class="lg:col-span-8 lg:order-last lg:ps-8 lg:pt-4">
        <HighlightText>
          Lideré la estrategia de contenido y la ejecución de UX Writing para dos empresas B2B. Gestioné el proceso completo de definición de buyer personas, diseño y redacción de copys persuasivos para redes sociales (con foco en LinkedIn) y la investigación y redacción de artículos de blog especializados. Mi trabajo buscó consolidar la presencia digital, educar a las audiencias y posicionar a las marcas como autoridades en sus nichos.
        </HighlightText>
      </div>
    </div>
  </section>
</template>