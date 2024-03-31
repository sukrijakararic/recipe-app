import React, { useState } from "react";
import styles from "./styles.module.css";

export const Cuisine = ({ setCuisine }) => {
  const handleClick = (e) => {
    setCuisine(e.target.id);
  };

  return (
    <div>
      <form className={styles.cuisine}>
        <h3>Pick a cuisine</h3>

        <div>
          <input
            onClick={handleClick}
            type="radio"
            id="asian,"
            name="cuisine"
          />
          <label htmlFor="asian,">Asian</label>
        </div>

        <div>
          <input
            onClick={handleClick}
            type="radio"
            id="mediterranean,"
            name="cuisine"
          />
          <label htmlFor="mediterranean,">Mediterranean</label>
        </div>

        <div>
          <input
            onClick={handleClick}
            type="radio"
            id="italian,"
            name="cuisine"
          />
          <label htmlFor="italian,">Italian</label>
        </div>
      </form>
    </div>
  );
};
