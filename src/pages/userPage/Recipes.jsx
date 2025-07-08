import React from "react";
import RecipeMain from "../../components/user/recipee/leftRecipePage/RecipeMain";
import RecipeSidebar from "../../components/user/recipee/rightRecipePage/RecipeSidebar";

import {RecipesPage} from '../../data/index'
import {RecipesImage} from '../../data/index'
import {TrendingTags} from '../../data/index'


const Recipes = () => {
  return (
    <div className="pt-32 min-h-screen bg-white text-gray-900 font-sans">
      <main className="container mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <RecipeMain recipe={RecipesPage} />
        <RecipeSidebar relatedRecipes={RecipesImage} trendingTags={TrendingTags} />
      </main>
    </div>
  );
};

export default Recipes;
