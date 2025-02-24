import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import apiStyling from "./apiStyling.module.css";
import "animate.css";

const apiKey = "apiKey=4bf6c458c2cf48b4ab3bc26b7eda5a57";
export const GetRecipeByIngredients = ({ ingredArray }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  const offset = Math.floor(Math.random() * 9);
  const [ingredientsRecipe, setIngredientsRecipe] = useState([]);
  const regex = /(<([^>]+)>|\.+\s*$)/gi;
  const ingredientText = ingredArray.map((ingred) => ingred.text).join(",");
  const callRecipeApiForIngredients = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?${apiKey}&offset=${offset}&includeIngredients=${ingredientText}&sort=max-used-ingredients&number=3&&addRecipeInformation=true&addRecipeInstructions=true&addRecipeNutrition=true&maxAlcohol=0`
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
    setTimeout(() => {
      document.getElementById("results").scrollIntoView({
        behavior: "smooth",
      });
    }, 500);
  };

  return (
    <div id="results">
      {ingredientText ? (
        <button
          onClick={handleClick}
          className="animate__animated animate__bounce"
        >
          <span className={apiStyling.lets}>Lets</span>{" "}
          <span className={apiStyling.eat}>Eat!</span>
        </button>
      ) : (
        <></>
      )}
      
      <div style={{marginBottom: "2rem"}} id="recipeResults">
      {ingredientsRecipe.map((recipe) => {
        const summaryWithoutTags = recipe.summary.replace(regex, " ");
        const summaryWithoutLastSentence = summaryWithoutTags.replace(
          /(?<=\.\s)[^.]*$/,
          ""
        );
        return (
          <div key={recipe.id} data-aos="fade-right">
            <p className={apiStyling.recipeTitle}>{recipe.title}</p>
            <div className={apiStyling.results}>
              <div className={apiStyling.imageContainer}>
                <img src={recipe.image} alt={recipe.title} />
                <h4>Important Info:</h4>
                <ul>
                  <li>Ready in {recipe.readyInMinutes} minutes</li>
                  <li>{recipe.dishTypes[0]}</li>
                  <li>Servings: {recipe.servings}</li>
                  <li>Healthscore: {recipe.healthScore}</li>
                </ul>
              </div>
              <div className={apiStyling.metaData}>
                <p className={apiStyling.summary}>
                  {summaryWithoutLastSentence}
                </p>
                <a
                  href={recipe.sourceUrl}
                  target="_blank"
                  className={apiStyling.anchor}
                >
                  <p>👉Click here for the full recipe👈</p>
                </a>
              </div>
            </div>
          </div>
        );
      })} </div>
    </div>
  );
};
