<script setup lang="ts">
import { computed, ref } from 'vue';
import { useMealsStore } from '../stores/mealsStore.js';

const store = useMealsStore();
const keyword = ref('');
const meals = computed(() => store.searchedMeals);

function searchMeals() {
    store.searchMeals(keyword);
}

</script>

<template>
    <div class="p-8">
        <input  type="text"
                v-model="keyword"
                class="rounded border-2 border-gray-200 w-full"
                placeholder="Search for meals"
                @change="searchMeals"
        />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div v-for="meal in meals" class="bg-white shadow rounded-xl">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-64 object-cover" />
            <div class="px-3">
                <h3 class="font-semibold">{{ meal.strMeal }}</h3>
                <p class="mb-4">Lorem ipsum dolor sit</p>
                <div class="flex items-center justify-between">
                    <a :href="meal.strYoutube" target="_blank"
                        class="px-3 py-2 mb-2 rounded border-2 border-red-600 bg-red-500 hover:bg-red-600 hover:text-white transition-colors"
                        rel="noopener noreferrer">YouTube video</a>
                </div>
            </div>
        </div>
    </div>
</template>