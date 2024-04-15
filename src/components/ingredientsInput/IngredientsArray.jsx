import React, { useState } from "react";
import ingredientStyling from "./ingredientStyling.module.css";

export const IngredientsArray = ({ ingredArray, setIngredArray }) => {

  const handleDelete = (id) => {
    const newArrayAfterDeletion = ingredArray.filter((ingredient) => ingredient.id !== id);
    setIngredArray(newArrayAfterDeletion);
  };

  return (
    <div className={ingredientStyling.ingredientsArrayContainer}>
      {ingredArray.map((ingredient) => (
        <div
          key={ingredient.id}
          className={ingredientStyling.ingredient}
          id="ingredient"
        >
          <p>{ingredient.text}</p>

          <svg
           onClick={() => handleDelete(ingredient.id)}
            className={ingredientStyling.ingredientIcon}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};
