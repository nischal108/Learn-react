import React from 'react';

const Contact = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f8f8f8',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    },
    header: {
      fontSize: '2.5rem',
      color: '#333'
    },
    paragraph: {
      fontSize: '1.2rem',
      color: '#666',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '20px 0'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      width: '100%',
      maxWidth: '500px'
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '1rem',
      borderRadius: '5px',
      border: '1px solid #ccc'
    },
    textarea: {
      width: '100%',
      padding: '10px',
      fontSize: '1rem',
      borderRadius: '5px',
      border: '1px solid #ccc',
      height: '100px'
    },
    button: {
      padding: '10px 20px',
      fontSize: '1rem',
      color: '#fff',
      backgroundColor: '#007BFF',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contact Us</h1>
      <p style={styles.paragraph}>
        If you have any questions, feel free to reach out to us. Fill out the form below and we will get back to you as soon as possible.
      </p>
      <form style={styles.form}>
        <input type="text" placeholder="Your Name" style={styles.input} />
        <input type="email" placeholder="Your Email" style={styles.input} />
        <textarea placeholder="Your Message" style={styles.textarea}></textarea>
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
