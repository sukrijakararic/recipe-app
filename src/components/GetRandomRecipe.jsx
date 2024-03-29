import React, { useState } from "react";

const apiKey = "apiKey=2c286c913818405685a052e9d10d313a";

export const GetRandomRecipe = () => {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?${apiKey}&number=3&exclude-tags=pork,bacon`
    );
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    setPopular(jsonResponse.recipes);
  };

  const handleClick = () => {
    getPopular();
  };

  return (
    <div>
      <button onClick={handleClick}>Generate</button>
      {popular.map((recipe) => {
        return (
          <div key={recipe.id}>
            <p>
              {recipe.title} {recipe.dishTypes[0]}
            </p>
            <p>{recipe.sourceUrl}</p>
            <img src={recipe.image} alt="image of the recipe" />
          </div>
        );
      })}
    </div>
  );
};
