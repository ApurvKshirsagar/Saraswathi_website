import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-section'>
        <h3>Navigate</h3>
        <a href='/'>Home</a>
        <a href='/complaint'>Complaint</a>
        <a href='/calendar'>Calendar</a>
      </div>
      <div className='footer-section'>
        <h3>Suggestions</h3>
        <a
          href='https://docs.google.com/forms/d/e/1FAIpQLSemm7IV7RdYQdeXpbAy1g-U_TeYllx9fB0YYNj3HRSyshAK7Q/viewform?usp=sf_link'
          target='_blank'
          rel='noopener noreferrer'
        >
          Suggestions to Improve Website
        </a>
      </div>
      <div className='footer-section'>
        <p>Coded by : Apurv, Rohith</p>
        <p>UI by : Rutuja</p>
        <p>Build with ❤️ @2024</p>
      </div>
    </footer>
  );
};

export default Footer;
