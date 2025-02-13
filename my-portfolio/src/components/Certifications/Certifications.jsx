import React from 'react';
import styles from './Certifications.module.css';

export const Certifications = () => {
  return (
    <section id="certifications" className={styles.certificationSection}>
      <h2>CERTIFICATIONS</h2> <br />
      <div className={styles.certificationContainer}>
        <ul>
          <li className={styles.certificationItem}>
            <a href="https://drive.google.com/file/d/1_M-TAOmODEYOJmdmORCEaCMRki2x7GSM/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.certificationLink}>
              MERN Stack Full-Stack Web Development Certification
            </a>
          </li>
          <li className={styles.certificationItem}>
            <a href="https://drive.google.com/file/d/1c2iOYVNhQYytRhajDt5ehFEuxZP-7t0Z/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.certificationLink}>
              SQL Fundamentals Certification
            </a>
          </li>
          <li className={styles.certificationItem}>
            <a href="https://drive.google.com/file/d/1dgtinwyFADaSUmzeFycUlyh8USXMKAdH/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.certificationLink}>
              JavaScript Fundamentals Certification by Greatstack
            </a>
          </li>
          <li className={styles.certificationItem}>
            <a href="https://drive.google.com/file/d/1pbFOAlN-aZhTNiYT-_HCYP_3GpJ7gxD3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.certificationLink}>
              Java Programming Certification
            </a>
          </li>
          
          <li className={styles.certificationItem}>
            <a href="https://drive.google.com/file/d/1b_Mr0gYNjKeludfv-xkQwds-29wN51r-/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.certificationLink}>
              React Hooks Certification by Greatstack
            </a>
          </li>
          <li className={styles.certificationItem}>
            <a href="https://drive.google.com/file/d/1gF1hjYts_3UkDZrXVMk3vgRJQNXZyVXB/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.certificationLink}>
              Certified Pega System Architect
            </a>
          </li>
          <li className={styles.certificationItem}>
            <a href="https://drive.google.com/drive/folders/1x1hrpcm-mBAgb0-spZj-vMQqLfQfwC2y?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.certificationLink}>
              More Certifications...
            </a>
          </li> <br />

          <li className={styles.AchievementsItem }>
            <a href="https://drive.google.com/drive/folders/1PCLFrFkez3Ilf49dJWQ8sUvgTtFnVw3B?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.AchievementsLink}>
            Achievements 
            </a>
          </li>

        </ul>
      </div>
    </section>
  );
};
