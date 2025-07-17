// AboutUs.jsx

import { Link } from "react-router-dom";

export default function AboutUs() {
  const features = [
    {
      title: "Easy Recipe Access",
      description: "Quickly find and follow recipes with step-by-step guidance for hassle-free cooking.",
      icon: "🍳",
    },
    {
      title: "Personalized Collections",
      description: "Save your favorite recipes, create meal plans, and organize them for easy access anytime.",
      icon: "📒",
    },
    {
      title: "Smart Meal Planning",
      description: "Plan your meals for the week and automatically generate your shopping list with ease.",
      icon: "🛒",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center  justify-center  px-4 py-20">
      <div className="text-center max-w-2xl mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold  text-orange-500 mb-4">
          Why Choose YumNote
        </h2>
        <p >
           YumNote transforms your cooking journey into a seamless, enjoyable experience, helping you save time, reduce waste, and cook confidently.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 flex flex-col items-center text-center border border-neutral-800 hover:border-orange-500 transition-colors duration-300"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-orange-400 mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      <Link to="/recipes" className="px-5 py-2 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 transition">
        Explore Recipes
      </Link>
    </section>
  );
}
