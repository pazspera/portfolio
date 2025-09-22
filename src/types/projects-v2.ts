/* 

1. Definir los tipos de contenido de cada sección
2. Asignar un tipo a cada sección
3. Crear tipo unión ProjectSection
4. Crear tipo final Project

*/

import type { Tech } from "./techChips";
import { ImageProps } from "./general";

export type ChallengeItem = {
  id: number,
  text: string,
}

export type ContentItem = {
  id: number,
  title: string,
  text: string,
}

export type TakeawayItem = {
  id: number,
  img: {
    src: string,
    alt: string,
  },
  title: string,
  text: string,
  class?: string,
}

// ProjectHero
export interface ProjectHeroContent {
  img: ImageProps,
  title: string,
  text: string,
}

// ProjectResumen
export interface ProjectSummaryContent {
  techStack: Tech[];
  role: string,
  client: string,
  duration: string,
}

// ProjectDesafio
export interface ProjectChallengeContent {
  challenges: ChallengeItem[],
}

// ProjectEnfoque y ProjectImpacto
// son iguales, se pueden unificar en un solo componente
export interface ProjectListSection {
  items: ContentItem[],
  title: string,
  class?: string, 
}

// ProjectConclusion
export interface ProjectTakeawaysContent {
  items: TakeawayItem[],
}