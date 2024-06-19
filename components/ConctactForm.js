import React, { useState } from 'react';
import axios from 'axios';
import Styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/send-email', formData)
      .then(response => {
        setStatus('Email sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
      })
      .catch(error => {
        console.error('Error sending email:', error);
        setStatus('Error sending email.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className={Styles.contactForm}>
      <div className={Styles.formGroup}>
        <label htmlFor="firstName">Vorname</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className={Styles.formGroup}>
        <label htmlFor="lastName">Nachname</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className={Styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={Styles.formGroup}>
        <label htmlFor="message">Nachricht</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className={Styles.submitButton}>Absenden</button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default ContactForm;
