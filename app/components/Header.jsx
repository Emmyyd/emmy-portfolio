import { motion } from "motion/react"
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
  <section className="pt-20 sm:pt-28 md:pt-36 px-4 flex flex-col items-center text-center">

     <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden flex items-center justify-center">
  <Image
    src="/image2.jpeg"
    alt="profile"
    fill
    className="object-cover"
  />
</div>
      {/* NAME */}
      <p className="text-gray-600 mb-4 text-lg">
        Hi! I'm Emmanuel 👋
      </p>

      {/* BIG HEADING */}
     <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight max-w-2xl">
        frontend web developer based in Nigeria.
      </h1>

      {/* DESCRIPTION */}
     <p className="text-gray-600 text-sm sm:text-base max-w-xl">
        I am a frontend developer passionate about building clean and modern websites.
      </p>

      {/* BUTTONS */}
     <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
        <a className="px-6 py-3 bg-black text-white rounded-full text-sm hover:opacity-80 transition">
          contact me →
        </a>

        <a className="px-6 py-3 border rounded-full text-sm hover:bg-gray-100 transition">
          my resume ↓
        </a>
      </div>

    </section>
  );
}

export default Header;