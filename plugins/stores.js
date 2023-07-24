
import { useProfileStore } from "~/stores/profile"


export default defineNuxtPlugin((NuxtApp) => {
    return {
        provide: { 
            profileStore: useProfileStore(),
        },
    }
})