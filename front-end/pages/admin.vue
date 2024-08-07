<script setup lang="ts">
import AddTaskTemplate from "~/components/TaskFormTemplate.vue";
import ListUser from "~/components/ListUser.vue";
import ContainerDashboard from "~/components/ContainerDashboard.vue";
import UserFormTemplate from "~/components/UserFormTemplate.vue";
</script>

<template>
  <div class="">
    <ContainerDashboard>
      <main class="h-screen flex justify-between relative">
        <section class="mt-20 flex gap-5 flex-wrap justify-around">
          <ListUser />
          <ListUser />
          <ListUser />
          <ListUser />
          <ListUser />
          <ListUser />
        </section>
        <section class="flex flex-col">
          <AddTaskTemplate />
          <UserFormTemplate />
        </section>
      </main>
    </ContainerDashboard>
  </div>
</template>
