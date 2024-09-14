import  { useState, useEffect } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import data from '../data.json';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate(); // Hook for navigating

  useEffect(() => {
    const foundRecipe = data.find((r) => r.id === parseInt(id));
    if (foundRecipe) {
      setRecipe(foundRecipe);
    } else {
      console.error('Recipe not found');
    }
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-slate-400 p-8 md:max-w-sm  my-20 rounded-lg shadow-lg sm:p-4 md:p-8 sm:max-w-xs hover:shadow-xl cursor-pointer mx-10 ">
      <h1 className='text-black italic font-bold'>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className=" bg-blue-400 rounded-full w-36 h-36 mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36 hover:scale-110 transition-transform duration-300 ease-in-out" />
      <p className='text-black'>{recipe.summary}</p>
      <h2 className='text-xl'>Ingredients:</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions:</h2>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      <button 
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700" 
        onClick={() => navigate('/')}
      >
        Back to Home
      </button>
    </div>
  );
};

export default RecipeDetails;