<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, watch, nextTick } from "vue";
import { useNavbarStore } from "../stores/navbar";

const navbarStore = useNavbarStore();
const progress = ref(0);
const rafId = ref<number | null>(null);

// top: usar la altura del navbar si existe, si está oculto usar 0
const top = computed(() => {
  const h = Number(navbarStore.height || 0);
  return `${Math.max(0, h)}px`;
});

// NOTA: NO usamos navbarStore.isVisible para ocultar la barra.
// La barra debe estar siempre presente (sticky/fixed) en la parte superior.
const updateProgress = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
  const total = Math.max(0, scrollHeight - clientHeight);
  progress.value = total > 0 ? (scrollTop / total) * 100 : 0;
};

const onScroll = () => {
  if (rafId.value != null) cancelAnimationFrame(rafId.value);
  rafId.value = requestAnimationFrame(() => {
    updateProgress();
    rafId.value = null;
  });
};

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  nextTick(() => updateProgress());
  // reaccionar a cambios en la altura del navbar para recalcular position/progreso
  watch(() => navbarStore.height, () => {
    // recalcular progreso y asegurar repaint estable
    nextTick(updateProgress);
  }, { immediate: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  if (rafId.value != null) cancelAnimationFrame(rafId.value);
});
</script>

<template>
  <!-- siempre renderizar la barra; top viene del computed -->
  <div
    class="reading-progress visible"
    :style="{ top }"
    role="progressbar"
    :aria-valuenow="Math.round(progress)"
  >
    <div class="reading-progress__bar" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<style scoped>
.reading-progress {
  position: fixed;
  left: 0;
  right: 0;
  height: 6px;
  pointer-events: none;
  transform: translateY(-6px);
  opacity: 0;
  transition: transform 200ms ease, opacity 200ms ease;
  will-change: transform, opacity;
  z-index: 1100; /* por encima del navbar */
}

/* siempre visible, pero animada sutilmente con transform/opacity */
.reading-progress.visible {
  transform: translateY(0);
  opacity: 1;
}

.reading-progress__bar {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-600, #06b6d4), var(--primary-400, #60a5fa));
  width: 0%;
  transition: width 120ms linear;
}
</style>