<script setup lang="ts">
import { caseStudies } from '../data/case-studies';
import { useDocumentTitle } from "../composables/useDocumentTitle";
import { computed, ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Project } from '../types/projects-v2';

import ProjectHero from '../sections/projects/ProjectHero.vue';
import ProjectSummary from '../sections/projects/ProjectSummary.vue';
import ProjectChallenge from '../sections/projects/ProjectChallenge.vue';
import ProjectListSection from '../sections/projects/ProjectListSection.vue';
import ProjectTakeaways from '../sections/projects/ProjectTakeaways.vue';
import ImageSlider from '../components/ImageSlider.vue';
import ImageCompare from '../components/ImageCompare.vue';
import ReadingProgressBar from "../components/ReadingProgressBar.vue";
import ButtonContained from "../components/ButtonContained.vue";

const route = useRoute();
const router = useRouter();
const project = ref<Project | null>(null);

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

const loadProject = (slug: string) => {
  const currentProject = caseStudies.find(c => c.slug === slug);
  
  // Manejar error
  // si no está que routee a página 404
  if(!currentProject) {
    console.log("Project not found");
    router.replace({ name: "notFound" });
    return;
  }

  project.value = currentProject;

  useDocumentTitle(project.value.title);
}

// Carga inicial
onMounted(() => {
  const slugFromRoute = route.params.slug as string;
  loadProject(slugFromRoute);
})

// Caso en que el usuario haga click en otro proyecto sin recargar
watch (
  () => route.params.slug,
  (newSlug) => {
    if(typeof newSlug === 'string') {
      loadProject(newSlug);
    }
  }
)


const sections = computed(()=> {
  if (!project.value) return [];
  return project.value.sections;
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