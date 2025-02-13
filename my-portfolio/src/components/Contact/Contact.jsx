import React from "react";
import styles from "./Contact.module.css";
// import { getImageUrl } from "../../utils";
import {assets} from '../../assets/assets.js';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}> <br />
        <h2>CONTACT</h2>
        <p>Feel free to reach out!</p>
      </div>
      
      <a href="tel:+7995176138" className={styles.contactButton}>
        Contact: +91 7995176138
      </a> <br />
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={assets.email_icon} alt="Email icon" />
          <a href="mailto:chilakaladharmika16@gmail.com">Email</a>
        </li>
        <li className={styles.link}>
          <img
            src={assets.linkedin1_icon}
            alt="LinkedIn icon"
          />
          <a
            href="https://www.linkedin.com/in/chilakala-dharmika-4a87a7233/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className={styles.link}>
          <img src={assets.github_icon} alt="Github icon" />
          <a
            href="https://github.com/dharmii"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li className={styles.link}>
          <img src={assets.leetcode_icon} alt="LeetCode icon" />
          <a
            href="https://www.codechef.com/users/dharmii123/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodeChef
          </a>
        </li>
        <li className={styles.link}>
          <img src={assets.twitter_icon} alt="Twitter icon" />
          <a
            href="https://x.com/CDharmikadevi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li className={styles.link}>
          <img src={assets.whatsapp_icon} alt="WhatsApp icon" />
          <a
            href="https://wa.me/qr/DAWEJOCCERUIM1"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </li>
      </ul>
      <div className={styles.footerBottom}>
        <div className={styles.copyright}>
          <p>All rights reserved © 2025</p>
        </div>
        <div className={styles.madeWithLove}>
          <p>Made with ❤ by Chilakala Dharmika</p>
        </div>
      </div>
    </footer>
  );
};
