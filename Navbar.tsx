import React, { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container pt-8">
      <div className="flex justify-between items-center">
        <div className="text-xl font-medium">Saira</div>

        {/* Menu for larger screens */}
        <ul className="gap-10 lg:gap-16 hidden md:flex">
          <li className="text-lg text-gray-700 hover:text-blue-500">
            <a href="#hero">Home</a>
          </li>
          <li className="text-lg text-gray-700 hover:text-blue-500">
            <a href="#about">About</a>
          </li>
          <li className="text-lg text-gray-700 hover:text-blue-500">
            <a href="#projects">Projects</a>
          </li>
          <li className="text-lg text-gray-700 hover:text-blue-500">
            <a href="#skills">Skills</a>
          </li>
          <li className="text-lg text-gray-700 hover:text-blue-500">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Hamburger icon for mobile view */}
        <TiThMenu
          className="md:hidden cursor-pointer text-3xl text-black"
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="flex flex-col items-center mt-4 md:hidden space-y-4">
          <li className="text-lg text-gray-700 hover:text-blue-500">
            <a href="#hero" onClick={toggleMenu}>Home</a>
          </li>
          <li className="text-lg text-gray-700 hover:text-blue-500">
            <a href="#about" onClick={toggleMenu}>About</a>
          </li>
          <li className="text-lg text-gray-700 hover:text-blue-500">
            <a href="#projects" onClick={toggleMenu}>Projects</a>
          </li>
          <li className="text-lg text-gray-700 hover:text-blue-500">
            <a href="#skills" onClick={toggleMenu}>Skills</a>
          </li>
          <li className="text-lg text-gray-700 hover:text-blue-500">
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
