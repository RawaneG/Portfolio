import styles from "./header.module.scss";
import { Reveal } from "./Reveal";

export const SectionHeader = ({ title, dir = "r", titleWidth }) => {
  return (
    <div
      className={styles.sectionHeader}
      style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
    >
      <div className={styles.line} />
      <h3>
        <Reveal>
          <span
            className={styles.title}
            style={
              titleWidth
                ? { display: "inline-block", width: titleWidth }
                : undefined
            }
          >
            {title}
            <span>.</span>
          </span>
        </Reveal>
      </h3>
    </div>
  );
};
