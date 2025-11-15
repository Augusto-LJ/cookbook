<script setup lang="ts">
import axiosClient from '../axiosClient';
import { onMounted, ref, computed } from 'vue';

const ingredients = ref<any>([]);
const keyword = ref<string>('');
const computedIngredients = computed(() => {
    if (!computedIngredients)
        return ingredients;
    
    return ingredients.value.filter((i: {strIngredient: string; }) => i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()));
})

onMounted(() => {
    axiosClient.get('list.php?i=list').then(({data}) => {
        ingredients.value = data.meals;
    });
});
</script>

<template>
    <div class="p-8">
        <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
        <input  type="text"
                v-model="keyword"
                class="rounded border-2 bg-white border-gray-200 w-full mb-3"
                placeholder="Search for ingredients"
        />
        <router-link :to="{name: 'byIngredient', params: {ingredient: ingredient.strIngredient}}" v-for="ingredient in computedIngredients" class="block bg-white rounded p-3 mb-3 shadow">
            <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
            <p>{{ ingredient.strDescription }}</p>
        </router-link>
    </div>
</template>