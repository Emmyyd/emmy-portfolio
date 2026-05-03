import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    
    <>
    <nav className="w-full fixed top-0 left-0 bg-white z-50 border-b border-gray-200">
      
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* LEFT */}
        <h1 className="text-xl font-semibold text-black">
          Emmy<span className="text-red-500">.</span>
        </h1>

        {/* CENTER */}
        <ul className="flex gap-10 text-sm font-medium text-black bg-white shadow-sm bg-opacity-50">
          <li><a href="#home" className="hover:text-gray-500">Home</a></li>
          <li><a href="#about" className="hover:text-gray-500">About me</a></li>
          <li><a href="#services" className="hover:text-gray-500">Services</a></li>
          <li><a href="#work" className="hover:text-gray-500">My Work</a></li>
          <li><a href="#contact" className="hover:text-gray-500">Contact me</a></li>
        </ul>
        

        {/* RIGHT */}
        <a href="#contact" className="text-sm font-medium text-black">
          Contact ↗
        </a>

      </div>
    </nav>
    </>
  );
};

export default Navbar;