import styles from "./styles.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <span className={styles.good}>Good</span>{" "}
      <span className={styles.eats}>Eats!</span>{" "}
      <img src="/Buffalo-Wing-Celery-01-01.svg" alt="acacs" />
    </div>
  );
};
