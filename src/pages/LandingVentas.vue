<script setup lang="ts">
import ProjectDesafio from '../sections/projects/ProjectDesafio.vue';
import ProjectResumen from '../sections/projects/ProjectResumen.vue';
import ProjectEnfoque from '../sections/projects/ProjectEnfoque.vue';
import ProjectImpacto from '../sections/projects/ProjectImpacto.vue';
import ReadingProgressBar from '../components/ReadingProgressBar.vue';

import type { Desafio, ItemEnfoque, ItemImpacto } from '../types/proyects';
import type { Tech } from '../types/techChips';

import { useDocumentTitle } from '../composables/useDocumentTitle';

useDocumentTitle("Landing optimizada para ventas - Paz Spera");

const challenges: Desafio[] = [
  {
    id: 1,
    text: "Liquid Sound necesitaba una landing page comercial para campañas, ya que su sitio institucional limitaba la captación estratégica de leads."
  },
  {
    id: 2,
    text: "Se requería un enfoque de ventas más directo y agresivo, alejándose del tono institucional, para convertir visitantes en potenciales clientes."
  },
  {
    id: 3,
    text: "La prioridad fue optimizar la experiencia de usuario y guiarlo hacia la acción, para reforzar el carácter comercial de la marca."
  }
]

const techStack: Tech[] = [
  { src: '/src/assets/react-original.svg', alt: 'Logo de React', label: "React"},
  { src: '/src/assets/materialui-original.svg', alt: 'Logo de Material UI', label: "Material UI"},
]

const methodology: ItemEnfoque[] = [
  {
    id: 1,
    title: "Focalizarse en el valor",
    text: "Definí junto al cliente los aspectos más relevantes de su propuesta de valor para la audiencia objetivo. Esta comprensión profunda fue fundamental para estructurar el contenido de la landing de forma persuasiva."
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
    text: "En la sección de Nuestros Productos, el diseño inicial incluí un recuadro superpuesto a la imagen principal. Una vez que el cliente pasó las imágenes finales, este diseño ocultaba parte del catálogo de productos. Sugerí reformular la sección por un enfoque más tradicional que priorizara la visibilidad de los productos."
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
    text: "El cliente cuenta una herramienta diseñada específicamente para sus objetivos comerciales. Esta plataforma les permitirá direccionar el tráfico de campañas hacia una experiencia optimizada para la conversión."
  },
  {
    id: 2,
    title: "Refuerzo de la identidad de marca",
    text: "La optimización del contenido y el diseño no solo informan, sino que también consolidan la imagen del cliente como un proveedor confiable y experto. Esto genera una mayor confianza en el público objetivo y destaca la relevancia de la marca para satisfacer sus requerimientos específicos."
  }
]

</script>

<template>
  <div>
    <ReadingProgressBar/>

    
    <!-- Resumen -->
    <ProjectResumen :techStack="techStack">
      <template #summary>
        Diseñé y desarrollé una landing page comercial para Liquid Sound, una empresa de insumos de higiene y asepsia. El desafío fue pasar de un enfoque institucional a uno orientado a ventas directas, optimizando la captación de leads de alto valor. Prioricé la creación de contenido persuasivo, orientando la experiencia de usuarios en la generación de prospectos. Implementé el sitio con React y Material UI, incluyendo automatización de formularios y gestión de leads.
      </template>
      <template #role>
        Diseñadora UX/UI, Desarrolladora Frontend y Copywriter (única responsable del proyecto)
      </template>
      <template #client>
        Liquid Sound (fabricación y distribución de insumos de higiene)
      </template>
      <template #duration>
        5 semanas
      </template>
    </ProjectResumen>

    <!-- Desafío -->
    <ProjectDesafio :desafios="challenges" />

    <!-- Enfoque y metodología -->
    <ProjectEnfoque :itemsEnfoque="methodology" />

    <!-- Impacto -->
    <ProjectImpacto :listaImpacto="impact" />

  </div>
</template>