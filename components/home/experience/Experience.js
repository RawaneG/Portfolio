import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";
import { useTranslation } from "next-i18next";

export const Experience = () => {
  const { t } = useTranslation(["experience", "common"]);
  const experiences = t("items", { returnObjects: true });
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title={t("common:nav.experience")} dir="l" />
      {experiences?.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};
