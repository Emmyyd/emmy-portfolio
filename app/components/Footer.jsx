import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-16 bg-gray-50 mt-20">
      
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* NAME */}
        <h2 className="text-2xl font-semibold">
          Emmy<span className="text-red-500">.</span>
        </h2>

        {/* EMAIL */}
        <div className="flex items-center justify-center gap-2 mt-3 text-gray-600">
          <span>📧</span>
          <p>doramycaa@gmail.c</p>
        </div>

        {/* LINE */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* BOTTOM TEXT */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 gap-4">
          
          <p>© 2025 Emmy. All rights reserved.</p>

          <div className="flex gap-6">
            <p className="hover:text-black cursor-pointer">Terms of Services</p>
            <p className="hover:text-black cursor-pointer">Privacy Policy</p>
            <p className="hover:text-black cursor-pointer">Connect with me</p>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;