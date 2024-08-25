import {create} from 'zustand';
export const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],


  addRecipe: (newRecipe) => set(state => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),
  // setRecipes: (recipes) => set({ recipes }),

  updateRecipe:(updatedRecipe)=>set(state=>({
    recipes: state.recipes.map(
      recipe=>recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  
  deleteRecipe:(id) =>set((state)=> ({
    recipes: state.recipes.filter(
      (recipe)=> recipe.id !== id
    ),
  })),

  setRecipes: (recipes) => set({ recipes }),


  setSearchTerm: (term) => set({ searchTerm: term }),

  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )}
  )),


  addFavorite: (recipeId) => set(state => ({ 
    favorites: [...state.favorites, recipeId] 
  })),


  removeFavorite: (recipeId) => set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId)
    })
  ),

}));
