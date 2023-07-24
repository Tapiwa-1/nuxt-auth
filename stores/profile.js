import { defineStore } from 'pinia'
import axios from '../plugins/axios'

const $axios = axios().provide.axios

export const useProfileStore = defineStore('profile', {
  state: () => ({
    id:1,
    username:'tapiwa-1',
    email:'tmotsi10@gmail.com',
    
  }),
  
  actions: {
    async getProfile(id) {
      
    },
    resetUser() {      
        this.$state.id = ''
        this.$state.username = ''
        this.$state.email = ''
       
      }
  },
  persist: true,
})