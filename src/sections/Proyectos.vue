<script setup lang="ts">
import { caseStudiesCards } from "../data/case-studies";
import ProjectCard from "../components/projects/ProjectCard.vue";
import SectionTitle from "../components/typography/SectionTitle.vue";

</script>

<template>
  <section class="py-12 lg:py-14" id="proyectos">
    <div class="container mx-auto">
      <SectionTitle class="text-primary-900 dark:text-primary-300">
        Proyectos
      </SectionTitle>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            v-for="project in caseStudiesCards"
            :key="project.id"
            :card="project.card"
          />
      </div>
    </div>
  </section>
</template>