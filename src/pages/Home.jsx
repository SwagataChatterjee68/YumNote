import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-6xl mx-auto pt-32">
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Effortless Cooking <span className="text-orange-500"> and </span>  Delicious <span className="text-orange-500">Results </span> </h2>
          <p className="text-gray-600 max-w-md mx-auto md:mx-0">Your digital recipe companion for organized, stress-free cooking.</p>
          <Link to="/recipes" className="bg-orange-500 text-white px-6 py-3 rounded-full inline-block mt-2 hover:bg-orange-600 transition">Explore all Recipes</Link>
        </div>
        <img src="https://images.unsplash.com/photo-1746274394124-141a1d1c5af3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2QlMjBpbiUyMGxhbnNjYXBlfGVufDB8fDB8fHww" alt="Chef" className=" w-96 h-96  md:w-80 mt-10 md:mt-0 animate-float rounded-2xl" />
      </section>

      {/* Popular Recipes Section */}
      <section className=" py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Popular Recipes You Can't Miss</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">From comfort food classics to exotic flavors, our featured recipes are sure to impress.</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Spicy Paneer Tikka", desc: "A delicious Indian appetizer made with marinated paneer cubes grilled to perfection.", img: "https://t3.ftcdn.net/jpg/09/81/26/94/360_F_981269480_IPRBYhb0s0gaTSQI295xnirlHg0cOuMK.jpg" },
              { title: "Spaghetti Carbonara", desc: "A classic Roman pasta dish with creamy eggs, cheese, pancetta, and pepper.", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141" },
              { title: "Paneer Butter Masala", desc: "A rich and creamy Indian curry made with paneer and a buttery tomato sauce.", img: "https://vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg" },
              { title: "Sushi Roll", desc: "A Japanese rice roll with raw fish, vegetables, and seaweed wrap.", img: "https://media.istockphoto.com/id/1354366250/photo/set-of-rainbow-uramaki-sushi-rolls-with-avocado.jpg?s=612x612&w=0&k=20&c=wgFUfdRVdtW976mlii4zK_Ziy7rqEcXWPHjGZ8dO5A0=" },
            ].map((recipe, index) => (
              <div key={index} className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden flex flex-col">
                <img src={recipe.img} alt={recipe.title} className="h-48 w-full object-cover" />
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <h4 className="font-semibold text-lg mb-2">{recipe.title}</h4>
                  <p className="text-gray-600 text-sm flex-grow">{recipe.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore by Cuisine Section */}
      <section className=" py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Explore by Cuisine Type</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Discover new flavors and cooking techniques with our diverse selection of cuisine types.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                type: "Indian",
                desc: "Experience the rich, spicy flavors of authentic Indian cuisine.",
                img: "https://images.unsplash.com/photo-1619714604882-db1396d4a718?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZGlhbiUyMGZvb2QlMjBpbiUyMGxhbnNjYXBlfGVufDB8fDB8fHww", // replace with preferred
              },
              {
                type: "Italian",
                desc: "Indulge in the comforting and hearty tastes of Italian dishes.",
                img: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a", // replace with preferred
              },
              {
                type: "Japanese",
                desc: "Discover the art of Japanese cooking, from sushi to ramen bowls.",
                img: "https://images.unsplash.com/photo-1553621042-f6e147245754", // replace with preferred
              },
            ].map((cuisine, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden flex flex-col cursor-pointer group"
              >
                <img
                  src={cuisine.img}
                  alt={cuisine.type}
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <h4 className="font-semibold text-lg mb-2">{cuisine.type}</h4>
                  <p className="text-gray-600 text-sm flex-grow">{cuisine.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Us Section with Form */}
      <section className=" py-16 px-8 max-w-4xl mx-auto rounded-3xl mt-10 border border-transparent ">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold mb-2">Get in Touch With Us</h3>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have questions, feedback, or collaboration ideas? Fill out the form below and we will get back to you shortly!
          </p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="p-3 rounded-xl border border-gray-300 focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-300 bg-white"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="p-3 rounded-xl border border-gray-300 focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-300 bg-white"
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="message" className="mb-1 text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your message..."
              className="p-3 rounded-xl border border-gray-300 focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-300 bg-white resize-none"
            ></textarea>
          </div>
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

    </div>
  );
}

export default Home;