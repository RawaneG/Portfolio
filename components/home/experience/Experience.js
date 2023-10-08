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
    position: "Web Development Coach",
    time: "Februrary 2023 - Present",
    location: "Senegal",
    description:
      "Conducted coding workshops and hands-on projects, enhancing student proficiency in web development concepts. Also Designed and delivered an engaging curriculum, boosting student engagement and retention by 30%.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "SCRUM",
      "Apache",
      "POO",
      "MVC",
      "UML",
      "MySQL",
      "PHP",
      "Git",
      "GitHub",
      "Sass",
      "Figma",
      "Trello",
      "Laravel",
    ],
  },
  {
    title: "SOLOM (Solution On Mobiles)",
    position: "Full-Stack Web Developer",
    time: "September 2022 - Present",
    location: "Belgium (Remote)",
    description:
      "Implemented real-time stock tracking using Angular and Symfony, reducing stock discrepancies by 40%. Collaborated with cross-functional teams to integrate systems, improving operational efficiency by 25%..",
    tech: [
      "Angular",
      "Symfony",
      "Sass",
      "PHP",
      "REST APIs",
      "MySQL",
      "Figma",
      "SCRUM",
      "Trello",
    ],
  },
  {
    title: "CONSULTING IOT",
    position: "Full-Stack Web Developer",
    time: "July 2023 - October 2023",
    location: "France (Remote)",
    description:
      "Developed a vehicle tracking application enabling real-time GPS monitoring, resulting in a 20% improvement in fleet management efficiency by optimizing routes and reducing fuel consumption.",
    tech: [
      "HTML",
      "CSS",
      "JQuery",
      "JavaScript",
      "PHP",
      "Git",
      "GitHub",
      "MySQL",
    ],
  },
  {
    title: "Team Touba Façade",
    position: "Full-Stack Web Developer",
    time: "April 2023 - October 2023",
    location: "France (Remote)",
    description:
      "Created and managed an attractive façade renovation website displaying client’s numerous projects and skillset made with Wordpress CMS.",
    tech: ["Wordpress", "PHP", "JQuery", "Astra", "Elementor Pro", "Plugin"],
  },
  {
    title: "SONATEL",
    position: "Full-Stack Web Developer",
    time: "October 2022 - January 2023",
    location: "Senegal",
    description:
      "Developed an Enterprise Risk Management project, reducing operational risks by 15% through Symfony and MySQL integration. Collaborated on a Quality Management project, improving product quality and customer satisfaction by 10%.",
    tech: [
      "Symfony",
      "Keycloak",
      "RESTful APIs",
      "Jira",
      "BitBucket",
      "SCRUM",
      "MySQL",
      "Docker",
      "CI/CD",
      "MVC",
      "POO",
    ],
  },
  {
    title: "Sonatel Academy",
    position: "Web & Mobile Developer",
    time: "October 2021 - September 2022",
    location: "Senegal",
    description:
      "Reproduction of Trello with Vanilla JavaScript, Developed and Managed an e-Learning application, Created a REST API for a Food restauration and delivery application. Successfully consumed REST Apis of that app with ANGULAR and API Platform and developped a mobile version with IONIC.",
    tech: [
      "HTML",
      "CSS",
      "Sass",
      "JavaScript",
      "BootStrap",
      "PHP",
      "POO",
      "MVC",
      "Angular",
      "Node.js",
      "Symfony",
      "RESTful APIs",
      "API Platform",
      "Nginx",
      "Trello",
      "SCRUM",
      "Ubuntu",
      "Figma",
      "Wordpress",
    ],
  },
  {
    title: "Kanki's Shop",
    position: "Web Developer",
    time: "October 2018 - September 2020",
    location: "Senegal",
    description:
      "Developed and supervised an e-commerce Fashion & Cosmetics application for a startup brand made with PHP, Javascript et JQuery increasing customer’s retention and interest by 50%.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PHP",
      "POO",
      "Figma",
      "JQuery",
      "MySQL",
    ],
  },
];
