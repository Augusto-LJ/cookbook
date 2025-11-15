import { defineStore } from "pinia";
import { reactive } from "vue";
import axiosClient from "../axiosClient";

export const useMealsStore = defineStore("meals", () => {
  let searchedMeals = reactive<any[]>([]);
  let searchedMealsByLetter = reactive<any[]>([]);
  let searchedMealsByIngredient = reactive<any[]>([]);

  async function searchMeals(keyword: string) {
    const response = await axiosClient.get(`search.php?s=${keyword}`);
    
    searchedMeals.splice(0, searchedMeals.length, ...(response.data.meals ?? []));
  };

  async function searchMealsByLetter(letter: any) {
    const response = await axiosClient.get(`search.php?f=${letter}`);
    
    searchedMealsByLetter.splice(0, searchedMealsByLetter.length, ...(response.data.meals ?? []));
  };

  async function searchMealsByIngredient(ingredient: any) {
    const response = await axiosClient.get(`search.php?i=${ingredient}`);
    console.log(response);
    searchedMealsByIngredient.splice(0, searchedMealsByIngredient.length, ...(response.data.meals ?? []));
  };

  async function clearSearchedMeals() {
    searchedMeals = [];
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
