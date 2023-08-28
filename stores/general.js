import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
  state: () => ({
    isPoccessing: null,
    updatingProfile: null,
    changingPassword: null,
    showModal: false
  }),
  
  actions: {
    async hasSessionExpired() {
      await $axios.interceptors.response.use((response) => {
        // Call was successful, continue.
        return response;
      }, (error) => {
          switch (error.response.status) {
              case 401: // Not logged in
              case 419: // Session expired
              case 503: // Down for maintenance
                  // Bounce the user to the login screen with a redirect back
                  useUserStore().resetUser()
                  window.location.href = '/';
                  break;
              case 500:
                  alert('Oops, something went wrong!  The team has been notified.');
                  break;
              default:
                  // Allow individual requests to handle other errors
                  return Promise.reject(error);
          }
      });
    },
  
  },
  persist: true,
})