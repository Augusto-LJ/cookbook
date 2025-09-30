<script setup lang="ts">

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
</script>

<template>
    <div class="flex flex-col p-8">
        <input  type="text"
                class="rounded border-2 border-gray-200 w-full"
                placeholder="Search for meals"
        />

        <div class="flex justify-center gap-2 mt-2">
            <router-link to="/" v-for="letter in letters">
                {{ letter }}
            </router-link>
        </div>
    </div>
</template>