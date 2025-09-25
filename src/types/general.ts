import { RouteLocationRaw } from "vue-router";

export interface ImageProps {
  src: string,
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