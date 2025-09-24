import { computed } from "vue";

export const useImageUrl = (imageName: string) => {
  const imgUrl = computed(()=> {
    return new URL(`../assets/${imageName}`, import.meta.url).href;
  })

  return { imgUrl };
}