/* eslint-disable no-unused-vars */
import React from 'react';

const Home = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif'
    },
    header: {
      fontSize: '2.5rem',
      color: '#333'
    },
    paragraph: {
      fontSize: '1.2rem',
      color: '#666',
      textAlign: 'center',
      maxWidth: '600px',
      margin: '20px 0'
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
      <h1 style={styles.header}>Welcome to the Home Page</h1>
      <p style={styles.paragraph}>
        This is a simple home page component with inline CSS styling in React. Inline CSS allows for quick styling without creating separate CSS files.
      </p>
      <button style={styles.button}>Learn More</button>
    </div>
  );
};

export default Home;
