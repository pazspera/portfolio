import { Project } from "../types/projects-v2";

export const caseStudies: Project[] = [
  {
    id: "redesign-institutional-site",
    slug: "rediseno-institucional",
    sections: [
      {
        type: "ProjectHero",
        content: {
          img: {
            src: "/images/mockup_rediseno_institucional.png",
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
            { src: '/images/html5-original.svg', alt: 'Logo de HTML5', label: "HTML5"},
            { src: '/images/css3-original.svg', alt: 'Logo de CSS', label: "CSS"},
            { src: '/images/bootstrap-original.svg', alt: 'Logo de Bootstrap', label: "Bootstrap"},
            { src: '/images/javascript-original.svg', alt: 'Logo de JavaScript', label: "JavaScript"},
            { src: '/images/vue.svg', alt: 'Logo de Vue.js', label: "Vue"},
          ],
          role: "Diseñadora UX/UI, desarrolladora frontend y copywriter (única responsable de investigación, diseño y desarrollo)",
          client: "Agencia de telemarketing y generación de leads B2B",
          duration: "7 meses",
          summary: "Rediseñé el sitio institucional de la agencia para mejorar la experiencia de usuario, aplicar la nueva identidad visual y reestructurar el catálogo de servicios de cuatro a ocho ofertas. Implementé un sistema de diseño en Figma basado en Atomic Design para garantizar consistencia y comencé la migración de páginas estáticas a componentes en PHP, preparando la base de un futuro CMS escalable.",
        }
      }
    ]
  }
]