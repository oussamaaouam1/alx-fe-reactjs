import { useEffect,useState } from "react";
// import data from '.data.json'


const HomePage = () => {
  const [recipes , setRecipes] = useState([]);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch('./data.json');
  //     const data = await res.json();
  //     setRecipes(data)
  //   };
  //   fetchData();
  // },[]);


  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch('./data.json');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setRecipes(data);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };
  fetchData();
}, []);


  return(
    <div>
      <h1>Recipes</h1>
      <div>
        {recipes.map((recipe)=>(
          <div key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <h2>{recipe.title}</h2>
            <p>{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  )

};
export default HomePage;