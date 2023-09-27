import { Stats } from "./Stats";
import styles from "./about.module.scss";
import { Reveal } from "@/components/utils/Reveal";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MyLinks } from "@/components/nav/components/MyLinks";
import { SectionHeader } from "@/components/utils/SectionHeader";
export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hello ! I'm Rawane, if you haven't already gathered that by now.
              I'm an artist turned software engineer from Dakar, Senegal. I'm
              focusing primarily on the frameworks Angular | React and Symfony,
              but nevertheless I love building with whatever tools are right for
              the job.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I'm passively looking for new positions where I can merge my love
              for code with my love for the canvas. If you think you' ve got an
              opening that I might like, let's connect 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
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
