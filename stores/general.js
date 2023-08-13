import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
  state: () => ({
    isPoccessing: null
  }),
  
  actions: {
  
  },
  persist: true,
})