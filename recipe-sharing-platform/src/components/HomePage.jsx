import { useEffect, useState } from "react";
import data from '../data.json'; // Import JSON data
import { useNavigate , Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
   const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Since data is imported, you can directly set it to the state
    setRecipes(data);
  }, []);
    const handleCardClick = (id) => {
    // Navigate to the recipe details page
    navigate(`/recipe/${id}`);
    };

  return (
    <div>
      <h1>Recipes</h1>
      <div className="sm:grid grid-cols-1 md:grid-cols-2 lg:grid grid-cols-3">
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id}> {/* Wrap each card with Link */}
          <div 
            key={recipe.id} 
            className="bg-gray-100 p-8 md:max-w-sm  my-20 rounded-lg shadow-lg sm:p-4 md:p-8 sm:max-w-xs hover:shadow-xl cursor-pointer mx-10 "
            onClick={() => handleCardClick(recipe.id)} // Navigate to details on click
          >
            <img src={recipe.image} alt={recipe.title} className=" bg-blue-400 rounded-full w-36 h-36 mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36 hover:scale-110 transition-transform duration-300 ease-in-out"/>
            <h2 className="text-blue-800">{recipe.title}</h2>
            <p className="text-black">{recipe.summary}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
