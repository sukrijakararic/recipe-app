import React, { useState } from "react";
import apiStyling from "./apiStyling.module.css";

const apiKey = "91e5d21482464f81a6df62753eb70fe6";
export const GetRandomPopularRecipe = () => {
  const handleClick = () => {
    getPopularRecipe();
  };

  const [random, setRandom] = useState([]);
  const getPopularRecipe = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random/?apiKey=${apiKey}&number=3&exclude-tags=pork`
      );
      const jsonResponse = await response.json();
      setRandom(jsonResponse.recipes);
      console.log(jsonResponse);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <button onClick={handleClick}>
        <span className={apiStyling.lets}>Lets</span>{" "}
        <span className={apiStyling.eat}>Eat!</span>
      </button>
    </div>
  );
};
