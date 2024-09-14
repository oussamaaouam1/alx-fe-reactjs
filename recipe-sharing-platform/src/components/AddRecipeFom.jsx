import { useState } from 'react';
import { Link } from 'react-router-dom';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Validation logic: Check if title, ingredients, and steps are not empty
    if (!title.trim()) newErrors.title = 'Recipe title is required';
    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    } else if (ingredients.split(',').length < 2) {
      newErrors.ingredients = 'Please enter at least two ingredients separated by a comma';
    }
    if (!steps.trim()) newErrors.steps = 'Preparation steps are required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set errors if form is invalid
    } else {
      // Simulate form submission
      const formData = {
        title,
        ingredients: ingredients.split(',').map((ingredient) => ingredient.trim()),
        steps: steps.split('\n').map((step) => step.trim())
      };

      console.log('Form Submitted:', formData);

      // Clear the form
      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors({}); // Clear errors on successful submission
      alert('Recipe added successfully!');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Add New Recipe</h1>
      <form onSubmit={handleSubmit}>
        {/* Recipe Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded`}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="ingredients">
            Ingredients (separated by commas)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full p-2 border ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} rounded`}
            placeholder="Enter ingredients, separated by commas"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="steps">
            Preparation Steps (one per line)
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full p-2 border ${errors.steps ? 'border-red-500' : 'border-gray-300'} rounded`}
            placeholder="Enter preparation steps, one per line"
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Recipe
        </button>
      </form>
      <div className="mb-6">
        <Link to="/">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 my-11">
            HomePage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddRecipeForm;
