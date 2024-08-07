<script setup lang="ts">
import AuthFormTemplate from "../components/AuthFormTemplate.vue";
</script>

<template>
  <main class="w-full h-screen m-auto flex">
    <AuthFormTemplate
      title="Register Page"
      redirect="login"
      btn_submit="Register"
    />
  </main>
</template>
