import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import { useTranslation } from "next-i18next";

export const Hero = () => {
  const { t } = useTranslation("hero");
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            {t("title")}<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            {t("subtitle_before")} <span>{t("subtitle_highlight")}</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            {t("blurb")}
          </p>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            {t("cta")}
          </StandardButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
