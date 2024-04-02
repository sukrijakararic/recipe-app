import { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'

const apiKey = "apiKey=2c286c913818405685a052e9d10d313a";

export const GetRandomRecipe = ({ protein, cuisine, setPopular, popular, type }) => {

  useEffect(() => {
    Aos.init();
  }, [])

  const offset = Math.floor(Math.random()*9)

  const getPopular = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?${apiKey}&number=3&query=${cuisine}${protein}${type}&maxAlcohol=0&offset=${offset}&instructionsRequired=true&addRecipeInstructions=true&`
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
      {type && cuisine && protein ? <button data-aos="flip-left" onClick={handleClick}><span className="lets">Lets</span>{" "}<span className="eat">Eat!</span></button> : <></>}
      {popular.map((recipe) => {
        return (
          <div key={recipe.id} data-aos="fade-right">
            <p>{recipe.title}</p>
            <img src={recipe.image} alt="a picture of the food" />
          </div>
        );
      })}
    </div>
  );
};
