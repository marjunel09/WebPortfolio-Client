import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../api';
import ContactForm from '../components/Contact';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import Tools from '../components/Tools';

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetchProjects(); 
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    loadProjects();
  }, []);

  return (
    <>
      <Landing />
      <Projects projects={projects} />
      <Tools/>
      <ContactForm/>
    </>
  );
}
