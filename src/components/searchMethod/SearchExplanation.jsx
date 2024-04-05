import React from "react";
import search from "./search.module.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

export const SearchExplanation = () => {
    useEffect(() => {
        Aos.init();
      }, [])
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div data-aos="fade-right">
      <h3 className={search.header}>
        Lets start by choosing how you want to search for recipes
      </h3>
    </div>
  );
};
