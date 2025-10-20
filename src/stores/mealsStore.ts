import { defineStore } from "pinia";
import { reactive } from "vue";
import axiosClient from "../axiosClient";

export const useMealsStore = defineStore("meals", () => {
  let searchedMeals = reactive<any[]>([]);

  async function searchMeals(keyword: { value: string }) {
    const response = await axiosClient.get(`search.php?s=${keyword.value}`);
    
    searchedMeals.splice(0, searchedMeals.length, ...(response.data.meals ?? []));
  }

  return {
    searchedMeals,
    searchMeals,
  };
});
