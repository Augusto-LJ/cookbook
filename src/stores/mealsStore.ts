import { defineStore } from "pinia";
import { reactive } from "vue";
import axiosClient from "../axiosClient";

export const useMealsStore = defineStore("meals", () => {
  let searchedMeals = reactive<any[]>([]);
  let searchedMealsByLetter = reactive<any[]>([]);

  async function searchMeals(keyword: string) {
    const response = await axiosClient.get(`search.php?s=${keyword}`);
    
    searchedMeals.splice(0, searchedMeals.length, ...(response.data.meals ?? []));
  };

  async function searchMealsByLetter(letter: any) {
    const response = await axiosClient.get(`search.php?f=${letter}`);
    
    searchedMealsByLetter.splice(0, searchedMealsByLetter.length, ...(response.data.meals ?? []));
  };

  return {
    searchedMeals,
    searchedMealsByLetter,
    searchMeals,
    searchMealsByLetter
  };
});
