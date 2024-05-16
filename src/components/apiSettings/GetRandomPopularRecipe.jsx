import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import apiStyling from "./apiStyling.module.css";
import "animate.css";

const apiKey = "91e5d21482464f81a6df62753eb70fe6";
export const GetRandomPopularRecipe = () => {
  useEffect(() => {
    Aos.init();
  }, []);
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
  const regex = /(<([^>]+)>|\.+\s*$)/gi;
  return (
    <div>
      <button
        onClick={handleClick}
        className="animate__animated animate__bounce"
      >
        <span className={apiStyling.lets}>Lets</span>{" "}
        <span className={apiStyling.eat}>Eat!</span>
      </button>

      {random.map((recipe) => {
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
      })}
    </div>
  );
};
