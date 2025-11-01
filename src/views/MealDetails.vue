<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';

interface Meal {
  strMeal: string;
  strMealThumb: string;
  [key: string]: any;
}


const route = useRoute();
const meal = ref<Meal | null>(null);

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({data}) => {
        meal.value = data.meals[0] || {};
    });
})
</script>

<template>
    <div>
        <h1 class="text-5xl font-bold mb-5">{{ meal?.strMeal }}</h1>
        <img :src="meal?.strMealThumb" :alt="meal?.strMeal">
    </div>
</template>