import React from "react";
import search from "./search.module.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
export const SearchByIng = ({ setSearch, setExplanation }) => {
  useEffect(() => {
    Aos.init();
  }, [])
  const handleClick = (event) => {
    console.log(event)
    setSearch(event.target.id);
    setExplanation(false)
  };

  return (
    <div  className={search.searchContainer} data-aos="fade-right">
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
