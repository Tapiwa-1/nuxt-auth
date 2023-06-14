import { defineStore } from 'pinia'
import axios from '../plugins/axios'

const $axios = axios().provide.axios

export const useProfileStore = defineStore('profile', {
  state: () => ({
    id:'',
    name:'',
    bio:'',
    image:'',
    post:null,
    posts: null,
    allLikes: 0,

  }),
  actions: {
    async getProfile(id) {
      
    },
    resetUser() {      
        this.$state.id = ''
        this.$state.name = ''
        this.$state.bio = ''
        this.$state.image = ''
        this.$state.posts = ''
      }
  },
  persist: true,
})