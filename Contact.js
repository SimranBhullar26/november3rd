import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', contactMethod: '' });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Type Name here" onChange={handleChange} required />
        <input name="email" placeholder="Type Email here" onChange={handleChange} required />
        <textarea name="message" placeholder="Type your Message" onChange={handleChange} required />
        <select name="contactMethod" onChange={handleChange} required>
          <option value="">Preferred Contact Method</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="text">Text</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div>
          <h2>Submitted Information:</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Message: {submittedData.message}</p>
          <p>Preferred Contact Method: {submittedData.contactMethod}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
