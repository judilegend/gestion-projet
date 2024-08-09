// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    // ...Axios module should be included AFTER @nuxtjs/auth
  ],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  imports: {
    dirs: ["stores"],
  },
  auth: {
    login: {
      endpoint: "auth/login",
      propertyName: "token",
    },
    logout: {
      endpoint: "auth/logout",
      method: "GET",
      paramTokenName: "",
      appendToken: false,
    },
    user: {
      endpoint: "auth/user",
      propertyName: "user",
      paramTokenName: "",
      appendToken: false,
    },
    storageTokenName: "nuxt-auth-token",
    tokenType: "Bearer",
    notLoggedInRedirectTo: "/login",
    loggedInRedirectTo: "/",
  },
  // build: {
  //   transpile: ["pinia"],
  // },
});
