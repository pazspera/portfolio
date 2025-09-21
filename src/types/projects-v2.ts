/* 

1. Definir los tipos de contenido de cada sección
2. Asignar un tipo a cada sección
3. Crear tipo unión ProjectSection
4. Crear tipo final Project

*/

import type { Tech } from "./techChips";

export type Challenge = {
  id: number,
  text: string,
}

export type MethodologyItem = {
  id: number,
  title: string,
  text: string,
}

export interface ProjectHeroContent {
  imgSrc: string,
  imgAlt: string,
  title: string,
  text: string,
}

export interface ProjectSummaryContent {
  techStack: Tech[];
  role: string,
  client: string,
  duration: string,
}

export interface ProjectChallengeContent {
  challenges: Challenge[],
}

export interface ProjectMethodologyContent {
  items: MethodologyItem[];
}

