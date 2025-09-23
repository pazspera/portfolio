<script setup>
import Hero from '../sections/Hero.vue';
import AcercaDe from '../sections/AcercaDe.vue';
import Contacto from "../sections/Contacto.vue";
import Proyectos from '../sections/Proyectos.vue';
import { useDocumentTitle } from '../composables/useDocumentTitle';

useDocumentTitle("Paz Spera - Inicio")

</script>

<template>
  <section>
    <Hero />
    <Proyectos />
    <AcercaDe />
    <Contacto />
  </section>
</template>