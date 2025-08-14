import { Project } from "./Project";
import styles from "./projects.module.scss";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { useTranslation } from "next-i18next";

export const Projects = () => {
  const { t } = useTranslation(["projects", "common"]);
  const translated = t("projects.projects", { returnObjects: true });
  const projects = Array.isArray(translated) ? translated : [];
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title={t("common:nav.projects")} dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          const modalNodes = Array.isArray(project.modalContent)
            ? project.modalContent.map((p, i) => <p key={i}>{p}</p>)
            : project.modalContent;
          return <Project key={project.title} {...project} modalContent={modalNodes} />;
        })}
      </div>
    </section>
  );
};
