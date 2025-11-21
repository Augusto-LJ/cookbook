<script setup lang="ts">
import MealItem from '../components/MealItem.vue';

const { meals } = defineProps({
    meals: {
        required: true,
        type: Array as () => any[],
    }
})
</script>

<template>
    <div v-if="Array.isArray(meals) && meals.length" class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal"/>
    </div>
    <div v-else class="flex justify-center text-gray-600 p-8">
        There are no meals
    </div>
</template>

