import React, { useState } from "react";
import ingredientStyling from "./ingredientStyling.module.css";

export const IngredientsArray = ({ ingredArray, needed }) => {



  
  return (
    <div className={ingredientStyling.ingredientsArrayContainer}>
      {ingredArray.map((ingredient) => (
        <div key={ingredient.id} className={ingredientStyling.ingredient}>
          <p>{ingredient.text}</p>

          <svg
        
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
