<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useMealsStore } from '../stores/mealsStore.js';
import { computed, onMounted, watch } from 'vue';
import MealItem from '../components/MealItem.vue';

const store = useMealsStore();
const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const mealsByLetter = computed(() => store.searchedMealsByLetter)

watch(route, () => {
    store.searchMealsByLetter(route.params.letter);
})

onMounted(() => {
    store.searchMealsByLetter(route.params.letter);
});

console.log(mealsByLetter);
</script>

<template>
    <div>
        <div class="flex justify-center gap-2 mt-2">
            <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter in letters">
                {{ letter }}
            </router-link>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
            <MealItem v-for="meal in mealsByLetter" :meal="meal"/>
        </div>
    </div>
</template>