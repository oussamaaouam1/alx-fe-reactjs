import { useEffect, useState } from "react";
import data from '../data.json'; // Import JSON data

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Since data is imported, you can directly set it to the state
    setRecipes(data);
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      <div className="sm:grid grid-cols-1 md:grid-cols-2 lg:grid grid-cols-3">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-gray-100 p-8 md:max-w-sm mx-auto my-20 rounded-lg shadow-lg sm:p-4 md:p-8 sm:max-w-xs hover:shadow-xl cursor-pointer mx-10 ">
            <img src={recipe.image} alt={recipe.title} className=" bg-blue-400 rounded-full w-36 h-36 mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36 hover:scale-110 transition-transform duration-300 ease-in-out"/>
            <h2 className="text-blue-800">{recipe.title}</h2>
            <p className="text-black">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
