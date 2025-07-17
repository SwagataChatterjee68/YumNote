import { useContext } from "react"
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify";


const UpdateRecipe = () => {
    const { data, setdata } = useContext(recipecontext)
    const navigate = useNavigate()
    const params = useParams()
    const recipe = data.find((recipe) => params.id == recipe.id)

    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm({
            defaultValues: {
                title: recipe?.title,
                description: recipe?.description,
                chef: recipe?.chef,
                ingredients: recipe?.ingredients,
                imageurl: recipe?.imageurl,
                instructions: recipe?.instructions,
                category: recipe?.category
            }
        });

    const UpdateHandler = (recipe) => {
        const index = data.findIndex((recipe) => params.id == recipe.id)
        const copydata = [...data]
        copydata[index] = { ...copydata[index], ...recipe }
        setdata(copydata)
        localStorage.setItem("recipes",JSON.stringify(copydata))
        toast.success("Recipe Updated")
        navigate(`/recipes/details/${id}`)

        // Add recipe creation logic here 
    };

    return recipe ? (
        <div className="min-h-screen bg-white flex items-center justify-center py-10 px-10 mt-10">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center shadow-xl rounded-3xl overflow-hidden">
                {/* Content */}
                <div className="h-64 lg:h-full w-full rounded">
                    <img
                        src=" https://images.unsplash.com/photo-1671048116404-454fefede763?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Delicious Recipe"
                        className="object-cover w-full h-full "
                    />
                </div>

                <form
                    onSubmit={handleSubmit(UpdateHandler)}
                    className="bg-white px-6 sm:px-10 py-10 flex flex-col justify-center"
                >
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">Update the Recipe</h2>
                    </div>

                    <input
                        className="block border rounded-2xl border-gray-300 outline-0 p-3 mb-5 focus:border-red-600"
                        {...register("title", { required: true })}
                        type="text"
                        placeholder="Enter the Recipe Title"
                    />
                    {errors.title && <p className="text-red-500 text-sm">Title is required.</p>}

                    <input
                        className="block border rounded-2xl border-gray-300 outline-0 p-3 mb-5 focus:border-red-600"
                        {...register("chef", { required: true })}
                        type="text"
                        placeholder="Enter the Chef Name"
                    />
                    {errors.chef && <p className="text-red-500 text-sm">Chef Name required.</p>}

                    <input
                        className="block border rounded-2xl border-gray-300 outline-0 p-3 mb-5 focus:border-red-600"
                        {...register("imageurl")}
                        type="url"
                        placeholder="Image URL"
                    />
                    {errors.image && <p className="text-red-500 text-sm">Image URL is required.</p>}
                    <select
                        className="block border rounded-2xl border-gray-300 outline-0 p-3 mb-5 focus:border-red-600 text-gray-500"
                        {...register("category", { required: true })}

                    >
                        <option value="">Select Category</option>
                        <option value="Italian">Italian</option>
                        <option value="Indian">Indian</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Salad">Salad</option>
                        <option value="Fast Food">Fast Food</option>
                        <option value="Dessert">Dessert</option>
                    </select>
                    {errors.category && <p className="text-red-500 text-sm">Category is required.</p>}

                    <textarea
                        className="block border rounded-2xl border-gray-300 outline-0 p-3 mb-5 focus:border-red-600 resize-none"
                        {...register("description", { required: true })}
                        placeholder="Short Description"
                        rows="3"
                    ></textarea>
                    {errors.description && <p className="text-red-500 text-sm">Description is required.</p>}

                    <textarea
                        className="block border rounded-2xl border-gray-300 outline-0 p-3 mb-5 focus:border-red-600 resize-none"
                        {...register("instructions", { required: true })}
                        placeholder="Instructions"
                        rows="5"
                    ></textarea>
                    {errors.instructions && <p className="text-red-500 text-sm">Instructions are required.</p>}

                    <input
                        className="block border rounded-2xl border-gray-300 outline-0 p-3 mb-5 focus:border-red-600"
                        {...register("ingredients", { required: true })}
                        type="text"
                        placeholder="Ingredients (comma separated)"
                    />

                    <button
                        type="submit"
                        className="mt-4 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-full transition duration-300"
                    >
                        Update Recipe
                    </button>
                </form>
            </div>
        </div>
    ) : (
        <div className="text-center text-gray-500 text-lg mt-20">Loading recipe...</div>
    );
};

export default UpdateRecipe
