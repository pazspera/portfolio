<script setup lang="ts">
import SectionTitle from '../components/typography/SectionTitle.vue';
import HighlightText from '../components/typography/HighlightText.vue';
import MainText from "../components/typography/MainText.vue";
import SecondaryTitle from "../components/typography/SecondaryTitle.vue";
import TechChip from "../components/TechChip.vue";

const techStack = [
  { src: '/src/assets/javascript-original.svg', alt: 'Logo de JavaScript', label: "JavaScript"},
  { src: '/src/assets/vue.svg', alt: 'Logo de Vue.js', label: "Vue"},
  { src: '/src/assets/react-original.svg', alt: 'Logo de React', label: "React"},
  { src: '/src/assets/firebase-original.svg', alt: 'Logo de Firebase', label: "Firebase"},
  { src: '/src/assets/php-original.svg', alt: 'Logo de PHP', label: "PHP"},
  { src: '/src/assets/bootstrap-original.svg', alt: 'Logo de Bootstrap', label: "Bootstrap"},
  { src: '/src/assets/materialui-original.svg', alt: 'Logo de Material UI', label: "Material UI"},
  { src: '/src/assets/tailwindcss-original.svg', alt: 'Logo de Tailwind', label: "Tailwind"},
  { src: '/src/assets/html5-original.svg', alt: 'Logo de HTML5', label: "HTML5"},
  { src: '/src/assets/css3-original.svg', alt: 'Logo de CSS', label: "CSS"},
  { src: '/src/assets/sass-original.svg', alt: 'Logo de Sass', label: "Sass"},
  { src: '/src/assets/git-original.svg', alt: 'Logo de Git', label: "Git"},
  { src: '/src/assets/figma-original.svg', alt: 'Logo de Figma', label: "Figma"},
  { src: '/src/assets/photoshop-original.svg', alt: 'Logo de Photoshop', label: "Photoshop"},
  { src: '/src/assets/wordpress-plain.svg', alt: 'Logo de Wodpress', label: "Wordpress"},
]

</script>

<template>
  <section class="py-12 lg:py-16 2xl:py-20">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-12">
        <div class="md:col-span-10 lg:col-span-9 xl:col-span-8">
          <SectionTitle text="Acerca de" />
          <HighlightText>
            Diseñar, escribir y programar son medios, no fines. <br> Lo importante es construir soluciones que funcionen.
          </HighlightText>
          <MainText>
            Mi enfoque combina tres disciplinas (UX/UI, desarrollo frontend y copywriting) para un mismo fin: que cada proyecto tenga impacto.
          </MainText>
          <MainText>
            El primer paso es entender el negocio: qué necesita lograr y a quién se dirige. A partir de eso, diseño y redacto contenido que conecte con esa audiencia, con foco en claridad, persuasión y conversión.
          </MainText>  
          <MainText>
            Después, valido con usuarios reales para asegurarme de que el mensaje llegue y detectar puntos de fricción. Porque una solución efectiva no se improvisa: se construye, se prueba y se ajusta hasta que convierte.
          </MainText>  
          <MainText class="font-semibold text-primary-700 dark:text-primary-500">
            Iterando evolucionamos.
          </MainText>
          
          <div class="mt-8 py-6  bg-gray-200 rounded-2xl">  
            <SecondaryTitle text="Tecnologías que uso" class="text-center mb-6  text-primary-900"/>
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