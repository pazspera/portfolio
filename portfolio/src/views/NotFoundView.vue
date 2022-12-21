<template>
  <section class="not-found">
    <div class="container">
      <div class="col d-flex flex-column justify-content-center align-items-center">
        <h1>¡Oh, no! La página no está disponible</h1>
        <p>Pero nunca es tarde para volver a empezar.</p>
        <router-link :to="{ name: 'home' }" class="btn btn__primary">Volver al inicio</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "notFound",
};
</script>

<style>
.not-found {
  min-height: 100vh;
}
</style>
