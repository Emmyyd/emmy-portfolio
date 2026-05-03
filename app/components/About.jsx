import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="w-full px-[12%] py-20 scroll-mt-24"
    >
      {/* TITLE */}
      <div className="text-center mb-12">
        <h4 className="text-sm text-gray-500">Introduction</h4>
        <h2 className="text-3xl sm:text-4xl font-semibold mt-2">
          About me
        </h2>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* IMAGE */}
        <div className="w-64 h-64 relative rounded-2xl overflow-hidden">
          <Image
            src="/image3.jpeg"
            alt="profile"
            fill
            className="object-cover"
          />
        </div>

        {/* TEXT */}
        <div className="flex-1">
          <p className="text-gray-600 leading-relaxed mb-8">
            I am a frontend developer passionate about building clean and
            modern websites. I enjoy creating user-friendly interfaces and
            bringing ideas to life using code.
          </p>

          {/* CARDS */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">

  {/* CARD 1 */}
  <div className="border border-gray-200 rounded-xl p-6 text-center 
                  shadow-sm transition-all duration-300 
                  hover:shadow-lg hover:-translate-y-1 
                  hover:bg-purple-50 hover:border-purple-200 
                  hover:scale-[1.02] cursor-pointer">

    <h3 className="font-semibold mb-2">Languages</h3>

    <p className="text-sm text-gray-500">
      HTML, CSS, JavaScript, React, Next.js
    </p>

  </div>

  {/* CARD 2 */}
  <div className="border border-gray-200 rounded-xl p-6 text-center 
                  shadow-sm transition-all duration-300 
                  hover:shadow-lg hover:-translate-y-1 
                  hover:bg-purple-50 hover:border-purple-200 
                  hover:scale-[1.02] cursor-pointer">

    <h3 className="font-semibold mb-2">Education</h3>

    <p className="text-sm text-gray-500">
      Your school / course here
    </p>

  </div>

  {/* CARD 3 */}
  <div className="border border-gray-200 rounded-xl p-6 text-center 
                  shadow-sm transition-all duration-300 
                  hover:shadow-lg hover:-translate-y-1 
                  hover:bg-purple-50 hover:border-purple-200 
                  hover:scale-[1.02] cursor-pointer">

    <h3 className="font-semibold mb-2">Projects</h3>

    <p className="text-sm text-gray-500">
      Built multiple projects
    </p>

  </div>

  

</div>
        </div>
      </div>
    </section>
  );
}