import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
  state: () => ({
    isPoccessing: null,
    showModal: false
  }),
  
  actions: {
  
  },
  persist: true,
})