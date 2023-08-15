<script setup>
const { $axios } = useNuxtApp();
useHead({
    title: 'Login',
})
const { $userStore, $generalStore, $profileStore } = useNuxtApp()
const router = useRouter()

let email = ref(null)
let password = ref(null)
let errors = ref(null)

const login = async () => {
    errors.value = null

    try {
        $generalStore.isPoccessing = true
        await $userStore.getTokens()
        await $userStore.login(email.value, password.value)
        await $profileStore.getProfile()
        $generalStore.isPoccessing = false
        router.push("/dashboard")

    } catch (error) {
        $generalStore.isPoccessing = false
        errors.value = error.response.data.errors
    }
}

</script>

<template>
    <GuestLayout>

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <div>
            <div>
                <InputLabel for="email" value="Email" />

                <TextInput id="email" type="email" class="mt-1 block w-full" v-model:model-value="email" required autofocus
                    autocomplete="username" />

                <InputError class="mt-2" :message="errors && errors.email ? errors.email[0] : ''" />
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Password" />

                <TextInput id="password" type="password" v-model:model-value="password" class="mt-1 block w-full" required
                    autocomplete="current-password" />

                <InputError class="mt-2" :message="errors && errors.password ? errors.password[0] : ''" />
            </div>

            <div class="block mt-4">
                <label class="flex items-center">
                    <Checkbox name="remember" />
                    <span class="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
            </div>

            <div class="flex items-center justify-end mt-4">
                <NuxtLink v-if="true" to="/auth/forgot-password"
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Forgot your password?
                </NuxtLink>

                <PrimaryButton @click="login()" class="ml-4">
                    <Spinner v-if="$generalStore.isPoccessing" />
                    Log in
                </PrimaryButton>
            </div>
        </div>
    </GuestLayout>
</template>