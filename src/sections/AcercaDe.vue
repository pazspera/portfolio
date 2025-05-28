<script setup lang="ts">
import SectionTitle from '../components/typography/SectionTitle.vue';
import HighlightText from '../components/typography/HighlightText.vue';
import MainText from "../components/typography/MainText.vue";
</script>

<template>
  <section class="py-12 lg:py-16 2xl:py-20">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-12">
        <div class="md:col-span-10 lg:col-span-9">
          <SectionTitle text="Acerca de" />
          <HighlightText>
            Diseñar, escribir y programar son medios, no fines. <br> Lo importante es construir soluciones que funcionen.
          </HighlightText>
          <MainText>
            Mi enfoque combina tres disciplinas (UX/UI, desarrollo frontend y copywriting) para un mismo fin: que cada proyecto tenga impacto.
          </MainText>
          <MainText>
            El primer paso es entender el negocio: qué necesita lograr y a quién se dirige. A partir de eso, diseño y redacto contenido que conecte con esa audiencia, con foco en claridad, persuasión y conversión.
          </MainText>  
          <MainText>
            Después, valido con usuarios reales para asegurarme de que el mensaje llegue y detectar puntos de fricción. Porque una solución efectiva no se improvisa: se construye, se prueba y se ajusta hasta que convierte.
          </MainText>  
          <MainText class="font-semibold text-primary-700 dark:text-primary-500">
            Iterando evolucionamos.
          </MainText>  
        </div>
      </div>
    </div>
  </section>
</template>