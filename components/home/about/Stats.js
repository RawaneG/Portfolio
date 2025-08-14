import styles from "./stats.module.scss";
import { Reveal } from "@/components/utils/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { useTranslation } from "next-i18next";

export const Stats = () => {
  const { t } = useTranslation("about");
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>{t("use_at_work")}</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">PHP</span>
            <span className="chip">SQL</span>
            <span className="chip">HTML</span>
            <span className="chip">Java</span>
            <span className="chip">Jira</span>
            <span className="chip">React</span>
            <span className="chip">NodeJS</span>
            <span className="chip">GitHub</span>
            <span className="chip">Heroku</span>
            <span className="chip">Angular</span>
            <span className="chip">Symfony</span>
            <span className="chip">Laravel</span>
            <span className="chip">Express</span>
            <span className="chip">MongoDB</span>
            <span className="chip">Wordpress</span>
            <span className="chip">REST APIs</span>
            <span className="chip">BitBucket</span>
            <span className="chip">CSS / Sass</span>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">Spring Boot</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>{t("use_for_fun")}</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Figma</span>
            <span className="chip">Python</span>
            <span className="chip">Selenium</span>
            <span className="chip">Tailwind</span>
            <span className="chip">Puppeteer</span>
            <span className="chip">CommerceJS</span>
            <span className="chip">Framer Motion</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
