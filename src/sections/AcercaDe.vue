<script setup lang="ts">
import SectionTitle from '../components/typography/SectionTitle.vue';
import HighlightText from '../components/typography/HighlightText.vue';
import MainText from "../components/typography/MainText.vue";
import SecondaryTitle from "../components/typography/SecondaryTitle.vue";
import TechChip from "../components/TechChip.vue";

const techStack = [
  { src: 'javascript-original.svg', alt: 'Logo de JavaScript', label: "JavaScript"},
  { src: 'vue.svg', alt: 'Logo de Vue.js', label: "Vue"},
  { src: 'react-original.svg', alt: 'Logo de React', label: "React"},
  { src: 'firebase-original.svg', alt: 'Logo de Firebase', label: "Firebase"},
  { src: 'php-original.svg', alt: 'Logo de PHP', label: "PHP"},
  { src: 'bootstrap-original.svg', alt: 'Logo de Bootstrap', label: "Bootstrap"},
  { src: 'materialui-original.svg', alt: 'Logo de Material UI', label: "Material UI"},
  { src: 'tailwindcss-original.svg', alt: 'Logo de Tailwind', label: "Tailwind"},
  { src: 'html5-original.svg', alt: 'Logo de HTML5', label: "HTML5"},
  { src: 'css3-original.svg', alt: 'Logo de CSS', label: "CSS"},
  { src: 'sass-original.svg', alt: 'Logo de Sass', label: "Sass"},
  { src: 'git-original.svg', alt: 'Logo de Git', label: "Git"},
  { src: 'figma-original.svg', alt: 'Logo de Figma', label: "Figma"},
  { src: 'photoshop-original.svg', alt: 'Logo de Photoshop', label: "Photoshop"}
]

</script>

<template>
  <section class="py-12 lg:py-16 2xl:py-20" id="acerca-de">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-12">
        <div class="md:col-span-10 lg:col-span-9 xl:col-span-8">
          <SectionTitle class="text-primary-900 dark:text-primary-300">
            Acerca de
          </SectionTitle>
          <HighlightText class="font-bold">
            Diseñar, escribir y programar son medios, no fines. <br> Lo importante es construir soluciones que funcionen.
          </HighlightText>
          <MainText>
            Mi enfoque combina tres disciplinas (UX/UI, desarrollo frontend y copywriting) con un único objetivo: que cada proyecto tenga impacto.
          </MainText>
          <MainText>
            El primer paso es entender el negocio, qué necesita lograr y a quién se dirige. Una vez definido esto, diseño una interfaz y redacto contenido que conecte con esa audiencia, priorizando la persuasión y conversión.
          </MainText>  
          <MainText>
            Incorporo un espacio de validación con usuarios reales para detectar puntos de fricción. Porque las soluciones efectivas no se improvisan: se construyen, se prueban y se ajustan hasta que logren los objetivos planteados.
          </MainText>  
          <MainText class="font-semibold text-primary-700 dark:text-primary-500">
            Iterando evolucionamos.
          </MainText>
          
          <div class="mt-8 py-6 px-6 md:px-0 bg-slate-200 rounded-2xl">  
            <SecondaryTitle class="text-center mb-4  text-primary-900">
              Tecnologías que uso
            </SecondaryTitle>
            <div class="flex flex-wrap gap-3 px-2 lg:px-9 justify-center">
              <TechChip 
                v-for="(tech, index) in techStack"
                :key="index"
                :tech="tech"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>