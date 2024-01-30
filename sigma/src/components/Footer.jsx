// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} My React App. All rights reserved.
        </p>
        <div className="flex justify-center items-center mt-4">
          <a
            href="#"
            className="text-gray-500 hover:text-white transition duration-300 ease-in-out mx-2"
          >
            Terms of Service
          </a>
          <span className="text-gray-500 mx-2">|</span>
          <a
            href="#"
            className="text-gray-500 hover:text-white transition duration-300 ease-in-out mx-2"
          >
            Privacy Policy
          </a>
        </div>
        <div className="mt-6">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Follow us on Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
