import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaUtensils,
  FaComments,
  FaBookmark,
} from "react-icons/fa";

const MixGreenRecipePage = ({ recipe }) => {
  const [checkedIngredients, setCheckedIngredients] = useState([]);
  const [checkedInstructions, setCheckedInstructions] = useState([]);

  const brandColor = "#C46C5F";

  const toggleIngredient = (idx) => {
    setCheckedIngredients((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const toggleInstruction = (idx) => {
    setCheckedInstructions((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <article className="lg:col-span-3">
      <div className="max-w-4xl mx-auto p-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-2">
          Home &gt; <span style={{ color: brandColor }}>Recipe</span> &gt; {recipe.title}
        </nav>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{recipe.title}</h1>

        {/* Meta Info */}
        <div className="flex items-center text-sm text-gray-600 mb-4 gap-4 flex-wrap">
          <span className="flex items-center gap-1"><FaUtensils /> Author name</span>
          <span className="flex items-center gap-1"><FaCalendarAlt /> Sep 26, 2023</span>
          <span className="flex items-center gap-1"><FaComments /> 22 comments</span>
          <span className="flex items-center gap-1"><FaBookmark /> 9 Saves</span>
          <span className="flex items-center gap-1" style={{ color: brandColor }}>
            ★★★★☆ <span className="text-xs text-gray-500">(4.0 / 10 Reviews)</span>
          </span>
        </div>

        {/* Image */}
        <figure className="mb-3 rounded overflow-hidden">
          <img src={recipe.image} alt="Salad" className="w-200 h-130  object-cover rounded-md" />
        </figure>

        {/* Time/Servings */}
        <div className="flex justify-center text-center text-sm text-gray-700 mb-6 border-b gap-10 pb-4">
          <div><p className="font-semibold">Prep time:</p><p>5 mins</p></div>
          <div><p className="font-semibold">Cook time:</p><p>5 mins</p></div>
          <div><p className="font-semibold">Serving</p><p>4 Serving</p></div>
          <div>
            <button
              className="px-3 py-1 border rounded transition"
              style={{
                borderColor: brandColor,
                color: brandColor,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = brandColor;
                e.currentTarget.style.color = "#fff";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = brandColor;
              }}
            >
              🖨️ Print Recipe
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-6">{recipe.description}</p>

        {/* ✅ Ingredients Section */}
        <section className="mb-8 pt-10">
          <h3 className="text-xl font-semibold mb-3" style={{ color: brandColor }}>🧂 Ingredients</h3>
          <ul className="space-y-2">
            {recipe.ingredients.map((item, idx) => (
              <li key={idx} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={checkedIngredients.includes(idx)}
                  onChange={() => toggleIngredient(idx)}
                  className="w-4 h-4"
                  style={{ accentColor: brandColor }}
                />
                <span
                  className={`text-gray-800 ${
                    checkedIngredients.includes(idx) ? "line-through text-gray-400" : ""
                  }`}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* ✅ Instructions Section */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3" style={{ color: brandColor }}>👨‍🍳 Instructions</h3>
          <ol className="space-y-3 list-decimal list-inside">
            {recipe.instructions.map((step, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={checkedInstructions.includes(idx)}
                  onChange={() => toggleInstruction(idx)}
                  className="mt-1 w-4 h-4"
                  style={{ accentColor: brandColor }}
                />
                <span
                  className={`text-gray-800 ${
                    checkedInstructions.includes(idx) ? "line-through text-gray-400" : ""
                  }`}
                >
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </article>
  );
};

export default MixGreenRecipePage;
