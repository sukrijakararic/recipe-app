import React from "react";
import search from "./search.module.css";
export const SearchByIng = ({ setSearch }) => {
  const handleClick = (event) => {
    console.log(event)
    setSearch(event.target.id);
  };

  return (
    <div  className={search.searchContainer}>
      <div className={search.optionDiv} onClick={handleClick}>
        <p id="option1" className={search.option}>
        Search by Query
        </p>
      </div>

      <div onClick={handleClick} className={search.optionDiv}>
        <p id="option2" className={search.option}>
          Search by Ingredients
        </p>
      </div>
    </div>
  );
};
