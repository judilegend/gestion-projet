<script setup lang="ts">
import AddTaskTemplate from "~/components/TaskFormTemplate.vue";
import ListTasks from "~/components/ListTasks.vue";
import ContainerDashboard from "~/components/ContainerDashboard.vue";
</script>

<template>
  <div>
    <ContainerDashboard>
      <main class="w-full flex justify-between">
        <section class="mt-20 flex gap-10 flex-wrap justify-around">
          <ListTasks />
          <ListTasks />
          <ListTasks />
          <ListTasks />
          <ListTasks />
          <ListTasks />
        </section>
        <section>
          <!-- <AddTaskTemplate /> -->
        </section>
      </main>
    </ContainerDashboard>
  </div>
</template>
