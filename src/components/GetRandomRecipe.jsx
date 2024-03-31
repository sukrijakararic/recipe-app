import React, { useState } from "react";

const apiKey = "apiKey=2c286c913818405685a052e9d10d313a";

export const GetRandomRecipe = ({protein, cuisine}) => {
  const [popular, setPopular] = useState([]);

  console.log(protein) // dont forget to delete these before production 
  console.log(cuisine)


  
  const getPopular = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?${apiKey}&number=3&include-tags=${cuisine}${protein}`
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
