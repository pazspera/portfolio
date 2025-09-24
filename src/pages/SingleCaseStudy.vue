<script setup lang="ts">
/* 
- Agregar caseStudies de data
- buscar project con .find
- si no existe proyecto, mensaje 404 (después redirigir a página not found)

*/
import { caseStudies } from '../data/case-studies';
import { useDocumentTitle } from "../composables/useDocumentTitle";
import { computed } from 'vue';

import ProjectHero from '../sections/projects/ProjectHero.vue';
import ProjectSummary from '../sections/projects/ProjectSummary.vue';
import ProjectChallenge from '../sections/projects/ProjectChallenge.vue';
import ProjectListSection from '../sections/projects/ProjectListSection.vue';
import ProjectTakeaways from '../sections/projects/ProjectTakeaways.vue';
import ImageSlider from '../components/ImageSlider.vue';
import ImageCompare from '../components/ImageCompare.vue';
import ReadingProgressBar from "../components/ReadingProgressBar.vue";
import ButtonContained from "../components/ButtonContained.vue";

// el slug después va a venir de route.params.slug
const slug = "rediseno-institucional"

const project = caseStudies.find(c => c.slug === slug);

// Manejar error
// si no está que routee a página 404
if(!project) {
  console.log("Project not found");
}

// Objeto que une los strings de tipos de componente
// con los componentes en sí mismos
const componentsMap = {
  ProjectHero,
  ProjectSummary,
  ProjectChallenge,
  ProjectMethodology: ProjectListSection,
  ProjectImpact: ProjectListSection,
  ProjectTakeaways,
  ProjectImageSlider: ImageSlider,
  ProjectImageCompare: ImageCompare,
} as const;

if(project) {
  useDocumentTitle(project.title);
}

const sections = computed(()=> {
  if (!project) return [];
  return project.sections as typeof project.sections;
})

</script>

<template>
  <section>
    <ReadingProgressBar/>

    <div v-if="project">
      <div v-for="section in sections" :key="section.type">
        <component
          :is="componentsMap[section.type] as any"
          :content="section.content"
        />
      </div>
    </div>

    <!-- Botón a proyectos -->
    <section class="my-8">
      <ButtonContained size="medium" to="/#proyectos" class="mx-auto">
        Ver más proyectos
      </ButtonContained>
    </section> 
  </section>
</template>