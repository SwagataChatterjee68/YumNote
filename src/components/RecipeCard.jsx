import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = (props) => {
    const {id,title,imageurl,description,chef}=props.recipe

  return (
    <Link to={`/recipes/details/${id}`} className="block w-full max-w-sm bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 ease-in-out overflow-hidden">
      <div className="h-48 w-full overflow-hidden rounded-t-2xl">
        <img
          src={imageurl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-3">
        <h2 className="text-2xl font-semibold text-gray-900 mb-1 truncate">{title}</h2>
        <p className="text-sm text-gray-500 mb-2 tracking-tighter"><span className="font-medium">By {chef}</span></p>
        <p className="tracking-tight text-gray-700 text-sm leading-relaxed mb-2">
          {description.slice(0, 100)}...
          <span className="text-red-500 hover:underline cursor-pointer"> Read more</span>
        </p>
        <div className="text-left">
          <span className="inline-block px-4 py-2 text-xs font-semibold text-red-600 border border-red-600 rounded-full hover:bg-red-600 hover:text-white transition">
            View Recipe
          </span>
        </div>
      </div>
    </Link>
  )
}

export default RecipeCard
