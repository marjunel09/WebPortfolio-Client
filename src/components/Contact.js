import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import styles from './Contact.module.css';
import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    subject: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const notyf = new Notyf();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('https://webportfolio-backend.onrender.com/api/send-email', formData);
      notyf.success(response.data.message);
      setFormData({ senderName: '', senderEmail: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      notyf.error('Failed to send email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    });

    const elements = document.querySelectorAll(`.${styles.infoGrid} p, .${styles.socialIcons} a`);
  elements.forEach((el) => observer.observe(el));


    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h2 className={styles.title}>Contact Information</h2>
          <p className={styles.description}>
            Have a question or want to work together? Feel free to reach out!
          </p>
          <div className={styles.infoGrid}>
            <p><strong>Email:</strong> marjunel09lagman@gmail.com</p>
            <p><strong>Phone:</strong> +63 915 497 2070</p>
            <p><strong>Location:</strong> San Fernando, Pampanga</p>

            <div className={styles.socialSection}>
              <p><strong>Socials:</strong></p>
              <div className={styles.socialIcons}>
                <a href="https://github.com/marjunel09" target="_blank" rel="noopener noreferrer">
                  <FaGithub className={styles.icon} />
                </a>
                <a href="https://www.linkedin.com/in/marjunel-lagman-351b47310/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className={styles.icon} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <h3 className={styles.contactFormHeader}>Send a Message</h3>
          <div className={styles.formGroup}>
            <input
              id="senderName"
              type="text"
              placeholder="Name*"
              value={formData.senderName}
              onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
              required
              autocomplete="off"
            />
          </div>
          <div className={styles.formGroup}>
            <input
              id="senderEmail"
              type="email"
              placeholder="Email*"
              value={formData.senderEmail}
              onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
              required
              autocomplete="off"
            />
          </div>
          <div className={styles.formGroup}>
            <input
              id="subject"
              type="text"
              placeholder="Subject*"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
              autocomplete="off"
            />
          </div>
          <div className={styles.formGroup}>
            <textarea
              id="message"
              placeholder="Message*"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            ></textarea>
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Sending...' : <><FaPaperPlane /> Send</>}
          </button>
        </form>
      </div>
    </section>
  );
}
