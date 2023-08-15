<script setup>
useHead({
    title: 'Login',
})

</script>

<template>
    <GuestLayout>

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <div class="mb-4 text-sm text-gray-600">
            Forgot your password? No problem. Just let us know your email address and we will email you a password reset
            link that will allow you to choose a new one.
        </div>
        <form>
            <div>
                <InputLabel for="email" value="Email" />

                <TextInput id="email" type="email" class="mt-1 block w-full" required autofocus autocomplete="username" />

                <!-- <InputError class="mt-2" message="form.errors.email" /> -->
            </div>

            <div class="flex items-center justify-end mt-4">
                <PrimaryButton class="ml-4" :class="{ 'opacity-25': true }">
                    Reset Link
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>