<template>
  <main class="flex justify-center items-center h-screen">
    <UserAuthForm
      buttonText="Login"
      :submitForm="loginUser"
      redirect="register"
    />
  </main>
</template>

<script>
import UserAuthForm from "~/components/UserAuthForm.vue";

export default {
  components() {
    UserAuthForm;
  },
  methods: {
    loginUser(loginInfo) {
      this.$auth.loginWith("local", {
        data: loginInfo,
      });

      console.log("Sbibcikckj", loginInfo);
    },
  },
};
</script>
