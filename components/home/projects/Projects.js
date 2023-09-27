import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Jayfii",
    imgSrc: "project-imgs/project.png",
    code: "https://github.com/RawaneG/Jayfii",
    projectLink: "https://jayfii.vercel.app",
    tech: ["Angular", "Symfony", "Sass", "REST APIs", "MySQL"],
    description:
      "Stock Tracking & Management application including with E-commerce Functionnalities. Built alone",
    modalContent: (
      <>
        <p>
          Jayfii is an French e-commerce application combined with Stock &
          Tracking Management Functionnalities allowing Sellers to keep track of
          their sells & products availability.
        </p>
        <p>
          I conceived it with Angular on the frontend with the help of RxJS for
          performance and smoothness and Angular Material to increase the User
          Experience.
        </p>
        <p>I'll let right below the test account to take a quick look :</p>
        <p>
          <b>Login</b> : rawane.meissa@gmail.com <br />
          <b>Password</b> : rawane10 <br />
        </p>
      </>
    ),
  },
  {
    title: "Netflix",
    imgSrc: "project-imgs/project.png",
    code: "https://github.com/RawaneG/rs_Netflix",
    projectLink: "https://rs-netflix.vercel.app",
    tech: ["NextJS", "Prisma", "MongoDB", "Tailwind"],
    description:
      "Built a User friendly and Intuitive Netflix Clone reproducing core functionnalites of Netflix.",
    modalContent: (
      <>
        <p>
          This application has been build by implemeting Google and Github OAuth
          speeding the authentification flow.
        </p>
        <p>
          The user has the possibility to list, put or remove of the list custom
          series and in addition they have the ability to watch them.
        </p>
      </>
    ),
  },
];
