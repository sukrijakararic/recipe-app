import React from "react";

const apiKey = "apiKey=2c286c913818405685a052e9d10d313a";
export const GetRecipeByIngredients = () => {
  const callRecipeApiForIngredients = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?${apiKey}&ingredients=apples&number=5`
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
