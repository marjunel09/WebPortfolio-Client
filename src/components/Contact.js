import React, { useState } from 'react';
import axios from "axios";
import { Notyf } from "notyf";
import 'notyf/notyf.min.css';
import styles from './Contact.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const notyf = new Notyf();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:4000/api/send-email", formData);
      notyf.success(response.data.message);
      setFormData({ senderName: "", senderEmail: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      notyf.error("Failed to send email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.title}>Contact Me</h2>
      <p className={styles.description}>
        Have a question or want to work together? Feel free to reach out!
      </p>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="senderName">Your Name</label>
          <input
            id="senderName"
            type="text"
            placeholder="Your Name"
            value={formData.senderName}
            onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="senderEmail">Your Email</label>
          <input
            id="senderEmail"
            type="email"
            placeholder="Your Email"
            value={formData.senderEmail}
            onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send"}
        </button>
      </form>
    </section>
  );
}
