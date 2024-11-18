import React from 'react';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={`${styles.projects} py-5`}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="project-heading">Projects</h2>
            <p className="lead">A few of the projects I've worked on.</p>
          </div>
        </div>
        <div className="row g-4">

          <div className="col-lg-12 col-md-12 col-lg-6 col-xl-4">
            <div className={styles.card}>
              <img
                src="/images/project1.png"
                className={styles.cardImg}
                alt="3D Virtual Tour Application Screenshot"
                loading="lazy"
              />
              <div className={styles.cardBody}>
                <h5 className={styles.cardTitle}>3D Virtual Tour Application</h5>
                <p className={styles.cardText}>
                  This project is a 3D Virtual Tour Application developed using Unity and Blender.
                  The application allows users to navigate through a fully interactive virtual
                  environment, simulating real-world locations.
                </p>
                <p className={styles.cardTechnologies}>Technologies: Unity, Blender, C#</p>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-md-12 col-lg-6 col-xl-4">
            <div className={styles.card}>
              <img
                src="/images/project2.png"
                className={styles.cardImg}
                alt="Blog Website Screenshot"
                loading="lazy"
              />
              <div className={styles.cardBody}>
                <h5 className={styles.cardTitle}>Blog Website</h5>
                <p className={styles.cardText}>
                  This project is a dynamic blog website developed using Laravel, featuring a clean
                  and user-friendly interface. Users can read, comment on, and interact with blog content.
                </p>
                <p className={styles.cardTechnologies}>
                  Technologies: Laravel, Laravel FIlament, MySQL, HTML, CSS, JavaScript
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-md-12 col-lg-6 col-xl-4">
            <div className={styles.card}>
              <img
                src="/images/project3.png"
                className={styles.cardImg}
                alt="E-commerce Website Screenshot"
                loading="lazy"
              />
              <div className={styles.cardBody}>
                <h5 className={styles.cardTitle}>E-commerce Website</h5>
                <p className={styles.cardText}>
                  This e-commerce website, built with the MERN stack, allows users to browse products,
                  add items to their cart, and place orders. It features JWT authentication for secure
                  login and an admin dashboard to manage products and orders.
                </p>
                <p className={styles.cardTechnologies}>
                  Technologies: React, Node.js, Express, MongoDB, JWT, Mongoose
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
