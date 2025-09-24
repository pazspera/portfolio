import { Project } from "../types/projects-v2";

export const caseStudies: Project[] = [
  {
    id: "redesign-institutional-site",
    slug: "rediseno-institucional",
    title: "Rediseño de sitio institucional - Paz Spera",
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
      }
    ]
  }
]