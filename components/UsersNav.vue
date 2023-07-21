<template>
    <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Users Page
            </h2>
            <div class="">
                <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                    <li class="mr-2">
                        <a :href="route('town.index')"   aria-current="page" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50">Town</a>
                    </li>
                    <li class="mr-2">
                        <a :href="route('provincial.index')"  :active="route().current('provincial')" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50">Province</a>
                    </li>
                    <li class="mr-2">
                        <a :href="route('district.index')"  :active="route().current('district')" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">District</a>
                    </li>
                </ul>
            </div>
</template>

<script setup>

</script>

<style>

</style>