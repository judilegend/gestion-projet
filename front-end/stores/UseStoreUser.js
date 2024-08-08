export const useStoreUser = defineStore("user", () => {
  const users = ref([]);
  const name = ref("");
  const lastname = ref("");
  const email = ref("");
  const password = ref("");
  const isEditing = ref(false);
  const editingUserId = ref(null);

  // ...actions fetchUsers, createUser, updateUser, deleteUser
  const fetchUsers = async () => {
    try {
      const response = await this.$http.get("/api/users");
      users.value = response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const createUser = async () => {
    try {
      const newUser = {
        name: name.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value,
      };
      const response = await this.$http.post("/api/users", newUser);
      users.value.push(response.data);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };
  const updateUser = async (id) => {
    try {
      const updatedUser = {
        name: name.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value,
      };
      const response = await this.$http.put(`/api/users/${id}`, updatedUser);
      const index = users.value.findIndex((user) => user.id === id);
      if (index !== -1) {
        users.value[index] = response.data;
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  const deleteUser = async (id) => {
    try {
      await this.$http.delete(`/api/users/${id}`);
      users.value = users.value.filter((user) => user.id !== id);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  return {
    users,
    name,
    lastname,
    email,
    password,
    isEditing,
    editingUserId,
    fetchUsers,
    createUser,
    updateUser,
    deleteUser,
  };
});
