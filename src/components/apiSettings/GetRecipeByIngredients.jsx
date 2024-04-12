import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import apiStyling from "./apiStyling.module.css";
import "animate.css";


const apiKey = "apiKey=2c286c913818405685a052e9d10d313a";

export const GetRecipeByIngredients = () => {

  useEffect(() => {
    Aos.init();
  }, []);

  const [ingredientslist, setIngredientslist] = useState([]);

  try {
    
  } catch (error) {
    console.log(error);
  }

  return (
    <div>


    </div>
  )
}
