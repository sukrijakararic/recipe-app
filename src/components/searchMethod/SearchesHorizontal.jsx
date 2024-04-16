import React from "react";
import search from "./search.module.css";


export const SearchesHorizontal = ({ setSearch }) => {

  const handleClick = (event) => {
    setSearch(event.target.id);
    
  };

  return (
    <div  className={search.searchHorizontalContainer} >
      <div className={search.optionDiv} onClick={handleClick}>
        <p id="option1" className={search.option}>
        Search by what you feel like eating
        </p>
      </div>

      <div onClick={handleClick} className={search.optionDiv}>
        <p id="option2" className={search.option}>
          Search by whats in your fridge
        </p>
      </div>

      <div onClick={handleClick} className={search.optionDiv}>
        <p id="option3" className={search.option}>
          I'm Feeling Adventurous
        </p>
      </div>
    </div>
  );
};