import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export const Contact = () => {
  const { t } = useTranslation("contact");
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            {t("header")}<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            {t("body.top")} {" "}
            <Link
              href="https://www.linkedin.com/in/el-hadji-rawane-meissa-sow-b870051a5/"
              target="_blank"
              rel="nofollow"
            >
              {t("body.linkedin")}
            </Link>{" "}
            {t("body.or")} {" "}
            <Link
              href="https://twitter.com/hadji_meissa"
              target="_blank"
              rel="nofollow"
            >
              {t("body.twitter")}
            </Link>{" "}
            {t("body.bottom")}
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="mailto:rawane.meissa@gmail.com">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>rawane.meissa@gmail.com</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
