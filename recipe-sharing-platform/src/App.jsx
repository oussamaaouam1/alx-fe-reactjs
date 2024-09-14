
import './App.css'
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetail from './components/RecipeDetail'; 
import AddRecipeForm from './components/AddRecipeFom';

function App() {

  return (
    <>
    <h1 className='text-blue-500'>recipe Application</h1>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} /> {/* Add Recipe Form route */}

      </Routes>
    </Router>
    
    </>
  )
}

export default App
