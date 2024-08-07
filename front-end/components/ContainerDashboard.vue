<template>
  <main
    class="w-full grid grid-cols-[300px,1fr] grid-rows-[70px,1fr] h-screen overflow-x-hidden relative"
  >
    <div class="row-span-2">
      <Sidebar />
    </div>
    <div class="col-span-1">
      <Navbar />
    </div>
    <div class="col-start-2 row-start-2 px-8">
      <section class="flex w-full justify-between">
        <slot></slot>
      </section>
    </div>
  </main>
</template>
