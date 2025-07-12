import { defineStore } from "pinia";
import { ref } from "vue";

export const useNavbarStore = defineStore('navbar', () => {
  const height = ref(0);
  const isVisible = ref(true);

  function setHeight(newHeight: number) {
    height.value = newHeight;
  }

  function setIsVisible(newVisibility: boolean) {
    isVisible.value = newVisibility;
  }

  return { height, isVisible, setHeight, setIsVisible }
}) 