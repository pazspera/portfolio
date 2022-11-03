<template>
  <section id="contacto">
    <div class="container">
      <div class="row">
        <div class="col mb-5">
          <h2>Contacto</h2>
        </div>
      </div>
      <div class="row">
        <!-- Formulario -->
        <div class="col-12 col-lg-6 mb-5">
          <Form class="contact-form" @submit="submitForm">
            <!-- Date -->
            <input type="hidden" name="date" v-model="form.date" />
            <!-- Name -->
            <div class="mb-3">
              <label for="name" class="form-label">Nombre*</label>
              <Field type="text" name="name" class="form-control" v-model="form.name" :rules="validateName" />
              <span class="contact-form-error"><ErrorMessage name="name" /></span>
            </div>
            <!-- Email -->
            <div class="mb-3">
              <label for="email" class="form-label">Email*</label>
              <Field type="email" name="email" class="form-control" v-model="form.email" :rules="validateEmail" />
              <span class="contact-form-error"><ErrorMessage name="email" /></span>
            </div>
            <!-- Message -->
            <div class="mb-3">
              <label for="message" class="form-label">Mensaje*</label>
              <Field as="textarea" name="message" cols="30" rows="6" class="form-control" v-model="form.message" :rules="validateMessage"></Field>
              <span class="contact-form-error"><ErrorMessage name="message" /></span>
            </div>
            <div class="form-text">* Campos requeridos</div>
            <!-- Submit -->
            <button type="submit" class="btn btn__primary btn__submit mt-3">Enviar</button>
            <!-- Loader -->
            <div class="contact-form-loader d-none my-4 d-flex justify-content-center">
              <img :="imgSpinner" />
            </div>
            <!-- Response -->
            <div class="contact-form-response my-3 d-none text-center"></div>
          </Form>
        </div>
        <!-- Texto y redes -->
        <div class="col-12 col-lg-5 offset-lg-1 py-4">
          <p>
            ¿Dudas, comentarios, ganas de charlar sobre el maravilloso mundo del desarrollo frontend? Pueden completar el formulario y una paloma mensajera digital me traerá el mensaje a la brevedad.
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
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";

let currentDate = new Date().toLocaleDateString();
let scriptURL = "https://script.google.com/macros/s/AKfycbw2yfD0SotEHhYZUgI976KahCowB7Hrdu-hgeeBOSgSllirIBsM3oBhyb5NINoxumpI/exec";
let formURL = "https://formsubmit.co/ajax/7ceabb42100b9b4fb07ac102ce7f9e7b";

export default {
  name: "ContactView",
  components: {
    Form,
    Field,
    ErrorMessage,
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
        date: currentDate,
      },
      imgSpinner: {
        src: "https://raw.githubusercontent.com/pazspera/portfolio/9b22274cf3b6cc885099a9be202e7aa179a216db/portfolio/src/assets/img/tail-spin.svg",
        alt: "Cargando",
      },
    };
  },
  methods: {
    validateName(value) {
      if (!value) {
        return "El campo Nombre es requerido";
      }
      return true;
    },
    validateEmail(value) {
      let regexEmail = /\S+@\S+\.\S+/;

      if (!value) {
        return "El campo Email es requerido";
      }

      if (!regexEmail.test(value)) {
        return "Formato de email inválido";
      }
      return true;
    },
    validateMessage(value) {
      if (!value) {
        return "El campo Mensaje es requerido";
      }

      return true;
    },
    resetForm() {
      this.form.name = null;
      this.form.email = null;
      this.form.message = null;
    },
    saveToSheet(formData) {
      fetch(scriptURL, {
        method: "POST",
        body: formData,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
    submitForm(values) {
      let $loader = document.querySelector(".contact-form-loader");
      let $response = document.querySelector(".contact-form-response");

      // Muestra loader
      $loader.classList.remove("d-none");

      // Crea un FormData con los values del data
      // para enviar por fetch, incluyendo date
      let formData = new FormData();
      formData.append("date", this.form.date);
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("message", values.message);

      // Fetch envío formulario
      fetch(formURL, {
        method: "POST",
        body: formData,
      })
        .then((response) => (response.ok ? response.json() : Promise.reject(response)))
        .then((formData) => this.saveToSheet(formData))
        .then(() => {
          // Envía a thank you page
          this.$router.push("/thank-you");
          // Oculta loader
          // $loader.classList.add("d-none");
          // Muestra respuesta envío
          // $response.classList.remove("d-none");
          // let fetchResponse = json.message || "Mensaje enviado";
          // $response.innerHTML = `<p>${fetchResponse}</p>`;
          // Reset formulario
          // this.resetForm();
        })
        .catch((err) => {
          $loader.classList.add("d-none");
          let message = err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
          $response.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
        });
    },
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
.contact-form-error {
  color: $error;
  font-size: $size6;
}

input.error,
input.error:focus,
textarea.error,
textarea.error:focus {
  border-color: $error;
}
input.valid,
input.valid:focus,
textarea.valid,
textarea.valid:focus {
  border-color: $primary;
}
</style>
