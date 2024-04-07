import React from "react";
import search from "./search.module.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
export const Searches = ({ setSearch, setShow }) => {
  useEffect(() => {
    Aos.init();
  }, [])
  const handleClick = (event) => {
    setSearch(event.target.id);
    setShow(false)
  };

  return (
    <div  className={search.searchContainer} data-aos="fade-right">
      <div className={search.optionDivVertical} onClick={handleClick}>
        <p id="option1" className={search.optionVertical}>
        Search by what I feel like eating
        </p>
      </div>

      <div onClick={handleClick} className={search.optionDivVertical}>
        <p id="option2" className={search.optionVertical}>
          Search by what's in my fridge
        </p>
      </div>

      <div onClick={handleClick} className={search.optionDivVertical}>
        <p id="option3" className={search.optionVertical}>
          I'm Feeling Adventurous
        </p>
      </div>
    </div>
  );
};
