import React from 'react';
import styles from './Projects.module.css'; // Import scoped styles

export default function Projects({ projects }) {
  return (
    <section id="projects" className={`${styles.projects} py-5`}>
  <div className="container">
    <div className="row">
      <div className="col-12 text-center">
        <h2 className="project-heading">Projects</h2>
        <p className="lead">A few of the projects I've worked on.</p>
      </div>
    </div>
    <div className="row g-4"> {/* Adjust grid behavior */}
      {projects.map((project, index) => (
        <div key={index} className="col-lg-12 col-md-12 col-lg-6 col-xl-4"> {/* Update classes */}
          <div className={styles.card}>
            <img
              src={`https://webportfolio-backend.onrender.com/${project.image}`}
              className={styles.cardImg}
              alt={`${project.title} Screenshot`}
              loading="lazy"
            />
            <div className={styles.cardBody}>
              <h5 className={styles.cardTitle}>{project.title}</h5>
              <p className={styles.cardText}>{project.description}</p>
              <p className={styles.cardTechnologies}>{project.technologies}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


  );
}
