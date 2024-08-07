<script setup lang="ts">
import AuthFormTemplate from "../components/AuthFormTemplate.vue";
import { useCounterStore } from "~/stores/Counter";
const store = useCounterStore();
</script>

<template>
  <main class="w-full h-screen m-auto flex">
    <AuthFormTemplate
      title="Login Page"
      btn_submit="Login"
      redirect="register"
    />
  </main>
  <!-- <h1>count = {{ store.count }}</h1>
  <button @click="store.increment">increment</button> -->
</template>
