<template>
  <div class="root">
    <h2>Create an account</h2>
    <p>
      <input type="text" placeholder="email" v-model="email" />
    </p>
    <p>
      <input type="password" placeholder="password" v-model="password.password" />
    </p>
    <p>
      <input type="password" placeholder="Confirm passwoed" v-model="password.confirmPassword" />
    </p>
    <button @click="submitForm">Submit</button>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  data() {
    return {
      v$: useVuelidate(),
      email: "",
      password: {
        password: "",
        confirmPassword: "",
      },
    };
  },
  validations() {
    return {
      email: { required },
      password: {
        password: { required },
        confirmPassword: { required },
      },
    };
  },
  methods: {
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        alert("Form submitted");
      } else {
        alert("Form failed validation");
      }
    },
  },
};
</script>

<style></style>
