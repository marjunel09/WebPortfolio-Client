import React from 'react';
import styles from './Landing.module.css';
import landingImage from '../assets/images/landing.jpg';  // Import image

export default function Landing() {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(
        rgba(34, 49, 41, 0.8), /* Dark greenish overlay with 80% opacity */
        rgba(34, 49, 41, 0.8)
      ), url(${landingImage})`, // Add image below the gradient overlay
  };

  return (
    <section id="landing" className={styles.landing} style={backgroundStyle}>
      <div className={styles.overlay}></div>
      <div className={`${styles.content} container`}>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h1 className={styles.heading}>Full Stack Web Developer</h1>
            <h4 className={styles.subheading}>Marjunel Lagman</h4>
            <p className={styles.paragraph}>
              Passionate about building user-friendly, responsive web applications with a focus on clean code
              and seamless user experiences. Experienced in front-end technologies like React and backend
              development using Node.js. Dedicated to continuous learning and improving my skills in the
              ever-evolving field of web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
