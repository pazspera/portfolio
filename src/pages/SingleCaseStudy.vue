<script setup lang="ts">
/* 
- Agregar caseStudies de data
- buscar project con .find
- si no existe proyecto, mensaje 404 (después redirigir a página not found)

*/
import { computed } from "vue";
import { caseStudies } from '../data/case-studies';
import ProjectHero from '../sections/projects/ProjectHero.vue';
import ProjectSummary from '../sections/projects/ProjectSummary.vue';
import ProjectChallenge from '../sections/projects/ProjectChallenge.vue';
import ProjectListSection from '../sections/projects/ProjectListSection.vue';
import ProjectTakeaways from '../sections/projects/ProjectTakeaways.vue';
import ImageSlider from '../components/ImageSlider.vue';
import ImageCompare from '../components/ImageCompare.vue';
import ReadingProgressBar from "../components/ReadingProgressBar.vue";

import { useDocumentTitle } from "../composables/useDocumentTitle";

// el slug después va a venir de route.params.slug
const slug = "rediseno-institucional"

const project = caseStudies.find(c => c.slug === slug);

// Manejar error
// si no está que routee a página 404
if(!project) {
  console.log("Project not found");
}

// Filtro para elegir una sección y probarla
// con todas tira error
const sectionToTest = "ProjectSummary";
const filteredSection = computed(()=> {
  if(!project) return [];
  return project.sections.filter(section => section.type === sectionToTest);
})

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
}

if(project) {
  useDocumentTitle(project.title);
}

</script>

<template>
  <section>
    <ReadingProgressBar/>

    <div v-if="project">
      <div v-for="section in filteredSection" :key="section.type">
        <component
          :is="componentsMap[section.type]"
          :content="section.content"
        />
      </div>
    </div>

  </section>
</template>