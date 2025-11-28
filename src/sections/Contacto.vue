<script setup lang="ts">
import SectionTitle from '../components/typography/SectionTitle.vue';
import MainText from "../components/typography/MainText.vue";
import ButtonContained from '../components/ButtonContained.vue';
import ErrorMessage from "../components/ErrorMessage.vue"

import { reactive, computed, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import emailjs from "@emailjs/browser";
import { useRouter } from "vue-router";
import { ContactForm } from '../types/contact';

const date = new Date().toLocaleDateString();
const sheetURL = import.meta.env.VITE_SHEET_URL;
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const router = useRouter(); 

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

      if (!res.ok) throw new Error("Error al enviar al Google Sheet");

      // send email
      const emailRes = await emailjs.send(
        serviceID,
        templateID,
        {
          user_name: form.name,
          user_email: form.email,
          message: form.message,
          date: form.date,
        },
        publicKey
      );

      if(emailRes.status !== 200) {
        throw new Error(`Error al enviar correo: ${res.status}: ${res.text}`);
      }

      // reset form
      form.name = "";
      form.email = "";
      form.message = "";

      // navigate to thank you page
      router.push({ name: "gracias" });

    } catch (error) {
      submitError.value = `Algo falló en el envío. No sos vos, soy yo. Podés escribirme directamente a <a href="mailto:spera.paz@gmail.com" class="underline">spera.paz@gmail.com</a>.`;
    } finally {
      isSubmitting.value = false;
    }
  } else {
    // in case the validations don't pass
    isSubmitting.value = false;
  }

}

</script>

<template>
  <section
    class="bg-primary-200 dark:bg-primary-400 dark:text-zinc-900 px-4 sm:px-6 lg:px-8 pt-6 lg:pt-8 xl:pt-10 pb-14 sm:pb-12 md:pb-6 lg:pb-8 xl:pb-10 lg:my-8 rounded-tl-[120px] md:rounded-bl-[120px] md:rounded-tl-none" id="contacto">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="flex items-center max-w-sm mx-auto ">
          <!-- Texto -->
          <div class="text-center">
            <SectionTitle class="text-primary-900">
              Contacto
            </SectionTitle>
            <MainText>
              Las mejores ideas empiezan con una conversación. Completá el formulario y veamos cómo darle forma juntos.
            </MainText>
            <!-- Links redes -->
            <div class="flex gap-4 items-center justify-center py-4">
              <a href="https://www.linkedin.com/in/paz-spera/" target="_blank" rel="noopener noreferrer"
                class="p-1 text-primary-900 hover:text-primary-800 transition ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-700  active:text-primary-300 ">
                <svg class="w-10 h-10 lg:w-12 lg:h-12" viewBox="0 0 128 128">
                  <path fill="currentColor" fill-rule="evenodd" d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"></path>
                </svg>
              </a>
              <a href="https://github.com/pazspera" target="_blank" rel="noopener noreferrer"
                class="p-1 text-primary-900 hover:text-primary-800 transition ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-700  active:text-primary-300">
                <svg viewBox="0 0 128 128" class="w-10 h-10 lg:w-12 lg:h-12">
                  <g fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <!-- Form -->
        <div class="md:pl-4">
          <form @submit.prevent="handleSubmit">
            <div class="flex flex-col mb-3">
              <label for="name">Nombre *</label>
              <input type="text" name="name" id="name" v-model="form.name" @blur="v$.name.$touch()"
                class="block bg-white py-1.5 px-3 rounded-sm text-base text-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary-700 ">
              <ErrorMessage v-if="v$.name.$dirty && v$.name.$error">
                Uh, me perdí tu nombre. ¿Lo podrías volver a escribir?
              </ErrorMessage>
            </div>
            <div class="flex flex-col mb-3">
              <label for="email">Email *</label>
              <input type="text" name="email" id="email" v-model="form.email" @blur="v$.email.$touch()"
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
              <textarea name="message" id="message" v-model="form.message" @blur="v$.message.$touch()"
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
              <ButtonContained class="w-full" type="submit" :loading="isSubmitting">
                Enviar
              </ButtonContained>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>