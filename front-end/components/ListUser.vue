<template>
  <article
    class="w-[280px] h-64 bg-white-700 shadow-lg p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300"
  >
    <svg
      class="icon"
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="2em"
      width="2em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"
      ></path>
    </svg>
    <p class="text-sm w-full text-gray-400">Name :</p>
    <p class="text-sm w-full text-gray-400">LastName :</p>
    <p class="text-sm w-full text-gray-400">Email :</p>
    <p class="text-sm w-full text-gray-400">Password :</p>
    <button
      class="duration-300 bg-black/0 hover:bg-slate-700 hover:text-white text-gray-400 py-2 px-4 rounded"
    >
      Modifier
    </button>
    <button
      class="duration-300 bg-black/0 hover:bg-slate-700 hover:text-white text-gray-400 py-2 px-4 rounded"
    >
      Supprimer
    </button>
  </article>
</template>
