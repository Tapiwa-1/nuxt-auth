import { defineStore } from 'pinia'
import axios from '../plugins/axios'

const $axios = axios().provide.axios

export const useUserStore = defineStore('user', {
  state: () => ({
    id: '',
    name: '',
    email:'',
    image: '',
    authenticated: false
    
  }),
  
  actions: {
    async getTokens() {
      await $axios.get('/sanctum/csrf-cookie')
    },

    async login(email, password) {
      await $axios.post('/login', {
        email: email,
        password: password
      })
    },

    async register(name, email, password, confirmPassword) {
      await $axios.post('/register', {
        name: name,
        email: email,
        password: password,
        password_confirmation: confirmPassword
      })
    },
    
    async logout() {
      await $axios.post('/logout')
      this.resetUser()
    },
    resetUser() {      
      this.$state.id = ''
      this.$state.name = ''
      this.$state.email = ''
      this.$state.image = ''
      this.state.authenticated = false
    }
  },
  persist: true,
})