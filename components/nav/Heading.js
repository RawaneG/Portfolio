import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";
import { LanguageSwitcher } from "@/components/utils/LanguageSwitcher";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export const Heading = () => {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  const resumeHref = locale === "fr" ? "/CV_Rawane_fr.pdf" : "/CV_Rawane_en.pdf";
  return (
    <header className={styles.heading}>
      <MyLinks />
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <LanguageSwitcher />
        <OutlineButton onClick={() => window.open(resumeHref)}>
          {t("resume")}
        </OutlineButton>
      </div>
    </header>
  );
};
