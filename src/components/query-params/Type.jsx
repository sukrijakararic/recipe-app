import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const Type = ({ setType }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  const handleClick = (e) => {
    setType(e.target.id);
  };

  return (
    <div data-aos="fade-up">
      <h3>What are you having today?</h3>

      <form>
        <div>
          <input
            onClick={handleClick}
            type="radio"
            id="breakfast,"
            name="type"
          />
          <label htmlFor="breakfast,">Breakfast</label>
        </div>

        <div>
          <input onClick={handleClick} type="radio" id="lunch," name="type" />
          <label htmlFor="lunch,">Lunch</label>
        </div>

        <div>
          <input onClick={handleClick} type="radio" id="dinner," name="type" />
          <label htmlFor="dinner,">Dinner</label>
        </div>
      </form>
    </div>
  );
};
