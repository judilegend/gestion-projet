<script setup lang="ts">
import AddTaskTemplate from "~/components/TaskFormTemplate.vue";
import ListUser from "~/components/ListUser.vue";
import ContainerDashboard from "~/components/ContainerDashboard.vue";
import UserFormTemplate from "~/components/UserFormTemplate.vue";
import { useStoreUser } from "~/stores/UseStoreUser";

const store = useStoreUser();

// Récupérer les utilisateurs lorsque le composant est monté
onMounted(() => {
  store.fetchUsers();
});

// Gestion des événements pour éditer et supprimer des utilisateurs
const handleDeleteUser = (id) => {
  store.deleteUser(id);
};

const handleEditUser = (user) => {
  // Remplir le formulaire avec les données de l'utilisateur sélectionné
  store.name = user.name;
  store.lastname = user.lastname;
  store.email = user.email;
  store.password = ""; // Peut-être vous souhaitez réinitialiser le mot de passe
};
</script>

<template>
  <div class="">
    <ContainerDashboard>
      <main class="h-screen flex justify-between relative">
        <section class="mt-20 flex gap-5 flex-wrap justify-around">
          <!-- Pass the users from the store to ListUser component -->
          <ListUser
            :users="store.users"
            @delete-user="handleDeleteUser"
            @edit-user="handleEditUser"
          />
        </section>
        <section class="flex flex-col">
          <AddTaskTemplate />
          <UserFormTemplate />
        </section>
      </main>
    </ContainerDashboard>
  </div>
</template>
