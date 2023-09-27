import styles from "./outlinebutton.module.scss";

export const OutlineButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.outlineButton}>
      {children}
    </button>
  );
};
