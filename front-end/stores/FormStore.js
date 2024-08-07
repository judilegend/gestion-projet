import { defineStore } from "pinia";

export const useFormStore = defineStore("form", () => {
  const isLogin = ref(true);
  const name = ref("");
  const lastname = ref("");
  const email = ref("");
  const password = ref("");

  const toggleForm = () => {
    isLogin.value = !isLogin.value;
  };

  const handleSubmit = () => {
    if (isLogin.value) {
      // Handle login
      console.log("Login:", email.value, password.value);
    } else {
      // Handle registration
      console.log(
        "Register:",
        name.value,
        lastname.value,
        email.value,
        password.value
      );
    }
  };

  return {
    isLogin,
    name,
    lastname,
    email,
    password,
    toggleForm,
    handleSubmit,
  };
});
