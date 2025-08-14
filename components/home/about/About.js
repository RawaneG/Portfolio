import { Stats } from "./Stats";
import styles from "./about.module.scss";
import { useTranslation } from "next-i18next";
import { Reveal } from "@/components/utils/Reveal";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MyLinks } from "@/components/nav/components/MyLinks";
import { SectionHeader } from "@/components/utils/SectionHeader";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const About = () => {
  const { t } = useTranslation(["about", "common"]);
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title={t("common:nav.about")} dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              {t("about.first-text")}
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>{t("about.second-text")}</p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>{t("my_links")}</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};

// export async function getStaticProps({ locale }) {
//   return { props: { ...(await serverSideTranslations(locale, ["about"])) } };
// }
