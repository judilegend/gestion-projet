<template>
  <section
    class="sidebar h-screen fixed top-0 bottom-0 lg:left-0 left-[-300px] p-2 w-[300px] overflow-y-auto text-center bg-gray-900"
  >
    <div class="text-gray-100 text-xl">
      <div class="p-2.5 mt-1 flex items-center">
        <i class="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
        <h1 class="font-bold text-gray-200 text-[15px] ml-3">
          Gestion de Projets
        </h1>
        <i class="bi bi-x cursor-pointer ml-28 lg:hidden" onclick="Close()"></i>
      </div>
      <div class="my-2 bg-gray-600 h-[1px]"></div>
    </div>
    <section class="">
      <ul>
        <div
          class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
          <img src="/icons.png" alt="" />
          <span class="text-[15px] ml-4 text-gray-200 font-bold">
            <NuxtLink to="admin">Admin</NuxtLink>
          </span>
        </div>
        <div
          class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
          <img src="/icon/operation.svg" alt="" />
          <span class="text-[15px] ml-4 text-gray-200 font-bold">
            <NuxtLink to="task">Taches</NuxtLink>
          </span>
        </div>
      </ul>
    </section>
  </section>
</template>
