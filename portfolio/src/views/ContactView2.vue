<template>
  <div>
    <section id="contacto">
      <div class="container">
        <div class="row">
          <div class="col mb-5">
            <h2>Contacto</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-6 mb-5">
            <form target="_blank" class="contact-form" action="https://formsubmit.co/7ceabb42100b9b4fb07ac102ce7f9e7b" method="POST">
              <div class="mb-3">
                <BaseInput type="text" label="Nombre *" v-model="form.name" />
              </div>
              <div class="mb-3">
                <BaseInput type="email" label="Email *" v-model="form.email" />
              </div>
              <div class="mb-3">
                <BaseTextArea label="Mensaje *" />
              </div>
              <div class="form-text">* Campos requeridos</div>
              <button type="submit" class="btn btn__primary btn__submit mt-3">Enviar</button>
              <div class="contact-form-loader d-none my-5 d-flex justify-content-center">
                <img :="imgSpinner" />
              </div>
              <div class="contact-form-response d-none my-5 d-flex justify-content-center">
                <p>Tu mensaje fue enviado</p>
              </div>
            </form>

            <pre>{{ form }}</pre>
          </div>
          <div class="col-12 col-lg-5 offset-lg-1 py-4">
            <p>
              ¿Dudas, comentarios, ganas de charlar sobre el maravilloso mundo del desarrollo frontend? Pueden completar el formulario y una paloma mensajera digital me traerá el mensaje a la
              brevedad.
            </p>
            <p>
              También pueden enviarme unas señales de humo a
              <a class="link" href="mailto:spera.paz@gmail.com?Subject=Contacto%Portfolio" target="_blank" rel="noopener noreferrer">spera.paz@gmail.com</a>.
            </p>
            <div class="social-links mt-5">
              <a class="social-links__icons" href="https://github.com/pazspera" rel="noreferrer" target="_blank"><i class="devicon-github-original"></i></a>
              <a class="social-links__icons" href="https://www.linkedin.com/in/paz-spera/" rel="noreferrer" target="_blank"><i class="devicon-linkedin-plain"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";
import BaseTextArea from "@/components/BaseTextArea.vue";

export default {
  name: "ContactView",
  components: {
    BaseInput,
    BaseTextArea,
  },
  mounted() {
    document.title = "Contacto - Paz Spera";
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      imgSpinner: {
        src: "https://raw.githubusercontent.com/pazspera/portfolio/9b22274cf3b6cc885099a9be202e7aa179a216db/portfolio/src/assets/img/tail-spin.svg",
        alt: "Cargando",
      },
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

label {
  @include main-text;
}

textarea {
  resize: none;
}

.form-control {
  border-radius: 0;
}

.social-links {
  display: flex;
  justify-content: space-evenly;
}

.social-links i {
  @include icon-format;
}

.social-links__icons {
  text-decoration: none;
  color: $black;
  transition: all 0.25s ease-in-out;

  &:hover {
    color: $primary;
    transition: all 0.25s ease-in-out;
  }
}

// Reset color inputs formuarios
.form-control:focus {
  border-color: $primary--light;
  box-shadow: 0 0 0 0.25rem $primary--light;
}

// Estilos validaciones
.contact-form [required]:valid {
  border: thin solid $success;
}

.contact-form [required]:invalid {
  border: thin solid $error;
}

.contact-form-error {
  font-size: $size7;
  background-color: $error;
  color: $white;
  transition: all 800ms ease;
  padding: 0.5rem;
  display: flex;
  width: 100%;
  text-align: center;
}

.none {
  display: none;
}

.contact-form-error.is-active {
  display: block;
  animation: show-message 1s 1 normal 0s ease-out both;
}

@keyframes show-message {
  0% {
    visibility: hidden;
    opacity: 0;
  }

  100% {
    visibility: visible;
    opacity: 1;
  }
}
</style>
