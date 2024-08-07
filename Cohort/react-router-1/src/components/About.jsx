import React from 'react';

const About = () => {
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
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Us</h1>
      <p style={styles.paragraph}>
        Welcome to our application. We are committed to providing the best service possible.
        Our team is dedicated to ensuring customer satisfaction by continuously improving and
        updating our services. Thank you for choosing us!
      </p>
    </div>
  );
};

export default About;
