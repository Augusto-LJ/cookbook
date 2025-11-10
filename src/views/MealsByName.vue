<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useMealsStore } from '../stores/mealsStore.js';
import { useRoute } from 'vue-router';
import YouTubeButton from '../components/YouTubeButton.vue';

const store = useMealsStore();
const route = useRoute();
const keyword = ref<string>('');
const meals = computed(() => store.searchedMeals);

function searchMeals() {
    store.searchMeals(keyword.value);
}

onMounted(() => {
    keyword.value = (route.params.name ?? '') as string;
    
    if (keyword.value)
        store.searchMeals(keyword.value);
});

</script>

<template>
    <div class="p-8 pb-0">
        <input  type="text"
                v-model="keyword"
                class="rounded border-2 border-gray-200 w-full"
                placeholder="Search for meals"
                @change="searchMeals"
        />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div v-for="meal in meals" class="bg-white shadow rounded-xl">
            <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
                <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-64 object-cover" />
            </router-link>
            <div class="px-3">
                <h3 class="font-semibold">{{ meal.strMeal }}</h3>
                <p class="mb-4">Lorem ipsum dolor sit</p>
                <div class="flex items-center justify-between">
                    <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>
                </div>
            </div>
        </div>
    </div>
</template>