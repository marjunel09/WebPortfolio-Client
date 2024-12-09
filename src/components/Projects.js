import React, { useEffect, useRef, useState } from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: '3D Virtual Tour Application',
    description: 'This project is a 3D Virtual Tour Application developed using Unity and Blender. The application allows users to navigate through a fully interactive virtual environment, simulating real-world locations.',
    technologies: 'Unity, Blender, C#',
    imageSrc: '/images/project1.png',
    imageAlt: '3D Virtual Tour Application Screenshot',
  },
  {
    id: 2,
    title: 'Blog Website',
    description: 'This project is a dynamic blog website developed using Laravel, featuring a clean and user-friendly interface. Users can read, comment on, and interact with blog content.',
    technologies: 'Laravel, Laravel FIlament, MySQL, HTML, CSS, JavaScript',
    imageSrc: '/images/project2.png',
    imageAlt: 'Blog Website Screenshot',
  },
  {
    id: 3,
    title: 'E-commerce Website',
    description: 'This e-commerce website, built with the MERN stack, allows users to browse products, add items to their cart, and place orders. It features JWT authentication for secure login and an admin dashboard to manage products and orders.',
    technologies: 'React, Node.js, Express, MongoDB, JWT, Mongoose',
    imageSrc: '/images/project3.png',
    imageAlt: 'E-commerce Website Screenshot',
  },
];

export default function Projects() {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  // Ensure refs are properly initialized
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, projects.length); // Resize the ref array if necessary
  }, [projects]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setVisibleCards((prev) => {
            // Ensure the card is added only once to the visibleCards array
            if (!prev.includes(index)) {
              return [...prev, index];
            }
            return prev;
          });
        }
      });
    }, { threshold: 0.1 }); // Keep the threshold at 0.1 for better sensitivity

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="projects" className={`${styles.projects} py-5`}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className={styles.projectHeading}>Projects</h2>
            <p className="lead">A few of the projects I've worked on.</p>
          </div>
        </div>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={project.id} className="col-lg-12 col-md-12 col-lg-6 col-xl-4">
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                className={`${styles.card} ${visibleCards.includes(index) ? styles.visible : ''}`}
              >
                <img
                  src={project.imageSrc}
                  className={styles.cardImg}
                  alt={project.imageAlt}
                  loading="lazy"
                />
                <div className={styles.cardBody}>
                  <h5 className={styles.cardTitle}>{project.title}</h5>
                  <p className={styles.cardText}>{project.description}</p>
                  <p className={styles.cardTechnologies}>Technologies: {project.technologies}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
