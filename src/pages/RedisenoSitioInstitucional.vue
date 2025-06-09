<script setup>
import HeroProject from '../sections/projects/HeroProject.vue';
import SectionTitle from '../components/typography/SectionTitle.vue';
import HighlightText from '../components/typography/HighlightText.vue';
import SecondaryTitle from '../components/typography/SecondaryTitle.vue';
import MainText from '../components/typography/MainText.vue';

import { VueCompareImage } from 'vue3-compare-image';
import imgOldHome from "../assets/institucional-viejo-home.jpg";
import imgNewHome from "../assets/institucional-nuevo-home.jpg";
</script>

<template>
  <HeroProject></HeroProject>
  <!-- Resumen -->
  <section class="pt-12 pb-8">
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
      <div class="lg:col-span-4 lg:order-first lg:pe-5 mt-4  max-w-[400px] bg-primary-100 dark:bg-primary-300 py-4 px-8 rounded-lg dark:text-zinc-900">
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
  <!-- Desafío -->
  <section class="py-6">
    <div class="grid grid-cols-1 lg:grid-cols-12">
      <div class="lg:col-span-4">
        <SectionTitle>
          Desafío
        </SectionTitle>
      </div>
      <div class="lg:col-span-8 ps-4 lg:ps-8">
        <ul>
          <li class="list-disc list-inside pb-3">
            <MainText class="inline ">
              El sitio anterior, desarrollado en WordPress, llevaba años sin actualizarse y solo mostraba cuatro servicios básicos. Mientras tanto, la empresa ya ofrecía ocho, pero esa información no estaba reflejada online.
            </MainText>
          </li>
          <li class="list-disc list-inside pb-3">
            <MainText class="inline">
              Internamente, muchos empleados desconocían la gama completa de servicios. Externamente, la buyer persona no tenía claridad sobre el alcance de DB Marketing.
            </MainText>
          </li>
          <li class="list-disc list-inside pb-3">
            <MainText class="inline">
              Se requería implementar la nueva identidad visual (logo, paleta, tipografía) que solo existía en materiales offline.
            </MainText>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!-- Image compare -->
  <section class="py-6">
    <VueCompareImage 
      :leftImage="imgOldHome" 
      :rightImage="imgNewHome" 
      leftImageAlt="Versión anterior del hero y sección principal del sitio institucional"
      rightImageAlt="Versión rediseñada del hero y sección principal del sitio institucional"
      keyboard="true" 
      keyboardStep="0.1"
      sliderLineColor="#033035"
      sliderLineWidth="3"
      sliderPositionPercentage="0.5"
    />
  </section>
</template>