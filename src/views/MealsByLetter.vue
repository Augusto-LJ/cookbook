<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useMealsStore } from '../stores/mealsStore.js';
import { computed, onMounted, watch } from 'vue';
import Meals from '../components/Meals.vue';

const store = useMealsStore();
const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');


watch(
  () => route.params.letter,
  (newLetter) => {
    store.searchMealsByLetter((newLetter as string) ?? undefined);
  }
);

onMounted(() => {
  store.searchMealsByLetter((route.params.letter as string) ?? undefined);
});
</script>

<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals by Letter</h1>
    </div>
    <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
        <router-link v-for="letter in letters"
                     :key="letter"
                     :to="{name: 'byLetter', params: {letter}}"
                     class="w-8 h-8 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
        >
            {{ letter }}
        </router-link>
    </div>
    <Meals :meals="store.searchedMealsByLetter"/>
</template>