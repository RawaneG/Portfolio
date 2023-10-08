import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <OutlineButton
        onClick={() => window.open("/Resume_El_Hadji_Rawane_Meissa_Sow.pdf")}
      >
        My resume
      </OutlineButton>
    </header>
  );
};
