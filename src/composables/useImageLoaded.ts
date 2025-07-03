import { ref } from "vue";

export function useImageLoaded() {
/* 
1. ref to check if img is loaded, by default false
2. wait for the load effect to complete
*/

const isLoading = ref(true);

const handleLoad = () => {
  isLoading.value = false;
}

return { isLoading, handleLoad }

}