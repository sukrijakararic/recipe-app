import React from "react";
import search from "./search.module.css";
export const SearchByIng = ({ setSearch }) => {
  const handleClick = (event) => {
    setSearch(event.target.id);
  };

  return (
    <div onClick={handleClick} className={search.searchContainer}>
      <a href="" target="_blank" className={search.optionAnchor}>
        <div>
          <p id={search.option1} className={search.option}>
            Search by Ingredients
          </p>
        </div>
      </a>

      <a href="" className={search.optionAnchor}>
      <div onClick={handleClick}>
        <p id={search.option2} className={search.option}>
          Search by Query
        </p>
      </div>
      </a>
    </div>
  );
};
