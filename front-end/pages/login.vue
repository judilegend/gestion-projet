<script setup lang="ts">
import AuthFormTemplate from "../components/AuthFormTemplate.vue";
</script>

<template>
  <main class="w-full h-screen m-auto flex">
    <AuthFormTemplate
      title="Login Page"
      btn_submit="Login"
      redirect="register"
    />
  </main>
</template>
