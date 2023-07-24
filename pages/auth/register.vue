<script setup>
useHead({
    title: 'Register',
})

const formData = reactive({
    username: '',
    email: '',
    password: '',
    confirmPassword: null,
});

</script>

<template>
    <GuestLayout> 
       
        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <form>
            <div>
                <InputLabel for="username" value="Username" />

                <TextInput
                    id="username"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="formData.username"
                    required
                    autofocus
                    autocomplete="username"
                />

                <InputError class="mt-2" message="form.errors.email" />
            </div>
            <div>
                <InputLabel for="email" value="Email" />

                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="formData.email"
                    required
                    autofocus
            
                />

                <InputError class="mt-2" message="form.errors.email" />
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Password" />

                <TextInput
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="formData.username"
                    required
                    autocomplete="current-password"
                />

                <InputError class="mt-2" message="form.errors.password" />
            </div>

            <div class="mt-4">
                <InputLabel for="confirmpassword" value="Confirm Password" />

                <TextInput
                    id="confirmpassword"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="formData.confirmPassword"
                    required
                   
                />

                <InputError class="mt-2" message="form.errors.password" />
            </div>


            <div class="flex items-center justify-end mt-4">
                <NuxtLink
                    v-if="true"
                    to="/auth/login"
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Already have an account?
                </NuxtLink>

                <PrimaryButton class="ml-4" :class="{ 'opacity-25': true }">
                    Sign Up
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>