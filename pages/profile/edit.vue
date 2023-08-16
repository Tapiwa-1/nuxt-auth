<script setup>

import DeleteUserForm from './partials/deleteUserForm.vue';
import UpdatePasswordForm from './partials/updatePasswordForm.vue';
import UpdateProfileInformationForm from './partials/updateProfileInformationForm.vue';
useHead({
    title: 'Edit Profile',
})
definePageMeta({
    middleware: ["auth"]
    // or middleware: 'auth'
})
const { $profileStore, $generalStore } = useNuxtApp()

defineProps({
    mustVerifyEmail: Boolean,
    status: String,
});


</script>

<template>
    <NuxtLayout name="authenticated-layout">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight ">Profile</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div class="p-4 sm:p-8 bg-white  shadow sm:rounded-lg">
                    <UpdateProfileInformationForm :must-verify-email="mustVerifyEmail" :status="status" class="max-w-xl" />
                </div>

                <div class="p-4 sm:p-8 bg-white  shadow sm:rounded-lg">
                    <UpdatePasswordForm class="max-w-xl" />
                </div>

                <div class="p-4 sm:p-8 bg-white shadow  sm:rounded-lg">
                    <DeleteUserForm class="max-w-xl" />
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>