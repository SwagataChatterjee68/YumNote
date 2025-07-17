import { useContext } from "react"
import { recipecontext } from "../context/RecipeContext"
import { Link, useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext)
  const navigate = useNavigate()
  const params = useParams()
  const recipe = data.find((recipe) => params.id == recipe.id)


  const DeleteHandler = () => {
    const filterdData = data.filter((recipe) => recipe.id != params.id)
    setdata(filterdData)
    localStorage.setItem("recipes", JSON.stringify(filterdData))
    toast.success("Recipe Deleted")
    navigate("/recipes")
  }


  return recipe ? (
    <div className="flex justify-center items-center py-20 px-4 bg-white">
      <div className="max-w-7xl bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={recipe.imageurl}
            alt={recipe.title}
            className="w-full h-[450px] object-cover rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2 space-y-4 text-gray-800">


          <div>
            <h1 className="text-3xl font-semibold">{recipe.title}</h1>
            <p className=" text-gray-500 mt-1">by {recipe.chef}</p>
          </div>

          <div>
            <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full">
              {recipe.category}
            </span>
          </div>

          <div>
            <h2 className="text-md font-medium">Description</h2>
            <p className=" text-gray-600 leading-relaxed">{recipe.description}</p>
          </div>

          <div>
            <h2 className="text-md font-medium">Instructions</h2>
            <p className=" text-gray-600 whitespace-pre-line">{recipe.instructions}</p>
          </div>

          <div>
            <h2 className="text-md font-medium">Ingredients</h2>
            <ul className="list-disc list-inside  text-gray-600">
              {recipe.ingredients?.split(",").map((ing, idx) => (
                <li key={idx}>{ing.trim()}</li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 pt-4">
            <Link to={`/recipes/details/${recipe.id}/update`} className="bg-gray-200 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-300 text-sm transition">
              Update
            </Link>
            <button onClick={DeleteHandler} className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 text-sm transition">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center text-gray-500 text-lg mt-20">Loading recipe...</div>
  );
};

export default SingleRecipe
