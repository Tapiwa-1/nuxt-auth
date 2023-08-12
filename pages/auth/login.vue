<script setup>
const { $axios } = useNuxtApp();
useHead({
    title: 'Login',
})
const login = async () => {
    try {
        await $axios.get('/sanctum/csrf-cookie')
        await $axios.post('/login', {
            email: 'test@example.com',
            password: 'password'
        })

    } catch (error) {
        console.log(error)
    }
}
</script>

<template>
    <GuestLayout>

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <form>
            <div>
                <InputLabel for="email" value="Email" />

                <TextInput id="email" type="email" class="mt-1 block w-full" required autofocus autocomplete="username" />

                <InputError class="mt-2" message="form.errors.email" />
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Password" />

                <TextInput id="password" type="password" class="mt-1 block w-full" required
                    autocomplete="current-password" />

                <InputError class="mt-2" message="form.errors.password" />
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

                <PrimaryButton @click="login()" class="ml-4" :class="{ 'opacity-25': true }">
                    Log in
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>