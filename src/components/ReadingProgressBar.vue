<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const progressBarWidth = ref(0);

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
}

onMounted(() => {
  window.addEventListener("scroll", calculateScrollProgress);
  calculateScrollProgress();
})

onUnmounted(() => {
  window.removeEventListener("scroll", calculateScrollProgress);
})

</script>

<template>
  <div class="reading-progress-bar-container bg-gray-500">
    <div class="reading-progress-bar bg-primary-500" :style="{ width: progressBarWidth + '%' }"></div>
  </div>
</template>

<style scoped>
.reading-progress-bar-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  z-index: 1000;
}

.reading-progress-bar {
  height: 100%;
  transition: width 0.1s ease-out;
}
</style>