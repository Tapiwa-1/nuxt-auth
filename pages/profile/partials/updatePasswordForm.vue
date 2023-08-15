
<script setup>

import { ref } from 'vue';
const { $generalStore, $profileStore, $userStore } = useNuxtApp()


let current_password = ref(null)
let password = ref(null)
let password_confirmation = ref(null)
let errors = ref(null)


const changePassword = async () => {
    errors.value = null

    try {
        $generalStore.changingPassword = true
        await $profileStore.changePassword(current_password.value, password.value, password_confirmation.value)
        $generalStore.changingPassword = false
        current_password.value = null
        password = null
        password_confirmation = null
    } catch (error) {
        $generalStore.changingPassword = false
        errors.value = error.response.data.errors
    }
}

</script>

<template>
    <section>
        <header>
            <h2 class="text-lg font-medium text-gray-900  ">Update Password</h2>

            <p class="mt-1 text-sm text-gray-600  ">
                Ensure your account is using a long, random password to stay secure.
            </p>
        </header>

        <div class="mt-6 space-y-6">

            <div>
                <InputLabel for="current_password" value="Current Password" />

                <TextInput id="current_password" ref="currentPasswordInput" type="password" class="mt-1 block w-full"
                    autocomplete="current-password" v-model:model-value="current_password" />

                <InputError class="mt-2" :message="errors && errors.current_password ? errors.current_password[0] : ''" />
            </div>

            <div>
                <InputLabel for="password" value="New Password" />

                <TextInput id="password" ref="passwordInput" type="password" class="mt-1 block w-full"
                    autocomplete="new-password" v-model:model-value="password" />
                <InputError class="mt-2" :message="errors && errors.password ? errors.password[0] : ''" />
            </div>

            <div>
                <InputLabel for="password_confirmation" value="Confirm Password" />

                <TextInput id="password_confirmation" type="password" class="mt-1 block w-full" autocomplete="new-password"
                    v-model:model-value="password_confirmation" />
                <InputError class="mt-2"
                    :message="errors && errors.password_confirmation ? errors.password_confirmation[0] : ''" />
            </div>
            <div class="flex items-center gap-4">
                <PrimaryButton @click="changePassword">Save</PrimaryButton>
                <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" class="transition ease-in-out">
                    <p v-if="$generalStore.changingPassword" class="text-sm text-gray-600">Saving..</p>
                </Transition>
            </div>
        </div>
    </section>
</template>
