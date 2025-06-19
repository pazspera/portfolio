<script setup lang="ts">
import HeroProject from '../sections/projects/HeroProject.vue';
import SectionTitle from '../components/typography/SectionTitle.vue';
import HighlightText from '../components/typography/HighlightText.vue';
import MainText from '../components/typography/MainText.vue';
import ProjectTextCol from '../components/projects/ProjectTextCol.vue';
import ConclusionProject from '../sections/projects/ConclusionProject.vue';
import ButtonContained from "../components/ButtonContained.vue";
import RoleCard from '../components/projects/RoleCard.vue';
import type { Conclusion } from "../types/proyects";

import { VueCompareImage } from 'vue3-compare-image';
import imgOldHome from "../assets/institucional-viejo-home.jpg";
import imgNewHome from "../assets/institucional-nuevo-home.jpg";
import imgOldVideo from "../assets/institucional-viejo-video.jpg";
import imgNewVideo from "../assets/institucional-nuevo-video.jpg"

const conclusions: Conclusion[] = [
  {
    id: 1,
    img: {
      src: "/src/assets/rediseno-institucional-componentes.png",
      alt: "Pieza acercándose a completar un rompecabezas"
    },
    title: "Pensar en componentes",
    text: "Crear un sistema de diseño lleva tiempo al principio, pero permite escalar más rápido y con mayor solidez. Resolver algo “como sea” genera deuda técnica que termina frenando el desarrollo a largo plazo.",
    class: "md:col-span-4"
  },
  {
    id: 2,
    img: {
      src: "/src/assets/rediseno-institucional-iterar.png",
      alt: "Calendario con un icono representando iteración dentro"
    },
    title: "Iterar, no esperar",
    text: "Querer tener todo listo antes de empezar no siempre es viable. Los cambios de prioridades durante el proceso me demostraron el valor de trabajar en ciclos  que permitan adaptarse sin perder el foco.",
    class: "md:col-span-4"
  },
  {
    id: 3,
    img: {
      src: "/src/assets/rediseno-institucional-idioma.png",
      alt: "Viñetas de diálogo con letras de distintos idiomas"
    },
    title: "Hablar el mismo idioma",
    text: "Usar la misma terminología en diseño y en código evita confusiones, incluso si la misma persona ocupa ambos roles. Nombres genéricos o poco funcionales entorpecen la evolución del sistema.",
    class: "md:col-span-4"
  },
  {
    id: 4,
    img: {
      src: "/src/assets/rediseno-institucional-organizar.png",
      alt: "Capas superpuestas de un diseño"
    },
    title: "Organizar para avanzar",
    text: "Dividir el proyecto en etapas y sprints ayuda a sostener el avance, incluso cuando hay urgencias diarias. Sin planificación, es fácil quedar atrapada en lo inmediato y no llegar a los objetivos del rediseño.",
    class: "md:col-span-4"
  },
  {
    id: 5,
    img: {
      src: "/src/assets/rediseno-institucional-vision.png",
      alt: "Mapa con un plan estratégico detrás de una pieza de ajedrez"
    },
    title: "Construir con visión",
    text: "La urgencia empuja a improvisar, pero sin organización solo se construyen parches. Apostar al orden desde el principio es lo que permite crecer con foco, claridad y solidez en el tiempo.",
    class: "md:col-span-4 md:col-start-3"
  },
]
</script>

<template>
  <HeroProject :imgHero="{
    imgSrc: '/src/assets/mockup_rediseno_institucional.png',
    imgAlt: 'Mockup de notebook mostrando una pantalla del rediseño del sitio institucional'
  }">
    <template #title>
      Rediseño de sitio institucional
    </template>
    <template #text>
      Mejoré la experiencia de usuario, reorganizando la navegación y reforzando la comunicación de servicios para una agencia de telemarketing y generación de leads B2B.
    </template>
  </HeroProject>
  <!-- Resumen -->
  <section class="pt-12 pb-8">
    <div class="lg:mb-6">
      <SectionTitle class="text-primary-900 dark:text-primary-300">
        Resumen del proyecto
      </SectionTitle>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-12">
      <div class="lg:col-span-8 lg:order-last lg:ps-8 lg:pt-4">
        <HighlightText>
          Rediseñé el sitio institucional de la agencia para mejorar la experiencia de usuario, aplicar la nueva identidad visual y reestructurar el catálogo de servicios de cuatro a ocho ofertas. Implementé un sistema de diseño en Figma basado en Atomic Design para garantizar consistencia y comencé la migración de páginas estáticas a componentes en PHP, preparando la base de un futuro CMS escalable.
        </HighlightText>
      </div>
      <!-- Rol -->
      <RoleCard>
        <template #role>
          Diseñadora UX/UI y desarrolladora web (única responsable de investigación, diseño y desarrollo)
        </template>
        <template #client>
          Agencia de telemarketing y generación de leads B2B
        </template>
        <template #duration>
          7 meses
        </template>
      </RoleCard>
    </div>
  </section>

  <!-- Desafío -->
  <section class="py-6">
    <div class="grid grid-cols-1 lg:grid-cols-12">
      <div class="lg:col-span-4">
        <SectionTitle class="text-primary-900 dark:text-primary-300">
          Desafío
        </SectionTitle>
      </div>
      <div class="lg:col-span-8 ps-4 lg:ps-8">
        <ul>
          <li class="list-disc list-inside pb-3">
            <MainText class="inline ">
              El sitio anterior, desarrollado en WordPress, llevaba años sin actualizarse y solo mostraba cuatro servicios básicos. Mientras tanto, la agencia ya ofrecía ocho, pero esa información no estaba reflejada online.
            </MainText>
          </li>
          <li class="list-disc list-inside pb-3">
            <MainText class="inline">
              Internamente, muchos empleados desconocían la gama completa de servicios. Externamente, la buyer persona no tenía claridad sobre el alcance de la agencia.
            </MainText>
          </li>
          <li class="list-disc list-inside pb-3">
            <MainText class="inline">
              Se requería implementar la nueva identidad visual (logo, paleta, tipografía) que solo existía en materiales offline.
            </MainText>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Image compare home -->
  <section class="py-6">
    <VueCompareImage 
      :leftImage="imgOldHome" 
      :rightImage="imgNewHome" 
      leftImageAlt="Versión anterior del hero y sección principal del sitio institucional"
      rightImageAlt="Versión rediseñada del hero y sección principal del sitio institucional"
      :keyboard="true" 
      :keyboardStep="0.1"
      sliderLineColor="#033035"
      :sliderLineWidth="3"
      :sliderPositionPercentage="0.5"
    />
  </section>

  <!-- Enfoque y proceso -->
  <section class="py-6">
    <SectionTitle class="text-primary-900 dark:text-primary-300 mb-8">
      Enfoque y metodología
    </SectionTitle>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ProjectTextCol>
        <template #title>
          Relevamiento de información
        </template>
        <template #text>
          Entrevisté a referentes de cada área para comprender el público, los beneficios y la metodología de sus servicios. Esto evidenció tres problemas: falta de claridad, lenguaje demasiado técnico y contenido sin actualizar.
        </template>
      </ProjectTextCol>
      <ProjectTextCol>
        <template #title>
          Arquitectura de información
        </template>
        <template #text>
          Diseñé un mapa de sitio inicial con todas los servicios ofrecidos. Fue necesario realizar tres iteraciones del mapa debido a cambios de prioridades internas.
        </template>
      </ProjectTextCol>
      <ProjectTextCol>
        <template #title>
          Wireframes y prototipos
        </template>
        <template #text>
          Creé prototipos de baja y alta fidelidad, validándolos con el área comercial para ajustar flujos según urgencia de promover ciertos servicios.
        </template>
      </ProjectTextCol>
      <ProjectTextCol>
        <template #title>
          Sistema de diseño
        </template>
        <template #text>
          Desarrollé un sistema de diseño en Figma aplicando la metodología de Atomic Design. Definí tokens basados en la nueva identidad visual. Construí componentes que permitieran mantener consistencia y escalabilidad.
        </template>
      </ProjectTextCol>
      <ProjectTextCol>
        <template #title>
          Copywriting centrado en el usuario
        </template>
        <template #text>
          Redacté contenidos que comunicaban beneficios de forma clara y persuasiva, resaltando cómo resolvían las necesidades de los prospectos.
        </template>
      </ProjectTextCol>
      <ProjectTextCol>
        <template #title>
          Desarrollo frontend
        </template>
        <template #text>
          El sitio fue desarrollado en HTML, CSS y JavaScript. Implementé componentes reutilizables en Vue.js para la gestión de formularios complejos, optimizando la interactividad y validaciones. 
        </template>
      </ProjectTextCol>
      <ProjectTextCol>
        <template #title>
          Materiales promocionales
        </template>
        <template #text>
          Diseñé presentaciones comerciales y flyers digitales para email marketing y propuestas a clientes potenciales. Estas piezas reflejaron la nueva organización de servicios, detallando soluciones y explicando la oferta de servicios.
        </template>
      </ProjectTextCol>
    </div>
  </section>

  <!-- Image compare video -->
  <section class="py-6">
    <VueCompareImage
      :leftImage="imgOldVideo"
      :rightImage="imgNewVideo" 
      leftImageAlt="Versión anterior de la página de producción de video"
      rightImageAlt="Versión anterior de la página de producción de video"
      :keyboard="true"
      :keyboardStep="0.1"
      sliderLineColor="#033035"
      :sliderLineWidth="3"
      :sliderPositionPercentage="0.5"
    />
  </section>

  <!-- Impacto -->
  <section class="py-5">
    <SectionTitle class="text-primary-900 dark:text-primary-300 mb-8">
      Impacto
    </SectionTitle>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ProjectTextCol>
        <template #title>
          Mejora en la visiblidad interna
        </template>
        <template #text>
          El nuevo sitio dio un panorama integral de la oferta de servicios para los empleados. Esto optimizó la coordinación interna y facilitó la cooperación entre las áreas de marketing, ventas y operaciones. 
        </template>
      </ProjectTextCol>
      <ProjectTextCol>
        <template #title>
          Mayor claridad para prospectos
        </template>
        <template #text>
          La gama de soluciones de la agencia se presentó de forma más fácil de entender, reduciendo las dudas de los clientes potenciales. Este cambio agilizó el proceso de prospección, volviéndolo más efectivo.
        </template>
      </ProjectTextCol>
      <ProjectTextCol>
        <template #title>
          Aumento de acciones comerciales
        </template>
        <template #text>
          La nueva presentación del sitio sirvió como base estratégica para múltiples campañas. Estas destacaron las fortalezas de cada servicio, acelerando el proceso de generación de leads y las oportunidades de negocio.
        </template>
      </ProjectTextCol>
    </div>
  </section>

  <!-- Aprendizajes -->
  <ConclusionProject :conclusions="conclusions" />

  <!-- Botón a proyectos -->
  <section class="my-8">
    <ButtonContained size="medium" to="/#proyectos" class="mx-auto">
      Ver más proyectos
    </ButtonContained>
  </section> 
</template>