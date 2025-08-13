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
    title: "ModelSIS",
    position: "Frontend Developer",
    time: "January 2024 - Present",
    location: "Dakar, Senegal",
    description:
      "Building an integrated land management system using Angular 17 for the General Tax and Domains Directorate. Created reusable Nx component libraries from Figma designs and documented components with Storybook to improve developer experience and UI consistency.",
    tech: [
      "Angular 17",
      "Nx",
      "Storybook",
      "TypeScript",
      "SCSS",
      "REST APIs",
      "Figma",
      "Git",
    ],
  },
  {
    title: "École Supérieure 221",
    position: "Web Development Instructor",
    time: "February 2023 - Present",
    location: "Dakar, Senegal",
    description:
      "Trained 75+ first- and second-year students in web development with hands-on projects. Debugged and analyzed student code (HTML, CSS, JavaScript, PHP) with constructive feedback. Shared regular tech updates to encourage awareness and self-learning.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Bootstrap",
      "MySQL",
      "Laravel",
      "Sass",
      "Git",
      "GitHub",
      "SCRUM",
      "MVC",
      "OOP",
      "UML",
      "Figma",
      "Trello",
      "Apache",
    ],
  },
  {
    title: "SOLOM (Solution On Mobiles)",
    position: "Full-Stack Web Developer (Freelance)",
    time: "September 2022 - Present",
    location: "Belgium (Remote)",
    description:
      "Created a Point of Sale (POS) application with inventory and sales tracking using Angular. Developed RESTful APIs with Symfony and MySQL, optimized with API Platform. Managed server production with PuTTY and deployed the frontend via Vercel.",
    tech: [
      "Angular",
      "Symfony",
      "API Platform",
      "MySQL",
      "REST APIs",
      "Sass",
      "Figma",
      "SCRUM",
      "Trello",
      "Vercel",
      "PuTTY",
    ],
  },
  {
    title: "Consulting IOT",
    position: "Full-Stack Web Developer",
    time: "July 2023 - October 2023",
    location: "France (Remote)",
    description:
      "Developed a real-time vehicle tracking application using PHP, Leaflet, jQuery, and JsGrid. Implemented route history with OpenStreetMap API integration and improved client transparency and loyalty.",
    tech: [
      "PHP",
      "Leaflet",
      "jQuery",
      "JsGrid",
      "OpenStreetMap",
      "MySQL",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Sonatel",
    position: "Full-Stack Web Developer",
    time: "October 2022 - January 2023",
    location: "Dakar, Senegal",
    description:
      "Refactored and integrated enterprise risk and quality management systems with Symfony and MySQL. Implemented Keycloak SSO and built CI/CD pipelines using Bitbucket, Jenkins, and Docker.",
    tech: [
      "Symfony",
      "Keycloak",
      "RESTful APIs",
      "Bitbucket",
      "Jenkins",
      "Docker",
      "CI/CD",
      "MVC",
      "OOP",
      "MySQL",
    ],
  },
  {
    title: "Team Touba Façade",
    position: "Web Developer",
    time: "April 2023 - October 2023",
    location: "France (Remote)",
    description:
      "Built and managed a façade renovation website showcasing projects and services using WordPress and Webflow.",
    tech: [
      "WordPress",
      "Webflow",
      "PHP",
      "jQuery",
      "Astra",
      "Elementor Pro",
      "Plugins",
    ],
  },
  {
    title: "Sonatel Academy",
    position: "Web & Mobile Developer",
    time: "October 2021 - September 2022",
    location: "Dakar, Senegal",
    description:
      "Built a Trello-like project management app with Vanilla JavaScript. Developed and managed an e-learning platform. Created RESTful APIs for a fast-food delivery app with Symfony and API Platform, consumed them with Angular, and developed a mobile version with Ionic.",
    tech: [
      "HTML",
      "CSS",
      "Sass",
      "JavaScript",
      "Bootstrap",
      "PHP",
      "OOP",
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
      "WordPress",
      "Ionic",
    ],
  },
  {
    title: "Kanki's Shop",
    position: "Web Developer",
    time: "October 2018 - September 2020",
    location: "Senegal",
    description:
      "Developed and supervised an e-commerce fashion & cosmetics application for a startup brand using PHP, JavaScript, and jQuery, increasing customer retention and interest by 50%.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PHP",
      "OOP",
      "Figma",
      "jQuery",
      "MySQL",
    ],
  },
];
