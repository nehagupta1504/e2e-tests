import React, { useState } from 'react';
import { CSSProperties } from 'react';

interface FormData {
  name: string;
  email: string;
  contact: string;
  experience: number;
  currentCompany: string;
  resume: File | null;
  projects: string;
  education: string;
}

const SoftwareEngineerApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    contact: '',
    experience: 0,
    currentCompany: '',
    resume: null,
    projects: '',
    education: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData({ ...formData, [name]: files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission, e.g., send formData to the server
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Software Engineer Application</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label} htmlFor="name">Full Name:</label>
        <input style={styles.input} type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label style={styles.label} htmlFor="email">Email Address:</label>
        <input style={styles.input} type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label style={styles.label} htmlFor="contact">Contact Number:</label>
        <input style={styles.input} type="tel" id="contact" name="contact" value={formData.contact} onChange={handleChange} required />

        <label style={styles.label} htmlFor="experience">Years of Experience:</label>
        <input style={styles.input} type="number" id="experience" name="experience" value={formData.experience} onChange={handleChange} required />

        <label style={styles.label} htmlFor="currentCompany">Current Company:</label>
        <input style={styles.input} type="text" id="currentCompany" name="currentCompany" value={formData.currentCompany} onChange={handleChange} />

        <label style={styles.label} htmlFor="resume">Upload Resume:</label>
        <input style={styles.input} type="file" id="resume" name="resume" accept=".pdf, .doc, .docx" onChange={handleFileChange} required />

        <label style={styles.label} htmlFor="projects">Projects (Brief Description):</label>
        <textarea style={styles.textarea} id="projects" name="projects" value={formData.projects} onChange={handleChange} rows={5} required></textarea>

        <label style={styles.label} htmlFor="education">Education:</label>
        <textarea style={styles.textarea} id="education" name="education" value={formData.education} onChange={handleChange} rows={3} required></textarea>

        <button style={styles.button} type="submit">Submit Application</button>
      </form>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  container: {
    maxWidth: '600px',
    margin: 'auto',
    background: '#fff',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '10px',
    background: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  buttonHover: {
    background: '#0056b3',
  },
};

export default SoftwareEngineerApplicationForm;
