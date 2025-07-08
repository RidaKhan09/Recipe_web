import React from 'react';
import {
  FaCalendarAlt,
  FaUtensils,
  FaComments,
  FaStar,
  FaPrint,
  FaBookmark,
  FaShareAlt,
} from 'react-icons/fa';

const TodoPageComponent = ({ recipe }) => {
  if (!recipe) return null; // safety check

  return (
    
    <div className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-lg space-y-6 mt-10">
      {/* Header Section */}
      <div className="flex gap-4">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-28 h-28 object-cover rounded"
        />
        <div className="flex flex-col justify-between">
          <h2 className="text-xl font-semibold text-gray-800">{recipe.title}</h2>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1"><FaUtensils /> Author name</span>
            <span className="flex items-center gap-1"><FaCalendarAlt /> Sep 26, 2023</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>Dinner, Salad</span>
            <span className="flex items-center gap-1"><FaComments /> 22 comments</span>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <div className="flex text-red-500">
          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-gray-300" />
        </div>
        <span>4.0 / 34 Reviews</span>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button className="flex items-center gap-2 px-3 py-2 border rounded text-white bg-red-600 hover:bg-red-700 text-sm">
          <FaPrint /> Print Recipe
        </button>
        <button className="flex items-center gap-2 px-3 py-2 border rounded text-red-600 border-red-600 hover:bg-red-100 text-sm">
          <FaBookmark /> Add to Favorite
        </button>
        <button className="flex items-center gap-2 px-3 py-2 border rounded text-red-600 border-red-600 hover:bg-red-100 text-sm">
          <FaShareAlt /> Share Recipe
        </button>
      </div>

      <hr />

      {/* ✅ Ingredients */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Ingredients:</h3>
        <ul className="space-y-2 text-gray-800">
          {recipe.ingredients.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <input type="checkbox" className="accent-red-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ✅ Instructions */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Instructions:</h3>
        <ol className="space-y-4 list-decimal list-inside text-gray-800">
          {recipe.instructions.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>

      {/* Cooking Note */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Cooking Note:</h3>
        <div className="flex items-start gap-2 text-gray-800">
          <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
          <p>Ensure the freshness of your mixed greens. Look for crisp, vibrant leaves with no signs of wilting or browning.</p>
        </div>
      </div>
    </div>
  );
};

export default TodoPageComponent;
