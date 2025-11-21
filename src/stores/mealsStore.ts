import { defineStore } from "pinia";
import { ref } from "vue";
import axiosClient from "../axiosClient";

export const useMealsStore = defineStore("meals", () => {
  const searchedMeals = ref<any[]>([]);
  const searchedMealsByLetter = ref<any[]>([]);
  const searchedMealsByIngredient = ref<any[]>([]);

  async function searchMeals(keyword: string) {
    const { data } = await axiosClient.get(`search.php?s=${keyword}`);
    
    searchedMeals.value = Array.isArray(data?.meals) ? data.meals : [];
  };

  async function searchMealsByLetter(letter: string | undefined) {
    if (!letter) {
      searchedMealsByLetter.value = [];
      return;
    }

    const { data } = await axiosClient.get(`search.php?f=${letter}`);
    
    searchedMealsByLetter.value = Array.isArray(data?.meals) ? data.meals : [];
  };

  async function searchMealsByIngredient(ingredient: string) {
    const { data } = await axiosClient.get(`search.php?i=${ingredient}`);
    
    searchedMealsByIngredient.value = Array.isArray(data?.meals) ? data.meals : [];
  };

  async function clearSearchedMeals() {
    searchedMeals.value = [];
  }

  return {
    searchedMeals,
    searchedMealsByLetter,
    searchedMealsByIngredient,
    searchMeals,
    searchMealsByLetter,
    searchMealsByIngredient,
    clearSearchedMeals
  };
});
