import React from "react";
import search from "./search.module.css";
export const SearchByIng = () => {
  return (
    <div className={search.searchContainer}>
      <div className={search.optionDiv} >
        <p className={search.option}>Search by Ingredients</p>
      </div>

      <div className={search.optionDiv}>
        <p id={search.option1} className={search.option}>Search by Query</p>
      </div>
    </div>
  );
};
