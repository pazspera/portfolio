export type SliderImage = {
  id: number,
  src: string,
  alt: string,
}

export interface ImageSliderContent {
  images: SliderImage[],
  caption: string,
}