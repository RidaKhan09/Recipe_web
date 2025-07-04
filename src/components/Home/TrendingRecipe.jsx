
import onionRings from '../../assets/Home/Trending_Recipe/onionRings.png';
import toastTomato from '../../assets/Home/Trending_Recipe/toastTomato.png';
import hamEgg from '../../assets/Home/Trending_Recipe/hamEgg.png';
import chickenWrap from '../../assets/Home/Trending_Recipe/chickenWrap.png';
import tunaSalad from '../../assets/Home/Trending_Recipe/tunaSalad.png';
import pancake from '../../assets/Home/Trending_Recipe/pancake.png';

import React from "react";

const recipes = [
    {
      id: 1,
      title: "Onion Rings",
      img: onionRings,
      rating: 4,
      author: "Alex Martin",
      calories: 322,
    },
    {
      id: 2,
      title: "Toast with Tomato, Onion, & Hummus",
      img: toastTomato,
      rating: 4,
      author: "Alex Martin",
      calories: 199,
    },
    {
      id: 3,
      title: "Ham, Egg, and Spinach Roll-Ups",
      img: hamEgg,
      rating: 4,
      author: "Alex Martin",
      calories: 174,
    },
    {
      id: 4,
      title: "Chicken Ranch Wrap",
      img: chickenWrap,
      rating: 4,
      author: "Alex Martin",
      calories: 188,
    },
    {
      id: 5,
      title: "Tuna Mex Tuna Salad",
      img: tunaSalad,
      rating: 4,
      author: "Alex Martin",
      calories: 298,
    },
    {
      id: 6,
      title: "Strawberry and Cherry pancake",
      img: pancake,
      rating: 4,
      author: "Alex Martin",
      calories: 251,
    },
  ];  

// Star icon for rating
const StarIcon = ({ filled }) => (
  <svg
    className={filled ? "text-red-500" : "text-red-300"}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="none"
    aria-hidden="true"
    width={16}
    height={16}
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.973c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.973a1 1 0 00-.364-1.118L2.036 9.4c-.784-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.973z" />
  </svg>
);

// Bookmark icon (filled)
const BookmarkIcon = () => (
  <svg
    className="w-6 h-6 text-red-600"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M6 4a2 2 0 00-2 2v14l7-5 7 5V6a2 2 0 00-2-2H6z" />
  </svg>
);

const TrendingRecipes = () => {
  return (
    <section className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Trending Recipe</h2>
        <a
          href="#"
          className="text-red-600 hover:underline font-medium text-sm"
          aria-label="View more recipes"
        >
          View more
        </a>
      </div>

      {/* Recipe Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map(({ id, title, img, rating, author, calories }) => (
          <article
            key={id}
            className="relative bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            {/* Image with bookmark */}
            <div className="relative">
              <img
                src={img}
                alt={`${title} - delicious food presentation on plate`}
                className="w-full h-48 object-cover rounded-t-lg"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a035b7b1-ee69-422c-b2f7-697bb7dae19a.png";
                }}
              />
              <button
                aria-label="Save recipe"
                className="absolute top-2 right-2 bg-white bg-opacity-80 rounded p-1 hover:bg-red-100 active:bg-red-200 transition"
                type="button"
              >
                <BookmarkIcon />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-2" aria-label={`Rating: ${rating} out of 5 stars`}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} filled={star <= rating} />
                ))}
              </div>

              {/* Title */}
              <h3 className="text-gray-900 font-medium text-base mb-3 capitalize">{title}</h3>

              {/* Spacer */}
              <div className="flex-grow" />

              {/* Author and calories */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-100 text-sm text-gray-600">
                {/* Author */}
                <div className="flex items-center space-x-2">
                  <img
                    src=""
                    alt="Alex Martin avatar"
                    className="w-8 h-8 rounded-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/621a5970-3772-42ed-99bf-92890586a7de.png";
                    }}
                    loading="lazy"
                  />
                  <span>{author}</span>
                </div>

                {/* Calories */}
                <div className="flex items-center space-x-1 border border-red-200 text-red-600 rounded-full py-1 px-3">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                  <span>{calories} cals</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TrendingRecipes;

