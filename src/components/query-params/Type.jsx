import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const Type = ({ setType }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  let activeElement;

  const handleClick = (target) => {
    setType(target.id);

    if (activeElement) {
    activeElement.classList.remove("choice");
    } 
    activeElement = target;
  };

  const handleColor = () => {
    activeElement.classList.add("choice");
  };

  const executeBoth = (event) => {
    const eventTarget = event.target
    handleClick(eventTarget);
    handleColor(eventTarget);
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
            onClick={executeBoth}
            id="lunch,"
            name="type"
          >
            Lunch
          </span>
        </div>

        <div>
          <span
            onClick={executeBoth}
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
