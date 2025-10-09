<script setup lang="ts">
import { caseStudies } from "../data/case-studies";
import ProjectCard from "../components/projects/ProjectCard.vue";
import SectionTitle from "../components/typography/SectionTitle.vue";
import { Project } from "../types/projects-v2";

const exampleProject: Project =   {
    id: "redesign-institutional-site",
    slug: "rediseno-institucional",
    title: "Rediseño de sitio institucional - Paz Spera",
    card: {
      title: "Rediseño de sitio institucional",
      text: "Transformé la plataforma web de la empresa, implementando una nueva identidad de marca, reformulando la arquitectura de información y creando un sistema de diseño personalizado.",
      img: {
        src: "card-institutional-redesign.jpg",
        alt: "Mockups de proyecto de rediseño de sitio institucional",
      },
      to: {
        name: "SingleCaseStudy",
        params: {
          slug: "rediseno-institucional",
        }
      }
    },
    sections: [
      {
        type: "ProjectHero",
        content: {
          img: {
            src: "mockup_rediseno_institucional.png",
            alt: "Mockup de notebook mostrando una pantalla del rediseño del sitio institucional"
          },
          title: "Rediseño de sitio institucional",
          text: "Adapté una nueva identidad de marca y reorganicé la presentación y comunicación de servicios para una agencia de telemarketing y generación de leads B2B."
        }
      },
      {
        type: "ProjectSummary",
        content: {
          techStack: [
            { src: 'html5-original.svg', alt: 'Logo de HTML5', label: "HTML5"},
            { src: 'css3-original.svg', alt: 'Logo de CSS', label: "CSS"},
            { src: 'bootstrap-original.svg', alt: 'Logo de Bootstrap', label: "Bootstrap"},
            { src: 'javascript-original.svg', alt: 'Logo de JavaScript', label: "JavaScript"},
            { src: 'vue.svg', alt: 'Logo de Vue.js', label: "Vue"},
          ],
          summary: "Rediseñé el sitio institucional de la agencia para mejorar la experiencia de usuario, aplicar la nueva identidad visual y reestructurar el catálogo de servicios de cuatro a ocho ofertas. Implementé un sistema de diseño en Figma basado en Atomic Design para garantizar consistencia y comencé la migración de páginas estáticas a componentes en PHP, preparando la base de un futuro CMS escalable.",
          roleCard: {
            role: "Diseñadora UX/UI, desarrolladora frontend y copywriter (única responsable de investigación, diseño y desarrollo)",
            client: "Agencia de telemarketing y generación de leads B2B",
            duration: "7 meses",
          }
        },
      }, 
      {
        type: "ProjectChallenge",
        content: {
          challenges: [
            {
              id: 1,
              text: "El sitio anterior, desarrollado en WordPress, llevaba años sin actualizarse y solo mostraba cuatro servicios básicos. Mientras tanto, la agencia ya ofrecía ocho, pero esa información no estaba reflejada online."
            },
            {
              id: 2,
              text: "Internamente, muchos empleados desconocían la gama completa de servicios. Externamente, la buyer persona no tenía claridad sobre el alcance de la agencia."
            }, 
            {
              id: 3,
              text: "Se requería implementar la nueva identidad visual (logo, paleta, tipografía) que solo existía en materiales offline."
            }
          ]
        }
      },
      {
        type: "ProjectImageCompare",
        content: {
          imgOld: "institucional-viejo-home.jpg",
          imgNew: "institucional-nuevo-home.jpg",
          altImgOld: "Versión anterior del hero y sección principal del sitio institucional",
          altImgNew: "Versión rediseñada del hero y sección principal del sitio institucional",
          caption: "Rediseño de la página de inicio del sitio institucional",
        }
      },
      {
        type: "ProjectMethodology",
        content: {
          title: "Enfoque y metodología",
          items: [
            {
              id: 1,
              title: "Relevamiento de información",
              text: "Entrevisté a referentes de cada área para comprender el público, los beneficios y la metodología de sus servicios. Esto evidenció tres problemas: falta de claridad, lenguaje demasiado técnico y contenido sin actualizar."
            },
            {
              id: 2,
              title: "Arquitectura de información",
              text: "Diseñé un mapa de sitio inicial con todas los servicios ofrecidos. Fue necesario realizar tres iteraciones del mapa debido a cambios de prioridades internas."
            },
            {
              id: 3,
              title: "Wireframes y prototipos",
              text: "Creé prototipos de baja y alta fidelidad, validándolos con el área comercial para ajustar el contenido según la urgencia de promover ciertos servicios."
            },
            {
              id: 4,
              title: "Sistema de diseño",
              text: "Desarrollé un sistema de diseño en Figma aplicando la metodología de Atomic Design. Definí tokens basados en la nueva identidad visual. Construí componentes que permitieran mantener consistencia y escalabilidad."
            },
            {
              id: 5,
              title: "Copywriting centrado en el usuario",
              text: "Redacté contenidos que comunicaban beneficios de forma clara y persuasiva, resaltando cómo resolvían las necesidades de los prospectos."
            },
            {
              id: 6,
              title: "Desarrollo frontend",
              text: "El sitio fue desarrollado en HTML, CSS y JavaScript. Implementé componentes reutilizables en Vue.js para la gestión de formularios complejos, optimizando la interactividad y validaciones."
            },
            {
              id: 7,
              title: "Materiales promocionales",
              text: "Diseñé presentaciones comerciales y flyers digitales para email marketing y propuestas a clientes potenciales. Estas piezas reflejaron la nueva organización de servicios, detallando soluciones y explicando sus beneficios principales."
            }
          ]
        }
      },
      {
        type: "ProjectImageCompare",
        content: {
          imgOld: "institucional-viejo-video.jpg",
          imgNew: "institucional-nuevo-video.jpg",
          altImgOld: "Versión anterior de la página de producción de video",
          altImgNew: "Versión anterior de la página de producción de video",
          caption: "Rediseño de la página de producción de video",
        }
      },
      {
        type: "ProjectImpact",
        content: {
          title: "Impacto",
          items: [
            {
              id: 1,
              title: "Mejora en la visiblidad interna",
              text: "El nuevo sitio dio un panorama integral de la oferta de servicios para los empleados. Esto optimizó la coordinación interna y facilitó la cooperación entre las áreas de marketing, ventas y operaciones. "
            }, 
            {
              id: 2,
              title: "Mayor claridad para prospectos",
              text: "La gama de soluciones de la agencia se presentó de forma más fácil de entender, reduciendo las dudas de los clientes potenciales. Este cambio agilizó el proceso de prospección, volviéndolo más efectivo."
            },
            {
              id: 3,
              title: "Aumento de acciones comerciales",
              text: "La nueva presentación del sitio sirvió como base estratégica para múltiples campañas. Estas destacaron las fortalezas de cada servicio, acelerando el proceso de generación de leads y las oportunidades de negocio."
            }
          ]
        }
      },
      {
        type: "ProjectTakeaways",
        content: {
          items: [
            {
              id: 1,
              img: {
                src: "rediseno-institucional-componentes.png",
                alt: "Pieza acercándose a completar un rompecabezas"
              },
              title: "Pensar en componentes",
              text: "Crear un sistema de diseño lleva tiempo al principio, pero permite escalar más rápido y con mayor solidez. Resolver algo “como sea” genera deuda técnica que termina frenando el desarrollo a largo plazo.",
              class: "md:col-span-4"
            },
            {
              id: 2,
              img: {
                src: "rediseno-institucional-iterar.png",
                alt: "Calendario con un icono representando iteración dentro"
              },
              title: "Iterar, no esperar",
              text: "Querer tener todo listo antes de empezar no siempre es viable. Los cambios de prioridades durante el proceso me demostraron el valor de trabajar en ciclos  que permitan adaptarse sin perder el foco.",
              class: "md:col-span-4"
            },
            {
              id: 3,
              img: {
                src: "rediseno-institucional-idioma.png",
                alt: "Viñetas de diálogo con letras de distintos idiomas"
              },
              title: "Hablar el mismo idioma",
              text: "Usar la misma terminología en diseño y en código evita confusiones, incluso si la misma persona ocupa ambos roles. Nombres genéricos o poco funcionales entorpecen la evolución del sistema.",
              class: "md:col-span-4"
            },
            {
              id: 4,
              img: {
                src: "rediseno-institucional-organizar.png",
                alt: "Capas superpuestas de un diseño"
              },
              title: "Organizar para avanzar",
              text: "Dividir el proyecto en etapas y sprints ayuda a sostener el avance, incluso cuando hay urgencias diarias. Sin planificación, es fácil quedar atrapada en lo inmediato y no llegar a los objetivos.",
              class: "md:col-span-4"
            },
            {
              id: 5,
              img: {
                src: "rediseno-institucional-vision.png",
                alt: "Mapa con un plan estratégico detrás de una pieza de ajedrez"
              },
              title: "Construir con visión",
              text: "La urgencia empuja a improvisar y sin organización solo se construyen parches. Apostar al orden desde el principio es lo que permite crecer con foco, claridad y solidez en el tiempo.",
              class: "md:col-span-4 md:col-start-3"
            },
          ]
        }
      }
    ]
  }

</script>

<template>
  <section class="py-12 lg:py-14" id="proyectos">
    <div class="container mx-auto">
      <SectionTitle class="text-primary-900 dark:text-primary-300">
        Proyectos
      </SectionTitle>
      <h2>Ejemplo card</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProjectCard :card="exampleProject.card" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            v-for="project in caseStudies"
            :key="project.id"
            :card="project.card"
          />
      </div>
    </div>
  </section>
</template>