<script setup lang="ts">
import SectionTitle from '../components/typography/SectionTitle.vue';
import MainText from "../components/typography/MainText.vue";
import ButtonContained from '../components/ButtonContained.vue';

import { reactive } from "vue";

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

const handleSubmit = () => {

  const formData = new FormData();
  formData.append("name", form.name);
  formData.append("email", form.email);
  formData.append("message", form.message);
  formData.append("date", date);

  // send form to sheet
  fetch(sheetURL, {
    method: "POST",
    body: formData
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

</script>

<template>
  <section class="bg-primary-200 dark:bg-primary-400 dark:text-zinc-900 px-4 sm:px-6 lg:px-8 pt-6 lg:pt-8 xl:pt-10 pb-14 sm:pb-12 md:pb-6 lg:pb-8 xl:pb-10 rounded-tl-[120px] md:rounded-bl-[120px] md:rounded-tl-none">
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
              <a href="https://www.linkedin.com/in/paz-spera/" target="_blank" rel="noopener noreferrer" class="p-1 text-primary-900 hover:text-primary-800 transition ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-700  active:text-primary-300 "> 
              <i class="devicon-linkedin-plain text-4xl lg:text-5xl"></i>
            </a>
            <a href="https://github.com/pazspera" target="_blank" rel="noopener noreferrer" class="p-1 text-primary-900 hover:text-primary-800 transition ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-700  active:text-primary-300">
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
              <input type="text" name="name" v-model="form.name" class="block bg-white py-1.5 px-3 rounded-sm text-base text-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary-700 ">
            </div>
            <div class="flex flex-col mb-3">
              <label for="email">Email *</label>
              <input type="text" name="name" v-model="form.email" class="block bg-white py-1.5 px-3 rounded-sm text-base text-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary-700">
            </div>
            <div class="flex flex-col mb-3">
              <label for="message">Mensaje *</label>
              <textarea name="message" v-model="form.message" class="block bg-white py-1.5 px-3 rounded-sm text-base text-zinc-900 resize-none h-32 focus:outline-none focus:ring-2 focus:ring-primary-700"></textarea>
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