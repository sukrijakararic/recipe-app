import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import choices from "./choices.module.css";

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

      <div className={choices.formContainer}>
        <form className={choices.radioForm}>
          <div>
            <input
              className={choices.radioButtons}
              onClick={handleClick}
              type="radio"
              id="breakfast,"
              name="type"
            />
            <label htmlFor="breakfast,">Breakfast</label>
          </div>

          <div>
            <input
              className={choices.radioButtons}
              onClick={handleClick}
              type="radio"
              id="lunch,"
              name="type"
            />
            <label htmlFor="lunch,">Lunch</label>
          </div>

          <div>
            <input
              className={choices.radioButtons}
              onClick={handleClick}
              type="radio"
              id="dinner,"
              name="type"
            />
            <label htmlFor="dinner,">Dinner</label>
          </div>
        </form>
      </div>
    </div>
  );
};
