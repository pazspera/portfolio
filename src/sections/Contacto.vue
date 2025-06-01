<script setup lang="ts">
import SectionTitle from '../components/typography/SectionTitle.vue';
import MainText from "../components/typography/MainText.vue";
import ButtonContained from '../components/ButtonContained.vue';
import ErrorMessage from "../components/ErrorMessage.vue"

import { reactive, computed, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

type ContactForm = {
  name: string,
  email: string,
  message: string,
  date: string
}

const date = new Date().toLocaleDateString();
const sheetURL = import.meta.env.VITE_SHEET_URL;

const form = reactive<ContactForm>({
  name: "",
  email: "",
  message: "",
  date: date
})

const validationRules = computed(() => {
  return {
    name: { required },
    email: { required, email },
    message: { required },
  }
})

const v$ = useVuelidate(validationRules, form);
const submitError = ref<string | null>(null);
const isSubmitting = ref(false);

const handleSubmit = async () => {
  submitError.value = null;
  isSubmitting.value = true;

  const result = await v$.value.$validate();

  if (result) {
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("message", form.message);
      formData.append("date", date);

      // send form to sheet
      const res = await fetch(sheetURL, {
        method: "POST",
        body: formData
      });

      if (!res.ok) throw new Error("Error al enviar el formulario");

    } catch (error) {
      submitError.value = `Algo falló en el envío. No sos vos, soy yo. Podés escribirme directamente a <a href="mailto:spera.paz@gmail.com" class="underline">spera.paz@gmail.com</a>.`;
    }
  }

}

</script>

<template>
  <section
    class="bg-primary-200 dark:bg-primary-400 dark:text-zinc-900 px-4 sm:px-6 lg:px-8 pt-6 lg:pt-8 xl:pt-10 pb-14 sm:pb-12 md:pb-6 lg:pb-8 xl:pb-10 rounded-tl-[120px] md:rounded-bl-[120px] md:rounded-tl-none">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="flex items-center max-w-sm mx-auto ">
          <!-- Texto -->
          <div class="text-center">
            <SectionTitle text="Contacto" class="text-primary-900" />
            <MainText>
              Las mejores ideas empiezan con una conversación. Completá el formulario y veamos cómo darle forma juntos.
            </MainText>
            <!-- Links redes -->
            <div class="flex gap-4 items-center justify-center py-4">
              <a href="https://www.linkedin.com/in/paz-spera/" target="_blank" rel="noopener noreferrer"
                class="p-1 text-primary-900 hover:text-primary-800 transition ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-700  active:text-primary-300 ">
                <i class="devicon-linkedin-plain text-4xl lg:text-5xl"></i>
              </a>
              <a href="https://github.com/pazspera" target="_blank" rel="noopener noreferrer"
                class="p-1 text-primary-900 hover:text-primary-800 transition ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-700  active:text-primary-300">
                <i class="devicon-github-original text-4xl lg:text-5xl"></i>
              </a>
            </div>
          </div>
        </div>
        <!-- Form -->
        <div class="md:pl-4">
          <form @submit.prevent="handleSubmit">
            <div class="flex flex-col mb-3">
              <label for="name">Nombre *</label>
              <input type="text" name="name" v-model="form.name" @blur="v$.name.$touch()"
                class="block bg-white py-1.5 px-3 rounded-sm text-base text-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary-700 ">
              <ErrorMessage v-if="v$.name.$dirty && v$.name.$error">
                Uh, me perdí tu nombre. ¿Lo podrías volver a escribir?
              </ErrorMessage>
            </div>
            <div class="flex flex-col mb-3">
              <label for="email">Email *</label>
              <input type="text" name="name" v-model="form.email" @blur="v$.email.$touch()"
                class="block bg-white py-1.5 px-3 rounded-sm text-base text-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary-700">
              <span v-if="v$.email.$dirty && v$.email.$error" class="mt-2">
                <ErrorMessage v-if="v$.email.required.$invalid">
                  Necesito un email para ponerme en contacto. Mi paloma mensajera está de vacaciones
                </ErrorMessage>
                <ErrorMessage v-if="v$.email.email.$invalid">
                  Mmm... ese formato es un poco extraño. Debería ser parecido a nombre@dominio.com
                </ErrorMessage>
              </span>
            </div>
            <div class="flex flex-col mb-3">
              <label for="message">Mensaje *</label>
              <textarea name="message" v-model="form.message" @blur="v$.message.$touch()"
                class="block bg-white py-1.5 px-3 rounded-sm text-base text-zinc-900 resize-none h-32 focus:outline-none focus:ring-2 focus:ring-primary-700"></textarea>
              <ErrorMessage v-if="v$.message.$dirty && v$.message.$error">
                Me dejaste con la intriga. ¿Qué ibas a decir?
              </ErrorMessage>
            </div>
            <div class="my-2">
              <span class="text-sm">* Campos requeridos</span>
            </div>
            <div class="m-4">
              <ErrorMessage v-if="submitError" :content="submitError" html/>
            </div>
            <div class="mt-6 flex">
              <ButtonContained label="Enviar" class="w-full" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>