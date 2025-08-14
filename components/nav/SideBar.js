import { motion } from "framer-motion";
import styles from "./sidebar.module.scss";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

export const SideBar = () => {
  const [selected, setSelected] = useState("");
  const { t } = useTranslation("common");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <motion.nav
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.sideBar}
    >
      <span className={styles.logo}>
        R<span>.</span>
      </span>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        href="#about"
        onClick={() => {
          setSelected("about");
        }}
        className={selected === "about" ? styles.selected : ""}
      >
        {t("nav.about")}
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        href="#projects"
        onClick={() => setSelected("projects")}
        className={selected === "projects" ? styles.selected : ""}
      >
        {t("nav.projects")}
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        href="#experience"
        onClick={() => setSelected("experience")}
        className={selected === "experience" ? styles.selected : ""}
      >
        {t("nav.experience")}
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        href="#contact"
        onClick={() => setSelected("contact")}
        className={selected === "contact" ? styles.selected : ""}
      >
        {t("nav.contact")}
      </motion.a>
    </motion.nav>
  );
};
