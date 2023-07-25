
<script setup>

import { ref } from 'vue';
const passwordInput = ref(null);
const currentPasswordInput = ref(null);


</script>

<template>
    <section>
        <header>
            <h2 class="text-lg font-medium text-gray-900  dark:text-white">Update Password</h2>

            <p class="mt-1 text-sm text-gray-600  dark:text-white">
                Ensure your account is using a long, random password to stay secure.
            </p>
        </header>

        <form class="mt-6 space-y-6">
            <div>
                <InputLabel for="current_password" value="Current Password" />

                <TextInput id="current_password" ref="currentPasswordInput" type="password" class="mt-1 block w-full"
                    autocomplete="current-password" />

                <InputError message="form.errors.current_password" class="mt-2" />
            </div>

            <div>
                <InputLabel for="password" value="New Password" />

                <TextInput id="password" ref="passwordInput" type="password" class="mt-1 block w-full"
                    autocomplete="new-password" />

                <InputError message="form.errors.password" class="mt-2" />
            </div>

            <div>
                <InputLabel for="password_confirmation" value="Confirm Password" />

                <TextInput id="password_confirmation" type="password" class="mt-1 block w-full"
                    autocomplete="new-password" />

                <InputError message="form.errors.password_confirmation" class="mt-2" />
            </div>

            <div class="flex items-center gap-4">
                <PrimaryButton>Save</PrimaryButton>

                <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" class="transition ease-in-out">
                    <p v-if="false" class="text-sm text-gray-600">Saved.</p>
                </Transition>
            </div>
        </form>
    </section>
</template>
