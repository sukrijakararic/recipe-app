import React, { useState } from "react";
import styles from "./styles.module.css";

export const Cuisine = ({setCuisine}) => {

  const handleClick = (e) => {
    setCuisine(e.target.id);
  };

  return (
    <div>
      <h2>What cuisine would you like to eat?</h2>

      <form className={styles.cuisine}>
        <div>
          <input onClick={handleClick} type="radio" id="asian," name="cuisine" />
          <label htmlFor="asian,">Asian</label>
        </div>

        <div>
          <input onClick={handleClick} type="radio" id="mediterranean," name="cuisine" />
          <label htmlFor="mediterranean,">Mediterranean</label>
        </div>

      </form>
    </div>
  );
};
