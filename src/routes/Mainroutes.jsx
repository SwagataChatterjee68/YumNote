
import { Route, Routes } from 'react-router-dom'
import Recipes from "../pages/Recipes"
import Home from "../pages/Home"
import About from "../pages/About"
import Create from '../pages/Create'
import SingleRecipe from '../pages/SingleRecipe'
import UpdateRecipe from '../pages/UpdateRecipe'
import PageNotFound from '../pages/PageNotFound'
import Contact from '../pages/Contact'

const Mainroutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/recipes' element={<Recipes />} />
                <Route path='/create-recipe' element={<Create />} />
                <Route path='/recipes/details/:id' element={<SingleRecipe/>}/>
                <Route path='/recipes/details/:id/update' element={<UpdateRecipe/>}/>
                <Route path='*' element={<PageNotFound/>} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    )
}

export default Mainroutes
