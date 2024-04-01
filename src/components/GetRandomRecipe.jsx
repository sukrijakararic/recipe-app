import React, { useState } from "react";

const apiKey = "apiKey=2c286c913818405685a052e9d10d313a";

export const GetRandomRecipe = ({protein, cuisine}) => {
  const [popular, setPopular] = useState([]);

  console.log(protein) // dont forget to delete these before production 
  console.log(cuisine)


  
  const getPopular = async () => {

    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?${apiKey}&number=30&query=${cuisine}${protein}&maxAlcohol=0&offset=0`
    );
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    const resultsFromArray = jsonResponse.results
    console.log(resultsFromArray);
    setPopular(resultsFromArray)
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
              {recipe.title}
            </p>
            <p></p>
            <img src={recipe.image} alt="a picture of the food" />
          </div>
        );
      })}
    </div>
  );
};
