<script setup lang="ts">
import ProjectCard from "../components/ProjectCard.vue"
import SectionTitle from "../components/typography/SectionTitle.vue";
</script>

<template>
  <section class="py-12 lg:py-16 2xl:py-20">
    <div class="container mx-auto">
      <SectionTitle text="Proyectos" class="text-primary-900 dark:text-primary-300" />
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProjectCard/>
          <ProjectCard/>
      </div>
    </div>
  </section>
</template>