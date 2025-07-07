import React from "react";
import Green_Godies from "../../assets/Green_Godies.jpg";
import Salad from "../../assets/Salad.jpg";
import Pizza from "../../assets/Pizza.jpg";
import Bowl_Smothie from "../../assets/Bowl_Smothie.jpg";
import smothie from "../../assets/smothie.jpg";
import Snapper from "../../assets/Snapper.jpg";
import Men from "../../assets/Men.jpg";

// Recipe Data
const recipes = [
  { id: 1, title: "Green Goodies: Veggie-Packed Power Bowl", img: Green_Godies, rating: 4, calories: 322 },
  { id: 2, title: "Garden Fresh Salad with Herbs & Lemon Dressing", img: Salad, rating: 4, calories: 199 },
  { id: 3, title: "Classic Cheesy Pepperoni Pizza Slice", img: Pizza, rating: 4, calories: 174 },
  { id: 4, title: "Tropical Smoothie Bowl with Fruits & Chia", img: Bowl_Smothie, rating: 4, calories: 188 },
  { id: 5, title: "Berry Blast Smoothie with Yogurt & Oats", img: smothie, rating: 4, calories: 298 },
  { id: 6, title: "Grilled Snapper with Garlic Lemon Butter", img: Snapper, rating: 4, calories: 251 },
];

const author = "Alex Martin";
const avatarFallback = Men;

// Star Icon
const Star_Icon = ({ filled }) => (
  <svg className={filled ? "text-[#C46C5F]" : "text-gray-300"} width={16} height={16} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.973c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.973a1 1 0 00-.364-1.118L2.036 9.4c-.784-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.973z" />
  </svg>
);

// Bookmark Icon
const Bookmark_Icon = () => (
  <svg className="w-6 h-6 text-[#C46C5F]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 4a2 2 0 00-2 2v14l7-5 7 5V6a2 2 0 00-2-2H6z" />
  </svg>
);

// Recipe Card
const Recipe_Card = ({ title, img, rating, calories }) => (
  <article className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative">
    {/* Image */}
    <div className="relative">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <button className="absolute top-2 right-2 bg-white bg-opacity-80 rounded p-1 hover:bg-[#C46C5F]/10 transition">
        <Bookmark_Icon />
      </button>
    </div>

    {/* Content */}
    <div className="p-4 flex flex-col flex-grow">
      {/* Rating */}
      <div className="flex space-x-1 mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star_Icon key={star} filled={star <= rating} />
        ))}
      </div>

      {/* Title */}
      <h3 className="text-gray-900 font-medium text-base mb-3 capitalize">{title}</h3>

      {/* Spacer */}
      <div className="flex-grow" />

      {/* Author + Calories */}
      <div className="flex justify-between items-center pt-4 border-t text-sm text-gray-600">
        {/* Author */}
        <div className="flex items-center gap-2">
          <img src={avatarFallback} alt={author} className="w-8 h-8 rounded-full object-cover" />
          <span>{author}</span>
        </div>

        {/* Calories */}
        <div className="flex items-center gap-1 border border-[#C46C5F] text-[#C46C5F] rounded-full px-3 py-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          <span>{calories} cals</span>
        </div>
      </div>
    </div>
  </article>
);

// Main Component
const Explore_Recipe = () => {
  return (
    <section className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Explore Recipes</h2>
        <a href="#" className="text-[#C46C5F] hover:underline font-medium text-sm">
          View more
        </a>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <Recipe_Card key={recipe.id} {...recipe} />
        ))}
      </div>
    </section>
  );
};

export default Explore_Recipe;
