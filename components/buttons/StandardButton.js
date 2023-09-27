import styles from "./standardbutton.module.scss";

export const StandardButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.standardButton}>
      {children}
    </button>
  );
};
