<script setup>
import Hero from '../sections/Hero.vue';
import Proyectos from '../sections/Proyectos.vue';
import { useDocumentTitle } from '../composables/useDocumentTitle';
import { defineAsyncComponent } from 'vue';
const AcercaDe = defineAsyncComponent(()=> import('../sections/AcercaDe.vue'));
const Contacto = defineAsyncComponent(()=> import("../sections/Contacto.vue"));

useDocumentTitle("Paz Spera - Inicio")

</script>

<template>
  <section>
    <Hero />
    <Proyectos />
    <Suspense>
      <AcercaDe />
    </Suspense>
    <Suspense>
      <Contacto />
    </Suspense>
  </section>
</template>