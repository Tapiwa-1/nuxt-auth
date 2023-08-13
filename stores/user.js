import { defineStore } from 'pinia'
import axios from '../plugins/axios'

const $axios = axios().provide.axios

export const useUserStore = defineStore('user', {
  state: () => ({
    id: '',
    name: '',
    bio: '',
    image: ''
    
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

    // async getUser() {
    //   let res = await $axios.get('/api/logged-in-user')
      
    //   this.$state.id = res.data[0].id
    //   this.$state.name = res.data[0].name
    //
    // },
  },
  persist: true,
})