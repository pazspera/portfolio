<script setup lang="ts">
import ProjectHero from '../sections/projects/ProjectHero.vue';
import ProjectResumen from '../sections/projects/ProjectResumen.vue';
import ProjectDesafio from '../sections/projects/ProjectDesafio.vue';
import ProjectEnfoque from '../sections/projects/ProjectEnfoque.vue';
import ProjectImpacto from '../sections/projects/ProjectImpacto.vue';
import ProjectConclusion from '../sections/projects/ProjectConclusion.vue';
import ButtonContained from '../components/ButtonContained.vue';
import ImageSlider from '../components/ImageSlider.vue';
import ReadingProgressBar from '../components/ReadingProgressBar.vue';
import { useDocumentTitle } from '../composables/useDocumentTitle';

import type { SliderImage } from '../types/imageSlider';
import type { Conclusion, Desafio, ItemEnfoque, ItemImpacto } from '../types/proyects';
import type { Tech } from '../types/techChips';

useDocumentTitle("Contenido estratégico para redes - Paz Spera");

const challenges: Desafio[] = [
  {
    id: 1,
    text: "Establecer una presencia digital distintiva y persuasiva para ambas agencias en mercados competitivos. Era crucial definir una voz y estética de marca consistentes."
  },
  {
    id: 2,
    text: "Para la agencia de telemarketing, el reto fue comunicar su reposicionamiento estratégico. Esto implicaba integrar nuevos servicios sin perder el foco en su experiencia histórica en telemarketing."
  },
  {
    id: 3,
    text: "La agencia de traducción global necesitaba educar sobre la importancia de la traducción profesional certificada. El objetivo era resaltar el valor del conocimiento humano frente a las soluciones automatizadas."
  }
]

const methodology: ItemEnfoque[] = [
  {
    id: 1,
    title: "Análisis de audiencia",
    text: 'El primer paso fue hacer una investigación para entender a la audiencia objetivo. Identifiqué sus puntos de dolor específicos y los argumentos más convincentes para presentar soluciones relevantes.'
  },
  {
    id: 2,
    title: "Estrategia de contenido educativo",
    text: "Desarrollé una estrategia de contenido enfocada en educar y empoderar a la buyer persona. Busqué brindar valor con información clave para la toma de decisiones, desde la importancia de la certificación hasta la mejora en la generación de leads."
  },
  {
    id: 3,
    title: "Diseño de contenido multiplataforma",
    text: "Fui responsable de la conceptualización, redacción y diseño de piezas. Creé copies persuasivos y carruseles para LinkedIn e Instagram, priorizando LinkedIn por ser la plataforma principal para el público B2B."
  },
  {
    id: 4,
    title: "Redacción de artículos especializados",
    text: "Investigué y redacté artículos de blog detallados para posicionar a las marcas como autoridades. Este contenido educativo buscaba proveer valor y aumentar el tráfico orgánico, abordando temas relevantes y especializados."
  },
  {
    id: 5,
    title: "Unificación de identidad de marca",
    text: "Aseguré una voz de marca consistente y reconocible en todas las comunicaciones. Diseñé piezas gráficas y carruseles visualmente atractivos, que reflejaran la identidad de cada marca para lograr cohesión y profesionalismo."
  }
] 

const impact: ItemImpacto[] = [
  {
    id: 1,
    title: "Expansión de audiencia",
    text: "Las estrategias implementadas lograron una notable expansión de la base de seguidores en las plataformas de redes sociales de ambos clientes. Este crecimiento fue clave para sus objetivos."
  },
  {
    id: 2,
    title: "Mejora del engagement",
    text: "Se observó un significativo incremento en la interacción y el engagement en las publicaciones. Los carruseles en LinkedIn e Instagram fueron muy bien recibidos por la audiencia B2B."
  },
  {
    id: 3,
    title: "Coherencia de marca",
    text: "Para la agencia de traducción, se logró establecer una estética de marca consistente y una voz unificada en todo el contenido digital. Esto mejoró su reconocimiento y profesionalismo."
  },
  {
    id: 4,
    title: "Claridad en la oferta de valor",
    text: "En el caso de la agencia de telemarketing, se educó a la audiencia sobre servicios complejos, clarificando su propuesta de valor. Esto permitió a los clientes potenciales comprender mejor las soluciones ofrecidas."
  },
  {
    id: 5,
    title: "Base para el tráfico orgánico",
    text: "El contenido educativo del blog sentó las bases para un crecimiento orgánico sostenido. Aunque las métricas estaban en fase incial, se estableció una estrategia de generación de valor que potencie el tráfico y engagement futuro."
  }
]

const conclusions: Conclusion[] = [
  {
    id: 1,
    img: {
      src: "/src/assets/contenido-redes-valor.png",
      alt: "Diamante sobresaliendo de una caja"
    },
    title: "Enfocarse en proveer valor",
    text: "En el sector B2B, el contenido más efectivo es aquel que educa y resuelve problemas específicos de la audiencia. Es clave brindar información de valor, especialmente al abordar temas técnicos o complejos.",
    class: "md:col-span-4"
  },
  {
    id: 2,
    img: {
      src: "/src/assets/contenido-redes-precision-cultural.png",
      alt: "Grupo de personas conversando"
    },
    title: "La importancia de la precisión cultural",
    text: "La experiencia de redactar contenido profesional para una agencia global, desde un contexto no nativo, me enseñó la importancia de la precisión lingüística y la sensibilidad cultural en comunicaciones internacionales.",
    class: "md:col-span-4"
  },
  {
    id: 3,
    img: {
      src: "/src/assets/contenido-redes-persuadir.png",
      alt: "Viñetas de diálogo manteniendo una conversación"
    },
    title: "Conocer para persuadir",
    text: 'Dedicar tiempo a investigar las buyer personas y sus puntos de dolor es fundamental para crear contenidos que realmente impacten. Sin ese trabajo previo, es muy difícil conectar con la audiencia objetivo.',
    class: "md:col-span-4"
  },
  {
    id: 4,
    img: {
      src: "/src/assets/contenido-redes-marca.png",
      alt: "Lápiz dibujando un logo"
    },
    title: "Sin coherencia, no hay marca",
    text: "Unificar la voz y la estética de marca a través de diferentes plataformas y tipos de contenido es esencial. Esto construye una identidad sólida y reconocible que refuerza la presencia digital.",
    class: "md:col-span-4"
  },
  {
    id: 5,
    img: {
      src: "/src/assets/contenido-redes-eficiencia.png",
      alt: "Tablero de planificación"
    },
    title: "Planificar la eficiencia",
    text: "La planificación anticipada y la validación temprana con el cliente son cruciales para un flujo de trabajo eficiente. Aseguran la coherencia de los temas, minimizan correcciones y optimizan la gestión de tiempo y recursos.",
    class: "md:col-span-4 md:col-start-3"
  },
]

const techStack: Tech[] = [
{ src: '/src/assets/figma-original.svg', alt: 'Logo de Figma', label: "Figma"},
]

const sliderTelemarketingAgency: SliderImage[] = [
  {
    id: 1,
    src: "/src/assets/slider-agencia-telemarketing-1.jpg",
    alt: "Portada de carrusel de caso de éxito dashboard encuestas de satisfacción"
  },
  {
    id: 2,
    src: "/src/assets/slider-agencia-telemarketing-2.jpg",
    alt: "Explicación del desafío sobre las encuestas de satisfacción"
  },
  {
    id: 3,
    src: "/src/assets/slider-agencia-telemarketing-3.jpg",
    alt: "Implementación de mejoras con un dashboard personalizado"
  },
  {
    id: 4,
    src: "/src/assets/slider-agencia-telemarketing-4.jpg",
    alt: "Explicación de características principales del dashboard"
  },
  {
    id: 5,
    src: "/src/assets/slider-agencia-telemarketing-5.jpg",
    alt: "Impacto de la solución planteada"
  },
  {
    id: 6,
    src: "/src/assets/slider-agencia-telemarketing-6.jpg",
    alt: "Cierre con cta del carrusel"
  },
  {
    id: 7,
    src: "/src/assets/slider-agencia-telemarketing-7.jpg",
    alt: "Portada de carrusel sobre los usos de telemarketing en ambientes B2B"
  },
  {
    id: 8,
    src: "/src/assets/slider-agencia-telemarketing-8.jpg",
    alt: "Venta de productos y servicios"
  },
  {
    id: 9,
    src: "/src/assets/slider-agencia-telemarketing-9.jpg",
    alt: "Verificación de datos"
  },
  {
    id: 10,
    src: "/src/assets/slider-agencia-telemarketing-10.jpg",
    alt: "Generador de reuniones"
  },
  {
    id: 11,
    src: "/src/assets/slider-agencia-telemarketing-11.jpg",
    alt: "Conclusión del carrusel con CTA"
  },
]

const sliderTranslationAgency: SliderImage[] = [
{
    id: 1,
    src: "/src/assets/slider-agencia-traduccion-1.jpg",
    alt: "Portada de carrusel sobre las implicaciones del uso de IA en traducciones legales"
  },
{
    id: 2,
    src: "/src/assets/slider-agencia-traduccion-2.jpg",
    alt: "Desafíos en la precisión de terminología"
  },
{
    id: 3,
    src: "/src/assets/slider-agencia-traduccion-3.jpg",
    alt: "Limitaciones en la adaptación multicultural"
  },
{
    id: 4,
    src: "/src/assets/slider-agencia-traduccion-4.jpg",
    alt: "Repercusiones legales"
  },
{
    id: 5,
    src: "/src/assets/slider-agencia-traduccion-5.jpg",
    alt: "Recomendaciones: complementar IA con revisión humana"
  },
{
    id: 6,
    src: "/src/assets/slider-agencia-traduccion-6.jpg",
    alt: "Recomendaciones: mantenerse actualizado en novedades de IA"
  },
{
    id: 7,
    src: "/src/assets/slider-agencia-traduccion-7.jpg",
    alt: "Recomendaciones: confirmar que se mantenga el compliance requerido"
  },
{
    id: 8,
    src: "/src/assets/slider-agencia-traduccion-8.jpg",
    alt: "Cierre de carrusel con CTA"
  },
{
    id: 9,
    src: "/src/assets/slider-agencia-traduccion-9.jpg",
    alt: "Portada carrusel sobre la norma ISO 9001"
  },
{
    id: 10,
    src: "/src/assets/slider-agencia-traduccion-10.jpg",
    alt: "¿Qué es la norma ISO 9001?"
  },
{
    id: 11,
    src: "/src/assets/slider-agencia-traduccion-11.jpg",
    alt: "¿Cómo ayuda a las empresas a mejorar sus operaciones?"
  },
{
    id: 12,
    src: "/src/assets/slider-agencia-traduccion-12.jpg",
    alt: "Otros beneficios de implementar la norma ISO 9001"
  },
{
    id: 13,
    src: "/src/assets/slider-agencia-traduccion-13.jpg",
    alt: "Certificación ISO 9001 de la agencia de traducción"
  },
{
    id: 14,
    src: "/src/assets/slider-agencia-traduccion-14.jpg",
    alt: "Conclusión del carrusel con CTA"
  },
]

</script>

<template>
  <div>
    <ReadingProgressBar/>
  
    <ProjectHero :imgHero="{
      imgSrc: '/images/mockup_rrss.png',
      imgAlt: 'Mockup de notebook con una página de Instagram con una publicación'
    }">
      <template #title>
        Contenido estratégico para redes
      </template>
      <template #text>
        Diseñé y ejecuté estrategias de UX Writing para potenciar la comunicación, la presencia digital y el engagement de dos agencias B2B en mercados especializados.
      </template>
    </ProjectHero>

    <!-- Resumen -->
    <ProjectResumen :techStack="techStack">
      <template #summary>
        Lideré la estrategia de contenido y ejecución de UX Writing para dos empresas B2B. Gestioné el proceso completo de definición de buyer personas y el diseño y redacción de copys persuasivos para redes sociales (con foco en LinkedIn). También me encargué de la investigación y redacción de artículos de blog especializados. Los objetivos principales fueron desarrollar la presencia digital, educar a las audiencias y posicionar a las marcas como autoridades en sus nichos.
      </template>
      <template #role>
        UX Writer, Content Strategist, Diseñadora UI
      </template>
      <template #client>
        Agencia de telemarketing y generación de leads B2B y agencia de traducción global
      </template>
      <template #duration>
        10 y 6 meses, respectivamente
      </template>
    </ProjectResumen>

    <!-- Desafío -->
    <ProjectDesafio :desafios="challenges" />

    <!-- Carrusel agencia telemarketing -->
    <ImageSlider :images="sliderTelemarketingAgency" caption="Ejemplos de carruseles diseñados para la agencia de telemarketing y generación de leads B2B"  />

    <!-- Enfoque y metodología -->
    <ProjectEnfoque :itemsEnfoque="methodology" />

    <!-- Carrusel agencia traducción -->
    <ImageSlider :images="sliderTranslationAgency" caption="Ejemplos de carruseles diseñados para la agencia de traducción" />

    <!-- Impacto -->
    <ProjectImpacto :listaImpacto="impact" />

    <!-- Aprendizajes -->
    <ProjectConclusion :conclusions="conclusions" />

    <!-- Botón a proyectos -->
    <section class="my-8">
      <ButtonContained size="medium" to="/#proyectos" class="mx-auto">
        Ver más proyectos
      </ButtonContained>
    </section> 
  </div>
</template>