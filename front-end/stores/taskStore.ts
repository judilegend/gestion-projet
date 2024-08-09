import { defineStore } from "pinia";
import type { ITask } from "@/interfaces/task";

interface ITaskState {
  tasks: ITask[];
  currentTask: ITask | null;
}

export const useTaskStore = defineStore("task", {
  state: (): ITaskState => ({
    tasks: [],
    currentTask: null,
  }),
  actions: {
    async fetchTasks() {
      const { data, error } = await useFetch<ITask[]>("/api/tasks");
      if (!error.value) {
        this.tasks = data.value || [];
      }
    },
    async addTask(task: Partial<ITask>) {
      const { data, error } = await useFetch("/api/tasks", {
        method: "POST",
        body: task,
      });
      if (!error.value) {
        this.fetchTasks();
      }
    },
    async updateTask(id: string, updates: Partial<ITask>) {
      const { data, error } = await useFetch(`/api/tasks/${id}`, {
        method: "PUT",
        body: updates,
      });
      if (!error.value) {
        this.fetchTasks();
      }
    },
    async deleteTask(id: string) {
      const { error } = await useFetch(`/api/tasks/${id}`, {
        method: "DELETE",
      });
      if (!error.value) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
    },
    setCurrentTask(task: ITask | null) {
      this.currentTask = task;
    },
  },
});
