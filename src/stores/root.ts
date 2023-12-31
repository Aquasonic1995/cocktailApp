import {defineStore} from 'pinia'

import axios from "axios";

export const cocktailsStore = defineStore('root', {
    state: () => ({
        ingredients: [],
        cocktails: [],
        cocktail: [],
        random:[]
    }),
    actions: {
        async getIngredients() {
            const data = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
            )
            this.ingredients = data?.data?.drinks
        },
        async getCocktails(ingredient: string) {
            const data = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
            )
            this.cocktails = data?.data?.drinks
        },
        async getCocktail(id: string) {
            const data = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
            )
            this.cocktail = data?.data?.drinks


        },
        async getRandom() {
            const data = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`
            )
            this.cocktail= data?.data?.drinks

        }
    }

})