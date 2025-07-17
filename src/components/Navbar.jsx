import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    isActive
      ? "text-orange-500 border-b-2 border-orange-500 pb-1"
      : "hover:text-orange-500 hover:scale-105 transition-all duration-200";

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-white/70 h-20 backdrop-blur-md border border-gray-200 shadow-lg px-6 py-3 w-full  mx-auto flex lg:justify-evenly justify-between items-center transition-all duration-300">
      <div className="text-xl font-bold tracking-tight text-gray-800">
        YumNote<span className="text-orange-500">.</span>
      </div>

      <div className="hidden md:flex space-x-6 text-gray-800 font-medium">
        <NavLink to="/" className={navLinkClasses}>
          Home
        </NavLink>
        <NavLink to="/about" className={navLinkClasses}>
          About Us
        </NavLink>
        <NavLink to="/recipes" className={navLinkClasses}>
          Recipes
        </NavLink>
        <NavLink to="/contact" className={navLinkClasses}>
          Contact
        </NavLink>
        <NavLink to="/create-recipe" className={navLinkClasses}>
          Create Recipe
        </NavLink>
        
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-gray-700"
        >
          {isOpen ? (
            <i className="ri-close-large-fill"></i>
          ) : (
            <i className="ri-menu-3-fill"></i>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-lg w-11/12 max-w-xs p-5 flex flex-col space-y-4 text-center z-40">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={navLinkClasses}>
            About Us
          </NavLink>
          <NavLink to="/recipes" onClick={() => setIsOpen(false)} className={navLinkClasses}>
            Recipes
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={navLinkClasses}>
            Contact
          </NavLink>
          <NavLink to="/create-recipe" onClick={() => setIsOpen(false)} className={navLinkClasses}>
           Create Recipe
          </NavLink>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
