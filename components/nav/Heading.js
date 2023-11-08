import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <OutlineButton
        onClick={() => window.open("/Cv_Rawane_Meissa_Sow.docx.pdf")}
      >
        My resume
      </OutlineButton>
    </header>
  );
};
