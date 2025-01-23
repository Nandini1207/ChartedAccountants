import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="shadow-md p-4 bg-info">
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center lg:justify-between">
        <div className="flex justify-between items-center w-full lg:w-auto">
          <NavLink className="flex items-center text-2xl font-semibold text-white font-serif" to="/">
            <img src="/logo.jpg" alt="Logo" className="w-12 h-12 rounded-full mr-2"/>
            Accounting Wiz
          </NavLink>
        </div>

        <div className={`${ isMenuOpen ? "flex" : "hidden"} flex-col items-center justify-center lg:flex lg:space-x-6 mt-4 lg:mt-0 w-full lg:w-auto`}>
          <ul className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
            {/* Navigation Links */}
            <li>
              <NavLink className={({ isActive }) => `text-white px-5 hover:text-purple-400 transition duration-300 ease-in-out ${isActive ? "font-bold text-lg" : "" }`}
                to="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-white px-5 hover:text-purple-400 transition duration-300 ease-in-out ${
                    isActive ? "font-bold text-lg" : ""}`}
                to="/profile"
                onClick={() => setIsMenuOpen(false)}
              >
                Profiles
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-white px-5 hover:text-purple-400 transition duration-300 ease-in-out ${
                    isActive ? "font-bold text-lg " : ""
                  }`
                }
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;