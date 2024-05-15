import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import apiStyling from "./apiStyling.module.css";
import "animate.css";

const apiKey = "apiKey=2c286c913818405685a052e9d10d313a";

export const GetRandomRecipe = ({ protein, cuisine, type }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  const offset = Math.floor(Math.random() * 9);
  const regex = /(<([^>]+)>|\.+\s*$)/gi;
  const [complex, setComplex] = useState([]);
  const getRandomComplexRecipe = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?${apiKey}&number=3&query=${cuisine}${protein}${type}&maxAlcohol=0&offset=${offset}&addRecipeInformation=true&instructionsRequired=true&addRecipeInstructions=true&fillIngredients=true`
      );
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      const resultsFromArray = jsonResponse.results;
      console.log(resultsFromArray);
      setComplex(resultsFromArray);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClick = () => {
    getRandomComplexRecipe();
  };

  return (
    <div>
      {type && cuisine && protein ? (
        <div className="animate__animated animate__bounceIn">
          <h3>And finally,</h3>
          <button onClick={handleClick}>
            <span className={apiStyling.lets}>Lets</span>{" "}
            <span className={apiStyling.eat}>Eat!</span>
          </button>
        </div>
      ) : (
        <></>
      )}
      {complex.map((recipe) => {
        const summaryWithoutTags = recipe.summary.replace(regex, " ");
        const summaryWithoutLastSentence = summaryWithoutTags.replace(/(?<=\.\s)[^.]*$/, "");
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
                <p className={apiStyling.summary}>{summaryWithoutLastSentence}</p>
                <a href={recipe.sourceUrl} target="_blank" className={apiStyling.anchor}><p>👉Click here for the full recipe👈</p></a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
