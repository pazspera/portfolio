<script setup lang="ts">
import ProjectCard from "../components/projects/ProjectCard.vue";
import SectionTitle from "../components/typography/SectionTitle.vue";

const projects = [
  {
    id: 1,
    title: "Rediseño de sitio institucional",
    text: "Transformé la plataforma web de la empresa, implementando una nueva identidad de marca, reformulando la arquitectura de información y creando un sistema de diseño personalizado.",
    // agregar ruta para btn
    src: "/images/card-institutional-redesign.jpg",
    alt: "Mockups de proyecto de rediseño de sitio institucional",
    to: { name: 'rediseno' }
  },
  {
    id: 2,
    title: "Landing optimizada para ventas",
    text: "Diseñé y desarrollé una landing page comercial para Liquid Sound, transformando su comunicación a un enfoque de ventas directo. El objetivo fue optimizar la captación de leads de alto valor y establecer una plataforma efectiva para campañas.",
    src: "/images/card-landing-ventas.jpg",
    alt: "Mockup de landing optimizada para ventas",
    to: { name: "landing" }
  },
  {
    id: 3,
    title: "Contenido estratégico para redes",
    text: "Desarrollé artículos y piezas gráficas para campañas de redes sociales de empresas B2B. Se buscó mejorar el engagement y posicionamiento orgánico, definiendo una voz de marca que conecte con el público objetivo. ",
    // agregar ruta para btn
    src: "/images/card-contenido-redes.jpg",
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