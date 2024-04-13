import React from "react";
import ingredientStyling from "./ingredientStyling.module.css";

export const IngredientsArray = ({ ingredArray }) => {
  return (
    <div className={ingredientStyling.ingredientsArrayContainer}>
      {ingredArray.map((ingredient) => (
        <div key={ingredient.id} className={ingredientStyling.ingredient}>
          <p>{ingredient.text}</p>
        </div>
      ))}
    </div>
  );
};
