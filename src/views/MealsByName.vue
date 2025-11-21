<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useMealsStore } from '../stores/mealsStore.js';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';

const store = useMealsStore();
const route = useRoute();
const keyword = ref<string>('');
const meals = computed(() => store.searchedMeals);

function searchMeals() {
    if (keyword.value != ''){
        store.searchMeals(keyword.value);
    } else {
        store.clearSearchedMeals();
    }
}

onMounted(() => {
    store.clearSearchedMeals();

    keyword.value = (route.params.name ?? '') as string;
    if (keyword.value)
        store.searchMeals(keyword.value);
});

</script>

<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Search meals by name</h1>
    </div>
    <div class="px-8 pb-3">
        <input  type="text"
                v-model="keyword"
                class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
                placeholder="Search for meals"
                @change="searchMeals"
        />
    </div>
    <Meals :meals="meals" />
</template>