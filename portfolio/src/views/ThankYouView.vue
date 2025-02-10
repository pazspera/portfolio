<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="thank-you col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3  d-flex flex-column justify-content-center align-items-center">
          <div class="thank-you__message image--shadow p-3">
            <div class="thank-you__content p-3">
              <h1 class="text-center mb-4">¡Tu mensaje fue enviado!</h1>
              <p class="text-center mb-4">Me pondré en contacto a la brevedad. Mientras tanto, que la fuerza te acompañe.</p>
              <router-link :to="{ name: 'home' }" class="btn btn__secondary">Volver</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "ThankYouView",
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.thank-you {
  display: flex;
  justify-content: center;
  align-content: center;
  min-height: 90vh;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__message {
    align-self: center;
    border: 1px solid black;
  }
}
</style>
