<script setup lang="ts">
/* 
- Agregar caseStudies de data
- buscar project con .find
- si no existe proyecto, mensaje 404 (después redirigir a página not found)

*/

import { caseStudies } from '../data/case-studies';
import ProjectHero from '../sections/projects/ProjectHero.vue';
import ProjectSummary from '../sections/projects/ProjectSummary.vue';
import ProjectChallenge from '../sections/projects/ProjectChallenge.vue';
import ProjectListSection from '../sections/projects/ProjectListSection.vue';
import ProjectTakeaways from '../sections/projects/ProjectTakeaways.vue';
import ImageSlider from '../components/ImageSlider.vue';
import ImageCompare from '../components/ImageCompare.vue';

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
}

</script>

<template>
  <h1>Test</h1>
  <div v-if="project">
    <div v-for="section in project.sections" :key="section.type">
      <component
        :is="componentsMap[section.type]"
        :content="section.content"
      />
    </div>
  </div>
</template>