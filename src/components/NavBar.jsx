import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">MyLogo</div>

        {/* Hamburger icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none z-50 relative"
          >
            {!isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            ) : null}
          </button>
        </div>

        {/* Links for desktop */}
        <div className="hidden md:flex md:items-center">
          <a href="/" className="block text-white p-2 hover:bg-blue-700 rounded-md md:inline-block">
            Home
          </a>
          <a href="/about" className="block text-white p-2 hover:bg-blue-700 rounded-md md:inline-block">
            About
          </a>
          <a href="/services" className="block text-white p-2 hover:bg-blue-700 rounded-md md:inline-block">
            Services
          </a>
          <a href="/contact" className="block text-white p-2 hover:bg-blue-700 rounded-md md:inline-block">
            Contact
          </a>
        </div>
      </div>

      {/* Full-screen Menu for mobile */}
      <Transition
        show={isOpen}
        enter="transition-opacity ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-in duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="fixed inset-0 z-40"
      >
        <div className="bg-black bg-opacity-50 flex justify-center items-center w-full h-full">
          {/* Centered links */}
          <div className="flex flex-col items-center space-y-6 w-full text-center">
            <a href="/" className="text-white text-2xl max-md:text-4xl hover:bg-slate-500 duration-150 px-4 py-2 rounded-md">
              Home
            </a>
            <a href="/about" className="text-white text-2xl max-md:text-4xl hover:bg-slate-500 duration-150 px-4 py-2 rounded-md">
              About
            </a>
            <a href="/services" className="text-white text-2xl max-md:text-4xl hover:bg-slate-500 duration-150 px-4 py-2 rounded-md">
              Services
            </a>
            <a href="/contact" className="text-white text-2xl max-md:text-4xl hover:bg-slate-500 duration-150 px-4 py-2 rounded-md">
              Contact
            </a>
          </div>
        </div>
      </Transition>

      {/* Close button positioned absolutely */}
      {isOpen && (
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white focus:outline-none z-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </nav>
  );
};

export default Navbar;
