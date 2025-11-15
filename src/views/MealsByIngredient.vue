<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useMealsStore } from '../stores/mealsStore.js';
import Meals from '../components/Meals.vue';

const route = useRoute();
const store = useMealsStore();
const mealsByIngredient = computed(() => store.searchedMealsByIngredient);

onMounted(() => {
    store.searchMealsByIngredient(route.params.ingredient);
});
</script>

<template>
    <Meals :meals="mealsByIngredient"/>
</template>