<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';
import Meals from '../components/Meals.vue';

const meals = ref<any>([]);

onMounted(async () => {
    for (let i = 0; i < 9; i++){
        axiosClient.get(`random.php`).then(({data}) => meals.value.push(data.meals[0]));
    }
    const response = await axiosClient.get('/list.php?i=list');
    meals.value = response.data;
})
</script>

<template>
    <div class="p-8 pb-0 text-orange-500">
        <h1 class="text-4xl font-bold mb-4">Random meals</h1>
    </div>
    <Meals :meals="meals"/>
</template>