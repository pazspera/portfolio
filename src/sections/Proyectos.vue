<script setup lang="ts">
import ProjectCard from "../components/projects/ProjectCard.vue";
import SectionTitle from "../components/typography/SectionTitle.vue";

const projects = [
  {
    id: 1,
    title: "Rediseño de sitio institucional",
    text: "Reestructuración desde cero con foco en usabilidad, actualización visual de la identidad de marca y desarrollo de componentes consistentes a través de un sistema de diseño personalizado.",
    // agregar ruta para btn
    src: new URL("../assets/card-institutional-redesign.jpg", import.meta.url).href,
    alt: "Mockups de proyecto de rediseño de sitio institucional",
    to: { name: 'rediseno' }
  },
  {
    id: 3,
    title: "Contenido estratégico para redes",
    text: "Desarrollo de piezas y textos para campañas en redes sociales, ajustados a la voz y público de cada marca. Las acciones buscan mejorar la interacción y el posicionamiento orgánico.",
    // agregar ruta para btn
    src: new URL("../assets/card-contenido-redes.jpg", import.meta.url).href,
    alt: "Mockups de publicaciones para redes sociales",
    to: { name: 'redes' }
  }
]

</script>

<template>
  <section class="py-12 lg:py-14" id="proyectos">
    <div class="container mx-auto">
      <SectionTitle class="text-primary-900 dark:text-primary-300">
        Proyectos
      </SectionTitle>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProjectCard
            v-for="project in projects"
            :key="project.id"
            :project="project"
          />
      </div>
    </div>
  </section>
</template>