import { RouteLocationRaw } from "vue-router";

export interface ImageProps {
  src: string,
  alt: string,
}

export interface IndividualImageSrc {
  src: string,
  width: string,
}

export interface ImageSrcSet {
  srcSet: IndividualImageSrc[],
  srcSetWebp?: IndividualImageSrc[],
  sizes: string,
  srcDefault: string,
  alt: string,
}

export interface ButtonContained {
  href?: string,
  type?: "button" | "submit" | "reset",
  loading?: boolean,
  size?: "small" | "medium",
  to?: RouteLocationRaw,
}

export interface ButtonText {
  href?: string,
  type?: "button" | "submit" | "reset",
  to?: RouteLocationRaw
}