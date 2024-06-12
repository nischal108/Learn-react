import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#333',
      padding: '20px 40px',
      borderRadius: '12px',
      fontFamily: 'Arial, sans-serif'
    },
    logo: {
      color: '#fff',
      fontSize: '1.5rem',
      textDecoration: 'none'
    },
    navLinks: {
      display: 'flex',
      gap: '55px'
    },
    navLink: {
      color: '#fff',
      fontSize: '1rem',
      textDecoration: 'none',
      transition: 'color 0.3s ease'
    }
  };

  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.logo}>MyApp</Link>
      <div style={styles.navLinks}>
        <Link to="/" style={styles.navLink}>Home</Link>
        <Link to="/about" style={styles.navLink}>About</Link>
        <Link to="/contact" style={styles.navLink}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
