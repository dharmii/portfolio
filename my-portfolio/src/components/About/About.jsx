import React from "react";
import styles from "./About.module.css";
// import { getImageUrl } from "../../utils";
import {assets} from '../../assets/assets.js';

export const About = () => {
    return (
        <>

            {/* About Section */}
            <section className={styles.container} id="about"> <br />
                <h2 className={styles.title}>About</h2>
                <div className={styles.content}>


                    <img
                        src={assets.boy3D_officelook}
                        alt="Me sitting with a laptop"
                        className={styles.aboutImage}
                    />
                    <ul className={styles.aboutItems}>
                        <li className={styles.aboutItem}>

                            <div className={styles.aboutItemText}>
                                <h3>Software Developer</h3>
                                <p>
                                    Skilled in C++, Java, Python, and MERN Stack. Passionate about building scalable applications.
                                </p>
                            </div>
                        </li>
                        <li className={styles.aboutItem}>

                            <div className={styles.aboutItemText}>
                                <h3>Frontend Engineer</h3>
                                <p>
                                    Experience in CSS, JavaScript, ReactJs, Tailwindcss. Focus on deployment efficiency and system optimization.
                                </p>
                                <br />
                            </div>
                        </li>
                        <li className={styles.aboutItem}>

                            <div className={styles.aboutItemText}>
                                <h3>Backend Engineer</h3>
                                <p>
                                    Experience in fast, optimized back-end systems, RESTful APIs, authentication (JWT, OAuth), and databases.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};