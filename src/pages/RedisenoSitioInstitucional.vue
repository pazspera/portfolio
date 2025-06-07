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
    <div class="lg:mb-6">
      <SectionTitle>
        Resumen del proyecto
      </SectionTitle>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-12">
      <div class="lg:col-span-8 lg:order-last lg:ps-8 lg:pt-4">
        <HighlightText>
          Rediseñé el sitio institucional de DB Marketing para mejorar la experiencia de usuario, aplicar la nueva identidad visual y reestructurar el catálogo de servicios de cuatro a ocho ofertas. Implementé un sistema de diseño en Figma basado en Atomic Design para garantizar consistencia y comencé la migración de páginas estáticas a componentes en PHP, preparando la base de un futuro CMS escalable.
        </HighlightText>
      </div>
      <div class="lg:col-span-4 lg:order-first lg:pe-5">
        <div class="pt-4 pb-2">
          <SecondaryTitle>
            Rol
          </SecondaryTitle>
          <MainText>
            Diseñadora UX/UI y desarrolladora web (única responsable de investigación, diseño y desarrollo).
          </MainText>
        </div>
        <div class="py-2">
          <SecondaryTitle>
            Cliente
          </SecondaryTitle>
          <MainText>
            DB Marketing
          </MainText>
        </div>
        <div class="py-2">
          <SecondaryTitle>
            Duración
          </SecondaryTitle>
          <MainText>
            7 meses (Febrero 2024 a Septiembre 2024)
          </MainText>
        </div>
      </div>
    </div>
  </section>
  
</template>