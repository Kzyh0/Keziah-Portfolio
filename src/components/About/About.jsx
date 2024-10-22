import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/ic.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Personal Life</h3>
              <p>
              I'm constantly learning about design principles, usability testing, and prototyping,and I'm looking forward <br></br>
               to using these skills in real-world projects. I'm excited to connect, collaborate, and grow in this field as 
              I strive to become a full-fledged UI/UX designer.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
              I graduated from Iloilo National High School, both junior and senior high. 
              During my senior year of high school, I took the GAS strand. and graduated with some awards 
              for both academic and extracurricular activities.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
              As part of my learning journey, I’ve been exploring key areas like wireframing, prototyping, user research, and design systems. 
              I'm familiar with tools like Figma
               and I'm always on the lookout for new ways to improve my design process.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
