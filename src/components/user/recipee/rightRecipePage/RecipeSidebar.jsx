// src/components/RecipeSidebar.jsx
import React from "react";

const RecipeSidebar = ({ relatedRecipes, trendingTags }) => {
  return (
    <aside className="space-y-8 pt-33">
      {/* Recent Recipes */}
      <div className="flex justify-end items-center space-x-3">
        <button className="text-red-600 hover:text-red-800">
          <i className="fas fa-bookmark"></i>
        </button>
        <button className="text-red-600 hover:text-red-800">
          <i className="fas fa-share-alt"></i>
        </button>
      </div>

      <div className="border rounded bg-gray-50 p-4">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Nutrition Facts</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li className="flex justify-between"><span>Calories</span><span className="font-semibold">494</span></li>
          <li className="flex justify-between"><span>Carbs</span><span>80g</span></li>
          <li className="flex justify-between"><span>Fat</span><span>18g</span></li>
          <li className="flex justify-between"><span>Protein</span><span>24g</span></li>
          <li className="flex justify-between"><span>Fiber</span><span>23g</span></li>
          <li className="flex justify-between"><span>Net carbs</span><span>56g</span></li>
          <li className="flex justify-between"><span>Sodium</span><span className="font-semibold">444mg</span></li>
          <li className="flex justify-between"><span>Cholesterol</span><span>0mg</span></li>
        </ul>
      </div>

      {/* Recent Recipes */}
      <section>
        <h4 className="font-semibold mb-4">Recent Recipes</h4>
        {relatedRecipes.map(({ title, image }, i) => (
          <div key={i} className="flex items-center space-x-4 mb-3 cursor-pointer hover:bg-green-50 p-2 rounded transition">
            <img src={image} alt={title} className="w-16 h-12 object-cover rounded" />
            <p className="text-gray-800 font-medium">{title}</p>
          </div>
        ))}
      </section>

      {/* Tags */}
      <section className="pt-3">
        <h4 className="font-semibold mb-4">Trending Tags</h4>
        <div className="flex flex-wrap gap-2">
          {trendingTags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-green-100 text-green-700 rounded-full px-3 py-1 text-xs font-semibold cursor-pointer hover:bg-green-200 transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-green-50 rounded p-5 shadow">
        <h4 className="font-semibold mb-3 text-green-700">Stay connected with us</h4>
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-green-300 rounded p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-green-700"
          />
          <button
            type="submit"
            className="w-full bg-green-700 text-white rounded py-2 hover:bg-green-800 transition"
          >
            Subscribe
          </button>
        </form>
      </section>
    </aside>
  );
};

export default RecipeSidebar;
