import { computed } from "vue";

export const useImageUrl = (imageInfo: string) => {
  const imgUrl = computed(()=> {
      return new URL(`../assets/images/${imageInfo}`, import.meta.url).href;
    })
  
  return { imgUrl };
}