  import  {useRecipeStore} from './recipeStore';
  import { Link } from 'react-router-dom';
  import { useEffect } from 'react';

  const RecipeList = () => {
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
    const filterRecipes = useRecipeStore(state => state.filterRecipes);
    useEffect(() => {
    filterRecipes(); // Ensure filteredRecipes is populated on component mount
  }, [filterRecipes]);

    return (
      <div>
        {filteredRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3><Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link></h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    );
  };

  export default RecipeList ; 