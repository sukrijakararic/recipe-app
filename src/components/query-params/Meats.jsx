import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const Meats = ({ setProtein }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  const handleClick = (e) => {
    setProtein(e.target.id);
  };

  return (
    <div data-aos="fade-up">
      <h3>Pick a protein</h3>
      <form>
        <div>
          <input
            onClick={handleClick}
            type="radio"
            id="chicken,"
            name="protein"
          />
          <label htmlFor="chicken,">Chicken</label>
        </div>

        <div>
          <input onClick={handleClick} type="radio" id="beef," name="protein" />
          <label htmlFor="beef,">Beef</label>
        </div>

        <div>
          <input onClick={handleClick} type="radio" id="fish," name="protein" />
          <label htmlFor="fish,">Fish</label>
        </div>

        <div>
          <input
            onClick={handleClick}
            type="radio"
            name="protein"
            id="&diet=vegetarian,"
          />
          <label htmlFor="&diet=vegetarian,">Vegetarian</label>
        </div>
      </form>
    </div>
  );
};
