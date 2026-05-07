"use client"

import Image from "next/image"

function About() {
  return (
    <section
      id="about"
      className="w-full px-[12%] py-20 scroll-mt-24 bg-gray-50"
    >
      {/* TITLE */}
      <h4 className="text-center mb-12">
        <span className="text-sm text-gray-500">Introduction</span>
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mt-2">
          About me
        </h2>
      </h4>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* IMAGE */}
        <div className="w-64 h-64 relative rounded-2xl overflow-hidden">
          <Image
            src="/image3.jpeg"
            alt="about"
            fill
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="flex-1">
          <p className="text-gray-600 mb-8">
            I am a frontend developer passionate about building clean and modern websites. I enjoy creating user-friendly interfaces and bringing ideas to life using code.
          </p>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="border rounded-xl p-6 text-center bg-white">
              <h3 className="font-semibold mb-2">Languages</h3>
              <p className="text-sm text-gray-500">
                HTML, CSS, JavaScript, React, Next.js
              </p>
            </div>
            <div className="border rounded-xl p-6 text-center bg-white">
              <h3 className="font-semibold mb-2">Education</h3>
              <p className="text-sm text-gray-500">
                Your school / course here
              </p>
            </div>
            <div className="border rounded-xl p-6 text-center bg-white">
              <h3 className="font-semibold mb-2">Projects</h3>
              <p className="text-sm text-gray-500">
                Built multiple projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About