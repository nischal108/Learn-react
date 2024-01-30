// src/components/Navbar.js
import React, { useState, useRef } from 'react';

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const timeoutRef = useRef();

  const handleDropdownToggle = (visible) => {
    clearTimeout(timeoutRef.current);

    if (visible) {
      setDropdownVisible(true);
    } else {
      timeoutRef.current = setTimeout(() => {
        setDropdownVisible(false);
      }, 200); // Adjust the delay as needed (200ms in this example)
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">My React App</div>
        <div className="flex space-x-16">
          <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Home</a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">About</a>
          <div
            className="relative group"
            onMouseEnter={() => handleDropdownToggle(true)}
            onMouseLeave={() => handleDropdownToggle(false)}
          >
            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
            >
              Services
            </a>
            {/* Dropdown submenu */}
            {isDropdownVisible && (
              <div className="absolute mt-2 w-48 bg-gray-800 text-white p-2 rounded-md shadow-md">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-700 transition duration-300 ease-in-out"
                >
                  Service 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-700 transition duration-300 ease-in-out"
                >
                  Service 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-700 transition duration-300 ease-in-out"
                >
                  Service 3
                </a>
              </div>
            )}
          </div>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
