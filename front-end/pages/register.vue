<script setup>
import UserAuthForm from "~/components/UserAuthForm.vue";

const registerUser = (registerInfo) => {
  console.log("User register");
};
</script>

<template>
  <main class="flex justify-center items-center h-screen">
    <UserAuthForm
      buttonText="Register"
      hasName
      hasLastName
      hasRole
      redirect="login"
      :submitForm="registerUser"
    />
  </main>
</template>
