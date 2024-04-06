import React from "react";
import search from "./search.module.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
export const SearchesHorizontal = ({ setSearch }) => {
  useEffect(() => {
    Aos.init();
  }, [])
  const handleClick = (event) => {
    setSearch(event.target.id);
    
  };

  return (
    <div  className={search.searchHorizontalContainer} data-aos="fade-right">
      <div className={search.optionDiv} onClick={handleClick}>
        <p id="option1" className={search.option}>
        Search by what I feel like eating
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