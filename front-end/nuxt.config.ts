// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxt-alt/auth", "@nuxt-alt/http"],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  http: {
    baseURL: "http://localhost:4000", // Définir l'URL de base ici
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: "/api/auth/login", method: "post" },
          logout: { url: "/api/auth/logout", method: "post" },
          user: { url: "/api/auth/user", method: "get" },
        },
        // tokenRequired: true,
      },
    },
  },
});
