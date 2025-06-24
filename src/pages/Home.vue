<script setup>
import Hero from '../sections/Hero.vue';
import AcercaDe from '../sections/AcercaDe.vue';
import Contacto from "../sections/Contacto.vue";
import Proyectos from '../sections/Proyectos.vue';
import { useDocumentTitle } from '../composables/useDocumentTitle';

useDocumentTitle("Paz Spera")

</script>

<template>
  <Hero />
  <Proyectos />
  <AcercaDe />
  <Contacto />
</template>