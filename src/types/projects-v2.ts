import type { Tech } from "./techChips";
import { ImageProps } from "./general";
import type { ImageSliderContent } from "./imageSlider";
import { ImageCompareContent } from "./imageCompare";

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
  img: ImageProps,
  title: string,
  text: string,
  class?: string,
}

export type RoleCard = {
  role: string,
  client: string,
  duration: string,
  url?: string,
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
  summary: string,
  roleCard: RoleCard,
  url?: string,
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
  class?: string,
}

// ProjectSection
// Union types of possible sections
// It's defining the type of objects that
// can exist in a section
export type ProjectSection =
| { type: "ProjectHero", content: ProjectHeroContent }
| { type: "ProjectSummary", content: ProjectSummaryContent } 
| { type: "ProjectChallenge", content: ProjectChallengeContent }
| { type: "ProjectMethodology", content: ProjectListSection }
| { type: "ProjectImpact", content: ProjectListSection }
| { type: "ProjectTakeaways", content: ProjectTakeawaysContent }
| { type: "ProjectImageSlider", content: ImageSliderContent}
| { type: "ProjectImageCompare", content: ImageCompareContent }

// Master Project type
export interface Project {
  id: string,
  slug: string,
  title: string,
  sections: ProjectSection[],
}