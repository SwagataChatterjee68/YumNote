

import { useContext } from 'react';
import { recipecontext } from '../context/RecipeContext';
import RecipeCard from '../components/RecipeCard';

const Recipes = () => {
  const { data } = useContext(recipecontext);

  const renderRecipe = data.map((recipe) => (
    <RecipeCard recipe={recipe} key={recipe.id} />
  ));

  return (
    <div className="min-h-screen  py-16 px-8 md:px-16 lg:px-36">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-20">
        {data.length > 0 ? renderRecipe : <p className="text-center w-full text-gray-500 text-lg">No Recipe Yet</p>}
      </div>
    </div>
  );
};

export default Recipes;
