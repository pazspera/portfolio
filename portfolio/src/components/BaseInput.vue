<template>
  <label class="form-label" v-if="label">{{ label }}</label>
  <input class="form-control" v-bind="$attrs" :value="modelValue" @input="$emit('update:modelValue', '$event.target.value')" />
</template>

<script>
export default {
  name: "BaseInput",
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
