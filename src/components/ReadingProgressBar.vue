<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useNavbarStore } from "../stores/navbar";

const progressBarWidth = ref(0);
const progressBarTop = ref(0);

const navbarStore = useNavbarStore();

const calculateScrollProgress = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

  // total of scrollable content
  // total document height - window visible height
  const totalScrollableHeight = scrollHeight - clientHeight;

  if(totalScrollableHeight > 0) {
    progressBarWidth.value =(scrollTop / totalScrollableHeight) * 100;
  } else {
    progressBarWidth.value = 0;
  }

  // adjust top and z-index of progress bar based on the store
  if(navbarStore.isVisible) {
    progressBarTop.value = navbarStore.height;
  } else {
    progressBarTop.value = 0;
  }

  console.log('RPB - isVisible:', navbarStore.isVisible, 'height:', navbarStore.height, 'top:', progressBarTop.value);
}

onMounted(() => {
  window.addEventListener("scroll", calculateScrollProgress);
  calculateScrollProgress();

  // watch changes in store
  watch([()=> navbarStore.height, ()=> navbarStore.isVisible], ()=> {
    calculateScrollProgress();
  }, { immediate: true })

})

onUnmounted(() => {
  window.removeEventListener("scroll", calculateScrollProgress);
})

</script>

<template>
  <div class="reading-progress-bar-container bg-gray-500" :style="{ top: progressBarTop + 'px !important' }">
    <div class="reading-progress-bar bg-primary-500" :style="{ width: progressBarWidth + '%' }"></div>
  </div>
</template>

<style scoped>
.reading-progress-bar-container {
  position: fixed;
  left: 0;
  width: 100%;
  height: 6px;
  transition: top 0.3s ease-in-out, z-index 0s;
  z-index: 1001;
}

.reading-progress-bar {
  height: 100%;
  transition: width 0.1s ease-out;
}
</style>