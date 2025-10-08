export const createStaticImageRoute = (imageInfo: string) => {
  return new URL(`../assets/images/${imageInfo}`, import.meta.url).href;
}