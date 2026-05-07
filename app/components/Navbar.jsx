"use client"

import { useState } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full fixed top-0 left-0 bg-white z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex items-center justify-between">
        {/* LEFT - Logo */}
        <h1 className="text-xl font-semibold text-black">
          Emmy<span className="text-red-500">.</span>
        </h1>

        {/* CENTER - Navigation Links (Desktop) */}
        <ul className="hidden md:flex gap-10 text-sm font-medium text-black">
          <li>
            <a href="#home" className="hover:text-gray-500">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-500">About me</a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-500">Services</a>
          </li>
          <li>
            <a href="#work" className="hover:text-gray-500">My Work</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-500">Contact me</a>
          </li>
        </ul>

        {/* RIGHT - Contact Button (Desktop) + Mobile Icons */}
        <div className="flex items-center gap-4">
          {/* Contact Link - Desktop only */}
          <a
            href="#contact"
            className="hidden md:block text-sm font-medium text-black"
          >
            Contact <span className="text-blue-500">↗</span>
          </a>

          {/* Moon Icon - Mobile */}
          <button className="md:hidden p-2" aria-label="Toggle theme">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>

          {/* Hamburger Menu - Mobile */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm font-medium text-black">
            <li>
              <a
                href="#home"
                className="block py-2 hover:text-gray-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 hover:text-gray-500"
                onClick={() => setIsMenuOpen(false)}
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block py-2 hover:text-gray-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="block py-2 hover:text-gray-500"
                onClick={() => setIsMenuOpen(false)}
              >
                My Work
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 hover:text-gray-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar