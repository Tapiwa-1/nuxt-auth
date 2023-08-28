import { useProfileStore } from "~/stores/profile"

export default defineNuxtRouteMiddleware((to, from) => {
    const userProfile = useProfileStore()
    
    if (to !== '/' && !userProfile.id) {
        return navigateTo('/auth/login')
    }
})