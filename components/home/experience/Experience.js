import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "COLLEGE 221",
    position: "Software Engineer",
    time: "2023 - Present",
    location: "Senegal",
    description:
      "Conducted coding workshops and hands-on projects, enhancing student proficiency in web development concepts. Also Designed and delivered an engaging curriculum, boosting student engagement and retention by 30%.",
    tech: ["PHP", "JavaScript", "HTML", "Git", "GitHub", "CSS"],
  },
  {
    title: "SOLOM",
    position: "Software Engineer",
    time: "2022 - Present",
    location: "France (Remote)",
    description:
      "Implemented real-time stock tracking using Angular and Symfony, reducing stock discrepancies by 40%. Collaborated with cross-functional teams to integrate systems, improving operational efficiency by 25%..",
    tech: [
      "Angular",
      "Symfony 5",
      "PHP",
      "REST Apis",
      "MySQL",
      "Figma",
      "Trello",
    ],
  },
  {
    title: "SONATEL",
    position: "Software Engineer",
    time: "2022 - 2023",
    location: "Senegal",
    description:
      "Developed an Enterprise Risk Management project, reducing operational risks by 15% through Symfony and MySQL integration. Collaborated on a Quality Management project, improving product quality and customer satisfaction by 10%.",
    tech: ["Symfony 4", "Keycloak", "PHP", "MySQL"],
  },
];
