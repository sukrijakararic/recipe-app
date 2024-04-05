import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import apiStyling from "./apiStyling.module.css";
import 'animate.css';

const apiKey = "apiKey=2c286c913818405685a052e9d10d313a";

export const GetRandomRecipe = ({
  protein,
  cuisine,
  setPopular,
  popular,
  type,
}) => {
  useEffect(() => {
    Aos.init();
  }, []);

  const offset = Math.floor(Math.random() * 9);

  const getPopular = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?${apiKey}&number=3&query=${cuisine}${protein}${type}&maxAlcohol=0&offset=${offset}&addRecipeInformation=true&instructionsRequired=true&addRecipeInstructions=true&fillIngredients=true`
      );
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      const resultsFromArray = jsonResponse.results;
      console.log(resultsFromArray);
      setPopular(resultsFromArray);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    getPopular();
  };

  return (
    <div>
      {type && cuisine && protein ? (
        <div className="animate__animated animate__bounceIn">
          <h3>And finally,</h3>
          <button onClick={handleClick}>
            <span className={apiStyling.lets}>Lets</span> <span className={apiStyling.eat}>Eat!</span>
          </button>
        </div>
      ) : (
        <></>
      )}
      {popular.map((recipe) => {
        return (
          <div key={recipe.id} data-aos="fade-right">
            <p className={apiStyling.recipeTitle}>{recipe.title}</p>
            <div className={apiStyling.results}>
              <div className={apiStyling.imageContainer}>
                <img src={recipe.image} alt="a picture of the food" />
                <p>Ready in {recipe.readyInMinutes} minutes</p>
                <h4>Here's what you'll need</h4>
                <ul>
                  {recipe.extendedIngredients.map((ingredient) => {
                    return <li key={steps.crypto.randomUUID()}>{ingredient.original}</li>;
                  })}
                </ul>
              </div>
              <div className={apiStyling.ingredientList}>
                <h3>Instructions</h3>
                <div>
                  {recipe.analyzedInstructions[0].steps.map((steps) => {
                    return (
                      <p key={steps.number}>
                        {steps.number}. {steps.step}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
