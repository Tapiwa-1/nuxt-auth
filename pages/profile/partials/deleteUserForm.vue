<script setup>

import { nextTick, ref } from 'vue';
const { $generalStore, $profileStore, $userStore } = useNuxtApp()
const router = useRouter()
let errors = ref(null)
let password = ref(null)
const deleteUser = async () => {
    errors.value = null

    try {
        $generalStore.isPoccessing = true
        await $profileStore.deleteProfile(password.value)
        $generalStore.isPoccessing = false
        $generalStore.showModal = false
        router.push("/")
    } catch (error) {
        $generalStore.isPoccessing = false
        errors.value = error.response.data.errors
    }

}
</script>

<template>
    <section class="space-y-6">
        <header>
            <h2 class="text-lg font-medium ">Delete Account</h2>

            <p class="mt-1 text-sm text-gray-600  ">
                Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting
                your account, please download any data or information that you wish to retain.
            </p>
        </header>

        <DangerButton @click="$generalStore.showModal = true">Delete Account</DangerButton>

        <Modal :show="$generalStore.showModal" @close="closeModal">
            <div class="p-6">
                <h2 class="text-lg font-medium ">
                    Are you sure you want to delete your account?
                </h2>

                <p class="mt-1 text-sm ">
                    Once your account is deleted, all of its resources and data will be permanently deleted. Please
                    enter your password to confirm you would like to permanently delete your account.
                </p>

                <div class="mt-6">
                    <InputLabel for="password" value="Password" class="sr-only" />

                    <TextInput id="password" ref="passwordInput" type="password" class="mt-1 block w-3/4"
                        placeholder="Password" @keyup.enter="deleteUser" v-model:model-value="password" />

                    <InputError class="mt-2" :message="errors && errors.password ? errors.password[0] : ''" />
                </div>

                <div class="mt-6 flex justify-end">
                    <SecondaryButton @click="$generalStore.showModal = false"> Cancel </SecondaryButton>

                    <DangerButton class="ml-3" @click="deleteUser()">
                        <Spinner v-if="$generalStore.isPoccessing" />
                        Delete Account
                    </DangerButton>
                </div>
            </div>
        </Modal>
    </section>
</template>