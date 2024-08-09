<template>
  <div>
    <h1>Gestion des Utilisateurs</h1>
    <form @submit.prevent="handleSubmit">
      <input v-model="newUser.name" placeholder="Nom" required />
      <input v-model="newUser.lastname" placeholder="Prénom" required />
      <input
        v-model="newUser.email"
        placeholder="Email"
        type="email"
        required
      />
      <input
        v-model="newUser.password"
        placeholder="Password"
        type="password"
        required
      />
      <select v-model="newUser.role">
        <option value="admin">Admin</option>
        <option value="normal">Normal</option>
      </select>
      <button type="submit" :disabled="isLoading">Ajouter</button>
    </form>

    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} {{ user.lastname }} ({{ user.role }})
        <button @click="setCurrentUser(user)">Modifier</button>
        <button @click="deleteUser(user.id)">Supprimer</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useUserStore } from "@/stores/userStore";
import type { IUser } from "~/interfaces/user";

const userStore = useUserStore();
const { users, fetchUsers, addUser, deleteUser, setCurrentUser } = userStore;

const newUser = ref<Partial<IUser>>({
  name: "",
  lastname: "",
  email: "",
  role: "normal", // or "admin"
});
console.log(users);

const isLoading = ref(false);

const handleSubmit = async () => {
  isLoading.value = true;
  await addUser(newUser.value);
  // newUser.value = { name: "", lastname: "", email: "", role: "normal" };
  isLoading.value = false;
};

onMounted(() => {
  fetchUsers();
});
</script>

<style scoped>
/* Add your styles here */
</style>
