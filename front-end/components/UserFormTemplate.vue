<template>
  <div class="flex flex-col mt-5">
    <div class="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
      <h1 class="text-slate-700 text-xl mb-2">Operation chez User</h1>
      <form class="flex flex-col w-[250px]">
        <input
          placeholder="Name"
          class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="text"
          v-model="store.name"
        />
        <input
          placeholder="Last Name"
          class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="text"
          v-model="store.lastname"
        />
        <input
          placeholder="Email"
          class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="email"
          v-model="store.email"
        />
        <input
          placeholder="Password"
          class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="password"
          v-model="store.password"
        />
        <button
          class="bg-gradient-to-r from-slate-700 to-slate-600 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-slate-500 hover:to-slate-700 transition ease-in-out duration-150"
          type="submit"
          @submit.prevent="handleSubmit"
        >
          Sauvegarder
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "~/stores/userStore";
const store = useUserStore();
const handleSubmit = () => {
  if (store.isEditing) {
    store.updateUser(store.editingUserId); // Modifier l'utilisateur
  } else {
    store.createUser(); // Créer un nouvel utilisateur
  }
};
</script>
