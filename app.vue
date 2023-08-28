<template>
    <Nuxt-page />
</template>
<script setup>

const { $userStore, $generalStore } = useNuxtApp()

onMounted(async () => {


    try {
        await $generalStore.hasSessionExpired()
        if ($userStore.id) {
            $userStore.getUser()
        }
    } catch (error) {
        console.log(error)
    }
})

</script>