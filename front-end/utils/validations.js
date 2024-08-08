import { reactive, computed } from "vue";

export default function useFormValidation(userInfo) {
  const errors = reactive({
    name: "",
    email: "",
    password: "",
    lastname: "",
    role: "",
  });

  const required = (field) => (value) => {
    return !!value || `${field} is required`;
  };

  const minLength = (field, length) => (value) => {
    return (
      value.length >= length || `${field} must be at least ${length} characters`
    );
  };

  const emailFormat = () => (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value) || "Invalid email format";
  };

  const validateField = (field) => {
    const value = userInfo[field];
    let error = "";
    switch (field) {
      case "name":
        error = required("name")(value);
        break;
      case "email":
        error = required("email")(value) || emailFormat()(value);
        break;
      case "password":
        error = required("password")(value) || minLength("password", 8)(value);
        break;
      case "lastname":
        error = required("lastname")(value);
        break;
      case "role":
        error = required("role")(value);
        break;
    }
    errors[field] = error !== true ? error : "";
  };

  const isValid = computed(() => {
    return Object.values(errors).every((error) => !error);
  });

  return {
    errors,
    validateField,
    isValid,
  };
}
