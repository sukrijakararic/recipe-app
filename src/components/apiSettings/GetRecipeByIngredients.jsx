import React, { useState, useEffect } from "react";

const apiKey = "apiKey=4bf6c458c2cf48b4ab3bc26b7eda5a57";
export const GetRecipeByIngredients = ({ingredArray}) => {

  const offset = Math.floor(Math.random() * 9);
  const [ingredientsRecipe, setIngredientsRecipe] = useState([]);
  const callRecipeApiForIngredients = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?${apiKey}&offset=${offset}&includeIngredients=apples&sort=max-used-ingredients&number=5&&addRecipeInformation=true&addRecipeInstructions=true&addRecipeNutrition=true`
      );
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      console.log(jsonResponse.results);
      setIngredientsRecipe(jsonResponse.results);
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
      {ingredientsRecipe.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <img src={recipe.image} alt={recipe.title} />
          <br></br>
          <a href={recipe.sourceUrl} target="_blank">
            Click Me
          </a>
        </div>
      ))}
    </div>
  );
};
