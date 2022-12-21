<template>
  <section class="not-found">
    <div class="container">
      <div class="col d-flex flex-column justify-content-center align-items-center col-not-found">
        <img :="errorImg" />
        <h1 class="mb-3">¡Oh, no! La página no está disponible</h1>
        <p>Pero nunca es tarde para volver a empezar.</p>
        <router-link :to="{ name: 'home' }" class="btn btn__primary mt-4">Volver al inicio</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "notFound",
  mounted() {
    document.title = "404 - Paz Spera";
  },
  data() {
    return {
      errorImg: {
        src: "https://raw.githubusercontent.com/pazspera/portfolio/46c0d336a5b9800036bcfe1a5862b49577f04e65/portfolio/src/assets/img/error.svg",
        alt: "Icono de error",
      },
    };
  },
};
</script>

<style scoped>
.col-not-found {
  height: 70vh;
}
</style>
