<template>
  <label class="form-label" v-if="label">{{ label }}</label>
  <textarea v-bind="$attrs" class="form-control" v-model="form.message" required></textarea>
</template>

<script>
export default {
  name: "BaseTextArea",
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<style></style>
