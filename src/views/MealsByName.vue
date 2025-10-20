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
    <div>
        <pre>{{meals}}</pre>
    </div>
</template>