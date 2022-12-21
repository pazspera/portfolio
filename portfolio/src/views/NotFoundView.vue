<template>
  <section>
    <div class="container d-flex justify-content-center align-items-center">
      <div class="col">
        <h1>¡Oh, no! La página no está disponible</h1>
        <p>Pero nunca es tarde para volver a empezar.</p>
        <router-link :to="{ name: 'home'}" class="btn btn__primary">Volver al inicio</router-link>
      </div>
    </div>
  </section>
  <h1>404</h1>
  <h2>Page not found</h2>
</template>

<script>
export default {
  name: "notFound",
};
</script>

<style></style>
