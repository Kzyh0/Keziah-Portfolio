import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Keziah Ann!</h1>
        <p className={styles.description}>
        but you can call me "kes" or "kezh"<br></br>
       I am currently a third-year BSIT student
        at Western Institute of Technology. I'm a dedicated student 
        with a strong interest in UI/UX design.</p>
        <a href="https://drive.google.com/file/d/128klcefRfWpsXRliYbbRHv-jKCVgd_93/view?usp=drive_link" target="_blank" View My resume className={styles.contactBtn}>
          Hire Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/kez.png")}
        alt="Hero image of me"
        className={styles.kez}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
