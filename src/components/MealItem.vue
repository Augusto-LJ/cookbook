<script setup lang="ts">
import YouTubeButton from './YouTubeButton.vue';

const { meal } = defineProps({
    meal: {
        required: true,
        type: Object
    }
});
</script>

<template>
    <div class="bg-white shadow rounded-xl">
            <router-link :to="{name: 'mealDetails', params: {id: meal?.idMeal}}">
                <img :src="meal?.strMealThumb" :alt="meal?.strMeal" class="rounded-t-xl w-full h-64 object-cover" />
            </router-link>
            <div class="px-3">
                <h3 class="font-semibold">{{ meal?.strMeal }}</h3>
                <p class="mb-4">Lorem ipsum dolor sit</p>
                <div class="flex items-center justify-between">
                    <YouTubeButton :href="meal?.strYoutube">YouTube</YouTubeButton>
                </div>
            </div>
        </div>
</template>