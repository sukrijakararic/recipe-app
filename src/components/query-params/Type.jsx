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

  const handleColor = () => {
    element.classList.add("choice");
  };

  const executeBoth = () => {
    handleClick();
    handleColor();
  };

  return (
    <div data-aos="fade-up">
      <h3>What are you having today?</h3>

      <form>
        <div>
          <span onClick={executeBoth} id="breakfast," name="type">
            Breakfast
          </span>
        </div>

        <div>
          <span
            onClick={handleClick}
            id="lunch,"
            name="type"
          >
            Lunch
          </span>
        </div>

        <div>
          <span
            onClick={handleClick}
            id="dinner,"
            name="type"
          >
            Dinner
          </span>
        </div>
      </form>
    </div>
  );
};
