import styles from "./styles.module.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

export const Header = () => {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className={styles.header} data-aos="fade-right">
      <span className={styles.good}>Good</span>{" "}
      <span className={styles.eats}>Eats!</span>{" "}
      <img
        className={styles.chicken}
        src="/Buffalo-Wing-Celery-01-01.svg"
        alt="acacs"
      />
    </div>
  );
};
