<script setup>
import HeroProject from '../sections/projects/HeroProject.vue';
import SectionTitle from '../components/typography/SectionTitle.vue';
import HighlightText from '../components/typography/HighlightText.vue';
import SecondaryTitle from '../components/typography/SecondaryTitle.vue';
import MainText from '../components/typography/MainText.vue';
</script>

<template>
  <HeroProject></HeroProject>
  <section class="py-8 grid grid-cols-1">
    <SectionTitle>
      Resumen del proyecto
    </SectionTitle>
    <div class="grid grid-cols-1">
      <div>
        <HighlightText>
          Rediseñé el sitio institucional de DB Marketing para mejorar la experiencia de usuario, aplicar la nueva identidad visual y reestructurar el catálogo de servicios de cuatro a ocho ofertas. Implementé un sistema de diseño en Figma basado en Atomic Design para garantizar consistencia y comencé la migración de páginas estáticas a componentes en PHP, preparando la base de un futuro CMS escalable.
        </HighlightText>
      </div>
      <div>
        <SecondaryTitle>
          Rol
        </SecondaryTitle>
        <MainText>
          Diseñadora UX/UI y desarrolladora web (única responsable de investigación, diseño y desarrollo).
        </MainText>
      </div>
    </div>
  </section>
  
</template>