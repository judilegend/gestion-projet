<template>
  <main class="flex justify-center items-center h-screen">
    <UserAuthForm
      buttonText="Login"
      :submitForm="loginUser"
      redirect="register"
    />
  </main>
</template>

<script setup>
import UserAuthForm from "~/components/UserAuthForm.vue";
import { ref } from "vue";

const loginUser = (loggingInfo) => {
  alert("You clik a buttom");
};
</script>
