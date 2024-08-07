<template>
  <main
    class="z-20 h-20 bg-[#FAFBFC] px-8 shadow-sm flex items-center justify-between"
  >
    <section>
      <h1 class="text-gray-600 font-bold text-2xl">Admin Page</h1>
    </section>
    <section class="flex gap-2 items-center">
      <div>
        <!-- <SearchBar /> -->
      </div>
      <div class="h-12 w-12 rounded-full bg-white shadow-sm"></div>
      <div
        class="w-auto h-12 bg-white rounded-full flex items-center shadow-sm gap-2"
      >
        <!-- <img src="/Ellipse 3226.png" alt="img" class="my-auto" /> -->
        <div class="text-gray-600">
          <button
            class="group flex items-center justify-start w-11 h-10 bg-blue-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-full active:translate-x-1 active:translate-y-1"
          >
            <div
              class="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3"
            >
              <svg class="w-4 h-4" viewBox="0 0 512 512" fill="white">
                <path
                  d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                ></path>
              </svg>
            </div>
            <div
              class="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            >
              Logout
            </div>
          </button>
        </div>
      </div>
    </section>
  </main>
</template>
