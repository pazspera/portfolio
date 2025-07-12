<script setup lang="ts">
import ProjectDesafio from '../sections/projects/ProjectDesafio.vue';
import ProjectResumen from '../sections/projects/ProjectResumen.vue';
import ProjectEnfoque from '../sections/projects/ProjectEnfoque.vue';
import ProjectImpacto from '../sections/projects/ProjectImpacto.vue';
import ProjectHero from '../sections/projects/ProjectHero.vue';
import ProjectConclusion from '../sections/projects/ProjectConclusion.vue';
import ReadingProgressBar from '../components/ReadingProgressBar.vue';
import ButtonContained from '../components/ButtonContained.vue';
import CaptionText from '../components/typography/CaptionText.vue';

import { VueCompareImage } from 'vue3-compare-image';
import imgProductsWireframe  from "../assets/slider-landing-nuestros-productos-wireframe.jpg";
import imgProductsFinal from "../assets/slider-landing-nuestros-productos-final.jpg";
import imgWireframe from "../assets/slider-landing-wireframe.jpg";
import imgFinal from "../assets/slider-landing-final.jpg";

import type { Desafio, ItemEnfoque, ItemImpacto, Conclusion } from '../types/proyects';
import type { Tech } from '../types/techChips';

import { useDocumentTitle } from '../composables/useDocumentTitle';

useDocumentTitle("Landing optimizada para ventas - Paz Spera");

const challenges: Desafio[] = [
  {
    id: 1,
    text: "Liquid Sound necesitaba una landing page comercial para campañas. Su sitio institucional limitaba la captación estratégica de leads."
  },
  {
    id: 2,
    text: "Se requería un enfoque de ventas más directo y agresivo, alejándose del tono institucional, para convertir visitantes en potenciales clientes."
  },
  {
    id: 3,
    text: "La prioridad fue optimizar la experiencia de usuario y guiarlo hacia la acción, reforzando el carácter comercial de la marca."
  }
]

const techStack: Tech[] = [
  { src: '/images/react-original.svg', alt: 'Logo de React', label: "React"},
  { src: '/images/materialui-original.svg', alt: 'Logo de Material UI', label: "Material UI"},
]

const methodology: ItemEnfoque[] = [
  {
    id: 1,
    title: "Focalizarse en el valor",
    text: "Definí junto al cliente los aspectos más relevantes de su propuesta de valor para la audiencia objetivo. Esta comprensión fue fundamental para estructurar el contenido de la landing de forma efectiva."
  },
  {
    id: 2,
    title: "Priorizar la persuasión",
    text: "Diseñé la estructura de la landing page enfocándome en guiar al usuario desde el inicio. Ubiqué los beneficios clave al comienzo para captar la atención y sostener el interés del prospecto."
  },
  {
    id: 3,
    title: "Wireframes y arquitectura de información",
    text: "Diseñé los wireframes para definir la estructura y la jerarquía del contenido. Obtuve feedback directo del cliente sobre estas propuestas, lo que me permitió refinar la arquitectura antes de avanzar."
  },
  {
    id: 4,
    title: "Prototipado y validación",
    text: "En la sección de Nuestros Productos, el diseño inicial incluía un recuadro superpuesto a la imagen principal. Una vez que el cliente pasó las imágenes finales, este diseño ocultaba parte del catálogo de productos. Sugerí reformular la sección por un enfoque más tradicional que priorizara la visibilidad de los productos."
  },
  {
    id: 5,
    title: "Desarrollo de la landing",
    text: "Usé React y Material UI para desarrollar la landing page, lo que facilitó la implementación de los componentes diseñados durante el prototipo. Configuré el envío automatizado de correos al completar formularios y un backup de datos en Google Sheets para garantizar la gestión eficiente de los leads."
  }
];

const impact: ItemImpacto[] = [
  {
    id: 1,
    title: "Base para estrategias de venta",
    text: "Liquid Sound cuenta con una herramienta diseñada específicamente para sus objetivos comerciales. Esta plataforma le permitirá direccionar el tráfico de campañas hacia una experiencia optimizada para la conversión."
  },
  {
    id: 2,
    title: "Refuerzo de la identidad de marca",
    text: "La optimización del contenido y el diseño no solo informan, sino que también consolidan la imagen de Liquid Sound como un proveedor confiable y experto. Esto genera una mayor confianza en el público objetivo y destaca la relevancia de la marca para satisfacer sus requerimientos específicos."
  }
]

const conclusions: Conclusion[] = [
  {
    id: 1,
    img: {
      src: "/images/landing-ventas-propuesta-valor.png",
      alt: "Manos sosteniendo piezas de un rompecabezas"
    },
    title: "Entender la propuesta de valor",
    text: "Sentarse a hablar con el cliente es fundamental para destilar los puntos fuertes de su propuesta. El desafío está en presentarlos persuasivamente, conectando directamente con las necesidades y problemas de la buyer persona.",
    class: "md:col-span-4"
  },
  {
    id: 2,
    img: {
      src: "/images/landing-ventas-simple.png",
      alt: "Tiro al blanco con una flecha en el medio"
    },
    title: "Lo simple es más claro",
    text: "Priorizar la efectividad del mensajes es fundamental. Si un diseño es atractivo pero confunde o distrae, no sirve. El objetivo principal es que el usuario entienda la propuesta de valor y quitar todos los elementos que compitan con la comprensión de este punto. ",
    class: "md:col-span-4"
  },
  {
    id: 3,
    img: {
      src: "/images/landing-ventas-soporte.png",
      alt: "Sitio web con un engranaje para seleccionar preferencias"
    },
    title: "Soporte integral",
    text: "Ofrecer un producto completo implica un compromiso más allá de la entrega. Proveer soporte para solucionar inconvenientes construye una relación sólida y de confianza con el cliente a largo plazo.",
    class: "md:col-span-4"
  },
  {
    id: 4,
    img: {
      src: "/images/landing-ventas-audiencia.png",
      alt: "Iconos de cuatro personas, una está destacada"
    },
    title: "Enfoque estratégico en la audiencia",
    text: "Alinear la estrategia de contenido con la rentabilidad del cliente es clave. Priorizar sectores específicos para la landing optimiza el mensaje y direcciona los recursos de marketing hacia audiencias con mayor retorno de inversión.",
    class: "md:col-span-4"
  },
]

</script>

<template>
  <section>
    <ReadingProgressBar/>

    <ProjectHero :imgHero="{
      imgSrc: '/images/mockup_landing_ventas.png',
      imgAlt: 'Mockup de notebook mostrando una pantalla de la landing page optimizada para ventas'
    }">
      <template #title>
        Landing optimizada para ventas
      </template>
      <template #text>
        Diseñé y desarrollé una sitio web comercial para Liquid Sound, reorientando su presencia de marca hacia la venta directa y la captación de leads calificados.
      </template>
    </ProjectHero>

    <!-- Resumen -->
    <ProjectResumen :techStack="techStack" :url="'https://liquid-sound.com.ar/'">
      <template #summary>
        Diseñé y desarrollé una landing page comercial para Liquid Sound, una empresa de insumos de higiene. El desafío fue pasar de un enfoque institucional a uno orientado a ventas directas, optimizando la captación de leads de alto valor. Prioricé la creación de contenido persuasivo, orientando la experiencia de usuarios en la generación de prospectos. Implementé el sitio con React y Material UI, incluyendo automatización de formularios y gestión de leads.
      </template>
      <template #role>
        Diseñadora UX/UI, desarrolladora frontend y copywriter (única responsable del proyecto)
      </template>
      <template #client>
        Liquid Sound (empresa de fabricación y distribución de insumos de higiene)
      </template>
      <template #duration>
        5 semanas
      </template>
    </ProjectResumen>

    <!-- Desafío -->
    <ProjectDesafio :desafios="challenges" />

    <!-- Image compare wireframe y sitio final -->
    <section class="py-6">
      <VueCompareImage 
        :leftImage="imgWireframe"
        :rightImage="imgFinal"
        leftImageAlt="Wireframe del hero y sección Por qué elegirnos"
        rigthImageAlt="Diseño final del hero y sección Por qué elegirnos"
        :keyboard="true"
        :keyboardStep="0.1"
        sliderLineColor="#033035"
        :sliderLineWidth="3"
        :sliderPositionPercentage="0.5"
      />
      <CaptionText>
        Proceso de diseño de las secciones de Hero y ¿Por qué elegirnos?
      </CaptionText>
    </section>

    <!-- Enfoque y metodología -->
    <ProjectEnfoque :itemsEnfoque="methodology" />

    <!-- Image compare sección Nuestros Productos -->
    <section class="py-6">
      <VueCompareImage 
        :leftImage="imgProductsWireframe"
        :rightImage="imgProductsFinal"
        leftImageAlt="Wireframe de la sección Nuestros Productos con diseño de capas superpuestas"
        rightImageAlt="Sección final de la sección Nuestros Productos con dos columnas"
        :keyboard="true"
        :keyboardStep="0.1"
        sliderLineColor="#033035"
        :sliderLineWidth="3"
        :sliderPositionPercentage="0.5"
      />
      <CaptionText>
        Cambio de diseño en la sección de Nuestros Productos
      </CaptionText>
    </section>

    <!-- Impacto -->
    <ProjectImpacto :listaImpacto="impact" class="pb-10" />

    <!-- Aprendizajes -->
    <ProjectConclusion :conclusions="conclusions" class="md:pb-16 lg:pb-18 xl:pb-20" />

    <!-- Botón a proyectos -->
    <section class="my-8">
      <ButtonContained size="medium" to="/#proyectos" class="mx-auto">
        Ver más proyectos
      </ButtonContained>
    </section> 
  </section>
</template>