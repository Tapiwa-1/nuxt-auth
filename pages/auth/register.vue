<script setup>
useHead({
    title: 'Register',
})

const { $userStore, $generalStore, $profileStore } = useNuxtApp()
const router = useRouter();

let name = ref(null)
let email = ref(null)
let password = ref(null)
let confirmPassword = ref(null)
let errors = ref(null)

const register = async () => {
    errors.value = null

    try {
        $generalStore.isPoccessing = true;
        await $userStore.getTokens()
        await $userStore.register(
            name.value,
            email.value,
            password.value,
            confirmPassword.value
        )
        await $profileStore.getProfile()
        $generalStore.isPoccessing = false;
        router.push("/dashboard");
    } catch (error) {
        $generalStore.isPoccessing = false;
        console.log(errors)
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
                <InputLabel for="username" value="Username" />

                <TextInput id="username" type="text" class="mt-1 block w-full" v-model:model-value="name" required autofocus
                    autocomplete="username" />

                <InputError class="mt-2" :message="errors && errors.name ? errors.name[0] : ''" />
            </div>
            <div>
                <InputLabel for="email" value="Email" />

                <TextInput id="email" type="email" class="mt-1 block w-full" v-model:model-value="email" required
                    autofocus />

                <InputError class="mt-2" :message="errors && errors.email ? errors.email[0] : ''" />
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Password" />

                <TextInput id="password" type="password" class="mt-1 block w-full" v-model:model-value="password" required
                    autocomplete="current-password" />

                <InputError class="mt-2" :message="errors && errors.password ? errors.password[0] : ''" />
            </div>

            <div class="mt-4">
                <InputLabel for="confirmpassword" value="Confirm Password" />

                <TextInput id="confirmpassword" type="password" class="mt-1 block w-full"
                    v-model:model-value="confirmPassword" required />

                <InputError class="mt-2"
                    :message="errors && errors.confirmPasswordPassword ? errors.confirmPasswor[0] : ''" />
            </div>


            <div class="flex items-center justify-end mt-4">
                <NuxtLink v-if="true" to="/auth/login"
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Already have an account?
                </NuxtLink>

                <PrimaryButton @click="register()" class="ml-4">
                    <Spinner v-if="$generalStore.isPoccessing" />
                    Sign Up
                </PrimaryButton>
            </div>
        </div>
    </GuestLayout>
</template>