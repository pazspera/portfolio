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
  },
  {
    id: "commercial-landing-page",
    slug: "landing-ventas",
    title: "Landing optimizada para ventas - Paz Spera",
    sections: [
      {
        type: "ProjectHero",
        content: {
          img: {
            src: "mockup_landing_ventas.png",
            alt: "Mockup de notebook mostrando una pantalla de la landing page optimizada para ventas"
          },
          title: "Landing optimizada para ventas",
          text: " Diseñé y desarrollé una sitio web comercial para Liquid Sound, reorientando su presencia de marca hacia la venta directa y la captación de leads calificados."
        }
      },
      {
        type: "ProjectSummary",
        content: {
          techStack: [
            { src: 'react-original.svg', alt: 'Logo de React', label: "React"},
            { src: 'materialui-original.svg', alt: 'Logo de Material UI', label: "Material UI"}
          ],
          summary: "Diseñé y desarrollé una landing page comercial para Liquid Sound, una empresa de insumos de higiene. El desafío fue pasar de un enfoque institucional a uno orientado a ventas directas, optimizando la captación de leads de alto valor. Prioricé la creación de contenido persuasivo, orientando la experiencia de usuarios en la generación de prospectos. Implementé el sitio con React y Material UI, incluyendo automatización de formularios y gestión de leads.",
          roleCard: {
            role: "Diseñadora UX/UI, desarrolladora frontend y copywriter (única responsable del proyecto)",
            client: "Liquid Sound (empresa de fabricación y distribución de insumos de higiene)",
            duration: "5 semanas",
          },
          url: "https://liquid-sound.com.ar/"
        },
      }, 
      {
        type: "ProjectChallenge",
        content: {
          challenges: [
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
        }
      },
      {
        type: "ProjectImageCompare",
        content: {
          imgOld: "slider-landing-wireframe.jpg",
          imgNew: "slider-landing-final.jpg",
          altImgOld: "Wireframe del hero y sección Por qué elegirnos",
          altImgNew: "Diseño final del hero y sección Por qué elegirnos",
          caption: "Proceso de diseño de las secciones de Hero y ¿Por qué elegirnos?",
        }
      },
      {
        type: "ProjectMethodology",
        content: {
          title: "Enfoque y metodología",
          items: [
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
          ]
        }
      },
      {
        type: "ProjectImageCompare",
        content: {
          imgOld: "slider-landing-nuestros-productos-wireframe.jpg",
          imgNew: "slider-landing-nuestros-productos-final.jpg",
          altImgOld: "Wireframe de la sección Nuestros Productos con diseño de capas superpuestas",
          altImgNew: "Sección final de la sección Nuestros Productos con dos columnas",
          caption: "Cambio de diseño en la sección de Nuestros Productos",
        }
      },
      {
        type: "ProjectImpact",
        content: {
          title: "Impacto",
          items: [
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
        }
      },
      {
        type: "ProjectTakeaways",
        content: {
          items: [
            {
              id: 1,
              img: {
                src: "landing-ventas-propuesta-valor.png",
                alt: "Manos sosteniendo piezas de un rompecabezas"
              },
              title: "Entender la propuesta de valor",
              text: "Sentarse a hablar con el cliente es fundamental para destilar los puntos fuertes de su propuesta. El desafío está en presentarlos persuasivamente, conectando directamente con las necesidades y problemas de la buyer persona",
              class: "md:col-span-4"
            },
            {
              id: 2,
              img: {
                src: "landing-ventas-simple.png",
                alt: "Tiro al blanco con una flecha en el medio"
              },
              title: "Lo simple es más claro",
              text: "Priorizar la efectividad del mensajes es fundamental. Si un diseño es atractivo pero confunde o distrae, no sirve. El objetivo principal es que el usuario entienda la propuesta de valor y quitar todos los elementos que compitan con la comprensión de este punto.",
              class: "md:col-span-4"
            },
            {
              id: 3,
              img: {
                src: "landing-ventas-soporte.png",
                alt: "Sitio web con un engranaje para seleccionar preferencias"
              },
              title: "Soporte integral",
              text: "Ofrecer un producto completo implica un compromiso más allá de la entrega. Proveer soporte para solucionar inconvenientes construye una relación sólida y de confianza con el cliente a largo plazo.",
              class: "md:col-span-4"
            },
            {
              id: 4,
              img: {
                src: "landing-ventas-audiencia.png",
                alt: "Iconos de cuatro personas, una está destacada"
              },
              title: "Enfoque estratégico en la audiencia",
              text: "Alinear la estrategia de contenido con la rentabilidad del cliente es clave. Priorizar sectores específicos para la landing optimiza el mensaje y direcciona los recursos de marketing hacia audiencias con mayor retorno de inversión.",
              class: "md:col-span-4"
            }
          ]
        }
      }
    ]
  }
]