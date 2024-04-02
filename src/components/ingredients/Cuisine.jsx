import React, { useState } from "react";
import styles from "./styles.module.css";

export const Cuisine = ({ setCuisine }) => {
  const handleClick = (e) => {
    setCuisine(e.target.id);
  };

  return (
    <div>

<h3>First, lets pick a cuisine</h3>
      <form className={styles.cuisine}>

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

        <div>
          <input
            onClick={handleClick}
            type="radio"
            id="middleeastern,"
            name="cuisine"
          />
          <label htmlFor="middleeastern,">Middle Eastern</label>
        </div>

        <div>
          <input
            onClick={handleClick}
            type="radio"
            id="mexican,"
            name="cuisine"
          />
          <label htmlFor="mexican,">Mexican</label>
        </div>

        <div>
          <input
            onClick={handleClick}
            type="radio"
            id="american,"
            name="cuisine"
          />
          <label htmlFor="american,">American</label>
        </div>
      </form>
    </div>
  );
};
