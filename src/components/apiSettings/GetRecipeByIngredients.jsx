import React from "react";

export const GetRecipeByIngredients = () => {
  const callRecipeApiForIngredients = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClick = () => {
    callRecipeApiForIngredients();
  };

  return (
    <div>
      <button onClick={handleClick}>Get Recipe By Ingredients</button>
    </div>
  );
};
