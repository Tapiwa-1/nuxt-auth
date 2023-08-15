import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
  state: () => ({
    isPoccessing: null,
    updatingProfile: null,
    changingPassword: null,
    showModal: false
  }),
  
  actions: {
  
  },
  persist: true,
})