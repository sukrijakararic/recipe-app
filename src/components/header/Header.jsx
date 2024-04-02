import header from "./header.module.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

export const Header = () => {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className={header.header} data-aos="fade-right">
      <span className={header.good}>Good</span>{" "}
      <span className={header.eats}>Eats!</span>{" "}
      <img
        className={header.chicken}
        src="/Buffalo-Wing-Celery-01-01.svg"
        alt="acacs"
      />
    </div>
  );
};
