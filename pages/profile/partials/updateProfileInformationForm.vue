<script setup>

const props = defineProps({
    mustVerifyEmail: Boolean,
    status: String,
});




</script>

<template>
    <section>
        <header>
            <h2 class="text-lg font-medium text-gray-900 dark:text-white">Profile Information</h2>

            <p class="mt-1 text-sm text-gray-600  dark:text-white">
                Update your account's profile information and email address.
            </p>
        </header>

        <form  class="mt-6 space-y-6">
            <div>
                <InputLabel for="name" value="Name" />

                <TextInput
                    id="name"
                    type="text"
                    class="mt-1 block w-full"
                   
                    required
                    autofocus
                    autocomplete="name"
                />

                <InputError class="mt-2" message="form.errors.name" />
            </div>

            <div>
                <InputLabel for="email" value="Email" />

                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    
                    required
                    autocomplete="email"
                />

                <InputError class="mt-2" message="form.errors.email" />
            </div>

            <div v-if="true">
                <p class="text-sm mt-2 text-gray-800">
                    Your email address is unverified.
                    <NuxtLink
                        to="/"
                        method="post"
                        as="button"
                        class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Click here to re-send the verification email.
                    </NuxtLink>
                </p>

                <div
                    v-show="props.status === 'verification-link-sent'"
                    class="mt-2 font-medium text-sm text-green-600"
                >
                    A new verification link has been sent to your email address.
                </div>
            </div>

            <div class="flex items-center gap-4">
                <PrimaryButton >Save</PrimaryButton>

                <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" class="transition ease-in-out">
                    <p  class="text-sm text-gray-600">Saved.</p>
                </Transition>
            </div>
        </form>
    </section>
</template>