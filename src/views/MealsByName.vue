<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useMealsStore } from '../stores/mealsStore.js';
import { useRoute } from 'vue-router';
import MealItem from '../components/MealItem.vue';

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
        <MealItem v-for="meal in meals" :meal="meal"/>
    </div>
</template>