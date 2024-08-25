import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
// import EditRecipeForm from './components/EditRecipeForm'

function App() {
  

  return (
    <Router>
      <div>
        <h1>Recipe Sharing Application</h1>
        <Routes>
          <Route path="/" element={
          <>
            <AddRecipeForm />
            <RecipeList />
            <SearchBar />
          </>} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
