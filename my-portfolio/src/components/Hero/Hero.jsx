import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import {assets} from '../../assets/assets.js';

export const Hero = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count >= 6) return; // Stop the interval when count reaches 13

    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 150); // Update every second

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [count]);

  return (
    <section className={styles.container}>
      {/* Background video */}
      <video className={styles.backgroundVideo} autoPlay loop muted>
        <source src="assets/hero/Space-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> 

      <div className={styles.content}> <br />
        <h1 className={styles.title}>Hi, I'm Chilakala Dharmika</h1>
        <p className={styles.description}>
          Programmer Analyst @Cognizant | Ex-SDE Intern @Tap Academy | Frontend Engineer | Pega CSA Certified | MERN Stack Developer | Java & C++ Enthusiast.
          <br /><br />
          I specialize in full-stack web development, designing responsive front-end applications and building optimized backend systems.
        </p>
        <a href="https://www.linkedin.com/in/chilakala-dharmika-4a87a7233" className={styles.connectBtn}>
          Connect +
        </a>

        {/* Dynamic Hackathon Button */}
        <button className={styles.hackathonButton}>
          Participated in {count}+ CodeChef Contests 
        </button>
      </div> 
      <img
        src={assets.mypic_icon}
        alt="Hero image of Chilakala Dharmika"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}; 