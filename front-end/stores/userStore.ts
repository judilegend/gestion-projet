import { defineStore } from "pinia";
import type { IUser } from "@/interfaces/user";

interface IUserState {
  users: IUser[];
  currentUser: IUser | null;
}

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyMzE3NjY5MCwiZXhwIjoxNzIzMjYzMDkwfQ.O2wixkKDWaWEElQsumbXEVD5ZyEApj3NNB8DxmhPqVI"; // Replace with actual token fetching logic

export const useUserStore = defineStore("user", {
  state: (): IUserState => ({
    users: [],
    currentUser: null,
  }),
  actions: {
    async fetchUsers() {
      const { data, error } = await useFetch<IUser[]>(
        "http://localhost:4000/api/users/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!error.value) {
        this.users = data.value || [];
      }
    },
    async addUser(user: Partial<IUser>) {
      const { data, error } = await useFetch(
        "http://localhost:4000/api/users/",
        {
          method: "POST",
          body: user,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!error.value) {
        this.fetchUsers();
      }
    },
    async updateUser(id: string, updates: Partial<IUser>) {
      const { data, error } = await useFetch(
        `http://localhost:4000/api/users/${id}`,
        {
          method: "PUT",
          body: updates,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!error.value) {
        this.fetchUsers();
      }
    },
    async deleteUser(id: string) {
      const { error } = await useFetch(
        `http://localhost:4000/api/users/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!error.value) {
        this.users = this.users.filter((user) => user.id !== id);
      }
    },
    setCurrentUser(user: IUser | null) {
      this.currentUser = user;
    },
  },
});
