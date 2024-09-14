import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  

  return (
    <header  className="backdrop-blur-lg fixed top-0  w-full z-50">
      <motion.div 
        initial={{y:-100 , opacity: 0}}
        animate={{y:0 , opacity:1}}
        transition={{duration: 0.5}}
      className="mx-auto max-w-screen-xl px-4 sticky top-0 sm:px-0 ">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <h1 className='font-black sm:text-[2vw] text-[2vh] uppercase text-highlight'>
              Licon Elevator
            </h1>
          </div>

          <div className="md:flex md:items-center md:gap-12 ">
            {/* Desktop Menu */}
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-12 text-lg">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `relative group hover:text-highlight ${isActive ? 'text-highlight underline-active' : ''}`
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>

                {["about", "service", "contact"].map((navitem, idex) => (
                  <li key={idex} className='capitalize'>
                    <NavLink
                      className={({ isActive }) =>
                        `relative group hover:text-highlight ${isActive ? 'text-highlight underline-active' : ''}`
                      }
                      to={`/${navitem}`}
                    >
                      {navitem}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                onClick={handleToggle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with Slide Animation */}
        <div
          className={`md:hidden z-0 fixed right-0  bg-white px-10 border h-screen  py-12 transition-transform duration-300  rounded-md transform ${
            isMobileMenuOpen ? 'translate-x-0 ' : 'translate-x-[200%] '
          }`}
        >
          <nav aria-label="Global">
            <ul className="flex flex-col items-center gap-4 text-[4vh]">
              <li className=''>
                <NavLink
                  className={({ isActive }) =>
                    `relative group   hover:text-highlight ${isActive ? 'text-highlight underline-active' : ''}`
                  }
                  to="/"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  Home
                </NavLink>
              </li>

              {["about", "service", "contact"].map((navitem, idex) => (
                <li key={idex} className='capitalize'>
                  <NavLink
                    className={({ isActive }) =>
                      `relative group hover:text-highlight ${isActive ? 'text-highlight underline-active' : ''}`
                    }
                    to={`/${navitem}`}
                    onClick={() => setMobileMenuOpen(false)} // Close menu on click
                  >
                    {navitem}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
