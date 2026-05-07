"use client"

import Image from "next/image"

function Header() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 pt-28"
    >
      {/* PROFILE IMAGE */}
      <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-32 md:h-32 rounded-full overflow-hidden mb-4">
        <Image
          src="/image2.jpeg"
          alt="profile"
          width={128}
          height={128}
          className="object-cover w-full h-full"
        />
      </div>

      {/* SMALL TEXT */}
      <p className="text-gray-500 mb-3 text-lg">
        Hi! I&apos;m Emmanuel 👋
      </p>

      {/* BIG HEADING */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight max-w-xl mt-4">
        frontend web developer based in Nigeria.
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-600 text-sm sm:text-base max-w-xl mt-4">
        I am a frontend developer passionate about building clean and modern websites.
      </p>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        {/* PRIMARY */}
        <a
          href="#contact"
          className="px-6 py-3 bg-black text-white rounded-full text-sm hover:opacity-80 transition"
        >
          contact me →
        </a>
        {/* SECONDARY */}
        <a
          href="#"
          className="px-6 py-3 border border-gray-300 rounded-full text-sm hover:bg-gray-100 transition"
        >
          my resume ↓
        </a>
      </div>
    </section>
  )
}

export default Header