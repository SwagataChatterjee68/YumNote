import { createContext, useEffect, useState } from "react"

export const recipecontext = createContext(null)

const RecipeContext = (props) => {
    const [data, setdata] = useState([])

    useEffect(() => {

        setdata(JSON.parse(localStorage.getItem("recipes"))||[])
    
      return () => {
        second
      }
    }, [])
    

    return (
        <recipecontext.Provider value={{ data, setdata }}>
            {props.children}
        </recipecontext.Provider>
    )
}

export default RecipeContext


//         {
//             id: 5,
//             title: "French Toast",
//             chef: "Julia Child",
//             imageurl: "https://cdn.loveandlemons.com/wp-content/uploads/2024/08/french-toast-recipe.jpg",
//             description: "Classic French toast made with egg-soaked bread slices fried to perfection.",
//             instructions: "1. Whisk eggs, milk, and cinnamon.\n2. Dip bread.\n3. Fry until golden.\n4. Serve with syrup.",
//             category: "Breakfast",
//             ingredients: "Bread, Eggs, Milk, Cinnamon, Butter, Maple Syrup"
//         },
//         {
//             id: 6,
//             title: "Grilled Chicken Salad",
//             chef: "Jamie Oliver",
//             imageurl: "https://www.theculinarycompass.com/wp-content/uploads/2021/01/Balsamic-Grilled-Chicken-Salad-12-683x1024.jpg",
//             description: "Healthy and fresh salad with grilled chicken, greens, and vinaigrette.",
//             instructions: "1. Grill chicken.\n2. Chop veggies.\n3. Mix and dress.\n4. Serve cold.",
//             category: "Healthy",
//             ingredients: "Chicken Breast, Lettuce, Tomato, Cucumber, Olive Oil, Lemon Juice, Salt, Pepper"
//         },
//         {
//             id: 7,
//             title: "Margherita Pizza",
//             chef: "Chef Antonio Rossi",
//             imageurl: "https://kristineskitchenblog.com/wp-content/uploads/2024/07/margherita-pizza-22-2.jpg",
//             description: "A classic Italian pizza made with fresh tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil.",
//             instructions: "Preheat oven to 475°F. Spread pizza dough, add sauce, mozzarella, and basil. Bake 10-12 minutes until crust is golden.",
//             category: "Italian",
//             ingredients: "pizza dough, tomato sauce, mozzarella, basil, olive oil, salt"
//         },
//         {
//             id: 8,
//             title: "Strawberry Cheesecake",
//             chef: "Chef Emily Carter",
//             imageurl: "https://media.istockphoto.com/id/1456338180/photo/sweet-breakfast-tea-and-delicious-cheesecake-with-fresh-strawberries-and-mint-homemade-recipe.jpg?s=612x612&w=0&k=20&c=-_cha5J9g1sqZfKVkqBQkRvS0p0qX2hUk_hlut2fsWc=",
//             description: "Creamy cheesecake with a buttery graham cracker crust and topped with fresh strawberry compote.",
//             instructions: "Mix crust ingredients and bake. Beat cream cheese with sugar, add eggs, bake, chill, then top with strawberry sauce.",
//             category: "Dessert",
//             ingredients: "cream cheese, sugar, graham crackers, eggs, butter, strawberries"
//         }