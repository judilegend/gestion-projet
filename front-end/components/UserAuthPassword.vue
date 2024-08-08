<template>
  <div>
    <label :for="id" class="block mb-2">{{ label }}</label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :id="id"
      :type="showPassword ? 'text' : 'password'"
      class="border p-2"
      :class="{ 'border-red-500': error }"
    />
    <span v-if="error" class="text-red-500 text-sm">{{ error }}</span>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: "Password",
  },
  error: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);
const id = ref(`password-${Math.random().toString(36).substr(2, 9)}`);
const showPassword = ref(false);
</script>

<style scoped>
/* Styles here */
</style>
