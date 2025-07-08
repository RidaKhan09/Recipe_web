
import React from "react";
import MixGreenRecipePage from "./MixGreenRecipePage";
import TodoPageComponent from "./TodoPageComponent";

const RecipeMain = ({ recipe }) => {
  return (
    <div className="lg:col-span-3 space-y-12">
    <MixGreenRecipePage recipe={recipe} />
    <TodoPageComponent recipe={recipe} />
  </div>
  );
};

export default RecipeMain;
